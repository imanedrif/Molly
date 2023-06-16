import React, { useState, useEffect } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BorderAllOutlined } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { Alert, Slide, Snackbar } from "@mui/material";
// import snth from '../../../../server-side/storage/app/public/'
const PetCard = (props: any) => {
  const { pet } = props;
  console.log(props);
  const Router = useRouter();
  const [isfav, setIsfav] = useState(false)
  const { data: session, data } = useSession()
  const [open, setOpen] = React.useState(false);
  const iswishlist = Router.pathname === 'Wishlist'
  const handleClick = () => {
    setOpen(true);
  };
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
  // const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };


  // const handlefav = () => {
  //   setIsfav((prevIsfav) => !prevIsfav);
  //   if (!isfav) {
  //     axios
  //       .post(
  //         'http://127.0.0.1:8000/api/wishlists',
  //         { pet_id: pet.id },
  //         {
  //           headers: {
  //             Accept: 'application/json',
  //             Authorization: `Bearer ${data?.user.token}`,
  //           },
  //           withCredentials: true,
  //         }
  //       )
  //       .then((res) => {
  //         setIsfav(true)
  //         console.log('Added to wishlist:', res.data);
  //       })
  //       .catch((error) => {
  //         console.error('Failed to add to wishlist:', error);
  //       });
  //   } else {
  //     axios
  //       .delete(`http://127.0.0.1:8000//api/wishlists/${pet.id}`, {
  //         headers: {
  //           Authorization: `Bearer ${data?.user.token}`,
  //         },
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         setIsfav(false)
  //         console.log('removed from wishlist', res.data);
  //       })
  //       .catch((err) => {
  //         console.error('Failed to remove from wishlist', err);
  //       });
  //   }
  // };

  const removeFav = () => {
    axios.delete(`http://127.0.0.1:8000/api/wishlists/${pet.id}`, {
      headers: {
        "Authorization": `Bearer ${data?.user.token}`,
      },
    }).then((res) => {
      console.log(res.data)
      // props.refresh();
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
      // props.refresh();
      setIsfav(true)
    }
    ).catch((err) => {
      console.log(err)
    }
    )
  }

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
          {/* {isfav && session ? (
            <FavoriteIcon onClick={handlefav} style={{ color: 'red' }} />
          ) : (
            <>
              <FavoriteBorderIcon onClick={() => { handlefav(); handleClick(); }} />
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
            </>
          )} */}
          {
            isfav ? <FavoriteIcon onClick={removeFav} style={{ color: 'red' }} /> : <FavoriteBorderIcon onClick={addFav} />
          }
          <RemoveRedEyeIcon
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
