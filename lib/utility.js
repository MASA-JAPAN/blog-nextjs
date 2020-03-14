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

export { fetchCollectionDocs, fetchDocumentFromCollection };
