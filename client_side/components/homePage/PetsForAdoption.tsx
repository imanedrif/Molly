import React, { useEffect, useState } from "react";
import PetCard from "./imports/PetCard";
import { SecondaryButton } from "../cors/buttons";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
const PetsForAdoption = () => {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pets", {
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                },
            })
            .then((response) => {
                setPets(response.data.data);
                console.log(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        // console.log(pets)
    }, []);
    return (
        <div className="PetsForAdoption" id="pets">
            <h1>Some Pets For Adoption</h1>
            <Image
                src="/vectors/vector2.svg"
                width={330}
                height={330}
                alt="vector"
                className="vector1"
            />
            <div className="Pets">
                {pets.map((pet: any, index: any) => {
                    return (
                        <>
                            <PetCard pet={pet} />
                        </>
                    );
                })}
            </div>
            <Image
                src="/vectors/cercle.svg"
                width={200}
                height={200}
                alt="cercle"
                className="vector2"
            />
            <Link href="/pets">
                <SecondaryButton text="View More" />
            </Link>
        </div>
    );
};

export default PetsForAdoption;
