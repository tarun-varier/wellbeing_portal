import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleList from '../Components/ArticleList';
import Carousel from '../Components/Carousel';
import Features from '../Components/Features';
import Header from '../Components/Header';
import ConnectBtn from '../Components/ConnectBtn';
import CTASection from '../Components/CTASection';

const HomePage = () => {

    return (
        <div className="min-h-screen bg-white-400 flex flex-col">
            {/* Header SectioMental Health Awarenessn */}
            <Header />
            {/* Carousel Section */}
            {/* <Carousel /> */}

            {/*<Features />*/}

            {/* Main Content */}
            <CTASection />
            <main className="flex-1 flex flex-col justify-center items-center p-8">
                <div className="p-12">
                    <h2 className="text-4xl font-bold mb-4 text-center sm:text-left">Welcome to the Well-Being Portal</h2>
                    <p className="text-lg mb-8 text-center max-w-2xl">
                        Explore a wide range of articles and resources on mental health and well-being. Our mission is to support students' mental health by providing valuable information and connecting them with professional counselors.
                    </p>
                </div>
                <Features />
            </main>
            {/* Footer Section */}
            {/* <footer className="bg-white text-gray-800 p-4 text-center shadow-t-md">
        &copy; {new Date().getFullYear()} IIIT Kottayam. All rights reserved.
      </footer> */}
        </div>
    );
};

export default HomePage;
