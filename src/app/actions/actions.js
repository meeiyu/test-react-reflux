/** @jsx React.DOM */

'use strict';

var Reflux = require('reflux'),
    Actions;

Actions = Reflux.createActions([
    'getList',
    'updateList'
]);

module.exports = Actions;