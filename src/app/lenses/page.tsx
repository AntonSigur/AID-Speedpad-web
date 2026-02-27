"use client";

import { Container, Typography, Box, Paper, Grid, Chip, Divider, Button, Card, CardContent } from "@mui/material";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExtensionIcon from "@mui/icons-material/Extension";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import CompressIcon from "@mui/icons-material/FolderZip";
import BarChartIcon from "@mui/icons-material/BarChart";
import DataObjectIcon from "@mui/icons-material/DataObject";
import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import SpeedIcon from "@mui/icons-material/Speed";
import DownloadIcon from "@mui/icons-material/Download";

const lenses = [
  {
    name: "CSV Lens",
    dll: "csv.lens.dll",
    icon: <StorageIcon sx={{ fontSize: 36 }} />,
    color: "#4CAF50",
    fileTypes: [".csv", ".tsv"],
    description: "Column-aligned display with alternating row colors and a pinned header row. Makes tabular data instantly readable without importing into a spreadsheet.",
    features: ["Column alignment", "Alternating row colors", "Pinned header row", "Tab-separated support"],
  },
  {
    name: "JSON Lens",
    dll: "json.lens.dll",
    icon: <DataObjectIcon sx={{ fontSize: 36 }} />,
    color: "#FF9800",
    fileTypes: [".json", ".jsonl"],
    description: "Breadcrumb path overlay showing the current object/array context. Navigate deep JSON structures without losing your position.",
    features: ["Breadcrumb path overlay", "Object/array context", "JSONL streaming support", "Content-sniffing detection"],
  },
  {
    name: "Log Lens",
    dll: "log.lens.dll",
    icon: <ArticleIcon sx={{ fontSize: 36 }} />,
    color: "#F44336",
    fileTypes: [".log", ".jsonl", "Apache", "nginx", "syslog"],
    description: "Severity-based coloring: ERROR in red, WARN in yellow, DEBUG in gray. F68 Severity Coloring auto-highlights log levels for instant triage.",
    features: ["F68 Severity Coloring (auto-highlight)", "Severity coloring (ERROR/WARN/DEBUG/INFO)", "Apache/nginx pattern detection", "Syslog format support", "Pattern matching"],
  },
  {
    name: "XML/YAML Lens",
    dll: "xml_yaml.lens.dll",
    icon: <CodeIcon sx={{ fontSize: 36 }} />,
    color: "#9C27B0",
    fileTypes: [".xml", ".yaml", ".yml", ".config", ".csproj", ".svg"],
    description: "Tag/key breadcrumb and indent tracking. Perfect for deeply nested configuration files and project files.",
    features: ["Tag breadcrumb trail", "Indent tracking", "Config file support", "SVG/CSPROJ support"],
  },
  {
    name: "GZ Lens",
    dll: "gz.lens.dll",
    icon: <CompressIcon sx={{ fontSize: 36 }} />,
    color: "#2196F3",
    fileTypes: [".gz", ".bz2", ".zst"],
    description: "Transparent decompression — opens compressed files as if they were uncompressed. Zero-friction access to archived logs.",
    features: ["Transparent decompression", "gzip/bzip2/zstd support", "Magic byte detection", "Temp file redirect"],
  },
  {
    name: "Frequency Lens",
    dll: "freq.lens.dll",
    icon: <BarChartIcon sx={{ fontSize: 36 }} />,
    color: "#00BCD4",
    fileTypes: ["Log-like files"],
    description: "Pattern frequency analysis: counts IPs, emails, URLs, UUIDs, and timestamps. Instantly spot top talkers and anomalies.",
    features: ["IP address counting", "Email/URL/UUID extraction", "Timestamp analysis", "Background processing (up to 500 MB)"],
  },
];

const pluginArch = [
  { label: "Opt-in only", desc: "Lenses suggest themselves but never activate automatically. You stay in control.", icon: <ShieldIcon /> },
  { label: "Crash isolated", desc: "Every lens call is wrapped in SEH exception handling. A buggy lens is auto-deactivated — the editor keeps running.", icon: <SecurityIcon /> },
  { label: "Secure loading", desc: "DLLs load with LOAD_LIBRARY_SEARCH_DLL_LOAD_DIR, restricting search to the lenses/ directory. No DLL hijacking.", icon: <ShieldIcon /> },
  { label: "Hot-swappable", desc: "Up to 16 lenses can be loaded simultaneously. Drop a DLL in the lenses/ folder and restart to pick it up.", icon: <ExtensionIcon /> },
];

export default function LensesPage() {
  return (
    <>
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 }, textAlign: "center" }}>
        <Chip label="Plugin Architecture" color="primary" variant="outlined" sx={{ mb: 2 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3.5rem" }, mb: 2, background: "linear-gradient(135deg, #64B5F6, #00BCD4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Lens Framework
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 720, mx: "auto", mb: 4, lineHeight: 1.7 }}>
          6 built-in DLL plugins that add specialized views for different file types.
          Opt-in, crash-isolated, and secure by design.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          {lenses.map((l) => (
            <Chip key={l.name} label={l.name.replace(" Lens", "")} size="small" sx={{ bgcolor: `${l.color}22`, color: l.color, border: `1px solid ${l.color}44` }} />
          ))}
        </Box>
      </Container>

      {/* How it works */}
      <Container maxWidth="md" sx={{ pb: 6 }}>
        <Paper sx={{ p: { xs: 3, md: 4 }, bgcolor: "#162D50", borderRadius: 3, textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>How Lenses Work</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5, alignItems: "center" }}>
            {["Open file", "→", "All lenses queried", "→", "First match = hint", "→", "User toggles", "→", "Lens renders"].map((step, i) => (
              step === "→" ? (
                <Typography key={i} sx={{ color: "#2196F3", fontWeight: 700, fontSize: "1.2rem" }}>→</Typography>
              ) : (
                <Chip key={i} label={step} sx={{ bgcolor: "#0a1628", color: "#E2E8F0", fontWeight: 500 }} />
              )
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Each lens implements the <code style={{ color: "#00BCD4" }}>ILens</code> C++ interface. Detection is automatic — activation is always manual.
          </Typography>
        </Paper>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Lens cards */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1, textAlign: "center" }}>
          6 Built-in Lenses
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 5, maxWidth: 600, mx: "auto" }}>
          Shipped with every copy of SpeedPad. No installation, no configuration — just open a matching file.
        </Typography>

        <Grid container spacing={3}>
          {lenses.map((lens) => (
            <Grid key={lens.name} size={{ xs: 12, md: 6 }}>
              <Card elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", height: "100%", borderTop: `3px solid ${lens.color}` }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Box sx={{ color: lens.color }}>{lens.icon}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{lens.name}</Typography>
                      <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "monospace" }}>{lens.dll}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    {lens.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2 }}>
                    {lens.fileTypes.map((ft) => (
                      <Chip key={ft} label={ft} size="small" variant="outlined" sx={{ borderColor: `${lens.color}66`, color: lens.color, fontSize: "0.75rem" }} />
                    ))}
                  </Box>
                  <Box>
                    {lens.features.map((f) => (
                      <Typography key={f} component="div" variant="body2" sx={{ color: "#94A3B8", fontSize: "0.85rem", pl: 2, mb: 0.5, position: "relative", "&::before": { content: '"›"', position: "absolute", left: 0, color: lens.color, fontWeight: 700 } }}>
                        {f}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Plugin architecture */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1, textAlign: "center" }}>
          Plugin Architecture
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 5, maxWidth: 600, mx: "auto" }}>
          Security and stability are baked in — not bolted on.
        </Typography>

        <Grid container spacing={3}>
          {pluginArch.map((item) => (
            <Grid key={item.label} size={{ xs: 12, sm: 6 }}>
              <Paper sx={{ p: 3, bgcolor: "#162D50", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <Box sx={{ color: "#2196F3" }}>{item.icon}</Box>
                  <Typography variant="subtitle1" fontWeight={700}>{item.label}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Developer section */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1, textAlign: "center" }}>
          Create Your Own Lens
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          Build a custom lens plugin in C++ using the ILens interface.
        </Typography>

        <Paper sx={{ p: { xs: 3, md: 4 }, bgcolor: "#162D50", borderRadius: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: "#64B5F6" }}>Quick Start</Typography>
          <Box component="ol" sx={{ pl: 3, color: "#E2E8F0", "& li": { mb: 1.5 } }}>
            <li>
              <Typography component="div" variant="body2" color="text.secondary">
                Export two C functions: <code style={{ color: "#00BCD4" }}>CreateLens()</code> and <code style={{ color: "#00BCD4" }}>DestroyLens()</code>
              </Typography>
            </li>
            <li>
              <Typography component="div" variant="body2" color="text.secondary">
                Implement the <code style={{ color: "#00BCD4" }}>ILens</code> interface — at minimum: <code style={{ color: "#00BCD4" }}>GetName</code>, <code style={{ color: "#00BCD4" }}>OnFileOpen</code>, <code style={{ color: "#00BCD4" }}>OnPaint</code>
              </Typography>
            </li>
            <li>
              <Typography component="div" variant="body2" color="text.secondary">
                Name your DLL <code style={{ color: "#00BCD4" }}>yourname.lens.dll</code> and drop it in the <code style={{ color: "#00BCD4" }}>lenses/</code> folder
              </Typography>
            </li>
            <li>
              <Typography component="div" variant="body2" color="text.secondary">
                Restart SpeedPad — your lens appears in the Lenses menu
              </Typography>
            </li>
          </Box>
        </Paper>

        <Paper sx={{ p: { xs: 3, md: 4 }, bgcolor: "#162D50", borderRadius: 3, mt: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: "#64B5F6" }}>Rendering Context</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Your <code style={{ color: "#00BCD4" }}>OnPaint</code> receives a <code style={{ color: "#00BCD4" }}>LensRenderContext</code> with:
          </Typography>
          <Grid container spacing={1}>
            {[
              { field: "hdc", desc: "GDI device context for drawing" },
              { field: "clientRect", desc: "Editor client area rectangle" },
              { field: "firstVisibleLine / lastVisibleLine", desc: "Range of visible lines" },
              { field: "lineHeight, charWidth", desc: "Text metrics" },
              { field: "hFont", desc: "Current editor font" },
              { field: "visibleLines", desc: "Array of decoded line strings" },
              { field: "themeColors", desc: "22-color theme array" },
            ].map((item) => (
              <Grid key={item.field} size={{ xs: 12 }}>
                <Box sx={{ display: "flex", gap: 2, py: 0.5, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <Typography variant="body2" sx={{ fontFamily: "monospace", color: "#00BCD4", minWidth: 220, flexShrink: 0 }}>{item.field}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* CTA */}
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          <SpeedIcon sx={{ mr: 1, verticalAlign: "middle" }} />
          All 6 lenses ship inside the editor
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" startIcon={<DownloadIcon />} href="/download" component={Link} sx={{ bgcolor: "#2196F3", fontWeight: 700, textTransform: "none", px: 4 }}>
            Download SpeedPad
          </Button>
          <Button variant="outlined" size="large" href="/features" component={Link} sx={{ borderColor: "#00BCD4", color: "#00BCD4", fontWeight: 700, textTransform: "none", px: 4 }}>
            All Features
          </Button>
          <Button variant="outlined" href="/docs" component={Link} sx={{ borderColor: "#94A3B8", color: "#94A3B8", fontWeight: 700, textTransform: "none", px: 4 }}>
            Full Documentation →
          </Button>
          <Button variant="outlined" href="/contributing" component={Link} sx={{ borderColor: "#94A3B8", color: "#94A3B8", fontWeight: 700, textTransform: "none", px: 4 }}>
            Contributing Guide →
          </Button>
        </Box>
      </Box>
    </Box>
    <Footer />
    </>
  );
}
