import "./Chameleon.css"

const Chameleon = (props) => {
    return (
        <div className={`scrolling-background ${props.animate ? '' : 'stop'}`}>
            <h1> This Chameleon is made of pure &#128151; love, css and html tags</h1>
            <div className="chameleon" onClick={props.toggleAnim}>
                <div className="body">
                    <div className="head">
                        <span> Click me </span>
                    </div>
                    <div className="tail">
                        <div className="tail">
                            <div className="tail">
                                <div className="tail">
                                    <div className="tail">
                                        <div className="tail">
                                            <div className="tail"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leg">
                </div>
                <div className="back leg">
                </div>
                <div className="behind">
                    <div className="leg">
                    </div>
                    <div className="back leg">
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Chameleon;