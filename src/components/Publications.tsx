// src/components/Publications.tsx
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FileText,
  BookOpen,
  Award,
  ExternalLink,
  Search,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Filter,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import scholarData from '@/data/scholarData.json';
import { SpotlightCard } from './animations/SpotlightCard';
import { CountUp } from './animations/CountUp';

type CategoryFilter = 'All' | 'B5G & SDN' | 'AI/ML & Healthcare' | 'Quantum & Security' | 'IoT & Healthcare';

export const Publications: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyBibtex = (id: string, bibtex: string, title: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    toast({
      title: 'BibTeX Citation Copied!',
      description: `Copied citation for "${title}"`,
    });
    setTimeout(() => setCopiedId(null), 2500);
  };

  const categories: CategoryFilter[] = [
    'All',
    'B5G & SDN',
    'AI/ML & Healthcare',
    'Quantum & Security',
    'IoT & Healthcare',
  ];

  // Filter publications
  const filteredPubs = scholarData.publications.filter((pub) => {
    const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.year.includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  // Filter patents
  const filteredPatents = scholarData.patents.filter((pat) => {
    const matchesCategory = selectedCategory === 'All' || pat.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      pat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pat.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pat.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pat.year.includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="publications" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-widest font-mono">
            Peer-Reviewed Contributions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2.5">
            Publications & <span className="text-gradient">Patents</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            Contributing to Beyond 5G networks, Software-Defined Networking, AI/ML, and Post-Quantum Security with publications in IEEE & Springer venues.
          </p>
        </motion.div>

        {/* Live Google Scholar Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-8 sm:mb-10"
        >
          <SpotlightCard className="p-5 sm:p-7 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
              <div className="flex items-center gap-3.5 sm:gap-4 text-left w-full md:w-auto">
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-secondary/80 flex items-center justify-center text-primary shrink-0 border border-border/60">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-foreground">Google Scholar Profile</h3>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Author ID: <code className="text-primary font-mono">{scholarData.profile.scholarId}</code>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between md:justify-end gap-5 sm:gap-8 w-full md:w-auto text-center border-t md:border-t-0 pt-3.5 md:pt-0 border-border/50">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    <CountUp end={scholarData.metrics.totalCitations} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground font-mono">Citations</div>
                </div>
                <div className="w-px h-8 bg-border hidden sm:block" />
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    <CountUp end={scholarData.metrics.hIndex} />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground font-mono">h-index</div>
                </div>
                <div className="w-px h-8 bg-border hidden sm:block" />
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    <CountUp end={scholarData.metrics.publicationsCount} suffix="+" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground font-mono">Works</div>
                </div>
                <motion.a
                  href={scholarData.profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-3.5 sm:px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>Scholar Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Search & Topic Filters */}
        <div className="max-w-5xl mx-auto mb-8 space-y-3.5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by paper title, co-author (e.g. Uduthalapally, Das), venue, or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-16 py-3 rounded-2xl glass bg-card/60 border border-border/80 text-foreground placeholder:text-muted-foreground text-xs sm:text-sm focus:outline-none focus:border-primary/60 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-primary" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                    : 'glass text-muted-foreground hover:text-foreground hover:bg-secondary/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="max-w-5xl mx-auto space-y-4">
          {filteredPubs.length === 0 && filteredPatents.length === 0 ? (
            <div className="text-center py-16 glass rounded-2xl">
              <p className="text-muted-foreground text-sm">No publications matched your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-3 text-xs text-primary underline"
              >
                Reset search & filters
              </button>
            </div>
          ) : (
            <>
              {filteredPubs.map((pub, index) => {
                const isExpanded = expandedAbstracts[pub.id] || false;
                const isCopied = copiedId === pub.id;

                return (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.05 * index }}
                  >
                    <SpotlightCard className="p-5 md:p-6 group hover:border-primary/40 transition-all duration-200">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* Tags */}
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary text-foreground font-medium">
                              {pub.category}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground">
                              {pub.type} • {pub.year}
                            </span>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                                pub.status === 'Published'
                                  ? 'bg-emerald-500/10 text-emerald-400'
                                  : 'bg-yellow-500/10 text-yellow-400'
                              }`}
                            >
                              {pub.status}
                            </span>
                            {pub.citations > 0 && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary flex items-center gap-1 font-semibold">
                                <TrendingUp className="w-3 h-3" />
                                {pub.citations} Citations
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h4 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                            {pub.title}
                          </h4>

                          {/* Authors */}
                          <p className="text-xs text-muted-foreground mt-1.5">
                            <span className="text-foreground/90 font-medium">{pub.authors}</span>
                          </p>

                          {/* Venue */}
                          <p className="text-xs text-primary/90 mt-1 font-medium italic">
                            {pub.venue} ({pub.year})
                          </p>

                          {/* Research Highlights */}
                          {pub.highlights && (
                            <div className="flex flex-wrap gap-1.5 mt-2.5">
                              {pub.highlights.map((h) => (
                                <span
                                  key={h}
                                  className="text-[10px] px-2 py-0.5 rounded bg-secondary/40 text-muted-foreground border border-border/40 font-mono"
                                >
                                  ▹ {h}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-border/40">
                          <button
                            onClick={() => copyBibtex(pub.id, pub.bibtex, pub.title)}
                            className="px-3 py-1.5 rounded-xl text-xs font-mono glass hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                            title="Copy BibTeX citation"
                          >
                            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{isCopied ? 'Copied' : 'BibTeX'}</span>
                          </button>

                          <button
                            onClick={() => toggleAbstract(pub.id)}
                            className="px-3 py-1.5 rounded-xl text-xs font-mono glass hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                          >
                            <span>Abstract</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          {pub.scholarLink && (
                            <a
                              href={pub.scholarLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-xl glass hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                              title="Open Google Scholar citation"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Expandable Abstract */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3.5 pt-3.5 border-t border-border/50 text-xs text-muted-foreground leading-relaxed bg-secondary/20 p-3.5 rounded-2xl"
                          >
                            <strong className="text-foreground block mb-1 font-mono uppercase text-[10px] text-primary">
                              Abstract Summary:
                            </strong>
                            {pub.abstract}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </SpotlightCard>
                  </motion.div>
                );
              })}

              {/* Patents Section */}
              {filteredPatents.length > 0 && (
                <div className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Patents</h3>
                  </div>

                  <div className="space-y-3">
                    {filteredPatents.map((pat) => (
                      <SpotlightCard
                        key={pat.id}
                        className="p-5 md:p-6 group hover:border-primary/40 transition-all"
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary text-foreground font-medium">
                            {pat.category}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400">
                            {pat.status}
                          </span>
                        </div>

                        <h4 className="text-base md:text-lg font-bold text-foreground">{pat.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1.5">{pat.authors}</p>
                        <p className="text-xs font-mono text-primary mt-1">{pat.number} ({pat.year})</p>
                        <p className="text-xs text-muted-foreground mt-2.5 bg-secondary/20 p-3 rounded-2xl">
                          {pat.abstract}
                        </p>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
