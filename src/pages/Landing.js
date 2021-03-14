import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Restaurant from '../components/Restaurant-near-you'

function Landing() {
    return (
        <div className="mb-5">
            <div className="bg-yellow pb-3">
                <Hero />
            </div>
            <Popular />
            <Restaurant />
        </div>
    );
}

export default Landing;
