"use client";

import { Box, Button, keyframes } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  style: ["italic", "normal"],
  preload: true,
});

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GoldButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #C5A330 0%, #E6CF6F 100%)",
  backgroundSize: "200% 200%",
  color: "#1a1a1a",
  padding: theme.spacing(2, 6),
  borderRadius: "30px",
  fontSize: "1.1rem",
  fontFamily: cormorant.style.fontFamily,
  fontWeight: 700,
  letterSpacing: "1.5px",
  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  border: "2px solid rgba(255, 215, 0, 0.3)",
  boxShadow: "0 4px 15px rgba(198, 168, 50, 0.2)", // Default shadow for depth
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)", // Scale effect on hover
    boxShadow: "0 8px 30px rgba(198, 168, 50, 0.4)",
  },
  "&:focus": {
    outline: "2px solid #E6CF6F", // Focus outline for accessibility
    outlineOffset: "2px",
  },
  "&:active": {
    opacity: 0.9, // Feedback on click
  },
  animation: `${gradientFlow} 6s ease infinite`,
  // Responsive styles
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5, 4),
    fontSize: "1rem",
  },
}));

export default function AnimatedSection() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 6, md: 12 }, // Adjusted padding after removing title
        px: { xs: 2, md: 0 },
        color: "#fff",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Link href="/shop" legacyBehavior passHref>
        <GoldButton
          component="a"
          aria-label="Explore our luxury collection"
          sx={{
            animation: `${fadeIn} 1s ease-out 0.6s forwards`,
          }}
        >
          Explore Collection
        </GoldButton>
      </Link>
    </Box>
  );
}