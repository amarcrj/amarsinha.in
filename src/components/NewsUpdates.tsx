// src/components/NewsUpdates.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bell, Sparkles, FileText, Award, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import scholarData from '@/data/scholarData.json';

interface NewsItem {
  id: string;
  date: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    date: 'Feb 2025',
    badge: 'Patent Published',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    title: 'Indian Patent Published on Post-Quantum Cryptographic Key Management',
    description:
      'Official publication of Patent Application No. 202521028285 titled "An AI-Driven Post-Quantum Cryptographic Key Management System using Dynamic Machine Learning Re-Keying".',
    link: 'https://scholar.google.com/citations?user=8jKlx8sAAAAJ&hl=en',
    linkText: 'View Patent Details',
  },
  {
    id: 'news-2',
    date: 'Dec 2024',
    badge: 'IEEE Publication',
    badgeColor: 'bg-primary/10 text-primary border-primary/20',
    title: 'Paper on Contactless WiFi CSI Sensing Published in IEEE INDICON 2024',
    description:
      'Research on "Human Respiratory Rate Estimation from WiFi CSI Using Recurrent Neural Networks" presented and published at IEEE INDICON 2024 in Kharagpur, India.',
    link: 'https://scholar.google.com/citations?user=8jKlx8sAAAAJ&hl=en',
    linkText: 'Read IEEE Paper',
  },
  {
    id: 'news-3',
    date: '2024 – Present',
    badge: 'Leadership',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    title: 'Elected Student Branch Chair of IEEE Student Branch @ IIIT-NR',
    description:
      'Leading IEEE technical workshops, hackathons, and research mentorship sessions for undergraduate and postgraduate student researchers.',
  },
  {
    id: 'news-4',
    date: '2023 – 2024',
    badge: 'Research Fellowship',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    title: 'Awarded Junior Research Fellowship (JRF) by IIITB COMET Foundation',
    description:
      'Funded research on high-speed rail mobility management and proactive handover frameworks in Beyond 5G networks using Mininet-WiFi and Ryu SDN controllers.',
  },
];

export const NewsUpdates: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="news" className="section-padding relative overflow-hidden bg-card/10 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono liquid-pill text-primary mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FRESHNESS SIGNALS & ACTIVITY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Recent News & <span className="text-gradient">Milestones</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Key announcements, recent peer-reviewed publications, patent publications, and leadership activities.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="p-6 rounded-3xl glass border border-border/70 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border font-medium ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="mt-4 pt-3 border-t border-border/40">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>{item.linkText || 'Read More'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
