export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const addUserInfos = (userInfos: any) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: userInfos,
});

export const getUserInfos = () => ({
    type: getUserInfos,
});

export const deleteUserInfos = () => ({
    type: deleteUserInfos,
});
