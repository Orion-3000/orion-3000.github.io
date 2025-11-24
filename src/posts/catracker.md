---
id: 2
title: CaTracker
date: October 2025
tags: Notes
skills:
short: An end-to-end ML pipeline for calcium imaging video analysis
---

Calcium imaging is a powerful microscopy technique that allows researchers to visualize the activity of large populations of neurons simultaneously. By monitoring the fluorescence of calcium indicators, we have a proxy for neuronal activity. However, the raw data produced by confocal microscopes often presents significant challenges: channels can be misaligned due to calibration errors, signals are noisy, and manual tracking of individual neurons across thousands of frames is prohibitively time-consuming.

CaTracker is an open-source, end-to-end automated pipeline designed with a "human-in-the-loop" philosophy. While fully automated solutions exist, they often fail on edge cases common in biological data. CaTracker bridges this gap by combining robust machine learning models with an intuitive interface for manual intervention, ensuring high data fidelity without sacrificing speed.

# Core Architecture & Modules

The software is built to handle the entire lifecycle of calcium imaging analysis, from raw video ingestion to statistical export.

### Signal Alignment

   Data from confocal microscopes often comes in split or combined multi-channel formats (Red/Green). A common issue is slight misalignment between these channels due to hardware inconsistencies. I built an interactive alignment module where users can use keyboard navigation (WASD) to rigidly transform and align the red (structural) channel with the green (activity) channel, ensuring that the signal extraction is spatially accurate.

### Hybrid Tracking

   The tracking system utilizes a two-step process:
   - Thresholding: Adaptive segmentation of candidate neurons based on brightness, bounding box size, and area.
   - Tracking: Once the user selects neurons in the initial frame, a trained model automates the tracking across the video timeline.

### SAM-Integrated Centerline Extraction

For experiments involving organism movement (specifically worms), there is integration of the Segment Anything Model (SAM). By providing a single prompt point on the worm's body in the first frame, the module automatically segments the organism and extracts its centerline across the entire video. This geometric data is essential for correlating neuronal activity with physical behavior.

### Velocity & Analysis

Beyond visual tracking, the pipeline includes analytical modules that calculate the instantaneous velocity of the subject relative to the microscope stage position. It also performs signal correction, using the red channel as a stable baseline to normalize noise in the active green channel.

# Technical Stack

*Language*: Python

*ML/CV*: PyTorch, SAM (Segment Anything Model), OpenCV

*Data*: HDF5, NumPy, CSV

*Platform*: Cross-platform support for Windows and MacOS

*Source & installation*: [CaTracker on GitHub](https://github.com/zhenlab-ltri/CaTracker)
[![GitHub - CaTracker](https://img.shields.io/badge/GitHub-CaTracker-181717?logo=github&style=flat-square)](https://github.com/zhenlab-ltri/CaTracker)
