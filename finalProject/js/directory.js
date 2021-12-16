const requestURL = 'json/localBusiness.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const business = jsonObject;

    let businessCardsOne = document.createElement('li')
    let businessCardTextContentOne = document.createElement('div')
    businessCardTextContentOne.className = "directory-text-container"
    let businessNameOne = document.createElement('h3');
    let businessOnwerOne = document.createElement('p');
    let streetAddressOne = document.createElement('p');
    let cityAndStateOne = document.createElement('p');
    let phoneNumberOne = document.createElement('p');
    let websiteOne = document.createElement('p');
    let businessLogoOne = document.createElement('img');
    
    let businessCardsTwo = document.createElement('li')
    let businessNameTwo = document.createElement('h3');
    let businessCardTextContentTwo = document.createElement('div')
    businessCardTextContentTwo.className = "directory-text-container"
    let businessOnwerTwo = document.createElement('p');
    let streetAddressTwo = document.createElement('p');
    let cityAndStateTwo = document.createElement('p');
    let phoneNumberTwo = document.createElement('p');
    let websiteTwo = document.createElement('p');
    let businessLogoTwo = document.createElement('img');
    
    let businessCardsThree = document.createElement('li')
    let businessNameThree = document.createElement('h3');
    let businessCardTextContentThree = document.createElement('div')
    businessCardTextContentThree.className = "directory-text-container"
    let businessOnwerThree = document.createElement('p');
    let streetAddressThree = document.createElement('p');
    let cityAndStateThree = document.createElement('p');
    let phoneNumberThree = document.createElement('p');
    let websiteThree = document.createElement('p');
    let businessLogoThree = document.createElement('img');
    
    let businessCardsFour = document.createElement('li')
    let businessNameFour = document.createElement('h3');
    let businessCardTextContentFour = document.createElement('div')
    businessCardTextContentFour.className = "directory-text-container"
    let businessOnwerFour = document.createElement('p');
    let streetAddressFour = document.createElement('p');
    let cityAndStateFour = document.createElement('p');
    let phoneNumberFour = document.createElement('p');
    let websiteFour = document.createElement('p');
    let businessLogoFour = document.createElement('img');
    
    let businessCardsFive = document.createElement('li')
    let businessNameFive = document.createElement('h3');
    let businessCardTextContentFive = document.createElement('div')
    businessCardTextContentFive.className = "directory-text-container"
    let businessOnwerFive = document.createElement('p');
    let streetAddressFive = document.createElement('p');
    let cityAndStateFive = document.createElement('p');
    let phoneNumberFive = document.createElement('p');
    let websiteFive = document.createElement('p');
    let businessLogoFive = document.createElement('img');
    
    let businessCardsSix= document.createElement('li')
    let businessNameSix= document.createElement('h3');
    let businessCardTextContentSix = document.createElement('div')
    businessCardTextContentSix.className = "directory-text-container"
    let businessOnwerSix= document.createElement('p');
    let streetAddressSix= document.createElement('p');
    let cityAndStateSix= document.createElement('p');
    let phoneNumberSix= document.createElement('p');
    let websiteSix= document.createElement('p');
    let businessLogoSix= document.createElement('img');
    
    let businessCardsSeven = document.createElement('li')
    let businessNameSeven = document.createElement('h3');
    let businessCardTextContentSeven = document.createElement('div')
    businessCardTextContentSeven.className = "directory-text-container"
    let businessOnwerSeven = document.createElement('p');
    let streetAddressSeven = document.createElement('p');
    let cityAndStateSeven = document.createElement('p');
    let phoneNumberSeven = document.createElement('p');
    let websiteSeven = document.createElement('p');
    let businessLogoSeven = document.createElement('img');

        
    businessNameOne.textContent = business[1].name;
            businessOnwerOne.textContent = "Owner: " + business[1].owner;
            streetAddressOne.textContent = "Address: " + business[1].address;
            cityAndStateOne.textContent = business[1].cityAndState;
            phoneNumberOne.textContent = "Phone: " + business[1].phone;
            websiteOne.textContent = "Website: " + business[1].website;
            businessLogoOne.src = business[1].logo;
            
            businessCardTextContentOne.appendChild(businessNameOne);
            businessCardTextContentOne.appendChild(businessOnwerOne);
            businessCardTextContentOne.appendChild(streetAddressOne);
            businessCardTextContentOne.appendChild(cityAndStateOne);
            businessCardTextContentOne.appendChild(phoneNumberOne);
            businessCardTextContentOne.appendChild(websiteOne);
            businessCardsOne.appendChild(businessCardTextContentOne);
            businessCardsOne.appendChild(businessLogoOne);
            
            businessNameTwo.textContent = business[2].name;
            businessOnwerTwo.textContent = "Owner: " + business[2].owner;
            streetAddressTwo.textContent = "Address: " + business[2].address;
            cityAndStateTwo.textContent = business[2].cityAndState;
            phoneNumberTwo.textContent = "Phone: " + business[2].phone;
            websiteTwo.textContent = "Website: " + business[2].website;
            businessLogoTwo.src = business[2].logo;
            
            businessCardTextContentTwo.appendChild(businessNameTwo);
            businessCardTextContentTwo.appendChild(businessOnwerTwo);
            businessCardTextContentTwo.appendChild(streetAddressTwo);
            businessCardTextContentTwo.appendChild(cityAndStateTwo);
            businessCardTextContentTwo.appendChild(phoneNumberTwo);
            businessCardTextContentTwo.appendChild(websiteTwo);
            businessCardsTwo.appendChild(businessCardTextContentTwo);
            businessCardsTwo.appendChild(businessLogoTwo);
            
            businessNameThree.textContent = business[3].name;
            businessOnwerThree.textContent = "Owner: " + business[3].owner;
            streetAddressThree.textContent = "Address: " + business[3].address;
            cityAndStateThree.textContent = business[3].cityAndState;
            phoneNumberThree.textContent = "Phone: " + business[3].phone;
            websiteThree.textContent = "Website: " + business[3].website;
            businessLogoThree.src = business[3].logo;
            
            businessCardTextContentThree.appendChild(businessNameThree);
            businessCardTextContentThree.appendChild(businessOnwerThree);
            businessCardTextContentThree.appendChild(streetAddressThree);
            businessCardTextContentThree.appendChild(cityAndStateThree);
            businessCardTextContentThree.appendChild(phoneNumberThree);
            businessCardTextContentThree.appendChild(websiteThree);
            businessCardsThree.appendChild(businessCardTextContentThree);
            businessCardsThree.appendChild(businessLogoThree);
            
            
            businessNameFour.textContent = business[4].name;
            businessOnwerFour.textContent = "Owner: " + business[4].owner;
            streetAddressFour.textContent = "Address: " + business[4].address;
            cityAndStateFour.textContent = business[4].cityAndState;
            phoneNumberFour.textContent = "Phone: " + business[4].phone;
            websiteFour.textContent = "Website: " + business[4].website;
            businessLogoFour.src = business[4].logo;
            
            businessCardTextContentFour.appendChild(businessNameFour);
            businessCardTextContentFour.appendChild(businessOnwerFour);
            businessCardTextContentFour.appendChild(streetAddressFour);
            businessCardTextContentFour.appendChild(cityAndStateFour);
            businessCardTextContentFour.appendChild(phoneNumberFour);
            businessCardTextContentFour.appendChild(websiteFour);
            businessCardsFour.appendChild(businessCardTextContentFour);
            businessCardsFour.appendChild(businessLogoFour);
            
            
            businessNameFive.textContent = business[5].name;
            businessOnwerFive.textContent = "Owner: " + business[5].owner;
            streetAddressFive.textContent = "Address: " + business[5].address;
            cityAndStateFive.textContent = business[5].cityAndState;
            phoneNumberFive.textContent = "Phone: " + business[5].phone;
            websiteFive.textContent = "Website: " + business[5].website;
            businessLogoFive.src = business[5].logo;
            
            businessCardTextContentFive.appendChild(businessNameFive);
            businessCardTextContentFive.appendChild(businessOnwerFive);
            businessCardTextContentFive.appendChild(streetAddressFive);
            businessCardTextContentFive.appendChild(cityAndStateFive);
            businessCardTextContentFive.appendChild(phoneNumberFive);
            businessCardTextContentFive.appendChild(websiteFive);
            businessCardsFive.appendChild(businessCardTextContentFive);
            businessCardsFive.appendChild(businessLogoFive);
            
            
            businessNameSix.textContent = business[6].name;
            businessOnwerSix.textContent = "Owner: " + business[6].owner;
            streetAddressSix.textContent = "Address: " + business[6].address;
            cityAndStateSix.textContent = business[6].cityAndState;
            phoneNumberSix.textContent = "Phone: " + business[6].phone;
            websiteSix.textContent = "Website: " + business[6].website;
            businessLogoSix.src = business[6].logo;
            
            businessCardTextContentSix.appendChild(businessNameSix);
            businessCardTextContentSix.appendChild(businessOnwerSix);
            businessCardTextContentSix.appendChild(streetAddressSix);
            businessCardTextContentSix.appendChild(cityAndStateSix);
            businessCardTextContentSix.appendChild(phoneNumberSix);
            businessCardTextContentSix.appendChild(websiteSix);
            businessCardsSix.appendChild(businessCardTextContentSix);
            businessCardsSix.appendChild(businessLogoSix);
            
            
            businessNameSeven.textContent = business[7].name;
            businessOnwerSeven.textContent = "Owner: " + business[7].owner;
            streetAddressSeven.textContent = "Address: " + business[7].address;
            cityAndStateSeven.textContent = business[7].cityAndState;
            phoneNumberSeven.textContent = "Phone: " + business[7].phone;
            websiteSeven.textContent = "Website: " + business[7].website;
            businessLogoSeven.src = business[7].logo;
            
            businessCardTextContentSeven.appendChild(businessNameSeven);
            businessCardTextContentSeven.appendChild(businessOnwerSeven);
            businessCardTextContentSeven.appendChild(streetAddressSeven);
            businessCardTextContentSeven.appendChild(cityAndStateSeven);
            businessCardTextContentSeven.appendChild(phoneNumberSeven);
            businessCardTextContentSeven.appendChild(websiteSeven);
            businessCardsSeven.appendChild(businessCardTextContentSeven);
            businessCardsSeven.appendChild(businessLogoSeven);
            
            document.querySelector('.localBusinesses').appendChild(businessCardsOne);
            document.querySelector('.localBusinesses').appendChild(businessCardsTwo);
            document.querySelector('.localBusinesses').appendChild(businessCardsSeven);
            document.querySelector('.localBusinesses').appendChild(businessCardsFour);
            document.querySelector('.localBusinesses').appendChild(businessCardsFive);
            document.querySelector('.localBusinesses').appendChild(businessCardsSix);
            document.querySelector('.localBusinesses').appendChild(businessCardsSeven);
            
        
    
    
});
const gridView = document.querySelector('.localBusinessss');
const gridViewButton = document.querySelector('.directoryButton');

function toggleView() {
    
    if (gridView.className === "list" && gridViewButton.className == "list") {
        document.querySelector(".localBusinesses").classList.toggle("grid");
        document.querySelector(".directoryButton").classList.toggle("grid");
        delete gridView.className.list;
        delete gridViewButton.className.list;

    }
    if (gridView.className === "grid" && gridViewButton.className == "grid") {
        document.querySelector(".localBusinesses").classList.toggle("list");
        document.querySelector(".directoryButton").classList.toggle("list");
        delete gridView.className.list;
        delete gridViewButton.className.list;

    }
}
