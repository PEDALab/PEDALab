---
title: "Martha: Mobile and Inflatable Interface for Human-Robot Interaction"
date: "2021-07-12"
image:
  filename: "martha.png"  # Just the filename, both templates will add the /media/projects/ prefix
  focal_point: Top
summary: "An open-source, low-cost, soft-bodied mobile robot designed for safe, multimodal interaction in crowded and unstructured environments."
tags: ["robotics"]
demo: "https://www.youtube.com/watch?v=bGcoZnnLWrk"
team_members:
  - name: "Jonathan Jaramillo"
    role: "Lead Developer"
  - name: "Andrew Lin"
    role: "UGrad RA"
  - name: "Emma Sung"
    role: "UGrad RA"
  - name: "Isabel Jane Hunt Richter"
    role: "UGrad RA"
  - name: "Kirstin Petersen"
    role: "Principal Investigator"
---

## Overview

This project seeks to develop a novel human-robot interaction (HRI) platform that combines mobility, soft-bodied safety, and multimodal communication capabilities to support safe and engaging interactions with humans in public, crowded, and dynamic environments. Developed to meet the unique requirements of real-world deployments in settings like festivals, museums, or emergency scenarios, Martha integrates a soft inflatable interface with a robust mobile base capable of traversing uneven terrain at jogging speed. The inflatable interface supports visual projections, touch interactions, and audio communication, while deflating for compact navigation.

The robot platform is lightweight (4.5 kg), low-cost (under $1,200 USD), and fully open-source. Its modular design and use of off-the-shelf components make it easy to replicate and adapt in academic and applied research. The system architecture, implemented in Python on a Raspberry Pi 4, features multithreaded command handling, gesture recognition, and real-time communication via TCP and UDP protocols. Martha offers researchers and developers a powerful tool for studying and advancing human-robot interaction in realistic and complex settings.

## Objectives

- Develop a mobile HRI platform capable of safe, interactive engagement in unstructured and crowded environments.
- Utilize soft inflatable materials for safe physical interaction and adaptable interface design.
- Ensure low cost, modularity, and replicability to support academic research and widespread adoption.

## Description

Martha is built on a four-wheeled skid-steer rover platform capable of agile movement over indoor and outdoor surfaces. The inflatable upper body serves as an interactive interface, equipped with an internal camera-projector pair and microphone for multimodal feedback. The robot can inflate or deflate its interface, enabling both expressive communication and compact navigation.

The robot's onboard software enables remote control, gesture recognition using OpenCV, text-to-speech capabilities, and real-time video/audio streaming. Its multithreaded architecture ensures responsive operation even under high communication loads. Modular sensors, including RealSense depth cameras, ToF sensors, and IMUs, support navigation and context-aware behavior. The design prioritizes safety, adaptability, and ease of use.

## Impact

Martha expands the scope of HRI research by offering a deployable, affordable, and versatile platform for studying robot interaction in environments previously inaccessible to rigid and costly systems. By enabling visual, tactile, and audio communication in a safe, human-scale form, Martha is especially well-suited for deployment in public spaces, educational outreach, and emergency scenarios. The project contributes to the democratization of HRI research through open-source sharing of hardware designs and software frameworks.

## Future Work

- Integration with ROS to enable high-level autonomy, SLAM, and behavior coordination.
- Advanced gesture recognition using machine learning-based vision models.
- Exploration of cooperative behaviors between multiple robots for tasks like load carrying and search and rescue.
- Enhanced morphological adaptability through more dynamic inflatable structures and actuation schemes.
- Field deployment in real-world public and emergency scenarios for usability validation.