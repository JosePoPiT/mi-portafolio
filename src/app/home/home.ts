import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { AfterViewInit, Component, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  animations: [
    trigger('neonPulse', [
      transition('* => *', [
        animate('2s ease-in-out', keyframes([
          style({ textShadow: '0 0 4px #00ffdb', offset: 0 }),
          style({ textShadow: '0 0 16px #00ffdb', offset: 0.5 }),
          style({ textShadow: '0 0 4px #00ffdb', offset: 1 }),
        ]))
      ])
    ])
  ],
  styleUrl: './home.scss'
})
export class Home {
  lang: 'es' | 'en';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.lang = (localStorage.getItem('lang') as 'es' | 'en') || 'es';
    } else {
      this.lang = 'es';
    }
  }

  translations = {
    es: {
      name: 'José Vicente Garcia Mata',
      role: 'Desarrollador Front End',
      description: `Front-End Developer con formación en Ingeniería Mecánica y más de 3 años de experiencia desarrollando aplicaciones web escalables. Especializado en Angular (v1.x a v19), TypeScript, HTML5, CSS3/SCSS y APIs REST. Experiencia en metodologías ágiles (SCRUM), CI/CD (Azure DevOps), testing (Jasmine/Karma) y Docker. Enfoque en optimización de rendimiento, código limpio y UX responsive.`,
      projectsTitle: 'Mis Proyectos',
      hobbiesTitle: 'Mis Hobbies',
      hobbiesDesc: 'Escuchar música de todo tipo, jugar a juegos desafiantes, salir a lugares nuevos dentro y fuera de Santiago, caminar junto a mi pareja, ver partidos de fútbol y básquet, estudiar y aprender nuevas tecnologías, salir a caminar, jugar básquet.',
      contactTitle: 'Contacto',
      phone: 'Teléfono',
      email: 'Email',
      address: 'Dirección',
      repo: 'Repositorio',
      contactData: {
        phone: '+56995983842',
        email: 'josegarciama23@gmail.com',
        address: 'calle tres, 1302, La reina',
        repo: 'https://github.com/JosePoPiT/'
      }
    },
    en: {
      name: 'José Vicente Garcia Mata',
      role: 'Front End Developer',
      description: `Front-End Developer with a background in Mechanical Engineering and over 3 years of experience designing and developing scalable web applications. Specialized in Angular (v1.x to v19), TypeScript, HTML5, CSS3/SCSS, and REST APIs. Experienced in agile methodologies (SCRUM), CI/CD (Azure DevOps), testing (Jasmine/Karma), and Docker. Focused on performance optimization, clean code, and responsive UX.`,
      projectsTitle: 'My Projects',
      hobbiesTitle: 'My Hobbies',
      hobbiesDesc: 'Listening to all kinds of music, playing challenging games, exploring new places in and out of Santiago, walking with my partner, watching football and basketball games, studying and learning new technologies, going for walks, playing basketball.',
      contactTitle: 'Contact',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      repo: 'Repository',
      contactData: {
        phone: '+56995983842',
        email: 'josegarciama23@gmail.com',
        address: 'calle tres, 1302, La reina',
        repo: 'https://github.com/JosePoPiT/'
      }
    }
  };

  get t() {
    return this.translations[this.lang];
  }

  setLang(lang: 'es' | 'en') {
    this.lang = lang;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
    }
  }

  indicatorsUrl = 'https://josepopit.github.io/indicadoresApp/indicadores';
  lolUrl = 'https://josepopit.github.io/league-of-legends-page/campeones/portada';
  projects = [
    {
      name: {
        es: 'IndicadoresApp',
        en: 'IndicadoresApp'
      },
      url: 'https://indicadoresapp.vercel.app/',
      desc: {
        es: 'IndicadoresApp es una aplicación web desarrollada en Angular que permite consultar, visualizar y comparar los principales indicadores económicos de forma moderna, responsiva y amigable. Incluye gráficos interactivos, tablas dinámicas, modo claro/oscuro y una experiencia de usuario optimizada tanto para desktop como para dispositivos móviles.',
        en: 'IndicadoresApp is a web application developed in Angular that allows you to consult, visualize, and compare key economic indicators in a modern, responsive, and user-friendly way. Includes interactive charts, dynamic tables, light/dark mode, and an optimized user experience for both desktop and mobile devices.'
      }
    },
    {
      name: {
        es: 'LOL Champions Explorer',
        en: 'LOL Champions Explorer'
      },
      url: 'https://lol-champions-explorer.vercel.app/',
      desc: {
        es: 'Desarrollé una aplicación web completa utilizando Angular 12 que permite a los usuarios explorar y descubrir el universo de campeones de League of Legends. Integra la API oficial de Riot Games para información en tiempo real sobre todos los campeones del juego.',
        en: 'I developed a complete web application using Angular 12 that allows users to explore and discover the universe of League of Legends champions. Integrates the official Riot Games API to provide real-time information on all game champions.'
      }
    }
  ];
}
