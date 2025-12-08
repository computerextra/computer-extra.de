import { useEffect, useRef } from "react";
import * as THREE from "three";

type NetworkGlobeProps = {
	onReady?: () => void;
};

export default function NetworkGlobe({ onReady }: NetworkGlobeProps) {
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
		scene.fog = new THREE.FogExp2(0x020617, 0.18);

		const camera = new THREE.PerspectiveCamera(
			45,
			container.clientWidth / container.clientHeight,
			0.1,
			100,
		);
		camera.position.set(0, 0, 6);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio ?? 1, 1.8));
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild(renderer.domElement);

		const globeGeometry = new THREE.SphereGeometry(2.2, 32, 32);
		const globeWireframe = new THREE.WireframeGeometry(globeGeometry);
		const globeMaterial = new THREE.LineBasicMaterial({
			color: 0x49b0ff,
			transparent: true,
			opacity: 0.35,
		});
		const globe = new THREE.LineSegments(globeWireframe, globeMaterial);
		scene.add(globe);

		const pointsGeometry = new THREE.BufferGeometry();
		const particles = 360;
		const positions = new Float32Array(particles * 3);
		for (let i = 0; i < particles; i += 1) {
			const phi = Math.acos(2 * Math.random() - 1);
			const theta = 2 * Math.PI * Math.random();
			const radius = 2.1 + Math.random() * 0.4;
			const x = radius * Math.sin(phi) * Math.cos(theta);
			const y = radius * Math.sin(phi) * Math.sin(theta);
			const z = radius * Math.cos(phi);
			positions.set([x, y, z], i * 3);
		}
		pointsGeometry.setAttribute(
			"position",
			new THREE.Float32BufferAttribute(positions, 3),
		);

		const pointsMaterial = new THREE.PointsMaterial({
			color: 0xffffff,
			size: 0.035,
			transparent: true,
			opacity: 0.8,
			sizeAttenuation: true,
		});
		const constellation = new THREE.Points(pointsGeometry, pointsMaterial);
		scene.add(constellation);

		const ambientLight = new THREE.AmbientLight(0xaad7ff, 0.8);
		scene.add(ambientLight);

		const pointLight = new THREE.PointLight(0x2a6fff, 1.2, 12);
		pointLight.position.set(4, 3, 5);
		scene.add(pointLight);

		let animationFrame: number | null = null;
		let isActive = true;
		const animate = () => {
			if (!isActive) return;
			globe.rotation.y += 0.0018;
			globe.rotation.x += 0.0004;
			constellation.rotation.y -= 0.0009;

			pointLight.position.x = Math.sin(Date.now() * 0.0006) * 4;
			pointLight.position.z = Math.cos(Date.now() * 0.0006) * 4;

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
			const width = Math.max(clientWidth, 200);
			const height = Math.max(clientHeight, 200);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
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
			{ threshold: 0.2 },
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
			globeGeometry.dispose();
			globeWireframe.dispose();
			globeMaterial.dispose();
			pointsGeometry.dispose();
			pointsMaterial.dispose();
			renderer.dispose();
			container.removeChild(renderer.domElement);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="h-[320px] w-full rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-950/70 md:h-full"
		/>
	);
}

