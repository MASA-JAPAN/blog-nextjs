import React, { Component, Fragment } from "react";
import Link from "next/link";
import { auth } from "../lib/db";

export default class TheNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }

  signOut = async () => {
    await auth.signOut();
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log("user:" + JSON.stringify(user));

      if (user) {
        this.setState({
          signedIn: true
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog/new">
          <a>New</a>
        </Link>
        <Link href="/signin">
          <a>Signin</a>
        </Link>
        <Link href="/signup">
          <a>Signup</a>
        </Link>
        <button onClick={this.signOut}>SignOut</button>
      </div>
    );
  }
}
