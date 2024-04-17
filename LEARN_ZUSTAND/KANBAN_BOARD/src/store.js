import { create } from "zustand";

const store = (set) => {
  // Define initial state
  const initialState = {
    tasks: [
      { title: "test title", state: "ongoing" },
      { title: "new Task added", state: "planned" },
      { title: "completed task", state: "done" },
    ],
    draggedTask: null,
    useEdit: {
      title: "",
      isEdit: false,
      setEdit: (title, isEdit) =>
        set((state) => ({
          useEdit: {
            title: title,
            isEdit: isEdit,
          },
        })),
    },
  };

  // Return state and actions
  return {
    ...initialState,
    setDraggedTask: (title) => set({ draggedTask: title }),
    addTask: (title, state) =>
      set((store) => ({ tasks: [...store.tasks, { title, state }] })),
    updateTask: (title, updatedProperties) =>
      set((store) => ({
        tasks: store.tasks.map((task) =>
          task.title === title ? { ...task, ...updatedProperties } : task
        ),
      })),
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
  };
};

export const useStore = create(store);
