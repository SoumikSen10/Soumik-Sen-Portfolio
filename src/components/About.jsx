import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Building full-stack applications with the MERN stack has been an incredible journey, allowing me to design scalable and efficient solutions for real-world problems.",
      name: "Full Stack Development",
      designation: "Using MERN stack",
      src: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Exploring machine learning has opened up a world of opportunities to create data-driven solutions, bridging the gap between raw data and actionable insights.",
      name: "Machine Learning",
      designation: "ML Enthusiast",
      src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Deep learning fascinates me with its ability to mimic human intelligence, and I'm currently diving deeper into neural networks to build impactful AI models.",
      name: "Deep Learning",
      designation: "Currently exploring",
      src: "https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Through leadership roles and tech-club events, I've developed skills in teamwork, communication, and problem-solving, which I’ve showcased during hackathons and group projects.",
      name: "Leadership and Management",
      designation: "Showcased in tech-clubs and hackathons",
      src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Beyond tech, I love exploring ancient and medieval history as well as geopolitics. I also love playing chess in my free time to unwind and relax.",
      name: "Extra-Curricular Activities",
      designation: "Interests other than tech",
      src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
