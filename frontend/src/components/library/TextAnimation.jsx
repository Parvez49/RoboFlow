import React, {useState,useEffect} from 'react';


const textList = ['developers', 'machine learning engineers', 'data scientists'];

const TextAnimation = () => {

    const [currentText, setCurrentText] = useState('');
    const [fullText, setFullText] = useState(textList[0]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const typingSpeed = isDeleting ? 25 : 75;

    useEffect(() => {
        const handleTyping = () => {
            let updatedText = isDeleting
                ? fullText.substring(0, charIndex - 1)
                : fullText.substring(0, charIndex + 1);
            setCurrentText(updatedText);
            setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), 200);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setFullText(textList[(loopNum + 1) % textList.length]);
                setCharIndex(0);
            }
        };

        const typingInterval = setTimeout(() => {
            handleTyping();
        }, typingSpeed);

        return () => clearTimeout(typingInterval);
    }, [charIndex, fullText, isDeleting, loopNum]);

    return (
        <div>
            <span className="text-purboflow-400 text-4xl font-normal">{currentText}</span>
        </div>
    );
};

export default TextAnimation;