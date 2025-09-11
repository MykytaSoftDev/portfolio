import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { ThemeProvider } from './contexts/theme-context';
import './index.css';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              © 2024 Nick. Built with React, TypeScript, and TailwindCSS.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
