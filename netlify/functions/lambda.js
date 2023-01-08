import fetch from "node-fetch";
exports.handler = async (event) => {
    // Più tardi imposteremo una variabile d'ambiente interna a Netlify stesso, accessibile semplicemente così:
    const API_URL = process.env.API_URL;
    const API_UrlOfElementFirstPart = process.env.API_UrlOfElementFirstPart;
    // qui facciamo la chiamata alla API esattamente come la facevamo prima in index_dev.js
    const response = await fetch(`endpoint/parameters&API_KEY=${API_URL}`);
    const data = await response.json();
    const response1 = await fetch(`endpoint/parameters&API_KEY=${API_UrlOfElementFirstPart}`);
    const data1 = await response1.json();
  
  
    // da qui in giù la funzione fa da back-end: elaboriamo dei dati e li rimandiamo al front-end in formato JSON con uno statusCode 200, cioè "successo".
    const pass = (body) => {
      return {
        statusCode: 200,
        body: JSON.stringify(body),
      };
    };
    return pass(data,data1);
      
  };