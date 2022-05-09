/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Image, Text } from "theme-ui";
import Slider from "react-slick";
import backgroundImg from "assets/images/bgunion.png"
import partner1 from "assets/images/partners/partner1.png";
import partner2 from "assets/images/partners/partner2.png";
import partner3 from "assets/images/partners/partner3.png";
import partner4 from "assets/images/partners/partner4.png";

const OurPartners = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box as="section" id="ourpartners" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">Our Partners</Heading>
            <Text as="text">
              We work with the most trusted organizations for your personal data
            </Text>
            <Slider {...settings}>
              <Box sx={styles.content.slider.imageBox}>
                <Image sx={styles.content.slider.img} src={partner1}></Image>
              </Box>
              <Box sx={styles.content.slider.imageBox}>
                <Image sx={styles.content.slider.img} src={partner2}></Image>
              </Box>
              <Box sx={styles.content.slider.imageBox}>
                <Image sx={styles.content.slider.img} src={partner3}></Image>
              </Box>
              <Box sx={styles.content.slider.imageBox}>
                <Image sx={styles.content.slider.img} src={partner4}></Image>
              </Box>
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurPartners;

const styles = {
  section: {
    maxWidth: ["100%", null, null,  null, "100%", null, "100%", "100%"],
    background: [
      `url(${backgroundImg}) repeat center top`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center top / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center top / cover`,
    ],
    backgroundSize: ["100% 100%", null, null,  null, null,  null, "100% 100%", null],
    pt: ["50px", null, null, "70px", "45px", "30px", "20px", "10px"],
    mt: ["50px", null, null, "70px", "35px", "30px", "10px", "10px"],
    pb: ["0px", null, null, "70px", "65px", "30px", "20px", "10px"],
    mb: ["50px", null, null, "70px", "25px", "10px", "10px", "10px"],
  },
  contentWrapper: {
    display: ["block", null, null, null, "grid", "flex"],
    gridTemplateColumns: ["1fr 1fr", null, null, null, "0.9fr 1.1fr"],
    gap: [0, 0, 0, 0, 40],
    //alignItems: "center",
    minHeight: [null, null, "120vh", "50vh", "50vh", "60vh"],
    pt: ["50px", null, null, "70px", "25px", null, "100px"],
    textAlign: ["center", null, "left"],
  },
  content: {
    minWidth: [null, null, null, "100%", "100%"],
    margin: [null, null, null, "0 auto", "0 auto"],
    textAlign: [null, null, null, "center", "center"],
    h1: {
      minWidth: [null, null, null, "100%", "100%"],
      background:
        "linear-gradient(90deg, #00F0FF 26.23%, #5773FF 44.79%, #FF007A 71.57%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent",
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: ["34px", "34px", "34px", "34px", "40px", "40px", "40px"],
      lineHeight: [1.26, 1.26, 1.11, 1.4, 2],
      pb: ["50px", null, null, "70px", "25px", null, "60px"],
    },
    text: {
      minWidth: [null, null, null, "100%", "100%"],
      display: ["grid", null, null, null, "grid", "grid"],
      textAlign: "Center",
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "16px"],
      lineHeight: [1.5, 1.5, 1.5, 1.5, 1.5],
      color: "#fff",
      fontFamily: "Poppins",
      pb: ["10px", null, null, "10px", "10px", null, "100px"],
      letterSpacing: "0.1em",
      fontWeight: "300",
    },
    slider: {
      minWidth: [null, null, null, "100%", "100%"],
      textAlign: "Center",
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "16px"],
      color: "#fff",
      fontFamily: "Poppins",
      fontWeight: "300",
      margin: "0 auto",
      imageBox: {
        maxWidth: [null, null, null, "95%", "95%"],
        fontFamily: "Poppins",
        paddingTop: "20px",
        paddingBottom: "20px",
        textAlign: "center",
        textAlign: "-moz-center",
        textAlign: "-webkit-center",
        border: "2px solid #fff",
        borderImage:
          "repeating-linear-gradient(90deg, #00F0FF 0%, #5773FF 46.87%, #FF007A 100%) 10",
        height: "130px",
      },
      img : {
        position: "relative",
        top: "20px",
      }
    },
  },
};
