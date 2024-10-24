import React from 'react';

const RoommateList = () => {
    const roommates = [
        {id: 1, name: 'John Doe', age: 20, major: 'Computer Science'},
        {id: 2, name: 'Jane Smith', age: 22, major: 'Biology' },
    ];

    return (
        <div>
            <h2>Available Roommates</h2>
            <ul>
                {roommates.map(roommate => (
                    <li key={roommate.id}>
                        {roommate.name}, Age: {roommate.age}, Major: {roommate.major}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RoommateList;