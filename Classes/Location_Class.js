import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Location(U_ID) {
    official_Store.dispatch({
        type: "GETLOCATION",
        u_id: U_ID
    });
    return official_Store.getState().Location_reducer.location;
};
//Add
export function Add_Location(U_ID,Country,Area,Longitude,Latitude) {
    const state_Location = {
       U_ID:"",
       Country:"",
       Area:"",
       Longitude:"",
       Latitude:""
    }
    state_Location.U_ID = U_ID;
    state_Location.Country = Country;
    state_Location.Area = Area;
    state_Location.Longitude = Longitude;
    state_Location.Latitude = Latitude;
    official_Store.dispatch(add_Loction_dispatch(state_Location));
};
//Delete
export function Delete_Location(U_ID) {
    official_Store.dispatch(Delete_Location_dispatch(U_ID));
};

/*//Update //USID
export function Update_usid_User_Rate(User_ID,new_Usid) {

    official_Store.dispatch(Update_usid_User_Rate_dispatch(User_ID,new_Usid));
};
//Update //REVIEWID
export function Update_review_id_User_Rate(User_ID,Review_ID) {

    official_Store.dispatch(Update_review_id_User_Rate_dispatch(User_ID,Review_ID));
};
//Update //NationalID
export function Update_National_ID_User_Rate(User_ID,National_ID) {

    official_Store.dispatch(Update_NationalID_User_Rate_dispatch(User_ID,National_ID));
};
//Update //Email
export function Update_Email_User_Rate(User_ID,Email) {

    official_Store.dispatch(Update_Email_User_Rate_dispatch(User_ID,Email));
};*/
//Dispatches

const add_Loction_dispatch = (data_) => {
    return ({
        type: "ADDLOCATION",
        data: data_
    })
    
}

const Delete_Location_dispatch = (U_ID) => {
    return ({
        type: "DELETELOCATION",
        data: U_ID
    })
}
/*const Update_usid_User_Rate_dispatch = (User_ID,Us_id) => {
    return ({
        type: "UPDATE_US_ID_USER_RATE",
        user_id: User_ID,
        usid:Us_id
    })
}
const Update_review_id_User_Rate_dispatch = (User_ID,Review_ID) => {
    return ({
        type: "UPDATE_REVIEW_ID_USER_RATE",
        user_id: User_ID,
        review_id:Review_ID
    })
}
const Update_NationalID_User_Rate_dispatch = (User_ID,National_ID) => {
    return ({
        type: "UPDATE_NATITIONAL_ID_USER_RATE",
        user_id: User_ID,
        National_ID:National_ID
    })
}
const Update_Email_User_Rate_dispatch = (User_ID,Email) => {
    return ({
        type: "UPDATE_EMAIL_USER_RATE",
        user_id: User_ID,
        Email:Email
    })
}*/
