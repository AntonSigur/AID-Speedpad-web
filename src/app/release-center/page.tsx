"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { Download as DownloadIcon, NewReleases as NewReleasesIcon } from "@mui/icons-material";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CURRENT_VERSION,
  EXE_SIZE,
  DOWNLOAD_EXE,
  DOWNLOAD_ZIP,
  GITHUB_RELEASES,
  RELEASE_NUMBER,
} from "@/lib/product-config";

/* ───── Release data ───── */
const releases = [
  {
    version: "v2.65.0",
    release: 85,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 404,
    highlights: [
      "SpeedHexPad.exe ships as standalone binary — dual-product architecture",
      "speedpad_core.lib shared library between SpeedPad.exe and SpeedHexPad.exe",
      "559 binary artifacts removed from Git tracking",
      "Test suite expanded to 404 — 400 milestone!",
      "53 consecutive sprint deliveries",
    ],
    milestone: "SpeedHexPad.exe Standalone Split",
  },
  {
    version: "v2.63.0",
    release: 84,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 393,
    highlights: [
      "Structure templates — JSON-based binary format overlays (PE, ELF, PNG, ZIP headers)",
      "Data bookmarks — toggle, navigate, and serialize hex position bookmarks",
      "Structure panel with field names, types, values, cursor-follows-field",
      "UX audit — Ctrl+Alt+H conflict fix, mnemonics, shortcuts reference",
      "393 test suites passing",
    ],
    milestone: "Structure Templates & Data Bookmarks",
  },
  {
    version: "v2.62.0",
    release: 83,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 350,
    highlights: [
      "SpeedHexPad hex editing — overwrite, insert, delete bytes with full PieceTable undo/redo",
      "Endianness toggle — switch between little-endian and big-endian byte interpretation",
      "F64 Binary Inspector enhancements with string decoding",
      "Column/Block Selection polish",
      "350 test suites passing",
    ],
    milestone: "SpeedHexPad Hex Editing",
  },
  {
    version: "v2.61.0",
    release: 82,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 311,
    highlights: [
      "F64 Binary Inspector — int8/16/32/64, float32, float64, string interpretation in hex view",
      "Column/Block Selection — Alt+Drag + Alt+Shift+Arrow rectangular selection",
      "SpeedHexPad Search (Ctrl+F) + Goto Offset (Ctrl+G)",
      "B211: Dialog centering via CBT hook (68 calls across 27 files)",
      "311 test suites passing",
    ],
    milestone: "Binary Inspector & Column Selection",
  },
  {
    version: "v2.60.0",
    release: 81,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 306,
    highlights: [
      "SpeedHexPad scaffold — Ctrl+Alt+H opens hex editor view mode (new product category)",
      "F66 Ant Kings card branding — custom king card faces for Solitaire",
      "Snake game DLL — 🐍 built-in arcade game (Ctrl+Shift+F10)",
      "B211: Dialog centering fix — all message boxes center on parent window",
      "306 test suites passing (305 active)",
    ],
    milestone: "SpeedHexPad & Ant Kings",
  },
  {
    version: "v2.59.0",
    release: 80,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 297,
    highlights: [
      "B207 CRITICAL: Command injection vulnerability fix",
      "B208 HIGH: Integer overflow fix in file size calculations",
      "Snake game DLL — built-in arcade easter egg",
      "297 test suites passing",
    ],
    milestone: "Critical Security Fixes",
  },
  {
    version: "v2.58.0",
    release: 79,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 265,
    highlights: [
      "Arkanoid game DLL — built-in arcade game loaded on demand",
      "D2D renderer polish and final stabilization",
      "Test coverage surge: Arkanoid lifecycle, correlation edge cases, thread safety",
      "265 test suites passing",
    ],
    milestone: "Games & Test Coverage Surge",
  },
  {
    version: "v2.57.0",
    release: 78,
    date: "2026-02-26",
    size: "870 KiB (891,000 bytes)",
    tests: 259,
    highlights: [
      "B200 CRITICAL: Correlation mode use-after-free + data race fix",
      "53× buffer overflow hardening (swprintf_s → _snwprintf_s migration)",
      "B189: Bookmark edge-case fix, B203: Tail-mode stability",
      "259 test suites passing",
    ],
    milestone: "Critical Stability & Overflow Hardening",
  },
  {
    version: "v2.56.0",
    release: 77,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 258,
    highlights: [
      "D3D Phase 2: Runtime renderer toggle (Ctrl+Alt+D)",
      "D3D Phase 3: GDI vs D2D real-time benchmark comparison",
      "258 test suites passing",
    ],
    milestone: "Direct2D Runtime Toggle & Benchmark",
  },
  {
    version: "v2.55.0",
    release: 76,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 257,
    highlights: [
      "S-012: Code signing — Authenticode signatures on EXE + DLLs",
      "D3D Phase 1: Direct2D hardware-accelerated renderer foundation",
      "S-013/S-014: Additional security hardening across 80+ files",
      "B202/B204/B206: Three bug fixes (render, bookmark, tail)",
      "257 test suites passing",
    ],
    milestone: "Code Signing & Direct2D Foundation",
  },
  {
    version: "v2.54.0",
    release: 75,
    date: "2026-02-26",
    size: "843 KiB (863,232 bytes)",
    tests: 253,
    highlights: [
      "MIA-01: Navigate menu item — centralized toolbar access point",
      "S-010: Lens DLL integrity validation via PE header checks",
      "F66: Solitaire card-game refresh logic",
      "B198/B199: Hang fix during rapid reloads + lens state restoration",
      "253 test suites passing",
    ],
    milestone: "Navigation & DLL Integrity",
  },
  {
    version: "v2.53.0",
    release: 74,
    date: "2026-02-25",
    size: "843 KiB (863,232 bytes)",
    tests: 246,
    highlights: [
      "S-007: Command-injection hardening — CreateProcessW replaces shell decompression",
      "B190: Dialog centering migration across 6 dialogs",
      "5 new test suites (S-007 process spawn + B190 centering)",
      "246 test suites passing",
    ],
    milestone: "Security Hardening & UX Polish",
  },
  {
    version: "v2.52.0",
    release: 73,
    date: "2026-02-25",
    size: "841 KiB (861,184 bytes)",
    tests: 240,
    highlights: [
      "B182: Sparse index interpolation bounds + divide-by-zero guard",
      "P-009: Renderer brush caching + dx buffer reuse",
      "5 new test suites (sparse index + renderer)",
      "240 test suites passing",
    ],
    milestone: "Index Precision & Renderer Performance",
  },
  {
    version: "v2.51.0",
    release: 72,
    date: "2026-02-25",
    size: "840 KiB (860,672 bytes)",
    tests: 235,
    highlights: [
      "B181: Lens redirect stale state fix",
      "Encoding, piece table, edit buffer re-init after lens redirect",
      "5 new lens redirect test suites",
      "235 test suites passing",
    ],
    milestone: "Lens Stability",
  },
  {
    version: "v2.50.0",
    release: 71,
    date: "2026-02-25",
    size: "840 KiB (859,648 bytes)",
    tests: 230,
    highlights: [
      "B180: Auto-reload fix (UI tail-switch hang)",
      "F60 Tier 3b: Pattern export and save",
      "230 test suites passing",
    ],
    milestone: "Pattern Export & Stability",
  },
  {
    version: "v2.48.0",
    release: 69,
    date: "2026-02-24",
    size: "758 KiB (776,192 bytes)",
    tests: 220,
    highlights: [
      "F60 Tier 2b: Visual correlation timeline across files",
      "Enhanced cross-file linking and navigation",
      "220 test suites passing",
    ],
    milestone: "Visual Timeline & Refinement",
  },
  {
    version: "v2.47.0",
    release: 68,
    date: "2026-02-24",
    size: "758KB",
    tests: 215,
    highlights: [
      "F60 Tier 2: Per-document timestamp storage",
      "B178: Tail mode follows live appends correctly",
      "S006: Correlation engine pointer safety",
    ],
    milestone: "Hardening & Optimization",
  },
  {
    version: "v2.46.0",
    release: 67,
    date: "2026-02-24",
    size: "828KB",
    tests: 210,
    highlights: [
      "F60 Log Correlation Engine: cross-file timestamp sync",
      "F63 Performance Dashboard: real-time metrics in status bar",
      "F61 Timestamp Intelligence: auto-detect formats, relative times",
    ],
    milestone: "Log Analysis Powerhouse",
  },
  {
    version: "v2.44.0",
    release: 65,
    date: "2026-02-24",
    size: "820KB",
    tests: 200,
    highlights: [
      "F61 Phase 2: Time range summary, busiest minute, largest gap",
      "200 test suite milestone",
    ],
    milestone: null,
  },
  {
    version: "v2.43.0",
    release: 64,
    date: "2026-02-24",
    size: "818KB",
    tests: 195,
    highlights: [
      "F61 Timestamp Intelligence Phase 1: auto-detect 15+ time formats",
      "Line deltas, relative time display",
    ],
    milestone: null,
  },
  {
    version: "v2.41.0",
    release: 62,
    date: "2026-02-24",
    size: "815KB",
    tests: 190,
    highlights: [
      "F63 Performance Dashboard: file open time, search speed, memory in status bar",
    ],
    milestone: null,
  },
  {
    version: "v2.39.0",
    release: 60,
    date: "2026-02-24",
    size: "805KB",
    tests: 175,
    highlights: [
      "F30 Reverse Tail: newest-first log viewing",
    ],
    milestone: null,
  },
  {
    version: "v2.32.0",
    release: 52,
    date: "2026-02-24",
    size: "750KB",
    tests: 153,
    highlights: [
      "F26 Minimap: visual file overview with highlighted regions",
      "F25 Notifications: status bar color dots replacing popups",
    ],
    milestone: null,
  },
  {
    version: "v2.30.0",
    release: 50,
    date: "2026-02-24",
    size: "711KB",
    tests: 148,
    highlights: [
      "Release #50 milestone",
      "F37 File Archaeology: one-click metadata inspection",
    ],
    milestone: "50 releases",
  },
  {
    version: "v2.23.0",
    release: 43,
    date: "2026-02-24",
    size: "703KB",
    tests: 121,
    highlights: [
      "F22 TinyRegex NFA engine: custom regex with ReDoS protection",
      "Parallel search across open files",
    ],
    milestone: null,
  },
  {
    version: "v2.8.0",
    release: 28,
    date: "2026-02-21",
    size: "660KB",
    tests: 54,
    highlights: [
      "Multi-Log Merge: open 8 files, merge by timestamp",
      "6 lens plugins (CSV, JSON, Log, XML, GZ, Frequency)",
    ],
    milestone: null,
  },
];

export default function ReleaseCenterPage() {
  const latest = releases[0];

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 4, textAlign: "center" }}>
        <NewReleasesIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 1 }}>
          Release Center
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 550, mx: "auto", mb: 2 }}>
          {RELEASE_NUMBER} releases and counting. Every one under 1MB. Every one faster than the last.
        </Typography>
        <Chip label={`Latest: ${CURRENT_VERSION}`} color="primary" sx={{ fontWeight: 700, fontSize: "1rem" }} />
      </Container>

      {/* Latest Release Card */}
      <Container maxWidth="md" sx={{ pb: 4 }}>
        <Card sx={{ bgcolor: "background.paper", border: "2px solid", borderColor: "primary.main" }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2, mb: 3 }}>
              <Box>
                <Typography variant="h3" sx={{ fontSize: "2rem", mb: 0.5 }}>{latest.version}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Release #{latest.release} · {latest.size} · {latest.tests} tests · {latest.date}
                </Typography>
              </Box>
              <Chip label="Latest" color="success" size="small" />
            </Box>

            <Typography variant="h6" sx={{ mb: 1, color: "primary.light" }}>What&apos;s New</Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3 }}>
              {latest.highlights.map((h) => (
                <Typography component="li" key={h} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>{h}</Typography>
              ))}
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="contained" size="large" startIcon={<DownloadIcon />} href={DOWNLOAD_EXE} target="_blank" rel="noopener">
                Download EXE ({EXE_SIZE})
              </Button>
              <Button variant="outlined" size="large" startIcon={<DownloadIcon />} href={DOWNLOAD_ZIP} target="_blank" rel="noopener">
                Download ZIP
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Also available on{" "}
              <Typography component="a" variant="body2" href={GITHUB_RELEASES} target="_blank" rel="noopener" sx={{ color: "primary.light" }}>
                GitHub Releases
              </Typography>{" "}
              (may require access)
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Key Milestones */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>Key Milestones</Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              { label: "F60 Tier 1 + Tier 2", version: "v2.46–v2.47", desc: "Cross-file correlation + per-doc timestamp storage" },
              { label: "F61 Timestamp Intel", version: "v2.43–v2.44", desc: "Auto-detect 15+ time formats, range summaries" },
              { label: "F63 Perf Dashboard", version: "v2.41.0", desc: "Real-time metrics in status bar" },
              { label: "Release #50", version: "v2.30.0", desc: "148 tests, 711KB EXE" },
              { label: "TinyRegex Engine", version: "v2.23.0", desc: "NFA regex with ReDoS protection" },
              { label: "Multi-Log Merge", version: "v2.8.0", desc: "8-file merge by timestamp" },
            ].map((m) => (
              <Grid key={m.label} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ bgcolor: "rgba(255,255,255,0.03)", height: "100%" }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="subtitle2" color="primary.light" sx={{ fontWeight: 700 }}>{m.label}</Typography>
                    <Chip label={m.version} size="small" sx={{ my: 1 }} />
                    <Typography variant="body2" color="text.secondary">{m.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Release Timeline */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h4" textAlign="center" sx={{ mb: 1 }}>Release Timeline</Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          Last 10 releases — from {releases[releases.length - 1].version} to {CURRENT_VERSION}
        </Typography>

        <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Table>
            <TableBody>
              {releases.map((r, i) => (
                <TableRow key={r.version} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                  <TableCell sx={{ width: 100, fontWeight: 700, color: i === 0 ? "primary.light" : "text.primary" }}>
                    {r.version}
                    {i === 0 && <Chip label="latest" size="small" color="success" sx={{ ml: 1 }} />}
                  </TableCell>
                  <TableCell sx={{ width: 70, color: "text.secondary" }}>{r.size}</TableCell>
                  <TableCell sx={{ width: 50, color: "text.secondary" }}>{r.tests}t</TableCell>
                  <TableCell sx={{ color: "text.secondary" }}>
                    {r.highlights[0]}
                    {r.milestone && <Chip label={r.milestone} size="small" variant="outlined" sx={{ ml: 1 }} />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* CTA */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 }, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h5" sx={{ mb: 2 }}>
            {EXE_SIZE}. Zero Dependencies. Free.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Every release is a single EXE. No installer, no runtime, no cloud account.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="contained" size="large" startIcon={<DownloadIcon />} href={DOWNLOAD_EXE} target="_blank" rel="noopener">
              Download {CURRENT_VERSION}
            </Button>
            <Button variant="outlined" component={Link} href="/features">
              Explore Features →
            </Button>
            <Button variant="outlined" component={Link} href="/changelog" sx={{ textTransform: "none" }}>
              Full Changelog →
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
