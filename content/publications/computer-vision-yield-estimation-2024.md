---
title: "Low-Cost, Computer Vision-Based, Prebloom Cluster Count Prediction in Vineyards"
authors:
- Jonathan Jaramillo 
- Justine Vanden Heuvel
- Kirstin Petersen
date: "2024-03-01T00:00:00Z"
doi: "https://doi.org/10.3389/fagro.2021.648080"

# Schedule page publish date (NOT publication's date).
publishDate: "2021-04-07T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Frontiers in Agronomy"
# publication_short: "*J. Agric. Robot.*"

abstract: "Traditional methods for estimating the number of grape clusters in a vineyard generally involve manually counting the number of clusters per vine in a subset of the vineyard and scaling by the total number of vines; a technique that can be laborious, costly, and with an accuracy that depends on the size of the sample. We demonstrate that traditional cluster counting has a high variance in yield estimate accuracy and is highly sensitive to the particular counter and choice of the subset of counted vines. We propose a simple computer vision-based method for improving the reliability of these yield estimates using cheap and easily accessible hardware for growers. This method detects, tracks, and counts clusters and shoots in videos collected using a smartphone camera that is driven or walked through the vineyard at night. With a random selection of calibration data, this method achieved an average cluster count error of 4.9% across two growing seasons and two cultivars by detecting and counting clusters. Traditional methods yielded an average cluster count error of 7.9% across the same dataset. Moreover, the proposed method yielded a maximum error of 12.6% while the traditional method yielded a maximum error of 23.5%. The proposed method can be deployed before flowering, while the canopy is sparse, which improves maximum visibility of clusters and shoots, generalizability across different cultivars and growing seasons, and earlier yield estimates compared to prior work in the area."

# Summary. An optional shortened abstract.
summary: "We developed a computer vision system that uses videos taken with a smartphone to estimate grape yield more accurately and efficiently than traditional manual counting methods."

tags:
- Computer Vision
- Yield Estimation
- Precision Agriculture
- Viticulture
featured: true

url_pdf: 'https://www.frontiersin.org/journals/agronomy/articles/10.3389/fagro.2021.648080/full' # Placeholder for actual PDF
# url_code: 'https://github.com/your-lab/computer-vision-yield-estimation' # Placeholder for actual GitHub repo
url_dataset: ''
url_poster: ''
url_project: '/projects/yield_estimation'
url_slides: ''
url_source: ''
url_video: ''

# Featured image
image:
  filename: "yield-estimation.png"
  caption: 'Computer vision system for yield estimation in vineyards'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- yield_estimation

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

## Introduction

Traditional approaches to estimating grape yield typically involve manual cluster counts on a subset of vines, which are then scaled to the whole vineyard. These methods are time-consuming, labor-intensive, and prone to high variability depending on who performs the counts and which vines are selected. Although advanced sensing systems such as LiDAR and multispectral cameras have been explored, their high cost and complexity limit widespread adoption, particularly for smaller vineyard operations.

## Methodology

The authors developed a low-cost system that employs a smartphone camera, gimbal, and portable LED lights to capture nighttime video of vines before bloom. This stage of growth was chosen because clusters are visible while foliage remains sparse, increasing detection accuracy and making early yield estimation possible. The videos were processed using a Faster R-CNN object detection model with a ResNet50 backbone, combined with Kernelized Correlation Filter tracking to prevent double counting. The network was pretrained on the COCO dataset and then fine-tuned on thousands of labeled grapevine images. Automated counts were calibrated using a small number of manual counts to account for occlusion and counting errors.


## Results

Experiments were conducted at Cornell’s teaching vineyard across two growing seasons on Riesling and Pinot noir vines. Results demonstrated that the automated method significantly outperformed traditional manual counts. On average, the vision-based system achieved an error of 4.9 percent compared to 7.9 percent for manual methods, and its maximum error was nearly half that of human counters. Importantly, the automated approach was more consistent, with less variability tied to which vines were sampled. Labor efficiency was also dramatically improved: achieving equivalent accuracy through manual methods required counting more than fifty panels, while the automated method required calibration on only about twenty panels.

## Discussion

The study highlights that counting clusters directly is more reliable than counting shoots, and that the automated method generalizes across grape cultivars and growing seasons. Beyond technical accuracy, the system offers practical advantages in cost, ease of use, and scalability. The entire setup cost only a few hundred dollars, a fraction of other advanced sensing systems, and videos could be processed efficiently on standard hardware or cloud platforms.

## Conclusion

This research demonstrates the effectiveness of computer vision and deep learning for accurate and efficient crop yield estimation. The proposed system offers a valuable tool for farmers and agricultural researchers to optimize resource management, improve decision-making, and enhance overall agricultural productivity.






