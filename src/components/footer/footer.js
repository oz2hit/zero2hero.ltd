/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container, Image, Grid } from "theme-ui";
import LogoBottom from "components/logobottom";
import { Link } from "components/link";
import FooterWidget from "components/footer-widget";
import { menuItems } from "./footer.data";
import appstore from "assets/images/icons/appstore.png";
import playstore from "assets/images/icons/playstore.png";

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer} variant="layout.footer">
      <Container>
        <Box sx={styles.footerTopInner}>
          <Box sx={styles.about}>
            <Box sx={styles.logo}>
              <LogoBottom />
              <Text sx={styles.logo.text}>
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat...
                <br />
                <Link path="#!" sx={styles.logo.link}>
                  Read More
                </Link>
              </Text>
              <Grid
                gap={5}
                columns={[
                  "1fr 1fr",
                  null,
                  null,
                  null,
                  null,
                  "1.2fr 1.8fr",
                  "1fr 2fr",
                  "1fr 2fr",
                ]}
                as="grid"
              >
                <Box sx={styles.logo.imgstoreboxapp}>
                  <Image sx={styles.logo.imgstore} src={appstore}></Image>
                </Box>
                <Box sx={styles.logo.imgstoreboxplay}>
                  <Image sx={styles.imgstore} src={playstore}></Image>
                </Box>
              </Grid>
            </Box>
          </Box>
          {menuItems.map(({ id, title, items }) => (
            <FooterWidget key={id} title={title} items={items} />
          ))}
        </Box>
        <Box sx={styles.terms}>
          <Box sx={styles.terms.text}>
            <Link path="#!">Privacy Policy</Link>
            <Text as="span"></Text>
            <Link path="#!">Terms of Use</Link>
            <Text as="span"></Text>
            <Link path="#!">Sales and Refunds</Link>
            <Text as="span"></Text>
            <Link path="#!">Legal</Link>
          </Box>
          <Box as="p" sx={styles.copyright}>
            <Text as="p">
              © {new Date().getFullYear()}, zero2hero All Rights Reserved
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    background: "#1D2758",
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: ["14px", "14px", "14px", "14px", "14px", "14px", "14px", "14px"],
    
  },
  footerTopInner: {
    gap: [30, 30, 50, "20px 50px", 17, 50],
    width: ["100%", null, null, null, null, "100%", "100%", "100%"],
    display: ["grid"],
    gridTemplateColumns: [
      "repeat(3, 3fr)",
      "repeat(3, 3fr)",
      "repeat(3, 2fr)",
      "3fr 1fr 1fr 1fr",
      "3fr 1fr 1fr 1fr",
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ["block", "block", "flex"],
    alignItems: "center",
    justifyContent: "space-between",
    padding: "35px 0 40px",
  },
  about: {
    gridRow: ["3/4", "3/4", "1/1", "3/4", "unset", "unset", "unset", "unset"],
    gridColumn: [
      "1/4",
      "1/3",
      "1/2",
      "1/4",
      "unset",
      "unset",
      "unset",
      "unset",
    ],
  },
  logo: {
    textAlign: ["center", "center", "left", "left"],
    fontFamily: "Poppins",
    fontSize: ["12px", "12px", "12px", "12px", "12px", "12px", "12px"],
    color: "#fff",
    imgstoreboxapp: {
      mt: "30px",
      textAlign: ["left", "center", "left", "left", "left", "left", "left", "left"],
    },
    imgstoreboxplay: {
      mt: "30px",
      textAlign: ["right", "center", "left", "left", "left", "left", "left", "left"],
    },
    link: {
      fontWeight: "500",
      color: "#42b7f0",
    },
    text: {
      textAlign: [
        "left",
        "left",
        "left",
        "left",
        "left",
        "left",
        "left",
        "left",
      ],
    },
  },
  terms: {
    width: ["100%", null, null, null, null, "100%", "100%", "100%"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
    ],
    borderTop: "1px solid #fff",
    display: [null, null, null, null, null, "flex", "flex", "flex"],
    alignItems: [
      "center",
      "center",
      "center",
      "center",
      "flex-start",
      "center",
    ],
    flexDirection: ["row", "row", "row", "row", "column", "row"],
    justifyContent: [
      "center",
      "center",
      "flex-start",
      "center",
      "center",
      "flex-start",
    ],
    mt: [4],
    a: {
      color: "#fff",
    },
    span: {
      display: [
        "inline-flex",
        "inline-flex",
        "inline-flex",
        "inline-flex",
        "none",
        "inline-flex",
      ],
      m: ["0 5px", null, null, null, null, "0 10px", "0 10px","0 10px"],
    },
    text: {
      mt: [3],
      width: ["100%", null, null, null, null, "50%", "50%", "50%"],
      fontWeight: "300",
      fontSize: ["12px"],
      textAlign: ["center", "center", "right", "right", "right", "left", "left", "left"],
    },
    width: ["100%", null, null, null, null, "100%", "100%", "100%"],
  },
  copyright: {
    width: ["100%", null, null, null, null, "100%", "100%", "100%"],
    color: "#fff",
    fontSize: ["12px"],
    fontWeight: "300",
    mt: [3],
    textAlign: ["center", "center", "right", "right", "right", "right", "right", "right"],
  },
};
