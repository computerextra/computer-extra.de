import { useCallback, useEffect, useState } from "react";

import DeviceOrbit from "./components/DeviceOrbit";
import HeroScene from "./components/HeroScene";
import NetworkGlobe from "./components/NetworkGlobe";

const stats = [
	{ label: "Rechenzentren in Deutschland", value: "12" },
	{ label: "verfügbare Rechenleistung", value: "98,7%" },
	{ label: "Service-Level Agreements", value: "24/7/365" },
];

const featureCards = [
	{
		title: "Hybride Cloud-Backbones",
		description:
			"Skalierbare Kubernetes-Cluster mit Zero-Downtime-Rollouts und durchgängiger Observability.",
	},
	{
		title: "Cyber-Resilience Fabric",
		description:
			"Segmentierte Netzarchitektur, automatisierte Threat Detection und Disaster-Recovery unter 15 Minuten.",
	},
	{
		title: "Edge Intelligence",
		description:
			"Managed Edge-Nodes mit sicheren SD-WAN-Konnektoren für Produktions- und Logistikstandorte.",
	},
];

const services = [
	"Design & Consulting",
	"Managed Operations",
	"Network Security",
	"Data Lifecycle",
	"Automation & IaC",
	"Compliance & Audits",
];

const deviceShowcase = [
	{
		title: "Compute Fabric",
		description:
			"High-Performance-Workloads auf mandantenfähigen Clustern mit deterministischer Latenz.",
		variant: "computer" as const,
	},
	{
		title: "Trusted Mobility",
		description:
			"Managed Smartphones mit Zero-Touch-Enrollment, Secure Elements und Remote-Containern.",
		variant: "smartphone" as const,
	},
	{
		title: "Edge Gateways",
		description:
			"Intelligente IoT-Knoten mit 5G/LoRa-Dualstack, integriertem TPM und KI-basierten Policies.",
		variant: "network" as const,
	},
];

const SCENE_COUNT = deviceShowcase.length + 2;

export default function App() {
	const [loadedScenes, setLoadedScenes] = useState(0);
	const [showLoader, setShowLoader] = useState(true);
	const isReady = loadedScenes >= SCENE_COUNT;

	const handleSceneReady = useCallback(() => {
		setLoadedScenes((prev) => Math.min(prev + 1, SCENE_COUNT));
	}, []);

	useEffect(() => {
		if (isReady) {
			const timeout = setTimeout(() => setShowLoader(false), 700);
			return () => clearTimeout(timeout);
		}
	}, [isReady]);

	return (
		<div className="min-h-screen bg-slate-950 text-white">
			{showLoader && (
				<div
					className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-slate-950 transition-opacity duration-500 ${isReady ? "opacity-0" : "opacity-100"}`}
				>
					<div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-white/60">
						<span className="inline-flex h-2 w-2 rounded-full bg-cyan-300" />
						Loading 3D Systems
					</div>
					<div className="relative h-16 w-16">
						<div className="absolute inset-0 rounded-full border-2 border-white/10" />
						<div className="absolute inset-0 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
					</div>
					<p className="text-xs text-white/50">
						Lädt Visual Ops Layer ({loadedScenes}/{SCENE_COUNT})
					</p>
				</div>
			)}

			<section className="relative isolate min-h-screen overflow-hidden">
				<HeroScene onReady={handleSceneReady} />
				<div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950" />
				<header className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-6 py-20">
					<div className="max-w-3xl space-y-8">
						<div className="flex flex-wrap items-center gap-3">
							<p className="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.38em] text-cyan-100/80">
								Enterprise Infrastructure
							</p>
							<span className="text-sm font-semibold text-cyan-200/90">
								Computer Extra
							</span>
						</div>
						<h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
							Computer Extra entwickelt vollintegrierte IT-Landschaften für
							Vorreiter in kritischen Märkten.
						</h1>
						<p className="text-lg text-slate-200/90 lg:text-xl">
							Unsere Architekturen verbinden Rechenzentren, Edge-Nodes und
							Endgeräte – visualisiert in einer dreidimensionalen Control Plane
							mit Echtzeit-Telemetrie.
						</p>
						<div className="flex flex-wrap gap-4">
							<button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
								Strategie-Workshop anfragen
							</button>
							<button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
								Referenzen entdecken
							</button>
						</div>
					</div>
					<div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:grid-cols-3">
						{stats.map((stat) => (
							<div key={stat.label}>
								<p className="text-sm text-white/60">{stat.label}</p>
								<p className="text-2xl font-semibold text-white">
									{stat.value}
								</p>
							</div>
						))}
					</div>
				</header>
			</section>

			<main className="mx-auto max-w-6xl space-y-20 px-6 pb-24">
				<section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/80 p-8 md:grid-cols-2">
					<div className="space-y-4">
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
							Visual Ops Layer
						</p>
						<h2 className="text-3xl font-semibold text-white">
							Vom Datacenter bis zum Device in einer 3D-Hero-Szene.
						</h2>
						<p className="text-slate-200/80">
							Die interaktive Hero-Szene visualisiert Live-Datenpunkte aus
							Compute- und Mobility-Stacks. Sie zeigt, welche Systeme aktiv
							mitspielen – inklusive digitalem Zwilling für Workstations und
							Smartphones.
						</p>
						<ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
							<li>Heatmaps für Traffic & Compliance</li>
							<li>Device-Drift Tracking in Echtzeit</li>
							<li>Graph-basierte Abhängigkeitsanalyse</li>
							<li>Neural Forecasting für Capacity</li>
						</ul>
					</div>
					<div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6">
						<NetworkGlobe onReady={handleSceneReady} />
					</div>
				</section>

				<section className="space-y-8">
					<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
								Device Experience
							</p>
							<h2 className="mt-3 text-3xl font-semibold text-white">
								Computer und Smartphones in immersiven 3D-Stacks.
							</h2>
						</div>
						<p className="max-w-xl text-slate-200/80">
							Wir simulieren die reale Hardwarelandschaft: Von High-End-GPUs
							über mobile SecOps bis hin zu Edge-Gateways inklusive digitaler
							Zwillinge.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{deviceShowcase.map((card) => (
							<article
								key={card.title}
								className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-950/50 p-6"
							>
								<DeviceOrbit variant={card.variant} onReady={handleSceneReady} />
								<div className="space-y-2">
									<p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
										{card.title}
									</p>
									<p className="text-sm text-slate-200/80">{card.description}</p>
								</div>
								<button className="mt-auto inline-flex items-center text-sm font-semibold text-cyan-300">
									Digital Twin öffnen
									<span className="ml-2 text-lg">→</span>
								</button>
							</article>
						))}
					</div>
				</section>

				<section className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl shadow-cyan-500/10">
					<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
								Konnektivität & Sicherheit
							</p>
							<h2 className="mt-4 text-3xl font-semibold text-white">
								Eine Infrastruktur, der Vorstände vertrauen.
							</h2>
							<p className="mt-3 text-slate-200/80">
								Von der Edge bis zum Rechenzentrum orchestrieren wir
								Infrastrukturen, die dynamisch skalieren und dabei höchste
								sicherheitskritische Standards erfüllen.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-4 text-sm">
							<div className="rounded-2xl border border-white/10 p-4">
								<p className="text-white/60">ISO 27001</p>
								<p className="text-lg font-semibold text-white">Auditiert</p>
							</div>
							<div className="rounded-2xl border border-white/10 p-4">
								<p className="text-white/60">B3S</p>
								<p className="text-lg font-semibold text-white">Konform</p>
							</div>
							<div className="rounded-2xl border border-white/10 p-4">
								<p className="text-white/60">Reaktionszeit</p>
								<p className="text-lg font-semibold text-white">&lt; 8 Min.</p>
							</div>
							<div className="rounded-2xl border border-white/10 p-4">
								<p className="text-white/60">Rollouts</p>
								<p className="text-lg font-semibold text-white">Automation</p>
							</div>
						</div>
					</div>
				</section>

				<section className="space-y-8">
					<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
								Leistungsbausteine
							</p>
							<h2 className="mt-3 text-3xl font-semibold text-white">
								Modulare Services für jede Wachstumsphase.
							</h2>
						</div>
						<p className="max-w-xl text-slate-200/80">
							Wir entwickeln End-to-End-Architekturen – inklusive Governance,
							automatisierter Bereitstellung und transparentem Lifecycle-Report.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{featureCards.map((card) => (
							<article
								key={card.title}
								className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-950/40 p-6"
							>
								<h3 className="text-xl font-semibold text-white">{card.title}</h3>
								<p className="mt-3 flex-1 text-slate-200/80">
									{card.description}
								</p>
								<button className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-300">
									Architektur-Blueprint ansehen
									<span className="ml-2 text-lg">→</span>
								</button>
							</article>
						))}
					</div>
				</section>

				<section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/60 p-8 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-4">
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
							Betriebsmodelle
						</p>
						<h2 className="text-3xl font-semibold text-white">
							Co-Managed Infrastrukturen mit klaren Verantwortlichkeiten.
						</h2>
						<p className="text-slate-200/80">
							Sie behalten die Hoheit über strategische Systeme – wir liefern
							Monitoring, Automatisierung und Incident-Response, die Ihre
							Teams entlasten.
						</p>
						<ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
							{services.map((service) => (
								<li
									key={service}
									className="flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-2"
								>
									<span className="inline-block h-2 w-2 rounded-full bg-cyan-300" />
									{service}
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/50 p-6">
						<div>
							<p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
								KPIs in Echtzeit
							</p>
							<p className="mt-2 text-4xl font-semibold text-white">18</p>
							<p className="text-sm text-white/60">
								Integrierte Monitoring-Domains
							</p>
						</div>
						<div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
							<p className="text-sm text-white/60">Automatisierte Playbooks</p>
							<p className="text-lg font-semibold text-white">
								Remediation in Sekunden
							</p>
						</div>
						<div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
							<p className="text-sm text-white/60">Lifecycle-Transparenz</p>
							<p className="text-lg font-semibold text-white">
								Vertragliche KPIs im Portal
							</p>
						</div>
						<button className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
							Demo des Control Panels buchen
						</button>
					</div>
				</section>
			</main>

			<footer className="border-t border-white/10 bg-slate-950/80 py-10">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
					<p>© {new Date().getFullYear()} computer-extra.de</p>
					<p>Enterprise IT-Infrastrukturen mit Sitz in München.</p>
				</div>
			</footer>
		</div>
	);
}
