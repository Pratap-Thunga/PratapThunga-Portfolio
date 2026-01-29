import { Box, Typography } from "@mui/material";
import { Add as PlusIcon } from "@mui/icons-material";

export const SkillsMarquee = () => {
  const skills = [
    "Javascript",
    "React.js",
    "C#",
    "ASP.NET",
    "MS SQL",
    "Material UI",
    "Redux",
    "Three.js",
    "Azure DevOps",
    "Vite",
    "TypeScript",
  ];

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        py: 4,
        overflow: "hidden",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 10,
          whiteSpace: "nowrap",
          animation: "marquee 30s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {[1, 2].map((group) => (
          <Box
            key={group}
            sx={{
              display: "flex",
              gap: 10,
              color: "white",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {skills.map((skill) => (
              <Typography
                key={skill}
                variant="h4"
                sx={{
                  fontWeight: 900,
                  fontStyle: "italic",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexShrink: 0,
                }}
              >
                {skill} <PlusIcon sx={{ color: "secondary.main" }} />
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
