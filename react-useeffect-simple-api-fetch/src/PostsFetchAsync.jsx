import { useEffect, useState } from "react";

export default function PostsFetchAsynch() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);


    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                    <hr />
                </li>
                ))}
            </ul>
        </div>
    )
}
