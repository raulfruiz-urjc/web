import React, { useEffect, useState } from 'react';
import './ImageCarousel.css';

export default function Colaboradores() {

    const images = [
        { id: 1, src: './assets/foto_AgustinAlvarez.png'},
        { id: 2, src: './assets/foto_AgustinAlvarez.png'},
        { id: 3, src: './assets/Irene.png'},
        { id: 4, src: './assets/elenax256.png'},
        { id: 5, src: './assets/danipfoto.jpg'},
        { id: 6, src: './assets/nikix256.png'},
        { id: 7, src: './assets/foto-daniel-gonzalez.jpg'},
        { id: 8, src: './assets/raulfoto.png'}
    ]

    const miembros = [
        {id: 1, nombre: 'Rafael Martínez Olalla', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 2, nombre: 'Agustín Álvarez Marquina', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 3, nombre: 'Irene Hidalgo Guía', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 4, nombre: 'Daniel Palacios Alonso', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 5, nombre: 'Elena Garayzábal Heinze', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 6, nombre: 'Nikola Hristov Kalamov', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 7, nombre: 'Daniel González García', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 8, nombre: 'Raúl Fernández Ruiz', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'}
    ]



    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'HTML, CSS, JavaScript React Js, Next Js',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'B.Tech in Computer Science',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built more than 5 projects',
        },
    ];
    return (
      <div id="colaboradores" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">Colaboradores</h2>
            <h4 className="text-center mb-2 text-lg font-Ovo">{miembros[currentImageIndex].nombre}</h4>

            <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-10">
                <div className="max-w-max mx-auto relative">
                    <button className="nav-button left" onClick={handlePreviousClick}>&lt;</button>
                    <img src={images[currentImageIndex].src} alt="" className="w-64 sm:w-80 rounded-3xl max-w-none max-h-80" />
                    <button className="nav-button right" onClick={handleNextClick}>&gt;</button>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">{miembros[currentImageIndex].txt}</p>
                </div>
            </div>
        </div>
    )
}