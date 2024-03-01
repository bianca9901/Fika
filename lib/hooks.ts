"use client";
import { useEffect, useState } from "react";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

/**
 * useSectioninView is a Custom hook to detect if a section is in view based on
 * the provided threshold.
 * - It uses the react-intersection-observer library.
 * - This hook updates the active section in the context when the section comes
 * into view, ensuring a delay of 1 second after the last click event.
 **/
export function useSectionInView(sectionName: SectionName, threshold = 0.2) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

/**
 * useScrollDirection is a custom hook to detect the scroll direction.
 * - It tracks the window scroll position and updates the scroll direction state
 * accordingly.
 **/
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("none");

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
}
