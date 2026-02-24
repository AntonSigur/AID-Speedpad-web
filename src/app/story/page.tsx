"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      "Background indexing gives instant Ctrl+G on 4GB+ files with .spidx sidecar caching. TinyRegex — a custom Thompson NFA engine — replaced std::wregex entirely, dropping safe_regex.obj from 1137KB to 212KB. Build optimization with /O1 /GL /LTCG pushed the EXE from 877KB down to 703KB. The Typing Challenge shipped as a fun way to test your WPM. SpeedPad got better AND smaller.",
    highlights: ["Background indexing with .spidx sidecar persistence", "TinyRegex NFA engine (Thompson NFA, Pike VM captures)", "EXE: 877KB → 703KB (20% reduction)", "Typing Challenge with persistent high scores", "134 test suites passing"],
  },
  {
    phase: "Multi-Cursor",
    period: "v2.19.0–v2.21.0 — Sprint 37+",
    color: "#FF5722",
    title: "Full multi-cursor editing in 703KB",
    description:
      "Multi-cursor editing landed in two phases. Phase 1: Ctrl+D to select next occurrence, Ctrl+Alt+Up/Down to add cursors, simultaneous typing. Phase 2: column/box selection via Alt+Shift+drag, per-cursor paste, multi-cursor Find+Replace. CLI got proper --line, --goto, --encoding, --readonly flags. The EXE crossed below 700KB before settling at 703KB with the new features.",
    highlights: ["Multi-cursor: Ctrl+D, Ctrl+Alt+Up/Down, column select", "Per-cursor paste and multi-cursor Find+Replace", "CLI: --readonly, --pipe, --column, --line, --goto, --encoding", "EXE dipped to 700KB, now 703KB", "136/135 test suites passing"],
  },
  {
    phase: "What's Next",
    period: "Sprint 38+",
    color: "#607D8B",
    title: "GPU rendering, session extraction, and beyond",
    description:
      "The roadmap includes GPU rendering via Direct2D/DirectWrite for buttery smooth 4K scrolling, session/request extraction for tracing IDs across log files, and ultra-minimal status bar notifications. The philosophy stays the same: speed first, zero bloat, one window per file. The ant colony never stops building.",
    highlights: ["GPU rendering for 4K/HiDPI displays", "Session/Request ID tracing across log files", "Ultra-minimal notification system", "Community open-source contributions"],
  },
];

const stats = [
  { label: "Releases", value: "40+", color: "#2196F3" },
  { label: "Features", value: "150+", color: "#4CAF50" },
  { label: "Bugs Fixed", value: "160+", color: "#F44336" },
  { label: "Test Suites", value: "136", color: "#FF9800" },
  { label: "EXE Size", value: "703 KB", color: "#9C27B0" },
  { label: "Team Size", value: "7 agents", color: "#00BCD4" },
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
          How a frustration with slow text editors became a 703KB powerhouse
          that opens 100GB files in under 50ms.
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
