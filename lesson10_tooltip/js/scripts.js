class TimerWrapper extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                'Timer'
            ),
            React.createElement(
                'div',
                null,
                React.createElement(Button, null),
                React.createElement(Button, null),
                React.createElement(Button, null)
            )
        );
    }
}

class Button extends React.Component {
    render() {
        retur(React.createElement('button', null));
    }
}

class TimerDisplay extends React.Component {}

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(TimerWrapper, null)
), document.getElementById('content'));
