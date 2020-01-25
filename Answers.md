# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a UI component library which aims to make web apps component based, easy to render without taxing the DOM, and establish efficiency by creating making those components easier to manage separate from the entire application. 

1. What does it mean to think in react?

It means to consider web pages and apps in the form of components, as opposed to one document or application. 

1. Describe state.

State is data being utilized by an application. When state changes, React will only change the affected component. 

1. Describe props.

Props (properties) are data, either state or otherwise, which is passed from component to component via attributes attached to those components which house the actual data to be passed via prop. <p fontColor={props.red}>

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side affects are anything that happens outside the application, event by intent, such as and API call. Side affects are handled using the useEffect hook.