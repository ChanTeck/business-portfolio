/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { CareerHubSection } from './components/CareerHubSection';
import { ContactSection } from './components/ContactSection';
import { CredentialsSection } from './components/CredentialsSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { MarqueeStrip } from './components/MarqueeStrip';
import { DocumentModal, ProjectModal } from './components/Modals';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { ToolkitSection } from './components/ToolkitSection';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProjectState, setSelectedProjectState] = useState<{
    project: ProjectItem | null;
    initialIndex: number;
  }>({ project: null, initialIndex: 0 });

  const [activeDoc, setActiveDoc] = useState<'resume' | 'support-letter' | null>(
    null
  );

  const handleSelectProject = (project: ProjectItem, initialIndex = 0) => {
    setSelectedProjectState({ project, initialIndex });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F3F1EA]">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection onPreviewDocument={(doc) => setActiveDoc(doc)} />
        <ToolkitSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <CredentialsSection />
        <CareerHubSection onPreviewDocument={(doc) => setActiveDoc(doc)} />
        <ContactSection onPreviewDocument={(doc) => setActiveDoc(doc)} />
      </main>
      <Footer />

      <ProjectModal
        project={selectedProjectState.project}
        initialIndex={selectedProjectState.initialIndex}
        onClose={() => setSelectedProjectState({ project: null, initialIndex: 0 })}
      />

      <DocumentModal
        activeDoc={activeDoc}
        onSelectDoc={(doc) => setActiveDoc(doc)}
        onClose={() => setActiveDoc(null)}
      />
    </div>
  );
}
