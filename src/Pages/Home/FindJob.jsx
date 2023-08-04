import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import jobImage from '../../assets/job.json'
import { AuthContext } from "../../Providers/AuthProvider";
import { FaSearch, FaSearchLocation } from "react-icons/fa";

const FindJob = () => {
    const {user} = useContext(AuthContext)
    const [inputValue, setInputValue] = useState('');
    const suggestions = ['Software Engineer', 'Product Manager', 'Data Scientist ', 'Web Developer', 'Front End Developer'];
    const [city, setCity] = useState('')
    const names = ['Remote', 'Mumbai', 'Delhi', 'New York', 'London', 'Berlon',]

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handlePlaceChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="md:mx-12 mx-2">
            <div className="">
                <h1 className="text-xl md:text-3xl py-3 font-semibold">Search Job According To Your Skills</h1>
                <div className="inline relative">
                    <div className="md:inline border p-2 border-black rounded-md">
                    <h1 className="font-semibold inline pr-2">What</h1>
                        <input className="w-1/3 outline-none" type="text" value={inputValue} onChange={handleInputChange}
                            list="suggestions"
                            placeholder="Job Title"
                        />
                         <FaSearch className="inline text-gray-500"/>
                    </div>
                    <datalist id="suggestions">
                        {suggestions.map((item, index) => (
                            <option key={index} value={item} />
                        ))}
                    </datalist>
                </div>
                <div className="inline mx-3">
                    <div className="md:inline border p-2 border-black rounded-md">
                        <h1 className="font-semibold inline pr-2">Place</h1>
                        <input className="w-1/3  rounded-md outline-none" type="text" value={city} onChange={handlePlaceChange}
                            list="names"
                            placeholder="City Name or Remote"
                        />
                        <FaSearchLocation className="inline text-end text-gray-500"/>
                    </div>
                    <datalist id="names">
                        {names.map((item, index) => (
                            <option key={index} value={item} />
                        ))}
                    </datalist>
                </div>
                <button className="bg-sky-500 text-white px-4 py-2 font-semibold rounded-lg mt-3">Search</button>
            </div>
            <div className="grid md:grid-cols-2 mx-2 gap-3 items-center">
                <div>
                    <h2 className="text-2xl md:text-7xl font-semibold">Find the job <br /> made for you</h2>
                    <h3 className="text-xl md:text-2xl font-semibold py-6">We make it easy to find your dream job - <br /> regardless of your location. Browse over <br /> 100,000 jobs from top companies to fast- <br /> growing startups.</h3>
                    <div className="flex gap-3 items-center">
                        <Link to={`${user?.email ? '/profile': '/signUp'}`}><button className="btn btn-warning">Create your profile</button></Link>
                        <Link to="jobs"><button className="btn btn-outline btn-secondary">Browse Jobs</button></Link>
                    </div>
                </div>
                <Lottie animationData={jobImage} loop={true} />

            </div>
        </div>
    );
};

export default FindJob;