import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Service from "./Service";
import Payment from "./Payment";
import Navbar from "./Navbar";

function Landing() {
  return (
    <>
      <Box
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: { xs: "auto", md: "auto", lg: "auto" },
          width: { xs: "100%", md: "100%", lg: "100%" },
          display: "flex",
          zIndex: "0",
          alignItems: "center",
          flexDirection: "column",
          position: "sticky",
          backgroundImage: `url(${process.env.PUBLIC_URL}/bg.svg)`,
        }}
      >
        <Navbar />
        <Box sx={{ height: "100dvh", width: "100%", marginTop: "4rem" }}>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={7}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                display: "flex",
                textAlign: "center",
                letterSpacing: ".5px",
                position: "relative",
                width: "100%",
                // backgroundColor: "black",
                marginTop: { xs: "4rem", md: "10rem" },
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  color: "black",
                  fontSize: { xs: "2.3rem", md: "3.3rem" },
                  fontWeight: "bold",
                  marginLeft: { xs: "0rem", md: "1.8rem" },
                }}
              >
                Grow faster with our all-in-one, Smart Recruitment System
              </Box>
              <Box
                sx={{
                  color: "black",
                  fontSize: { xs: "1.4rem", md: "1.8rem" },
                  fontWeight: "500",
                  marginLeft: { xs: "0rem", md: "1.8rem" },
                }}
              >
                <br></br>Our recruitment system is usable as a standalone
                software or it can be used as an integrated software with your
                office system. Whichever way you prefer to use it, we promise
                our system will be flawless.
              </Box>
              <Box>
                <Button
                  sx={{
                    marginTop: "10dvh",
                    border: "4px solid transparent",
                    borderRadius: "2rem",
                    padding: "1rem",
                    color: "black",
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    backgroundColor: "#FF8000",
                    fontWeight: "600",
                    height: { xs: "1rem", md: "5rem" },
                    width: { xs: "15rem", md: "25rem" },
                  }}
                >
                  {" "}
                  Book Demo
                </Button>
              </Box>
            </Grid>
            <Grid item md={5}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {" "}
                <img
                  src="./hero.png"
                  style={{ height: "90dvh", width: "100%" }}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Service />
        <Box>
          <Payment />
        </Box>
      </Box>
    </>
  );
}

export default Landing;
