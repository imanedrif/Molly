import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Image from "next/image";
import { useRouter } from "next/router";
// import snth from '../../../../server-side/storage/app/public/'
const PetCard = (props: any) => {
    const { pet } = props;
    console.log(props);
    const Router = useRouter();
    return (
        <div className="Pet">
            <Image
                loader={() => props.pet.image}
                src={props.pet.image}
                width={100}
                height={100}
                alt="pets image"
            />
            <div>
                <p className="Name">{pet?.name}</p>
                <div className="Infos">
                    <div className="Row">
                        <p className="Info">
                            Genre : <span>{pet?.gender}</span>
                        </p>
                        <p className="Info">
                            Age : <span>{pet?.age}</span>
                        </p>
                        <br />
                    </div>
                    <p className="Info">
                        City : <span className="C3">{pet?.city}</span>
                    </p>
                </div>
                <div className="Actions">
                    <FavoriteBorderIcon />
                    <RemoveRedEyeIcon
                        // onclick , redirect to pet page , and send the object pet as props
                        onClick={() => {
                            console.log("clicked");
                            Router.push(`/pets/${pet.id}`);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PetCard;
