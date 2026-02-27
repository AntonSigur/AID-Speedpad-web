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
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
            <Image src="/itant-logo.svg" alt="IT Ant ehf" width={44} height={44} style={{ filter: "brightness(0) invert(1)" }} />
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
      {/* All-pages drawer (desktop + mobile) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: "background.default", width: 280 } }}
      >
        <Box sx={{ pt: 2, pb: 1, px: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Image src="/itant-logo.svg" alt="IT Ant ehf" width={32} height={32} style={{ filter: "brightness(0) invert(1)" }} />
          <Typography variant="h6" fontWeight={700} color="primary.light">SpeedPad</Typography>
        </Box>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
        <List dense>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 700 }} />
            </ListItemButton>
          </ListItem>
          {allPages.map((section) => (
            <Box key={section.group}>
              <ListItem disablePadding sx={{ mt: 1 }}>
                <ListItemButton disabled sx={{ py: 0.25 }}>
                  <ListItemText
                    primary={section.group}
                    primaryTypographyProps={{ variant: "caption", color: "#64B5F6", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}
                  />
                </ListItemButton>
              </ListItem>
              {section.items.map((item) => (
                <ListItem key={item.href} disablePadding>
                  <ListItemButton component={Link} href={item.href} onClick={() => setDrawerOpen(false)} sx={{ pl: 3, py: 0.5 }}>
                    <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: "0.9rem" }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  );
}
