"use client"
import React, { useRef, useEffect } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    const imageRef = useRef(); 

    useEffect(() => {
        const imageElement = imageRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if (scrollPosition > scrollThreshold)
                imageElement.classList.add("scrolled");
            else
                imageElement.classList.remove("scrolled");
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); 

    return (
        <div className="pb-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                    Manage Your Finances <br /> with intelligence
                </h1>
                <p>
                    An AI-powered platform where you can track and manage your expenses
                </p>
                <div>
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8">Get Started</Button>
                    </Link>
                </div>
                <div  className="hero-image-wrapper">
                    <Image
                        src="/Front.png"
                        width={1280}
                        height={720}
                        alt="Dashboard Preview"
                        ref={imageRef}
                        className="hero-image rounded-lg shadow-2x1 border mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;