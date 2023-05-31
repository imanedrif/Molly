import Image from "next/image";
import React, { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import PetAdviceItems from "./imports/PetAdviceItems";

const PetAdvices = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        {
            imagesrc: "/img/dogadvice.jpg",
            advice: "Feed your dog high-quality meals on a regular schedule in a quiet place.",
        },
        {
            imagesrc: "/img/rabbitadvice.jpg",
            advice: "It's important to remember that a rabbit with perfect teeth can still develop dental issues later in their life. Monitor your rabbit closely for signs of problems and visit the vet at least twice a year for regular dental checks.",
        },
        {
            imagesrc: "/img/catadvice.jpg",
            advice: "Keep the litter box clean No one likes a dirty restroom. Many cats will find another place to go (like the carpet... or your pillow)",
        },
    ];
    return (
        <div className="PetAdvices" id="tips">
            <Image
                src="/vectors/Vector-advice.svg"
                width={300}
                height={300}
                alt="light"
                className="vector"
            />
            <div className="head">
                <p>
                    Pet advices and tips
                    <Image
                        src="/icons/light-icon.svg"
                        width={50}
                        height={50}
                        alt="light"
                    />
                </p>
            </div>
            <div className="carousel-container">
                <div
                    className="contents"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {data.map((e, index) => (
                        <PetAdviceItems key={index} item={e} />
                    ))}
                </div>
            </div>
            <div className="carousel-circles">
                {data.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-circle ${
                            activeIndex === index ? "active" : ""
                        }`}
                        onClick={() => setActiveIndex(index)}
                    ></div>
                ))}
            </div>
            <Image
                src="/vectors/Vector3.svg"
                width={300}
                height={300}
                alt="light"
                className="vector2"
            />
        </div>
    );
};

export default PetAdvices;
