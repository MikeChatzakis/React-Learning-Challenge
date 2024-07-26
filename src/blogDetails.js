import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();

    const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();
    const handleClick= () => {
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'DELETE',
        })
        .then(() => {
            history.push('/');
        })
    }
    //console.count("Data:"+blog.author);


    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>Error:{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by:{blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <button onClick={handleClick}> Delete </button>

        </div>
    );
}
 
export default BlogDetails;