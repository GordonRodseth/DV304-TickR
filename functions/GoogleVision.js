const API_KEY = 'AIzaSyCXXh9hkvNam0kK6e0XDzhNzROPRyz8qxc';
const CLIENT_ID='66775236287-ni9riip8prni81q4vaom9cqg0d5dhok9.apps.googleusercontent.com';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
const API_URL_NLP = `https://language.googleapis.com/v1/documents:analyzeEntities?key=${API_KEY}`;

export async function callGoogleVisionAsync(image) {
    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            { type: "DOCUMENT_TEXT_DETECTION" }
          ],
        },
      ],
    };
  
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
  
    const result = await response.json();
  
    console.log('callGoogleVisionAsync -> result', result.responses[0].fullTextAnnotation.text);
  
  
    return result.responses[0].fullTextAnnotation.text;
  }