import { useEffect, useRef } from "react";
import * as THREE from "three";

type HeroSceneProps = {
	onReady?: () => void;
};

export default function HeroScene({ onReady }: HeroSceneProps) {
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

		const camera = new THREE.PerspectiveCamera(
			60,
			container.clientWidth / container.clientHeight,
			0.1,
			200,
		);
		camera.position.set(0, 0, 9);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio ?? 1, 1.4));
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setClearColor(0x000000, 0);
		container.appendChild(renderer.domElement);

		const mainGroup = new THREE.Group();
		scene.add(mainGroup);

		const gradientMaterial = new THREE.ShaderMaterial({
			uniforms: {
				uColor1: { value: new THREE.Color("#0f172a") },
				uColor2: { value: new THREE.Color("#0c4a6e") },
			},
			vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
			fragmentShader: `
        varying vec2 vUv;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        void main() {
          float alpha = smoothstep(0.0, 1.0, vUv.y);
          vec3 color = mix(uColor2, uColor1, alpha);
          gl_FragColor = vec4(color, 0.85);
        }
      `,
			side: THREE.BackSide,
			transparent: true,
		});
		const gradientSphere = new THREE.Mesh(
			new THREE.SphereGeometry(25, 24, 16),
			gradientMaterial,
		);
		mainGroup.add(gradientSphere);

		const globeMaterial = new THREE.MeshPhysicalMaterial({
			color: 0x1e3a8a,
			emissive: 0x38bdf8,
			emissiveIntensity: 0.45,
			roughness: 0.2,
			metalness: 0.4,
			transparent: true,
			opacity: 0.4,
		});
		const globe = new THREE.Mesh(
			new THREE.IcosahedronGeometry(3.2, 2),
			globeMaterial,
		);
		mainGroup.add(globe);

		const globeWireframe = new THREE.LineSegments(
			new THREE.WireframeGeometry(new THREE.SphereGeometry(3.25, 12, 8)),
			new THREE.LineBasicMaterial({
				color: 0x38bdf8,
				transparent: true,
				opacity: 0.3,
			}),
		);
		mainGroup.add(globeWireframe);

		const ringGeometry = new THREE.RingGeometry(3.5, 3.7, 96);
		const ringMaterial = new THREE.MeshBasicMaterial({
			color: 0x67e8f9,
			side: THREE.DoubleSide,
			transparent: true,
			opacity: 0.25,
		});
		const orbitalRing = new THREE.Mesh(ringGeometry, ringMaterial);
		orbitalRing.rotation.x = Math.PI / 3;
		mainGroup.add(orbitalRing);

		const createDevice = (type: "computer" | "smartphone") => {
			const device = new THREE.Group();
			const baseMaterial = new THREE.MeshStandardMaterial({
				color: type === "computer" ? 0x0ea5e9 : 0x818cf8,
				metalness: 0.5,
				roughness: 0.3,
			});
			const screenMaterial = new THREE.MeshStandardMaterial({
				color: 0x0f172a,
				emissive: 0x38bdf8,
				emissiveIntensity: 0.6,
				roughness: 0.4,
			});

			if (type === "computer") {
				const body = new THREE.Mesh(
					new THREE.BoxGeometry(3.2, 2, 0.2),
					baseMaterial,
				);
				const screen = new THREE.Mesh(
					new THREE.PlaneGeometry(3, 1.8),
					screenMaterial,
				);
				screen.position.z = 0.12;
				device.add(body, screen);

				const stand = new THREE.Mesh(
					new THREE.BoxGeometry(0.3, 0.6, 0.2),
					baseMaterial,
				);
				stand.position.set(0, -1.5, 0);
				device.add(stand);

				const base = new THREE.Mesh(
					new THREE.BoxGeometry(3.4, 0.2, 1),
					baseMaterial,
				);
				base.position.set(0, -1.9, 0.3);
				device.add(base);
			} else {
				const phoneBody = new THREE.Mesh(
					new THREE.BoxGeometry(1.2, 2.4, 0.15),
					baseMaterial,
				);
				phoneBody.castShadow = true;
				const phoneScreen = new THREE.Mesh(
					new THREE.PlaneGeometry(1, 2.2),
					screenMaterial,
				);
				phoneScreen.position.z = 0.09;
				device.add(phoneBody, phoneScreen);

				const camera = new THREE.Mesh(
					new THREE.CylinderGeometry(0.05, 0.05, 0.08, 16),
					new THREE.MeshBasicMaterial({ color: 0xffffff }),
				);
				camera.rotation.x = Math.PI / 2;
				camera.position.set(0.4, 0.8, 0.08);
				device.add(camera);
			}

			return device;
		};

		const computer = createDevice("computer");
		computer.position.set(-4.2, -0.5, 0);
		computer.rotation.y = Math.PI / 12;
		mainGroup.add(computer);

		const smartphone = createDevice("smartphone");
		smartphone.position.set(4.2, 1.2, 0.5);
		smartphone.rotation.y = -Math.PI / 8;
		mainGroup.add(smartphone);

		const particleGeometry = new THREE.BufferGeometry();
		const particleCount = 380;
		const positions = new Float32Array(particleCount * 3);
		for (let i = 0; i < particleCount; i += 1) {
			const radius = 6 + Math.random() * 8;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.random() * Math.PI;
			const x = radius * Math.sin(phi) * Math.cos(theta);
			const y = radius * Math.sin(phi) * Math.sin(theta);
			const z = radius * Math.cos(phi);
			positions.set([x, y, z], i * 3);
		}
		particleGeometry.setAttribute(
			"position",
			new THREE.Float32BufferAttribute(positions, 3),
		);
		const particleMaterial = new THREE.PointsMaterial({
			size: 0.04,
			color: 0xffffff,
			transparent: true,
			opacity: 0.4,
			sizeAttenuation: true,
		});
		const stars = new THREE.Points(particleGeometry, particleMaterial);
		scene.add(stars);

		const lights: THREE.Light[] = [
			new THREE.AmbientLight(0xbcdcff, 0.6),
			new THREE.PointLight(0x38bdf8, 1.4, 40),
			new THREE.PointLight(0x818cf8, 1.2, 30),
		];
		lights[1].position.set(6, 6, 6);
		lights[2].position.set(-6, -4, 2);
		lights.forEach((light) => scene.add(light));

		const mouse = new THREE.Vector2(0, 0);
		const targetRotation = new THREE.Vector2(0, 0);

		const brandCanvas = document.createElement("canvas");
		brandCanvas.width = 1050;
		brandCanvas.height = 256;
		const ctx = brandCanvas.getContext("2d");
		if (ctx) {
			ctx.clearRect(0, 0, brandCanvas.width, brandCanvas.height);
			const gradient = ctx.createLinearGradient(0, 0, brandCanvas.width, 0);
			gradient.addColorStop(0, "#67e8f9");
			gradient.addColorStop(1, "#c084fc");
			ctx.fillStyle = gradient;
			ctx.font = "bold 140px 'Space Grotesk', 'Inter', sans-serif";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.shadowColor = "rgba(103,232,249,0.6)";
			ctx.shadowBlur = 18;
			ctx.fillText(
				"Computer Extra",
				brandCanvas.width / 2,
				brandCanvas.height / 2,
			);
		}
		const brandTexture = new THREE.CanvasTexture(brandCanvas);
		brandTexture.anisotropy = Math.min(
			4,
			renderer.capabilities.getMaxAnisotropy?.() ?? 4,
		);
		const brandMaterial = new THREE.MeshBasicMaterial({
			map: brandTexture,
			transparent: true,
			side: THREE.DoubleSide,
			depthWrite: false,
		});
		const brandPlane = new THREE.Mesh(
			new THREE.PlaneGeometry(5.8, 1.6),
			brandMaterial,
		);
		brandPlane.position.set(0, 3.2, 0.6);
		mainGroup.add(brandPlane);

		const glowRing = new THREE.Mesh(
			new THREE.RingGeometry(3.9, 4.4, 80),
			new THREE.MeshBasicMaterial({
				color: 0x38bdf8,
				transparent: true,
				opacity: 0.15,
				side: THREE.DoubleSide,
			}),
		);
		glowRing.rotation.x = Math.PI / 2;
		glowRing.position.set(0, 3.2, 0.3);
		mainGroup.add(glowRing);

		const handlePointerMove = (event: PointerEvent) => {
			const rect = container.getBoundingClientRect();
			mouse.x = (event.clientX - rect.left) / rect.width - 0.5;
			mouse.y = (event.clientY - rect.top) / rect.height - 0.5;
			targetRotation.x = mouse.y * 0.2;
			targetRotation.y = mouse.x * 0.4;
		};
		container.addEventListener("pointermove", handlePointerMove);

		let animationFrame: number | null = null;
		let lastTime = 0;
		const frameInterval = 1000 / 60;
		const baseSpeed = 0.8;
		let isActive = true;
		const animate = (time: number) => {
			if (!isActive) return;
			const deltaMs = time - lastTime;
			if (deltaMs < frameInterval) {
				animationFrame = requestAnimationFrame(animate);
				return;
			}
			lastTime = time;
			const delta = deltaMs / 1000;

			globe.rotation.y += 0.6 * delta * baseSpeed;
			globeWireframe.rotation.y += 0.8 * delta * baseSpeed;
			orbitalRing.rotation.z -= 0.4 * delta * baseSpeed;

			computer.rotation.y += 0.4 * delta * baseSpeed;
			const wobbleTime = time * 0.0006;
			computer.position.y = -0.5 + Math.sin(wobbleTime) * 0.3;
			smartphone.rotation.y -= 0.5 * delta * baseSpeed;
			smartphone.position.y = 1.2 + Math.cos(wobbleTime * 1.2) * 0.3;

			mainGroup.rotation.x += (targetRotation.x - mainGroup.rotation.x) * 0.08;
			mainGroup.rotation.y += (targetRotation.y - mainGroup.rotation.y) * 0.08;
			brandPlane.quaternion.copy(camera.quaternion);
			glowRing.rotation.y += 0.1 * delta * baseSpeed;

			stars.rotation.y += 0.15 * delta * baseSpeed;

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
			lastTime = performance.now();
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
		lastTime = performance.now();
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
			container.removeEventListener("pointermove", handlePointerMove);
			document.removeEventListener("visibilitychange", handleVisibility);
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			renderer.dispose();
			container.removeChild(renderer.domElement);
			particleGeometry.dispose();
			brandTexture.dispose();
		};
	}, []);

	return <div ref={containerRef} className="absolute inset-0 " />;
}
