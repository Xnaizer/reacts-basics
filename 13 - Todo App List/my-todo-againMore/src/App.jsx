
import { useState } from "react";
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export default function App() {
    const [ data, setData ] = useState([
        {
            id: 1, aktivitas: "Makan Enak Di Haidilao", deskripsi: "gatau lagi gw bro mau ngisi apa untuk deskripsi ini", isKelar: false
        },
        {
            id: 2, aktivitas: "Makan Enak tpi kurang sehat di KFC", deskripsi: "gapaham deh gue", isKelar: true
        }
    ]);
    
    const [forms, setForms] = useState({
        id: 0,
        aktivitas: "",
        deskripsi: "",
        isKelar: false
    });


    return (
        <section>
            <Navbar />
            <BodyApp 
                data={data}
                setData={setData}
                forms={forms}
                setForms={setForms}
            />
            <Footer />
        </section>
    )
}