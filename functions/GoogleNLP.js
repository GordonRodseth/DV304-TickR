const API_KEY = 'AIzaSyCXXh9hkvNam0kK6e0XDzhNzROPRyz8qxc';
const CLIENT_ID='66775236287-ni9riip8prni81q4vaom9cqg0d5dhok9.apps.googleusercontent.com';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
const API_URL_NLP = `https://language.googleapis.com/v1/documents:analyzeEntities?key=${API_KEY}`;

export async function callGoogleNLPAsync(text) {
    const body = {
  
        document: {
          type: "PLAIN_TEXT",
          content:text,
  
         },
        encodingType: 'NONE',
      
      }
  
    const response_nlp = await fetch(API_URL_NLP, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    const result_nlp = await response_nlp.json();
  
    console.log(result_nlp.entities[0].name);
  
    const keyarray=result_nlp.entities;
  
    for (let i = 0; i < keyarray.length-1; i++) {
      console.log(keyarray[i].name);
      if (keyarray[i].salience > keyarray[i + 1].salience)
      {
          const temp = keyarray[i];
          keyarray[i] = keyarray[i + 1];
          keyarray[i + 1] = temp;
      }    
    }
  
    return keyarray;
  
  };