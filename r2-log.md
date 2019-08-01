# 100 Days Of Code - Log

## Day 1: June 17, 2019

**Today's Progress**: Read You Don't Know JS: this & Object Prototypes - Chapter 1.

**Thoughts**: I am immediately starting round 2 of the 100 Days of Coding challenge. Today I learned that this does not refer to the function it is used in itself or the lexical scope of said function. I also learned a bit more about how functions are objects.


## Day 2: June 18, 2019

**Today's Progress**: Began reading You Don't Know JS: this & Object Prototypes - Chapter 2.

**Thoughts**: This is taking a while to follow, though now I am understanding that the `this` keyword is based on object context, with 4 rules dictating the definition: a general default fallback binding if no other rules apply (which is Window), implicit binding, explicit binding, and another kind I haven't learned about yet. I'm excited to have finally learned what call(), apply(), and bind() do.


## Day 3: June 19, 2019

**Today's Progress**: Continued reading You Don't Know JS: this & Object Prototypes - Chapter 2. Continued working on Harry Potter Matching Game.

**Thoughts**: I learned about how the `new` constructor works with `this`. I also worked on updating the win/lose overlays of my matching game to be a single function with closure. I also updated selected deck information to be in an object to help make it more readable. I struggled with figuring out how to do setInterval() with closures, but was too tired to finish up.


## Day 4: June 20, 2019

**Today's Progress**: Continued working on Harry Potter Matching Game.

**Thoughts**: I figured out why my timer wasn't working -- the wrapper setInterval variable was getting redefined each time the timer function was called. I am trying to figure out a way to not declare that variable in the global scope while also not having it redefined each time. Tomorrow!


## Day 5: June 21, 2019

**Today's Progress**: Reviewed `this` info and continued figuring out how to create a timer closure in the Harry Potter Matching Game.

**Thoughts**: Today was very unproductive. I must have needed more sleep throughout the week, since I was too tired to really focus well by 8:00pm. I still haven't figured out the best way to work with creating a timer and closures.


## Day 6: June 22, 2019

**Today's Progress**: Reviewed `this` info in You Don't Know JS: this and Object Prototypes - Chapter 2

**Thoughts**: I really want to hone into my brain the different types of `this` binding and when they apply. Trying to read through the same content repeatedly for this.


## Day 7: June 23, 2019

**Today's Progress**: Continued reading You Don't Know JS: this and Object Prototypes - Chapter 2

**Thoughts**: I finished reviewing the default, implicit, explicit (and hard), and `new` types of binding. I also started reading new information about their precedence. I also researched currying -- how using `bind()` and `new` together can lead to adding only some of the arguments within the `bind()` method that you can then finish passing arguments into with `new`.


## Day 8: June 24, 2019

**Today's Progress**: Finished reading You Don't Know JS: this & Object Prototypes - Chapter 2

**Thoughts**: I learned about spreading and currying more. I also learned some exceptions to `this` rules, such as soft binding, ignoring `this` (for spreading/currying), and indirect `this`. I will want to review this again tomorrow.


## Day 9: June 25, 2019

**Today's Progress**: Reviewed end of You Don't Know JS: this & Object Prototypes - Chapter 2. Started reading Chapter 3.

**Thoughts**: Chapter 3 is so far easier to understand. I've learned the difference between a literal data type and a constructed object form. I anticipate that I will want to read all about objects and come back to Chapter 2 to review `this`.


## Day 10: June 26, 2019

**Today's Progress**: Continued reading You Don't Know JS: this & Object Prototypes - Chapter 3.

**Thoughts**: Interesting learning about different object-related things, like how all object properties are strings, which explains why the property name needs to be in quotes in `Object.defineProperty()`. I learned about writable, enumerable, and configurable on `Object.defineProperty()`, too. I want to learn more about how `JSON.parse()` works with deep copying objects.


## Day 11: June 27, 2019

**Today's Progress**: Continued reading You Don't Know JS: this & Object Prototypes - Chapter 3. Continued some tweaks with my Harry Potter Matching Game.

**Thoughts**: I learned about `GET` and `PUT` and getters/setters a bit. I wanted a break from reading, so I worked on creating a graphical timer and styled some aspects in my game.


## Day 12: June 28, 2019

**Today's Progress**: Restructured up Harry Potter Matching Game JS.

**Thoughts**: I went to a coffee shop today to focus, and it seemed to help! I tried organizing the JS overlays into one overlay function with closures and `this` references to practice what I've been learning. It worked! But now it's actually quite a bit longer than it was before. However, it's more maintainable in cases where more overlays are added, there needs to be different situations showing all of your earned spells. I want to clean it up more and make it shorter, though. I'll continue refacturing later!


### **Missed June 29 and June 30 due to friends visiting from out of state. Managed to read part of JavaScript & jQuery by Jon Duckett for 45 minutes on the 29th, though.** 


## Day 13: July 1, 2019

**Today's Progress**: Started working on Free Code Camp's Random Quote Machine project.

**Thoughts**: I'm trying to learn about JSONP in order to get around CORS issues with CodePen. Will need to resolve tomorrow.


## Day 14: July 2, 2019

**Today's Progress**: Researched more about JSONP and continued reading JavaScript & jQuery by Jon Duckett, Chapter 7: Events.

**Thoughts**: Struggled with figuring out how to implement JSONP in vanilla JS. Going to chat with my friend about it at some point soon, though. This JavaScript & jQuery book is the first JS book I ever got, and I figured I should continue reading through it. I learned about the three different event types: HTML, handler, and listener. I also learned there's a good deal of different setup to support IE8 and below. Fortunately, this isn't something to be concerned with anymore.


## Day 15: July 3, 2019

**Today's Progress**: Continued reading JavaScript & jQuery by Jon Duckett, Chapter 7: Events.

**Thoughts**: I learned about the event object, how to pass it along to a function within a function, what the screen/page/client properties adjust, and info on different types of events like UI ones that use the window object instead of document.


## Did not do JS 7.4 - 7.7 due to travel/vacationing


## Day 16: July 8, 2019

**Today's Progress**: Continued reading You Don't Know JS: this & Object Prototypes - Chapter 3. Continued working on FreeCodeCamp quote project.

**Thoughts**: Finally figured out how to bypass CORS through a HTTPS proxy! And I think I'm understanding getters/setters a bit.


## Day 17: July 9, 2019

**Today's Progress**: Went through HackerRank challenge and almost finished Random Quote Generator challenge. Completed HackerRank Day 1.

**Thoughts**: Trying to complete one HackerRank challenge a day. I am working through adding a Twitter "Share Tweet" button with a dynamic data-text attribute. Once that's in, I'm done.


## Day 18: July 10, 2019

**Today's Progress**: Finished YDKJS - this & Object Prototypes: Chapter 3. Started chapter 4. Completed HackerRank Day 2.

**Thoughts**: Having a bit of a hard time understanding `for..of` loops and `@@iterator`. I have been sick this week, so hoping to revisit this info later. Chapter 4 seems more digestible--I've learned that JS doesn't have classes and that classes are not foundational programming.


## Day 19: July 11, 2019

**Today's Progress**: Tried working through CodinGame, continued reading YDKJS - this & Object Prototypes: Chapter 4, created a learning schedule for the next week. Also completed HackerRank Day 3.

**Thoughts**: I need to understand a bit more about nodeJS to understanding the CodinGame setup. I don't know what `readline`, etc. mean/do. I continued reading YDKJS and started up a JSON file with flashcard info in it so I can create my own flashcard app at a future date. Finally, I set up a learning plan up through July 19th to prep for a class I am taking downtown on web components/making a CTA app. Overall, productive day!


## Day 20: July 12, 2019

**Today's Progress**: Continued reading YDKJS - this & Obejct Prototypes: Chapter 4, completed HackerRank Day 4, read a tad about web components, and watched a video on Java.

**Thoughts**: I focused on learning more about object prototypes, specifically about class inheritance, the concept of `super` that exists more truthfully in other programming languages, and polymorphism. I was relieved to know that multiple inheritance doesn't exist in JavaScript. Today's HackerRank challenge involved classes (though in a way very different from JS since the challenges can be done in multiple languages), so I watched a 30 minute accompanying video. The video was in Java, and was my first time really looking at how another programming language works.


# July 13 - 16 became too sick to study


## Day 21: July 17, 2019

**Today's Progress**: Went through first section of DOM & jQuery (Functional Utilities) project on Bitovi in preparation for class I am taking Saturday.

**Today's Progress**: I'm glad I'm finally feeling well enough to do JavaScript again. I'm trying to prepare for my all-day class Saturday on web components. The instructors stated that attendees should be familiar enough with JavaScript to go through the above DOM & jQuery project on Bitovi. I was nervous that I wouldn't be skilled enough, but I think I will be OK after going through this section. I will focus tomorrow and Friday on reading YDKJS to learn more about prototypes to feel more prepared.


## Day 22: July 18, 2019

**Today's Progress**: Finished reading YDKJS - this & Object Prototypes: Chapter 4. Started chapter 5.

**Thoughts**: I have a loose understanding now of what mixins and parasitic inheritance are, but I would like to delve into those concepts more later. I also finally understand a high level definition of prototype.


## Day 23: July 19, 2019

**Today's Progress**: Continued reading YDKJS - this & Object Prototypes: Chapter 5. Watched a full video explaining how function prototypes work and how they came about [here](https://www.youtube.com/watch?v=_JJgSbuj5VI).

**Thoughts**: I found the video fascinating. It was an hour and a half lecture on turning a "class"-like function into something more efficient using prototype. The lecturer went through the process of working through this through steps to change the below


## Day 24: July 20, 2019

**Today's Progress**: Took an 8 hour class on web components and ended up creating a CTA bus tracker app.

**Thoughts**: Very interesting! I learned about DOM Shadowing, custom elements, and templates. Some of it was more complex for me to figure out, but nothing was way over my head, so I count that as a success! [See my tracker here](https://codepen.io/Ellestial/pen/xvGqzW)


## Day 25: July 21, 2019

**Today's Progress**: Worked on random quote machine project.

**Thoughts**: I think I'm a bit burnt out from such a long programming day yesterday, so I didn't get as far as I would have liked. I failed 2 of the tests that Free Code Camp set up with this project, which I will resolve in the future.


## Day 26: July 22, 2019

**Today's Progress**: Finished random quote machine project and started going through more FreeCodeCamp.

**Thoughts**: I need to ask someone I know how to have a Twitter share button refresh the content without a page reload. I wasn't able to figure this out and am instead recreating the button each time I need new content in it. I need to set a daily/weekly plan for what I want to accomplish in my JS practice now so I can be more efficient/less scattered. I think it would be good to go through all the algorithm practice in FreeCodeCamp, so I started going through a few lessons that I didn't complete last year.


## Day 27: July 23, 2019

**Today's Progress**: Went through the first third of ES6 tutorials on freeCodeCamp.

**Thoughts**: I'm enjoying this break from reading You Don't Know JS. I learned that you can stil mutate objects with `const` despite it being read-only through redefining values within the object. I also learned how to properly set up arrow functions and about default parameters and rest operator with functions.


## Day 28: July 24, 2019

**Today's Progress**: Continued with freeCodeCamp's ES6 tutorials.

**Thoughts**: I learned about spread and destructuring assignments. Both seem useful! The spread tutorial mentioned the ES5 way of using apply(thisObj, args), which I learned from the You Don't Know JS book series, so I felt good about knowing that.


## Day 29: July 25, 2019

**Today's Progress**: Continued with freeCodeCamp's ES6 tutorials.

**Thoughts**: Today I learned about `class` and `constructor`, which would have been very helpful in my class I took last weekend! I'm glad I learned it now, though. I also got some practice with getters and setters in a really cool way--user sets a temperature in Fahrenheit at instantiation, but can reset it to Celsius and it will keep it what you need.


## Skipped July 26 and 27 due to traveling


## Day 30: July 28, 2019

**Today's Progress**: Finished freeCodeCamp's ES6 tutorials and began reviewing notes on ES6.

**Thoughts**: Definitely want to spend time reviewing this info in the next few days. Glad to finally know some of these basics so I can understand code I see in the future.


## Day 31: July 29, 2019

**Today's Progress**: Began watching a [Scrimba course](https://scrimba.com/g/ges6) to review the freeCodeCamp ES6 tutorials.

**Thoughts**: I was exhausted today, so it was hard to get through my studying tonight. Scrimba is very interesting, though, because the tutorials are videos of code like normal, BUT you can click onto it at any point to mess around with the code and treat it like a text editor. Very cool, and unlike anything I've seen.


## Day 32: July 30, 2019

**Today's Progress**: Finished watching the Scrimba course on ES6.

**Thoughts**: This was entirely review, but was definitely still worthwhile. Looking forward to reading the ES6 YDKJS book in the future!


## Day 33: July 31, 2019

**Today's Progress**: I started the ideation/wireframing steps of a flashcard app.

**Thoughts**: I chatted with a programmer coworker today who gave me some good advice. I decided to start a new project that will be beneficial for my learning now and in the future--a flashcard application. It will have 3 modes: review, quiz, and matching.


```
var Car = function(speed) {  var result = {};
  result.speed = speed;
  result.location = 0;
  result.move = function() {    this.location += this.speed;  }
  return result;}
var buggy = Car(30);
var viper = Car(300);
```

into 

```
var Car = function(speed) {  
  this.speed = speed;  
  this.location = 0;
}
Car.prototype.move = function() {
  this.location += this.speed;
}
var buggy = new Car(30;
var viper = new Car(300);
```


$.extend = function(target, object) {
  for(prop in object) {
	if(object.hasOwnProperty(prop) && !target.hasOwnProperty(prop)) {
      target[prop] = object[prop];
    }
  }
  return target;
};

$.isArray = function(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

$.isArrayLike = function(obj) {
    typeof(obj.length) === 'number' ? 
    (obj.length >= 0 ? 
     : false) : false;
  if(typeof obj === 'object' && typeof obj.length === 'number') {
    return obj.length === 0 || (obj.length > 0 && (obj.length - 1) in obj);
  }
}
