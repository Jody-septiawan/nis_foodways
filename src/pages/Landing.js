import { useState, useContext } from 'react';
import { UserContext } from "../contexts/userContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Restaurant from '../components/Restaurant-near-you'
import IncomeTransaction from '../pages/IncomeTransaction';


function Landing() {
    const [state, dispatch] = useContext(UserContext);
    console.log('Landing : ', state);

    if (state.isLogin && state.user.email == 'partner@gmail.com') {
        return (
            <div className="mb-5">
                <IncomeTransaction />
            </div>
        );
    } else {
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

}

export default Landing;
