import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails'
import BlogUpdate from './BlogUpdate'

function App() {
  return (
	  <Router>
    		<div className="App">
    		    <Navbar />
    		    <div className="content">
	  		<Switch>
				<Route exact path="/">
					<Home />
	  			</Route>
				<Route path="/create">
					<Create />
	  			</Route>
				<Route path="/blogs/:id">
					<BlogDetails />
	  			</Route>
	  			<Route path="/update/:id">
					<BlogUpdate />
	  			</Route>
	  			<Route render={() => <h1>Page Not Found</h1>} />
	  		</Switch>
	  		
    		    </div>
    		</div>
	  </Router>
  );
}

export default App;
