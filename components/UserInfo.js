import React, { Component, Fragment } from "react";
import { fetchDocumentFromCollection } from "../lib/utility";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetchDocumentFromCollection({
      id: this.props.userId,
      collectionName: "users"
    }).then(user => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <Fragment>
        <span>{this.state.user.name}</span>
      </Fragment>
    );
  }
}
