import { ReactElement } from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./SideBar.css";

export const SideBar = (): ReactElement => {
    return (
        <div className="flex flex-col h-full items-center justify-center border border-gray-400 rounded-lg shadow-md shadow-gray-400  p-4 ml-4 bg-white">
            <h1 className="text-2xl font-bold mb-4">Side Bar</h1>
            <AiOutlineHome size={24} className="text-blue-500" />
            <p className="text-gray-700">This is the side bar content.</p>
            <div>
                <div>
                    <h2>Categories</h2>
                    <ul className="list-disc pl-5">
                        <li>Technology</li>
                        <li>Health</li>
                        <li>Sports</li>
                        <li>Entertainment</li>
                        <li>Business</li>
                        <li>Science</li>
                        <li>World</li>
                        <li>Politics</li>
                        <li>Finance</li>
                    </ul>
                </div>
                <div>
                    <ul className="mt-4">
                        <li className="text-white hover:text-blue-300 cursor-pointer">
                            Home
                        </li>
                        <li className="text-white hover:text-blue-300 cursor-pointer">
                            About
                        </li>
                        <li className="text-white hover:text-blue-300 cursor-pointer">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
