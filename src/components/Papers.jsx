export default function Papers() {
    const work = [
        {
            name: 'Voice Quality in Children With Smith-Magenis Syndrome',
            icon: './assets/paperRafa2.png',
            description: 'Web Design',
            link: 'https://www.sciencedirect.com/science/article/pii/S0892199724003199',
        },
        {
            name: 'Acoustic Analysis of Phonation in Children With Smith–Magenis Syndrome',
            icon: './assets/paperIrene.png',
            description: 'mobile app',
            link: 'https://www.researchgate.net/publication/352091953_Acoustic_Analysis_of_Phonation_in_Children_With_Smith-Magenis_Syndrome?_tp=eyJjb250ZXh0Ijp7InBhZ2UiOiJwcm9maWxlIiwicHJldmlvdXNQYWdlIjpudWxsLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19',
        },
        {
            name: 'Noninvasive Deep Learning Analysis for Smith–Magenis Syndrome',
            icon: './assets/paperEsther.png',
            description: 'Web Design',
            link: 'https://www.mdpi.com/2076-3417/14/21/9747',
        },
        {
            name: 'Identification of Smith–Magenis syndrome through an experimental evaluation of machine learning methods',
            icon: './assets/paperRaul.png',
            description: 'UI/UX Design',
            link: 'https://www.frontiersin.org/journals/computational-neuroscience/articles/10.3389/fncom.2024.1357607/full',
        }
    ];
    return (
        <div id="papers" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">Trabajos Relacionados</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Estos son algunos de nuestros trabajos relacionados con el proyecto CarHaVoz</p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((work) => (
                    <div key={work.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${work.icon})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <p className="text-sm font-semibold">{work.name}</p>
                            </div>
                            <a href={work.link} target="_blank" rel="noopener noreferrer" className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">    
                                <img src="./assets/send-icon.png" alt="" className="w-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {/*
            <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a> */}

        </div>
    )
}