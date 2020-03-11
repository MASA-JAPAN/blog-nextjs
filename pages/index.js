import firebase from "../lib/db";

firebase
  .firestore()
  .collection("blogs")
  .get();

export default () => (
  <div>
    <div className="testingDev has-background-success">Hello</div>
    <style jsx>
      {`
        img {
          height: 500px;
        }
      `}
    </style>
  </div>
);
