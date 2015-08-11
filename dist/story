"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var Story = (function () {
  function Story(info) {
    var _this = this;

    _classCallCheck(this, Story);

    Object.getOwnPropertyNames(info).forEach(function (property) {
      _this[property] = info[property];
    });
  }

  _createClass(Story, [{
    key: "fetch",
    value: function fetch() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "save",
    value: function save() {}
  }], [{
    key: "set",
    value: function set(metaInfo) {
      this.projectId = metaInfo.projectId;
      this.token = metaInfo.token;
    }
  }, {
    key: "getList",
    value: function getList() {
      var _this2 = this;

      var request = this._requestObject();
      request.method = "GET";

      return new Promise(function (resolve, reject) {
        (0, _axios2["default"])(request).then(function (response) {
          resolve(_this2._createStoriesFrom(response.data));
        })["catch"](reject);
      });
    }
  }, {
    key: "_requestObject",
    value: function _requestObject() {
      return {
        url: "https://www.pivotaltracker.com/services/v5/projects/" + this.projectId + "/stories",
        protocol: "https",
        headers: {
          "X-TrackerToken": this.token,
          "Content-Type": "application/json"
        },
        transformRequest: [function (data) {
          return JSON.stringify(data);
        }]
      };
    }
  }, {
    key: "_createStoriesFrom",
    value: function _createStoriesFrom(storyInfoArray) {
      var _this3 = this;

      return storyInfoArray.map(function (storyInfo) {
        return new _this3(storyInfo);
      });
    }
  }]);

  return Story;
})();

exports["default"] = Story;
module.exports = exports["default"];