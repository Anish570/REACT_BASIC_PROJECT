import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const getStorage = () => localStorage;

const courseStore = (set) => ({
  courses: [],
  addCouse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.couses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.couses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

const useCourseStore = create(
  // Provide the getStorage function to persist middleware
  devtools(persist(courseStore, { getStorage }), {
    name: "courses",
    storage: localStorage,
  })
);

export default useCourseStore;
