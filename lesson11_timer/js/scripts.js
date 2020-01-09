class TimerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            timeLeft: null,
            tomer: null
        };
    }

    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) {
                clearInterval(timer);
            }
            this.setState({
                timeLeft: timeLeft

            });
        }, 1000);
        return this.setState({
            timeLeft: timeLeft,
            timer: timer
        });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Timer"
            ),
            React.createElement(
                "div",
                null,
                React.createElement(Button, { time: "5", startTimer: this.startTimer }),
                React.createElement(Button, { time: "15", startTimer: this.startTimer }),
                React.createElement(Button, { time: "25", startTimer: this.startTimer })
            ),
            React.createElement(TimerDisplay, { timeLeft: this.state.timeLeft }),
            React.createElement("audio", { id: "end", preload: "auto", src: "media/mp3.mp3" })
        );
    }
}

class Button extends React.Component {
    heandlerStartTime() {
        return this.props.startTimer(this.props.time);
    }

    render() {
        return React.createElement(
            "button",
            { onClick: this.heandlerStartTime.bind(this) },
            this.props.time,
            " sec."
        );
    }
}

class TimerDisplay extends React.Component {
    render() {
        if (this.props.timeLeft === 0) {
            document.getElementById("end").play();
        }

        if (this.props.timeLeft === 0 || this.props.timeLeft === null) {
            return React.createElement("div", null);
        }
        return React.createElement(
            "h1",
            null,
            "Time left: ",
            this.props.timeLeft
        );
    }
}

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(TimerWrapper, null)
), document.getElementById('content'));
