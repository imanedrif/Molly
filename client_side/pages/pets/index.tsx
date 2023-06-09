import Footer from "@/components/cors/footer";
import Header from "@/components/cors/Header";
import PetCard from "@/components/homePage/imports/PetCard";
import { Box, Card, Checkbox, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PaginationComponent from "@/components/pets/PaginationComponent";
import axios from "axios";
import { Button, Collapse, Dropdown, Text } from "@nextui-org/react";
import Link from "next/link";

const Index = () => {
    const [deviceWidth, setDevicewidth] = useState(0)
    useEffect(() => {
        const handleresize = () => {
            setDevicewidth(window.innerWidth)
        }
        window.addEventListener('resize', handleresize)
        setDevicewidth(window.innerWidth)

        return () => {
            window.removeEventListener('resize', handleresize)
        }
    }, [])
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const { cities } = require("morocco-cities");
    const category = [
        { value: "dog" },
        { value: "cat" },
        { value: "bird" },
        { value: "rabbit" },
        { value: "hamster" },
    ];
    const [pets, setPets] = React.useState([] as any);
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedGender, setSelectedGender] = useState('')
    const [filteredPet, setFilteredpet] = useState([] as any)
    const handleClearFilter = () => {
        setSelectedCategory("");
        setSelectedGender("");
    };
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

    useEffect(() => {
        const filterPets = () => {
            let filtered = pets
            if (selectedCategory) {
                filtered = filtered.filter((pet: any) => pet.category === selectedCategory);
            }

            if (selectedGender) {
                filtered = filtered.filter((pet: any) => pet.gender === selectedGender);
            }

            setFilteredpet(filtered);
        }
        filterPets();
    }, [pets, selectedCategory, selectedGender])

    return (
        <>
            <Header />
            <div className="pets">
                <div className="parent">
                    <div className="head">
                        <p>Find your pet</p>
                        <span>friend</span>
                    </div>
                    {deviceWidth > 700 ? (
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
                                                    <Checkbox value={i.value} checked={selectedCategory === i.value} onChange={(e) => { setSelectedCategory(e.target.value) }} />
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
                                                <Checkbox value='female' checked={selectedGender === 'female'} onChange={(e) => { setSelectedGender(e.target.value) }} />
                                                <p>Female</p>
                                                <Checkbox value='male' checked={selectedGender === 'male'} onChange={(e) => { setSelectedGender(e.target.value) }} />
                                                <p>Male</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Button shadow color="warning" size='xs' onClick={handleClearFilter}>
                                    Clear
                                </Button>
                            </Grid>
                            <Grid xs={9} className="right">
                                <h2>Discover available pets</h2>
                                <div>{
                                    filteredPet.length > 0 ? (
                                        <PaginationComponent data={filteredPet.length > 0 ? filteredPet : pets} />
                                    ) : (
                                        <h2>No Pets Are available , <Link href="/AddAnnounce">Add One</Link></h2>
                                    )

                                }
                                </div>
                            </Grid>
                        </Grid>
                    ) : (
                        <div className="desktop">
                            <Box>
                                <Dropdown>
                                    <Dropdown.Button color="success" light>Filter</Dropdown.Button>
                                    <Dropdown.Menu
                                        variant="light"
                                        aria-label="Actions"
                                    >
                                        <Dropdown.Item>

                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Box>
                            <Grid container justifyItems="center">
                                <Grid xs={9} className="buttom">
                                    <h2>Discover available pets</h2>
                                    <div>
                                        <PaginationComponent data={filteredPet.length > 0 ? filteredPet : pets} />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Index;
