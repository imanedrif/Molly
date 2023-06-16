import UserCard from "@/components/UserCard";
import Footer from "@/components/cors/footer";
import Header from "@/components/cors/Header";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Input,
    InputAdornment,
    TextField,
} from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const PetDetails = () => {
    const [petDetails, setPetDetails] = useState({} as any);
    const Router = useRouter();
    useEffect(() => {
        // setId(Router.query.id);
        const { id } = Router.query;
        console.log(Router.query);
        fetch(`http://127.0.0.1:8000/api/pets/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPetDetails(data[0]);
            })
            .catch((err) => console.log(err));
    }, []);
    const src = `http://127.0.0.1:8000/api/image/${petDetails.image}`;
    return (
        <>
            <Header />
            <div className="petdetails">
                <div className="contents">
                    <div className="left">
                        <div className="title">
                            <p>Pet details</p>
                        </div>
                        <Image
                            loader={() => src}
                            src={src}
                            width={100}
                            height={100}
                            alt="pets image"
                        />
                        <div className="details">
                            <div className="D1">
                                <div>
                                    <p>Name : </p>{" "}
                                    <span>{petDetails.name}</span>
                                </div>
                                <hr />
                                <div>
                                    <p>Gender :</p>
                                    <span>{petDetails.gender}</span>
                                </div>
                            </div>
                            <div className="D2">
                                <p>City :</p> <span>{petDetails.city}</span>
                            </div>
                            <div className="D3">
                                <p>Description</p>
                                <span>{petDetails.description}</span>
                            </div>
                            <div className="D4">
                                <p>Status :</p>
                                <span>{petDetails.status}</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <UserCard user={petDetails.user} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default PetDetails;
