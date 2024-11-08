document.addEventListener("DOMContentLoaded", () => {
  var uploadBtn = document.getElementById("custome-upload-btn");
  var fileInput = document.getElementById("file-input");

  uploadBtn.addEventListener("click", function () {
    fileInput.click();
    console.log("clicked");
  });

  fileInput.addEventListener("change", function () {
    var selectedFiles = fileInput.files;
    console.log("selectedFiles ", selectedFiles);

    if (selectedFiles.length === 1) {
      uploadBtn.innerText = selectedFiles[0].name + " selected";
    } else if (selectedFiles.length > 1) {
      uploadBtn.innerText = selectedFiles.length + " selected";
    } else {
      uploadBtn.innerText = "Choose the file";
    }
  });
});
