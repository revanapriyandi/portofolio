/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Revan Apriyandi",
  title: "Hi all, I'm Revan",
  subTitle: emoji(
    "Pengembang Perangkat Lunak Full Stack yang bersemangat 🚀 memiliki pengalaman membangun aplikasi Web dan Seluler dengan Laravel / JavaScript / Reactjs / Nodejs / React Native dan beberapa perpustakaan dan kerangka kerja keren lainnya."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WrKtvyPRBzoZsgAJkfEibN6va0pesL6k/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/revanapriyandi",
  linkedin: "https://www.linkedin.com/in/revan-apriyandi/",
  gmail: "revanapriyandi19@gmail.com",
  gitlab: "https://gitlab.com/revanapriyandi",
  facebook: "https://www.facebook.com/mrevanapriyandi",
  medium: "https://medium.com/@revanapriyandi19",
  stackoverflow: "https://stackoverflow.com/users/21032071/m-revan-apriyandi",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Keahlian Saya",
  subTitle: "Pengembang Perangkat Lunak Full Stack yang bersemangat 🚀.",
  skills: [
    emoji(
      "⚡ Membangun aplikasi web dan seluler dengan Laravel / JavaScript / Reactjs / Nodejs / React Native dan beberapa perpustakaan dan kerangka kerja keren lainnya"
    ),
    emoji("⚡Membangun REST API dengan Laravel / Nodejs"),
    emoji(
      "⚡  Mengintegrasikan layanan pihak ketiga seperti Firebase / AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Membuat dan mengelola database seperti MySQL / MongoDB / Postgres"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Rest APi",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Borobudur",
      logo: require("./assets/images/Universitas_Borobudur.png"),
      subHeader: "S1 Teknik Informatika",
      duration: "September 2021 - Sekarang",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "SMK Negeri 2 Kecamatan Guguak",
      logo: require("./assets/images/SMK2Guguak.png"),
      subHeader: "Rekayasa Perangkat Lunak",
      duration: "Juli 2017 - Mei 2020",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance",
      company: "Platfrom Freelancer",
      companylogo: require("./assets/images/freelancer_logo.png"),
      date: "2020 - Sekarang",
      desc: "Membangun aplikasi web, seluler, integrasi API, Maintenance, dan lain-lain. Sesuai dengan kebutuhan dan permintaan klien.",
      descBullets: [
        "Membangun aplikasi web dan seluler",
        "Membuat REST API",
        "Integrasi API",
        "Pemeliharaan aplikasi web dan seluler",
        "Perbaikan bug dan lain-lain"
      ]
    },
    {
      role: "Junior Programmer (Magang)",
      company: "Riau Web Design",
      companylogo: require("./assets/images/rwd.png"),
      date: "Maret 2019 - Agustus 2019",
      desc: "Bergabung dengan tim pengembang untuk membangun aplikasi web dan seluler menggunakan Laravel dan CodeIgniter 3."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "New Project",
  subtitle: "Beberapa proyek terbaru.",
  projects: [
    {
      image: require("./assets/images/anggur.png"),
      projectName: "Sistem Pakar Diagnosa Penyakit Tanaman Anggur",
      projectDesc:
        "Sistem Pakar Diagnosa Penyakit Tanaman Anggur menggunakan metode Certainty Factor (CF). Sistem pakar ini dibangun menggunakan Framework Laravel + Livewire dan MySQL sebagai databasenya.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://pakar.codemedia.skom.id/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/draw2.webp"),
      projectName: "Sistem Pencatatan Data Service Elektronik",
      projectDesc:
        "Sistem Pencatatan Data Service Elektronik menggunakan Framework Laravel dan MySQL sebagai databasenya.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://daser.codemedia.skom.id/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Cybersecurity Foundation Professional Certificate (CSFPC)",
      subtitle:
        "Cybersecurity Foundation Professional Certificate (CSFPC) from CertiProf and Accredited by ANSI",
      image: require("./assets/images/Cybersecurity-Foundation-Professional-Certificate-CSFPC.png"),
      imageAlt: "CertiProf",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_vJssm70FEQ8PjOQGnLGuBPLTVPyqIb3/view?usp=sharing"
        }
      ]
    },
    {
      title: "Computer Security (MBKM)",
      subtitle: "Computer Security (MBKM) from Universitas Binus",
      image: require("./assets/images/binus.png"),
      imageAlt: "Universitas Binus",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1AXpgv4I9rq0cNAKPqCte1thPVsLUNxf6/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Dengan cinta, saya menulis dan berbagi pengetahuan saya dengan orang lain melalui blog saya.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji(" Hubungi Saya ☎️"),
  subtitle: "Diskusikan proyek atau hanya ingin menyapa? Silakan hubungi saya",
  number: "+62 812 6186 5875",
  email_address: "revanapriyandi19@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
