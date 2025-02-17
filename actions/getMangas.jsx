import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config"; 

async function getMangas() {
  try {
    const querySnapshot = await getDocs(collection(db, "mangas"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error al obtener los mangas:", error);
    return [];
  }
}

export default getMangas;
