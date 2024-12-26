// React adalah library javascript untuk membuat user interface, digunakan untuk membangun kode yang lebih efektif dan cepat. 

import ErrorPage from "./react-fundamental/src/components/ErrorPage";
import RootLayout from "./react-fundamental/src/layouts/RootLayout";
import { router } from "./react-fundamental/src/routers";

// import { Component } from "react"

// cara menginstall React
// 1. cdn menggunakan link yang di inject ( tidak disarankan karna ga scalable )
// 2. Create react app ( CRA )
// 3. vite 


// vite 

// yarn create vite
// yarn create v1.22.22
// [1/4] Resolving packages...
// [2/4] Fetching packages...
// [3/4] Linking dependencies...
// [4/4] Building fresh packages...

// success Installed "create-vite@6.1.0" with binaries:
//       - create-vite
//       - cva
// √ Project name: ... react-fundamental
// √ Select a framework: » React
// √ Select a variant: » JavaScript

// cd react-fundamental
// yarn
// yarn dev

// cd .\react-fundamental\
// yarn
// yarn install v1.22.22
// yarn dev
// yarn run v1.22.22
// $ vite

// 01 - Pengenalan Component 

// src/Component/Article.jsx = 

// function Article () {  // membuat komponen artikel dan ini dapat diuse berkali2
//     return <div> Ini adalah Komponen 1</div>
// }

// export default Article // jangan lupa di export


// src/App.jsx

// import './App.css'
// import Article from './components/Article'  // import articlenya

// function App() {

//   return (
//     <>
//       <Article /> // panggil dengan cara ini
//       <Article />


//     </>
//   )
// }



// 02 - JSX

// function Article () {
//     const name = "Xnaizer"
//     const angka = ["1","2","3","4","5"]

//     // angka.map(item => item )
//     return (
//         <>
//             {/* <div>{name}</div>
//             <div>{angka.map((angka) => {
//                 return <div>{angka}</div>
//             })}
//             </div> */}

//             <div>{name}</div>
//                 <div>{angka.map((angka) => {
//                     return (
//                         <>
//                         <div>{angka}</div>
//                         <div>{angka}</div>
//                         </>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// export default Article

// Props Child Component

// function tambah(a, b) {
//     return a + b
// }

// function Article (param1) {

//     return (
//         <>
//            <div>{param1.name}</div>
//                 <div>{param1.angkas.map((angka) => {
//                     return (
//                         <>
//                         <div> ---- {angka} ---- </div>
                        
//                         </>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// export default Article


// app.jsx

// import './App.css'
// import Article from './components/Article'

// function App() {

//   return (
//     <>
//       <Article name="Xnaizer" angkas={["1","2","3","4","5"]} />
//       <br/>
//       <Article name="Apa Iyah" angkas={["1","2","3","4","5"]} />
          


//     </>
//   )
// }

// export default App



// Blog sederhana menggunakan JSON

// posts.jsx 

// [
//     {
//         "title": "Tutorial belajar reactjs lengkap",
//         "tags": ["react", "frontend"],
//         "date": "2023-01-01",
//         "isNew": true
//     },
//     {
//         "title": "Meningkatkan performa di reactjs",
//         "tags": ["react", "frontend"],
//         "date": "2023-01-02",
//         "isNew": false
//     },
//     {
//         "title": "Cara menggunakan chakra-ui di reactjs",
//         "tags": ["react", "css"],
//         "date": "2023-01-03",
//         "isNew": false
//     }
// ]

// Article.jsx 

// function Article (param1) {

//     return (
//         <>
//            <h3>{param1.title}</h3>
//            <small>Date : {param1.date}, Tags : {param1.tags.join(",")}</small>
            
//         </>
//     )
// }

// export default Article


// index.jsx 

// import posts from '../posts.json'
// import Article from '../components/Article'

// function Homepage() {
//     return (
//         <>
//             <h1>hello world</h1>
//             {posts.map(({title, tags, date}) => {
//                 return (
//                     <Article title={title} tags={tags} date={date} />
//                     
//                     )
//             })}
//         </>
//     )
// }

// export default Homepage


// App.jsx

// import './App.css'
// import Rumah from './pages'


// function App() {

//   return (
//     <>
      
//       <Rumah />
          


//     </>
//   )
// }

// export default App




// Fitur Filter Data dan Pengenalan useState

// App.jsx 

// import './App.css'
// import Rumah from './pages'


// function App() {

//   return (
//     <>
      
//       <Rumah />
          


//     </>
//   )
// }

// export default App


// index.jsx 

// import posts from '../posts.json';
// import Article from '../components/Article';
// import { useState } from 'react';

// function Homepage() {

//     // let search = "";
//     const [search, setSearch] = useState("");

//     const changeSearch = (event) => {
//         // console.log(event.target.value);
//         // search = event.target.value;
//         setSearch(event.target.value);
//     }

//     return (
//         <>
//             <h1>hello world</h1>

//             <div>
//                 Cari Artikel : <input onChange={changeSearch} />{" "}
//             </div>
//             <small>Ditemukan 0 dengan pencarian kata {search}</small>

//             {posts.map(({title, tags, date}, index) => {
//                 return (
//                     // <Article title={title} tags={tags} date={date} />
//                     <Article {...{title, tags, date}} key={index} />
//                     );
//             })}
//         </>
//     );
// }

// export default Homepage;


// Article.jsx

// // function tambah(a, b) {
// //     return a + b
// // }

// function Article (param1) {

//     return (
//         <>
//            <h3>{param1.title}</h3>
//            <small>Date : {param1.date}, Tags : {param1.tags.join(",")}</small>
            
//         </>
//     )
// }

// export default Article;



// Mengembalikan Value ke parent melalui props

// index.jsx 

// import posts from '../posts.json';
// import Article from '../components/Article';
// import Search from '../components/Search';
// import { useState } from 'react';

// function Homepage() {

//     const [param3, setParam3] = useState(posts);

//     const onSearchChange1 = (value) => {
//         console.log(value);
//         const filterPosts = posts.filter(item => item.title.includes(value));
//         setParam3(filterPosts);
//     };


//     return (
//         <>
//             <h1>hello world</h1>
//             <Search onChangeInputSearch={onSearchChange1} />
           

//             {param3.map((bebasae, index) => {
//                 return (
//                     // <Article title={title} tags={tags} date={date} />
//                     <Article {...bebasae} key={index} />
//                     );
//             })}
//         </>
//     );
// }

// export default Homepage;

// Search.jsx 

// import { useState } from 'react';


// function Search(param2) {
//     const [search, setSearch] = useState("");

//     const onSearchChange = (event) => {
//         setSearch(event.target.value);
//         param2.onChangeInputSearch(event.target.value);
//     }

//     return (
//         <>
//             <div>
//                 Cari Artikel : <input onChange={onSearchChange} />{""}
//             </div>
//             <small>Ditemukan 0 dengan pencarian kata {search}</small>
        
//         </>
//     )

// }

// export default Search;

// Article.jsx
// // function tambah(a, b) {
// //     return a + b
// // }

// function Article (param1) {

//     return (
//         <>
//            <h3>{param1.title}</h3>
//            <small>Date : {param1.date}, Tags : {param1.tags.join(",")}</small>
            
//         </>
//     )
// }

// export default Article;


// conditional Rendering

// App.jsx
// import './App.css'
// import Rumah from './pages'


// function App() {
//   // const value = true;

//   return (
//     <>
//       {/* conditional rendering digunakan untuk state yang dinamis */}
//       {/* {value ? 'benar' : 'salah'}  */}


//      <Rumah />
         
//     </>
//   )
// }

// export default App

// index.jsx 

// import posts from '../posts.json';
// import Article from '../components/Article';
// import Search from '../components/Search';
// import { useState } from 'react';

// function Homepage() {

//     // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
//     const [param3, setParam3] = useState(posts);
//     const [totalPosts, setTotalPost] = useState(0)



//     // fungsi ini untuk memfilter isi artikel yang ada
//     const onSearchChange1 = (value) => {
//         console.log(value);
//         const filterPosts = posts.filter(item => item.title.includes(value));
//         setParam3(filterPosts);

//         // ini bagian pembaruan untuk total value didapatkan untuk totalposts
//         setTotalPost(filterPosts.length);
//     };


//     return (
//         <>
//             <h1>hello world</h1>
//             <Search onChangeInputSearch={onSearchChange1} totalPosts={totalPosts} />
           

//             {param3.map((bebasae, index) => {
//                 return (
//                     // <Article title={title} tags={tags} date={date} />
//                     <Article {...bebasae} key={index} />
//                     );
//             })}
//         </>
//     );
// }

// export default Homepage;

// Search.jsx

// import { useState } from 'react';


// function Search(param2) {
//     const [search, setSearch] = useState("");

//     const onSearchChange = (event) => {
//         setSearch(event.target.value);
//         param2.onChangeInputSearch(event.target.value);
//     }

//     return (
//         <>
//             <div>
//                 Cari Artikel : <input onChange={onSearchChange} />{""}
//             </div>
//             <small>Ditemukan {param2.totalPosts} dengan pencarian kata {search}</small>
        
//         </>
//     )

// }

// export default Search;


// conditional Rendering 2

// Article.jsx

// // function tambah(a, b) {
// //     return a + b
// // }

// const ArticleStatus = ({isNew}) => {
//     return isNew && <span> New Update!</span>;
// };

// const ArticleStatus2 = () => {
//     return <span> --New Update! 2</span>;
// };

// function Article (param1) {

//     return (
//         <>
//            <h3>{param1.title}</h3>
//            <small>
//             Date : {param1.date}, 
//             Tags : {param1.tags.join(", ")}, 
            
//             {/* conditional rendering  */}
//             {/* {param1.isNew ? " New Article "  : "Past Article"}  */}
//             {/* {param1.isNew && " New Update!"} */}

//             {/* conditional rendering melalui props */}
//             <ArticleStatus isNew={param1.isNew} />

//             {/* another tries */}
//             {param1.isNew && <ArticleStatus2 />}
//             </small>
            
            
//         </>
//     );
// }

// export default Article;


// onclick Methods

// Search.jsx 

// import { useState } from 'react';


// function Search(param2) {
//     const [search, setSearch] = useState("");

//     const onSearchChange = () => {
//         // setSearch(event.target.value);
//         param2.onChangeInputSearch(search);
//     }


//     // const handleClick = () => {
//     //     console.log('test')
//     // }

//     const searchKeydown = (e) => {
//         if ((e.key === "Enter")){
//             onSearchChange();
//         }
//     };

//     return (
//         <>
//             <div>
//                 Cari Artikel : <input onChange={e => setSearch(e.target.value)} onKeyDown={searchKeydown} ></input> 
//                 <button onClick={onSearchChange}>Cari</button>
//             </div>
//             <small>Ditemukan {param2.totalPosts} dengan pencarian kata {search}</small>
        
//         </>
//     )

// }

// export default Search;


// Lifecycle dan useEffect

// index.jsx 

// import posts from '../posts.json';
// import Article from '../components/Article';
// import Search from '../components/Search';
// import { useState, useEffect } from 'react';

// function Homepage() {

//     // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
//     const [param3, setParam3] = useState(posts);
//     const [totalPosts, setTotalPost] = useState(0)



//     // fungsi ini untuk memfilter isi artikel yang ada
//     const onSearchChange1 = (value) => {
//         console.log(value);
//         const filterPosts = posts.filter(item => item.title.includes(value));
//         setParam3(filterPosts);

//         // ini bagian pembaruan untuk total value didapatkan untuk totalposts
//         setTotalPost(filterPosts.length);
//     };


//     // componenentDidMount  =  Cocok untuk inisialisasi yang memerlukan DOM, seperti pengambilan data (fetching data), penambahan event listeners, atau integrasi dengan library pihak ketiga.

//     // componenentDidUpdate  = Berguna untuk melakukan tindakan yang bergantung pada perubahan props atau state, seperti memperbarui DOM berdasarkan perubahan data atau mengambil data baru ketika props tertentu berubah.

//     // componenentWillUnmount  = Digunakan untuk melakukan pembersihan, seperti menghapus event listeners, membatalkan permintaan jaringan, atau menghentikan interval/timer.

//     useEffect(() => {
//         console.log("ada perubaha di state yang ditentukan ini");

//         // setInterval

//         return () =>{
//             // removeEventListener
//             // clearInterval
//             console.log("bersihkan")
//         }
//     },[posts]);
//     //[] menjalankan 1x sehingga useeffect tidak digunakan berkali2 saat diapnggil



//     return (
//         <>
//             <h1>Hello Library.</h1>
//             <Search onChangeInputSearch={onSearchChange1} totalPosts={totalPosts}/>
           

//             {param3.map((bebasae, index) => {
//                 return (
//                     // <Article title={title} tags={tags} date={date} />
//                     <Article {...bebasae} key={index} />
//                     );
//             })}
//         </>
//     );
// }

// export default Homepage;

// Fetch API dengan useEffect

// import posts from '../posts.json';
// import Article from '../components/Article';
// import Search from '../components/Search';
// import { useState, useEffect } from 'react';

// function Homepage() {

//     // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
//     const [param3, setParam3] = useState(posts);
    
//     // ini digunakan untuk memberi nilai value dari data pencarian
//     const [totalPosts, setTotalPost] = useState(0)

//     // untuk fetching data ke dalam article
//     const [externalPosts, setExternalPosts] = useState([])



//     // fungsi ini untuk memfilter isi artikel yang ada
//     const onSearchChange1 = (value) => {
//         console.log(value);
//         const filterPosts = posts.filter(item => item.title.includes(value));
//         setParam3(filterPosts);

//         // ini bagian pembaruan untuk total value didapatkan untuk totalposts
//         setTotalPost(filterPosts.length);
//     };


//     // componenentDidMount  =  Cocok untuk inisialisasi yang memerlukan DOM, seperti pengambilan data (fetching data), penambahan event listeners, atau integrasi dengan library pihak ketiga.

//     // componenentDidUpdate  = Berguna untuk melakukan tindakan yang bergantung pada perubahan props atau state, seperti memperbarui DOM berdasarkan perubahan data atau mengambil data baru ketika props tertentu berubah.

//     // componenentWillUnmount  = Digunakan untuk melakukan pembersihan, seperti menghapus event listeners, membatalkan permintaan jaringan, atau menghentikan interval/timer.

//     // useEffect(() => {
//     //     console.log("ada perubaha di state yang ditentukan ini");

//     //     // setInterval

//     //       return () =>{
//     //         // removeEventListener
//     //         // clearInterval
//     //         console.log("bersihkan")
//     //     }
//     // },[posts]);
//     //[] menjalankan 1x sehingga useeffect tidak digunakan berkali2 saat diapnggil




//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//          .then((response) => response.json())
//          .then((json) => setExternalPosts(json));
//     },[]);



//     return (
//         <>
//             <h1>Hello Library.</h1>
//             <Search onChangeInputSearch={onSearchChange1} totalPosts={totalPosts}/>
           

//             {param3.map((bebasae, index) => {
//                 return (
//                     // <Article title={title} tags={tags} date={date} />
//                     <Article {...bebasae} key={index} />
//                     );
//             })}
//             <hr />
//             <h2>External Posts Start Here</h2>
//             {externalPosts.map((item, index) => (
//                 <div key={index}>- {item.title}</div>
//             ))};
//         </>
//     );
// }

// export default Homepage;


// Multiple useEffect

// import posts from '../posts.json';
// import Article from '../components/Article';
// import Search from '../components/Search';
// import { useState, useEffect } from 'react';

// function Homepage() {

//     // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
//     const [param3, setParam3] = useState(posts);
    
//     // ini digunakan untuk memberi nilai value dari data pencarian
//     const [totalPosts, setTotalPost] = useState(0)

//     // untuk fetching data ke dalam article
//     const [externalPosts, setExternalPosts] = useState([])



//     // fungsi ini untuk memfilter isi artikel yang ada
//     const onSearchChange1 = (value) => {
//         console.log(value);
//         const filterPosts = posts.filter(item => item.title.includes(value));
//         setParam3(filterPosts);

//         // ini bagian pembaruan untuk total value didapatkan untuk totalposts
//         setTotalPost(filterPosts.length);
//     };


//     // componenentDidMount  =  Cocok untuk inisialisasi yang memerlukan DOM, seperti pengambilan data (fetching data), penambahan event listeners, atau integrasi dengan library pihak ketiga.

//     // componenentDidUpdate  = Berguna untuk melakukan tindakan yang bergantung pada perubahan props atau state, seperti memperbarui DOM berdasarkan perubahan data atau mengambil data baru ketika props tertentu berubah.

//     // componenentWillUnmount  = Digunakan untuk melakukan pembersihan, seperti menghapus event listeners, membatalkan permintaan jaringan, atau menghentikan interval/timer.

//     // useEffect(() => {
//     //     console.log("ada perubaha di state yang ditentukan ini");

//     //     // setInterval

//     //       return () =>{
//     //         // removeEventListener
//     //         // clearInterval
//     //         console.log("bersihkan")
//     //     }
//     // },[posts]);
//     //[] menjalankan 1x sehingga useeffect tidak digunakan berkali2 saat diapnggil




//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//          .then((response) => response.json())
//          .then((json) => setExternalPosts(json));
//     },[]);

//     useEffect(() => {
//         console.log("new post just added");
//     },[param3]);

//     useEffect(() => {
//         console.log("ini akan memanggil ulang terus tanpa adanya []");
//     });



//     return (
//         <>
//             <h1>Hello Library.</h1>
//             <Search onChangeInputSearch={onSearchChange1} totalPosts={totalPosts}/>
           

//             {param3.map((bebasae, index) => {
//                 return (
//                     // <Article title={title} tags={tags} date={date} />
//                     <Article {...bebasae} key={index} />
//                     );
//             })}
//             <hr />
//             <h2>External Posts Start Here</h2>
//             {externalPosts.map((item, index) => (
//                 <div key={index}>- {item.title}</div>
//             ))};
//         </>
//     );
// }

// export default Homepage;

// dasar state management dengan useContext

// index.js
// import { createContext } from "react";



// export const GlobalContext = createContext(null)

// App.jsx

// import './App.css'
// import Rumah from './pages'
// import { GlobalContext } from './context'
// import Article from "./react-fundamental/src/components/Article";

// function App() {
//   // const value = true;
//   const user = {
//     username: 'Xnaizer'
//   };

//   return (
//     <>
//       {/* conditional rendering digunakan untuk state yang dinamis */}
//       {/* {value ? 'benar' : 'salah'}  */}

//       <GlobalContext.Provider value={user}>

//       <Rumah />
//       </GlobalContext.Provider>
     
         
//     </>
//   );
// }

// export default App


// Article.jsx

// import { useContext } from "react";
// import { GlobalContext } from "../context";

// // function tambah(a, b) {
// //     return a + b
// // }

// const ArticleStatus = ({isNew}) => {
//     return isNew && <span> New Update!</span>;
// };

// // const ArticleStatus2 = () => {
// //     return <span> --New Update! 2</span>;
// // };

// function Article (param1) {

//     const user = useContext(GlobalContext);

//     return (
//         <>
//            <h3>{param1.title}</h3>
//            <small>
//             Date : {param1.date}, 
//             Tags : {param1.tags.join(", ")}, 
            
//             {/* conditional rendering  */}
//             {/* {param1.isNew ? " New Article "  : "Past Article"}  */}
//             {/* {param1.isNew && " New Update!"} */}

//             {/* conditional rendering melalui props */}
//             <ArticleStatus isNew={param1.isNew} />

//             {/* another tries */}
//             {/* {param1.isNew && <ArticleStatus2 />} */}
//             </small>
//             <div>
//                 <small>Ditulis Oleh {user.username}</small>
//             </div>
            
            
//         </>
//     );
// }

// export default Article;


// menginstall React Router

// routers/index.jsx

// import { createBrowserRouter } from "react-router-dom";
// import Rumah from '../pages'


// export const router = createBrowserRouter([
//     {
//        path: "/",
//        element: <Rumah /> 
//     }
// ])

// app.jsx 

// import './App.css'
// import Rumah from './pages'
// import { GlobalContext } from './context'
// import { router} from "./routers"
// import { RouterProvider } from 'react-router-dom'

// function App() {
//   // const value = true;
//   const user = {
//     username: 'Xnaizer'
//   };

//   return (
//     <>
//       {/* conditional rendering digunakan untuk state yang dinamis */}
//       {/* {value ? 'benar' : 'salah'}  */}

//       <GlobalContext.Provider value={user}>
//         <RouterProvider router={router} />
      
//       </GlobalContext.Provider>
     
         
//     </>
//   );
// }

// export default App


// halaman about

// About.jsx 

// function About () {
//     return <div>Ini Halaman About</div>;
// }

// export default About;




// routers/index.jsx 

// import { createBrowserRouter } from "react-router-dom";
// import Rumah from '../pages/index';
// import About from "../pages/About";


// export const router = createBrowserRouter([
//     {
//        path: "/",
//        element: <Rumah />, 
//     },
//     {
//         path: "/about",
//         element: <About />,
//     }
// ]);



// Layouting dan Children Routes

// RootLayout.jsx 

// import { Link, Outlet } from "react-router-dom";

// function RootLayout() {
//     return (
//         <>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//         <p />
//         <Outlet />
//         </>
//     );
// }

// export default RootLayout;


// router.jsx 

// import { createBrowserRouter } from "react-router-dom";

// import RootLayout from "../layouts/RootLayout";

// import Rumah from '../pages/index';
// import About from "../pages/About";


// export const router = createBrowserRouter([
//     {
//        path: "/",
//        element: <RootLayout />, 
//        children: [
//         {
//             path: "/",
//             element: <Rumah />,
//         },
//         {
//             path: "/about",
//             element: <About />,
//         }
//        ]
//     }
// ]);


// Halaman Blog

// blogs index.jsx

// import { useState, useEffect } from 'react';

// function Blog () {
//     // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
//     const [param3, setParam3] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then((json) => setParam3(json));
//     },[]);

//     return (
//         <>
//             <h2>My Blog Posts</h2>
//             {param3.map((item, index) => (
//                 <div key={index}>- {item.title}</div>
//             ))}
//         </>
//     )
// }

// export default Blog;

// RootLayout.jsx

// import { Link, Outlet } from "react-router-dom";

// function RootLayout() {
//     return (
//         <>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/blog">Blog</Link>
//         <p />
//         <Outlet />
//         </>
//     );
// }

// export default RootLayout;


// pages index.jsx
// import posts from '../posts.json';
// import Article from '../components/Article';
// import Search from '../components/Search';
// import { useState, useEffect } from 'react';

// function Homepage() {

//     // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
//     const [param3, setParam3] = useState(posts);
    
//     // ini digunakan untuk memberi nilai value dari data pencarian
//     const [totalPosts, setTotalPost] = useState(0)


//     // fungsi ini untuk memfilter isi artikel yang ada
//     const onSearchChange1 = (value) => {
//         console.log(value);
//         const filterPosts = posts.filter(item => item.title.includes(value));
//         setParam3(filterPosts);

//         // ini bagian pembaruan untuk total value didapatkan untuk totalposts
//         setTotalPost(filterPosts.length);
//     };

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then((json) => setExternalPosts(json));
//     },[]);



//     return (
//         <>
//             <h1>Hello Library.</h1>
//             <Search onChangeInputSearch={onSearchChange1} totalPosts={totalPosts}/>
           

//             {param3.map((bebasae, index) => {
//                 return (
//                     // <Article title={title} tags={tags} date={date} />
//                     <Article {...bebasae} key={index} />
//                     );
//             })}
       
            
//         </>
//     );
// }

// export default Homepage;


// Dynamic parameter route dan menampilkan article

// router index.jsx 

// import { createBrowserRouter } from "react-router-dom";

// import RootLayout from "../layouts/RootLayout";

// import Rumah from '../pages/index';
// import About from "../pages/About";
// import Blog from "../pages/blogs/index";
// import Post from "../pages/blogs/_id";


// export const router = createBrowserRouter([
//     {
//        path: "/",
//        element: <RootLayout />, 
//        children: [
//         {
//             path: "/",
//             element: <Rumah />,
//         },
//         {
//             path: "/blog",
//             element: <Blog />,
//         },
//         {
//             path: "/blog/:id",
//             element: <Post />,
//         },
//         {
//             path: "/about",
//             element: <About />,
//         }
//        ]
//     }
// ]);

// pages blogs index.jsx

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Blog () {
//     // fungsi ini digunakan untuk memberikan nilai dari berapa banyak isi dari pencarian yang didapatkan
//     const [param3, setParam3] = useState([]);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then((json) => setParam3(json));
//     },[]);

//     return (
//         <>
//             <h2>My Blog Posts</h2>
//             {param3.map((item, index) => (
//                 <div key={index}>
//                     <Link to={`/blog/${item.id}`}>- {item.title}</Link>
//                 </div>
//             ))}
//         </>
//     )
// }

// export default Blog;

// pages blogs id.jsx

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function SinglePost(){
//     const params = useParams();
//     const [post, setPost] = useState('');

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//             .then((response) => response.json())
//             .then((json) => setPost(json));
//     },[]);


//     return (
//         <>
//             <h2>{post?.title}</h2>
//             {/* // ? digunakan untuk melakukan post dulu, maka setelah ada isinya baru lakukan tugas ini */}
//             <div>{post?.body}</div>

//         </>
//     )
// }

// export default SinglePost;



// React router data louder 

// router index.jsx 

// import { createBrowserRouter } from "react-router-dom";

// import RootLayout from "../layouts/RootLayout";

// import Rumah from '../pages/index';
// import About from "../pages/About";
// import Blog from "../pages/blogs/index";
// import Post from "../pages/blogs/_id";

// import { posts, postById } from "../apis/loaders";


// export const router = createBrowserRouter([
//     {
//        path: "/",
//        element: <RootLayout />, 
//        children: [
//         {
//             path: "/",
//             element: <Rumah />,
//         },
//         {
//             path: "/blog",
//             element: <Blog />,
//             loader: posts, 
//         },
//         {
//             path: "/blog/:id",
//             element: <Post />,
//             loader: postById,
//         },
//         {
//             path: "/about",
//             element: <About />,
//         }
//        ]
//     }
// ]);

// blogs index.jsx


// import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

// function Blog () {
    
//     const param3 = useLoaderData()
    
//     return (
//         <>
//             <h2>My Blog Posts</h2>
//             {param3.map((item, index) => (
//                 <div key={index}>
//                     <Link to={`/blog/${item.id}`}>- {item.title}</Link>
//                 </div>
//             ))}
//         </>
//     )
// }

// export default Blog;

// blogs id.jsx


// import { useLoaderData } from "react-router-dom";


// function SinglePost(){
    
//     const post = useLoaderData();

//     return (
//         <>
//             <h2>{post?.title}</h2>
//             {/* // ? digunakan untuk melakukan post dulu, maka setelah ada isinya baru lakukan tugas ini */}
//             <div>{post?.body}</div>

//         </>
//     )
// }

// export default SinglePost;


// apis loader.jsx 

// export const posts = () => {
//     return fetch('https://jsonplaceholder.typicode.com/posts');
// };

// export const postById = ({ params }) => {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
// }


// Eror page

// component ErrorPage.jsx

// import { useRouteError } from "react-router-dom";

// function ErrorPage() {
//     const error = useRouteError();

//     return (
//         <>
//             <div>NYARI APA HAH!?!?!?!</div>
//             <div>GA ADA YANG BEGITUAN WOY</div>
//         </>
//     );
// }

// export default ErrorPage;

// router index.jsx
// import { createBrowserRouter } from "react-router-dom";

// import RootLayout from "../layouts/RootLayout";

// import Rumah from '../pages/index';
// import About from "../pages/About";
// import Blog from "../pages/blogs/index";
// import Post from "../pages/blogs/_id";

// import { posts, postById } from "../apis/loaders";

// import ErrorPage from "../components/ErrorPage";


// export const router = createBrowserRouter([
//     {
//        path: "/",
//        element: <RootLayout />, 
//        errorElement: <ErrorPage />,
//        children: [
//         {
//             path: "/",
//             element: <Rumah />,
//         },
//         {
//             path: "/blog",
//             element: <Blog />,
//             loader: posts, 
//         },
//         {
//             path: "/blog/:id",
//             element: <Post />,
//             loader: postById,
//         },
//         {
//             path: "/about",
//             element: <About />,
//         }
//        ]
//     }
// ]);