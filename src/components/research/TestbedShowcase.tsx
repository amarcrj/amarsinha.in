// src/components/research/TestbedShowcase.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Network,
  Cpu,
  ShieldCheck,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface TestbedItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  architecture: {
    layer1: string;
    layer2: string;
    layer3: string;
    layer4: string;
  };
  specs: Array<{ label: string; val: string }>;
  keyMetrics: Array<{ label: string; val: string }>;
  codeSnippet: string;
  pubLink?: string;
  patentNo?: string;
}

const testbeds: TestbedItem[] = [
  {
    id: 'mininet-sdn',
    title: 'Mininet-WiFi & Ryu SDN Experimental Testbed',
    category: 'Beyond 5G & SDN Architecture',
    badge: 'Funded by IIITB COMET Foundation',
    description:
      'A custom-built multi-tier wireless emulation testbed simulating high-speed rail mobility (350+ km/h) across dense mmWave and sub-6GHz base stations. Features proactive OpenFlow rule caching on Ryu SDN controllers.',
    architecture: {
      layer1: 'Application Layer: Deep Learning Handover Prediction & QoS Monitor',
      layer2: 'Control Layer: Ryu OpenFlow 1.3 SDN Controller (Python)',
      layer3: 'Infrastructure Layer: Mininet-WiFi Open vSwitch & mmWave APs',
      layer4: 'Data Plane: High-Speed Mobile UEs (350 km/h) & UERANSIM 5G Core',
    },
    specs: [
      { label: 'Emulation Engine', val: 'Mininet-WiFi v2.3' },
      { label: 'SDN Controller', val: 'Ryu OpenFlow 1.3' },
      { label: '5G Core Protocol', val: 'UERANSIM + Open5GS' },
      { label: 'Mobility Pattern', val: 'High-Speed Railway (HSR) Gauss-Markov' },
      { label: 'Frequency Bands', val: 'Sub-6 GHz (n78) & mmWave (28 GHz)' },
      { label: 'Decision Latency', val: '< 1.2 ms (Proactive)' },
    ],
    keyMetrics: [
      { label: 'Handover Drop Rate', val: '0.00%' },
      { label: 'Ping-Pong Elimination', val: '100%' },
      { label: 'Throughput Stability', val: '99.2%' },
    ],
    codeSnippet: `# Ryu SDN Controller proactive flow caching rule
from ryu.base import app_manager
from ryu.controller import ofp_event
from ryu.ofproto import ofproto_v1_3

class B5GHandoverController(app_manager.RyuApp):
    OFP_VERSIONS = [ofproto_v1_3.OFP_VERSION]
    
    def predict_and_install_flow(self, datapath, target_ap, ue_mac):
        """Proactively pre-caches OpenFlow rules before physical handover"""
        ofproto = datapath.ofproto
        parser = datapath.ofproto_parser
        match = parser.OFPMatch(eth_dst=ue_mac)
        actions = [parser.OFPActionOutput(target_ap.port)]
        self.add_flow(datapath, priority=200, match=match, actions=actions, idle_timeout=15)`,
    pubLink: 'https://scholar.google.com/citations?user=8jKlx8sAAAAJ&hl=en',
  },
  {
    id: 'esp32-csi',
    title: 'ESP32 Raw CSI WiFi Respiratory Sensor Array',
    category: 'IoT & Contactless Healthcare Sensing',
    badge: 'IEEE INDICON 2024 Research',
    description:
      'Non-invasive vital sign estimation extracting 64-subcarrier raw Channel State Information (CSI) from 802.11n WiFi packets. Feeds time-series variance through an RNN model to measure human respiratory rates.',
    architecture: {
      layer1: 'Inference Layer: Recurrent Neural Network (LSTM) Rate Estimator',
      layer2: 'Signal Processing: Butterworth Bandpass Filter + PCA Decomposition',
      layer3: 'Data Harvesting: ESP-IDF Raw WiFi Packet Sniffer & CSI Hook',
      layer4: 'Physical Layer: 2.4 GHz ESP32 Transceiver Nodes (Tx / Rx Pair)',
    },
    specs: [
      { label: 'Hardware Microcontroller', val: 'Dual-core ESP32-WROOM-32D' },
      { label: 'WiFi Protocol', val: '802.11n HT20 (64 Subcarriers)' },
      { label: 'Sampling Frequency', val: '100 Hz Continuous' },
      { label: 'Filter Pipeline', val: 'Butterworth Bandpass (0.1 - 0.5 Hz)' },
      { label: 'Model Architecture', val: 'Bi-directional LSTM (RNN)' },
      { label: 'Sensing Distance', val: 'Up to 3.5 meters (Through-the-Air)' },
    ],
    keyMetrics: [
      { label: 'Breath Estimation Error', val: '± 0.4 breaths/min' },
      { label: 'Hardware Cost', val: '< $15 Total' },
      { label: 'Sampling Reliability', val: '99.8%' },
    ],
    codeSnippet: `// ESP32 Raw WiFi CSI Extraction Callback (ESP-IDF)
void wifi_csi_rx_cb(void *ctx, wifi_csi_info_t *info) {
    if (!info || !info->buf) return;
    int8_t *csi_buf = (int8_t *)info->buf;
    
    // Extract amplitude & phase across 64 subcarriers
    for (int i = 0; i < info->len; i += 2) {
        int8_t real = csi_buf[i];
        int8_t imag = csi_buf[i + 1];
        float amplitude = sqrt(real * real + imag * imag);
        stream_to_rnn_buffer(amplitude);
    }
}`,
    pubLink: 'https://scholar.google.com/citations?user=8jKlx8sAAAAJ&hl=en',
  },
  {
    id: 'post-quantum',
    title: 'AI-Driven Post-Quantum Cryptographic Key Management',
    category: 'Quantum Computing & Network Security',
    badge: 'Patent App. No. 202521028285',
    description:
      'A patented lattice-based Post-Quantum Cryptographic key management system leveraging Reinforcement Learning (RL) to dynamically calculate optimal re-keying intervals against quantum attacks.',
    architecture: {
      layer1: 'Adaptive Policy: Reinforcement Learning (Q-Learning) Security Agent',
      layer2: 'Cryptographic Engine: Kyber-1024 & Dilithium Lattice Cryptosystem',
      layer3: 'Key Distribution: Quantum-Resistant Key Exchange Channel',
      layer4: 'Target Infrastructure: B5G Core Network & Military IoT Mesh',
    },
    specs: [
      { label: 'Patent Status', val: 'Published (Indian Patent Office)' },
      { label: 'Application Number', val: '202521028285' },
      { label: 'Primary Algorithm', val: 'Module-Lattice KEM (NIST Level 5)' },
      { label: 'Optimization Engine', val: 'Deep Q-Network (DQN) Dynamic Re-Keying' },
      { label: 'Attack Resistance', val: 'Shor & Grover Quantum Algorithmic Immunity' },
      { label: 'Overhead Reduction', val: '43% Bandwidth Compression' },
    ],
    keyMetrics: [
      { label: 'Quantum Security Level', val: 'NIST Level 5' },
      { label: 'Re-Keying Latency', val: '< 3.4 ms' },
      { label: 'Adaptive Efficiency', val: '+43% vs Static' },
    ],
    codeSnippet: `# Dynamic Post-Quantum Lattice Key Re-keying Agent
import numpy as np
from pqcrypto.kem.kyber1024 import generate_keypair, encrypt, decrypt

class PostQuantumKeyAgent:
    def __init__(self, entropy_threshold=0.85):
        self.public_key, self.secret_key = generate_keypair()
        self.entropy_threshold = entropy_threshold

    def evaluate_quantum_risk(self, channel_telemetry, packet_rate):
        """Calculates dynamic re-keying necessity using RL state policy"""
        risk_score = self.model.predict_threat(channel_telemetry)
        if risk_score > self.entropy_threshold:
            return self.trigger_quantum_rekeying()`,
    patentNo: 'Application No. 202521028285',
  },
];

export const TestbedShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('mininet-sdn');
  const [showCode, setShowCode] = useState<boolean>(false);

  const current = testbeds.find((t) => t.id === activeTab) || testbeds[0];

  return (
    <div className="max-w-6xl mx-auto rounded-3xl glass border border-border/80 p-6 md:p-8 shadow-xl relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border/60">
        <div>
          <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-1">
            Research Architecture & Systems
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Experimental Testbeds & Patents
          </h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            Physical testbed implementations, custom OpenFlow modules, and patent-pending cryptographic systems.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2">
          {testbeds.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTab(t.id);
                setShowCode(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === t.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'glass text-muted-foreground hover:text-foreground hover:bg-secondary/70'
              }`}
            >
              {t.id === 'mininet-sdn' && <Network className="w-3.5 h-3.5" />}
              {t.id === 'esp32-csi' && <Activity className="w-3.5 h-3.5" />}
              {t.id === 'post-quantum' && <ShieldCheck className="w-3.5 h-3.5" />}
              <span>{t.id === 'mininet-sdn' ? 'Mininet B5G SDN' : t.id === 'esp32-csi' ? 'ESP32 CSI WiFi' : 'Post-Quantum Patent'}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="my-6 space-y-6"
        >
          {/* Header Description & Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                {current.category}
              </span>
              <h4 className="text-xl font-bold text-foreground mt-0.5">{current.title}</h4>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
              {current.badge}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{current.description}</p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {current.keyMetrics.map((km) => (
              <div key={km.label} className="p-4 rounded-2xl bg-secondary/40 border border-border/60 text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{km.val}</div>
                <div className="text-[11px] text-muted-foreground mt-1 font-mono uppercase">{km.label}</div>
              </div>
            ))}
          </div>

          {/* Architecture Stack vs Technical Specs */}
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Architecture Stack */}
            <div className="p-5 rounded-2xl glass border border-border/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  4-Layer Architecture
                </div>
                <div className="space-y-2">
                  {[
                    current.architecture.layer1,
                    current.architecture.layer2,
                    current.architecture.layer3,
                    current.architecture.layer4,
                  ].map((layer, index) => (
                    <div
                      key={layer}
                      className="p-3 rounded-xl bg-secondary/30 border border-border/40 flex items-center gap-3 text-xs"
                    >
                      <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary font-mono font-bold flex items-center justify-center shrink-0">
                        L{4 - index}
                      </span>
                      <span className="font-medium text-foreground">{layer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hardware & Spec Sheet */}
            <div className="p-5 rounded-2xl glass border border-border/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold uppercase tracking-wider">
                    <Cpu className="w-4 h-4" />
                    Technical Specifications
                  </div>
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-secondary hover:bg-secondary/80 text-foreground transition-colors flex items-center gap-1.5"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{showCode ? 'View Specs' : 'View Code'}</span>
                  </button>
                </div>

                {showCode ? (
                  <div className="p-3.5 rounded-xl bg-secondary/40 border border-border/60 font-mono text-xs text-primary overflow-x-auto max-h-56">
                    <pre>{current.codeSnippet}</pre>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.specs.map((s) => (
                      <div key={s.label} className="p-2.5 rounded-xl bg-secondary/30 border border-border/30">
                        <div className="text-[10px] font-mono text-muted-foreground uppercase">{s.label}</div>
                        <div className="text-xs font-semibold text-foreground mt-0.5">{s.val}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Reference Footnote */}
          <div className="flex items-center justify-between pt-4 border-t border-border/40 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full testbed configuration and simulation datasets available for academic collaboration.</span>
            </span>
            {current.pubLink && (
              <a
                href={current.pubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium shrink-0"
              >
                <span>Read Research Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
