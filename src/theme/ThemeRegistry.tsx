"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import EmotionCacheProvider from "./EmotionCacheProvider";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}
