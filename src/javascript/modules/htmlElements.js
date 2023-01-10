export function createDiv(className){
    //----------------1. Create <div> element---------------- 
    let div = document.createElement('div');
    //----------------2. Set its class---------------- 
    div.className = className;
    //---------------- append to the body---------------- 
    document.body.append(div);
    return div;
 }

 export function createSpinner(className){
   //----------------1. Create H element----------------
   let h1 = createH1("title is-4 has-text-white mb-1 mt-2","Loading News");
   //----------------3. Create div----------------
   let div=createDiv(className);
   //----------------2. Append to Body----------------
   appendElementToADiv(div,h1);
   return div;
}

 export function createCardWithoutImage(indexElement,divMain,urlOfTheNewsElemente,title,timeOfNews,text){
   //----------------card----------------
   let divCard = document.createElement('div');
   divCard.className = `card card-${indexElement+1}`+" is-full mt-2 ml-6 mr-6";
   divMain.appendChild(divCard);
         //----------------card-content----------------
         let divCardContent = document.createElement('div');
         divCardContent.className = "card-content is-fullwidth";
         divCard.appendChild(divCardContent);
               //----------------Media is-align----------------
               let divMedia = document.createElement('div');
               divMedia.className = "media is-align-items-center";
               divCardContent.appendChild(divMedia);
                     //----------------Media left is inside Media is-align----------------
                     let divMediaLeft = document.createElement('div');
                     divMediaLeft.className = `media-left mediaLeft-${indexElement+1}`;
                     divMedia.appendChild(divMediaLeft);
                     //----------------Media content is inside Media is-align----------------
                     let divMediaContent = document.createElement('div');
                     divMediaContent.className = "media-content";
                     divMedia.appendChild(divMediaContent);
                              //----------------H1 is inside Media-Content----------------
                              let h1 = document.createElement('H1');
                              let content = document.createTextNode(title);
                              h1.className = "title is-4 ml-2 mr-2";
                              h1.appendChild(content);
                              appendElementToADiv(divMediaContent,h1);
               //----------------card-content is inside card content----------------
               let divCardContent1 = document.createElement('div');
               divCardContent1.className = "card-content";
               divCardContent.appendChild(divCardContent1);
                     //----------------Controll of the news----------------
                     if(text!=undefined){
                        if(text.length>=250){
                           //----------------Make all the news length maximum 250 char----------------
                           let textContentShort=text.slice(0,247);
                           textContentShort=textContentShort+"...";
                           let pForText=createP(textContentShort);
                           pForText.style.color="#111111";
                           divCardContent1.appendChild(pForText);
                        }else{
                           let pForText=createP(text);
                           pForText.style.color="#111111";
                           divCardContent1.appendChild(pForText);
                        }

                     }

                     if(urlOfTheNewsElemente!=undefined){
                        //----------------content is inside card content1----------------
                        let urlOfTheNews = document.createElement('a');
                        urlOfTheNews.className = "content has-text-info";
                        urlOfTheNews.target = "_blank";
                        urlOfTheNews.href=urlOfTheNewsElemente;
                        urlOfTheNews.textContent='Click here to read the news!';
                        divCardContent1.appendChild(urlOfTheNews);
                     }
                     //----------------time is inside card content1----------------
                     let pTime = document.createElement('div');
                     pTime.className = "content has-text-grey";
                     pTime.textContent ='Published '+timeOfNews;
                     divCardContent1.appendChild(pTime);
 }
 

 export function createP(content){
    //----------------1. Create <p> element---------------- 
    let p = document.createElement('p');
    //----------------2. Center the P element---------------- 
    p.className='text-align-center';
    //----------------3. Set content and use only this characters---------------- 
    p.textContent = content.replace(/[^a-zA-Z-+@#*()/<>0123456789_.,!"':?= ]/g, "");
    return p;
 }

 export function createH1(className, content){
    //----------------1. Create <H1> element---------------- 
    let h1 = document.createElement('H1');
    let cont = document.createTextNode(content);
    //----------------2. Set its class---------------- 
    h1.className = className;
    h1.appendChild(cont);
    return h1;
 } 

export function createButton(innerOfButton){
    //----------------1. Create the button---------------- 
    let button = document.createElement("button");
    button.innerHTML = innerOfButton;
    return button;
 }

 export function styleButton(button, value){
    //----------------Set class and style---------------- 
    button.className = ''+value;

 }

 export function appendElementToADiv(div,element){
    div.appendChild(element);
 }



 

 

 