// TODO
// var App = () => (
//   <div>
//     <h1>Some cliche salutation</h1>
//   </div>

// );

// ReactDOM.render(<App />, document.getElementById("app"));

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <li>{this.props.item}</li>
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

ReactDOM.render(<GroceryList items={['apples', 'bananas', 'ornages']}/>, document.getElementById("app"));

