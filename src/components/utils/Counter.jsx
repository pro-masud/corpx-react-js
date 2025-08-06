import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { useInView } from "react-intersection-observer";

const Counter = ({ number, suffix = '', text, delay = '.8s' }) => {
    const [odometerValue, setOdometerValue] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
        setTimeout(() => {
            setOdometerValue(parseFloat(number).toFixed(2));
        }, 1000);
        }
    }, [inView, number]);
    
  return (
    <>
        <div ref={ref} className="meta-box wow fadeInUp" data-wow-delay={delay}>
            <div className="counter">
                <Odometer  value={odometerValue} format="(,ddd).ddd" /> {suffix}
            </div>
            <p className="text">{text}</p>
        </div>
    </>
  )
}

const SingleCounter = ({value}) => {
    const [odometerValue, setOdometerValue] = useState(0);
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.3,
        });

        useEffect(() => {
            if (inView) {
            setTimeout(() => {
                setOdometerValue(value);
            }, 1000);
            }
        }, [inView, value]);

    return (
        <>
            <span ref={ref} className="counter-number">
                <Odometer  value={odometerValue} format="(,ddd).ddd" />
            </span>
        </>
    )
}

const SingleItemCounter = ({ value, tags = "h6" }) => {
    const [odometerValue, setOdometerValue] = useState(0);
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.3,
        });

        useEffect(() => {
            if (inView) {
            setTimeout(() => {
                setOdometerValue(value);
            }, 1000);
            }
        }, [inView, value]);

    const Tag = tags;

    return (
        <Tag ref={ref}>
            <Odometer value={odometerValue} format="(,ddd).ddd" />%
        </Tag>
    );
}

export {Counter, SingleCounter, SingleItemCounter}