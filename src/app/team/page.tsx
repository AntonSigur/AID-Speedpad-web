"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    slug: "anton",
    name: "Anton",
    role: "CEO",
    emoji: "👑",
    color: "#FFD700",
    bio: "Founder of IT Ant ehf. Sets the vision, approves designs, and makes the final call. Built the company on one principle: no bloat, no compromise, fast execution.",
    skills: ["Strategy", "Branding", "Leadership"],
  },
  {
    slug: "pm",
    name: "PM Agent",
    role: "Project Manager",
    emoji: "📋",
    color: "#4CAF50",
    bio: "The central hub of the team. Plans sprints, grooms the backlog, delegates tasks, and keeps everyone aligned. Technically skilled in SQL, PowerShell, and documentation — not just a manager, but a hands-on organizer.",
    skills: ["Sprint Planning", "Risk Management", "Documentation"],
  },
  {
    slug: "po",
    name: "PO Agent",
    role: "Product Owner",
    emoji: "🎯",
    color: "#FF9800",
    bio: "Product visionary and strategist. Defines features, runs competitive analysis, and owns the roadmap. Has learned the codebase deeply — understands piece tables, memory-mapped I/O, and GDI rendering pipelines. Coined 'We are ants 🐜'.",
    skills: ["Feature Design", "Competitive Analysis", "UX Strategy"],
  },
  {
    slug: "sa",
    name: "SA Agent",
    role: "Solution Architect & Lead Dev",
    emoji: "🏗️",
    color: "#2196F3",
    bio: "Deep C++17 expert and architecture mastermind. Designed SpeedPad's layered architecture — from Win32 UI shell to memory-mapped I/O. Implements the hardest features, reviews code, and mentors Dev2. 20-30% of time goes to technical debt.",
    skills: ["C++17", "Win32 API", "Architecture", "Threading"],
  },
  {
    slug: "dev2",
    name: "Dev2 Agent",
    role: "Developer",
    emoji: "⚡",
    color: "#9C27B0",
    bio: "The fast learner. Implements assigned features on separate modules — owns the solitaire easter egg, file archaeology, bookmarks, and encoding conversion. Commits frequently with the [Dev2] prefix. Has documented 10 key lessons learned.",
    skills: ["C++17", "Feature Implementation", "Testing"],
  },
  {
    slug: "tester",
    name: "Tester Agent",
    role: "Quality Assurance",
    emoji: "🔍",
    color: "#F44336",
    bio: "Thinks in edge cases first. Tests 4GB file boundaries, UTF-16 encoding quirks, and 64MB view window limits. Traces data flows byte-by-byte. Has caught subtle bugs in dialog alignment, Base64 padding, and viewport geometry cascades.",
    skills: ["Regression Testing", "Edge Cases", "Performance Analysis"],
  },
  {
    slug: "webdev",
    name: "WebDev Agent",
    role: "Web Developer & Designer",
    emoji: "🌐",
    color: "#00BCD4",
    bio: "Builds and maintains the SpeedPad marketing website. Works with React, Next.js, TypeScript, and MUI. Takes product content from PO and turns it into a responsive, dark-themed web presence that reflects IT Ant's 'no bloat' culture.",
    skills: ["React", "Next.js", "TypeScript", "MUI"],
  },
];

export default function TeamPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 2, textAlign: "center" }}>
        <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, mb: 2 }}>
          We Are Ants 🐜
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", fontWeight: 400, mb: 2 }}>
          Small, efficient, relentless. The IT Ant ehf team behind SpeedPad.
        </Typography>
      </Container>

      {/* Company Story */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 3, textAlign: "center" }}>
            The IT Ant ehf Story
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            IT Ant ehf was founded on a simple belief: software should be fast, small, and uncompromising.
            Like ants — we carry loads many times our own weight. SpeedPad is a 828KB executable that opens
            files 5 million times its own size. No splash screens. No loading bars. No external dependencies.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            Our team is a collaboration of specialized agents, each with deep expertise in their domain.
            We communicate through clear protocols, build in sprints, and ship features that work.
            Every feature is tested at the boundaries — 4GB files, UTF-16 encoding, 64MB memory windows.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            We don&apos;t do bloat. We don&apos;t do compromise. We ship fast, we ship correct, and we
            keep SpeedPad at 828KB. That&apos;s the ant way.
          </Typography>
        </Container>
      </Box>

      {/* Team Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 4, textAlign: "center" }}>
          Meet the Team
        </Typography>
        <Grid container spacing={3}>
          {teamMembers.map((member) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
              <Link href={`/team/${member.slug}`} style={{ textDecoration: "none" }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  "&:hover": { borderColor: member.color, bgcolor: "rgba(255,255,255,0.05)", cursor: "pointer" },
                  transition: "all 0.2s",
                }}
              >
                <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", height: "100%" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: `2px solid ${member.color}`,
                        flexShrink: 0,
                      }}
                    >
                      <Image src={`/avatars/${member.slug}.png`} alt={member.name} width={64} height={64} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: member.color, fontWeight: 600 }}>
                        {member.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                    {member.bio}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {member.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: "0.7rem", height: 24 }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Culture */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, mb: 4 }}>
            Our Principles
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3 }}>
            {[
              { title: "Speed First", desc: "If file open takes > 5ms or scrolling drops a frame — we fix it before shipping." },
              { title: "Zero Bloat", desc: "828KB total. No frameworks, no runtimes, no external dependencies." },
              { title: "One File, One Window", desc: "No tabs. No split views. New instance for multi-file. Keep it focused." },
              { title: "Opt-in, Never Forced", desc: "Lenses and features activated by the user. No popups, no dialogs, no interruptions." },
            ].map((p) => (
              <Box key={p.title} sx={{ p: 3, borderRadius: 2, border: "1px solid rgba(255,255,255,0.06)", textAlign: "left" }}>
                <Typography variant="h6" color="primary.light" sx={{ mb: 1 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
