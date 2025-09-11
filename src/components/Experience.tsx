import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Translation Services USA',
      position: 'Software Engineer',
      location: 'New York, NY',
      duration: 'May 2023 – Mar 2025',
      description: 'Optimized API performance and built scalable solutions for translation services platform.',
      responsibilities: [
        'Optimized API performance, reducing response times by 30% across multiple projects',
        'Built and customized CMS plugins (WordPress, Shopify, Wix, Weebly), enhancing functionality and increasing user engagement by 40%',
        'Integrated and optimized payment gateways (Stripe, Paddle), reducing transaction failures by 25% and improving checkout speed',
        'Automated reporting processes to improve efficiency and business insights',
        'Refactored and modernized legacy code, reducing technical debt and improving system maintainability by 35%',
        'Built webhooks for third-party integrations (Shopify application, Paddle payment system), streamlining automation and data synchronization',
        'Conducted technical interviews, evaluating candidates for technical roles',
        'Implemented caching strategies using Redis, reducing database load and improving API response times',
        'Managed deployment processes and server administration, ensuring seamless and efficient application operation',
        'Led projects and coordinated team efforts, ensuring 98% on-time delivery of high-quality features'
      ],
      technologies: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'Paddle', 'WordPress', 'Shopify', 'Docker', 'AWS']
    },
    {
      company: 'FlippedNormals',
      position: 'Software Engineer',
      location: 'Remote, Ukraine',
      duration: 'Sep 2021 – Mar 2023',
      description: 'Developed location-based tax calculation features and improved system performance.',
      responsibilities: [
        'Implemented a new functionality to pinpoint users\' locations, enabling precise tax rate calculations per country',
        'Developed features that helped businesses establish accurate tax calculations, reducing errors by 25%',
        'Built a RESTful API, reducing integration time with backend services by 25%, improving system efficiency',
        'Developed a real-time mailing notification system, increasing user engagement with updates by 30%',
        'Refactored legacy code, improving reliability, scalability, and maintainability',
        'Optimized database queries to improve application performance by 20%',
        'Expanded unit and integration test coverage by 30%, enhancing code stability',
        'Created background job processing for intensive tasks, improving app responsiveness and user experience'
      ],
      technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'REST API', 'Testing']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border-white/20 dark:border-slate-600/20">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-foreground mb-2">
                          {exp.position}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
