import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
    return (
        <div className="mx-2 md:mx-12 mb-6">
            <h1 className="text-xl md:text-5xl font-bold text-center mb-6">Testimonials</h1>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="border p-10">
                    <FaQuoteLeft className="text-3xl mb-3"></FaQuoteLeft>
                    <h1 className="text-xl">I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.</h1>
                </div>
                <div className="border p-10">
                    <FaQuoteLeft className="text-3xl mb-3"></FaQuoteLeft>
                    <h1 className="text-xl">I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</h1>
                </div>
                <div className="border p-10">
                    <FaQuoteLeft className="text-3xl mb-3"></FaQuoteLeft>
                    <h1 className="text-xl">I can't imagine my day to day without this platform. Life would be a lot more difficult.</h1>
                </div>
                <div className="border p-10">
                    <FaQuoteLeft className="text-3xl mb-3"></FaQuoteLeft>
                    <h1 className="text-xl">Half of the offers I give are sourced from Wellfound (AngelList Talent). It's the best product for anyone looking for startup talent.</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;