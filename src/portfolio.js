import LogoLetris from './assets/letrisLogo.png';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
const header = {
  
    //Ini Untuk Mengubah text di header
    title: 'REACT.',
  }
  
  const about = {
   
    //Untuk Mengubah List Isi Project
    name: 'Nicko Christian',
   
    description:
      '',
   
    social: {
      Instagram: 'https://www.instagram.com/nikochrs/',
      github: 'https://github.com/Jeffrryy',
    },
  }
  
  const projects = [
   
  
    {
      name: 'ChatApp',
      description:
        'Real-Time ChatApp With ReactJs And FireBase',
      stack: ['FireBase', 'ReactJs'],
      sourceCode: 'https://github.com/Jeffrryy/Web-Chat-React',
      livePreview: 'https://jeffrryy.github.io/Web-Chat-React/',
    },
    {
      name: 'Letris Mart',
      description:
        'Shopping Application Interface',
      stack: ['ReactJs'],
      sourceCode: 'https://github.com/Jeffrryy/LetrisMart',
      livePreview: 'https://jeffrryy.github.io/LetrisMart/',
    },
    {
      name: 'Apple Website Clone',
      description:
        'A clone of apple website using reactjs',
      stack: ['ReactJs'],
      sourceCode: 'https://github.com/Jeffrryy/REACTTUGAS',
      livePreview: 'https://jeffrryy.github.io/REACTTUGAS/',
    },
    {
      name: 'Simple Landing Page',
      description:
        'A Simple Landing Page Using ReactJs',
      stack: ['ReactJs'],
      sourceCode: 'https://github.com/Jeffrryy/Reactjskelompokniko',
      livePreview: 'https://jeffrryy.github.io/Reactjskelompokniko/',
    }
   
  ]
  
  const skills = [
    // {
    //   skills:[
    //     {
    //       name:'HTML ',
    //       image:<HtmlIcon/>
    //     },
    //   ]
    // }
    
    'HTML' ,
    'CSS',
    'JavaScript',
    'Unity',
    'React',
    'Git',
    'Kotlin',
    'Android Studio',
    'Firebase',
  ]
  
  //  const skills = [
  //   {
  //     title: "Front end",
  //     skills: [
  //       {
  //         name: "HTML",
  //         // image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
  //       },
  //       {
  //         name: "CSS",
  //         image: <HtmlIcon/>,
  //       },
  //   //     {
  //   //       name: "JavaScript",
  //   //       image:
  //   //         "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  //   //     },
  //   //     {
  //   //       name: "React Js",
  //   //       image:
  //   //         "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
  //   //     },
  //   //   ],
  //   // },
  //   // {
  //   //   title: "Android",
  //   //   skills: [
  //   //     {
  //   //       name: "Java",
  //   //       image:
  //   //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  //   //     },
  //   //     {
  //   //       name: "Kotlin",
  //   //       image:
  //   //         "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  //   //     },
  //   //     {
  //   //       name: "XML",
  //   //       image:
  //   //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
  //   //     },
  //   //     {
  //   //       name: "Android Studio",
  //   //       image:
  //   //         "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  //   //     },
  //     ],
  //   },
  //   {
  //     title: "Others",
  //     skills: [
  //       // {
  //       //   name: "Git",
  //       //   image:
  //       //     "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
  //       // },
  //       // {
  //       //   name: "GitHub",
  //       //   image:
  //       //     "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  //       // },
  //       // {
  //       //   name: "VS Code",
  //       //   image:
  //       //     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
  //       // },
  //       // {
  //       //   name: "Figma",
  //       //   image:
  //       //     "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
  //       // },
  //     ],
  //   },
  // ];
  
    
  


  const logoo = [
      <HtmlIcon/>,

  ]
  const contact = {
    email: 'nickochristian642@gmail.com',
    whatsapp:' https://wa.me/+6281380473938?text=Halo%20bang '
  }
  
  const aboutme = {
      intro: "Hello,i am Nicko Christian, a passionate and driven individual from South Tangerang, Indonesia. I am currently pursuing my education at SMK Letris Indonesia 2, where I have developed a deep interest in the fields of Backend Development and Game Development. I have been schooling in Letris 2 for about 2 years now and  now im 11th grade. And with a strong foundation in programming and a creative flair, I aspire to make a significant mark in these exciting domains.",
      hobby:"I like playing games alot. Because i like to play games thats why i want to create a video games on my own. I'm good at all games especially Mobile Legends. If you want to add me just add me lol. "
      
  }
  export { header, about, projects, skills, contact,aboutme,logoo }
  