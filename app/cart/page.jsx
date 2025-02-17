"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [confirming, setConfirming] = useState(false);

  if (cart.length === 0) {
    return <p className="text-center text-gray-600">El carrito está vacío.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-violet-600 mb-4">Carrito de Compras</h1>
      <div className="grid gap-4">
        {cart.map((manga) => (
          <div key={manga.id} className="border p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{manga.nombre}</p>
              <p className="text-sm text-gray-600">{manga.precio}</p>
            </div>
            <button
              onClick={() => removeFromCart(manga.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => setConfirming(true)}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition"
      >
        Finalizar Compra
      </button>

      {confirming && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-lg">¿Confirmar compra?</p>
            <div className="flex justify-around mt-4">
              <button
                onClick={() => {
                  clearCart();
                  setConfirming(false);
                  alert("¡Compra confirmada! Gracias por tu compra.");
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
              >
                Sí, confirmar
              </button>
              <button
                onClick={() => setConfirming(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
