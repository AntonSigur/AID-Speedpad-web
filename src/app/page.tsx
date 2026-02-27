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
import Image from "next/image";
import { CURRENT_VERSION, EXE_SIZE, EXE_SIZE_SPACED, TEST_COUNT, RELEASE_COUNT } from "@/lib/product-config";
import Link from "next/link";

const features = [
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "Opens Instantly",
    desc: "< 50ms startup. No loading delay, no splash screen.",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 40 }} />,
    title: `${EXE_SIZE_SPACED} Total`,
    desc: "19× smaller than Notepad++. 556× smaller than VS Code.",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 40 }} />,
    title: "Parallel Search",
    desc: "Uses all CPU cores for blazing cross-file search.",
  },
  {
    icon: <TerminalIcon sx={{ fontSize: 40 }} />,
    title: "Multi-Cursor Editing",
    desc: "Ctrl+D, column select, per-cursor paste. Full multi-cursor.",
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
    title: "Multi-Log Merge",
    desc: "Merge rotated logs into one timeline. Decompress .gz/.bz2/.zst.",
  },
  {
    icon: <BugReportIcon sx={{ fontSize: 40 }} />,
    title: `${TEST_COUNT} tests Passing`,
    desc: "TinyRegex NFA engine. ReDoS-proof. Zero external dependencies.",
  },
];

const comparison = [
  { feature: "EXE Size", sp: EXE_SIZE_SPACED, npp: "14 MB", vsc: "400 MB" },
  { feature: "Startup Time", sp: "< 50ms", npp: "~1.5s", vsc: "~3s" },
  { feature: "Tail Mode", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Multi-Cursor", sp: "✅", npp: "✅", vsc: "✅" },
  { feature: "Multi-Log Merge", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Log Correlation Engine", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Timestamp Intelligence", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Performance Dashboard", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Minimap Sidebar", sp: "✅", npp: "✅", vsc: "✅" },
  { feature: "Parallel Search", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Reverse View", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Anomaly Detection", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Compressed Files", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Solitaire", sp: "🐜", npp: "❌", vsc: "❌" },
  { feature: "Direct2D Renderer", sp: "✅", npp: "❌", vsc: "❌" },
  { feature: "Multi-File Search", sp: "✅", npp: "❌", vsc: "✅" },
  { feature: "Built-in Hex Editor", sp: "✅", npp: "Plugin", vsc: "Extension" },
  { feature: "Code-Signed Binary", sp: "✅", npp: "✅", vsc: "✅" },
  { feature: "Hex Editor View", sp: "✅", npp: "Plugin", vsc: "Plugin" },
];

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 6, md: 10 }, textAlign: "center" }}>
        <Box sx={{ mb: 3, display: "inline-block", width: 120, height: 86, overflow: "hidden" }}>
          <Image src="/itant-logo.svg" alt="IT Ant ehf" width={120} height={120} style={{ filter: "brightness(0) invert(1)", marginTop: -4 }} />
        </Box>
        <Chip label={`${CURRENT_VERSION} — ${TEST_COUNT} test suites passing`} color="primary" variant="outlined" sx={{ mb: 3 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4.5rem" }, mb: 2, background: "linear-gradient(135deg, #64B5F6, #00BCD4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Find incidents faster.
          <br />
          In an {EXE_SIZE} editor.
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 5, maxWidth: 640, mx: "auto", fontWeight: 400 }}>
          SpeedPad helps DevOps and engineers triage live logs, correlate events across files, and resolve production issues fast — without heavy tooling.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" startIcon={<DownloadIcon />} sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }} href="/download">
            Download SpeedPad
          </Button>
          <Button variant="outlined" size="large" href="/getting-started" sx={{ px: 4, py: 1.5, fontSize: "1.1rem", borderColor: "#00BCD4", color: "#00BCD4" }}>
            Quick Start Guide
          </Button>
        </Box>

        {/* Proof Bar */}
        <Box sx={{ mt: 5, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: { xs: 2, md: 4 } }}>
          {[
            { value: EXE_SIZE, label: "EXE size" },
            { value: String(TEST_COUNT), label: "automated tests" },
            { value: "100GB+", label: "file support" },
            { value: RELEASE_COUNT, label: "releases shipped" },
            { value: "0", label: "external deps" },
          ].map((m) => (
            <Box key={m.label} sx={{ textAlign: "center", minWidth: 80 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.light" }}>{m.value}</Typography>
              <Typography variant="caption" color="text.secondary">{m.label}</Typography>
            </Box>
          ))}
        </Box>

        {/* App Screenshot */}
        <Box sx={{ mt: 6, mb: 2, textAlign: "center" }}>
          <Paper
            elevation={8}
            sx={{
              display: "inline-block",
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: "100%",
            }}
          >
            <Image
              src="/screenshots/speedpad-app-screenshot.png"
              alt="SpeedPad viewing a production log file with timestamps, severity levels, and status bar"
              width={1010}
              height={761}
              style={{ display: "block", maxWidth: "100%", height: "auto" }}
              priority
            />
          </Paper>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
            SpeedPad {CURRENT_VERSION} — viewing a production log with 49 lines, 3.8 KB · auto-detected UTF-8 encoding
          </Typography>
          <Button variant="text" href="/screenshots" sx={{ mt: 1, color: "#00BCD4", textTransform: "none" }}>
            See more screenshots & animations →
          </Button>
        </Box>

        {/* Size comparison visual */}
        <Box sx={{ mt: 8, p: 4, borderRadius: 3, background: "rgba(33, 150, 243, 0.05)", border: "1px solid rgba(33, 150, 243, 0.15)" }}>
          <Typography variant="overline" color="text.secondary" sx={{ mb: 3, display: "block" }}>
            Size Comparison
          </Typography>
          <Box sx={{ display: "flex", alignItems: "end", justifyContent: "center", gap: { xs: 2, md: 4 }, height: 180 }}>
            {[
              { name: "SpeedPad", size: EXE_SIZE_SPACED, height: 10, color: "#2196F3" },
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

      {/* Incident Workflow */}
      <Box id="incident-workflow" sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" textAlign="center" sx={{ mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            From Alert to Resolution
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 560, mx: "auto" }}>
            Three built-in capabilities that replace heavyweight observability tools
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                step: "1",
                title: "Detect Anomalies",
                feature: "Timestamp Intelligence (F61)",
                shortcut: "Ctrl+Shift+A",
                outcome: "Auto-detect 15+ timestamp formats and surface gaps, spikes, and time-range anomalies instantly.",
                color: "#2196F3",
              },
              {
                step: "2",
                title: "Correlate Across Files",
                feature: "Log Correlation Engine (F60)",
                shortcut: "Ctrl+Shift+C (View)",
                outcome: "Link events across multiple log files by timestamp — find the root cause without Splunk.",
                color: "#00BCD4",
              },
              {
                step: "3",
                title: "Measure & Optimize",
                feature: "Performance Dashboard (F63)",
                shortcut: "Built-in panel",
                outcome: "Real-time memory, CPU, and FPS metrics inside the editor — no external profiler needed.",
                color: "#4CAF50",
              },
            ].map((s) => (
              <Grid size={{ xs: 12, md: 4 }} key={s.step}>
                <Card elevation={0} sx={{ height: "100%", bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "visible" }}>
                  <Box sx={{ position: "absolute", top: -16, left: 24, width: 32, height: 32, borderRadius: "50%", bgcolor: s.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: "#fff" }}>{s.step}</Typography>
                  </Box>
                  <CardContent sx={{ p: 3, pt: 4 }}>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>{s.title}</Typography>
                    <Chip label={s.shortcut} size="small" variant="outlined" sx={{ mb: 1.5, fontSize: "0.75rem" }} />
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>{s.outcome}</Typography>
                    <Typography variant="caption" color="primary.light">{s.feature}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button variant="outlined" component={Link} href="/incident-playbook" sx={{ textTransform: "none", fontWeight: 700, borderColor: "#2196F3", color: "#2196F3" }}>
              See Full Incident Playbook →
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Feature Grid */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" sx={{ mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Built for Speed
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 500, mx: "auto" }}>
            39 unique features no other editor has. Opens 10GB files with the same startup time as 10KB.
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

      {/* Who It's For */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" sx={{ mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
            Built For Your Workflow
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 500, mx: "auto" }}>
            SpeedPad adapts to how you actually work
          </Typography>
          <Grid container spacing={3}>
            {[
              { role: "DevOps Engineers", items: ["Tail mode for live log monitoring", "Multi-log merge across rotated files", "Anomaly detection with timestamp gaps", "8-file tail dashboard"] },
              { role: "Security Analysts", items: ["SpeedHexPad.exe standalone hex editor", "Binary Inspector with endianness toggle", "Structure templates for PE/ELF analysis", "Forensic log correlation across files"] },
              { role: "Data Analysts", items: ["CSV lens with column-aligned display", "Frequency analysis (IPs, URLs, UUIDs)", "Handle 4GB+ files without lag", "JSON breadcrumb navigation"] },
              { role: "Developers", items: ["Multi-cursor editing (Ctrl+D)", "Code folding & bracket matching", "Parallel cross-file search", "Workspace persistence"] },
            ].map((persona) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={persona.role}>
                <Card elevation={0} sx={{ height: "100%", bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: "primary.light" }}>{persona.role}</Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {persona.items.map((item) => (
                        <Typography component="li" variant="body2" color="text.secondary" key={item} sx={{ mb: 0.5 }}>{item}</Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Cost Comparison */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" textAlign="center" sx={{ mb: 1, fontSize: { xs: "2rem", md: "3rem" } }}>
          Enterprise-Grade. Zero Cost.
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 5, maxWidth: 520, mx: "auto" }}>
          Log correlation, timestamp intelligence, and performance monitoring — without the enterprise price tag
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
          {[
            { tool: "Splunk", price: "$1,000+/yr", desc: "Log ingestion, correlation, dashboards", color: "#455A64" },
            { tool: "Datadog", price: "$15/host/mo", desc: "Log management, APM, monitoring", color: "#455A64" },
            { tool: "SpeedPad", price: "Free", desc: `Log correlation, timestamp intel, perf dashboard — offline, ${EXE_SIZE}`, color: "#2196F3" },
          ].map((t) => (
            <Card key={t.tool} elevation={0} sx={{ textAlign: "center", bgcolor: t.tool === "SpeedPad" ? "rgba(33,150,243,0.08)" : "rgba(255,255,255,0.03)", border: t.tool === "SpeedPad" ? "1px solid rgba(33,150,243,0.3)" : "1px solid rgba(255,255,255,0.06)" }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>{t.tool}</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, color: t.tool === "SpeedPad" ? "primary.light" : "text.secondary", mb: 1 }}>{t.price}</Typography>
                <Typography variant="body2" color="text.secondary">{t.desc}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 3, fontStyle: "italic" }}>
          SpeedPad is not a replacement for cloud observability platforms. It&apos;s a fast, offline companion for incident triage when you need answers now.
        </Typography>
      </Container>

      {/* How We Measure Claims */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h5" textAlign="center" fontWeight={700} sx={{ mb: 1 }}>
            How We Measure Our Claims
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 3 }}>
            Every number on this site is auditable. Here&apos;s how.
          </Typography>
          <Grid container spacing={3}>
            {[
              { label: `EXE Size (${EXE_SIZE})`, detail: "Actual file size of SpeedPad.exe in the release build artifact. No installer, no runtime, no dependencies. Verified with dir /b on the build output." },
              { label: `Test Count (${TEST_COUNT})`, detail: `Google Test suite run on every build. Output: ${TEST_COUNT}/${TEST_COUNT} tests passed, 0 skipped, 0 flaky. CI enforces zero failures before release.` },
              { label: "Test Verification", detail: "Tests cover file I/O, search, encoding, regex, multi-cursor, undo/redo, and all lens plugins. Crash isolation tests deliberately fault-inject to verify SEH handling." },
              { label: "Build Artifact Path", detail: "Release EXE built from tagged commit via MSVC /O2 with LTCG. Artifact path: build/Release/SpeedPad.exe → signed and checksummed before distribution." },
              { label: "Startup & File Open", detail: "Measured by automated release verification runs on reference hardware. Every release is timed before shipping. 100GB opens via memory-mapped I/O (no full load)." },
              { label: "Memory Usage", detail: "Profiled with Windows Performance Toolkit on 4GB+ files. Stays under 100MB using a 64MB memory-mapped view window. No file size affects memory." },
              { label: "Update Cadence", detail: "Validated every sprint (~2 weeks). 86 releases shipped since v1.0. Every release under 1MB. Every claim re-verified against the latest build." },
              { label: "Source of Truth", detail: "All feature claims trace to FEATURES.md, SHORTCUTS.md, and CHANGELOG.md in the source repository. PO reviews every marketing statement before publish." },
            ].map((item) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item.label}>
                <Paper sx={{ p: 2.5, bgcolor: "#162D50", height: "100%" }}>
                  <Typography variant="subtitle2" fontWeight={700} color="primary.light">{item.label}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{item.detail}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 3, display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="text" href="/how-it-works" sx={{ color: "#00BCD4" }}>
              Deep Dive: How SpeedPad Handles 100GB+ Files →
            </Button>
            <Button variant="text" href="/benchmarks" sx={{ color: "#FF9800" }}>
              Full Benchmarks →
            </Button>
            <Button variant="text" href="/testimonials" sx={{ color: "#4CAF50" }}>
              What Users Say →
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
            {EXE_SIZE}. Zero Dependencies. Free.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Download SpeedPad and open your first 100GB file in under 2 seconds.
          </Typography>
          <Button variant="contained" size="large" startIcon={<DownloadIcon />} sx={{ px: 5, py: 1.5, fontSize: "1.1rem" }} href="/download">
            Download Now
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
