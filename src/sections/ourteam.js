/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Image, Text, Grid } from "theme-ui";
import Slider from "react-slick";
import backgroundImg from "assets/images/bgunion.png"
import facebookIcon from "assets/images/icons/facebook.png";
import twitterIcon from "assets/images/icons/twitter.png";
import linkednIcon from "assets/images/icons/linkedn.png";
import image1 from "assets/images/teams/image1.jpg";
import image2 from "assets/images/teams/image2.jpg";
import image3 from "assets/images/teams/image3.jpg";
import image4 from "assets/images/teams/image4.jpg";

const OurTeam = () => {
  const data = [
    {
      id: 1,
      img: "assets/images/teams/image2.png",
      name: "Person 1",
      title: "Title Name",
    },
    {
      id: 2,
      img: "assets/images/teams/image3.png",
      name: "Person 2",
      title: "Title Name",
    },
    {
      id: 3,
      img: "assets/images/teams/image4.png",
      name: "Person 3",
      title: "Title Name",
    },
    {
      id: 4,
      img: "assets/images/teams/image2.png",
      name: "Person 4",
      title: "Title Name",
    },
    {
      id: 5,
      img: "assets/images/teams/image3.png",
      name: "Person 5",
      title: "Title Name",
    },
    {
      id: 6,
      img: "assets/images/teams/image4.png",
      name: "Person 6",
      title: "Title Name",
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <Box as="section" id="ourteam" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">Our Team</Heading>
            <Text as="text">founding staff</Text>
            <Grid gap={5} columns={[1, "3fr 4fr"]} as="grid">
              <Box>
                <Image src={image1}></Image>
              </Box>
              <Box>
                <Text as="name">Ahmet Selçuk Özyurt</Text>
                <Text as="title">CEO & Founder</Text>
                <Text as="bio">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pretium interdum enim mauris, proin mauris. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                  <br />
                  <br />
                  Lorem ipsum dLorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Pretium interdum enim mauris, proin mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Box as="box">
                  <Image src={facebookIcon}></Image>
                </Box>
                <Box as="box">
                  <Image src={twitterIcon}></Image>
                </Box>
                <Box as="box">
                  <Image src={linkednIcon}></Image>
                </Box>
              </Box>
            </Grid>
            <Slider {...settings}>
              <Box as="person">
                <Image as="img" src={image2}></Image>
                <Box sx={styles.content.person.personInfo}>
                  <Box>Name1 Surname1</Box>
                  <Box>Title</Box>
                </Box>
              </Box>
              <Box as="person">
                <Image as="Img" src={image3}></Image>
                <Box sx={styles.content.person.personInfo}>
                  <Box>Name2 Surname2</Box>
                  <Box>Title</Box>
                </Box>
              </Box>
              <Box as="person">
                <Image as="Img" src={image4}></Image>
                <Box sx={styles.content.person.personInfo}>
                  <Box>Name3 Surname3</Box>
                  <Box>Title</Box>
                </Box>
              </Box>
              <Box as="person">
                <Image as="img" src={image2}></Image>
                <Box sx={styles.content.person.personInfo}>
                  <Box>Name4 Surname4</Box>
                  <Box>Title</Box>
                </Box>
              </Box>
              <Box as="person">
                <Image as="Img" src={image3}></Image>
                <Box sx={styles.content.person.personInfo}>
                  <Box>Name5 Surname5</Box>
                  <Box>Title</Box>
                </Box>
              </Box>
              <Box as="person">
                <Image as="Img" src={image4}></Image>
                <Box sx={styles.content.person.personInfo}>
                  <Box>Name6 Surname6</Box>
                  <Box>Title</Box>
                </Box>
              </Box>
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    maxWidth: ["100%", null, null,  null, "100%", null, "100%", "100%"],
    background: [
      `url(${backgroundImg}) repeat center top`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat 80% top / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
      `url(${backgroundImg}) no-repeat center center / cover`,
    ],
    backgroundSize: ["100%", null, null,  null, null, null, null, null],
    pt: ["50px", null, null, "70px", "25px", null, "80px"],
    pb: ["10px", null, null, "70px", "45px", null, "100px"],
    mt: ["10px", null, null, "70px", "25px", null, "80px"],
    mb: ["50px", null, null, "70px", "25px", null, "100px"],
  },
  contentWrapper: {
    display: ["block", null, null, null, "grid", "flex"],
    gridTemplateColumns: ["1fr 1fr", null, null, null, "0.9fr 1.1fr"],
    gap: [0, 0, 0, 0, 40],
    //alignItems: "center",
    minHeight: [null, null, "120vh", "50vh", "50vh", "100vh"],
    pt: ["50px", null, null, "70px", "25px", null, "100px"],
    textAlign: ["center", null, "left"],
  },
  content: {
    minWidth: [null, null, null, "80%", "80%"],
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
      pb: ["50px", null, null, "70px", "25px", null, "100px"],
    },
    text: {
      display: ["grid", null, null, null, "grid", "grid"],
      textAlign: "Left",
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "16px"],
      lineHeight: [1.5, 1.5, 1.5, 1.5, 1.5],
      color: "#08FFE1",
      fontFamily: "Poppins",
      pb: ["10px", null, null, "10px", "10px", null, "10px"],
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      fontWeight: "300",
    },
    grid: {
      pb: ["50px", null, null, "70px", "25px", null, "100px"],
      textAlign: "Left",
    },
    name: {
      textAlign: "Left",
      display: ["grid", null, null, null, "grid", "grid"],
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "32px"],
      color: "White",
      fontFamily: "Poppins",
      fontWeight: "300",
      pb: ["10px", null, null, "10px", "10px", null, "5px"],
    },
    title: {
      textAlign: "Left",
      display: ["grid", null, null, null, "grid", "grid"],
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "25px"],
      color: "White",
      fontFamily: "Poppins",
      fontWeight: "300",
      pb: ["10px", null, null, "10px", "10px", null, "10px"],
    },
    bio: {
      textAlign: "Left",
      display: ["grid", null, null, null, "grid", "grid"],
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "14px"],
      color: "White",
      fontFamily: "Poppins",
      fontWeight: "200",
      pb: ["10px", null, null, "10px", "10px", null, "10px"],
      minHeight: [null, null, "120vh", "50vh", "50vh", "27vh"],
    },
    box: {
      mr: "50px",
      gridTemplateColumns: [
        "1fr 1fr 1fr",
        null,
        null,
        "1fr 1fr 1fr",
        "1fr 1fr 1fr",
      ],
    },
    slider: {
      minWidth: [null, null, null, "100%", "100%"],
      textAlign: "Center",
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "16px"],
      color: "#fff",
      fontFamily: "Poppins",
      fontWeight: "300",
    },
    person: {
      minWidth: [null, null, null, "100%", "100%"],
      textAlign: "Center",
      pb: ["10px", null, null, "10px", "10px", null, "50px"],
      img: {
        maxWidth: [null, null, null, "100%", "100%"],
        padding: "10px",
      },
      personInfo: {
        background: "white",
        width: "90%",
        height: "100%",
        fontFamily: "Poppins",
        fontWeight: "300",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginLeft: "20px",
        position: "relative",
        top: "-30px",
        borderTop: "5px solid #fff",
        borderImage: "repeating-linear-gradient(90deg, #00F0FF 0%, #5773FF 46.87%, #FF007A 100%) 10",
      },
    },
  },
};

/*
<Slider {...settings}>
  {data?.map((item) => (
    <Box as="person">
      <Image src={item.img}></Image>
    </Box>
  ))}
</Slider>
*/
