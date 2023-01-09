import fetch from "node-fetch"
exports.handler = async event => {
  const API_URL =  process.env.API_URL;

  const response = await fetch(`endpoint/parameters&API_KEY=${API_URL}`);
  const data = await response.json();

  const pass = (data) => {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }

  return pass(data);
}