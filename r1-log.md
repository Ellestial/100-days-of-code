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