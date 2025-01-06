
import { useState } from "react";

function FormAddFriend({handleAddFriend}) {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

    // setelah data di passing ke props dan di terima ke local maka kita membutuhkan function untuk menambahkan data ke friendsDataApp, oleh karena itu kita akan mengset datanya dengan bantuan dari useState.

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !imageUrl) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${imageUrl}?u=${id}`,
            balance: 0,
        };

        handleAddFriend(newFriend);
        setName("");        
        setImageUrl("https://i.pravatar.cc/48");
        
        
    }

    console.log(handleSubmit);
    


    return (
        <>
            <form
            className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg max-w-[1200px] mx-auto mt-12"
            onSubmit={handleSubmit}
            >   
            <h2 className="text-3xl font-bold text-center mb-8 mt-8">Add Your Friend!</h2>
                <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="font-semibold text-2xl" >
                        Nama
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Masukkan nama teman"
                        className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <label htmlFor="imageUrl" className="font-semibold text-2xl">
                        URL Gambar
                    </label>
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        type="text"
                        placeholder="Masukkan URL gambar"
                        className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-72 py-8 rounded-md text-2xl font-bold hover:bg-blue-600 transition mt-6"
                >
                    Tambah
                </button>
            </form>
        </>
    );
}

export default FormAddFriend;
