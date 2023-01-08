import '../css/styles.css';
//----------------import Funtions from httpAPI.js----------------
import {getTopNewsId,getTopNews,datas} from "./modules/httpAPI.js";

//----------------import Funtions from CreateElements.js----------------
import {createCardWithoutImage} from "./modules/htmlElements.js";
import {createDiv} from "./modules/htmlElements.js";
import {createP} from "./modules/htmlElements.js";
import {createH1} from "./modules/htmlElements.js";
import {createButton} from "./modules/htmlElements.js";
import {styleButton} from "./modules/htmlElements.js";
import {createSpinner} from "./modules/htmlElements.js";
import {appendElementToADiv} from "./modules/htmlElements.js";

await getTopNewsId();

//----------------creeate H1---------------- 
let content = "HACKER NEWS LETTER";
let className = "title is-3 has-text-white mt-5 mr-5 ml-5";
let h1= createH1(className,content);
//----------------append to the H1 to body element----------------
document.body.append(h1);

//----------------Create Div of the Header with Paragraph and title----------------
let divHeader = createDiv("mr-5 ml-5");
let content1 = "Latest news from Hacker News. Below you can see a series of news with the title, link and the time it was published. For more information, see the "; 
let p = createP(content1);
//----------------append p element to div element----------------
appendElementToADiv(divHeader,p);
let urlOfTheNews = document.createElement('a');
urlOfTheNews.className = "content has-text-info";
urlOfTheNews.target = "_blank";
urlOfTheNews.href="https://github.com/giovi1998/HackerNews.git";
urlOfTheNews.textContent=' GitHub repository.';
p.appendChild(urlOfTheNews);

//----------------Container with all cards----------------
let divMain = createDiv("container");

//----------------Create and append Spinner----------------
let divSpinner = createSpinner("lds-dual-ring is-flex-direction-column mt-1");

//----------------Get info----------------
await getTopNews(10);
//----------------Create Card image----------------
for(let i=0;i<10;i++){
    //----------------Hide Element Spinner----------------
    divSpinner.className='is-hidden';
    /*----------------Old Way----------------
    createCardWithoutImage(i,divMain,datas[i].url,datas[i].title,datas[i].time);
    */
   //----------------Lodash Way----------------
    let url=_.get(datas[i],"url");
    let title=_.get(datas[i],"title");
    let time=_.get(datas[i],"time");
    createCardWithoutImage(i,divMain,url,title,time);
}
//----------------Create Load More News----------------
let myButtonsLoad = createButton('Load More News');
styleButton(myButtonsLoad,'button buttonMinus is-info is-light mt-2 mb-6');
document.body.append(myButtonsLoad);


    
myButtonsLoad.addEventListener("click", ()=>loadNews(),false);
    
async function loadNews(){
    let start=datas.length;
    let end =datas.length+10;
    if(start==500){
        alert("There aren't new News you can read, you have exceeded the maximum number of News, please reload the page");
    }else{
            //----------------Set loading class when it's loading new News----------------
    myButtonsLoad.className='button is-warning is-loading mt-2 mb-6';

    await getTopNews(end);
    for(let i=start;i<end;i++){
        createCardWithoutImage(i,divMain,datas[i].url,datas[i].title,datas[i].time);
    }
    styleButton(myButtonsLoad,'button buttonMinus is-info is-light mt-2 mb-6');
    
    }
}


// const API_KEY= process.env.API_KEY;
// const API_UrlOfElementFirstPart = process.env.API_UrlOfElementFirstPart;
// const API_UrlOfElementSecondPart = process.env.API_UrlOfElementSecondPart;
// console.log(API_UrlOfElementFirstPart +API_UrlOfElementSecondPart);