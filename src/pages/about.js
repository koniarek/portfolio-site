import React from "react"

// components
import Layout from "../components/layout"
import Content from "../components/content-div"

// images
import SeanThailand from "../images/sean/sean-thailand.jpg"


export default function About() {
  return (
    <Layout>
      
      <Content>

        <img
          src={SeanThailand} alt="Me at an art museum in Thailand"
          style={{ 
            borderRadius: `50%`, 
            width: `300px`,
            boxShadow: `0 0 8px 2px` }}/> 

        <h2>About me <span role="img" aria-label="Lightbulb Emoji">💡</span></h2>

        <p>A native born New Yorker by way of Manhattan, once New Jerseyan, now Brooklynite. You could say I like the pizza and bagels here enough to stick around.</p>

        <p>I've had a passion for technology and all things nerdy since I was first old enough to hold a Game Boy and tinker with my dad's MS-DOS work laptop, and that love of software and gadgets has been the core of my identity ever since.</p>

        <p>I've also maintained a love for the arts and humanities thanks to wonderful parents who took me to museums, plays, and everything in-between while growing up. I loved it so much that I acquired a <strong>BFA from NYU</strong> (with a <strong>Minor in Web Design and Applications</strong>), and have spent the past 10 years pursuing acting and voice-over professionally in NYC.</p>

        <p>As an actor and narrator I've worked with some amazing clients, such as <strong>Audible</strong>, <strong>Scholastic</strong>, <strong>Microsoft</strong>, <strong>HarperCollins</strong>, <strong>Avis</strong>, <strong>Nickelodeon</strong>, and many more.</p>

        <p>Once I knew I was ready for a change, I decided that it was time to pursue my other lifelong love of technology and software. I attended <strong>Flatiron School</strong> for their <strong>Software Engineering</strong> program, spending an incredible 15 weeks learning everything I could about modern web design and development.</p>

        <p>I've discovered an even deeper passion for programming and software development than ever before, and am ready to chase my dream of bringing the arts, humanities, technology, and compassion together to make a difference in the world.</p>

        <br />

      </Content>

    </Layout>
  )
}
