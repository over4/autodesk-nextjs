import React from "react";

export default function Card(props : {darkTheme: boolean, community: string, phrase: string, ctaText: string, ctaLink: string, imagePath: string}) {
    return (
        <div className = "flex flex-col min-w-[250px] max-w-[275px] lg:min-w-[325px] lg:max-w-[350px] min-h-[400px] max-h-[500px] rounded-md"style={{
            backgroundImage: `url(${props.imagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: props.darkTheme ? 'white' : 'black',
            }}>
            <div>{props.community}</div>
            <div>{props.phrase}</div>
            <a href = {props.ctaLink}>{props.ctaText}</a>
        </div>
    );
}