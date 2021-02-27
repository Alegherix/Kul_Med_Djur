import { useLayoutEffect, useEffect } from 'react';

// Used to fix errors with useLayoutEffect complaining about SSR
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
