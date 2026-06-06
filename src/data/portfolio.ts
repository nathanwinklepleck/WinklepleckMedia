export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  result: string;
  videoUrl?: string;
  siteUrl?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Two Guys Window Tint Testimonial Film",
    category: "Testimonial Production",
    description:
      "Customer-facing testimonial video produced for Two Guys Window Tint in Brownsburg, Indiana, focused on credibility and brand trust.",
    result: "Delivered a clear, authentic testimonial asset for website, social, and sales conversations.",
    videoUrl: "https://youtu.be/galHOoq0FsE"
  },
  {
    title: "Matthew's Woodworking Promotional Video",
    category: "Business Storytelling",
    description:
      "Brand-focused project showcasing craft, process, and finished work for Matthew's Woodworking.",
    result: "Created a polished showcase video to strengthen trust and support online visibility.",
    videoUrl: "https://youtu.be/XAx4JgEhRvI"
  },
  {
    title: "Waymaker Renovations Website",
    category: "Website Design & Build",
    description:
      "Marketing website for Waymaker Renovations, built to showcase services, trust signals, project photography, and local lead generation in Indianapolis-area markets.",
    result: "Created a clean, conversion-focused website with strong service presentation and direct contact paths.",
    siteUrl: "https://waymakerindy.com/"
  },
  {
    title: "Customer Testimonial Series",
    category: "Testimonial Production",
    description:
      "A set of customer interview videos shaped into trust-building assets for ads and sales pages.",
    result: "Clearer trust signals and increased lead form submissions."
  },
  {
    title: "Wedding Highlight Film",
    category: "Events",
    description:
      "Cinematic wedding coverage focused on real moments, family emotion, and story pacing.",
    result: "A timeless keepsake and share-ready recap for family and friends."
  },
  {
    title: "Professional Services Promo",
    category: "Commercial",
    description:
      "On-location shoot and edit package for a service business entering a new market.",
    result: "Sharper brand positioning and improved proposal close quality."
  },
  {
    title: "Community Event Recap",
    category: "Events",
    description:
      "Fast-turnaround recap video crafted for social posting and sponsor follow-up.",
    result: "Extended event visibility and stronger sponsor retention conversations."
  }
];
