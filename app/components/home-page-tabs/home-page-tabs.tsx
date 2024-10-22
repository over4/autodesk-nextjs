"use client";
import React from "react";
import Hero from "../hero/hero";
import { useState } from "react";


export default function homePageTabs(){

    const [activeTab, setActiveTab] = useState(0);


    return (
        <div>
            <div className= {`flex pl-5`}>
                <div
                    className={`cursor-pointer py-2 px-4  ${activeTab === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setActiveTab(0)}>
                    Home Page Tabs 1
                </div>
                <div
                    className={`cursor-pointer py-2 px-4  ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setActiveTab(1)}>
                    Home Page Tabs 2
                </div>
                <div
                    className={`cursor-pointer py-2 px-4  ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setActiveTab(2)}>
                    Home Page Tabs 3
                </div>
                <div
                    className={`cursor-pointer py-2 px-4  ${activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setActiveTab(3)}>
                    Home Page Tabs 4
                </div>
            </div>

            {/* Tab content */}
            <div className="mt-4 p-4 border border-gray-300">
                {activeTab === 0 && <div>This is the content for Home Page Tab 1.</div>}
                {activeTab === 1 && <div>This is the content for Home Page Tab 2.</div>}
                {activeTab === 2 && <div>This is the content for Home Page Tab 3.</div>}
                {activeTab === 3 && <div>This is the content for Home Page Tab 4.</div>}
            </div>
        </div>
    );
}