import { create } from "zustand";
import { useState } from "react";
const store = (set) => ({
  tasks: [
    { title: "test title", state: "ongoing" },
    { title: "new Task added", state: "planned" },
    { title: "completed task", state: "done" },
  ],
  draggedTask: null,
  setDraggedTask: (title) => set({ draggedTask: title }),
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

// const [isOpen, setIsOpen] = useState(false);
// const onClose = () => {};
// const onOpen = () => {};

export const useStore = create(store);
