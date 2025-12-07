import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [cursorVariant, setCursorVariant] = useState("default");

    // Mouse position state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for the trailing ring
    const ringX = useSpring(mouseX, { stiffness: 200, damping: 20 });
    const ringY = useSpring(mouseY, { stiffness: 200, damping: 20 });

    useEffect(() => {
        const mouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const mouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setCursorVariant("text");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", mouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", mouseOver);
        };
    }, []);

    const dotVariants = {
        default: {
            height: 8,
            width: 8,
            backgroundColor: "var(--accent-primary)",
            mixBlendMode: "normal"
        },
        text: {
            height: 8,
            width: 8,
            backgroundColor: "var(--accent-primary)",
            mixBlendMode: "normal"
        }
    };

    const ringVariants = {
        default: {
            height: 32,
            width: 32,
            border: "2px solid var(--accent-primary)",
            backgroundColor: "transparent",
            opacity: 1
        },
        text: {
            height: 64,
            width: 64,
            border: "2px solid var(--accent-primary)",
            backgroundColor: "transparent",
            opacity: 0.5
        }
    };

    return (
        <>
            {/* Trailing Ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    translateX: ringX,
                    translateY: ringY,
                    // Center the ring on the cursor coordinates (offset by radius)
                    marginLeft: -16,
                    marginTop: -16,
                    borderRadius: "50%",
                    pointerEvents: 'none',
                    zIndex: 9998
                }}
                variants={ringVariants}
                animate={cursorVariant}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Main Dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    translateX: mouseX,
                    translateY: mouseY,
                    // Center the dot
                    marginLeft: -4,
                    marginTop: -4,
                    borderRadius: "50%",
                    pointerEvents: 'none',
                    zIndex: 9999
                }}
                variants={dotVariants}
                animate={cursorVariant}
            />
        </>
    );
};

export default CustomCursor;
