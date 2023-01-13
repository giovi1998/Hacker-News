//---------------- Scrolling---------------- 
let currentY;
let currentX 

export function createTitleAndParagraphOfThePage(){
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
   urlOfTheNews.href="https://github.com/giovi1998/Hacker-News.git";
   urlOfTheNews.textContent=' GitHub repository.';
   p.appendChild(urlOfTheNews);

}

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

 export function createCardWithoutImage(indexElement,divMain,href,title,timeOfNews,text){
   //----------------card----------------
   let divCard = createDiv(`card card-${indexElement+1}`+" is-full mt-2 ml-6 mr-6");
   divMain.appendChild(divCard);
         //----------------card-content----------------
         let divCardContent = createDiv("card-content is-fullwidth");
         divCard.appendChild(divCardContent);
               //----------------Media is-align----------------
               let divMedia = createDiv("media is-align-items-center");
               divCardContent.appendChild(divMedia);
                     //----------------Media left is inside Media is-align----------------
                     let divMediaLeft = createDiv(`media-left mediaLeft-${indexElement+1}`);
                     divMedia.appendChild(divMediaLeft);
                     //----------------Media content is inside Media is-align----------------
                     let divMediaContent =createDiv("media-content");
                     divMedia.appendChild(divMediaContent);
                              //----------------H1 is inside Media-Content----------------
                              let h1 = createH1("title is-4 ml-2 mr-2",title);
                              appendElementToADiv(divMediaContent,h1);
               //----------------card-content is inside card content----------------
               let divCardContent1 = createDiv("card-content");
               divCardContent.appendChild(divCardContent1);
                     //----------------Controll of the news----------------
                     if(text!=undefined){
                        //----------------Delete >p> from the news----------------
                        let textCardContent=optimizeText(text);
                        if(text.length>=150){
                           //---------------- If mobile make all the news length maximum 250 char----------------
                           let textContentShort=textCardContent.slice(0,147);
                           textContentShort=textContentShort +"...";
                           //---------------- Visibile only for Mobile and tablet----------------
                           let pForTextMobile=createPForCardMobileAndTablet(textContentShort);
                           //---------------- Visibile only for Desktop----------------
                           let pForTextDesktop=createPForCardDesktop(textCardContent);   
                           appendElementToADiv(divCardContent1,pForTextMobile);                  
                           appendElementToADiv(divCardContent1,pForTextDesktop); 
                           modalForCardWithMuchText(textCardContent,title,divCardContent1,indexElement);
                           createModalButton(divCardContent1,indexElement);
                        }else{
                           let pForText=createP(textCardContent);
                           pForText.style.color="#111111";
                           appendElementToADiv(divCardContent1,pForText);
                        }

                     }

                     if(href!=undefined){
                        createUrl("content has-text-info",href,'Click here to read the news!',divCardContent1);
                        
                     }

                     //----------------time is inside card content1----------------
                     if(timeOfNews!=undefined){
                        let pTime = document.createElement('div');
                        pTime.className = "content has-text-grey";
                        pTime.textContent ='Published '+timeOfNews;
                        divCardContent1.appendChild(pTime);
                     }
                     
 }
 
function optimizeText(text){
   let textCardContent1=text.replaceAll(". ",". <br />");
   let textCardContent2=textCardContent1.replaceAll("*","");
   let textCardContent3=textCardContent2.replaceAll("?","? <br />");
   let textCardContent4=textCardContent3.replaceAll("!","! <br />");
   let textCardContent=textCardContent4.replaceAll("<p>","<br /> ");
   return textCardContent;
}

function createP(content){
    //----------------1. Create <p> element---------------- 
    let p = document.createElement('p');
    //----------------2. Center the P element---------------- 
    p.className='text-align-center';
    //----------------3. Set content and use only this characters---------------- 
    p.innerHTML = content;
    return p;
 }

 function createUrl(className,href,textContent,divElement){
   let urlOfTheNews = document.createElement('a');
   urlOfTheNews.className = className;
   urlOfTheNews.target = "_blank";
   urlOfTheNews.href=href;
   urlOfTheNews.textContent=textContent;
   appendElementToADiv(divElement,urlOfTheNews);
 }

function createPForCardMobileAndTablet(content){
    //----------------1. Create <p> element---------------- 
    let p = document.createElement('p');
    //----------------2. Center the P element---------------- 
    p.className='text-align-center is-hidden-desktop';
    //----------------3. Set content and use only this characters---------------- 
    p.innerHTML = content;
    p.style.color="#111111";
    return p;
 }

 function createPForCardDesktop(content){
   //----------------1. Create <p> element---------------- 
   let p = document.createElement('p');
   //----------------2. Center the P element---------------- 
   p.className='text-align-center is-hidden-touch';
   //----------------3. Set content and use only this characters---------------- 
   p.innerHTML = content;
   p.style.color="#111111";
   return p;
}

function createH1(className, content){
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

function appendElementToADiv(div,element){
    div.appendChild(element);
 }

 function modalForCardWithMuchText(pText,title,divCardContent1,indexElement){
   //----------------Create P Element---------------- 
   let p = createPForCardMobileAndTablet(pText);
   p.style.maxWidth="90%";
   p.className="mr-5 ml-5";

   //----------------Create the modal element----------------
   let modal = createDiv('modal is-hidden-desktop is-rounded ml-5 mr-5');
   modal.setAttribute("id", `Modal-${indexElement}`);

   //----------------Create the modal background element----------------
   let modalBackground = createDiv("modal-background");
   modal.appendChild(modalBackground);

   //----------------Create the modal card element----------------
   let modalCard = createDiv("modal-card");
   modal.appendChild(modalCard);

   //----------------Create the modal card head element----------------
   let modalCardHead = document.createElement("header");
   modalCardHead.className="modal-card-head";
   modalCard.appendChild(modalCardHead);

   //----------------Create the modal card title element----------------
   let modalCardTitle = document.createElement("p");
   modalCardTitle.classList.add("modal-card-title");
   modalCardTitle.className="title is-4 ml-2 mr-2";
   modalCardTitle.innerText = title;
   modalCardHead.appendChild(modalCardTitle);

   //----------------Create the close modal button element----------------
   let closeModalButton = document.createElement("button");
   closeModalButton.classList.add("delete");
   closeModalButton.setAttribute("id",`close-modal-${indexElement}`);
   modalCardHead.appendChild(closeModalButton);

   //----------------Create the modal card body element----------------
   let modalCardBody = createSection('modal-card-body is-flex');
   modalCardBody.style.overflowY = "auto";
   modalCardBody.style.maxHeight="80%";
   modalCardBody.style.overflowX = "hidden";
   modalCardBody.appendChild(p);
   modalCard.appendChild(modalCardBody);

   //----------------Create the modal card footer element----------------
   let modalCardFooter=createFooter("modal-card-foot");
   modalCard.appendChild(modalCardFooter);
   
   //----------------Append modal to the body----------------
   divCardContent1.appendChild(modal);

   }
   
   function createSection(className){
      let modalCardBody = document.createElement("section");
      modalCardBody.className=className;
      return modalCardBody;
   }

   function createFooter(className){
      let modalCardFooter = document.createElement("footer");
      modalCardFooter.className=className;
      return modalCardFooter;
   }

   function createModalButton(divCardContent1,indexElement) {
      //----------------Create the show modal button element----------------
      let showModalButton = document.createElement("button");
      showModalButton.className="button my-buttonShow is-primary is-hidden-desktop";
      showModalButton.setAttribute("id", "show-modal");
      showModalButton.innerText = "Show the news text";

      //----------------Append button to the divcontent----------------
      divCardContent1.appendChild(showModalButton);

      //----------------add listeners to show and hide modal when button is clicked----------------
      showModalButton.addEventListener("click", function() {
         //----------------When the modal is shown, we want a fixed body----------------
         currentX = window.pageXOffset;
         currentY = window.pageYOffset;
         document.body.style.position = 'fixed';
         document.getElementById(`Modal-${indexElement}`).classList.add("is-active");
      });

      document.getElementById(`close-modal-${indexElement}`).addEventListener("click", function() {
          //----------------When the modal is hidden----------------
         document.body.style.position = '';
         window.scrollTo(currentX,currentY);
         document.getElementById(`Modal-${indexElement}`).classList.remove("is-active");
      });
  }

    

 