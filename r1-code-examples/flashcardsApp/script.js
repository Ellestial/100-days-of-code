const content = document.querySelector('.content');
const minTopics = 4;
const maxTopics = 24;
let numTopics;
let topicsData;

function adjustTopics() {
  content.dataset.topics = numTopics;
  const topics = content.querySelectorAll('.topic');

  if(topics.length < numTopics) {
    for(let i = topics.length; i < numTopics; i++) {
      topic().add();
    }
  } else if(topics.length > numTopics) {
    for(let i = topics.length; i > numTopics; i--) {
      content.removeChild(content.lastChild);
    }
  }
};

function topic(index) {
  const topicEl = document.querySelector('.topic');
  const name = topicsData[index].name;

  function add() {
    const clone = topicEl.cloneNode(true);
    clone.dataset.topic = index;
    clone.querySelector('.topic__name').textContent = name;
    content.appendChild(clone);
  };

  function remove() {
    content.removeChild(querySelector('[data-topic="' + index + '"]'))
    console.log('test');
  };

  return {
    add: add,
    remove: remove
  };
}

function createTopic() {

};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
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
    topicsData = JSON.parse(this.response);
  }
}
jsonContentRequest.send();

// duplicate a topic
// have it duplicated a certain number of times to fit the screen
// make certain topics disappear and reappear