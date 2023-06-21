import UserCard from "@/components/UserCard";
import Footer from "@/components/cors/footer";
import Header from "@/components/cors/Header";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import {
//     Box,
//     // Button,
//     Card,
//     CardContent,
//     CardHeader,
//     IconButton,
//     Input,
//     InputAdornment,
//     TextField,
// } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Button, Container, Input, Modal, Spacer, Switch, Text } from "@nextui-org/react";
import axios from "axios";

const PetDetails = () => {
    const [petDetails, setPetDetails] = useState({} as any);
    const Router = useRouter();
    const {data:session,data}=useSession()
    const [user,setUser]=useState()
    const userEmail = session?.user.email
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const [petdata, setPetdata]: any = useState({
        name: "",
        city: "",
        gender: "",
        description: "",
        statuts: "",
    });

    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };

    const handleInput = (e: any) => {
        setPetdata({ ...petdata, [e.target.name]: e.target.value });
    };

    const handleUpdate=(e:any)=>{
        e.preventDefault();
        const { id } = Router.query;
        let formData: any = new FormData()
        formData = petdata;

        axios.post(`http://localhost:8000/api/pets/${id}`,formData,{
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${data?.user.token}`,
            },
        }).then((res)=>{
            if(res.status === 200){
                closeHandler()
            }
        })
    }
    useEffect(() => {
        // setId(Router.query.id);
        const { id } = Router.query;
        console.log(Router.query);
        fetch(`http://127.0.0.1:8000/api/pets/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                console.log(data[0].user.email)
                setPetDetails(data[0]);
                setUser(data[0].user.email)

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
                        {session && user === userEmail}
                        <div className="actions">
                        <Button icon={<ModeEditIcon color="inherit"/>} rounded auto color="success" onPress={handler}>
                                Update
                        </Button>
                        <Modal 
                            closeButton
                            open={visible}
                            onClose={closeHandler}
                            aria-labelledby="modal-title"
                        >
                            <Modal.Header>
                                <Text size={18}>Update your <Text size={18} b>Pet</Text> </Text>                                                             
                            </Modal.Header>
                            <Modal.Body>
                                <Input 
                                clearable
                                bordered 
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="Name"
                                name="name"
                                value={petdata.name}
                                onChange={handleInput}
                                />
                                <Input 
                                clearable
                                bordered 
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="Gender"
                                name="gender"
                                value={petdata.gender}
                                onChange={handleInput}
                                />
                                <Input 
                                clearable
                                bordered 
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="City"
                                name="city"
                                value={petdata.city}
                                onChange={handleInput}
                                />
                                <Input 
                                clearable
                                bordered 
                                fullWidth
                                color="primary"
                                size="lg"
                                name="description"
                                placeholder="Description"
                                value={petdata.description}
                                onChange={handleInput}
                                />
                                <Container display="flex" direction="row" justify="space-evenly" alignItems="center">
                                    <Text>Statut :</Text>
                                    <Switch color={petDetails.status ==='available'?"success":"error"} checked={true} size="sm"></Switch>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button auto rounded flat color="error" onPress={closeHandler}>
                                Close
                            </Button>
                            <Button auto rounded flat onClick={handleUpdate}>
                                Update
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <Button icon={<DeleteIcon color="inherit"/>} color="error" auto rounded flat>
                            Delete
                        </Button>
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
