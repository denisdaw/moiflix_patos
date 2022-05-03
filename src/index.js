/**
 * Este ejemplo sirve para ver cómo obtener un documento en concreto haciendo
 * uso del método getDoc y firestore lite. getDoc/s trata de obtener la
 * información actualizada del servidor, aunque es posible que devuelva los
 * datos cacheados o falle si el script no puede conectarse.
 * En otros sistemas, getDocs puede aparecer como "ref"
 * @see https://firebase.google.com/docs/reference/js/firestore_lite
 */

import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
import { app } from "./firebase-config";

const db = getFirestore(app);

// --------------------------------------------------------
const movies = [];
const snap = await getDocs(collection(db, "movies"));
snap.forEach((doc) => {
  movies.push(doc.data());
});
console.log(movies);

const filmGrid = document.querySelector(".film-grid");
movies.forEach(movie => {
  const filmBox = `
  <div class="film">
    <img src="${movie.posterUrl}" alt="">
  </div>
  `;
  filmGrid.innerHTML += filmBox;
});
