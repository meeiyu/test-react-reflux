/** @jsx React.DOM */

'use strict';

var React  = require('react'),
    Reflux = require('reflux'),
    Action = require('./actions/actions'),
    Store  = require('./stores/store'),
    List   = require('./components/list'),
    ExampleApp;

ExampleApp = React.createClass({
    mixins:[Reflux.ListenerMixin],
    getInitialState: function () {
        return {
            data:''
        };
    },
    componentWillMount: function(){
        // this._status();
    },
    componentDidMount: function() {
        // this._status();
        this._init();
        
        
        // this.listenTo(Store, this._add);
    },
    _init:function(){
         Action.getList();
         this.listenTo(Store, function(data){
            this.setState({
                data:data
            });
        });
    },
    _add: function() {
        var val = this.refs.inputVal.getDOMNode().value;
        Action.updateList(val);
    },
    _status: function() {
        
        console.log('current data:', data);
        
    },
    render: function() {
        return (
            /*jshint ignore:start */
            <div className="container">
                <h2>Todo List</h2>
                <input type="text" ref="inputVal"></input>
                <p>
                    <button className="btn btn-info" type="button" onClick={this._add}>New Task</button>
                    {this.state.data}
                </p>
                <List />
                <footer>
                    <p>&copy; Mandy 2015</p>
                </footer>
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
