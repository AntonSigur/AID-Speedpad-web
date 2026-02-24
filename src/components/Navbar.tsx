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
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import Link from "next/link";

const primaryNav = [
  { label: "Features", href: "/features" },
  { label: "Download", href: "/download" },
  { label: "Quick Start", href: "/getting-started" },
  { label: "Docs", href: "/docs" },
  { label: "How It Works", href: "/how-it-works" },
];

const moreNav = [
  { label: "Multi-Log", href: "/multilog" },
  { label: "Command Explorer", href: "/command-explorer" },
  { label: "Incident Playbook", href: "/incident-playbook" },
  { label: "Release Center", href: "/release-center" },
  { label: "AV FAQ", href: "/av-faq" },
  { label: "Team", href: "/team" },
  { label: "Story", href: "/story" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [moreAnchor, setMoreAnchor] = useState<null | HTMLElement>(null);

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
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
            {primaryNav.map((item) => (
              <Button key={item.label} color="inherit" size="small" href={item.href} component={Link}>
                {item.label}
              </Button>
            ))}
            <Button
              color="inherit"
              size="small"
              endIcon={<ExpandMoreIcon />}
              onClick={(e) => setMoreAnchor(e.currentTarget)}
              aria-haspopup="true"
              aria-expanded={Boolean(moreAnchor)}
            >
              More
            </Button>
            <Menu
              anchorEl={moreAnchor}
              open={Boolean(moreAnchor)}
              onClose={() => setMoreAnchor(null)}
              PaperProps={{ sx: { bgcolor: "#162D50", minWidth: 200 } }}
            >
              {moreNav.map((item) => (
                <MenuItem
                  key={item.label}
                  component={Link}
                  href={item.href}
                  onClick={() => setMoreAnchor(null)}
                  sx={{ color: "#E2E8F0", "&:hover": { bgcolor: "#1a3a5c" } }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
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
        PaperProps={{ sx: { bgcolor: "background.default", width: 260 } }}
      >
        <Box sx={{ pt: 2, pb: 1, px: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Image src="/itant-logo.svg" alt="IT Ant ehf" width={32} height={32} style={{ filter: "brightness(0) invert(1)" }} />
          <Typography variant="h6" fontWeight={700} color="primary.light">SpeedPad</Typography>
        </Box>
        <List>
          {primaryNav.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} href={item.href} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.08)" }} />
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemText primary="More" primaryTypographyProps={{ variant: "caption", color: "text.secondary" }} />
            </ListItemButton>
          </ListItem>
          {moreNav.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} href={item.href} onClick={() => setDrawerOpen(false)} sx={{ pl: 3 }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
