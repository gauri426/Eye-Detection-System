# 👁️ Eye Detection System

<div align="center">

# EyeX – Real-Time Eye Detection & Cognitive Monitoring System

**A real-time eye detection and cognitive monitoring application built using React, FastAPI, MediaPipe, OpenCV, and WebSockets.**

*Track eye movements, blink rate, gaze direction, pupil dilation, and cognitive metrics using live webcam input.*

![React](https://img.shields.io/badge/Frontend-React%2019-61DAFB?logo=react)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)
![OpenCV](https://img.shields.io/badge/OpenCV-Computer%20Vision-red?logo=opencv)
![MediaPipe](https://img.shields.io/badge/MediaPipe-Face%20Mesh-green)
![WebSocket](https://img.shields.io/badge/WebSocket-Real--Time-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

</div>

---

# 📸 Screenshots

> Add your screenshots inside the **screenshots/** folder.

| Home                      | Dashboard                      |
| ------------------------- | ------------------------------ |
| ![](screenshots/home.png) | ![](screenshots/dashboard.png) |

| Webcam                      | Eye Detection                      |
| --------------------------- | ---------------------------------- |
| ![](screenshots/webcam.png) | ![](screenshots/eye-detection.png) |

---

# 📖 Overview

EyeX is a **real-time eye tracking and cognitive monitoring system** that uses **computer vision** and **artificial intelligence** to analyze a user's eye movements through a webcam.

The application captures live video from the user's webcam, processes each frame using **MediaPipe Face Mesh** and **OpenCV**, and displays real-time eye metrics through an interactive React dashboard.

The backend communicates with the frontend using **WebSockets**, allowing low-latency, real-time streaming of eye tracking data.

---

# ✨ Features

## 👁️ Eye Tracking

* Real-time eye detection
* Eye landmark detection
* Eye openness measurement
* Eye closure detection
* Blink detection
* Blink rate monitoring

---

## 🎯 Gaze Analysis

* Gaze direction estimation
* Eye movement tracking
* Focus detection
* Visual attention monitoring

---

## 🧠 Cognitive Monitoring

* Cognitive load estimation
* Attention score calculation
* Fatigue indicators
* Pupil dilation monitoring
* Real-time performance metrics

---

## 📊 Dashboard

* Live eye metrics
* Interactive charts
* Blink rate visualization
* Cognitive load graphs
* Pupil dilation graphs
* Gaze tracking visualization

---

## ⚡ Real-Time Communication

* FastAPI backend
* WebSocket communication
* Live webcam streaming
* Instant processing
* Low-latency updates

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* JavaScript
* CSS3

---

## Backend

* FastAPI
* Python
* WebSockets
* Uvicorn

---

## Computer Vision

* MediaPipe Face Mesh
* OpenCV
* NumPy

---

## Development Tools

* Git
* GitHub
* VS Code
* npm
* pip

---

# 🏗️ System Architecture

```text
                    Webcam
                       │
                       ▼
           React Frontend (Vite)
                       │
             Captures Video Frames
                       │
                  WebSocket
              ws://localhost:8000/ws
                       │
                       ▼
           FastAPI Backend (Python)
                       │
             MediaPipe Face Mesh
                       │
               OpenCV Processing
                       │
      Eye Tracking & Cognitive Metrics
                       │
                       ▼
           Real-Time Dashboard
```

---

# ⚙️ Project Structure

```text
Eye-Detection-System
│
├── backend
│   ├── services
│   │   ├── face_detector.py
│   │   └── metrics_calculator.py
│   │
│   ├── utils
│   │   └── frame_processor.py
│   │
│   ├── config.py
│   ├── main.py
│   └── requirements.txt
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── hooks
│   │   ├── config
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/gauri426/Eye-Detection-System.git

cd Eye-Detection-System
```

---

# Backend Setup

```bash
cd backend

python -m venv venv
```

### Activate Environment

### Windows

```bash
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Start Backend

```bash
python main.py
```

Backend runs on

```text
http://localhost:8000
```

Health Endpoint

```text
http://localhost:8000/health
```

---

# Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on

```text
http://localhost:5173
```

---

# 🔄 How It Works

1. User opens the web application.
2. Browser requests webcam permission.
3. React captures live webcam frames.
4. Frames are sent to the FastAPI backend through WebSockets.
5. MediaPipe Face Mesh detects facial landmarks.
6. OpenCV processes the detected landmarks.
7. Eye metrics such as blink rate, gaze direction, pupil dilation, and cognitive load are calculated.
8. Processed data is returned to the frontend.
9. React updates the dashboard in real time.

---

# 📊 Key Functionalities

* Live webcam streaming
* Face landmark detection
* Eye landmark tracking
* Blink detection
* Gaze estimation
* Attention monitoring
* Cognitive load visualization
* Interactive dashboard
* Real-time alerts

---

# 🌟 Future Improvements

* User Authentication
* Cloud Deployment
* AI-based Drowsiness Detection
* Emotion Recognition
* Head Pose Estimation
* Session History
* PDF Report Generation
* Multi-user Support
* Database Integration
* Performance Analytics
* Mobile Support

---

# 💼 Applications

* Driver Drowsiness Detection
* Online Examination Proctoring
* Student Attention Monitoring
* Workplace Fatigue Monitoring
* Human Computer Interaction
* Healthcare Monitoring
* Accessibility Solutions
* Research in Computer Vision

---

# 📈 Learning Outcomes

Through this project, I gained practical experience with:

* React.js Development
* FastAPI Backend Development
* WebSocket Communication
* OpenCV Image Processing
* MediaPipe Face Mesh
* Real-Time Computer Vision
* API Development
* State Management
* Frontend & Backend Integration
* Software Architecture

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👩‍💻 Author

**Gauri Deshmukh**


---

**Made with ❤️ using React, FastAPI, MediaPipe & OpenCV**

</div>
