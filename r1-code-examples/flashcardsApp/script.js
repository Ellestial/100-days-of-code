const content = document.querySelector('.content');
const minTopics = 4;
const maxTopics = 24;
let numTopics;
let jsonData;

function adjustTopics() {
  const topicEl = document.querySelector('.topic');
  const topics = content.querySelectorAll('.topic');
  content.dataset.topics = numTopics;

  if(topics.length < numTopics) {
    for(let i = topics.length; i < numTopics; i++) {
      const topicClone = topicEl.cloneNode(true);
      content.appendChild(topicClone);
    }
  } else if(topics.length > numTopics) {
    for(let i = topics.length; i > numTopics; i--) {
      content.removeChild(content.lastChild);
    }
  }
};

function updateNumTopics() {
  const width = window.outerWidth;
  if (width > 1920) {
    numTopics = 22;
  } else if (width > 1366) {
    numTopics = 16;
  } else if (width > 900) {
    numTopics = 10;
  } else {
    numTopics = 6;
  }
  adjustTopics();
}

updateNumTopics();

window.addEventListener('resize', updateNumTopics);


/////////////////////////////
//      ajax requests      //
/////////////////////////////

let jsonContentRequest = new XMLHttpRequest();
jsonContentRequest.open('GET', './content.json');
jsonContentRequest.onreadystatechange = function() {
  if(jsonContentRequest.readyState === 4 && jsonContentRequest.status === 200) {
    jsonData = JSON.parse(this.response);
  }
}
jsonContentRequest.send();

// duplicate a topic
// have it duplicated a certain number of times to fit the screen
// make certain topics disappear and reappear