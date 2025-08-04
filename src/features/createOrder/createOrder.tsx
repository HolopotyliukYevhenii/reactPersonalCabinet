import { db } from 'src/shared/lib/firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

/**
 * Сохраняет любой JSON-объект в коллекцию 'orders_raw'
 * @param stripePayload - исходный JSON-объект, например, от Stripe
 */
export const createOrder = async (stripePayload: any) => {
  try {
    const payloadToSave = {
      ...stripePayload,
      savedAt: Timestamp.now(), // добавить дату сохранения
    };

    const docRef = await addDoc(collection(db, 'orders'), payloadToSave);
    console.log('Raw order saved with ID:', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error saving order:', e);
    throw e;
  }
};
