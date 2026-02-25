# Tail Mode GIF Frame Capture
# Captures SpeedPad tail mode in action: new lines appearing in real-time
# Outputs: individual PNG frames + animated GIF

param(
    [string]$SpeedPadExe = "C:\aid\team1\gh-coop\releases\v2.48.0\SpeedPad.exe",
    [string]$OutputDir = "C:\aid\team1\gh-coop\webdev-sources\public\screenshots\tail-frames",
    [int]$FrameCount = 8,
    [int]$FrameDelayMs = 800
)

Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Windows.Forms

Add-Type @"
using System;
using System.Runtime.InteropServices;
public class Win32Gif {
    [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr hWnd, out RECT r);
    [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
    [StructLayout(LayoutKind.Sequential)] public struct RECT { public int L, T, R, B; }
}
"@

# Create output directory
New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null

# Create a growing log file
$tempLog = "$OutputDir\growing-log.txt"
$initialLines = @(
    "2026-02-25 08:30:00.000 [INFO]  === Service starting on port 8080 ===",
    "2026-02-25 08:30:00.123 [INFO]  Database connection pool initialized",
    "2026-02-25 08:30:00.456 [INFO]  Loading 23 middleware plugins...",
    "2026-02-25 08:30:01.000 [INFO]  Server ready. Accepting connections."
)
$initialLines | Out-File $tempLog -Encoding UTF8

# Launch SpeedPad with tail mode
$proc = Start-Process -FilePath $SpeedPadExe -ArgumentList "-t `"$tempLog`"" -PassThru
Start-Sleep -Seconds 2

$hwnd = $proc.MainWindowHandle
[Win32Gif]::SetForegroundWindow($hwnd) | Out-Null

# New lines to append (simulating live log activity)
$newLines = @(
    "2026-02-25 08:30:05.789 [INFO]  GET /api/health -> 200 (2ms)",
    "2026-02-25 08:30:08.012 [WARN]  Rate limit approaching: 45/50 requests",
    "2026-02-25 08:30:10.345 [ERROR] POST /api/orders -> 500 Internal Server Error",
    "2026-02-25 08:30:10.567 [ERROR] NullPointerException: Order.getCustomerId()",
    "2026-02-25 08:30:12.890 [INFO]  Failover: switching to backup database",
    "2026-02-25 08:30:15.123 [WARN]  Memory usage at 78% - threshold is 85%",
    "2026-02-25 08:30:18.456 [INFO]  Cache hit for user-profile-admin (TTL: 1200s)",
    "2026-02-25 08:30:20.789 [DEBUG] WebSocket: client-ws-001 connected"
)

$frames = @()
for ($i = 0; $i -lt $FrameCount; $i++) {
    # Append a new line
    if ($i -lt $newLines.Count) {
        $newLines[$i] | Out-File $tempLog -Append -Encoding UTF8
    }
    
    Start-Sleep -Milliseconds $FrameDelayMs
    
    # Capture frame
    [Win32Gif]::SetForegroundWindow($hwnd) | Out-Null
    Start-Sleep -Milliseconds 200
    
    $rect = New-Object Win32Gif+RECT
    [Win32Gif]::GetWindowRect($hwnd, [ref]$rect) | Out-Null
    $w = $rect.R - $rect.L; $h = $rect.B - $rect.T
    
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $gfx = [System.Drawing.Graphics]::FromImage($bmp)
    $gfx.CopyFromScreen($rect.L, $rect.T, 0, 0, [System.Drawing.Size]::new($w, $h))
    $gfx.Dispose()
    
    $framePath = Join-Path $OutputDir "frame-$($i.ToString('D3')).png"
    $bmp.Save($framePath, [System.Drawing.Imaging.ImageFormat]::Png)
    $frames += $framePath
    $bmp.Dispose()
    
    Write-Host "Frame $($i+1)/$FrameCount captured: $framePath"
}

# Close SpeedPad
$proc.CloseMainWindow() | Out-Null
Start-Sleep -Milliseconds 500
if (-not $proc.HasExited) { $proc.Kill() }

# Clean up temp log
Remove-Item $tempLog -ErrorAction SilentlyContinue

Write-Host "`nCaptured $($frames.Count) frames in $OutputDir"
Write-Host "To create animated GIF, use: convert the PNG sequence (ffmpeg or GIF encoder needed)"
