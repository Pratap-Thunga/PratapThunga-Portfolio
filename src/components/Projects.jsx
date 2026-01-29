import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import projectsData from "../data/projects.json";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = projectsData;

  return (
    <Container maxWidth="100%" sx={{ py: 15 }} id="work">
      <Box sx={{ mb: 10 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          CRAFTED SOLUTIONS
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ fontStyle: "italic" }}
        >
          Enterprise configurators and performance-driven applications.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              onClick={() => setSelectedProject(project)}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-10px)",
                  bgcolor: "primary.main",
                  "& *": { color: "white" },
                },
              }}
            >
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 900,
                    color: "secondary.main",
                    mb: 2,
                    display: "block",
                  }}
                >
                  {project.category}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontSize: "1.5rem", fontStyle: "italic" }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.7 }}
                >
                  {project.description}
                </Typography>
                <Box
                  sx={{ mt: "auto", display: "flex", flexWrap: "wrap", gap: 1 }}
                >
                  {project.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.6rem",
                        borderRadius: 1,
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Project Details Dialog */}
      <Dialog
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ fontWeight: 900, fontSize: "1.5rem" }}>
              {selectedProject.title}
            </DialogTitle>
            <DialogContent sx={{ pt: 2 }}>
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 900,
                  color: "primary.main",
                  mb: 2,
                  display: "block",
                }}
              >
                {selectedProject.category}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1 }}>
                What This Project Does
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1, lineHeight: 1.7 }}
              >
                {selectedProject.projectDoes}
              </Typography>
              {selectedProject.projectOutlines && (
                <Box sx={{ mb: 3 }}>
                  {selectedProject.projectOutlines.map((outline, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 0.6,
                        display: "flex",
                        alignItems: "flex-start",
                        lineHeight: 1.6,
                        "&:before": {
                          content: '"•"',
                          marginRight: 1.5,
                          color: "primary.main",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        },
                      }}
                    >
                      {outline}
                    </Typography>
                  ))}
                </Box>
              )}

              <Typography variant="h6" sx={{ fontWeight: 700, mt: 3, mb: 2 }}>
                My Work & Contributions
              </Typography>
              <Box sx={{ mb: 3 }}>
                {(selectedProject.myWork || selectedProject.achievements).map((item, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 1.5,
                      display: "flex",
                      alignItems: "flex-start",
                      lineHeight: 1.6,
                      "&:before": {
                        content: '"✓"',
                        marginRight: 1,
                        color: "primary.main",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1 }}>
                Technologies Used
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {selectedProject.tech.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    sx={{
                      fontWeight: 600,
                      backgroundColor: "primary.main",
                      color: "white",
                    }}
                  />
                ))}
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button
                onClick={() => setSelectedProject(null)}
                variant="contained"
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
};
