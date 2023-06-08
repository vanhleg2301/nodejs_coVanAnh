import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';




import './banner.css'
const fadeImages = [
    {
        url: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        caption: 'Slide 1'
    },
    {
        url: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        caption: 'Sldie 2'
    },
    {
        url: 'https://media.gettyimages.com/id/637030542/photo/kathmandu-crowds-of-people-outside-temples-patan-durbar-square-nepal.jpg?s=612x612&w=gi&k=20&c=s4H7-W4nNlpLGVagDNkUgBSPrsBFM2hCaAezMhUdxvk=',
        caption: 'Slide 3'
    },
];
const Banner = () => {
    return (
        <div >
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container">
                            <img src={fadeImage.url} />
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}
export default Banner;


