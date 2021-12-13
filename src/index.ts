#! /usr/bin/env node
import { Utilits } from './utilits';
const util = new Utilits();

const args = process.argv;

switch (args[2]) {
  case 'start':
  case 's':
    util.addTask(args.slice(2));
    break;
  case 'stop':
  case 't':
    util.stopTask();
    break;
  case 'status':
  case 'st':
    util.getStatus();
    break;
  case 'report':
    util.getReport();
    break;
  case 'help':
  case 'h':
    util.usage();
    break;
  default:
    util.header();
    util.usage();
    break;
}
