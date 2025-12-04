'use client';

import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterTyping?: number;
  pauseAfterDeleting?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseAfterTyping = 2000,
  pauseAfterDeleting = 500,
}: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing mode
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Word is complete, pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterTyping);
      }
    } else {
      // Deleting mode
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Deletion complete, move to next word
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, pauseAfterDeleting);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    currentWordIndex,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseAfterDeleting,
  ]);

  return displayedText;
}
