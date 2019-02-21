// TODO
class GroceryListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      done: false
    };

  }

  onMouseOver() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseExit() {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    // changing our item to bold onMouseOver
    var style = {
      fontWeight: this.state.done ?  "800" : "100"
    };

    return (
      <li style={style} onMouseEnter={this.onMouseOver.bind(this)} onMouseLeave={this.onMouseExit.bind(this)}>{this.props.item}</li>
    );
  }
}

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) =>
      <GroceryListItem key={item} item={item}/>
      )
    }
  </ul>
);

ReactDOM.render(<GroceryList items={['apples', 'bananas', 'oranges']}/>, document.getElementById("app"));

