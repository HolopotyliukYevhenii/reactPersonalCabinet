import { collection, addDoc } from "firebase/firestore";
import { db } from "src/shared/lib/firebase/config";
import { Order } from "./types";

export async function addOrderToFirestore(order: Order): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  } catch (error) {
    console.error("Error adding order:", error);
    throw error;
  }
}