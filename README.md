# 🚀 TVG Automation Platform

> AI-powered workflow automation platform for YouTube content management, SEO optimization and publishing.

![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)

---

## 📖 Overview

TVG Automation Platform is a professional workflow automation system developed for **Televisión de Galicia (TVG)** to streamline the complete YouTube publishing process.

The platform automates repetitive editorial tasks by combining document processing, artificial intelligence, SEO optimization and YouTube integration into a single workflow.

Instead of manually matching videos, editing metadata and creating thumbnails, editors can complete the entire process with just a few clicks.

---

## 🎯 The Problem

Publishing television content to YouTube involved several repetitive manual tasks:

- Uploading videos without metadata.
- Reading programming documents (PDFs).
- Matching each uploaded video with its corresponding information.
- Writing SEO-friendly titles and descriptions.
- Creating thumbnails manually.
- Publishing every video individually.

This process consumed a significant amount of time and increased the likelihood of human errors.

---

## 💡 The Solution

The platform introduces two automated workflows:

### 📤 Video Upload Workflow

Editors upload TVG videos to YouTube as private or unlisted content.

Once uploaded, the system generates a PDF containing the metadata required for the editorial team.

---

### ✨ SEO Editor Workflow

Editors upload the programming PDF.

The platform automatically:

- Detects every uploaded video.
- Matches each video with the correct TV program.
- Extracts titles and descriptions from the document.
- Fills YouTube metadata automatically.
- Generates SEO content using Google Gemini.
- Creates custom thumbnails.
- Schedules or publishes the videos.

The entire workflow is completed from a single interface.

---

## ✨ Features

- AI-powered SEO title generation.
- AI-generated SEO descriptions.
- Automatic TV program detection.
- Automatic PDF metadata extraction.
- Automatic YouTube metadata synchronization.
- Automated thumbnail generation.
- Workflow monitoring.
- Scheduled publishing.
- OAuth2 authentication.
- Google Gemini integration.
- YouTube Data API integration.

---

## ⚙️ Workflow

1. Upload programming PDF.
2. Extract metadata automatically.
3. Detect TV program.
4. Match uploaded YouTube videos.
5. Generate SEO titles and descriptions.
6. Generate custom thumbnail.
7. Review content.
8. Schedule or publish automatically.

---

## 🏗️ Tech Stack

### Frontend

- React
- Next.js

### Backend

- Node.js

### Database

- Supabase
- Prisma ORM

### Artificial Intelligence

- Google Gemini AI

### APIs

- YouTube Data API v3
- Google APIs Client

---

## 🧠 Technical Challenges

One of the biggest challenges during development was making the platform reliable in production.

Some of the implemented solutions include:

- Intelligent retry system with exponential backoff for AI requests.
- Automatic model fallback when quota limits were reached.
- Hybrid TV program detection combining document parsing and computer vision.
- Automatic OAuth2 token renewal.
- Background scheduling service.
- Metadata validation according to YouTube API restrictions.

---

## 📚 What I Learned

This project significantly strengthened my experience in:

- Building production-ready Full Stack applications.
- Integrating multiple Google APIs.
- Working with multimodal AI.
- Automating complex editorial workflows.
- Processing unstructured documents.
- Background task scheduling.
- Software architecture for scalable automation systems.

---

## 🚀 Future Improvements

- Multi-channel support.
- User roles and permissions.
- Analytics dashboard.
- Batch publishing.
- Multi-language SEO generation.
- Performance metrics.

---

## 📸 Screenshots

> Screenshots will be added soon.

---

## ⚠️ Note

This repository contains a portfolio version of the project.

Some implementation details and assets have been omitted to protect proprietary information developed for the client.

---

## 👤 Author

**Alba Domínguez García**

Full Stack Developer