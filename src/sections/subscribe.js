/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Button,
  Flex,
  Label,
  Text,
  Heading,
} from "theme-ui";
import Input from "components/input";
import illustration from "assets/images/subscribe-bg.png";

const subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted.");
  };

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Heading sx={styles.h1}>Newsletter</Heading>
          <Box sx={styles.content}>
            <Text sx={styles.text}>
              Be the first one to know about discounts, offers and events weekly
              in your mailbox. Unsubscribe whenever you like with one click.
            </Text>
            <Box as="form" sx={styles.subscribe} onSubmit={handleSubmit}>
              <Flex sx={styles.formGroup}>
                <Label htmlFor="email" variant="styles.srOnly">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="email-input"
                  placeholder="Enter Email address"
                />
                <Button>Subscribe</Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default subscribe;

const styles = {
  section: {
    background: `url(${illustration}) no-repeat`,
    backgroundSize: "cover",
    mb: "0px",
  },
  contentWrapper: {
    "::before": {
      borderRadius: "10px",
    },
    background: "#1D2758",
    p: [30, 40, null, "40px 100px", "50px 80px", "40px"],
    gap: "50px",
    display: ["block", "block", "grid", "block", "grid"],
    alignItems: "center",
    textAlign: "center",
    background: "rgba(29, 29, 88, 0.5)",
    backdropFilter: "blur(2px)",
    border: "2px solid #fff",
    borderImage:"repeating-linear-gradient(90deg, #00F0FF 0%, #5773FF 46.87%, #FF007A 100%) 10",
    webkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    webkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
  content: {
    display: ["block", "block", "grid", "block", "grid"],
    alignItems: "center",
    gridTemplateColumns: ["repeat(2, 1fr)"],
    textAlign: "left",
  },
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
    fontSize: ["34px", "34px", "34px", "44px", "34px", "49px", "34px"],
    lineHeight: [1.26, 1.26, 1.11, 1.4, 2],
  },
  subscribe: {
    ".email-input": {
      mr: [0, null, null, "15px"],
      minHeight: ["50px", "50px", "60px"],
      border: "2px solid #fff",
      borderRadius: "3px",
      borderImage:
        "repeating-linear-gradient(90deg, #00F0FF 0%, #5773FF 46.87%, #FF007A 100%) 10",
      background: "#18225a",
      color: "#fff",
      fontFamily: "Poppins",
      WebkitMask:
        "linear-gradient(#fff 1px 1px) content-box, linear-gradient(#fff 1px 1px)",
      "&::placeholder": {
        color: "#fff",
      },
    },
    button: {
      mt: "10px",
      textAlign: "right",
      color: "white",
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "14px",
      minHeight: ["50px", "50px", "60px"],
      fontSize: ["14px", "14px", "16px"],
      mt: ["15px", null, null, 0],
    },
  },
  formGroup: {
    flexDirection: ["column", null, null, "row"],
  },
  text: {
    fontSize: ["14px", null, "16px", 17, "16px", "15px", "16px"],
    color: "#fff",
    fontFamily: "Poppins",
    fontWeight: "300",
  },
};
