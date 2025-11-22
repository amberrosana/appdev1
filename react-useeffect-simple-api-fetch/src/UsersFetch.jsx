import { useEffect, useState } from "react";

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

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
                    <div>Username: {user.username}</div>
                    <div>Name: {user.name}</div>
                    <div>Email: {user.email}</div>
                    <div>Address: {user.address.street}, {user.address.suite}, {user.address.city}</div>
                    <div>Phone: {user.phone}</div>
                    <div>Website: {user.website}</div>
                    <div>Company: {user.company.name}</div>
                    <hr />
                </li>
                ))}
            </ul>
        </div>
    )
}
