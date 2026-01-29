"use client"

export default function MediaList() {
  const consumerMedia = [
    {
      category: "Moving Images",
      items: [
        { name: "Television", specifics: ["Drama Series", "Sitcoms"] },
        { name: "YouTube", specifics: ["Cooking Shows", "Food Reviews"] },
        { name: "Streaming Services", specifics: ["Netflix", "Hulu"] },
      ],
    },
    {
      category: "Music",
      items: [
        { name: "Streaming (Spotify)", specifics: ["Hip Hop", "R&B", "Indie"] },
      ],
    },
    {
      category: "Social Media",
      items: [
        { name: "TikTok", specifics: [] },
        { name: "Instagram", specifics: ["Stories", "Reels", "Posts"] },
      ],
    },
    {
      category: "Games",
      items: [
        { name: "Video Games", specifics: ["Mobile Games", "Console Games"] },
      ],
    },
  ]

  const generatorMedia = [
    {
      category: "Text-Based",
      items: [
        { name: "Email", specifics: ["Professional Communication"] },
        { name: "Messaging Apps", specifics: ["iMessage"] },
      ],
    },
    {
      category: "Still Images",
      items: [
        { name: "Photography", specifics: ["Film", "Instagram"] },
      ],
    },
    {
      category: "Moving Images",
      items: [
        { name: "Video Content", specifics: ["TikTok"] },
      ],
    },
    
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-2 overflow-hidden flex justify-start items-center bg-background border border-b border-l-0 border-r-0 border-t-0">
        <div className="flex-1 py-12 md:py-14 flex flex-col justify-center items-center gap-8">
          {/* Title */}
          <div className="px-3 md:px-12 w-full">
            <h2 className="text-[#49423D] text-2xl md:text-3xl font-medium leading-tight font-sans">
              Media Usage Analysis
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="self-stretch px-3 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Consumer Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[#49423D] text-xl font-medium leading-tight font-sans border-b border-[rgba(55,50,47,0.12)] pb-2">
                Consumer
              </h3>
              {consumerMedia.map((category, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h4 className="text-[rgba(73,66,61,0.90)] text-base font-medium leading-tight font-sans">
                    {category.category}
                  </h4>
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col gap-1 pl-4">
                      <p className="text-[rgba(73,66,61,0.85)] text-sm font-medium leading-tight font-sans">
                        • {item.name}
                      </p>
                      {item.specifics.map((specific, specIdx) => (
                        <p key={specIdx} className="text-[rgba(73,66,61,0.70)] text-xs leading-tight font-sans pl-4">
                          - {specific}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Generator Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[#49423D] text-xl font-medium leading-tight font-sans border-b border-[rgba(55,50,47,0.12)] pb-2">
                Generator
              </h3>
              {generatorMedia.map((category, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h4 className="text-[rgba(73,66,61,0.90)] text-base font-medium leading-tight font-sans">
                    {category.category}
                  </h4>
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col gap-1 pl-4">
                      <p className="text-[rgba(73,66,61,0.85)] text-sm font-medium leading-tight font-sans">
                        • {item.name}
                      </p>
                      {item.specifics.map((specific, specIdx) => (
                        <p key={specIdx} className="text-[rgba(73,66,61,0.70)] text-xs leading-tight font-sans pl-4">
                          - {specific}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
