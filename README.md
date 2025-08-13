# Zuuush Mental Health Website

A stunning, modern mental health platform focused on gamified wellness challenges, community support, and personal growth tracking.

# SCREENSHOTS
<img width="1918" height="882" alt="image" src="https://github.com/user-attachments/assets/537e042d-dd97-41db-8afd-8966eec11efd" />
<img width="1919" height="878" alt="image" src="https://github.com/user-attachments/assets/4d9ea3ff-7f7a-482d-bdcf-49731808133f" />

# Video demo


Uploading ok2.mp4…



## Features Implemented

### Frontend  
**----Frontend Features----**  
- **User Authentication UI** – Signup and Signin pages with form validation and API integration.  
- **Dashboard** – Displays user XP, Level, daily login streak, and mood tracking chart (using Chart.js).  
- **Mood Tracking** – Allows users to select mood and time of day, submit mood logs, and receive feedback messages.  
- **Profile Page** – Shows dynamic profile details (username, bio, pronouns, profile picture) fetched from backend, with Chart.js daily progress chart and recent daily logs.  
- **Challenges Page** – Lists wellness challenges with emoji, description, progress bars, and “Join Challenge” buttons.  
- **Individual Challenge Pages** – Displays challenge details, progress tracking, daily logs, and step tracking (via geolocation + haversine formula).  
- **Step Tracker Component** – Tracks distance walked, estimates steps, and updates challenge progress in real-time.  

---

### Backend  
**----Backend Features----**  
- **User Authentication API** – JWT-based authentication for secure signup/signin.  
- **User XP & Level System** – Updates XP on daily login, mood submission, and daily log entry.  
- **Daily Login Streak Tracking** – Tracks and returns user’s current streak to frontend.  
- **Mood Tracking API** – Stores user mood, date, and time of day; returns data for chart display.  
- **Profile API** – Fetches and updates user profile details (username, bio, pronouns, profile picture).  
- **Challenges API** – Stores challenge metadata, progress, and joined users.  
- **Daily Log API** – Allows users to log challenge-related activities (e.g., steps walked, mindfulness sessions) and updates XP.  
- **Step Tracking API** – Receives GPS-based step count/distance and stores progress per challenge.  


### Installation

1. Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

2. Local web server (optional, for development)

In the project directory, you can run:

## Getting Started

```bash
git clone git@github.com:Somay-kousis/Mental-Health-website.git
cd mental-health-app
npm install
npm install react react-dom
npm start
```
## Tech Stack
**Frontend:** React.js, TypeScript, Chart.js, React Router, Tailwind CSS, Geolocation API  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt  
**Other:** REST API, Git & GitHub

### Maintainers

- Somay
- Kriti
- Divyansh
