/* ----------------Old way - url api NOT SECURE----------------
 const urlOfData = "https://hacker-news.firebaseio.com/v0/newstories.json" 
*/

/* ----------------New_Way - url api SECURE----------------*/
const urlOfData= process.env.API_URL;
const firstUrlpartToGetNewsFromId=process.env.firstUrlpartToGetNewsFromId;
const secondUrlpartToGetNewsFromId=process.env.secondUrlpartToGetNewsFromId;

//----------------Globals Variables----------------
let dataOfTopTen;
export let datas = new Array;
let dataOfElementInCache;
//----------------Used in TopNews to not load same information----------------
export let counterOfNews=0; 

//----------------Get a news From ID----------------
async function getNewFromID(itemNumber){
    const URL=firstUrlpartToGetNewsFromId+itemNumber+secondUrlpartToGetNewsFromId;
    await axios.get(URL)
    .then(function (response) {
        //----------------handle success----------------
        let data=_.get(response,"data");
        let timeConvert = timeConverter(_.get(data,"time"));
        dataOfElementInCache=data;
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
export async function getTopNewsId(){
    await getTopNewsFromApi(); 
    return dataOfTopTen;
}

async function getTopNewsFromApi(){
    //----------------Get 500 News----------------
    await axios.get(urlOfData) 
    .then(function (response) {
        //----------------handle success----------------
        let data=_.get(response,"data");
        let array=new Array;
        for(let i=0;i<500;i++) {
          if(data[i]!=undefined){
            array.push(data[i]);
          }
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