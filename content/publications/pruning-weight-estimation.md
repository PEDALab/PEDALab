---
title: "Inexpensive, Automated Pruning Weight Estimation in Vineyards"
authors:
- Jonathan Jaramillo
- Aaron Wilhelm
- Nils Napp
- Justine Vanden Heuvel
- Kirstin Petersen
date: "2024-05-17T00:00:00Z"
doi: "https://doi.org/10.1109/ICRA57147.2024.10610164"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-05-17T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "2024 IEEE International Conference on Robotics and Automation (ICRA)"
publication_short: "*ICRA 2024*"

abstract: "Pruning weight is indicative of a vine’s ability to produce a crop the following year, informing vineyard management. Current methods for estimating pruning weight are costly, laborious, and/or require specialized know-how and equipment. In this paper we demonstrate an affordable, simple, computer vision-based method to measure pruning weight using a smartphone camera and structured light which produces results better than state-of-the-art techniques for vertical shoot position (VSP) vines and demonstrate initial steps towards estimating pruning weight in high cordon procumbent (HC) vines such as Concord. The simplicity and affordability of this technique lends its self to deployment by farmers today or on future viticulture robotics platforms. We achieved an R2=.80 for VSP vines (better than state-of-the-art computer vision-based methods) and R2=.29 for HC vines (not previously attempted with computer vision-based methods)."

# Summary. An optional shortened abstract.
summary: "We present a low-cost, computer vision-based approach using smartphones and structured light to estimate vineyard pruning weight, outperforming existing methods for VSP vines and extending to HC vines."

tags:
- Computer Vision
- Pruning Weight
- Precision Agriculture
- Viticulture
featured: true

url_pdf: 'https://ieeexplore.ieee.org/document/10610164'
url_dataset: ''
url_poster: ''
url_project: '/projects/pruning-weight'
url_slides: ''
url_source: ''
url_video: ''

# Featured image
image:
  filename: "pruning-weight.png"
  caption: 'Computer vision system for pruning weight estimation in vineyards'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
projects:
- pruning-weight

# Slides (optional).
slides: ""
---

## Introduction

Pruning weight is a critical metric in viticulture, as it provides an effective means to assess vine vigor, balance, and the potential for crop production in the subsequent year. Traditional approaches to estimating pruning weight are costly, time-consuming, and often require technical expertise or specialized equipment. These limitations make such approaches impractical for small- to medium-sized vineyards. The goal of this study is to create an affordable and easy-to-use system that can be applied broadly by growers or integrated into robotics platforms to support precision viticulture.

## Methodology

The authors developed a computer vision-based technique using a standard smartphone camera combined with structured light. This system captures images of dormant vines and processes them to estimate pruning weight. The approach is designed for ease of deployment in both commercial vineyards and potential robotic systems. The system was evaluated on vertical shoot position (VSP) vines and tested in preliminary stages on high cordon procumbent (HC) vines such as Concord grapes.

## Results

For VSP vines, the system achieved an $R^2$ value of 0.80, outperforming state-of-the-art computer vision-based methods. For HC vines, the method achieved an $R^2$ value of 0.29, marking the first attempt to use computer vision in this challenging vine architecture. These results indicate that the system is reliable for VSP-trained vineyards and promising for future work on more complex vine types.

## Discussion

The simplicity and affordability of the proposed system highlight its potential for immediate adoption by growers. Unlike LiDAR, drones, or multispectral sensors, the setup requires only a smartphone and structured light, making it accessible to vineyards of all sizes. Moreover, the method demonstrates flexibility for both farmer-operated use and robotic integration, supporting broader goals of precision viticulture.

## Conclusion

This research introduces a practical, low-cost, computer vision-based method for pruning weight estimation in vineyards. The system demonstrates strong performance for VSP vines and sets the foundation for future work in HC vines. Its affordability and adaptability make it a valuable tool for viticulturists aiming to improve vine balance, optimize crop production, and integrate modern sensing into vineyard management.
