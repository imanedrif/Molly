import Footer from "@/components/cors/footer";
import Header from "@/components/cors/Header";
import PetCard from "@/components/homePage/imports/PetCard";
import { Card, Checkbox, Grid } from "@mui/material";
import React, { useEffect } from "react";
import PaginationComponent from "@/components/pets/PaginationComponent";
import axios from "axios";

const Index = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const { cities } = require("morocco-cities");
    const [pets, setPets] = React.useState([] as any);
    const ages = [
        { text: "Age : 1 yo " },
        { text: "Age : 2 yo  " },
        { text: "Age : 6 months" },
        { text: "Age : less than  1 yo " },
        { text: "Age : less than  2 yo " },
        { text: "Age : less than 6 months" },
        { text: "Other" },
    ];

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/pets", {
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
            <div className="pets">
                <div className="parent">
                    <div className="head">
                        <p>Find your pet</p>
                        <span>friend</span>
                    </div>
                    <Grid container spacing={0}>
                        <Grid item xs={3} className="left">
                            <h2>Filter</h2>
                            <div className="category">
                                <div className="title">
                                    <p>Category</p>
                                    <hr />
                                </div>
                                <Grid container className="checkboxContainer">
                                    {category.map((i, index: any) => (
                                        <Grid item xs={4} key={index}>
                                            <div className="items">
                                                <Checkbox />
                                                <p>{i.value}</p>
                                            </div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                            <div className="gender">
                                <div className="title">
                                    <p>Gender</p>
                                    <hr />
                                </div>
                                <Grid container className="checkboxContainer">
                                    <Grid item xs={4}>
                                        <div className="items">
                                            <Checkbox />
                                            <p>Female</p>
                                            <Checkbox />
                                            <p>Male</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="age">
                                <div className="title">
                                    <p>Age</p>
                                    <hr />
                                </div>
                                <Grid container className="checkboxContainer">
                                    {ages.map((age, index: any) => (
                                        <Grid item xs={4} key={index}>
                                            <div className="items">
                                                <Checkbox />
                                                <p>{age.text}</p>
                                            </div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        </Grid>
                        <Grid xs={9} className="right">
                            <h2>Discover available pets</h2>
                            <div>
                                <PaginationComponent data={pets} />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Index;
