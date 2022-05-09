/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logoWhite from "assets/images/logoWhite.png";

export default function LogoBottom({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={logoWhite} alt="zero2hero" />
    </Link>
  );
}

const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
  },
};
