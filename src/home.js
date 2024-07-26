// import {useState, useEffect} from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogData, isPending, Error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { Error && <div>{Error}</div>}
            { isPending && <div>Loading...</div> }
            { blogData && <BlogList blogs={blogData} title="All Blogs"></BlogList> }
        </div>
    );
}

export default Home;