"use client";
import { Box, Container, Typography, Grid, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Image src="/itant-logo.svg" alt="IT Ant ehf" width={36} height={36} style={{ filter: "brightness(0) invert(1)" }} />
              <Typography variant="h6" fontWeight={700} color="primary.light">SpeedPad</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280 }}>
              A blazing-fast 860KB Windows text editor. Opens 100GB+ files instantly. Built by IT Ant ehf.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Product</Typography>
            {[
              { label: "Features", href: "/features" },
              { label: "Multi-Log", href: "/multilog" },
              { label: "Lens Plugins", href: "/lenses" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "Commands", href: "/command-explorer" },
              { label: "Playbook", href: "/incident-playbook" },
              { label: "Releases", href: "/release-center" },
              { label: "Changelog", href: "/changelog" },
              { label: "Screenshots", href: "/screenshots" },
              { label: "Quick Start", href: "/getting-started" },
              { label: "Download", href: "/download" },
              { label: "Documentation", href: "/docs" },
              { label: "AV FAQ", href: "/av-faq" },
              { label: "Shortcuts", href: "/shortcuts" },
              { label: "Contributing", href: "/contributing" },
            ].map((l) => (
              <MuiLink key={l.label} component={Link} href={l.href} color="text.secondary" variant="body2" underline="hover" display="block" sx={{ mb: 0.5 }}>
                {l.label}
              </MuiLink>
            ))}
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Company</Typography>
            {[
              { label: "Team", href: "/team" },
              { label: "Story", href: "/story" },
            ].map((l) => (
              <MuiLink key={l.label} component={Link} href={l.href} color="text.secondary" variant="body2" underline="hover" display="block" sx={{ mb: 0.5 }}>
                {l.label}
              </MuiLink>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Quick Stats</Typography>
            <Typography variant="body2" color="text.secondary">v2.52.0 · 860KB · 157+ features · 240 tests</Typography>
            <Typography variant="body2" color="text.secondary">30 unique features no other editor has</Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} IT Ant ehf — We are ants 🐜
          </Typography>
          <Typography variant="body2" color="text.secondary">
            itant.is
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
