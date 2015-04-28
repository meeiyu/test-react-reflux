/** @jsx React.DOM */

'use strict';

var Reflux = require('reflux'),
    Action = require('../actions/actions'),
    Store,
    data = {
        "name": "Mandy",
        "age": "30",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/picard102/128.jpg"
    };

Store = Reflux.createStore({
    // listenables: StatusAction,
    listenables: Action,
    init: function() {
        // this.result={
        //     {
        //         type:'reportList'
        //     }
        // };
        this.listenTo(Action.getList, this._getList);
        this.listenTo(Action.updateList, this._updateList);
    },
    _getList: function() {
        this.trigger(data.name); //使用 trigger 讓元件知道 Store 有變化了
    },
    _updateList: function(name) {
        console.log('_getList',name);
        data.name = name;
        this.trigger(data.name); //使用 trigger 讓元件知道 Store 有變化了
    }
});

module.exports = Store;