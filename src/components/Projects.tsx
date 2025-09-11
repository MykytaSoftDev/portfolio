import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Authors Sanctuary Backend',
      description: 'A Django-based backend API for an authors platform with comprehensive features including user management, content creation, and analytics. Built with modern Python practices and Docker containerization.',
      image: 'https://picsum.photos/600/400?random=1',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Redis', 'NGINX', 'Pytest'],
      githubUrl: 'https://github.com/MykytaSoftDev/authors_sanctuary',
      liveUrl: null,
      features: [
        'Django REST Framework with comprehensive API endpoints',
        'Docker containerization with docker-compose setup',
        'PostgreSQL database with optimized queries',
        'Redis caching for improved performance',
        'Comprehensive test coverage with pytest',
        'Code quality tools: Black, isort, flake8',
        'API documentation with ReDoc integration'
      ]
    },
    {
      title: 'Task Manager Backend',
      description: 'A NestJS-based task management system with TypeScript, featuring modern backend architecture, authentication, and scalable API design for efficient task and project management.',
      image: 'https://picsum.photos/600/400?random=2',
      technologies: ['TypeScript', 'NestJS', 'Node.js', 'JWT', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/MykytaSoftDev/task-manager-backend',
      liveUrl: null,
      features: [
        'NestJS framework with TypeScript for type safety',
        'JWT-based authentication and authorization',
        'Modular architecture with dependency injection',
        'Comprehensive API endpoints for task management',
        'Database integration with PostgreSQL',
        'Docker containerization for easy deployment',
        'Unit and E2E testing setup'
      ]
    },
    {
      title: 'Translation Services Platform',
      description: 'A comprehensive translation services platform built during my work at Translation Services USA, featuring CMS integrations, payment processing, and automated workflows.',
      image: 'https://picsum.photos/600/400?random=3',
      technologies: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'Paddle', 'WordPress', 'Shopify'],
      githubUrl: null,
      liveUrl: [
        {url: 'https://www.conveythis.com', name: 'Conveythis'},
        {url: 'https://www.doctranslator.com', name: 'Doctranslator'},
        {url: 'https://www.gglot.com', name: 'GGlot'},
      ],
      features: [
        'Optimized API performance with 30% response time improvement',
        'Custom CMS plugins for WordPress, Shopify, Wix, and Weebly',
        'Payment gateway integration (Stripe, Paddle) with 25% failure reduction',
        'Automated reporting and business insights generation',
        'Legacy code refactoring with 35% maintainability improvement',
        'Webhook integrations for third-party services',
        'Redis caching strategies for database optimization'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 dark:from-sky-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-700/60 backdrop-blur-sm border-white/20 dark:border-slate-600/20">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {project.githubUrl && (
                      <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    )}
                    {
                      project.liveUrl && project.liveUrl.map((urlDetails) => (
                        <Button
                          size="sm"
                          className="flex-1 group/btn"
                          onClick={() => window.open(urlDetails.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          {urlDetails.name}
                        </Button>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
