/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Image, Button } from "theme-ui";
import backgroundImageJpg from "assets/images/backgroundImage.jpg";
import backgroundImagePng from "assets/images/backgroundImage.png";
import circle from "assets/images/buttonCircle.png";

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">LICENSE YOUR ASSETS DIGITALLY</Heading>
            <Text as="p1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Text>
            <Box>
              <Button>GET STARTED</Button>
            </Box>
            <Box>
              <Image sx={styles.imageCss} src={circle} alt="zero2hero" />
            </Box>
            <Heading as="h2">We offer a fairer education opportunity</Heading>
            <Text as="p2">
              We love what we do and we do it with passion. We value the
              experimentation lorem ipsum dolar a sim lomet.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    background: `url(${backgroundImagePng}) no-repeat center bottom / cover`,
  },
  contentWrapper: {
    display: ["block", null, null, null, "grid", "flex"],
    gridTemplateColumns: ["1fr 1fr", null, null, null, "0.9fr 1.1fr"],
    gap: [0, 0, 0, 0, 40],
    //alignItems: "center",
    minHeight: [null, null, "120vh", "50vh", "50vh", "120vh"],
    pt: ["150px", null, null, "70px", "150px", null, "250px"],
    textAlign: ["center", null, "left"],
  },
  content: {
    gridTemplateColumns: ["1fr 1fr", null, null, null, "0.9fr 1.1fr"],
    maxWidth: [null, null, null, "70%", "70%"],
    margin: [null, null, null, "0 auto", "0 auto"],
    textAlign: [null, null, null, "center", "center"],
    h1: {
      maxWidth: [null, null, null, "100%", "100%"],
      background:
        "linear-gradient(90deg, #00F0FF 26.23%, #5773FF 44.79%, #FF007A 71.57%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent",
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: ["34px", "34px", "34px", "34px", "34px", "34px", "34px"],
      lineHeight: [1.26, 1.26, 1.11, 1.4, 2],
    },
    p1: {
      maxWidth: ["100%", null, null, "none", "100%"],
      fontSize: ["14px", null, "18px", 17, "16px", "15px", "18px"],
      lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
      mt: ["25px", null, null, null, 4],
      color: "#EEF2FF",
      fontFamily: "Poppins",
    },
    h2: {
      mt: ["50px", null, null, null, "150px"],
      maxWidth: [null, null, null, "100%", "100%"],
      color: "black",
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: ["34px", "34px", "34px", "44px", "34px", "40px", "34px"],
      lineHeight: [1.26, 1, 1, 1.2, 1.6],
    },
    p2: {
      mt: ["150px", null, null, "140px", "140px"],
      maxWidth: ["100%", null, null, "none", "100%"],
      fontSize: ["14px", null, "18px", 17, "16px", "15px", "18px"],
      lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
      color: "black",
      fontFamily: "Poppins",
    },
    buttonCss: {
      mt: "150px",
      minWidth: ["100%", null, null, "none", "100%"],
    },
    button: {
      mt: "120px",
      fontFamily: "Poppins",
      fontSize: ["14px", "14px", "16px"],
      background: "linear-gradient(105.33deg, #12B9F7 12.57%, #3F71F8 71.15%)",
    },
    img: {
      pt: "100px",
    },
  },
};
