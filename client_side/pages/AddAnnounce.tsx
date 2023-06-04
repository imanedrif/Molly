import Header from "@/components/cors/Header";
import { CheckBox } from "@mui/icons-material";
import { Checkbox, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Footer from "@/components/cors/Footer";
import { PrimaryButton, PrimaryButtonIcon } from "@/components/cors/buttons";
import AddIcon from "@mui/icons-material/Add";

const AddAnnounce = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const { cities } = require("morocco-cities");
    const ages = [
        { text: "Age : 1 yo " },
        { text: "Age : 2 yo  " },
        { text: "Age : 6 months" },
        { text: "Age : less than  1 yo " },
        { text: "Age : less than  2 yo " },
        { text: "Age : less than 6 months" },
        { text: "Other" },
    ];

    const category = [
        { value: "dog" },
        { value: "cat" },
        { value: "bird" },
        { value: "rabbit" },
        { value: "hamster" },
    ];
    return (
        <>
            <Header />
            <div className="add-announce">
                <div className="shape1"></div>
                <div className="shape2"></div>
                <h1>Post an announcement</h1>
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
                                />
                            </div>
                            <div className="content2">
                                <div className="category">
                                    <p>Category</p>
                                    <TextField
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
                                        select
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        <option value="male">male</option>
                                        <option value="female">female</option>
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
                        </div>
                    </div>
                    <div className="section">
                        <div className="head">
                            <h2>Description</h2>
                            <hr />
                        </div>
                        <div className="content5">
                            <TextareaAutosize
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
                                    type="file"
                                    id="imageInput"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <PrimaryButtonIcon text="Add it" icon={<AddIcon />} />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AddAnnounce;
