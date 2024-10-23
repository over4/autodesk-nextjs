import React from "react";


export default function HeroTextOnly(props: {text: string, subtitle: string, ctaText: string, ctaLink: string , secondaryCtaText: string , secondaryCtaLink: string}) {
    return (
        <div className = "text-white flex flex-col justify-center content-center ">
            <div className = "text-5xl font-medium">{props.text}</div>
            <div>{props.subtitle}</div>
            <div className = "flex flex-col">
                <a href = {props.ctaLink}>{props.ctaText}</a>
                <a href = {props.secondaryCtaLink}>{props.secondaryCtaText}</a>
            </div>
        </div>
    );
}