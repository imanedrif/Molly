export const ADD_USER_INFOS = "ADD_USER_INFOS";
export const GET_USER_INFOS = "GET_USER_INFOS";
export const DELETE_USER_INFOS = "DELETE_USER_INFOS";

export const addUserInfos = (userInfos: any) => ({
    type: ADD_USER_INFOS,
    payload: userInfos,
});

export const getUserInfos = () => ({
    type: GET_USER_INFOS,
});

export const deleteUserInfos = () => ({
    type: DELETE_USER_INFOS,
});
