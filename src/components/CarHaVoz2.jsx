export default function CarHaVoz2() {
    const tools = [
        { name: 'vscode', icon: './assets/vscode.png', },
        { name: 'firebase', icon: './assets/firebase.png', },
        { name: 'mongodb', icon: './assets/mongodb.png', },
        { name: 'figma', icon: './assets/figma.png', },
        { name: 'git', icon: './assets/git.png', },
    ];

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
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">¿Qué es CarHaVoz?</h2>

            <div className="flex w-full flex-col lg:flex-row items-center my-10">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/unisLogos.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">CarHaVoz es un proyecto nacional (Ref: PID2023-152984OB-I00)
        cuyo objetivo es analizar las alteraciones del habla en pacientes
        con síndrome de Williams y Smith-Magenis, utilizando herramientas
        biométricas avanzadas. Este enfoque tiene aplicaciones directas en
        la monitorización de pacientes con diferentes patologías.

        Es desarrollado en colaboración entre la
        <strong> Universidad Politécnica de Madrid</strong>,
        <strong> Universidad Rey Juan Carlos</strong>,
        <strong> Universidad Autónoma de Madrid</strong> y
        <strong> Universidad Complutense</strong>.</p>

                </div>
            </div>
        </div>
    )
}