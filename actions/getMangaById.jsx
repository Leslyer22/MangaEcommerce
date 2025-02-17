import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const getMangaById = async (id) => {
  if (!id) return null;

  try {
    const docRef = doc(db, "mangas", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("Manga não encontrado.");
      return null;
    }
  } catch (error) {
    console.error("Erro ao obter o manga:", error);
    return null;
  }
};


export default getMangaById;