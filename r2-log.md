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