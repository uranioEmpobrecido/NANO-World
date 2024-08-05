// Data: Replace this with your actual data
const locations = [
    { city: "Melle", country: "BE", lat: 50.9333, lon: 3.8000 },
    { city: "Gent", country: "BE", lat: 51.0543, lon: 3.7174 },
    { city: "Garbsen", country: "DE", lat: 52.4183, lon: 9.5989 },
    { city: "Berlin", country: "DE", lat: 52.5200, lon: 13.4050 },
    { city: "Bremen", country: "DE", lat: 53.0793, lon: 8.8017 },
    { city: "Burgebrach", country: "DE", lat: 49.8186, lon: 10.7847 },
    { city: "Dusslingen", country: "DE", lat: 48.4428, lon: 9.0525 },
    { city: "Eberstadt", country: "DE", lat: 49.8085, lon: 8.6421 },
    { city: "Gelsenkirchen", country: "DE", lat: 51.5177, lon: 7.0857 },
    { city: "Koln", country: "DE", lat: 50.9375, lon: 6.9603 },
    { city: "Ludwigsfelde", country: "DE", lat: 52.3000, lon: 13.2547 },
    { city: "Lörrach", country: "DE", lat: 47.6154, lon: 7.6646 },
    { city: "Munchen", country: "DE", lat: 48.1351, lon: 11.5820 },
    { city: "Leipzig", country: "DE", lat: 51.3397, lon: 12.3731 },
    { city: "Hückeswagen", country: "DE", lat: 51.1495, lon: 7.3429 },
    { city: "Worben", country: "CH", lat: 47.1000, lon: 7.2833 },
    { city: "Pully", country: "CH", lat: 46.5103, lon: 6.6617 },
    { city: "Plan-les-Ouates", country: "CH", lat: 46.1667, lon: 6.1167 },
    { city: "Zürich", country: "CH", lat: 47.3769, lon: 8.5417 },
    { city: "Genève", country: "CH", lat: 46.2044, lon: 6.1432 },
    { city: "Madrid", country: "ES", lat: 40.4168, lon: -3.7038 },
    { city: "Pamplona", country: "ES", lat: 42.8169, lon: -1.6432 },
    { city: "Sevilla", country: "ES", lat: 37.3886, lon: -5.9823 },
    { city: "Valencia", country: "ES", lat: 39.4699, lon: -0.3763 },
    { city: "Barcelona", country: "ES", lat: 41.3851, lon: 2.1734 },
    { city: "Las Rozas", country: "ES", lat: 40.4921, lon: -3.8737 },
    { city: "Alacant/alicante", country: "ES", lat: 38.3452, lon: -0.4810 },
    { city: "Hondon de los Frailes", country: "ES", lat: 38.2672, lon: -0.9040 },
    { city: "Riba-roja de Turia", country: "ES", lat: 39.5450, lon: -0.5731 },
    { city: "Realon, de", country: "ES", lat: 38.7756, lon: -0.8481 },
    { city: "Serra", country: "ES", lat: 39.6833, lon: -0.4333 },
    { city: "Aris", country: "ES", lat: 42.4290, lon: -8.6436 },
    { city: "Ramallosa, a (san Pedro)", country: "ES", lat: 42.1343, lon: -8.7980 },
    { city: "Pontevedra", country: "ES", lat: 42.4310, lon: -8.6444 },
    { city: "Camos (santa Baia)", country: "ES", lat: 42.1412, lon: -8.8116 },
    { city: "Corciano", country: "IT", lat: 43.1206, lon: 12.2842 },
    { city: "Roma", country: "IT", lat: 41.9028, lon: 12.4964 },
    { city: "Pizzighettone", country: "IT", lat: 45.1833, lon: 9.8000 },
    { city: "Palermo", country: "IT", lat: 38.1157, lon: 13.3615 },
    { city: "Roè Volciano", country: "IT", lat: 45.6167, lon: 10.5167 },
    { city: "Canda", country: "IT", lat: 45.0333, lon: 11.5000 },
    { city: "Bray", country: "IE", lat: 53.2028, lon: -6.1115 },
    { city: "Sandyford", country: "IE", lat: 53.2766, lon: -6.2159 },
    { city: "Alacant/alicante", country: "ES", lat: 38.3452, lon: -0.4810 },
    { city: "Fafe", country: "PT", lat: 41.4479, lon: -8.1678 },
    { city: "Saint-Sixt", country: "FR", lat: 46.0750, lon: 6.5167 },
    { city: "Villeneuve-d’Ascq", country: "FR", lat: 50.6172, lon: 3.1508 },
    { city: "Courbevoie", country: "FR", lat: 48.8954, lon: 2.2567 },
    { city: "Suresnes", country: "FR", lat: 48.8719, lon: 2.2273 },
    { city: "VINCENNES", country: "FR", lat: 48.8489, lon: 2.4350 },
    { city: "Amsterdam", country: "NL", lat: 52.3676, lon: 4.9041 },
    { city: "Apeldoorn", country: "NL", lat: 52.2112, lon: 5.9699 },
    { city: "Eindhoven", country: "NL", lat: 51.4416, lon: 5.4697 },
    { city: "Strijen", country: "NL", lat: 51.7431, lon: 4.5524 },
    { city: "Rotorua", country: "NZ", lat: -38.1368, lon: 176.2497 },
    { city: "Johnsonville", country: "NZ", lat: -41.2193, lon: 174.8051 },
    { city: "Nelson", country: "NZ", lat: -41.2706, lon: 173.2834 },
    { city: "Cary", country: "US", lat: 35.7915, lon: -78.7811 },
    { city: "Wendell", country: "US", lat: 35.7804, lon: -78.3692 },
    { city: "Fairway", country: "US", lat: 39.0141, lon: -94.6313 },
    { city: "Bellingham", country: "US", lat: 48.7491, lon: -122.4787 },
    { city: "Calverton", country: "US", lat: 38.9807, lon: -76.9394 },
    { city: "Shoreline", country: "US", lat: 47.7557, lon: -122.3415 },
    { city: "Chicago", country: "US", lat: 41.8781, lon: -87.6298 },
    { city: "Greensboro", country: "US", lat: 36.0726, lon: -79.7910 },
    { city: "Oakhurst", country: "US", lat: 40.2615, lon: -74.0118 },
    { city: "Bellaire", country: "US", lat: 29.7058, lon: -95.4588 },
    { city: "Winston-Salem", country: "US", lat: 36.0999, lon: -80.2442 },
    { city: "Hayward", country: "US", lat: 37.6688, lon: -122.0819 },
    { city: "Los Angeles", country: "US", lat: 34.0522, lon: -118.2437 },
    { city: "Panorama City", country: "US", lat: 34.2240, lon: -118.4498 },
    { city: "Austin", country: "US", lat: 30.2672, lon: -97.7431 },
    { city: "Farmington Hills", country: "US", lat: 42.4989, lon: -83.3677 },
    { city: "Cerralvo", country: "MX", lat: 26.0970, lon: -99.6176 },
    { city: "Hangzhou", country: "CN", lat: 30.2741, lon: 120.1551 },
    { city: "NOWTHEN", country: "US", lat: 45.3340, lon: -93.4544 },
    { city: "Hampton", country: "US", lat: 42.9376, lon: -70.8389 },
    { city: "Corciano", country: "IT", lat: 43.1206, lon: 12.2842 },
    { city: "Worcester", country: "US", lat: 42.2626, lon: -71.8023 },
    { city: "Doral", country: "US", lat: 25.8195, lon: -80.3553 },
    { city: "Lyndhurst", country: "US", lat: 40.8123, lon: -74.1243 },
    { city: "Pittsburgh", country: "US", lat: 40.4406, lon: -79.9959 },
    { city: "Daytona Beach", country: "US", lat: 29.2108, lon: -81.0228 },
    { city: "West Covina", country: "US", lat: 34.0686, lon: -117.9390 },
    { city: "Des Moines", country: "US", lat: 41.5868, lon: -93.6250 },
    { city: "Aptos", country: "US", lat: 36.9771, lon: -121.8994 },
    { city: "London", country: "GB", lat: 51.5074, lon: -0.1278 },
    { city: "Brooklyn", country: "US", lat: 40.6782, lon: -73.9442 },
    { city: "Lakewood", country: "US", lat: 39.7047, lon: -105.0814 },
    { city: "Wallingford", country: "US", lat: 39.9526, lon: -75.1652 },
    { city: "Santa Barbara", country: "US", lat: 34.4208, lon: -119.6982 },
    { city: "Pully", country: "CH", lat: 46.5103, lon: 6.6617 },
    { city: "Cary", country: "US", lat: 35.7915, lon: -78.7811 },
    { city: "Herndon", country: "US", lat: 38.9696, lon: -77.3861 },
    { city: "Vancouver", country: "US", lat: 45.6387, lon: -122.6615 },
    { city: "Vancouver", country: "CA", lat: 49.2827, lon: -123.1207 },
    { city: "Verdun", country: "CA", lat: 45.4583, lon: -73.5673 },
    { city: "Barrio Arroyo", country: "ES", lat: 39.4699, lon: -0.3763 },
    { city: "Friedrichshain", country: "DE", lat: 52.5155, lon: 13.4546 },
    { city: "Chico", country: "US", lat: 39.7285, lon: -121.8375 },
    { city: "San Jose", country: "US", lat: 37.3382, lon: -121.8863 },
    { city: "Palm Springs", country: "US", lat: 33.8303, lon: -116.5453 },
    { city: "Glasgow", country: "GB", lat: 55.8642, lon: -4.2518 },
    { city: "Horsham", country: "GB", lat: 51.0629, lon: -0.3250 },
    { city: "Warszawa", country: "PL", lat: 52.2297, lon: 21.0122 },
    { city: "Tokyo", country: "JP", lat: 35.6895, lon: 139.6917 },
    { city: "Minami", country: "JP", lat: 34.6325, lon: 135.1527 },
    { city: "Fort Collins", country: "US", lat: 40.5853, lon: -105.0844 },
    { city: "Toronto", country: "CA", lat: 43.6511, lon: -79.3470 },
    { city: "Boise", country: "US", lat: 43.6150, lon: -116.2023 },
    { city: "Cartersville", country: "US", lat: 34.1651, lon: -84.7999 },
    { city: "Saint-Sixt", country: "FR", lat: 46.0750, lon: 6.5167 },
    { city: "Kallithea", country: "GR", lat: 37.9565, lon: 23.7144 },
    { city: "Zürich", country: "CH", lat: 47.3769, lon: 8.5417 },
    { city: "Roma", country: "IT", lat: 41.9028, lon: 12.4964 },
    { city: "Gray", country: "US", lat: 36.3284, lon: -82.4787 },
    { city: "Cambridge", country: "US", lat: 42.3736, lon: -71.1097 },
    { city: "Cheam", country: "GB", lat: 51.3570, lon: -0.2117 },
    { city: "Valparaiso", country: "US", lat: 41.4731, lon: -87.0611 },
    { city: "Edinburgh", country: "GB", lat: 55.9533, lon: -3.1883 },
    { city: "Genève", country: "CH", lat: 46.2044, lon: 6.1432 },
    { city: "Sandyford", country: "IE", lat: 53.2766, lon: -6.2159 },
    { city: "Rozprza", country: "PL", lat: 51.3037, lon: 19.6535 },
    { city: "San Antonio", country: "US", lat: 29.4241, lon: -98.4936 },
    { city: "Albuquerque", country: "US", lat: 35.0844, lon: -106.6504 },
    { city: "Mohnton", country: "US", lat: 40.2837, lon: -75.9883 },
    { city: "Oakland", country: "US", lat: 37.8044, lon: -122.2711 },
    { city: "Laredo", country: "US", lat: 27.5306, lon: -99.4803 },
    { city: "Plan-les-Ouates", country: "CH", lat: 46.1667, lon: 6.1167 },
    { city: "Terrassa", country: "ES", lat: 41.5632, lon: 2.0089 },
    { city: "Gent", country: "BE", lat: 51.0543, lon: 3.7174 },
    { city: "Palermo", country: "IT", lat: 38.1157, lon: 13.3615 },
    { city: "Cambria", country: "US", lat: 35.5641, lon: -121.0807 },
    { city: "Koolewong", country: "AU", lat: -33.4667, lon: 151.3167 },
    { city: "Fenton", country: "US", lat: 42.7978, lon: -83.7044 },
    { city: "Tanger", country: "MA", lat: 35.7595, lon: -5.8340 },
    { city: "Croydon Hills", country: "AU", lat: -37.7833, lon: 145.2667 },
    { city: "Las Condes", country: "CL", lat: -33.4088, lon: -70.5670 },
];

// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Ensure high-quality rendering on high-DPI screens
document.getElementById('globe-container').appendChild(renderer.domElement);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xbbbbbb);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

// Create the globe
const globe = new ThreeGlobe()
    .globeImageUrl('https://neo.gsfc.nasa.gov/archive/bluemarble/bmng/world_2km/world.200402.3x21600x10800.jpg') // Using the new high-resolution image
    .arcsData(locations.map(({ lat, lon }) => ({
        startLat: lat,
        startLng: lon,
        endLat: lat,
        endLng: lon,
        color: ['red']
    })))
    .arcColor(() => 'red')
    .arcAltitude(0.2)
    .arcStroke(0.5)
    .arcDashLength(0.9)
    .arcDashGap(4)
    .arcDashInitialGap(() => Math.random() * 5)
    .arcDashAnimateTime(1000);

scene.add(globe);

// Set camera position
camera.position.z = 500;

// Add OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enablePan = false;

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.0005;
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});