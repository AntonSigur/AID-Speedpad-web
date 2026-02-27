"use client";

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  Download as DownloadIcon,
  Terminal as TerminalIcon,
  Speed as SpeedIcon,
  Visibility as TailIcon,
  FolderOpen as FolderIcon,
  Search as SearchIcon,
  DarkMode as DarkModeIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CURRENT_VERSION,
  EXE_SIZE,
  DOWNLOAD_EXE,
  DOWNLOAD_ZIP,
} from "@/lib/product-config";

/* ─── Data ─── */
const INSTALL_STEPS = [
  {
    step: 1,
    title: "Download",
    description: `Get the latest ${CURRENT_VERSION} release (${EXE_SIZE} EXE or ZIP with lens DLLs)`,
    icon: <DownloadIcon />,
  },
  {
    step: 2,
    title: "Extract",
    description:
      "Unzip to any folder (e.g. C:\\Tools\\SpeedPad\\). No installer needed.",
    icon: <FolderIcon />,
  },
  {
    step: 3,
    title: "Run",
    description:
      "Double-click SpeedPad.exe — you're ready. Portable, zero dependencies.",
    icon: <SpeedIcon />,
  },
];

const NAV_SHORTCUTS = [
  { action: "Go to line", shortcut: "Ctrl+G" },
  { action: "Find text", shortcut: "Ctrl+F" },
  { action: "Find next / previous", shortcut: "F3 / Shift+F3" },
  { action: "Toggle bookmarks", shortcut: "Ctrl+F2" },
  { action: "Next / prev bookmark", shortcut: "F2 / Shift+F2" },
  { action: "Toggle word wrap", shortcut: "Ctrl+W" },
  { action: "Toggle line numbers", shortcut: "Ctrl+L" },
  { action: "Hex editor view", shortcut: "Ctrl+Alt+H" },
];

const EDIT_SHORTCUTS = [
  { action: "Undo / Redo", shortcut: "Ctrl+Z / Ctrl+Y" },
  { action: "Cut / Copy / Paste", shortcut: "Ctrl+X / Ctrl+C / Ctrl+V" },
  { action: "Select all", shortcut: "Ctrl+A" },
  { action: "Indent / Outdent", shortcut: "Tab / Shift+Tab" },
  { action: "Toggle read-only", shortcut: "Ctrl+R" },
];

const LOG_WORKFLOWS = [
  {
    title: "Tail Mode (Live Follow)",
    command: "speedpad --tail app.log",
    shortcut: "Ctrl+Shift+T",
    description:
      "Follows new content in real-time. Status bar shows line rate (lines/sec). Press again to pause.",
    icon: <TailIcon />,
  },
  {
    title: "Reverse View",
    command: "speedpad --reverse access.log",
    shortcut: "Ctrl+Shift+V",
    description:
      "Shows the file bottom-to-top — most recent entries appear first.",
    icon: <CodeIcon />,
  },
  {
    title: "Reverse Tail",
    command: "speedpad -t -r app.log",
    shortcut: "Both combined",
    description:
      "New lines appear at the top, pushing older content down. Perfect for live monitoring.",
    icon: <SpeedIcon />,
  },
];

const MULTI_FILE = [
  {
    title: "Dashboard (Multi-File Tail)",
    shortcut: "Ctrl+Alt+T",
    description: "Monitor up to 8 files simultaneously in a split-pane view.",
  },
  {
    title: "Cross-File Search",
    shortcut: "Ctrl+Shift+F",
    description:
      "Search across all files in a directory. Results stream in the background.",
  },
  {
    title: "Diff View",
    shortcut: "Alt+D",
    description:
      "Color-coded diff: green (added), red (deleted), yellow (changed). Navigate with F7/Shift+F7.",
  },
  {
    title: "Workspaces",
    shortcut: "Ctrl+Alt+S / Ctrl+Alt+O",
    description:
      "Save and restore sessions — open files, viewport positions, dashboard layout.",
  },
  {
    title: "Multi-File Search",
    shortcut: "Ctrl+Alt+F",
    description:
      "Folder-first workflow: pick a directory, search all files with parallel threading, navigate results.",
  },
  {
    title: "HexCompare Binary Diff",
    shortcut: "F8",
    description:
      "Compare two binary files byte-by-byte. F7/Shift+F7 navigate between differences. Essential for firmware and patch verification.",
  },
];

const COMMAND_PALETTE_EXAMPLES = [
  { type: "hash", result: "Hash File (MD5/SHA-1/SHA-256)" },
  { type: "json", result: "JSON Format / Minify" },
  { type: "base64", result: "Base64 Encode / Decode" },
  { type: "sort", result: "Sort Lines / Deduplicate" },
  { type: "dark", result: "Toggle Dark Mode" },
];

/* ─── Styles ─── */
const sectionSx = { py: 6 };
const cardSx = {
  p: 3,
  bgcolor: "#162D50",
  borderRadius: 2,
  height: "100%",
};
const codeSx = {
  fontFamily: "monospace",
  bgcolor: "#0a1628",
  color: "#00BCD4",
  px: 1.5,
  py: 1,
  borderRadius: 1,
  fontSize: "0.9rem",
  display: "block",
  overflowX: "auto",
};

export default function GettingStartedPage() {
  return (
    <Box sx={{ bgcolor: "#0F2035", minHeight: "100vh", color: "#E2E8F0" }}>
      <Navbar />

      {/* Hero */}
      <Box
        sx={{
          pt: 14,
          pb: 6,
          textAlign: "center",
          background: "linear-gradient(180deg, #162D50 0%, #0F2035 100%)",
        }}
      >
        <Container maxWidth="md">
          <Chip
            label="Up and running in under a minute"
            sx={{ mb: 2, bgcolor: "#1a3a5c", color: "#00BCD4" }}
          />
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, mb: 2, color: "#fff" }}
          >
            Getting Started
          </Typography>
          <Typography variant="h6" sx={{ color: "#94A3B8", mb: 4 }}>
            SpeedPad is a portable, single-EXE text editor for Windows.
            <br />
            No installer, no dependencies, no admin rights.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              href={DOWNLOAD_EXE}
              sx={{ bgcolor: "#2196F3" }}
            >
              Download EXE ({EXE_SIZE})
            </Button>
            <Button
              variant="outlined"
              size="large"
              href={DOWNLOAD_ZIP}
              sx={{ borderColor: "#2196F3", color: "#2196F3" }}
            >
              Download ZIP
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 3-Step Install */}
      <Container maxWidth="lg" sx={sectionSx}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
        >
          Three Steps. Zero Setup.
        </Typography>
        <Grid container spacing={3}>
          {INSTALL_STEPS.map((s) => (
            <Grid key={s.step} size={{ xs: 12, md: 4 }}>
              <Paper sx={cardSx}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: "#2196F3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                    }}
                  >
                    {s.step}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {s.title}
                  </Typography>
                </Box>
                <Typography sx={{ color: "#94A3B8" }}>{s.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Optional setup */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={cardSx}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Optional: Add to PATH
                </Typography>
                <Typography sx={{ color: "#94A3B8", mb: 2, fontSize: "0.95rem" }}>
                  Launch SpeedPad from any terminal:
                </Typography>
                <Box component="code" sx={codeSx}>
                  {`[Environment]::SetEnvironmentVariable("Path",\n  $env:Path + ";C:\\Tools\\SpeedPad", "User")`}
                </Box>
                <Typography sx={{ color: "#94A3B8", mt: 1.5, fontSize: "0.9rem" }}>
                  Then use <code style={{ color: "#00BCD4" }}>speedpad myfile.txt</code> from anywhere.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={cardSx}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  Optional: File Association
                </Typography>
                <Typography sx={{ color: "#94A3B8", fontSize: "0.95rem" }}>
                  Right-click any <code style={{ color: "#00BCD4" }}>.txt</code>,{" "}
                  <code style={{ color: "#00BCD4" }}>.log</code>,{" "}
                  <code style={{ color: "#00BCD4" }}>.csv</code>, or{" "}
                  <code style={{ color: "#00BCD4" }}>.json</code> file → Open With → browse
                  to SpeedPad.exe → check &quot;Always use this app&quot;.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Opening Files */}
      <Container maxWidth="lg" sx={sectionSx}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Your First File
        </Typography>
        <Typography sx={{ color: "#94A3B8", mb: 4 }}>
          Four ways to open a file — pick whichever fits your workflow.
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              label: "Menu",
              detail: "File → Open",
              shortcut: "Ctrl+O",
              icon: <FolderIcon />,
            },
            {
              label: "Drag & Drop",
              detail: "Drag a file onto the SpeedPad window",
              shortcut: "—",
              icon: <FolderIcon />,
            },
            {
              label: "Command Line",
              detail: "speedpad myfile.txt",
              shortcut: "Terminal",
              icon: <TerminalIcon />,
            },
            {
              label: "Go to Line",
              detail: "speedpad myfile.txt:42",
              shortcut: "Opens at line 42",
              icon: <SearchIcon />,
            },
          ].map((m) => (
            <Grid key={m.label} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper sx={{ ...cardSx, textAlign: "center" }}>
                <Box sx={{ color: "#2196F3", mb: 1 }}>{m.icon}</Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {m.label}
                </Typography>
                <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                  {m.detail}
                </Typography>
                <Chip
                  label={m.shortcut}
                  size="small"
                  sx={{ mt: 1, bgcolor: "#0a1628", color: "#00BCD4" }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Edit mode note */}
        <Paper sx={{ ...cardSx, mt: 3, borderLeft: "3px solid #2196F3" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            View Mode vs Edit Mode
          </Typography>
          <Typography component="div" sx={{ color: "#94A3B8" }}>
            SpeedPad opens large files in <strong>view mode</strong> (memory-mapped,
            read-only). Just start typing to switch to edit mode automatically for
            files under 256 MB. Toggle read-only anytime with{" "}
            <Chip label="Ctrl+R" size="small" sx={{ bgcolor: "#0a1628", color: "#00BCD4" }} />.
          </Typography>
        </Paper>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Shortcut Tables */}
      <Container maxWidth="lg" sx={sectionSx}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Essential Shortcuts
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Navigation
            </Typography>
            <TableContainer component={Paper} sx={{ bgcolor: "#162D50" }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#94A3B8", fontWeight: 700 }}>Action</TableCell>
                    <TableCell sx={{ color: "#94A3B8", fontWeight: 700 }}>Shortcut</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {NAV_SHORTCUTS.map((s) => (
                    <TableRow key={s.action}>
                      <TableCell sx={{ color: "#E2E8F0" }}>{s.action}</TableCell>
                      <TableCell>
                        <Chip
                          label={s.shortcut}
                          size="small"
                          sx={{ bgcolor: "#0a1628", color: "#00BCD4", fontFamily: "monospace" }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Editing
            </Typography>
            <TableContainer component={Paper} sx={{ bgcolor: "#162D50" }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#94A3B8", fontWeight: 700 }}>Action</TableCell>
                    <TableCell sx={{ color: "#94A3B8", fontWeight: 700 }}>Shortcut</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {EDIT_SHORTCUTS.map((s) => (
                    <TableRow key={s.action}>
                      <TableCell sx={{ color: "#E2E8F0" }}>{s.action}</TableCell>
                      <TableCell>
                        <Chip
                          label={s.shortcut}
                          size="small"
                          sx={{ bgcolor: "#0a1628", color: "#00BCD4", fontFamily: "monospace" }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Log Workflows */}
      <Container maxWidth="lg" sx={sectionSx}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Log Analysis Workflows
        </Typography>
        <Typography sx={{ color: "#94A3B8", mb: 4 }}>
          SpeedPad excels at log files. Here are the three modes you&apos;ll use most.
        </Typography>
        <Grid container spacing={3}>
          {LOG_WORKFLOWS.map((w) => (
            <Grid key={w.title} size={{ xs: 12, md: 4 }}>
              <Paper sx={cardSx}>
                <Box sx={{ color: "#2196F3", mb: 1 }}>{w.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {w.title}
                </Typography>
                <Box component="code" sx={{ ...codeSx, mb: 1.5 }}>
                  {w.command}
                </Box>
                <Chip
                  label={w.shortcut}
                  size="small"
                  sx={{ mb: 1.5, bgcolor: "#0a1628", color: "#00BCD4" }}
                />
                <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                  {w.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Large Log Recipe */}
      <Container maxWidth="lg" sx={sectionSx} id="large-logs">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Large Log Recipe: Newest-First Analysis
        </Typography>
        <Typography sx={{ color: "#94A3B8", mb: 4 }}>
          When you have a multi-gigabyte log and need the most recent entries first,
          combine Reverse View with Reverse Tail for live newest-first monitoring.
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={cardSx}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Step 1: Open in Reverse View
              </Typography>
              <Box component="code" sx={codeSx}>
                speedpad --reverse production.log
              </Box>
              <Typography component="div" sx={{ color: "#94A3B8", mt: 1.5, fontSize: "0.9rem" }}>
                Shows the file bottom-to-top. Most recent entries appear first.
                Or press{" "}
                <Chip label="Ctrl+Shift+V" size="small" sx={{ bgcolor: "#0a1628", color: "#00BCD4" }} />{" "}
                after opening.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={cardSx}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Step 2: Add Reverse Tail for Live Monitoring
              </Typography>
              <Box component="code" sx={codeSx}>
                speedpad -t -r production.log
              </Box>
              <Typography component="div" sx={{ color: "#94A3B8", mt: 1.5, fontSize: "0.9rem" }}>
                New lines appear at the top, pushing older content down. Or toggle with{" "}
                <Chip label="Ctrl+Shift+T" size="small" sx={{ bgcolor: "#0a1628", color: "#00BCD4" }} />{" "}
                then{" "}
                <Chip label="Ctrl+Shift+V" size="small" sx={{ bgcolor: "#0a1628", color: "#00BCD4" }} />.
                Status bar shows live line rate (lines/sec).
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper sx={{ ...cardSx, borderLeft: "3px solid #00BCD4" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Why this works for large files
              </Typography>
              <Typography sx={{ color: "#94A3B8" }}>
                SpeedPad uses memory-mapped I/O with a 64 MB sliding window — it never loads the
                entire file into RAM. A 10 GB log uses the same ~64 MB of memory as a 10 KB config.
                Combined with lazy line indexing, scrolling to the end (or viewing in reverse) is
                instant regardless of file size.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Multi-File */}
      <Container maxWidth="lg" sx={sectionSx}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Multi-File Workflows
        </Typography>
        <Grid container spacing={3}>
          {MULTI_FILE.map((m) => (
            <Grid key={m.title} size={{ xs: 12, sm: 6 }}>
              <Paper sx={cardSx}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {m.title}
                </Typography>
                <Chip
                  label={m.shortcut}
                  size="small"
                  sx={{ mb: 1.5, bgcolor: "#0a1628", color: "#00BCD4", fontFamily: "monospace" }}
                />
                <Typography sx={{ color: "#94A3B8" }}>{m.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Command Palette */}
      <Container maxWidth="md" sx={sectionSx}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            The Command Palette
          </Typography>
          <Typography component="div" sx={{ color: "#94A3B8" }}>
            Press{" "}
            <Chip
              label="Ctrl+Shift+P"
              size="small"
              sx={{ bgcolor: "#0a1628", color: "#00BCD4", fontFamily: "monospace" }}
            />{" "}
            for fuzzy search across 97 commands.
          </Typography>
        </Box>
        <Paper sx={{ ...cardSx, maxWidth: 500, mx: "auto" }}>
          {COMMAND_PALETTE_EXAMPLES.map((e, i) => (
            <Box
              key={e.type}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1,
                borderBottom:
                  i < COMMAND_PALETTE_EXAMPLES.length - 1
                    ? "1px solid #1a3a5c"
                    : "none",
              }}
            >
              <Chip
                label={e.type}
                size="small"
                sx={{
                  bgcolor: "#0a1628",
                  color: "#00BCD4",
                  fontFamily: "monospace",
                  minWidth: 70,
                }}
              />
              <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                {e.result}
              </Typography>
            </Box>
          ))}
          <Typography
            sx={{ color: "#64748B", fontSize: "0.8rem", mt: 2, textAlign: "center" }}
          >
            Role-based filtering: type @dev, @ops, @data, or @writer
          </Typography>
        </Paper>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Dark Mode + Performance */}
      <Container maxWidth="lg" sx={sectionSx}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ ...cardSx, borderLeft: "3px solid #00BCD4" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <DarkModeIcon sx={{ color: "#00BCD4" }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Dark Mode
                </Typography>
              </Box>
              <Typography component="div" sx={{ color: "#94A3B8" }}>
                Press{" "}
                <Chip
                  label="Ctrl+Shift+D"
                  size="small"
                  sx={{ bgcolor: "#0a1628", color: "#00BCD4" }}
                />{" "}
                to toggle. Your preference is saved automatically.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ ...cardSx, borderLeft: "3px solid #2196F3" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <SpeedIcon sx={{ color: "#2196F3" }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Performance
                </Typography>
              </Box>
              <Typography sx={{ color: "#94A3B8" }}>
                Memory-mapped I/O means a 4 GB file uses &lt;100 MB of memory.
                Encoding detection is automatic. Files open in under 2 seconds
                regardless of size.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* SpeedHexPad Quick Start */}
      <Container maxWidth="lg" sx={sectionSx}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          SpeedHexPad Quick Start
        </Typography>
        <Typography sx={{ color: "#94A3B8", mb: 4 }}>
          Since v2.65.0, SpeedHexPad is available as a standalone binary or built into SpeedPad.
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ ...cardSx, borderLeft: "3px solid #4CAF50" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#66BB6A" }}>
                Standalone: SpeedHexPad.exe
              </Typography>
              <Typography sx={{ color: "#94A3B8", mb: 1.5 }}>
                Download SpeedHexPad.exe from the <a href="/download" style={{ color: "#66BB6A" }}>download page</a>.
                Double-click to open — drag & drop any file for hex analysis.
              </Typography>
              <Box component="code" sx={{ ...codeSx, color: "#66BB6A" }}>
                SpeedHexPad.exe firmware.bin
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ ...cardSx, borderLeft: "3px solid #2196F3" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#64B5F6" }}>
                Built-in: Ctrl+Alt+H
              </Typography>
              <Typography component="div" sx={{ color: "#94A3B8", mb: 1.5 }}>
                Open any file in SpeedPad and press <Chip label="Ctrl+Alt+H" size="small" sx={{ bgcolor: "#0a1628", color: "#00BCD4" }} /> to
                toggle hex view. Same features — structure templates, data bookmarks, binary inspector.
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                See <a href="/hex-editor" style={{ color: "#64B5F6" }}>SpeedHexPad details →</a>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "#1a3a5c" }} />

      {/* Next Steps CTA */}
      <Box sx={{ bgcolor: "#162D50", py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Explore?
          </Typography>
          <Typography sx={{ color: "#94A3B8", mb: 4 }}>
            You&apos;ve got the essentials. Dive deeper into SpeedPad&apos;s full capabilities.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              href="/command-explorer"
              sx={{ bgcolor: "#2196F3" }}
            >
              Command Explorer (96 Commands)
            </Button>
            <Button
              variant="outlined"
              href="/features"
              sx={{ borderColor: "#00BCD4", color: "#00BCD4" }}
            >
              Full Feature List
            </Button>
            <Button
              variant="outlined"
              href="/incident-playbook"
              sx={{ borderColor: "#00BCD4", color: "#00BCD4" }}
            >
              Incident Playbook
            </Button>
            <Button
              variant="outlined"
              href="/docs"
              sx={{ borderColor: "#94A3B8", color: "#94A3B8" }}
            >
              Documentation
            </Button>
            <Button variant="outlined" href="/shortcuts" sx={{ textTransform: "none" }}>
              Keyboard Shortcuts
            </Button>
            <Button variant="outlined" href="/workflows" sx={{ textTransform: "none" }}>
              Workflow Packs
            </Button>
            <Button variant="outlined" href="/use-cases" sx={{ textTransform: "none" }}>
              Real-World Use Cases
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
