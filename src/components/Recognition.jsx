import React from "react";
import { Container, Grid, Box, Typography, Chip } from "@mui/material";
import { EmojiEvents, Terminal, Code } from "@mui/icons-material";

export const Recognition = () => {
  const recognition = [
    { label: "Rise Award (Best Team)", val: "2x" },
    { label: "Insta Award (Project Success)", val: "1x" },
    { label: "Gracias Award (Collaborator)", val: "2x" },
  ];

  const certifications = [
    "AZ-900",
    "AZ-204",
    "React Professional",
    "Agile Developer",
    "Infosys UI Specialist",
  ];

  return (
    <Container maxWidth="100%" sx={{ py: 15 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 6,
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 8,
              height: "100%",
            }}
          >
            <EmojiEvents
              sx={{ fontSize: 50, color: "secondary.main", mb: 3 }}
            />
            <Typography variant="h3" sx={{ mb: 6, fontStyle: "italic" }}>
              RECOGNITION
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {recognition.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    pb: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, letterSpacing: 1 }}
                  >
                    {item.label}
                  </Typography>
                  <Typography color="secondary" sx={{ fontWeight: 900 }}>
                    {item.val}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 6,
              border: "2px solid #EEE",
              borderRadius: 8,
              height: "100%",
            }}
          >
            <Terminal sx={{ fontSize: 50, color: "primary.main", mb: 3 }} />
            <Typography variant="h3" sx={{ mb: 6, fontStyle: "italic" }}>
              CERTIFIED
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {certifications.map((cert) => (
                <Chip
                  key={cert}
                  label={cert}
                  variant="outlined"
                  icon={<Code sx={{ fontSize: 14 }} />}
                  sx={{ p: 2, fontWeight: 800, borderRadius: 2 }}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
