
import { useLoaderData } from "react-router-dom";


function SinglePost(){
    
    const post = useLoaderData();

    return (
        <>
            <h2>{post?.title}</h2>
            {/* // ? digunakan untuk melakukan post dulu, maka setelah ada isinya baru lakukan tugas ini */}
            <div>{post?.body}</div>

        </>
    )
}

export default SinglePost;