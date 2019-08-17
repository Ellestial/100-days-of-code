const content = document.querySelector('.content');

function createNav() {

};

function getTopic() {
  const topicEl = document.querySelector('.topic');
  content.removeChild(topicEl);

  for(var i = 0; i < 10; i++) {
    const topicClone = topicEl.cloneNode(true);
    content.appendChild(topicClone);
    console.log('test');
  }
};

getTopic();

// duplicate a topic
// have it duplicated a certain number of times to fit the screen
// make certain topics disappear and reappear