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
  }
];
