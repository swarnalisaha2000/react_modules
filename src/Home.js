import React,{Component} from 'react';


class Home extends Component {
  render() {
  	const red=()=>
  	{
  		alert("red function called")
  	}
    return (
    	<div>
    	<h2 onClick={red}>Hi, I am a cat! and a dog. I love both</h2>
    	</div>
    	)
  }
}

export default Home;
