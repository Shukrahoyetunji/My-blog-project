import React from 'react';
import { launch, slider } from './Data';

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
}

const triumphOgeh = slider[0]
console.log(triumphOgeh)
const Section1 = () => {

    return (
        <section className="second">
            <div className="hole">
                {
                    slider.map((slides) => {

                        return (
                            <div className='box' key={slides._id}>
                                <div className="title">
                                    <img src={slides.image} alt="img" />
                                </div>

                                <div className="red">
                                    <div className="test">
                                        {slides.title}
                                    </div>
                                    <div className="tue">
                                        <div className="imt">
                                            <img src={slides.image} alt="img" />
                                            <h1>{slides.author}</h1>
                                        </div>
                                        <div className="time">
                                            {new Date(slides.createdAt).toDateString()}
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: truncate(slides.content, 150)
                                            }}></div>
                                    </div>
                                    <div className="read">
                                        <button className="bott">Read More</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <div className="data">
                <div className="digest">
                <div className="analy">
                    <div className="the_title">
                        <div className="analy" >{triumphOgeh.title}</div>
                        <div className="tue">
                            <div className="imt" >
                               <div>
                                  <img src={triumphOgeh.image} alt="Img" srcset="" />
                                </div>
                                <div >
                                   <h1>{triumphOgeh.author}</h1>
                                </div>
                            </div>
                            <div className="time">
                                {new Date(triumphOgeh.createdAt).toDateString()}
                            </div>
                        </div>
                        <div className="contento">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: truncate(triumphOgeh.content, 150)
                                }}>

                            </div>
                        </div>
                        <div className="read">
                            <button className="bottn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <img src={triumphOgeh.image} alt=" Img" srcset="" />
                </div>
                </div>
                
            </div>
            <div className="lauched">
                {
                    launch.map((slides) => {

                        return (
                            <div className='box' key={slides._id}>
                                <div className="title">
                                    <img src={slides.image} alt="img" />
                                </div>

                                <div className="red">
                                    <div className="test">
                                        {slides.title}
                                    </div>
                                    <div className="tue">
                                        <div className="imt">
                                            <img src={slides.image} alt="img" />
                                            <h1>{slides.author}</h1>
                                        </div>
                                        <div className="time">
                                            {new Date(slides.createdAt).toDateString()}
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: truncate(slides.content, 150)
                                            }}></div>
                                    </div>
                                    <div className="read">
                                        <button className="bott">Read More</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }    
            </div>
        </section>
    );
}

export default Section1;