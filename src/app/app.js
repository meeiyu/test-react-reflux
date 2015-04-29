/** @jsx React.DOM */

'use strict';

var React  = require('react'),
    Reflux = require('reflux'),
    Action = require('./actions/actions'),
    Store  = require('./stores/store'),
    List   = require('./components/list'),
    ExampleApp;

ExampleApp = React.createClass({
    mixins:[Reflux.ListenerMixin],   //Reflux.ListenerMixin 會幫我們 unsubscribe
    componentWillMount: function(){
        // this._status();
    },
    componentDidMount: function() {
        // this._status();
        // this.listenTo(Store, this._add);
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
                    <List />
                <p>
                    <button className="btn btn-info" type="button" onClick={this._add}>New Task</button>
                </p>
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
