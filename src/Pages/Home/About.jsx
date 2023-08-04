import { FaArrowCircleRight, FaLocationArrow, FaRegFileAlt, FaRegStar } from 'react-icons/fa';
import img1 from '../../assets/about.png'

const About = () => {
    return (
        <div className='mx-2 md:mx-12 grid md:grid-cols-2 gap-5'>
            <img src={img1} alt="" />
            <div>
                <h3 className='text-xl font-semibold'>GOT TALENT?</h3>
                <h1 className='text-2xl md:text-5xl font-bold my-4'>Why job seekers <br /> love us</h1>
                <div className='flex items-center '>
                    <FaRegStar className='text-3xl mr-4'/>
                    <h1 className='font-medium text-xl'>Unique jobs at startups and tech companies you can't find anywhere else</h1>
                </div>
                <div className='flex items-center my-3'>
                    <FaLocationArrow className='text-3xl mr-4'/>
                    <h1 className='font-medium text-xl'>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</h1>
                </div>
                <div className='flex items-center my-3'>
                    <FaRegFileAlt className='text-3xl mr-4'/>
                    <h1 className='font-medium text-xl'>Everything you need to know to job search - including seeing salary and stock options upfront when looking</h1>
                </div>
                <div className='flex items-center '>
                    <FaArrowCircleRight className='text-3xl mr-4'/>
                    <h1 className='font-medium text-xl'>Connect directly with founders at top startups - no third party recruiters allowed</h1>
                </div>
            </div>
        </div>
    );
};

export default About;