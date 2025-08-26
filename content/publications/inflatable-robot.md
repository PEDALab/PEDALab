---
title: "Mobile and Inflatable Interface for Human Robot Interaction"
authors:
- Jonathan Jaramillo
- Andrew Lin
- Emma Sung
- Isabel Jane Hunt Richter
- Kirstin Petersen
date: "2021-07-14T00:00:00Z"
doi: "10.1109/UR52253.2021.9494648"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "2021 18th International Conference on Ubiquitous Robots"
# publication_short: ""

abstract: "Robots capable of engaging with individuals in large crowds can be of use in diverse scenarios such as festivals, conventions, and during building evacuation. Such situations pose a unique combination of hardware constraints involving safety for human contact, durability to withstand physical inter-action with novice users, agility to keep up with moving crowds in non-trivial terrains, versatility to adapt to the situation and audience, and low cost to permit mass deployment. Here, we present a new mobile robot platform composed of a small rover base and a soft human-scale inflatable interface, capable of visual, tactile, and audible human interaction. The inflatable interface allows the robot to maneuver discretely or in confined spaces when deflated, yet grow to encourage interaction; it combines an internal projector, a camera, speakers, and a microphone to emit and receive user information. The rover base is designed to keep up with humans at jogging speeds over relatively uneven terrain. Low weight further permits easy handling and transport. The entire robot costs less than 1.2K USD, and can serve as a general purpose, open source test platform for future human-robot interaction research."

# Summary. An optional shortened abstract.
summary: "We introduce a low-cost mobile robot platform with an inflatable human-scale interface, designed for safe and engaging human-robot interaction in crowded environments."

tags:
- Human-Robot Interaction
- Soft Robotics
- Inflatable Robots
- Mobile Robotics
featured: true

url_pdf: ''
url_dataset: ''
url_poster: ''
url_project: '/projects/martha'
url_slides: ''
url_source: ''
url_video: ''

# Featured image
image:
  filename: 'martha.png'
  caption: 'Inflatable interface robot for human-robot interaction'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
projects:
- martha

# Slides (optional).
slides: ""
---

## Introduction

Populated settings such as festivals, conventions, or emergency evacuations require efficient crowd management and safe information dissemination. Traditional service robots are often rigid, costly, and limited to structured indoor environments. To address these challenges, this work introduces a mobile robot with an inflatable interface that emphasizes safety, adaptability, agility, and affordability.

## Methodology

The platform, nicknamed *Martha*, combines a rover base with a soft, inflatable interface. The rover base uses skid steering, four motors, and a lightweight aluminum chassis, capable of jogging-speed locomotion over uneven terrain. The inflatable component is made of ripstop nylon and integrates a projector, camera, speakers, and microphone for multimodal interaction. The interface can expand to human-scale for engagement or contract to navigate confined spaces. All control runs on a Raspberry Pi 4 with a m...

## Results

The robot weighs 4.5 kg, travels at speeds up to 1.71 m/s, and supports over an hour of continuous operation. Its inflatable interface fully inflates in approximately 40 seconds and deflates in 50 seconds, enabling both compact storage and large-scale interaction. Gesture recognition, text-to-speech, and camera-projector-based input allow diverse human-robot interaction modes. The entire system costs approximately $1,200 USD and is composed primarily of off-the-shelf components and 3D-printed parts.

## Discussion

Compared with prior inflatable robots designed for specific groups (e.g., Puffy for children with developmental disorders), Martha broadens applicability to general audiences in public and emergency contexts. The inflatable design enhances safety, the modular software and hardware architecture facilitates adaptation, and the affordability promotes replication and mass deployment. The approach demonstrates how soft robotics can merge with mobile platforms to support scalable, interactive human-robot sys...

## Conclusion

This research introduces a mobile, inflatable-interface robot designed for robust, safe, and versatile human-robot interaction. Its lightweight, modular, and cost-effective design makes it suitable for both research and real-world applications in dynamic, crowded environments. Future work aims to integrate ROS-based autonomy, enhance gesture recognition, and explore additional mechanical capabilities for resilience and cooperative operation.
