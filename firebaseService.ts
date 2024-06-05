import { collection,  getFirestore, onSnapshot } from "firebase/firestore";
import { app } from "./firebase";

 export const getData =   () => {
    try {
        const db = getFirestore(app)
        const res = onSnapshot(collection(db as any, "data"), (snap:any)=>  {
            let data = snap.docs.map((doc:any) => {
              return {id: doc.id, ...doc.data()}
            });
            return data
        })
    } catch (error) {
      console.error('Error getting data:', error);
      throw error;
    }
  };
