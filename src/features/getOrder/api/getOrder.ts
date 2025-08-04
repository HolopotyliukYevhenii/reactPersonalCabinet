import { doc, getDoc } from "firebase/firestore";
import { db } from "src/shared/lib/firebase/config";

export const getOrder = async (orderId: string) => {
  try {
    const ref = doc(db, "orders", orderId);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      throw new Error("Order not found");
    }

    return { id: snap.id, ...snap.data() };
  } catch (error) {
    console.error("Failed to fetch order:", error);
    throw error;
  }
};
