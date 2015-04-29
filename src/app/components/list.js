/** @jsx React.DOM */

'use strict';

var React  = require('react'),
	Store  = require('../stores/store'),
    Action = require('../actions/actions'),
    Reflux = require('reflux'),
    List;

List = React.createClass({
    mixins:[Reflux.ListenerMixin],   //Reflux.ListenerMixin 會幫我們 unsubscribe
    getInitialState: function () {
        return {
            data:''
        };
    },
    componentDidMount: function() {
        // this._status();
        this._init();
        // this.listenTo(Store, this._add);
    },
    _init: function() {
        Action.getList();
        this.listenTo(Store, function(data){
            console.log(data);
            this.setState({
                data:data.result.data
            });
        });
    },
    _renderTags: function(tagData) {
        return tagData.map(function(item, i) {
            /*jshint ignore:start */
            return(
                <li key={i}>{item.name}</li>
            );
            /*jshint ignore:end */
        }.bind(this));
    },
    render: function() {
        var tags;
        if (this.state.data) {
            tags = this._renderTags(this.state.data);
        }
        return (
            /*jshint ignore:start */
                <ul>
                    {tags}
                </ul>
            /*jshint ignore:end */
        );
    }
});

module.exports = List;