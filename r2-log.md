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