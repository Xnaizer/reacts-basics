import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"
import data from "./data.js"

// function App() {
//     return <h1>Hello React!</h1>
// }

function App() {
  return (
    <div className="container">
      <Header />

      <Menu />
      <Footer></Footer>
    </div>
  );
}

function Header() {
  // return <h1 style={{
  //   color : "red",
  //   fontSize : "50px",
  //   textTransform : "uppercase"
  // }}>Warteg Mang Udin</h1>;

  const warna1 = {
    color : "red",
    fontSize : "50px",
    textTransform : "uppercase"
  };

  return <h1 style={warna1}>Warteg Mang Udin</h1>


}

function Menu() {
  const foodys = data;
  // const foodys = [];
  const numFoods = foodys.length;
  
  return (
    <main className="menu">
      <h2>Menu Makanan Kami</h2>
      

      {numFoods > 0 ? (
        <React.Fragment>
          {/* react fragment digunakan untuk membuat jsx dapat menerima 2 lebih tag di sini ada tag ul dan p */}
          {/* <></> ini cara singkat react fragment */}
          <p>
              Aneka makanan Indonesia yang disajikan oleh warteg mang udin sebagai pemenuhan makanan kesehatan yang diperlukan dalam kehidupan
              sehari-hari.
          </p>
          
          <ul className="foods">
          {data.map((item) => (
            <Food foodObj = {item} key={item.nama}/>
          ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Hari Ini Sold Out!, Besok datang lagi ya!.</p>
      )}

      {/* <ul className="foods">
        {data.map((item) => (
          <Food foodObj = {item} key={item.nama}/>
        ))}
      </ul> */}

      {/* <Food nama="Xnaizer Choice" deskripsi="lorem adsdasda asdad asda sdadasd adad" harga={25000} foto="food/nasi-goreng.jpg" stock={Math.random() >= 0.5 ? true : false}/>

      <Food nama="Xnaizer Recommended" deskripsi="lorem adsdasda asdad asda sdadasd adad" harga={30000} foto="food/sate-ayam.jpg" stock={Math.random() >= 0.5 ? true : false}/> */}


    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;

  // if(hour < jamBuka || hour > jamTutup ){
  //   alert('Warteg Mang Udin Sedang Tutup')
  // } else {
  //   alert('Warteg Mang Udin Buka')
  // }

  // const isOpen = hour < jamBuka || hour > jamTutup;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if(isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />
    // return (
    //   <footer className="footer">
    //     <div className="order">
    //       <p>
    //       {new Date().getFullYear()} Warung Mang Udin | jam buka {jamBuka} - jam tutup {jamTutup}
    //       </p>

    //       <button className="btn">Order Now!</button>
    //     </div>
    //   </footer>
    // )
  } else {
    return <FooterClosedHour jamBuka={jamBuka} jamTutup={jamTutup} />
  }
}

function FooterOpenHour(props) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
        {new Date().getFullYear()} Warung Mang Udin | jam buka {`${props.jamBuka}.00`} - jam tutup {`${props.jamTutup}.00`}
        </p>

        <button className="btn">Order Now!</button>
      </div>
    </footer>
  )
}

function FooterClosedHour({jamBuka,jamTutup}) {
  return (
    <footer className="footer">
      <p>Sekarang Lagi Tutup Maap. Buka pada Jam {`${jamBuka}.00`} - {`${jamTutup}.00`}</p>
    </footer>
  )
}



  // return <footer className="footer">
  //   {/* {new Date().getFullYear()} Warung Mang Udin | jam buka {jamBuka} - jam tutup {jamTutup} */}
  //   {isOpen ? (
  //     <div className="order">
  //       <p>
  //       {new Date().getFullYear()} Warung Mang Udin | jam buka {jamBuka} - jam tutup {jamTutup}
  //       </p>

  //       <button className="btn">Order Now!</button>
  //     </div>
  //   ) : (
  //     <p>Sekarang Lagi Tutup, Maap.</p>
  //   )}

  //   </footer>;




function Food(props) {
  const { foto, nama, deskripsi, harga, stok } = props.foodObj;

  return (
    <li className={`food ${!stok ? "sold-out" : ""}`} >
      <img src={foto} />
      <div>
        <h2>{nama}</h2>
        <p>{deskripsi}</p>
        <span>{`Rp. ${harga}`}</span>
        
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
