import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Timeline() {


  return (
    <>
        <br/>
        <br/>
        <br/>
        <VerticalTimeline>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="november 2013"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.90)' }}
        //   icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">École Nonindo France</h3>
            <h4 className="vertical-timeline-element-subtitle">71320 St Eugène</h4>
            <p>
            Psychologie Chinoise avec Isabelle Laading <br/> <i>(que j'applique aussi aux animaux)</i>.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="mars 2014"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.90)' }}
        //   icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Alternation médecine équine</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
            Jérémie Ancelet - conseils en naturopathie spécialisés sur les équidés
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.90)' }}
        //   icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Soin aux pendules, méthode 4D</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
            Olivier Frémann - thérapeute et énergéticien humain <br/> <i>(que j'applique aussi aux animaux)</i>
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="février 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.90)' }}
        //   icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Communication connectée</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
            Bébés, enfants et animaux avec Stéphan Duthoit - Kinésiologie <br/> <i>(que j'applique aussi aux animaux)</i>
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Mai - Juin 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.90)' }}
        //   icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Kinésiologie</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>
            Olivier Frémann - thérapeute et énergéticien humain <br/> <i>(que j'applique aussi aux animaux)</i>
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Octobre 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.90)' }}
        //   icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Communication animale</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>
            Communication animale et outils de vie avec Laïla Del Monte
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="avril 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.90)' }}
        //   icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Extras sensorielles</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
            Capacités extras sensorielles avec Laïla Del Monte
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="novembre 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', transform: 'scale(0.90)' }}
        //   icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Pharmacopée Chinoise</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
            Pharmacopée Chinoise avec Isabelle Laading
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
  )
}