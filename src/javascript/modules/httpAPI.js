//----------------Globals Variables----------------
let dataOfTopTen;
export let datas = new Array;
let dataOfElementInCache;
//----------------Used in TopNews to not load same information----------------
export let counterOfNews=0; 

//----------------Get a news From ID----------------
async function getNewFromID(itemNumber){
    const URL="https://hacker-news.firebaseio.com/v0/item/"+itemNumber+".json?print=pretty";
    let newsElement = await axios.get(URL)
    .then(function (response) {
        //----------------handle success----------------
        let timeConvert = timeConverter(response.data.time);
        dataOfElementInCache=response.data;
        dataOfElementInCache.time=timeConvert;
      })
      .catch(function (error) {
        //----------------handle error----------------
        console.log(error);
      });
}

export async function getTopNews(numberOfNews){
  if(counterOfNews==0){
    for(let i=0;i<numberOfNews;i++){
      await getNewFromID(dataOfTopTen[i]);
      //----------------Push the News dataOfElementInCache----------------
      datas.push(dataOfElementInCache);
  }
  }else{
    for(let i=counterOfNews;i<numberOfNews;i++){
      await getNewFromID(dataOfTopTen[i]);
      datas.push(dataOfElementInCache);//id of the News
    }
  }
  counterOfNews=numberOfNews;   
}

//----------------Array of 500 news----------------
export async function getTopNewsId(urlOfData){
    await getTopNewsFromApi(urlOfData); 
    return dataOfTopTen;
}

async function getTopNewsFromApi(urlOfData){
    //----------------Get 500 News----------------
    await axios.get(urlOfData) 
    .then(function (response) {
        //----------------handle success----------------
        let array=new Array;
        for(let i=0;i<500;i++) {
            array.push(response.data[i]);
        }
        dataOfTopTen=array;
      })
      .catch(function (error) {
        //----------------handle error----------------
        console.log(error);
      });
}  

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = ('0'+a.getHours()).slice(-2);
  var min = ('0'+a.getMinutes()).slice(-2);
  var sec = ('0'+a.getSeconds()).slice(-2);
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}