"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const releases = [
  {
    version: "v2.64.0",
    date: "2026-02-26",
    latest: true,
    highlights: [
      "SpeedHexPad.exe standalone binary — dual-product architecture",
      "559 binary artifacts removed from Git tracking",
      `${EXE_SIZE} EXE, ${TEST_COUNT}/${TEST_COUNT} tests passing`,
    ],
  },
  {
    version: "v2.63.0",
    date: "2026-02-26",
    latest: false,
    highlights: [
      "SpeedHexPad hex editing with endianness toggle",
      "F64 Binary Inspector enhancements, column selection polish",
      "350 tests passing",
    ],
  },
  {
    version: "v2.61.0",
    date: "2026-02-26",
    latest: false,
    highlights: [
      "F64 Binary Inspector, Column/Block Selection, hex search + goto",
      "311 tests passing",
    ],
  },
  {
    version: "v2.60.0",
    date: "2026-02-26",
    latest: true,
    highlights: [
      "SpeedHexPad hex editor scaffold (Ctrl+Alt+H)",
      "F66 Ant Kings card branding, Snake game DLL",
      `${EXE_SIZE} EXE, ${TEST_COUNT}/${TEST_COUNT} tests passing`,
    ],
  },
  {
    version: "v2.59.0",
    date: "2026-02-26",
    latest: false,
    highlights: [
      "B207 CRITICAL: Command injection fix, B208 integer overflow",
      "297 tests passing",
    ],
  },
  {
    version: "v2.58.0",
    date: "2026-02-26",
    latest: false,
    highlights: [
      "Arkanoid game DLL, D3D renderer polish, 265 tests",
    ],
  },
  {
    version: "v2.57.0",
    date: "2026-02-26",
    latest: false,
    highlights: [
      "B200 CRITICAL: Correlation UAF + data race fix",
      "53× buffer overflow hardening (swprintf_s → _snwprintf_s)",
      "259 tests passing",
    ],
  },
  {
    version: "v2.56.0",
    date: "2026-02-26",
    latest: false,
    highlights: [
      "D3D Phase 2-3: Runtime D2D toggle (Ctrl+Alt+D) + GDI/D2D benchmark",
      "258 tests passing",
    ],
  },
  {
    version: "v2.55.0",
    date: "2026-02-26",
    latest: false,
    highlights: [
      "S-012 Code Signing, D3D Phase 1, full security audit (80+ files)",
      "257 tests passing",
    ],
  },
  {
    version: "v2.54.0",
    date: "2026-02-26",
    latest: false,
    highlights: [
      "MIA-01 Navigate menu, S-010 lens DLL integrity, 6 bug fixes",
      "253 tests passing",
    ],
  },
  {
    version: "v2.53.0",
    date: "2026-02-25",
    latest: false,
    highlights: [
      "S-007: Command-injection hardening, B190: Dialog centering",
      "246 tests passing",
    ],
  },
  {
    version: "v2.52.0",
    date: "2026-02-25",
    latest: false,
    highlights: [
      "B182: Sparse index bug fixes, P-009: Renderer performance",
      "240 tests passing",
    ],
  },
  {
    version: "v2.51.0",
    date: "2026-02-25",
    latest: false,
    highlights: [
      "B181: Lens redirect stale state fix (encoding, piece table, edit buffer)",
      "235 tests passing",
    ],
  },
  {
    version: "v2.50.0",
    date: "2026-02-25",
    latest: false,
    highlights: [
      "B180: Auto-reload fix (UI tail-switch hang)",
      "F60 Tier 3b: Pattern export and save",
      "230 tests passing",
    ],
  },
  {
    version: "v2.48.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F60 Tier 2b: Visual correlation timeline, enhanced cross-file linking",
      "220 tests passing",
    ],
  },
  {
    version: "v2.47.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F60 Tier 2: Per-document timestamp storage, pointer safety (S006)",
      "758KB EXE, 215/215 tests passing",
    ],
  },
  {
    version: "v2.46.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F60 Log Correlation Engine: cross-file timestamp sync, timeline window, ⛓ indicator",
      "F63 Performance Dashboard, B178 tail mode fix",
    ],
  },
  {
    version: "v2.44.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F61 Timestamp Intelligence Phase 2: time range summary, busiest minute, largest gap",
      "200 test suite milestone — Ctrl+Shift+R for range summary",
    ],
  },
  {
    version: "v2.41.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F63 Performance Dashboard: real-time file open time, search speed, memory usage in status bar",
    ],
  },
  {
    version: "v2.39.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "PE VERSIONINFO resource for Windows Defender compatibility",
      "736KB EXE, 180 test suites",
    ],
  },
  {
    version: "v2.35.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F22 Minimap + F23 Multi-Cursors officially CEO-approved",
      "F65 Reverse Tail Polish: Ctrl+Alt+V combined toggle, --reverse-tail CLI flag",
      "736KB EXE, 160 test suites",
    ],
  },
  {
    version: "v2.30.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "Release #50 milestone — 50 releases, still under 750KB",
      "~711KB EXE, 148 test suites",
    ],
  },
  {
    version: "v2.28.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F37 File Archaeology: one-click metadata inspector (path, size, dates, hashes)",
      "Clipboard extraction for sharing file info",
    ],
  },
  {
    version: "v2.27.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F34 Ultra-Minimal Notifications: status bar color dots (no popups ever)",
      "First-Byte-Set bitmap optimization for regex",
    ],
  },
  {
    version: "v2.23.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "Bug Blitz: B168/B169 multi-cursor accuracy, B173-B175 CLI validation hardening",
      "S003 command injection security fix, 706KB EXE",
    ],
  },
  {
    version: "v2.21.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "Multi-Cursor Phase 2: column/box select, per-cursor paste, multi-cursor Find+Replace",
      "CLI extensions: --readonly, --pipe, --column N",
    ],
  },
  {
    version: "v2.20.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "Multi-Cursor Phase 1: Ctrl+D select next, Ctrl+Alt+Up/Down add cursors",
      "CLI arguments: --line N, --goto N, --new, --encoding",
    ],
  },
  {
    version: "v2.17.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F36 Typing Challenge: interactive WPM/accuracy test",
      "TinyRegex NFA engine replaces std::wregex",
    ],
  },
  {
    version: "v2.14.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F39 Multi-Log Complete (12/12 ACs): compressed .gz/.bz2/.zst + cross-file search",
    ],
  },
  {
    version: "v2.11.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F17: Cake Slice Navigator, F39: Phase 1 Rotation Detection",
      "55 tests passing, 816KB EXE",
    ],
  },
  {
    version: "v2.8.0",
    date: "2026-02-21",
    latest: false,
    highlights: [
      "First release: Cross-File Search, Anomaly Detection, Diff View",
    ],
  },
];

/* ───── centralized download config ───── */
import { CURRENT_VERSION, GITHUB_RELEASES, EXE_SIZE, EXE_SIZE_SPACED, TEST_COUNT, DOWNLOAD_EXE, DOWNLOAD_ZIP, SPEEDHEXPAD_ZIP } from "@/lib/product-config";

export default function DownloadPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 4, textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, mb: 2 }}>
          Download
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 550, mx: "auto", mb: 4 }}>
          Two products. Same engine. Both under 1MB, zero dependencies. Just extract and run.
        </Typography>

        {/* Dual Product Cards */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 4, maxWidth: 700, mx: "auto" }}>
          {/* SpeedPad */}
          <Paper elevation={0} sx={{ p: 3, border: "1px solid rgba(33,150,243,0.3)", borderRadius: 2, bgcolor: "rgba(33,150,243,0.04)" }}>
            <Chip label="Text Editor" size="small" color="primary" sx={{ mb: 1.5 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: "#64B5F6" }}>SpeedPad.exe</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The fastest Windows text editor. Opens 100GB+ logs, hex mode via Ctrl+Alt+H, {EXE_SIZE}.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
              <Button variant="contained" size="small" startIcon={<DownloadIcon />} href={DOWNLOAD_EXE} target="_blank" rel="noopener">
                EXE
              </Button>
              <Button variant="outlined" size="small" startIcon={<DownloadIcon />} href={DOWNLOAD_ZIP} target="_blank" rel="noopener">
                ZIP
              </Button>
            </Box>
          </Paper>

          {/* SpeedHexPad */}
          <Paper elevation={0} sx={{ p: 3, border: "1px solid rgba(76,175,80,0.3)", borderRadius: 2, bgcolor: "rgba(76,175,80,0.04)" }}>
            <Chip label="Hex Editor" size="small" sx={{ mb: 1.5, bgcolor: "rgba(76,175,80,0.2)", color: "#66BB6A" }} />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: "#66BB6A" }}>SpeedHexPad.exe</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Standalone hex editor. Structure templates, data bookmarks, binary inspector. Under 1MB.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
              <Button variant="contained" size="small" startIcon={<DownloadIcon />} sx={{ bgcolor: "#4CAF50", "&:hover": { bgcolor: "#388E3C" } }} href={SPEEDHEXPAD_ZIP} target="_blank" rel="noopener">
                ZIP
              </Button>
            </Box>
          </Paper>
        </Box>

        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 1 }}>
          {CURRENT_VERSION} · Primary downloads hosted on IT Ant infrastructure.
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          <a href={GITHUB_RELEASES} target="_blank" rel="noopener" style={{ color: "#64B5F6" }}>
            GitHub releases
          </a>{" "}
          (may require repository access)
        </Typography>
      </Container>

      {/* Latest 3 Releases */}
      <Container maxWidth="md" sx={{ pb: 4 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
          {[
            { v: CURRENT_VERSION, label: "Latest", summary: "SpeedHexPad.exe standalone, 405 tests, dual-product architecture", color: "primary" as const },
            { v: "v2.63.0", label: "Stable", summary: "Structure templates, data bookmarks, 393 tests", color: "secondary" as const },
            { v: "v2.62.0", label: "Stable", summary: "SpeedHexPad hex editing, endianness toggle, 350 tests", color: "default" as const },
          ].map((r) => (
            <Card key={r.v} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.03)", border: r.color === "primary" ? "1px solid rgba(33,150,243,0.3)" : "1px solid rgba(255,255,255,0.06)" }}>
              <CardContent sx={{ p: 2.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <Typography variant="h6" fontWeight={700}>{r.v}</Typography>
                  <Chip label={r.label} size="small" color={r.color} variant={r.color === "primary" ? "filled" : "outlined"} />
                </Box>
                <Typography variant="body2" color="text.secondary">{r.summary}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* System Requirements */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 3, textAlign: "center" }}>
            System Requirements
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table>
              <TableBody>
                {[
                  { label: "Operating System", value: "Windows 10 (1809+) or Windows 11" },
                  { label: "Architecture", value: "x64" },
                  { label: "EXE Size", value: `${EXE_SIZE_SPACED} (core editor)` },
                  { label: "Lens Plugins", value: "120–171 KB each (optional, 6 total)" },
                  { label: "Memory", value: "< 100 MB for 4GB files" },
                  { label: "Dependencies", value: "None — pure Win32, zero external dependencies" },
                  { label: "Install", value: "Portable — no installer needed. Extract and run." },
                ].map((row) => (
                  <TableRow key={row.label} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                    <TableCell sx={{ fontWeight: 600, width: "35%" }}>{row.label}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Installation */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 3, textAlign: "center" }}>
          Installation
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
          {[
            { step: "1", title: "Download", desc: "Grab the latest .exe or .zip from above." },
            { step: "2", title: "Extract", desc: "Place SpeedPad.exe in any folder (e.g., C:\\Tools\\SpeedPad\\)." },
            { step: "3", title: "Run", desc: "Double-click SpeedPad.exe. That's it — no installer needed." },
          ].map((s) => (
            <Box key={s.step} sx={{ textAlign: "center", p: 3, borderRadius: 2, bgcolor: "background.paper", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Typography variant="h2" color="primary.main" sx={{ fontSize: "2.5rem", mb: 1 }}>
                {s.step}
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {s.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {s.desc}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 3, p: 2, borderRadius: 2, bgcolor: "rgba(33, 150, 243, 0.08)", border: "1px solid rgba(33, 150, 243, 0.2)" }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Optional:</strong> Add SpeedPad to your PATH for terminal access:{" "}
            <code style={{ color: "#64B5F6" }}>
              [Environment]::SetEnvironmentVariable(&quot;Path&quot;, $env:Path + &quot;;C:\Tools\SpeedPad&quot;, &quot;User&quot;)
            </code>
          </Typography>
        </Box>
      </Container>

      {/* Release History */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 4, textAlign: "center" }}>
            Release History
          </Typography>
          {releases.map((r) => (
            <Card
              key={r.version}
              elevation={0}
              sx={{
                mb: 2,
                bgcolor: "rgba(255,255,255,0.02)",
                border: r.latest ? "1px solid rgba(33, 150, 243, 0.3)" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <Typography variant="h5" fontWeight={700}>
                    {r.version}
                  </Typography>
                  <Chip label={r.date} size="small" variant="outlined" />
                  {r.latest && <Chip label="Latest" size="small" color="primary" />}
                </Box>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {r.highlights.map((h, i) => (
                    <Typography component="li" variant="body2" color="text.secondary" key={i} sx={{ mb: 0.5 }}>
                      {h}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Box>

      {/* After Download */}
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
            Downloaded? Get started in under a minute.
          </Typography>
          <Button variant="outlined" href="/getting-started" sx={{ borderColor: "#00BCD4", color: "#00BCD4" }}>
            Quick Start Guide →
          </Button>
        </Container>
      </Box>

      {/* Security Trust */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={0} sx={{ p: 3, bgcolor: "rgba(33,150,243,0.04)", border: "1px solid rgba(33,150,243,0.12)", borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>🔒 Security Posture</Typography>
          {[
            "Authenticode code-signed EXE and DLLs (S-012) — verifiable publisher identity",
            "Memory-safe C++17 with RAII — no raw allocations in application code",
            `${TEST_COUNT} automated test suites — every bug fix ships with a regression test`,
            "53× buffer overflow hardening — swprintf_s → _snwprintf_s migration",
            "Release verification: full ctest pass required before every deployment",
            "80+ file security audit with zero critical issues remaining",
            "Lens DLL integrity validation via PE header checksum (S-010)",
          ].map((item, i) => (
            <Typography key={i} variant="body2" color="text.secondary" sx={{ pl: 2, mb: 0.5 }}>• {item}</Typography>
          ))}
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}
