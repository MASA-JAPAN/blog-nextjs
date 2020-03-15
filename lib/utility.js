import { firestore } from "./db";

function fetchCollectionDocs(collectionName) {
  let data = [];
  console.log("aaaa");
  return new Promise((resolve, reject) => {
    firestore
      .collection(collectionName)
      .get()
      .then(documentSet => {
        if (documentSet != null) {
          documentSet.forEach(doc => {
            data.push({
              id: doc.id,
              ...doc.data()
            });
          });
          console.log(data);
        }

        resolve(data);
      });
  });
}

function fetchDocumentFromCollection({ id, collectionName }) {
  console.log("aaaa");
  return new Promise((resolve, reject) => {
    firestore
      .collection(collectionName)
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          resolve({
            id: doc.id,
            ...doc.data()
          });
        } else {
          resolve({});
        }
      });
  });
}

function fetchDocumentFromCollectionByFieldName({
  collectionName,
  fieldName,
  value
}) {
  console.log("aaaa");
  return new Promise((resolve, reject) => {
    firestore
      .collection(collectionName)
      .where(fieldName, "==", value)
      .limit(1)
      .get()
      .then(snapshot => {
        if (snapshot.docs.length === 1) {
          if (snapshot.docs[0].exists) {
            resolve({
              id: snapshot.docs[0].id,
              ...snapshot.docs[0].data()
            });
          } else {
            resolve({});
          }
        }
      });
  });
}

export {
  fetchCollectionDocs,
  fetchDocumentFromCollection,
  fetchDocumentFromCollectionByFieldName
};
