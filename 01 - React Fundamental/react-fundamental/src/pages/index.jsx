import posts from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';
import { useState, useEffect } from 'react';

function Homepage() {

    // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
    const [param3, setParam3] = useState(posts);
    
    // ini digunakan untuk memberi nilai value dari data pencarian
    const [totalPosts, setTotalPost] = useState(0)


    // fungsi ini untuk memfilter isi artikel yang ada
    const onSearchChange1 = (value) => {
        console.log(value);
        const filterPosts = posts.filter(item => item.title.includes(value));
        setParam3(filterPosts);

        // ini bagian pembaruan untuk total value didapatkan untuk totalposts
        setTotalPost(filterPosts.length);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setExternalPosts(json));
    },[]);



    return (
        <>
            <h1>Hello Library.</h1>
            <Search onChangeInputSearch={onSearchChange1} totalPosts={totalPosts}/>
           

            {param3.map((bebasae, index) => {
                return (
                    // <Article title={title} tags={tags} date={date} />
                    <Article {...bebasae} key={index} />
                    );
            })}
       
            
        </>
    );
}

export default Homepage;