import React, { useEffect, useState } from 'react';
import './ImageCarousel.css';

export default function Colaboradores() {

    const images = [
        { id: 1, src: './assets/Agustin.png'},
        { id: 2, src: './assets/Agustin.png'},
        { id: 3, src: './assets/Irene.png'},
        { id: 4, src: './assets/Elena.png'},
        { id: 5, src: './assets/Dani.png'},
        { id: 6, src: './assets/nikix256.png'},
        { id: 7, src: './assets/DaniG.jpg'},
        { id: 8, src: './assets/FotoRaul.png'}
    ]

    const miembros = [
        {id: 1, nombre: 'Rafael Martínez Olalla',scholar:'https://scholar.google.com/scholar?hl=es&as_sdt=0%2C5&q=rafael+martinez+olalla&btnG=', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 2, nombre: 'Agustín Álvarez Marquina',scholar:'https://scholar.google.com/scholar?hl=es&as_sdt=0%2C5&q=agustin+alvarez+marquina&btnG=&oq=Agustin+Alvarez+ma' , txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 3, nombre: 'Irene Hidalgo Guía',scholar: 'https://scholar.google.com/scholar?hl=es&as_sdt=0%2C5&q=irene+hidalgo+de+la+gu%C3%ADa&btnG=&oq=Irene+Hidal', txt: ' es profesora en el Departamento de Lengua española y Teoría de la literatura en la Universidad Complutense de Madrid. Es doctora en Lingüística Clínica y está especializada en Fonética y Fonología del español. Su investigación gira en torno a la aplicación clínica y forense de la Fonética y de la Fonología del español. Colabora en el Laboratorio de Procesado Neuromórfico de la Voz, en el Centro de Tecnología Biomédica de la Universidad Politécnica de Madrid, y es miembro del grupo de Lingüistas Forenses. También colabora con la Universidad Rey Juan Carlos en el desarrollo de aplicaciones de biometría del habla.'},
        {id: 4, nombre: 'Elena Garayzábal Heinze',scholar:'https://scholar.google.com/scholar?hl=es&as_sdt=0%2C5&q=Elena+Garayz%C3%A1bal+Heinze&btnG=' ,txt: ' es logopeda y profesora titular del departamento de Lingüística General de la Universidad Autónoma de Madrid. Está especializada en la aplicación de la Lingüística Clínica y su investigación se centra en el estudio de enfermedades genéticas del neurodesarrollo de baja frecuencia, entre ellas el síndrome de Smith-Magenis.'},
        {id: 5, nombre: 'Daniel Palacios Alonso',scholar:'https://scholar.google.com/scholar?hl=es&as_sdt=0%2C5&q=daniel+palacios+alonso&btnG=&oq=Daniel', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 6, nombre: 'Nikola Hristov Kalamov',scholar: 'https://scholar.google.com/scholar?hl=es&as_sdt=0,5&q=Nikola+Hristov+Kalamov', txt: ' es investigador predoctoral en el grupo SA-BIO de la Universidad Rey Juan Carlos. Es graduado en Diseño y Desarrollo de Videojuegos y máster en Ingeniería de Sistemas de Decisión. Su tesis, “Avances en Criptografía y sus Aplicaciones: Protección y Distribución de Datos Personales, Sanitarios, Hospitalarios y Biométricos”, se centra en el análisis seguro de datos biométricos y biomédicos.'},
        {id: 7, nombre: 'Daniel González García',scholar:'https://www.linkedin.com/in/daniel-gonz%C3%A1lez-garc%C3%ADa-460427323', txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus vitae lobortis feugiat. Aenean sem erat, vehicula sed nibh eget, tempor consequat risus. In sit amet ligula tortor. Integer at quam risus. In finibus purus id maximus fringilla. Nunc dignissim diam quis finibus venenatis. Integer finibus tellus eget commodo accumsan. Donec viverra hendrerit nisl.'},
        {id: 8, nombre: 'Raúl Fernández Ruiz',scholar:'https://scholar.google.com/scholar?hl=es&as_sdt=0%2C5&q=Raul+Fernandez+Ruiz&btnG=', txt: ' es profesor en el Departamento de Informática y Estadística de la Universidad Rey Juan Carlos. Graduado en Diseño y Desarrollo de Videojuegos y con un máster en Ingeniería de Sistemas de Decisión, realiza su tesis doctoral en la aplicación de modelos de aprendizaje automático a enfermedades de baja prevalencia.'}
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
                    <p className="mb-10 max-w-2xl font-Ovo text-justify"><a href={miembros[currentImageIndex].scholar} target="_blank" style={{color:"blue"}}>{miembros[currentImageIndex].nombre}</a>{miembros[currentImageIndex].txt}</p>
                </div>
            </div>
        </div>
    )
}