import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "1 Landing Page",
        "Basic Analytics",
        "Standard Templates",
        "Email Support",
        "Mobile Responsive",
        "Basic SEO Tools",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "5 Landing Pages",
        "Advanced Analytics",
        "Premium Templates",
        "Priority Support",
        "Mobile Responsive",
        "Advanced SEO Tools",
        "A/B Testing",
        "Custom Domains",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large businesses with advanced needs",
      features: [
        "Unlimited Landing Pages",
        "Enterprise Analytics",
        "All Templates + Custom",
        "24/7 Support",
        "Mobile Responsive",
        "Advanced SEO Suite",
        "Advanced A/B Testing",
        "Multiple Custom Domains",
        "Team Collaboration",
        "API Access",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Choose the plan that works best for you and your team. All plans
            include a 14-day free trial.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-lg border ${
                plan.highlighted
                  ? "border-primary shadow-lg scale-105 z-10 bg-primary/5"
                  : "bg-background"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`inline-flex h-11 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 text-sm text-muted-foreground">
          Need a custom plan?{" "}
          <Link
            href="#contact"
            className="font-medium text-foreground hover:underline"
          >
            Contact us
          </Link>{" "}
          for enterprise pricing.
        </div>
      </div>
    </section>
  );
}
