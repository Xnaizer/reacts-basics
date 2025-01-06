
function Navbar() {
    return (
        <div className="bg-slate-700 text-white p-10 flex justify-between items-center pl-12 ">
            <h1 className="text-3xl font-bold">Split Bill App</h1>
            <button className="bg-white text-slate-700 font-semibold py-4 px-6 rounded-lg text-lg">Logout</button>  
        </div>
    );
}

export default Navbar;