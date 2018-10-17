import helloImage from './images/hello.jpeg';

export default `
The first post in this blog is written by yours truly. I hope you enjoy reading this blog as much (more?) as I've enjoyed writing it.

If you are reading this, I am sincerely impressed with your patience, and I hope that you find it worth your time and are enjoying the course.

## CSS in JS

This is intended to be a relatively stream-of-conciousness exposition of what I love so much about CSS in JS.

First and foremost, I think it's abundantly obvious that there are some implicit benefits of one of the first implementations of CSS in JS: inline styles.

However, for a variety of what I would say are _crucial_ downfalls, inline styles are not what I'd consider the **best** implementation of CSS in JS.

Introducing... styled-components! 

## styled-components

styled-components is the first CSS in JS library where it really clicked and where I felt writing CSS as CSS in JS to be natural, intuitive, and clean. The authoring experience is top-notch and I really do believe it to still be one of the best CSS in JS libraries in the React ecosystem.
`;

export const meta = {
  author: {
    avatar: '',
    name: 'Dustin Schau',
    twitter: 'schaudustin'
  },
  description: `The first post in this blog is just a simple example... pretend there is some meaningful, inspiring content here!`,
  image: helloImage,
  title: 'Hello World',
  published: new Date('05/06/2018')
};
