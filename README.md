# Monorepo App with Microfrontend and Module Federation

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Run local server](#run-local-server)

## Introduction

This monorepo app is designed to demonstrate the concept of microfrontend architecture using Module Federation. It allows you to build and manage multiple frontend modules as independent microfrontends within a single repository.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your system.
- Knowledge of JavaScript, React, Node.js, and TypeScript.

### Run local server

1. Clone the repository:

   ```bash
   git clone https://github.com/elsalvo96/microfrontend-module-federation.git

   ```

2. Navigate to the project directory:

   ```bash
   cd microfrontend-module-federation

   ```

3. Install dependencies for the main application and each microfrontend:
   ```bash
   npm install
   ```

4. Start 4 dev server using turborepo:
   ```bash
   npm run start
   ```
   
5. Open a web page to http://localhost:3000/