"use client";
import React from "react";
import Hero from "../hero/hero";
import HeroTextOnly from "../hero-text-only/hero-text-only";
import { useState, useEffect } from "react";
import Card from "../card/card";
import FaqCard from "../faq-card/faq-card";


export default function homePageTabs(){

    const [activeTab, setActiveTab] = useState(0);

    const background = {
        tab1: '/state-of-design-and-make-sustainability-banner-1600x680.avif',
        tab2: '/architecture-engineering-construction-la28-banner-1600x680.avif',
        tab3: '/product-design-manufacturing-la28-banner-1600x680.avif',
        tab4: '/media-entertainment-la28-banner-1600x680.avif'
    }

    // Preload images
    useEffect(() => {
        Object.values(background).forEach((src) => {
        const img = new Image();
        img.src = src;
        });
    }, []);
    
    const activeBackground =
    activeTab === 0 ? background.tab1 : activeTab === 1 ? background.tab2 : activeTab === 2 ? background.tab3 : background.tab4;
    
    return (
        <div>
            <div className = "bg-local" style={{
                backgroundImage: `url(${activeBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px', 
                }}>
                <div className= {`flex pl-5 pt-8 bg-zinc-700/[0.5]`}>
                    <div
                        className={`cursor-pointer py-2 px-4 text-white ${activeTab === 0 ? 'bg-black border-b-2 border-white' : ''}`}
                        onClick={() => setActiveTab(0)}>
                        Home Page Tabs 1
                    </div>
                    <div
                        className={`cursor-pointer py-2 px-4 text-white ${activeTab === 1 ? 'bg-black border-b-2 border-white' : ''}`}
                        onClick={() => setActiveTab(1)}>
                        Home Page Tabs 2
                    </div>
                    <div
                        className={`cursor-pointer py-2 px-4 text-white ${activeTab === 2 ? 'bg-black border-b-2 border-white' : ''}`}
                        onClick={() => setActiveTab(2)}>
                        Home Page Tabs 3
                    </div>
                    <div
                        className={`cursor-pointer py-2 px-4 text-white ${activeTab === 3 ? 'bg-black border-b-2 border-white': ''}`}
                        onClick={() => setActiveTab(3)}>
                        Home Page Tabs 4
                    </div>
                </div>
                {/* Tab content */}
                <div className="text-white flex flex-col justify-center h-80 px-10">
                    {/* props: {text: string, subtitle: string, ctaText: string, ctaLink: string , secondaryCtaText: string , secondaryCtaLink: string} */}
                    {activeTab === 0 && <div>
                        <HeroTextOnly
                        text = 'test'
                        subtitle = "test subtitle asdada a sdas das dasd  kusgyvfauv  uyviua yvdfuayvsdfkjhv  jkvafjhsvdf"
                        ctaText="cta-text"
                        ctaLink="cta-link"
                        secondaryCtaText="cta-text-2"
                        secondaryCtaLink="cta-link-2"/>
                        
                    </div>}
                    {activeTab === 1 && <div>
                        <HeroTextOnly
                        text = 'test'
                        subtitle = "test subtitle"
                        ctaText="cta-text"
                        ctaLink="cta-link"
                        secondaryCtaText="cta-text-2"
                        secondaryCtaLink="cta-link-2"/>
                    </div>}
                    {activeTab === 2 && <div>
                        <HeroTextOnly
                        text = 'test'
                        subtitle = "test subtitle"
                        ctaText="cta-text"
                        ctaLink="cta-link"
                        secondaryCtaText="cta-text-2"
                        secondaryCtaLink="cta-link-2"/>
                    </div>}
                    {activeTab === 3 && <div>
                        <HeroTextOnly
                        text = 'test'
                        subtitle = "test subtitle"
                        ctaText="cta-text"
                        ctaLink="cta-link"
                        secondaryCtaText="cta-text-2"
                        secondaryCtaLink="cta-link-2"/>
                    </div>}
                </div>
            </div>
            {/* content after the hero so comic + panel */}

            {activeTab === 0 && <div className = "flex justify-evenly bg-zinc-300 py-6 px-4 sm:overflow-x-auto"> 
                <Card
                    darkTheme = {true}
                    community = "community"
                    phrase = "phrase"
                    ctaText = "cta-text"
                    ctaLink = "cta-link"
                    imagePath = "/state-of-design-and-make-sustainability-banner-1600x680.avif"
                />
                <Card
                    darkTheme = {true}
                    community = "community"
                    phrase = "phrase"
                    ctaText = "cta-text"
                    ctaLink = "cta-link"
                    imagePath = "/state-of-design-and-make-sustainability-banner-1600x680.avif"
                />
                <FaqCard/>
            </div>}
            {activeTab === 1 && <div> 
                <Card
                    darkTheme = {true}
                    community = "community"
                    phrase = "phrase"
                    ctaText = "cta-text"
                    ctaLink = "cta-link"
                    imagePath = "/state-of-design-and-make-sustainability-banner-1600x680.avif"
                />
            </div>}
            {activeTab === 2 && <div> 
                <Card
                    darkTheme = {true}
                    community = "community"
                    phrase = "phrase"
                    ctaText = "cta-text"
                    ctaLink = "cta-link"
                    imagePath = "/state-of-design-and-make-sustainability-banner-1600x680.avif"
                />
            </div>}
            {activeTab === 3 && <div> 
                <Card
                    darkTheme = {true}
                    community = "community"
                    phrase = "phrase"
                    ctaText = "cta-text"
                    ctaLink = "cta-link"
                    imagePath = "/state-of-design-and-make-sustainability-banner-1600x680.avif"
                />
            </div>}
        </div>
    );
}