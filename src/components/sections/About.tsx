import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid gap-12 items-center md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Our Platform
              </h2>
              <p className="text-lg text-muted-foreground">
                TUSTA was born out of the need for a simpler way to create
                beautiful, effective landing pages. Our founders were tired of
                complicated, expensive solutions that took forever to set up and
                required technical expertise.
              </p>
              <p className="text-lg text-muted-foreground">
                We built TUSTA with simplicity and power in mind. Anyone can
                create a stunning landing page in minutes, without sacrificing
                the advanced features needed for high conversion rates and
                optimal performance.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="font-medium">10,000+ Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="font-medium">Regular Updates</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square relative rounded-xl overflow-hidden border">
              <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                <p className="text-muted-foreground">Team or Product Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
