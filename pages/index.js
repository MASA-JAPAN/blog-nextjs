import React, { Component } from "react";
import { firestore } from "../lib/db";
import {
  fetchCollectionDocs,
  fetchDocumentFromCollection
} from "../lib/utility";

export default class Index extends Component {
  state = {
    blogs: []
  };

  constructor(props) {
    super(props);
    this.collectionRef = firestore.collection("blog");
  }

  static async getInitialProps() {
    let blogs = [];
    await firestore
      .collection("blog")
      .get()
      .then(documentSet => {
        documentSet.forEach(doc => {
          blogs.push({
            id: doc.id,
            ...doc.data()
          });
        });
        console.log(blogs);

        return blogs;
      });
    return { blogs };
  }

  blogListener = () => {
    fetchCollectionDocs("blog").then(blogs => {
      this.setState({ blogs });
    });
  };

  componentDidMount() {
    this.unsubscribe = this.collectionRef.onSnapshot(
      this.blogListener,
      error => {
        console.log(error);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const thisBlog = fetchDocumentFromCollection({
      id: "VRlHKM7BN9mtFm7lNDuu",
      collectionName: "blog"
    });
    console.log(thisBlog);

    return (
      <div>
        <div className="testingDev has-background-success">Hello</div>
        <div>
          {this.state.blogs.map(blog => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </div>
      </div>
    );
  }
}
