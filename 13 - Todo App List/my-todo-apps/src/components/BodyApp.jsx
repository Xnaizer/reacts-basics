



export default function BodyApp({storageData, setStorageData, formData, setFormData}) {
    // console.log(storageData);
    

 
    return (
        <section className="w-full  mx-auto bg-slate-500 justify-center items-center flex flex-col" > 
            <form className="flex flex-col gap-4 max-w-md w-full mt-24" onSubmit={(e) =>{
                e.preventDefault()

                const newData = {
                    id: Date.now(),
                    activity : formData.activity,
                    description : formData.description,
                    isDone : false,
                };

                setStorageData([...storageData, newData])

                setFormData({
                    activity: "",
                    description: "",
                    isDone: false,
                })
            }

            }>
                <label htmlFor="activity" className="text-white text-lg font-semibold">Activity : </label>
                <input 
                    type="text" 
                    id="activity" 
                    className="p-2 rounded"
                    name="activity"
                    value={formData.activity}
                    onChange={
                        (e) => setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                        })
                    }
                />

                <label htmlFor="description" className="text-white text-lg font-semibold">Description : </label>
                <input 
                type="text" 
                id="description" 
                className="p-2 rounded"
                name="description"
                value={formData.description}
                onChange={
                    (e) => setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                    })
                }
                />
                <button className="bg-slate-700 hover:bg-slate-800  text-lg p-3 font-semibold rounded text-white mt-3">Submit</button>
            </form>

            <h1 className="mt-32 text-2xl text-white font-semibold">My Activities</h1>

            <section className="w-full max-w-2xl h-full mb-64  flex-wrap grid grid-cols-2 gap-12 ">
                
                {storageData.map(item =>
                    <div className=" bg-slate-500 border-[1px] p-4 mt-8 rounded border-slate-600 h-full max-h-fit" key={item.id} >
                        <h2 className={`text-xl font-semibold  p-1 ${item.isDone ? "text-red line-through" : "text-white"}`}>{item.activity}</h2>
                        <h3 className="text-sm mb-6 p-1 text-slate-100">{item.description}</h3>
                        <div className="flex gap-8 justify-center">
                            <button className="bg-slate-700 hover:bg-slate-800 text-white p-3 rounded" onClick={() => {
                                const data = storageData.map(items => {
                                    console.log(items.activity)
                                    console.log(items.description)
                                    console.log(item.isDone)

                                    return items.id === item.id ? {...items, isDone: !items.isDone} : items

                                })
                                setStorageData(data)
                                
                            }}   
                            >Selesai</button>
                            <button className="bg-slate-700 hover:bg-slate-800 text-white p-3 rounded" onClick={() => {
                                const deletingData = storageData.filter(items => items.id !== item.id)
                                setStorageData(deletingData)
                            }}>Hapus</button>
                        </div>
                    </div>
                    
                )}


                

                

                

            </section>

        </section>
    )
}