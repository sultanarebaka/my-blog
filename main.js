document.getElementById("myBtn").addEventListener("click", displayform);

  
  function displaypost(){
    var postTitle = document.querySelector("#posttitle").value;
    var Body = document.querySelector("#body").value;
    console.log(postTitle);
    console.log(Body);
  }
  function displayform() {
    document.querySelector("#row").style.display = "block";
    document.querySelector("#btn").addEventListener("click", displaypost);
  }
  $(document).ready(function(){
  $("button").click(function(){
    $.post("demo_test.asp", {

      PostTitle:"Health",
      Body:"Healthy Life"
    },
    function(PostTitle, Body){
      alert("PostTitle: " + PostTitle + "\nBody: " + Body);
    });
  });
});

  
  