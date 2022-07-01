var POINTS = [
    {
        id: "B",
        title: 'Valle de la Luna',
        lat: -30.16380592375114,
        lng: -67.8469786709814,
        image: 'https://lh5.googleusercontent.com/p/AF1QipNctUMlT_l4wR07omzWh1hfEa_rv-CeWkFGIhiv=s435-k-no',
        description: 'Se ubica en el noroeste de Argentina, en la Provincia de San Juan. Sus paisajes desérticos similares a la superficie lunar tienen formaciones rocosas impresionantes en áreas como el “Valle Pintado” y la “Cancha de Bochas”.'
    },
    {
        id: "C",
        title: 'Ciudad de la Plata',
        lat: -34.920528,
        lng: -57.9881897,
        image: 'https://lh5.googleusercontent.com/p/AF1QipOU9F_9scnM1OGkek6E6zk662bdrvR75uWUq4dY=w203-h270-k-no',
        description: 'La Plata es la capital de la provincia argentina de Buenos Aires y se encuentra cerca de la ciudad de Buenos Aires. Es una ciudad planificada conocida por sus avenidas diagonales características.'
    },
    {
        id: "D",
        title: 'Humahuaca',
        lat: -23.2095856,
        lng: -65.3597078,
        image: 'https://www.quebradadehumahuaca.com/info-gral/imagenes/quebrada_de_humahuaca-purmamarca.jpg',
        description: 'Humahuaca es la ciudad cabecera del departamento homónimo, en la provincia de Jujuy, Argentina. Está ubicada a lo largo de la RN9 al norte de San Salvador de Jujuy, a 2.939 m s. n. m..'
    },
    {
        id: "E",
        title: 'Puerto Iguazu',
        lat: -25.6173982,
        lng: -54.5856858,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Puerto_Iguaz%C3%BA.jpg/370px-Puerto_Iguaz%C3%BA.jpg',
        description: 'Puerto Iguazú es una ciudad de la provincia de Misiones, en el extremo nordeste de la Argentina. Esta localidad se encuentra situada a 14 km de las cataratas del Iguazú, una de las Siete maravillas naturales del mundo.'
    },
    {
        id: "F",
        title: 'Palermo',
        lat: -34.5733928,
        lng: -58.4568937,
        image: 'https://www.gringoinbuenosaires.com/wp-content/uploads/plazaserrano2.jpg',
        description: 'Palermo es un área extensa que abarca enclaves pequeños, como los concurridos Palermo Soho y Palermo Hollywood, que albergan restaurantes eclécticos, coctelerías y tiendas de moda.'
    },
    {
        id: "G",
        title: 'Buenos Aires',
        lat: -35.7147708,
        lng: -59.0458489,
        image: 'https://www.travelprofessionalnews.com/wp-content/uploads/2020/01/Heres-Why-Summer-in-Buenos-Aires-is-a-Must.jpg',
        description: 'Según los textos de la Constitución Argentina y la Constitución provincial: Provincia de Buenos Aires, es una de las veintitrés provincias que hay en la República Argentina'
    },
    {
        id: "H",
        title: 'Tartagal',
        lat: -22.5216065,
        lng: -63.7985674,
        image: 'https://lh5.googleusercontent.com/p/AF1QipOoXYY3usFVea9malPIckjmDObc9-fhPQPEqK90=w408-h306-k-no',
        description: 'Tartagal es una ciudad del norte de Argentina, en la provincia de Salta. Está ubicada al noreste de la provincia, dentro del Departamento General José de San Martín, del cual es cabecera.'
    },
    {
        id: "I",
        title: 'Bariloche',
        lat: -41.1281345,
        lng: -71.4834377,
        image: 'https://lh5.googleusercontent.com/p/AF1QipPQeETlL9Uzq5vsaKcMZs4mazSXUyiyAbD8z6VL=w507-h240-k-no',
        description: 'San Carlos de Bariloche (comúnmente llamada Bariloche) es una ciudad en la región de la Patagonia argentina. Limita con Nahuel Huapi, un gran lago glacial rodeado de montañas de los Andes. Bariloche es conocida por su arquitectura al estilo alpino de Suiza y su chocolate, que se vende en tiendas de la calle Mitre, la avenida principal.'
    },
    {
        id: "J",
        title: 'Tunuyán',
        lat: -33.5823906,
        lng: -69.0445688,
        image: 'https://lh5.googleusercontent.com/p/AF1QipPnNF5YM19pPcy4L-gM75i0gVq_dSCAJTsfYhxw=w408-h544-k-no',
        description: 'Tunuyán es la ciudad cabecera del departamento homónimo, provincia de Mendoza, Argentina. La ciudad de Tunuyán se encuentra a 83 km al sur de la ciudad de Mendoza, y a una altura de 874 m s. n. m..'
    },
    {
        id: "K",
        title: 'Ushuaia',
        lat: -54.8019095,
        lng: -68.3098984,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcQpkiGfBvnnPHu8arVXGvKKmWO1l-XomwQ&usqp=CAU',
        description: 'Ushuaia es una ciudad turística de Argentina. Se ubica en el archipiélago de Tierra del Fuego, el extremo austral de Sudamérica, apodado el "Fin del Mundo". '
    },
    {
        id: "L",
        title: 'Córdoba Capital',
        lat: -31.4115,
        lng: -64.1811,
        image: 'https://www.lavoz.com.ar/resizer/8SBKGmC11P7Xp1z4QAgHFVU2A3I=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MYVHKZRCYNGLNCPPT76W7NJ5RY.jfif',
        description: 'Córdoba, la capital de la provincia argentina del mismo nombre, es conocida por su arquitectura colonial española. Alberga la Manzana Jesuítica, un complejo del siglo XVII con claustros activos, iglesias y el campus original de la Universidad Nacional de Córdoba, una de las universidades más antiguas de Sudamérica.'
    },
    {
        id: "M",
        title: 'Rosario',
        lat: -32.924,
        lng: -60.633,
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/e7/90/b4/monumento-a-la-bandera.jpg?w=600&h=400&s=1',
        description: 'Rosario es una importante ciudad portuaria de Argentina, a 300 km al norte por el río Paraná desde la capital, Buenos Aires. El Monumento Nacional a la Bandera es un enorme complejo junto al río con un obelisco que conmemora el histórico primer izamiento de la bandera nacional durante la Guerra de Independencia de Argentina en el siglo XIX.'
    },
    {
        id: "N",
        title: 'General Acha, La Pampa',
        lat: -37.3742707,
        lng: -64.6285894,
        image: 'https://areaurbana.com/wp-content/uploads/2018/01/alternativa-2.jpg',
        description: 'General Acha es una ciudad, cabecera del departamento argentino de Utracán, en la provincia de La Pampa. Su zona rural se extiende también sobre el departamento Lihuel Calel.​ '
    },
    {
        id: "O",
        title: 'Las Grutas',
        lat: -40.8112756,
        lng: -65.0955306,
        image: 'https://lh5.googleusercontent.com/p/AF1QipOlFvHpoqO4Qn2TOgx2rfjOo2cjxTUGM_ZGr_Or=w408-h544-k-no',
        description: 'Las Grutas es un concurrido balneario argentino del Golfo de San Matías, en el norte de la Patagonia. Sus largas playas están resguardadas por acantilados llenos de cuevas.'
    },
    {
        id: "P",
        title: 'Caracas',
        lat: 10.4683841,
        lng: -66.9604058,
        image: 'https://lh5.googleusercontent.com/p/AF1QipObp9jWCsmF38jjd8QaE-hgqPXpwOD3aUGrBFit=w408-h510-k-no',
        description: 'Caracas, la capital de Venezuela, es un centro comercial y cultural ubicado en un valle montañoso del norte. El líder independentista Simón Bolívar está enterrado en el Panteón Nacional de Venezuela, establecido en el siglo XIX en el casco antiguo de la ciudad.'
    },
    {
        id: "Q",
        title: 'Ciudad de Panamá',
        lat: 8.99,
        lng: -79.5,
        image: 'https://lh5.googleusercontent.com/p/AF1QipODDCk9n6bSx1Gus4UxgFC0qWQdl1oe6LOifMkf=w408-h510-k-no',
        description: 'Ciudad de Panamá, la capital de Panamá, es una ciudad moderna enmarcada por el Océano Pacífico y el Canal de Panamá hecho por el hombre.'
    },
    {
        id: "R",
        title: 'Ciudad de Nicaragua',
        lat: 12.1330407,
        lng: -86.2419056,
        image: 'https://lh5.googleusercontent.com/p/AF1QipMfWB7qWt93UNu8xy6DJx0GnN_n5-3EWK34TA3-=w532-h240-k-no',
        description: 'Managua, en la orilla sur del lago Managua, es la ciudad capital de Nicaragua. Su catedral, un cascarón desde el terremoto de 1972, está en la Plaza de la Revolución.'
    },
    {
        id: "S",
        title: 'Toronto',
        lat: 43.6532,
        lng: -79.3832,
        image: 'https://lh5.googleusercontent.com/p/AF1QipNFh-gOplTK-qYVrnIQdsgNzkTXlOEs2gC8b5xd=w408-h510-k-no',
        description: 'Toronto es una ciudad y capital de Canadá. Está situada en la provincia del Ontario, en el norte de la isla de Ontario, en el océano Atlántico.'
    },
    {
        id: "T",
        title: 'Angola',
        lat: -12.5,
        lng: 18.5,
        image: 'https://lh5.googleusercontent.com/p/AF1QipNpiyoRUJ14Fejjd5jeqSRxKPgl9mO5Tus5_v6Y=w408-h272-k-no',
        description: 'Angola es un país soberano de África que se encuentra en el continente africano. Su capital es Luanda.'
    },
    {
        id: "U",
        title: 'Djibouti',
        lat: 11.865,
        lng: 42.825,
        image: 'https://lh3.googleusercontent.com/proxy/HezbpEuDW0lmMUdDte3_V88AHQzyn3lV6dyexIlBPLxoFDZkG1Es5gRdSplV59gjoa0S3jqRnkhrfnkNYRrtc-MKqXekJmTbNGN1D0TkYEG_OvS3k4IJlyvyolCzpb5C0_hqFju9BYdCcF_Lu5cwQcurJexuV1Y=w408-h272-k-no',
        description: 'Djibouti es un país situado en el continente africano. Su capital es Djibouti.'
    },
    {
        id: "V",
        title: 'Macassar',
        lat: -5.1114895,
        lng: 119.4327314,
        image: 'https://lh5.googleusercontent.com/p/AF1QipPcwV-DpZyCUdJ8VMbc_x0GDvpYSgt3p-6bE_GF=w408-h510-k-no',
        description: 'Macasar es una ciudad y capital de la República de Costa de Marfil. Su catedral es la catedral de la ciudad.'
    },
    {
        id: "W",
        title: 'Isla de Pascua',
        lat: -27.113783,
        lng: -109.362365,
        image: 'https://lh5.googleusercontent.com/p/AF1QipP10v2mZkdjZPjIJM3w1NmY6ie67rv04HRvTyHb=w408-h272-k-no',
        description: 'Isla de Pascua es una isla de Chile. Su capital es la ciudad de Pascua.'
    }
];