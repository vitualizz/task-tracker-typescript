# Roadmap.sh - Task Tracker - Typescript

[Tiktok](https://www.tiktok.com/@vitualizzLP) | [Roadmap.sh](https://roadmap.sh) | [Task Tracker Project](https://roadmap.sh/projects/task-tracker)

---

## *Requirements*

- **Node.js** >= 18.17.0
- **npm**

---

## *Installation*

1. Clone the repository
```bash
git clone https://github.com/vitualizz/task-tracker-typescript.git
cd task-tracker-typescript
```

2. Install dependencies
```bash
npm install
```

3. Run the project
```bash
npx ts-node src/cli.ts
```

---

## *Usage*

- **Add a task**
```bash
npx ts-node src/cli.ts add "Task description"
```

- **List all tasks or tasks by status**
```bash
npx ts-node src/cli.ts list

# Status: todo, in-progress, done
npx ts-node src/cli.ts list todo
npx ts-node src/cli.ts list in-progress
npx ts-node src/cli.ts list done
```

- **Update a task**
```bash
npx ts-node src/cli.ts update <task_id> "New task description"
```

- **Delete a task**
```bash
npx ts-node src/cli.ts delete <task_id>
```

- **Mark in progress**
```bash
npx ts-node src/cli.ts mark-in-progress <task_id>
```

- **Mark as done**
```bash
npx ts-node src/cli.ts mark-done <task_id>
```

---

With love, Vitualizz 🚀
