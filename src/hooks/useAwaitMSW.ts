import { useEffect, useState } from 'react';

const useAwaitMSWinit = () => {
  const [msw_load_complete, setMswLoadComplete] = useState(false);

  useEffect(() => {
    async function initMocks() {
      const { setupMocks } = await import('../mocks/api');
      await setupMocks();
      setMswLoadComplete(true);
    }

    if (!msw_load_complete) {
      initMocks();
    }
  }, [msw_load_complete]);

  return { msw_load_complete };
};

export default useAwaitMSWinit;
