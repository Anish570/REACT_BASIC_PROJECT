import React from 'react'
import useCourseStore from '../app/courseStore'

const CourseList = () => {
    const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus
        })
    )

    return (
        <>
            {
                courses.map((course) => (
                    <li
                        className={`course-item`}
                        style={{
                            backgroundColor: course.completed ? "blue" : "white"
                        }}
                        key={course.id}
                    >
                        <span className='course-item-col-1'>
                            <input
                                checked={course.completed}
                                onChange={(e) => {
                                    toggleCourseStatus(course.id)
                                }}
                                type="checkbox" />
                        </span>
                        <span className='course-title'  > {course.title} </span>
                        <button className='delete btn' onClick={() => {
                            removeCourse(course.id)
                        }}>Delete</button>
                    </li>
                ))
            }
        </>
    )
}

export default CourseList
