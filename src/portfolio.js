import LogoLetris from './assets/letrisLogo.png';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { FaReact,FaJs,FaUnity,FaGit } from "react-icons/fa";
import './assets/kotlin-logo.png'
import Android from './assets/Android Studio.svg'

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
   
    
    {
      name:'HTML',
      image:''
    },  
    {
      name:'CSS',
      image:''
    },  
    {
      name:'JavaScript',
      image:''
    },  
    { 
      name:'ReactJs',
      image:<FaReact/>
    },  
    {
      name:'Unity',
      image:<FaUnity/>
    },  
    {
      name:'Git',
      image:''
    },  
    

  
   
    
  ]
  

    const skillinfo= [
      {
        name:'Kotlin',
        svg:'https://o.remove.bg/uploads/c83d8ab8-768a-4f2f-a777-dbb7dd0d9628/kotlin-logo.png'
      },    
      {
        name:'Android Studio',
        svg:'https://o.remove.bg/downloads/366208ec-a806-4566-ba75-8db3ea0c3183/download-removebg-preview.png'
      },  
      {
        name:'Firebase',
        svg:'https://o.remove.bg/downloads/efd6eb8e-0d1e-441d-b8f0-5deeaf033430/downloadads-removebg-preview.png'
      },  
    ]
  


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
  export { header, about, projects, skills, contact,aboutme,logoo,skillinfo }
  