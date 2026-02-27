"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
  LinearProgress,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Release {
  version: string;
  date: string;
  title: string;
  tests: number;
  sprint: number;
  features: string[];
  fixes?: string[];
  docs?: string[];
}

const releases: Release[] = [
  {
    version: "v2.71.0",
    date: "2026-02-28",
    title: "Session Extraction & C&C Strategy",
    tests: 673,
    sprint: 87,
    features: [
      "F15 Session Extraction — cursor save/restore, auto-save, session recovery",
      "F71 C&C Strategy Game — real-time strategy mini-game DLL (Ctrl+Shift+F11)",
      "B227 Cursor bounds clamp on session restore",
      "Test suite reaches 673 suites",
      "60 consecutive sprint deliveries — 65% vision milestone!",
    ],
  },
  {
    version: "v2.70.0",
    date: "2026-02-28",
    title: "Stabilization — Rogue DLL & 625 Tests",
    tests: 625,
    sprint: 86,
    features: [
      "F70 Rogue DLL — ASCII dungeon explorer game (Ctrl+Shift+F9)",
      "B221 Thread safety fix for Pattern Timeline",
      "B224 Atomic .spidx write (temp file + MoveFileEx)",
      "B225+B226 Rogue bounds fix for entity/item iteration",
      "GDI brush save/restore for Snake + Solitaire",
      "Test suite reaches 625 — 59 consecutive sprints",
    ],
  },
  {
    version: "v2.69.0",
    date: "2026-02-28",
    title: "Background Indexing & 600 Test Milestone",
    tests: 605,
    sprint: 85,
    features: [
      "F20 Background Indexing — .spidx sidecar files, GoToLine time-budget, stale cleanup",
      "ParseInt overflow hardening (cap at 200M)",
      "Test suite smashes 600 milestone — 605 suites!",
      "58 consecutive sprint deliveries — 60% vision milestone!",
    ],
  },
  {
    version: "v2.68.0",
    date: "2026-02-28",
    title: "Phase 4 Intelligence COMPLETE",
    tests: 566,
    sprint: 84,
    features: [
      "F69 Build Output Parser — MSVC/GCC/Clang error navigation (F4/Shift+F4)",
      "F67 Auto-Correlator UI — Ctrl+Shift+K menu integration",
      "B220 Bucket overflow fix for Pattern Timeline",
      "PHASE 4 INTELLIGENCE COMPLETE: F65+F66+F67+F68+F69 — 5-feature log analysis suite",
      "Test suite explodes to 566 suites (507→566 in one sprint!)",
      "57 consecutive sprint deliveries",
    ],
  },
  {
    version: "v2.67.0",
    date: "2026-02-28",
    title: "Pattern Timeline & Auto-Correlator",
    tests: 505,
    sprint: 83,
    features: [
      "F66 Pattern Timeline — frequency visualization, Ctrl+Shift+T, click-to-jump",
      "F67 Auto-Correlator — event sequence detection for log analysis",
      "Arkanoid Document Mode — words become bricks, frequency heat map",
      "B215-B218 fixes including SpeedHexPad auto-hex",
      "Test suite at 505 — 56 consecutive sprints",
    ],
  },
  {
    version: "v2.66.0",
    date: "2026-02-28",
    title: "HexCompare & 500 Test Milestone",
    tests: 504,
    sprint: 82,
    features: [
      "HexCompare — byte-level binary file diff (F8 compare, F7/Shift+F7 navigate differences)",
      "F68 Severity Coloring — automatic ERROR/WARN/INFO line highlighting",
      "B215 SpeedHexPad auto-hex detection for binary files",
      "Speed Challenge UI polish & Solitaire IT Ant logo branding",
      "Test suite smashes 500 milestone — 504 suites",
      "55 consecutive sprint deliveries",
    ],
  },
  {
    version: "v2.65.0",
    date: "2026-02-27",
    title: "Multi-File Search & Code Signing",
    tests: 432,
    sprint: 81,
    features: [
      "F65 Multi-File Search (Ctrl+Alt+F) — folder-first workflow with parallel search and result navigation",
      "Self-signed code signing for both SpeedPad.exe and SpeedHexPad.exe",
      "B214 SaveAs atomic replace fix",
      "Test suite expanded to 432 suites",
      "54 consecutive sprint deliveries",
    ],
  },
  {
    version: "v2.64.0",
    date: "2026-02-26",
    title: "SpeedHexPad.exe Standalone Split",
    tests: 404,
    sprint: 80,
    features: [
      "SpeedHexPad.exe ships as a standalone binary — CEO directive complete",
      "Architecture: speedpad_core.lib shared between SpeedPad.exe and SpeedHexPad.exe",
      "559 binary artifacts removed from Git tracking",
      "Test suite expanded to 404 (400 milestone!)",
      "53 consecutive sprint deliveries",
    ],
  },
  {
    version: "v2.63.0",
    date: "2026-02-26",
    title: "Structure Templates & Data Bookmarks",
    tests: 393,
    sprint: 79,
    features: [
      "Structure templates — JSON-based binary format overlays for PE, ELF, PNG, ZIP headers",
      "Data bookmarks — toggle, navigate, and serialize hex position bookmarks",
      "Structure panel with field names, types, values, and cursor-follows-field navigation",
      "Bundled templates for common binary formats",
      "UX audit — Ctrl+Alt+H conflict fix, mnemonics, shortcuts reference updated",
    ],
  },
  {
    version: "v2.62.0",
    date: "2026-02-26",
    title: "SpeedHexPad Hex Editing & Endianness Toggle",
    tests: 350,
    sprint: 78,
    features: [
      "SpeedHexPad hex editing — overwrite, insert, and delete bytes with PieceTable undo/redo",
      "Endianness toggle — switch between little-endian and big-endian byte interpretation",
      "F64 Binary Inspector enhancements — expanded data type panel with string decoding",
      "Column/Block Selection polish — Alt+Drag and Alt+Shift+Arrow improvements",
    ],
  },
  {
    version: "v2.61.0",
    date: "2026-02-26",
    title: "F64 Binary Inspector & Column Selection",
    tests: 311,
    sprint: 77,
    features: [
      "F64 Binary Inspector — data type panel in hex view: int8/16/32/64, float32, float64, strings",
      "Column/Block Selection — Alt+Drag (mouse) + Alt+Shift+Arrows (keyboard) for rectangular selection",
      "SpeedHexPad Search — Ctrl+F for hex byte search, F3/Shift+F3 for next/prev match",
      "SpeedHexPad Goto — Ctrl+G for offset navigation (hex or decimal)",
      "Scroll + keyboard navigation in hex view mode",
    ],
    fixes: [
      "B211: Dialog centering via CBT hook (68 calls across 27 files)",
      "HexView ScrollBy integer overflow fix",
    ],
  },
  {
    version: "v2.60.0",
    date: "2026-02-26",
    title: "SpeedHexPad Scaffold & Ant Kings Branding",
    tests: 306,
    sprint: 76,
    features: [
      "SpeedHexPad hex editor scaffold — Ctrl+Alt+H opens hex view mode, new product category",
      "F66 Ant Kings card branding — custom card faces for the Solitaire easter egg",
      "Snake game DLL — 🐍 Help → Snake (Ctrl+Shift+F10), second built-in arcade game",
    ],
    fixes: [
      "B211: Dialog centering fix — all message boxes center on parent window",
    ],
  },
  {
    version: "v2.59.0",
    date: "2026-02-26",
    title: "B207 Critical Security Fix & Snake Game",
    tests: 297,
    sprint: 76,
    features: [
      "Snake game DLL — built-in arcade easter egg (Ctrl+Shift+F10)",
    ],
    fixes: [
      "B207 CRITICAL: Command injection vulnerability fix",
      "B208 HIGH: Integer overflow fix in file size calculations",
    ],
  },
  {
    version: "v2.58.0",
    date: "2026-02-26",
    title: "Arkanoid Game DLL & Test Coverage Surge",
    tests: 265,
    sprint: 75,
    features: [
      "Arkanoid game DLL — built-in arcade game loaded dynamically on demand",
      "D2D renderer polish: final stabilization for hardware-accelerated text rendering",
      "Test coverage surge: Arkanoid lifecycle, correlation edge cases, thread safety, D2D paint validation",
    ],
    fixes: [
      "D2D render edge-case fixes for high-DPI monitors",
    ],
  },
  {
    version: "v2.57.0",
    date: "2026-02-26",
    title: "B200 Critical Fix & 53× Buffer Overflow Hardening",
    tests: 259,
    sprint: 74,
    features: [
      "53× buffer overflow hardening migration (swprintf_s → _snwprintf_s) across all format strings",
    ],
    fixes: [
      "B200 CRITICAL: Correlation mode use-after-free + data race — dangling pointer after buffer realloc",
      "B189: Bookmark navigation edge-case in empty files",
      "B203: Tail-mode stability under rapid append scenarios",
    ],
  },
  {
    version: "v2.56.0",
    date: "2026-02-26",
    title: "D3D Phase 2-3: Runtime Toggle & Benchmark",
    tests: 258,
    sprint: 73,
    features: [
      "D3D Phase 2: Runtime renderer toggle (Ctrl+Alt+D) — switch between GDI and Direct2D without restart",
      "D3D Phase 3: Built-in GDI vs D2D real-time benchmark comparison tool",
    ],
  },
  {
    version: "v2.55.0",
    date: "2026-02-26",
    title: "Code Signing & Direct2D Foundation",
    tests: 257,
    sprint: 72,
    features: [
      "S-012: Code signing — Authenticode signatures on EXE and all DLLs",
      "D3D Phase 1: Direct2D hardware-accelerated renderer foundation (opt-in)",
      "S-013/S-014: Security hardening across 80+ source files",
    ],
    fixes: [
      "B202: Renderer flicker during rapid scroll",
      "B204: Bookmark persistence after file rename",
      "B206: Tail mode crash on truncated file",
    ],
  },
  {
    version: "v2.54.0",
    date: "2026-02-26",
    title: "Navigate Menu & DLL Integrity Validation",
    tests: 253,
    sprint: 71,
    features: [
      "MIA-01: Navigate menu item — centralized toolbar access for all navigation commands",
      "S-010: Lens DLL integrity validation via PE header checksum verification",
      "F66: Solitaire card-game refresh logic",
    ],
    fixes: [
      "B198: Hang during rapid file reloads with active lenses",
      "B199: Lens state restoration after tab switch",
      "B196: Minor toolbar rendering glitch",
      "B197: Status bar flicker during multi-log merge",
      "B194: Context menu positioning on multi-monitor setups",
      "B195: Scroll position drift after find-replace",
    ],
  },
  {
    version: "v2.53.0",
    date: "2026-02-25",
    title: "S-007 Security Hardening & B190 Dialog Centering",
    tests: 246,
    sprint: 70,
    features: [
      "S-007 command-injection hardening — replaced shell-based decompression with direct CreateProcessW in gz_lens and multi_log",
      "B190 dialog centering migration — shared CenterDialogToParent across 6 dialogs (correlation, reverse, regex, challenge, time browse, general)",
      "5 new test suites (S007GzLensProcessSpawn, S007MultiLogProcessSpawn, B190CenterMath, B190CenterCallsites, B190NoDsCenter)",
    ],
  },
  {
    version: "v2.52.0",
    date: "2026-02-25",
    title: "B182 Sparse Index Fix & P-009 Renderer Perf",
    tests: 240,
    sprint: 69,
    features: [
      "B182 sparse index bug fixes — interpolation upper-bound selection, divide-by-zero guard, timestamp scan bounds",
      "P-009 renderer performance — cached background/gutter/cursor-line brushes, reused dx buffer for tab-aware text width",
      "5 new test suites (B182InterpolationBounds, B182DivideByZero, B182TimestampScan, RendererBrushCache, RendererDxBufferCache)",
    ],
  },
  {
    version: "v2.51.0",
    date: "2026-02-25",
    title: "B181 Lens Redirect Fix & 235 Tests",
    tests: 235,
    sprint: 68,
    features: [
      "B181 lens redirect stale state fix — re-detects encoding, line endings, re-initializes edit buffer and piece table after lens redirect",
      "Syntax highlighting updates for redirect path (e.g., .log instead of .gz)",
      "5 new lens redirect test suites (encoding, edit buffer, piece table, line ending, syntax)",
    ],
  },
  {
    version: "v2.50.0",
    date: "2026-02-25",
    title: "B180 Fix, Tier 3b Export & 230 Tests",
    tests: 230,
    sprint: 67,
    features: [
      "B180 tail-hang fix — debounced timer flow prevents auto-reload storms on append-heavy logs",
      "F60 Tier 3b — Correlation Pattern Search can now export/save reports to .txt (UTF-8 BOM)",
      "Updated user-facing labels for Correlation Pattern Search / Export",
    ],
  },
  {
    version: "v2.49.0",
    date: "2026-02-24",
    title: "F60 Tier 3 Analysis & 225 Tests",
    tests: 225,
    sprint: 66,
    features: [
      "B179 shortcut remap — Correlation Mode moved to Ctrl+Shift+E (freed Ctrl+Shift+C for CSV)",
      "F60 Tier 3 pattern analysis — Correlation Pattern Search (Ctrl+Shift+G) with +/-5 min timeline window",
    ],
  },
  {
    version: "v2.48.0",
    date: "2026-02-24",
    title: "F60 Tier 2b Visual Timeline & 220 Tests",
    tests: 220,
    sprint: 65,
    features: [
      "F60 Tier 2b Visual Timeline — Ctrl+Shift+J for correlated timeline view",
      "Cross-file timeline navigation with click/double-click jump to matching event",
      "Correlation Mode / Timeline / Sync Timestamp added to View menu",
    ],
  },
  {
    version: "v2.47.0",
    date: "2026-02-24",
    title: "F60 Tier 2 & 215 Tests",
    tests: 215,
    sprint: 65,
    features: [
      "F60 Tier 2: Per-document timestamp storage for multi-doc correlation",
      "Multi-file correlation enabled (up to 8 files)",
      "Correlation timeline dialog with merged timestamp navigation",
    ],
  },
  {
    version: "v2.46.0",
    date: "2026-02-24",
    title: "F60 Correlation Engine & 210 Tests",
    tests: 210,
    sprint: 64,
    features: [
      "F60 Tier 1: Log Correlation Engine — AddSource, BuildTimeline, FindNearestEvent",
      "Ctrl+Shift+C to toggle correlation mode",
      "Timestamp sync across correlated files",
      "Status bar ⛓ indicator showing correlated file/event count",
    ],
  },
  {
    version: "v2.44.0",
    date: "2026-02-24",
    title: "F61 Tier 2 & 200 Tests",
    tests: 200,
    sprint: 62,
    features: [
      "F61 Tier 2a: Auto Timezone Detection — extracts UTC offset from ISO8601",
      "F61 Tier 2b: Time Range Summary (Ctrl+Shift+R) — duration, busiest minute, largest gap",
    ],
  },
  {
    version: "v2.43.0",
    date: "2026-02-24",
    title: "Timestamp Intelligence & 195 Tests",
    tests: 195,
    sprint: 61,
    features: [
      "F61 Tier 1: Timestamp Intelligence — auto-detect 15+ timestamp formats",
      "Relative time display ('2m ago'), line deltas (Δ+3.2s)",
      "Status bar timestamp info with detected format",
    ],
  },
  {
    version: "v2.41.0",
    date: "2026-02-24",
    title: "Performance Dashboard & 185 Tests",
    tests: 185,
    sprint: 60,
    features: [
      "F63 Performance Dashboard — real-time CPU, memory, FPS metrics in status bar",
      "Zero overhead when inactive (polling only on demand)",
    ],
  },
  {
    version: "v2.39.0",
    date: "2026-02-24",
    title: "Multi-Log & 170 Tests",
    tests: 170,
    sprint: 58,
    features: [
      "F39 Multi-Log Unified View — merge rotated log files into one chronological timeline",
      "Compressed file support in Multi-Log (.gz, .bz2, .zst)",
      "Multi-Log cross-file search",
    ],
  },
  {
    version: "v2.30.0",
    date: "2026-02-24",
    title: "Minimap & 153 Tests",
    tests: 153,
    sprint: 48,
    features: [
      "Minimap sidebar (Ctrl+Alt+M) — condensed document overview",
      "Click-to-navigate, viewport indicator, bookmark markers",
    ],
  },
];

// Group releases by sprint
const sprintGroups = releases.reduce<Record<number, Release[]>>((acc, r) => {
  if (!acc[r.sprint]) acc[r.sprint] = [];
  acc[r.sprint].push(r);
  return acc;
}, {});
const sortedSprints = Object.keys(sprintGroups).map(Number).sort((a, b) => b - a);

const CONSECUTIVE_SPRINTS = 60;
const TOTAL_TESTS = 673;
const FIRST_TESTS = 153;

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Changelog
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Every feature, fix, and improvement — grouped by sprint.
        </Typography>

        {/* Sprint Streak Banner */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 4,
            background: "linear-gradient(135deg, rgba(255,152,0,0.12) 0%, rgba(255,87,34,0.08) 100%)",
            border: "1px solid rgba(255,152,0,0.3)",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#FF9800", lineHeight: 1 }}>
            🔥 {CONSECUTIVE_SPRINTS}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 1 }}>
            Consecutive Sprint Deliveries
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Every sprint shipped on time. Zero missed. From Sprint 28 through Sprint {sortedSprints[0]}.
          </Typography>
        </Paper>

        {/* 600 Test Milestone Banner */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 4,
            background: "linear-gradient(135deg, rgba(0,188,212,0.12) 0%, rgba(33,150,243,0.08) 100%)",
            border: "1px solid rgba(0,188,212,0.3)",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#00BCD4", lineHeight: 1 }}>
            🎉 600
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 1 }}>
            Test Suites Milestone
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            From 153 tests in v2.30.0 to {TOTAL_TESTS} in v2.71.0 — a +{Math.round(((TOTAL_TESTS - FIRST_TESTS) / FIRST_TESTS) * 100)}% increase. Every release tested. Every regression caught.
          </Typography>
        </Paper>

        {/* Stats Row */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }, gap: 2, mb: 4 }}>
          {[
            { value: releases.length, label: "Releases", color: "#2196F3" },
            { value: TOTAL_TESTS, label: "Test Suites", color: "#00BCD4" },
            { value: sortedSprints.length, label: "Sprints", color: "#FF9800" },
            { value: `+${Math.round(((TOTAL_TESTS - FIRST_TESTS) / FIRST_TESTS) * 100)}%`, label: "Test Growth", color: "#4CAF50" },
          ].map((stat) => (
            <Paper
              key={stat.label}
              elevation={0}
              sx={{ p: 2, textAlign: "center", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2 }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, color: stat.color }}>{stat.value}</Typography>
              <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
            </Paper>
          ))}
        </Box>

        {/* Test growth bar */}
        <Paper elevation={0} sx={{ p: 2, mb: 4, background: "rgba(33, 150, 243, 0.06)", border: "1px solid rgba(33, 150, 243, 0.15)", borderRadius: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="text.secondary">Test suite growth</Typography>
            <Typography variant="body2" color="primary.light">{FIRST_TESTS} → {TOTAL_TESTS} tests</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{ height: 8, borderRadius: 4, bgcolor: "rgba(255,255,255,0.05)", "& .MuiLinearProgress-bar": { background: "linear-gradient(90deg, #2196F3 0%, #00BCD4 100%)" } }}
          />
        </Paper>

        {/* Sprint-Grouped Timeline */}
        <Box sx={{ position: "relative", pl: 4 }}>
          <Box sx={{ position: "absolute", left: 12, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #FF9800, #2196F3, #00BCD4)" }} />

          {sortedSprints.map((sprintNum, si) => {
            const sprintReleases = sprintGroups[sprintNum];
            const isLatest = si === 0;
            const totalTests = Math.max(...sprintReleases.map(r => r.tests));
            const allFeatures = sprintReleases.flatMap(r => r.features);
            const allFixes = sprintReleases.flatMap(r => r.fixes ?? []);

            return (
              <Box key={sprintNum} sx={{ position: "relative", mb: 4 }}>
                {/* Sprint dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: -28,
                    top: 4,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    bgcolor: isLatest ? "#FF9800" : "rgba(255,255,255,0.15)",
                    border: isLatest ? "2px solid #FFB74D" : "2px solid rgba(255,255,255,0.1)",
                    boxShadow: isLatest ? "0 0 8px rgba(255,152,0,0.4)" : "none",
                  }}
                />

                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    background: isLatest ? "rgba(255,152,0,0.06)" : "rgba(255,255,255,0.02)",
                    border: isLatest ? "1px solid rgba(255,152,0,0.2)" : "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 2,
                  }}
                >
                  {/* Sprint Header */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2, flexWrap: "wrap" }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: isLatest ? "#FF9800" : "inherit" }}>
                      Sprint {sprintNum}
                    </Typography>
                    {isLatest && <Chip label="Current" size="small" sx={{ bgcolor: "rgba(255,152,0,0.15)", color: "#FF9800", fontWeight: 600 }} />}
                    <Chip label={`${totalTests} tests`} size="small" variant="outlined" sx={{ borderColor: "#00BCD4", color: "#00BCD4" }} />
                    {sprintReleases.map(r => (
                      <Chip
                        key={r.version}
                        label={r.version}
                        size="small"
                        variant="outlined"
                        sx={{ fontFamily: "monospace", borderColor: "rgba(255,255,255,0.2)", color: "text.secondary" }}
                      />
                    ))}
                  </Box>

                  {/* Release cards within sprint */}
                  {sprintReleases.map((r, ri) => (
                    <Box key={r.version} sx={{ mb: ri < sprintReleases.length - 1 ? 2 : 0 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, fontFamily: "monospace" }}>
                          {r.version}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">— {r.title}</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ ml: "auto" }}>{r.date}</Typography>
                      </Box>

                      {/* Features */}
                      <Box component="ul" sx={{ m: 0, pl: 2.5, mb: r.fixes && r.fixes.length > 0 ? 1 : 0 }}>
                        {r.features.map((f, fi) => (
                          <Box component="li" key={fi} sx={{ mb: 0.3 }}>
                            <Typography variant="body2" color="text.secondary">{f}</Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Fixes */}
                      {r.fixes && r.fixes.length > 0 && (
                        <Box sx={{ pl: 2.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600, color: "#FF5722" }}>🐛 Fixes</Typography>
                          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                            {r.fixes.map((f, fi) => (
                              <Box component="li" key={fi} sx={{ mb: 0.3 }}>
                                <Typography variant="body2" color="text.secondary">{f}</Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      )}
                    </Box>
                  ))}
                </Paper>
              </Box>
            );
          })}
        </Box>

        {/* Links */}
        <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button variant="outlined" href="/release-center" sx={{ textTransform: "none" }}>
            Release Center →
          </Button>
          <Button variant="outlined" href="/download" sx={{ textTransform: "none" }}>
            Download Latest →
          </Button>
          <Button variant="outlined" href="/story" sx={{ textTransform: "none" }}>
            Full Story →
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
