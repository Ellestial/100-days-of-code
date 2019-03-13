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
