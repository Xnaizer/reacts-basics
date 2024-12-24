// function tambah(a, b) {
//     return a + b
// }

const ArticleStatus = ({isNew}) => {
    return isNew && <span> New Update!</span>;
};

const ArticleStatus2 = () => {
    return <span> --New Update! 2</span>;
};

function Article (param1) {

    return (
        <>
           <h3>{param1.title}</h3>
           <small>
            Date : {param1.date}, 
            Tags : {param1.tags.join(", ")}, 
            
            {/* conditional rendering  */}
            {/* {param1.isNew ? " New Article "  : "Past Article"}  */}
            {/* {param1.isNew && " New Update!"} */}

            {/* conditional rendering melalui props */}
            <ArticleStatus isNew={param1.isNew} />

            {/* another tries */}
            {param1.isNew && <ArticleStatus2 />}
            </small>
            
            
        </>
    );
}

export default Article;



