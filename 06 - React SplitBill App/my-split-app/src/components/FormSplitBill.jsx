
function FormSplitBill() {
    return (
        <form
            className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg max-w-[1200px] mx-auto mt-12"
            >   
            <h2 className="text-3xl font-bold text-center mb-8 mt-8">Split Bill With x</h2>
                <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="font-semibold text-2xl">
                        Total Biaya
                    </label>
                    <input
                        
                        type="text"
                        placeholder="Masukkan Total Biaya"
                        className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <label htmlFor="imageUrl" className="font-semibold text-2xl">
                        Tagihan Kamu
                    </label>
                    <input
                        
                        type="text"
                        placeholder="Masukkan Tagihan Kamu"
                        className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <label htmlFor="imageUrl" className="font-semibold text-2xl">
                        Tagihan Temen Kamu
                    </label>
                    <input
                        
                        type="text"
                        placeholder="Masukkan Tagihan Teman Kamu"
                        className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled
                    />
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <label htmlFor="imageUrl" className="font-semibold text-2xl">
                        Dibayar Oleh Siapa?
                    </label>
                    <select className="border border-gray-300 rounded-md p-6 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="user">Kamu</option>
                        <option value="friend">Teman Kamu</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-8 rounded-md text-2xl font-bold hover:bg-blue-600 transition mt-6"
                >
                    Tambah
                </button>
            </form>
    );
}

export default FormSplitBill;