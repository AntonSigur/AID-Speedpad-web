"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const timeline = [
  {
    phase: "The Idea",
    period: "Early 2026",
    color: "#FFD700",
    title: "A frustration becomes a mission",
    description:
      "Every text editor was too slow for the job. Opening a 2GB server log? Notepad freezes. VS Code crawls. Even Notepad++ gives up at 500MB. Anton, a DevOps engineer in Iceland, decided enough was enough. The idea was simple: build a text editor that opens any file, any size, instantly.",
    highlights: ["Problem identified: no editor handles 1GB+ files well", "Decision: build from scratch in C++17 + Win32 API", "Core principle: speed above everything"],
  },
  {
    phase: "Architecture",
    period: "Sprint 1–3",
    color: "#2196F3",
    title: "Laying the foundation",
    description:
      "SA designed a 5-layer architecture: Win32 Shell → UI Layer → Engine → Storage → I/O. The key insight was memory-mapped file I/O — instead of loading the entire file into RAM, SpeedPad maps 64MB windows directly into virtual memory and slides them as the user scrolls. Combined with a piece table data structure (the same structure used by VS Code's editor, but implemented in raw C++17), this allowed opening files of any size with constant memory usage.",
    highlights: ["5-layer architecture designed", "Memory-mapped I/O for zero-copy file access", "Piece table data structure for efficient editing", "64MB sliding window — constant memory regardless of file size"],
  },
  {
    phase: "First Release",
    period: "v2.8.0 — Sprint 20",
    color: "#4CAF50",
    title: "The editor that actually works",
    description:
      "The first public release shipped with core editing, cross-file search (Ctrl+Shift+F), and anomaly detection for timestamp gaps in log files. The EXE was under 700KB. It opened a 50GB file in under 50ms. No splash screen, no loading bar, no 'please wait'. Just instant text.",
    highlights: ["Cross-file search with Ctrl+Shift+F", "Anomaly detection for log analysis", "< 50ms startup, < 700KB EXE", "First external testers confirmed: it's fast"],
  },
  {
    phase: "Rapid Growth",
    period: "v2.8.1–v2.9.1 — Sprint 21–24",
    color: "#FF9800",
    title: "Features ship every day",
    description:
      "The team hit its stride. Dev2 joined and started shipping features on dedicated modules — bookmarks, encoding conversion, CSV/JSON rendering, and a solitaire easter egg (1,764 lines of C++). SA built the diff view with Myers algorithm, tail mode with real-time monitoring, and stdin pipe support. The Tester caught 96+ bugs through forensic edge-case testing at 4GB boundaries.",
    highlights: ["Diff view with side-by-side comparison", "Tail mode for live log monitoring", "Stdin pipe support: dir | speedpad", "Quick file compare (Ctrl+Alt+C)", "Dev2 ships 25+ features including solitaire DLL"],
  },
  {
    phase: "Power Features",
    period: "v2.10.0–v2.11.0 — Sprint 25–27",
    color: "#9C27B0",
    title: "Competing with IDEs, staying under 1MB",
    description:
      "Session save/load lets users preserve their workspace state. Multi-pattern regex with AND/OR/NOT logic rivals VS Code's search. Code folding works instantly on files any size. The Cake Slice Navigator enables navigating 100GB+ files with sparse probing — only reading 2-4% of the data. All this in an EXE that weighs less than a JPEG photo.",
    highlights: ["Session/workspace persistence (.speedws JSON)", "Cake Slice Navigator for 100GB+ files", "Parallel search with 8-worker thread pool", "55 test suites, EXE still under 1MB", "Phase 1 rotation detection for log files"],
  },
  {
    phase: "Multi-Log Era",
    period: "v2.12.0–v2.14.0 — Sprint 28–32",
    color: "#E91E63",
    title: "One editor to rule all your logs",
    description:
      "The Multi-Log Unified View (Ctrl+Shift+M) merged rotated log files into one chronological stream with file boundary separators. Then compressed file support landed — .gz, .bz2, .zst logs are decompressed on-the-fly. Cross-file search works across the entire unified view. 12 out of 12 acceptance criteria completed. No other editor on the planet can do this.",
    highlights: ["F39 Multi-Log complete: 12/12 acceptance criteria", "Compressed log support (.gz/.bz2/.zst)", "Cross-file search in unified multi-log view", "Anomaly gutter marks in normal and reverse view", "100 test suites milestone (v2.13.1)", "app.cpp refactored from 1763 → 969 lines"],
  },
  {
    phase: "TinyRegex & Speed",
    period: "v2.15.0–v2.18.0 — Sprint 33–36",
    color: "#00BCD4",
    title: "The EXE keeps shrinking",
    description:
      "Background indexing gives instant Ctrl+G on 4GB+ files with .spidx sidecar caching. TinyRegex — a custom Thompson NFA engine — replaced std::wregex entirely, dropping safe_regex.obj from 1137KB to 212KB. Build optimization with /O1 /GL /LTCG pushed the EXE down toward 700KB. The Typing Challenge shipped as a fun way to test your WPM. SpeedPad got better AND smaller.",
    highlights: ["Background indexing with .spidx sidecar persistence", "TinyRegex NFA engine (Thompson NFA, Pike VM captures)", "safe_regex.obj: 1137KB → 212KB (81% reduction)", "Typing Challenge with persistent high scores", "134 test suites passing"],
  },
  {
    phase: "Multi-Cursor",
    period: "v2.19.0–v2.21.0 — Sprint 37–39",
    color: "#FF5722",
    title: "Full multi-cursor editing arrives",
    description:
      "Multi-cursor editing landed in two phases. Phase 1: Ctrl+D to select next occurrence, Ctrl+Alt+Up/Down to add cursors, simultaneous typing. Phase 2: column/box selection via Alt+Shift+drag, per-cursor paste, multi-cursor Find+Replace. CLI got proper --line, --goto, --encoding, --readonly flags.",
    highlights: ["Multi-cursor: Ctrl+D, Ctrl+Alt+Up/Down, column select", "Per-cursor paste and multi-cursor Find+Replace", "CLI: --readonly, --pipe, --column", "703KB EXE", "136 test suites"],
  },
  {
    phase: "Hardening & Polish",
    period: "v2.22.0–v2.30.0 — Sprint 40–48",
    color: "#795548",
    title: "50 releases, under 750KB",
    description:
      "The team focused on quality: encoding detection improvements (UTF-32 BOM, 8KB heuristic), security fixes (S003 command injection in DecompressToTemp), and the S005 TinyRegex hardening. F34 Ultra-Minimal Notifications replaced all popups with status bar color dots. F37 File Archaeology added one-click metadata inspection. Release #50 milestone hit at v2.30.0 with 148 tests and ~711KB.",
    highlights: ["S003 command injection security fix", "F34 Ultra-Minimal Notifications (no popups)", "F37 File Archaeology (metadata, hashes)", "Release #50 milestone at v2.30.0", "148 test suites, ~711KB EXE"],
  },
  {
    phase: "Minimap & Reverse Tail",
    period: "v2.33.0–v2.39.0 — Sprint 51–57",
    color: "#E91E63",
    title: "CEO approves minimap, reverse tail polished",
    description:
      "F22 Minimap and F23 Multi-Cursors received CEO approval after governance review. Minimap adds an 80px condensed sidebar with click-to-navigate, viewport indicator, and bookmark markers. F65 Reverse Tail Polish added Ctrl+Alt+V combined toggle and --reverse-tail CLI flag. PE VERSIONINFO resource added for Windows Defender compatibility. 180 test suites at v2.39.0.",
    highlights: ["F22 Minimap: Ctrl+Alt+M, 80px sidebar", "F65 Reverse Tail: Ctrl+Alt+V combined toggle", "PE VERSIONINFO for Defender compatibility", "736KB EXE, 180 test suites"],
  },
  {
    phase: "Log Analysis Powerhouse",
    period: "v2.40.0–v2.46.0 — Sprint 58–64",
    color: "#00BCD4",
    title: "Three CEO-approved features in 7 sprints",
    description:
      "F63 Performance Dashboard shows real-time metrics (file open time, search speed, memory) in the status bar. F61 Timestamp Intelligence auto-detects time formats, displays relative times and line deltas, with Ctrl+Shift+R range summaries. F60 Log Correlation Engine links related entries across up to 8 files with timestamp sync and timeline window. 210 test suites at v2.46.0.",
    highlights: ["F63 Performance Dashboard: real-time metrics", "F61 Timestamp Intelligence: relative time, deltas, range summary", "F60 Log Correlation: cross-file linking with ⛓ indicator", "200 test suite milestone", "828KB EXE at v2.46.0"],
  },
  {
    phase: "Hardening & Optimization",
    period: "v2.47.0 — Sprint 65",
    color: "#8BC34A",
    title: "Smaller, faster, safer",
    description:
      "F60 Tier 2 adds per-document timestamp storage for faster re-correlation. B178 fixes tail mode live-append tracking. S006 hardens correlation engine pointer safety. Binary optimized to 758KB — 70KB smaller than v2.46.0. 215 test suites and counting.",
    highlights: ["F60 Tier 2: per-document timestamp storage", "B178: tail mode follows appends correctly", "S006: correlation pointer safety", "758KB EXE, 215 tests"],
  },
  {
    phase: "Visual Timeline & Refinement",
    period: "v2.48.0 — Sprint 66",
    color: "#CDDC39",
    title: "See the incident timeline, not just the data",
    description:
      "F60 Tier 2b adds a visual correlation timeline, making cross-file incident analysis intuitive. Enhanced cross-file linking and navigation improvements. 220 test suites passing.",
    highlights: ["F60 Tier 2b: visual correlation timeline", "Enhanced cross-file linking", "220 tests, 155+ features"],
  },
  {
    phase: "Pattern Export & Stability",
    period: "v2.50.0 — Sprint 67",
    color: "#E91E63",
    title: "Save what you found",
    description:
      "B180 fixes the UI tail-switch hang (auto-reload regression). F60 Tier 3b adds pattern export and save — analysts can now persist correlation results for incident reports. 230 test suites, release #71.",
    highlights: ["B180: auto-reload hang fix", "F60 Tier 3b: pattern export/save", "230 tests, 157+ features", "860KB EXE"],
  },
  {
    phase: "Lens Stability",
    period: "v2.51.0 — Sprint 68",
    color: "#795548",
    title: "Trust what you decompress",
    description:
      "B181 fixes a critical lens redirect stale state bug: after opening a compressed file, the editor now properly re-detects encoding, re-initializes the edit buffer and piece table, and updates syntax highlighting. 5 new test suites ensure lens redirects work correctly. 235 test suites, release #72.",
    highlights: ["B181: lens redirect encoding + piece table fix", "5 new lens redirect test suites", "235 tests, 157+ features", "860KB EXE, Sprint 40 streak"],
  },
  {
    phase: "Index Precision & Renderer Performance",
    period: "v2.52.0 — Sprint 69",
    color: "#455A64",
    title: "Faster rendering, precise navigation",
    description:
      "B182 fixes sparse index interpolation bounds, adds a divide-by-zero guard for equal-byte-offset probe pairs, and tightens timestamp scan bounds. P-009 caches renderer brushes and reuses a dx buffer for tab-aware text width, eliminating per-frame allocations. 5 new test suites, 240 passing, release #73.",
    highlights: ["B182: sparse index interpolation + div-by-zero guard", "P-009: renderer brush cache + dx buffer reuse", "240 tests, 157+ features", "860KB EXE, Sprint 41 streak"],
  },
  {
    phase: "Security Hardening & UX Polish",
    period: "v2.53.0 — Sprint 70",
    color: "#D32F2F",
    title: "Hardening the shell, centering the experience",
    description:
      "S-007 replaces shell-based decompression (cmd.exe /c) with direct CreateProcessW process invocation in gz_lens and multi_log — eliminating command-injection vectors. B190 migrates dialog centering to a shared CenterDialogToParent flow across 6 dialogs. 5 new test suites, 246 passing, release #74.",
    highlights: ["S-007: CreateProcessW replaces shell decompression", "B190: unified dialog centering across 6 dialogs", "246 tests, 157+ features", "844KB EXE, Sprint 42 streak"],
  },
  {
    phase: "Navigation & DLL Integrity",
    period: "v2.54.0 — Sprint 71",
    color: "#1565C0",
    title: "Navigate menu, lens integrity, and 6 bug fixes",
    description:
      "MIA-01 adds a centralized Navigate menu item giving toolbar-level access to all navigation commands. S-010 introduces lens DLL integrity validation via PE header checksum verification. Six bug fixes including B198 rapid-reload hang and B199 lens state restoration. 253 tests, release #75.",
    highlights: ["MIA-01: Navigate menu item", "S-010: Lens DLL PE header integrity", "253 tests, 6 bug fixes", "Sprint 43 streak"],
  },
  {
    phase: "Code Signing & Direct2D Foundation",
    period: "v2.55.0 — Sprint 72-73",
    color: "#00897B",
    title: "Authenticode signatures and GPU rendering begins",
    description:
      "S-012 delivers Authenticode code signing on the EXE and all DLLs — the binary is now verifiably trusted. D3D Phase 1 lays the Direct2D hardware-accelerated renderer foundation as an opt-in path. An 80+ file security audit hardens the entire codebase. 257 tests, release #76.",
    highlights: ["S-012: Code signing (Authenticode)", "D3D Phase 1: Direct2D foundation", "80+ file security audit", "257 tests, Sprint 44 streak"],
  },
  {
    phase: "Direct2D Runtime Toggle & Benchmark",
    period: "v2.56.0 — Sprint 73",
    color: "#6A1B9A",
    title: "Ctrl+Alt+D flips between GDI and Direct2D live",
    description:
      "D3D Phase 2 delivers the runtime renderer toggle: press Ctrl+Alt+D to switch between GDI (classic) and Direct2D (hardware-accelerated) without restarting. Phase 3 adds a built-in real-time benchmark comparing both renderers side by side. 258 tests, release #77.",
    highlights: ["D3D Phase 2: Ctrl+Alt+D runtime toggle", "D3D Phase 3: GDI vs D2D benchmark", "258 tests", "Sprint 45 streak"],
  },
  {
    phase: "Critical Stability & Overflow Hardening",
    period: "v2.57.0 — Sprint 74",
    color: "#C62828",
    title: "B200 critical fix and 53× buffer overflow migration",
    description:
      "B200 fixes a critical correlation mode use-after-free combined with a data race — a dangling pointer after buffer reallocation. All 53 swprintf_s calls are migrated to _snwprintf_s for consistent buffer overflow prevention. B189 bookmark edge-case and B203 tail-mode stability also resolved. 259 tests, release #78.",
    highlights: ["B200 CRITICAL: Correlation UAF + data race", "53× buffer overflow hardening", "259 tests", "Sprint 46 streak"],
  },
  {
    phase: "Games & Test Coverage Surge",
    period: "v2.58.0 — Sprint 75",
    color: "#E65100",
    title: "Arkanoid game DLL and test coverage leap",
    description:
      "An Arkanoid arcade game ships as a dynamically loaded DLL — bringing easter-egg fun to a serious text editor. The D2D renderer receives final polish. Test coverage surges with new suites covering Arkanoid lifecycle, correlation edge cases, thread safety, and D2D paint validation. 265 tests, release #79.",
    highlights: ["Arkanoid game DLL", "D2D renderer polish", "265 tests (test surge)", "Sprint 47 streak"],
  },
  {
    phase: "Critical Security Fixes",
    period: "v2.59.0 — Sprint 76",
    color: "#B71C1C",
    title: "B207 command injection and B208 integer overflow",
    description:
      "B207 fixes a CRITICAL command injection vulnerability discovered in the shell execution path. B208 fixes a HIGH-severity integer overflow in file size calculations that could cause incorrect reads on 4GB+ files. Snake game DLL adds a second built-in arcade easter egg alongside Arkanoid. 297 tests, release #80.",
    highlights: ["B207 CRITICAL: Command injection fix", "B208 HIGH: Integer overflow fix", "Snake game DLL 🐍", "297 tests, Sprint 48 streak"],
  },
  {
    phase: "SpeedHexPad & Ant Kings",
    period: "v2.60.0 — Sprint 76",
    color: "#FF6F00",
    title: "A hex editor is born, and the king cards get new faces",
    description:
      "SpeedHexPad scaffold (Ctrl+Alt+H) opens a new hex editor view mode — a brand new product category for IT Ant ehf. The Ant Kings branding adds custom king card faces to the Solitaire easter egg. B211 fixes dialog centering so all message boxes center on their parent window. 306 tests (305 active), release #81, Sprint 49 streak.",
    highlights: ["SpeedHexPad hex editor (Ctrl+Alt+H)", "Ant Kings card branding", "B211 dialog centering", "306 tests, Sprint 49 streak"],
  },
  {
    phase: "Binary Inspector & Column Selection",
    period: "v2.61.0 — Sprint 77",
    color: "#0D47A1",
    title: "F64 inspects bytes, Alt+Drag selects blocks",
    description:
      "F64 Binary Inspector adds a data type panel to the hex view — select bytes to see them interpreted as int8/16/32/64, float32, float64, or decoded strings. Column/Block Selection (Alt+Drag, Alt+Shift+Arrows) brings rectangular selection with multi-cursor cut/copy/paste. SpeedHexPad gets search (Ctrl+F) and goto offset (Ctrl+G). B211 fixes dialog centering via CBT hook across 68 calls in 27 files. 311 tests, release #82.",
    highlights: ["F64 Binary Inspector panel", "Column/Block Selection (Alt+Drag)", "SpeedHexPad search + goto", "311 tests, Sprint 50 streak"],
  },
  {
    phase: "SpeedHexPad Hex Editing",
    period: "v2.62.0 — Sprint 78",
    color: "#4A148C",
    title: "A full hex editor is born inside SpeedPad",
    description:
      "SpeedHexPad evolves from a viewer to a full hex editor with overwrite, insert, and delete operations — all backed by the PieceTable with full undo/redo. The endianness toggle lets you switch between little-endian and big-endian byte interpretation. F64 Binary Inspector gains string decoding. Test suites surge past 350. Release #83, Sprint 51 streak.",
    highlights: ["Hex editing (overwrite/insert/delete)", "Endianness toggle", "PieceTable undo/redo in hex", "350 tests"],
  },
  {
    phase: "Structure Templates & Data Bookmarks",
    period: "v2.63.0 — Sprint 79",
    color: "#1B5E20",
    title: "Binary format overlays bring hex inspection to the next level",
    description:
      "Structure templates let users define JSON-based binary format layouts that SpeedHexPad overlays on raw hex data. PE headers, ELF binaries, PNG files — all become readable with field names, types, and values. Data bookmarks let you mark and navigate hex positions. The test suite reaches 393 — 157% growth from v2.30.0. Release #84, Sprint 52 streak.",
    highlights: ["Structure templates (JSON-based)", "Data bookmarks", "Cursor-follows-field navigation", "393 tests, Sprint 52 streak"],
  },
  {
    phase: "SpeedHexPad.exe Standalone Split",
    period: "v2.64.0 — Sprint 80",
    color: "#4CAF50",
    title: "SpeedHexPad becomes its own binary — the colony's second product",
    description:
      "The CEO's directive is complete: SpeedHexPad.exe ships as a standalone binary alongside SpeedPad.exe. Both share speedpad_core.lib — the shared foundation library. 559 binary artifacts removed from Git tracking. The test suite reaches 404 — the 400 milestone. Release #85, 53 consecutive sprint deliveries.",
    highlights: ["SpeedHexPad.exe standalone", "speedpad_core.lib shared library", "559 artifacts removed from Git", "404 tests, 53 sprints"],
  },
  {
    phase: "What's Next",
    period: "Sprint 81+",
    color: "#607D8B",
    title: "SpeedHexPad becomes its own EXE, and the colony expands",
    description:
      "The roadmap includes binary file diff, session extraction for tracing IDs across log files, self-signed code signing, and dual-product expansion. The ant colony never stops building.",
    highlights: ["Binary file diff", "Session extraction", "Code signing", "Community contributions"],
  },
];

const stats = [
  { label: "Releases", value: "85", color: "#2196F3" },
  { label: "Features", value: "165+", color: "#4CAF50" },
  { label: "Bugs Fixed", value: "211+", color: "#F44336" },
  { label: "Test Suites", value: "409", color: "#FF9800" },
  { label: "EXE Size", value: "956 KB", color: "#9C27B0" },
  { label: "Team Size", value: "8 agents", color: "#00BCD4" },
];

export default function StoryPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 4, textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            mb: 2,
            background: "linear-gradient(135deg, #64B5F6, #00BCD4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Story
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 650, mx: "auto", fontWeight: 400 }}>
          How a frustration with slow text editors became a 956KB powerhouse
          that opens 100GB files — while staying under 1MB.
        </Typography>
      </Container>

      {/* Stats Bar */}
      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Grid container spacing={2} justifyContent="center">
          {stats.map((stat) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={stat.label}>
              <Card
                elevation={0}
                sx={{
                  textAlign: "center",
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  py: 2,
                }}
              >
                <Typography variant="h4" sx={{ color: stat.color, fontWeight: 800 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Timeline */}
      <Container maxWidth="md" sx={{ pb: { xs: 4, md: 8 } }}>
        {timeline.map((entry, index) => (
          <Box
            key={entry.phase}
            sx={{
              position: "relative",
              pl: { xs: 4, md: 6 },
              pb: 6,
              borderLeft: index < timeline.length - 1 ? `3px solid ${entry.color}44` : "3px solid transparent",
              "&::before": {
                content: '""',
                position: "absolute",
                left: -8,
                top: 4,
                width: 16,
                height: 16,
                borderRadius: "50%",
                bgcolor: entry.color,
                border: "3px solid",
                borderColor: "background.default",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1, flexWrap: "wrap" }}>
              <Chip
                label={entry.phase}
                size="small"
                sx={{ bgcolor: `${entry.color}22`, color: entry.color, fontWeight: 700 }}
              />
              <Typography variant="body2" color="text.secondary">
                {entry.period}
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>
              {entry.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
              {entry.description}
            </Typography>
            <Card elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <CardContent sx={{ py: 1.5, px: 2, "&:last-child": { pb: 1.5 } }}>
                {entry.highlights.map((h) => (
                  <Typography key={h} variant="body2" color="text.secondary" sx={{ display: "flex", gap: 1, mb: 0.5 }}>
                    <span style={{ color: entry.color }}>▸</span> {h}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Container>

      {/* How This Website Was Built */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Chip label="Meta" color="secondary" variant="outlined" sx={{ mb: 2, display: "block", width: "fit-content", mx: "auto" }} />
        <Typography variant="h3" textAlign="center" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 2 }}>
          How This Website Was Built
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          This website is itself a product of the IT Ant multi-agent collaboration workflow. Seven AI
          agents — Product Owner, Project Manager, Software Architect, two Developers, a Tester, and
          a WebDev agent — communicate through file-based inboxes, run security checks before every work
          cycle, and ship through the same sprint discipline used for SpeedPad itself.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          The stack: <strong>Next.js 16</strong> with the App Router, <strong>TypeScript</strong> for type
          safety, and <strong>MUI (Material UI)</strong> for a consistent dark-themed design system. The
          site is self-hosted — no Vercel, no cloud platform. Just static pages served fast.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          Every page goes through a content cycle: the PO drafts messaging grounded in actual source
          documentation (FEATURES.md, SHORTCUTS.md, CHANGELOG.md). WebDev implements the design and code.
          The CEO reviews for brand alignment. Nothing ships without a verified build and a clean lint pass.
          Every claim on this site traces back to source documentation or measured benchmarks.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          The website has grown alongside SpeedPad — from 5 initial pages to {" "}
          <strong>28 routes</strong> covering features, documentation, download, a command explorer with
          96 searchable commands, an incident response playbook, lens plugins, keyboard shortcuts,
          a dedicated hex editor page, benchmarks, real-world use cases, user testimonials, a changelog timeline, team profiles, and this story. Each
          version bump ripples through every page: stats bars, comparison tables, download links,
          SEO metadata, and JSON-LD structured data all update together.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          The philosophy mirrors SpeedPad itself: stay lean, ship often, no bloat. The entire website
          builds in under 10 seconds. Every commit is pushed to two remotes. The ants never stop.
        </Typography>
      </Container>

      {/* Team in Numbers */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Chip label="Data" color="primary" variant="outlined" sx={{ mb: 2, display: "block", width: "fit-content", mx: "auto" }} />
          <Typography variant="h3" textAlign="center" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 4 }}>
            The Team in Numbers
          </Typography>
          <Grid container spacing={2}>
            {[
              { value: "7", label: "AI Agents", sub: "PM, PO, SA, Dev×2, Tester, WebDev", color: "#2196F3" },
              { value: "85", label: "Releases Shipped", sub: "53 consecutive sprint deliveries", color: "#4CAF50" },
              { value: "409", label: "Test Suites", sub: "From 153 → 409 (+167% growth)", color: "#FF9800" },
              { value: "181+", label: "Bugs Fixed", sub: "B001 through B181, all verified", color: "#F44336" },
              { value: "100+", label: "Website Commits", sub: "28 routes, 8,000+ lines of TypeScript", color: "#9C27B0" },
              { value: "100+", label: "Inbox Messages", sub: "File-based async communication", color: "#00BCD4" },
              { value: "956", label: "KB Total", sub: "Entire editor in less than 1MB", color: "#E91E63" },
              { value: "10s", label: "Build Time", sub: "Next.js 16 — full rebuild in seconds", color: "#607D8B" },
            ].map((stat) => (
              <Grid key={stat.label} size={{ xs: 6, sm: 3 }}>
                <Paper sx={{ p: 2.5, bgcolor: "#162D50", textAlign: "center", height: "100%" }}>
                  <Typography variant="h4" sx={{ color: stat.color, fontWeight: 800, mb: 0.5 }}>{stat.value}</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>{stat.label}</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block", lineHeight: 1.3 }}>{stat.sub}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How the Ants Collaborate */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Chip label="Process" color="secondary" variant="outlined" sx={{ mb: 2, display: "block", width: "fit-content", mx: "auto" }} />
        <Typography variant="h3" textAlign="center" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 3 }}>
          How the Ants Collaborate
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          The IT Ant team runs on a file-based inbox system — no Slack, no email, no real-time chat. Each
          agent has an inbox folder. When the PM releases a new version, every relevant agent receives a
          message. The PO drafts content directions. The CEO reviews and provides feedback. Everything is
          asynchronous, traceable, and stored as plain text files.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          Before every work cycle, each agent runs a <strong>Skerity security check</strong> — a mandatory
          verification that scans the workspace for integrity issues. No work starts without a clean pass.
          This mirrors the disciplined approach SpeedPad takes to code quality: every release passes all
          test suites, every commit is verified, every deployment is tracked.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
          the development cadence is remarkable: the team has delivered <strong>51 consecutive sprints</strong> without
          a single missed delivery. Each sprint produces a new release with bug fixes, features, and test
          suites — all in a single-file 956KB executable. The website mirrors this velocity, growing from
          5 pages to 28 routes while maintaining zero lint warnings and clean builds.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          Every number on this website is traceable. Feature counts come from FEATURES.md. Shortcut
          lists come from SHORTCUTS.md. Release data comes from CHANGELOG.md and RELEASE_NOTES.md. The PO
          is the content authority — when sources disagree, the PO&apos;s numbers win. This traceability
          discipline means users can trust what they read.
        </Typography>
      </Container>

      {/* Explore More */}
      <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 }, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 3 }}>Explore What the Ants Built</Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" component={Link} href="/command-explorer">88 Commands →</Button>
          <Button variant="outlined" component={Link} href="/incident-playbook">Incident Playbook →</Button>
          <Button variant="outlined" component={Link} href="/features">165+ Features →</Button>
          <Button variant="outlined" component={Link} href="/download">Download →</Button>
        </Box>
      </Container>

      {/* Closing */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 2 }}>
            The Colony Keeps Building 🐜
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, maxWidth: 600, mx: "auto" }}>
            SpeedPad started as one developer&apos;s frustration. It grew into a 7-agent team building
            the fastest text editor on Windows. Every sprint ships features. Every release stays under 1MB.
            Every decision follows one rule: if it&apos;s not fast, it doesn&apos;t ship.
          </Typography>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
