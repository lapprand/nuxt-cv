export default {
  defaults: {
    close: "Close"
  },
  info: {
    name: "Arthur Barros Lapprand",
    job: "Cloud & Android Developer",
    github: "https://github.com/lapprand",
    linkedin: "https://www.linkedin.com/in/lapprand/",
    email: "mailto:lapprand@gmail.com"
  },
  education: {
    title: "Education",
    degree: "Bachelor of Computer Science - UFPE",
    degreeDesc:
      "Graduated in August, 2018, at the Department of Computer Science in the Federal University of Pernambuco.",
    internship:
      "Obligatory internship was completed in a research project between the Department of Computer Science (CIn-UFPE), the University of Michigan (UMICH) and the University of Illinois (ILLINOIS). This internship focused on studying, testing and applying reverse engineering techniques on firmwares for IoT devices, while exploring security failures."
  },
  interests: {
    title: "Profile and Interests",
    p1:
      "I like exploring new technologies for the web, but for the most part I work with the Vue.js JavaScript framework and Google Cloud Platform services. Also, a lot of Vuetify.",
    p2:
      "As for mobile, I have worked with Java and Kotlin for Android. As of this moment, I'm leading the development of a glucose management app in a freelance project."
  },
  work: {
    title: "Projects and Experience",
    projects: [
      {
        type: "Professional experience",
        title: "<a href='drajulia.com.br'>Dra Julia / PequenasCausas</a>",
        desc:
          "Web App and site developed in an agile team at <a href='https://beyondcloud.com.br'>Beyond Cloud</a>. It is implemented with Vue.js + Vuetify + Node.js + Google Cloud Platform (Cloud Build, Cloud Run, Firestore, Cloud Functions, Cloud Storage, Container Registry). The project enables the user to build legal document templates and define personalized questions. The consumer can then answer those questions to generate the final document. There is also an automator which takes the document and registers it in the proper legal entity at a low cost."
      },
      {
        type: "Professional experience",
        title: "GlicoCONNECT",
        url: "",
        desc:
          "Developed with the Kotlin programming language, Android Studio and <a href='https://developer.android.com/jetpack'>Android Jetpack</a> components, this app enables the user to visualize and manage blood glucose levels. It also allows reading glucose measurements from manufacturer specific BLE device. The app follows design and API specified by the client.",
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
        type: "Personal",
        title:
          "<a href='https://manga-material.netlify.com/'>Manga Material</a>",
        desc:
          "A site I created for the sake of learning more about Material Design, JavaScript, TypeScript, SASS/SCSS and Webpack. It also features lazy loading of images, infinite scroll and state management. It acts as a client for the Jikan API. I used a mix of Google's Material Design and my own styles."
      },
      {
        type: "Personal",
        title: "<a href='https://lapp-old-cv.netlify.com/'>My old CV</a>",
        desc: "Simple CV I made with a starting animation and other styles."
      },
      {
        type: "Under graduation",
        title: "<a href='https://youtu.be/MN_Y9e7Y17s'>Polderoso</a>",
        desc:
          "An Android app developed during graduation. Its concept is to enable the purchase of food through geolocalization. Similar to iFood, but without delivery. At the time, iFood didn't have this feature."
      }
    ]
  }
}
