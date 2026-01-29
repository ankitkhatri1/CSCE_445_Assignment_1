"use client"

export default function ChallengeSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-2 overflow-hidden flex justify-start items-center bg-background border border-b border-l-0 border-r-0 border-t-0">
        <div className="flex-1 py-12 md:py-14 flex flex-col justify-center items-center gap-8">
          {/* Title */}
          <div className="px-3 md:px-12 w-full">
            <h2 className="text-[#49423D] text-2xl md:text-3xl font-medium leading-tight font-sans">
              Content Creation Challenge
            </h2>
          </div>

          {/* ur mom */}

          {/* Content */}
          <div className="self-stretch px-3 md:px-12">
            <p className="text-[rgba(73,66,61,0.85)] text-sm font-medium leading-7 font-sans">
              A challenge I face when creating content on TikTok is that the platform is designed around extremely fast-paced, highly stimulating editing styles. Content that is slower or more reflective tends to feel out of place, which creates pressure to adopt a more "brain-rot" style of editing to keep users more hooked and falsesly engaged.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
