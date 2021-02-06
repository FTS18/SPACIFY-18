const storageType = sessionStorage;
const consentPropertyName = 'jdc_consent';

const shoulShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.getItem(consentPropertyName, true);

function consentPopup(){

  const consentPopup=document.getElementById("consent");
  if (shoulShowPopup()) {
    const consent = confirm('Agree to the terms and Conditions of our website?');
    if (consent) {
      saveToStorage();
      console.log('You have accepted our Cookie Consent Popup');
      consentPopup.classList.add("none");
    } else {
      console.log('You Dismissed the Cookie Consent Popup');
    }
  } else {
    consentPopup.classList.add("none");
  }
}