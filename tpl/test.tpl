<div ng-controller="testCtrl">
   <h1>{{question.newtitle}}</h1>
    题目:<input type="text" ng-model="question.name" /><br />
    分数:<input type="text" ng-model="question.fraction" /><br />
    类型:<select ng-model="question.type">
    		<option value="1" selected>单选</option>
    		<option value="2">多选</option>
    	</select><br />
    选项:<button ng-click="addOption()">增加选项</button><br />
    <ul>
        <li ng-repeat="o in question.options">
            <b>{{$index+1}}.</b>
            <input type="text" ng-model="o.content" value="o.content" />
            <a href="javascript:void(0);" ng-click="delOption($index)">删除</a>
        </li>
    </ul>
    <hr>
    <div preview-panel>
        <h1>{{question.previewtitle}}</h1>
        <b>{{question.type | typeFilter}}{{question.name}}</b>({{question.fraction}}分)
        <ul>
            <li ng-repeat="o in question.options">
                <b>{{$index+1}}.</b>
                <input type="radio" name="optcheck" ng-show="question.type==1" />
                <input type="checkbox" ng-show="question.type==2" />
                {{o.content}}
            </li>
        </ul>
    </div>
</div>