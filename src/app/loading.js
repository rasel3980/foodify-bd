'use client'
import Lottie from 'lottie-react';
import loaderAnimation from '../../public/loading.json'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Lottie animationData={loaderAnimation}></Lottie>
        </div>
    );
};

export default Loading;