let net;
var imageLoaded = 0

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');
}

async function predict()
{
  if(imageLoaded==1)
  {
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result[0].className)
  console.log(result);
 document.getElementById("result").innerHTML = "Result: " +result[0].className;
}else
{
  alert("Please upload an image to classify...");

}
}

function previewFile() {
  var preview = document.querySelector('img');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
  imageLoaded = 1
}

function predictClicked() {
  $('#result').fadeIn(600);
  $('#result').text(' Result:  ');
  console.log("Clicked")
}

app();