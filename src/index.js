import  = "firebase-config.js";

const q = query(collection(db, "movies"));

const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  console.log(doc.id);

  console.table(doc.data());
});

