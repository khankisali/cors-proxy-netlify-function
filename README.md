# CORS Proxy Server for Netlify Serverless Functions

The following is a useful guide for creating a AWS Lambda function to act as a proxy for cors.

This project utilizes a Netlify function as a CORS proxy server to bypass CORS policy restrictions, allowing requests to different domains from your application.

## 🚀 Setting Up the Netlify Function

### 1. **Install Netlify CLI**
   ```sh
   npm install -g netlify-cli
   netlify login
   netlify init
   ```

### Set Up Functions Folder

Configure a functions folder in your netlify.toml file:

   ```sh
   [build]
  functions = "netlify/functions"
   ```

