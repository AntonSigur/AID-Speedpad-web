"use client";

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import {
  Memory as MemoryIcon,
  Code as CodeIcon,
  Search as SearchIcon,
  SwapHoriz as SwapIcon,
  Undo as UndoIcon,
  Speed as SpeedIcon,
  ViewList as TemplateIcon,
  Bookmark as BookmarkIcon,
  CompareArrows as CompareArrowsIcon,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CURRENT_VERSION, EXE_SIZE, TEST_COUNT, DOWNLOAD_ZIP } from "@/lib/product-config";

/* Green accent palette for SpeedHexPad (PO-confirmed) */
const HEX_GREEN = "#4CAF50";
const HEX_GREEN_LIGHT = "#66BB6A";
const HEX_GREEN_BG = "rgba(76,175,80,0.04)";
const HEX_GREEN_BORDER = "rgba(76,175,80,0.15)";

const capabilities = [
  {
    icon: <MemoryIcon sx={{ fontSize: 36 }} />,
    title: "Hex View & Edit",
    desc: "View any file as hex bytes. Overwrite, insert, and delete bytes directly. Address column + ASCII sidebar.",
    shortcut: "Ctrl+Alt+H",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 36 }} />,
    title: "F64 Binary Inspector",
    desc: "Select bytes to interpret as int8/16/32/64, float32, float64, or decoded strings. Data type panel updates live.",
    shortcut: "Select bytes",
  },
  {
    icon: <SwapIcon sx={{ fontSize: 36 }} />,
    title: "Endianness Toggle",
    desc: "Switch between little-endian and big-endian byte interpretation with one click. Essential for cross-platform binary analysis.",
    shortcut: "Ctrl+E",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 36 }} />,
    title: "Hex Search & Goto",
    desc: "Search for hex byte patterns (Ctrl+F). Jump to any offset in hex or decimal (Ctrl+G). F3/Shift+F3 for next/prev.",
    shortcut: "Ctrl+F / Ctrl+G",
  },
  {
    icon: <UndoIcon sx={{ fontSize: 36 }} />,
    title: "PieceTable Undo/Redo",
    desc: "Every hex edit is tracked by the same PieceTable that powers text editing. Full 500-level undo/redo in hex mode.",
    shortcut: "Ctrl+Z / Ctrl+Y",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 36 }} />,
    title: "Standalone or Built-in",
    desc: "SpeedHexPad.exe runs independently or is accessible inside SpeedPad via Ctrl+Alt+H. Same engine, your choice of workflow.",
    shortcut: "v2.65.0+",
  },
  {
    icon: <TemplateIcon sx={{ fontSize: 36 }} />,
    title: "Structure Templates",
    desc: "Overlay JSON-based binary format definitions on hex data. PE headers, ELF binaries, PNG files — field names, types, and values appear inline.",
    shortcut: ".hextemplate.json",
  },
  {
    icon: <BookmarkIcon sx={{ fontSize: 36 }} />,
    title: "Data Bookmarks",
    desc: "Mark hex positions, navigate between bookmarks, and serialize them for later. Essential for tracking offsets in large binary files.",
    shortcut: "Toggle bookmark",
  },
  {
    icon: <CompareArrowsIcon sx={{ fontSize: 36 }} />,
    title: "HexCompare — Binary Diff",
    desc: "Byte-level file comparison: open two binaries side-by-side, differences highlighted in real-time. Navigate between changes with F7/Shift+F7. Essential for firmware updates, patch verification, and binary forensics.",
    shortcut: "F8 / F7 / Shift+F7",
  },
];

const comparison = [
  { feature: "Standalone Binary", sp: "✅", hxd: "✅", winhex: "✅", vsc: "Plugin" },
  { feature: "Hex View & Edit", sp: "✅", hxd: "✅", winhex: "✅", vsc: "Plugin" },
  { feature: "Binary Inspector", sp: "✅", hxd: "✅", winhex: "✅", vsc: "❌" },
  { feature: "Endianness Toggle", sp: "✅", hxd: "❌", winhex: "✅", vsc: "❌" },
  { feature: "Structure Templates", sp: "✅", hxd: "❌", winhex: "❌", vsc: "❌" },
  { feature: "Data Bookmarks", sp: "✅", hxd: "✅", winhex: "✅", vsc: "Plugin" },
  { feature: "Binary Diff (HexCompare)", sp: "✅", hxd: "✅", winhex: "✅", vsc: "Plugin" },
  { feature: "Text Editor Built-in", sp: "✅ (SpeedPad)", hxd: "❌", winhex: "❌", vsc: "✅" },
  { feature: "100GB+ File Support", sp: "✅", hxd: "❌", winhex: "✅", vsc: "❌" },
  { feature: "Tail Mode", sp: "✅ (SpeedPad)", hxd: "❌", winhex: "❌", vsc: "❌" },
  { feature: "Log Correlation", sp: "✅ (SpeedPad)", hxd: "❌", winhex: "❌", vsc: "❌" },
  { feature: "Undo/Redo", sp: "500 levels", hxd: "∞", winhex: "Limited", vsc: "Plugin" },
  { feature: "Price", sp: "Free", hxd: "Free", winhex: "€89+", vsc: "Free + Plugin" },
  { feature: "Total Size", sp: EXE_SIZE, hxd: "~4 MB", winhex: "~8 MB", vsc: "~400 MB" },
];

export default function HexEditorPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero — SpeedHexPad.exe standalone */}
      <Box sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 6, md: 10 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Chip label="Now a Standalone Binary" sx={{ mb: 2, bgcolor: "rgba(76,175,80,0.15)", color: HEX_GREEN_LIGHT, borderColor: HEX_GREEN, fontWeight: 600 }} variant="outlined" />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", md: "3.8rem" },
              fontWeight: 800,
              mb: 2,
              background: `linear-gradient(135deg, ${HEX_GREEN}, #00BCD4)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SpeedHexPad.exe
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 1, fontWeight: 400, maxWidth: 650, mx: "auto" }}>
            A dedicated hex editor. Free. Under 1MB. Zero dependencies.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 550, mx: "auto" }}>
            Since {CURRENT_VERSION}, SpeedHexPad ships as its own standalone binary — built on the same
            engine that powers SpeedPad, sharing the <code>speedpad_core.lib</code> foundation.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href="/download"
              sx={{ px: 4, py: 1.5, bgcolor: HEX_GREEN, "&:hover": { bgcolor: "#388E3C" } }}
            >
              Download SpeedHexPad.exe
            </Button>
            <Button variant="outlined" size="large" href="/download" sx={{ px: 4, py: 1.5, borderColor: "#2196F3", color: "#2196F3" }}>
              Download SpeedPad.exe
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Dual Product Architecture */}
      <Box sx={{ py: { xs: 3, md: 5 }, bgcolor: HEX_GREEN_BG }}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ p: 3, height: "100%", border: `1px solid ${HEX_GREEN_BORDER}`, borderRadius: 2, bgcolor: "rgba(76,175,80,0.03)" }}>
                <Chip label="Standalone" size="small" sx={{ mb: 1.5, bgcolor: "rgba(76,175,80,0.2)", color: HEX_GREEN_LIGHT }} />
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: HEX_GREEN_LIGHT }}>SpeedHexPad.exe</Typography>
                <Typography variant="body2" color="text.secondary">
                  Dedicated hex editor binary. Run it directly for pure binary analysis without the text editor.
                  Same engine, focused workflow.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ p: 3, height: "100%", border: "1px solid rgba(33,150,243,0.15)", borderRadius: 2, bgcolor: "rgba(33,150,243,0.03)" }}>
                <Chip label="Built into SpeedPad" size="small" sx={{ mb: 1.5, bgcolor: "rgba(33,150,243,0.2)", color: "#64B5F6" }} />
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#64B5F6" }}>Ctrl+Alt+H in SpeedPad</Typography>
                <Typography variant="body2" color="text.secondary">
                  Toggle hex mode inside SpeedPad. Switch between text and hex views instantly.
                  Same capabilities, integrated into your text editor.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: "center", fontStyle: "italic" }}>
            Both share <code>speedpad_core.lib</code> — the same C++17 foundation. Same features, same performance.
          </Typography>
        </Container>
      </Box>

      {/* Capabilities Grid */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}>
            Capabilities
          </Typography>
          <Grid container spacing={3}>
            {capabilities.map((c) => (
              <Grid key={c.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    bgcolor: HEX_GREEN_BG,
                    border: `1px solid ${HEX_GREEN_BORDER}`,
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Box sx={{ color: HEX_GREEN }}>{c.icon}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>{c.title}</Typography>
                      <Chip label={c.shortcut} size="small" variant="outlined" sx={{ mt: 0.5, borderColor: HEX_GREEN_BORDER, color: HEX_GREEN_LIGHT }} />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary">{c.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}>
          Get Started
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
          {[
            { step: "1", title: "Download", desc: "Grab SpeedHexPad.exe (standalone) or SpeedPad.exe (text + hex). Both under 1MB." },
            { step: "2", title: "Open a Binary", desc: "Drag & drop any file, or use Ctrl+Alt+H inside SpeedPad to switch to hex view." },
            { step: "3", title: "Edit & Inspect", desc: "Click to edit bytes, select to inspect data types, load structure templates for format overlays." },
          ].map((s) => (
            <Paper key={s.step} elevation={0} sx={{ p: 3, textAlign: "center", bgcolor: "background.paper", border: `1px solid ${HEX_GREEN_BORDER}`, borderRadius: 2 }}>
              <Typography variant="h2" sx={{ fontSize: "2.5rem", mb: 1, color: HEX_GREEN }}>
                {s.step}
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>{s.title}</Typography>
              <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Comparison Table */}
      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: HEX_GREEN_BG }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}>
            SpeedHexPad vs Dedicated Hex Editors
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: `1px solid ${HEX_GREEN_BORDER}` }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Feature</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: HEX_GREEN_LIGHT }}>SpeedHexPad</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>HxD</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>WinHex</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>VS Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparison.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell>{row.feature}</TableCell>
                    <TableCell sx={{ color: HEX_GREEN_LIGHT, fontWeight: 600 }}>{row.sp}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{row.hxd}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{row.winhex}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{row.vsc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Also Built Into SpeedPad */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Divider sx={{ mb: 6, borderColor: "rgba(255,255,255,0.06)" }} />
          <Chip label="Also Available" color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Built Into SpeedPad
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 550, mx: "auto" }}>
            Don&apos;t need a standalone hex editor? SpeedHexPad is also built into SpeedPad.
            Press <strong>Ctrl+Alt+H</strong> to switch between text and hex views instantly.
            Same capabilities — plus tail mode, log correlation, and multi-file workflows.
          </Typography>
          <Button variant="outlined" size="large" href="/features" sx={{ borderColor: "#2196F3", color: "#2196F3" }}>
            See All SpeedPad Features →
          </Button>
        </Container>
      </Box>

      {/* CTA */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Two Products. One Engine. Zero Bloat.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: "auto" }}>
          SpeedHexPad.exe for dedicated hex editing. SpeedPad.exe for text + hex.
          Both free, both under 1MB, both backed by {TEST_COUNT} tests.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" href="/download" sx={{ px: 4, bgcolor: HEX_GREEN, "&:hover": { bgcolor: "#388E3C" } }}>
            Download SpeedHexPad
          </Button>
          <Button variant="contained" size="large" href="/download" sx={{ px: 4 }}>
            Download SpeedPad
          </Button>
          <Button variant="outlined" component={Link} href="/benchmarks" sx={{ borderColor: "#94A3B8", color: "#94A3B8" }}>
            See Benchmarks
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
