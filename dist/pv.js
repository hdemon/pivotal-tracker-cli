#!/usr/bin/env node


"use strict";
var program = require('commander');

program.version('0.0.1').command('new [task]', 'create new task').command('list', 'show stories').parse(process.argv);