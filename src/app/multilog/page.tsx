"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import {
  MergeType as MergeIcon,
  FolderOpen as FolderIcon,
  Search as SearchIcon,
  Compress as CompressIcon,
  Timeline as TimelineIcon,
  Visibility as VisibilityIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyDownloadCTA from "@/components/StickyDownloadCTA";
import Link from "next/link";
import Image from "next/image";

const capabilities = [
  {
    icon: <FolderIcon sx={{ fontSize: 36 }} />,
    title: "Auto-Discover Rotated Logs",
    desc: "Detects 10 rotation patterns: numeric (.1, .2), compressed (.gz, .bz2, .zst, .xz), date-based, IIS, log4j/NLog. Just open one file — SpeedPad finds the rest.",
  },
  {
    icon: <CompressIcon sx={{ fontSize: 36 }} />,
    title: "Decompress on the Fly",
    desc: "Compressed rotated logs (.gz, .bz2, .zst) are decompressed to temp files automatically. No manual extraction. Temp files are cleaned up when you close.",
  },
  {
    icon: <MergeIcon sx={{ fontSize: 36 }} />,
    title: "Merge Into One Timeline",
    desc: "All discovered log files — plain and compressed — are merged into one chronological stream. Dashed boundary separators show file origin.",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 36 }} />,
    title: "Cross-File Search",
    desc: "Ctrl+Shift+F searches across ALL files in the unified view. Results include global line numbers and file origin labels.",
  },
  {
    icon: <TimelineIcon sx={{ fontSize: 36 }} />,
    title: "Anomaly Detection",
    desc: "Timestamp gap detection works across file boundaries. Amber gutter marks highlight anomalies. Histogram shows section boundary markers.",
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 36 }} />,
    title: "Tail Across Files",
    desc: "Tail mode watches the newest file in the rotation. When the active log rotates, SpeedPad detects the new file and keeps following.",
  },
];

const competitorComparison = [
  { feature: "Auto-discover rotated logs", sp: "✅", npp: "❌", vsc: "❌", splunk: "Config" },
  { feature: "Decompress .gz/.bz2/.zst", sp: "✅ Auto", npp: "❌", vsc: "❌", splunk: "✅" },
  { feature: "Merge into timeline", sp: "✅ Instant", npp: "❌", vsc: "❌", splunk: "✅" },
  { feature: "Cross-file search", sp: "✅ Built-in", npp: "❌", vsc: "❌", splunk: "✅" },
  { feature: "Anomaly across boundaries", sp: "✅", npp: "❌", vsc: "❌", splunk: "❌" },
  { feature: "Tail across rotation", sp: "✅", npp: "❌", vsc: "❌", splunk: "✅" },
  { feature: "Workspace persistence", sp: "✅ .speedws", npp: "❌", vsc: "❌", splunk: "✅" },
  { feature: "Cost", sp: "Free", npp: "Free", vsc: "Free", splunk: "$$$" },
  { feature: "Install size", sp: "758 KB", npp: "14 MB", vsc: "400 MB", splunk: "2+ GB" },
];

const rotationPatterns = [
  { pattern: "Numeric suffix", example: "app.log.1, app.log.2, app.log.3" },
  { pattern: "Gzip compressed", example: "app.log.1.gz, app.log.2.gz" },
  { pattern: "Bzip2 compressed", example: "app.log.1.bz2, app.log.2.bz2" },
  { pattern: "Zstandard", example: "app.log.1.zst, app.log.2.zst" },
  { pattern: "XZ compressed", example: "app.log.1.xz, app.log.2.xz" },
  { pattern: "Date-based", example: "app-2026-02-24.log, app-2026-02-23.log" },
  { pattern: "IIS-style", example: "u_ex260224.log, u_ex260223.log" },
  { pattern: "log4j/NLog", example: "app.2026-02-24.log, app.2026-02-23.log" },
  { pattern: "Size-based rotation", example: "app.log, app.log.1, app.log.2" },
  { pattern: "Mixed patterns", example: "app.log, app.log.1, app.log.2.gz" },
];

export default function MultiLogPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 4, textAlign: "center" }}>
        <Chip label="Only in SpeedPad" color="primary" variant="outlined" sx={{ mb: 2 }} />
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            mb: 2,
            background: "linear-gradient(135deg, #64B5F6, #E91E63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Multi-Log Time Travel
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", fontWeight: 400, mb: 4 }}>
          Open any log file. SpeedPad auto-discovers every rotated,
          compressed, and archived sibling — then merges them into one seamless
          timeline. No manual decompression. No tab switching. Just answers.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" startIcon={<DownloadIcon />} href="/download" sx={{ px: 4, py: 1.5 }}>
            Download SpeedPad
          </Button>
          <Button variant="outlined" size="large" href="/features" sx={{ px: 4, py: 1.5 }}>
            See All Features
          </Button>
        </Box>
      </Container>

      {/* Multi-File Preview */}
      <Container maxWidth="md" sx={{ pb: 2, textAlign: "center" }}>
        <Paper elevation={6} sx={{ display: "inline-block", borderRadius: 2, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
          <Image
            src="/screenshots/speedpad-multi-file-20260225.png"
            alt="SpeedPad with multiple log files open in tabs — payment log and application log"
            width={1024}
            height={768}
            style={{ display: "block", maxWidth: "100%", height: "auto" }}
          />
        </Paper>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
          Multiple log files open side-by-side with tab navigation
        </Typography>
      </Container>

      {/* The Problem */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 3, textAlign: "center" }}>
            The Problem Every DevOps Engineer Knows
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
            Your application crashed at 3 AM. The current log file shows the aftermath, but the root cause?
            It happened 6 hours ago — across 3 rotated files, two of which are gzipped. You need to:
          </Typography>
          <Box component="ol" sx={{ pl: 3, color: "text.secondary" }}>
            <Typography component="li" sx={{ mb: 1 }}>Find all the rotated log files (app.log, app.log.1, app.log.2.gz, app.log.3.gz)</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Decompress the compressed ones</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Open them all in the right order</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Mentally stitch the timeline together</Typography>
            <Typography component="li" sx={{ mb: 1 }}>Search across all of them for the error pattern</Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mt: 2 }}>
            With SpeedPad? Press <strong>Ctrl+Shift+M</strong>. That&apos;s it. One keystroke. All files discovered,
            decompressed, merged, and ready to search.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mt: 2, color: "primary.light" }}>
            <strong>New in v2.48.0:</strong> Visual correlation timeline makes cross-file incident analysis intuitive. Combine with the Log Correlation Engine (Ctrl+Shift+C) to link related
            events across up to 8 files — timestamps sync automatically with clickable ⛓ indicators.
          </Typography>
        </Container>
      </Box>

      {/* Capabilities Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1, textAlign: "center" }}>
          How It Works
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 5, maxWidth: 500, mx: "auto" }}>
          12 acceptance criteria. All complete. Zero compromises.
        </Typography>
        <Grid container spacing={3}>
          {capabilities.map((cap) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cap.title}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  "&:hover": { borderColor: "primary.dark", bgcolor: "rgba(33, 150, 243, 0.04)" },
                  transition: "all 0.2s",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{cap.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>{cap.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{cap.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Rotation Patterns */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1, textAlign: "center" }}>
            10 Rotation Patterns Detected
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
            SpeedPad recognizes all common log rotation schemes automatically
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, width: "35%" }}>Pattern</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Example Files</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rotationPatterns.map((rp) => (
                  <TableRow key={rp.pattern} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                    <TableCell sx={{ color: "primary.light", fontWeight: 500 }}>{rp.pattern}</TableCell>
                    <TableCell sx={{ fontFamily: "monospace", fontSize: "0.85rem", color: "text.secondary" }}>{rp.example}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Competitor Comparison */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1, textAlign: "center" }}>
          No Editor Can Do This
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          SpeedPad vs text editors vs enterprise log tools
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "background.paper", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Capability</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, color: "primary.light" }}>SpeedPad</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700 }}>Notepad++</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700 }}>VS Code</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700 }}>Splunk</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {competitorComparison.map((row) => (
                <TableRow key={row.feature} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                  <TableCell>{row.feature}</TableCell>
                  <TableCell align="center" sx={{ color: "primary.light", fontWeight: 600 }}>{row.sp}</TableCell>
                  <TableCell align="center">{row.npp}</TableCell>
                  <TableCell align="center">{row.vsc}</TableCell>
                  <TableCell align="center">{row.splunk}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Quick Start */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 3 }}>
            Try It in 3 Steps
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
            {[
              { step: "1", title: "Open a log file", desc: "Open any log file — speedpad app.log" },
              { step: "2", title: "Toggle Multi-Log", desc: "Press Ctrl+Shift+M to activate unified view" },
              { step: "3", title: "Search everywhere", desc: "Ctrl+Shift+F searches across all files at once" },
            ].map((s) => (
              <Box key={s.step} sx={{ p: 3, borderRadius: 2, bgcolor: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <Typography variant="h2" color="primary.main" sx={{ fontSize: "2.5rem", mb: 1 }}>{s.step}</Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>{s.title}</Typography>
                <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 5 }}>
            <Button variant="contained" size="large" startIcon={<DownloadIcon />} href="/download" sx={{ px: 5, py: 1.5, fontSize: "1.1rem" }}>
              Download SpeedPad — Free
            </Button>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontStyle: "italic" }}>
              All of this in 758KB. No plugins. No extensions. Just speed.
            </Typography>
            <Button variant="outlined" component={Link} href="/incident-playbook#log-rotation-failure-investigation" sx={{ mt: 2, textTransform: "none", fontWeight: 700, borderColor: "#FF9800", color: "#FF9800" }}>
              See Log Rotation Playbook →
            </Button>
          </Box>
        </Container>
      </Box>

      <StickyDownloadCTA />
      <Footer />
    </Box>
  );
}
