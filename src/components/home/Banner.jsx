import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-10">

            {/* Text Section */}
            <div className="flex-1 text-center md:text-left space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Give your child a bright future
                </h2>
                <p className="text-gray-600">
                    Buy every toy with up to 50% discount
                </p>
                <button className="btn bg-neutral text-white rounded-xl px-6">
                    Explore Products
                </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
                <Image
                    src="/assets/Banner--1.png"
                    alt="Care Logo"
                    width={500}
                    height={300}
                    className="object-contain"
                    priority
                />
            </div>

        </div>
    );
};

export default Banner;
