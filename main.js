import React from 'react';
import ReactDOM from 'react-dom';
import Combobox from './components/Combobox'

var Combobox = React.createClass({
        render: function() {
          return (
            <p>Hello, Universe{this.props.name}</p>
          )
        }
      });
    
React.render(
  <Combobox name="Joy" />,
  document.getElementById('greeting-div')
);