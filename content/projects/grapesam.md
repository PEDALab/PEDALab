---
title: "ViViD-5K: A Dataset and Model for Grape Cluster and Berry Segmentation"
date: "2024-03-11"
image:
  filename: "grapesam.png"  # Place image in static/media/projects/
summary: "ViViD-5K is a large annotated image dataset and segmentation pipeline designed to automate grape cluster closure analysis in vineyards using computer vision."
tags: ["viticulture", "computer vision", "deep learning", "dataset", "segmentation"]
github: "https://github.com/tong-xz/GrapeSAM"
documentation: "https://huggingface.co/datasets/XZhi/ViViD-5k"
team_members:
  - name: "Xiangzhi Tong"
    role: "Lead Developer and Dataset Coordinator"
  - name: "Chengrui Zhang"
    role: "Software Developer"
  - name: "Jonathan Jaramillo"
    role: "Project Advisor"
  - name: "Justine E. Vanden Heuvel"
    role: "Viticulture Expert and Advisor"
  - name: "Yu Jiang"
    role: "Principal Investigator"
---

## Overview

Grape growers need accurate ways to monitor cluster closure — the process where gaps between berries disappear as grapes ripen. Traditional methods are manual and imprecise. The ViViD-5K project addresses this by providing a large-scale, annotated dataset of vineyard images and a baseline AI pipeline for segmenting grape clusters and berries.

The dataset includes 5,000 field-collected images representing 13 grape varieties, with over 648,000 annotated berry keypoints and more than 18,000 cluster masks. A baseline method called GrapeSAM combines keypoint detection, transformer-based segmentation, and promptable foundation models to deliver high-quality segmentation under real-world vineyard conditions. This enables automated, scalable analysis of grape phenology and health.

## Objectives

- Build a comprehensive image dataset for grape cluster and berry segmentation
- Develop a two-stage AI pipeline for segmenting clusters and berries under field conditions
- Provide tools for estimating grape cluster closure automatically over time

## Description

The ViViD-5K project assembled the largest publicly available dataset of annotated vineyard images to date, sourced from previous studies and new fieldwork in New York vineyards. Images were labeled using the CVAT tool by a team of annotators, ensuring high-quality segmentation masks and berry keypoints.

The accompanying model pipeline uses:
- **VGG-based keypoint detection** for localizing berry centers
- **Segment Anything Model (SAM)** for mask generation from point prompts
- **Mask2Former** for cluster-level instance segmentation

The GrapeSAM pipeline computes the visual cluster closure (VCC) metric from these masks, offering an automated replacement for manual scoring methods. A post-processing step filters out mask outliers using statistical analysis to improve segmentation quality.

## Impact

This project provides a powerful toolkit for viticulture researchers and practitioners. It reduces labor and increases objectivity in monitoring grape development, especially in estimating cluster closure — a trait linked to disease susceptibility and crop quality. ViViD-5K also serves as a valuable benchmark for computer vision researchers tackling dense instance segmentation or long-tail distributions.

## Future Work

- Expand dataset to better cover early-stage grape development
- Improve berry segmentation accuracy for small and occluded instances
- Extend GrapeSAM with lightweight models for mobile or edge deployment
- Explore semi-supervised training to reduce annotation costs