import { useEffect, useState } from 'react' // import fungsi dari react yaitu useEffect dan useState

// useState adalah hook yang digunakan untuk menyimpan dan mengelola state dalam komponen fungsional.

// useEffect adalah hook yang digunakan untuk menangani efek samping dalam komponen. Efek samping ini bisa berupa operasi seperti pengambilan data dari API, manipulasi DOM, atau pengaturan event listeners.

import './App.css' // importing css file 

function App() {  // membuat fungsi app
  
  const [quote, setQuote] = useState(''); // membuat get dan set quote dengan usestate ''



  // async adalah sebuah kata kunci dalam JavaScript yang digunakan untuk mendefinisikan fungsi yang bekerja secara asinkron (non-blocking). Fungsi yang dideklarasikan dengan async memungkinkan kita untuk menulis kode yang berhubungan dengan operasi asinkron, seperti pengambilan data dari API, dengan cara yang lebih mudah dibaca dan lebih mirip dengan kode sinkron.

  async function getQuote() {   // membuat fungsi getquote
    const res = await fetch("https://dummyjson.com/quotes/random"); // tunggu pengambilan data menggunakan fetch dari link ini
    const data = await res.json(); // ketika sudah selesai maka data dari res ubah ke json yaa sembari nunggu fetch didapatkan
    setQuote(`${data.quote} - ${data.author}`); // lalu ubah pembaruan menggunakan setQuote ya 
  }

  useEffect(function() { // ketika windows baru dimulai panggil ini
    getQuote(); // getquote dipanggil saat windows baru dimulai
  },[]) // Penjelasan tentang []:
  // [] sebagai dependency array berarti efek (fungsi dalam useEffect) hanya akan dijalankan sekali ketika komponen pertama kali dimuat (rendered), mirip dengan perilaku componentDidMount pada class component di React. Artinya, useEffect hanya akan dipanggil saat komponen pertama kali dimasukkan ke dalam DOM dan tidak akan dipanggil lagi setelah itu, meskipun ada perubahan state atau props.
  
  // Kenapa menggunakan []?
  // Dengan memberikan array kosong [] sebagai dependency array, kita memberi tahu React bahwa efek tersebut tidak bergantung pada nilai apapun yang berubah. Oleh karena itu, efek hanya akan dieksekusi sekali pada saat komponen pertama kali dimuat.


  return (
    <>
      <h1>Quote Of The Day</h1>
      <h2>{quote}</h2> 
      {/* jangan lupa quotenya masukan kesini supaya nilai yang berubah dapat ditampilkan */}

      <button onClick={getQuote}>Generate</button>
      {/* ketika tombol di klik jalanin fungsi getQuote ya */}

    </>
  )
}

export default App
