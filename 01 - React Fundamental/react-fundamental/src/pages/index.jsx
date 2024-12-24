import posts from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';
import { useState } from 'react';

function Homepage() {

    const [param3, setParam3] = useState(posts);

    const onSearchChange1 = (value) => {
        console.log(value);
        const filterPosts = posts.filter(item => item.title.includes(value));
        setParam3(filterPosts);
    };


    return (
        <>
            <h1>hello world</h1>
            <Search onChangeInputSearch={onSearchChange1} />
           

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