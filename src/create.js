import {useState} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Skata');
    const [error, setError] = useState(null);

    const [isPending, setIsPending] = useState(false);
    const history=useHistory();


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
            history.push('/blog/'+createdObject.id);
        })
        .catch((err) => {
            setError(err.message);
            console.log(error);
        })

       
    }

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