"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  TextField,
  InputAdornment,
  Button,
  Grid,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Shortcut {
  keys: string;
  action: string;
  category: string;
}

const shortcuts: Shortcut[] = [
  // Essential
  { keys: "Ctrl+N", action: "New document", category: "Essential" },
  { keys: "Ctrl+O", action: "Open file", category: "Essential" },
  { keys: "Ctrl+S", action: "Save", category: "Essential" },
  { keys: "Ctrl+Shift+S", action: "Save As", category: "Essential" },
  { keys: "Ctrl+Z", action: "Undo", category: "Essential" },
  { keys: "Ctrl+Y", action: "Redo", category: "Essential" },
  { keys: "Ctrl+X", action: "Cut", category: "Essential" },
  { keys: "Ctrl+C", action: "Copy", category: "Essential" },
  { keys: "Ctrl+V", action: "Paste", category: "Essential" },
  { keys: "Ctrl+A", action: "Select All", category: "Essential" },
  { keys: "Ctrl+F", action: "Find", category: "Essential" },
  { keys: "Ctrl+H", action: "Replace", category: "Essential" },
  { keys: "F3 / Shift+F3", action: "Find Next / Previous", category: "Essential" },
  { keys: "Ctrl+G", action: "Go to Line", category: "Essential" },
  { keys: "Ctrl+Shift+P", action: "Command Palette", category: "Essential" },
  { keys: "F1", action: "Keyboard Shortcuts", category: "Essential" },

  // Editing
  { keys: "Ctrl+D", action: "Duplicate Line", category: "Editing" },
  { keys: "Ctrl+Shift+K", action: "Delete Line", category: "Editing" },
  { keys: "Ctrl+]", action: "Indent", category: "Editing" },
  { keys: "Ctrl+[", action: "Outdent", category: "Editing" },
  { keys: "Ctrl+Shift+L", action: "Select Line", category: "Editing" },
  { keys: "Ctrl+Shift+W", action: "Select Word", category: "Editing" },
  { keys: "Ctrl+Shift+B", action: "Clipboard Ring", category: "Editing" },
  { keys: "Ctrl+=", action: "Evaluate Expression", category: "Editing" },

  // Navigation
  { keys: "Ctrl+T", action: "Go to Time (timestamp/sparse search)", category: "Navigation" },
  { keys: "Ctrl+F2", action: "Toggle Bookmark", category: "Navigation" },
  { keys: "F2", action: "Next Bookmark", category: "Navigation" },
  { keys: "Shift+F2", action: "Previous Bookmark", category: "Navigation" },
  { keys: "Ctrl+W", action: "Toggle Word Wrap", category: "Navigation" },

  // Code Folding
  { keys: "Ctrl+Shift+[", action: "Fold Region", category: "Folding" },
  { keys: "Ctrl+Shift+]", action: "Unfold Region", category: "Folding" },
  { keys: "Ctrl+K, Ctrl+0", action: "Unfold All", category: "Folding" },

  // View Modes
  { keys: "Ctrl+Shift+T", action: "Toggle Tail Mode", category: "View Modes" },
  { keys: "Ctrl+Shift+V", action: "Toggle Reverse View", category: "View Modes" },
  { keys: "Ctrl+Shift+D", action: "Toggle Dark Mode", category: "View Modes" },
  { keys: "Ctrl+Shift+I", action: "File Statistics", category: "View Modes" },
  { keys: "Ctrl+R", action: "Toggle Read-Only", category: "View Modes" },
  { keys: "Ctrl+L", action: "Filter (show matching lines)", category: "View Modes" },
  { keys: "Ctrl+Shift+C", action: "CSV Mode (Lens) / Correlation Mode (View)", category: "View Modes" },
  { keys: "Ctrl+Shift+H", action: "Regex Highlight", category: "View Modes" },
  { keys: "Ctrl+Shift+R", action: "Regex Builder Panel / Time Range Summary", category: "View Modes" },
  { keys: "Ctrl+Alt+H", action: "File Histogram (giant file navigator)", category: "View Modes" },
  { keys: "Ctrl+Alt+Left", action: "Previous Histogram Slice", category: "View Modes" },
  { keys: "Ctrl+Alt+Right", action: "Next Histogram Slice", category: "View Modes" },
  { keys: "Ctrl+PgUp", action: "Previous Slice/Probe (sparse mode)", category: "View Modes" },
  { keys: "Ctrl+PgDn", action: "Next Slice/Probe (sparse mode)", category: "View Modes" },
  { keys: "Ctrl+Home", action: "First Slice (sparse mode)", category: "View Modes" },
  { keys: "Ctrl+End", action: "Last Slice (sparse mode)", category: "View Modes" },
  { keys: "Ctrl+Shift+A", action: "Anomaly Highlighting (timestamp gap detection)", category: "View Modes" },
  { keys: "Ctrl+Alt+M", action: "Toggle Minimap Sidebar", category: "View Modes" },

  // Search & Compare
  { keys: "Ctrl+Shift+F", action: "Cross-File Search", category: "Search" },
  { keys: "Alt+D", action: "Open Diff View", category: "Search" },
  { keys: "F7", action: "Next Diff", category: "Search" },
  { keys: "Shift+F7", action: "Previous Diff", category: "Search" },
  { keys: "Ctrl+Shift+↓", action: "Next Anomaly", category: "Search" },
  { keys: "Ctrl+Shift+↑", action: "Previous Anomaly", category: "Search" },
  { keys: "Escape", action: "Close Diff / Dashboard / Search Panel", category: "Search" },

  // Multi-File
  { keys: "Ctrl+Alt+T", action: "Toggle Tail Dashboard", category: "Multi-File" },
  { keys: "Ctrl+Shift+M", action: "Toggle Multi-Log View", category: "Multi-File" },
  { keys: "Ctrl+Alt+S", action: "Save Workspace", category: "Multi-File" },
  { keys: "Ctrl+Alt+O", action: "Open Workspace", category: "Multi-File" },
  { keys: "Ctrl+Shift+N", action: "New Window (new instance)", category: "Multi-File" },

  // Multi-Cursor
  { keys: "Ctrl+D", action: "Select next occurrence of word", category: "Multi-Cursor" },
  { keys: "Alt+Click", action: "Add cursor at click position", category: "Multi-Cursor" },
  { keys: "Ctrl+Alt+↑", action: "Add cursor above", category: "Multi-Cursor" },
  { keys: "Ctrl+Alt+↓", action: "Add cursor below", category: "Multi-Cursor" },
  { keys: "Alt+Shift+Drag", action: "Column/block select", category: "Multi-Cursor" },

  // Easter Eggs
  { keys: "Ctrl+Shift+F12", action: "Solitaire 🐜", category: "Easter Eggs" },
];

const categories = Array.from(new Set(shortcuts.map((s) => s.category)));

const categoryColors: Record<string, string> = {
  "Essential": "#2196F3",
  "Editing": "#4CAF50",
  "Navigation": "#FF9800",
  "Folding": "#9C27B0",
  "View Modes": "#00BCD4",
  "Search": "#F44336",
  "Multi-File": "#E91E63",
  "Multi-Cursor": "#CDDC39",
  "Easter Eggs": "#FF5722",
};

export default function ShortcutsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return shortcuts.filter((s) => {
      const matchSearch = !search || s.keys.toLowerCase().includes(search.toLowerCase()) || s.action.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !activeCategory || s.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  const groupedByCategory = useMemo(() => {
    const groups: Record<string, Shortcut[]> = {};
    for (const s of filtered) {
      if (!groups[s.category]) groups[s.category] = [];
      groups[s.category].push(s);
    }
    return groups;
  }, [filtered]);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Keyboard Shortcuts
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          {shortcuts.length} shortcuts across {categories.length} categories. Search or filter to find what you need.
        </Typography>

        {/* Search + Category Chips */}
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search shortcuts... (e.g. 'tail', 'Ctrl+Shift')"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: 2, maxWidth: 500 }}
          />
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Chip
              label="All"
              variant={activeCategory === null ? "filled" : "outlined"}
              color="primary"
              onClick={() => setActiveCategory(null)}
              size="small"
            />
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                variant={activeCategory === cat ? "filled" : "outlined"}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                size="small"
                sx={{ borderColor: categoryColors[cat], color: activeCategory === cat ? "#fff" : categoryColors[cat], bgcolor: activeCategory === cat ? categoryColors[cat] : "transparent" }}
              />
            ))}
          </Box>
        </Box>

        {/* Results count */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Showing {filtered.length} of {shortcuts.length} shortcuts
        </Typography>

        {/* Shortcut Cards by Category */}
        <Grid container spacing={3}>
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <Grid key={category} size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ p: 2, background: "rgba(255,255,255,0.03)", border: `1px solid ${categoryColors[category] || "#333"}33`, borderRadius: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: categoryColors[category], mb: 1.5 }}>
                  {category}
                </Typography>
                {items.map((s, i) => (
                  <Box key={`${s.keys}-${i}`} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.5, borderBottom: i < items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "monospace",
                        fontSize: 12,
                        color: "#00BCD4",
                        background: "rgba(0, 188, 212, 0.08)",
                        px: 1,
                        py: 0.25,
                        borderRadius: 1,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.keys}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 2, textAlign: "right" }}>
                      {s.action}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Links */}
        <Box sx={{ mt: 6, display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button variant="outlined" href="/command-explorer" sx={{ textTransform: "none" }}>
            Command Explorer (86 commands) →
          </Button>
          <Button variant="outlined" href="/docs" sx={{ textTransform: "none" }}>
            Full Documentation →
          </Button>
          <Button variant="outlined" href="/getting-started" sx={{ textTransform: "none" }}>
            Quick Start Guide →
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
