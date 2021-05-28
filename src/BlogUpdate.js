import { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import useFetch from './useFetch';



const BlogUpdate = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('');
	const [isPending, setIsPending] = useState(false)
	const history = useHistory();
	const {id} = useParams()
	const {data: blog, isLoading, error} = useFetch("http://localhost:8000/blogs/" + id);
	
	const handleSubmit = (e) => {
		setIsPending(true);

		fetch("http://localhost:8000/blogs/"+ blog.id, {
			method : "PUT",
			headers : {'Content-type': 'application/json; charset=UTF-8',},
			body : JSON.stringify(blog)
		})
		.then(() => {
			setIsPending(false)
			history.push('/')

		})
	}	
	const cancelHandle = () =>{
		history.push('/')
	}
 	return(
		<div className="update">
			{ isLoading && <div>Loading...</div>}
			{ error && <div>{error}</div>}
			<h1>Updating blog</h1>
			<form onSubmit={handleSubmit}>
				<label>Blog title: </label>
				<input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
				<label>Blog body: </label>
				<textarea required value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
				<label>Blog author: </label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
				</select>
				<button onClick={cancelHandle}>Cancel</button>
				{ !isPending && <button>Update</button> }
				{ isPending && <button disabled>Updating blog....</button> }
			</form>
		</div>
	)
}

export default BlogUpdate;
