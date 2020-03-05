import React from 'react';
import styles from './About.module.css';

const About = (props) => {

    let designer = props.designersList.map((item, index) => {
        return <li key={index} id={index} onClick={props.clickEvent}>{item.name}</li>;
    });

    return (

        <div>
            <h1 className={styles.abc}>About page</h1>
            <ul>
                {designer}
            </ul>
        </div>

    );
}

export default About;