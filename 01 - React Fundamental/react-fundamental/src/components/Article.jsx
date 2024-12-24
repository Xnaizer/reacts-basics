// function tambah(a, b) {
//     return a + b
// }

function Article (param1) {

    return (
        <>
           <h3>{param1.title}</h3>
           <small>Date : {param1.date}, Tags : {param1.tags.join(",")}</small>
            
        </>
    )
}

export default Article;



