import React from 'react';
import style from './about-section.module.css';

export const AboutSection: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <section className={style.about_section}>
        <h2>About me. </h2>
        <article>
          <div className={style.about}>
            <div>
              <p>
                <h3>Who am I ?</h3>I am a 23 year old creative person trying to
                fullfill my dreams. <br />I love learning every single day about
                programming, photography, sewing, people and more !
              </p>
              <p>
                <h3>Who do I want to become ?</h3> I dream about becoming a
                mentor to younger creative minds and help them through my
                personnal experiences for them to feel comfortable in what they
                are doing.
              </p>
              <p>
                <h3>What are my passions ?</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                accusamus reprehenderit nobis est doloremque modi, at laboriosam
                eligendi magni minima, eveniet facilis! Cum sequi inventore
                necessitatibus eligendi aliquid corporis eos, reiciendis
                voluptatibus, ducimus officiis quis?
              </p>
            </div>
          </div>
          <div className={style.image}>
            <img
              src="/images/DSCF8500-4-1.jpg"
              alt="Hendrick samuel profile picture"
            />
          </div>
        </article>
      </section>
    </div>
  );
};
