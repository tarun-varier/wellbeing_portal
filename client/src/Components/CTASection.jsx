import React from "react";
import ConnectBtn from "./ConnectBtn";
import CTAImg from "../assets/banner-photo.png";

const CTASection = () => {
    return (
        <div className="mx-auto mt-8 grid w-full grid-cols-1 md:grid-cols-2 px-4">
            <div className="my-auto mx-auto text-center md:text-left">
                <h1 className="text-4xl sm:text-7xl">Your Mental Health</h1>
                <div className="text-lg my-4">Take the first step towards a healthier mind today.</div>
                <ConnectBtn />
            </div>
            <div className="mx-auto my-12 md:my-auto">
                <img src={CTAImg} alt="" className="w-[200px] md:w-[400px]" />
            </div>
        </div>
    )
}

export default CTASection;
