import posts from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';
import { useState } from 'react';

function Homepage() {

    // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
    const [param3, setParam3] = useState(posts);
    const [totalPosts, setTotalPost] = useState(0)



    // fungsi ini untuk memfilter isi artikel yang ada
    const onSearchChange1 = (value) => {
        console.log(value);
        const filterPosts = posts.filter(item => item.title.includes(value));
        setParam3(filterPosts);

        // ini bagian pembaruan untuk total value didapatkan untuk totalposts
        setTotalPost(filterPosts.length);
    };


    return (
        <>
            <h1>hello world</h1>
            <Search onChangeInputSearch={onSearchChange1} totalPosts={totalPosts} />
           

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