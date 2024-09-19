import styles from './ProjectsStyles.module.css';
import pblProject from '../../assets/pblProject.png';
import busTimeTable from '../../assets/busTimeTable.png';
import FashionAnimation from '../../assets/FashionAnimation.png';
import RealEstate from '../../assets/RealEstate.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pblProject}
          link="https://sagarxjadhav.github.io/PBL/"
          h3="E-Library"
          p="HTML, CSS, JS"
        />
        <ProjectCard
          src={busTimeTable}
          link="https://bus-time-git-main-sagars-projects-42f76f5b.vercel.app/"
          h3="MSRTC Bus"
          p="React.js, TailWind Css"
        />
        <ProjectCard
          src={FashionAnimation}
          link="https://sagarxjadhav.github.io/Fashion-Hub/"
          h3="Animation Website"
          p="Shery.js"
        />
        <ProjectCard
          src={RealEstate}
          link="https://sagarxjadhav.github.io/RealEstate/"
          h3="Real Estate"
          p="Scrolltrigger, Locomotive"
        />
      </div>
    </section>
  );
}

export default Projects;
