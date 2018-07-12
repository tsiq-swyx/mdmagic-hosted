import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LambdaDemo extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: false, msg: null };
	}

	handleClick = e => {
		e.preventDefault();

		this.setState({ loading: true });
		fetch('/.netlify/functions/hello', {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			// mode: "cors", // no-cors, cors, *same-origin
			// cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			// credentials: "same-origin", // include, same-origin, *omit
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			// redirect: "follow", // manual, *follow, error
			// referrer: "no-referrer", // no-referrer, *client
			body: JSON.stringify({ test: 1 }) // body data type must match "Content-Type" header
		})
			.then(response => response.json())
			.then(json => this.setState({ loading: false, msg: json.msg }));
	};

	render() {
		const { loading, msg } = this.state;

		return (
			<p>
				<button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button>
				<br />
				<span>{msg}</span>
			</p>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<LambdaDemo />
			</div>
		);
	}
}

export default App;
