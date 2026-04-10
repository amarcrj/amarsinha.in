import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, BookOpen, Award, ExternalLink } from 'lucide-react';

const publications = {
  journals: [
    {
      title: 'iDecide: Leveraging Deep Learning to Enhance Seamless Handover Decisions in B5G Networks',
      authors: 'A. Sinha, Mallikharjuna Rao K.',
      venue: 'IEEE Networking Letters',
      year: '2025',
      status: 'Communicated',
    },
    {
      title: 'dGuard: Real-Time Detection of Driver Drowsiness and Stress Using YOLOv12 and Mediapipe',
      authors: 'S. Barik, G. Sahu, S. Verma, A. Sinha, Mallikharjuna Rao K.',
      venue: 'Springer Neuroscience Bulletin',
      year: '2025',
      status: 'Communicated',
    },
  ],
  conferences: [
    {
      title: 'Liver Disease Classification by Analysing Salient Features of LFT: An Explainable ML Approach',
      authors: 'A. Agrawal, T. Sen, A. Sinha, P. Gangopadhyay',
      venue: 'IEEE IATMSI',
      year: '2025',
      status: 'Published',
    },
    {
      title: 'A Quantum-Enhanced Semantic Communication Framework for Securing Military Health IoT Data',
      authors: 'A. Agrawal, R. Verma, A. Sinha',
      venue: 'IEEE ICSC',
      year: '2025',
      status: 'Published',
    },
    {
      title: 'Leveraging CSI of WiFi for Breath Estimation: An RNN-Based Rate Computation Using ESP32 Data',
      authors: 'M. Sharma, A. Sinha, D. Das, R. Mahapatra',
      venue: 'IEEE INDICON',
      year: '2024',
      status: 'Published',
      citations: 0,
    },
    {
      title: 'AnDet: ML-Based Anomaly Detection of UEs in a Multi-cell B5G Mobile Network for Improved QoS',
      authors: 'A. Sinha, A. Agrawal, S. Roy, V. Uduthalapally, D. Das, R. Mahapatra, S. Shetty',
      venue: 'IEEE ICNC',
      year: '2024',
      status: 'Published',
      citations: 1,
    },
    {
      title: 'SDN-Based Seamless Mobility Management for B5G Services in High-Speed Railways',
      authors: 'A. Sinha, V. Uduthalapally, D. Das, R. Mahapatra',
      venue: 'IEEE ANTS',
      year: '2023',
      status: 'Published',
      citations: 2,
    },
  ],
  patents: [
    {
      title: 'AI-Driven Post-Quantum Cryptographic Key Management System',
      authors: 'S. Vollala, S. Mazumdar, S. Banerjee, S. N. Mishra, K. Sahu, A. Sinha',
      number: 'Application No. 202521028285',
      year: '2025',
      status: 'Published',
    },
  ],
};

const PublicationCard = ({ pub, index, isInView }: { pub: any; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
    className="p-6 rounded-2xl glass hover:shadow-card-hover transition-all duration-300 group"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
          {pub.title}
        </h4>
        <p className="text-sm text-muted-foreground mt-2">{pub.authors}</p>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            {pub.venue}
          </span>
          <span className="text-xs text-muted-foreground">{pub.year}</span>
          {pub.citations !== undefined && pub.citations > 0 && (
            <span className="text-xs text-muted-foreground">
              Cited by {pub.citations}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className={`text-xs px-2 py-1 rounded ${
          pub.status === 'Published' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
        }`}>
          {pub.status}
        </span>
      </div>
    </div>
  </motion.div>
);

export const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="section-padding">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Research Output</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Publications &{' '}
            <span className="text-gradient">Patents</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Contributing to the advancement of wireless networks, AI/ML, and quantum computing through peer-reviewed research.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {/* Journals */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Journal Articles</h3>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4">
              {publications.journals.map((pub, index) => (
                <PublicationCard key={pub.title} pub={pub} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Conferences */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Conference Papers</h3>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4">
              {publications.conferences.map((pub, index) => (
                <PublicationCard key={pub.title} pub={pub} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Patents */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Patents</h3>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4">
              {publications.patents.map((pat, index) => (
                <motion.div
                  key={pat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-2xl glass hover:shadow-card-hover transition-all duration-300"
                >
                  <h4 className="font-semibold text-foreground leading-tight">{pat.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{pat.authors}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xs font-mono text-primary">{pat.number}</span>
                    <span className="text-xs text-muted-foreground">{pat.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Scholar Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://scholar.google.com/citations?user=YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-primary hover:bg-primary/10 transition-colors"
          >
            <span>View on Google Scholar</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
