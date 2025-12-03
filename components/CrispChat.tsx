'use client';

import { useEffect } from 'react';

export default function CrispChat() {
  useEffect(() => {
    // Initialize Crisp
    if (typeof window !== 'undefined') {
      (window as any).$crisp = [];
      (window as any).CRISP_WEBSITE_ID = "682c8272-e9dd-4cdf-b031-3a91056ab984";

      const script = document.createElement("script");
      script.src = "https://client.crisp.chat/l.js";
      script.async = true;
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }, []);

  return null;
}
