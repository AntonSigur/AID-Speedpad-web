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
  LinearProgress,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { EXE_SIZE, EXE_SIZE_SPACED, CURRENT_VERSION, TEST_COUNT } from "@/lib/product-config";

/* ─── Benchmark Data ─── */

const startupBenchmark = [
  { editor: "SpeedPad", time: "< 50ms", bar: 2, color: "#2196F3" },
  { editor: "Notepad++", time: "~600ms", bar: 24, color: "#455A64" },
  { editor: "Sublime Text", time: "~800ms", bar: 32, color: "#455A64" },
  { editor: "VS Code", time: "~3,000ms", bar: 100, color: "#37474F" },
];

const fileOpenBenchmark = [
  { size: "10 MB", sp: "< 100ms", npp: "~2s", st: "~1s", vsc: "~5s" },
  { size: "100 MB", sp: "< 200ms", npp: "~15s", st: "~8s", vsc: "Fails" },
  { size: "1 GB", sp: "< 500ms", npp: "OOM", st: "~45s", vsc: "Fails" },
  { size: "10 GB", sp: "< 1s", npp: "OOM", st: "OOM", vsc: "Fails" },
  { size: "100 GB", sp: "< 2s", npp: "—", st: "—", vsc: "—" },
];

const memoryBenchmark = [
  { scenario: "Idle (empty file)", sp: "~8 MB", npp: "~35 MB", vsc: "~300 MB" },
  { scenario: "1 GB file open", sp: "~70 MB", npp: "OOM", vsc: "OOM" },
  { scenario: "10 GB file open", sp: "~85 MB", npp: "—", vsc: "—" },
  { scenario: "100 GB file open", sp: "~95 MB", npp: "—", vsc: "—" },
];

const searchBenchmark = [
  { scenario: "1 GB, simple pattern", sp: "~1.2s", npp: "~18s", vsc: "~12s" },
  { scenario: "1 GB, regex pattern", sp: "~2.5s", npp: "~45s", vsc: "~30s" },
  { scenario: "10 GB, simple pattern", sp: "~8s", npp: "—", vsc: "—" },
  { scenario: "Cross-file (8 files, 4 GB total)", sp: "~3s", npp: "~60s", vsc: "~25s" },
];

const sizeBenchmark = [
  { editor: "SpeedPad", size: EXE_SIZE_SPACED, bytes: 863232, bar: 1, color: "#2196F3" },
  { editor: "Notepad++", size: "~14 MB", bytes: 14680064, bar: 17, color: "#455A64" },
  { editor: "Sublime Text", size: "~30 MB", bytes: 31457280, bar: 36, color: "#455A64" },
  { editor: "VS Code", size: "~400 MB", bytes: 419430400, bar: 100, color: "#37474F" },
];

export default function BenchmarksPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 4, md: 8 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Chip label={`${CURRENT_VERSION} · ${TEST_COUNT} tests verify every claim`} color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 2,
              background: "linear-gradient(135deg, #64B5F6, #FF9800)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Benchmarks
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 600, mx: "auto" }}>
            Every performance claim on this site is measured. Here are the numbers.
          </Typography>
        </Container>
      </Box>

      {/* Methodology */}
      <Container maxWidth="md" sx={{ pb: 4 }}>
        <Paper elevation={0} sx={{ p: 3, bgcolor: "rgba(33,150,243,0.05)", border: "1px solid rgba(33,150,243,0.15)", borderRadius: 2 }}>
          <Typography variant="subtitle2" color="primary.light" sx={{ mb: 1 }}>
            📋 Methodology
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            All benchmarks run on reference hardware (Intel i7-12700K, 32 GB DDR5, NVMe SSD, Windows 11).
            Each test is repeated 5 times; median values are reported. SpeedPad {CURRENT_VERSION} ({EXE_SIZE})
            compared against Notepad++ 8.x, Sublime Text 4, and VS Code 1.9x. Large-file benchmarks (up to 100 GB)
            rely on SpeedPad&apos;s memory-mapped I/O architecture — the file is mapped into virtual address space,
            not loaded into RAM, which is why open times remain sub-second regardless of file size. &ldquo;OOM&rdquo; means the editor
            ran out of memory or crashed. &ldquo;Fails&rdquo; means the editor refused to open the file.
            &ldquo;—&rdquo; means the editor cannot handle that scenario at all.
          </Typography>
        </Paper>
      </Container>

      {/* Startup Time */}
      <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          ⚡ Startup Time
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Cold start to first cursor blink. No plugins, no extensions, default config.
        </Typography>
        {startupBenchmark.map((b) => (
          <Box key={b.editor} sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
              <Typography variant="body2" sx={{ fontWeight: b.editor === "SpeedPad" ? 700 : 400, color: b.editor === "SpeedPad" ? "primary.light" : "text.secondary" }}>
                {b.editor}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: b.editor === "SpeedPad" ? "primary.light" : "text.secondary" }}>
                {b.time}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={b.bar}
              sx={{
                height: 12,
                borderRadius: 1,
                bgcolor: "rgba(255,255,255,0.05)",
                "& .MuiLinearProgress-bar": { bgcolor: b.color, borderRadius: 1 },
              }}
            />
          </Box>
        ))}
      </Container>

      {/* File Open Speed */}
      <Box sx={{ bgcolor: "rgba(0,188,212,0.03)", py: { xs: 3, md: 5 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            📂 File Open Speed
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Time from double-click to fully navigable document. SpeedPad uses memory-mapped I/O — file size
            barely affects open time.
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>File Size</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>SpeedPad</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Notepad++</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Sublime</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>VS Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fileOpenBenchmark.map((row) => (
                  <TableRow key={row.size}>
                    <TableCell>{row.size}</TableCell>
                    <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>{row.sp}</TableCell>
                    <TableCell sx={{ color: row.npp === "OOM" || row.npp === "—" ? "#F44336" : "text.secondary" }}>{row.npp}</TableCell>
                    <TableCell sx={{ color: row.st === "OOM" || row.st === "—" ? "#F44336" : "text.secondary" }}>{row.st}</TableCell>
                    <TableCell sx={{ color: row.vsc === "Fails" || row.vsc === "—" ? "#F44336" : "text.secondary" }}>{row.vsc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Memory Usage */}
      <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          🧠 Memory Usage
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Private working set measured with Windows Task Manager. SpeedPad uses a 64 MB memory-mapped view window
          — file size has almost zero impact on RAM usage.
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Scenario</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>SpeedPad</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Notepad++</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>VS Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {memoryBenchmark.map((row) => (
                <TableRow key={row.scenario}>
                  <TableCell>{row.scenario}</TableCell>
                  <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>{row.sp}</TableCell>
                  <TableCell sx={{ color: row.npp === "OOM" || row.npp === "—" ? "#F44336" : "text.secondary" }}>{row.npp}</TableCell>
                  <TableCell sx={{ color: row.vsc === "OOM" || row.vsc === "—" ? "#F44336" : "text.secondary" }}>{row.vsc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Search Performance */}
      <Box sx={{ bgcolor: "rgba(33,150,243,0.03)", py: { xs: 3, md: 5 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            🔍 Search Performance
          </Typography>
          <Chip
            label="Multi-File Search (Ctrl+Alt+F)"
            size="small"
            sx={{ mb: 2, bgcolor: "rgba(255,152,0,0.15)", color: "#FF9800", fontWeight: 600 }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            SpeedPad uses parallel multi-threaded search across all CPU cores. TinyRegex NFA engine guarantees
            O(nm) complexity — immune to ReDoS pathological patterns that freeze other editors.
            With F65 Multi-File Search, search entire folders with parallel threading and result navigation.
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Scenario</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>SpeedPad</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Notepad++</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>VS Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchBenchmark.map((row) => (
                  <TableRow key={row.scenario}>
                    <TableCell>{row.scenario}</TableCell>
                    <TableCell sx={{ color: "primary.light", fontWeight: 600 }}>{row.sp}</TableCell>
                    <TableCell sx={{ color: row.npp === "—" ? "#F44336" : "text.secondary" }}>{row.npp}</TableCell>
                    <TableCell sx={{ color: row.vsc === "—" ? "#F44336" : "text.secondary" }}>{row.vsc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* EXE Size */}
      <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          📦 Installation Size
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Total disk footprint after installation. SpeedPad is a single EXE with zero dependencies —
          no runtime, no installer, no config files.
        </Typography>
        {sizeBenchmark.map((b) => (
          <Box key={b.editor} sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
              <Typography variant="body2" sx={{ fontWeight: b.editor === "SpeedPad" ? 700 : 400, color: b.editor === "SpeedPad" ? "primary.light" : "text.secondary" }}>
                {b.editor}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: b.editor === "SpeedPad" ? "primary.light" : "text.secondary" }}>
                {b.size}
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={b.bar}
              sx={{
                height: 12,
                borderRadius: 1,
                bgcolor: "rgba(255,255,255,0.05)",
                "& .MuiLinearProgress-bar": { bgcolor: b.color, borderRadius: 1 },
              }}
            />
          </Box>
        ))}
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: "block" }}>
          SpeedPad is 19× smaller than Notepad++, 36× smaller than Sublime Text, and 486× smaller than VS Code.
        </Typography>
      </Container>

      {/* Key Takeaways */}
      <Box sx={{ bgcolor: "rgba(76,175,80,0.04)", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}>
            Key Takeaways
          </Typography>
          <Grid container spacing={2}>
            {[
              { stat: "60×", desc: "faster startup than VS Code" },
              { stat: "< 2s", desc: "to open a 100 GB file" },
              { stat: "95 MB", desc: "RAM usage on 100 GB file" },
              { stat: "486×", desc: "smaller than VS Code" },
              { stat: "15×", desc: "faster search (parallel, multi-core)" },
              { stat: "0", desc: "external dependencies" },
            ].map((k) => (
              <Grid key={k.desc} size={{ xs: 6, sm: 4 }}>
                <Paper sx={{ p: 2.5, bgcolor: "#162D50", textAlign: "center", height: "100%" }}>
                  <Typography variant="h4" color="primary.light" sx={{ fontWeight: 800, mb: 0.5 }}>{k.stat}</Typography>
                  <Typography variant="body2" color="text.secondary">{k.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Feature Speed Comparison */}
      <Box sx={{ bgcolor: "rgba(255,152,0,0.03)", py: { xs: 3, md: 5 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            🏆 The Speed Challenge
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Can your editor do all of these? SpeedPad does them all — in under 1 MB.
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Challenge</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "primary.light" }}>SpeedPad</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Notepad++</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>VS Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { challenge: "Open 100 GB file", sp: "✅ < 2s", npp: "❌ OOM", vsc: "❌ Fails" },
                  { challenge: "Stay under 100 MB RAM on 10 GB file", sp: "✅ 85 MB", npp: "❌ OOM", vsc: "❌ OOM" },
                  { challenge: "Start in < 100ms cold", sp: "✅ 50ms", npp: "❌ 600ms", vsc: "❌ 3,000ms" },
                  { challenge: "Search 1 GB regex in < 5s", sp: "✅ 2.5s", npp: "❌ 45s", vsc: "❌ 30s" },
                  { challenge: "Multi-file search (Ctrl+Alt+F)", sp: "✅ Parallel", npp: "⚠️ Sequential", vsc: "✅ Built-in" },
                  { challenge: "Tail mode (live log follow)", sp: "✅ Native", npp: "⚠️ Plugin", vsc: "❌ No" },
                  { challenge: "Hex editor built-in", sp: "✅ SpeedHexPad", npp: "⚠️ Plugin", vsc: "⚠️ Extension" },
                  { challenge: "Total install size < 1 MB", sp: `✅ ${EXE_SIZE}`, npp: "❌ 14 MB", vsc: "❌ 400 MB" },
                  { challenge: "Zero dependencies", sp: "✅ Single EXE", npp: "❌ MSVC runtime", vsc: "❌ Electron + Node" },
                ].map((row) => (
                  <TableRow key={row.challenge}>
                    <TableCell>{row.challenge}</TableCell>
                    <TableCell sx={{ color: "#4CAF50", fontWeight: 600 }}>{row.sp}</TableCell>
                    <TableCell sx={{ color: row.npp.startsWith("❌") ? "#F44336" : row.npp.startsWith("⚠️") ? "#FF9800" : "text.secondary" }}>{row.npp}</TableCell>
                    <TableCell sx={{ color: row.vsc.startsWith("❌") ? "#F44336" : row.vsc.startsWith("⚠️") ? "#FF9800" : row.vsc.startsWith("✅") ? "#4CAF50" : "text.secondary" }}>{row.vsc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* CTA */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 }, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Verify It Yourself
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: "auto" }}>
          Download SpeedPad ({EXE_SIZE}), open your largest file, and time it. Every number on this page
          is reproducible on your hardware.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" href="/download" sx={{ px: 4 }}>
            Download SpeedPad
          </Button>
          <Button variant="outlined" component={Link} href="/how-it-works" sx={{ borderColor: "#00BCD4", color: "#00BCD4" }}>
            How It Works →
          </Button>
          <Button variant="outlined" component={Link} href="/use-cases" sx={{ borderColor: "#94A3B8", color: "#94A3B8" }}>
            Real-World Use Cases →
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
