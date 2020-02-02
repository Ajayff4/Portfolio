import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log('I am', this.name, 'and I am', this.age, 'years old.');
//     }
// }

// const animal = new Animal('Simba', 3);
// animal.speak();
// console.log(animal);

// class Lion extends Animal {
//     constructor(name, age, furColor, speed) {
//         super(name, age); //invokes constructor of parent class
//         this.furColor = furColor;
//         this.speed = speed;
//     }

//     roar() {
//         console.log(
//             'ROOOOOOOOOOAR! I have',
//             this.furColor,
//             'fur, and I can run',
//             this.speed,
//             'miles an hour!'
//         );
//     }
// }

// const lion = new Lion('Mufasa', 20, 'golder', 25);
// lion.speak();
// lion.roar();
// console.log(lion);