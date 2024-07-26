import {useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Skata');
    const [error, setError] = useState(null);

    const [isPending, setIsPending] = useState(false);
    const history=useHistory();
    const [my_id, setId] = useState('null');

    
    
    
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog= {title,body,author};
        
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(createdObject  => {
            setIsPending(false);
            setId(createdObject.id);
            console.log("Here:"+my_id);
            history.push('/blog/'+createdObject.id);
        })

       
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const blog= {title,body,author};
        

    //     try {
    //         const res = await fetch('http://localhost:8000/blogs',{
    //             method: 'POST',
    //             headers: {"Content-type": "application/json"},
    //             body: JSON.stringify(blog)
    //         })

    //         if (!res.ok) {
    //             switch (res.status) {
    //                 case 400:
    //                     throw new Error('Bad Request: The server could not understand the request.');
    //                 case 401:
    //                     throw new Error('Unauthorized: Authentication is required or has failed.');
    //                 case 403:
    //                     throw new Error('Forbidden: You do not have permission to access this resource.');
    //                 case 404:
    //                     throw new Error('Not Found: The requested resource could not be found.');
    //                 case 500:
    //                     throw new Error('Internal Server Error: The server encountered an error.');
    //                 case 503:
    //                     throw new Error('Service Unavailable: The server is temporarily unavailable.');
    //                 default:
    //                     throw new Error(`Unexpected error: ${res.status}`);
    //             }
    //         }
    //         setIsPending(false);
                
                

    //         //history.push('http://localhost:3000/blog/'+await res.json().id);
    //         const createdObject =await res.json();
    //         setId(createdObject.id);
    //         console.log("here2:"+my_id);


    //     } catch (error) {
    //         setError(error.message);
    //     }
    // }








    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type='text'
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Type Blog title here...'
                ></input>
                <label> Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder='Type Blog info here...'
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mike">Mike</option>
                    <option value="Skata">Skata</option>
                    <option value="Pata">Pata</option>
                </select>
                {!isPending && <button>Add</button>}
                {isPending &&<button>Adding...</button>}
            </form>
        </div>
    );
}
 
export default Create;