function onSignIn(googleUser)

{
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display", "none");
  $("#container1").css("display", "none");
  $(".fb-btn").css("display", "none");
  $(".data").css("display", "block");
  $("#pic").attr("src", profile.getImageUrl());
  $("#email").text(profile.getEmail());
}