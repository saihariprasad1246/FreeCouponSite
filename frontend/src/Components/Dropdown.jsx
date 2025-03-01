import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu({setSearch}) {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Business", url: "/Business" },
        { name: "Design", url: "/Design" },
        { name: "Development", url: "/Development" },
        { name: "Finance & Accounting", url: "/Finance & Accounting" },
        { name: "Health & Fitness", url: "/Health & Fitness" },
        { name: "IT & Software", url: "/IT & Software" },
        { name: "Lifestyle", url: "/Lifestyle" },
        { name: "Marketing", url: "/Marketing" },
        { name: "Music", url: "/Music" },
        { name: "Office Productivity", url: "/Office Productivity" },
        { name: "Personal Development", url: "/Personal-Development" },
        { name: "Photography & Video", url: "/Photography & Video" },
        { name: "Teaching & Academics", url: "/Teaching & Academics" }
    ];
    

    return (
        <div className="relative inline-block text-center  transition-all duration-300">
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                Categories
            </button>
            {isOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg right-0.5">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={`/category${link.url}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
