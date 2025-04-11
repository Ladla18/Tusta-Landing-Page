"use client";
import {
  motion,
  useTransform,
  useScroll,
  useAnimationControls,
  MotionValue,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Journey = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <span className="text-white text-5xl font-normal text-center block">
        Being First Isn&apos;t Just Smart - It&apos;s Profitable
      </span>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Animation controls for each dot
  const firstDotControls = useAnimationControls();
  const secondDotControls = useAnimationControls();
  const thirdDotControls = useAnimationControls();
  const fourthDotControls = useAnimationControls();

  // Track which dots have been triggered
  const [dotsTriggered, setDotsTriggered] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  // Handle dot animations based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value > 0.05 && !dotsTriggered.first) {
        firstDotControls.start({
          scale: [0, 1.5, 1],
          opacity: [0, 1, 1],
          transition: { duration: 1, times: [0, 0.5, 1], repeat: 2 },
        });
        setDotsTriggered((prev) => ({ ...prev, first: true }));
      }

      if (value > 0.2 && !dotsTriggered.second) {
        secondDotControls.start({
          scale: [0, 1.5, 1],
          opacity: [0, 1, 1],
          transition: { duration: 1, times: [0, 0.5, 1], repeat: 2 },
        });
        setDotsTriggered((prev) => ({ ...prev, second: true }));
      }

      if (value > 0.45 && !dotsTriggered.third) {
        thirdDotControls.start({
          scale: [0, 1.5, 1],
          opacity: [0, 1, 1],
          transition: { duration: 1, times: [0, 0.5, 1], repeat: 2 },
        });
        setDotsTriggered((prev) => ({ ...prev, third: true }));
      }

      if (value > 0.65 && !dotsTriggered.fourth) {
        fourthDotControls.start({
          scale: [0, 1.5, 1],
          opacity: [0, 1, 1],
          transition: { duration: 1, times: [0, 0.5, 1], repeat: 2 },
        });
        setDotsTriggered((prev) => ({ ...prev, fourth: true }));
      }
    });

    return () => unsubscribe();
  }, [
    scrollYProgress,
    dotsTriggered,
    firstDotControls,
    secondDotControls,
    thirdDotControls,
    fourthDotControls,
  ]);

  // Adjust this value to show exactly two cards at once
  // -66% means we'll scroll through 2 sets of 2 cards (4 total)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-48%"]);

  // Create opacity animations for each card
  const firstCardOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);
  const secondCardOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    [0, 0.5, 1]
  );
  const thirdCardOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45],
    [0, 0.5, 1]
  );
  const fourthCardOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.65],
    [0, 0.5, 1]
  );

  // Line chart animation
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="relative w-full">
            {/* Timeline line */}
            <div className="absolute h-1 bg-white/30 w-full top-12 left-0"></div>

            <div className="overflow-hidden">
              <motion.div style={{ x }} className="flex w-[200%]">
                {/* First pair of cards */}
                <div className="flex w-full">
                  <TimelineCard
                    item={timelineData[0]}
                    opacity={firstCardOpacity}
                  />
                  <TimelineCard
                    item={timelineData[1]}
                    opacity={secondCardOpacity}
                  />
                </div>

                {/* Second pair of cards */}
                <div className="flex w-full">
                  <TimelineCard
                    item={timelineData[2]}
                    opacity={thirdCardOpacity}
                  />
                  <TimelineCard
                    item={timelineData[3]}
                    opacity={fourthCardOpacity}
                  />
                </div>
              </motion.div>
            </div>

            {/* Line Chart SVG */}
            <div className="absolute top-10/12 inset-0 w-full h-1/2 pointer-events-none z-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
              >
                {/* Animated line path */}
                <motion.path
                  d="M0,180 C30,185 45,175 60,182 S75,170 90,175 S105,165 120,180 S135,170 150,175 S165,160 180,168 S195,130 210,165 S225,150 240,90 S255,145 270,152 S285,142 300,149 S315,140 330,143 S345,135 360,142 S375,132 390,125 S400,130 410,50 S420,125 430,118 S440,122 450,115 S460,180 470,112 S480,118 490,110 S500,108 512,112 S525,107 540,98 S555,103 570,95 S585,98 598,88 S610,40 620,82 S630,88 640,77 S652,82 665,72 S675,78 685,68 S695,72 710,64 S725,170 740,60 S755,64 770,58 S785,62 800,65 S815,55 830,58 S840,180 855,55 S865,45 875,50 S885,42 895,45 S905,38 915,42 S925,36 935,40 S945,34 955,38 S965,32 975,35 S985,30 995,33 S1005,28 1015,30 S1025,26 1035,28 S1045,130 1055,26 S1065,22 1075,24 S1085,20 1095,22 S1105,19 1115,20 S1125,18 1135,19 S1145,17 1155,18 S1165,16 1175,17 S1185,15 1200,15"
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="2"
                  style={{
                    pathLength,
                    strokeDasharray: 1,
                    strokeDashoffset: 0,
                  }}
                />

                {/* Animated dots at year points */}
                <motion.circle
                  cx="50"
                  cy="180"
                  r="10"
                  fill="white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={firstDotControls}
                  style={{
                    opacity: useTransform(scrollYProgress, [0, 0.05], [0, 1]),
                  }}
                />
                <motion.circle
                  cx="450"
                  cy="120"
                  r="10"
                  fill="white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={secondDotControls}
                  style={{
                    opacity: useTransform(scrollYProgress, [0.1, 0.2], [0, 1]),
                  }}
                />
                <motion.circle
                  cx="800"
                  cy="65"
                  r="10"
                  fill="white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={thirdDotControls}
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [0.35, 0.45],
                      [0, 1]
                    ),
                  }}
                />
                <motion.circle
                  cx="1100"
                  cy="21"
                  r="10"
                  fill="white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={fourthDotControls}
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [0.55, 0.65],
                      [0, 1]
                    ),
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({
  item,
  opacity,
}: {
  item: TimelineItem;
  opacity: MotionValue<number>;
}) => {
  return (
    <motion.div className="w-1/2 relative px-20" style={{ opacity }}>
      {/* Year and marker */}
      <div className="mb-10 relative">
        <h2 className="text-5xl font-bold text-white ms-5">{item.year}</h2>
        <div className="absolute top-8 left-0 h-10 w-3 bg-white "></div>
      </div>

      {/* Content */}
      <div className="text-white pr-10">
        <h3 className="text-3xl font-normal mb-4">{item.title}</h3>
        <p className="text-white/90 font-normal text-justify text-lg mb-8">
          {item.description}
        </p>

        {/* Logo circles */}
        <div className="flex space-x-4">
          {item.logos.map((logo, idx) => (
            <div
              key={idx}
              className={`h-12 w-12 rounded-full flex items-center justify-center overflow-hidden ${logo.bgColor}`}
            >
              {logo.content}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Journey;

interface TimelineLogo {
  bgColor: string;
  content: React.ReactNode;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  logos: TimelineLogo[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2000",
    title: "Internet Based",
    description:
      "SEBI legalized internet-based trading platforms. Early adopters like ICICI Direct, Geojit, and Sharekhan were among the first brokers to embrace this shift — giving them a significant edge in scaling their businesses. Over time, the rest of the market was forced to catch up as internet-based trading became the industry standard due to its accessibility and ease of use.",
    logos: [
      {
        bgColor: "bg-green-500",
        content: <span className="text-white text-xs font-bold">GEOJIT</span>,
      },
      {
        bgColor: "bg-orange-500",
        content: <span className="text-white text-xs font-bold">ICICI</span>,
      },
      {
        bgColor: "bg-white",
        content: <span className="text-orange-500 text-xs font-bold">SK</span>,
      },
    ],
  },
  {
    year: "2016",
    title: "Mobile Based",
    description:
      "Brokers like Zerodha, Upstox, and Groww had a early-mover advantage by leading the shift to web & mobile-based trading — a move that helped them emerge as industry leaders. They dominate 48% of today's market participation.",
    logos: [
      {
        bgColor: "bg-green-500",
        content: <span className="text-white text-xs font-bold">GEOJIT</span>,
      },
      {
        bgColor: "bg-orange-500",
        content: <span className="text-white text-xs font-bold">ICICI</span>,
      },
      {
        bgColor: "bg-white",
        content: <span className="text-orange-500 text-xs font-bold">SK</span>,
      },
    ],
  },
  {
    year: "2019",
    title: "E-KYC",
    description:
      "SEBI legalized E-KYC for online account opening. 149 million new accounts have been opened since then.",
    logos: [
      {
        bgColor: "bg-green-500",
        content: <span className="text-white text-xs font-bold">GEOJIT</span>,
      },
      {
        bgColor: "bg-orange-500",
        content: <span className="text-white text-xs font-bold">ICICI</span>,
      },
      {
        bgColor: "bg-white",
        content: <span className="text-orange-500 text-xs font-bold">SK</span>,
      },
    ],
  },
  {
    year: "2025",
    title: "Algo Trading",
    description:
      "SEBI legalizes Algo Trading for retail investors for the first time — marking the biggest market shift since 2000. Leading brokers like Zerodha have already begun rolling out their platforms. As automation becomes the new standard, every broker will be expected to offer intelligent, compliant trading solutions. Those who move early will gain a edge in this pivotal transformation.",
    logos: [
      {
        bgColor: "bg-green-500",
        content: <span className="text-white text-xs font-bold">GEOJIT</span>,
      },
      {
        bgColor: "bg-orange-500",
        content: <span className="text-white text-xs font-bold">ICICI</span>,
      },
      {
        bgColor: "bg-white",
        content: <span className="text-orange-500 text-xs font-bold">SK</span>,
      },
    ],
  },
];
