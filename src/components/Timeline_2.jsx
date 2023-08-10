import React from 'react';
import data from '../assets/xp.json';

const Timeline = () => {
  return (
    <>
    <div id='timeline'>
        <p id='formation'>Ma formation</p>
          <div id="timelinebox">
              {data.projects.map((item, index) => (
                  <TimelineItem
                      heading={item.title}
                      text={item.date}
                      skill={item.skill}
                      index={index}
                      key={index} />
              ))}
          </div>
      </div></>
  )
}

const TimelineItem = ({heading, text, skill, index}) => (
    <div className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"}`}>
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
            {
                Array.isArray(skill) ? 
                skill.map((s, idx) => <p key={idx}>{s}</p>) : 
                <p>{skill}</p>
            }
        </div>
    </div>
)

export default Timeline;
