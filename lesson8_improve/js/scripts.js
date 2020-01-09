
import PropTypes from 'prop-types'; // ES6
class Content extends React.Component {
    render() {
        return React.createElement(DefaultButton, { titel: 'ok' });
    }
}

class DefaultButton extends React.Component {
    render() {
        return React.createElement(
            'button',
            null,
            this.props.buttonLabel
        );
    }
}

DefaultButton.defaultProps = { buttonLabel: 'submit'

    // DefaultButton.propTypes = {
    //     title: PropTypes.string
    // };

};ReactDOM.render(
// <div>
//     <Button buttonLabel="start"/>
//     <Button />
//     <Button />


// </div>

React.createElement(Content, null), document.getElementById('content'));
