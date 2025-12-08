import { useEffect, useRef } from "react";
import * as THREE from "three";

type DeviceOrbitProps = {
	variant: "computer" | "smartphone" | "network";
	onReady?: () => void;
};

export default function DeviceOrbit({ variant, onReady }: DeviceOrbitProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const readyRef = useRef(false);
	const onReadyRef = useRef(onReady);

	useEffect(() => {
		onReadyRef.current = onReady;
	}, [onReady]);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2(0x020617, 0.35);

		const camera = new THREE.PerspectiveCamera(
			40,
			container.clientWidth / container.clientHeight,
			0.1,
			50,
		);
		camera.position.set(0, 0, 8);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio ?? 1, 1.6));
		renderer.setClearColor(0x000000, 0);
		container.appendChild(renderer.domElement);

		const group = new THREE.Group();
		scene.add(group);

		const baseMaterial = new THREE.MeshStandardMaterial({
			color:
				variant === "computer"
					? 0x38bdf8
					: variant === "smartphone"
						? 0xa5b4fc
						: 0x22d3ee,
			metalness: 0.4,
			roughness: 0.4,
		});
		const screenMaterial = new THREE.MeshStandardMaterial({
			color: 0x020617,
			emissive: variant === "network" ? 0x22d3ee : 0x38bdf8,
			emissiveIntensity: 0.7,
			metalness: 0.1,
		});

		const buildComputer = () => {
			const device = new THREE.Group();
			const body = new THREE.Mesh(new THREE.BoxGeometry(3, 1.7, 0.2), baseMaterial);
			const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.5), screenMaterial);
			screen.position.z = 0.12;
			const stand = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.5, 0.2), baseMaterial);
			stand.position.set(0, -1.2, 0);
			const base = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.15, 0.9), baseMaterial);
			base.position.set(0, -1.5, 0.2);
			device.add(body, screen, stand, base);
			return device;
		};

		const buildSmartphone = () => {
			const device = new THREE.Group();
			const frame = new THREE.Mesh(new THREE.BoxGeometry(1, 2.1, 0.2), baseMaterial);
			const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 2), screenMaterial);
			screen.position.z = 0.11;
			device.add(frame, screen);
			return device;
		};

		const buildNetworkNode = () => {
			const node = new THREE.Group();
			const torus = new THREE.Mesh(
				new THREE.TorusGeometry(1.4, 0.08, 16, 100),
				baseMaterial,
			);
			const core = new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 32), screenMaterial);
			node.add(torus, core);
			return node;
		};

		const primary =
			variant === "computer"
				? buildComputer()
				: variant === "smartphone"
					? buildSmartphone()
					: buildNetworkNode();
		group.add(primary);

		const orbitGeometry = new THREE.RingGeometry(2.4, 2.45, 64);
		const orbitMaterial = new THREE.MeshBasicMaterial({
			color: 0x67e8f9,
			transparent: true,
			opacity: 0.3,
			side: THREE.DoubleSide,
		});
		const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
		orbit.rotation.x = Math.PI / 2.3;
		group.add(orbit);

		const orbParticleGeometry = new THREE.BufferGeometry();
		const orbParticleCount = 160;
		const orbPositions = new Float32Array(orbParticleCount * 3);
		for (let i = 0; i < orbParticleCount; i += 1) {
			const radius = 1.8 + Math.random() * 0.9;
			const angle = Math.random() * Math.PI * 2;
			const height = -0.4 + Math.random() * 0.8;
			const x = Math.cos(angle) * radius;
			const y = height;
			const z = Math.sin(angle) * radius;
			orbPositions.set([x, y, z], i * 3);
		}
		orbParticleGeometry.setAttribute(
			"position",
			new THREE.Float32BufferAttribute(orbPositions, 3),
		);
		const orbMaterialPoints = new THREE.PointsMaterial({
			color: 0xffffff,
			size: 0.05,
			transparent: true,
			opacity: 0.6,
			sizeAttenuation: true,
		});
		const orbitParticles = new THREE.Points(orbParticleGeometry, orbMaterialPoints);
		group.add(orbitParticles);

		const floatingNodes = new THREE.Group();
		for (let i = 0; i < 6; i += 1) {
			const node = new THREE.Mesh(
				new THREE.SphereGeometry(0.18, 16, 16),
				new THREE.MeshStandardMaterial({
					color: 0xffffff,
					emissive: 0x38bdf8,
					emissiveIntensity: 0.5,
				}),
			);
			node.position.set(
				Math.sin(i) * 2.6,
				Math.cos(i * 1.4) * 0.8,
				Math.cos(i) * 2.1,
			);
			floatingNodes.add(node);
		}
		group.add(floatingNodes);

		const ambient = new THREE.AmbientLight(0xffffff, 0.6);
		const keyLight = new THREE.PointLight(0x38bdf8, 1.6, 30);
		keyLight.position.set(4, 6, 8);
		const rimLight = new THREE.PointLight(0x818cf8, 1.2, 20);
		rimLight.position.set(-5, -3, -4);
		scene.add(ambient, keyLight, rimLight);

		let animationFrame: number | null = null;
		let isActive = true;
		const animate = () => {
			if (!isActive) return;
			group.rotation.y += 0.003;
			orbit.rotation.z += 0.0015;
			orbitParticles.rotation.y -= 0.001;
			floatingNodes.children.forEach((node, index) => {
				node.position.y = Math.cos(Date.now() * 0.001 + index) * 0.3;
			});
			renderer.render(scene, camera);
			if (!readyRef.current) {
				readyRef.current = true;
				onReadyRef.current?.();
			}
			animationFrame = requestAnimationFrame(animate);
		};

		const startAnimation = () => {
			if (isActive) return;
			isActive = true;
			animationFrame = requestAnimationFrame(animate);
		};

		const stopAnimation = () => {
			isActive = false;
			if (animationFrame !== null) {
				cancelAnimationFrame(animationFrame);
				animationFrame = null;
			}
		};

		isActive = true;
		animationFrame = requestAnimationFrame(animate);

		const resize = () => {
			if (!container) return;
			const { clientWidth, clientHeight } = container;
			camera.aspect = clientWidth / clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(clientWidth, clientHeight);
		};
		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(container);

		const intersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startAnimation();
					} else {
						stopAnimation();
					}
				});
			},
			{ threshold: 0.3 },
		);
		intersectionObserver.observe(container);

		const handleVisibility = () => {
			if (document.hidden) {
				stopAnimation();
			} else {
				startAnimation();
			}
		};
		document.addEventListener("visibilitychange", handleVisibility);

		return () => {
			stopAnimation();
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			document.removeEventListener("visibilitychange", handleVisibility);
			orbParticleGeometry.dispose();
			renderer.dispose();
			container.removeChild(renderer.domElement);
		};
	}, [variant]);

	return (
		<div
			ref={containerRef}
			className="h-48 w-full rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-950/60"
		/>
	);
}

