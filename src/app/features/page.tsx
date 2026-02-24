"use client";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyDownloadCTA from "@/components/StickyDownloadCTA";
import Link from "next/link";

const featureGroups = [
  {
    title: "File Menu",
    features: [
      { name: "New / Open / Save", shortcut: "Ctrl+N/O/S", desc: "Standard file operations with fast memory-mapped I/O" },
      { name: "Quick File Compare", shortcut: "—", desc: "Compare current file (GREEN/YELLOW/RED verdict)" },
      { name: "Compare Two Files", shortcut: "—", desc: "Pick two files, compare with optional Diff View" },
      { name: "Save Workspace", shortcut: "Ctrl+Alt+S", desc: "Save session as .speedws JSON" },
      { name: "Open Workspace", shortcut: "Ctrl+Alt+O", desc: "Restore saved workspace session" },
      { name: "Save Filtered", shortcut: "—", desc: "Save currently filtered view to file" },
      { name: "Recent Files / Workspaces", shortcut: "—", desc: "Last 10 files and 8 workspaces (MRU)" },
    ],
  },
  {
    title: "Edit Menu",
    features: [
      { name: "Undo / Redo", shortcut: "Ctrl+Z/Y", desc: "500-level undo via piece table snapshots" },
      { name: "Find & Replace", shortcut: "Ctrl+F / Ctrl+H", desc: "Full regex support with live highlighting" },
      { name: "Cross-File Search", shortcut: "Ctrl+Shift+F", desc: "Parallel multi-threaded search across directories using all CPU cores" },
      { name: "Diff View", shortcut: "Alt+D", desc: "Side-by-side comparison using Myers O(ND) algorithm" },
      { name: "Sort Lines", shortcut: "—", desc: "Ascending, descending, or case-insensitive sorting" },
      { name: "Deduplicate Lines", shortcut: "—", desc: "Remove duplicate lines instantly" },
      { name: "Clipboard Ring", shortcut: "Ctrl+Shift+B", desc: "Access clipboard history with multiple entries" },
      { name: "Diff with Clipboard", shortcut: "—", desc: "Compare selection against clipboard content" },
      { name: "Select Next Occurrence", shortcut: "Ctrl+D", desc: "Add next match to multi-cursor selections" },
      { name: "Add Cursor Above/Below", shortcut: "Ctrl+Alt+Up/Down", desc: "Insert extra cursors on adjacent lines" },
      { name: "Column Select", shortcut: "Alt+Shift+Drag", desc: "Rectangular box selection with cursors per line" },
      { name: "Multi-Cursor Find+Replace", shortcut: "Ctrl+H", desc: "Replace operates across all cursor selections simultaneously" },
    ],
  },
  {
    title: "View Menu",
    features: [
      { name: "Tail Mode", shortcut: "Ctrl+Shift+T", desc: "Live-follow growing files like tail -f" },
      { name: "Reverse View", shortcut: "Ctrl+Shift+V", desc: "Display file bottom-to-top (reverse-tail: new lines at top)" },
      { name: "Reverse Tail", shortcut: "Ctrl+Alt+V", desc: "Combined reverse + tail mode in one shortcut, --reverse-tail CLI flag" },
      { name: "Minimap Sidebar", shortcut: "Ctrl+Alt+M", desc: "80px condensed overview with click-to-navigate, viewport indicator, bookmark markers" },
      { name: "Anomaly Highlighting", shortcut: "Ctrl+Shift+A", desc: "Detect timestamp gaps in logs (amber/red scrollbar marks)" },
      { name: "Tail Dashboard", shortcut: "Ctrl+Alt+T", desc: "Multi-file split-pane log monitor (up to 8 panes)" },
      { name: "File Histogram", shortcut: "Ctrl+Alt+H", desc: "Visual navigator for 100GB+ files (heatmap, click-to-jump)" },
      { name: "Multi-Log Unified View", shortcut: "Ctrl+Shift+M", desc: "Merge rotated log files into one chronological stream with file origin tracking" },
      { name: "Multi-Log Tail", shortcut: "—", desc: "Tail mode watches newest file in rotation, auto-refreshes unified view" },
      { name: "Multi-Log Compressed Files", shortcut: "—", desc: ".gz/.bz2/.zst decompression in unified view with auto-cleanup temp files" },
      { name: "Multi-Log Cross-File Search", shortcut: "Ctrl+Shift+F", desc: "Search across all files in unified multi-log view with file origin" },
      { name: "Anomaly Gutter Marks", shortcut: "—", desc: "Amber dots in gutter for anomaly lines, visible in normal and reverse view" },
      { name: "Log Rotation Detect", shortcut: "—", desc: "Auto-discovers 10 rotation patterns (.1/.2, .gz, .bz2, .zst, .xz, date-based, IIS, log4j)" },
      { name: "Timestamp Intelligence", shortcut: "Ctrl+Shift+A", desc: "Relative time (\"2m ago\"), line deltas (Δ+3.2s), auto timezone detection" },
      { name: "Time Range Summary", shortcut: "Ctrl+Shift+R (Time)", desc: "Total duration, busiest minute, largest gap analysis" },
      { name: "Log Correlation", shortcut: "Ctrl+Shift+C (View)", desc: "Link related entries across up to 8 files with timestamp sync and ⛓ indicator" },
      { name: "Performance Dashboard", shortcut: "Status bar", desc: "Real-time metrics: file open time, search speed, memory usage (zero overhead when inactive)" },
      { name: "Ultra-Minimal Notifications", shortcut: "—", desc: "Status bar color dots for encoding, EOL, and reload events — no popups ever" },
      { name: "File Statistics", shortcut: "Ctrl+Shift+I", desc: "Show file size, line count, encoding info" },
      { name: "Time Browse", shortcut: "—", desc: "Scrub through log timestamps on a timeline" },
      { name: "Go to Time", shortcut: "Ctrl+T", desc: "Jump to specific timestamp in log" },
      { name: "Filter", shortcut: "Ctrl+L", desc: "Show only lines matching pattern" },
      { name: "CSV Mode", shortcut: "Ctrl+Shift+C (Lens)", desc: "Columnar table view with aligned columns" },
      { name: "Regex Highlight", shortcut: "Ctrl+Shift+H", desc: "Colorize text matching regex patterns" },
      { name: "Regex Builder", shortcut: "Ctrl+Shift+R", desc: "4-color regex panel with live preview" },
      { name: "Code Folding", shortcut: "Ctrl+Shift+[/]", desc: "Collapse and expand indented blocks" },
      { name: "Dark Mode", shortcut: "Ctrl+Shift+D", desc: "Toggle dark/light theme" },
    ],
  },
  {
    title: "Tools",
    features: [
      { name: "JSON Format / Minify", shortcut: "—", desc: "Pretty-print or compress JSON" },
      { name: "Base64 Encode/Decode", shortcut: "—", desc: "Convert to/from Base64" },
      { name: "URL Encode/Decode", shortcut: "—", desc: "Percent-encode/decode URL-unsafe characters" },
      { name: "Hash Calculator", shortcut: "—", desc: "MD5, SHA-1, SHA-256 for selection or entire file (zero-copy)" },
      { name: "Encoding Converter", shortcut: "—", desc: "UTF-8, UTF-16 LE/BE, ASCII — convert or reinterpret" },
      { name: "Eval Expression", shortcut: "Ctrl+=", desc: "Calculate math expression in selection" },
      { name: "Text Transforms", shortcut: "—", desc: "Uppercase, lowercase, title case, ROT13, Morse, Pig Latin, and more" },
      { name: "Command Palette", shortcut: "Ctrl+Shift+P", desc: "Fuzzy-search all 87+ commands with role-based filtering" },
      { name: "Typing Challenge", shortcut: "—", desc: "Interactive typing speed test with WPM, accuracy, persistent high scores, share to clipboard" },
      { name: "File Archaeology", shortcut: "—", desc: "Show file metadata, timestamps, and hashes" },
    ],
  },
  {
    title: "Lens Plugins",
    features: [
      { name: "CSV/TSV Lens", shortcut: "120KB", desc: "Auto-triggers on .csv/.tsv files, columnar view with separator detection" },
      { name: "JSON Navigator", shortcut: "126KB", desc: "Auto-triggers on .json/.jsonl, tree navigation" },
      { name: "Log Navigator", shortcut: "135KB", desc: "Auto-detects Apache/nginx/syslog/IIS/JSONL/log4j patterns" },
      { name: "XML/YAML Lens", shortcut: "129KB", desc: "Auto-triggers on .xml/.yaml/.yml/.config/.csproj/.svg" },
      { name: "Frequency Analyzer", shortcut: "171KB", desc: "Detect IP, Email, URL, UUID, Timestamp, Error patterns" },
      { name: "Compressed Files", shortcut: "125KB", desc: "Open .gz/.bz2/.zst files directly (magic byte detection)" },
      { name: "Solitaire 🐜", shortcut: "154KB", desc: "Ctrl+Shift+F12 — Classic card game easter egg" },
    ],
  },
];

const comparison = [
  { feature: "EXE Size", sp: "758 KB", npp: "14 MB", vsc: "400 MB", hxd: "3.5 MB" },
  { feature: "Startup Time", sp: "< 50ms", npp: "~1.5s", vsc: "~3s", hxd: "~500ms" },
  { feature: "Multi-Cursor", sp: "✅ Full", npp: "✅ Plugin", vsc: "✅ Built-in", hxd: "❌" },
  { feature: "Multi-Log Merge", sp: "✅ + .gz/.bz2/.zst", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "4GB+ File Support", sp: "✅ Memory-mapped", npp: "❌ Crashes", vsc: "❌ Refuses", hxd: "✅ Hex only" },
  { feature: "Tail Mode", sp: "✅", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "Pipe / Stdin", sp: "✅", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "Cross-File Search", sp: "✅ Parallel", npp: "✅ Single-thread", vsc: "✅ Indexed", hxd: "❌" },
  { feature: "Diff View", sp: "✅ Built-in", npp: "Plugin", vsc: "✅ Built-in", hxd: "✅ Hex diff" },
  { feature: "Reverse View", sp: "✅ + Tail", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "Anomaly Detection", sp: "✅", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "Log Navigation", sp: "✅ 6 formats", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "Max File Size", sp: "100GB+", npp: "~2GB", vsc: "~2GB", hxd: "~8GB" },
  { feature: "Log Rotation Detect", sp: "10 patterns", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "Search Threads", sp: "All cores", npp: "1", vsc: "1", hxd: "1" },
  { feature: "Minimap", sp: "✅ Built-in", npp: "❌", vsc: "✅ Built-in", hxd: "❌" },
  { feature: "Log Correlation", sp: "✅ Cross-file", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "Timestamp Intel", sp: "✅ Auto-detect", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "Perf Dashboard", sp: "✅ Real-time", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "CSV Mode", sp: "✅", npp: "❌", vsc: "Plugin", hxd: "❌" },
  { feature: "Compressed Files", sp: "✅ .gz/.bz2/.zst", npp: "❌", vsc: "❌", hxd: "❌" },
  { feature: "Command Palette", sp: "✅ Role-based", npp: "❌", vsc: "✅", hxd: "❌" },
  { feature: "Dependencies", sp: "Zero", npp: "Scintilla", vsc: "Electron/Node.js", hxd: "Delphi RT" },
];

const uniqueFeatures = [
  "Reverse View & Reverse Tail — read files bottom-to-top, new lines appear at top",
  "Tail Dashboard — monitor up to 8 log files simultaneously in split panes",
  "Anomaly Highlighting — auto-detect timestamp gaps in logs with scrollbar markers",
  "File Histogram — visual heatmap navigator for 100GB+ files with click-to-jump",
  "Time Browse — scrub through log files on a visual timestamp timeline",
  "Multi-Log Unified View — merge rotated log files into one chronological timeline with file origin tracking",
  "Multi-Log Compressed Search — search across .gz/.bz2/.zst compressed log files without manual decompression",
  "Pipe/Stdin support — pipe any command directly into the editor (dir | speedpad)",
  "6 DLL-based Lens Plugins — file-type-specific features loaded on demand",
  "Frequency Analyzer — detect IP, email, URL, UUID, timestamp, error patterns",
  "Role-based Command Palette — filter commands by @dev, @ops, @data, @writer, @admin",
  "Compressed file editing — open .gz, .bz2, .zst files directly",
  "Quick File Compare — instant GREEN/YELLOW/RED file comparison verdict",
  "Save Filtered View — export only the lines matching your current filter",
  "Diff with Clipboard — compare selected text against clipboard content",
  "File Archaeology — inspect file metadata, timestamps, and hashes",
  "Clipboard Ring — access multiple clipboard entries, not just the last one",
  "Typing Challenge — built-in typing speed game with persistent high scores and share-to-clipboard",
  "Solitaire 🐜 — classic card game easter egg (Ctrl+Shift+F12)",
  "100GB+ File Support — sparse sampling reads only 2-4% of the file, other editors crash or refuse",
  "Cake Slice Navigation — Ctrl+PgUp/PgDn jumps between probes in giant files, drag-to-scrub the File Histogram",
  "Log Rotation Detection — auto-discovers 10 rotation patterns (numeric, .gz, .bz2, .zst, .xz, date-based, IIS, log4j/NLog)",
  "TinyRegex NFA Engine — custom regex engine replaces std::regex, guarantees O(nm) complexity, immune to ReDoS attacks",
  "Background Line Index — .spidx sidecar files for instant GoToLine on 4GB+ files (no waiting for full scan)",
  "Ultra-Minimal Notifications — status bar color dots for encoding, EOL, and reload events (no popups ever)",
  "Minimap Sidebar — Ctrl+Alt+M condensed document overview with click-to-navigate, viewport indicator, bookmark markers",
  "Performance Dashboard — real-time status bar metrics: file open time, search speed, memory usage (zero overhead when inactive)",
  "Timestamp Intelligence — relative time display (\"2m ago\"), line deltas (Δ+3.2s), auto timezone detection, time range summaries",
  "Log Correlation Engine — Ctrl+Shift+C links related entries across up to 8 files with timestamp sync and timeline window",
];

export default function FeaturesPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 4, textAlign: "center" }}>
        <Chip label="154+ features" color="primary" variant="outlined" sx={{ mb: 2 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, mb: 2 }}>
          Every Feature in SpeedPad
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
          A comprehensive text editor in 758KB — with zero external dependencies, 6 lens plugins, and 87+ commands.
        </Typography>
      </Container>

      {/* Ops Critical — F60/F61/F63 Trio */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Chip label="Ops Critical" color="error" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1, textAlign: "center" }}>
            Log Analysis Powerhouse
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
            No other editor under 1MB has these three capabilities. They replace heavyweight observability stacks for incident triage.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[
              {
                label: "F61 — Timestamp Intelligence",
                pain: "Logs use different timestamp formats. Finding time gaps means mental math.",
                capability: "Auto-detects 15+ timestamp formats. Shows relative time (\"2m ago\"), line deltas (Δ+3.2s), auto timezone detection, and time range summaries.",
                outcome: "Spot production anomalies in seconds, not minutes.",
                shortcut: "Ctrl+Shift+A",
              },
              {
                label: "F60 — Log Correlation Engine",
                pain: "Related events are scattered across multiple log files. Copy-pasting timestamps between tabs is slow.",
                capability: "Links entries across up to 8 files by timestamp. Clickable ⛓ indicators jump between correlated events.",
                outcome: "Find root causes across services without Splunk or Datadog.",
                shortcut: "Ctrl+Shift+C (View)",
              },
              {
                label: "F63 — Performance Dashboard",
                pain: "No visibility into editor performance when working with large files.",
                capability: "Real-time status bar metrics: file open time, search speed, memory usage, FPS. Zero overhead when inactive.",
                outcome: "Confidence that your 10GB log file isn't eating all your RAM.",
                shortcut: "Built-in panel",
              },
            ].map((f) => (
              <Paper key={f.label} elevation={0} sx={{ p: 3, bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5, flexWrap: "wrap", gap: 1 }}>
                  <Typography variant="h6" sx={{ color: "primary.light" }}>{f.label}</Typography>
                  <Chip label={f.shortcut} size="small" variant="outlined" />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  <strong>Pain:</strong> {f.pain}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  <strong>Capability:</strong> {f.capability}
                </Typography>
                <Typography variant="body2" sx={{ color: "#4CAF50" }}>
                  <strong>Outcome:</strong> {f.outcome}
                </Typography>
              </Paper>
            ))}
          </Box>
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button variant="outlined" component={Link} href="/incident-playbook" sx={{ textTransform: "none", fontWeight: 700, borderColor: "#F44336", color: "#F44336", mr: 2 }}>
              See Incident Playbook →
            </Button>
            <Button variant="outlined" component={Link} href="/command-explorer" sx={{ textTransform: "none", fontWeight: 700, borderColor: "#00BCD4", color: "#00BCD4" }}>
              Explore All Commands →
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 30 Unique Features */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1, textAlign: "center" }}>
            30 Things Only SpeedPad Can Do
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
            Features you won&apos;t find in any other text editor — now 30 and counting
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            {uniqueFeatures.map((f, i) => (
              <Typography component="li" key={i} variant="body1" sx={{ mb: 1.5, color: "text.secondary", "&::marker": { color: "primary.main", fontWeight: 700 } }}>
                <Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
                  {f.split("—")[0]}
                </Box>
                {f.includes("—") ? `—${f.split("—").slice(1).join("—")}` : ""}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Feature Categories */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 4, textAlign: "center" }}>
          Complete Feature List
        </Typography>
        {featureGroups.map((group) => (
          <Accordion
            key={group.title}
            defaultExpanded={group.title === "View Menu"}
            sx={{ bgcolor: "background.paper", border: "1px solid rgba(255,255,255,0.06)", mb: 1, "&:before": { display: "none" } }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                {group.title}
                <Chip label={group.features.length} size="small" sx={{ ml: 1.5, height: 22 }} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700, width: "25%" }}>Feature</TableCell>
                      <TableCell sx={{ fontWeight: 700, width: "15%" }}>
                        {group.title === "Lens Plugins" ? "Size" : "Shortcut"}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {group.features.map((f) => (
                      <TableRow key={f.name} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                        <TableCell sx={{ color: "primary.light", fontWeight: 500 }}>{f.name}</TableCell>
                        <TableCell>
                          <Chip label={f.shortcut} size="small" variant="outlined" sx={{ fontFamily: "monospace", fontSize: "0.75rem" }} />
                        </TableCell>
                        <TableCell sx={{ color: "text.secondary" }}>{f.desc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* Comparison Table */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1, textAlign: "center" }}>
            SpeedPad vs The Competition
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
            Feature-by-feature comparison with popular editors
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Feature</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, color: "primary.light" }}>SpeedPad</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>Notepad++</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>VS Code</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>HxD</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparison.map((row) => (
                  <TableRow key={row.feature} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                    <TableCell>{row.feature}</TableCell>
                    <TableCell align="center" sx={{ color: "primary.light", fontWeight: 600 }}>{row.sp}</TableCell>
                    <TableCell align="center">{row.npp}</TableCell>
                    <TableCell align="center">{row.vsc}</TableCell>
                    <TableCell align="center">{row.hxd}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Performance */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 }, textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 4 }}>
          Performance Guarantees
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
          {[
            { metric: "< 50ms", label: "Startup time" },
            { metric: "< 2s", label: "Open 4GB file" },
            { metric: "< 100MB", label: "RAM for 4GB file" },
            { metric: "60 fps", label: "Scroll rendering" },
            { metric: "64 MB", label: "Mapped view window" },
            { metric: "< 1s", label: "Tail mode latency" },
          ].map((p) => (
            <Box key={p.label} sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Typography variant="h4" color="primary.light" fontWeight={800}>
                {p.metric}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {p.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Cross-Links */}
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Want to go deeper?
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="text" component={Link} href="/how-it-works" sx={{ color: "#00BCD4" }}>
              How It Works →
            </Button>
            <Button variant="text" component={Link} href="/getting-started" sx={{ color: "#00BCD4" }}>
              Quick Start Guide →
            </Button>
          </Box>
        </Container>
      </Box>

      <StickyDownloadCTA />
      <Footer />
    </Box>
  );
}
