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
    period: "v2.10.0–v2.10.1 — Sprint 25–26",
    color: "#9C27B0",
    title: "Competing with IDEs, staying under 1MB",
    description:
      "Session save/load lets users preserve their workspace state. Multi-pattern regex with AND/OR/NOT logic rivals VS Code's search. Code folding works instantly on files any size. And the parallel multi-threaded search — with configurable thread pools up to 8 workers — makes searching through gigabyte files feel interactive. All this in an EXE that weighs less than a JPEG photo.",
    highlights: ["Session/workspace persistence (.speedws JSON)", "Multi-pattern regex panel (AND/OR/NOT)", "Code folding (Ctrl+Shift+[/])", "Parallel search with 8-worker thread pool", "43 test suites, 359+ assertions"],
  },
  {
    phase: "Latest",
    period: "v2.11.0 — Sprint 27",
    color: "#00BCD4",
    title: "Cake Slice Navigator & 816KB",
    description:
      "Sprint 27 delivered the Cake Slice Navigator — a visual tool for navigating 100GB+ files by dividing them into probed 'slices' with sparse virtual paging. Phase 1 of rotation detection landed for log file analysis. The company rebranded from Speed Inc to IT Ant ehf. 54 test suites passing, 816KB EXE. The ant colony keeps building.",
    highlights: ["F17: Cake Slice Navigator for 100GB+ files", "F39: Phase 1 Rotation Detection", "Company rebrand → IT Ant ehf", "54/54 test suites, 816KB EXE"],
  },
  {
    phase: "What's Next",
    period: "Sprint 28+",
    color: "#E91E63",
    title: "Multi-log, time travel, GPU rendering",
    description:
      "Sprint 28 focuses on multi-log unified view — correlating events across multiple log files in a single timeline. The roadmap includes background indexing for instant Ctrl+G on huge files, session/request extraction for tracing IDs across logs, and GPU rendering via Direct2D/DirectWrite for 4K displays. The philosophy stays the same: speed first, zero bloat, one window per file.",
    highlights: ["Multi-log unified view (Sprint 28)", "Background indexing for instant navigation", "GPU rendering for 4K/HiDPI displays", "Request ID tracing across log files"],
  },
];

const stats = [
  { label: "Releases", value: "29+", color: "#2196F3" },
  { label: "Features", value: "140+", color: "#4CAF50" },
  { label: "Bugs Fixed", value: "160+", color: "#F44336" },
  { label: "Test Suites", value: "54", color: "#FF9800" },
  { label: "EXE Size", value: "816 KB", color: "#9C27B0" },
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
          How a frustration with slow text editors became an 816KB powerhouse
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
