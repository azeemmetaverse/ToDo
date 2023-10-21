"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const tasks = [];
const main = () => {
    const askForAction = () => {
        rl.question('Choose an action (add, list, quit): ', (action) => {
            if (action === 'add') {
                askForTaskDescription();
            }
            else if (action === 'list') {
                listTasks();
                askForAction();
            }
            else if (action === 'quit') {
                console.log('Goodbye!');
                rl.close();
            }
            else {
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
