import "./Resume.css"
import { Icon } from "@iconify/react"

function Resume() {
  return (
    <div className="SectionR">
        <h2 id="Resume" className="Titles">Resume</h2>
        <div className="FlexResume">

            <div className="Box">
                <Icon icon="healthicons:1-outline" className="IconResume BackgroundIcon" />
                <div className="BoxDescription">
                    <h2>Web Developer</h2>
                    <p>I learned the best practices of web development, working with HTML and CSS, versioning projects with Git, and utilizing processors like SASS. I gained an understanding of the importance of SEO and acquired skills in interacting with a server. </p>
                </div>
            </div>

            <div className="Box">
            </div>

            <div className="Box">
                <Icon icon="healthicons:3-outline" className="IconResume BackgroundIcon"/>
                <div className="BoxDescription">
                    <h2>React Js</h2>
                    <p>I had the opportunity to learn how to program Single Page Applications (SPA) by working with components using JavaScript, JS, and ES6. I also gained knowledge in data flow, route management with Firebase, and Virtual DOM handling.</p>
                </div>
            </div>

            <div className="Box">
            <Icon icon="fluent:arrow-reply-16-filled" rotate={2} className="IconResume" style={{marginLeft:"30%",color:"#00a551"}} />
            </div>

            <div className="Box">
                <Icon icon="healthicons:2-outline" className="IconResume BackgroundIcon"/>
                <div className="BoxDescription">
                    <h2>JavaScript</h2>
                    <p>I acquired fundamental skills to develop applications of any kind using JavaScript, also gaining proficiency in libraries such as jQuery and AJAX development techniques.</p>
                </div>
            </div>

            <div className="Box">
            <Icon icon="fluent:arrow-reply-16-filled" rotate={1} className="IconResume" style={{paddingLeft:"30%",color:"#00a551"}} />
            </div>

        </div>
    </div>
  )
}

export default Resume