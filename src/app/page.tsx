import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Portfolio from '@/components/SharedComponent/portfollio'
import Services from '@/components/Home/Skills/Services';
import ServicesStack from '@/components/Home/Services/ServicesStack';
import ContactME from '@/components/Home/contact/Contact';
import About from '@/components/Home/about';
export const metadata: Metadata = {
  title: "aqil",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <ServicesStack/>
      <Services/>
      <Portfolio/>
      <ContactME/>      
    </main>
  )
}
