import { useState, useEffect } from 'react';
function ProgressBar() {
    //Width State
    const [width, setWidth] = useState(0);
    // scroll function
    const scrollHeight = () => {
        var el = document.documentElement,
            ScrollTop = el.scrollTop || document.body.scrollTop,
            ScrollHeight = el.scrollHeight || document.body.scrollHeight;
        var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
        // store percentage in state
        setWidth(percent);
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHeight);
        return () => window.removeEventListener("scroll", scrollHeight);
    });

    return <div style={{ width: width + "%" }} className='relative h-1 border-1 rounded-full bg-[#6d6d6d] bg-opacity-90' ></div>;
}
export default ProgressBar;