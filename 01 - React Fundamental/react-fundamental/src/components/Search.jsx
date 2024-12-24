import { useState } from 'react';


function Search(param2) {
    const [search, setSearch] = useState("");

    const onSearchChange = (event) => {
        setSearch(event.target.value);
        param2.onChangeInputSearch(event.target.value);
    }

    return (
        <>
            <div>
                Cari Artikel : <input onChange={onSearchChange} />{""}
            </div>
            <small>Ditemukan 0 dengan pencarian kata {search}</small>
        
        </>
    )

}

export default Search;