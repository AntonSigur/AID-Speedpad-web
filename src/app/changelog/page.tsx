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
          Every feature, fix, and improvement — from v2.30.0 to v2.53.0.
        </Typography>

        {/* Test count progress bar */}
        <Paper elevation={0} sx={{ p: 2, mb: 4, background: "rgba(33, 150, 243, 0.06)", border: "1px solid rgba(33, 150, 243, 0.15)", borderRadius: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body2" color="text.secondary">Test suite growth</Typography>
            <Typography variant="body2" color="primary.light">153 → 246 tests</Typography>
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
