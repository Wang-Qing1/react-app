// DynamicClock.js

import {useEffect, useRef, useState} from "react";
import moment from "moment";

/**
 * 动态时钟
 */
const DynamicClock = () => {
  const [nowTime, setNowTime] = useState(moment().format('yyyy-MM-DD HH:mm:ss'));
  // 创建 ref 对象
  const timerRef = useRef(-1);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setNowTime(moment().format('yyyy-MM-DD HH:mm:ss'))
    },1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return <label>{nowTime}</label>
};

export { DynamicClock };