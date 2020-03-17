import React, { Component, Fragment } from "react";
import { firestore } from "../lib/db";

export default class BlogCreate extends Component {
  ipt = React.createRef();

  save = () => {
    const newBlog = {
      titile: this.ipt.current.value
    };
    console.log(newBlog);
    firestore.collection("blog").add(newBlog);
  };

  render() {
    return (
      <Fragment>
        create a blog
        <input ref={this.ipt} />
        <button onClick={this.save}>aaaa</button>
      </Fragment>
    );
  }
}
