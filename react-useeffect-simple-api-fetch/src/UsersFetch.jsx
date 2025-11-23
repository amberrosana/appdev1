import { useEffect, useState } from "react";

export default function UsersFetch() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    <div>Name: {user.name}</div>
                    <div>Email: {user.email}</div>
                    <hr />
                </li>
                ))}
            </ul>
        </div>
    )
}
