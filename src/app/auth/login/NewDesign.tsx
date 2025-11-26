"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginWithPanda() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftPupilRef = useRef<HTMLDivElement | null>(null);
  const rightPupilRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState("login");
  const [isFocused, setIsFocused] = useState(false);

  // 👁️ Eyes follow cursor
  useEffect(() => {
    function onMove(e: MouseEvent | TouchEvent) {
      if (!containerRef.current) return;

      const mouseX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const mouseY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const left = leftPupilRef.current?.getBoundingClientRect();
      const right = rightPupilRef.current?.getBoundingClientRect();
      if (!left || !right) return;

      const moveEye = (
        eye: DOMRect,
        elRef: React.RefObject<HTMLDivElement | null>
      ) => {
        if (!elRef.current) return;
        const el = elRef.current;

        const cx = eye.left + eye.width / 2;
        const cy = eye.top + eye.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const maxDist = 8;
        const ux = dx / dist;
        const uy = dy / dist;
        el.style.transform = `translate(${ux * maxDist}px, ${uy * maxDist}px)`;
      };

      moveEye(left, leftPupilRef);
      moveEye(right, rightPupilRef);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* 🐼 Panda Illustration */}
        <div className="flex items-center justify-center">
          <motion.div
            ref={containerRef}
            className="relative w-72 h-72 flex items-center justify-center"
            animate={{ y: isFocused ? [0, -6, 0] : [0, -2, 0] }}
            transition={{
              duration: isFocused ? 0.6 : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Panda Face */}
            <motion.svg
              viewBox="0 10 200 200"
              className="w-full h-full drop-shadow-xl"
              animate={{ rotate: isFocused ? [0, 2, -2, 0] : [0, 1, -1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="#FFFFFF"
                stroke="#E5E7EB"
                strokeWidth="2"
              />
              <circle cx="50" cy="30" r="28" fill="#1F2937" />
              <circle cx="150" cy="30" r="28" fill="#1F2937" />
              <ellipse cx="70" cy="95" rx="24" ry="32" fill="#1F2937" />
              <ellipse cx="130" cy="95" rx="24" ry="32" fill="#1F2937" />
              <path
                d="M95 120 Q100 112 105 120"
                stroke="#1F2937"
                strokeWidth="3"
              />
              <circle cx="100" cy="112" r="5" fill="#1F2937" />
              <path
                d="M78 138 Q100 158 122 138"
                stroke="#1F2937"
                strokeWidth="4"
                fill="none"
              />
            </motion.svg>

            {/* Pupils */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-full">
              <div
                ref={leftPupilRef}
                className="absolute w-5 h-5 bg-black rounded-full"
                style={{ left: "calc(35% - 10px)", top: "46%" }}
              >
                <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div
                ref={rightPupilRef}
                className="absolute w-5 h-5 bg-black rounded-full"
                style={{ left: "calc(65% - 10px)", top: "46%" }}
              >
                <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              {mode === "login" ? "Welcome Back!" : "Join Us!"}
            </h2>
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="text-sm bg-gradient-to-r from-blue-500 to-purple-400 text-white px-4 py-2 rounded-full hover:scale-105 duration-300"
            >
              {mode === "login" ? "Sign Up" : "Log In"}
            </button>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl"
                  placeholder="Your name"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl"
                placeholder="you@email.com"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl"
                placeholder="••••••••"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold shadow-lg">
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
