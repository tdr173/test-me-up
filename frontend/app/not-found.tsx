"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.back()}>Go back</button>
    </>
  );
}
