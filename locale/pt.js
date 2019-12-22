export default {
  defaults: {
    close: "Fechar"
  },
  info: {
    name: "Arthur Barros Lapprand",
    job: "Desenvolvedor para a nuvem e desenvolvedor Android",
    github: "https://github.com/lapprand",
    linkedin: "https://www.linkedin.com/in/lapprand/",
    email: "mailto:lapprand@gmail.com"
  },
  education: {
    title: "Formação",
    degree: "Bacharelado em Ciência da Computação - UFPE",
    degreeDesc:
      "Concluído em Agosto, 2018, no Centro de Informática da Universidade Federal de Pernambuco.",
    internship:
      "O estágio do curso foi executado em um projeto de pesquisa conveniado entre o Centro de Informática (CIn-UFPE), a Universidade de Michigan (UMICH) e a Universidade de Illinois (ILLINOIS). O trabalho no projeto focou em estudar, testar e aplicar técnicas de engenharia reversa em firmwares e aplicações de dispositivos IoT, bem como explorar falhas de segurança no processo."
  },
  interests: {
    title: "Perfil e Interesses",
    p1:
      "Embora com perfil acadêmico atrelado à área de IoT e Engenharia Reversa, o foco atual é direcionado ao desenvolvimento fullstack e mobile. Gosto de trabalhar com tecnologias emergentes e frameworks JavaScript populares como Vue.js, Angular e React.",
    p2:
      "A nível de desenvolvimento mobile, tenho experiência em Android nas linguagens Java e Kotlin. Neste momento, estou encarregado do desenvolvimento de um app na área de saúde em um projeto freelance."
  },
  work: {
    title: "Projetos e Experiências",
    projects: [
      {
        type: "Experiência profissional",
        title: "<a href='drajulia.com.br'>Dra Julia / PequenasCausas</a>",
        desc:
          "Web App e site desenvolvidos em equipe de desenvolvimento ágil na <a href='https://beyondcloud.com.br'>Beyond Cloud</a>. Implementa a stack Vue.js + Vuetify + Node.js + Google Cloud Platform (Cloud Build, Cloud Run, Firestore, Cloud Functions, Cloud Storage, Container Registry). O projeto tem como objetivo permitir a criação de modelos jurídicos com perguntas personalizadas para que os usuários possam responder, gerando assim seu documento. O documento também é protocolado de forma automatizada e de baixo custo."
      },
      {
        type: "Experiência profissional",
        title: "GlicoCONNECT",
        desc:
          "Desenvolvido na linguagem de programação Kotlin com Android Studio e componentes do <a href='https://developer.android.com/jetpack'>Android Jetpack</a>, é um aplicativo de gerenciamento e visualização de medições de glicose sanguínea. O app também permite ler medições de um leitor de glicose bluetooth (BLE) específico do contratante, bem como segue design e API especificados por ele.",
        images: [
          "https://storage.googleapis.com/cv-project-images/device-2019-09-23-160909.png",
          "https://storage.googleapis.com/cv-project-images/device-2019-09-23-161010.png",
          "https://storage.googleapis.com/cv-project-images/device-2019-09-23-161111.png",
          "https://storage.googleapis.com/cv-project-images/device-2019-09-23-161153.png",
          "https://storage.googleapis.com/cv-project-images/device-2019-09-23-161223.png",
          "https://storage.googleapis.com/cv-project-images/device-2019-09-23-161256.png",
          "https://storage.googleapis.com/cv-project-images/device-2019-09-23-161357.png",
          "https://storage.googleapis.com/cv-project-images/device-2019-09-23-161442.png",
          "https://storage.googleapis.com/cv-project-images/device-2019-09-23-161456.png"
        ]
      },
      {
        type: "Pessoal",
        title:
          "<a href='https://manga-material.netlify.com/'>Manga Material</a>",
        desc:
          "Projeto pessoal implementado para aprender mais sobre material design, JavaScript, TypeScript, SASS e webpack. O site conta com recursos como lazy loading de imagens, scroll infinito e gerenciamento de estado. Ele serve como um 'client' para a API Jikan. Além de adicionar estilos próprios ao site, segue-se algumas guias de Material Design sugeridas pelos 'Material Components' para a web."
      },
      {
        type: "Pessoal",
        title: "<a href='https://lapp-old-cv.netlify.com/'>Meu CV antigo</a>",
        desc:
          "Um currículo simples que fiz. Contém animação de introdução e outros estilos."
      },
      {
        type: "Durante graduação",
        title: "<a href='https://youtu.be/MN_Y9e7Y17s'>Polderoso</a>",
        desc:
          "Aplicativo desenvolvido em disciplina sobre Android durante a graduação. O conceito do aplicativo é, através da geolocalização, possibilitar a compra de comida em praças de alimentação. Similar ao iFood, mas sem delivery pois o consumo é realizado no local."
      }
    ]
  }
}
