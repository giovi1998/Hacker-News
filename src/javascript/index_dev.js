import '../css/styles.css';
//----------------import Funtions from httpAPI.js----------------
import {getTopNewsId,getTopNews,datas} from "./modules/httpAPI_dev.js";

//----------------import Funtions from CreateElements.js----------------
import {createCardWithoutImage} from "./modules/htmlElements.js";
import {createTitleAndParagraphOfThePage} from "./modules/htmlElements.js";
import {createButton} from "./modules/htmlElements.js";
import {styleButton} from "./modules/htmlElements.js";
import {createSpinner} from "./modules/htmlElements.js";

await getTopNewsId();
createTitleAndParagraphOfThePage();

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
   if(_.get(datas[i],"dead")!=true || datas[i]!=null || _.get(datas[i],"text") !=undefined){
        let url=_.get(datas[i],"url");
        let title=_.get(datas[i],"title");
        let time=_.get(datas[i],"time");
        let text=_.get(datas[i],"text");
        createCardWithoutImage(i,url,title,time,text);
    }
}
//----------------Create Load More News----------------
let myButtonsLoad = createButton('Load More News');
styleButton(myButtonsLoad,'button buttonLoad is-info is-light mt-2');
document.body.append(myButtonsLoad);
    
myButtonsLoad.addEventListener("click", ()=>loadNews(),false);
    
async function loadNews(){
    let start=_.get(datas,"length");
    let end =start+10;
    if(start==500){
        alert("There aren't new News you can read, you have exceeded the maximum number of News, please reload the page");
    }else{
    //----------------Set loading class when it's loading new News----------------
    myButtonsLoad.className='button buttonLoad is-warning is-loading mt-2 mb-2';
    await getTopNews(end);

        for(let i=start;i<end;i++){
            if(_.get(datas[i],"dead")!=true || datas[i]!=null || _.get(datas[i],"text") !=undefined){
            console.log(datas[i]);
            let url=_.get(datas[i],"url");
            let title=_.get(datas[i],"title");
            let time=_.get(datas[i],"time");
            let text=_.get(datas[i],"text");
            // get the existing element with the class "button buttonLoad"
            let existingElements = document.getElementsByClassName("button buttonLoad");
            // assuming that you have only one element with that class name
            let existingElement = existingElements[0];
            // create a new element
            let newElement = createCardWithoutImage(i,url,title,time,text);
            // insert the new element before the existing element
            existingElement.parentNode.insertBefore(newElement, existingElement);
            }
        }
        styleButton(myButtonsLoad,'button buttonLoad is-info is-centered is-light mt-2 mb-2');
    }
}