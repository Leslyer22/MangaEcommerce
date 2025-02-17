"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import  getMangaById  from "@/actions/getMangaById";

const MangaDetailPage = () => {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchManga = async () => {
        const data = await getMangaById(id);
        setManga(data);
        setLoading(false);
      };

      fetchManga();
    }
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!manga) return <p>Manga não encontrado.</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-96 w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={manga.imagen}
            alt={manga.nombre}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-3xl font-bold text-violet-600 mb-4">
            {manga.nombre}
          </h1>
          <p className="text-xl font-semibold text-violet-600 mb-4">
            {manga.precio}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Autor:</strong> {manga.autor}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Categoría:</strong> {manga.categoria}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Clasificación:</strong> {manga.clasificacion}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Descripción:</strong> {manga.descripcion}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Fecha de estreno:</strong> {manga.fecha_estreno}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Páginas:</strong> {manga.paginas}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Volumen:</strong> {manga.volumen}
          </p>
          <button
            onClick={() => {
              /* Adicionar lógica do carrinho aqui */
            }}
            className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-500 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default MangaDetailPage;
