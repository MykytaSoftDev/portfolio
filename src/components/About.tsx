


import { motion } from 'framer-motion';
import { Code, Database, Server, Zap } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from './ui/card';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: '4+ Years', description: 'Experience' },
    { icon: Server, label: '10+', description: 'Projects Built' },
    { icon: Database, label: '5+', description: 'Technologies' },
    { icon: Zap, label: 'Always', description: 'Learning' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border-white/20 dark:border-slate-600/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Software Engineer with a Passion for Backend Development
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a Software Engineer with 4+ years of experience, specializing in backend development with NestJS and Node.js.
                    Proficient in building scalable APIs, optimizing database performance (PostgreSQL, MySQL), and integrating
                    payment systems. Experienced in authentication strategies, and microservices architecture.
                  </p>

                  <p>
                    I have strong front-end skills with React and Next.js, including SSR and SEO optimization. Throughout my career,
                    I've worked with diverse technologies including Ruby on Rails, Laravel, and various frameworks, allowing me to
                    adapt to different project requirements and team preferences.
                  </p>

                  <p>
                    My experience includes optimizing API performance, building and customizing CMS plugins, integrating payment gateways,
                    and implementing caching strategies using Redis. I'm passionate about writing clean, maintainable code and following
                    best practices to deliver high-quality solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white/70 to-white/50 dark:from-slate-800/70 dark:to-slate-700/50 backdrop-blur-sm border-white/20 dark:border-slate-600/20">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
