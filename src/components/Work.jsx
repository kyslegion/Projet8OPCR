import React from 'react'
import data from "../assets/projets.json";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// "/src/assets/projet1.png"
const Work = () => {
    return (
        <div id='work'>
            <h2>Projets</h2>
            <section>
                <Carousel 
                    showArrows={false}
                    // showIndicators={false}
                    // showStatus={false}
                    showThumbs={false}
                    interval={200000}
                    infiniteLoop={true}
                    autoPlay={true}
                     >
                    {
                        data.projects.map(i => (
                            <div className='workItem' key={i.title}>
                                <img src={i.imgSrc} alt={i.title} />
                                <aside>
                                    <h3>{i.title}</h3>
                                    <p>{i.description}</p>
                                    <a target={'_blank'} href={i.url}>Voir le site</a>
                                </aside>
                            </div>
                        ))
                    }
                </Carousel>
            </section>
        </div>
    )
}

export default Work