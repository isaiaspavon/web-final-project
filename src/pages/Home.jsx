import React from 'react';
import RoommateList from '../components/RoommateList';
import RoommateForm  from '../components/RoommateForm';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the UGA Roommate Finder</h1>
            <RoommateList />
            <RoommateForm />
        </div>
    )
}

export default Home;