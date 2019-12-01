import 'normalize.css';
import './scss/style.scss';

// let projectsItem = document.querySelectorAll('.projects__item');
// let currentProjectsItem = 0;
// let isEnabled = true;

// function changeProjectsItem(n) {
//     currentProjectsItem = (n + projectsItem.length) % projectsItem.length;
// }

// function hideItem(direction) {
//     if (document.body.clientWidth >= 1440) {
//         isEnabled = false;
//         projectsItem[currentProjectsItem].classList.add(direction);
//         projectsItem[currentProjectsItem].addEventListener('animationend', function() {
//             this.classList.remove('active', direction);
//             // projectsItem[changeProjectsItem(currentProjectsItem - 1)].classList.remove('next');
//         });
//     } else {
//         isEnabled = false;
//         projectsItem[currentProjectsItem].classList.add(direction);
//         projectsItem[currentProjectsItem].addEventListener('animationend', function() {
//             this.classList.remove('active', direction);
//         });
//     }
//     // isEnabled = false;
//     // projectsItem[currentProjectsItem].classList.add(direction);
//     // projectsItem[currentProjectsItem].addEventListener('animationend', function() {
//     //     this.classList.remove('active', direction);
//     // });
// }

// function showItem(direction) {
//     if (document.body.clientWidth >= 1440) {
//         // projectsItem[changeProjectsItem(currentProjectsItem + 1)].classList.add('next');
//         projectsItem[currentProjectsItem].classList.add('next', direction);
//         projectsItem[currentProjectsItem].addEventListener('animationend', function() {
//             this.classList.remove('next', direction);
//             // this.classList.remove(direction);
//             this.classList.add('active');
//             isEnabled = true;
//         });
//     } else {
//         projectsItem[currentProjectsItem].classList.add('next', direction);
//         projectsItem[currentProjectsItem].addEventListener('animationend', function() {
//             this.classList.remove('next', direction);
//             // this.classList.remove(direction);
//             this.classList.add('active');
//             isEnabled = true;
//         });
//     }
//     // projectsItem[currentProjectsItem].classList.add('next', direction);
//     // projectsItem[currentProjectsItem].addEventListener('animationend', function() {
//     //     this.classList.remove('next', direction);
//     //     // this.classList.remove(direction);
//     //     this.classList.add('active');
//     //     isEnabled = true;
//     // });
// }

// function previousItem(n) {
//     hideItem('to-right');
//     changeProjectsItem(n - 1);
//     showItem('from-left');
// }

// document.querySelector('.projects__prev').addEventListener('click', function() {
//     if (isEnabled) {
//         previousItem(currentProjectsItem);
//     }
// });

// function nextItem(n) {
//     hideItem('to-left');
//     changeProjectsItem(n + 1);
//     showItem('from-right');
// }

// document.querySelector('.projects__next').addEventListener('click', function() {
//     if (isEnabled) {
//         nextItem(currentProjectsItem);
//     }
// });