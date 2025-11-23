import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calculator, Brain, Users, Calendar } from "lucide-react";

export const SimplifiedCounting = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Brain,
      title: "Cognitive Ease",
      description: "Regular, monosyllabic number systems in Chinese dialects enable faster mental math and easier comprehension for learners of all ages."
    },
    {
      icon: Calculator,
      title: "Mathematical Clarity",
      description: "Transparent number construction (e.g., 'ten-one' for 11) makes arithmetic intuitive and reduces cognitive load during calculations."
    },
    {
      icon: Users,
      title: "Universal Accessibility",
      description: "Children and second-language learners master counting and math operations significantly faster with regularized number systems."
    },
    {
      icon: Calendar,
      title: "Coordinated Transition",
      description: "A unified approach across all English dialects—marking a specific transition month—makes the switching costs manageable and worthwhile."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Simplified Counting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Beyond spelling reform lies an even deeper opportunity: revolutionizing how we count and calculate.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Research popularized by Malcolm Gladwell and cognitive scientists reveals that Chinese dialects possess superior number systems—regular, monosyllabic, and transparent in structure. These systems enable children to learn counting and mental math with remarkable speed and ease compared to English's irregular system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm border-border/50">
                  <Icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 border-secondary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              A Calmunity⁵ Effort
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Unlike spelling reform, which can be adopted gradually, number system transition requires coordinated effort. It demands cooperative listening and speaking skills across all English-speaking communities—World English, American English, and Blessed dialect speakers working together.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The switching costs are real, but manageable if we unite around a new common regularized counting standard. By marking a specific transition month and year in the future, we can make this leap together, ensuring everyone benefits from a more logical, accessible number system.
            </p>
            <div className="mt-8 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
              <p className="text-xl font-bold text-secondary mb-2">Coming Soon</p>
              <p className="text-muted-foreground">
                A detailed first-pass proposal for simplified counting is in development. This will outline the specific regularized number system, transition timeline, and implementation strategies for global adoption.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
