class Menu extends React.Component{
    render(){
        let menus = [
            'Home',
            'Service',
            'Link3',
            'Link 4',
        ]

         return(
            <div>
    <a href="">{menus.map((value, index, list)=>{
        console.log(value + "--position" + index + "--" + list)
        return <div key={index}>  <Link label={value}/></div>
    })}</a>
            </div>
         )
    }
}
class Link extends React.Component{
    render() {
        const url = "/" + this.props.label.toLowerCase().trim().replace(" ", "-")
        return (
            <div>
                <a href={url}>{this.props.label}</a>
            </div>
        )
    }
  
}



ReactDOM.render(
    
    <Menu />,
    
    document.getElementById('content')
)