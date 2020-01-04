
/**   Use the value */
// let heading =  <h1> Hello World! </h1>;


// ReactDOM.render(
//     heading,
//     document.getElementById("content")

// );

/** Use the class */
let value = 1;
let myStyle = { backgroundColor: "black", color: "white" };

class HelloWorld extends React.Component {
    getUrl() {
        return "https://google.com";
    }

    render() {
        if (value === 1) {
            let heading = React.createElement(
                "h1",
                { title: this.props.title, myName: this.props.myName },
                " Hello World! "
            );
            return React.createElement(
                "h1",
                { className: "myNyClass", style: myStyle },
                "Hellow",
                this.props.myName,
                heading,
                React.createElement(
                    "a",
                    { disabled: true, href: this.getUrl() },
                    "google"
                ),
                "World"
            );
        } else {
            return React.createElement(
                "h1",
                { style: { color: "red", backgroundColor: "green" } },
                "value > 1 "
            );
        }
    }
}

ReactDOM.render(React.createElement(HelloWorld, { title: "HELLO", myName: "Valera" }), document.getElementById("content"));
