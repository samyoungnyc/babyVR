// //CREATE NAMESPACE
// var babyVR = babyVR || {};
// var flat = babyVR.flat;
// var thirdDimension = babyVR.thirdDimension;
window.addEventListener('DOMContentLoaded', function() {
  firebaseConfig();
  console.log("WINDOW LOADED");
}, true);

//INIT FIREBASE
function firebaseConfig() {
  var config = {
    apiKey: "AIzaSyC3mp1lmEaffIvGXhza0ifMXaYGWDllQoM",
    authDomain: "babyvr-e53f0.firebaseapp.com",
    databaseURL: "https://babyvr-e53f0.firebaseio.com",
    projectId: "babyvr-e53f0",
    storageBucket: "gs://babyvr-e53f0.appspot.com/",
    messagingSenderId: "292136371601"
  };
    firebase.initializeApp(config);
    // INIT PROJECT DB REFERENCE
    var projectDbRef = firebase.database().ref('project');
    // INIT STORAGE REFERENCE
    var storage = firebase.storage();
          storageRef = storage.ref();
          projectStorageRef = storageRef.child('project');
    // CHECK FIREBASE REF'S
    console.log("FIREBASE INIT'D");
}
//
function switchTo3D() {
  document.getElementById("flatland-wrap").style.display = "none";
  document.getElementById("a-frame-wrap").style.display = "block";
}

function switchToflatland() {
  document.getElementById("a-frame-wrap").style.display = "none";
  document.getElementById("flatland-wrap").style.display = "block";
}

function addBoxToScene(box) {
  var scene = document.getElementById("scene");
  var box = document.createElement("a-box");
  box.setAttribute("position", "0 2 -5");
  box.setAttribute("color", "#f44242");  
  scene.appendChild(box);
}
// CUSTOM DROPZONE BEHAVIORS
Dropzone.options.makeASceneUploadForm = {
  init: function() {     
    this.on("addedfile", function(file) { 
      document.getElementById("target-emoji").style.display = "none";      
      // document.getElementsByClassName('dz-details dz-error-message dz-error-mark dz-success-mark').style.display = "none";
    });
  }
};

Dropzone.options.makeASceneUploadForm = {
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 2.5, // MB
    init: function() {     
        this.on("addedfile", function(file) { 
          document.getElementById("target-emoji").style.display = "none";
          console.log("added image")
          // document.getElementsByClassName('dz-details dz-error-message dz-error-mark dz-success-mark').style.display = "none";
        });
      }

  // accept: function(file, done) {
  //   if (file.name == "justinbieber.jpg") {
  //     console.log("JBEBB");
  //     done("Naha, you don't.");
  //   }
  //   else { done(); }
  // }
};