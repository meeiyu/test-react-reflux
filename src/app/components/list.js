/** @jsx React.DOM */

'use strict';

var React  = require('react'),
	Store  = require('../stores/store'),
    Action = require('../actions/actions'),
    Reflux = require('reflux'),
    List;

List = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
                <ul></ul>
            /*jshint ignore:end */
        );
    }
});

module.exports = List;