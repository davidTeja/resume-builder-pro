# Resume Builder Pro

Resume Builder Pro is a modern resume creation platform built using React and Vite. The project focuses on creating a clean and scalable frontend architecture while providing a smooth user experience for building professional resumes.

The application allows users to select templates, fill in resume details through a multi-step form workflow, preview resumes in real time, and export them as PDF files.

This project is being developed as a frontend-focused capstone project with production-grade engineering practices in mind.

---

## Features

* Multi-step resume creation workflow
* Resume template selection
* Live dynamic resume preview
* PDF export functionality
* Form validation using React Hook Form + Zod
* Global state management using Redux Toolkit
* Responsive UI using Material UI
* Reusable component architecture

---

## Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Redux Toolkit
* React Hook Form
* Zod
* Material UI
* jsPDF
* html2canvas

---

## Project Structure

The source code is organized by responsibility and feature:

* `src/pages` contains route-level screens
* `src/features` contains resume, form, template, and preview functionality
* `src/components` contains shared UI and layout components
* `src/app` contains application providers and the Redux store
* `src/services` contains API and resume-related services
* `src/styles` contains the theme and reusable styling utilities

The project follows a scalable feature-based architecture to keep business logic, UI components, and services properly separated.

---


## Getting Started

### Clone the repository

```bash
git clone https://github.com/davidTeja/resume-builder-pro.git
```

### Navigate into the project

```bash
cd resume-builder-pro
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

---

## Current Development Status

The project is currently under active development.

---


## License

This project is open source and available under the MIT License.
