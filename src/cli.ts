import { Command } from "./constants/command"
import { addTask, listTasks, deleteTask, markDoneTask, markInProgressTask, updateTask } from "./services/taskService"

const [ , , command, ...args] = process.argv

const commmandHandlers: Record<Command, (...args: string[]) => void> = {
  [Command.Add]: addTask,
  [Command.Update]: updateTask,
  [Command.List]: listTasks,
  [Command.Delete]: deleteTask,
  [Command.MarkInProgress]: markInProgressTask,
  [Command.MarkDone]: markDoneTask,
}

if (command in commmandHandlers) {
  commmandHandlers[command as Command](...args)
} else {
  console.log('Command not found')
}

