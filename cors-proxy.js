/* eslint-env node */
const axios = require('axios');

// Cors proxy function is called from the React app simply by passing the url
// i.e. /.netlify/functions/cors-proxy?url=https://www.google.com
exports.handler = async function (event) {
  const url = event.queryStringParameters.url;
  const contentType = event.queryStringParameters.contentType;

  if (!url) {
    return {
      statusCode: 400,
      body: 'url parameter is required',
    };
  }

  try {
    const response = await axios.get(url, { responseType: 'text' });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType === undefined ? 'text/plain' : contentType,
        'Access-Control-Allow-Origin': '*',
      },
      body: response.data,
      isBase64Encoded: false,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Error fetching content.',
    };
  }
};
