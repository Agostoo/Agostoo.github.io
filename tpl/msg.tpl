<div id="msgBox" ng-controller="msgCtrl">
    user:
    <input type="text" ng-model="username">
    age:
    <input type="text" ng-model="age">
    <input type="button" value="添加" ng-click="add()">
    <input type="button" value="清空" ng-click="clear()">

    <div ng-show="data.length==0">暂无留言</div>

    <ul>
        <li ng-repeat="item in data">
            我的名字为:{{item.name}}, 年龄为:{{item.age}}
            <a href="javascript:;" ng-click="delete($index)">删除</a>
        </li>
    </ul>
</div>
