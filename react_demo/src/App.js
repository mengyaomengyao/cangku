import React from 'react';
import './App.css'

class App extends React.Component {
	render() {
		return (
			<div>
				{/* 这里专门用来接纳任何组件 */}
				{this.props.children}
			</div>
		)
	}
}

export default App
