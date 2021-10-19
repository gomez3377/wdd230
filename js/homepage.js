

// Determing the Current Date
const yearOptions = {year:'numeric'};
const fullDateOptions = {day : 'numeric', month: 'numeric', year: 'numeric', hours : 'numeric', minutes : 'numeric', seconds: 'numeric'};
const lastModifiedDate = new Date (document.lastModified).toLocaleDateString('en-US', fullDateOptions);
const lastModifiedTime = new Date (document.lastModified).toLocaleTimeString; 
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', yearOptions);

document.getElementById('currentDate').textContent = lastModifiedDate;

// Webfont Loader

WebFont.load({
    google: {
        families: [
            'Josefin Sans'
        ]
    }
});