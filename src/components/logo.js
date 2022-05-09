/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from "react";
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logoWhite from "assets/images/logoWhite.png";
import logoBlack from "assets/images/logoBlack.png";

export default function Logo({ isSticky, footer, ...props }) {
  
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={offset > 0 ? logoBlack : logoWhite} alt="zero2hero" />
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
