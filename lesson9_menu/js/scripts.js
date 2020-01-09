class Menu extends React.Component {
    render() {
        let menus = ['Home', 'Service', 'Link3', 'Link 4'];

        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: '' },
                menus.map((value, index, list) => {
                    console.log(value + "--position" + index + "--" + list);
                    return React.createElement(
                        'div',
                        { key: index },
                        '  ',
                        React.createElement(Link, { label: value })
                    );
                })
            )
        );
    }
}
class Link extends React.Component {
    render() {
        const url = "/" + this.props.label.toLowerCase().trim().replace(" ", "-");
        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: url },
                this.props.label
            )
        );
    }

}

ReactDOM.render(React.createElement(Menu, null), document.getElementById('content'));
