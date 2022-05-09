/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button } from "theme-ui";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import backgroundImg from "assets/images/bgunion.png";

const data = [
  {
    id: 1,
    title: "ultimate Email  subscription",
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 2,
    title: "Bolt Performance",
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 3,
    title: "Secure Transaction",
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 4,
    title: "Multiple Options",
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 5,
    title: "5 Star Rating service",
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 6,
    title: "Integrated with Shopify",
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
];

const faq = () => {
  return (
    <Box as="section" id="faq" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">Frequently Asked Questions</Heading>
            <Text as="text">
              Flex is the only saas business platform that lets you run your
              business on one platform,
              <br />
              seamlessly across all digital channels.
            </Text>
            <Box sx={styles.content.accordion}>
              <Accordion sx={styles.content.accordion} allowZeroExpanded>
                {data?.map((item) => (
                  <AccordionItem key={item.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{item.title}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>{item.description}</AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
              <Text as="textq">Have any additional questions?</Text>
              <Button sx={styles.content.button}>Gett In Touch</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default faq;

const styles = {
  section: {
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
    //alignItems: "center",
    minHeight: [null, null, "500vh", "50vh", "50vh", "50vh"],
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
    accordion: {
      "&::before": {
        minWidth: ["100%", null, null, null, null, "80%", "80%", "80%"],
      },
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "16px"],
      color: "#fff",
      fontFamily: "Poppins",
      textAlign: "center",
      textAlign: "-moz-center",
      textAlign: "-webkit-center",
      pb: ["50px", null, null, "70px", "25px", null, "150px"],
    },
    textq: {
      minWidth: [null, null, null, "100%", "100%"],
      display: ["grid", null, null, null, "grid", "grid"],
      textAlign: "Center",
      fontSize: ["14px", null, "16px", 17, "16px", "15px", "60px"],
      lineHeight: [1.5, 1.5, 1.5, 1.5, 1.5],
      pt: ["10px", null, null, "10px", "10px", null, "50px"],
      color: "#fff",
      fontFamily: "Poppins",
      fontWeight: "700",
      letterSpacing: "-0.02em",
    },
    button: {
      mt: "40px",
      fontFamily: "Poppins",
      fontSize: ["14px", "14px", "16px"],
      background:
        "repeating-linear-gradient(90deg, #00F0FF 0%, #5773FF 46.87%, #FF007A 100%) 10",
      fontWeight: "300",
    },
  },
};
