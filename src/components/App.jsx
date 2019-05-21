import React from 'react';
import './button-styles.css';

// const App = (props) => {
//     return <h1>{props.name}</h1>;
// }

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
            hasLoaded: false,
            placeholder: "{this.state.text}"   //This can go within input OR here, right?
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleClick() {
        this.setState({ hasLoaded: true });    // Is this correct?
    }

    componentDidMount() {
        this.hasLoaded = true
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <>
                    <h1>Your buddy asks: {this.props.ask}</h1>
                    <h1>And you answer with: {this.state.text}</h1>
                    <input value={this.state.text} onChange={(e) => this.handleChange(e)} />
                    <button onClick={(e) => this.handleClick(e)}>Respond</button>
                </>
            )
        } else {
            return (
                <>
                    <h1>Loading...</h1>
                    <button onClick={this.handleClick}>Load it up!</button>
                </>
            )
        }
    }
}

export default App;

