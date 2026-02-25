"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
} from "@mui/material";
import {
  Download as DownloadIcon,
  PhotoLibrary as GalleryIcon,
} from "@mui/icons-material";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CURRENT_VERSION, EXE_SIZE } from "@/lib/product-config";

const screenshots = [
  {
    src: "/screenshots/speedpad-app-screenshot.png",
    alt: "SpeedPad viewing a production log file with timestamps, severity levels, and status bar information",
    title: "Log File Viewing",
    description: `SpeedPad ${CURRENT_VERSION} displaying a production server log with 49 lines. The status bar shows line count, file size (3.8 KB), encoding (UTF-8), and line ending format (CRLF).`,
    width: 1010,
    height: 761,
  },
  {
    src: "/screenshots/speedpad-multi-file.png",
    alt: "SpeedPad with multiple log files open in tabs",
    title: "Multi-File Tabs",
    description:
      "Two log files open simultaneously — an application server log and a payment service log. Switch between files using the tab bar at the top.",
    width: 1010,
    height: 761,
  },
];

export default function ScreenshotsPage() {
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
            icon={<GalleryIcon />}
            label={`${CURRENT_VERSION} Screenshots`}
            sx={{ mb: 2, bgcolor: "#1a3a5c", color: "#00BCD4" }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            SpeedPad in Action
          </Typography>
          <Typography variant="h6" sx={{ color: "#94A3B8", mb: 3 }}>
            Real screenshots from SpeedPad {CURRENT_VERSION} ({EXE_SIZE}).
            Every image is captured directly from the application.
          </Typography>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            href="/download"
            sx={{ bgcolor: "#2196F3" }}
          >
            Download SpeedPad
          </Button>
        </Container>
      </Box>

      {/* Screenshots Gallery */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {screenshots.map((s) => (
            <Grid key={s.title} size={{ xs: 12 }}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: "#162D50",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {s.description}
                </Typography>
                <Paper
                  elevation={4}
                  sx={{
                    display: "inline-block",
                    borderRadius: 1,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    maxWidth: "100%",
                  }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={s.width}
                    height={s.height}
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Paper>
              </Paper>
            </Grid>
          ))}

          {/* Tail Mode GIF */}
          <Grid size={{ xs: 12 }}>
            <Paper
              sx={{
                p: 3,
                bgcolor: "#162D50",
                border: "1px solid rgba(0, 188, 212, 0.2)",
                borderRadius: 2,
              }}
            >
              <Chip
                label="Animated"
                color="info"
                size="small"
                sx={{ mb: 1 }}
              />
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Live Tail Mode
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                SpeedPad follows a growing log file in real-time (Ctrl+Shift+T).
                New lines appear as they are written. The status bar shows
                &quot;TAIL ●&quot; indicator and live line rate. This animation
                shows 8 frames over ~10 seconds as new log entries arrive.
              </Typography>
              <Paper
                elevation={4}
                sx={{
                  display: "inline-block",
                  borderRadius: 1,
                  overflow: "hidden",
                  border: "1px solid rgba(0, 188, 212, 0.15)",
                  maxWidth: "100%",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/speedpad-tail-mode.gif"
                  alt="SpeedPad tail mode — new log entries appearing in real-time as the file grows"
                  width={800}
                  height={600}
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Ready to try it?
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {EXE_SIZE} download. No installer. No dependencies.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            href="/download"
            sx={{ px: 4, bgcolor: "#2196F3" }}
          >
            Download SpeedPad
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
