"use client";

import { Box, Container, Typography, Paper, Chip, Button } from "@mui/material";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Step {
  key: string;
  action: string;
  detail: string;
}

interface Scenario {
  title: string;
  trigger: string;
  timeToAnswer: string;
  color: string;
  steps: Step[];
}

const scenarios: Scenario[] = [
  {
    title: "3 AM Outage Triage",
    trigger: "PagerDuty alert: 500-error spike on production API gateway. Multiple services affected.",
    timeToAnswer: "Under 5 minutes from file open to root cause",
    color: "#F44336",
    steps: [
      { key: "Ctrl+O", action: "Open the production log", detail: "Even a 10GB access.log opens instantly — no waiting, no coffee needed." },
      { key: "Ctrl+Shift+T", action: "Enable Tail Mode", detail: "Live-follow new entries as they stream in. See errors the moment they happen." },
      { key: "Ctrl+L", action: "Filter for errors", detail: "Type \"ERROR|FATAL|500\" to show only matching lines. Everything else disappears." },
      { key: "Ctrl+Shift+A", action: "Anomaly Highlighting", detail: "Timestamp gaps light up in amber/red on the scrollbar. Click the biggest gap — that is when it started." },
      { key: "Ctrl+T", action: "Go to Time", detail: "Jump to the exact timestamp from the alert. Sparse time search works even on 100GB+ files." },
      { key: "Ctrl+Shift+M", action: "Multi-Log View", detail: "Merge rotated logs (.1, .2, .gz) into one chronological timeline. See the full picture." },
      { key: "Ctrl+Shift+E", action: "Log Correlation Mode", detail: "Link entries across up to 8 service logs by timestamp. Click ⛓ indicators to jump between correlated events." },
      { key: "Ctrl+Shift+F", action: "Cross-File Search", detail: "Search the specific error ID or trace ID across all log directories in parallel." },
    ],
  },
  {
    title: "Log Rotation Failure Investigation",
    trigger: "Monitoring shows a 4GB log file that should have rotated. Old logs may have data you need.",
    timeToAnswer: "Under 3 minutes to find the rotation gap",
    color: "#FF9800",
    steps: [
      { key: "Ctrl+O", action: "Open the oversized log", detail: "4GB file? SpeedPad memory-maps it. Under 2 seconds to open, under 100MB RAM." },
      { key: "Ctrl+Shift+I", action: "File Statistics", detail: "Check file size, line count, encoding, and last modified time at a glance." },
      { key: "Ctrl+Shift+A", action: "Anomaly Highlighting", detail: "Timestamp gaps show exactly where rotation should have happened. Red marks = biggest gaps." },
      { key: "Ctrl+Alt+H", action: "File Histogram", detail: "Visual heatmap of the entire file. Click any section to jump there. See where activity clusters." },
      { key: "Ctrl+Shift+M", action: "Multi-Log View", detail: "Auto-discovers sibling rotated files (.1, .2, .gz, .bz2, .zst, date-based). Merges them chronologically." },
      { key: "Ctrl+L", action: "Filter for rotation markers", detail: "Filter for \"logrotate|rotate|truncat|reopen\" to find (or confirm absence of) rotation events." },
      { key: "—", action: "File Archaeology", detail: "Check file metadata, creation timestamps, and hashes to verify file identity and timeline." },
    ],
  },
  {
    title: "Find Regression Between Deploys",
    trigger: "Users report slow responses after yesterday's deploy. Need to compare before/after logs.",
    timeToAnswer: "Under 4 minutes to isolate the behavioral change",
    color: "#2196F3",
    steps: [
      { key: "Ctrl+O", action: "Open pre-deploy log", detail: "Open the log from before the deploy timestamp." },
      { key: "Ctrl+T", action: "Go to deploy time", detail: "Jump to the exact deploy timestamp. Use Go to Time even on multi-GB files." },
      { key: "Ctrl+Shift+A", action: "Anomaly Highlighting", detail: "Compare the anomaly pattern before and after the deploy timestamp. New gaps = new problem." },
      { key: "Alt+D", action: "Diff View", detail: "Open the post-deploy log and compare side-by-side. Myers O(ND) algorithm highlights every difference." },
      { key: "F7 / Shift+F7", action: "Navigate differences", detail: "Jump between diffs. Focus on response time patterns and error rate changes." },
      { key: "Ctrl+Shift+H", action: "Regex Highlight", detail: "Highlight response times with a regex like \"(\\d{4,})ms\" to spot outliers in both files." },
      { key: "Ctrl+Shift+F", action: "Cross-File Search", detail: "Search for the specific endpoint or error code across both pre and post-deploy logs." },
      { key: "Status bar", action: "Performance Dashboard", detail: "Verify SpeedPad itself isn't the bottleneck — check file open time and search speed." },
    ],
  },
];

export default function IncidentPlaybookPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
            Incident Playbook
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", mb: 3 }}>
            Three real-world scenarios. Step-by-step key sequences.
            From alert to root cause using only SpeedPad.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            {scenarios.map((s) => (
              <Chip
                key={s.title}
                label={s.title}
                component="a"
                href={`#${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                clickable
                sx={{ bgcolor: s.color + "22", color: s.color, fontWeight: 700, border: `1px solid ${s.color}` }}
              />
            ))}
          </Box>
        </Box>

        {/* Scenarios */}
        {scenarios.map((scenario) => (
          <Box key={scenario.title} id={scenario.title.toLowerCase().replace(/\s+/g, "-")} sx={{ mb: 8 }}>
            <Box sx={{ borderLeft: `4px solid ${scenario.color}`, pl: 3, mb: 4 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                {scenario.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                <strong>Trigger:</strong> {scenario.trigger}
              </Typography>
              <Chip
                label={`⏱ ${scenario.timeToAnswer}`}
                sx={{ bgcolor: scenario.color + "22", color: scenario.color, fontWeight: 600 }}
              />
            </Box>

            {/* Steps */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {scenario.steps.map((step, i) => (
                <Paper
                  key={i}
                  sx={{
                    p: 3,
                    bgcolor: "#162D50",
                    display: "flex",
                    gap: 3,
                    alignItems: "flex-start",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, minWidth: 200 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        bgcolor: scenario.color,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </Box>
                    <Box
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                        bgcolor: "#0F2035",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        color: "#00BCD4",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {step.key}
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700} color="#E2E8F0">
                      {step.action}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.detail}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        ))}

        {/* FAQ */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" fontWeight={700} textAlign="center" sx={{ mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          {[
            { q: "Can SpeedPad really replace Splunk or Datadog for incident triage?", a: "SpeedPad is not a replacement for cloud observability platforms. It is a fast, offline companion for when you need to open a raw log file and find the root cause now — without waiting for ingestion pipelines or paying per-GB query costs." },
            { q: "What if my log files are over 10GB?", a: "SpeedPad uses memory-mapped I/O with a 64MB sliding view window. A 10GB file uses under 100MB of RAM. For 100GB+ files, sparse sampling and the File Histogram provide navigable access without loading the full file." },
            { q: "How does Log Correlation work across files?", a: "The Log Correlation Engine (Ctrl+Shift+E) links entries across up to 8 files by matching timestamps. Clickable chain (⛓) indicators let you jump between correlated events across services." },
            { q: "Do I need to install anything or configure a server?", a: "No. SpeedPad is a single 860KB EXE with zero dependencies. Download, double-click, open files. No installer, no runtime, no configuration, no cloud account." },
            { q: "Can I use SpeedPad on compressed or rotated logs?", a: "Yes. Multi-Log View auto-discovers rotated log siblings (.1, .2, .gz, .bz2, .zst, date-based, IIS, log4j patterns) and merges them into one chronological document. Compressed files are decompressed transparently." },
            { q: "What timestamp formats does Timestamp Intelligence support?", a: "SpeedPad auto-detects 15+ timestamp formats including ISO 8601, syslog, Apache/nginx access logs, Windows event logs, Unix epoch, and custom patterns. No configuration needed." },
          ].map((item, i) => (
            <Paper key={i} sx={{ p: 3, mb: 2, bgcolor: "#162D50" }}>
              <Typography variant="subtitle1" fontWeight={700} color="#E2E8F0" sx={{ mb: 1 }}>
                {item.q}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.a}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* CTA */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Ready to try these workflows?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Download SpeedPad (860KB) and run through any scenario on your own logs.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href="/download"
              component={Link}
              sx={{ bgcolor: "#2196F3", fontWeight: 700, textTransform: "none", px: 4 }}
            >
              Download SpeedPad
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/command-explorer"
              component={Link}
              sx={{ borderColor: "#00BCD4", color: "#00BCD4", fontWeight: 700, textTransform: "none", px: 4 }}
            >
              Explore All Commands
            </Button>
            <Button
              variant="outlined"
              href="/getting-started#large-logs"
              sx={{ borderColor: "#94A3B8", color: "#94A3B8", fontWeight: 700, textTransform: "none", px: 4 }}
            >
              Large Log Recipe →
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
    <Footer />
    </>
  );
}
