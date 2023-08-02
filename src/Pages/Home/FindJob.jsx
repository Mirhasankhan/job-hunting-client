import { useState } from "react";
import { Link } from "react-router-dom";

const FindJob = () => {
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
        <div className="grid grid-cols-2 gap-3 md:h-[600px] items-center">
            <div>
                <h2 className="text-2xl md:text-7xl font-semibold">Find the job <br /> made for you</h2>
                <h3 className="text-xl md:text-2xl font-semibold py-6">We make it easy to find your dream job - <br /> regardless of your location. Browse over <br /> 100,000 jobs from top companies to fast- <br /> growing startups.</h3>
                <div className="flex gap-3 items-center">
                    <Link to="/signUp"><button className="btn btn-warning">Create your profile</button></Link>
                    <Link to="jobs"><button className="btn btn-outline btn-secondary">Browse Jobs</button></Link>
                </div>
            </div>
            <div className="">
                <h1 className="text-xl md:text-3xl py-3 font-semibold">Search Job According To Your Skills</h1>
                <div className="inline">
                    <input className="x-3 border border-black px-1 py-2 rounded-md outline-none" type="text" value={inputValue} onChange={handleInputChange}
                        list="suggestions"
                        placeholder="Job Title"
                    />
                    <datalist id="suggestions">
                        {suggestions.map((item, index) => (
                            <option key={index} value={item} />
                        ))}
                    </datalist>
                </div>
                <div className="inline mx-3">
                    <input className="x-3 border border-black px-1 py-2 rounded-md outline-none" type="text" value={city} onChange={handlePlaceChange}
                        list="names"
                        placeholder="City Name or Remote"
                    />
                    <datalist id="names">
                        {names.map((item, index) => (
                            <option key={index} value={item} />
                        ))}
                    </datalist>
                </div>
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
    );
};

export default FindJob;