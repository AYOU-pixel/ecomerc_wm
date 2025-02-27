import { Box, Container } from "@mui/material";
import AnimatedSection from "./components/AnimatedSection"; // Adjust path if needed
import Navbar from "./components/Navbar"; // Adjust path if needed
import Productdetail from "./components/Productdetail"; // Adjust path if needed
import Footer from "./components/Footer"; // Adjust path if needed
import ParallaxBackground from "./components/ParallaxBackground";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ParallaxBackground />
      <Navbar />
      <Box sx={{ flex: 1, position: "relative" }}>
        <Container maxWidth="xl">
          <AnimatedSection />
          <Productdetail />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}