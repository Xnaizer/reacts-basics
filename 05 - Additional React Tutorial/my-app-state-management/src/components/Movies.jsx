

function Movies({title, price,id}) {
  return (
    <div className="flex flex-col bg-slate-500 text-white p-4">
        
        <h3>{id}. {title}</h3>
        <h2>{price}</h2>
    </div>
  )
}

export default Movies;