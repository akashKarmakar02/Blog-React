const BlogList = (props) => {

    const blogs = props.blogs
    const handleDelete = props.handleDelete

    return (
        <div className="blog-list">
            <h2>{ props.title }</h2>
            { blogs.map((blog) => {
            return (<div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.auther }</p>
                <button onClick={() => handleDelete(blog.id)} >delete blog</button>
                <br />
            </div>)
        }) }
        </div>
    );
}
 
export default BlogList;