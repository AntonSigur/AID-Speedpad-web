"use client";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Download", href: "/download" },
  { label: "Docs", href: "/docs" },
  { label: "Team", href: "/team" },
  { label: "Story", href: "/story" },
];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <Image src="/favicon.svg" alt="IT Ant ehf" width={44} height={44} />
          <Typography variant="h6" fontWeight={700} color="primary.light">
            SpeedPad
          </Typography>
        </Link>
        <Box sx={{ display: "flex", gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item.label} color="inherit" size="small" href={item.href} component={Link}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
