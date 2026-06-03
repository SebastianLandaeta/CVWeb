/* =====================
   THEME
===================== */
const themeButton = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark');
  themeButton.textContent = '🌙';
} else {
  document.documentElement.classList.add('dark');
  themeButton.textContent = '☀️';
}

themeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeButton.textContent = isDark ? '☀️' : '🌙';
});

/* =====================
   LANGUAGE
===================== */
const translations = {
  en: {
    role: 'Software Engineer',
    contactLink: 'Contact',
    aboutTitle: 'About Me',
    aboutText:
      'Recent graduate software developer with experience in various technologies. Interested in web development, with a preference for frontend development. Quick learner and strong critical thinking skills.',
    educationTitle: 'Education',
    degreeText: 'Degree obtained: Software Engineer.',
    subjectsText: 'Featured subjects: Web Development and Databases (SQL and NoSQL).',
    thesisText: 'Final project: Intelligent Agent for the Development of Cognitive Skills in Preschool Children.',
    experienceTitle: 'Experience',
    experienceRole: 'Frontend Developer Intern',
    experience1: 'Transformed the OpenSIPCA frontend project from a monolithic Angular project into a microfrontend architecture.',
    experience2: 'Developed a code generator to optimize the creation of operations within OpenSIPCA.',
    experience3: 'Refactored the first version of an Adabas Natural to TypeScript converter.',
    skillsTitle: 'Skills',
    databasesTitle: 'Databases',
    languagesTitle: 'Languages',
    spanishText: 'Spanish (Native)',
    englishText: 'English (B2)',
    projectsTitle: 'Featured Projects',
    CUNEGtitle: 'CUNEG Certificate Generator System',
    nubiText: 'Intelligent Agent for the Development of Cognitive Skills in Preschool Children.'
  },
  es: {
    role: 'Ingeniero de Software',
    contactLink: 'Contacto',
    aboutTitle: 'Sobre Mí',
    aboutText: 'Ingeniero en Informática recién graduado con experiencia en diversas tecnologías. Interesado en el desarrollo web, especialmente en frontend. Aprendo rápidamente y poseo fuertes habilidades de pensamiento crítico.',
    educationTitle: 'Educación',
    degreeText: 'Grado obtenido: Ingeniero en Informática.',
    subjectsText: 'Materias destacadas: Desarrollo Web y Bases de Datos (SQL y NoSQL).',
    thesisText: 'Proyecto final: Agente Inteligente para el Desarrollo de Habilidades Cognitivas en Niños de Etapa Preescolar.',
    experienceTitle: 'Experiencia',
    experienceRole: 'Pasante de Desarrollo Frontend',
    experience1: 'Transformé el proyecto frontend de OpenSIPCA de un monolítico en Angular a una arquitectura de microfrontends.',
    experience2: 'Desarrollé un generador de código para optimizar la creación de operaciones dentro de OpenSIPCA.',
    experience3: 'Refactoricé la primera versión de un convertidor de Adabas Natural a TypeScript.',
    skillsTitle: 'Habilidades',
    databasesTitle: 'Bases de Datos',
    languagesTitle: 'Idiomas',
    spanishText: 'Español (Nativo)',
    englishText: 'Inglés (B2)',
    projectsTitle: 'Proyectos Destacados',
    CUNEGtitle: 'Sistema Generador de Certificados CUNEG',
    nubiText: 'Agente Inteligente para el Desarrollo de Habilidades Cognitivas en Niños de Etapa Preescolar.'
  }
};

const langButton = document.getElementById('langToggle');
let currentLang = localStorage.getItem('language') || 'en';

function applyLanguage(lang) {
  document.getElementById('role').textContent = translations[lang].role;
  document.getElementById('contactLink').textContent = translations[lang].contactLink;
  document.getElementById('aboutTitle').textContent = translations[lang].aboutTitle;
  document.getElementById('aboutText').textContent = translations[lang].aboutText;
  document.getElementById('educationTitle').textContent = translations[lang].educationTitle;
  document.getElementById('degreeText').textContent = translations[lang].degreeText;
  document.getElementById('subjectsText').textContent = translations[lang].subjectsText;
  document.getElementById('thesisText').textContent = translations[lang].thesisText;
  document.getElementById('experienceTitle').textContent = translations[lang].experienceTitle;
  document.getElementById('experienceRole').textContent = translations[lang].experienceRole;
  document.getElementById('experience1').textContent = translations[lang].experience1;
  document.getElementById('experience2').textContent = translations[lang].experience2;
  document.getElementById('experience3').textContent = translations[lang].experience3;
  document.getElementById('skillsTitle').textContent = translations[lang].skillsTitle;
  document.getElementById('databasesTitle').textContent = translations[lang].databasesTitle;
  document.getElementById('languagesTitle').textContent = translations[lang].languagesTitle;
  document.getElementById('spanishText').textContent = translations[lang].spanishText;
  document.getElementById('englishText').textContent = translations[lang].englishText;
  document.getElementById('projectsTitle').textContent = translations[lang].projectsTitle;
  document.getElementById('CUNEGtitle').textContent = translations[lang].CUNEGtitle;
  document.getElementById('nubiText').textContent = translations[lang].nubiText;
  langButton.textContent = lang === 'en' ? 'ES' : 'EN';
}

applyLanguage(currentLang);

langButton.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  localStorage.setItem('language', currentLang);
  applyLanguage(currentLang);
});
