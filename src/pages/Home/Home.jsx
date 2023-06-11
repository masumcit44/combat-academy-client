import React from 'react';
import ExtraSection from '../../components/ExtraSection/ExtraSection';
import PopularClass from '../../components/PopularClass/PopularClass';
import PopularInstructor from '../../components/PopularInstructor/PopularInstructor';
import TopSlider from '../../components/TopSlider/TopSlider';

const Home = () => {
    return (
        <div>
            <TopSlider></TopSlider> 
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;