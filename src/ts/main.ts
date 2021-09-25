import React, { HTMLAttributes } from 'react';
import { HTMLProps } from 'react';
import ReactDOM from 'react-dom';

function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    if  (toggle == null || navigation == null || main == null){
        return
    }
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}


export default toggleMenu;