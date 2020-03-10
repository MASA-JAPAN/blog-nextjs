import React, { Component } from "react";
import TheHead from "./TheHead";
import TheNav from "./TheNav";

class Page extends Component {
  render() {
    return (
      <div>
        <TheHead />
        <TheNav />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Page;
