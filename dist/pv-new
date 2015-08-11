#!/usr/bin/env node --harmony


"use strict";
var program = require('commander');
var axios = require('axios');
var colors = require('colors');

program.option('-p, --project-id [projectId]', 'project id').option('-t, --token [token]', 'token').parse(process.argv);

var args = program.args;

if (!args.length) {
  console.error('arguments required');
  process.exit(1);
}

var PROJECT_ID = program.projectId;
var TOKEN = program.token;
var taskName = args[0];
var estimate = Number(args[1]);

var request = {
  url: 'https://www.pivotaltracker.com/services/v5/projects/' + PROJECT_ID + '/stories',
  protocol: "https",
  method: "POST",
  headers: {
    "X-TrackerToken": TOKEN,
    "Content-Type": "application/json"
  },
  data: {
    current_state: "unscheduled",
    estimate: estimate,
    name: taskName
  },
  transformRequest: [function (data) {
    return JSON.stringify(data);
  }]
};

axios(request).then(function (response) {
  console.log(response);
})['catch'](function (err) {
  console.error(colors.red("error: " + err.data.general_problem));
});