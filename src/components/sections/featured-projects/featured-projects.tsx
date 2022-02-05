import React from 'react';
import styles from './featured-projects.module.css';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects I&#39;m proud of</h2>
      {/* <article>
        <div className={styles.text}>
          <h4>Latest Project</h4>
          <h3>Wall of Wonder</h3>
          <p className={styles.description}>
            Description of the project. This should be fairly concise while also
            describing the key components that you developed or worked on. It
            can be as long as you need it to be but should at least be a few
            sentences long. Be sure to include specific links anywhere in the
            description. A link looks like{' '}
            <a href="https://frontendmasters.github.io/grid-flexbox-v2/">
              this
            </a>
            , and multiple links look <a href="#">like this</a> and{' '}
            <a href="#">like this</a>.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SVG</li>
          </ul>
        </div>
        <img
          src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
          alt="Screenshot of the Wall of Wonder."
        />
      </article>
      <article>
        <div className={styles.text}>
          <h4>Bootcamp Project</h4>
          <h3>Wall of Wonder</h3>
          <p className={styles.description}>
            Description of the project. This should be fairly concise while also
            describing the key components that you developed or worked on. It
            can be as long as you need it to be but should at least be a few
            sentences long. Be sure to include specific links anywhere in the
            description. A link looks like{' '}
            <a href="https://frontendmasters.github.io/grid-flexbox-v2/">
              this
            </a>
            , and multiple links look <a href="#">like this</a> and{' '}
            <a href="#">like this</a>.
          </p>
          <h4>Technologies used include:</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SVG</li>
          </ul>
        </div>
        <img
          src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
          alt="Screenshot of the Wall of Wonder."
        />
      </article> */}
      <article>
        <div className={styles.text}>
          <h4>Photography Project</h4>
          <h3>Personnal instagram</h3>
          <p className={styles.description}>
            This project fulfills quite a lot of creative needs from learning
            photography, edditing with lightroom to scene composition. These
            pictures are posted up on my{' '}
            <a
              href="https://www.instagram.com/samuel_hendrick/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{' '}
            Taking these pictures allows me to go outside and visit new places.
            I mostly shoot landscapes but I hope to find a model to do street
            photography next.
          </p>
          <h4>More info:</h4>
          <ul>
            <li>📸 Canon EOS 200D</li>
            <li>Lightroom</li>
            <li>Photoshop</li>
          </ul>
        </div>
        <img
          src="/images/20220129-IMG_3359.jpg"
          alt="Screenshot of the Wall of Wonder."
        />
      </article>
    </section>
  );
};
