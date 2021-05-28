import { useParams, useHistory, Link } from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
	const {id} = useParams()
	const {data: blog, isLoading, error} = useFetch("http://localhost:8000/blogs/" + id);
	const history = useHistory();

	const handleDelete = () => {
		fetch("http://localhost:8000/blogs/" + blog.id, {
			method: "DELETE",
		})
		.then(() => {
			history.push('/')
		})
	}
	return (
		<div className="blog-details">
			{ isLoading && <div>Loading...</div>}
			{ error && <div>{error}</div>}
			{ blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>written by: {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleDelete}>Delete</button>
						<Link to={`/update/${blog.id}`}>
							<button className="update-button">Update</button> 
						</Link>
				</article>
			)}
		</div>
	)
}
export default BlogDetails;
