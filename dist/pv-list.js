#!/usr/bin/env node --harmony --harmony_arrow_functions --harmony_modules
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _cliff = require('cliff');

var _cliff2 = _interopRequireDefault(_cliff);

var _story = require('./story');

var _story2 = _interopRequireDefault(_story);

_commander2['default'].option('-p, --project-id [projectId]', 'project id').option('-t, --token [token]', 'token').parse(process.argv);

_story2['default'].set({ projectId: _commander2['default'].projectId, token: _commander2['default'].token });
_story2['default'].getList().then(function (stories) {
  var formattedStories = stories.map(function (story) {
    return [story.id, story.estimate, story.name];
  });

  console.log(_cliff2['default'].stringifyRows(formattedStories));
})['catch'](function (err) {
  console.error(colors.red("error: " + err.data.general_problem));
});