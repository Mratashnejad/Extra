import axios from 'axios';


const fblogin = async (accesstoken) => {
    let res = await axios.post("http://127.0.0.1:8000/rest-auth/facebook/", {
        access_token: accesstoken,
    });
    console.log(res);
    return await res.status;

};

export default fblogin;