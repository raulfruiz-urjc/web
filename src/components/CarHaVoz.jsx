export default function CarHaVoz() {
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
<div id="CarHaVoz" className="w-full px-[12%] py-10 scroll-mt-20">
  <h2 className="text-center text-5xl font-Ovo ">
    ¿Qué es CarHaVoz?
  </h2>

  <div className="flex flex-col lg:flex-row items-center gap-16">
    <div className="flex justify-center lg:justify-start">
      <img
        src="./assets/unisLogos.png"
        alt="Logos universidades"
        className="w-64 sm:w-80 rounded-3xl"
      />
    </div>

    <div className="max-w-3xl text-center lg:text-left">
      <p className="leading-relaxed text-lg font-Ovo">
        CarHaVoz es un proyecto nacional (Ref: PID2023-152984OB-I00)
        cuyo objetivo es analizar las alteraciones del habla en pacientes
        con síndrome de Williams y Smith-Magenis, utilizando herramientas
        biométricas avanzadas. Este enfoque tiene aplicaciones directas en
        la monitorización de pacientes con diferentes patologías.

        Es desarrollado en colaboración entre la
        <strong> Universidad Politécnica de Madrid</strong>,
        <strong> Universidad Rey Juan Carlos</strong>,
        <strong> Universidad Autónoma de Madrid</strong> y
        <strong> Universidad Complutense</strong>.
      </p>
    </div>

  </div>
</div>

   
    )
}