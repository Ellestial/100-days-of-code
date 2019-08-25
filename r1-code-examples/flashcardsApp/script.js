const content = document.querySelector('.content');
const searchInput = document.querySelector('.search__input');
let topics = content.querySelectorAll('.topic');
let topicView = true;
let numTopics;
let topicsData;
let refreshInterval;

function sizeTopics() {
  topics = content.querySelectorAll('.topic');
  let lastTopicIndex;
  content.dataset.topics = numTopics;

  if (topics.length < numTopics) {
    for (let i = topics.length; i < numTopics; i++) {
      let topicIndex = randomNum(0, topicsData.length - 1);
      while (topicIndex === lastTopicIndex) {
        topicIndex = randomNum(0, topicsData.length - 1);
      }
      let newTopic = topic.create(topicIndex);
      content.appendChild(newTopic);
      lastTopicIndex = topicIndex;
    }
  } else if (topics.length > numTopics) {
    for (let i = topics.length; i > numTopics; i--) {
      content.removeChild(content.lastChild);
    }
  }
  topics = content.querySelectorAll('.topic');
};

const topic = {
  create: function(index) {
    const template = document.querySelector('#topictemplate');
    const clone = document.importNode(template.content, true);
    const topic = clone.querySelector('.topic');
    const name = topicsData[index].name;
    const nameEl = topic.querySelector('.topic__name');
    topic.dataset.topic = index;
    topic.dataset.index = document.querySelectorAll('.topic').length;
    nameEl.textContent = name;
    return topic;
  },
  update: function(topic, index) {
    const name = topicsData[index].name;
    const nameEl = topic.querySelector('.topic__name');
    topic.dataset.topic = index;
    nameEl.textContent = name;
    return topic;
  },
  empty: function(topic) {
    const nameEl = topic.querySelector('.topic__name');
    topic.dataset.topic = 'empty';
    nameEl.textContent = '';
    return topic;
  }
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
    sizeTopics();
  }
};

function topicRefresh() {
  let refreshInterval = setInterval(function() {
    let topicIndex = randomNum(0, content.dataset.topics - 1);
    let newTopicIndex = randomNum(0, content.dataset.topics - 1);
    let refreshedTopic = document.querySelector('.topic[data-index="' + topicIndex + '"');
    refreshedTopic.classList.add('is--disappearing');
    setTimeout(function() {
      topic.update(refreshedTopic, newTopicIndex);
      refreshedTopic.classList.remove('is--disappearing');
    }, 500);
  }, 5000);
};

topicRefresh();

// function search(e) {
//   const topics = content.querySelectorAll('.topic');
//   topics.forEach(function(topic) {
//     topic.empty(topic);
//   });
//   if(this.value.length === 0) {
//     sizeTopics();
//   }
//   if(this.value.length <= 3) {
//     return;
//   }
//   topicsData.forEach(function(topic) {
//     if(topic.name.includes(searchInput.value)) {
//       console.log('you win!');
//     }
//   });
// };



window.addEventListener('resize', updateNumTopics);
content.addEventListener('click', function(e) {
  console.dir(e.target);
}), true;
topics.forEach(function(topic) {
  console.log(topics);
  topic.addEventListener('click', function(e) {
    console.log(this.dataset.topic);
  });
});

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
