import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [ users, setUsers ] = useState( [] );
    // console.log( users );
    useEffect( () => {
        fetch( 'http://localhost:5000/user' )
            .then( res => res.json() )
            .then( data => setUsers( data ) );
    }, [] );
    const handleDeleteUser = id => {
        const proceed = window.confirm( 'Are you sure you want to delete?' );
        if ( proceed ) {
            // console.log( 'deleting user id: ', id );
            const url = `http://localhost:5000/user/${ id }`;
            fetch( url, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    if ( data.deletedCount > 0 ) {
                        console.log( 'Deleted Successfully' );
                        const remaining = users.filter( user => user._id !== id );
                        setUsers( remaining );
                    }
                } );
        }
    };
    return (
        <div>
            <h3>Total Users: {users.length}</h3>
            {
                users.map( user => <h4 key={user._id}>Name: {user.name} Email: {user.email} <Link to={`/update/${ user._id }`}><button>Update</button></Link> <button onClick={() => handleDeleteUser( user._id )}>X</button></h4> )
            }
        </div>
    );
};

export default Home;