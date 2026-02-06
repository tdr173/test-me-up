"use client";

import { useRouter } from "next/navigation";

export default function Start() {
  const router = useRouter();

  return (
    <div>
      <input type="number"></input>
      <button onClick={() => router.push("/quizzes")}>Start</button>
    </div>
  );
}
