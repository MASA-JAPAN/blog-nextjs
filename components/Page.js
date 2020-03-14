import React, { Component } from "react";
import TheHead from "./TheHead";
import TheNav from "./TheNav";
import TheFooter from "./TheFooter";

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
