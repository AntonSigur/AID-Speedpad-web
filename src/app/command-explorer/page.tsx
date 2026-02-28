"use client";

import {
  Box,
  Container,
  Typography,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";

/* ───── role definitions ───── */
const roles = [
  { id: "all", label: "All", color: "#607D8B" },
  { id: "devops", label: "DevOps", color: "#F44336" },
  { id: "developer", label: "Developer", color: "#2196F3" },
  { id: "data", label: "Data Analyst", color: "#4CAF50" },
  { id: "writer", label: "Writer", color: "#9C27B0" },
  { id: "sysadmin", label: "SysAdmin", color: "#FF9800" },
  { id: "casual", label: "Casual", color: "#00BCD4" },
] as const;

type RoleId = (typeof roles)[number]["id"];

/* ───── presets ───── */
const presets = [
  { label: "Incident Triage", filterRole: "devops" as RoleId, filterCat: "View" },
  { label: "Large-File Navigation", filterRole: "devops" as RoleId, filterCat: "Navigation" },
  { label: "Editing Power Flow", filterRole: "developer" as RoleId, filterCat: "Edit" },
];

/* ───── command data sourced from FEATURES.md + SHORTCUTS.md ───── */
interface Cmd {
  name: string;
  shortcut: string;
  category: "File" | "Edit" | "View" | "Search" | "Navigation" | "Tools" | "Help";
  roles: RoleId[];
  outcome: string;
}

const commands: Cmd[] = [
  // ── File ──
  { name: "New Document", shortcut: "Ctrl+N", category: "File", roles: ["developer", "writer", "casual"], outcome: "Create a blank document instantly" },
  { name: "Open File", shortcut: "Ctrl+O", category: "File", roles: ["all"], outcome: "Open any file — 10KB or 100GB, same speed" },
  { name: "Save", shortcut: "Ctrl+S", category: "File", roles: ["all"], outcome: "Save current file" },
  { name: "Save As", shortcut: "Ctrl+Shift+S", category: "File", roles: ["all"], outcome: "Save with a new name or location" },
  { name: "New Window", shortcut: "Ctrl+Shift+N", category: "File", roles: ["devops", "developer", "sysadmin"], outcome: "Launch a separate SpeedPad instance" },
  { name: "Quick File Compare", shortcut: "—", category: "File", roles: ["devops", "developer"], outcome: "Instant GREEN/YELLOW/RED file verdict" },
  { name: "Compare Two Files", shortcut: "—", category: "File", roles: ["devops", "developer"], outcome: "Pick two files, open Diff View" },
  { name: "Save Workspace", shortcut: "Ctrl+Alt+S", category: "File", roles: ["devops", "sysadmin"], outcome: "Save session as .speedws JSON file" },
  { name: "Open Workspace", shortcut: "Ctrl+Alt+O", category: "File", roles: ["devops", "sysadmin"], outcome: "Restore a saved workspace session" },
  { name: "Save Filtered", shortcut: "—", category: "File", roles: ["devops", "data"], outcome: "Export the currently filtered view to a file" },
  { name: "Save Selection", shortcut: "—", category: "File", roles: ["developer", "data"], outcome: "Export selected text to a new file" },
  { name: "Revert", shortcut: "—", category: "File", roles: ["developer", "writer"], outcome: "Restore file to last saved state" },

  // ── Edit ──
  { name: "Undo / Redo", shortcut: "Ctrl+Z / Ctrl+Y", category: "Edit", roles: ["all"], outcome: "Step through edit history" },
  { name: "Cut / Copy / Paste", shortcut: "Ctrl+X / C / V", category: "Edit", roles: ["all"], outcome: "Standard clipboard operations" },
  { name: "Select All", shortcut: "Ctrl+A", category: "Edit", roles: ["all"], outcome: "Select entire document" },
  { name: "Duplicate Line", shortcut: "Ctrl+D", category: "Edit", roles: ["developer", "writer"], outcome: "Copy current line below cursor" },
  { name: "Delete Line", shortcut: "Ctrl+Shift+K", category: "Edit", roles: ["developer", "writer"], outcome: "Remove entire line instantly" },
  { name: "Indent / Outdent", shortcut: "Ctrl+] / Ctrl+[", category: "Edit", roles: ["developer"], outcome: "Adjust line indentation" },
  { name: "Select Line", shortcut: "Ctrl+Shift+L", category: "Edit", roles: ["developer", "writer"], outcome: "Select entire current line" },
  { name: "Select Word", shortcut: "Ctrl+Shift+W", category: "Edit", roles: ["developer", "writer"], outcome: "Select word at cursor" },
  { name: "Multi-Cursor Select", shortcut: "Ctrl+D", category: "Edit", roles: ["developer"], outcome: "Add next match to multi-cursor selection" },
  { name: "Add Cursor Above/Below", shortcut: "Ctrl+Alt+↑/↓", category: "Edit", roles: ["developer"], outcome: "Insert cursors on adjacent lines" },
  { name: "Column Select", shortcut: "Alt+Shift+Drag", category: "Edit", roles: ["developer", "data"], outcome: "Rectangular box selection" },
  { name: "Sort Lines", shortcut: "—", category: "Edit", roles: ["data", "developer"], outcome: "Sort A→Z, Z→A, or case-insensitive" },
  { name: "Deduplicate Lines", shortcut: "—", category: "Edit", roles: ["data", "devops"], outcome: "Remove duplicate lines" },
  { name: "Clipboard Ring", shortcut: "Ctrl+Shift+B", category: "Edit", roles: ["developer", "writer"], outcome: "Cycle through clipboard history" },
  { name: "Evaluate Expression", shortcut: "Ctrl+=", category: "Edit", roles: ["developer", "data"], outcome: "Calculate math in selection" },

  // ── View ──
  { name: "Tail Mode", shortcut: "Ctrl+Shift+T", category: "View", roles: ["devops", "sysadmin"], outcome: "Live-follow growing log files like tail -f" },
  { name: "Reverse View", shortcut: "Ctrl+Shift+V", category: "View", roles: ["devops", "sysadmin"], outcome: "Newest lines at top — reverse-tail for logs" },
  { name: "Filter Lines", shortcut: "Ctrl+L", category: "View", roles: ["devops", "sysadmin", "data"], outcome: "Show only lines matching a pattern" },
  { name: "CSV Mode", shortcut: "Ctrl+Shift+C", category: "View", roles: ["data", "developer"], outcome: "Columnar table view with aligned columns" },
  { name: "Anomaly Highlighting", shortcut: "Ctrl+Shift+A", category: "View", roles: ["devops", "sysadmin"], outcome: "Detect timestamp gaps — amber/red scrollbar marks" },
  { name: "Tail Dashboard", shortcut: "Ctrl+Alt+T", category: "View", roles: ["devops", "sysadmin"], outcome: "Multi-file split-pane monitor (up to 8 panes)" },
  { name: "Multi-Log View", shortcut: "Ctrl+Shift+M", category: "View", roles: ["devops", "sysadmin"], outcome: "Merge rotated logs into one chronological document" },
  { name: "File Histogram", shortcut: "Ctrl+Alt+H", category: "View", roles: ["devops", "data"], outcome: "Visual 100GB+ file navigator with heatmap" },
  { name: "Regex Highlight", shortcut: "Ctrl+Shift+H", category: "View", roles: ["devops", "developer", "data"], outcome: "Colorize text matching regex patterns" },
  { name: "Regex Builder", shortcut: "Ctrl+Shift+R", category: "View", roles: ["devops", "developer"], outcome: "4-color regex panel with live preview" },
  { name: "Dark Mode", shortcut: "Ctrl+Shift+D", category: "View", roles: ["all"], outcome: "Toggle dark/light theme" },
  { name: "Word Wrap", shortcut: "Ctrl+W", category: "View", roles: ["writer", "casual"], outcome: "Toggle line wrapping" },
  { name: "File Statistics", shortcut: "Ctrl+Shift+I", category: "View", roles: ["all"], outcome: "File size, line count, encoding info" },
  { name: "Read-Only Mode", shortcut: "Ctrl+R", category: "View", roles: ["devops", "sysadmin"], outcome: "Prevent accidental edits to production logs" },
  { name: "Code Folding", shortcut: "Ctrl+Shift+[ / ]", category: "View", roles: ["developer"], outcome: "Collapse/expand indented blocks" },
  { name: "Log Correlation Mode", shortcut: "Ctrl+Shift+E", category: "View", roles: ["devops", "sysadmin"], outcome: "Link entries across 8 files by timestamp" },
  { name: "Correlation Pattern Search", shortcut: "Ctrl+Shift+G", category: "View", roles: ["devops", "sysadmin"], outcome: "Find text across correlated sources within ±5 min window" },
  { name: "Correlation Timeline", shortcut: "Ctrl+Shift+J", category: "View", roles: ["devops", "sysadmin"], outcome: "Visual merged timeline of correlated events across files" },
  { name: "Performance Dashboard", shortcut: "Status bar", category: "View", roles: ["devops", "developer"], outcome: "Real-time metrics: open time, search speed, memory, FPS" },
  { name: "Time Browse", shortcut: "—", category: "View", roles: ["devops", "sysadmin"], outcome: "Scrub through log timestamps on a timeline" },
  { name: "Line Numbers", shortcut: "—", category: "View", roles: ["all"], outcome: "Toggle line number gutter" },

  // ── Search ──
  { name: "Find", shortcut: "Ctrl+F", category: "Search", roles: ["all"], outcome: "Find in file with regex support" },
  { name: "Find & Replace", shortcut: "Ctrl+H", category: "Search", roles: ["developer", "writer"], outcome: "Search and replace with regex" },
  { name: "Find Next / Previous", shortcut: "F3 / Shift+F3", category: "Search", roles: ["all"], outcome: "Jump between search matches" },
  { name: "Cross-File Search", shortcut: "Ctrl+Shift+F", category: "Search", roles: ["devops", "developer", "sysadmin"], outcome: "Parallel multi-threaded search across directories" },
  { name: "Multi-File Search", shortcut: "Ctrl+Alt+F", category: "Search", roles: ["devops", "developer", "sysadmin"], outcome: "Folder-first search: pick directory, search all files with result navigation" },
  { name: "Diff View", shortcut: "Alt+D", category: "Search", roles: ["devops", "developer"], outcome: "Side-by-side comparison (Myers O(ND) algorithm)" },
  { name: "Next / Previous Diff", shortcut: "F7 / Shift+F7", category: "Search", roles: ["devops", "developer"], outcome: "Jump between differences in Diff View" },
  { name: "Next / Previous Anomaly", shortcut: "Ctrl+Shift+↓/↑", category: "Search", roles: ["devops", "sysadmin"], outcome: "Jump between timestamp anomalies" },

  // ── Navigation ──
  { name: "Go to Line", shortcut: "Ctrl+G", category: "Navigation", roles: ["all"], outcome: "Jump to specific line number" },
  { name: "Go to Time", shortcut: "Ctrl+T", category: "Navigation", roles: ["devops", "sysadmin"], outcome: "Jump to timestamp in log (sparse search for >1GB)" },
  { name: "Toggle Bookmark", shortcut: "Ctrl+F2", category: "Navigation", roles: ["developer", "devops"], outcome: "Mark/unmark current line" },
  { name: "Next / Previous Bookmark", shortcut: "F2 / Shift+F2", category: "Navigation", roles: ["developer", "devops"], outcome: "Jump between bookmarked lines" },
  { name: "Slice Navigation", shortcut: "Ctrl+PgUp/PgDn", category: "Navigation", roles: ["devops", "data"], outcome: "Jump between probes in 100GB+ files" },

  // ── Tools ──
  { name: "JSON Format / Minify", shortcut: "—", category: "Tools", roles: ["developer", "data"], outcome: "Pretty-print or compress JSON" },
  { name: "Base64 Encode/Decode", shortcut: "—", category: "Tools", roles: ["developer", "devops"], outcome: "Convert to/from Base64" },
  { name: "URL Encode/Decode", shortcut: "—", category: "Tools", roles: ["developer"], outcome: "Percent-encode/decode URLs" },
  { name: "Hash Selection", shortcut: "—", category: "Tools", roles: ["devops", "developer", "sysadmin"], outcome: "MD5, SHA-1, or SHA-256 of selected text" },
  { name: "Hash File", shortcut: "—", category: "Tools", roles: ["devops", "sysadmin"], outcome: "Hash entire file (zero-copy via MappedFile)" },
  { name: "Compare Hashes", shortcut: "—", category: "Tools", roles: ["devops", "sysadmin"], outcome: "Compare hash against clipboard content" },
  { name: "Convert Encoding", shortcut: "—", category: "Tools", roles: ["developer", "data"], outcome: "UTF-8, UTF-16 LE/BE, ASCII conversion" },
  { name: "Uppercase / Lowercase", shortcut: "—", category: "Tools", roles: ["writer", "developer"], outcome: "Transform case of selection" },
  { name: "Title Case", shortcut: "—", category: "Tools", roles: ["writer"], outcome: "Capitalize each word" },
  { name: "Trim Trailing", shortcut: "—", category: "Tools", roles: ["developer"], outcome: "Remove trailing whitespace" },
  { name: "Remove Blank Lines", shortcut: "—", category: "Tools", roles: ["developer", "data"], outcome: "Delete empty lines" },
  { name: "Frequency Analyzer", shortcut: "—", category: "Tools", roles: ["devops", "data", "sysadmin"], outcome: "Detect IP, Email, URL, UUID, Timestamp, Error patterns" },
  { name: "File Archaeology", shortcut: "—", category: "Tools", roles: ["devops", "sysadmin"], outcome: "File metadata, timestamps, and hashes" },
  { name: "ROT13 / Morse / Binary", shortcut: "—", category: "Tools", roles: ["casual"], outcome: "Fun text transforms and encoding games" },

  // ── Navigation (additional) ──
  { name: "Previous Histogram Slice", shortcut: "Ctrl+Alt+Left", category: "Navigation", roles: ["devops", "data"], outcome: "Jump to previous histogram slice in sparse mode" },
  { name: "Next Histogram Slice", shortcut: "Ctrl+Alt+Right", category: "Navigation", roles: ["devops", "data"], outcome: "Jump to next histogram slice in sparse mode" },
  { name: "First Slice", shortcut: "Ctrl+Home", category: "Navigation", roles: ["devops", "data"], outcome: "Jump to first slice in sparse/histogram view" },
  { name: "Last Slice", shortcut: "Ctrl+End", category: "Navigation", roles: ["devops", "data"], outcome: "Jump to last slice in sparse/histogram view" },

  // ── View (additional) ──
  { name: "Unfold All", shortcut: "Ctrl+K, Ctrl+0", category: "View", roles: ["developer", "writer"], outcome: "Unfold all collapsed code regions" },
  { name: "Close Panel", shortcut: "Escape", category: "View", roles: ["all"], outcome: "Close diff view, dashboard, search panel, or dialog" },

  // ── CLI Flags ──
  { name: "CLI: Open at Column", shortcut: "--column N", category: "Navigation", roles: ["developer", "devops"], outcome: "Position cursor at column N (1-based index)" },
  { name: "CLI: Go to Line", shortcut: "--goto N", category: "Navigation", roles: ["developer", "devops"], outcome: "Alias for --line N; jump to specific line on open" },
  { name: "CLI: Force Encoding", shortcut: "--encoding ENC", category: "File", roles: ["developer", "data"], outcome: "Force encoding: utf8, utf16le, utf16be, ascii" },
  { name: "CLI: Pipe Input", shortcut: "--pipe", category: "File", roles: ["devops", "sysadmin"], outcome: "Read content from stdin (e.g., dir | speedpad --pipe)" },

  // ── Help ──
  { name: "Keyboard Shortcuts", shortcut: "F1", category: "Help", roles: ["all"], outcome: "Display complete shortcut reference" },
  { name: "Command Palette", shortcut: "Ctrl+Shift+P", category: "Help", roles: ["all"], outcome: "Fuzzy-search all 110 commands with role filtering" },
  { name: "Speed Statistics", shortcut: "—", category: "Help", roles: ["casual"], outcome: "Typing and navigation metrics" },
  { name: "Solitaire", shortcut: "Ctrl+Shift+F12", category: "Help", roles: ["casual"], outcome: "Classic card game easter egg (154KB DLL)" },
  { name: "Arkanoid", shortcut: "—", category: "Help", roles: ["casual"], outcome: "Built-in arcade game DLL — break bricks between debugging sessions" },
  { name: "Toggle Direct2D", shortcut: "Ctrl+Alt+D", category: "View", roles: ["developer", "devops"], outcome: "Switch between GDI and Direct2D hardware-accelerated rendering at runtime" },
  { name: "Navigate Menu", shortcut: "—", category: "Navigation", roles: ["all"], outcome: "Centralized access to Find, GoTo, Bookmarks, Compare, Diff" },
  { name: "Snake", shortcut: "Ctrl+Shift+F10", category: "Help", roles: ["casual"], outcome: "Built-in Snake arcade game DLL easter egg 🐍" },
  { name: "SpeedHexPad", shortcut: "Ctrl+Alt+H", category: "View", roles: ["developer", "devops"], outcome: "Hex editor view mode — view file contents as hex bytes" },
  { name: "Endianness Toggle", shortcut: "Ctrl+E", category: "View", roles: ["developer", "devops"], outcome: "Switch between little-endian and big-endian byte interpretation in hex mode" },
  { name: "Load Structure Template", shortcut: "Menu", category: "View", roles: ["developer", "devops"], outcome: "Overlay a JSON binary format template on hex data — field names, types, values inline" },
  { name: "Toggle Data Bookmark", shortcut: "Menu", category: "View", roles: ["developer", "devops"], outcome: "Mark or unmark current hex offset as a data bookmark for quick navigation" },
  { name: "HexCompare", shortcut: "F8", category: "View", roles: ["developer", "devops"], outcome: "Open byte-level binary file diff — compare two files side-by-side with highlighted differences" },
  { name: "HexCompare Next Diff", shortcut: "F7", category: "View", roles: ["developer", "devops"], outcome: "Jump to the next byte difference in HexCompare view" },
  { name: "HexCompare Prev Diff", shortcut: "Shift+F7", category: "View", roles: ["developer", "devops"], outcome: "Jump to the previous byte difference in HexCompare view" },
  { name: "Pattern Timeline", shortcut: "Ctrl+Shift+T", category: "Tools", roles: ["devops", "sysadmin"], outcome: "Visualize event frequencies over time — click to jump to any pattern occurrence" },
  { name: "Auto-Correlator", shortcut: "Ctrl+Shift+K", category: "Tools", roles: ["devops", "sysadmin"], outcome: "Detect event sequences across log files automatically" },
  { name: "Build Output Next Error", shortcut: "F4", category: "Tools", roles: ["developer"], outcome: "Navigate to next MSVC/GCC/Clang compiler error in build output" },
  { name: "Build Output Prev Error", shortcut: "Shift+F4", category: "Tools", roles: ["developer"], outcome: "Navigate to previous compiler error in build output" },
  { name: "Rogue DLL", shortcut: "Ctrl+Shift+F9", category: "Tools", roles: ["developer", "devops"], outcome: "Launch ASCII dungeon explorer game DLL" },
  { name: "C&C Strategy (SpeedStrategy)", shortcut: "Ctrl+Shift+F11", category: "Tools", roles: ["developer", "devops"], outcome: "Launch SpeedStrategy — standalone RTS game with 5 unit types" },
  { name: "Session Save", shortcut: "Auto", category: "File", roles: ["developer", "devops", "sysadmin"], outcome: "Auto-save cursor position, viewport, and open files for session recovery" },
  { name: "File Weather Report", shortcut: "Ctrl+Shift+W", category: "Tools", roles: ["developer", "devops", "sysadmin", "data"], outcome: "Show file health dashboard with complexity, encoding, anomaly scores" },
  { name: "SSH Remote Edit", shortcut: "sftp://", category: "File", roles: ["devops", "sysadmin"], outcome: "Open and edit remote files via SFTP — read/write with credential caching" },
  { name: "Clipboard Intelligence", shortcut: "Ctrl+V", category: "Edit", roles: ["developer", "devops", "data", "sysadmin"], outcome: "Auto-detect clipboard format (JSON, XML, SQL, CSV, base64, hex, URL, path, regex, timestamp)" },
];

const categories = ["View", "Tools", "Edit", "File", "Search", "Navigation", "Help"] as const;
const categoryColors: Record<string, string> = {
  File: "#2196F3", Edit: "#4CAF50", View: "#FF9800", Search: "#F44336",
  Navigation: "#9C27B0", Tools: "#00BCD4", Help: "#607D8B",
};

export default function CommandExplorerPage() {
  const [activeRole, setActiveRole] = useState<RoleId>("all");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [copySnack, setCopySnack] = useState(false);

  const copyPreset = (presetLabel: string) => {
    const preset = presets.find((p) => p.label === presetLabel);
    if (!preset) return;
    const cmds = commands.filter((cmd) => {
      if (preset.filterRole !== "all" && !cmd.roles.includes("all" as RoleId) && !cmd.roles.includes(preset.filterRole))
        return false;
      if (preset.filterCat !== "all" && cmd.category !== preset.filterCat)
        return false;
      return true;
    });
    const text = cmds.map((c) => `${c.shortcut.padEnd(24)} ${c.name} — ${c.outcome}`).join("\n");
    navigator.clipboard.writeText(text).then(() => setCopySnack(true));
  };

  const filtered = useMemo(() => {
    return commands.filter((cmd) => {
      if (activeRole !== "all" && !cmd.roles.includes("all" as RoleId) && !cmd.roles.includes(activeRole))
        return false;
      if (activeCategory !== "all" && cmd.category !== activeCategory)
        return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          cmd.name.toLowerCase().includes(q) ||
          cmd.shortcut.toLowerCase().includes(q) ||
          cmd.outcome.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [activeRole, activeCategory, search]);

  return (
    <>
      <Navbar />
      <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
            {commands.length} Commands, Filtered for Your Workflow
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
            SpeedPad&apos;s Command Palette (Ctrl+Shift+P) supports role-based filtering.
            Pick your role below to see the commands that matter to you.
          </Typography>
        </Box>

        {/* Role chips */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          {roles.map((r) => (
            <Chip
              key={r.id}
              label={r.label}
              onClick={() => setActiveRole(r.id)}
              sx={{
                bgcolor: activeRole === r.id ? r.color : "transparent",
                color: activeRole === r.id ? "#fff" : r.color,
                border: `1px solid ${r.color}`,
                fontWeight: 700,
                cursor: "pointer",
                "&:hover": { bgcolor: r.color, color: "#fff" },
              }}
            />
          ))}
        </Box>

        {/* Category chips */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip
            label="All Categories"
            onClick={() => setActiveCategory("all")}
            sx={{
              bgcolor: activeCategory === "all" ? "#607D8B" : "transparent",
              color: activeCategory === "all" ? "#fff" : "#607D8B",
              border: "1px solid #607D8B", fontWeight: 600, cursor: "pointer",
            }}
          />
          {categories.map((c) => (
            <Chip
              key={c}
              label={c}
              onClick={() => setActiveCategory(c)}
              sx={{
                bgcolor: activeCategory === c ? categoryColors[c] : "transparent",
                color: activeCategory === c ? "#fff" : categoryColors[c],
                border: `1px solid ${categoryColors[c]}`,
                fontWeight: 600, cursor: "pointer",
              }}
            />
          ))}
        </Box>

        {/* Quick presets */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 1, alignSelf: "center" }}>
            Quick presets:
          </Typography>
          {presets.map((p) => (
            <Box key={p.label} sx={{ display: "inline-flex", gap: 0.5 }}>
              <Button
                size="small"
                variant="outlined"
                onClick={() => { setActiveRole(p.filterRole); setActiveCategory(p.filterCat); setSearch(""); }}
                sx={{ textTransform: "none", borderColor: "#2196F3", color: "#2196F3" }}
              >
                {p.label}
              </Button>
              <Button
                size="small"
                variant="text"
                onClick={() => copyPreset(p.label)}
                sx={{ minWidth: 32, color: "#607D8B" }}
                title={`Copy ${p.label} commands`}
              >
                <ContentCopyIcon fontSize="small" />
              </Button>
            </Box>
          ))}
        </Box>

        {/* Search */}
        <Box sx={{ maxWidth: 500, mx: "auto", mb: 4 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search commands, shortcuts, or outcomes…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#162D50" } }}
          />
        </Box>

        {/* Results count */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: "center" }}>
          Showing {filtered.length} of {commands.length} commands
        </Typography>

        {/* Command table */}
        <TableContainer component={Paper} sx={{ bgcolor: "#162D50" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, color: "#94A3B8" }}>Command</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#94A3B8" }}>Shortcut</TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#94A3B8", display: { xs: "none", sm: "table-cell" } }}>
                  Category
                </TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#94A3B8", display: { xs: "none", md: "table-cell" } }}>
                  Roles
                </TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#94A3B8" }}>Outcome</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map((cmd, i) => (
                <TableRow key={i} sx={{ "&:hover": { bgcolor: "#1a3660" } }}>
                  <TableCell sx={{ color: "#E2E8F0", fontWeight: 600 }}>{cmd.name}</TableCell>
                  <TableCell>
                    <Box
                      component="span"
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.85rem",
                        bgcolor: "#0F2035",
                        px: 1,
                        py: 0.3,
                        borderRadius: 1,
                        color: "#00BCD4",
                      }}
                    >
                      {cmd.shortcut}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                    <Chip
                      label={cmd.category}
                      size="small"
                      sx={{
                        bgcolor: categoryColors[cmd.category] + "22",
                        color: categoryColors[cmd.category],
                        fontWeight: 600,
                        fontSize: "0.75rem",
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                    <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                      {cmd.roles.includes("all" as RoleId) ? (
                        <Chip
                          label="All"
                          size="small"
                          sx={{ fontSize: "0.7rem", height: 20, bgcolor: "#607D8B33", color: "#607D8B" }}
                        />
                      ) : (
                        cmd.roles.slice(0, 3).map((r) => {
                          const role = roles.find((ro) => ro.id === r);
                          return (
                            <Chip
                              key={r}
                              label={role?.label || r}
                              size="small"
                              sx={{
                                fontSize: "0.7rem",
                                height: 20,
                                bgcolor: (role?.color || "#607D8B") + "33",
                                color: role?.color || "#607D8B",
                              }}
                            />
                          );
                        })
                      )}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "#94A3B8", fontSize: "0.85rem" }}>{cmd.outcome}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Tip */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            💡 In SpeedPad, press <strong>Ctrl+Shift+P</strong> then type{" "}
            <strong>@ops</strong>, <strong>@dev</strong>, or <strong>@data</strong> to filter
            commands by role.
          </Typography>
        </Box>

        {/* Cross-links */}
        <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="outlined" href="/incident-playbook" sx={{ textTransform: "none" }}>
            See Commands in Action → Incident Playbook
          </Button>
          <Button variant="outlined" href="/docs" sx={{ textTransform: "none" }}>
            Full Documentation →
          </Button>
          <Button variant="outlined" href="/getting-started#large-logs" sx={{ textTransform: "none" }}>
            Large Log Recipe →
          </Button>
        </Box>
      </Container>
    </Box>
    <Footer />
    <Snackbar
      open={copySnack}
      autoHideDuration={2000}
      onClose={() => setCopySnack(false)}
      message="Command set copied to clipboard"
    />
    </>
  );
}
