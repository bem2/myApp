var Layout = React.createClass (
    {
        render: function()
        {
            returns(
    
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
        );
        }
        
    });

ReactDOM.Render(<Layout/>, document.getElementById('layout-Div'))
})