'use client'
import { useState, useEffect } from 'react';
import LoadingScreen from './loading';

import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         {isLoading && <LoadingScreen />}
         {children}
      </>
   );
}