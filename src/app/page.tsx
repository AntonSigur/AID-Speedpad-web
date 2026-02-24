"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import {
  Speed as SpeedIcon,
  Memory as MemoryIcon,
  Search as SearchIcon,
  Terminal as TerminalIcon,
  Visibility as VisibilityIcon,
  BugReport as BugReportIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "Opens Instantly",
    desc: "< 50ms startup. No loading delay, no splash screen.",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 40 }} />,
    title: "775 KB Total",
    desc: "18× smaller than Notepad++. 513× smaller than VS Code.",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 40 }} />,
    title: "Parallel Search",
    desc: "Uses all CPU cores for blazing cross-file search.",
  },
  {
    icon: <TerminalIcon sx={{ fontSize: 40 }} />,
    title: "Tail Mode & Pipes",
    desc: "Live-follow logs like tail -f. Pipe any command in.",
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
    title: "6 Lens Plugins",
    desc: "CSV, JSON, Log, XML/YAML, GZ, Frequency analysis.",
  },
  {
    icon: <BugReportIcon sx={{ fontSize: 40 }} />,
    title: "Anomaly Detection",
    desc: "Auto-detect log anomalies and highlight them instantly.",
  },
];

const comparison = [
  { feature: "EXE Size", sp: "775 KB", npp: "14 MB", vsc: "400 MB" },
  { feature: "Startup Time", sp: "< 50ms", npp: "~1.5s", vsc: "~3s" },
  { feature: "Tail Mode", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Pipe / Stdin", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Parallel Search", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Reverse View", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Anomaly Detection", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Compressed Files", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Solitaire", sp: "🐜", npp: "❌", vsc: "❌" },
];

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 6, md: 10 }, textAlign: "center" }}>
        <Chip label="v2.10.1 — 46/46 tests passing" color="primary" variant="outlined" sx={{ mb: 3 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4.5rem" }, mb: 2, background: "linear-gradient(135deg, #64B5F6, #00BCD4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          SpeedPad. 775KB.
          <br />
          Opens 100GB Files.
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 5, maxWidth: 600, mx: "auto", fontWeight: 400 }}>
          A blazing-fast Windows text editor for DevOps engineers, data analysts, and developers who work with large files and live logs.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" startIcon={<DownloadIcon />} sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}>
            Download SpeedPad
          </Button>
          <Button variant="outlined" size="large" href="/features" sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}>
            Explore Features
          </Button>
        </Box>

        {/* Size comparison visual */}
        <Box sx={{ mt: 8, p: 4, borderRadius: 3, background: "rgba(33, 150, 243, 0.05)", border: "1px solid rgba(33, 150, 243, 0.15)" }}>
          <Typography variant="overline" color="text.secondary" sx={{ mb: 3, display: "block" }}>
            Size Comparison
          </Typography>
          <Box sx={{ display: "flex", alignItems: "end", justifyContent: "center", gap: { xs: 2, md: 4 }, height: 180 }}>
            {[
              { name: "SpeedPad", size: "775 KB", height: 12, color: "#2196F3" },
              { name: "Notepad++", size: "14 MB", height: 60, color: "#455A64" },
              { name: "VS Code", size: "400 MB", height: 170, color: "#37474F" },
            ].map((ed) => (
              <Box key={ed.name} sx={{ textAlign: "center" }}>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: "block" }}>
                  {ed.size}
                </Typography>
                <Box sx={{ width: { xs: 60, md: 100 }, height: ed.height, bgcolor: ed.color, borderRadius: "6px 6px 0 0", transition: "all 0.3s" }} />
                <Typography variant="body2" sx={{ mt: 1, fontWeight: ed.name === "SpeedPad" ? 700 : 400, color: ed.name === "SpeedPad" ? "primary.light" : "text.secondary" }}>
                  {ed.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Feature Grid */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" sx={{ mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Built for Speed
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 500, mx: "auto" }}>
            17 unique features no other editor has. Zero external dependencies.
          </Typography>
          <Grid container spacing={3}>
            {features.map((f) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={f.title}>
                <Card elevation={0} sx={{ height: "100%", bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", "&:hover": { borderColor: "primary.dark", bgcolor: "rgba(33, 150, 243, 0.04)" }, transition: "all 0.2s" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ color: "primary.main", mb: 2 }}>{f.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {f.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {f.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Comparison Table */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" textAlign="center" sx={{ mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
          How SpeedPad Compares
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 5 }}>
          Side-by-side with popular editors
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "background.paper", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Feature</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, color: "primary.light" }}>SpeedPad</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700 }}>Notepad++</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700 }}>VS Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comparison.map((row) => (
                <TableRow key={row.feature} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                  <TableCell>{row.feature}</TableCell>
                  <TableCell align="center" sx={{ color: "primary.light", fontWeight: 600 }}>{row.sp}</TableCell>
                  <TableCell align="center">{row.npp}</TableCell>
                  <TableCell align="center">{row.vsc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
