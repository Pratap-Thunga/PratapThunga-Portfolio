import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import { Menu as MenuIcon, FileDownload } from "@mui/icons-material";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? "rgba(255,255,255,0.8)" : "transparent",
      backdropFilter: trigger ? "blur(10px)" : "none",
      transition: "all 0.3s ease",
      py: trigger ? 1 : 2,
    },
  });
}

export const Header = ({ scrollTo }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDownloadResume = async () => {
    try {
      const resumePath = new URL(
        "../assets/PratapThunga_Resume.pdf",
        import.meta.url,
      ).href;
      const res = await fetch(resumePath);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "PratapThunga_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Resume download failed:", err);
    }
  };

  const handleScrollTo = (id) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="inherit">
          <Container maxWidth="100%">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  fontStyle: "italic",
                  letterSpacing: "-1px",
                  cursor: "pointer",
                }}
                onClick={() => handleScrollTo("home")}
              >
                PRATAP.THUNGA
              </Typography>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 4,
                  alignItems: "center",
                }}
              >
                {["About", "Projects", "Experience"].map((item) => (
                  <Button
                    key={item}
                    onClick={() => handleScrollTo(item.toLowerCase())}
                    sx={{
                      color: "text.primary",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      letterSpacing: "2px",
                    }}
                  >
                    {item}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<FileDownload />}
                  sx={{ borderRadius: 2, borderWidth: 2 }}
                  onClick={handleDownloadResume}
                >
                  RESUME
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleScrollTo("contact")}
                >
                  HIRE ME
                </Button>
              </Box>

              <IconButton
                sx={{ display: { md: "none" } }}
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250, p: 4 }}>
          <List>
            {["Work", "Experience", "About", "Contact"].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => handleScrollTo(text.toLowerCase())}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontWeight: 800 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
