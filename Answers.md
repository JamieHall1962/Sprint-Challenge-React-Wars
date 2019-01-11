# Answers

(Every question was #1. I changed them)

1.  What is React JS and what problems does it try and solve?

React JS is a User Interface library that attempts to make manipulating and updating the DOM much more efficient.

2.  What does it mean to _think_ in react?

To me it means to think in terms of components. Break down every aspect of the application into the smallest part. This creates reusable code and makes constructing (or composing, per Dustin) easier, more efficent, and less buggy.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A stateful component contains data that is passed to whatever component needs such data. A functional component is primarily designed to display such data without mutating it. It takes in data (props) and returns a React element

4.  Describe state.

State is just data, unless I am missing something. No matter how complicated the definition is on various internet sites, it is just data that can be passed to other components, and modified using setState.

5.  Describe props.

Props is the data that comes from a stateful component and is received (passed down) to a functional component that needs it. Or has a child that needs it, in which case it gets passed down again until it reaches the place where it needs to be.
