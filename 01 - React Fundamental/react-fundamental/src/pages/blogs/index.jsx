import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Blog () {
    
    const param3 = useLoaderData()
    
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