const mangas = [
    // Haikyuu!!
    {
        id: "haikyuu-1",
        nombre: "Haikyuu!! Vol.1",
        volumen: 1,
        categoria: "Haikyuu!!",
        descripcion: "Hinata se enfrenta a Kageyama en un partido escolar y decide unirse al equipo de Karasuno.",
        precio: "$6000",
        imagen: "./img/haikyu1.webp",
        autor: "Haruichi Furudate",
        fecha_estreno: 2012,
        paginas: 192,
        clasificacion: "13+"
    },
    {
        id: "haikyuu-2",
        nombre: "Haikyuu!! Vol.2",
        volumen: 2,
        categoria: "Haikyuu!!",
        descripcion: "Karasuno enfrenta a su primer gran rival en un torneo intercolegial.",
        precio: "$6500",
        imagen: "./img/haikyu2.webp",
        autor: "Haruichi Furudate",
        fecha_estreno: 2012,
        paginas: 192,
        clasificacion: "13+"
    },
    {
        id: "haikyuu-3",
        nombre: "Haikyuu!! Vol.3",
        volumen: 3,
        categoria: "Haikyuu!!",
        descripcion: "Hinata y Kageyama perfeccionan su ataque rápido mientras se preparan para nuevos partidos.",
        precio: "$7000",
        imagen: "./img/haikyu3.webp",
        autor: "Haruichi Furudate",
        fecha_estreno: 2012,
        paginas: 192,
        clasificacion: "13+"
    },
    {
        id: "haikyuu-4",
        nombre: "Haikyuu!! Vol.4",
        volumen: 4,
        categoria: "Haikyuu!!",
        descripcion: "El equipo de Karasuno se enfrenta a los legendarios Nekoma en una batalla de entrenamiento.",
        precio: "$7100",
        imagen: "./img/haikyu4.webp",
        autor: "Haruichi Furudate",
        fecha_estreno: 2012,
        paginas: 192,
        clasificacion: "13+"
    },

    // Solo Leveling
    {
        id: "sololeveling-1",
        nombre: "Solo Leveling Vol.1",
        volumen: 1,
        categoria: "Solo Leveling",
        descripcion: "Jin-Woo, el cazador más débil, despierta un misterioso poder que le permite subir de nivel.",
        precio: "$7500",
        imagen: "./img/sololeveling1.webp",
        autor: "Chugong",
        fecha_estreno: 2018,
        paginas: 256,
        clasificacion: "16+"
    },
    {
        id: "sololeveling-2",
        nombre: "Solo Leveling Vol.2",
        volumen: 2,
        categoria: "Solo Leveling",
        descripcion: "Jin-Woo explora su nuevo poder mientras enfrenta criaturas en calabozos mortales.",
        precio: "$7600",
        imagen: "./img/sololeveling2.webp",
        autor: "Chugong",
        fecha_estreno: 2018,
        paginas: 256,
        clasificacion: "16+"
    },
    {
        id: "sololeveling-3",
        nombre: "Solo Leveling Vol.3",
        volumen: 3,
        categoria: "Solo Leveling",
        descripcion: "El protagonista obtiene nuevas habilidades mientras enfrenta amenazas más fuertes.",
        precio: "$8000",
        imagen: "./img/sololeveling3.webp",
        autor: "Chugong",
        fecha_estreno: 2018,
        paginas: 256,
        clasificacion: "16+"
    },
    {
        id: "sololeveling-4",
        nombre: "Solo Leveling Vol.4",
        volumen: 4,
        categoria: "Solo Leveling",
        descripcion: "Jin-Woo comienza a dominar su habilidad y se vuelve un cazador temido.",
        precio: "$8200",
        imagen: "./img/sololeveling4.webp",
        autor: "Chugong",
        fecha_estreno: 2018,
        paginas: 256,
        clasificacion: "16+"
    },

    // Jibaku Shounen Hanako-kun
    {
        id: "jibaku-1",
        nombre: "Jibaku Shounen Hanako-kun Vol.1",
        volumen: 1,
        categoria: "Jibaku Shounen Hanako-kun",
        descripcion: "Nene Yashiro invoca al espíritu de Hanako-san y descubre un mundo paranormal.",
        precio: "$6300",
        imagen: "./img/hanakokun1.webp",
        autor: "AidaIro",
        fecha_estreno: 2014,
        paginas: 180,
        clasificacion: "12+"
    },
    {
        id: "jibaku-2",
        nombre: "Jibaku Shounen Hanako-kun Vol.2",
        volumen: 2,
        categoria: "Jibaku Shounen Hanako-kun",
        descripcion: "Nene explora los misterios de la academia mientras se acerca más a Hanako.",
        precio: "$6700",
        imagen: "./img/hanakokun2.webp",
        autor: "AidaIro",
        fecha_estreno: 2014,
        paginas: 180,
        clasificacion: "12+"
    },
    {
        id: "jibaku-3",
        nombre: "Jibaku Shounen Hanako-kun Vol.3",
        volumen: 3,
        categoria: "Jibaku Shounen Hanako-kun",
        descripcion: "Nuevas amenazas paranormales ponen en peligro a los estudiantes.",
        precio: "$7000",
        imagen: "./img/hanakokun3.webp",
        autor: "AidaIro",
        fecha_estreno: 2014,
        paginas: 180,
        clasificacion: "12+"
    },
    {
        id: "jibaku-4",
        nombre: "Jibaku Shounen Hanako-kun Vol.4",
        volumen: 4,
        categoria: "Jibaku Shounen Hanako-kun",
        descripcion: "Hanako revela más secretos de su pasado mientras protege a Nene.",
        precio: "$7100",
        imagen: "./img/hanakokun4.webp",
        autor: "AidaIro",
        fecha_estreno: 2014,
        paginas: 180,
        clasificacion: "12+"
    },

    // Boku no Hero Academia
    {
        id: "bokunohero-1",
        nombre: "Boku no Hero Academia Vol.1",
        volumen: 1,
        categoria: "Boku no Hero Academia",
        descripcion: "Izuku Midoriya, un chico sin poderes, recibe la oportunidad de convertirse en héroe.",
        precio: "$6800",
        imagen: "./img/bokunohero1.webp",
        autor: "Kohei Horikoshi",
        fecha_estreno: 2014,
        paginas: 200,
        clasificacion: "13+"
    },
    {
        id: "bokunohero-2",
        nombre: "Boku no Hero Academia Vol.2",
        volumen: 2,
        categoria: "Boku no Hero Academia",
        descripcion: "Midoriya entra a la U.A. y enfrenta su primer gran desafío.",
        precio: "$7000",
        imagen: "./img/bokunohero2.webp",
        autor: "Kohei Horikoshi",
        fecha_estreno: 2014,
        paginas: 200,
        clasificacion: "13+"
    },
    {
        id: "bokunohero-3",
        nombre: "Boku no Hero Academia Vol.3",
        volumen: 3,
        categoria: "Boku no Hero Academia",
        descripcion: "La Liga de Villanos ataca a la U.A., poniendo en peligro a los estudiantes.",
        precio: "$7200",
        imagen: "./img/bokunohero3.webp",
        autor: "Kohei Horikoshi",
        fecha_estreno: 2014,
        paginas: 200,
        clasificacion: "13+"
    },
    {
        id: "bokunohero-4",
        nombre: "Boku no Hero Academia Vo.4",
        volumen: 4,
        categoria: "Boku no Hero Academia",
        descripcion: "Midoriya comienza a entender los límites de su poder mientras All Might enfrenta un gran enemigo.",
        precio: "$7400",
        imagen: "./img/bokunohero4.webp",
        autor: "Kohei Horikoshi",
        fecha_estreno: 2014,
        paginas: 200,
        clasificacion: "13+"
    },
    // Demon Slayer (Kimetsu no Yaiba)
    {
        id: "demonslayer-1",
        nombre: "Demon Slayer: Kimetsu no Yaiba",
        volumen: 1,
        categoria: "Demon Slayer",
        descripcion: "Tanjiro Kamado descubre su destino como cazador de demonios tras la tragedia de su familia.",
        precio: "$6900",
        imagen: "./img/demonslayer1.webp",
        autor: "Koyoharu Gotouge",
        fecha_estreno: 2016,
        paginas: 192,
        clasificacion: "16+"
    },
    {
        id: "demonslayer-2",
        nombre: "Demon Slayer: Kimetsu no Yaiba",
        volumen: 2,
        categoria: "Demon Slayer",
        descripcion: "Tanjiro y Nezuko enfrentan nuevos demonios en su viaje para encontrar una cura.",
        precio: "$7100",
        imagen: "./img/demonslayer2.webp",
        autor: "Koyoharu Gotouge",
        fecha_estreno: 2016,
        paginas: 192,
        clasificacion: "16+"
    },
    {
        id: "demonslayer-3",
        nombre: "Demon Slayer: Kimetsu no Yaiba",
        volumen: 3,
        categoria: "Demon Slayer",
        descripcion: "Los hermanos Kamado se unen a otros cazadores en una peligrosa misión.",
        precio: "$7200",
        imagen: "./img/demonslayer3.webp",
        autor: "Koyoharu Gotouge",
        fecha_estreno: 2016,
        paginas: 192,
        clasificacion: "16+"
    },
    {
        id: "demonslayer-4",
        nombre: "Demon Slayer: Kimetsu no Yaiba",
        volumen: 4,
        categoria: "Demon Slayer",
        descripcion: "Tanjiro enfrenta su primera gran prueba contra las Doce Lunas Demoníacas.",
        precio: "$7400",
        imagen: "./img/demonslayer4.webp",
        autor: "Koyoharu Gotouge",
        fecha_estreno: 2016,
        paginas: 192,
        clasificacion: "16+"
    },

    // Jujutsu Kaisen
    {
        id: "jujutsukaisen-1",
        nombre: "Jujutsu Kaisen",
        volumen: 1,
        categoria: "Jujutsu Kaisen",
        descripcion: "Yuji Itadori traga un dedo maldito y se convierte en el anfitrión de Sukuna.",
        precio: "$7000",
        imagen: "./img/jujutsukaisen1.webp",
        autor: "Gege Akutami",
        fecha_estreno: 2018,
        paginas: 192,
        clasificacion: "16+"
    },
    {
        id: "jujutsukaisen-2",
        nombre: "Jujutsu Kaisen",
        volumen: 2,
        categoria: "Jujutsu Kaisen",
        descripcion: "Itadori y sus compañeros se enfrentan a nuevas amenazas en la academia de jujutsu.",
        precio: "$7200",
        imagen: "./img/jujutsukaisen2.webp",
        autor: "Gege Akutami",
        fecha_estreno: 2018,
        paginas: 192,
        clasificacion: "16+"
    },
    {
        id: "jujutsukaisen-3",
        nombre: "Jujutsu Kaisen",
        volumen: 3,
        categoria: "Jujutsu Kaisen",
        descripcion: "La batalla en la escuela técnica de Tokio se intensifica con la aparición de un peligroso enemigo.",
        precio: "$7400",
        imagen: "U./img/jujutsukaisen3.webp",
        autor: "Gege Akutami",
        fecha_estreno: 2018,
        paginas: 192,
        clasificacion: "16+"
    },
    {
        id: "jujutsukaisen-4",
        nombre: "Jujutsu Kaisen",
        volumen: 4,
        categoria: "Jujutsu Kaisen",
        descripcion: "Itadori y su equipo deben enfrentarse a una maldición de grado especial.",
        precio: "$7600",
        imagen: "./img/jujutsukaisen4.webp",
        autor: "Gege Akutami",
        fecha_estreno: 2018,
        paginas: 192,
        clasificacion: "16+"
    }

];


export default mangas;