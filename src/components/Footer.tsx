"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Image src="/itant-logo.svg" alt="IT Ant ehf" width={28} height={28} style={{ filter: "invert(1) brightness(2)" }} />
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} IT Ant ehf — We are ants 🐜
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            itant.is
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
