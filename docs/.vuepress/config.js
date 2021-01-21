module.exports = {
    title: '',
    description: 'Manual ciudadano',
    themeConfig: {
        logo: '/img/logo_color.png',
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Manual', link: '/pages/' },
         
        ],
        displayAllHeaders: true,
        sidebar:{
            '/pages/' :[
                'crear-usuario',
                'agregar-nuevo',
                'edicion-tramite-servicio',
                'modificar-datos',
                'atender-tramite',
                'firma-digital',
            ]
        }
      }
  }