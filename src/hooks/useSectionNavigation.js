import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Custom hook for managing section navigation with intersection observer
 * - Handles both manual navigation and scroll-based section detection
 * - When manual navigation is triggered, scroll-based detection is paused
 */

const useSectionNavigation = ({
  selector = 'section[id]', // default selector for sections
  scrollDuration = 1000, // default scroll duration
  } = {}) => {

  const [selectedSection, setSelectedSection] = useState("home");
  const navigationInProgress = useRef(false);

  // Manual navigation (click in navbar)
  const navigateToSection = useCallback((sectionId) => {
    navigationInProgress.current = true;
    setSelectedSection(sectionId);
    
    // Reset after animation completes
    const cleanup = () => {
      navigationInProgress.current = false;
    };

    // Trigger cleanup once scroll animation completes
    // -- Use scrollend if available, otherwise use timeout (scrollDuration = default 1 second)
    const supportsScrollend = 'onscrollend' in window;
    if (supportsScrollend) {
      window.addEventListener('scrollend', cleanup, { once: true });
    } else {
      setTimeout(cleanup, scrollDuration);
    }
  }, [scrollDuration]);

  // Handler for scroll-based section detection 
  const handleSectionChange = useCallback((sectionId) => {
    if (navigationInProgress.current) return;
    setSelectedSection(sectionId);
  }, []);
  
  useEffect(() => {
    // Intersection Observer Setup
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px",
      threshold: 0.1
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            handleSectionChange(entry.target.id);
          }
        });
      },
      observerOptions
    );

    // Observe all sections
    document.querySelectorAll(selector).forEach(
      section => observer.observe(section)
    );

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [handleSectionChange, selector]);

  return {
    selectedSection,
    navigateToSection
  };
};

export default useSectionNavigation;