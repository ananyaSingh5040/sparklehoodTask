# AI Safety Incident Log API

This is a simple RESTful API built with **Node.js (Express)** and **MongoDB (Mongoose)** to log and manage hypothetical AI Safety incidents. It includes endpoints to create, retrieve, and delete incident reports.

---

## Tech Stack

- **Language**: JavaScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (using Mongoose ODM)

---

## Installation & Setup

### 1. Clone the repo

git clone https://github.com/ananyaSingh5040/sparklehoodTask.git

### 2. Install dependencies

npm install

### 3. Create .env file

MONGO_URI=mongodb://localhost:27017/<exampledb>
PORT=8001

### 4. Start the server

node index.js

### To Test API Points:
(I used Postman)

GET/incidents - http://localhost:8001/incidents
POST/incidents - http://localhost:8001/incidents
GET/incidents/:id - http://localhost:8001/incidents/<id>
DELETE/incidents/:id - http://localhost:8001/incidents/<id>

## Database Schema

Each Incident contains the following fields:

| Field       | Type     | Required | Description                             |
| ----------- | -------- | -------- | --------------------------------------- |
| \_id        | ObjectId | Yes      | Auto-generated unique ID                |
| title       | String   | Yes      | Short summary of the incident           |
| description | String   | Yes      | Detailed explanation of the incident    |
| severity    | String   | Yes      | Must be one of: "Low", "Medium", "High" |
| reported_at | Date     | Yes      | Auto-generated timestamp when reported  |

---

### Notes

Make sure MongoDB is running locally (mongodb://localhost:27017).

You can use tools like Postman to test the API.

Basic validations and enum checks are in place for the POST route.

Build by Ananya Singh.
