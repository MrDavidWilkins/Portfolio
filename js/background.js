





var camera, scene, renderer;
var geometry, material, mesh;
var mtlLoader, url, objLoader;
var controls, composer, glitchPass;


init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.01, 1000 );
	camera.position.z = 20;

  controls = new THREE.OrbitControls( camera );

  controls.addEventListener('change', render);

	controls.enabled = false;
	controls.autoRotate = true;
	controls.autoRotateSpeed = .01;
	controls.rotateSpeed = .02;
	controls.enableZoom = false;
	controls.enablePan = false;
	controls.enableDamping = true;
	controls.dampingFactor = .07;
	controls.maxPolarAngle = Math.PI/.01;


	scene = new THREE.Scene();

	var frontLightRight = new THREE.SpotLight( 0xffffff );
	frontLightRight.position.set( 25, 25, 25 );
	frontLightRight.castShadow = true;
	scene.add( frontLightRight );

	var frontLightLeft = new THREE.SpotLight( 0xffffff );
	frontLightLeft.position.set(-25, -25, 25 );
	frontLightLeft.castShadow = true;
	scene.add( frontLightLeft );

	var backLightLeft = new THREE.SpotLight( 0xffffff );
	backLightLeft.position.set( -25, 25, -25 );
	backLightLeft.castShadow = true;
	scene.add( backLightLeft );

	var ambient = new THREE.AmbientLight( 0x606060 );
	// scene.add( ambient );
// geometry

	var bgGeometry = new THREE.SphereGeometry(100,100,100);
	var bgMaterial = new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture('assets/img/triangles.png'),
		transparent: true,
	});
	bgMaterial.mapping = THREE.SphericalReflectionMapping;
	var bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
	bgMesh.material.side = THREE.DoubleSide;
	// prism
	var geometry = new THREE.DodecahedronBufferGeometry(13 ,1);
	var material = new THREE.MeshPhongMaterial({
		color:  0xc7a230,
		bumpMap: THREE.ImageUtils.loadTexture('assets/3d/bump.png'),
		shininess: 200
	});
	var mesh = new THREE.Mesh( geometry, material );

	// Satelites
	var alphaSatGeo = new THREE.BoxGeometry(1 ,1, 1);
	var alphaSatMat = new THREE.MeshPhongMaterial({
		color:  0x2b2b2b
	});
	var alphaSatMesh = new THREE.Mesh( alphaSatGeo, alphaSatMat );
	alphaSatMesh.castShadow = true;

	var betaSatGeo = new THREE.SphereGeometry(1 ,6, 6);
	var betaSatMat = new THREE.MeshPhongMaterial({
		color:  0xa2a2a2
	});
	var betaSatMesh = new THREE.Mesh( betaSatGeo, betaSatMat );
	betaSatMesh.castShadow = true;

	var gammaSatGeo = new THREE.CylinderGeometry(.4, .4, 1, 12);
	var gammaSatMat = new THREE.MeshPhongMaterial({
		color:  0xe3b600
	});
	var gammaSatMesh = new THREE.Mesh( gammaSatGeo, gammaSatMat );
	gammaSatMesh.castShadow = true;

	// var geometry = new THREE.IcosahedronBufferGeometry(13 ,2);
	// var material = new THREE.MeshPhongMaterial({ color: 0xFFDF00, shininess: 10000, envMap: ""});
	// var mesh = new THREE.Mesh( geometry, material);
	// lines
	var edges = new THREE.EdgesGeometry(geometry);
	var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x000000}));
	// triangles


	scene.add(mesh, bgMesh, alphaSatMesh,betaSatMesh,gammaSatMesh);

	mesh.position.x =0;
	mesh.position.y =0;
	mesh.position.z =0;

	alphaSatMesh.position.x =10;
	alphaSatMesh.position.y =10;
	alphaSatMesh.position.z =10;

	betaSatMesh.position.x =-11;
	betaSatMesh.position.y =9;
	betaSatMesh.position.z =-9;


	gammaSatMesh.position.x =-10;
	gammaSatMesh.position.y =-10;
	gammaSatMesh.position.z =10;




	mesh.receiveShadow = true;


	renderer = new THREE.WebGLRenderer( { antialias: true, alpha:true } );
	renderer.setClearColor (0xffffff, 0);
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

}

window.addEventListener( 'resize', onWindowResize, false );


function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
	composer.setSize( window.innerWidth, window.innerHeight );


}


function animate() {

	requestAnimationFrame( animate );



  controls.update();
	render();
}

function render() {

	renderer.render(scene, camera);
}
