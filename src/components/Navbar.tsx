"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";

const topNav = [
  { label: "Features", href: "/features" },
  { label: "Download", href: "/download" },
  { label: "SpeedHexPad", href: "/hex-editor" },
  { label: "Quick Start", href: "/getting-started" },
  { label: "Docs", href: "/docs" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Team", href: "/team" },
];

const allPages = [
  {
    group: "Product",
    items: [
      { label: "Features", href: "/features" },
      { label: "SpeedHexPad", href: "/hex-editor" },
      { label: "Screenshots", href: "/screenshots" },
      { label: "Benchmarks", href: "/benchmarks" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    group: "Get Started",
    items: [
      { label: "Download", href: "/download" },
      { label: "Quick Start", href: "/getting-started" },
      { label: "Documentation", href: "/docs" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    group: "Reference",
    items: [
      { label: "Command Explorer", href: "/command-explorer" },
      { label: "Keyboard Shortcuts", href: "/shortcuts" },
      { label: "Incident Playbook", href: "/incident-playbook" },
      { label: "Workflow Packs", href: "/workflows" },
      { label: "Lens Plugins", href: "/lenses" },
      { label: "Multi-Log", href: "/multilog" },
    ],
  },
  {
    group: "Resources",
    items: [
      { label: "Use Cases", href: "/use-cases" },
      { label: "Release Center", href: "/release-center" },
      { label: "Changelog", href: "/changelog" },
      { label: "AV FAQ", href: "/av-faq" },
    ],
  },
  {
    group: "About",
    items: [
      { label: "Team", href: "/team" },
      { label: "Our Story", href: "/story" },
      { label: "Contributing", href: "/contributing" },
    ],
  },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        component="nav"
        aria-label="Main navigation"
        sx={{ backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            <Image src="/itant-logo.svg" alt="IT Ant ehf" width={56} height={56} style={{ filter: "brightness(0) invert(1)" }} />
            <Typography variant="h6" fontWeight={700} color="primary.light">
              SpeedPad
            </Typography>
          </Link>
          {/* Desktop nav — 7 items + hamburger */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
            {topNav.map((item) => (
              <Button key={item.label} color="inherit" size="small" href={item.href} component={Link}>
                {item.label}
              </Button>
            ))}
            <IconButton
              color="inherit"
              aria-label="All pages"
              onClick={() => setDrawerOpen(true)}
              sx={{ ml: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Mobile hamburger */}
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* All-pages panel — clean grid layout */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: "#0B1929",
            width: { xs: "100vw", sm: 420 },
            borderLeft: "1px solid rgba(33,150,243,0.12)",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Image src="/itant-logo.svg" alt="IT Ant ehf" width={36} height={36} style={{ filter: "brightness(0) invert(1)" }} />
              <Typography variant="h6" fontWeight={700} color="primary.light">SpeedPad</Typography>
            </Box>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#64748B" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Home link */}
          <Box
            component={Link}
            href="/"
            onClick={() => setDrawerOpen(false)}
            sx={{
              display: "block",
              p: 1.5,
              mb: 2,
              borderRadius: 2,
              bgcolor: "rgba(33,150,243,0.08)",
              border: "1px solid rgba(33,150,243,0.15)",
              textDecoration: "none",
              color: "#E2E8F0",
              fontWeight: 700,
              fontSize: "0.95rem",
              "&:hover": { bgcolor: "rgba(33,150,243,0.15)" },
            }}
          >
            🏠 Home
          </Box>

          {/* Section groups */}
          {allPages.map((section) => (
            <Box key={section.group} sx={{ mb: 2.5 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#475569",
                  fontWeight: 700,
                  fontSize: "0.65rem",
                  letterSpacing: 1.5,
                  display: "block",
                  mb: 0.75,
                }}
              >
                {section.group}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {section.items.map((item) => (
                  <Chip
                    key={item.href}
                    label={item.label}
                    component={Link}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    clickable
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.04)",
                      color: "#CBD5E1",
                      border: "1px solid rgba(255,255,255,0.06)",
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      height: 32,
                      "&:hover": {
                        bgcolor: "rgba(33,150,243,0.12)",
                        borderColor: "rgba(33,150,243,0.3)",
                        color: "#93C5FD",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
