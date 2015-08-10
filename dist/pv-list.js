#!/usr/bin/env node --harmony --harmony_arrow_functions --harmony_modules


"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _story = require('./story');

var _story2 = _interopRequireDefault(_story);

var program = require('commander');

program.option('-p, --project-id [projectId]', 'project id').option('-t, --token [token]', 'token').parse(process.argv);

var PROJECT_ID = program.projectId;
var TOKEN = program.token;

_story2['default'].set({ projectId: PROJECT_ID, token: TOKEN });
_story2['default'].getList().then(function (stories) {
  console.log(stories);
})['catch'](function (err) {
  console.error(colors.red("error: " + err.data.general_problem));
});