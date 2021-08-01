'use strict';

function directTo(currentPage){
 
  console.log(`currentPage`, currentPage)
  if(currentPage === 'Passengers'){
    console.log(`true`, true)
    window.location.href = "/sms.html"; return false;
  }
  
  
}