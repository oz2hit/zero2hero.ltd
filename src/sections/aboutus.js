/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Image, Text, Grid } from "theme-ui";
import SectionHeading from "components/section-heading";
import backgroundImg from "assets/images/bgunion.png";
import aboutImage from "assets/images/aboutimg.png";
import aboutImage2 from "assets/images/aboutimg2.png";
import aboutIcon1 from "assets/images/icons/aboutIcon1.png";
import aboutIcon2 from "assets/images/icons/aboutIcon2.png";
import aboutIcon3 from "assets/images/icons/aboutIcon3.png";
import aboutIcon4 from "assets/images/icons/aboutIcon4.png";

const AboutUs = () => {
  return (
    <Box as="section" id="aboutus" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">About Us</Heading>
            <SectionHeading
              sx={styles.heading}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl in vel bibendum arcu fermentum pellentesque dolor lacinia. Morbi rhoncus, mattis ut neque pulvinar cursus urna. Quis amet et bibendum mattis at aliquet morbi congue mi. At nec facilisi at interdum in semper convallis. Ac tellus."
            />
            <Image src={aboutImage} sx={styles.content.imgage}></Image>
            <Text as="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius ac
              pretium, tortor, feugiat. Et augue mattis gravida ut bibendum vel
              suscipit feugiat consequat. Ac quis scelerisque diam aliquam
              suspendisse. Erat nisi, curabitur tellus condimentum urna,
              habitant aliquet quis. Amet, dolor ut lobortis mattis dui
              vestibulum. Pulvinar urna maecenas mi commodo faucibus
              pellentesque sollicitudin. Sed semper in eget sed eu diam vel
              consequat. Ante enim ullamcorper sem nibh habitasse nulla. Nunc
              justo, id pretium eget neque id interdum habitasse risus. A
              facilisi elit in volutpat. Posuere in diam ipsum massa morbi
              lectus vel, vestibulum. Pretium aliquam ultrices sit eget posuere
              porttitor.
              <br />
              <br />
              Pellentesque id sit tellus id ultrices. Consectetur dolor, arcu
              justo id odio adipiscing elit enim. Velit nisl vulputate ultrices
              fringilla. Tempor urna cras penatibus nibh. Eu aliquet at
              vestibulum duis imperdiet.
              <br />
              <br />
              Aliquam lobortis pellentesque consectetur penatibus. Nibh
              facilisis nunc elementum venenatis. Posuere nisi, hendrerit
              pulvinar at egestas vitae cras aenean phasellus. Interdum iaculis.
            </Text>
            <Grid
              gap={5}
              columns={[
                1,
                null,
                null,
                null,
                null,
                "1.4fr 1.2fr 1.4fr",
                "1.3fr 1.4fr 1.3fr",
                "1.3fr 1.4fr 1.3fr",
              ]}
              as="grid"
            >
              <Box>
                <Grid gap={1} columns={[1, "1fr"]} as="grid">
                  <Box style={styles.content.grid}>
                    <Image
                      style={styles.content.grid.image}
                      src={aboutIcon1}
                    ></Image>
                    <Text style={styles.content.grid.title}>Lorem ipsum</Text>
                    <Text style={styles.content.grid.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sit in urna in senectus mi quis dictum.
                    </Text>
                  </Box>
                  <Box style={styles.content.grid}>
                    <Image
                      style={styles.content.grid.image}
                      src={aboutIcon2}
                    ></Image>
                    <Text style={styles.content.grid.title}>Lorem ipsum</Text>
                    <Text style={styles.content.grid.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sit in urna in senectus mi quis dictum.
                    </Text>
                  </Box>
                </Grid>
              </Box>
              <Box>
                <Image src={aboutImage2}></Image>
              </Box>
              <Box>
                <Grid gap={1} columns={[1, "1fr"]} as="grid">
                  <Box style={styles.content.grid}>
                    <Image
                      style={styles.content.grid.image}
                      src={aboutIcon3}
                    ></Image>
                    <Text style={styles.content.grid.title}>Lorem ipsum</Text>
                    <Text style={styles.content.grid.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sit in urna in senectus mi quis dictum.
                    </Text>
                  </Box>
                  <Box style={styles.content.grid}>
                    <Image
                      style={styles.content.grid.image}
                      src={aboutIcon4}
                    ></Image>
                    <Text style={styles.content.grid.title}>Lorem ipsum</Text>
                    <Text style={styles.content.grid.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sit in urna in senectus mi quis dictum.
                    </Text>
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Text as="text">
              Pellentesque id sit tellus id ultrices. Consectetur dolor, arcu
              justo id odio adipiscing elit enim. Velit nisl vulputate ultrices
              fringilla. Tempor urna cras penatibus nibh. Eu aliquet at
              vestibulum duis imperdiet.
              <br />
              <br />
              Aliquam lobortis pellentesque consectetur penatibus. Nibh
              facilisis nunc elementum venenatis. Posuere nisi, hendrerit
              pulvinar at egestas vitae cras aenean phasellus. Interdum iaculis.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;

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
      `url(${backgroundImg}) no-repeat center center / cover`,
    ],
    backgroundSize: ["100%", null, null,  null, null, null, null, null],
    pt: ["50px", null, null, "70px", "45px", "120px", null],
    pb: ["0px", null, null, "70px", "65px", null, null],
    mt: ["50px", null, null, "70px", "35px", "30px", "80px"],
    mb: ["50px", null, null, "70px", "25px", "10px", "10px"],
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
    gridTemplateColumns: ["1fr 1fr", null, null, null, "1fr 1fr"],
    maxWidth: [null, null, null, null, "80%", null, "80%", "80%"],
    margin: [null, null, null, null, "0 auto", null, "0 auto", "0 auto"],
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
      fontSize: ["34px", "34px", "34px", "34px", "40px", "40px", "40px"],
      lineHeight: [1.26, 1.26, 1.11, 1.4, 2],
      pb: ["50px", null, null, "70px", "25px", null, "40px"],
    },
    p1: {
      fontSize: ["14px", null, "18px", "17px", "16px", "15px", "18px"],
      lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
      color: "#EEF2FF",
      fontFamily: "Poppins",
    },
    imgage: {
      display: ["grid", null, null, null, "grid", "grid"],
      position: "relative",
      left: ["30px", null, null, null, null, "40px", null, "40px"],
      top: ["-185px", null, null, null, null, "-200px", null, "-150px"],
      width: [ null, null, null, null, null, "91%", null, "85%"],
    },
    text: {
      display: ["grid", null, null, null, "grid", "grid"],
      textAlign: "Left",
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "16px"],
      lineHeight: [1.5, 1.5, 1.5, 1.5, 1.5],
      color: "#EEF2FF",
      fontFamily: "Poppins",
      pb: ["50px", null, null, "70px", "25px", null, "100px"],
    },
    grid: {
      pb: ["50px", null, null, "70px", "25px", null, "50px"],
      minHeight: "260px",
      margin: [null, null, null, "0 auto", "0 auto"],
      textAlign: "center",
      image: {
        paddingTop: "20px",
        paddingBottom: "20px",
      },
      title: {
        display: ["grid", null, null, null, "grid", "grid"],
        textAlign: "center",
        fontSize: ["14px", null, "16px", 17, "16px", "15px", "16px"],
        lineHeight: [1.5, 1.5, 1.5, 1.5, 1.5],
        color: "#EEF2FF",
        fontFamily: "Poppins",
      },
      desc: {
        display: ["grid", null, null, null, "grid", "grid"],
        textAlign: "left",
        fontSize: ["14px", null, "16px", 17, "16px", "15px", "16px"],
        lineHeight: [1.5, 1.5, 1.5, 1.5, 1.5],
        color: "#EEF2FF",
        fontFamily: "Poppins",
        padding: "20px",
      },
    },
  },
};
