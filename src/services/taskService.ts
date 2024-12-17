import { TaskStatus } from "../constants/task"
import path from "path"
import fs from "fs"

interface Task {
  id: number
  description: string
  status: TaskStatus
  createdAt: string
  updatedAt: string
}

const fileTasksPath = path.join(__dirname + '/../../tasks.json')

const validateExistFileTask = () => {
  if (!fs.existsSync(fileTasksPath)) {
    fs.writeFileSync(fileTasksPath, '[]')
    return false
  }
  return true
}

const getTasks = (): Task[] => {
  if (!validateExistFileTask()) return []

  const data = fs.readFileSync(fileTasksPath, {
    encoding: 'utf8'
  })

  return JSON.parse(data) as Task[]
}

const saveTasks = (tasks: Task[]): void => {
  fs.writeFileSync(fileTasksPath, JSON.stringify(tasks))
}

export const addTask = (task: string) => {
  const tasks = getTasks();

  const newTask: Task = {
    id: tasks.length + 1,
    description: task,
    status: TaskStatus.Todo,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  tasks.push(newTask)

  saveTasks(tasks)
  console.log(`Task added successfully (ID: ${newTask.id})`)
}

export const updateTask = (id: string, task: string) => {
  const identifier = Number(id)

  if (isNaN(identifier)) {
    console.log('Id is not valid')
    return;
  }

  const tasks = getTasks()
  const taskIndex = tasks.findIndex((task) => task.id === identifier)

  if (taskIndex === -1) {
    console.log('Task not found')
    return;
  }

  tasks[taskIndex]['description'] = task
  tasks[taskIndex]['updatedAt'] = new Date().toISOString()

  saveTasks(tasks)
  console.log(`Task updated successfully (ID: ${id})`)
}

export const listTasks = (status?: string) => {
  if (status && !Object.values(TaskStatus).includes(status as TaskStatus)) {
    console.log('Status is not available')
    return;
  }

  let data = getTasks()

  if (status) {
    data = data.filter((task) => task.status === status)
  }
  
  console.table(data.length ? data : 'Not tasks')
}

export const deleteTask = (id: string) => {
  const identifier = Number(id)

  if (isNaN(identifier)) {
    console.log('Id is not valid')
    return;
  }

  const tasks = getTasks()
  const deletedTasks = tasks.filter((task) => task.id !== identifier)

  saveTasks(deletedTasks)
  console.log(`Task delete successfully (ID: ${id})`)
}

export const markStatus = (id: string, status: TaskStatus) => {
  const identifier = Number(id)

  if (isNaN(identifier)) {
    console.log('Id is not valid')
    return;
  }

  const tasks = getTasks()
  const taskIndex = tasks.findIndex((task) => task.id === identifier)

  if (taskIndex === -1) {
    console.log('Task not found')
    return;
  }

  tasks[taskIndex]['status'] = status
  tasks[taskIndex]['updatedAt'] = new Date().toISOString()

  saveTasks(tasks)
  console.log(`Task in ${status} successfully (ID: ${id})`)
}

export const markInProgressTask = (id: string) => markStatus(id, TaskStatus.InProgress)

export const markDoneTask = (id: string) => markStatus(id, TaskStatus.Done)
