import {  useState } from "react";
// useEffect,


function Numerical() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }



    // btw bisa memakai 2 atau lebih useState berbeda yaa
    
    
    // const [count, setCount] = useState(() => {
    //     // ini akan merender sebelum webnya dijalankan
    //     return localStorage.getItem('count') || 0 // mengambil nilai count dari local storage
    // });

    // useEffect(() => {
    //     localStorage.setItem('count', count); // menyimpan nilai count di local storage
    // }, [count])


    // jikalau ingin setiap useState digunakan mau memanggil sebuah function, maka bisa dilakukan dengan cara ini

    // function countInitial() {
    //     console.log('ini count initial');
    //     return 1 ;
    // }

    // const [count, setCount] = useState(countInitial()); // ini akan memanggil function countInitial setiap usestate dijalankan.



    // ==========================================================

    // ini jika berurusan dengan objek

    // const [state, setState] = useState({
    //     count: 0,
    //     theme: 'light',

    // });
    // const count = state.count;
    // const theme = state.theme;

    // output di tampilan akan menjadi "0light"

    // dan jika ingin melakukan increment dan decrement, maka bisa dilakukan dengan cara ini

    // function decrement() {
    //     setState(prev => {
    //         return {
    //             count: prev.count - 1 // ketika dijalankan theme akan menghilang karna akan di overidding dengan semua hal yang perbarui 
    //         }
    //     })
    // }

    // jika mau themenya tidak berubah maka 

    // function decrement() {
    //     setState(prev => {
    //         return {
    //             ...prev, count: prev.count - 1  // tambahkan spread operator untuk menghindari overidding dan mengambil item dari prev item
    //         }
    //     })
    // }

    // =======================================================

    // function decrement() {
    //     setCount(count - 1);
    // }  //bisa dengan cara ini juga

    // const pengurangan = () => {
    //     setCount(count - 1);
    // } // bisa dengan cara ini juga

    // function increment() {  //bisa dengan cara ini juga
    //     setCount(count + 1);
    //     setCount(count + 1); // ini gabakalan berpengaruh karena hanya dapat digunakan sekali.
    // } // lalu caranya gimana bang messi ?

    // gini yah ade

    // function doubleIncrement() {
    //     setCount(count + 2); // ini bisa siiee cuma ga gini ye
    // }

    // function doubleIncrement() {
    //     setCount((prevCount) => prevCount + 1);
    //     setCount((prevCount) => prevCount + 1); // njir ai ini sangat membantu penulisan, serasa pro anjir, kalian yakin mau jadi web dev? yang ga jago bisa jadi professional bruh
    // } // kea gini bisa nih, karena previous count dipanggil lagi 


    const [doquote, setDoquote] = useState(false);

    async function fetchData() {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        setDoquote(`${data.quote} - ${data.author}`);
    }


    return (
        <>
            <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
                <h1 className="text-slate-800 font-semibold text-2xl "  >1. Simple Beginner</h1>

                <div className="flex justify-between items-center mt-4">
                    <button className="outline-none w-10 h-10 bg-slate-600 text-white rounded-full" onClick={() => { decrement(); fetchData(); }}>-</button>
                    <span className="text-slate-800 font-semibold text-2xl">{count}</span>
                    <button className="outline-none w-10 h-10 bg-slate-600 text-white rounded-full" onClick={() => { increment(); fetchData(); } }>+</button>
                </div>

                <div className="flex justify-center items-center mt-12">
                <h1 className="t text-slate-800 font-semibold text-xl">Quote Of The Day</h1>

                
                </div>
                <span className="mt-4 text-center">{doquote}</span>
                <div className="flex justify-center">
                    <button className="outline-none  bg-slate-600 text-white rounded-full mt-5 w-3/6 h-8 text-sm" onClick={fetchData}>Generate a Qoute</button>
                </div>
            </div>
        </>
    );
}





export default Numerical;