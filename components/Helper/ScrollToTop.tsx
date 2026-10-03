'use client'
import React from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 cursor-pointer"
            >
              ↑
            </button>
          )}
        </div>
    )
}

export default ScrollToTop
