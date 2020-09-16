import  axios from 'axios';



const googlelogin = async (accesstoken) => {
    let res = await axios.post("http://127.0.0.1:8000/rest-auth/google/", {
        access_token: access_token,
    });

    console.log(res);
    return await  res.status;
};

export default googlelogin;

