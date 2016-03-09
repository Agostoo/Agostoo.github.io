<div ng-controller="shopCtrl">
    <h3>购物车:</h3>
    <ul>
        <li ng-repeat="item in data">
            商品名称：{{item.name}}
            <br>
            商品单价：{{item.price|currency}}
            <br>
            商品数量：
            <input type="number" ng-model="item.count" max="10" ng-change="change(item.count,$index)">
            <br>
            总价:{{item.price*item.count|currency}}
            <hr>
        </li>
    </ul>
    <div>共计:{{sum()|currency}}</div>
</div>
