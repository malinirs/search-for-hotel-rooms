import './styles/style.css';
import Logo from './img/webpack-logo.png';

console.log('HI!');

export default class Post {
  constructor(img) {
    this.img = img;
  }

  toString() {
    return JSON.stringify({
      img: this.img
    })
  }
}

const post = new Post(Logo);

console.log(post.toString())
