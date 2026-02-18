"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Play,
  UserPlus,
  Eye,
  EyeOff,
  LogOut,
  ArrowLeft,
} from "lucide-react";

export default function Home() {
  // --- State ---
  const [currentView, setCurrentView] = useState<"home" | "signup">("home");
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  // --- Handlers ---
  const handleSignUpClick = () => {
    if (!user) {
      setCurrentView("signup");
      setError("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setShowPassword(false);
      setShowConfirmPassword(false);
    }
  };

  const handleRegister = () => {
    if (!username.trim()) {
      setError("กรุณากรอก Username");
      return;
    }
    if (!password) {
      setError("กรุณากรอก Password");
      return;
    }
    if (password.length < 4) {
      setError("Password ต้องมีอย่างน้อย 4 ตัวอักษร");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password ไม่ตรงกัน");
      return;
    }
    setUser({ username: username.trim() });
    setCurrentView("home");
    setError("");
  };

  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false);
  };

  // --- Signup Form View ---
  const renderSignupForm = () => (
    <div className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl backdrop-blur-sm">
        {/* Back button */}
        <button
          onClick={() => setCurrentView("home")}
          className="mb-6 flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          กลับหน้าหลัก
        </button>

        <h2 className="mb-2 text-center text-2xl font-bold text-white">
          สมัครสมาชิก
        </h2>
        <p className="mb-8 text-center text-sm text-zinc-500">
          สร้างบัญชีเพื่อเข้าใช้งาน BEAT
        </p>

        {/* Error message */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-600/20 px-4 py-2 text-sm text-red-400 border border-red-600/30">
            {error}
          </div>
        )}

        {/* Username */}
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-zinc-300">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="กรอก Username"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-red-600 focus:outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium text-zinc-300">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรอก Password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 pr-10 text-sm text-white placeholder:text-zinc-500 focus:border-red-600 focus:outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="mb-1.5 block text-sm font-medium text-zinc-300">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="ยืนยัน Password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 pr-10 text-sm text-white placeholder:text-zinc-500 focus:border-red-600 focus:outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Register Button */}
        <Button
          onClick={handleRegister}
          className="w-full rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition"
        >
          Register
        </Button>
      </div>
    </div>
  );

  // --- Home Main Content ---
  const renderHomeContent = () => (
    <>
      {/* Big Circular Play Button */}
      <div className="group relative flex items-center justify-center">
        {/* Effect วงกลมซ้อนหลัง (Glow) */}
        <div className="absolute h-48 w-48 animate-pulse rounded-full bg-red-600/20 blur-xl"></div>

        {/* Main Button */}
        <button className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white text-red-600 shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-transform hover:scale-110 active:scale-95">
          <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-red-600 bg-white">
            <Play size={60} fill="currentColor" className="ml-2" />
          </div>
        </button>
      </div>

      <h2 className="mt-8 text-xl font-light tracking-widest text-zinc-400 uppercase">
        Press to Play
      </h2>

      {/* --- Bottom Preview Section (Squares) --- */}
      <section className="mt-20 w-full max-w-5xl">
        <div className="mb-6 flex items-center justify-between border-b border-zinc-800 pb-2">
          <h3 className="text-lg font-semibold uppercase tracking-tighter">
            Preview Tracks
          </h3>
          <span className="text-xs text-red-600 cursor-pointer hover:underline">
            View all
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="group aspect-square overflow-hidden rounded-lg bg-zinc-900 transition-all hover:bg-zinc-800"
            >
              <div className="flex h-full flex-col items-center justify-center p-4">
                <div className="mb-3 h-3/4 w-full rounded bg-zinc-800 shadow-lg group-hover:bg-red-950 transition-colors">
                  {/* ตรงนี้ใส่รูป Album Art ได้ */}
                </div>
                <div className="h-2 w-2/3 rounded bg-zinc-700 group-hover:bg-red-600"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return (
    <div className="flex min-h-screen flex-col bg-black font-sans text-white">
      {/* --- Header / Navigation --- */}
      <header className="flex w-full items-center justify-between px-8 py-6">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-red-600">BEAT</div>

        {/* Center: Search Bar */}
        <div className="relative flex w-full max-w-md items-center">
          <Search className="absolute left-3 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="ค้นหาเพลง, ศิลปิน..."
            className="w-full rounded-full bg-zinc-900 py-2 pl-10 pr-4 text-sm border border-zinc-800 focus:outline-none focus:border-red-600 transition"
          />
        </div>

        {/* Right: Sign Up / Avatar */}
        {user ? (
          // --- Logged in: Avatar with dropdown ---
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white uppercase transition hover:bg-red-700 ring-2 ring-red-600/50"
            >
              {user.username.charAt(0)}
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <>
                {/* Backdrop to close dropdown */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowDropdown(false)}
                />
                <div className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl">
                  <div className="border-b border-zinc-800 px-4 py-3">
                    <p className="text-sm font-medium text-white">
                      {user.username}
                    </p>
                    <p className="text-xs text-zinc-500">สมาชิก</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-400 transition hover:bg-zinc-800 hover:text-red-300"
                  >
                    <LogOut className="h-4 w-4" />
                    ออกจากระบบ
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          // --- Not logged in: Sign Up button ---
          <Button
            onClick={handleSignUpClick}
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6"
          >
            <UserPlus className="mr-2 h-4 w-4" /> Sign up
          </Button>
        )}
      </header>

      {/* --- Main Content --- */}
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        {currentView === "signup" ? renderSignupForm() : renderHomeContent()}
      </main>

      {/* --- Footer Decoration --- */}
      <footer className="py-10 text-center text-[10px] text-zinc-600">
        © 2026 MUSIC INTERFACE | DESIGNED FOR 4w5 SPIRIT
      </footer>
    </div>
  );
}
