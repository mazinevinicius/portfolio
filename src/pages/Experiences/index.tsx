import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FiMapPin } from 'react-icons/fi'
import experiences from '../../data/Experiences/experiences'

import './styles.css'
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <>
            <div className="container">
                <div id="title">
                    <h1>Experiências Profissionais</h1>
                    <p>Locais de trabalho e funções desenvolvidas.</p>
                </div>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#4e73df', color: '#fafafa' }}
                            contentArrowStyle={{ borderRight: '7px solid  #4e73df' }}
                            date={experience.date}
                            iconStyle={{ background: '#4e73df', color: '#fafafa' }}
                            icon={<experience.icon />}
                            key={index.valueOf()}
                        >
                            <h3 className="vertical-timeline-element-title">{experience.office}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
                            <h4><FiMapPin /> {experience.location}</h4>
                            <p>{experience.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Experience