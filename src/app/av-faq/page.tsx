"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Alert,
  Button,
} from "@mui/material";
import {
  Security as SecurityIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const factors = [
  { factor: "Code signing", status: "Not currently signed", note: "Primary trigger — planned EV certificate" },
  { factor: "File prevalence", status: "Low", note: "Niche tool = fewer users in ML training data" },
  { factor: "PE metadata", status: "✅ Present since v2.38.0", note: "CompanyName, ProductName, FileVersion" },
  { factor: "Binary size", status: "~956 KB", note: "Small EXEs score lower in ML models" },
  { factor: "LTCG optimizations", status: "Unusual patterns", note: "Link-time code generation creates atypical byte sequences" },
];

const steps = [
  {
    title: "Allow in Windows Defender",
    desc: "Settings → Virus & threat protection → Exclusions → Add an exclusion → File → Select SpeedPad.exe",
  },
  {
    title: "Submit for review",
    desc: "Upload to Microsoft Security Intelligence (wdsi/filesubmission) as a false positive. Microsoft will review and update definitions.",
  },
  {
    title: "Verify on VirusTotal",
    desc: "Upload SpeedPad.exe to virustotal.com — most engines will show clean. Only ML-based heuristics may flag it.",
  },
];

export default function AVFaqPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      <Container maxWidth="md" sx={{ pt: { xs: 6, md: 10 }, pb: 4, textAlign: "center" }}>
        <SecurityIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
        <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
          Antivirus False Positives
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
          Some antivirus products may flag SpeedPad.exe using ML-based heuristic detection.
          This is a <strong>false positive</strong> — SpeedPad contains no malicious code.
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ pb: 4 }}>
        <Alert severity="info" variant="outlined" icon={<WarningIcon />} sx={{ bgcolor: "rgba(33,150,243,0.05)" }}>
          Known false positive: <strong>Trojan:Win32/Wacatac.C!ml</strong> — this is a Windows Defender
          ML heuristic detection, not a signature-based match.
        </Alert>
      </Container>

      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 3 }}>
            Why It Happens
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
            Machine-learning AV engines score executables on several factors. SpeedPad triggers
            heuristics because it is unsigned, niche (low user count in training data), and
            uses aggressive compiler optimizations that produce unusual byte patterns.
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Factor</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>SpeedPad Status</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Impact</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {factors.map((f) => (
                  <TableRow key={f.factor} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                    <TableCell sx={{ fontWeight: 500 }}>{f.factor}</TableCell>
                    <TableCell>{f.status}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{f.note}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 4 }}>
          What You Can Do
        </Typography>
        {steps.map((s, i) => (
          <Card key={s.title} elevation={0} sx={{ mb: 2, bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <CardContent sx={{ display: "flex", gap: 2, alignItems: "flex-start", p: 3 }}>
              <Chip label={i + 1} size="small" color="primary" sx={{ minWidth: 32, fontWeight: 700 }} />
              <Box>
                <Typography variant="h6" sx={{ mb: 0.5 }}>{s.title}</Typography>
                <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Container>

      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" }, mb: 3 }}>
            Build Transparency
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              "PE VERSIONINFO resource with CompanyName, ProductName, FileVersion, LegalCopyright (since v2.38.0)",
              "Build pipeline: CMake + MSVC + LTCG — fully reproducible, no external downloads",
              "Zero external dependencies — no DLLs, no runtime libraries, pure Win32 API",
              "210 automated test suites verify functionality and detect regressions",
            ].map((text) => (
              <Box key={text} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                <CheckIcon color="success" />
                <Typography variant="body1" color="text.secondary">{text}</Typography>
              </Box>
            ))}
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 3, fontStyle: "italic" }}>
            Future improvement: Authenticode code signing with an EV certificate will eliminate ML-based false positives entirely.
          </Typography>
        </Container>
      </Box>

      {/* Convinced? Download */}
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Convinced it&apos;s safe?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            SpeedPad is 956KB with zero dependencies. No telemetry, no network calls, no hidden behavior.
          </Typography>
          <Button variant="contained" size="large" component={Link} href="/download" sx={{ px: 4, py: 1.5, fontWeight: 700, textTransform: "none" }}>
            Download SpeedPad
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
