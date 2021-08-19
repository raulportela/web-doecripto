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
function onChangeQtd() {
    var qtdM = document.getElementById("qtd-moedas")?.nodeValue;
    var valorMoeda = document.getElementById("vlr-uni")?.nodeValue; //substituir esse treco, pelo comando real da moeda, inves de pegar pelo input
    if(qtdM == null){
        return
    }
    if(valorMoeda == null){
        return
    }
    var totalBrl = Number.parseFloat(qtdM) * Number.parseFloat(valorMoeda);
    document.getElementById(total-brl)?.nodeValue = totalBrl.toFixed(2);

}

export default toggleMenu;