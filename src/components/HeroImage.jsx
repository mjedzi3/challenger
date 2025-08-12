import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";

/**
 * HeroImage Component
 * 
 * This component displays a full-width banner with a background image,
 * a title overlay, and an optional button that links to a specified URL.
 * 
 * Props:
 * @param {string} img - The URL of the background image.
 * @param {string} title - The main heading text displayed over the image.
 * @param {string} subtext - Smaller descriptive text below the title.
 * @param {object} button - (Optional) Contains button text and link.
 *    @param {string} button.text - The text displayed on the button.
 *    @param {string} button.link - The URL the button directs to.
 * 
 * Usage Example:
 * <HeroImage 
 *    img="https://picsum.photos/1920/600" 
 *    title="Welcome to Our Site" 
 *    button={{ text: "Learn More", link: "#" }} 
 * />
 */
const HeroImage = ({ img, title, subtext, button }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "400px",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        p: 2,
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        {subtext && (
          <Typography
            variant="h6"
            sx={{ opacity: 0.85, mb: button ? 2 : 0 }}
          >
            {subtext}
          </Typography>
        )}

        {button && (
          <Button
            component={Link}
            href={button.link}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            {button.text}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default HeroImage;