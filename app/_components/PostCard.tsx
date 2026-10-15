import Link from "next/link";
import { FeedPost, postKindStyles } from "@/app/_data/feed";

function MegaphoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="#E0654A"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" />
    </svg>
  );
}

export default function PostCard({ post }: { post: FeedPost }) {
  const style = postKindStyles[post.kind];

  return (
    <div className="bg-[#FFFDF9] border border-[#ECE0D0] rounded-[20px] p-[20px_22px] shadow-[0_4px_16px_-12px_rgba(120,90,60,0.5)]">
      <div className="flex items-center gap-3 mb-[14px]">
        <div
          className="w-11 h-11 rounded-full font-display font-semibold text-[17px] flex items-center justify-center flex-none"
          style={{ background: style.avatarBg, color: style.avatarText }}
        >
          {post.kind === "announcement" ? <MegaphoneIcon /> : post.authorInitial}
        </div>
        <div className="flex-1">
          <div className="font-display font-semibold text-[16.5px] text-[#3F362E]">
            {post.authorName}
          </div>
          <div className="text-[12.5px] text-[#A89A8B]">
            {post.time} · {post.postedBy}
          </div>
        </div>
        <div
          className="flex items-center gap-[7px] py-1.5 px-3 rounded-full"
          style={{ background: style.pill }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: style.dot }}
          />
          <span
            className="text-xs font-extrabold tracking-[0.5px]"
            style={{ color: style.text }}
          >
            {style.label}
          </span>
        </div>
      </div>

      <div className="text-[12.5px] text-[#A89A8B] mb-[10px]">
        {post.audience}
      </div>

      <p className="text-[15.5px] leading-[1.55] text-[#4A4038] m-0">
        {post.body}
      </p>

      {post.photo && (
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-2 mt-[14px] border-[1.5px] border-dashed border-[#DBCDBA] rounded-2xl bg-[#F4ECE1] h-[200px] text-[#B0A290]"
        >
          <ImageIcon />
          <span className="text-[13.5px]">{post.photo.label}</span>
        </a>
      )}

      <div className="flex items-center gap-[18px] mt-4 pt-[14px] border-t border-[#F0E6D8]">
        <span className="flex items-center gap-[7px] text-[#E0654A] font-bold text-sm">
          <HeartIcon />
          {post.likes}
        </span>
        <Link
          href="#"
          className="flex items-center gap-[7px] text-[#94887B] font-bold text-sm"
        >
          <CommentIcon />
          {post.comments}
        </Link>
        <span className="flex-1" />
        <Link href="#" className="text-[#C5503A] font-extrabold text-sm">
          Editar
        </Link>
      </div>
    </div>
  );
}
