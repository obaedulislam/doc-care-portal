import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { AuthContext } from '../../Context/AuthProvider';

const DisplayError = () => {
    const { user, logOut } = useContext(AuthContext)
    const error = useRouteError();
    const navigate = useNavigate();


    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <p className='text-2xl font-medium'>Something went wrong</p>
            <p className='text-red-600 font-semibold text-2xl'>{error.statusText || error.message}</p>
            <h4 className='text-3xl '>Please <button className='btn btn-secondary' onClick={handleLogout}>Sign Out</button> And Log Back In</h4>
        </div>
    );
};

export default DisplayError;