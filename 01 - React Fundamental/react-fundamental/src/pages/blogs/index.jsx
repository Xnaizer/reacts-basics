import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blog () {
    // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
    const [param3, setParam3] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setParam3(json));
    },[]);

    return (
        <>
            <h2>My Blog Posts</h2>
            {param3.map((item, index) => (
                <div key={index}>
                    <Link to={`/blog/${item.id}`}>- {item.title}</Link>
                </div>
            ))}
        </>
    )
}

export default Blog;