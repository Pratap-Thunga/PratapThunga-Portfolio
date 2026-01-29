import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { LinkedIn, Mail, ArrowOutward, GitHub } from "@mui/icons-material";

export const Hero = ({ scrollTo }) => {
  return (
    <Box
      sx={{ pt: { xs: 15, md: 25 }, pb: 10, bgcolor: "background.default" }}
      id="home"
    >
      <Container maxWidth="100%">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h5"
              color="secondary"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Box sx={{ width: 40, height: 2, bgcolor: "secondary.main" }} />
              Software Engineer / Full-Stack Developer
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "3.5rem", md: "6rem" }, mb: 4 }}
            >
              SCALABLE <br />
              <Box component="span" sx={{ color: "secondary.main" }}>
                DIGITAL
              </Box>{" "}
              <br />
              EXPERIENCES.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                color: "text.secondary",
                mb: 6,
                maxWidth: 500,
                lineHeight: 1.8,
              }}
            >
              3+ years of professional experience building high-performance
              React.js applications with expertise in <b>Material UI</b>, Redux,
              and 3D visualization.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => scrollTo("work")}
                endIcon={<ArrowOutward />}
              >
                Explore Projects
              </Button>
              <IconButton
                color="primary"
                href="https://www.linkedin.com/in/pratap-thunga1/"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                color="primary"
                href="https://github.com/Pratap-Thunga"
                target="_blank"
              >
                <GitHub />
              </IconButton>
              <IconButton
                color="primary"
                href="mailto:thungaprathap87@gmail.com"
              >
                <Mail />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
