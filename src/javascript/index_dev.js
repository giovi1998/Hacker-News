import '../css/styles.css';
//----------------import Funtions from httpAPI.js----------------
import {getTopNewsId,getTopNews,datas} from "./modules/httpAPI_dev.js";

//----------------import Funtions from CreateElements.js----------------
import {createCardWithoutImage} from "./modules/htmlElements.js";
import {createDiv} from "./modules/htmlElements.js";
import {createTitleAndParagraphOfThePage} from "./modules/htmlElements.js";
import {createButton} from "./modules/htmlElements.js";
import {styleButton} from "./modules/htmlElements.js";
import {createSpinner} from "./modules/htmlElements.js";

await getTopNewsId();
createTitleAndParagraphOfThePage();

//----------------Container with all cards----------------
let divMain = createDiv("container");

//----------------Create and append Spinner----------------
let divSpinner = createSpinner("lds-dual-ring is-flex-direction-column mt-1");

//----------------Get info----------------
await getTopNews(10);

//----------------Create Cards image----------------
for(let i=0;i<10;i++){
    //----------------Hide Element Spinner----------------
    divSpinner.className='is-hidden';
    /*----------------Old Way----------------
    createCardWithoutImage(i,divMain,datas[i].url,datas[i].title,datas[i].time);
    */
   //----------------Lodash Way----------------
   console.log(datas[i]);
    let url=_.get(datas[i],"url");
    let title=_.get(datas[i],"title");
    let time=_.get(datas[i],"time");
    let text=_.get(datas[i],"text");
    createCardWithoutImage(i,divMain,url,title,time,text);
}
//----------------Create Load More News----------------
let myButtonsLoad = createButton('Load More News');
styleButton(myButtonsLoad,'button buttonMinus is-info is-light mt-2 mb-6');
document.body.append(myButtonsLoad);
    
myButtonsLoad.addEventListener("click", ()=>loadNews(),false);
    
async function loadNews(){
    let start=_.get(datas,"length");
    let end =start+10;
    if(start==500){
        alert("There aren't new News you can read, you have exceeded the maximum number of News, please reload the page");
    }else{
    //----------------Set loading class when it's loading new News----------------
    myButtonsLoad.className='button is-warning is-loading mt-2 mb-6';

    await getTopNews(end);
    for(let i=start;i<end;i++){
        console.log(datas[i]);
        let url=_.get(datas[i],"url");
        let title=_.get(datas[i],"title");
        let time=_.get(datas[i],"time");
        let text=_.get(datas[i],"text");
        createCardWithoutImage(i,divMain,url,title,time,text);
    }
    styleButton(myButtonsLoad,'button buttonMinus is-info is-light mt-2 mb-6');
    
    }
}