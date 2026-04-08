import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // Main page
    main: {
      title: "Hello, I'm Danylo Kurbatov",
      description: 'I am currently a Bachelor student at Saxion University of Applied Sciences',
    },

    // Header
    header: {
      title: 'Get In Touch!',
      description:
        'Whether you’re interested in collaborating or just want to </br> say hello, my inbox is always open. Feel free to reach out <br /> and I’ll get back to you as soon as possible!',
      contact: 'Contact me',
    },

    // About me
    aboutMe: {
      title: 'About Me',
      paragraph_1:
        'I’m a 19‑year‑old full‑stack developer with experience working across diverse clients and infrastructures. I’ve contributed to projects ranging from dynamic web applications to complex backend systems, giving me a solid understanding of both frontend and backend development.',
      paragraph_2:
        'My technical toolkit includes Vue, Angular, Svelte, TypeScript, JavaScript, Java, C#, Rust, REST APIs, GraphQL, SQL, and cloud platforms like AWS and Azure, allowing me to adapt confidently to different project requirements.',
      paragraph_3:
        'Beyond technical skills, I excel in creativity, problem‑solving, and collaboration. I enjoy brainstorming innovative solutions, designing interfaces that are both functional and visually appealing, and working closely with teams to turn ideas into reality. I’m motivated by learning new technologies, refining my craft, and staying up‑to‑date with modern development practices.',
      paragraph_4:
        'Ultimately, I’m passionate about building applications that make a meaningful impact for clients and users. I take pride in delivering high‑quality, efficient, and well‑structured code and thrive in environments that encourage learning, experimentation, and teamwork.',
    },

    // Тексти карток (додаємо сюди)
    skills: {

      technical: {
        title: 'Technical',
        angular: {
          title: 'Angular',
          description: 'Developed while working at Danavero and implementing MVP for a client.',
        },
        vue: {
          title: 'Vue',
          description: 'Main frontend framework for the dashboard project in Cybermeister.',
        },
        typescript: {
          title: 'TypeScript',
          description:
            'TypeScript adds static typing to JavaScript, improving code quality and maintainability.',
        },
        javascript: {
          title: 'JavaScript',
          description: 'JavaScript adds interactivity to web pages.',
        },
        svelte: {
          title: 'Svelte',
          description: 'Svelte is a radical new approach to building user interfaces.',
        },
        java: {
          title: 'Java',
          description:
            'Java is a general-purpose, class-based, object-oriented programming language.',
        },
         cloudflare: {
          title: 'Cloudflare',
          description:
            'Cloudflare is a content delivery network and security company.',
        },
          aws: {
            title: 'AWS',
            description:
              'Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.',
          },
          azure: {
            title: 'Azure',
            description:
              'Microsoft Azure is a cloud computing platform and service that offers a range of services, including virtual machines, storage, databases, and more.',
          }
      },
      non_technical: {
        title: 'Non-technical',
        figma: {
          title: 'Figma',
          description: 'Figma is a vector graphics editor and prototyping tool.',
        },
      },
    },
    states: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      expert: 'Expert',
    },
  },
  uk: {
    // Головна сторінка
    main: {
      title: 'Вітаю! Я Данило Курбатов',
      description: 'Зараз я навчаюся на бакалавраті в Університеті прикладних наук «Саксіон»',
    },

    // Хедер
    header: {
      title: "Зв'яжіться зі мною!",
      description:
        'Якщо ви зацікавлені у співпраці або просто хочете привітатися,<br /> моя поштова скринька завжди відкрита. Не соромтеся звертатися,<br /> і я відповім вам якомога швидше!',
      contact: 'Написати мені',
    },

    // Про мене
    aboutMe: {
      title: 'Про мене',
      paragraph_1:
        'Мені 19 років, я фул-стек розробник з досвідом роботи з різними клієнтами та інфраструктурами. Я брав участь у різних проектах - від динамічних веб-додатків до складних серверних систем, що дозволило мені добре розібратися як у фронтенд-, так і в бекенд-розробці. ',
      paragraph_2:
        'Мій технічний набір інструментів включає Vue, Angular, Svelte, TypeScript, JavaScript, Java, C#, Rust, REST API, GraphQL, SQL та хмарні платформи, такі як AWS і Azure, що дозволяє мені впевнено адаптуватися до різних вимог проектів.',
      paragraph_3:
        'Окрім технічних навичок, я вирізняюся креативністю, умінням вирішувати проблеми та здатністю до співпраці. Мені подобається генерувати інноваційні рішення, розробляти інтерфейси, що поєднують у собі функціональність і привабливий зовнішній вигляд, а також тісно співпрацювати з командами, щоб втілювати ідеї в життя. Мене надихає вивчення нових технологій, вдосконалення своїх професійних навичок та постійне ознайомлення з сучасними практиками розробки.',
      paragraph_4:
        'Зрештою, я з великим ентузіазмом займаюся розробкою додатків, які приносять реальну користь клієнтам і користувачам. Я пишаюся тим, що створюю високоякісний, ефективний і добре структурований код, і найкраще працюю в середовищах, що сприяють навчанню, експериментам та командній роботі!',
    },

    cards: {
      angular: {
        title: 'Angular',
        description: 'Розроблено під час роботи в Danavero при впровадженні MVP для клієнта.',
      },
      vue: {
        title: 'Vue',
        description: 'Основний фронтенд-фреймворк для проєкту дашборду в Cybermeister.',
      },
    },
    states: {
      intermediate: 'Середній',
      completed: 'Завершено',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages, // Тепер тут все разом
})

export default i18n
