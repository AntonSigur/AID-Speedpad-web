<#
.SYNOPSIS
  SpeedPad Screenshot Capture Tool
  Launches SpeedPad with a sample log file, waits for the window, and captures a screenshot.

.DESCRIPTION
  Part of the SpeedPad website build pipeline. Run after every release to regenerate
  screenshots for the marketing website.

.NOTES
  Requires: SpeedPad.exe, PowerShell 5+
  Output: public/screenshots/*.png
#>

param(
    [string]$SpeedPadExe = "C:\aid\team1\gh-coop\releases\v2.48.0\SpeedPad.exe",
    [string]$SampleLog = "$PSScriptRoot\sample-log.txt",
    [string]$OutputDir = "$PSScriptRoot\..\public\screenshots",
    [int]$WaitMs = 3000
)

# Ensure output directory exists
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

# Verify SpeedPad exists
if (-not (Test-Path $SpeedPadExe)) {
    Write-Error "SpeedPad.exe not found at: $SpeedPadExe"
    exit 1
}

# Verify sample log exists
if (-not (Test-Path $SampleLog)) {
    Write-Error "Sample log not found at: $SampleLog"
    exit 1
}

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

function Capture-Window {
    param(
        [System.Diagnostics.Process]$Process,
        [string]$OutputPath
    )

    Add-Type @"
    using System;
    using System.Runtime.InteropServices;
    public class Win32Window {
        [DllImport("user32.dll")]
        public static extern bool GetWindowRect(IntPtr hWnd, out RECT lpRect);

        [DllImport("user32.dll")]
        public static extern bool SetForegroundWindow(IntPtr hWnd);

        [DllImport("user32.dll")]
        public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);

        [StructLayout(LayoutKind.Sequential)]
        public struct RECT {
            public int Left, Top, Right, Bottom;
        }
    }
"@

    $hwnd = $Process.MainWindowHandle
    if ($hwnd -eq [IntPtr]::Zero) {
        Write-Warning "No window handle found. Waiting..."
        Start-Sleep -Seconds 2
        $Process.Refresh()
        $hwnd = $Process.MainWindowHandle
    }

    if ($hwnd -eq [IntPtr]::Zero) {
        Write-Error "Could not get window handle for SpeedPad"
        return $false
    }

    # Bring window to front
    [Win32Window]::ShowWindow($hwnd, 9) | Out-Null  # SW_RESTORE
    [Win32Window]::SetForegroundWindow($hwnd) | Out-Null
    Start-Sleep -Milliseconds 500

    # Get window bounds
    $rect = New-Object Win32Window+RECT
    [Win32Window]::GetWindowRect($hwnd, [ref]$rect) | Out-Null

    $width = $rect.Right - $rect.Left
    $height = $rect.Bottom - $rect.Top

    if ($width -le 0 -or $height -le 0) {
        Write-Error "Invalid window dimensions: ${width}x${height}"
        return $false
    }

    # Capture
    $bitmap = New-Object System.Drawing.Bitmap($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.CopyFromScreen($rect.Left, $rect.Top, 0, 0, [System.Drawing.Size]::new($width, $height))
    $graphics.Dispose()

    $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bitmap.Dispose()

    Write-Host "Screenshot saved: $OutputPath (${width}x${height})"
    return $true
}

# --- Main ---
Write-Host "=== SpeedPad Screenshot Capture ==="
Write-Host "EXE: $SpeedPadExe"
Write-Host "Log: $SampleLog"
Write-Host "Output: $OutputDir"
Write-Host ""

# Launch SpeedPad with sample log
Write-Host "Launching SpeedPad..."
$proc = Start-Process -FilePath $SpeedPadExe -ArgumentList "`"$SampleLog`"" -PassThru

# Wait for window to appear
Write-Host "Waiting ${WaitMs}ms for window..."
Start-Sleep -Milliseconds $WaitMs

# Capture screenshot
$timestamp = Get-Date -Format "yyyyMMdd"
$outPath = Join-Path $OutputDir "speedpad-log-view-$timestamp.png"

$success = Capture-Window -Process $proc -OutputPath $outPath

# Clean up: close SpeedPad
if ($proc -and -not $proc.HasExited) {
    $proc.CloseMainWindow() | Out-Null
    Start-Sleep -Milliseconds 500
    if (-not $proc.HasExited) {
        $proc.Kill()
    }
}

if ($success) {
    Write-Host ""
    Write-Host "=== Screenshot capture complete ==="
    Write-Host "File: $outPath"
    Write-Host "Size: $((Get-Item $outPath).Length) bytes"
} else {
    Write-Host ""
    Write-Host "=== Screenshot capture FAILED ==="
    exit 1
}
