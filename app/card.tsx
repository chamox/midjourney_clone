'use client';

interface CardProps {
    link: string;
    prompt: string;
}

export default function Card({link,prompt,}:CardProps) {

    return (
    <div className="card">
        <img src={link} alt=""/> 
        <div className="hide">
            Prompt: {prompt} 
        </div>
    </div>
    )
}
