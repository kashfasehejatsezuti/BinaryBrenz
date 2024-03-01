import React from "react";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import FindInPageIcon from "@mui/icons-material/FindInPage";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import "./Service.css";
const Service = () => {
  return (
    <>
      <Box sx={{ marginTop: { xs: "6rem", md: "4rem" } }}>
        <Box className="service-section">
          <h1> Services</h1>

          <Box
            sx={{ marginTop: { xs: "6rem", md: "4rem" } }}
            className="service-cards"
          >
            <Box data-aos="fade-left" className="service-card">
              <FindInPageIcon
                sx={{
                  placeContent: "center",
                  display: "inline-block",
                  margin: "auto",
                  color: " rgb(79, 104, 93 )",
                  width: "20%",
                  height: "20%",
                }}
              />
              <Box className="service-content">
                <h3> Resume Parsing and Analysis</h3>
                <p>
                  Using advanced detection technology, we analyze your website
                  to identify dark patterns, ensuring a user-friendly and
                  ethical online presence
                </p>
                <Link style={{ textDecoration: "none" }} href="/signup">
                  <Button
                    sx={{
                      placeContent: "center",
                      display: "flex",
                      margin: "auto auto 10px auto",
                      backgroundColor: "rgb(79, 104, 93)",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "2rem",

                      "&:hover": {
                        color: "rgb(79, 104, 93)",
                      },
                    }}
                  >
                    Get Start
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box data-aos="fade-up" className="service-card">
              <DocumentScannerIcon
                sx={{
                  placeContent: "center",
                  display: "inline-block",
                  margin: "auto",
                  color: " rgb(79, 104, 93  )",
                  width: "20%",
                  height: "20%",
                }}
              />
              <Box className="service-content">
                <h3>Dynamic Workflow</h3>
                <p>
                  Our skilled experts manually review your website, identifying
                  dark patterns missed by automated tools. Get personalized
                  feedback for enhanced user trust and satisfaction.
                </p>
                <Link style={{ textDecoration: "none" }} href="/signup">
                  <Button
                    sx={{
                      placeContent: "center",
                      display: "flex",
                      margin: "auto auto 10px auto",
                      backgroundColor: "rgb(79, 104, 93)",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "2rem",
                      "&:hover": {
                        color: "rgb(79, 104, 93)",
                      },
                    }}
                  >
                    Get Start
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box data-aos="fade-right" className="service-card">
              <AccountTreeIcon
                sx={{
                  placeContent: "center",
                  display: "inline-block",
                  margin: "auto",
                  color: " rgb(79, 104, 93  )",
                  width: "20%",
                  height: "20%",
                }}
              />
              <Box className="service-content">
                <h3> Automated Hiring Process</h3>
                <p>
                  Secure a competitive edge with our transparent, ethical
                  certification, boosting brand credibility and ensuring a
                  trustworthy online experience..
                </p>
                <Link style={{ textDecoration: "none" }} href="/signup">
                  <Button
                    sx={{
                      placeContent: "center",
                      display: "flex",
                      margin: "auto auto 10px auto",
                      backgroundColor: "rgb(79, 104, 93)",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "2rem",
                      marginBottom: "2rem",
                      "&:hover": {
                        color: "rgb(79, 104, 93)",
                      },
                    }}
                  >
                    Get Start
                  </Button>
                </Link>
              </Box>
            </Box>

            <Box data-aos="fade-left" className="service-card">
              <Diversity3Icon
                sx={{
                  placeContent: "center",
                  display: "inline-block",
                  margin: "auto",
                  color: " rgb(79, 104, 93 )",
                  width: "20%",
                  height: "20%",
                }}
              />
              <Box className="service-content">
                <h3> Data Extraction From Job Post</h3>
                <p>
                  Using advanced detection technology, we analyze your website
                  to identify dark patterns, ensuring a user-friendly and
                  ethical online presence
                </p>
                <Link style={{ textDecoration: "none" }} href="/signup">
                  <Button
                    sx={{
                      placeContent: "center",
                      display: "flex",
                      margin: "auto auto 10px auto",
                      backgroundColor: "rgb(79, 104, 93)",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "2rem",
                      "&:hover": {
                        color: "rgb(79, 104, 93)",
                      },
                    }}
                  >
                    Get Start
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box data-aos="fade-up" className="service-card">
              <ImportantDevicesOutlinedIcon
                sx={{
                  placeContent: "center",
                  display: "inline-block",
                  margin: "auto",
                  color: " rgb(79, 104, 93  )",
                  width: "20%",
                  height: "20%",
                }}
              />
              <Box className="service-content">
                <h3>Experts Feed Back </h3>
                <p>
                  Our skilled experts manually review your website, identifying
                  dark patterns missed by automated tools. Get personalized
                  feedback for enhanced user trust and satisfaction.
                </p>
                <Link style={{ textDecoration: "none" }} href="/signup">
                  <Button
                    sx={{
                      placeContent: "center",
                      display: "flex",
                      margin: "auto auto 10px auto",
                      backgroundColor: "rgb(79, 104, 93)",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "2rem",
                      marginBottom: "2rem",
                      "&:hover": {
                        color: "rgb(79, 104, 93)",
                      },
                    }}
                  >
                    Get Start
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box data-aos="fade-right" className="service-card">
              <WorkspacePremiumOutlinedIcon
                sx={{
                  placeContent: "center",
                  display: "inline-block",
                  margin: "auto",
                  color: " rgb(79, 104, 93  )",
                  width: "20%",
                  height: "20%",
                }}
              />
              <Box className="service-content">
                <h3> Certification</h3>
                <p>
                  Secure a competitive edge with our transparent, ethical
                  certification, boosting brand credibility and ensuring a
                  trustworthy online experience..
                </p>
                <Link style={{ textDecoration: "none" }} href="/signup">
                  <Button
                    sx={{
                      placeContent: "center",
                      display: "flex",
                      margin: "auto auto 10px auto",
                      backgroundColor: "rgb(79, 104, 93)",
                      fontWeight: "bold",
                      color: "white",
                      marginBottom: "2rem",
                      "&:hover": {
                        color: "rgb(79, 104, 93)",
                      },
                    }}
                  >
                    Get Start
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Service;
