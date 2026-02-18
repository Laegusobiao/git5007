import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Play, UserPlus } from "lucide-react"; // อย่าลืมลง lucide-react หรือถ้าไม่มีให้ลบบรรทัดไอคอนออก

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans text-white">
      {/* --- Header / Navigation --- */}
      <header className="flex w-full items-center justify-between px-8 py-6">
        {/* Left: Logo (ว่างไว้หรือใส่ชื่อเว็บ) */}
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

        {/* Right: Sign Up Button */}
        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6">
          <UserPlus className="mr-2 h-4 w-4" /> Sign up
        </Button>
      </header>

      {/* --- Main Content --- */}
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        
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
            <h3 className="text-lg font-semibold uppercase tracking-tighter">Preview Tracks</h3>
            <span className="text-xs text-red-600 cursor-pointer hover:underline">View all</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group aspect-square overflow-hidden rounded-lg bg-zinc-900 transition-all hover:bg-zinc-800">
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
      </main>

      {/* --- Footer Decoration --- */}
      <footer className="py-10 text-center text-[10px] text-zinc-600">
        © 2026 MUSIC INTERFACE | DESIGNED FOR 4w5 SPIRIT
      </footer>
    </div>
  );
}