"use client";

import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyDownloadCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1200,
        transition: "opacity 0.3s",
        opacity: visible ? 1 : 0,
      }}
    >
      <Button
        variant="contained"
        size="small"
        startIcon={<DownloadIcon />}
        component={Link}
        href="/download"
        sx={{
          bgcolor: "#2196F3",
          fontWeight: 700,
          textTransform: "none",
          px: 2.5,
          py: 1,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(33,150,243,0.4)",
          "&:hover": { bgcolor: "#1976D2" },
        }}
      >
        Download SpeedPad
      </Button>
    </Box>
  );
}
