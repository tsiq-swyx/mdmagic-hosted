import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import logo from './logo.svg';
import './App.css';

class LambdaDemo extends Component {
	state = { raw: 'please type some stuff', text: '' };

	handleRaw = e => {
		this.setState(() => ({ raw: e.target.value }));
	};
	convertRaw = e => {
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
			body: JSON.stringify(this.state.raw) // body data type must match "Content-Type" header
		}).then(response => console.log(response)); // response.json())
		// .then(json => this.setState({ test: false, msg: json.msg }));
		// this.setState(() => ({ text: processContent(e.target.value) }));
	};

	// handleClick = e => {
	// 	e.preventDefault();

	// 	this.setState({ loading: true });
	// };

	render() {
		const { text, raw } = this.state;

		return (
			<p>
				<Textarea
					// initialValue={`
					// Type some *markdown* here!
					// <!-- AUTO-GENERATED-CONTENT:START (TOC) -->
					// toc will be generated here
					// <!-- AUTO-GENERATED-CONTENT:END -->
					// # hello world

					// ## good morning

					// ## good afternoon

					// ## good night

					// `}

					value={raw}
					minRows={3}
					maxRows={6}
					buttonText="Magic!"
					onChange={this.handleRaw}
					value=""
				/>
				<p>{text}</p>
				<button onClick={this.convertRaw}> lskjd</button>
			</p>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header> */}
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<LambdaDemo />
			</div>
		);
	}
}

export default App;
