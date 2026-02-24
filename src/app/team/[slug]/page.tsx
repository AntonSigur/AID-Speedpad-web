"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  LinearProgress,
  Divider,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  color: string;
  title: string;
  fullBio: string;
  skills: { name: string; level: number }[];
  tools: string[];
  responsibilities: string[];
  achievements: string[];
  philosophy: string;
}

const teamData: TeamMember[] = [
  {
    slug: "anton",
    name: "Anton",
    role: "CEO",
    color: "#FFD700",
    title: "Founder & Chief Executive Officer",
    fullBio: "Anton founded IT Ant ehf on a single uncompromising principle: software should be fast, small, and honest. No bloat, no hidden subscriptions, no telemetry. He drives every product decision through this lens \u2014 if a feature adds size without proportional value, it doesn\u0027t ship. He personally reviews every design, every marketing claim, and every release before it goes live.",
    skills: [
      { name: "Strategic Vision", level: 95 },
      { name: "Product Decisions", level: 90 },
      { name: "Branding & Design", level: 85 },
      { name: "Team Leadership", level: 90 },
    ],
    tools: ["Strategic Planning", "Design Review", "Brand Management"],
    responsibilities: [
      "Set overall product direction and company vision",
      "Approve all design decisions and marketing content",
      "Review release candidates before shipping",
      "Define branding guidelines and company culture",
    ],
    achievements: [
      "Founded IT Ant ehf and assembled the team",
      "Defined the \u0027no bloat\u0027 philosophy that keeps SpeedPad under 1MB",
      "Established the multi-agent collaboration workflow",
    ],
    philosophy: "If it\u0027s not fast enough to feel invisible, it\u0027s not done. Every kilobyte matters.",
  },
  {
    slug: "pm",
    name: "PM Agent",
    role: "Project Manager",
    color: "#4CAF50",
    title: "Senior Project Manager",
    fullBio: "The PM Agent is the operational backbone of IT Ant ehf. Every sprint plan, every task delegation, every status report flows through PM. PM has deep technical knowledge of Win32 API architecture, piece table data structures, and memory-mapped I/O concepts. This technical fluency means PM can evaluate task complexity, spot architectural risks early, and have meaningful conversations with SA and Dev2 about implementation approaches.",
    skills: [
      { name: "Sprint Planning", level: 95 },
      { name: "Risk Management", level: 88 },
      { name: "Technical Coordination", level: 85 },
      { name: "Documentation", level: 92 },
    ],
    tools: ["SQL/SQLite", "PowerShell", "Markdown", "Git"],
    responsibilities: [
      "Plan and execute sprint cycles with backlog grooming",
      "Coordinate SA, Dev2, Tester, and WebDev via inbox protocol",
      "Maintain project-status-report.txt with full sprint tracking",
      "Run Delivra-check security gate before every work cycle",
    ],
    achievements: [
      "Coordinated 37+ sprints from planning to delivery",
      "Maintained zero merge conflicts through strict file ownership",
      "Learned Win32 API architecture to evaluate task complexity",
    ],
    philosophy: "A team without coordination is just a group of individuals. Clear communication, no ambiguity, no surprises.",
  },
  {
    slug: "po",
    name: "PO Agent",
    role: "Product Owner",
    color: "#FF9800",
    title: "Product Owner & Strategist",
    fullBio: "The PO Agent doesn\u0027t just write user stories \u2014 they live and breathe the product. PO has studied SpeedPad\u0027s source code deeply enough to understand piece table operations, memory-mapped I/O chunking strategies, and GDI rendering pipelines. PO runs competitive analysis against Notepad++, VS Code, HxD, and other editors, identifying gaps where SpeedPad can uniquely excel.",
    skills: [
      { name: "Feature Design", level: 95 },
      { name: "Competitive Analysis", level: 92 },
      { name: "UX Strategy", level: 88 },
      { name: "Brand Identity", level: 90 },
    ],
    tools: ["Feature Specs", "Competitive Analysis", "Source Code Review"],
    responsibilities: [
      "Define features with detailed specs and acceptance criteria",
      "Run competitive analysis against Notepad++, VS Code, HxD",
      "Own and prioritize the product roadmap",
      "Drive brand identity and product positioning",
    ],
    achievements: [
      "Created the \u002722 Things Only SpeedPad Can Do\u0027 list",
      "Defined 153+ features for the SpeedPad v2 roadmap",
      "Coined \u0027We are ants\u0027 team motto and brand identity",
    ],
    philosophy: "Every feature should make someone\u0027s day better. If we can\u0027t explain why in one sentence, we haven\u0027t thought hard enough.",
  },
  {
    slug: "sa",
    name: "SA Agent",
    role: "Solution Architect & Lead Dev",
    color: "#2196F3",
    title: "Solution Architect & Lead Developer",
    fullBio: "SA is the engineering brain of SpeedPad. Every architectural decision \u2014 from piece tables over gap buffers, to memory-mapped I/O chunking, to the Win32 message pump \u2014 was designed by SA. With deep expertise in C++17, Win32 API, and multi-threaded systems, SA implements the most complex features: tail mode, parallel search, and session management. SA dedicates 20-30% of time to technical debt.",
    skills: [
      { name: "C++17", level: 98 },
      { name: "Win32 API", level: 96 },
      { name: "Architecture Design", level: 95 },
      { name: "Multi-Threading", level: 92 },
      { name: "Performance Optimization", level: 94 },
    ],
    tools: ["C++17", "Win32 API", "CMake", "CTest", "Git"],
    responsibilities: [
      "Design and maintain SpeedPad\u0027s layered architecture",
      "Implement complex features (tail mode, parallel search)",
      "20-30% time on technical debt and refactoring",
      "Code review and mentoring Dev2",
    ],
    achievements: [
      "Designed 5-layer architecture: Shell \u2192 UI \u2192 Engine \u2192 Storage \u2192 I/O",
      "Built memory-mapped I/O that opens 100GB+ files in < 50ms",
      "Created parallel search with 8-worker thread pool",
      "Kept binary under 720KB across 40+ releases",
    ],
    philosophy: "Every layer should be independent, every function should have one job, and every allocation should be justified.",
  },
  {
    slug: "dev2",
    name: "Dev2 Agent",
    role: "Developer",
    color: "#9C27B0",
    title: "Software Developer",
    fullBio: "Dev2 is the team\u0027s rapid-execution specialist. Dev2 owns distinct modules: the solitaire easter egg (1,764+ lines), file archaeology, bookmarks, encoding conversion, CSV/JSON rendering, and cross-file search. Dev2 commits frequently with the \u0027[Dev2]\u0027 prefix and has shipped 25+ features and fixed 40+ bugs, documenting 10 key lessons learned along the way.",
    skills: [
      { name: "C++17", level: 82 },
      { name: "Win32 API", level: 78 },
      { name: "Feature Implementation", level: 90 },
      { name: "Fast Iteration", level: 92 },
    ],
    tools: ["C++17", "Win32 API", "CMake", "Git", "GDI"],
    responsibilities: [
      "Implement assigned features on owned modules",
      "Coordinate with SA to avoid file conflicts",
      "Commit frequently with [Dev2] prefix",
      "Fix assigned bugs and write feature tests",
    ],
    achievements: [
      "Shipped 25+ features including CSV/JSON and bookmarks",
      "Built solitaire easter egg DLL \u2014 1,764+ lines of C++",
      "Fixed 40+ bugs across multiple sprints",
      "Documented 10 key lessons learned",
    ],
    philosophy: "Ship fast, learn faster. Every feature is a chance to get better at C++.",
  },
  {
    slug: "tester",
    name: "Tester Agent",
    role: "Quality Assurance",
    color: "#F44336",
    title: "Product Tester & Test Manager",
    fullBio: "The Tester Agent thinks like an adversary. Every feature gets tested at its boundaries: 4GB file sizes, UTF-16 BOM variations, 64MB view window limits, and multi-threaded race conditions. Tester traces data flows byte-by-byte, catching critical bugs invisible to surface-level testing. With 96+ bugs found and detailed root-cause analysis for each, Tester is the last line of defense.",
    skills: [
      { name: "Edge Case Detection", level: 96 },
      { name: "Regression Testing", level: 94 },
      { name: "Root Cause Analysis", level: 92 },
      { name: "Performance Analysis", level: 88 },
    ],
    tools: ["CTest", "Manual Testing", "PE Analysis", "Memory Profiling"],
    responsibilities: [
      "Quality review on all feature deliverables",
      "Test at extreme boundaries (4GB files, UTF-16, 64MB windows)",
      "File detailed bug reports with root cause analysis",
      "Sign off on release candidates before shipping",
    ],
    achievements: [
      "Found 96+ bugs with detailed root cause analysis",
      "Caught critical DLGTEMPLATE alignment bugs",
      "Identified thread safety issues in parallel search",
      "Maintained 135/210 test suites passing",
    ],
    philosophy: "If I can\u0027t break it, it\u0027s probably ready. But I always find a way to break it.",
  },
  {
    slug: "webdev",
    name: "WebDev Agent",
    role: "Web Developer & Designer",
    color: "#00BCD4",
    title: "Web Developer & UI Designer",
    fullBio: "WebDev is the public face of IT Ant ehf \u2014 translating SpeedPad\u0027s technical excellence into a web presence that communicates value clearly. Working with React 18, Next.js 16, TypeScript, and MUI, WebDev builds responsive, statically-generated pages. The site runs self-hosted with zero cloud dependencies, reflecting the same \u0027no bloat\u0027 philosophy that drives SpeedPad.",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "MUI Components", level: 88 },
      { name: "Responsive Design", level: 85 },
    ],
    tools: ["React 18", "Next.js 16", "TypeScript", "MUI v6", "Git"],
    responsibilities: [
      "Build and maintain SpeedPad marketing website",
      "Design responsive layouts with blue ant theme",
      "Transform PO content into web pages",
      "Run Skerity-check before every work cycle",
    ],
    achievements: [
      "Built 9-route marketing site from scratch",
      "Created responsive dark theme with IT Ant branding",
      "150+ feature showcase with multi-log marketing page",
      "Zero-dependency static deployment",
    ],
    philosophy: "A website should be as fast and clean as the product it represents. Just clear information, beautifully presented.",
  },
];

export default function TeamMemberPage() {
  const params = useParams();
  const slug = params.slug as string;
  const member = teamData.find((m) => m.slug === slug);

  if (!member) {
    return (
      <Box sx={{ minHeight: "100vh" }}>
        <Navbar />
        <Container maxWidth="lg" sx={{ pt: 12, textAlign: "center" }}>
          <Typography variant="h3">Team member not found</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            <Link href="/team" style={{ color: "#2196F3" }}>{"\u2190"} Back to Team</Link>
          </Typography>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 8 }, pb: 2 }}>
        <Link href="/team" style={{ color: "#64B5F6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 16 }}>
          <ArrowBackIcon fontSize="small" /> Back to Team
        </Link>

        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mt: 3, mb: 4, flexWrap: "wrap" }}>
          <Box sx={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", border: `3px solid ${member.color}`, flexShrink: 0 }}>
            <Image src={`/avatars/${member.slug}.png`} alt={member.name} width={120} height={120} />
          </Box>
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 0.5 }}>{member.name}</Typography>
            <Typography variant="h5" sx={{ color: member.color, fontWeight: 600 }}>{member.title}</Typography>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <Card elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", mb: 4 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h5" sx={{ mb: 2 }}>About</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9, fontSize: "1.05rem" }}>{member.fullBio}</Typography>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", height: "100%" }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Skills</Typography>
                {member.skills.map((skill) => (
                  <Box key={skill.name} sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                      <Typography variant="body2" fontWeight={600}>{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{skill.level}%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={skill.level} sx={{ height: 8, borderRadius: 4, bgcolor: "rgba(255,255,255,0.06)", "& .MuiLinearProgress-bar": { bgcolor: member.color, borderRadius: 4 } }} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", height: "100%" }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Responsibilities</Typography>
                {member.responsibilities.map((resp, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
                    <Typography sx={{ color: member.color, fontWeight: 700 }}>{"\u203A"}</Typography>
                    <Typography variant="body2" color="text.secondary">{resp}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", height: "100%" }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Key Achievements</Typography>
                {member.achievements.map((ach, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
                    <Typography sx={{ color: "#FFD700" }}>{"\u2605"}</Typography>
                    <Typography variant="body2" color="text.secondary">{ach}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", height: "100%" }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Tools & Tech</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                  {member.tools.map((tool) => (
                    <Chip key={tool} label={tool} variant="outlined" sx={{ borderColor: member.color, color: member.color }} />
                  ))}
                </Box>
                <Divider sx={{ mb: 3, borderColor: "rgba(255,255,255,0.08)" }} />
                <Typography variant="h6" sx={{ mb: 1.5 }}>Philosophy</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic", lineHeight: 1.8 }}>&ldquo;{member.philosophy}&rdquo;</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}