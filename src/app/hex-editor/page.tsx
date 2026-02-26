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
} from "@mui/material";
import {
  Memory as MemoryIcon,
  Code as CodeIcon,
  Search as SearchIcon,
  SwapHoriz as SwapIcon,
  Undo as UndoIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CURRENT_VERSION, EXE_SIZE, TEST_COUNT } from "@/lib/product-config";

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
    title: "Zero Extra Cost",
    desc: `SpeedHexPad is built into the same ${EXE_SIZE} executable. No plugins to install, no extra downloads. It's just SpeedPad.`,
    shortcut: "Built-in",
  },
];

const comparison = [
  { feature: "Hex View", sp: "✅", hxd: "✅", winhex: "✅", vsc: "Plugin" },
  { feature: "Hex Edit", sp: "✅", hxd: "✅", winhex: "✅", vsc: "Plugin" },
  { feature: "Binary Inspector", sp: "✅", hxd: "✅", winhex: "✅", vsc: "❌" },
  { feature: "Endianness Toggle", sp: "✅", hxd: "❌", winhex: "✅", vsc: "❌" },
  { feature: "Text Editor Built-in", sp: "✅", hxd: "❌", winhex: "❌", vsc: "✅" },
  { feature: "100GB+ File Support", sp: "✅", hxd: "❌", winhex: "✅", vsc: "❌" },
  { feature: "Tail Mode", sp: "✅", hxd: "❌", winhex: "❌", vsc: "❌" },
  { feature: "Log Correlation", sp: "✅", hxd: "❌", winhex: "❌", vsc: "❌" },
  { feature: "Undo/Redo", sp: "500 levels", hxd: "∞", winhex: "Limited", vsc: "Plugin" },
  { feature: "Price", sp: "Free", hxd: "Free", winhex: "€89+", vsc: "Free + Plugin" },
  { feature: "Total Size", sp: EXE_SIZE, hxd: "~4 MB", winhex: "~8 MB", vsc: "~400 MB" },
];

export default function HexEditorPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 6, md: 10 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Chip label={`New in ${CURRENT_VERSION}`} color="secondary" variant="outlined" sx={{ mb: 2 }} />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", md: "3.8rem" },
              fontWeight: 800,
              mb: 2,
              background: "linear-gradient(135deg, #00BCD4, #9C27B0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SpeedHexPad
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 1, fontWeight: 400, maxWidth: 600, mx: "auto" }}>
            A full hex editor — built into SpeedPad.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 550, mx: "auto" }}>
            View, edit, search, and inspect binary files without leaving your text editor.
            Press <strong>Ctrl+Alt+H</strong> to enter hex mode. That&apos;s it.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="contained" size="large" href="/download" sx={{ px: 4, py: 1.5 }}>
              Download SpeedPad
            </Button>
            <Button variant="outlined" size="large" href="/features" sx={{ px: 4, py: 1.5, borderColor: "#00BCD4", color: "#00BCD4" }}>
              All Features
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Capabilities Grid */}
      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "rgba(0,188,212,0.03)" }}>
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
                    bgcolor: "rgba(0,188,212,0.05)",
                    border: "1px solid rgba(0,188,212,0.12)",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Box sx={{ color: "secondary.main" }}>{c.icon}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>{c.title}</Typography>
                      <Chip label={c.shortcut} size="small" variant="outlined" sx={{ mt: 0.5 }} />
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
          How It Works
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
          {[
            { step: "1", title: "Open Any File", desc: "Open a binary file normally — SpeedPad opens it in text mode." },
            { step: "2", title: "Press Ctrl+Alt+H", desc: "Switch to hex view. The file is displayed as hex bytes with an ASCII sidebar." },
            { step: "3", title: "Edit & Inspect", desc: "Click to edit bytes, select to inspect data types, search for patterns." },
          ].map((s) => (
            <Paper key={s.step} elevation={0} sx={{ p: 3, textAlign: "center", bgcolor: "background.paper", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 2 }}>
              <Typography variant="h2" color="secondary.main" sx={{ fontSize: "2.5rem", mb: 1 }}>
                {s.step}
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>{s.title}</Typography>
              <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Comparison Table */}
      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "rgba(33,150,243,0.03)" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}>
            SpeedHexPad vs Dedicated Hex Editors
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Feature</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>SpeedPad</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>HxD</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>WinHex</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>VS Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparison.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell>{row.feature}</TableCell>
                    <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>{row.sp}</TableCell>
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

      {/* CTA */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          One Editor. Text + Hex.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: "auto" }}>
          Stop switching between your text editor and your hex editor.
          SpeedPad does both — in {EXE_SIZE}, with {TEST_COUNT} tests, and zero dependencies.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" href="/download" sx={{ px: 4 }}>
            Download SpeedPad
          </Button>
          <Button variant="outlined" href="/shortcuts" sx={{ borderColor: "#00BCD4", color: "#00BCD4" }}>
            Keyboard Shortcuts
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
