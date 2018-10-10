/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    function HTML(size) {
        return String.raw`
<div layout="row" layout-align="space-around">
    <md-progress-circular md-diameter="`+size+String.raw`" ng-disabled="disabled()">
    </md-progress-circular>
</div>
`;
    }
    
    var ui = undefined;
    function CircNode(config) {
        try {
            var node = this;
            if(ui === undefined) {
                ui = RED.require("node-red-dashboard")(RED);
            }
            RED.nodes.createNode(this, config);
            var html = HTML(config.diameter);
            var done = ui.addWidget({
                node: node,
                width: config.width,
                height: config.height,
                format: html,
                templateScope: "local",
                group: config.group,
                emitOnlyNewValues: false,
                forwardInputMessages: true,
                storeFrontEndInputAsState: true,
                beforeEmit: function(msg, value) {
                    return { msg: { disabled: (value ? true: false) } };
                },
                convertBack: function (value) {
                    return value;
                },
                beforeSend: function (msg, orig) {
                    if (orig) {
                        return orig.msg;
                    }
                },
                initController: function($scope, events) {
                    $scope.disabled = function() {
                        return $scope.msg.disabled;
                    };
                }
            });
        }
        catch (e) {
            console.log(e);
        }
        node.on("close", done);
    }
    RED.nodes.registerType('ui_prog_circ', CircNode);
};
