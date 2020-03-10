// import React from "react";
// import App, { Container } from "next/app";
// import "../assets/sass/style.scss";
// import Page from "../components/Page";

// export default class MyApp extends App {
//   static async getInitialProps({ Component, router, ctx }) {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }

//   render() {
//     const { Component, pageProps } = this.props;

//     return (
//       <Container>
//         <Page>
//           <Component {...pageProps} />
//         </Page>
//       </Container>
//     );
//   }
// }

// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
