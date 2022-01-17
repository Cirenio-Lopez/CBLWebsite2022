import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="icon" href="/logo.ico" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/aec5onl.css"
          ></link>
        </Head>
        <body className="antialiased text-black bg-bgBlue dark:text-white bg-gradient-to-r from-bgBlue via-bgBlue2 to-bgBlue3">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
