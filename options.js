// Saves options to chrome.storage
function save_options() {
  var cursor = document.getElementById('cursor').value;
  chrome.storage.sync.set({
    favoriteCursor: cursor
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteCursor: 'red',
  }, function(items) {
    document.getElementById('cursor').value = items.favoriteCursor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
    
    
    if (chrome.storage.sync.favouriteCursor = red) {document.body.style.cursor = "url('http://i.imgur.com/YG5ximv.png'),auto";}
