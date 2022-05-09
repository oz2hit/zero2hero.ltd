/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from "react";
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logoBlack from "assets/images/logoBlack.png";

export default function LogoMobile({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={logoBlack} alt="zero2hero" />
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
