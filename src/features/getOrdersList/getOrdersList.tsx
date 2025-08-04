import { db } from "src/shared/lib/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export interface Order {
  subscriptionId?: string;
  customerId?: string;
  planName?: string;
  priceEUR?: number;
  currency?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  paymentMethodId?: string;
  createdAt?: string;
}

export const getOrdersList = async (): Promise<Order[]> => {
  try {
    const snapshot = await getDocs(collection(db, "orders"));

    const orders: Order[] = snapshot.docs.map((doc) => {
      const data = doc.data();

      const toIso = (field: any) => {
        return field?.seconds ? new Date(field.seconds * 1000).toISOString() : undefined;
      };

      const order: Order = {
        subscriptionId: data.object.id,
        customerId: data.customerId ?? undefined,
        planName: data.object.items[0].data.object ?? undefined,
        priceEUR: data.priceEUR ?? undefined,
        currency: data.currency ?? undefined,
        startDate: toIso(data.startDate),
        endDate: toIso(data.endDate),
        status: data.status ?? undefined,
        paymentMethodId: data.paymentMethodId ?? undefined,
        createdAt: toIso(data.createdAt),
      };

      console.log("Order:", order);
      return order;
    });

    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
};
