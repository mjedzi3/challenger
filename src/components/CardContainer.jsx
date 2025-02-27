import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

/**
 * CardContainer
 * 
 * A reusable card component that displays an image at the top,
 * followed by a title and a description.
 * 
 * Props:
 * @param {string} img - The URL of the image.
 * @param {string} title - The title displayed below the image.
 * @param {string} description - The description text under the title.
 * 
 * Usage Example:
 * <CardContainer 
 *    img="https://picsum.photos/400/300" 
 *    title="Card Title" 
 *    description="This is a sample description of the card content."
 * />
 */

const CardContainer = ({ img, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={img} alt={title} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardContainer;
