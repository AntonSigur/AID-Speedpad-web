"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import {
  MenuBook as MenuBookIcon,
  Keyboard as KeyboardIcon,
  Terminal as TerminalIcon,
  Speed as SpeedIcon,
  BugReport as BugReportIcon,
  Extension as ExtensionIcon,
} from "@mui/icons-material";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const docSections = [
  { icon: <MenuBookIcon />, title: "Getting Started", href: "#getting-started", desc: "Installation, first file, basic navigation" },
  { icon: <KeyboardIcon />, title: "Keyboard Shortcuts", href: "#shortcuts", desc: "Complete shortcut reference" },
  { icon: <TerminalIcon />, title: "CLI Reference", href: "#cli", desc: "Command-line flags and examples" },
  { icon: <SpeedIcon />, title: "Large Files", href: "#large-files", desc: "Memory-mapped I/O, 100GB+ support" },
  { icon: <ExtensionIcon />, title: "Lens Plugins", href: "#lenses", desc: "CSV, JSON, Log, XML/YAML, GZ, Frequency" },
  { icon: <BugReportIcon />, title: "Antivirus FAQ", href: "/av-faq", desc: "False positives explained + how to fix" },
];

const essentialShortcuts = [
  { shortcut: "Ctrl+O", action: "Open file" },
  { shortcut: "Ctrl+S", action: "Save" },
  { shortcut: "Ctrl+F", action: "Find" },
  { shortcut: "Ctrl+H", action: "Replace" },
  { shortcut: "Ctrl+G", action: "Go to Line" },
  { shortcut: "Ctrl+Shift+P", action: "Command Palette" },
  { shortcut: "Ctrl+Shift+T", action: "Tail Mode" },
  { shortcut: "Ctrl+Shift+V", action: "Reverse View" },
  { shortcut: "Ctrl+Shift+F", action: "Cross-File Search" },
  { shortcut: "Alt+D", action: "Diff View" },
  { shortcut: "Ctrl+Alt+T", action: "Tail Dashboard" },
  { shortcut: "Ctrl+Alt+H", action: "File Histogram" },
  { shortcut: "Ctrl+Shift+A", action: "Anomaly Highlighting" },
  { shortcut: "Ctrl+Shift+M", action: "Multi-Log Unified View" },
  { shortcut: "Ctrl+Shift+C", action: "Log Correlation (View) / CSV Mode (Lens)" },
  { shortcut: "Ctrl+Alt+M", action: "Minimap Sidebar toggle" },
  { shortcut: "Ctrl+Alt+V", action: "Reverse Tail (combined reverse + tail)" },
  { shortcut: "Ctrl+Shift+R", action: "Regex Builder Panel / Time Range Summary (in Time mode)" },
  { shortcut: "Ctrl+Shift+D", action: "Dark Mode" },
  { shortcut: "Ctrl+R", action: "Read-Only Toggle" },
  { shortcut: "Ctrl+L", action: "Filter Lines" },
  { shortcut: "Ctrl+D", action: "Select Next Occurrence (multi-cursor)" },
  { shortcut: "Ctrl+Alt+Up/Down", action: "Add Cursor Above/Below" },
  { shortcut: "Alt+Shift+Drag", action: "Column / Box Select" },
  { shortcut: "Ctrl+Shift+K", action: "Delete Line" },
  { shortcut: "Ctrl+Shift+[", action: "Fold code block" },
  { shortcut: "Ctrl+Shift+]", action: "Unfold code block" },
  { shortcut: "Ctrl+PgUp", action: "Previous probe/slice (sparse mode)" },
  { shortcut: "Ctrl+PgDn", action: "Next probe/slice (sparse mode)" },
  { shortcut: "Ctrl+Home", action: "First slice (sparse mode)" },
  { shortcut: "Ctrl+End", action: "Last slice (sparse mode)" },
  { shortcut: "Ctrl+Alt+Left", action: "Previous histogram slice" },
  { shortcut: "Ctrl+Alt+Right", action: "Next histogram slice" },
  { shortcut: "Ctrl+T", action: "Go to Time (sparse mode navigation)" },
  { shortcut: "Ctrl+Shift+F12", action: "Solitaire 🐜" },
];

const cliExamples = [
  { cmd: "speedpad myfile.txt", desc: "Open a file" },
  { cmd: "speedpad myfile.txt:42", desc: "Open at line 42" },
  { cmd: "speedpad --line 100 app.log", desc: "Open at specific line" },
  { cmd: "speedpad --tail app.log", desc: "Live-follow a log file" },
  { cmd: "speedpad --reverse access.log", desc: "Open in reverse view" },
  { cmd: "speedpad -t -r app.log", desc: "Reverse tail (newest lines at top)" },
  { cmd: "speedpad --diff old.txt new.txt", desc: "Side-by-side diff" },
  { cmd: "speedpad --readonly config.ini", desc: "Open in read-only mode" },
  { cmd: "speedpad --encoding utf16le data.bin", desc: "Open with specific encoding" },
  { cmd: "speedpad --reverse-tail app.log", desc: "Reverse tail mode (newest at top, live-follow)" },
  { cmd: "speedpad --pipe", desc: "Read from stdin explicitly" },
  { cmd: "speedpad --column 5 data.csv", desc: "Open at specific column" },
  { cmd: "speedpad --workspace ops.speedws", desc: "Open a saved workspace" },
  { cmd: "dir | speedpad", desc: "Pipe command output into editor" },
];

export default function DocsPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 4, textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" }, mb: 2 }}>
          Documentation
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: "auto" }}>
          Everything you need to get the most out of SpeedPad.
        </Typography>
      </Container>

      {/* Doc Section Cards */}
      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <Grid container spacing={2}>
          {docSections.map((s) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={s.title}>
              <Card
                component={s.href.startsWith("/") ? Link : "a"}
                href={s.href}
                elevation={0}
                sx={{
                  height: "100%",
                  textDecoration: "none",
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  "&:hover": { borderColor: "primary.dark", bgcolor: "rgba(33, 150, 243, 0.04)" },
                  transition: "all 0.2s",
                }}
              >
                <CardContent sx={{ p: 3, display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Box sx={{ color: "primary.main", mt: 0.5 }}>{s.icon}</Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>{s.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Getting Started */}
      <Box id="getting-started" sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 3 }}>
            Getting Started
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
            SpeedPad is a portable application — no installer needed. Download the EXE, place it in any folder,
            and run it. That&apos;s it. SpeedPad is a single 828KB executable with zero external dependencies.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>Opening Files</Typography>
          <Box component="ul" sx={{ pl: 3, color: "text.secondary" }}>
            <Typography component="li" sx={{ mb: 1 }}><strong>Menu:</strong> File → Open (Ctrl+O)</Typography>
            <Typography component="li" sx={{ mb: 1 }}><strong>Drag & Drop:</strong> Drag files onto the SpeedPad window</Typography>
            <Typography component="li" sx={{ mb: 1 }}><strong>Command Line:</strong> <code style={{ color: "#64B5F6" }}>speedpad myfile.txt</code></Typography>
            <Typography component="li" sx={{ mb: 1 }}><strong>Go to Line:</strong> <code style={{ color: "#64B5F6" }}>speedpad myfile.txt:42</code></Typography>
          </Box>

          <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>Working with Log Files</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            SpeedPad excels at log file analysis. Use <strong>Tail Mode</strong> (Ctrl+Shift+T) to live-follow
            growing files. Use <strong>Reverse View</strong> (Ctrl+Shift+V) to read files bottom-to-top.
            Combine both for <strong>Reverse Tail</strong> — new lines appear at the top.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            The <strong>Tail Dashboard</strong> (Ctrl+Alt+T) lets you monitor up to 8 files simultaneously.
            <strong> Anomaly Highlighting</strong> (Ctrl+Shift+A) auto-detects timestamp gaps and marks them
            on the scrollbar.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>The Command Palette</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Press <strong>Ctrl+Shift+P</strong> to access all 87+ commands with fuzzy search.
            Supports role-based filtering: type <code style={{ color: "#64B5F6" }}>@ops</code> for DevOps commands,{" "}
            <code style={{ color: "#64B5F6" }}>@dev</code> for developer tools,{" "}
            <code style={{ color: "#64B5F6" }}>@data</code> for data analyst features.
          </Typography>
          <Button variant="outlined" component={Link} href="/command-explorer" sx={{ mt: 2, textTransform: "none", fontWeight: 700, borderColor: "#00BCD4", color: "#00BCD4" }}>
            Explore All {86} Commands →
          </Button>
        </Container>
      </Box>

      {/* Shortcuts */}
      <Box id="shortcuts" sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 3 }}>
            Keyboard Shortcuts
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "background.paper", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, width: "40%" }}>Shortcut</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {essentialShortcuts.map((s) => (
                  <TableRow key={s.shortcut} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                    <TableCell>
                      <Chip label={s.shortcut} size="small" variant="outlined" sx={{ fontFamily: "monospace", fontSize: "0.8rem" }} />
                    </TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{s.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: "center" }}>
            Press <strong>F1</strong> inside SpeedPad for the complete shortcut reference.
          </Typography>
        </Container>
      </Box>

      {/* CLI Reference */}
      <Box id="cli" sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 1 }}>
            CLI Reference
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Usage: <code style={{ color: "#64B5F6" }}>speedpad [options] [file[:line]]</code>
          </Typography>
          <Divider sx={{ mb: 3 }} />
          {cliExamples.map((ex) => (
            <Box key={ex.cmd} sx={{ mb: 2 }}>
              <Box sx={{ p: 1.5, bgcolor: "rgba(0,0,0,0.3)", borderRadius: 1, fontFamily: "monospace", color: "#64B5F6", fontSize: "0.9rem", mb: 0.5 }}>
                $ {ex.cmd}
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ pl: 1 }}>
                {ex.desc}
              </Typography>
            </Box>
          ))}
        </Container>
      </Box>

      {/* Large Files */}
      <Box id="large-files" sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 3 }}>
            Large File Support
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            SpeedPad uses <strong>memory-mapped I/O</strong> to handle files of any size without loading them
            into RAM. A 4GB file uses less than 100MB of memory — the editor maps a sliding 64MB view window
            over the file data using the Windows <code style={{ color: "#64B5F6" }}>CreateFileMapping</code> / <code style={{ color: "#64B5F6" }}>MapViewOfFile</code> API.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            Files open in under 2 seconds regardless of size. The <strong>line index builds lazily</strong> —
            scrolling through a large file triggers background indexing only as needed. Line offsets are indexed
            in 64KB chunks, capped at 100,000 lines per invocation to prevent UI freezes.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            For files over 1GB, the <strong>File Histogram</strong> (Ctrl+Alt+H) provides a visual heatmap
            with density information, timestamp labels, and click-to-jump navigation. The sparse indexing
            engine takes 40 sample points across the file for instant overview.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>Piece Table (Copy-on-Write Editing)</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            Edits are never applied to the original file data. SpeedPad maintains a <strong>piece table</strong> —
            a sequence of pieces referencing either the original memory-mapped buffer (read-only) or an append-only
            add buffer for inserted text. This gives O(log n) lookup and 500 levels of undo/redo.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>Encoding Detection</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            SpeedPad auto-detects encoding on open: <strong>BOM detection</strong> (UTF-8/16 LE/BE),
            <strong> null-byte heuristic</strong> (UTF-16 if &gt;12.5% nulls),
            <strong> UTF-8 validation</strong> (multi-byte sequence check), and <strong>ASCII fallback</strong>.
            Decoding is done per-line at render time — the entire file is never converted at once.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>Feature-Specific Limits</Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Feature</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Max File Size</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Reason</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { feature: "Cross-File Search", max: "500 MB", reason: "Scans entire file content for matches" },
                  { feature: "File Compare / Diff", max: "64 MB", reason: "Loads both files for LCS algorithm" },
                  { feature: "Regex Highlighting", max: "500 MB", reason: "Applies regex across all lines" },
                  { feature: "Frequency Lens", max: "500 MB", reason: "Counts all line occurrences" },
                ].map((l) => (
                  <TableRow key={l.feature} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                    <TableCell sx={{ color: "primary.light", fontWeight: 500 }}>{l.feature}</TableCell>
                    <TableCell>{l.max}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{l.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Files exceeding these limits remain fully viewable and editable — only the specific feature is unavailable.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>Tail Mode &amp; File Monitoring</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            A background thread uses <code style={{ color: "#64B5F6" }}>ReadDirectoryChangesW</code> to watch for changes.
            When the file grows, SpeedPad refreshes the memory mapping and extends the line index incrementally.
            If the file shrinks (log rotation), the index is fully rebuilt. Rate calculation uses a circular buffer
            of line-count samples to display lines/second in the status bar.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Operations on files larger than 1MB automatically run on a background thread. Cross-file search uses
            a parallel thread pool (up to 8 workers). Smaller files (&lt;1MB) are processed inline for lower latency.
          </Typography>
        </Container>
      </Box>

      {/* Lenses */}
      <Box id="lenses" sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 3 }}>
            Lens Plugins
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
            SpeedPad uses a DLL-based lens architecture. Lenses are <strong>opt-in</strong> and loaded on demand —
            they add file-type-specific features without bloating the core editor. When a matching file is opened,
            a hint appears in the status bar. Activate via the menu command to get specialized rendering.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
            <strong>Security:</strong> Lens DLLs are loaded with <code style={{ color: "#64B5F6" }}>LOAD_LIBRARY_SEARCH_DLL_LOAD_DIR</code> to
            prevent DLL hijacking. Buggy plugins are auto-deactivated via SEH crash isolation — a faulty lens
            can never take down the editor. Up to 16 lenses can be loaded simultaneously.
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Lens</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Size</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Auto-Triggers On</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { name: "CSV/TSV", size: "120 KB", triggers: ".csv, .tsv — column-aligned display with alternating row colors and pinned header" },
                  { name: "JSON Navigator", size: "126 KB", triggers: ".json, .jsonl — breadcrumb path overlay showing object/array context" },
                  { name: "Log Navigator", size: "135 KB", triggers: ".log, Apache/nginx/syslog/IIS — severity coloring (ERROR=red, WARN=yellow)" },
                  { name: "XML/YAML", size: "129 KB", triggers: ".xml, .yaml, .yml, .config, .csproj — tag/key breadcrumb and indent tracking" },
                  { name: "Frequency Analyzer", size: "171 KB", triggers: "Opt-in — counts IPs, emails, URLs, UUIDs, timestamps (up to 500MB)" },
                  { name: "Compressed Files", size: "125 KB", triggers: ".gz, .bz2, .zst — transparent decompression via magic byte detection" },
                ].map((l) => (
                  <TableRow key={l.name} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                    <TableCell sx={{ color: "primary.light", fontWeight: 500 }}>{l.name}</TableCell>
                    <TableCell>{l.size}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{l.triggers}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
