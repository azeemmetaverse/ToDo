import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks: string[] = [];

const main = () => {
  const askForAction = () => {
    rl.question('Choose an action (add, list, quit): ', (action) => {
      if (action === 'add') {
        askForTaskDescription();
      } else if (action === 'list') {
        listTasks();
        askForAction();
      } else if (action === 'quit') {
        console.log('Goodbye!');
        rl.close();
      } else {
        console.log('Invalid action. Please try again.');
        askForAction();
      }
    });
  };

  const askForTaskDescription = () => {
    rl.question('Enter task description: ', (description) => {
      tasks.push(description);
      console.log('Task added.');
      askForAction();
    });
  };

  const listTasks = () => {
    console.log('Tasks:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  };

  askForAction();
};

main();
