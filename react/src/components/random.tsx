import React, { useState, useEffect } from 'react';

const RandomComponent = () => {
    // Sample users data
    const initialUsers = [
        { id: 1, name: 'Alice', age: 25, active: true },
        { id: 2, name: 'Bob', age: 30, active: false },
        { id: 3, name: 'Charlie', age: 22, active: true },
        { id: 4, name: 'David', age: 35, active: true },
        { id: 5, name: 'Eve', age: 28, active: false },
    ];

    const [users, setUsers] = useState(initialUsers);
    const [showActive, setShowActive] = useState(true);
    const [search, setSearch] = useState('');
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');

    // Filter users based on active status and search
    const filteredUsers = users.filter(user => {
        return (
            (showActive ? user.active : true) &&
            user.name.toLowerCase().includes(search.toLowerCase())
        );
    });

    // Add new user
    const addUser = () => {
        if (!newName || !newAge) return;
        const newUser = {
            id: users.length + 1,
            name: newName,
            age: parseInt(newAge),
            active: true,
        };
        setUsers([...users, newUser]);
        setNewName('');
        setNewAge('');
    };

    // Toggle active state of a user
    const toggleActive = (id: any) => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    // Delete user
    const deleteUser = (id: any) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Random User Dashboard</h1>

            {/* Controls */}
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Search Users:{' '}
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </label>
                <label style={{ marginLeft: '20px' }}>
                    Show Active Only:{' '}
                    <input
                        type="checkbox"
                        checked={showActive}
                        onChange={() => setShowActive(!showActive)}
                    />
                </label>
            </div>

            {/* Add New User */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    placeholder="Name"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                />
                <input
                    placeholder="Age"
                    type="number"
                    value={newAge}
                    onChange={e => setNewAge(e.target.value)}
                />
                <button onClick={addUser}>Add User</button>
            </div>

            {/* User List */}
            <table border={2} cellPadding="10" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.active ? 'Yes' : 'No'}</td>
                            <td>
                                <button onClick={() => toggleActive(user.id)}>
                                    Toggle Active
                                </button>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {filteredUsers.length === 0 && (
                        <tr>
                            <td colSpan={5} style={{ textAlign: 'center' }}>
                                No users found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

      
            <div style={{ marginTop: '20px' }}>
                <strong>Total Users: </strong> {users.length}
                <br />
                <strong>Active Users: </strong> {users.filter(u => u.active).length}
            </div>
        </div>
    );
};

export default RandomComponent;
