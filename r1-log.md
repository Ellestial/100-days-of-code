# 100 Days Of Code - Log

### Day 1: March 1, 2019

**Today's Progress**: Rewatched Objects section within The Web Developer Bootcamp Udemy course.

**Thoughts**: I've been refamiliarizing myself with JavaScript on and off the last month, and want to make a more dedicated effort to spend 1 hour of learning/practice a day. Object refresher was helpful, but I also was able to make some connections to more advanced work I had learned last year from this refresher.


### Day 2: March 2, 2019

**Today's Progress**: Rewatched half of Intro to DOM section within The Web Developer Bootcamp Udemy course and set up node modules/sass to watch for SCSS changes in Visual Studio Code.

**Thoughts**: Finally clicked for me how all of CSS is just defining new values for pre-determined object properties (color, line-height, etc etc) and that everything is really an object. Exciting to finally get that through my head -- I know that wasn't a revelation for me before when I began learning JavaScript.


### Day 3: March 3, 2019

**Today's Progress**: Rewatched remainder of Intro to DOM section within Udemy course and started Advanced DOM Manipulation. Also skimmed through the ABCs of programming reading.

**Readings**: "JavaScript & jQuery Interactive Front-End Web Development" - Jon Duckett. Chapter 1.

**Thoughts**: All this information so far feels very familiar to me. This is good, but also I don't want to spend too much time on too familiar of a review period.


### Day 4: March 4, 2019

**Today's Progress**: Watched one Advanced DOM Manipulation video in the Udemy course, started working on a score tracking game, and started reading Eloquent JavaScript.

**Readings**: "Eloquent JavaScript" - Marijn Haverbeke. Introduction.

**Thoughts**: I think this Eloquent JavaScript book will be very helpful. It's interesting even already to learn some more about computer programming, like how bits work.


## Day 5: March 5, 2019

**Today's Progress**: Worked exclusively on the counting game.

**Thoughts**: Feel pretty good about this. The score tracking game is a code-along project in the Udemy course I'm going through, but I'm trying to create it before watching the videos. The videos also have the score tracking game between 2 people, while I am setting up my work to allow for any number of players. I'm probably about 90% done with this, and then will be trying to DRY it up.


## Day 6: March 6, 2019

**Today's Progress**: Finished counting game.

**Thoughts**: I feel good! I finished the score tracking game. You enter a value for the max number of points needed to win a game, the number of players involved, and then add points to each player's total until a winner is determined. I cleaned up the code as much as I could at this point, but I'll probably go back in a month from now to see how I can improve it more. A few things I considered: allowing for any number of points and players, preventing users from entering anything other than number values, making sure the event listener resets every game in case there are more/fewer buttons to select.

**Link to work**: [Score Tracking Game](https://codepen.io/Ellestial/pen/ZPLdmm)


## Day 7: March 7, 2019

**Today's Progress**: Read Chapter 1 in Eloquent JavaScript. Watched part 1 of the code along of the score tracking game. I had originally listened to the project description and then made it entirely on my own and with more advanced features, so now I'm going through the rest of the original Udemy videos to see if there's anything I missed/could have done better.

**Readings**: "Eloquent JavaScript" - Marijn Haverbeke. Chapter 1.

**Thoughts**: Not as exciting of a day, but was still happy to fit in an hour of JavaScript despite a busy day. I'm enjoying this book and feel it explains things in a very different and interesting way than other sources I've found.


## Day 8: March 8, 2019

**Today's Progress**: Watched the rest of the Advanced DOM Manipulation videos in the Udemy course. Set up the initial HTML and CSS for the next section -- the Color Game Project. I will be completing the project before watching the code-along.

**Thoughts**: My score tracking game is much more DRY and maintainable than the code-along in the Udemy course. The purpose of it was to be a first project for people, but it's nice that I was able to move beyond that quickly. I created the Color Game Project last year, and am hoping to compare my new CSS/JS with what I did before to hopefully see an improvement.


## Day 9: March 9, 2019

**Today's Progress**: Got about 1/2 or 2/3 through the JavaScript of the Color Game Project.

**Thoughts**: This is more of an introductory project and is starting to feel as such to me. I'm trying to think of the DRYest way to go about the JavaScript instead of just trying to make things work. This is motivating.


## Day 10: March 10, 2019

**Today's Progress**: Finished Color Game Project.

**Thoughts**: I'd like to go through tomorrow and see if I can clean up the code and then I want to compare it to my other attempt at this project last year. I have been feeling sick today, so I didn't get as much done as I was hoping for.


## Day 11: March 11, 2019

**Today's Progress**: Read some Eloquent JavaScript and tidied up Color Game Project.

**Thoughts**: I compared my new Color Game Project to the one I made last year. There were some differences that I've outlined below. I have since ammended my JS to consider the cons.

* New Pros
  * I made the new one more flexible with allowing any number of difficulty modes with any number of color cards. All that's required is adding a new HTML element and adding an event listener that calls setMode(ev.target, 8) or however many colors. 
  * I had more helpful variable names and better use cases. For example, I didn't use a gameOver = true or false variable in my new game, but I did in the old one despite not having any use case for it.
  * I found some code statements in my old version that could have been removed. I'm glad I'm able to see that sort of detail now. 
* New Cons
  * I should have created a new variable for some elements to make it more readable. For example, in the createBlocks() function, I should create a variable for colorBlocks.length that equals currentBlocks, while the argument within the function should be named desiredBlocks instead of num. 
  * I had previously created an event listener on the color blocks holder and defined it once by just using an event argument for event.target to access each of the actual color blocks instead of looping through each color block and having that run again when the color block count was different based on modes.

**Link To Work**: [Color Game Project v2](https://codepen.io/Ellestial/pen/XGezyR)


## Day 12: March 12, 2019

**Today's Progress**: Watched the Color Game Project code-along sections of the Web Designer Bootcamp Udemy course.

**Thoughts**: I was somewhat surprised with some of the differences between my version of the project and what the Udemy course displayed. I wanted to redo my project again with some of the considerations from the Udemy course, but I think I will do so at a later date when I get more knowledge. I believe my version of the project is a bit more maintainable since it's not limited to a set number of items, but there were still some good tips.

* Udemy suggestions
  * Use an array to house all random numbers
  * Create a variable for each color value (r, g, and b) to make it more legible
  * Set a master variable to determine the current number of colors there should be
  * Create init() function that is run immediately and takes care of anything that needs to be done on page load


## Day 13: March 13, 2019

**Today's Progress**: Watched through most of the Intro to jQuery section in the Udemy course. Also reviewed my notes from the course thus far.

**Thoughts**: I know jQuery is sort of on the out at this point, but thought I would still review these videos just in case. I'd like to recreate a few of the functions like $() at some point when I feel competent enough. I'm glad I read through my notes from the other sections, too.


## Day 14: March 14, 2019

**Today's Progress**: Read.

**Readings**: "Eloquent JavaScript" - Marijn Haverbeke. Chapter 2.

**Thoughts**: It was helpful to just sit down and read. Re-learned about the do while statement and learned about how bindings are defined and why to use that term rather than variable.


--
**I was on vacation from March 14th to March 19th and did not have time to spend an hour a day on JavaScript while out of state.**
--


## Day 15: March 19, 2019

**Today's Progress**: Started reading about functions in Eloquent JavaScript while on the plane and also watched videos on jQuery in the Udemy course when I got home.

**Thoughts**: I am definitely looking forward to doing some actual JavaScript soon.


## Day 16: March 20, 2019

**Today's Progress**: Watched through the rest of Introductory jQuery videos and started Advanced jQuery. Also worked on CSS for upcoming To Do List project.

**Thoughts**: I was very exhausted today, so I am proud of myself for still practicing an hour of JavaScript. I got a quick reminder about adding an event argument in an event listener's function, which was good. I also learned how to target specifically checked checkboxes using JS and CSS.


## Day 17: March 21, 2019

**Today's Progress**: Watched through the rest of Advanced jQuery and completed most of the jQuery for the To Do List project.

**Thoughts**: I was able to get a lot done today in an hour, which felt nice. I am creating the To Do List project before watching the code-along videos. I would also like to complete the project in vanilla JS before watching the videos to make sure I can do it both ways and so I can better see the differences.


## Day 18: March 22, 2019

**Today's Progress**: Finished the To Do List project via jQuery and got about halfway through via vanilla JS.

**Thoughts**: This was so quick and easy to do in jQuery. I'm trying to figure out how to replicate the slideToggle() jQuery function using only vanilla JS, so that's been proving difficult for me. Hopefully tomorrow I can figure it out with fresh eyes.


## Day 19: March 23, 2019

**Today's Progress**: Made my own slideToggle() function...ish.

**Thoughts**: I tried recreating slideToggle() in vanilla JS...and it's hard! The biggest issue I'm having currently is setting to display: none/block and being able to have the slide animation work if new content populates into the div that adjusts the height. Definitely giving me some practice trying to do something new, though. I'd like to make a vanilla JS way of other jQuery functions at some point too.


## Day 20: March 24, 2019

**Today's Progress**: Finished first draft of To Do List in vanilla JS.

**Thoughts**: I managed to create a rough slideToggle() and fadeOff() in vanilla JS. I'd like to clean it up tomorrow to make it more sustainable and have it potentially work for any situation.


## Day 21: March 25, 2019

**Today's Progress**: Finished edits to To Do List in vanilla JS.

**Thoughts**: I'm frustrated I couldn't think of an equation that could work to responsively create a sliding animation who's duration would be based on a function parameter. I should revisit this in a couple weeks.


## Day 22: March 26, 2019 (my birthday!)

**Today's Progress**: Watched Udemy course videos walking through To Do List and worked with working locally with Git.

**Thoughts**: I did everything correctly per the Udemy videos, so that's reassuring! I'm also trying to work locally with Git instead of relying on updating files within the GitHub web interface.


## Day 23: March 27, 2019

**Today's Progress**: Started up optional Udemy project to make Patatap Clone. Read through probably 1/2 or 2/3 of paper.js documentation and practiced what I learned. Also practiced working with git locally again.

**Thoughts**: I am trying to be patient with reading through documentation before trying to do much of the project. I believe I am understanding the documentation, and I was able to have a circle appear randomly on the page on page load. I know I had a hard time with this optional project when I created it last year, so I am trying my best to create it without watching any of the code-along videos this time through.


## Day 24: March 28, 2019

**Today's Progress**: Started messing around more with the Patatap Clone project.

**Thoughts**: Learning my first library definitely has a steep learning curve. I'm able to have cirlces appear on keypress and change color, but the scaling property isn't working for some reason. I'm using the tween method, and changing the hue works fine. Hm. Stumped for tonight.


## Day 25: March 29, 2019

**Today's Progress**: Figured out what was stumping me yesterday! Finished up the paper.js portion of the challenge.

**Thoughts**: Apparently I needed to set a setMatrix value to be false in order to animate the scaling of the circles. I should read through documentation a bit more thoroughly in the future. I created a JSON file to change the color of each circle depending on which letter was pressed. I also set it up so once I get the audio component added, I can just plug that into the JSON so each key has its own sound.


## Day 26: March 30, 2019

**Today's Progress**: Finished Patatap Clone project! Started watching the codealong videos from Udemy for it.

**Thoughts**: I feel good about completing this entirely on my own without needing the guidance of the Udemy videos. I also adjusted the project just a tad to have a slightly randomly shaped blob appear each time you press a key instead of just a circle. It'll still be helpful to watch through them to see any areas I could simplify my code a bit. Also, I tackled a small paper.js exercise that I remember not being able to do last time I attempted to learn JS. Feeling optimistic.


## Day 27: March 31, 2019

**Today's Progress**: Finished watching the Udemy code-along videos on the Patatap Clone project.

**Thoughts**: I learned a couple things that I applied to my own project file. A couple things I learned: 
 * When using a loop inside of a loop to indicate x and y coordinates, Colt named the local variables x and y instead of i and j. This is helpful to be more specific even when just naming looping variables.
 * Instead of using vanilla JS to grab max width/height, paper.js has a built in property by using view.size.width and view.size.height.
 * When referencing objects, make sure to use bracket notation if you want the code in the brackets to run before applying it to the object. For example, letters[event.key] will run letters[f] (or whatever key is pressed), while letters.event.key returns undefined.
 * I didn't need to create an array of objects in the JSON file. Instead, I adjusted it so it was one large object with all the keys defined as properties, while each of their values were another object containing the color and sound.
 * Add an if statement to only run the code for keys that are defined in the letters object.

However, Colt used an array to track everything and run the code, but I am able to do so without it. I found using an array an extra task that isn't necessary, but I wonder if I'm just not understanding the importance of the array. I read in the Udemy Q&A section that the onFrame() method has to be defined at the global level, which may have influenced the need for an array. However, I discovered there is an item.onFrame() method that works properly the way I need it. I therefore did not adjust my code to use an array. Maybe I'll revisit this in a couple months when I get more experience to better decide if my choices were adequate.


## Day 28: April 1, 2019

**Today's Progress**: Went through 8 algorithm challenges on FreeCodeCamp.

**Thoughts**: I was hoping to get more done, but one of the challenges confused me a bit. I came up with a working solution for Truncate a String, which is an algorithm scripting challenge to add an ellipsis at a given point in a string based on a number. But the way the site suggests doing it considers the ellipses as 3 characters only if adding ellipses after 3 or less characters. I'm rather tired this evening, so I'll revisit this tomorrow.


## Day 29: April 2, 2019

**Today's Progress**: Decided on a whim to try and replicate a paper.js project I found on their site. 

**Thoughts**: I'm trying to do it without looking at the source code at all to better play around with what the library has to offer. Figured this would be a cool way to practice learning a library. It will most likely take me a few days.


## Day 30: April 3, 2019

**Today's Progress**: Continued work on my paper.js project.

**Thoughts**: I didn't really get anywhere today. Ah, well, this happens.


## Day 31: April 4, 2019

**Today's Progress**: Gave up on previous paper.js project and started a different one.

**Thoughts**: Trying to create a line that I can manipulate/move around on mouseover. Struggling a lot with this today.


## Day 32: April 5, 2019

**Today's Progress**: Gave up on the paper.js projects and looked at the source code for the manipulated line. Started JavaScript 30 challenges.

**Thoughts**: I have felt very dissuaded these last few days with my failures. I figure I'm not knowledgeable enough to explore an entire complex library yet, so I'm starting Wes Bos's JavaScript 30 challenge where I will complete 30 different projects strictly with vanilla JS.


## Day 33: April 6, 2019

**Today's Progress**: Completed JavaScript 30 - Day 1 and almost finished Day 2

**Thoughts**: It was hard for me to focus today, but I was able to get a decent amount done. I'm happy to be going through these projects and hope to finish all of them in less than 30 days.


## Day 34: April 7, 2019

**Today's Progress**: Completed JavaScript 30 - Days 2 and 3.

**Thoughts**: I didn't have issues with these, but I did learn a few things. Some key takeaways:
  * NodeList vs array = array has a full list of functions and methods. NodeList does not. forEach() is now supported in NodeList
  * For dragging input types, can add event listener for 'change' AND 'mousemove'
  * For any custom-made data attributes, you can access them via this.dataset to see full list
  * If you are adding a variable only if said variable exists, can do something like: var suffix = this.dataset.sizing || ''


 ## Day 35: April 8, 2019

 **Today's Progress**: Completed JavaScript 30 - Day 4.

 **Thoughts**: Took longer than I had anticipated, but this was an array challenge that required me to get refreshed on some array methods like reduce. Learned a couple things:
  * Can log console.table() instead of console.log() to more easily see results
  * Can easily use ternary operator for sort method
  * You can call querySelector on any existing DOM element. Doesn't have to just be document


 ## Day 36: April 9, 2019

 **Today's Progress**: Completed JavaScript 30 - Days 5 and 7.

 **Thoughts**: Day 5 was really simple for me since it was primarily via flexbox/CSS. Day 7 was another array challenge that was a good refresher. I skipped day 6 for now since it revolves around AJAX, and I haven't really familiarized myself with that yet.

 A few things I learned from today:
  * If using transitionend event listener on elements that have multiple transitioned elements, make sure to target when you want the transitionend to fire by doing if(e.propertyName.includes('flex'))
  * Array errors return -1 usually because they take an item's length - 1 in order to be able to grab the first index of an array if needed, so if that length is 0 then all that is left is the -1. Mind blown. Been wondering about this. 


## Day 37: April 10, 2019

**Today's Progress**: Began Javascript 30 - Day 8.

**Thoughts**: I don't remember doing this lesson a year or so ago when I first started the JavaScript 30 challenge. I therefore don't remember anything about canvas, so I spent today familiarizing myself with some pieces. I got the project to create a line that changes color and width when you click and move the mouse...but the color and stroke width change for the entire line instead of just for the parts it should affect.

**Project Summary**: Using canvas, make it so when you click and drag the mouse around, a rainbow line follows the cursor with differing thicknesses.


## Day 38: April 11, 2019

**Today's Progress**: Completed JavaScript 30 - Day 8.

**Thoughts**: This went much better than I expected. I misinterpreted the challenge, so I actually made something a bit more complex, where the speed you move your mouse determines the thickness of a rainbow line that appears. My biggest issues were:
 * I originally used rgb to change the color, but that proved incredibly difficult to get a rainbow effect. I then switched to hsl after Wes Bos mentioned it.
 * I needed to move the ctx.beginPath() and ctx.moveTo(x, y) to within the drawPath() function instead of the startPath() function. Wes Bos actually didn't even mention this, and I had somehow gotten that in a weird place on my own. I was trying some crazy solutions to make it so the entire line didn't change color, such as using a gradient (which didn't work). Fixed!

 
 ## Day 39: April 12, 2019

 **Today's Progress**: Watched JavaScript 30 - Day 9 and started Day 10's project.

 **Thoughts**: Day 9 consisted of some developer tools tips, so there was no challenge there. I got extremely tired today for some reason, so I struggled with getting started on Day 10's project. Also, I forgot to push my day 38 notes/code yesterday, so I'm pushing it along with today's.

 **Project Summary**: Allow a user to press a checkbox, hold down shift, press another checkbox, and have all the checkboxes between point A and point B check off.


 ## Day 40: April 13, 2019

 **Today's Progress**: JavaScript 30 - Day 10 project.

 **Thoughts**: I was able to come up with a solution on my own, but it was pretty different/less efficient than Wes Bos's way. However, he did mention this was a more complex challenge, so I still feel pretty good about what I did come up with. I do want to revisit this at some point, because the proper solution is way more simple than mine. Some notes:
 * Make sure to add a check in the JS to see if the clicked checkbox is getting unchecked, in which case you can ignore it
   * If(this.checked) { // do }
 * Keydown and keyup are included in click event listener -- don't need separate listeners for all 3
* Can use an opposite boolean variable within a forEach() instead of finding the index of each checkbox. Using this method, if the current checkbox within the forEach() is the currently checked checkbox OR the last checked checkbox, the boolean variable called isBetween will be flipped to true/false.


## Day 41: April 14, 2019

**Today's Progress**: JavaScript 30 - Day 11 project (mostly finished).

**Thoughts**: I'm feeling pretty good about this project so far. I was able to make the skipping and sliders pretty flexible in case more sliders/skipping adjustments were added. I'm going to finish up the progress slider tomorrow.

**Project Summary**: Create some custom controls for a video player, including: skipping, volume adjustments, speed adjustments, playing, and progress slider.


## Day 42: April 15, 2019

**Today's Progress**: JavaScript 30 - Days 12 and 13 (mostly finished).

**Thoughts**: I stayed late at work for an appointment, and I decided to skip day 11's challenge for now. Day 12 went fairly quickly. My solution was not as polished as Wes Bos's, but it worked. Day 13 is really applicable to me, and I probably got around halfway done. I had to google getBoundingClientRect(), which I want to read about more. I'm a bit cautious, because this challenge didn't seem as difficult as other ones.

**Project Summary**: Day 12 involved checking to see if the user pressed the Konami code on their keyboard. If they did, a surprise would appear. Day 13 involved having images animate in on scroll.


## Day 43: April 16, 2019

**Today's Progress**: You Don't Know JS - Chapter 1 reading and project

**Thoughts**: This was a lot of review, but I spent a surprising amount of time on the project at the end.

**Project Summary**: Create a function to purchase the max number of phones (and up to one accessory each if the total isn't higher than an amount you'd like to pay) you could afford based on your bank account amount and a tax rate.


## Day 44: April 17, 2019

**Today's Progress**: JavaScript 30 - Day 13 and Day 14

**Thoughts**: Finished up the Day 13 challenge. I watched part of the video, got a tidbit of info that I needed/was previously confused by, and was able to finish the project without help. It required more math than I'm used to, althought not really that much altogether, so I want to get more comfortable with math and JS. Day 14 revolved around how strings, booleans, and numbers can have variable references to other variables stay separate, like the below example:
```
  let age = 100;
  let age2 = age;
  console.log(age, age2); // 100 100
  age =  200;
  console.log(age, age2); // 200 100
```
While arrays/objects would update the original, like the below example:
```
  let players = ["Emily", "Lauren", "Jas"];
  let team = players;
  team[1] = "Allie";
  console.log(team, players) // both are ["Emily", "Allie", "Lauren"]
```
This is because team itself is not an array, but rather a reference to the array, so updating team[1] passes over to the original. I would like to revisit my notes on this in the future to really hone in this knowledge.


## Day 45: April 18, 2019

**Today's Progress**: Worked on JavaScript 30 - Day 15

**Project Summary**: Work with event delegation and localStorage. Allow the ability to add tapas items to a list along with a checkmark next to each item. Info should be stored in localStorage to see changes on page reload.

**Thoughts**: I was not introduced to localStorage when I worked on learning JavaScript last year, so this is an exciting new feature for me. I watched the intro to the Wes Bos video, but am otherwise trying to solve this challenge on my own before watching the rest of the video. May take another day.


# --**Skipped April 19th to spend some last time with aging family pet.**--

## Day 46: April 20, 2019

**Today's Progress**: Worked on JavaScript 30 - Day 15

**Thoughts**: Took me a few minutes to remember what I was doing in this project even though I touched it just two days ago. I finished the challenge successfully, but plan on cleaning up the code a bit tomorrow before watching the code along video. This was a good challenge and success.


## Day 47: April 21, 2019

**Today's Progress**: Watched JavaScript 30 - Day 15 code along

**Thoughts**: My solo attempt was very similar to Wes Bos's result! The biggest notable difference is that he rerenders all the items on the page every time you check/uncheck or add an item, while I just update the individual instance. I took down some notes, though:
  * e.preventDefault(); is used to prevent page reloading when submit event is fired
  * Form elements have a .reset() method on them that can be used instead of input.textContent = '';
  * Good to have a default value for something to loop over so it doesn't break if nothing is pushed through in a function like populatingList/createElements
    * Ex: function populateList(plates = [], platesList)
  * Can go to Application tab of console and view the file:// of Local Storage to see key/value pairs and additional information
  * Can define variables with a logical operator.
    * Ex: const items = JSON.parse(localStorage.getItem('items')) || [];
  * Event Delegation: set a listener event on something higher up than what you need (something that will not ever change) and then inside you check to see if it's the thing that you want
    * Ex: if (!e.target.matches('input')) return; and put any code beneath that you would want to run
  * Instead of element.getAttribute('data-index'), you can do element.dataset.index


## Day 48: April 22, 2019

**Today's Progress**: JavaScript 30 - Day 16 challenge/code along

**Project Summary**: Create a text shadow that moves based on your cursor position on the screen.

**Thoughts**: I solved the problem in a way that was slightly different from Wes Bos, but was still successful. I'm trying to replicate his code after watching his video, but am struggling a bit with the math equation. I will take a look tomorrow, though. One note from today's challenge:
  * You can use e.offsetX and e.offsetY to get the position of your cursor, but if you have nested elements inside of it, you'll need to create an if statement so the offsetX and Y do not reset to 0 once you get to the nested element:
    * if(this !== e.target) { x += e.target.offsetLeft; y += e.target.offsetTop; }


## Day 49: April 23, 2019

**Today's Progress**: JavaScript 30 - Day 17 challenge/code along

**Project Summary**: Sort a list of band names alphabetically, but ignoring words 'A', 'An', and 'The'.

**Thoughts**: I was able to resolve the math equation from yesterday. I mistakenly declared the width/height variables to be the width/height of the text container on the page, not of the actual viewport width/height. This was causing the issues, but I figured it out, so I'm happy.

I resolved today's challenge in a more complex way than Wes Bos did. He used replace() and a regular expression, while I instead split each band name, checked if the first index was one of the words, and applied shift() if so. I liked how he created a function that could pass the a or b arguments into it without much more code.


## Day 50: April 24, 2019

**Today's Progress**: JavaScript 30 - Day 18 challenge progress, and Day 17 review

**Thoughts**: I was very distracted today because of some life events, so I look forward to tomorrow when my head is more cleared.


## Day 51: April 25, 2019

**Today's Progress**: Finished JavaScript 30 - Day 18 challenge/codealong

**Thoughts**: I worked on two versions of this, and the second one and almost completely matched what Wes Bos did. A couple things I learned:
  * Instead of looking for all li, look for anything with [data-time] attribute
  * Can use an existing/default method within another method. For example, can use someVar.map(Number), which is the same as running:
    * someVar.map(function(str) { return Number(str); }


## Day 52: April 26, 2019

**Today's Progress**: Began JavaScript 30 - Day 19 challenge and partial codealong

**Project Summary**: Access your webcam and create a photo booth style application with it by letting the user take photos and apply different filters.

**Thoughts**: This is a super interesting challenge. I learned a bit about what promises are today, which I've never learned about before. I didn't get very far in this project because I am wanting to do as much as I can before watching the codealong. So far: I got my video to play. Tomorrow I will tackle canvas for the second time.


## Day 53: April 27, 2019

**Today's Progress**: Continued Day 19 challenge

**Thoughts**: This is a slow-going challenge. In the hour that I worked today, I only added 8 lines of code. This is offputting, but I'm trying to work through it since this is an entirely new challenge that I'm trying to do as much as on my own as possible. I had to watch part of the code along today because I couldn't get an image to show up in the canvas element, but I discovered I did everything right, but the canvas element just didn't have a width and height defined.


## Day 54: April 28, 2019

**Today's Progress**: Continued Day 19 challenge

**Thoughts**: Today went better. I was able to figure out how to get the canvas size to be set to the video size once the video loaded in. I also figured out how to take screenshots and allow for downloading said screenshots. Tomorrow I will tackle pixel manipulation with canvas.


## Day 55: April 29, 2019

**Today's Progress**: Continued Day 19 challenge

**Thoughts**: Today went very well. I learned a good deal about pixel manipulation in canvas using getImageData(). I learned it returns the width of the image data in pixels x the height of the image data in pixels, and then multiplied by 4 for the r, g, b, and a values that are just all in a list like: console.log(data[0], data[1], data[2], data[3], data[4], data[5]); // logs the values for r, g, b, a, r, g.

Wes Bos has 4 different pixel manipulation challenges: all red hue, color offsets, adjusting overall blur, and creating a green screen effect. I was able to take care of the first challenge today and hope to finish the other 3 tomorrow.


# **Out of state April 30th and May 1st.**


## Day 56: May 2, 2019

**Today's Progress**: FINISHED Day 19 challenge

**Thoughts**: I feel really good about what I accomplished. I was very close to what Wes Bos did for every step of the way and only have a few notes from watching through his codealong today:
  * If you inspect video, you'll see the src is a blob, which means that it's the raw data that's being fed into it.
  * Wes did video.src = window.url.createObjectURL(localMediaStream), while I did video.srcObject = MediaStream; Not sure difference?
  * Return setInterval(), because if you ever need to stop it from painting, you can have access to the interval
  * Instead of createCanvas() function I created that adds a setInterval() and loops every half a second until the video has a width of 1px or more, I can create a canplay event listener! Much simpler
  * Instead of my method of ctx.putImageData(img, 0, 0) at the bottom of each effect function, can instead just set imageData in setCanvas() to be the effect function:
    * Instead of: allRed(imageData)and setting putImageData at bottom
    * Do: imageData = allRed(imageData); and ctx.putImageData(imageData, 0, 0) right underneath and once. And then make sure to return imageData


## Day 57: May 3, 2019

**Today's Progress**: Started Day 20 challenge and some You Don't Know JS: Up and Going - Chapter 2 reading

**Project Summary**: Create a text to speech program.

**Thoughts**: Had a very demanding day that made working through this challenge difficult. I'll need a fresh mind tomorrow to revisit.


## Day 58: May 4th, 2019

**Today's Progress**: Continued day 20 challenge.

**Thoughts**: Went better than yesterday, but still not finished. A few reasons my technique wasn't working:
  * I needed to run a localhost server.
  * It is not supported in Firefox Developer Edition or in Vivaldi. I had to switch to chrome.

I am confident I will get this finished and understood fully tomorrow.


## Day 59: May 5th, 2019

**Today's Progress**: Finished day 20 challenge.

**Thoughts**: Trying to comprehend how Wes Bos used map to create the full transcript for each spoken sentence. Hoping to come back at that portion with a fresh mind tomorrow.


## Day 60: May 6th, 2019

**Today's Progress**: Reading You Don't Know JS - Up & Going, Chapter 2.

**Thoughts**: Learned a wealth of good information today. Some of my biggest takeaways are:
  * Arrays and functions are types of objects. Arrays are key-value pairs, where the key is always numerical (though you technically could set someArr['color'] = 'blue')
  * JS converts primitive values into objects behind the scenes when methods are used on them, like "some string".toUpperCase();
  * Comparison operators of inequality do not have strict type coercion.
  * Type coercion will try to convert booleans or strings to numbers. Object type coercion considers the reference, not the actual values.
   * var a = [1, 2, 3]; var b = [1, 2, 3]; var c = a;
   * a == b // false
   * a == c // true


## Day 61: May 7th, 2019

**Today's Progress**: Reading You Don't Know JS - Up & Going, Chapter 2.

**Thoughts**: Enjoying reading through this and learning a lot. Some key takeaways:
  * How to immediate envoke functions. You need to wrap the function with () to ensure it's not treated as a normal function, and then add an additional () to the end (in a similar manner that you normally would have to run foo() after declaring the function).
  * "strict mode"; is a way to make more stable, reliable code.
  * Closure is a complicated topic about being able to remember pieces of a scope after the function finishes running.


## Day 62: May 8th, 2019

**Today's Progress**: Finished You Don't Know JS - Up & Going, Chapters 2 and 3

**Thoughts**: I can't get enough of You Don't Know JS. I feel like I"m learning a lot about the language that I knew nothing about. I'm the target audience for this book series, and I can't wait to read more. I'm going to balance Wes Bos's JavaScript 30 challenges with this reading so I can understand more fundamental things. The major thing I learned:
  * Prototypes are ways for an object to use a related object's property as a fallback if the aforementioned object doesn't have the property called. An example of this is using toUpperCase() on a string, which is converted to a String object and then uses a reference to that String object's toUpperCase() property.


## Day 63: May 9th, 2019

**Today's Progress**: Read half of You Don't Know JS - Scope & Closures, Chapter 1. Watched Wes Bos's JavaScript 30 Day 21 challenge. Began day 22 challenge.

**Thoughts**: Today was productive. Started learning more about the how JavaScript compiles behind the scenes and how the engine works with the compiler and scope to determine variables.

I also watched Wes Bos's JavaScript 30 - Day 21: Geolocation based Speedometer and Compass because it required having a Mac. It used the navigation object, similar to what was necessary for speech to text and webcam.

I then started Day 22 - Follow Along Links, where a highlight appears behind a link when you mouseover it, and then it moves eto the next link you highlight.


## Day 64: May 10th, 2019

**Today's Progress**: Worked on JavaScript 30 Day 22 challenge

**Thoughts**: I started this challenge late after celebrating a friend's birthday, and that had a big toll on me. I was unable to concentrate/solve the issues and instead tried thinking through a couple options for an hour without much resolution. I will make sure to not start my JS practice after 9.


## Day 65: May 11, 2019

**Today's Progress**: Finished JavaScript 30 Day 22 challenge and got about halfway through Day 23

**Thoughts**: With a full night sleep, I was able to resolve the challenge very quickly and using the same method that Wes Bos did. Felt very good about it. Day 23 challenge is to work with the text-to-speech API. I was able to get a list of voice options and adjust the rate/pitch/text. Now I just need to get the audio to actually play!


## Day 66: May 12, 2019

**Today's Progress**: Continued JavaScript 30 Day 23 challenge

**Thoughts**: Mostly finished with this. A bit of a slow start today, but I'm getting very close. The remaining pieces I need to take care of: have the Speak button work on page load without having to edit the textarea content, and cleaning up code. That's it! Still avoiding watching the Wes Bos code-along videos until I gave the lesson my best shot.


## Day 67: May 13, 2019

**Today's Progress**: Continued reading You Don't Know JS - Scope & Closures, Chapter 1.

**Thoughts**: Took me a while, but I now understand the LHS and RHS variable look-up process for scope. In summary:
  * LHS: finding the container variable and assigning a value to it. Do not care about the actual value. If this look-up results in nothing found, and you are not in Strict Mode, the global scope creates a variable and hands it back to the engine.
  * RHS: finding the value of something. If this look-up results in nothing found, a ReferenceError is thrown.


## Day 68: May 14, 2019

**Today's Progress**: Finished You Don't Know JS - Scope & Closures, Chapter 1. Began Chapter 2.

**Thoughts**: Learning more about how scope works:
  * If you call a variable in an inappropriate way, such as a non-function value as a function (var a = 2; a()), it will return a TypeError.
  * Shadowing is defined as defining the same variable name in multiple locations within a nested scope.
  * Global variables can be accessed as a property of the window object. A way to get the value of a global scoped variable regardless of shadowing.
  * Lexical scope is based on the order/location of code based on the programmer.


## Day 69: May 15, 2019

**Today's Progress**: Continued reading You Don't Know JS - Scope & Closures, Chapter 2. Took a few JS quizzes.

**Thoughts**: Spent a good deal of time learning about eval() and what it does. I feel more comfortable with what lexical scope is vs dynamic scope. I also took an interesting JS quiz. I got 50% on it, while the average is 47.96%. I got a lot of the scope and coerced equality -related questions correct, so my research and learning is paying off!

(JavaScript Web Quiz)[http://davidshariff.com/js-quiz/#]


## Day 70: May 16, 2019

**Today's Progress**: Finished reading You Don't Know JS - Scope & Closures, Chapter 2.

**Thoughts**: I better understand eval() and learned about with and both of their performance limitations. I'm curious about the FUnction() constructor, but the reading didn't cover that in too much depth, beyond saying it's a better alternative.


## Day 71: May 17, 2019

**Today's Progress**: Finished Wes Bos' JavaScript 30 - Day 23 challenge (Speech Synthesis) and watched code-along

**Thoughts**: I think I did pretty well in this challenge. My biggest issue is not utilizing array methods as much as I should. I really need to use map(), find(), filter(), etc more often. Also, I need to make sure to set data attributes more often for different elements to make it much easier to reference back to them.


## Day 72: May 18, 2019

**Today's Progress**: Completed Wes Bos' JavaScript 30 - Day 24 (Sticky Nav) and 25 (Event Capture, Propagation, Bubbling, and Once) challenges and watched code-alongs

**Project Summary**: Create a nav that becomes fixed to the top of the screen when you reach a certain scroll distance.

**Thoughts**: Productive day! I was very close on the Sticky Nav project. I used position: sticky instead of position: fixed, since sticky is a new value for the position property. Because Wes used fixed, though, I learned that you will need to add padding-top to the body element that equals the height of the nav since the nav is taken out of the flow of the document with fixed positioning.

The other video wasn't a challenge so much as learning about some event features. I learned
  * Capture: Goes top down upon clicking an element -- the browser captures that the item you clicked is in the html, then the body, then the header, etc. It does not fire the event during this, unless capture is set to true in an event listener's options object.
  * Bubbling: Goes down to top upon clicking an element. The browser returns that you clicked the button that's inside the header that's inside the body that's inside the html.
  * Propagation: Prevents capturing/bubbling from continuing past where e.stopPropagation() is called.
  * Once: Event listener's option property that lets you allow the event to only be fired once before it unbinds itself.


## Day 73: May 19, 2019

**Today's Progress**: Almost completed Wes Bos' JavaScript 30 - Day 26 (Follow Along Nav) challenge.

**Project Summary**: Instead of a normal nav with dropdowns where you hover over one nav button and a dropdown appears, make it so the background of the dropdown moves along to the next hovered button's dropdown and fit the content.

**Thoughts**: Went mostly well, just need to figure out how to add margin to the top of the dropdown to fit properly. Everything else seems set!


## Day 74: May 20, 2019

**Today's Progress**: Finished Wes Bos' JavaScript 30 - Day 26 challenge and codealong. Began Day 27 (Click and Drag) challenge.

**Project Summary**: Click and move your mouse to drag a scrollbar to the left/right of the screen.

**Thoughts**: Learned a few things from yesterday's challenge. I feel like that challenge and today's are both very relevant. I was able to have the scrollbar move on mousedrag by adding a boolean that changes to true on mousedown, and then a mousemove event that fires that only does anything if that boolean is true. A few notes from Day 26 challenge:
  * Two classes can get added to an element to show it -- first to set from display: none to display: block/whatever, second to go from opacity: 0 to opacity: 1 after a setTimeout() function. This is how Angular and React do things too
 * element.getBoundingClientRect() takes the absolute position the element is at on the screen. It therefore needs to subtract the coords of the nav it should be relating to, otherwise if more content is added to the top of the page, it will push down the element


## Day 75: May 21, 2019

**Today's Progress**: Finished Wes Bos' JavaScript 30 - Day 27 challenge and codealong.

**Thoughts**: Went well! I tackled it a slightly different way from Wes Bos, but I used this way with the Udemy course before and think it works well. A few notes, though:
  * Instead of putting all of code in an if statement that reads like if(someVarIsTrue) { }, have if(!someVarIsTrue) { return; } 
  * Can add e.preventDefault() on movemove event listener to prevent highlighting of text or other normal/default functionality
  * Make sure to take e.pageX - items.offsetLeft to remove any space that may be between the current position of the cursor and the leftmost side of the draggable div


## Day 76: May 22, 2019

**Today's Progress**: Started and completed Wes Bos' JavaScript 30 - Day 28 challenge and codealong. Started Day 29 challenge.

**Project Summary**: Adjust the playback rate for a video based on the mousemove event on an external div.

**Thoughts**: I thought this went really well. I finished it pretty quickly, and did things in a mostly similar way as Wes Bos. I don't know why he used e.pageY instead of e.offsetY, though. Here are a few of my notes:
  * Good to set variables for the min and max playback rate amount
  * Can find the range of acceptable output for something by taking a value that ranges from 0 to 1 and multiplying it by (max - min) and then adding min
    var min = 0.5;
    var max = 5;
    var currentValue = 0.222;
    var test = currentValue * (max - min) + min; // this results in 0.222 * (4.5) + 0.5, or 1.499


## Day 77: May 23, 2019

**Today's Progress**: Continued with Wes Bos' JavaScript 30 - Day 29 challenge.

**Project Summary**: Create a countdown timer.

**Thoughts**: Watched the first couple minutes of the codealong after finishing some of the code myself -- enough to see that Wes Bos mentions not using setInterval(). I stopped the video there and plan on figuring it out on my own.


## Day 78: May 24, 2019

**Today's Progress**: Finished Wes Bos' JavaScript 30 - Day 29 challenge and codealong.

**Thoughts**: This was a bit challenging, but I was able to figure it mostly out on my own. A few important lessons learned:
  * Can use a setInterval() function, but should not base the current time on a decreasing number value, and instead should base it on the end time minus the current time. That way, if there's a hiccup or some lag, the countdown will still be correct since it's based on real values
  * document.title is a way to reference your browser tab name
  * Can run ternary operator to say something like endTime.getHours() > 12 ? endTime.getHours() - 12 : endTime.getHours(); to adjust for North American 12 hour clocks
  * Need to add a clearInterval() function to the top of startTimer to cancel out any other intervals that exist, so there aren't a few going simultaneously
  * If element has a name attribute, can do document.whateverName to access it. Can also do nested ones like document.whateverName.nestedName


## Day 79: May 25, 2019

**Today's Progress**: Started and finished Wes Bos' JavaScript 30 - Day 30 challenge and codealong.

**Project Summary**: Create a whack-a-mole game.

**Thoughts**: Reminded me of the Color Game project I worked on for the Udemy course, so this went mostly well. I had a few too-complex solutions for components. For example, I can just create a setTimeout() function that ends the game through a boolean variable after an ellapsed amount of time. My solution was more complex (and less accurate) by checking the current time after a mole goes down and ending the game if the current time is at or passed the current time + game duration. More notes:
  * Can rerun the setTimeout() function at the end of it if you need it to run again. Seems really really interesting compared to setInterval() when you need different durations.
  * It's helpful to create a randomNum() function instead of relying on it as a variable since the function can be called multiple times with different return values, while the variable has to be re-declared to get a different value.
  * It's helpful to create a separate function that gets a random hole based on the input node list/array. Add a lastHole variable that is checked to see if the current hole is the same one as the last one, in which case rerun the randomHole() function
  * Suggestion based on above -- create functions that are more agnostic for the end goal when possible.
  * Can create an isOver boolean variable to determine if the game should be over. Can then create another setTimeout() function that sets it to true after the game duration has passed.
  * Can check for cheaters by checking e.isTrusted. If true, that means the user clicked with a mouse. If false, it was faked with JS


## Day 80: May 26, 2019

**Today's Progress**: Started/completed and watched codealong for Wes Bos JavaScript 30 Day 6 challenge.

**Project Summary**: Using ajax, create a search box/results that change as you type instead of changing based on a submit/enter button.

**Thoughts**: Wes Bos used RegEx while I used toLowerCase() as the method to match case for items. My way seemed to work, but I want to re-learn RegEx to be able to to utilize it more. Other notes:
  * Can use fetch(), instead of xmlHttpRequest() which returns a promise. Can use .then() after it
    * fetch(endpoint)  .then(blob => blob.json())  .then(data => cities.push(…data) // the … is called spread and is ES6)
  * Change event fires when you leave that input, so for text entry ones it will only work when you click off of the text entry
  * Get data first, then worry about displaying it
Instead of using .toLowerCase() could use const regex = new RegExp(search, gi); // g stands for global, I stands for case insensitive

Also! I have now finished all of Wes Bos' JavaScript 30 challenges!


## Day 81: May 27, 2019

**Today's Progress**: Reviewed You Don't Know JS: Scope & Closures - Chapters 1 & 2 notes. Started reading Chapter 3.

**Thoughts**: I have a lot to learn, and must always remember that. Today I reviewed the compliation process, lexical scope, how to cheat lexical scope, and performance issues with cheating lexical scope. Things I learned in chapter 3:
  * Think about creating functions with code as a way to hide the code by taking a section of code and wrapping it in a function.
  * Consider the Principle of Least Privilege -- consider exposing what is minmally necessary and "hide" everything else.
  * Best to declare variables and functions within the scopes they pertain to instead of global scope when possible.
  * Libraries avoid collision of multiple variables referring to the same scope identifier in unintended ways by creating one variable object with a unique name in the global scope and having all the properties/methods private within.


## Missed May 28th to see a musical


## Day 82: May 29, 2019

**Today's Progress**: Continued reading You Don't Know JS: Scope & Closures - Chapter 3. Completed FreeCodeCamp Basic Algorithms Finders Keepers and Confirm the Ending

**Thoughts**: I learned about function expressions vs declarations, IIFE, how scope works with IIFE, and that it's helpful to name IIFEs (and all inline functions). I completed one algorithm challenge I had not been able to complete before. I attribute my reading of You Don't Know JS to my success, since I learned about being able to call functions with nested arguments.


## Day 83: May 30, 2019

**Today's Progress**: Continued reading You Don't Know JS: Scope & Closures - Chapter 3.

**Thoughts**: Learned more about IIFE, like how you can have the function to execute in the first part or after the parameters. I also separately researched a bit more on the difference between function expressions and function declarations. It was helpful to make the comparison to variable declarations, which always begin with the var keyword and need to be called later, similar to how function declarations begin with the function keyword and need to be called later.

I also learned how for loops actually have the var i = 0 (or whatever initialization) scoped to the surrounding function/global scope, not to the for loop.


## Day 84: May 31, 2019

**Today's Progress**: Finished reading You Don't Know JS: Scope & Closures - Chapter 3. Began Chapter 4: Hoisting.

**Thoughts**: I learned more about let and how block scoping can help with things like garbage collecting, where some memory-guzzling code, like some data, can be placed in its own explicit code block to be run through a function and then left alone so it's not needed for reference later/using up memory still. I also learned that variable and function declarations are processed before variable/function assignment. So:
 `console.log(a);`
 `var a = 2;` 
is processed like so:
 `var a;`
 `console.log(a);` // undefined
 `a = 2;`


 ## Day 85: June 1, 2019

 **Today's Progress**: Continued reading You Don't Know JS - Chapter 4, did a few algorithm challenges, and read a bit more about recursion and hoisting.

 **Thoughts**: I learned how variable declarations are hoisted, but not the assignments. Function declarations are hoisted above variable declarations. Function declarations are hoisted outside their block, even if statements, to the enclosing scope. I'm also playing around with using recursion to create a string reversal algorithm.