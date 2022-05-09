/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import { rgba } from "polished";

const FooterWidget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h4">{title}</Heading>
      <ul>
        {items.map(({ path, label, icon }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            <Link path={path} key={i} label={label} variant="footer" />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FooterWidget;

const styles = {
  footerWidget: {
    h4: {
      color: "#fff",
      fontSize: ["14px", "14px", "14px", "14px", "14px", "18px", "18px", "18px"],
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: "heading",
      background: "#1D2758",
      fontFamily: "Poppins",
      textTransform: "uppercase",
    },
    ul: {
      listStyle: "none",
      margin: "20px 0 0",
      padding: 0,
      li: {
        display: "flex",
        alignItems: "center",
        img: {
          mr: "15px",
        },
      },
      a: {
        color: "#fff",
      },
    },
  },
};
