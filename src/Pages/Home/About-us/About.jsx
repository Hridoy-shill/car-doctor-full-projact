import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div className='grid grid-cols-2 mt-24 h-[450px]'>
            <div className=''>
                <div>
                    <img src={img2} alt="" className='w-[450px] h-[360px] absolute rounded-xl'/>
                </div>
                <div>
                    <img src={img1} alt="" className='w-[320px] h-[270px] relative top-40 left-44 border-8 border-white rounded-lg'/>
                </div>
            </div>
            <div className=''> 
                <p className='text-lg font-bold text-[#FF3811] mb-3'>About Us</p>
                <p className='text-5xl font-bold mb-6'>We are qualified <br /> & of experience <br /> in this field</p>
                <p className='font-semibold text-gray-400 mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='font-semibold text-gray-400 mb-10'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-warning'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;