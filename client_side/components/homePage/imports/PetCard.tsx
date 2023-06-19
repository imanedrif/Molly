import React, { useState, useEffect } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BorderAllOutlined } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { Alert, Checkbox, Slide, Snackbar } from "@mui/material";
import { Card, Col, Row, Text } from "@nextui-org/react";

const PetCard = (props: any) => {
  const { pet } = props;
  console.log(props);
  const Router = useRouter();
  const [isfav, setIsfav] = useState(false)
  const { data: session, data } = useSession()
  const [open, setOpen] = React.useState(false);
  const [showSnackbar,setShowSnackbar]=useState(false)
  const iswishlist = Router.pathname === 'Wishlist'

  useEffect(() => {
    if (session) {
      axios
        .get(`http://localhost:8000/api/wishlists/${pet.id}`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${data?.user.token}`,
          },
        })
        .then((res) => {
          console.log("Wishlist Res", res)
          if (res.status = 200) {
            setIsfav(true)
          }
          else {
            setIsfav(false)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const removeFav = () => {
    axios.delete(`http://127.0.0.1:8000/api/wishlists/${pet.id}`, {
      headers: {
        "Authorization": `Bearer ${data?.user.token}`,
      },
    }).then((res) => {
      console.log(res.data)
      setIsfav(false)
    }).catch((err) => {
      console.log(err)
    })
  }
  const addFav = () => {
    axios.post(`http://localhost:8000/api/wishlists`, { pet_id: pet.id }, {
      headers: {
        Authorization: `Bearer ${data?.user.token}`,
      },
    }).then((res) => {
      console.log(res.data)
      setIsfav(true)
    }
    ).catch((err) => {
      console.log(err)
    }
    )
  }

  return (
    <>
    <Card className="Pet" css={{ mw: "270px"}}>
      <Card.Header css={{w:"100%"}}>
        <Image
          loader={() => props.pet.image}
          src={props.pet.image}
          width={100}
          height={100}
          alt="pets image"
        />
      </Card.Header>
      <Card.Body css={{p:0 ,gap:"$3",paddingLeft:"$5",w:"100%"}}>
        <Text h4  css={{ lineHeight: "$xs",fontWeight:"$semibold" }}>{pet?.name}</Text>
          <Row justify="flex-start" css={{gap:"$5",mw:"100%",fontSize:"$sm", whiteSpace:"nowrap"}}>
            <Text>
              Genre : <span>{pet?.gender}</span>
            </Text>
            <Text>
              Age : <span>{pet?.age}</span>
            </Text>
            <br />
          </Row>
          <Text>
            City : <span className="C3">{pet?.city}</span>
          </Text>
      </Card.Body>
      <Card.Footer css={{p:0}}>
          <Checkbox
            icon={<FavoriteBorderIcon style={{ color: 'black' }} />}
            checkedIcon={<FavoriteIcon style={{ color: 'red' }} />}
            checked={isfav}
            onClick={() => {
              if(!session){
                setShowSnackbar(true)
                setOpen(true)
              }else{
                if (isfav) {
                  setIsfav(false)
                  removeFav()
                }
                else {
                  setIsfav(true)
                  addFav()
                }
              }
            }}
          />
          <RemoveRedEyeIcon
            onClick={() => {
              console.log("clicked");
              Router.push(`/pets/${pet.id}`);
            }}
            />
        </Card.Footer>
    </Card>
    {showSnackbar &&(
     <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          TransitionComponent={(props) => <Slide {...props} direction="right" />}
          transitionDuration={600}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            You must be connected !
          </Alert>
      </Snackbar>
    )}
    </>
  );
};

export default PetCard;
