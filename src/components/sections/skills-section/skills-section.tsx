import React from 'react';
import styles from './skills-section.module.css';

export const SkillsSection: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.skills_section}>
        <h2>Skills</h2>
        <ul>
          <li>
            <span>
              <h3>Problem solving</h3>
              <p>
                My critical thinking allows me to resolve encountered problems
                in creative ways and never discourage myself or others.
              </p>
            </span>
          </li>
          <li>
            <span>
              <h3>Accountability</h3>
              <p>
                Being aware of mistakes being unavoidable from the start, I
                believe acknowledging them allows to gain skills and avoid them
                in the futur.
              </p>
            </span>
          </li>
          <li>
            <span>
              <h3>Open-mindedness</h3>
              <p>
                Beliving that in our field the best way to gain experience is by
                exchanging knowledge with the community, being open-minded is
                the top priority to me. Shutting down other people will not
                bring anyone anything.
              </p>
            </span>
          </li>
          <li>
            <span>
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, assumenda harum.
              </p>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};
