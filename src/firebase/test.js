import firebase from "firebase/app";
import "firebase/firebase";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("ROzseLXrBQg8xjMlMLlN")
  .collection("cartItems")
  .doc("CDfR1ItvapUafDKhMm4L");
firestore.doc("/users/ROzseLXrBQg8xjMlMLlN/cartItems/CDfR1ItvapUafDKhMm4L");
firestore.collection("/users/ROzseLXrBQg8xjMlMLlN/cartItems");
