import axios from 'axios';

const URL = 'https://lookscout-onboarding-with-backend1.onrender.com';

export const authenticateSignUp = async(data)=>{
    try{
        return await axios.post(`${URL}/signup`,data);
    }
    catch(error){
        console.log('Error while Calling signup API');
    }
}

