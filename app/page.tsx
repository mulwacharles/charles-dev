import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-16 max-w-2xl mx-auto">
      {/* 1. Header Section */}
      <section>
        <h1 className="text-4xl font-bold text-[#00d1b2] mb-8">About</h1>
        <p className="text-lg text-zinc-300 leading-relaxed mb-6">
          👋 Hey there! I'm Charles, a developer focused on building modern web experiences.
          I focus on details and I'm passionate about crafting software 
          products that look great and are both accessible and easy to maintain.
        </p>
        {/* Profile Image */}
<figure className="my-8 space-y-2">
  <div className="w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 relative group">
    <img 
      src="/optimized_under_2mb.jpg" 
      alt="Charles portrait" 
      className="w-full h-full object-cover object-[25%_center] transition-transform duration-700 group-hover:scale-105"
    />
  </div>
  <figcaption className="text-center text-sm text-zinc-500 italic font-medium tracking-tight">
    In Nairobi, Kenya — Jan '26
  </figcaption>
</figure>
      </section>

      {/* 2. Connect Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Connect</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <SocialLink icon={<Github size={18}/>} label="GitHub" href="https://github.com/mulwacharles" />
          <SocialLink icon={<Linkedin size={18}/>} label="LinkedIn" href="#" />
          <SocialLink icon={<Twitter size={18}/>} label="Twitter" href="#" />
          <SocialLink icon={<Instagram size={18}/>} label="Instagram" href="#" />
          <SocialLink icon={<Mail size={18}/>} label="Email" href="mailto:charles@example.com" />
        </div>
      </section>

      {/* 3. Experience Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Experience</h2>
          <button className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-bold uppercase tracking-wider transition border border-white/5">
            Resume
          </button>
        </div>
        
        <div className="space-y-8">
          <ExperienceItem 
            company="Britech Computers LTD" 
            role="Lead Manager" 
            date="Sep 2023 — Present" 
          />
          <ExperienceItem 
            company="Machakos County Government" 
            role="Intern - IT Support" 
            date="June 2022 - August 2022" 
          />
          <ExperienceItem 
            company="Co-Impact Org" 
            role="Frontend Tech Lead" 
            date="Jan 2020 — Aug 2020" 
          />
        </div>
      </section>

      {/* 4. Activity Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ActivityCard 
            title="LAST PLAYED" 
            item="Eras of Us" 
            sub="Fletcher" 
          />
          <ActivityCard 
            title="READING" 
            item="Make It Stick" 
            sub="15.85% completed" 
          />
        </div>
      </section>
    </div>
  );
}

/**
 * Sub-components for cleaner code
 */

function SocialLink({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

function ExperienceItem({ company, role, date }: { company: string, role: string, date: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-zinc-800 rounded-lg border border-white/5 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="font-bold underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400 transition-colors cursor-pointer">
          {company}
        </h3>
        <p className="text-zinc-400 text-sm mt-1">{role}</p>
      </div>
      <div className="text-zinc-500 text-xs mt-1 font-medium whitespace-nowrap">{date}</div>
    </div>
  );
}

function ActivityCard({ title, item, sub }: { title: string, item: string, sub: string }) {
  return (
    <div className="p-4 bg-zinc-900/50 rounded-xl border border-white/5 flex gap-4 items-center">
      <div className="w-12 h-12 bg-zinc-800 rounded-lg flex-shrink-0" />
      <div>
        <p className="text-[10px] font-bold text-zinc-500 mb-1 uppercase tracking-[0.1em]">{title}</p>
        <p className="font-bold text-sm underline decoration-zinc-700 underline-offset-2">{item}</p>
        <p className="text-xs text-zinc-500 mt-0.5">{sub}</p>
      </div>
    </div>
  );
}