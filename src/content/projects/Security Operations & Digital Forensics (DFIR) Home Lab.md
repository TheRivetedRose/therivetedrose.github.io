---
title: Security Operations & DFIR Home Lab
summary: This project documents the research and design of a personal Security Operations and DFIR (Digital Forensics Incident Response) lab built to simulate an enterprise environment using open-source and freely available tooling.

tags:
  - homelab
  - virtualization
  - network
  - architecture
  - NIST
  - MITRE
  - ATT&CK
  - SIEM
featured: true
repoUrl: https://github.com/therivetedrose/home-lab-architecture
image: /img/projects/home-lab-architecture.svg
pubDate: 2026-02-18
---

## Phase 1 – Research, Design, and Architecture Planning

### Executive Overview

This project documents the research, planning, and architectural design of a personal SOC (Security Operations Center) and DFIR (Digital Forensics and Incident Response) lab environment. The lab is designed to simulate a small enterprise network with centralized monitoring and incident response capabilities using free and open-source tooling.

The architecture and workflow are intentionally aligned to:

- **NIST Special Publication (SP) 800-61 Revision 3 – Computer Security Incident Handling Guide**

<a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf" target="_blank" rel="noopener noreferrer">NIST 800-61 Revision 3</a>

- **MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) Framework**

<a href="https://attack.mitre.org/" target="_blank" rel="noopener noreferrer">MITRE ATT&CK Framework</a>

This phase formalizes structured research, design decisions, threat modeling, and implementation planning prior to deployment.

---

### Strategic Objectives

#### The lab is being designed to support the following goals:

- Develop practical SOC detection and triage workflows
- Execute incident response activities aligned to NIST SP 800-61r3
- Simulate adversary behavior mapped to MITRE ATT&CK techniques
- Centralize and analyze system and network telemetry
- Conduct foundational forensic artifact collection and analysis
- Establish measurable metrics MTTD (Mean Time to Detect) , MTTC (Mean Time to Contain)
- Design and deploy a centralized SIEM (Security Information and Event Management) platform for log aggregation, correlation, and alert generation

This environment will function as a repeatable blue team training platform.

---

### Framework Alignment

The lab architecture is structured to support the incident response lifecycle defined in NIST SP 800-61 Revision 3:

1. **Preparation** – Logging enablement, baseline creation, and system hardening
2. **Detection & Analysis** – Alert generation, log correlation, and event validation
3. **Containment** – Short-term and long-term containment strategies
4. **Eradication & Recovery** – Removal of malicious artifacts and system validation
5. **Post-Incident Activity** – Documentation, lessons learned, and detection tuning

This ensures the lab reflects realistic SOC operational processes rather than an isolated technical experiment.

---

#### MITRE ATT&CK

Planned adversary simulations will be mapped to ATT&CK technique identifiers to ensure behavioral detection coverage.

Examples of planned technique simulations:

- T1059 – Command and Scripting Interpreter
- T1003 – OS (Operating System) Credential Dumping
- T1021 – Remote Services
- T1547 – Boot or Logon Autostart Execution
- T1562 – Impair Defenses

Reference:

<a href="https://attack.mitre.org/techniques/" target="_blank" rel="noopener noreferrer">ATT&CK Techniques</a>

---

### Architecture Design

#### Host Environment

- **Primary Operating System:** Ubuntu Long-Term Support (LTS)  
  <a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu</a>

- **Hypervisor:** Oracle VirtualBox  
  <a href="https://www.virtualbox.org/" target="_blank" rel="noopener noreferrer">VirtualBox</a>

Ubuntu LTS was selected for stability, security patch cadence, and compatibility with open-source security tooling. For further security segmentation, this OS will be installed on a dedicated SSD (Solid State Drive), separate from my main OS.

VirtualBox was selected due to cost constraints (free), documentation maturity, and network isolation capabilities.

---

#### Virtual Environment

- **Windows Virtual Machine** – Target system for telemetry and endpoint detection practice  
  <a href="https://www.microsoft.com/en-us/evalcenter/" target="_blank" rel="noopener noreferrer">Windows VM</a>

- **Kali Linux Virtual Machine** – Controlled adversary simulation platform  
  <a href="https://www.kali.org/" target="_blank" rel="noopener noreferrer">Kali Linux VM</a>

Windows provides enterprise-relevant log generation. Kali supports structured adversary technique simulation.

[Blog Post: Operating System & Hypervisor Selection Rationale](/blog/HomeLab-OS-Selection/)

---

### Network Segmentation Model

The lab will utilize a NAT-based isolated internal network within VirtualBox.

Planned controls:

- Internal-only VM (virtual Machine) communication
- No direct exposure of lab systems to the public internet
- Logical separation between host OS and lab network
- Snapshot capability for rapid rollback

This design minimizes risk to the primary system while enabling controlled adversary simulation.

[Blog Post: Network Segmentation & Isolation Design](/blog/HomeLab-Networking-Segmentation-Modeling/)

---

### High-Level Architecture Diagram

```text
+-------------------------------------------------------+
| Host Machine (Physical) |
| |
| Ubuntu LTS (Secondary OS) |
| +-----------------------------------------------+ |
| | VirtualBox Hypervisor | |
| | | |
| | Internal NAT Network (Isolated) | |
| | ----------------------------------------- | |
| | | | | |
| | | Windows VM (Target System) | | |
| | | - Sysmon | | |
| | | - Windows Event Logs | | |
| | | | | |
| | | Kali Linux VM (Adversary) | | |
| | | - Technique Simulation | | |
| | | | | |
| | ----------------------------------------- | |
| | | |
| | IEM VM (Planned Centralized Log Aggregation & Correlation Node) | |
| +-----------------------------------------------+ |
+-------------------------------------------------------+
```

### Logging, Telemetry & SIEM Architecture (Planned)

A centralized Security Information and Event Management platform will function as the operational core of the lab, enabling log normalization, correlation, and alert development consistent with enterprise SOC workflows.

Initial telemetry sources:

- Windows Event Logs
- Sysmon (System Monitor)  
  <a href="https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon" target="_blank" rel="noopener noreferrer">Sysmon</a>

- Linux authentication logs
- Network traffic capture

Planned log centralization tools under evaluation:

- Wazuh (Open Source Security Platform)  
  <a href="https://wazuh.com/" target="_blank" rel="noopener noreferrer">Wazuh</a>

- Elastic Stack (Elasticsearch, Logstash, Kibana)  
  <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer">Elastic Stack</a>

- Security Onion (Open-Source Threat Hunting Platform)  
  <a href="https://securityonion.net/" target="_blank" rel="noopener noreferrer">Security Onion</a>

Tool selection will be based on:

- Hardware resource constraints
- Industry relevance
- Community support
- Portability of skillset

[Blog Post: SIEM & Telemetry Tool Selection Research](/blog/SIEM-Scaffolding-for-HomeLab/)

---

### Threat Model (Initial)

This initial threat model is intentionally lightweight and will evolve as the lab matures.

#### Assets

- Windows endpoint VM
- Administrative credentials
- Authentication events
- Network communications

#### Assumed Threat Behaviors

- Credential harvesting
- Lateral movement
- Persistence mechanisms
- Defense evasion

#### Trust Boundaries

- Host OS vs. internal lab network
- VM-to-VM internal communications

This lightweight threat model informs detection and logging priorities.

[Blog Post: Threat Modeling Process & Assumptions](/blog/HomeLab-Threat-Modeling/)

---

### Planned Forensic Tooling

- Autopsy (Digital Forensics Platform)  
  <a href="https://www.autopsy.com/" target="_blank" rel="noopener noreferrer">Autopsy</a>

- Volatility (Memory Forensics Framework)  
  <a href="https://www.volatilityfoundation.org/" target="_blank" rel="noopener noreferrer">Volatility</a>

- FTK Imager (Free Edition)  
  <a href="https://www.exterro.com/digital-forensics-software/ftk-imager" target="_blank" rel="noopener noreferrer">FTK Imager</a>

These tools support foundational artifact acquisition and analysis practice.

---

## Implementation Roadmap (Phase 2)

1. Install and harden Ubuntu dual boot
2. Deploy VirtualBox
3. Provision Windows and Kali VMs
4. Validate network isolation
5. Enable logging and telemetry
6. Generate benign baseline activity
7. Verify centralized log visibility

Baseline state documentation will precede adversary simulation.

[Building a SOC Lab on a Budget: Phase 2 Implementation](/blog/Building-Budget-HomeLab/)

---

## Success Criteria (Phase 3)

The lab will be considered operational when:

- Logs are centrally aggregated, normalized, and searchable through the SIEM
- Time synchronization across systems is verified
- Baseline activity is documented
- Initial detection rules trigger expected alerts

Future performance tracking:

- Mean Time to Detect (MTTD)
- Mean Time to Contain (MTTC)
- Alert fidelity improvement over time

---

## Planned Expansion (Phase 4)

- Formal ATT&CK coverage matrix
- Memory acquisition workflow documentation
- Disk imaging and evidence preservation procedures
- Standardized incident documentation templates
- Detection engineering rule library

This lab is being designed as a structured capability-building platform aligned to enterprise SOC and DFIR operational standards.
