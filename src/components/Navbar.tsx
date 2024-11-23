//==========
"use client";
import { useState } from "react";
import Link from "next/link";
import NavData from "@/utils/mock/NavData/NavData";
import LogoIcon from "@/utils/icons/LogoIcon";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0  text-black p-5 transition-all duration-300 h-full shadow-lg ${
                    isOpen ? "w-64" : "w-24"
                }`}
            >
                {/* Toggle Sidebar Button */}
                <button
                    className="  rounded text-3xl text-gray-200 mb-8 focus:outline-none "
                    onClick={toggleSidebar}
                >
                    {isOpen ? (
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold">
                                <LogoIcon />
                            </span>
                        </div>
                    ) : (
                        <LogoIcon />
                    )}
                </button>

                {/* ===========Map start======= */}
                <ul className="space-y-4">
                    {NavData.map(({ id, text, Icon, link }) => (
                        <li key={id}>
                            <Link href={link}>
                                <span className="block py-2 px-4 hover:bg-blue-600 hover:text-white rounded cursor-pointer transition-colors">
                                    {isOpen ? (
                                        <div className="flex items-center gap-3">
                                            <Icon /> {text}
                                        </div>
                                    ) : (
                                        <Icon />
                                    )}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* ===========Map End ======== */}
            </div>
        </div>
    );
}
