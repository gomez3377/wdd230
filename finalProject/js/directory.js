const requestURL = 'json/localBusiness.json';
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject);
    const business = jsonObject;

    let businessCardsOne = document.createElement('section')
    let businessNameOne = document.createElement('h3');
    let businessOnwerOne = document.createElement('p');
    let streetAddressOne = document.createElement('p');
    let cityAndStateOne = document.createElement('p');
    let phoneNumberOne = document.createElement('p');
    let websiteOne = document.createElement('p');
    let businessLogoOne = document.createElement('img');
    
    let businessCardsTwo = document.createElement('section')
    let businessNameTwo = document.createElement('h3');
    let businessOnwerTwo = document.createElement('p');
    let streetAddressTwo = document.createElement('p');
    let cityAndStateTwo = document.createElement('p');
    let phoneNumberTwo = document.createElement('p');
    let websiteTwo = document.createElement('p');
    let businessLogoTwo = document.createElement('img');
   
    let businessCardsThree = document.createElement('section')
    let businessNameThree = document.createElement('h3');
    let businessOnwerThree = document.createElement('p');
    let streetAddressThree = document.createElement('p');
    let cityAndStateThree = document.createElement('p');
    let phoneNumberThree = document.createElement('p');
    let websiteThree = document.createElement('p');
    let businessLogoThree = document.createElement('img');
    
    let businessCardsFour = document.createElement('section')
    let businessNameFour = document.createElement('h3');
    let businessOnwerFour = document.createElement('p');
    let streetAddressFour = document.createElement('p');
    let cityAndStateFour = document.createElement('p');
    let phoneNumberFour = document.createElement('p');
    let websiteFour = document.createElement('p');
    let businessLogoFour = document.createElement('img');
    
    let businessCardsFive = document.createElement('section')
    let businessNameFive = document.createElement('h3');
    let businessOnwerFive = document.createElement('p');
    let streetAddressFive = document.createElement('p');
    let cityAndStateFive = document.createElement('p');
    let phoneNumberFive = document.createElement('p');
    let websiteFive = document.createElement('p');
    let businessLogoFive = document.createElement('img');
    
    let businessCardsSix= document.createElement('section')
    let businessNameSix= document.createElement('h3');
    let businessOnwerSix= document.createElement('p');
    let streetAddressSix= document.createElement('p');
    let cityAndStateSix= document.createElement('p');
    let phoneNumberSix= document.createElement('p');
    let websiteSix= document.createElement('p');
    let businessLogoSix= document.createElement('img');
    
    let businessCardsSeven = document.createElement('section')
    let businessNameSeven = document.createElement('h3');
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
            
            businessCardsOne.appendChild(businessNameOne);
            businessCardsOne.appendChild(businessOnwerOne);
            businessCardsOne.appendChild(streetAddressOne);
            businessCardsOne.appendChild(cityAndStateOne);
            businessCardsOne.appendChild(phoneNumberOne);
            businessCardsOne.appendChild(websiteOne);
            businessCardsOne.appendChild(businessLogoOne);
            
            businessNameTwo.textContent = business[2].name;
            businessOnwerTwo.textContent = "Owner: " + business[2].owner;
            streetAddressTwo.textContent = "Address: " + business[2].address;
            cityAndStateTwo.textContent = business[2].cityAndState;
            phoneNumberTwo.textContent = "Phone: " + business[2].phone;
            websiteTwo.textContent = "Website: " + business[2].website;
            businessLogoTwo.src = business[2].logo;
            
            businessCardsTwo.appendChild(businessNameTwo);
            businessCardsTwo.appendChild(businessOnwerTwo);
            businessCardsTwo.appendChild(streetAddressTwo);
            businessCardsTwo.appendChild(cityAndStateTwo);
            businessCardsTwo.appendChild(phoneNumberTwo);
            businessCardsTwo.appendChild(websiteTwo);
            businessCardsTwo.appendChild(businessLogoTwo);
            
            businessNameThree.textContent = business[3].name;
            businessOnwerThree.textContent = "Owner: " + business[3].owner;
            streetAddressThree.textContent = "Address: " + business[3].address;
            cityAndStateThree.textContent = business[3].cityAndState;
            phoneNumberThree.textContent = "Phone: " + business[3].phone;
            websiteThree.textContent = "Website: " + business[3].website;
            businessLogoThree.src = business[3].logo;
            
            businessCardsThree.appendChild(businessNameThree);
            businessCardsThree.appendChild(businessOnwerThree);
            businessCardsThree.appendChild(streetAddressThree);
            businessCardsThree.appendChild(cityAndStateThree);
            businessCardsThree.appendChild(phoneNumberThree);
            businessCardsThree.appendChild(websiteThree);
            businessCardsThree.appendChild(businessLogoThree);
            
            
            businessNameFour.textContent = business[4].name;
            businessOnwerFour.textContent = "Owner: " + business[4].owner;
            streetAddressFour.textContent = "Address: " + business[4].address;
            cityAndStateFour.textContent = business[4].cityAndState;
            phoneNumberFour.textContent = "Phone: " + business[4].phone;
            websiteFour.textContent = "Website: " + business[4].website;
            businessLogoFour.src = business[4].logo;
            
            businessCardsFour.appendChild(businessNameFour);
            businessCardsFour.appendChild(businessOnwerFour);
            businessCardsFour.appendChild(streetAddressFour);
            businessCardsFour.appendChild(cityAndStateFour);
            businessCardsFour.appendChild(phoneNumberFour);
            businessCardsFour.appendChild(websiteFour);
            businessCardsFour.appendChild(businessLogoFour);
            
            
            businessNameFive.textContent = business[5].name;
            businessOnwerFive.textContent = "Owner: " + business[5].owner;
            streetAddressFive.textContent = "Address: " + business[5].address;
            cityAndStateFive.textContent = business[5].cityAndState;
            phoneNumberFive.textContent = "Phone: " + business[5].phone;
            websiteFive.textContent = "Website: " + business[5].website;
            businessLogoFive.src = business[5].logo;
            
            businessCardsFive.appendChild(businessNameFive);
            businessCardsFive.appendChild(businessOnwerFive);
            businessCardsFive.appendChild(streetAddressFive);
            businessCardsFive.appendChild(cityAndStateFive);
            businessCardsFive.appendChild(phoneNumberFive);
            businessCardsFive.appendChild(websiteFive);
            businessCardsFive.appendChild(businessLogoFive);
            
            
            businessNameSix.textContent = business[6].name;
            businessOnwerSix.textContent = "Owner: " + business[6].owner;
            streetAddressSix.textContent = "Address: " + business[6].address;
            cityAndStateSix.textContent = business[6].cityAndState;
            phoneNumberSix.textContent = "Phone: " + business[6].phone;
            websiteSix.textContent = "Website: " + business[6].website;
            businessLogoSix.src = business[6].logo;
            
            businessCardsSix.appendChild(businessNameSix);
            businessCardsSix.appendChild(businessOnwerSix);
            businessCardsSix.appendChild(streetAddressSix);
            businessCardsSix.appendChild(cityAndStateSix);
            businessCardsSix.appendChild(phoneNumberSix);
            businessCardsSix.appendChild(websiteSix);
            businessCardsSix.appendChild(businessLogoSix);
            
            
            businessNameSeven.textContent = business[7].name;
            businessOnwerSeven.textContent = "Owner: " + business[7].owner;
            streetAddressSeven.textContent = "Address: " + business[7].address;
            cityAndStateSeven.textContent = business[7].cityAndState;
            phoneNumberSeven.textContent = "Phone: " + business[7].phone;
            websiteSeven.textContent = "Website: " + business[7].website;
            businessLogoSeven.src = business[7].logo;
            
            businessCardsSeven.appendChild(businessNameSeven);
            businessCardsSeven.appendChild(businessOnwerSeven);
            businessCardsSeven.appendChild(streetAddressSeven);
            businessCardsSeven.appendChild(cityAndStateSeven);
            businessCardsSeven.appendChild(phoneNumberSeven);
            businessCardsSeven.appendChild(websiteSeven);
            businessCardsSeven.appendChild(businessLogoSeven);
            
            document.querySelector('div.localBusinesses').appendChild(businessCardsOne);
            document.querySelector('div.localBusinesses').appendChild(businessCardsTwo);
            document.querySelector('div.localBusinesses').appendChild(businessCardsSeven);
            document.querySelector('div.localBusinesses').appendChild(businessCardsFour);
            document.querySelector('div.localBusinesses').appendChild(businessCardsFive);
            document.querySelector('div.localBusinesses').appendChild(businessCardsSix);
            document.querySelector('div.localBusinesses').appendChild(businessCardsSeven);
            
        
    
    
});