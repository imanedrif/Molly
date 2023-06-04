import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const PrimaryButton = (props: any) => {
    return <button className="Primary Button">{props.text}</button>;
};
export const PrimaryButtonIcon = (props: any) => {
    return (
        <button className="PrimaryIcon Button">
            {props.text}
            {props.icon}
        </button>
    );
};
export const OutlineIconButton = (props: any) => {
    return (
        <button className="OutlineIcon Button">
            {props.text}
            {props.icon}
        </button>
    );
};
export const SecondaryButton = (props: any) => {
    return <button className="Secondary Button">{props.text}</button>;
};

// export const UserButton = (props: any) => {
//     // const { user } = props;
//     const [isOpen, setIsOpen] = React.useState(false);
//     const user = JSON.parse(props.user);
//     return (
//         <button className="UserButton">
//             <p>{user.name}</p>
//             <ArrowForwardIosIcon onClick={() => setIsOpen(!isOpen)} />
//             {isOpen && (
//                 <div className="UserButtonMenu">
//                     <p>Profile</p>
//                     <p>Logout</p>
//                 </div>
//             )}
//         </button>
//     );
// };

// import * as React from 'react';
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export function UserButton(props: any) {
    const user = JSON.parse(props.user);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = () => {
        setAnchorEl(null);
        props.logOut();
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    width:'fit-content',
                    borderRadius:'20px',
                    backgroundColor: "#297373",
                    "&:hover": {
                        backgroundColor: "#297373",
                    },
                }}
            >
                {user.name}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    <AccountCircleIcon />
                    Profile
                </MenuItem>
                <MenuItem onClick={handleLogOut} disableRipple>
                    <LogoutIcon />
                    Logout
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
