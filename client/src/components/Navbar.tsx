import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full bg-background z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          SJ
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          <Button asChild variant="default" className="flex items-center gap-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download size={16} />
              Resume
            </a>
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button onClick={toggleMobileMenu} className="md:hidden text-primary focus:outline-none">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-background px-6 py-4 shadow-md transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          <a href="#home" onClick={closeMobileMenu} className="text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" onClick={closeMobileMenu} className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#skills" onClick={closeMobileMenu} className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#experience" onClick={closeMobileMenu} className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
          <a href="#projects" onClick={closeMobileMenu} className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#contact" onClick={closeMobileMenu} className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          <Button asChild variant="default" className="flex items-center gap-2 w-full justify-center">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download size={16} className="mr-2" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
