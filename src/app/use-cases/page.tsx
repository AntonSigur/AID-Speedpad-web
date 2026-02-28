"use client";

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
} from "@mui/material";
import {
  Security as SecurityIcon,
  Storage as StorageIcon,
  BugReport as BugIcon,
  Code as CodeIcon,
  Memory as MemoryIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { EXE_SIZE, CURRENT_VERSION, TEST_COUNT } from "@/lib/product-config";

const useCases = [
  {
    icon: <BugIcon sx={{ fontSize: 36 }} />,
    role: "DevOps Engineer",
    title: "3 AM Production Incident",
    scenario:
      "Your monitoring fires at 3 AM. Splunk is slow to ingest. You need answers now.",
    workflow: [
      "Open the latest app.log (4GB) — SpeedPad opens it in under 2 seconds via memory-mapped I/O",
      "Press Ctrl+Shift+T for tail mode — watch new entries arrive in real-time",
      "Ctrl+Alt+F → Multi-File Search the entire /var/log/ directory for the error pattern across all services",
      "Ctrl+Shift+A activates Timestamp Intelligence — spot a 47-second gap between 02:58 and 03:45",
      "Ctrl+Shift+E enables Log Correlation — link the gap to a database timeout in db-slow.log",
      "Root cause found in under 5 minutes, without leaving the editor",
    ],
    features: ["Tail Mode", "Multi-File Search", "Timestamp Intelligence", "Log Correlation", "100GB+ Files"],
    link: "/incident-playbook",
    linkLabel: "Full Incident Playbook →",
    color: "#F44336",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 36 }} />,
    role: "Security Analyst",
    title: "Forensic Log Analysis",
    scenario:
      "A suspected breach. You have 12GB of Windows Event Logs and need to find the initial access vector.",
    workflow: [
      "Open all log files with Multi-Log View — SpeedPad merges rotated logs chronologically",
      "Use Ctrl+F with regex to search for EventID 4624 (Logon) across all files simultaneously",
      "Frequency Analysis lens reveals an unusual IP appearing 847 times in 10 minutes",
      "Ctrl+Alt+H switches to SpeedHexPad hex view — or use SpeedHexPad.exe standalone to inspect a suspicious binary attachment",
      "Binary Inspector (F64) decodes embedded shellcode offsets — confirm malicious payload",
    ],
    features: ["Multi-Log Merge", "Parallel Search", "Frequency Analysis", "SpeedHexPad"],
    link: "/hex-editor",
    linkLabel: "SpeedHexPad Details →",
    color: "#9C27B0",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 36 }} />,
    role: "Data Engineer",
    title: "Processing 50GB CSV Exports",
    scenario:
      "A database export produced a 50GB CSV. Excel won't open it. Python takes 20 minutes to load.",
    workflow: [
      "SpeedPad opens the 50GB file instantly — memory-mapped I/O with a 64MB view window",
      "CSV Lens auto-detects delimiters and aligns columns for readable display",
      "Ctrl+G jumps to line 12,000,000 — instant navigation via background line indexing",
      "Multi-cursor select (Ctrl+D) to batch-edit malformed rows in place",
      "Sort, deduplicate, and extract columns using built-in line operations — no scripting needed",
    ],
    features: ["CSV Lens", "100GB+ Files", "Line Operations", "Multi-Cursor"],
    link: "/lenses",
    linkLabel: "Lens Plugins →",
    color: "#FF9800",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 36 }} />,
    role: "Firmware / Embedded Engineer",
    title: "Binary Firmware Inspection",
    scenario:
      "A firmware update image needs byte-level verification before flashing to production devices.",
    workflow: [
      "Open the firmware binary in SpeedHexPad.exe, or press Ctrl+Alt+H in SpeedPad to enter hex view",
      "Navigate to the header — Binary Inspector shows magic bytes, version struct, and CRC32",
      "Toggle endianness to match the target ARM architecture (little-endian)",
      "Hex search (Ctrl+F) for the known signature pattern 0xDEADBEEF",
      "Verify the firmware table offsets match the spec document — all without leaving the editor",
    ],
    features: ["SpeedHexPad.exe", "Structure Templates", "Binary Inspector", "Endianness Toggle"],
    link: "/hex-editor",
    linkLabel: "SpeedHexPad Details →",
    color: "#00BCD4",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 36 }} />,
    role: "Software Developer",
    title: "Cross-Repository Code Migration",
    scenario:
      "Refactoring a monolith: 2,000 files need a namespace change, and you need to verify every occurrence.",
    workflow: [
      "Open the project workspace in SpeedPad — all 2,000 files indexed in background",
      "Ctrl+Shift+F for parallel cross-file search: find every occurrence of 'OldNamespace' in seconds",
      "Multi-cursor editing (Ctrl+D) to rename in batches across each file",
      "Code folding collapses unchanged sections — focus only on modified blocks",
      "Workspace persistence saves your open tabs, cursor positions, and bookmarks for tomorrow",
    ],
    features: ["Parallel Search", "Multi-Cursor", "Code Folding", "Workspace Persistence"],
    link: "/features",
    linkLabel: "All 180+ Features →",
    color: "#4CAF50",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 36 }} />,
    role: "SRE / Platform Engineer",
    title: "Real-Time Performance Monitoring",
    scenario:
      "A microservice is degrading. You need to watch its output log while profiling the editor itself.",
    workflow: [
      "Open 4 service logs in tabs — tail mode on each (Ctrl+Shift+T × 4)",
      "Performance Dashboard shows real-time memory, CPU, FPS metrics inside SpeedPad",
      "Anomaly Detection flags a 30-second timestamp gap in the payment service",
      "Reverse View (Ctrl+Shift+V) on the access log — latest entries first, no scrolling",
      "Minimap sidebar (Ctrl+Alt+M) gives a birds-eye density view of error clusters",
    ],
    features: ["Tail Mode", "Performance Dashboard", "Anomaly Detection", "Minimap"],
    link: "/how-it-works",
    linkLabel: "Architecture Deep Dive →",
    color: "#2196F3",
  },
];

export default function UseCasesPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 4, md: 8 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Chip label={`${CURRENT_VERSION} · ${EXE_SIZE} · ${TEST_COUNT} tests`} color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              fontWeight: 800,
              mb: 2,
              background: "linear-gradient(135deg, #64B5F6, #4CAF50)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Real-World Use Cases
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 600, mx: "auto" }}>
            See how engineers across different roles use SpeedPad to solve real problems — faster than heavyweight tooling.
          </Typography>
        </Container>
      </Box>

      {/* Use Cases */}
      <Container maxWidth="lg" sx={{ pb: { xs: 4, md: 8 } }}>
        <Grid container spacing={4}>
          {useCases.map((uc) => (
            <Grid key={uc.title} size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 2,
                  borderTop: `3px solid ${uc.color}`,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Box sx={{ color: uc.color }}>{uc.icon}</Box>
                  <Box>
                    <Chip label={uc.role} size="small" variant="outlined" sx={{ mb: 0.5, borderColor: uc.color, color: uc.color }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{uc.title}</Typography>
                  </Box>
                </Box>

                {/* Scenario */}
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: "italic" }}>
                  &ldquo;{uc.scenario}&rdquo;
                </Typography>

                {/* Workflow Steps */}
                <Box component="ol" sx={{ pl: 2.5, m: 0, mb: 2, flex: 1 }}>
                  {uc.workflow.map((step, i) => (
                    <Typography component="li" variant="body2" color="text.secondary" key={i} sx={{ mb: 1, lineHeight: 1.6 }}>
                      {step}
                    </Typography>
                  ))}
                </Box>

                {/* Feature Tags */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                  {uc.features.map((f) => (
                    <Chip key={f} label={f} size="small" variant="outlined" sx={{ fontSize: "0.7rem" }} />
                  ))}
                </Box>

                {/* Link */}
                <Button variant="text" component={Link} href={uc.link} sx={{ alignSelf: "flex-start", color: uc.color, textTransform: "none", fontWeight: 600, p: 0 }}>
                  {uc.linkLabel}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Summary Bar */}
      <Box sx={{ bgcolor: "rgba(33,150,243,0.04)", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            One Tool. Every Workflow.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: "auto" }}>
            DevOps, security, data, embedded, development — SpeedPad handles them all in {EXE_SIZE} with zero dependencies.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="contained" size="large" href="/download" sx={{ px: 4 }}>
              Download SpeedPad
            </Button>
            <Button variant="outlined" component={Link} href="/features" sx={{ borderColor: "#00BCD4", color: "#00BCD4" }}>
              All 180+ Features
            </Button>
            <Button variant="outlined" component={Link} href="/benchmarks" sx={{ borderColor: "#94A3B8", color: "#94A3B8" }}>
              See Benchmarks
            </Button>
            <Button variant="outlined" component={Link} href="/hex-editor" sx={{ borderColor: "#94A3B8", color: "#94A3B8" }}>
              Hex Editor
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
