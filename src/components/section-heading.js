/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Image } from "theme-ui";
import illustration from "assets/images/backaboutusimg.png";

const SectionHeading = ({ title, description, emoji, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      <Text as="p" sx={styles.description}>
        {description}
      </Text>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    maxWidth: "100%",
    margin: [null, null, null, null, null, "0 auto 90px", null, "0 auto 60px", "0 auto 60px"],
    background: `url(${illustration})`,
    backgroundRepeat: "no-repeat no-repeat",
    backgroundSize: ["100% 65%", null, null, null, "contain", "contain", "contain", "contain"],
    lineHeight: [1, 1, 1],
  },
  description: {
    textAlign: "left",
    margin: "0px auto 0px 60px",
    maxWidth: ["90%", null, null, null, null, null, null, "80%"],
    fontFamily: "Poppins",
    color: "white",
    fontSize: ["14px", "14px", "16px"],
    lineHeight: [1.5, 1.5, 1.5],
    pt: ["10px", null, null, null, "80px", null, "80px", "80px"],
    pb: "120px",
  },
};
