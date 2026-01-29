import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  CheckCircle,
  Code as CodeIcon,
  Palette,
  Bolt,
  Shield,
  TrendingUp,
} from "@mui/icons-material";

export const About = () => {
  const technicalExpertise = [
    {
      icon: CodeIcon,
      title: "Core Tech",
      description: "React.js, Redux Toolkit, JavaScript, Vite, Java",
    },
    {
      icon: Palette,
      title: "UI & Design",
      description:
        "Material UI, Bootstrap, and Three.js for interactive 3D modeling",
    },
    {
      icon: Bolt,
      title: "Specialized Systems",
      description:
        "CPQ Rule engines (Configit, Epicor) and custom product configurators",
    },
    {
      icon: Shield,
      title: "DevOps & Tools",
      description: "Azure DevOps, CI/CD pipelines, Docker, and SonarQube",
    },
  ];

  const impactfulProjects = [
    {
      title: "Architecture & Performance",
      description:
        "Led migration from legacy third-party engines to custom in-house solutions, reducing licensing costs and improving system speed. Achieved 60% performance boost by resolving critical memory leaks.",
    },
    {
      title: "Security & Compliance",
      description:
        "Remediated critical penetration testing vulnerabilities for zero-defect production launches and implemented GDPR-compliant data collection systems.",
    },
    {
      title: "Data Visualization",
      description:
        "Developed custom POCs for lighting performance using Polar Graphs and created interactive power consumption dashboards with Recharts and Google Analytics.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container maxWidth="100%">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 3,
            letterSpacing: "-1px",
          }}
        >
          ABOUT ME
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 6,
            fontSize: "1.1rem",
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          I am a Software Developer with over 4 years of experience at Infosys
          Ltd., specializing in building high-performance, scalable web
          applications using the React.js ecosystem. My expertise lies in
          transforming complex business requirements into seamless user
          experiences, with a strong focus on performance optimization, UI/UX
          excellence, and clean, reusable code.
        </Typography>

        {/* Technical Expertise Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 4,
              letterSpacing: "-0.5px",
            }}
          >
            TECHNICAL EXPERTISE
          </Typography>

          <Grid container spacing={3}>
            {technicalExpertise.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s ease, boxShadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                        <Icon
                          sx={{
                            fontSize: 32,
                            color: "primary.main",
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                          }}
                        >
                          {tech.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                        }}
                      >
                        {tech.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Impactful Projects Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 4,
              letterSpacing: "-0.5px",
            }}
          >
            IMPACTFUL PROJECTS
          </Typography>

          <Grid container spacing={3}>
            {impactfulProjects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    transition: "transform 0.3s ease, boxShadow 0.3s ease",
                    "&:hover": {
                      transform: "translateX(4px)",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                      <TrendingUp
                        sx={{
                          fontSize: 28,
                          color: "primary.main",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Commitment to Quality Section */}
        <Box
          sx={{
            backgroundColor: "white",
            p: 4,
            borderRadius: 2,
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 3,
              letterSpacing: "-0.5px",
            }}
          >
            COMMITMENT TO QUALITY
          </Typography>

          <List sx={{ pl: 0 }}>
            <ListItem sx={{ pl: 0, mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircle sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary="B.Tech in Computer Science"
                secondary="CGPA: 7.8/10"
              />
            </ListItem>
            <ListItem sx={{ pl: 0, mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircle sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary="Microsoft Certified Azure Developer Associate"
                secondary="Certification: AZ-204"
              />
            </ListItem>
            <ListItem sx={{ pl: 0, mb: 2 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircle sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary="Agile Methodologies Expert"
                secondary="Committed to delivering excellence and continuous improvement"
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircle sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary="Award Recognition"
                secondary="Multiple Insta and Rise awards for exceptional performance and team support"
              />
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
};
