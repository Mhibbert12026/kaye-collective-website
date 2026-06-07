"use client";

import { useEffect } from "react";

/** Legacy /speaking URL → homepage #speaking section */
export default function SpeakingPage() {
  useEffect(() => {
    window.location.replace("/#speaking");
  }, []);

  return null;
}
