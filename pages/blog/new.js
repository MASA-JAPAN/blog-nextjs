import React, { Component, Fragment } from "react";
import BlogCreate from "../../components/BlogCreate";

export default class New extends Component {
  addBlog = blog => {};

  render() {
    return (
      <Fragment>
        <BlogCreate />
      </Fragment>
    );
  }
}
