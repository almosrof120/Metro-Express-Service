var fname, mob, mail, name1, sw, m, m1, m2, t, t1, t2, ft, gdm, down, Status = "Free", q;
function coolie(){ 
    var t2 = document.getElementById('namew').value;
    var sw = document.getElementById('agew').value;
    var ft = document.getElementById('numberw').value;
    var gd = document.getElementById('genderw').value;
    var eid = document.getElementById('emailw').value;
    var msg = document.getElementById('msgw').value;
    var name2 = eid.substring(0, eid.lastIndexOf("@"));
    firebase.database().ref('Hiring/Coolie/'+name2).set({
          Name: t2,
          Mobile: ft,
          Age: sw,
          Gender: gd,
          Email: eid,
          message: msg,
          Status: Status
    });
      Thanku();
  }
  function delivery(){ 
    var t2 = document.getElementById('namew').value;
    var sw = document.getElementById('agew').value;
    var ft = document.getElementById('numberw').value;
    var gd = document.getElementById('genderw').value;
    var eid = document.getElementById('emailw').value;
    var msg = document.getElementById('msgw').value;
    var name2 = eid.substring(0, eid.lastIndexOf("@"));
    firebase.database().ref('Hiring/Catering/'+name2).set({
          Name: t2,
          Mobile: ft,
          Age: sw,
          Gender: gd,
          Email: eid,
          message: msg,
          Status: Status
    });
      Thanku();
  }

function manager(){
    upload();
    q = document.getElementById('budgetm').value;
    fname = document.getElementById('namem').value;
    mail = document.getElementById('emailm').value;
    mob = document.getElementById('numberm').value;
    gdm = document.getElementById('genderm').value;
    name1 = mail.substring(0, mail.lastIndexOf("@"));
    m = document.getElementById('agem').value;
    m2 = document.getElementById('salarym').value;
    t = document.getElementById('messagem').value;
        firebase.database().ref('Hiring/Manager/'+name1).set({
          Name: fname,
          Email: mail,
          Gender: gdm,
          Mobile: mob,
          Age: m,
          Qualifications: q,
          Expected_Salary: m2,
          Message: t
       });
      Thanku();
 }

 function medical(){
  upload1();
  fname = document.getElementById('namem').value;
  mail = document.getElementById('emailm').value;
  mob = document.getElementById('numberm').value;
  gdm = document.getElementById('genderm').value;
  name1 = mail.substring(0, mail.lastIndexOf("@"));
  m = document.getElementById('agem').value;
  q = document.getElementById('qualificationm').value;
  m2 = document.getElementById('salarym').value;
  t = document.getElementById('messagem').value;
      firebase.database().ref('Hiring/Medical/'+name1).set({
        Name: fname,
        Email: mail,
        Gender: gdm,
        Mobile: mob,
        Age: m,
        Qualifications: q,
        Expected_Salary: m2,
        Message: t
     });
    Thanku();
}

 function upload() {
  var image=document.getElementById("myFile").files[0];
  mail = document.getElementById('emailm').value;
  name1 = mail.substring(0, mail.lastIndexOf("@"));
  var imageName=name1;
  var storageRef=firebase.storage().ref('Manager_Resume/'+imageName);
  var uploadTask=storageRef.put(image);

  uploadTask.on('state_changed',function (snapshot) {
      var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log("Uploading is " + progress +" done");
  },function (error) {
      console.log(error.message);
  },function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
      down =  downlaodURL;
      });
  });
  console.log(down);
}

function upload1() {
  var image=document.getElementById("myFile").files[0];
  mail = document.getElementById('emailm').value;
  name1 = mail.substring(0, mail.lastIndexOf("@"));
  var imageName=name1;
  var storageRef=firebase.storage().ref('MedicalStaff_Resume/'+imageName);
  var uploadTask=storageRef.put(image);

  uploadTask.on('state_changed',function (snapshot) {
      var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log("Uploading is " + progress +" done");
  },function (error) {
      console.log(error.message);
  },function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
      down =  downlaodURL;
      });
  });
  console.log(down);
}

function Thanku(){

  setTimeout(() => { window.location.replace("Thank_You/index.html") }, 4000);
      
}