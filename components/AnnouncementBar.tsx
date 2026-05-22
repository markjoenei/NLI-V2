export default function AnnouncementBar() {
  return (
    <div className="w-full flex justify-center pt-6 px-4">
      <a
        href="#"
        className="group inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[12px] md:text-[13px] font-medium text-[#08080d] shadow-[0_1px_2px_rgba(8,8,13,0.04),0_8px_24px_-12px_rgba(8,8,13,0.15)] hover:shadow-[0_1px_2px_rgba(8,8,13,0.04),0_16px_32px_-12px_rgba(91,78,247,0.25)] transition-all duration-300"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#08080d] text-white px-2 py-0.5 text-[10px] font-semibold tracking-wider">
          <span className="relative h-1.5 w-1.5 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[#ff5d5d] pulse-soft" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#ff5d5d]" />
          </span>
          LIVE
        </span>
        <span className="hidden sm:inline">Watch how AI marketing pros use video to drive pipeline</span>
        <span className="sm:hidden">Watch AI marketers ship video</span>
        <span className="text-[#5b4ef7] inline-flex transition-transform group-hover:translate-x-0.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </div>
  );
}
