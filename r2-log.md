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


## Day 34: August 1, 2019

**Today's Progress**: Read a bit of YDKJS, continued on my flashcard/quiz application wireframes, and wrote up some direction.

**Thoughts**: I decided on a direction to go with the home page of the flashcard/quiz application. After wireframing the desktop version of that up, I decided to write down every single technical/design thing I could think of for that specific page so I can make sure to have a clear direction once I begin coding.


## Day 35: August 2, 2019

**Today's Progress**: Continued on my quiz application wireframes, and wrote up some direction on the match game type.

**Thoughts**: Today started to get hard! Coming up with all the rules and nitty gritty details about this game BEFORE starting any production is hard work and is making me excited to start programming. I am going on vacation Tuesday, and hope to have all the wireframes and details about direction/technical information done before then so I can dive right in when I return.


## Day 36: August 3, 2019

**Today's Progress**: Completed (mostly) the matching game wireframes/detailed information within my quiz application.

**Thoughts**: Just trying to figure out the pesky progress meter and how I want to portray that during the matching game. Tomorrow I will finish that up and work on the flashcard portion of the application, which should hopefully be simpler/quicker!


## Day 37: August 4, 2019

**Today's Progress**: Completed the flashcard wireframes/detailed information within my quiz application.

**Thoughts**: Figured out how to show progress! Decided to make it simpler rather than harder. Flashcard ideation went quickly because that's what prompted me to want to create this whole application. Tomorrow I am hoping to wireframe/write up info about the Test component.


## Packing/on vacation August 5 - 13

## Day 38: August 14, 2019

**Today's Progress**: Worked on the wireframe/write up for the Test component.

**Thoughts**: Since I was on vacation for a while, it took me a bit to get back into the groove of this. I made good progress on the Test component, but will need to finish tomorrow.


## Day 39: August 15, 2019

**Today's Progress**: Worked on write up for the Test component. Continued working on FreeCodeCamp's Basic Data Structures section.

**Thoughts**: Very exhausted today, so I didn't get very far with my app write up. I haven't actually touched code for maybe 2 weeks, so I wanted to delve into FCC a bit.


## Day 40: August 16, 2019

**Today's Progress**: Finished FreeCodeCamp's Basic Data Structures section. Started on Learn application JS/HTML.

**Thoughts**: It's good to dive into real JS again. It's been a good while because of app planning and my vacation, so it's going a bit slow.


## Day 41: August 17, 2019

**Today's Progress**: Worked on Learn application. Got it so the topics populate on page load and change on browser resize.

**Thoughts**: I am trying to focus on one small piece at a time. I want to clean up what I already have and then work on getting some JSON data hooked up so I can more easily work on the Select a Topic/Subject page.


## Day 42: August 18, 2019

**Today's Progress**: Worked on Learn application. Cleaned up existing JS, set up JSON file format, used AJAX to pull in JSON file data, and configured CSS.

**Thoughts**: So far so good! Next step is to have it so each topic on screen is connected with an actual JSON topic.


## Day 43: August 19, 2019

**Today's Progress**: Worked on Learn application and did some FreeCodeCamp challenges.

**Thoughts**: Very tired today, but starting to get data into the topics.


## Day 44: August 21, 2019

**Today's Progress**: Worked on Learn application.

**Thoughts**: Got data into topics, started working on search functionality.


## Day 45: August 22, 2019

**Today's Progress**: Worked on Learn application and freeCodeCamp.

**Thoughts**: Struggling through this project. Hoping to find some inspiration soon, but am having a hard time figuring out how to work the search functionality.


## Missed August 23 because didn't get home until midnight.


## Day 46: August 24, 2019

**Today's Progress**: Worked on Learn application.

**Thoughts**: Today went well! I was able to clean up the code and get a good chunk of the topics page done. I have items disappearing/reappearing added in now. Next step is addressing the behemoth that is search.


## Day 47: August 25, 2019

**Today's Progress**: Worked on Learn application. Saving out current screen info in array. Setting current topic with clicking on a topic.

**Thoughts**: Though I'm still trying to even grasp how search will work, I feel pretty good about the other fixes I made. Trying to make sure all the data is in the JS and then gets pushed to the DOM instead of just declaring in the DOM for the first time.


## Missed August 26 due to WoW Classic release. Missed August 27 due to family emergency.


## Day 48: August 28, 2019

**Today's Progress**: Worked on Learn application. Refactored code to use identification code of topics instead of their index location. Worked on search.

**Thoughts**: Realized I was using the index of topics instead of their id number to create and update topics. Still need to fix up the create method, but refresh should be good. Also have search starting to work! Default topics disappear when I start typing and reappear if I delete all typed letters. Input value is compared with topics names (case insensitive) and adds a topic if it matches. Need to fix up a lot still though.


## Day 49: August 29, 2019

**Today's Progress**: Worked on Learn application. Continued work on search functionality. Updates array when search results are entered/deleted. Updates DOM when items are added.

**Thoughts**: Search is time-consuming! I feel a bit better about it now that I have an array that contains all the search results. I'm learning to separate the JS from the DOM. Do the JS first, and then add to the DOM after. That has helped a lot. A few things to work on tomorrow: make sure search results aren't added again if they already exist. Remove search results if they don't match search term.


## Day 50: August 30, 2019

**Today's Progress**: Worked on Learn application. Went in circles for most of the time, but eventually got it to only show results aren't added again if they already exist. Have it checking if existing DOM results are still present if the search results don't match after previously mapping.

**Thoughts**: I felt frustrated working in circles today, but glad to make some progress. Last (I think?) search feature is to remove DOM search results that no longer match the search term. Since I have it accurately checking the number of DOM elements and search results array, I think this should be OK to handle tomorrow.


## Day 51: August 31, 2019

**Today's Progress**: Worked on Learn application. Have DOM elements update based on current search term (adding/removing items as necessary), added setInterval of swapping topics back in after you exit search, and ensure new topics don't get added after resizing the screen while searching.

**Thoughts**: Good progress! Last bits I need to work on are organizing search results alphabetically, using regex to allow for searching terms out of order (so 'methods function' gives the same search results as 'function methods'), and cleaning up the JS. It's very messy, but I'm excited with this progress.


## Was out of state for September 1


## Day 52: September 2, 2019

**Today's Progress**: Worked on Learn application and regex info on freeCodeCamp. Have results appear alphabetically now.

**Thoughts**: Today was sort of frustrating. I'm trying to find a way to have the user search for 'function methods' or 'methods function' to return the same result, but haven't figured out how yet. Tried the regex approach, but that's not working. Currently trying to use split(' '), arr.some(), and arr.includes(), but struggling a bit.


## Day 53: September 3, 2019

**Today's Progress**: Worked on Learn application. Able to have users search for words out of order!

**Thoughts**: I barely figured this out in time, but I was able to figure it out using .every() and .includes() together. The only pitfall currently is that it searches for the input in any place in the result, not just the first letters. For example, "programming o" yields the results "Functional Programming" and "Object Oriented Programming", even though the former doesn't make total sense. This is because the word "functional" has the letter "o" in it. Going to see if I can base it on what each of the words starts with tomorrow.


## Day 54: September 4, 2019

**Today's Progress**: Worked on Learn application. Refactored search code.

**Thoughts**: I feel pretty good about my refactoring, but need to parse through the code I made yesterday because I already find it convoluted/confusing. I want to focus on updating that part tomorrow and making sure search results appear without empty topics inbetween filled ones.


## Day 55: September 5, 2019

**Today's Progress**: Worked on Learn application. Opened up a wave of bugs, no progress.

**Thoughts**: One of my least productive days on here so far. I just keep getting more confused and more bugs keep appearing. I will need to view this with a clear head tomorrow.


## Day 56: September 6, 2019

**Today's Progress**: Worked on Learn application. Got through bugs and adjusted code so results always appear in alphabetical order and from the top left available spot.

**Thoughts**: Hank noticed the main issue yesterday is that items were not being removed if they were no longer a match. Getting a second pair of eyes was helpful, even if he doesn't know JS! I feel much better today and very productive. Last thing I need to do with search tomorrow is pretty minor--I need to make sure to only add search results if the searched words are all present in the topic name. For example, "programming o" should not yield "Functional Programming". It currently does because the second word that is just "o" can be found in the words "Functional Programming".


## Day 57: September 7, 2019

**Today's Progress**: I DID IT. The Learn app search works where you can start typing the beginning of any word and it will show those results. Also created HTML/CSS for flashcards a bit. Finally, set up topics to go to a new page when clicked and have a hash of their topic ids.

**Thoughts**: I feel really good today. The absolute last thing I need to do with search is to make sure once a word matches, it is removed from the available matches to make (for example, you can currently search for "function function function" and get results for Function Methods, Functional Programming, and Functional Test). I want to refactor everything tomorrow so pages are linked together properly. Basically so there's one central JS file and a separate one for topics, flashcards, matching, and test. Hooray for a super productive day!


## Day 58: September 8, 2019

**Today's Progress**: Worked on Learn app. Organized 3 JS files: one for global variables/methods, one for the topics view, and one for the games view. Worked on local storage and pulling in correct info from topics view page to games view.

**Thoughts**: I feel rejuvinated moving past search (though I should revisit it to fix up the issue I brought up yesterday). Tomorrow I want to focus on starting the general settings overlay, which will impact all game types.


## Day 59: September 9, 2019

**Today's Progress**: Worked on Learn app. Fixed a bug to make sure correct topics were being pulled into the game pages, and worked out some kinks on how settings overlays should work UX-wise. Started working on flashcard JS/CSS.

**Thoughts**: I'm thinking of combining all 3 games into one page, since they all are related and just have a couple unique settings.


## Day 60: September 10, 2019

**Today's Progress**: Worked on Learn app Flashcard section. Took care of a bunch of flashcard JS work, such as creating cards, flipping cards, and moving to next card.

**Thoughts**: This was extremely satisfying and exciting, and I had a hard time stopping coding for the night! I started getting an object set up with all the info related to a flashcard session like points, settings, and actual flashcards used. Tomorrow I want to get settings set up better, fix a bug I found, and start setting up practice mode.


## Day 61: September 11, 2019

**Today's Progress**: Worked on Learn app Flashcard section. Started refactoring messy flashcard code.

**Thoughts**: This is taking a little while to figure out. Hope that looking at this with a fresh set of eyes tomorrow.


## Skipped September 12 for a celebration.

## Day 62: September 13, 2019

**Today's Progress**: Worked on Learn app Flashcard section. Refactored more of the code. Got progress bar to work.

**Thoughts**: I still need to clean up the code quite a bit, but I have a universal progress bar updating appropriately. I also have all the settings figured out for the flashcard, just need to find a way to show/have the user select them.


## Day 63: September 14, 2019

**Today's Progres**: Worked on Learn app settings. Set up local server on desktop computer, and adjusted mockups to work on the cloud.

**Thoughts**: I was fortunate enough to get a free iMac from my job and worked on setting it up with everything today. I then mocked up how I wanted settings to work and created the HTML for it. I was able to start a bit on CSS and JS, but will get more into that tomorrow.


## Day 64: September 15, 2019

**Today's Progress**: Worked on Learn app settings.

**Thoughts**: Feeling a bit sick/tired today, so I didn't get as much accomplished as I would have liked. I want to figure out how to automatically update the game.settings object with appropriate values once a user presses the start button within a game type tab.


## Day 65: September 16, 2019

**Today's Progress**: Worked on Learn app settings. set them up fully! Other than considering when users don't input acceptable settings.

**Thoughts**: This is exciting! I have it mostly set up, but I am wondering if there's a more simplified way to interpret the settings values. I currently am defining them separately for each game (flashcards/matching/test). However, they all have different settings, so maybe this is fine?


## Skipped September 17 due to a cold


## Day 66: September 18, 2019

**Today's Progress**: Worked on Learn app settings and flashcard game. I'm able to have the flashcard game start after selecting Start from the settings page. Everything also resets if you open the settings and press Start again.

**Thoughts**: Progress! Once I have all the details of the flashcard game figured out, I'm going to try and clean up my code again before it becomes too much of a behemoth.


## Day 67: September 19, 2019

**Today's Progress**: Worked on Learn app flashcard game. Got progress meter to update, removed errors, have prev/next arrows almost working correctly.

**Thoughts**: I was not in a good mood today, so I had some trouble focusing. Once I iron out some if/else statements to make previous/next buttons disable appropriately, I want to really go through and clean up my flashcard JS. Once that's done, I can start the practice version of the flashcard app.


## Day 68: September 20, 2019

**Today's Progress**: Worked on Learn app flashcard game. Cleaned up code. Started to try and figure out the popup that comes up when you've completed the game.

**Thoughts**: My code feels a bit cleaner, so that's good. I'm trying to find the best way to have the final popup come up, and I'm wondering if it should be consistent or different per game. Hope to really dive into that more tomorrow.


## Skipped September 21 from not feeling well.

## Day 69: September 22, 2019

**Today's Progress**: Worked on Learn app game ending portion.

**Thoughts**: Today was a bit difficult. I'm trying to incorporate the same game end overlay in all different game styles to make it as reusable as possible, so I'm messing around with flashcard app settings to accomodate that.


## Day 70: September 23, 2019

**Today's Progress**: Worked on Learn app end settings in flashcard.

**Thoughts**: The study portion of flashcards is done!! The end card comes up appropriately and I now have buttons to open the settings overlay and to start the flashcards from the first one again. Tomorrow I will start figuring out the practice portion of the flashcard game--it'll involve removing the arrows and adding persistent buttons.


## Day 71: September 24, 2019

**Today's Progress**: Worked on Learn app. Specifically the flashcard game's practice mode.

**Thoughts**: I was able to take care of the whole practice mode today! It helped I tried setting up the settings to accomodate it. The JS is very messy and I absolutely want to refine it tomorrow or after tomorrow. I want to add a method to the settings object that randomizes the current items when you click Try Again in the end overlay. I just realize now though that I could probably refine the settings.addItems() method to do this! I'll work on that tomorrow. After that and cleaning up the JS, I want to create real, high-fidelity mockups and work on the CSS for those before I move onto the matching game.

[[Prototype]]
- The default [[Get]] operation proceeds to follow the [[Prototype]] link of the object if it cannot find the requested property on the object directly. 
- This process continues until either a matching property name is found, or hte [[Prototype]] chain ends. 
- If none is ever found, the return result from the [[Get]] operation is undefined
- If using `for..in`, any property that can be reached via its chain (and is also enumerable) will be enumerated
- If using `in` to test for existence of a property on an object, it will check the entire chain of the object regardless of enumerability

Object.prototype
- The top-end of every normal [[Prototype]] chain is the built-in Object.prototype (including all normal built-in objects)

Setting & Shadowing Properties
- 


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
