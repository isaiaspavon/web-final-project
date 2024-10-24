import React, {useState} from 'react';

const RoommateForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [major, setMajor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Roommate:', {name, age, major});

        // Here we need to add the functionality to save this data to MongoDB
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

            <label>Major:</label>
            <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />

            <button type="submit">Add Roommate</button>
        </form>
    )
}

export default RoommateForm;