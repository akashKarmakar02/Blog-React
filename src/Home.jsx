import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Hello kolkata.....', auther: 'akash', id: 1},
        {title: 'Welcome Party!!', body: 'Hello kolkata.....', auther: 'anirban', id: 2},
        {title: 'Web dev pro', body: 'Hello kolkata.....', auther: 'ananya', id: 3},
    ])

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id))
    }

    useEffect(() => {
        console.log("use effect")
    })

    return (
        <div className="home">
            <BlogList blogs={ blogs } title = "All Blogs" handleDelete={ handleDelete }/>
        </div>
    );
}
 
export default Home;