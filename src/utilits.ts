const conf = new (require('conf'))();
const chalk = require('chalk');
import { Dates } from './dates';
const dateModule = new Dates();
const figlet = require('figlet');

export class Utilits {
  usage() {
    const usageText = `
            tlp helps you manage and log your tasks focus on ONLY on task.
          
            usage:
              tlp <command>
          
              commands can be:
          
              start[s]:      used to start a new task
              stop[t]:      used to stop a task 
              status[st]: show the time elapsed within current task
              report: used to show all previous tasks's time[soon]
              help[h]:     used to print the usage guide
            `;

    console.log(usageText);
  }

  header() {
    console.log(chalk.yellow(figlet.textSync('TLP-CLI', { horizontalLayout: 'full' })));
  }

  stopTask(num?: number) {
    const tasksList = conf.get('task-list');

    if (!tasksList) {
      console.log(chalk.blueBright(`There is No tasks started before.`));
      return;
    }

    tasksList.forEach((currentTask: any, index: number) => {
      if (!currentTask.done) {
        tasksList[index].done = true;
        tasksList[index].finish = dateModule.getDiffrenceFromNow(currentTask.time);
        conf.set('task-list', tasksList);
        console.log(`Task done after ${dateModule.getDiffrenceFromNow(currentTask.time)} minutes.`);
      }
    });
  }

  getStatus() {
    const tasksList = conf.get('task-list');
    if (tasksList && tasksList.length) {
      tasksList.forEach((task: any, index: number) => {
        if (task.done) {
          console.log(
            chalk.greenBright(
              `${index} => ${task.text} after ${task.finish} minutes. [${dateModule.humanDate(new Date(task.time))}]`,
            ),
          );
        } else {
          console.log(chalk.yellowBright(`${index} => ${task.text}. [${dateModule.humanDate(new Date(task.time))}]`));
        }
      });
    } else {
      console.log(chalk.red.bold("You don't have any tasks yet."));
    }
  }

  getReport() {
    console.log(chalk.red.bold(`Comming soon :D .......`));
  }

  addTask(task: string[]) {
    const tasksList = conf.get('task-list') || [];
    const text = task.join(' ');

    tasksList.forEach((currentTask: any, index: number) => {
      if (!currentTask.done) {
        tasksList[index].done = true;
        tasksList[index].finish = dateModule.getDiffrenceFromNow(currentTask.time);
        conf.set('task-list', tasksList);
        console.log(
          chalk.blueBright(`Previous task ends now after ${dateModule.getDiffrenceFromNow(currentTask.time)} minutes.`),
        );
      }
    });

    tasksList.push({
      text,
      time: new Date().getTime(),
      done: false,
      finish: 0,
    });

    conf.set('task-list', tasksList);

    console.log(chalk.green.bold(`Starting ${text} at ${dateModule.humanDate(new Date())}`));
  }

  errorLog(error: string) {
    const eLog = chalk.red(error);
    console.log(eLog);
  }
}
