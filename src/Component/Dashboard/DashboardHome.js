import React from 'react';

const DashboardHome = () => {
    return (
        <div className='lg:flex justify-center items-center'>
            <span>
                <h3  className='bg-pink-600 p-3 shadow-2xl shadow-pink-600 text-4xl font-bold text-white rotate-[-20deg]'>20% off </h3>
                <p className='mt-20 font-bold text-pink-500 p-2'>For Electronics Products </p>
            </span>
            <img className='h-96' src="https://img.freepik.com/free-vector/dashboard-analytics-computer-performance-evaluation-chart-screen-statistics-analysis-infographic-assessment-business-report-display-isolated-concept-metaphor-illustration_335657-1149.jpg?t=st=1653990848~exp=1653991448~hmac=ebd17c527fea5cdd02d642285575e7ba19ae539d0c80a2e69a642edc693a8323&w=740" alt="" />
        </div>
    );
};

export default DashboardHome;