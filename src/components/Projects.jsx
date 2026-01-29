import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';

export const Projects = () => {
  const projects = [
    {
      title: "Socket & Meter Board Configurator",
      category: "Architectural Migration",
      tech: ["React.js", "Redux", "Azure", "SonarQube"],
      description: "Led the migration from legacy rule engines to custom in-house solutions. Improved system performance and reduced licensing costs.",
    },
    {
      title: "Lighting Configurator (V3)",
      category: "Canvas & UI/UX",
      tech: ["React.js", "Material UI", "Vite", "Google Analytics"],
      description: "Custom Canvas-based design space for electrical load and lighting optimization with EULUMDAT file parsing.",
    },
    {
      title: "3D Elevator Configurator",
      category: "3D Visualization",
      tech: ["React.js", "Three.js", "Node.js", "Express"],
      description: "Interactive 3D model delivering realistic animations for industrial product visualization.",
    }
  ];

  return (
    <Container maxWidth="100%" sx={{ py: 15 }} id="work">
      <Box sx={{ mb: 10 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>CRAFTED SOLUTIONS</Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          Enterprise configurators and performance-driven applications.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-10px)', bgcolor: 'primary.main', '& *': { color: 'white' } } }}>
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Typography variant="overline" sx={{ fontWeight: 900, color: 'secondary.main', mb: 2, display: 'block' }}>
                  {project.category}
                </Typography>
                <Typography variant="h5" sx={{ mb: 2, fontSize: '1.5rem', fontStyle: 'italic' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                  {project.description}
                </Typography>
                <Box sx={{ mt: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tech.map(t => (
                    <Chip key={t} label={t} size="small" sx={{ fontWeight: 700, fontSize: '0.6rem', borderRadius: 1 }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
