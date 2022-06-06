import React from 'react';
import Decoration from '../Decoration/Decoration';
import Discount from '../Discount/Discount';
import Electronics from '../Electronics/Electronics';
import Fashion from '../Fashion/Fashion';
import Footer from '../Footer/Footer';
import MobailPhones from '../MobailPhones/MobailPhones';
import Banner from '../Pages/Banner/Banner';
import Catagory from '../Pages/Catagory/Catagory';
import Reviue from '../Reviue/Reviue';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Electronics></Electronics>
            <Fashion></Fashion>
            <Decoration></Decoration>
            <Discount></Discount>
            <MobailPhones></MobailPhones>
            <Service></Service>
            <Reviue></Reviue>
            <Footer></Footer>
        </div>
    );
};

export default Home;