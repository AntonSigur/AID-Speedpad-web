"use client";
import {
  Box,
  Container,
  Typography,
  Button,
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
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const releases = [
  {
    version: "v2.23.0",
    date: "2026-02-24",
    latest: true,
    highlights: [
      "Bug Blitz: B168/B169 multi-cursor accuracy, B173 CLI validation, B174/B175 hardening",
      "140/142 tests passing, 706KB EXE",
    ],
  },
  {
    version: "v2.22.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "Encoding detection improvements: UTF-32 BOM, 8KB heuristic scan, graceful invalid bytes",
      "Documentation overhaul: CLI reference, feature list, README updated",
    ],
  },
  {
    version: "v2.21.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "Multi-Cursor Phase 2: column/box select, per-cursor paste, multi-cursor Find+Replace",
      "CLI extensions: --readonly, --pipe, --column N",
    ],
  },
  {
    version: "v2.20.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "Multi-Cursor Phase 1: Ctrl+D select next, Ctrl+Alt+Up/Down add cursors",
      "CLI arguments: --line N, --goto N, --new, --encoding",
    ],
  },
  {
    version: "v2.19.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "EXE size: 700KB — sub-700KB milestone",
      "Architecture: section merging, TinyRegex CopyFrag, dialog helper extraction",
    ],
  },
  {
    version: "v2.18.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "EXE size: 706KB (was 807KB, 13% reduction via /O1 /GL /GR- /LTCG)",
      "Typing Challenge hardening: 12 sample texts, persistent high scores, share to clipboard",
    ],
  },
  {
    version: "v2.17.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F36 Typing Challenge: interactive WPM/accuracy test",
      "TinyRegex NFA engine replaces std::wregex (807→877KB saving)",
    ],
  },
  {
    version: "v2.16.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F20 Phase 2: progress indicator, .spidx sidecar persistence",
      "EXE size audit: /Gy /O2 /OPT:REF /OPT:ICF, 877KB",
    ],
  },
  {
    version: "v2.14.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F39 Multi-Log Complete (12/12 ACs): compressed .gz/.bz2/.zst + cross-file search",
      "858KB EXE, 114+ test suites",
    ],
  },
  {
    version: "v2.12.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F39: Multi-Log Unified View (Ctrl+Shift+M), Multi-Log Tail",
      "Anomaly Gutter Marks, architecture docs",
      "868KB EXE, 69 test suites",
    ],
  },
  {
    version: "v2.11.0",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F17: Cake Slice Navigator (all 15 ACs)",
      "F39: Phase 1 Rotation Detection",
      "55 tests passing, 816KB EXE",
    ],
  },
  {
    version: "v2.10.1",
    date: "2026-02-24",
    latest: false,
    highlights: [
      "F18: Parallel Multi-Threaded Search (thread pool, up to 8 workers)",
      "--reverse / -r CLI flag, 6 critical bug fixes",
    ],
  },
  {
    version: "v2.10.0",
    date: "2026-02-23",
    latest: false,
    highlights: [
      "F04: Session/Workspace, F25: Regex Panel, F24: Code Folding",
    ],
  },
  {
    version: "v2.9.1",
    date: "2026-02-22",
    latest: false,
    highlights: [
      "F07: Stdin Pipe Support, F35: Quick File Compare",
    ],
  },
  {
    version: "v2.8.0",
    date: "2026-02-21",
    latest: false,
    highlights: [
      "First release: Cross-File Search, Anomaly Detection, Diff View",
    ],
  },
];

export default function DownloadPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 4, textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, mb: 2 }}>
          Download SpeedPad
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: "auto", mb: 4 }}>
          A single 706KB executable. No installer. No dependencies. Just extract and run.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" startIcon={<DownloadIcon />} sx={{ px: 4, py: 1.5 }} href="https://github.com/AntSigur/speedpad/releases/latest" target="_blank" rel="noopener">
            Download v2.23.0 (.exe)
          </Button>
          <Button variant="outlined" size="large" startIcon={<DownloadIcon />} sx={{ px: 4, py: 1.5 }} href="https://github.com/AntSigur/speedpad/releases/latest" target="_blank" rel="noopener">
            Download v2.23.0 (.zip)
          </Button>
        </Box>
      </Container>

      {/* System Requirements */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 3, textAlign: "center" }}>
            System Requirements
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table>
              <TableBody>
                {[
                  { label: "Operating System", value: "Windows 10 (1809+) or Windows 11" },
                  { label: "Architecture", value: "x64" },
                  { label: "EXE Size", value: "706 KB (core editor)" },
                  { label: "Lens Plugins", value: "120–171 KB each (optional, 6 total)" },
                  { label: "Memory", value: "< 100 MB for 4GB files" },
                  { label: "Dependencies", value: "None — pure Win32, zero external dependencies" },
                  { label: "Install", value: "Portable — no installer needed. Extract and run." },
                ].map((row) => (
                  <TableRow key={row.label} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                    <TableCell sx={{ fontWeight: 600, width: "35%" }}>{row.label}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Installation */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 3, textAlign: "center" }}>
          Installation
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
          {[
            { step: "1", title: "Download", desc: "Grab the latest .exe or .zip from above." },
            { step: "2", title: "Extract", desc: "Place SpeedPad.exe in any folder (e.g., C:\\Tools\\SpeedPad\\)." },
            { step: "3", title: "Run", desc: "Double-click SpeedPad.exe. That's it — no installer needed." },
          ].map((s) => (
            <Box key={s.step} sx={{ textAlign: "center", p: 3, borderRadius: 2, bgcolor: "background.paper", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Typography variant="h2" color="primary.main" sx={{ fontSize: "2.5rem", mb: 1 }}>
                {s.step}
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {s.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {s.desc}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 3, p: 2, borderRadius: 2, bgcolor: "rgba(33, 150, 243, 0.08)", border: "1px solid rgba(33, 150, 243, 0.2)" }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Optional:</strong> Add SpeedPad to your PATH for terminal access:{" "}
            <code style={{ color: "#64B5F6" }}>
              [Environment]::SetEnvironmentVariable(&quot;Path&quot;, $env:Path + &quot;;C:\Tools\SpeedPad&quot;, &quot;User&quot;)
            </code>
          </Typography>
        </Box>
      </Container>

      {/* Release History */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 4, textAlign: "center" }}>
            Release History
          </Typography>
          {releases.map((r) => (
            <Card
              key={r.version}
              elevation={0}
              sx={{
                mb: 2,
                bgcolor: "rgba(255,255,255,0.02)",
                border: r.latest ? "1px solid rgba(33, 150, 243, 0.3)" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <Typography variant="h5" fontWeight={700}>
                    {r.version}
                  </Typography>
                  <Chip label={r.date} size="small" variant="outlined" />
                  {r.latest && <Chip label="Latest" size="small" color="primary" />}
                </Box>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {r.highlights.map((h, i) => (
                    <Typography component="li" variant="body2" color="text.secondary" key={i} sx={{ mb: 0.5 }}>
                      {h}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
