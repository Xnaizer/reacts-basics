import posts from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';
import { useState, useEffect } from 'react';

function Homepage() {

    // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
    const [param3, setParam3] = useState(posts);
    
    // ini digunakan untuk memberi nilai value dari data pencarian
    const [totalPosts, setTotalPost] = useState(0)

    // untuk fetching data ke dalam article
    const [externalPosts, setExternalPosts] = useState([])



    // fungsi ini untuk memfilter isi artikel yang ada
    const onSearchChange1 = (value) => {
        console.log(value);
        const filterPosts = posts.filter(item => item.title.includes(value));
        setParam3(filterPosts);

        // ini bagian pembaruan untuk total value didapatkan untuk totalposts
        setTotalPost(filterPosts.length);
    };


    // componenentDidMount  =  Cocok untuk inisialisasi yang memerlukan DOM, seperti pengambilan data (fetching data), penambahan event listeners, atau integrasi dengan library pihak ketiga.

    // componenentDidUpdate  = Berguna untuk melakukan tindakan yang bergantung pada perubahan props atau state, seperti memperbarui DOM berdasarkan perubahan data atau mengambil data baru ketika props tertentu berubah.

    // componenentWillUnmount  = Digunakan untuk melakukan pembersihan, seperti menghapus event listeners, membatalkan permintaan jaringan, atau menghentikan interval/timer.

    // useEffect(() => {
    //     console.log("ada perubaha di state yang ditentukan ini");

    //     // setInterval

    //       return () =>{
    //         // removeEventListener
    //         // clearInterval
    //         console.log("bersihkan")
    //     }
    // },[posts]);
    //[] menjalankan 1x sehingga useeffect tidak digunakan berkali2 saat diapnggil




    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((json) => setExternalPosts(json));
    },[]);

    useEffect(() => {
        console.log("new post just added");
    },[param3]);

    useEffect(() => {
        console.log("ini akan memanggil ulang terus tanpa adanya []");
    });



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
            <hr />
            <h2>External Posts Start Here</h2>
            {externalPosts.map((item, index) => (
                <div key={index}>- {item.title}</div>
            ))};
        </>
    );
}

export default Homepage;