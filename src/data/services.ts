export type Service = {
  title: string;
  summary: string;
  includes: string[];
};

export const services: Service[] = [
  {
    title: "Social Media Consulting",
    summary:
      "Strategic guidance to sharpen content direction, improve consistency, and convert views into meaningful business results.",
    includes: [
      "Content strategy roadmap",
      "Audience growth planning",
      "Platform-specific optimization"
    ]
  },
  {
    title: "Full-Production Videography",
    summary:
      "From concept to final edit, we handle production end-to-end so your brand looks polished and trustworthy.",
    includes: [
      "Creative direction and scripting",
      "On-site filming and audio capture",
      "Editing, color grading, and delivery"
    ]
  },
  {
    title: "Customer Testimonial Films",
    summary:
      "Capture credible customer stories that build trust quickly and help potential clients choose your business with confidence.",
    includes: [
      "Interview prep and prompts",
      "Story-driven editing",
      "Short and long-form cutdowns"
    ]
  },
  {
    title: "Weddings & Family Events",
    summary:
      "Thoughtful event coverage with cinematic edits that preserve meaningful moments for years to come.",
    includes: [
      "Wedding day highlights",
      "Family celebration coverage",
      "Private online delivery"
    ]
  }
];
