import Head from "next/head";
const SEO = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="OYO Rooms (stylised as OYO), also known as OYO Hotels & Homes, is an Indian multinational hospitality chain of leased and franchised hotels, homes, and living spaces."
        key="desc"
      />
      <meta
        property="og:title"
        content="Founded in 2012 by Ritesh Agarwal, OYO initially consisted mainly of budget hotels."
      />
      <meta
        property="og:description"
        content="Founded in 2012 by Ritesh Agarwal, OYO initially consisted mainly of budget hotels."
      />
      <meta
        property="og:image"
        content="https://example.com/images/cool-page.jpg"
      />
    </Head>
  );
};

export default SEO;
