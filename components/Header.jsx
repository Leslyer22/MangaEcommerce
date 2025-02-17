import Link from "next/link"
import {ShoppingCart,LogIn} from 'lucide-react';

function Header() {
    return (
        <div>
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
                <Link href="/" >
                    <h1 className="text-xl font-bold text-purple-700">MangaXP</h1>
                </Link>

                <nav className="flex space-x-4 ">
                    <Link href="/" >
                        <button className="text-purple-600  hover:text-purple-800 transition">Home</button>
                    </Link>
                    <Link href="/mangas" >
                        <button className="text-purple-600  hover:text-purple-800 transition">Mangas</button>
                    </Link>
                    <Link href="/cart" passHref>
                        <ShoppingCart size={20} color="#9333EA" strokeWidth={2} />
                    </Link>
                    <Link href="/" passHref>
                        <LogIn size={20} color="#9333EA" />
                    </Link>

                    
                    <Link href="/" passHref>
                        <button className="text-purple-600 font-semibold hover:text-purple-800 transition"></button>
                    </Link>
                    <Link href="/" passHref>
                        <button className="text-purple-600 font-semibold hover:text-purple-800 transition"></button>
                    </Link>
                    <Link href="/" passHref>
                        <button className="text-purple-600 font-semibold hover:text-purple-800 transition"></button>
                    </Link>
                    <Link href="/" passHref>
                        <button className="text-purple-600 font-semibold hover:text-purple-800 transition"></button>
                    </Link>
                    <Link href="/" passHref>
                        <button className="text-purple-600 font-semibold hover:text-purple-800 transition"></button>
                    </Link>
                    <Link href="/" passHref>
                        <button className="text-purple-600 font-semibold hover:text-purple-800 transition"></button>
                    </Link>
                </nav>
            </header>
        </div>
    );
}

export default Header;