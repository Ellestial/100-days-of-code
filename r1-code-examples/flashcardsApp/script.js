const content = document.querySelector('.content');
const searchInput = document.querySelector('.search__input');
let topicView = true;
let numTopics;
let topicsData;
let shownTopics = [];
let refreshInterval;
let activeTopic = {};
let searchResults;

function sizeTopics() {
  let topics = content.querySelectorAll('.topic');
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
      shownTopics.pop();
    }
  }
};

const topic = {
  create: function(index) {
    const template = document.querySelector('#topictemplate');
    const clone = document.importNode(template.content, true);
    const topic = clone.querySelector('.topic');
    const name = topicsData[index].name;
    const nameEl = topic.querySelector('.topic__name');
    topic.dataset.id = index;
    topic.dataset.index = document.querySelectorAll('.topic').length;
    nameEl.textContent = name;
    shownTopics.push(topicsData[index]);
    console.log(shownTopics);
    return topic;
  },
  update: function(topic, newId) {
    const nameEl = topic.querySelector('.topic__name');
    let newTopic = topicsData.find(function(topic) {
      return topic.id === newId;
    });
    shownTopics[topic.dataset.index] = newTopic;
    topic.dataset.id = newTopic.id;
    nameEl.textContent = newTopic.name;
    return newTopic;
  },
  empty: function(topic) {
    const nameEl = topic.querySelector('.topic__name');
    topic.dataset.id = 'empty';
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
  refreshInterval = setInterval(function() {
    let topicIndex = randomNum(0, numTopics - 1);
    let newTopicIndex = randomNum(0, numTopics - 1);
    let refreshedTopic = document.querySelector('.topic[data-index="' + topicIndex + '"');
    refreshedTopic.classList.add('is--disappearing');
    setTimeout(function() {
      topic.update(refreshedTopic, newTopicIndex);
      refreshedTopic.classList.remove('is--disappearing');
    }, 500);
  }, 5000);
};

topicRefresh();



function search(e) {
  const topics = content.querySelectorAll('.topic');
  let searchResults = [];
  clearInterval(refreshInterval);
  if(this.value.length === 0) {
    for (let i = 0; i < numTopics; i++) {
      topic.update(topics[i], shownTopics[i].id);
    }
    refreshInterval;
  } else if(this.value.length === 1) {
    topics.forEach(function(el) {
      topic.empty(el);
    });
  } else if(this.value.length > 3) {
    let input = searchInput.value.toUpperCase();
    topicsData.forEach(function(topicName) {
      let name = topicName.name.toUpperCase();
      if(name.includes(input) && searchResults.indexOf(topicName.name) === -1) {
        let availableSpot;
        for(let i = 0; i < topics.length; i++) {
          if(topics[i].dataset.id === 'empty') {
            availableSpot = topics[i];
            topic.update(availableSpot, topicName.id);
            break;
          }
        }
        console.log(availableSpot);
        searchResults.push(topic);
        // check if input is already topic on search result
        // if not in search result, add to search result array
        // select first empty data-index and update
        // if all data-index are filled with results, add a result
      }
    });
  }
};



window.addEventListener('resize', updateNumTopics);
content.addEventListener('click', function(e) {
  let clickedTopic = e.target.closest('.topic');
  if(!clickedTopic || clickedTopic.dataset.id === 'empty') {
    return;
  }
  activeTopic = topicsData[clickedTopic.dataset.id];
  console.log(activeTopic);
});
searchInput.addEventListener('input', search);

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
