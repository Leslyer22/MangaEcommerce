import Image from "next/image";
import getMangas from "@/actions/getMangas";
import Link from "next/link";

 async function MangasPage() {
  const mangas = await getMangas();

  return (

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-violet-600 mb-6">Mangas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mangas.map((manga) => (

          <div
            key={manga.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            
            {/* Contenedor de la imagen */}
            <div className="relative h-48 w-full">
              <Image
                src={""}
                alt={manga.nombre}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Contenedor del contenido */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-violet-600 mb-2">
                {manga.nombre}
              </h2>
              
              <p className="text-violet-600">{manga.precio}</p>
              <Link href={`/manga/${manga.id}`}>
        <button className="mt-4 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-500 transition">
          Ver más
        </button>
      </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MangasPage;
