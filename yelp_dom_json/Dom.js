//Get Data from JSON
function starcontent(){
    const xhr = new XMLHttpRequest();

    xhr.open('Get', 'Dom.json',true);

    xhr.onload = function() {
        if (this.status === 200) {
            const star = JSON.parse(this.responseText);

            for(let item in star){

                getChildElements(star[item].id , parseFloat(star[item].rating));
                addReview(star[item].id, star[item].review, star[item].weekabout);
                // console.log(star[item].id , parseFloat(star[item].rating));
                // console.log(star[item].id, star[item].review, star[item].weekabout);
            }
        }
    }
    xhr.send()
}

function getChildElements(starcontent, starRating) {
    const element = document.getElementById(starcontent).children;
    childArray = [];
    for(let item in element) {
        if(typeof element[item] === 'object') {
            childArray.push(element[item]);
            //console.log(element[item]);
        }
    }
    staradd(starRating,childArray);
}

function staradd(rating , childArray) {
    //console.log(rating)
    for (let i=0 ; i<rating ; i++) {
     childArray[i] , classList.remove ('unchecked');
     childArray[i] , classList.add ('checked');
    }
}

function staradd (rating , childarray) {
    //console.log(rating);
    if (Number.isInteger(rating) === true) {
     for (let i=0; i<rating ; i++) {
         childArray[i].classList.remove('unchecked');
         childArray[i].classList.add('checked');
     }
    } else {
        for (let j =0; j < parseInt(rating); j++) {
            childArray[j].classList.remove('unchecked');
            childArray[j].classList.add('checked');
        }
        childArray[Math.floor(rating)].classList.remove('unchecked');
        childArray[Math.floor(rating)].classList.add('fa-star-half-o');
    }
}

//Adding reviews
function addReview(id , review , weekabout) {
    //console.log(staradd)
    const element = document.getElementById(id)
    // console.log(element)
    const displayReview =document.createElement('span');
    const textNode = document.createTextNode(`${review} review`);
    displayReview.appendChild(textNode);
    element.appendChild(displayReview);

    const weekaboutParent = element.parentElement.parentElement;
    //console.log(weekaboutParent);
    const elementWeek = document.createElement('span');
    const weekabouttextNode = document.createTextNode(`Opened in ${weekabout} ago`)
    // weekaboutParent.appendChild(WeektextNode)
    // element.appendChild(weekaboutParent);
    elementWeek.appendChild(weekabouttextNode);
    weekaboutParent.appendChild(elementWeek);

}

//Shuffle -Image

function shuffleImage(image) {
    const orderNum = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    const imageParentElement = document.getElementById(image);
    imageParentElement.style.order = orderNum;
}


starcontent();
