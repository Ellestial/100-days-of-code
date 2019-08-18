const content = document.querySelector('.content');
const minTopics = 4;
const maxTopics = 24;
let numTopics = 10;

function createNav() {

};

(function addTopics() {
  const topicEl = document.querySelector('.topic');
  content.removeChild(topicEl);

  for(var i = 0; i < numTopics; i++) {
    const topicClone = topicEl.cloneNode(true);
    content.appendChild(topicClone);
  }
})();

function adjustTopics() {
  const topicEl = document.querySelector('.topic');
  const topics = content.querySelectorAll('.topic');

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

window.addEventListener('resize', updateNumTopics);

// duplicate a topic
// have it duplicated a certain number of times to fit the screen
// make certain topics disappear and reappear