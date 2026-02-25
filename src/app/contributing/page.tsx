"use client";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prerequisites = [
  { label: "Visual Studio 2022+", detail: "Enterprise or Community with C++ Desktop workload" },
  { label: "CMake 3.20+", detail: "Build system generator" },
  { label: "Windows 10/11 x64", detail: "SpeedPad is Win32-native" },
  { label: "Git", detail: "With SSH key access to the repository" },
];

const projectStructure = [
  { path: "src/app.h", desc: "Central App class — all state + declarations" },
  { path: "src/app.cpp", desc: "WndProc, OnPaint, initialization" },
  { path: "src/app_*.cpp", desc: "Feature modules (one per feature area)" },
  { path: "src/document.h", desc: "Per-document state (MappedFile, PieceTable)" },
  { path: "src/piece_table.h/cpp", desc: "Edit data structure" },
  { path: "src/mapped_file.h/cpp", desc: "Memory-mapped file I/O" },
  { path: "src/renderer.h/cpp", desc: "DirectWrite text rendering" },
  { path: "src/search_pool.h/cpp", desc: "Multi-threaded search" },
  { path: "src/multi_log.h/cpp", desc: "Multi-log unified view" },
  { path: "tests/test_*.cpp", desc: "Test suites (230+ total)" },
  { path: "docs/", desc: "Architecture, features, shortcuts, changelog" },
];

const codeStyleRules = [
  { rule: "C++17", example: "Win32 API, no frameworks, no STL on hot paths" },
  { rule: "Member variables", example: "m_camelCase (m_firstVisibleLine)" },
  { rule: "Functions", example: "PascalCase (EnsureLinesForViewport())" },
  { rule: "Constants", example: "kCamelCase (kMaxCached)" },
  { rule: "Comments", example: "Only where logic needs clarification" },
  { rule: "Line length", example: "~120 chars soft limit" },
];

const addFeatureSteps = [
  "Create a feature file: src/app_yourfeature.cpp",
  "Add declarations to app.h (inside the App class)",
  "Add message handlers in app.cpp if needed",
  "Add command in resource.h (pick ID from your range)",
  "Wire into command palette and/or menu",
  "Write tests in tests/test_yourfeature.cpp",
  "Update SHORTCUTS.md, FEATURES.md, CHANGELOG.md",
];

const releaseSteps = [
  "Update version in app.cpp (About dialog)",
  "Update CHANGELOG.md with new version section",
  "Update README.md EXE size if changed",
  "Build Release, verify all tests pass",
  "Create releases/vX.Y.Z/ with EXE, DLLs, RELEASE_NOTES.md",
  "Create zip archive",
  "Tag: git tag vX.Y.Z",
  "Push to all remotes with tag",
];

export default function ContributingPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: 900, mx: "auto", px: 3, py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Contributing to SpeedPad
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Set up your dev environment, understand the codebase, and ship features.
        </Typography>

        {/* Prerequisites */}
        <Paper elevation={2} sx={{ p: 3, mb: 4, background: "rgba(33, 150, 243, 0.06)", border: "1px solid rgba(33, 150, 243, 0.15)" }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Prerequisites
          </Typography>
          <Grid container spacing={2}>
            {prerequisites.map((p) => (
              <Grid key={p.label} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <Chip label={p.label} size="small" color="primary" variant="outlined" />
                  <Typography variant="body2" color="text.secondary">
                    {p.detail}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Build Setup */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Build Setup
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 4,
            fontFamily: "monospace",
            fontSize: 13,
            background: "#0a1628",
            border: "1px solid rgba(0, 188, 212, 0.2)",
            borderRadius: 2,
            whiteSpace: "pre-wrap",
            color: "#94A3B8",
          }}
        >
{`# Clone the repository
git clone git@github.com:AntonSigur/AID-SpeedPad.git
cd AID-SpeedPad

# Generate build files (x64 Release by default)
cmake -B build

# Build the editor
cmake --build build --config Release --target SpeedPad

# Run tests
cd build
ctest -C Release --output-on-failure`}
        </Paper>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          The build produces <code>build/Release/SpeedPad.exe</code> (approximately 860 KB).
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Project Structure */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Project Structure
        </Typography>
        <Paper elevation={0} sx={{ p: 2, mb: 4, background: "#0a1628", border: "1px solid rgba(0, 188, 212, 0.2)", borderRadius: 2 }}>
          {projectStructure.map((f) => (
            <Box key={f.path} sx={{ display: "flex", gap: 2, py: 0.5 }}>
              <Typography sx={{ fontFamily: "monospace", fontSize: 13, color: "#00BCD4", minWidth: 220, flexShrink: 0 }}>
                {f.path}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {f.desc}
              </Typography>
            </Box>
          ))}
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Code Style */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Code Style
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {codeStyleRules.map((r) => (
            <Grid key={r.rule} size={{ xs: 12, sm: 6 }}>
              <Paper elevation={0} sx={{ p: 2, background: "rgba(0, 188, 212, 0.05)", border: "1px solid rgba(0, 188, 212, 0.1)", borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#00BCD4" }}>
                  {r.rule}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {r.example}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Architecture */}
        <Paper elevation={2} sx={{ p: 3, mb: 4, background: "rgba(33, 150, 243, 0.06)", border: "1px solid rgba(33, 150, 243, 0.15)" }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            App Architecture
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            SpeedPad uses a single <code>App</code> class that owns all state. Methods are split across <code>app_*.cpp</code> files by feature area.
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            Key patterns:
          </Typography>
          <Box component="ul" sx={{ mt: 1, pl: 3, color: "text.secondary" }}>
            <li>
              <Typography variant="body2">Background threads communicate via <code>PostMessage</code> — never touch UI state directly</Typography>
            </li>
            <li>
              <Typography variant="body2">Memory-mapped files avoid copying data into RAM</Typography>
            </li>
            <li>
              <Typography variant="body2">Piece table for O(1) insert/delete without rewriting the file</Typography>
            </li>
          </Box>
          <Button variant="text" href="/how-it-works" sx={{ mt: 1, textTransform: "none" }}>
            Read the full architecture deep-dive →
          </Button>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Adding a Feature */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Adding a Feature
        </Typography>
        <Box component="ol" sx={{ pl: 3, mb: 4 }}>
          {addFeatureSteps.map((step, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <Typography variant="body2" color="text.secondary">
                {step}
              </Typography>
            </li>
          ))}
        </Box>

        {/* Writing Tests */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Writing Tests
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Tests use a minimal framework (<code>test_framework.h</code>). Each test file is a standalone executable with its own <code>main()</code>.
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 4,
            fontFamily: "monospace",
            fontSize: 13,
            background: "#0a1628",
            border: "1px solid rgba(0, 188, 212, 0.2)",
            borderRadius: 2,
            whiteSpace: "pre-wrap",
            color: "#94A3B8",
          }}
        >
{`#include "test_framework.h"

void test_my_feature() {
    ASSERT_TRUE(condition);
    ASSERT_EQ(actual, expected);
    ASSERT_NEAR(a, b, epsilon);
}

int main() {
    printf("=== My Feature Tests ===\\n");
    RUN_TEST(test_my_feature);
    TEST_SUMMARY();
}`}
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Release Process */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Release Process
        </Typography>
        <Box component="ol" sx={{ pl: 3, mb: 4 }}>
          {releaseSteps.map((step, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <Typography variant="body2" color="text.secondary">
                {step}
              </Typography>
            </li>
          ))}
        </Box>

        {/* Commit Convention */}
        <Paper elevation={0} sx={{ p: 3, mb: 4, background: "rgba(0, 188, 212, 0.05)", border: "1px solid rgba(0, 188, 212, 0.1)", borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Commit Messages
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Format: <code>[Author] Brief description</code>
          </Typography>
          <Paper elevation={0} sx={{ p: 1.5, fontFamily: "monospace", fontSize: 13, background: "#0a1628", borderRadius: 1, color: "#94A3B8" }}>
            [Dev2] F39 AC12: Workspace persistence for multi-log state
          </Paper>
        </Paper>

        {/* Links */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button variant="outlined" href="/how-it-works" sx={{ textTransform: "none" }}>
            Architecture Deep Dive
          </Button>
          <Button variant="outlined" href="/command-explorer" sx={{ textTransform: "none" }}>
            Command Explorer
          </Button>
          <Button variant="outlined" href="/docs" sx={{ textTransform: "none" }}>
            Documentation
          </Button>
          <Button variant="outlined" href="/getting-started" sx={{ textTransform: "none" }}>
            Quick Start
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
