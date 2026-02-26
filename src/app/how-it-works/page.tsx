"use client";

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import {
  Memory as MemoryIcon,
  Storage as StorageIcon,
  Speed as SpeedIcon,
  Visibility as ViewportIcon,
  Code as CodeIcon,
  Security as SecurityIcon,
  TextFields as EncodingIcon,
  Timer as TimerIcon,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EXE_SIZE, TEST_COUNT, RELEASE_NUMBER } from "@/lib/product-config";

/* ─── Data ─── */
const FOUR_PILLARS = [
  {
    icon: <MemoryIcon sx={{ fontSize: 40 }} />,
    title: "Memory-Mapped I/O",
    subtitle: "64 MB sliding window",
    description:
      "SpeedPad uses the Windows CreateFileMapping / MapViewOfFile API with a 64 MB sliding window. At any time, only 64 MB of the file is mapped into the process address space — regardless of whether the file is 10 KB or 100 GB.",
    details: [
      "FILE_FLAG_SEQUENTIAL_SCAN for OS read-ahead optimization",
      "FILE_SHARE_WRITE in tail mode so other processes can append",
      "RefreshSize() detects file growth and recreates the mapping",
      "Remapping aligned to 64 KB system allocation granularity",
    ],
    cost: "~64 MB virtual address space + small metadata",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 40 }} />,
    title: "Piece Table",
    subtitle: "Copy-on-write editing",
    description:
      "Edits are never applied to the memory-mapped file data. Instead, a piece table maintains a sequence of references to either the original buffer (read-only) or an append-only add buffer for new text.",
    details: [
      "Open file → one piece covering the entire original",
      "Insert text → split piece, add new piece referencing add buffer",
      "Delete text → trim or remove pieces",
      "Undo → restore pieces snapshot (500 undo levels)",
    ],
    cost: "O(log n) lookup, O(n) insert where n = edit points",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "Lazy Line Indexing",
    subtitle: "On-demand line offsets",
    description:
      "SpeedPad does not scan the entire file for line breaks on open. The line offset index builds incrementally — only indexing lines that the viewport actually needs.",
    details: [
      "On open: only the first viewport's lines are indexed",
      "On scroll: additional lines indexed to the scroll target",
      "Capped at 100,000 lines per indexing call (no UI freezes)",
      "64 KB chunk scanning through the piece table",
    ],
    cost: "std::vector<uint64_t> of byte offsets per line start",
  },
  {
    icon: <ViewportIcon sx={{ fontSize: 40 }} />,
    title: "Viewport Rendering",
    subtitle: "Only visible lines painted",
    description:
      "SpeedPad renders only what is visible on screen. For each visible line: read bytes from piece table, decode to wide characters, apply syntax tokenization, paint via GDI with token colors.",
    details: [
      "linesPerPage = clientHeight / lineHeight + 2 (smooth scroll margin)",
      "Syntax tokenization cached per line (max 10,000 entries)",
      "Lines > 10,000 chars truncated for rendering (data preserved)",
      "Encoding decoded per-line at render time via DecodeToWide()",
    ],
    cost: "Constant memory for visible content only",
  },
];

const PIECE_TABLE_OPS = [
  {
    operation: "Open file",
    what: "One piece covering the entire original file",
  },
  {
    operation: "Insert text",
    what: "Append bytes to add buffer; split piece at cursor into two + new piece",
  },
  { operation: "Delete text", what: "Trim or remove pieces covering the deleted range" },
  {
    operation: "Undo",
    what: "Restore a snapshot of the pieces vector (max 500 levels)",
  },
];

const ENCODING_STEPS = [
  {
    step: 1,
    method: "BOM Detection",
    detail: "UTF-8 BOM (EF BB BF), UTF-16 LE (FF FE), UTF-16 BE (FE FF)",
  },
  {
    step: 2,
    method: "Null-byte Heuristic",
    detail:
      "If >12.5% of sampled bytes are null → UTF-16; determine endianness by null position parity",
  },
  {
    step: 3,
    method: "UTF-8 Validation",
    detail: "Check for valid multi-byte sequences; if found → UTF-8",
  },
  {
    step: 4,
    method: "Fallback",
    detail: "ASCII (single-byte, no conversion needed)",
  },
];

const SIZE_LIMITS = [
  {
    feature: "Cross-File Search (CFS)",
    maxSize: "500 MB",
    reason: "Scans entire file content for matches",
  },
  {
    feature: "File Compare / Diff",
    maxSize: "64 MB",
    reason: "Loads both files into memory for LCS algorithm",
  },
  {
    feature: "Regex Highlighting",
    maxSize: "500 MB",
    reason: "Applies regex across all lines",
  },
  {
    feature: "Frequency Analysis Lens",
    maxSize: "500 MB",
    reason: "Counts all line occurrences",
  },
];

const BACKGROUND_OPS = [
  "Line index building (incremental, capped per call)",
  "Cross-file search (parallel via thread pool, up to 8 workers)",
  "File comparison",
  "Filter/grep operations",
];

/* ─── Styles ─── */
const sectionSx = { py: 6 };
const cardSx = {
  p: 3,
  bgcolor: "#162D50",
  borderRadius: 2,
  height: "100%",
};

export default function HowItWorksPage() {
  return (
    <Box sx={{ bgcolor: "#0F2035", minHeight: "100vh", color: "#E2E8F0" }}>
      <Navbar />

      {/* Hero */}
      <Box
        sx={{
          pt: 14,
          pb: 6,
          textAlign: "center",
          background: "linear-gradient(180deg, #162D50 0%, #0F2035 100%)",
        }}
      >
        <Container maxWidth="md">
          <Chip
            label="Technical Deep Dive"
            sx={{ mb: 2, bgcolor: "#1a3a5c", color: "#00BCD4" }}
          />
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, mb: 2, color: "#fff" }}
          >
            How It Works
          </Typography>
          <Typography variant="h6" sx={{ color: "#94A3B8", mb: 2 }}>
            How a {EXE_SIZE} editor opens 100 GB files with constant memory
          </Typography>
          <Typography sx={{ color: "#64748B" }}>
            Four techniques — Memory-Mapped I/O, Piece Table, Lazy Line
            Indexing, and Viewport Rendering — work together so SpeedPad opens a
            10 GB log file with the same startup time as a 10 KB config file.
          </Typography>
        </Container>
      </Box>

      {/* Four Pillars */}
      <Container maxWidth="lg" sx={sectionSx}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          The Four Pillars
        </Typography>
        <Grid container spacing={3}>
          {FOUR_PILLARS.map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 6 }}>
              <Paper sx={{ ...cardSx, display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                    color: "#2196F3",
                  }}
                >
                  {p.icon}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#E2E8F0" }}>
                      {p.title}
                    </Typography>
                    <Chip
                      label={p.subtitle}
                      size="small"
                      sx={{ bgcolor: "#0a1628", color: "#00BCD4" }}
                    />
                  </Box>
                </Box>
                <Typography sx={{ color: "#94A3B8", mb: 2 }}>
                  {p.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {p.details.map((d) => (
                    <Typography
                      key={d}
                      sx={{
                        color: "#94A3B8",
                        fontSize: "0.9rem",
                        pl: 2,
                        mb: 0.5,
                        "&::before": { content: '"→ "', color: "#00BCD4" },
                      }}
                    >
                      {d}
                    </Typography>
                  ))}
                </Box>
                <Box
                  sx={{
                    mt: "auto",
                    pt: 1.5,
                    borderTop: "1px solid #1a3a5c",
                  }}
                >
                  <Typography sx={{ color: "#64748B", fontSize: "0.85rem" }}>
                    <strong>Cost:</strong> {p.cost}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Piece Table Deep Dive */}
      <Container maxWidth="md" sx={sectionSx}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <StorageIcon sx={{ color: "#2196F3", fontSize: 32 }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Piece Table Operations
          </Typography>
        </Box>
        <TableContainer component={Paper} sx={{ bgcolor: "#162D50" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#94A3B8", fontWeight: 700 }}>
                  Operation
                </TableCell>
                <TableCell sx={{ color: "#94A3B8", fontWeight: 700 }}>
                  What Happens
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PIECE_TABLE_OPS.map((op) => (
                <TableRow key={op.operation}>
                  <TableCell sx={{ color: "#E2E8F0", fontWeight: 600 }}>
                    {op.operation}
                  </TableCell>
                  <TableCell sx={{ color: "#94A3B8" }}>{op.what}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Paper sx={{ ...cardSx, mt: 3, borderLeft: "3px solid #00BCD4" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Performance Characteristics
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography sx={{ color: "#00BCD4", fontWeight: 700 }}>
                Lookup
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                O(log n) via binary search on prefix sums
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography sx={{ color: "#00BCD4", fontWeight: 700 }}>
                Insert / Delete
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                O(n) to rebuild prefix sums (n stays small)
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography sx={{ color: "#00BCD4", fontWeight: 700 }}>
                Memory
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                Only inserted text copied; original stays mapped
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Encoding Detection */}
      <Container maxWidth="md" sx={sectionSx}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <EncodingIcon sx={{ color: "#2196F3", fontSize: 32 }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Encoding Detection Pipeline
          </Typography>
        </Box>
        <Typography sx={{ color: "#94A3B8", mb: 3 }}>
          SpeedPad auto-detects encoding on open using a four-step cascade.
          Decoding happens per-line at render time — the entire file is never
          converted to wide characters at once.
        </Typography>
        <Grid container spacing={2}>
          {ENCODING_STEPS.map((e) => (
            <Grid key={e.step} size={{ xs: 12, sm: 6 }}>
              <Paper sx={cardSx}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "#2196F3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                    }}
                  >
                    {e.step}
                  </Box>
                  <Typography sx={{ fontWeight: 700 }}>{e.method}</Typography>
                </Box>
                <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                  {e.detail}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Feature Size Limits */}
      <Container maxWidth="md" sx={sectionSx}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <SecurityIcon sx={{ color: "#2196F3", fontSize: 32 }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Feature-Specific Size Limits
          </Typography>
        </Box>
        <Typography sx={{ color: "#94A3B8", mb: 3 }}>
          Some features need to process entire file contents (not just a
          viewport). Files exceeding these limits are silently skipped by the
          respective feature — the file remains fully viewable and editable.
        </Typography>
        <TableContainer component={Paper} sx={{ bgcolor: "#162D50" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#94A3B8", fontWeight: 700 }}>
                  Feature
                </TableCell>
                <TableCell sx={{ color: "#94A3B8", fontWeight: 700 }}>
                  Max File Size
                </TableCell>
                <TableCell sx={{ color: "#94A3B8", fontWeight: 700 }}>
                  Reason
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {SIZE_LIMITS.map((l) => (
                <TableRow key={l.feature}>
                  <TableCell sx={{ color: "#E2E8F0", fontWeight: 600 }}>
                    {l.feature}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={l.maxSize}
                      size="small"
                      sx={{ bgcolor: "#0a1628", color: "#00BCD4" }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#94A3B8" }}>{l.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Tail Mode */}
      <Container maxWidth="md" sx={sectionSx}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <TimerIcon sx={{ color: "#2196F3", fontSize: 32 }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Tail Mode & File Monitoring
          </Typography>
        </Box>
        <Paper sx={cardSx}>
          <Typography sx={{ color: "#94A3B8", mb: 2 }}>
            Designed for monitoring large, actively-growing production logs:
          </Typography>
          {[
            "Background thread uses ReadDirectoryChangesW to detect file size changes",
            "File growth → refresh memory mapping + extend line index incrementally",
            "Auto-scroll keeps viewport at end of file",
            "File shrink (log rotation) → full line index rebuild",
            "Rate display via circular buffer of line-count samples (lines/sec)",
            "Thread communicates via PostMessage — never accesses app state directly",
          ].map((item) => (
            <Typography
              key={item}
              sx={{
                color: "#94A3B8",
                fontSize: "0.9rem",
                pl: 2,
                mb: 0.5,
                "&::before": { content: '"→ "', color: "#00BCD4" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Paper>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Background Operations */}
      <Container maxWidth="md" sx={sectionSx}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
          <CodeIcon sx={{ color: "#2196F3", fontSize: 32 }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Background Operations
          </Typography>
        </Box>
        <Paper sx={{ ...cardSx, borderLeft: "3px solid #2196F3" }}>
          <Typography sx={{ color: "#94A3B8", mb: 2 }}>
            Operations on files larger than 1 MB automatically run on a
            background thread to keep the UI responsive:
          </Typography>
          <Grid container spacing={1}>
            {BACKGROUND_OPS.map((op) => (
              <Grid key={op} size={{ xs: 12, sm: 6 }}>
                <Chip
                  label={op}
                  sx={{
                    bgcolor: "#0a1628",
                    color: "#94A3B8",
                    mb: 0.5,
                    maxWidth: "100%",
                    "& .MuiChip-label": { whiteSpace: "normal" },
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Typography sx={{ color: "#64748B", fontSize: "0.85rem", mt: 2 }}>
            Files under 1 MB are processed inline on the UI thread for lower
            latency.
          </Typography>
        </Paper>
      </Container>

      {/* Bottom CTA */}
      <Box sx={{ bgcolor: "#162D50", py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            All of this in {EXE_SIZE}
          </Typography>
          <Typography sx={{ color: "#94A3B8", mb: 4 }}>
            No runtime, no dependencies, no installer. Just engineering.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              href="/download"
              sx={{ bgcolor: "#2196F3" }}
            >
              Download SpeedPad
            </Button>
            <Button
              variant="outlined"
              href="/features"
              sx={{ borderColor: "#00BCD4", color: "#00BCD4" }}
            >
              See All 160+ Features
            </Button>
            <Button
              variant="outlined"
              href="/getting-started"
              sx={{ borderColor: "#94A3B8", color: "#94A3B8" }}
            >
              Quick Start Guide
            </Button>
          </Box>
        </Container>
      </Box>

      {/* D3D Renderer Section */}
      <Box sx={{ py: 8, bgcolor: "rgba(0,188,212,0.04)" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <SpeedIcon color="secondary" />
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Direct2D Hardware Renderer
            </Typography>
            <Chip label="New in v2.56.0" color="secondary" size="small" />
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 700 }}>
            SpeedPad now includes a Direct2D hardware-accelerated text renderer alongside the classic GDI path.
            Toggle between them at runtime with <strong>Ctrl+Alt+D</strong> — no restart required.
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 3, height: "100%", bgcolor: "rgba(0,188,212,0.06)", border: "1px solid rgba(0,188,212,0.15)", borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Phase 1 — Foundation</Typography>
                <Typography variant="body2" color="text.secondary">
                  Direct2D/DirectWrite rendering pipeline with GPU-accelerated text layout.
                  ClearType subpixel positioning. ~400 lines of focused rendering code.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 3, height: "100%", bgcolor: "rgba(0,188,212,0.06)", border: "1px solid rgba(0,188,212,0.15)", borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Phase 2 — Runtime Toggle</Typography>
                <Typography variant="body2" color="text.secondary">
                  Press <strong>Ctrl+Alt+D</strong> to switch between GDI (classic) and Direct2D
                  (hardware) renderers instantly. GDI remains the proven default.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 3, height: "100%", bgcolor: "rgba(0,188,212,0.06)", border: "1px solid rgba(0,188,212,0.15)", borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Phase 3 — Benchmark</Typography>
                <Typography variant="body2" color="text.secondary">
                  Built-in real-time benchmark compares GDI vs D2D rendering performance
                  side by side. See exact frame times and paint metrics for your hardware.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Security Posture */}
      <Box sx={{ py: 8, bgcolor: "rgba(33,150,243,0.04)" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <SecurityIcon color="primary" />
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Security Posture
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {[
              { title: "Memory-Safe Coding Discipline", desc: "C++17 with RAII throughout. No raw new/delete in application code. Smart pointers and stack allocation prevent memory leaks and use-after-free bugs." },
              { title: "Continuous Test Growth", desc: `${TEST_COUNT} automated test suites and growing. Every bug fix ships with a regression test. Full validation runs on every build.` },
              { title: "Release Verification Cadence", desc: `${RELEASE_NUMBER} releases across 41 consecutive sprints. Every release passes ctest -C Release before deployment.` },
              { title: "Vulnerability Response Workflow", desc: "Bugs are tracked (B-series), fixed, and verified within sprint boundaries. The team's incident playbook ensures reproducible root-cause analysis." },
            ].map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                <Paper elevation={0} sx={{ p: 2.5, height: "100%", bgcolor: "background.paper", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
