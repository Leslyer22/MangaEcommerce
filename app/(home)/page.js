/*"use client"
//boton para agregar mangas en firebase
import migrateMangas from "@/actions/migrateMangas";
function HomePage(){
  return(
    <button onClick={migrateMangas}>Haz clic!</button>
  );
}
export default HomePage; */ 

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-600 to-purple-800 text-white">
      <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a la Tienda de Mangas</h1>
        <p className="text-lg md:text-xl">Descubre los mejores mangas y sumérgete en nuevas aventuras.</p>
        
      </div>
    </div>
  );
}

export default HomePage;


