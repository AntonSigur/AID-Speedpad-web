"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Release {
  version: string;
  date: string;
  title: string;
  tests: number;
  features: string[];
  fixes?: string[];
  docs?: string[];
}

const releases: Release[] = [
  {
    version: "v2.64.0",
    date: "2026-02-26",
    title: "SpeedHexPad.exe Standalone Split",
    tests: 404,
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
    features: [
      "Minimap sidebar (Ctrl+Alt+M) — condensed document overview",
      "Click-to-navigate, viewport indicator, bookmark markers",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Changelog
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Every feature, fix, and improvement — from v2.30.0 to v2.64.0.
        </Typography>

        {/* Test count progress bar */}
        <Paper elevation={0} sx={{ p: 2, mb: 4, background: "rgba(33, 150, 243, 0.06)", border: "1px solid rgba(33, 150, 243, 0.15)", borderRadius: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="text.secondary">Test suite growth</Typography>
            <Typography variant="body2" color="primary.light">153 → 405 tests</Typography>
          </Box>
          <Box sx={{ height: 8, borderRadius: 4, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
            <Box sx={{ height: "100%", width: "100%", borderRadius: 4, background: "linear-gradient(90deg, #2196F3 0%, #00BCD4 100%)" }} />
          </Box>
        </Paper>

        {/* Release Delta Card — What's New */}
        {releases.length >= 2 && (() => {
          const latest = releases[0];
          const previous = releases[1];
          const testDelta = latest.tests - previous.tests;
          const byteSizes: Record<string, number> = {
            "v2.64.0": 863232,
            "v2.63.0": 863232,
            "v2.62.0": 863232,
            "v2.61.0": 863232,
            "v2.60.0": 863232,
            "v2.59.0": 863232,
            "v2.58.0": 863232,
            "v2.57.0": 891000,
            "v2.56.0": 863232,
            "v2.55.0": 863232,
            "v2.54.0": 863232,
            "v2.53.0": 863232,
            "v2.52.0": 861184,
            "v2.51.0": 860672,
            "v2.50.0": 859648,
            "v2.49.0": 859136,
            "v2.48.0": 858624,
          };
          const byteDelta = (byteSizes[latest.version] ?? 0) - (byteSizes[previous.version] ?? 0);
          const bugFixes = latest.features.filter(f => /^B\d+/.test(f));
          const perfImprovements = latest.features.filter(f => /^P-\d+/.test(f));
          const newFeatures = latest.features.filter(f => !(/^B\d+/.test(f)) && !(/^P-\d+/.test(f)));
          return (
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 4,
                background: "linear-gradient(135deg, rgba(33,150,243,0.08) 0%, rgba(0,188,212,0.08) 100%)",
                border: "1px solid rgba(33,150,243,0.25)",
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  What&apos;s New in {latest.version}
                </Typography>
                <Chip label="Latest" size="small" color="primary" />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Since {previous.version} ({previous.date})
              </Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mb: 2 }}>
                <Box sx={{ p: 1.5, borderRadius: 1, bgcolor: "rgba(255,255,255,0.03)" }}>
                  <Typography variant="caption" color="text.secondary">Tests</Typography>
                  <Typography variant="h6" color="primary.light">
                    {previous.tests} → {latest.tests} ({testDelta > 0 ? "+" : ""}{testDelta})
                  </Typography>
                </Box>
                <Box sx={{ p: 1.5, borderRadius: 1, bgcolor: "rgba(255,255,255,0.03)" }}>
                  <Typography variant="caption" color="text.secondary">EXE Size</Typography>
                  <Typography variant="h6" color="primary.light">
                    {byteDelta > 0 ? "+" : ""}{byteDelta.toLocaleString()} bytes
                  </Typography>
                </Box>
              </Box>
              {bugFixes.length > 0 && (
                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>🐛 Bug Fixes</Typography>
                  {bugFixes.map((f, i) => (
                    <Typography key={i} variant="body2" color="text.secondary" sx={{ pl: 2 }}>• {f}</Typography>
                  ))}
                </Box>
              )}
              {perfImprovements.length > 0 && (
                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>⚡ Performance</Typography>
                  {perfImprovements.map((f, i) => (
                    <Typography key={i} variant="body2" color="text.secondary" sx={{ pl: 2 }}>• {f}</Typography>
                  ))}
                </Box>
              )}
              {newFeatures.length > 0 && (
                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>✨ New</Typography>
                  {newFeatures.map((f, i) => (
                    <Typography key={i} variant="body2" color="text.secondary" sx={{ pl: 2 }}>• {f}</Typography>
                  ))}
                </Box>
              )}
              <Box sx={{ mt: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  ⚠️ Breaking Changes: <Typography component="span" variant="body2" color="success.light">None</Typography>
                </Typography>
              </Box>
            </Paper>
          );
        })()}

        {/* Release Timeline */}
        <Box sx={{ position: "relative", pl: 4 }}>
          {/* Timeline line */}
          <Box sx={{ position: "absolute", left: 12, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #2196F3, #00BCD4)" }} />

          {releases.map((r, i) => (
            <Box key={r.version} sx={{ position: "relative", mb: 4 }}>
              {/* Timeline dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: -28,
                  top: 4,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: i === 0 ? "#2196F3" : "rgba(255,255,255,0.2)",
                  border: i === 0 ? "2px solid #64B5F6" : "2px solid rgba(255,255,255,0.1)",
                }}
              />

              <Paper elevation={0} sx={{ p: 2.5, background: i === 0 ? "rgba(33, 150, 243, 0.08)" : "rgba(255,255,255,0.02)", border: i === 0 ? "1px solid rgba(33, 150, 243, 0.2)" : "1px solid rgba(255,255,255,0.05)", borderRadius: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1, flexWrap: "wrap" }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "monospace" }}>
                    {r.version}
                  </Typography>
                  {i === 0 && <Chip label="Latest" size="small" color="primary" />}
                  <Chip label={`${r.tests} tests`} size="small" variant="outlined" sx={{ borderColor: "#00BCD4", color: "#00BCD4" }} />
                  <Typography variant="caption" color="text.secondary">{r.date}</Typography>
                </Box>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
                  {r.title}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {r.features.map((f, fi) => (
                    <Box component="li" key={fi} sx={{ mb: 0.5 }}>
                      <Typography variant="body2" color="text.secondary">{f}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
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
