import React, { useEffect, useState } from 'react';

const Home = () => {
    const [ users, setUsers ] = useState( [] );
    console.log( users );
    useEffect( () => {
        fetch( 'http://localhost:5000/user' )
            .then( res => res.json() )
            .then( data => setUsers( data ) );
    }, [] );
    return (
        <div>
            <h3>Total Users: {users.length}</h3>
            {
                users.map( user => <h6 key={user.id}>Name: {user.name} Email: {user.email}</h6> )
            }
        </div>
    );
};

export default Home;