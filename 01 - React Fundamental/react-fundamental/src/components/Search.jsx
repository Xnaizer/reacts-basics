import { useState } from 'react';


function Search(param2) {
    const [search, setSearch] = useState("");

    const onSearchChange = () => {
        // setSearch(event.target.value);
        param2.onChangeInputSearch(search);
    }


    // const handleClick = () => {
    //     console.log('test')
    // }

    const searchKeydown = (e) => {
        if ((e.key === "Enter")){
            onSearchChange();
        }
    };

    return (
        <>
            <div>
                Cari Artikel : <input onChange={e => setSearch(e.target.value)} onKeyDown={searchKeydown} ></input> 
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>Ditemukan {param2.totalPosts} dengan pencarian kata {search}</small>
        
        </>
    )

}

export default Search;