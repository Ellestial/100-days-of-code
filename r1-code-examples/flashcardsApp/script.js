const content = document.querySelector('.content');
const searchInput = document.querySelector('.search__input');
let topicView = true;
let numTopics;
let topicsData;

function adjustTopics() {
  const topics = content.querySelectorAll('.topic');
  let lastNum;
  content.dataset.topics = numTopics;

  if (topics.length < numTopics) {
    for (let i = topics.length; i < numTopics; i++) {
      let num = randomNum(0, topicsData.length - 1);
      while (num === lastNum) {
        num = randomNum(0, topicsData.length - 1);
      }
      topic().add(num);
      lastNum = num;
    }
  } else if (topics.length > numTopics) {
    for (let i = topics.length; i > numTopics; i--) {
      content.removeChild(content.lastChild);
    }
  }
};

function topic() {
  const template = document.querySelector('#topictemplate');

  function add(index) {
    const clone = document.importNode(template.content, true);
    const topic = clone.querySelector('.topic');
    const name = topicsData[index].name;
    topic.dataset.topic = index;
    topic.dataset.index = document.querySelectorAll('.topic').length;
    topic.querySelector('.topic__name').textContent = name;
    content.appendChild(clone);
  };

  function remove(index) {
    content.removeChild(querySelector('[data-topic="' + index + '"]'))
  };

  function empty(el) {
    el.dataset.topic = 'empty';
    el.removeChild(topic.querySelector('.topic__icon'));
    el.removeChild(topic.querySelector('.topic__name'));
  };

  return {
    add: add,
    remove: remove,
    empty: empty
  };
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

function updateNumTopics() {
  const width = window.outerWidth;
  let lastNum = numTopics;
  if (width > 1920) {
    numTopics = 22;
  } else if (width > 1366) {
    numTopics = 16;
  } else if (width > 900) {
    numTopics = 10;
  } else {
    numTopics = 6;
  }
  if (lastNum !== numTopics) {
    adjustTopics();
  }
};

function topicRefresh() {
  let refresh = setInterval(function() {
    let topicIndex = randomNum(0, content.dataset.topics - 1);
    let oldTopic = document.querySelector('.topic[data-index="' + topicIndex + '"');
    let newTopic = topic().add(3);
    console.log(newTopic);
    oldTopic.classList.add('is--disappearing');
    setTimeout(function() {
      oldTopic.classList.remove('is--disappearing');
      content.replaceChild(newTopic, oldTopic);
    }, 1000);
  }, 5000);
};

topicRefresh();

function search(e) {
  const topics = content.querySelectorAll('.topic');
  topics.forEach(function(topic) {
    topic.empty(topic);
  });
  if(this.value.length === 0) {
    console.log(this.value.length);
    adjustTopics();
  }
  if(this.value.length <= 3) {
    return;
  }
  topicsData.forEach(function(topic) {
    if(topic.name.includes(searchInput.value)) {
      console.log('you win!');
    }
  });
};

window.addEventListener('resize', updateNumTopics);
searchInput.addEventListener('keypress', search);

/////////////////////////////
//      ajax requests      //
/////////////////////////////

let jsonContentRequest = new XMLHttpRequest();
jsonContentRequest.open('GET', './content.json');
jsonContentRequest.onreadystatechange = function() {
  if(jsonContentRequest.readyState === 4 && jsonContentRequest.status === 200) {
    topicsData = JSON.parse(this.response);
    updateNumTopics();
  }
}
jsonContentRequest.send();
