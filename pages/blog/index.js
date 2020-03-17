import React, { Component, Fragment } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { fetchDocumentFromCollectionByFieldName } from "../../lib/utility";
import DateFormatter from "../../components/DateFormatter";

class Blog extends Component {
  state = {
    blog: null
  };

  componentDidMount() {
    fetchDocumentFromCollectionByFieldName({
      collectionName: "blog",
      fieldName: "slug",
      value: this.props.router.query.slug
    }).then(blog => {
      this.setState({ blog });
    });
  }

  render() {
    if (this.state.blog === null) {
      return <div>Not found</div>;
    }

    const { title, userId, intro, content, createdAt } = this.state.blog;

    return (
      <Fragment>
        <h1>blogpage</h1>
        <h1>{this.props.router.query.slug}</h1>
        <h1>{this.state.blog.title}</h1>
      </Fragment>
    );
  }
}

export default withRouter(Blog);
