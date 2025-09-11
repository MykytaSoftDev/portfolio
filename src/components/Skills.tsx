import { motion } from 'framer-motion';
import {
  Cloud,
  Code,
  Database,
  Layers,
  Server,
  Zap
} from 'lucide-react';
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 'Expert' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'Ruby', level: 'Advanced' },
        { name: 'PHP', level: 'Advanced' },
        { name: 'SQL (Postgres, MySQL)', level: 'Expert' },
        { name: 'HTML/CSS', level: 'Expert' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: [
        { name: 'NextJS', level: 'Advanced' },
        { name: 'NestJS', level: 'Expert' },
        { name: 'Express.js', level: 'Expert' },
        { name: 'Ruby on Rails', level: 'Advanced' },
        { name: 'Laravel', level: 'Advanced' },
        { name: 'React', level: 'Advanced' }
      ]
    },
    {
      title: 'Technologies & Tools',
      icon: Zap,
      skills: [
        { name: 'Git', level: 'Expert' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'GCP', level: 'Advanced' },
        { name: 'AWS', level: 'Advanced' },
        { name: 'Redis', level: 'Advanced' },
        { name: 'Nginx', level: 'Advanced' },
        { name: 'CI/CD', level: 'Advanced' }
      ]
    },
    {
      title: 'APIs & Data',
      icon: Database,
      skills: [
        { name: 'REST API', level: 'Expert' },
        { name: 'GraphQL', level: 'Intermediate' },
        { name: 'Prisma', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Expert' },
        { name: 'MySQL', level: 'Expert' },
        { name: 'Redis', level: 'Expert' }
      ]
    },
    {
      title: 'Payment & E-commerce',
      icon: Server,
      skills: [
        { name: 'Stripe Integration', level: 'Expert' },
        { name: 'Paddle Integration', level: 'Expert' },
        { name: 'WordPress', level: 'Advanced' },
        { name: 'Shopify', level: 'Advanced' },
        { name: 'Wix', level: 'Intermediate' },
        { name: 'Weebly', level: 'Intermediate' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Cloud,
      skills: [
        { name: 'Communication', level: 'Expert' },
        { name: 'Teamwork', level: 'Expert' },
        { name: 'Time Management', level: 'Expert' },
        { name: 'Attention to Detail', level: 'Expert' },
        { name: 'Stress Management', level: 'Expert' },
        { name: 'Problem Solving', level: 'Expert' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30';
      case 'Advanced':
        return 'bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border-white/20 dark:border-slate-600/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge
                          variant="outline"
                          className={`text-xs border ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border-white/20 dark:border-slate-600/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Technologies Mastered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Always</div>
                  <div className="text-muted-foreground">Learning & Growing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
