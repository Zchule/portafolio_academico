import { Practice, TimelineStep, ResourceItem } from '../types/portfolio';

// ==========================================
// INFORMACIÓN GENERAL DE LA ESTUDIANTE Y MÓDULO
// (Zulema: Puedes actualizar esta información si es necesario)
// ==========================================
export const STUDENT_INFO = {
  name: 'Zulema Vicente Paca',
  role: 'Estudiante / Diseñadora UX/UI',
  degree: 'Maestría en Educación Superior V4',
  university: 'Universidad Privada del Valle',
  faculty: 'Facultad de Postgrado',
  campus: 'Cochabamba',
  module: 'Innovación y Tecnología de la Educación Superior',
  teacher: 'Luis David Tobón López',
  deliveryDate: '5 de agosto de 2026',
  gradePercentage: '60 %',
  email: 'zulemavp94@gmail.com', // Correo personal asignado
};

// ==========================================
// SECCIÓN 2: SOBRE MÍ
// ==========================================
export const ABOUT_ME_DATA = {
  title: 'Sobre mí',
  bio: `Soy Zulema Vicente Paca, profesional del área de diseño UX/UI, tecnología e innovación. Me interesa crear soluciones digitales que faciliten procesos, mejoren experiencias y respondan a necesidades reales de las personas.

Durante este módulo exploré herramientas digitales, inteligencia artificial, recursos colaborativos, storytelling, automatización, seguridad digital y estrategias pedagógicas que puedo integrar tanto en mi práctica profesional como en contextos de educación superior.`,
  tags: [
    'Diseño UX/UI',
    'Tecnología',
    'Inteligencia artificial',
    'Innovación educativa',
    'Automatización',
    'Experiencia de usuario',
  ],
};

// ==========================================
// SECCIÓN 3: LAS 9 PRÁCTICAS DEL MÓDULO
// (Imágenes por defecto en SVG / Canvas para vista limpia inicial.
//  Zulema: reemplaza los 'src' de images por tus rutas locales como '/capturas/p1.png')
// ==========================================
export const PRACTICES: Practice[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'Fragmentos de lo que somos, redes de conexión',
    shortDescription:
      'Presentación personal y profesional para generar conexiones significativas entre los participantes.',
    fullDescription:
      'En esta primera práctica realizamos una presentación personal mediante una fotografía o imagen representativa de quiénes somos, nuestras experiencias y nuestras proyecciones personales y profesionales. La dinámica buscó generar redes de conexión entre los compañeros, identificando similitudes, intereses, conocimientos y formas de trabajo relacionadas con las temáticas del módulo.',
    myContribution:
      'Compartí una imagen relacionada con uno de mis proyectos de diseño: la construcción de la identidad visual y la propuesta digital de Sander’s Salón y Peluquería Unisex. Elegí esta evidencia porque representa mi formación y experiencia en diseño UX/UI, tecnología e innovación.',
    reflection:
      'Esta actividad me permitió reconocer que nuestras experiencias profesionales forman parte de nuestra identidad y pueden convertirse en puntos de conexión. También comprendí que el diseño de una experiencia digital y el diseño de una experiencia de aprendizaje requieren conocer las necesidades de las personas, organizar la información con claridad y facilitar la interacción.',
    tools: ['Microsoft Teams', 'Diseño UX/UI'],
    accentColor: '#8B5CF6', // Purple
    badgeBg: 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800',
    badgeText: 'text-purple-700 dark:text-purple-300',
    iconName: 'Users',
    images: [
      {
        id: 'p1-img1',
        /* NOTA PARA ZULEMA: Cambiar esta URL por tu imagen real de Sander's Salón */
        src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
        alt: 'Proyecto de identidad visual y propuesta digital de Sander’s Salón y Peluquería Unisex',
        caption: 'Evidencia compartida: Identidad visual y experiencia UX/UI para Sander’s Salón y Peluquería Unisex.',
      },
    ],
  },
  {
    id: 2,
    numberStr: '02',
    title: 'Lienzo co-creado',
    shortDescription:
      'Construcción visual y colaborativa sobre innovación y tecnología en educación superior.',
    fullDescription:
      'En esta práctica participamos de manera colaborativa en una pizarra digital bajo el tema ‘Innovación y tecnología para aplicar en la educación superior’. Cada integrante incorporó formas, colores, imágenes y palabras conectadas con el contenido central.',
    myContribution:
      'Mi participación representó la transición desde una educación tradicional hacia nuevas posibilidades de aprendizaje apoyadas por la inteligencia artificial, las aulas virtuales, la colaboración, la accesibilidad, los recursos digitales y el aprendizaje inmersivo.',
    highlights: [
      'Aprendizaje centrado en el estudiante',
      'Innovación continua',
      'Impacto social',
      'Formación para el futuro',
    ],
    reflection:
      'Esta actividad me permitió comprender que la innovación se construye mediante la participación, la escucha y la conexión de diferentes perspectivas. Las herramientas colaborativas pueden favorecer la creatividad y la construcción colectiva del conocimiento.',
    tools: ['Microsoft Whiteboard'],
    accentColor: '#3B82F6', // Blue
    badgeBg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800',
    badgeText: 'text-blue-700 dark:text-blue-300',
    iconName: 'Layout',
    images: [
      {
        id: 'p2-img1',
        /* NOTA PARA ZULEMA: Reemplazar por la captura completa del lienzo de Microsoft Whiteboard */
        src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
        alt: 'Captura completa del lienzo co-creado en Microsoft Whiteboard',
        caption: 'Captura del lienzo colaborativo: De la educación tradicional al aprendizaje inmersivo e IA.',
      },
    ],
  },
  {
    id: 3,
    numberStr: '03',
    title: 'En el meme nos vemos',
    shortDescription:
      'Uso del meme como recurso visual para comunicar ideas y generar reflexión.',
    fullDescription:
      'Cada participante diseñó un meme relacionado con una idea, creencia o situación de su ámbito profesional y académico. El objetivo fue utilizar el humor y la creatividad para expresar una postura y explicar su aplicación estratégica.',
    myContribution:
      'Elaboré un meme que contrasta las expresiones ‘¡Ponle más tecnología!’ y ‘Mejor ponle más sentido pedagógico’. Con esta idea busqué mostrar que innovar en educación no significa añadir herramientas digitales sin criterio, sino pensar cómo, para qué y en qué momento utilizarlas.',
    reflection:
      'Los memes pueden convertirse en recursos educativos cuando se utilizan con una intención clara. La tecnología por sí sola no transforma la educación; debe responder a objetivos pedagógicos y necesidades concretas.',
    tools: ['Canva'],
    accentColor: '#10B981', // Emerald/Green
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    iconName: 'Smile',
    images: [
      {
        id: 'p3-img1',
        /* NOTA PARA ZULEMA: Reemplazar por la imagen real del meme y su adhesivo explicativo */
        src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
        alt: 'Meme pedagógico: ¡Ponle más tecnología! vs Mejor ponle más sentido pedagógico',
        caption: 'Meme elaborado en Canva con su correspondiente nota adhesiva de postura y reflexión pedagógica.',
      },
    ],
  },
  {
    id: 4,
    numberStr: '04',
    title: 'Co-diagnóstico',
    shortDescription:
      'Análisis colaborativo de conocimientos, experiencias y expectativas tecnológicas.',
    fullDescription:
      'Participamos en un tablero colaborativo para realizar un co-diagnóstico sobre el uso de la innovación y la tecnología en educación superior.',
    myContribution:
      'Respondí preguntas relacionadas con la aplicación de la innovación en clases interactivas, las herramientas que utilizo, el uso de Stitch para crear interfaces y mi interés por profundizar en NotebookLM y Perplexity.',
    reflection:
      'Esta práctica me permitió reconocer que no basta con conocer muchas plataformas. Es importante comprender su finalidad, profundizar en su uso y relacionarlas con necesidades reales.',
    tools: ['Canva'],
    accentColor: '#F59E0B', // Amber
    badgeBg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
    badgeText: 'text-amber-700 dark:text-amber-300',
    iconName: 'Search',
    images: [
      {
        id: 'p4-img1',
        /* NOTA PARA ZULEMA: Reemplazar con la captura 1 del co-diagnóstico */
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pregunta 1: Aplicación de innovación y tecnología en educación superior',
        caption: 'Imagen 1: Respuesta sobre la aplicación de innovación en clases interactivas.',
      },
      {
        id: 'p4-img2',
        /* NOTA PARA ZULEMA: Reemplazar con la captura 2 del co-diagnóstico */
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pregunta 2: Herramientas tecnológicas que más utilizo',
        caption: 'Imagen 2: Herramientas más utilizadas (ChatGPT, NotebookLM, Stitch, Figma, etc.).',
      },
      {
        id: 'p4-img3',
        /* NOTA PARA ZULEMA: Reemplazar con la captura 3 del co-diagnóstico */
        src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pregunta 3: Descripción del uso de Stitch',
        caption: 'Imagen 3: Explicación del uso de Stitch para prototipado rápido de interfaces.',
      },
      {
        id: 'p4-img4',
        /* NOTA PARA ZULEMA: Reemplazar con la captura 4 del co-diagnóstico */
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pregunta 4: Herramientas que me gustaría aprender',
        caption: 'Imagen 4: Interés de aprendizaje en NotebookLM y Perplexity para investigación.',
      },
    ],
  },
  {
    id: 5,
    numberStr: '05',
    title: 'Historias que inspiran',
    shortDescription:
      'Relatos y recursos digitales que muestran el componente humano de la innovación.',
    fullDescription:
      'La actividad consistió en compartir experiencias vinculadas con el componente humano, creativo, innovador y tecnológico. El equipo desarrolló una historia común utilizando presentaciones, imágenes, videos, documentos y podcast.',
    team: {
      groupName: 'Innovamentes (Grupo 1)',
      members: ['Katherine Carballo', 'Zulema Vicente', 'Erika Lara', 'Emanuel Fuentes'],
    },
    chosenStory:
      'El factor humano dentro de los procesos de innovación. La tecnología puede facilitar procesos, pero son las decisiones, experiencias, empatía y propósito de las personas los que dan sentido a la innovación.',
    myContribution:
      'Colaboré en la construcción de la narrativa central, el diseño visual de la presentación en Canva y la adaptación del mensaje al formato audiovisual y podcast del grupo Innovamentes.',
    reflection:
      'Esta actividad fortaleció mis habilidades para organizar información, trabajar en equipo y adaptar un mismo mensaje a diferentes formatos. La principal enseñanza fue que la tecnología puede enriquecer una historia, pero el componente humano genera conexión e impacto.',
    tools: ['NotebookLM', 'Canva', 'Google Drive', 'Podcast', 'Video'],
    accentColor: '#EC4899', // Pink
    badgeBg: 'bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800',
    badgeText: 'text-pink-700 dark:text-pink-300',
    iconName: 'HeartHandshake',
    links: [
      {
        label: 'Carpeta del equipo Innovamentes (Google Drive)',
        url: 'https://drive.google.com/drive/folders/1f4je30QueBCC0av8amg3I0UsjiPtZbT8?usp=sharing',
        type: 'drive',
      },
      {
        label: 'Ver presentación en Google Slides',
        url: 'https://docs.google.com/presentation/d/1QrWvv2i2ATFzVqaU8K9onYHI98EJ8V7z/edit?usp=sharing&ouid=103275696795766931412&rtpof=true&sd=true',
        type: 'presentation',
      },
      {
        label: 'Ver imagen elaborada en Canva',
        url: 'https://canva.link/cakens7j5qakf6w',
        type: 'canva',
      },
      {
        label: 'Ver video "Humano en la innovación"',
        url: 'https://drive.google.com/file/d/1haOIwFO_CynFYLyZTFoR-ilGNs9x6CPn/view?usp=drive_link',
        type: 'video',
      },
      {
        label: 'Escuchar podcast "La tecnología necesita personas y propósito"',
        url: 'https://drive.google.com/file/d/1CUVLOLLEgdHnMbfHziyOmibXhe2r8eSz/view?usp=drive_link',
        type: 'podcast',
      },
      {
        label: 'Leer documento del grupo Innovamentes',
        url: 'https://docs.google.com/document/d/1Mh13vINX9mxlbyllQY_cC9f_e8IuhkSAXGfhQ5CUWmU/edit?usp=drive_link',
        type: 'document',
      },
    ],
    images: [
      {
        id: 'p5-img1',
        /* NOTA PARA ZULEMA: Reemplazar por la captura de los recursos de Innovamentes */
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Captura de recursos desarrollados por el equipo Innovamentes',
        caption: 'Recursos digitales del grupo Innovamentes: presentación, video, podcast e imágenes.',
      },
    ],
  },
  {
    id: 6,
    numberStr: '06',
    title: 'Reto de inteligencia colectiva con IA',
    shortDescription:
      'Uso de ChatGPT y Google Apps Script para automatizar encuestas en Google Forms.',
    fullDescription:
      'Cada estudiante debía compartir un prompt y recomendar una herramienta digital con una aplicación concreta en educación o en el ámbito profesional.',
    myContribution:
      'Utilicé ChatGPT para transformar una encuesta previamente diseñada en un código de Google Apps Script listo para ejecutar y crear automáticamente un formulario en Google Forms.',
    reflection:
      'Esta práctica me permitió comprender que la inteligencia artificial puede utilizarse más allá de la generación de textos. También confirmé que la calidad del resultado depende de la claridad del prompt y de la revisión de la persona que utiliza la herramienta.',
    tools: ['ChatGPT', 'Google Apps Script', 'Google Forms'],
    accentColor: '#14B8A6', // Teal
    badgeBg: 'bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800',
    badgeText: 'text-teal-700 dark:text-teal-300',
    iconName: 'Bot',
    images: [
      {
        id: 'p6-img1',
        /* NOTA PARA ZULEMA: Reemplazar por captura 1 (prompt y código Apps Script) */
        src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Imagen 1: Prompt utilizado en ChatGPT y código generado en Google Apps Script',
        caption: 'Imagen 1: Prompt detallado para generar código ejecutable de Google Forms.',
      },
      {
        id: 'p6-img2',
        /* NOTA PARA ZULEMA: Reemplazar por captura 2 (presentación ChatGPT) */
        src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        alt: 'Imagen 2: Presentación general de ChatGPT como recurso de IA',
        caption: 'Imagen 2: Recomendación de ChatGPT como recurso de automatización educativa.',
      },
      {
        id: 'p6-img3',
        /* NOTA PARA ZULEMA: Reemplazar por captura 3 (formulario generado en Google Forms) */
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        alt: 'Imagen 3: Aplicación específica y formulario automatizado en Google Forms',
        caption: 'Imagen 3: Formulario autogenerado mediante la ejecución del script.',
      },
    ],
  },
  {
    id: 7,
    numberStr: '07',
    title: 'Wikimediaciones',
    shortDescription:
      'Presentación Pecha Kucha sobre NotebookLM y su aplicación en una estrategia de aula invertida.',
    fullDescription:
      'Esta práctica se desarrolló en equipos y consistió en crear una presentación tipo Pecha Kucha sobre una herramienta digital y su aplicación en un contexto educativo específico.',
    team: {
      groupName: 'Grupo 2',
      members: [
        'Justina Laura Daza',
        'Noelia Ponce Arispe',
        'Dirce Mendoza Pariente',
        'Aylin Miriam Camacho C.',
        'Zulema Vicente Paca',
      ],
    },
    chosenStory:
      'La propuesta fue construida mediante la historia de Valeria, una estudiante que recuerda un domingo por la noche que debe leer un documento de 25 páginas para la clase del lunes. NotebookLM le ayuda a organizar las fuentes, hacer preguntas, comprender las ideas principales y prepararse para participar en clase.',
    myContribution:
      'Aporté en el diseño de diapositivas en Google Slides/Canva, la integración del audio storytelling "25 páginas para mañana" y la estructuración del flujo Pecha Kucha.',
    reflection:
      'NotebookLM no reemplaza la lectura ni el esfuerzo del estudiante, pero puede ayudar a organizar la información, formular preguntas y preparar mejor la participación en clase. El storytelling permitió comunicar la propuesta de una manera cercana y significativa.',
    tools: ['NotebookLM', 'Google Slides', 'Canva', 'Suno', 'Video'],
    accentColor: '#6366F1', // Indigo
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    iconName: 'Presentation',
    links: [
      {
        label: 'Ver presentación Pecha Kucha (Google Slides)',
        url: 'https://docs.google.com/presentation/d/1R_Q6FYhyO7Xuzjo0Yw_jUDsDF6kDVYal/edit?usp=sharing&ouid=103275696795766931412&rtpof=true&sd=true',
        type: 'presentation',
      },
      {
        label: 'Ver video de la propuesta (Univalle SharePoint)',
        url: 'https://univalleedu.sharepoint.com/:v:/s/C-M-EDUCACINSUPERIORV1-EVALUACINENLAEDUCACINSUPERIOR-2026/IQDi8GraIR2_Qo2QY45CnNqUAeKVAnOsy1tmj-Amneyho40?e=qbcf3i',
        type: 'video',
      },
    ],
    images: [
      {
        id: 'p7-img1',
        /* NOTA PARA ZULEMA: Reemplazar por la captura de la publicación del Grupo 2 en Teams */
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
        alt: 'Captura de la publicación del Grupo 2 en Teams para la práctica Wikimediaciones',
        caption: 'Publicación en Teams con la presentación Pecha Kucha y recursos de NotebookLM.',
      },
    ],
  },
  {
    id: 8,
    numberStr: '08',
    title: 'Retroalimentación que genera conexiones',
    shortDescription:
      'Reconocer a una persona importante y observar el impacto de nuestras palabras.',
    fullDescription:
      'La actividad consistió en elegir a una persona importante y expresarle espontáneamente algo positivo y significativo.',
    myContribution:
      'Elegí a mi mejor amiga, Fer, y le envié un mensaje en el que le expresé cuánto admiro su fortaleza, su capacidad para salir adelante y todo lo que puede lograr cuando confía en ella misma.',
    reflection:
      'Esta experiencia me recordó que expresar lo que valoramos de una persona puede tener un efecto profundo. La retroalimentación también puede ser una forma de acompañar, fortalecer vínculos y reconocer el esfuerzo de los demás.',
    tools: ['WhatsApp', 'Microsoft Teams'],
    accentColor: '#EF4444', // Red / Crimson
    badgeBg: 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800',
    badgeText: 'text-rose-700 dark:text-rose-300',
    iconName: 'MessageCircleHeart',
    images: [
      {
        id: 'p8-img1',
        /* NOTA PARA ZULEMA: Reemplazar con la captura completa del chat de WhatsApp con Fer */
        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Imagen 1: Conversación completa de WhatsApp con Fer expresando reconocimiento sincero',
        caption: 'Imagen 1: Captura de la conversación de WhatsApp con mi mejor amiga Fer.',
      },
      {
        id: 'p8-img2',
        /* NOTA PARA ZULEMA: Reemplazar con la captura de la publicación en Teams */
        src: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80',
        alt: 'Imagen 2: Publicación de la reflexión en el equipo de Microsoft Teams',
        caption: 'Imagen 2: Reflexión en Teams sobre el impacto de la retroalimentación positiva.',
      },
    ],
  },
  {
    id: 9,
    numberStr: '09',
    title: 'Aprendizaje sorpresa',
    shortDescription:
      'Socialización de aprendizajes mediante tutoriales de ChatGPT y Bitwarden.',
    fullDescription:
      'Esta práctica transversal buscó que cada participante compartiera una evidencia representativa de su aprendizaje durante el módulo.',
    myContribution:
      'Compartí un tutorial sobre el uso de ChatGPT y Google Apps Script para crear automáticamente una encuesta en Google Forms. También presenté un tutorial sobre Bitwarden como herramienta para almacenar, organizar y proteger contraseñas.',
    reflection:
      'La automatización de formularios demuestra cómo la inteligencia artificial puede reducir tareas repetitivas. Bitwarden me permitió reflexionar sobre la importancia de la seguridad digital en los entornos académicos y profesionales.',
    tools: ['ChatGPT', 'Google Apps Script', 'Google Forms', 'Bitwarden'],
    accentColor: '#0EA5E9', // Sky / Cyan
    badgeBg: 'bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800',
    badgeText: 'text-sky-700 dark:text-sky-300',
    iconName: 'Gift',
    images: [
      {
        id: 'p9-img1',
        /* NOTA PARA ZULEMA: Reemplazar con captura del tutorial de Google Forms */
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
        alt: 'Imagen 1: Publicación del tutorial de automatización de encuestas en Google Forms',
        caption: 'Imagen 1: Tutorial de ChatGPT y Apps Script para encuestas automáticas.',
      },
      {
        id: 'p9-img2',
        /* NOTA PARA ZULEMA: Reemplazar con captura del tutorial de Bitwarden */
        src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
        alt: 'Imagen 2: Publicación del tutorial de Bitwarden para ciberseguridad y contraseñas',
        caption: 'Imagen 2: Tutorial de ciberseguridad y gestión de contraseñas con Bitwarden.',
      },
    ],
  },
];

// ==========================================
// SECCIÓN 4: LÍNEA DE TIEMPO INTERACTIVA
// ==========================================
export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 1,
    stageNumber: 1,
    title: 'Reconocer mi identidad',
    quote: 'Nuestras experiencias profesionales forman parte de nuestra identidad y crean redes auténticas.',
    practiceId: 1,
    practiceTitle: 'Fragmentos de lo que somos, redes de conexión',
    iconName: 'UserCheck',
  },
  {
    id: 2,
    stageNumber: 2,
    title: 'Construir con otros',
    quote: 'La innovación educativa no se hace de manera aislada, sino mediante la cocreación activa.',
    practiceId: 2,
    practiceTitle: 'Lienzo co-creado',
    iconName: 'Users',
  },
  {
    id: 3,
    stageNumber: 3,
    title: 'Comunicar creativamente',
    quote: 'El humor y el diseño visual pueden transmitir reflexiones pedagógicas profundas.',
    practiceId: 3,
    practiceTitle: 'En el meme nos vemos',
    iconName: 'MessageSquare',
  },
  {
    id: 4,
    stageNumber: 4,
    title: 'Diagnosticar mis habilidades',
    quote: 'Identificar lo que dominamos y lo que necesitamos aprender es la clave del crecimiento.',
    practiceId: 4,
    practiceTitle: 'Co-diagnóstico',
    iconName: 'Compass',
  },
  {
    id: 5,
    stageNumber: 5,
    title: 'Humanizar la innovación',
    quote: 'La tecnología facilita procesos, pero son las personas quienes aportan propósito y empatía.',
    practiceId: 5,
    practiceTitle: 'Historias que inspiran',
    iconName: 'Heart',
  },
  {
    id: 6,
    stageNumber: 6,
    title: 'Experimentar con IA',
    quote: 'Trascender la generación de texto utilizando IA para automatizar flujos reales en Google Script.',
    practiceId: 6,
    practiceTitle: 'Reto de inteligencia colectiva con IA',
    iconName: 'Sparkles',
  },
  {
    id: 7,
    stageNumber: 7,
    title: 'Transformar el aprendizaje',
    quote: 'NotebookLM y el storytelling hacen comprensibles lecturas complejas en aula invertida.',
    practiceId: 7,
    practiceTitle: 'Wikimediaciones',
    iconName: 'BookOpen',
  },
  {
    id: 8,
    stageNumber: 8,
    title: 'Generar conexiones',
    quote: 'Expresar espontáneamente el valor de otra persona fortalece vínculos y renueva fuerzas.',
    practiceId: 8,
    practiceTitle: 'Retroalimentación que genera conexiones',
    iconName: 'Send',
  },
  {
    id: 9,
    stageNumber: 9,
    title: 'Compartir lo aprendido',
    quote: 'El conocimiento adquiere su verdadero sentido cuando se socializa y protege en comunidad.',
    practiceId: 9,
    practiceTitle: 'Aprendizaje sorpresa',
    iconName: 'Share2',
  },
];

// ==========================================
// SECCIÓN 5: REFLEXIÓN FINAL
// ==========================================
export const FINAL_REFLECTION_DATA = {
  title: 'Lo que me llevo de este recorrido',
  paragraphs: [
    `A lo largo del módulo comprendí que innovar en educación no consiste únicamente en utilizar nuevas herramientas tecnológicas. La verdadera innovación surge cuando existe una necesidad concreta, una intención pedagógica clara y personas capaces de utilizar la tecnología con creatividad, criterio y propósito.`,
    `Las primeras prácticas me permitieron reconocer mi identidad profesional y conectarla con las experiencias de mis compañeros. El lienzo co-creado, el meme y el co-diagnóstico mostraron que el conocimiento puede construirse de manera colaborativa y que recursos visuales sencillos también pueden generar reflexión, diálogo y aprendizaje.`,
    `Las actividades grupales fortalecieron mi capacidad para escuchar, coordinar ideas y transformar diferentes aportes en productos comunes. En las prácticas Historias que inspiran y Wikimediaciones confirmé que el storytelling, las imágenes, el audio y el video pueden hacer que un contenido tecnológico sea más cercano y significativo.`,
    `Las prácticas relacionadas con inteligencia artificial me permitieron pasar de un uso general de estas herramientas a una aplicación concreta. Utilicé ChatGPT para generar código y automatizar formularios, y exploré NotebookLM para organizar fuentes y comprender lecturas.`,
    `En mi vida profesional, estos aprendizajes se relacionan con mi trabajo en diseño, tecnología y creación de soluciones digitales. El módulo me motivó a seguir integrando inteligencia artificial en mis procesos, no solamente para trabajar con mayor rapidez, sino para diseñar experiencias más claras, accesibles y centradas en las personas.`,
    `Me llevo la idea de que la tecnología tiene mayor valor cuando nos ayuda a comprender, crear, colaborar y acompañar mejor a otras personas.`,
  ],
  quotes: [
    '“La tecnología no transforma por sí sola; las personas le dan propósito.”',
    '“Innovar también significa escuchar, conectar y acompañar.”',
    '“La inteligencia artificial amplía posibilidades, pero requiere criterio humano.”',
  ],
};

// ==========================================
// SECCIÓN 6: AUTOVALORACIÓN
// ==========================================
export const SELF_EVALUATION_DATA = {
  qualitative: {
    title: 'Autovaloración cualitativa',
    content: `Considero que tuve una participación comprometida y constante durante el módulo. Cumplí con las prácticas propuestas, participé activamente en los trabajos individuales y grupales y procuré presentar productos claros, creativos y relacionados con mi experiencia profesional.

Uno de mis principales aportes fue aplicar mis conocimientos de diseño y tecnología en la elaboración de presentaciones, recursos visuales, videos, audios y propuestas de automatización.

Reconozco que todavía necesito profundizar en algunas plataformas orientadas a la investigación y organización de fuentes. Sin embargo, considero que el módulo me permitió experimentar con nuevos recursos y utilizarlos con una intención pedagógica.`,
  },
  quantitative: {
    title: 'Autovaloración cuantitativa',
    score: '78 / 80',
    maxScore: 80,
    currentScore: 78,
    percentage: 97.5,
    content: `Considero esta valoración porque cumplí con las prácticas solicitadas, participé activamente en los trabajos y elaboré diferentes recursos para enriquecer las propuestas. También reconozco que siempre existen aspectos por mejorar, especialmente la profundización en algunas herramientas y la capacidad de sintetizar ciertos contenidos.`,
  },
};

// ==========================================
// SECCIÓN 7: RECURSOS COMPARTIDOS (BIBLIOTECA)
// ==========================================
export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Carpeta General del Equipo Innovamentes',
    category: 'Documentos',
    description: 'Carpeta en Google Drive con todos los archivos, encuestas y documentos elaborados.',
    url: 'https://drive.google.com/drive/folders/1f4je30QueBCC0av8amg3I0UsjiPtZbT8?usp=sharing',
    iconName: 'Folder',
    tag: 'Google Drive',
  },
  {
    id: 'res-2',
    title: 'Presentación: Historias que Inspiran',
    category: 'Presentaciones',
    description: 'Diapositivas interactivas desarrolladas por el equipo Innovamentes sobre el factor humano.',
    url: 'https://docs.google.com/presentation/d/1QrWvv2i2ATFzVqaU8K9onYHI98EJ8V7z/edit?usp=sharing&ouid=103275696795766931412&rtpof=true&sd=true',
    iconName: 'FileText',
    tag: 'Google Slides',
  },
  {
    id: 'res-3',
    title: 'Recursos Gráficos Innovamentes en Canva',
    category: 'Presentaciones',
    description: 'Diseño visual y composición gráfica elaborada en Canva para la Práctica 5.',
    url: 'https://canva.link/cakens7j5qakf6w',
    iconName: 'Image',
    tag: 'Canva',
  },
  {
    id: 'res-4',
    title: 'Video: "Humano en la innovación"',
    category: 'Videos',
    description: 'Recurso audiovisual del grupo Innovamentes destacando la empatía y propósito en tecnología.',
    url: 'https://drive.google.com/file/d/1haOIwFO_CynFYLyZTFoR-ilGNs9x6CPn/view?usp=drive_link',
    iconName: 'Video',
    tag: 'MP4 / Drive',
  },
  {
    id: 'res-5',
    title: 'Podcast: "La tecnología necesita personas y propósito"',
    category: 'Podcast',
    description: 'Audio podcast producido por el equipo Innovamentes con reflexiones y experiencias.',
    url: 'https://drive.google.com/file/d/1CUVLOLLEgdHnMbfHziyOmibXhe2r8eSz/view?usp=drive_link',
    iconName: 'Headphones',
    tag: 'Audio MP3',
  },
  {
    id: 'res-6',
    title: 'Documento Completo Innovamentes',
    category: 'Documentos',
    description: 'Informe escrito con la conceptualización y desarrollo de la historia inspiradora.',
    url: 'https://docs.google.com/document/d/1Mh13vINX9mxlbyllQY_cC9f_e8IuhkSAXGfhQ5CUWmU/edit?usp=drive_link',
    iconName: 'FileText',
    tag: 'Google Docs',
  },
  {
    id: 'res-7',
    title: 'Presentación Pecha Kucha Wikimediaciones',
    category: 'Presentaciones',
    description: 'Propuesta de aula invertida con NotebookLM e historia de Valeria.',
    url: 'https://docs.google.com/presentation/d/1R_Q6FYhyO7Xuzjo0Yw_jUDsDF6kDVYal/edit?usp=sharing&ouid=103275696795766931412&rtpof=true&sd=true',
    iconName: 'Presentation',
    tag: 'Google Slides',
  },
  {
    id: 'res-8',
    title: 'Video Wikimediaciones Grupo 2',
    category: 'Videos',
    description: 'Grabación de la presentación Pecha Kucha publicada en Microsoft SharePoint.',
    url: 'https://univalleedu.sharepoint.com/:v:/s/C-M-EDUCACINSUPERIORV1-EVALUACINENLAEDUCACINSUPERIOR-2026/IQDi8GraIR2_Qo2QY45CnNqUAeKVAnOsy1tmj-Amneyho40?e=qbcf3i',
    iconName: 'Video',
    tag: 'SharePoint Video',
  },
  {
    id: 'res-9',
    title: 'Audio Storytelling: "25 páginas para mañana"',
    category: 'Podcast',
    description: 'Canción y narración generada en Suno para acompañar la historia de Valeria.',
    url: 'https://docs.google.com/presentation/d/1R_Q6FYhyO7Xuzjo0Yw_jUDsDF6kDVYal/edit?usp=sharing',
    iconName: 'Music',
    tag: 'Suno Audio',
  },
  {
    id: 'res-10',
    title: 'ChatGPT - Prompt & Apps Script',
    category: 'Herramientas',
    description: 'Herramienta de IA utilizada para automatizar formularios de Google Forms mediante código.',
    url: 'https://chatgpt.com',
    iconName: 'Bot',
    tag: 'Inteligencia Artificial',
  },
  {
    id: 'res-11',
    title: 'NotebookLM por Google',
    category: 'Herramientas',
    description: 'Asistente de IA para sintetizar documentos académicos y generar guías de estudio.',
    url: 'https://notebooklm.google.com',
    iconName: 'BookOpen',
    tag: 'IA para Investigación',
  },
  {
    id: 'res-12',
    title: 'Bitwarden Password Manager',
    category: 'Herramientas',
    description: 'Plataforma de ciberseguridad para cifrar y gestionar contraseñas académicas.',
    url: 'https://bitwarden.com',
    iconName: 'Shield',
    tag: 'Seguridad Digital',
  },
];
