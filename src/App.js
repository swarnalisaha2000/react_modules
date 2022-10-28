import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import PostList from './components/PostList';
import PostForm from './components/PostForm';


function App() {
  return (
    <div className="App">
     <b> <PostList/></b>
      
      <PostForm/>
    </div>
  );
}
export default App;
