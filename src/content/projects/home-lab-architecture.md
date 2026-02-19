---
title: Multi-VM Security Lab with Dual-Boot Host Isolation
summary: A segmented cybersecurity lab architecture built around a dual-boot Ubuntu host to isolate virtual machine experimentation from the primary daily-use operating system.
tags:
  - lab
  - virtualization
  - network
  - dual-boot
  - blue-team
featured: true
repoUrl: https://github.com/therivetedrose/home-lab-architecture2
image: /img/projects/home-lab-architecture.svg
pubDate: 2026-02-01
---

## Problem

Running security lab workloads (attack simulation, packet capture, log collection) on the same OS as daily use introduces risk. Configuration drift, accidental exposure, and mixed tooling complicate both experimentation and documentation.

## Environment

### Host Architecture

| Role           | System                                 |
| -------------- | -------------------------------------- |
| Primary OS     | Windows (daily-use environment)        |
| Lab OS         | Ubuntu 22.04 LTS (dual-boot partition) |
| Virtualization | VirtualBox (installed only on Ubuntu)  |

### Virtual Machines

- **Kali Linux** — attack simulation
- **Windows 10 VM** — target system
- **Ubuntu analysis VM** (optional) — log collection, packet capture

### Network Design

- Internal VirtualBox network for VM-to-VM traffic
- Static IP addressing for consistent correlation
- NAT enabled temporarily for updates only
- No port forwarding to host OS

Example addressing scheme:

```
10.10.10.10 - Ubuntu host
10.10.10.11 - Windows VM
10.10.10.12 - Kali VM
```

## Method

### Deployment Process

1. Install Ubuntu 22.04 on separate partition (dual-boot)
2. Harden base installation and update packages
3. Install VirtualBox and extension pack
4. Create Windows and Kali VMs
5. Configure internal networking adapters
6. Assign static IP addresses
7. Take baseline snapshots
8. Validate connectivity using ping, SSH, and RDP (controlled testing)

### Security Controls

- Lab runs exclusively under Ubuntu
- No host port forwarding
- NAT disabled during active testing
- Snapshot rollback capability
- Redaction of sensitive information in documentation

## Artifacts

- ICMP connectivity validation between nodes
- Wireshark packet capture of ARP, TCP handshakes, DNS queries
- Authentication log collection from Windows VM
- Snapshot restore verification

![Network topology placeholder](/img/projects/network-topology.svg)

## Results

- OS-level separation achieved; lab activity isolated from primary environment
- Segmented internal network supports realistic attack and analysis workflows
- Static addressing simplifies detection development and log correlation
- Documented, repeatable deployment steps

## Lessons Learned

- OS separation increases operational discipline
- Snapshot management prevents configuration drift
- Time synchronization is critical for log analysis
- Static addressing simplifies detection development

## Next Steps

- Integrate centralized logging (Elastic or Splunk)
- Simulate brute-force authentication attempts
- Develop initial detection rules
- Automate lab provisioning scripts
