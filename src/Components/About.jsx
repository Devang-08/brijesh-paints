import React from 'react'
import image from '../Images/about.jpg'
import img from '../Images/design.jpeg'

const About = () => {
    // let myHomeStyle = {
    //     height: "80vh",
    //     backgroundImage: `url(${image})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    // }
    return (

        <div className='d-flex'>
            <div className='d-flex flex-column'>
                <h1 id='aboutus'>ABOUT US</h1>
                <img src={img} alt="" id='imgss' />
            </div>
            <div className='' id='aboutt'>
                <p>Welcome to Brijesh Paints – where color meets creativity and your vision becomes a masterpiece! As your premier destination for all things paint-related, we take pride in offering a diverse range of high-quality products that inspire and transform spaces.
                </p>
                <p>In 1989, the manufacturing unit known as KARNAL PAINTS was established on a farm situated in Yawali Taluka, Mohol District, Solapur. In the factory, the production of Synthetic Enamel for the brand Brijesh Paints began. After packaging, the paint is available at wholesale and retail at Brijesh Paints shop located in Park chowk,Solapur which was set up in the year 2017.</p>
                <p>At Brijesh Paints, we believe that every stroke of color has the power to evoke emotions, set moods, and tell unique stories. Whether you're a seasoned DIY enthusiast, a professional painter, or someone looking to add a personal touch to your living space, our extensive selection of paints and accessories is designed to cater to all your painting needs.</p>

                {/* <p>What sets us apart is our commitment to excellence. We source paints from trusted manufacturers, ensuring that our customers receive products of the highest quality. Our knowledgeable and friendly staff is always ready to assist you in finding the perfect color palette or guiding you through the latest trends in interior and exterior design.
                </p> */}
                {/* <p>Explore our aisles filled with an array of premium paints, primers, and specialty finishes that cater to different surfaces and preferences. From timeless classics to trendy hues, our color palette is as diverse as the imaginations it serves. Our brushes, rollers, and other painting accessories are carefully selected to make your painting experience seamless and enjoyable.</p> */}
                {/* <p>Beyond providing top-notch products, Brijesh Paints is a community hub for inspiration and ideas. Follow our blog for the latest trends, tips, and step-by-step guides to turn your painting projects into works of art. Connect with us on social media to see how our customers are transforming their spaces and to share your own creative endeavors.</p> */}
                <p>
                    Thank you for choosing Brijesh Paints as your go-to destination for all your painting needs. Let's embark on a colorful journey together, turning walls into canvases and dreams into reality!</p>
            </div>

        </div>



    )
}

export default About
