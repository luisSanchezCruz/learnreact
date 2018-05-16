//using React.createClass
var items = [
    "item 1",
    "item 2",
    "item 3"
];
const ingredientsList = React.createClass({
    displayName: "ingredients",
    renderListItems(item,i) {
        return React.createElement("li", {key:i}, item);
    },
    render() {
        return React.createElement("ul",
            {className:"ingredientsList"},
            this.props.items.map(renderListItems)
        );
    }
});

const list = React.createElement(ingredientsList,{items},null);

ReactDOM.render(list,document.getElementById('root'));

//using  React.Component
class IngredientsList extends React.Component {

    renderIngredientsList(indgredient, i) {
        return React.createElement("li", {key:i}, indgredient);
    }
    render() {
        return React.createElement("ul",
            {className:"ingredients"},
            this.props.items.map(this.renderIngredientsList)
        );
    }
}        

var list = React.createElement(IngredientsList, {items},null);

//stateless Functional Componenet
const Ul = (props) => 
React.createElement("ul",
    {className:""},
    props.items.map((ingredient, i) =>
        React.createElement("li", {key:i}, ingredient)
    )
)
const IngredientsList = ({items}) => 
React.createElement("ul",
    {className:"ingredientslist"},
    items.map((ingredient, i) => 
        React.createElement("li", {key:i}, ingredient)
    )
)



const list = IngredientsList({items});