import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Aboutus from 'sections/aboutus';
import OurTeam from 'sections/ourteam';
import OurPartners from 'sections/ourpartners';
import Faq from 'sections/faq';
import Contact from 'sections/contact';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Zero2Hero"
          description="Zero2Hero metaverse, blockcoin, crypto"
        />
        <Banner />
        <Aboutus />
        <OurTeam />
        <OurPartners />
        <Faq />
        <Contact />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
