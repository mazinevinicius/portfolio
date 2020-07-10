import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import courses from '../../data/Education/courses'

import './styles.css'
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
    return (
        <>
            <div className="container">
                <div id="title">
                    <h1>Cursos e Formações</h1>
                    <p>Faculdade, cursos, treinamentos e outros aprendizados adquiridos.</p>
                </div>
                <VerticalTimeline>
                    {courses.map((course, index) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#4e73df', color: '#fafafa' }}
                            contentArrowStyle={{ borderRight: '7px solid  #4e73df' }}
                            date={course.date}
                            iconStyle={{ background: '#4e73df', color: '#fafafa' }}
                            icon={<course.icon />}
                            key={index.valueOf()}
                        >
                            <h3 className="vertical-timeline-element-title">{course.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{course.institution}</h4>
                            <p>{course.description}</p>
                            <p>{course.tecnologies.join(' | ')}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education