/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (name, email, password, passwordConfirm) => {
// export const signup = async ({...data}) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/users/signup',
            // data
            data:{
                name, 
                email, 
                password, 
                passwordConfirm 
            }
        });

        if (res.data.status === 'success') {
            showAlert('success', 'Signup is successfully! Wait for a while.....');
            // location.replace('/me');
            location.assign('/me');
        }
        
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
};