import Image from 'next/image'
import React from 'react'
import styles from "@/components/hero.module.css"
export default function Hero() {
  return (
    <><><><div className='div'>

      <p className={styles.para}>   </p>
      <Image className={styles.image}
        src="/me.jpg"
        width={230}
        height={221}
        alt={'me'}>

      </Image>


    </div>


      <p className={styles.paragraph2}>
          I am Jareer Shafiq Passionate front-end developer crafting seamless user experiences with a flair for creativity, I transform ideas into interactive designs. My portfolio showcases responsive, visually stunning projects that engage and inspire. Lets bring your vision to life  </p></>



      <p className={styles.p2}> Coder,Front-end-developer,Freelancer</p></>

<p className={styles.p3}>As a front-end developer, I am deeply committed to crafting engaging and user-centric web applications that not only look good but also function seamlessly. With a solid foundation in HTML, CSS, and JavaScript, I bring design concepts to life, creating intuitive interfaces that enhance user experience. My journey in web development has been driven by a passion for problem-solving and an eagerness to learn, which has led me to specialize in modern frameworks like React and Vue.js. These tools enable me to build efficient, component-driven applications that improve both performance and maintainability.

Collaboration is at the heart of my approach. I enjoy working closely with UX/UI designers to translate their visions into interactive prototypes and final products. This partnership ensures that the user interface is not only aesthetically pleasing but also aligned with user needs. I believe that understanding the target audience is crucial; thus, I prioritize research and user feedback throughout the development process. This commitment to user-centered design allows me to create products that resonate with users and provide real value.

Responsive design is another cornerstone of my work. With an increasing number of users accessing websites on various devices, I ensure that all applications I develop are mobile-friendly and visually coherent across different screen sizes. I utilize frameworks like Bootstrap and Tailwind CSS to streamline the design process and ensure consistency while adhering to best practices for accessibility. Making my applications usable for all individuals, including those with disabilities, is a fundamental principle that guides my development.

Performance optimization is also a critical aspect of my role. I employ various techniques, such as code splitting, lazy loading, and image optimization, to enhance loading times and overall responsiveness. I am proficient in using tools like Google Lighthouse to audit applications and identify areas for improvement. This focus on performance not only enhances user satisfaction but also contributes to better SEO, making the applications I build more discoverable.

Continuous learning is essential in the ever-evolving field of front-end development. I stay updated with industry trends through online courses, webinars, and community involvement, ensuring that my skills remain relevant and sharp. I am particularly excited about advancements in web technologies, such as Progressive Web Apps (PWAs) and server-side rendering (SSR), which offer new ways to enhance user experiences.

Ultimately, my goal as a front-end developer is to create high-quality, efficient, and user-friendly applications that stand out in today’s digital landscape. I am excited about the opportunity to contribute to innovative projects and collaborate with like-minded professionals who share my passion for technology and design.</p>

     </>
  )
}
