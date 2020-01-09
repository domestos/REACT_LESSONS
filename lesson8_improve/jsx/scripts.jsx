
import PropTypes from 'prop-types'; // ES6
class Content extends React.Component {
    render(){
        return <DefaultButton titel="ok"/>
    }
}

class DefaultButton extends React.Component{
    render(){
        return(
            <button>{this.props.buttonLabel}</button>
        )
    }
}

DefaultButton.defaultProps = { buttonLabel:'submit'}


// DefaultButton.propTypes = {
//     title: PropTypes.string
// };

ReactDOM.render(
    // <div>
    //     <Button buttonLabel="start"/>
    //     <Button />
    //     <Button />
       
      
    // </div>

    <Content />,
    
    document.getElementById('content')
)