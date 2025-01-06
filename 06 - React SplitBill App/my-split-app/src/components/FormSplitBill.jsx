import { useState } from "react";

function FormSplitBill({selectedFriend, handleSplitBill}) {

    const [amount, setAmount] = useState("");
    const [myBill, setMyBill] = useState("");
    const friendBill = amount? amount - myBill : "";
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    function handleSubmit(e) {
        e.preventDefault();
        if (!amount || !myBill) return;
        handleSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
    }

    return (
        <form
            className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg max-w-[1200px] mx-auto "
            onSubmit={handleSubmit}
            >   
            <h2 className="text-3xl font-bold text-center mb-8 mt-8">Split Bill With {selectedFriend.name}</h2>
                <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="font-semibold text-2xl">
                        Total Biaya
                    </label>
                    <input
                        
                        type="number"
                        placeholder="Masukkan Total Biaya"
                        className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-slate-500"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <label htmlFor="imageUrl" className="font-semibold text-2xl">
                        Tagihan Kamu
                    </label>
                    <input
                        
                        type="number"
                        placeholder="Masukkan Tagihan Kamu"
                        className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-slate-500"
                        value={myBill}
                        onChange={(e) => setMyBill(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <label htmlFor="imageUrl" className="font-semibold text-2xl">
                        Tagihan {selectedFriend.name}
                    </label>
                    <input
                        
                        type="number"
                        placeholder="Masukkan Tagihan Teman Kamu"
                        className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-slate-500"
                        disabled
                        value={friendBill}

                    />
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <label htmlFor="imageUrl" className="font-semibold text-2xl">
                        Dibayar Oleh Siapa?
                    </label>
                    <select 
                    className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-slate-500"
                    value={whoIsPaying}
                    onChange={(e) => setWhoIsPaying(e.target.value)}
                    >
                        <option value="user">Kamu</option>
                        <option value="friend">{selectedFriend.name}</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-slate-500 text-white px-6 py-8 rounded-md text-2xl font-bold hover:bg-slate-600 transition mt-6"
                >
                    Tambah
                </button>
            </form>
    );
}

export default FormSplitBill;