// BodyApp.tsx
export default function BodyApp({forms, setForms, data, setData}) {
    return (
        <main className="w-full bg-slate-100 min-h-screen flex flex-col items-center py-16 px-4">
            <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg space-y-4" onSubmit={(e) => {
                e.preventDefault();

                const dataBaru = {
                    id: new Date(),
                    aktivitas: forms.aktivitas,
                    deskripsi: forms.deskripsi,
                    isKelar: false
                }

                setData((prev) => [...prev, dataBaru]);

                setForms({
                    aktivitas:"",
                    deskripsi:""
                })
                
            }}>
                <h2 className="text-xl font-semibold text-slate-800">Add New Aktifitas</h2>

                <div className="flex flex-col">
                    <label htmlFor="aktifitas" className="text-slate-700 font-medium">Aktivitas</label>
                    <input
                        type="text"
                        id="aktivitas"
                        className="mt-1 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
                        name="aktivitas"
                        value={forms.aktivitas}
                        onChange={(e) => setForms({...forms, [e.target.name]: e.target.value})}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="deskripsi" className="text-slate-700 font-medium">Deskripsi</label>
                    <input
                        type="text"
                        id="deskripsi"
                        className="mt-1 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
                        name="deskripsi"
                        value={forms.deskripsi}
                        onChange={(e) => setForms({...forms, [e.target.name]: e.target.value})}
                    />
                </div>

                <button className="w-full bg-slate-700 hover:bg-slate-900 text-white py-2 rounded font-semibold transition duration-200">
                    Submit
                </button>
            </form>

            <section className="mt-16 w-full max-w-4xl">
                <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">📋 My Activities</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {data.map((item) => (
                        <div className="bg-white border border-slate-100 rounded-lg p-5 shadow-sm" key={item.id}>
                            <h4 className={`text-lg font-semibold ${item.isKelar ? "text-slate-600 line-through" : ""}`}>{item.aktivitas}</h4>

                            <p className="text-slate-600  mb-4">{item.deskripsi}</p>
                            <div className="flex justify-between">
                                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" 
                                onClick={() => {
                                    const ubah = data.map((itemss) => {
                                       return itemss.id === item.id ?  {...itemss, isKelar: !itemss.isKelar} : itemss
                                })
                                    setData(ubah)
                                }}
                                >
                                    Selesai
                                </button>
                                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                onClick={() => {
                                    setData(data.filter(items => items.id !== item.id))
                                    
                                }}

                                
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    ))}


                </div>
            </section>
        </main>
    );
}
