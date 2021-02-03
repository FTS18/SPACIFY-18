const searchform = document.querySelector(".search-input");
const searchformInput = searchform.querySelector(".searchBar");
const micBtn = searchform.querySelector("button");
const micIcon = micBtn.querySelector("i");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  console.log("Your browser supports Speech Recognition");

  searchform.insertAdjacentHTML("beforeend", '<button type="button"><i class="fas fa-microphone"></i></button>');
  const micBtn = searchform.querySelector("button");
  const micIcon = micBtn.querySelector("i");

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang="hi";//language of speech recognition

  micBtn.addEventListener("click", micBtnClick);

  function micBtnClick() {
    if (micIcon.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition);

  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchformInput.focus();
    console.log("Speech Recognition Activated");
  }
  recognition.addEventListener("end", endSpeechRecognition);

  function endSpeechRecognition() {
    micIcon.classList.add("fa-microphone");
    micIcon.classList.remove("fa-microphone-slash");
    searchformInput.focus();
    console.log("Speech Recognition Deactivated");
  }
  recognition.addEventListener("result", resultSpeechRecognition);

  function resultSpeechRecognition(event) {
    const currentResultIndex = event.remove
    const transcript = event.results[0][0].transcript;
    searchformInput.value=transcript;
    setTimeout(()=>{
      searchform.submit();
    }, 750);
  }
} else {
  alert("Your browser does not supports Speech Recognition");
}