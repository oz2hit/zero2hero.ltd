/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Image,
  Label,
  Input,
  Button,
  Textarea,
} from "theme-ui";
import Slider from "react-slick";
import backgroundImg from "assets/images/bgunion.png";
import help from "assets/images/contact/support.png";
import face from "assets/images/contact/facebook.png";
import twit from "assets/images/contact/twitter.png";
import insta from "assets/images/contact/instagram.png";

const Contact = () => {
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
          slidesToShow: 4,
          slidesToScroll: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Send Message");
  };

  return (
    <Box as="section" id="contact" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">Let’s stay connected</Heading>
            <Text as="text">
              Contacting zere2hero has never been easier. To contact us, use our
              live chat widget or
              <br />
              email and we'll get back to you as soon as possible!
            </Text>
            <Slider {...settings}>
              <Box sx={styles.content.slider.imageBox}>
                <Image sx={styles.content.slider.img} src={help}></Image>
                <Text sx={styles.content.slider.text}>live support</Text>
              </Box>
              <Box sx={styles.content.slider.imageBox}>
                <Image sx={styles.content.slider.img} src={face}></Image>
                <Text sx={styles.content.slider.text}>twitter</Text>
              </Box>
              <Box sx={styles.content.slider.imageBox}>
                <Image sx={styles.content.slider.img} src={twit}></Image>
                <Text sx={styles.content.slider.text}>facebook</Text>
              </Box>
              <Box sx={styles.content.slider.imageBox}>
                <Image sx={styles.content.slider.img} src={insta}></Image>
                <Text sx={styles.content.slider.text}>instagram</Text>
              </Box>
            </Slider>
            <Box sx={styles.content.form}>
              <Box
                as="form"
                sx={styles.content.form.formGroup}
                onSubmit={handleSubmit}
              >
                <Label htmlFor="email" sx={styles.content.form.formGroupLabel}>
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Email Address"
                  sx={styles.content.form.formGroupText}
                />
                <Label
                  htmlFor="message"
                  sx={styles.content.form.formGroupLabel}
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  type="text"
                  placeholder="Enter message"
                  rows={8}
                  sx={styles.content.form.formGroupText}
                />
                <Box sx={styles.content.form.formGroupButton}>
                  <Button sx={styles.content.form.formGroupButton}>
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

const styles = {
  section: {
    maxWidth: [null, null, null, "100%", "100%"],
    background: [
      `url(${backgroundImg}) repeat center top`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat 80% top / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center top / cover`,
    ],
    backgroundSize: ["100%", null, null,  null, null, null, null, null],
    maxWidth: [null, null, null, "100%", "100%"],
    pt: ["50px", null, null, "70px", "45px", "80px", null,  "30px"],
    pb: ["0px", null, null, "70px", "65px", null, null, null],
    mt: ["50px", null, null, "70px", "35px", "80px", "80px",  "100px"],
    mb: ["50px", null, null, "70px", "25px", "10px", "10px", null],
  },
  contentWrapper: {
    display: ["block", null, null, null, "grid", "flex"],
    gridTemplateColumns: ["1fr 1fr", null, null, null, "0.9fr 1.1fr"],
    gap: [0, 0, 0, 0, 40],
    minHeight: [null, null, "120vh", "50vh", "50vh", "50vh"],
    pt: ["50px", null, null, "70px", "25px", null, "80px"],
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
      pb: ["10px", null, null, "10px", "10px", null, "50px"],
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
        height: "130px",
      },
      img: {
        textAlign: "center",
        textAlign: "-moz-center",
        textAlign: "-webkit-center",
        width: "50%",
      },
      text: {
        minWidth: [null, null, null, "100%", "100%"],
        display: ["grid", null, null, null, "grid", "grid"],
        textAlign: "Center",
        fontSize: ["14px", null, "16px", 17, "16px", "15px", "20px"],
        lineHeight: [1.5, 1.5, 1.5, 1.5, 1.5],
        color: "#fff",
        fontFamily: "Poppins",
        fontWeight: "300",
        mt: "20px",
      },
    },
    form: {
      textAlign: "center",
      textAlign: "-moz-center",
      textAlign: "-webkit-center",
      mt: ["15px", null, null, "150px"],
      pb: ["10px", null, null, "10px", "10px", null, "50px"],
      button: {
        fontSize: ["14px", "14px", "16px"],
      },
      formGroup: {
        maxWidth: [null, null, null, "50%", "50%"],
        fontSize: ["14px", "14px", "16px"],
      },
      formGroupLabel: {
        mt: "30px",
        color: "white",
        fontFamily: "Poppins",
        fontWeight: "300",
        fontSize: "14px",
      },
      formGroupText: {
        "&::placeholder": {
          color: "#fff",
        },
        mb: "10px",
        border: "2px solid #fff",
        borderRadius: "3px",
        borderImage:
          "repeating-linear-gradient(90deg, #00F0FF 0%, #5773FF 46.87%, #FF007A 100%) 10",
        background: "#18225a",
        color: "#fff",
        fontFamily: "Poppins",
        WebkitMask:
            "linear-gradient(#fff 1px 1px) content-box, linear-gradient(#fff 1px 1px)",
      },
      formGroupButton: {
        mt: "10px",
        textAlign: "right",
        color: "white",
        fontFamily: "Poppins",
        fontWeight: "400",
        fontSize: "14px",
      },
    },
  },
};
