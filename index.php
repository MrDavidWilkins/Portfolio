<?php
require_once("admin/js/load.php");
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $street = $_POST['street'];
  $direct = "confirm.php";

  if($street ==="") {
    $sendMail = submitMessage($name, $email, $message, $direct);
    //echo "street is empty";
  }
}

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/foundation.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Share+Tech">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/app.css">
  <title>Dave Wilkins Portfolio</title>
</head>

<?php
  include 'includes/about.html';
  include 'includes/film.html';
  include 'includes/motion.html';
  include 'includes/code.html';
  include 'includes/contact.html';
 ?>


<body>
  <div class="container" id="parent">
    <div class="topButton">
      <button class="mainButton leftButton" id="about" type="button" name="button">
        <i class="fa fa-user-circle-o fa-inverse fa-5x" aria-hidden="true"></i>
      </button>
      <button class="mainButton rightButton" id="film" type="button" name="button">
        <i class="fa fa-film fa-4x fa-inverse"></i>
      </button>
    </div>
    <div class="midButton">
      <button class="mainButton leftButton" id="motion" type="button" name="button">
        <i class="fa fa-desktop fa-4x fa-inverse"></i>
      </button>
      <button class="mainButton rightButton" id="code" type="button" name="button">
        <i class=" fa fa-code fa-4x fa-inverse"></i>
      </button>
    </div>
    <div class="botButton">
      <button class="mainButton leftButton" id="contact" type="button" name="button">
        <i class="fa fa-envelope-o fa-4x fa-inverse"></i>
      </button>
      <button class="mainButton rightButton" id="hideHUD" type="button" name="button">
        <i class="fa fa-eye-slash fa-4x fa-inverse"></i>
      </button>
    </div>
  <canvas id="mainCanvas" width="100%" height="100%"></canvas>
  <img class="background" src="assets/img/bg_gold-black.png" alt="">
  </div>
</body>

<!-- Libraries -->

<!-- three -->
<script src="js/three/build/three.min.js"></script>

<!-- math -->
<script src ="js/three/src/math/Math.js"></script>

<!-- loaders -->
<script src ="js/three/examples/js/loaders/MTLLoader.js"></script>
<script src="js/three/src/loaders/ImageLoader.js"></script>

<!-- cameras -->
<script src ="js/three/src/cameras/PerspectiveCamera.js"></script>

<!-- controls -->
<script src="js/three/examples/js/controls/OrbitControls.js"></script>


<!-- shadows -->
<script src ="js/three/src/lights/LightShadow.js"></script>
<script src ="js/three/src/lights/SpotLightShadow.js"></script>

<!-- lights -->
<script src ="js/three/src/lights/Light.js"></script>
<script src ="js/three/src/lights/SpotLight.js"></script>

<!-- postprocessing -->
<script src ="js/three/examples/js/shaders/CopyShader.js"></script>
<script src ="js/three/examples/js/shaders/BokehShader.js"></script>

<script src ="js/three/examples/js/postprocessing/EffectComposer.js"></script>
<script src ="js/three/examples/js/postprocessing/RenderPass.js"></script>
<script src ="js/three/examples/js/postprocessing/MaskPass.js"></script>
<script src ="js/three/examples/js/postprocessing/ShaderPass.js"></script>
<script src ="js/three/examples/js/postprocessing/BokehPass.js"></script>



<!-- end of three -->

<!-- custom js -->
<script src="js/main.js"></script>
<script src="js/background.js"></script>
</html>
