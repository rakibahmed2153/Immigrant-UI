import axios from "./axios";

export const getData = async (url, options) => {
    try {
        let request_url = '/api/v1/' + url
        const response = await axios.get(request_url, {params: options}, {
            headers: {'Content-Type': 'application/json'}})
        // console.log('Data GET ==== ', response.data)
        return response.data
    }
    catch (error) {
        // Handle the error here
        console.error('An error occurred while fetching property space:', error);
        // You might want to throw the error again or return a specific value
        throw error;
    }
}

export const postData = async (url, options) =>{
    try {
        let request_url = '/api/v1/' + url
        const response = await axios.post(request_url,{options},  {
            headers: {'Content-Type': 'application/json'}})
        return response.data
    }
    catch (error) {
        // Handle the error here
        console.error('An error occurred while fetching property space:', error);
        // You might want to throw the error again or return a specific value
        throw error;
    }
}

export const fetchWithToken = async (url, accessToken, params = {}) => {
    try {
        let requestUrl = '/api/v1/' + url;

        const response = await axios.get(requestUrl, {
            params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
        throw error;
    }
};

