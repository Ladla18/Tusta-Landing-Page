import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "TUSTA transformed our online presence. We saw a 40% increase in conversions within the first month of launching our new landing page.",
      author: "Sarah Johnson",
      role: "Marketing Director, TechFlow",
      avatar: "/images/avatar-1.png",
    },
    {
      quote:
        "The ease of use is incredible. I was able to create a professional landing page in under an hour without any technical knowledge.",
      author: "Michael Chen",
      role: "Founder, Startup Innovations",
      avatar: "/images/avatar-2.png",
    },
    {
      quote:
        "Customer support is outstanding. Whenever I had a question, the team was there with a solution within minutes. Truly exceptional service.",
      author: "Emma Rodriguez",
      role: "E-commerce Manager, Retail Plus",
      avatar: "/images/avatar-3.png",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-accent/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Don't just take our word for it. See what our customers have
            achieved with TUSTA.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-lg border bg-background shadow-sm"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 inline-block text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 mb-4 italic text-lg">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <span className="text-sm font-semibold">
                    {testimonial.author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
