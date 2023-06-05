import Header from "@/components/cors/Header";
import { CheckBox } from "@mui/icons-material";
import { Checkbox, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Footer from "@/components/cors/footer";
import { PrimaryButton, PrimaryButtonIcon } from "@/components/cors/buttons";
import AddIcon from "@mui/icons-material/Add";
import { Input } from "@nextui-org/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { NextPage } from "next";
import { useSession } from "next-auth/react"

const AddAnnounce: NextPage = () => {
    const { data: session, status } = useSession()
    console.log(session)
    const router = useRouter();
    const user = useSelector((state: any) => state.Reducers.user);
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const { cities } = require("morocco-cities");
    const category = [
        { value: "dog" },
        { value: "cat" },
        { value: "bird" },
        { value: "rabbit" },
        { value: "hamster" },
    ];

    const [isAuth, setIsAuth] = useState(false);

    const [petdata, setPetdata]: any = useState({
        title: "",
        name: "",
        category: "",
        city: "",
        gender: "",
        age: "",
        description: "",
        image: "",
    });

    const handleImage = (e: any) => {
        setPetdata({ ...petdata, image: e.target.files[0] });
    };
    const handleInput = (e: any) => {
        setPetdata({ ...petdata, [e.target.name]: e.target.value });
    };

    const handleAddAnnounce = (e: React.FormEvent) => {
        e.preventDefault();
        let formData: any = new FormData()
        petdata.age = 2;
        formData = petdata;
        axios
            .post("http://localhost:8000/api/pets", formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${user.token}`,
                    },
                    // withCredentials: true,
                })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                // console.log(petdata);
                console.log("Form data:", formData);
            })
            ;

    };

    return (
        <>
            <Header />
            <div className="add-announce">
                <div className="shape1"></div>
                <div className="shape2"></div>
                <h1>Post an announcement</h1>
                <form onSubmit={handleAddAnnounce}>
                    <div className="sections">
                        <div className="section">
                            <div className="head">
                                <h2>General informations</h2>
                                <hr />
                            </div>
                            <div className="contents">
                                <div className="content1">
                                    <p>Title</p>
                                    <TextField
                                        id="outlined-basic"
                                        label="Type something here!"
                                        variant="outlined"
                                        name="title"
                                        value={petdata.title}
                                        onChange={handleInput}
                                    />
                                    <p>Name</p>
                                    <TextField
                                        id="outlined-basic"
                                        label="Type something here!"
                                        variant="outlined"
                                        style={{ width: "fit-content" }}
                                        name="name"
                                        value={petdata.name}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="content2">
                                    <div className="category">
                                        <p>Category</p>
                                        <TextField
                                            name="category"
                                            value={petdata.category}
                                            onChange={handleInput}
                                            select
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            {category.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.value}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                    <div className="city">
                                        <p>City</p>
                                        <TextField
                                            name="city"
                                            value={petdata.city}
                                            onChange={handleInput}
                                            select
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            {cities.map((city: any) => (
                                                <option
                                                    key={city.id}
                                                    value={city.name}
                                                >
                                                    {city.name}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <div className="content3">
                                    <div className="gender">
                                        <p>Gender</p>
                                        <TextField
                                            name="gender"
                                            value={petdata.gender}
                                            onChange={handleInput}
                                            select
                                            SelectProps={{
                                                native: true,
                                            }}
                                        >
                                            <option value="male">male</option>
                                            <option value="female">
                                                female
                                            </option>
                                        </TextField>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="head">
                                <h2>Age information</h2>
                                <hr />
                            </div>
                            <div className="content4">
                                <Input
                                    name="age"
                                    value={petdata.age}
                                    onChange={handleInput}
                                    size="lg"
                                    bordered
                                    type="date"
                                />
                                {/* {ages.map((age) => (
                                    <div>
                                        <Checkbox {...label} name='age' value={age.text}/>
                                        <p>{age.text}</p>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                        <div className="section">
                            <div className="head">
                                <h2>Description</h2>
                                <hr />
                            </div>
                            <div className="content5">
                                <TextareaAutosize
                                    name="description"
                                    value={petdata.description}
                                    onChange={handleInput}
                                    className="custom-textarea"
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Add description"
                                />
                            </div>
                        </div>
                        <div className="section">
                            <div className="head">
                                <h2>Upload pictures</h2>
                                <hr />
                            </div>
                            <div className="content6">
                                <div>
                                    <label htmlFor="imageInput">
                                        <span>Choose an image</span>
                                        <p>or drag it here</p>
                                    </label>
                                    <input
                                        className="inputfile"
                                        name="image"
                                        type="file"
                                        id="imageInput"
                                        accept="image/*"
                                        onChange={handleImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="button">
                            <PrimaryButtonIcon
                                text="Add it"
                                icon={<AddIcon />}
                            />
                        </div>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
};

export default AddAnnounce;
