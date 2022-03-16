const API = {
  url: 'https://api.adviceslip.com/advice',

  async getAdvice() {
    const response = await fetch(API.url, { cach: 'no-cach' });
    return response.json(); 
  }
}

const DOM = {
  title: document.querySelector('h2.title span'),
  advice: document.querySelector('q.advice'),

  addAdvice(data) {
    const { id, advice } = data.slip;
    
    DOM.title.textContent = id;
    DOM.advice.textContent = advice;
  }
}

const Action = {
  loadAdvice() {
    API.getAdvice().then(DOM.addAdvice);
  }
}

Action.loadAdvice();