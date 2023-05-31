import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Input,
    InputAdornment,
} from "@mui/material";
import React, { useState } from "react";

const UserCard = (props: any) => {
    const { user } = props;
    const [showNumber, setShowNumber] = useState(false);
    const phoneNumber = user?.phoneNumber;
    const handleToggleNumber = () => {
        setShowNumber((prevShowNumber) => !prevShowNumber);
    };
    return (
        <div>
            <Card>
                <CardHeader title="Advertiser details" />
                <CardContent>
                    <p>
                        Name: <span>{user?.name}</span>
                    </p>
                    <p>
                        City: <span>Rabat</span>
                    </p>
                    <Input
                        disableUnderline
                        type={showNumber ? "text" : "password"}
                        value={showNumber ? phoneNumber : "************"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleToggleNumber}
                                    edge="end"
                                >
                                    {showNumber ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default UserCard;
