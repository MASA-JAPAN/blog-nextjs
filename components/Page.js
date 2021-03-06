import React, { Component } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import getConfig from "next/config";
import TheHead from "./TheHead";
import TheNav from "./TheNav";
import TheFooter from "./TheFooter";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

console.log(serverRuntimeConfig);
console.log(publicRuntimeConfig);

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  console.log("onRouteChangeStart");
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  console.log("onRouteChangeComplete");
  NProgress.done();
};

Router.onRouteChangeError = () => {
  console.log("onRouteChangeError");
  NProgress.done();
};

class Page extends Component {
  render() {
    return (
      <div>
        <TheHead />
        <TheNav />
        <main className="container">{this.props.children}</main>
        <TheFooter />
      </div>
    );
  }
}

export default Page;
