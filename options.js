function save_options() {
  let onlyRepeatedTitles = document.getElementById('repeatedTitles').checked;
  chrome.storage.sync.set({
    onlyRepeatedTitles: onlyRepeatedTitles
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
  
function restore_options() {
  chrome.storage.sync.get('onlyRepeatedTitles', function(items) {
    document.getElementById('repeatedTitles').checked = items.onlyRepeatedTitles;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('save').addEventListener('click', save_options);
})