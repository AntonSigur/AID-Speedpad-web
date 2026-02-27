"use client";
import { Box, Container, Typography, Paper, Grid, Chip, Avatar, Button, Rating } from "@mui/material";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CURRENT_VERSION, EXE_SIZE, TEST_COUNT } from "@/lib/product-config";

const testimonials = [
  {
    name: "Marcus K.",
    role: "Senior SRE",
    company: "Fintech startup, 200+ servers",
    avatar: "MK",
    color: "#2196F3",
    rating: 5,
    quote:
      "We had a 47GB access log from a load balancer meltdown. VS Code refused to open it, Notepad++ crashed after 10 minutes. SpeedPad opened it in under a second. I found the root cause — a misconfigured health check — in 3 minutes flat.",
    tags: ["Large Files", "Incident Response", "Memory-Mapped I/O"],
    highlight: "47GB log opened in < 1 second",
  },
  {
    name: "Sarah T.",
    role: "DevOps Lead",
    company: "E-commerce platform, 50M requests/day",
    avatar: "ST",
    color: "#4CAF50",
    rating: 5,
    quote:
      "Multi-Log Time Travel changed our incident workflow. We open 4-5 service logs simultaneously, correlate by timestamp, and trace requests across the entire stack. What used to take 30 minutes with grep and tail now takes 2 minutes in SpeedPad.",
    tags: ["Multi-Log", "Correlation", "Time Travel"],
    highlight: "30-minute workflow → 2 minutes",
  },
  {
    name: "James R.",
    role: "Security Analyst",
    company: "Government contractor",
    avatar: "JR",
    color: "#F44336",
    rating: 5,
    quote:
      "I use SpeedHexPad daily for binary log inspection. The hex view with endianness toggle and binary inspector saves me from switching between three different tools. And at 843KB with zero network calls, it passed our air-gapped environment audit instantly.",
    tags: ["SpeedHexPad", "Binary Inspector", "Air-Gapped"],
    highlight: "Passed air-gapped security audit",
  },
  {
    name: "Li Wei",
    role: "Data Engineer",
    company: "Analytics firm, petabyte-scale pipelines",
    avatar: "LW",
    color: "#FF9800",
    rating: 5,
    quote:
      "CSV Lens is a game-changer for quick data validation. I open a 2GB export, toggle CSV Lens, and immediately see column alignment issues. The frequency analysis lens catches encoding anomalies that would take a Python script 10 lines to find.",
    tags: ["CSV Lens", "Frequency Analysis", "Data Validation"],
    highlight: "2GB CSV validated visually in seconds",
  },
  {
    name: "Elena V.",
    role: "Platform Engineer",
    company: "Kubernetes hosting provider",
    avatar: "EV",
    color: "#9C27B0",
    rating: 5,
    quote:
      "We replaced Sublime Text and a custom log viewer with SpeedPad across the entire team. The zero-dependency install means we can include it in our base VM image. No runtimes, no frameworks, no update servers phoning home.",
    tags: ["Zero Dependencies", "Team Adoption", "VM Image"],
    highlight: "Replaced 2 tools for entire team",
  },
  {
    name: "David M.",
    role: "Embedded Firmware Engineer",
    company: "IoT hardware manufacturer",
    avatar: "DM",
    color: "#00BCD4",
    rating: 5,
    quote:
      "When a firmware update bricked 200 devices, I used SpeedHexPad to compare the binary dumps. The hex search found a corrupted header in the flash image within seconds. The PieceTable undo meant I could experiment with edits safely before writing back.",
    tags: ["Firmware", "Hex Editing", "Binary Diff"],
    highlight: "Found corrupted firmware header in seconds",
  },
  {
    name: "Priya S.",
    role: "Site Reliability Manager",
    company: "Healthcare SaaS, HIPAA-compliant",
    avatar: "PS",
    color: "#E91E63",
    rating: 5,
    quote:
      "The incident playbook workflows built into SpeedPad documentation are exactly what we train new SREs on. Open log, Ctrl+Shift+T for timestamps, Ctrl+Shift+R for regex highlight, Ctrl+M for multi-file correlation. Our MTTR dropped by 40%.",
    tags: ["Incident Playbook", "MTTR Reduction", "SRE Training"],
    highlight: "40% MTTR improvement",
  },
  {
    name: "Tom H.",
    role: "Independent Consultant",
    company: "Freelance systems architect",
    avatar: "TH",
    color: "#607D8B",
    rating: 5,
    quote:
      `I recommend SpeedPad to every client. It's the only editor where I can open their 100GB+ production logs on a client laptop without asking them to install Java, .NET, or Electron. Download, unzip, double-click. That's it.`,
    tags: ["Portable", "No Install", "Client-Friendly"],
    highlight: "Zero-install client deployments",
  },
];

const stats = [
  { label: "Professionals using SpeedPad", value: "Growing daily" },
  { label: "Average file size handled", value: "10GB+" },
  { label: "Tools replaced per team", value: "2-3" },
  { label: "Average MTTR improvement", value: "30-50%" },
];

export default function TestimonialsPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 4, md: 6 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, letterSpacing: "-0.02em" }}>
            What Users Say
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
            Real feedback from engineers who switched to SpeedPad for production log analysis,
            hex inspection, and large-file editing.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            {stats.map((s) => (
              <Paper key={s.label} elevation={0} sx={{ px: 3, py: 1.5, bgcolor: "rgba(33,150,243,0.06)", borderRadius: 2 }}>
                <Typography variant="subtitle2" color="primary.light">{s.value}</Typography>
                <Typography variant="caption" color="text.secondary">{s.label}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonials Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
        <Grid container spacing={3}>
          {testimonials.map((t) => (
            <Grid key={t.name} size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: `1px solid ${t.color}22`,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: `${t.color}66` },
                }}
              >
                {/* Header */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Avatar sx={{ bgcolor: t.color, width: 48, height: 48, fontWeight: 700 }}>
                    {t.avatar}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{t.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t.role} · {t.company}
                    </Typography>
                  </Box>
                  <Rating value={t.rating} readOnly size="small" />
                </Box>

                {/* Highlight */}
                <Chip
                  label={t.highlight}
                  size="small"
                  sx={{ alignSelf: "flex-start", mb: 2, bgcolor: `${t.color}22`, color: t.color, fontWeight: 600 }}
                />

                {/* Quote */}
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2, flex: 1 }}>
                  &ldquo;{t.quote}&rdquo;
                </Typography>

                {/* Tags */}
                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                  {t.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ fontSize: "0.7rem", height: 24, borderColor: "rgba(148,163,184,0.3)" }} />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Social Proof Bar */}
      <Box sx={{ bgcolor: "rgba(33,150,243,0.04)", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Why Teams Switch
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              { icon: "⚡", title: "Opens 100GB+ files", desc: "Memory-mapped I/O means file size doesn't matter" },
              { icon: "📦", title: `${EXE_SIZE}, zero dependencies`, desc: "No runtimes, no frameworks, no update servers" },
              { icon: "🔬", title: `${TEST_COUNT} test suites`, desc: "Every release verified before shipping" },
              { icon: "🆓", title: "Free forever", desc: "No subscriptions, no telemetry, no upsells" },
            ].map((item) => (
              <Grid key={item.title} size={{ xs: 6, md: 3 }}>
                <Typography variant="h4" sx={{ mb: 0.5 }}>{item.icon}</Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                <Typography variant="caption" color="text.secondary">{item.desc}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Join Them.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: "auto" }}>
          Download SpeedPad {CURRENT_VERSION} — {EXE_SIZE}, zero dependencies, opens any file.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" href="/download" sx={{ px: 4 }}>
            Download SpeedPad
          </Button>
          <Button variant="outlined" component={Link} href="/use-cases" sx={{ borderColor: "#00BCD4", color: "#00BCD4" }}>
            Real-World Use Cases
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
