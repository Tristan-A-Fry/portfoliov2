
"use client";
import React, { useEffect } from "react";
import { animate, motion } from "motion/react";
import { cn } from "../../lib/utils";

export function FeatureCard({ title, description, icons = [] }) {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton icons={icons} />
      </CardSkeletonContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}

const Skeleton = ({ icons }) => {
  useEffect(() => {
    const sequence = icons.map((_, i) => [
      `.circle-${i + 1}`,
      {
        scale: [1, 1.1, 1],
        transform: ["translateY(0px)", "translateY(-4px)", "translateY(0px)"],
      },
      { duration: 0.8 },
    ]);
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, [icons]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        {icons.map((Icon, index) => (
          <Container key={index} className={`circle-${index + 1}`}>
            <Icon className="h-6 w-6 dark:text-white" />
          </Container>
        ))}
      </div>
      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => (
  <div
    className={cn(
      "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[#121212] shadow-[0_0_10px_rgba(0,0,0,0.6)]",
      className
    )}
  >
    {children}
  </div>
);

export const CardTitle = ({ children, className }) => (
  <h3 className={cn("text-lg font-semibold text-white py-2", className)}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className }) => (
  <p
    className={cn(
      "text-sm font-normal text-neutral-400 max-w-sm",
      className
    )}
  >
    {children}
  </p>
);

export const CardSkeletonContainer = ({ className, children }) => (
  <div
    className={cn(
      "h-[15rem] md:h-[20rem] rounded-xl z-40",
      className,
      "bg-[#121212] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_90%)] bg-center bg-no-repeat [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
    )}
  >
    {children}
  </div>
);

const Container = ({ className, children }) => (
  <div
    className={cn(
      "h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]",
      className
    )}
  >
    {children}
  </div>
);

// Re-export logos here or import icons from react-icons
export { GoCopilot } from "react-icons/go";
export const ClaudeLogo = () => <div className="h-4 w-4 bg-orange-300 rounded-full" />;
export const OpenAILogo = () => <div className="h-6 w-6 bg-white rounded-full" />;
export const GeminiLogo = () => <div className="h-4 w-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />;
export const MetaIconOutline = () => <div className="h-6 w-6 bg-blue-500 rounded-full" />;
