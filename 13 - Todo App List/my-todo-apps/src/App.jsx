import { useState } from "react";
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export default function App() {
    const [storageData, setStorageData] = useState([
        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },
        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },
        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },
        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },
        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },{id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },
        
        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },
        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },
        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },
        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },

        {id:1 , activity : "Makan Enak Guys", description : "bener sekaliii", isDone: false },
        {id:2 ,activity : "Makan Enak Guys 1", description : "bener sekaliii 11", isDone: true },
    ]);
    const [formData, setFormData] = useState({
        activity : "",
        description : "",
        isDone : false,
    });

    


    return (
        <section>
            <Navbar />
            <BodyApp 
                storageData={storageData}
                setStorageData={setStorageData}
                formData={formData}
                setFormData={setFormData}
            />
            <Footer />
        </section>
    )
}