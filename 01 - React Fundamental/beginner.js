// React adalah library javascript untuk membuat user interface, digunakan untuk membangun kode yang lebih efektif dan cepat. 

import { Component } from "react"

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
