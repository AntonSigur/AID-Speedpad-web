"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DOWNLOAD_EXE, EXE_SIZE, CURRENT_VERSION } from "@/lib/product-config";

interface Workflow {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  time: string;
  steps: { label: string; description: string; keys?: string[] }[];
}

const workflows: Workflow[] = [
  {
    id: "incident-triage",
    title: "Incident Triage in 60 Seconds",
    subtitle: "From alert to root cause in under a minute",
    icon: "🚨",
    time: "~60s",
    steps: [
      {
        label: "Open the log file",
        description:
          "Drag and drop the production log onto SpeedPad, or use File → Open. Even 10GB+ files open in under 2 seconds thanks to memory-mapped I/O.",
        keys: ["Ctrl+O"],
      },
      {
        label: "Jump to the error timestamp",
        description:
          "Press Ctrl+G to open Go To Line, or Ctrl+F to search for the error code or timestamp from your alert.",
        keys: ["Ctrl+G", "Ctrl+F"],
      },
      {
        label: "Correlate across files",
        description:
          "Open related log files in tabs, then press Ctrl+Shift+E to launch the Log Correlation Engine. Link request IDs, trace IDs, or custom patterns across all open files.",
        keys: ["Ctrl+Shift+E"],
      },
      {
        label: "Search an entire directory",
        description:
          "Press Ctrl+Alt+F to launch Multi-File Search. Pick a folder and search all files in parallel — results stream in with file names, line numbers, and match context.",
        keys: ["Ctrl+Alt+F"],
      },
    ],
  },
  {
    id: "large-log-analysis",
    title: "Newest-First Large-Log Analysis",
    subtitle: "Reverse open + reverse tail for live production logs",
    icon: "📊",
    time: "~30s",
    steps: [
      {
        label: "Reverse-open the log file",
        description:
          "Use Ctrl+Shift+V (Reverse Open) to load the file with the newest entries at the top. This is critical for multi-gigabyte production logs where the most recent events matter most.",
        keys: ["Ctrl+Shift+V"],
      },
      {
        label: "Enable reverse tail mode",
        description:
          "Press Ctrl+T to toggle live tail mode. Combined with reverse open, new log entries appear at the top of the view in real time — no scrolling to the bottom required.",
        keys: ["Ctrl+T"],
      },
      {
        label: "Filter with Correlation Pattern Search",
        description:
          "Press Ctrl+Shift+G to open Correlation Pattern Search. Define a regex pattern to filter only matching lines across the live stream. Export results with Ctrl+Shift+E.",
        keys: ["Ctrl+Shift+G", "Ctrl+Shift+E"],
      },
    ],
  },
  {
    id: "release-verification",
    title: "Release Verification Workflow",
    subtitle: "Validate a new release build before deployment",
    icon: "✅",
    time: "~2 min",
    steps: [
      {
        label: "Open the build log",
        description:
          "Open your CI/CD build log in SpeedPad. Use the JSON lens (auto-detected for .json files) or Log lens for structured output.",
        keys: ["Ctrl+O"],
      },
      {
        label: "Search for failures and warnings",
        description:
          "Press Ctrl+F and search for 'FAIL', 'ERROR', or 'WARNING'. Use F3/Shift+F3 to navigate between matches. The match counter shows total occurrences.",
        keys: ["Ctrl+F", "F3", "Shift+F3"],
      },
      {
        label: "Compare with previous release log",
        description:
          "Open the previous release's build log in a second tab. Use Ctrl+Shift+E to correlate test names across both files, identifying new failures or regressions.",
        keys: ["Ctrl+Shift+E"],
      },
    ],
  },
  {
    id: "binary-forensics",
    title: "Binary Forensics Workflow",
    subtitle: "Compare firmware or patched binaries byte-by-byte",
    icon: "🔬",
    time: "~3 min",
    steps: [
      {
        label: "Open the reference binary",
        description:
          "Open the known-good firmware or binary in SpeedHexPad. Press Ctrl+Alt+H if opening from SpeedPad, or launch SpeedHexPad.exe directly.",
        keys: ["Ctrl+Alt+H"],
      },
      {
        label: "Launch HexCompare",
        description:
          "Press F8 to open HexCompare. Select the second binary (patched, suspected, or updated version). Side-by-side hex diff loads instantly with differences highlighted.",
        keys: ["F8"],
      },
      {
        label: "Navigate differences",
        description:
          "Use F7 to jump to the next byte difference, Shift+F7 to go back. Each difference is highlighted with the offset, old value, and new value shown clearly.",
        keys: ["F7", "Shift+F7"],
      },
      {
        label: "Inspect with Binary Inspector",
        description:
          "Select interesting byte ranges and use the Binary Inspector (F64) to interpret values as int8/16/32/64, float, double, and strings. Apply structure templates for known formats.",
        keys: ["F64"],
      },
    ],
  },
];

export default function WorkflowsPage() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Workflow Packs
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
          Step-by-step guides for common SpeedPad workflows.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Each workflow uses real keyboard shortcuts and features available in {CURRENT_VERSION}.
        </Typography>

        {workflows.map((wf) => (
          <Paper
            key={wf.id}
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              bgcolor: "background.paper",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Typography variant="h4">{wf.icon}</Typography>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {wf.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {wf.subtitle}
                </Typography>
              </Box>
              <Chip label={wf.time} size="small" variant="outlined" color="primary" />
            </Box>

            <Stepper orientation="vertical" sx={{ "& .MuiStepLabel-label": { color: "text.primary" }, "& .MuiStepConnector-line": { borderColor: "rgba(33,150,243,0.3)" } }}>
              {wf.steps.map((step, i) => (
                <Step key={i} active expanded>
                  <StepLabel
                    StepIconProps={{ sx: { color: "#2196F3 !important" } }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {step.label}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {step.description}
                    </Typography>
                    {step.keys && (
                      <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                        {step.keys.map((k) => (
                          <Chip
                            key={k}
                            label={k}
                            size="small"
                            sx={{
                              fontFamily: "monospace",
                              fontSize: "0.75rem",
                              bgcolor: "rgba(33,150,243,0.15)",
                              border: "1px solid rgba(33,150,243,0.3)",
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Paper>
        ))}

        {/* CTA */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            textAlign: "center",
            bgcolor: "rgba(33,150,243,0.06)",
            border: "1px solid rgba(33,150,243,0.15)",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            Ready to try these workflows?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Download SpeedPad {CURRENT_VERSION} — {EXE_SIZE}, zero dependencies, no installer.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href={DOWNLOAD_EXE}
              sx={{ textTransform: "none", fontWeight: 600, px: 4 }}
            >
              Download SpeedPad
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/shortcuts"
              sx={{ textTransform: "none", fontWeight: 600, px: 4 }}
            >
              All Shortcuts
            </Button>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}
