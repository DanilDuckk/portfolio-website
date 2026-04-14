import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // Header
    header: {
      name: 'Danylo Kurbatov',
      aboutMe: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },

    // Main page
    main: {
      title: "Hello, I'm Danylo Kurbatov",
      description: 'I am currently a Bachelor student at Saxion University of Applied Sciences',
    },

    // Contact
    сontact: {
      title: 'Get In Touch!',
      description:
        'Whether you’re interested in collaborating or just want to </br> say hello, my inbox is always open. Feel free to reach out <br /> and I’ll get back to you as soon as possible!',
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

    // Skill cards
    skills: {
      technical: {
        title: 'Technical',
        angular: {
          title: 'Angular',
          description:
            'Developed during my work at Danavero in response to a high demand for rapid prototyping. I engineered MVPs using Angular as it was a technical desicion.',
        },
        vue: {
          title: 'Vue',
          description:
            'Served as the primary framework during my internship at Cybermeister. As the lead frontend developer for the project, I gained extensive experience with the Vue ecosystem, implementing advanced features such as internationalization (i18n) and deep integration with core internal components.',
        },
        typescript: {
          title: 'TypeScript',
          description:
            'The core language of my professional career, utilized extensively at Cybermeister, Danavero, and Topicus. I possess deep expertise in both frontend and backend TypeScript development, construction of decent REST APIs, and the architecture of complex, type-safe frontend applications.',
        },
        graphql: {
          title: 'GraphQL',
          description:
            'This was my main focus at Topicus, where I helped improve how the Preventus platform handles data. I designed and built GraphQL APIs to make data loading faster and more flexible, which helped the whole system run smoother and grow more easily.',
        },
        java: {
          title: 'Java',
          description:
            'The first language I studied during my first year at Saxion University. It gave me a strong foundation in programming, including a deep understanding of Object-Oriented Programming (OOP) and core software development principles.',
        },
        cloudflare: {
          title: 'Cloudflare',
          description:
            'The primary cloud provider at Cybermeister and my personal favorite. I have intermediate knowledge of their infrastructure and hands-on experience deploying applications to their platform.',
        },
        aws: {
          title: 'AWS',
          description:
            'I used AWS extensively during my second year at Saxion University. Although it was challenging to learn at first, it was my first cloud provider and I successfully built a strong understanding of how to use its services.',
        },
        azure: {
          title: 'Azure',
          description:
            'I have not used Azure much in my career yet, but I have a basic understanding of how it works and how its core services are structured.',
        },
        rust: {
          title: 'Rust',
          description:
            'Rust is my favorite low-level language. I taught myself how to use it because I enjoy its features, and I currently use it for several of my personal projects.',
        },
        c_sharp: {
          title: 'C#',
          description:
            'I used C# extensively to develop simple games. Since it is very similar to Java, I found it easy to learn. So far, I have primarily used this language for game development projects.',
        },
        c: {
          title: 'C',
          description:
            'I used this language extensively while developing a game for a hardware project during my studies. The project involved various hardware components, and I used Arduino for all the programming and logic.',
        },
        sql: {
          title: 'SQL',
          description:
            'I used SQL extensively for data analysis during my time at Danavero. I also gained a strong foundation in the language through various projects during my studies at Saxion.',
        },
      },
      non_technical: {
        title: 'Non-technical',
        figma: {
          title: 'Figma',
          description:
            'My primary tool for design and prototyping. I used Figma extensively during my internship at Cybermeister and further refined my skills while working on various personal projects.',
        },
        metabase: {
          title: 'Metabase',
          description:
            'I used Metabase frequently during my work at Danavero because it is a very convenient tool for visualizing database data. I have built dozens of dashboards to help meet specific client needs and business goals.',
        },
        teamwork: {
          title: 'Teamwork',
          description:
            'Teamwork is a skill I am constantly developing, as it goes hand-in-hand with being adaptable in changing environments. I work very well with others and have a proven track record of collaborating effectively with my teammates.',
        },
        adaptability: {
          title: 'Adaptability',
          description:
            'I have adapted a lot throughout my career. Working with different tech stacks and constantly learning new technologies has helped me become highly flexible. I enjoy picking up new tools quickly to meet the needs of any project.',
        },
        communication: {
          title: 'Communication',
          description:
            'Communication is a key skill that helps me share ideas and solutions clearly with clients. I have practiced many different communication styles and have developed my own effective approach, which I apply to all of my professional work.',
        },
        business_analysis: {
          title: 'Business Analysis',
          description:
            'During my time at Danavero, I worked with many different clients. I learned how to translate their specific business needs into clear, usable dashboards that accurately represent the data they care about most.',
        },
      },
    },

    states: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      expert: 'Expert',
    },

    // Experience cards
    experiences: {
      cybermeister: {
        job: 'Student Intern & Junior Developer',
        description:
          'This company was my first professional role and internship in the Netherlands. As a frontend developer with my team, I developed an MVP dashboard for a client while also maintaining and improving the codebase and infrastructure of existing products.',
      },
      topicus: {
        job: 'Student Intern',
        description:
          'Currently completing an internship focused on optimizing the technical infrastructure and API strategy for Preventus, a large-scale platform. My role involves architectural improvements and streamlining the backend transition to enhance system performance and scalability.',
      },
      danavero: {
        job: 'Junior Web Developer',
        description:
          'Working as a Junior Web Developer and Client Consultant since 2024. I am responsible for maintaining core systems, developing MVPs, and collaborating directly with business clients to engineer technical solutions tailored to their specific needs.',
      },
    },
  },

  uk: {
    // Хедер
    header: {
      name: 'Данило Курбатов',
      aboutMe: 'Про мене',
      skills: 'Навички',
      experience: 'Досвід',
      contact: 'Написати мені',
    },

    // Головна сторінка
    main: {
      title: 'Вітаю! Я Данило Курбатов',
      description: 'Зараз я навчаюся на бакалавраті в Університеті прикладних наук «Саксіон»',
    },

    // Контакт
    contact: {
      title: "Зв'яжіться зі мною!",
      description:
        'Якщо ви зацікавлені у співпраці або просто хочете привітатися,<br /> моя поштова скринька завжди відкрита. Не соромтеся звертатися,<br /> і я відповім вам якомога швидше!',
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

    skills: {
      technical: {
        title: 'Технічні навички',
        angular: {
          title: 'Angular',
          description:
            'Опанував під час роботи в Danavero через високий попит на швидке створення прототипів. Розробляв MVP на Angular, оскільки це було стратегічним технічним рішенням.',
        },
        vue: {
          title: 'Vue',
          description:
            'Використовував як основний фреймворк під час стажування в Cybermeister. Як провідний frontend-розробник проєкту, я здобув великий досвід роботи з екосистемою Vue, впроваджуючи такі функції, як інтернаціоналізація (i18n) та глибока інтеграція з внутрішніми компонентами.',
        },
        typescript: {
          title: 'TypeScript',
          description:
            'Основна мова моєї професійної кар’єри, яку я активно використовував у Cybermeister, Danavero та Topicus. Маю глибокі знання як у frontend, так і у backend розробці на TypeScript, включаючи створення якісних REST API та архітектуру складних, типізованих frontend-додатків.',
        },
        graphql: {
          title: 'GraphQL',
          description:
            'Це було моїм основним фокусом у Topicus, де я допомагав оптимізувати роботу з даними на платформі Preventus. Я проєктував та створював GraphQL API, щоб зробити завантаження даних швидшим та гнучкішим, що допомогло системі працювати стабільніше та легше масштабуватися.',
        },
        java: {
          title: 'Java',
          description:
            'Перша мова, яку я вивчав на першому курсі Університету Saxion. Вона дала мені міцний фундамент у програмуванні, зокрема глибоке розуміння об’єктно-орієнтованого програмування (ООП) та основних принципів розробки програмного забезпечення.',
        },
        cloudflare: {
          title: 'Cloudflare',
          description:
            'Основний хмарний провайдер у Cybermeister та мій улюблений інструмент. Маю середній рівень знань їхньої інфраструктури та практичний досвід розгортання додатків на цій платформі.',
        },
        aws: {
          title: 'AWS',
          description:
            'Я активно використовував AWS під час другого курсу в Saxion. Хоча спочатку навчання було складним, це став мій перший хмарний провайдер, і я успішно опанував роботу з його сервісами.',
        },
        azure: {
          title: 'Azure',
          description:
            'Я ще не мав багато досвіду з Azure у своїй кар’єрі, але маю базове розуміння того, як він працює та як влаштовані його основні сервіси.',
        },
        rust: {
          title: 'Rust',
          description:
            'Rust — моя улюблена низькорівнева мова. Я вивчив її самостійно, оскільки мені подобаються її можливості, і зараз використовую її у кількох особистих проєктах.',
        },
        c_sharp: {
          title: 'C#',
          description:
            'Я багато використовував C# для розробки простих ігор. Оскільки ця мова дуже схожа на Java, мені було легко її вивчити. Наразі я використовував її переважно для ігрових проєктів.',
        },
        c: {
          title: 'C',
          description:
            'Використовував цю мову під час розробки гри для апаратного проєкту в університеті. Проєкт включав багато технічних компонентів, а для програмування та логіки використовувався Arduino.',
        },
        sql: {
          title: 'SQL',
          description:
            'Я активно застосовував SQL для аналізу даних під час роботи в Danavero, а також здобув солідну базу знань під час навчання в Saxion.',
        },
      },
      non_technical: {
        title: 'Нетехнічні навички',
        figma: {
          title: 'Figma',
          description:
            'Мій основний інструмент для дизайну та прототипування. Я багато працював у Figma під час стажування в Cybermeister і продовжував вдосконалювати навички у власних проєктах.',
        },
        metabase: {
          title: 'Metabase',
          description:
            'Часто використовував Metabase в Danavero, оскільки це дуже зручний інструмент для візуалізації даних із баз даних. Я створив десятки дашбордів для потреб клієнтів та бізнес-завдань.',
        },
        teamwork: {
          title: 'Командна робота',
          description:
            'Командна робота — це навичка, яку я постійно вдосконалюю, адже вона нерозривно пов’язана з умінням адаптуватися до змін. Я легко знаходжу спільну мову з людьми та маю успішний досвід ефективної співпраці в команді.',
        },
        adaptability: {
          title: 'Адаптивність',
          description:
            'Протягом кар’єри мені часто доводилося адаптуватися до нового: різних стеків технологій та постійного навчання. Це зробило мене дуже гнучким фахівцем. Мені подобається швидко опановувати нові інструменти для вирішення завдань проєкту.',
        },
        communication: {
          title: 'Комунікація',
          description:
            'Комунікація — моя ключова навичка, яка допомагає чітко доносити ідеї та рішення до клієнтів. Я випробував різні стилі спілкування і знайшов власний ефективний підхід, який застосовую у всій своїй професійній діяльності.',
        },
        business_analysis: {
          title: 'Бізнес-аналіз',
          description:
            'Під час роботи в Danavero я співпрацював з багатьма різними клієнтами. Я навчився трансформувати їхні бізнес-потреби у зрозумілі та зручні дашборди, які відображають саме ті дані, що є для них найважливішими.',
        },
      },
    },

    states: {
      beginner: 'Початківець',
      intermediate: 'Середній рівень',
      expert: 'Експерт',
    },

    experiences: {
      cybermeister: {
        job: 'Стажер-розробник та Junior Developer',
        description:
          'Ця компанія стала моїм першим місцем роботи та стажування в Нідерландах. У ролі frontend-розробника я разом із командою створив MVP-дашборд для клієнта, а також займався підтримкою та покращенням коду й інфраструктури існуючих продуктів.',
      },
      topicus: {
        job: 'Стажер-розробник',
        description:
          'Наразі проходжу стажування, зосереджене на оптимізації технічної інфраструктури та стратегії API для масштабної платформи Preventus. Моя роль включає покращення архітектури та оптимізацію переходу на новий backend для підвищення продуктивності та масштабованості системи.',
      },
      danavero: {
        job: 'Junior Web Developer',
        description:
          'Працюю на позиції Junior Web Developer та консультанта для клієнтів з 2024 року. Відповідаю за підтримку основних систем, розробку MVP та пряму співпрацю з бізнес-клієнтами для створення технічних рішень під їхні конкретні запити.',
      },
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
