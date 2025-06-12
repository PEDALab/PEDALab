---
title: "Prebloom Cluster Count Prediction in Vineyards"
date: "2021-04-07"
image:
  filename: "yield-estimation.png"  # Place image in static/media/projects/
summary: "A low-cost, computer vision pipeline that counts grape clusters before flowering using just a smartphone and AI."
tags: ["computer vision"]
team_members:
  - name: "Jonathan Jaramillo"
    role: "Lead Developer and Field Deployment"
  - name: "Justine Vanden Heuvel"
    role: "Viticulture Expert and Advisor"
  - name: "Kirstin H. Petersen"
    role: "Principal Investigator"
---

## Overview

This project focuses on a very practical problem in vineyard management: how to estimate grape yield earlier and more accurately without expensive equipment or hours of manual labor. Traditional yield prediction often involves manually counting grape clusters in a sample of vines and scaling it up to the whole vineyard. This is not only time-consuming, but also introduces a lot of human error and variance.

Our approach uses off-the-shelf smartphones, basic lighting equipment, and a custom computer vision pipeline to automate the process. A grower (or a robot or ATV) walks or drives through the vineyard at night with the phone recording video of the vines. These videos are then run through a machine learning model that detects and tracks grape clusters and shoots to estimate total yield. By doing this early in the season—before the canopy fully closes—we get better visibility and can provide farmers with more time to make informed management decisions.

## Objectives

- Reduce the cost and labor involved in vineyard yield estimation.
- Provide early-season yield estimates before canopy closure.
- Demonstrate that smartphones and open-source tools are sufficient for practical agricultural AI.

## Description

The cluster count pipeline is based on a Faster R-CNN object detection network paired with a simple object tracking system using Kernelized Correlation Filters. The video collection is straightforward: a smartphone like the iPhone XR records at 240 fps while mounted on a gimbal (for stability) and equipped with battery-powered LED lights to ensure consistent nighttime lighting.

After recording, the software counts visible clusters and calibrates the final estimate based on a few manually counted panels. Compared to traditional methods, our approach cut the mean cluster count error from around 7.9% to under 5%, with lower max errors and much tighter error distributions. We also found that early-stage imagery (before flowering) generalizes well across grape cultivars, reducing the need for extensive retraining.

## Impact

This project shows how accessible tools can replace expensive systems in precision agriculture. It brings early-season decision support to growers without the need for costly sensors or robotics. For small- and medium-sized vineyards, this could mean more efficient labor planning, fewer surprises at harvest, and better resource allocation overall. We're also pushing to make the system open and easy to adopt through shareable models and pre-trained weights.

## Future Work

- Improve the model's robustness across different lighting and weather conditions.
- Expand training data to more cultivars and regions.
- Integrate directly with vineyard management software.
- Explore alternative object detection models for faster or more accurate inference.
- Open-source the labeling datasets to support community contributions.