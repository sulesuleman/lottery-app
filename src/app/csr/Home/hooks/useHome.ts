import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const useHome = () => {
     const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [magnifiedLottery, setMagnifiedLottery] = useState({
        cosmic: false,
        classic: false,
        automic: false,
    });
    const [expanded, setExpanded] = useState({
        cosmic: false,
        classic: false,
        automic: false,
    });

    useEffect(() => {
        if (localStorage && localStorage.getItem('authenticated') === 'true') {
            setIsAuthenticated(true);
        } else setIsAuthenticated(true);
    }, [])

  return {
    router, 
    isAuthenticated,
    magnifiedLottery,
    expanded,
    setExpanded,
    setMagnifiedLottery
  }
}

export default useHome;