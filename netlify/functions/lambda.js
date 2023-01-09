exports.handler = async function (event, context) {
  const value = process.env.API_URL;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Netlify is Good` },{value: value}),
    
  };  
};