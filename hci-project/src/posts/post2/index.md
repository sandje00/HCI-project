---
slug: react-vs-vue
title: React vs. Vue
date: 2012-09-02
author: SA
image: './images/reactvue.png'
published: true
---

## React vs. Vue

![react-vs-vue](./images/reactvue.png)

Nowadays React.js and Vue.js are two leading front end JavaScript frameworks. Both of them have their own particularities and similarities, advantages and disadvantages, which doesn't make any of them generally better; it depends on your use case. Explore what makes them so much in demand and how to choose the framework based on your needs!

### Similarities

* **Virtual DOM** - instead of re-rendering the whole page as (regular DOM), only those objects that have changed are updated, saving the time and resources that heavy DOM manipulations otherwise take up
* **Component-based UI development** - UI is built from components, either from libraries or arbitrary user defined, which provide code reusability, improve developer productivity, and speed up the development process
* **Component lifecycle** - in each framework components have similar lifecycles and there is a set of methods to efficiently manipulate them
* **Focus on the view library** - separate libraries for routing, state management, etc.

### Differences

#### Coding style
React relies on Javascript functional programing paradigm using so called JSX (JavaScript XML). It allows combining HTML tags with arbitrary, user defined tags, style and JavaScript code. Tags are UI components and JS code manipulates them.
Vue follows the convention of separation of HTML, style and data/logic. Vue component is .vue file separated in three parts: template for markup, script for JS code and style for style sheets, which makes it more intuitive and easier to learn.

#### Flexibility
The main advantage of React over Vue is its flexibility.
Vue is a true JS framework. On the other hand, React is a library with framework-like features so convincing that is regarded as JS framework. That kind of nature gives React more flexibility when it comes to choosing when to include it in the code as a developer.

#### State management
With both frameworks allow stateful components maintenance. React uses hooks which are great for component level state management. It is also possible to achieve it in Vue with simple store creationwithin the data object, but its complexity grows with the growth of data in the state. For both frameworks there are state management modules for more complex use cases, Redux and Vuex.

#### Size
When it comes to size, Vue is smaller than React. According to GitHub Gist, React 16.2.0 + React DOM has a file size of 97.5 kilobytes while the same for Vue 2.4.2 is 58.8 kilobytes.

#### Use Cases
As seen in this post, both React and Vue are good frameworks, but using their full potential depends on the use case.
If you want to create a complex and scalable app, choose React, but if your app is rather simple and lightweight, Vue is the better option.

#### Check out also
* [Vijay Singh: React vs. Vue](https://hackr.io/blog/react-vs-vue)
* [Maja Nowak: Vue vs. React in 2019: Which Framework to Choose and When](https://www.monterail.com/blog/vue-vs-react-2019)