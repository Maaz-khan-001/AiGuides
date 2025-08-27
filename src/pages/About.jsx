import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Github, Linkedin, Award, BookOpen, Users, TrendingUp } from 'lucide-react';
import { Newsletter } from '../components/ui';

const About = () => {
  useEffect(() => {
    document.title = 'About - AI Guides Hub';
  }, []);

  const achievements = [
    { icon: BookOpen, label: 'Guides Published', value: '50+' },
    { icon: Users, label: 'Monthly Readers', value: '25K+' },
    { icon: Award, label: 'Success Stories', value: '500+' },
    { icon: TrendingUp, label: 'Years Experience', value: '5+' },
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'AI Research Specialist',
      bio: 'Former OpenAI researcher with expertise in language models and prompt engineering.',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Technical Writer & GPT Developer',
      bio: 'Specializes in creating comprehensive tutorials and custom GPT solutions.',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Elena Vasquez',
      role: 'Content Strategy & Community',
      bio: 'Builds our community and ensures content meets real-world needs.',
      avatar: 'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-teal-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                AI Guides Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We're passionate about making AI accessible to everyone. Our mission is to provide 
              comprehensive, practical guides that help you harness the power of ChatGPT and AI tools.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  AI Guides Hub was born from a simple observation: while AI tools like ChatGPT are 
                  incredibly powerful, most people weren't using them to their full potential. We saw 
                  countless individuals struggling with basic prompts, missing out on advanced features, 
                  and feeling overwhelmed by the rapid pace of AI development.
                </p>
                <p>
                  Founded in early 2023, we started as a small team of AI researchers, developers, and 
                  educators who believed that everyone should have access to clear, actionable guidance 
                  on AI tools. What began as a few blog posts quickly grew into a comprehensive resource 
                  trusted by thousands of readers worldwide.
                </p>
                <p>
                  Today, we're proud to be one of the most trusted sources for practical AI education, 
                  helping students, professionals, and businesses unlock the transformative power of 
                  artificial intelligence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Team working on AI projects"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything we do is guided by our commitment to making AI accessible, practical, and beneficial for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Accessibility First',
                description: 'We believe AI should be accessible to everyone, regardless of technical background.',
                icon: '🌍',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Practical Focus',
                description: 'Our guides prioritize real-world applications and actionable insights over theoretical concepts.',
                icon: '🎯',
                color: 'from-teal-500 to-teal-600'
              },
              {
                title: 'Continuous Learning',
                description: 'We stay at the forefront of AI developments to bring you the latest and most relevant information.',
                icon: '📚',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Community Driven',
                description: 'Our content is shaped by community feedback and real user needs.',
                icon: '🤝',
                color: 'from-orange-500 to-orange-600'
              },
              {
                title: 'Quality Content',
                description: 'Every guide is thoroughly researched, tested, and reviewed before publication.',
                icon: '⭐',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Ethical AI',
                description: 'We promote responsible AI use and help users understand both capabilities and limitations.',
                icon: '⚖️',
                color: 'from-red-500 to-red-600'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg text-2xl mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The experts behind AI Guides Hub, bringing together decades of experience in AI research, development, and education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're proud of the community we've built and the impact we've made in AI education.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you have a collaboration idea, feedback on our content, or just want to say hello, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Read Our Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default About;