"use client";
import { useState, useEffect } from "react";
import { Box, Typography, Button, Paper, Fade } from "@mui/material";
import Image from "next/image";

const COOKIE_KEY = "speedpad_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${COOKIE_KEY}=`));
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    document.cookie = `${COOKIE_KEY}=accepted; path=/; max-age=${365 * 24 * 3600}; SameSite=Lax`;
    setVisible(false);
  };

  const decline = () => {
    window.location.href = "about:blank";
  };

  if (!visible) return null;

  return (
    <Fade in={visible}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Paper
          elevation={12}
          sx={{
            maxWidth: 520,
            mx: 2,
            p: 4,
            bgcolor: "#162D50",
            border: "1px solid rgba(33,150,243,0.3)",
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Image
            src="/itant-logo.svg"
            alt="IT Ant ehf"
            width={64}
            height={64}
            style={{ filter: "brightness(0) invert(1)", marginBottom: 16 }}
          />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Welcome to SpeedPad
          </Typography>
          <Typography variant="body2" sx={{ color: "#94A3B8", mb: 2, lineHeight: 1.7 }}>
            This entire website was designed, built, and maintained by{" "}
            <Box component="span" sx={{ color: "#64B5F6", fontWeight: 600 }}>trained AI agents</Box>{" "}
            working as a team — product owner, developer, tester, and web developer — all coordinated
            by a human CEO.
          </Typography>
          <Typography variant="body2" sx={{ color: "#94A3B8", mb: 3, lineHeight: 1.7 }}>
            By continuing, you accept cookies for basic site preferences. No tracking, no analytics,
            no third-party cookies — just one small cookie to remember this choice. 🐜
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={accept}
              sx={{
                px: 4,
                fontWeight: 700,
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Accept &amp; Enter
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={decline}
              sx={{
                px: 3,
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 2,
                color: "#94A3B8",
                borderColor: "rgba(255,255,255,0.15)",
                "&:hover": { borderColor: "rgba(255,255,255,0.3)", bgcolor: "rgba(255,255,255,0.03)" },
              }}
            >
              Decline
            </Button>
          </Box>
        </Paper>
      </Box>
    </Fade>
  );
}
