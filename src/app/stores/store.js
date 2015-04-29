/** @jsx React.DOM */

'use strict';

var Reflux = require('reflux'),
    Action = require('../actions/actions'),
    Store,
    data = {
  "code": 1,
  "msg": "Success",
  "result": {
    "total": 19,
    "data": [
      {
        "tag_id": 111586,
        "tag_type": "CHECKBOX",
        "chart_type": "PIE",
        "tag_group": null,
        "migo_tag_group": null,
        "name": "MIGO人群动态",
        "help": "{\"help\":\"MIGO所创建的人群标签\",\"DMP_TAG_TYPE\":\"1\",\"DMP_TAG_USE\":\"1\",\"DMP_TAG_UPDATE_RATE\":\"0\"}",
        "options": [
          {
            "tag_id": 111586,
            "option_id": 862640,
            "value": "2602",
            "name": "近期回头客",
            "count": "355",
            "desc": "最近的第一次购物且迅速复购的顾客",
            "is_checked": false,
            "option_group_id": 1642,
            "sub_options": []
          },
          {
            "tag_id": 111586,
            "option_id": 862641,
            "value": "2603",
            "name": "瞌睡客",
            "count": "3965",
            "desc": "接近成为沉睡客户的顾客",
            "is_checked": false,
            "option_group_id": 1642,
            "sub_options": []
          },
          {
            "tag_id": 111586,
            "option_id": 862642,
            "value": "2604",
            "name": "初睡客",
            "count": "4191",
            "desc": "刚刚符合沉睡顾客条件者",
            "is_checked": false,
            "option_group_id": 1642,
            "sub_options": []
          },
          {
            "tag_id": 111586,
            "option_id": 862643,
            "value": "2605",
            "name": "沉睡客",
            "count": "71677",
            "desc": "完全沈睡、购物机率低的顾客",
            "is_checked": false,
            "option_group_id": 1642,
            "sub_options": []
          },
          {
            "tag_id": 111586,
            "option_id": 862644,
            "value": "2600",
            "name": "新顾客",
            "count": "4535",
            "desc": "初次购物的顾客，尚未复购",
            "is_checked": false,
            "option_group_id": 1642,
            "sub_options": []
          },
          {
            "tag_id": 111586,
            "option_id": 862645,
            "value": "2601",
            "name": "常客",
            "count": "10313",
            "desc": "经常购物的常客",
            "is_checked": false,
            "option_group_id": 1642,
            "sub_options": []
          }
        ]
      },
      {
        "tag_id": 111587,
        "tag_type": "CHECKBOX",
        "chart_type": "PIE",
        "tag_group": null,
        "migo_tag_group": null,
        "name": "入店资历",
        "help": "{\"help\":\"MIGO所创建的Lifetime标签\",\"DMP_TAG_TYPE\":\"1\",\"DMP_TAG_USE\":\"1\",\"DMP_TAG_UPDATE_RATE\":\"0\"}",
        "options": [
          {
            "tag_id": 111587,
            "option_id": 862646,
            "value": "2200",
            "name": "早期",
            "count": "4232",
            "desc": "第一次购物时间距今最长的群组",
            "is_checked": false,
            "option_group_id": 1643,
            "sub_options": []
          },
          {
            "tag_id": 111587,
            "option_id": 862647,
            "value": "2201",
            "name": "中期",
            "count": "4198",
            "desc": "第一次购物时间距今居中的群组",
            "is_checked": false,
            "option_group_id": 1643,
            "sub_options": []
          },
          {
            "tag_id": 111587,
            "option_id": 862648,
            "value": "2202",
            "name": "后期",
            "count": "86606",
            "desc": "第一次购物时间距今时间最短的群组",
            "is_checked": false,
            "option_group_id": 1643,
            "sub_options": []
          }
        ]
      },
      {
        "tag_id": 111588,
        "tag_type": "CHECKBOX",
        "chart_type": "PIE",
        "tag_group": null,
        "migo_tag_group": null,
        "name": "购物机率预测",
        "help": "{\"help\":\"MIGO所创建的NPT7标签\",\"DMP_TAG_TYPE\":\"1\",\"DMP_TAG_USE\":\"1\",\"DMP_TAG_UPDATE_RATE\":\"0\"}",
        "options": [
          {
            "tag_id": 111588,
            "option_id": 862654,
            "value": "2000",
            "name": "NPT 7",
            "count": "4187",
            "desc": "数据预测会在未来第7天购物机率最高者",
            "is_checked": false,
            "option_group_id": 1644,
            "sub_options": []
          }
        ]
      },
      {
        "tag_id": 111589,
        "tag_type": "CHECKBOX",
        "chart_type": "PIE",
        "tag_group": null,
        "migo_tag_group": null,
        "name": "近期购物情境",
        "help": "{\"help\":\"MIGO 所创建的Rencency标签\",\"DMP_TAG_TYPE\":\"1\",\"DMP_TAG_USE\":\"1\",\"DMP_TAG_UPDATE_RATE\":\"0\"}",
        "options": [
          {
            "tag_id": 111589,
            "option_id": 862649,
            "value": "2300",
            "name": "最近买家",
            "count": "23877",
            "desc": "近期购物者",
            "is_checked": false,
            "option_group_id": 1645,
            "sub_options": []
          },
          {
            "tag_id": 111589,
            "option_id": 862650,
            "value": "2301",
            "name": "中期未购买家",
            "count": "23928",
            "desc": "未购时间居中者",
            "is_checked": false,
            "option_group_id": 1645,
            "sub_options": []
          },
          {
            "tag_id": 111589,
            "option_id": 862651,
            "value": "2302",
            "name": "长期未购买家",
            "count": "47231",
            "desc": "未购时间最长者",
            "is_checked": false,
            "option_group_id": 1645,
            "sub_options": []
          }
        ]
      },
      {
        "tag_id": 111591,
        "tag_type": "CHECKBOX",
        "chart_type": "PIE",
        "tag_group": null,
        "migo_tag_group": null,
        "name": "购物频率",
        "help": "{\"help\":\"MIGO所创建的Frequency标签\",\"DMP_TAG_TYPE\":\"1\",\"DMP_TAG_USE\":\"1\",\"DMP_TAG_UPDATE_RATE\":\"0\"}",
        "options": [
          {
            "tag_id": 111591,
            "option_id": 754613,
            "value": "2400",
            "name": "高频买家",
            "count": "5836",
            "desc": "购物频率最高的群组",
            "is_checked": false,
            "option_group_id": 1647,
            "sub_options": []
          },
          {
            "tag_id": 111591,
            "option_id": 754614,
            "value": "2401",
            "name": "中频买家",
            "count": "12783",
            "desc": "购物频率次高的群组",
            "is_checked": false,
            "option_group_id": 1647,
            "sub_options": []
          },
          {
            "tag_id": 111591,
            "option_id": 754615,
            "value": "2402",
            "name": "低频买家",
            "count": "76417",
            "desc": "购物频率最低的群组",
            "is_checked": false,
            "option_group_id": 1647,
            "sub_options": []
          }
        ]
      },
      {
        "tag_id": 111592,
        "tag_type": "CHECKBOX",
        "chart_type": "PIE",
        "tag_group": null,
        "migo_tag_group": null,
        "name": "购物金额",
        "help": "{\"help\":\"MIGO所创建的Monetary标签\",\"DMP_TAG_TYPE\":\"1\",\"DMP_TAG_USE\":\"1\",\"DMP_TAG_UPDATE_RATE\":\"0\"}",
        "options": [
          {
            "tag_id": 111592,
            "option_id": 754616,
            "value": "2500",
            "name": "高消费买家",
            "count": "24339",
            "desc": "购物金额最高的群组",
            "is_checked": false,
            "option_group_id": 1648,
            "sub_options": []
          },
          {
            "tag_id": 111592,
            "option_id": 754617,
            "value": "2501",
            "name": "中消费买家",
            "count": "24305",
            "desc": "购物金额次高的群组",
            "is_checked": false,
            "option_group_id": 1648,
            "sub_options": []
          },
          {
            "tag_id": 111592,
            "option_id": 754618,
            "value": "2502",
            "name": "低消费买家",
            "count": "46392",
            "desc": "购物金额最低的群组",
            "is_checked": false,
            "option_group_id": 1648,
            "sub_options": []
          }
        ]
      }
    ]
  }
};

Store = Reflux.createStore({
    // listenables: StatusAction,
    listenables: Action,
    init: function() {
        // this.result={    //我們可以在這裡做資料的整理和合併，最後再一併用api傳送到後端！
        //     {
        //         type:'reportList'
        //     }
        // };
        this.listenTo(Action.getList, this._getList);
        this.listenTo(Action.updateList, this._updateList);
    },
    _getList: function() {
        this.trigger(data);             //使用 trigger 讓元件知道 Store 有變化了
    },
    _updateList: function(name) {
        var newObj = {
            "name": name
        };

        console.log('Store _updateList',name);
        console.log(newObj);
        console.log(data.result.data);
        data.result.data.push(newObj); //將輸入的資料新增到DATA裏面
        this.trigger(data);            //使用 trigger 讓元件知道 Store 有變化了
    }
});

module.exports = Store;