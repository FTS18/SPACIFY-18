function errorCache(event) {

    // Either a download error occurred or the user is offline

    var offlineURL = 'https://fts-18.netlify.app/?offline=true'

    window.location = offlineURL;

}

window.applicationCache.addEventListener("error", errorCache, false);
