# Project Overview

## Project Links

- [Backend Repo](https://github.com/AllisynAbrams/Countlories-backend)
- [Frontend Repo](https://github.com/AllisynAbrams/Countlories-frontend)
- [Backend Deployment](https://countlories.herokuapp.com)
- [Frontend Deployment](https://countlories.netlify.app)

- [Notion Team Collaboration Tool](https://www.notion.so/f4aee67f469846559b4c30cabf11d866?v=6d8ba204c78c48878f90936b7f9a2283)

## Wireframes

- [Mobile](https://res.cloudinary.com/dv7inaqe9/image/upload/v1603467406/Countlories%20Mobile.jpg)
- [Tablet](https://res.cloudinary.com/dv7inaqe9/image/upload/v1603469251/Countlories%20Desktop%20%2B%20Tablet.jpg)
- [Desktop](https://res.cloudinary.com/dv7inaqe9/image/upload/v1603469251/Countlories%20Desktop%20%2B%20Tablet.jpg)
- [React Architecture](https://docs.google.com/drawings/d/1OJ1gjyPHVz2NkaaC0Tm9NX4Gzth4a2gG0oQzTTFmLUQ/edit?ts=5f922ae1)

## Project Description
Countlories is an all purpose food/calorie tracker. This response web app help user track and count their daily food and calorie consumption by displaying food/calories and total calories by day. It incorporates a form which allows a user to add a new food and its calories to a given day, as well as edit a food. As a user adds new foods, the daily total calorie intake will calculate and increase. This app can be used to track foods/calories as consumed or as a weekly food/calorie planner.


## Time/Priority Matrix

|  Component  |  Priority  |  Estimated Time  |  Actual Time  |
|  ---  |  :---:  |   :---:  |  :---:  |
| Git management  | H | 6 | 4.5 |
| Q&A / debugging | H | 10 | 7 |
| Backend dependencies | H | 0.5 | 0.5 |
| Backend server | H | 1 | 1 |
| Backend database connection | H | 0.5 | 0.5 |
| Backend models/schemas (day and foods) | H | 0.5 | 1.25 |
| Backend seed | H | 0.5 | 1.5 |
| Backend controllers - router + CRUD routes + testing routes | H | 3 | 3.5 |
| Backend deployment on Heroku + re-test all routes | H | 1.5 | 2.5 |
| Install and set up React, React Router | H | 0.5 | 0.5 |
| CRUD on frontend (routes) | H | 5 | 3.5 |
| App.js | H | 2 | 1 |
| Component - Home | H | 2 | 2 |
| Home SCSS | H | 1 | 2 |
| Component - NavBar | H | 2 | 2 |
| NavBar SCSS | H | 1 | 1 |
| Component - Day (incorporates post-mvp Framer Motion) | H | 4 | 9.5 |
| Day SCSS | H | 3 | 3 |
| Component - Food | H | 4 | 1.5 |
| Food SCSS | H | 3 | 0 |
| Component - Team (incorporates post-mvp Framer Motion) | H | 2 | 5 |
| Team SCSS | H | 2 | 3 |
| Component - About (incorporates post-mvp Framer Motion) | H | 1.5 | 1 |
| About SCSS | H | 1.5 | 3 |
| Responsiveness / Media queries | H | 3 | 2 |
| Update React/Frontend with Heroku URL + re-test all features | H | 3 | 1 |
| Deploy React/frontend to Netlify + re-test all features | H | 3 | 2 |
| Extra styling | M | 3 | 0 |
| Post-MVP: light/dark mode | M | 3 | 0 |
| Post-MVP: framer motion | M | 6 | 0 |
| Post-MVP: chart.js | M | 6 | 0 |
| TOTAL | H | 90 | 65.25 |

## MVP/POST MVP

#### MVP

- Backend Deploy
- Frontend Deploy
- Backend CRUD routes
- Two Models
    - Days
    - Food
- Two Controllers
    - Days
    - Food
- Home Component
    - Displays the Days component
- Days Component
    - Display the food + calories + total
    - Add button
    - Edit button
    - Delete button
- About Component
    - A page dedicated to describe what the application does
- Team Component
    - A page showing the members of the team and their brief description of what they did on the app
- NavBar Component
    - Reactstrap Navbar
    - Links to Home, About, and Team
- Form Modal Components + the form in Home Component 
    - Fill out form for adding food/calories
    - Fill out form to edit food/calories
- Styling all components

#### POST MVP

- Light/Dark Mode
- Framer Motion
- Chart.js

## React Components

| Component | Description |
| --- | :---: |
| App | Renders the Home, About, Team, and Navbar |
| Navbar | Routes to Home, About, Team |
| About | Description of the app |
| Team | Description of the team |
| Home | Displays the Days |
| Days | Days of the week to add your calorie count |
| Form | Fill out food and calories |

## Additional Libraries Used

- Sass
- Reactstrap
- Framer Motion
- FontAwesome

## Issues
