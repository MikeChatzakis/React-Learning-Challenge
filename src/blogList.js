import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title}) => {
    return(
        <div className="blog-List">
            <h2>{title}</h2>
             {blogs.map((blog) =>(
               <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>By {blog.author}</p>
                        {/* <p>{blog.body}</p> */}
                    </Link>
               </div> 
            ))}
        </div>
    );
}

export default BlogList;