import Link from "next/link";
import { BiSolidErrorAlt } from "react-icons/bi";

const Error404 = () => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="text-center max-w-md">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <BiSolidErrorAlt className="text-red-500 animate-pulse" size={110} />
                </div>

                {/* Title */}
                <h1 className="text-5xl font-extrabold text-red-500 mb-3">
                    404
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl font-semibold  text-red-500 mb-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mb-8">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="inline-block px-6 py-3 rounded-xl bg-red-500 text-white font-semibold 
                     hover:bg-red-600 transition duration-300 shadow-lg"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Error404;
