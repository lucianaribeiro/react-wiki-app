import React, { Component } from "react";
import Dinamica04 from './dinamica04';
import Markdown from '../../structures/dynamicsComponents/markdown';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const classev10 = require("../../../assets/imgs/dinamica04/classev10.png");
const classev20 = require("../../../assets/imgs/dinamica04/classev20.png");
const classev30 = require("../../../assets/imgs/dinamica04/classev30.png");

class DocArquitetura extends Component {
  render() {
    return (
      <div>
        <Dinamica04 />
        <div className="container">
        <div className="designPhotos">
          <Markdown file="dinamica04/docArquitetura" />
          <div>
               <h5>Versão 1.0</h5>
               <ReactFancyBox thumbnail={classev10} image={classev10}/>
               <p>Autor: Grupo</p>
          </div>
          <div>
               <h5>Versão 2.0</h5>
               <ReactFancyBox thumbnail={classev20} image={classev20}/>
               <p>Autor: Grupo</p>
          </div>
          <div>
               <h5>Versão 3.0</h5>
               <ReactFancyBox thumbnail={classev30} image={classev30}/>
               <p>Autor: Isaque Alves</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
} export default DocArquitetura;
