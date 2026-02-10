import { useEffect, useState } from 'react';
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Inline from "yet-another-react-lightbox/plugins/inline";

export default function HablApp() {
        const [open, setOpen] = React.useState(false);
        const [index, setIndex] = React.useState(0);
        const toggleOpen = (state) => () => setOpen(state);

        const updateIndex =
            (when) =>
            ({ index: current }) => {
            if (when === open) {
                setIndex(current);
      }
    };
        const images = [
            { id: 1, src: './assets/Agustin.png'},
            { id: 2, src: './assets/Agustin.png'},
            { id: 3, src: './assets/DaniP.png'},
            { id: 4, src: './assets/Irene.png'},
            { id: 5, src: './assets/Elena.png'},
            { id: 6, src: './assets/Nikola.png'},
            { id: 7, src: './assets/DaniG.png'},
            { id: 8, src: './assets/Raul.png'}
        ]
    
    const services = [
        {
            name: 'Completamente segura',
            icon: './assets/web-icon.png',
            description: 'Todo el traspaso de información se encuentra cifrado. Toda la información es almacenada en servidores del proyecto y no de terceros',
            link: '#',
        },
        {
            name: 'Disponible en Adroid e IOS',
            icon: './assets/mobile-icon.png',
            description: 'La aplicación se encuentra disponible para dispositvos IOS e Android',
            link: '#',
        },
        {
            name: 'Compatible con dispostivos tablet',
            icon: './assets/ui-icon.png',
            description: 'La app puede es complatible con tablets para facilitar su uso',
            link: '#',
        }
    ];
    return (
        <div id="hablapp" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Nuestra aplicación para recogida de muestras a distancia</h4>
            <h2 className="text-center text-5xl font-Ovo">HablApp</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>

            <>
        <Lightbox
        index={index}
        slides={[
          { src: "/PruebaMovil.png",
            alt: "image 1",
            width: 900,
            height: 1500,
            srcSet: [
              { src: "./assets/logX1066X640.png", width: 640, height: 1066 }
            ]},
          { src: "./assets/prueba.jpg" },
          { src: "./assets/menuLogIn.png" },
           { src: "./assets/Agustin.png" },
        ]}
        plugins={[Inline]}
        on={{
          view: updateIndex(false),
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
    maxWidth: "900px",
    aspectRatio: "3 / 5",
    margin: "0 auto"
          },
        }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={[
         { src: "/PruebaMovil.png",
            alt: "image 1",
            width: 900,
            height: 1500,
            srcSet: [
              { src: "./assets/logX1066X640.png", width: 640, height: 1066 }
            ]},
          { src: "./assets/prueba.jpg" },
          { src: "./assets/menuLogIn.png" },
        ]}
        on={{ view: updateIndex(true) }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        inline={{
          style: {width: "100%", maxWidth: "900px", margin: "0 auto"
          },
        }}
      />
    </>

        </div>
    )
}