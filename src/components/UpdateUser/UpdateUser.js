import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [ user, setUser ] = useState( {} );
    useEffect( () => {
        const url = `http://localhost:5000/user/${ id }`;
        fetch( url )
            .then( res => res.json() )
            .then( data => setUser( data ) );
    }, [] );

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = { name, email };

        //send data to server
        const url = `http://localhost:5000/user/${ id }`;
        fetch( url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( updatedUser )

        } )
            .then( res => res.json() )
            .then( data => {
                console.log( 'success', data );
                alert( 'user updated successfully!!!' );
                event.target.reset();
            } );
    };
    return (
        <div>
            <h2>Update User Name: {user.name} and Email: {user.email}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='name' id="" required /><br />
                <input type="email" name="email" placeholder='email' id="" required /><br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;