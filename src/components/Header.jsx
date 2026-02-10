export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="./assets/unisLogos.png" alt="" className="rounded-full w-64" />
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">CarHaVoz.</h1>
            <p className="max-w-2xl mx-auto font-Ovo">Proyecto nacional cuyo objetivo es analizar las alteraciones del habla en pacientes con síndrome de Williams y Smith-Magenis, utilizando herramientas biométricas avanzadas. Este enfoque tiene aplicaciones directas en la monitorización de pacientes con diferentes patologías. Es desarrollado en colaboración entre la <strong> Universidad Politécnica de Madrid</strong>, <strong> Universidad Rey Juan Carlos</strong>, <strong> Universidad Autónoma de Madrid</strong> y <strong> Universidad Complutense</strong>.
                
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href="./assets/dev-icon.png" download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}