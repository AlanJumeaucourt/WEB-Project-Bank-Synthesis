import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
          <a href="https://www.insa-lyon.fr">
                        <img src="INSA_Logo.png" height="50hv" alt="Logo" loading="lazy" />
                    </a>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
             <Link underline="none" color="inherit" href="/about-us">About Us</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link underline="hover" color="inherit" href="https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis/">GitHub</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link underline="hover" color="inherit" href="https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis/issues">Contact US</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
          <a href="https://www.insa-lyon.fr/fr/content/télécommunications-services-usages">
                        <img src="TCA_Logo.png" height="50hv" alt="Logo" loading="lazy" />
                    </a>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}