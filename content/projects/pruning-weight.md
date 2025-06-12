---
title: "Automated Vineyard Pruning Weight Estimation"
date: "2024-05-13"
image:
  filename: "pruning-weight.png"
summary: "We developed an inexpensive, easy-to-use smartphone-based system that estimates grapevine pruning weight using structured light and computer vision."
tags: ["computer vision", "precision agriculture", "viticulture", "robotics"]
github: ""
documentation: ""  
demo: ""  
team_members:
  - name: "Jonathan Jaramillo"
    role: "Lead Developer and Researcher"
  - name: "Aaron Wilhelm"
    role: "Developer and Researcher"
  - name: "Nils Napp"
    role: "Robotics and CV Advisor"
  - name: "Justine Vanden Heuvel"
    role: "Viticulture Expert"
  - name: "Kirstin Petersen"
    role: "Principle Investigator"
---

## Overview

This project presents a simple, low-cost approach to estimating pruning weight in vineyards using just a smartphone camera, structured laser light, and computer vision techniques. Traditional methods for measuring pruning weight are labor-intensive, expensive, or require specialized equipment. In contrast, this system can be built for under $500 and operated by a grower with no special training. By processing nighttime video with a smartphone and a green laser pointer, we extract structural features of grapevines to estimate pruning weight with high accuracy.

The method achieves state-of-the-art results for vertical shoot positioned (VSP) vines, and also explores new approaches for high cordon (HC) vines like Concord grapes. The setup is designed to be lightweight and modular: growers can walk it down rows or mount it on an ATV, tractor, or vineyard robot.

## Objectives

- Provide a low-cost, accessible tool for estimating vine pruning weight
- Enable adoption of precision viticulture in small and medium-sized vineyards
- Lay groundwork for integration into autonomous vineyard robots

## Description

We designed and validated a system that uses a smartphone, green line laser, and simple 3D printed hardware to scan grapevines at night. A computer vision pipeline isolates the structured light pattern to reconstruct vine silhouettes and estimate pruning weight. For VSP vines, this results in an R² of 0.80, outperforming many existing systems. For Concord vines with more complex structure, the method is less accurate (R² = 0.29) but establishes a foundation for 3D-based pruning weight estimation.

## Impact

This project enables more growers to benefit from data-driven decisions in vineyard management. With minimal equipment and cost, they can now estimate pruning weights—a key factor in balancing crop yield and vine health. The platform reduces labor demands, makes data collection feasible even in harsh winter conditions, and broadens access to precision agriculture tools.

## Future Work

- Improve performance on Concord and other high cordon vine types
- Integrate real-time processing for in-field feedback
- Mount system to autonomous vineyard robots for large-scale deployment
- Add other sensor modalities (e.g., soil, canopy, spectral)