---
title: "Toward Estimating the Crop Coefficient of Vineyards Using a Smartphone Camera"
authors:
- Jonathan Jaramillo
- Justine Vanden Heuvel
- Kirstin Petersen
date: "2025-08-01T00:00:00Z"
doi: "https://doi.org/10.5344/ajev.2025.24068"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-08-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["4"]

# Publication name and optional abbreviated publication name.
publication: "American Journal of Enology and Viticulture"
publication_short: "*Am. J. Enol. Vitic.*"

abstract: "Measuring evapotranspiration (ETc) in vineyards is important to optimize vineyard irrigation and water management practices. Previous work demonstrated a strong correlation between the amount of shaded area under the vine at high noon and crop coefficient. This parameter can be measured with a photovoltaic sensor (Paso Panel) or by hand using grid paper. We aimed to develop a low-cost and easy-to-use smartphone-based alternative to measure shaded area under a vine. Videos of the ground under a row of vines were recorded with a smartphone camera on a sunny day in the presence of resident vegetation which consisted of grasses and weeds. A novel computer vision-based algorithm using a segmentation machine learning model and structure-from-motion was developed to estimate the amount of shaded area present. Measurements were collected using a Paso Panel at the same time for comparison. Other Paso Panel measurements were collected to measure the relationship between electrical current and shaded area. Linear regression of this CV-based method to Paso Panel readings yields R2 = 0.68. A new model for relating Paso Panel current readings to shaded area was derived empirically. Adoption of the CV-based crop coefficient estimation method could improve spatial resolution of ETc estimates, potentially aiding adoption of variable rate irrigation."

# Summary. An optional shortened abstract.
summary: "We developed a smartphone camera and computer vision-based method to estimate vineyard crop coefficient by measuring shaded area, providing a low-cost, accessible alternative to Paso Panel measurements."

tags:
- Computer Vision
- Crop Coefficient
- Evapotranspiration
- Irrigation
- Viticulture
featured: true

url_pdf: 'https://www.ajevonline.org/content/76/2/0760020'
url_dataset: ''
url_poster: ''
url_project: '/projects/crop-coefficient'
url_slides: ''
url_source: ''
url_video: ''

# Featured image
image:
  filename: "crop-coefficient.png"
  caption: 'Computer vision method for crop coefficient estimation in vineyards'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
projects:
- crop-coefficient

# Slides (optional).
slides: ""
---

## Introduction

Measuring evapotranspiration (ETc) is critical for managing vineyard irrigation efficiently. Traditional approaches use the two-step crop coefficient method, where ETc is modeled as the product of crop coefficient (Kc) and reference evapotranspiration (ETo). While models such as the FAO Penman-Monteith equation provide reliable estimates, vineyard-specific measurements are necessary for precise management. Existing methods like grid paper and Paso Panel sensors are labor-intensive, bulky, or insufficiently ...

## Methodology

Videos of shaded vineyard ground were captured with a smartphone camera during sunny conditions. A computer vision pipeline was developed, incorporating structure-from-motion (SfM), 3D surface reconstruction, and U-Net segmentation to classify shaded and unshaded areas. Paso Panel measurements were collected concurrently for comparison and calibration. Polynomial fitting was applied to better model the relationship between Paso Panel current and shaded area, improving on earlier linear assumptions.

## Results

The CV-based method demonstrated a correlation of $R^2 = 0.68$ with Paso Panel readings. The U-Net segmentation achieved a validation intersection-over-union of 0.91, and the approach successfully generated voxelized reconstructions of shaded ground under vines. This method proved faster and simpler than Paso Panel use, with data collection taking only about one minute per row using a handheld smartphone.

## Discussion

Compared to aerial or satellite-based approaches, the proposed ground-based CV method provides higher spatial and temporal resolution at lower cost, requiring only a smartphone. It enables mapping of crop coefficient variation at the panel or vine level, facilitating integration into variable-rate irrigation systems. Although current processing times remain high, pipeline optimization and GPU acceleration are expected to make the method practical for wider deployment. The method is particularly useful for ...

## Conclusion

This study demonstrates the feasibility of using smartphone-based computer vision to estimate crop coefficient in vineyards. The approach is affordable, easy to use, and offers improved spatial resolution over existing field methods. With further validation and optimization, this method has potential for practical adoption by growers and integration into vineyard decision support systems.
