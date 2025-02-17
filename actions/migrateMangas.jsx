
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import mangas  from "@/assets/mangas";

//funcion para agregar mangas en firebase

    async function migrateMangas() {
    const mangasRef = collection(db, "mangas");

    mangas.forEach((manga) => {
        addDoc(mangasRef, manga)
            .then(() => {
                console.log("Produto agregado ", manga.id); 
            })
            .catch((error) => {
                console.error("Erro ao adicionar manga:", error);
            });
    });
}

export default migrateMangas;




