import axios from "axios";

export const apiheader = {
    headers: {
        'Content-Type': 'multipart/form-data',
     } 
};


export const GetData = async (url) => {
    let { data } = await axios.get(url);
    return data;
}

export const PostData = async (url, body ,header) => {
    let  data  = await axios.post(url, body, header);
    return data;
}