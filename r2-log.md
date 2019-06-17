# 100 Days Of Code - Log

## Day 1: June 17, 2019

**Today's Progress**: Rewatched Objects section within The Web Developer Bootcamp Udemy course.

Thoughts: I've been refamiliarizing myself with JavaScript on and off the last month, and want to make a more dedicated effort to spend 1 hour of learning/practice a day. Object refresher was helpful, but I also was able to make some connections to more advanced work I had learned last year from this refresher.


Chapter 1: this or That?
- It is automatically defined in the scope of every function

Why this?
function identify() {
	return this.name.toUpperCase();
}
function speak() {
	var greeting = "Hello, I'm " + identify.call( this );
	console.log( greeting );
}
var me = {
	name: "Kyle"
};
var you = {
	name: "Reader"
};
speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER
- The code snippet allows the identify() and speak() functions to be re-used against multiple context objects, rather than needing a separate version of the function for each object
- Could have explicitly passed in a context object to both identify() and speak() though:
function identify(context) {
	return context.name.toUpperCase();
}
function speak(context) {
	var greeting = "Hello, I'm " + identify( context );
	console.log( greeting );
}
- The this mechanism provides a more elegant way of implicitly passing along an object reference, leading to cleaner API design and easier re-use.

Confusions
There are two meanings often assumed, but both are incorrect.

Itself
- Misconception: this refers to the function itself.
- Functions are objects, so you can do something like the below. The object within the function must be named the same as the function (because they are one and the same)
  function foo() {
    foo.count = 4;
  }
  foo();
  foo.count; // 4

Its Scope
- Misconception: that it somehow refers to the function's scope.
- You cannot use a this reference to look something up in a lexical scope.
- Ex:
  function foo() {
    var a = 2;
    this.bar();
  }
  function bar() {
    console.log(this.a);
  }
  foo(); // undefined
    - It works, though not on purpose. The most natural way to have invoked bar() would ahve been to omit the leading this and just make a lexical reference to the identifier
    - The developer making the above code is attempting to create a bridge between the lexical scopes of foo() and bar() so that bar() has access to the variable a in the inner scope of foo(), but this is not possible

What's this?
- It is not an author-time binding, but a runtime binding
- It is contextual based on the conditions of the function's invocation
- It has nothing to do based on where a function is declared, but rather on the manner in which the function is called
- When a function is invoke,d an activation record (or execution context) is created, which contains info about:
  - Where the function was called from the call-stack
  - How the function was invoked
  - What parameters were passed
  - The this reference which will be used for the duration of the function's execution
