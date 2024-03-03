/* eslint-disable react/no-unescaped-entities */
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import FirstCard from "assets/Images/FirstCard.png";
import fourthCard from "assets/Images/FourthCard.png";
import secondCard from "assets/Images/SecondImage.png";
import thirdCard from "assets/Images/ThirdCard.png";
import firstLeft from "assets/Images/firstLeft.png";
import footerIcon from "assets/Images/footer.png";
import GirlIcon from "assets/Images/girlImage.png";
import MeduimGirl from "assets/Images/mediumGirl.png";
import secondTop from "assets/Images/secondTop.png";
import startIcon from "assets/Images/startIcon.png";
import thirdLeft from "assets/Images/thirdSide.png";
import lightTheme from "theme";

const DashboardNavbarRoot = styled(AppBar)(({ theme }: any) => {
  return {
    background: "white",
    //   "linear-gradient(90deg, #DE554D 0%, rgba(222, 85, 77, 0.4) 100%)",
    boxShadow: "4px 0px 9px rgba(0, 0, 0, 0.25)",
    color: theme.palette.common.white,
    zIndex: 1000,
    position: "static",
    [theme.breakpoints.down("md")]: {
      background: "white",
      // boxShadow: "none",
    },
  };
});

export default function LandingPage() {
  //   const theme = useTheme();

  return (
    <div
      style={{
        width: "100%", // Default width for small screens

        margin: "0 auto", // Center the content horizontally
      }}
    >
      <>
        <DashboardNavbarRoot
          sx={{
            boxShadow: "0px 1px 21px rgb(100 116 139 / 15%)",
            paddingX: "15px",
            paddingBottom: { xs: "5px", md: "1px" },
          }}
        >
          <Toolbar>
            {/* <Typography variant="h6">Ever</Typography> */}
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              style={{ padding: "0 80px" }}
            >
              <Typography
                style={{
                  marginRight: "auto",
                  color: "#6E4FB3",
                  fontFamily: "'Kaushan Script', cursive",
                  fontWeight: 400,
                  fontSize: "32px",
                  fontStyle: "normal",
                }}
                // variant="h6"
              >
                Post
              </Typography>
              <Stack
                style={{
                  width: "311px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "36px",
                  padding: "0px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  Features
                </Typography>
                <Button
                  sx={{
                    minWidth: "191px",
                    color: "white",
                    backgroundColor: "#6E4FB3",
                    borderRadius: "24px",
                    fontFamily: "Inter",
                    fontWeight: 600,
                    // fontSize: "20px",
                    alignItems: "center",
                  }}
                  variant="contained"
                >
                  Download now
                </Button>
              </Stack>
            </Grid>
          </Toolbar>
        </DashboardNavbarRoot>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            textAlign: "center",
            padding: "88px 0.5px",
            display: "flex",
            [lightTheme.breakpoints.up("md")]: {
              padding: "121px 80px",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            },
            [lightTheme.breakpoints.up("lg")]: {
              padding: "88px 0.5px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              [lightTheme.breakpoints.up("md")]: {
                justifyContent: "flex-start",
                alignItems: "flex-start",
              },
              [lightTheme.breakpoints.up("lg")]: {
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "48px",
                alignItems: "center",
                lineHeight: "58px",
              }}
            >
              A social hub where every thought triggers meaningful discussions
              in real-time
            </Typography>
            <Button
              sx={{
                //   width: "161px",
                padding: "32px, 24px, 0px, 24px",
                borderRadius: "24px",
                backgroundColor: "#6E4FB3",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
                letterSpacing: "0px",
                textAlign: "center",
              }}
              variant="contained"
            >
              Get the App
            </Button>
          </Box>

          <Box
            sx={{
              [lightTheme.breakpoints.up("md")]: {
                display: "none",
              },
              [lightTheme.breakpoints.up("lg")]: {
                display: "block",
              },
            }}
          >
            <img
              alt="GirlImage"
              src={GirlIcon}
              style={{
                marginTop: "90px",
              }}
            />
          </Box>
          <Box
            sx={{
              [lightTheme.breakpoints.up("md")]: {
                display: "block",
              },
              [lightTheme.breakpoints.up("lg")]: {
                display: "none",
              },
            }}
          >
            <img
              alt="GirlImage"
              src={MeduimGirl}
              style={{ position: "relative" }}
            />
            <img
              alt="GirlImage"
              src={firstLeft}
              style={{
                position: "absolute",
                width: "167px",
                height: "108px",
                bottom: 0,

                left: "63%",
                transform: "translateX(-50%)",
              }}
            />
            <img
              alt="GirlImage"
              src={secondTop}
              style={{
                position: "absolute",
                width: "163px",
                height: "173px",
                right: "8%",
                top: "23%",
                transform: "translate(50%)",
              }}
            />
            <img
              alt="GirlImage"
              src={thirdLeft}
              style={{
                position: "absolute",
                width: "195px",
                height: "100px",
                bottom: "-30px",
                right: "8%",

                transform: "translate(50%, 50%)",
              }}
            />
          </Box>
        </Box>

        <Box
          style={{
            marginTop: "60px",
            backgroundColor: "#FFFFFF",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          <Typography
            gutterBottom
            sx={{
              paddingY: "88px",
              fontFamily: "Inter",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "48px",
              letterSpacing: "0px",
              textAlign: "center",
            }}
          >
            What's in it for you
          </Typography>
          <Box
            sx={{
              padding: "0px 80px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card
              sx={{
                height: "400px",
                padding: "0px",
                display: "flex",
                borderRadius: "0px, 24px, 24px, 0px",
              }}
            >
              <CardContent
                style={{
                  backgroundColor: "#F1EBFF",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  padding: "146px  105px 146px 84px ",
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  Get updates on
                </Typography>
                <Typography
                  sx={{
                    color: "#6E4FB3",
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  Latest news{" "}
                  <Typography
                    component="span"
                    sx={{
                      color: "black",
                      fontFamily: "Inter",
                      fontSize: "44px",
                      fontWeight: 700,
                    }}
                  >
                    &
                  </Typography>{" "}
                  trends
                </Typography>
              </CardContent>

              <div style={{ width: "50%", padding: "0px" }}>
                <img
                  alt="Trends"
                  src={FirstCard}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Card>

            <Card
              sx={{
                height: "400px",
                padding: "0px",
                display: "flex",
                borderRadius: "0px, 24px, 24px, 0px",
                marginTop: "159px",
              }}
            >
              <div style={{ width: "50%", padding: "0px" }}>
                <img
                  alt="Trends"
                  src={secondCard}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <CardContent
                style={{
                  backgroundColor: "#F1EBFF",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  padding: "146px  105px 146px 84px ",
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  Engage in{" "}
                  <Typography
                    component="span"
                    sx={{
                      color: "#6E4FB3",
                      fontFamily: "Inter",
                      fontSize: "44px",
                      fontWeight: 700,
                    }}
                  >
                    dynamic
                  </Typography>{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#6E4FB3",
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  conversations{" "}
                  <Typography
                    component="span"
                    sx={{
                      color: "black",
                      fontFamily: "Inter",
                      fontSize: "44px",
                      fontWeight: 700,
                    }}
                  >
                    instantly
                  </Typography>{" "}
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                height: "400px",
                padding: "0px",
                display: "flex",
                borderRadius: "0px, 24px, 24px, 0px",
                marginTop: "159px",
              }}
            >
              <CardContent
                style={{
                  backgroundColor: "#F1EBFF",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  padding: "146px  105px 146px 84px ",
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    color: "#6E4FB3",
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  Post{" "}
                  <Typography
                    component="span"
                    sx={{
                      color: "black",
                      fontFamily: "Inter",
                      fontSize: "44px",
                      fontWeight: 700,
                    }}
                  >
                    &
                  </Typography>{" "}
                  repost{" "}
                  <Typography
                    component="span"
                    sx={{
                      color: "black",
                      fontFamily: "Inter",
                      fontSize: "44px",
                      fontWeight: 700,
                    }}
                  >
                    your
                  </Typography>{" "}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    color: "#6E4FB3",
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  thought with
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  friends
                </Typography>
              </CardContent>

              <div style={{ width: "50%", padding: "0px" }}>
                <img
                  alt="Trends"
                  src={thirdCard}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Card>

            <Card
              sx={{
                height: "400px",
                padding: "0px",
                display: "flex",
                borderRadius: "0px, 24px, 24px, 0px",
                marginTop: "159px",
              }}
            >
              <div style={{ width: "50%", padding: "0px" }}>
                <img
                  alt="Trends"
                  src={fourthCard}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <CardContent
                style={{
                  backgroundColor: "#F1EBFF",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  padding: "146px  105px 146px 84px ",
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#6E4FB3",
                      fontFamily: "Inter",
                      fontSize: "44px",
                      fontWeight: 700,
                    }}
                  >
                    Follow
                  </Typography>{" "}
                  your favourite
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  creators
                </Typography>
              </CardContent>
            </Card>
            <Box
              sx={{
                height: "353px",
                padding: "0px",
                display: "flex",
                marginTop: "88px",
                border: "0px, 0px, 1px, 0px",
              }}
            >
              <CardContent
                style={{
                  backgroundColor: "#FFFFF",
                  width: "50%",
                  height: "195px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  padding: "79px 0px",
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "44px",
                    letterSpacing: "0px",
                    textAlign: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  Joins us today
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "32px",
                    fontWeight: 400,
                    lineHeight: "36px",
                    textAlign: "flex-start",
                  }}
                >
                  Be part of something bigger than
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "32px",
                    fontWeight: 400,
                    lineHeight: "36px",
                    textAlign: "flex-start",
                  }}
                >
                  yourself!
                </Typography>
              </CardContent>

              <CardContent
                style={{
                  backgroundColor: "#FFFFF",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  padding: "55px 0px ",
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "36px",
                    textAlign: "flex-start",
                  }}
                >
                  Download our app to experience seamless
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "36px",
                    textAlign: "flex-start",
                  }}
                >
                  {" "}
                  connections, vibrant conversations, and a community{" "}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "36px",
                    textAlign: "flex-start",
                  }}
                >
                  where your voice truly matters. Join us and elevate
                </Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "36px",
                    textAlign: "flex-start",
                  }}
                >
                  your digital experience today!
                </Typography>
                <Button
                  startIcon={
                    <img
                      src={startIcon}
                      style={{ width: "37px", height: "35px" }}
                    />
                  }
                  sx={{
                    height: "67.44px",
                    marginTop: "32px",
                    padding: "16px, 32px, 16px, 32px",
                    borderRadius: "44px",
                    // gap: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#121212",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: " 30px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    color: "white",
                  }}
                  variant="contained"
                >
                  Get it on google pay
                </Button>
              </CardContent>
            </Box>
          </Box>
          <footer
            style={{
              backgroundColor: "white",
              padding: "48px 0",
              textAlign: "center",
            }}
          >
            <Stack
              sx={{
                width: "433px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center", // Center horizontally
                gap: "33px",
                alignItems: "center", // Center vertically
                margin: "0 auto", // Center horizontally within the footer
              }}
            >
              <Link color="inherit" href="#">
                Privacy Policy
              </Link>
              <Link color="inherit" href="#">
                Terms & Conditions
              </Link>
              <Link color="inherit" href="#">
                Support & Help
              </Link>
            </Stack>
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "16px",
                }}
              >
                <FacebookIcon style={{ color: "gray" }} />
                <span style={{ marginLeft: "8px", color: "gray" }}>
                  Facebook
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "16px",
                }}
              >
                <TwitterIcon style={{ color: "gray" }} />
                <span style={{ marginLeft: "8px", color: "gray" }}>
                  Twitter
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "16px",
                }}
              >
                <InstagramIcon style={{ color: "gray" }} />
                <span style={{ marginLeft: "8px", color: "gray" }}>
                  Instagram
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <LinkedinIcon style={{ color: "gray" }} />
                <span style={{ marginLeft: "8px", color: "gray" }}>
                  LinkedIn
                </span>
              </div>
            </div>
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={footerIcon} style={{ width: "13px", height: "13px" }} />
              <span style={{ marginLeft: "8px", color: "gray" }}>
                2024
                <span style={{ marginLeft: "8px", color: "#6E4FB3" }}>
                  post
                </span>
                .All rights reserved
              </span>
            </div>
          </footer>
        </Box>
      </>
    </div>
  );
}
