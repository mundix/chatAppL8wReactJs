import React, {useState} from 'react';

const initialState = {
    grant_type: 'password',
    client_id: 2,
    client_secret: 'tor0TUJ3KWu4gG50rljuSH2CvVmqHeK4q5jWgAvU', // Laravel Password Grant Client
    username: 'admin@admin',
    password: 'admin',
    scope: '',
};


export const Connection = () => {

    const [data, setData] = useState(initialState);

    const connect = (username = '', password = '') => {
        setData({
            ...data, username: username, password: password
        });

        axios.post('/oauth/token', data)
            .then(response => {
                console.log('got response');
                console.log(response.data);

            }).catch(response => {
            console.log('got a error!');
            console.error(response);
        })
    }

    return {
        connect
    }
}