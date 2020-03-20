import React, { Component } from "react";
import Head from "next/head";
import Router from "next/router";
import { auth, firebase, firestore } from "../lib/db";
import {
  fetchDocumentFromCollectionByFieldName,
  fetchDocumentFromCollection
} from "../lib/utility";

export default class signin extends Component {
  constructor(props) {
    super(props);
    auth.onAuthStateChanged(user => {
      if (user) {
        Router.push("/");
      }
    });
  }

  authenticate = provider => {
    console.log("clicked");
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    auth.signInWithPopup(authProvider).then(result => {
      console.log(result);
      const authUser = {
        uid: result.user.uid,
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL
      };
      console.log("aaa");

      this.authHandler(authUser);
    });
  };

  authHandler = authUser => {
    console.log("dsafds");

    fetchDocumentFromCollectionByFieldName({
      collectionName: "users",
      fieldName: "uid",
      value: authUser.uid
    }).then(foundUser => {
      console.log("foundUser:" + foundUser);
      console.log("fosdaf");

      if (
        foundUser.constructor === Object &&
        Object.keys(foundUser).length === 0
      ) {
        firestore
          .collection("users")
          .add(authUser)
          .then(createdUser => {
            Router.push("/");
          });
      } else {
        Router.push("/");
      }
    });
  };

  render() {
    return (
      <div>
        <span>Sign in</span>
        <button onClick={() => this.authenticate("Google")}>google</button>
      </div>
    );
  }
}
