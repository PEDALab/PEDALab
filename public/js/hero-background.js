document.addEventListener('DOMContentLoaded', function() {
  // Set up Three.js scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const container = document.getElementById('hero-canvas');
  
  if (!container) return; // Exit if container doesn't exist
  
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);
  
  // Create gradient material
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      
      void main() {
        vec2 uv = vUv;
        float t = time * 0.5;
        
        // Create gradient effect
        vec3 color1 = vec3(0.18, 0.49, 0.20); // Dark green
        vec3 color2 = vec3(0.12, 0.12, 0.12); // Dark background
        
        float noise = sin(uv.x * 10.0 + t) * sin(uv.y * 10.0 + t) * 0.5 + 0.5;
        vec3 finalColor = mix(color1, color2, noise);
        
        gl_FragColor = vec4(finalColor, 0.1);
      }
    `,
    transparent: true
  });
  
  // Create plane geometry
  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  
  camera.position.z = 1;
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value += 0.01;
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', function() {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  });
}); 