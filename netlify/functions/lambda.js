exports.handler = async function (event, context) {
  const API_URL = process.env.API_URL;
  const firstUrlpartToGetNewsFromId = process.env.firstUrlpartToGetNewsFromId;
  const secondUrlpartToGetNewsFromId = process.env.secondUrlpartToGetNewsFromId;

  return {
    statusCode: 200,
    body: JSON.stringify({
      value1: API_URL,
      value2:firstUrlpartToGetNewsFromId,
      value3: secondUrlpartToGetNewsFromId}),
  };  
};