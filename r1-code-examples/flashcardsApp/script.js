const content = document.querySelector('.content');
const searchInput = document.querySelector('.search__input');
let topicView = true;
let searching = false;
let numTopics;
let topicsData;
let shownTopics = [];
let refreshInterval;
let activeTopic = {};

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
      if(searching) {
        topic.empty(newTopic);
      }
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

function refreshTopicInterval() {
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

refreshTopicInterval();

function searchTopics() {
  const topics = content.querySelectorAll('.topic');
  const topicsArr = Array.prototype.slice.call(topics);
  let searchResults = [];
  clearInterval(refreshInterval);

  function clear() {
    searching = false;
    searchResults = [];
    for (let i = 0; i < numTopics; i++) {
      topic.update(topics[i], shownTopics[i].id);
    }
    for(let i = topics.length; i > numTopics; i--) {
      content.removeChild(content.lastChild);
    }
    refreshTopicInterval();
  };

  function empty() {
    topics.forEach(function(topicEl) {
      topic.empty(topicEl);
    })
  };

  function update() {
    searching = true;
    updateSearchResultsArr();
    updateSearchResultsDOM();
    test();
  };

  function updateSearchResultsArr() {
    let input = searchInput.value.toUpperCase();
    let inputArr = input.split(' ');
    topicsData.forEach(function(topic) {
      let name = topic.name.toUpperCase();
      let resultExists = searchResults.indexOf(topic.name);
      let matchedWords = inputArr.every(function(el, i) {
        return name.includes(el);
      });
      if(!matchedWords && resultExists >= 0) {
        searchResults.splice(resultExists, 0);
      } else if(matchedWords && resultExists === -1) {
        searchResults.push(topic);
      }
    });
    searchResults.sort(function(a, b) {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    });
  };

  function updateSearchResultsDOM() {
    searchResults.forEach(function(result) {
      let resultExists = topicsArr.some(function(topic) {
        return topic.dataset.id == result.id;
      });
      let availableIndex = topicsArr.findIndex(function(topic) {
        return topic.dataset.id === "empty";
      });
      console.log(resultExists, availableIndex);
      if (resultExists) {
        return;
      }
      if (availableIndex >= 0) {
        topic.update(topics[availableIndex], result.id);
      } else {
        let newTopic = topic.create(result.id);
        content.appendChild(newTopic);
      }
    });
    if (topics.length > numTopics && searchResults.length < numTopics) {
      for (let i = topics.length; i > numTopics; i--) {
        content.removeChild(content.lastChild);
      }
    }
  };

  // function updateSearchResultsDOM() {
  //   searchResults.forEach(function(result) {
  //     let resultExists = topicsArr.some(function(topic) {
  //       return topic.dataset.id == result.id;
  //     });
  //     let availableIndex = topicsArr.findIndex(function(topic) {
  //       return topic.dataset.id === "empty";
  //     });
  //     console.log(resultExists, availableIndex);
  //     if (resultExists) {
  //       return;
  //     }
  //     if (availableIndex >= 0) {
  //       topic.update(topics[availableIndex], result.id);
  //     } else {
  //       let newTopic = topic.create(result.id);
  //       content.appendChild(newTopic);
  //     }
  //   });
  //   if (topics.length > numTopics && searchResults.length < numTopics) {
  //     for (let i = topics.length; i > numTopics; i--) {
  //       content.removeChild(content.lastChild);
  //     }
  //   }
  // };

  function test() {
    // let domTopics = topicsArr.filter(function(topic) {
    //   return topic.dataset.id !== "empty";
    // });
    // if(domTopics.length > searchResults.length) {
    //   let noMatch = [];
    //   domTopics.forEach(function(domTopic) {
    //     let match = searchResults.some(function(result) {
    //       return domTopic.dataset.id == ' ' + result.id;
    //     });
    //     if(!match) {
    //       noMatch.push(domTopic);
    //     }
    //   });
    //   noMatch.forEach(function(match) {
    //     topic.empty(match);
    //   })
    // }
  };

  return {
    clear: clear,
    empty: empty,
    update: update
  }
};

window.addEventListener('resize', updateNumTopics);
content.addEventListener('click', function(e) {
  let clickedTopic = e.target.closest('.topic');
  if(!clickedTopic || clickedTopic.dataset.id === 'empty') {
    return;
  }
  activeTopic = topicsData[clickedTopic.dataset.id];
});
searchInput.addEventListener('input', function() {
  if (this.value.length === 0) {
    searchTopics().clear();
  } else if (this.value.length === 1) {
    searchTopics().empty();
  } 
  if (this.value.length > 0) {
    searchTopics().update();
  }
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
