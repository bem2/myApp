
/*var Layout = React.createClass (
    {
        getDefaultProps: function() {
    return { items: [
        { name: "Matthew", link: "https://bible.com/1/mat.1" },
  { name: "Mark", link: "https://bible.com/1/mrk.1" },
  { name: "Luke", link: "https://bible.com/1/luk.1" },
  { name: "John", link: "https://bible.com/1/jhn.1" }
    ] }
  },
  render: function() {

    var listItems = this.props.items.map(function(item) {
      return (
        <li key="{item.name}">
          <a href="{item.link}">{item.name}</a>
        </li>
      );
    });

    return (
        <ul>
          {listItems}
        </ul>
    );
  }
        
    });*/

  
var items = [
 { name: 'Home', link: './demo/partial/home.html' },
 { name: 'About', link: './demo/partial/home.html' },
 { name: 'Widget',link: './demo/partial/home.html' },
 { name: 'Others', link: './demo/partial/home.html' }
];

var RepeatModule = React.createClass({
 getDefaultProps: function() {
  return { items: [] }
 },
 render: function() {

  var listItems = this.props.items.map(function(item) {
   return (
    <li key={item.name}>
     <a className='button' href={item.link}>{item.name}</a>
    </li>
   );
  });

  return (
   <div className='pure-menu'>
    <ul className='col-md-12 nav navbar-nav'>
     {listItems}
    </ul>
   </div>
  );
 }
});

ReactDOM.render(<RepeatModule items={items} />,     
 document.getElementById('nav-Div'));
        
      