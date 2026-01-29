import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
} from "@mui/material";
import { Layers } from "@mui/icons-material";

export const Experience = () => {
  const experience = [
    {
      role: "Frontend Developer | UI Engineer",
      company: "Infosys Ltd.",
      period: "July 2022 - Present",
      location: "Bangalore, KA",
      points: [
        "Architected reusable components using React.js and Material UI for enterprise-scale applications.",
        "Integrated Redux Toolkit and optimized application performance.",
        "Managed complex rule engines (Configit/Epicor) for automated business logic.",
      ],
    },
    {
      role: "Frontend Developer | UI Engineer",
      company: "Infosys Ltd.",
      period: "July 2016 - July 2020",
      location: "Chennai, TN",
      points: [
        "Translated complex design concepts into functional React UI components.",
        "Maintained high code quality standards using SonarQube and automated testing.",
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F0F0F0", py: 15 }} id="experience">
      <Container maxWidth="100%">
        <Typography
          variant="h2"
          sx={{ mb: 10, display: "flex", alignItems: "center", gap: 2 }}
        >
          <Layers sx={{ fontSize: 40, color: "secondary.main" }} /> PROFESSIONAL
          PATH
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {experience.map((exp, index) => (
            <Card key={index} sx={{ p: 2 }}>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="h6"
                      sx={{ fontStyle: "italic", fontWeight: 900 }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      color="secondary"
                      sx={{ fontWeight: 800, mb: 2 }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 700, opacity: 0.6 }}
                    >
                      {exp.period} | {exp.location}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <List disablePadding>
                      {exp.points.map((pt, i) => (
                        <ListItem
                          key={i}
                          sx={{ px: 0, py: 0.5, alignItems: "flex-start" }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              display: "flex",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{ color: "secondary.main", fontWeight: 900 }}
                            >
                              —
                            </Box>{" "}
                            {pt}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
