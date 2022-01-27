import {useState} from "react";
import "./Carousel.css"

export default function Carousel(props) {
    let [images, setImages] = useState(props.images)

    function getImages() {
        let res = [];
        images.forEach((image, i) => {
            res.push(<li key={"carousel__slide"+i}
                         id={"carousel__slide"+i}
                         tabIndex="0"
                         className="carousel__slide"
                         style={{backgroundImage: `url(${image})`}}
            >
                <div className="carousel__snapper">
                    <a href={"#carousel__slide"+(i-1 <0 ? images.length - 1 : i-1 )}
                       className="carousel__prev">Go to last slide</a>
                    <a href={"#carousel__slide"+(i === images.length - 1 ? 0 : i+1 )}
                       className="carousel__next">Go to next slide</a>
                </div>
            </li>)
        })
        return res
    }

    return (
        <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
                {getImages()}
            </ol>
        </section>
    );
}