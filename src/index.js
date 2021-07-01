import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import history from './history';
import Header from './components/Header/header.component';
import { Provider } from "react-redux";
import store from './redux/store'
import './index.css';


ReactDOM.render(
  <BrowserRouter history={history}>
    <Provider store={store}>
      {/* <Header /> */}
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);



// debugging
// console.log('test');
// console.table([{name:"naveen",age:25},{name:"ashis",age:24}])

// function xyz(){
//     return xyz()
// }
// console.dir(xyz);
// alert("")


// Callbacks

// function test1(a, b, callback) {
//     console.log('test1 done', a + b)
//     callback();
// }

// function test2() {
//     console.log("test 2")
// }

// test1(2,3,test2);

// Promises

// function test1(a, b) {

//     return new Promise((resolve, reject) => {
//         if ((a + b) % 2 == 0) {
//             resolve("test1  passed")
//         } else {
//             reject("test1 not passed")
//         }
//     })
// }

// function test3(a, b) {
//     return new Promise((resolve, reject) => {
//         if ((a + b) % 2 == 0) {
//             resolve("test3 passed")
//         } else {
//             reject("test3 not passed")
//         }
//     })
// }

// function test2() {
//     console.log("test 2 is passed")
// }


// test1(2, 3).then(res => {
//     console.log(res);
//     test2()
// })
//     .catch(err => {
//         console.log('error occured test1 failed', err)
//     })

// Promise.all([test1(2, 2), test3(2, 2)]).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

// // callbacks
// // promises
// // async and await

// // stop and wait until something happens and exectue
// function test1(a, b) {
//     return new Promise((resolve, reject) => {
//         if ((a + b) % 2 == 0) {
//             resolve("test1  passed")
//         } else {
//             reject("test1 not passed")
//         }
//     })
// }
// async function xyz() {
//     let response1 = await test1(2, 3);
//     console.log(response1);
// }

// xyz();
