import React from 'react'

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">
                    green portfolio
                </h1>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

                <div className="intro__text">
                    <div className="text">
                        <div>timing </div>
                        <div>is</div>
                        <div>now</div>
                    </div>
                    <div className="img"></div>
                </div>

                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    )
}

export default Intro