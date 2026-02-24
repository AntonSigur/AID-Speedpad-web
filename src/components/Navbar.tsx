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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Multi-Log", href: "/multilog" },
  { label: "Download", href: "/download" },
  { label: "Docs", href: "/docs" },
  { label: "AV FAQ", href: "/av-faq" },
  { label: "Team", href: "/team" },
  { label: "Story", href: "/story" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{ backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            <Image src="/itant-logo.svg" alt="IT Ant ehf" width={44} height={44} style={{ filter: "brightness(0) invert(1)" }} />
            <Typography variant="h6" fontWeight={700} color="primary.light">
              SpeedPad
            </Typography>
          </Link>
          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" size="small" href={item.href} component={Link}>
                {item.label}
              </Button>
            ))}
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
      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: "background.default", width: 240 } }}
      >
        <Box sx={{ pt: 2, pb: 1, px: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Image src="/itant-logo.svg" alt="IT Ant ehf" width={32} height={32} style={{ filter: "brightness(0) invert(1)" }} />
          <Typography variant="h6" fontWeight={700} color="primary.light">SpeedPad</Typography>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} href={item.href} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
