chrome.extension.sendMessage({}, function(response)
{
	chrome.storage.sync.get('onlyRepeatedTitles', function(items) {
		items.onlyRepeatedTitles ? removeTitlesWithRespectToContent(document.location.href) : removeTitles(document.location.href);
	})
});

function removeTitles(currentURL) {
  document.querySelectorAll("*").forEach(element => {
    element.removeAttribute("title");
  });

  console.log("Title attributes removed by antititle.");
}

function removeTitlesWithRespectToContent(currentURL) {
  document.querySelectorAll("*").forEach(element => {
		if (element.attributes.title && (element.textContent === element.attributes.title.value)) {
			element.removeAttribute("title");
		}
  });

  console.log("Title attributes removed by antititle.");
}

const loadExcludedSites = () => {
  const listRequest = new XMLHttpRequest();
	listRequest.open("GET", "exclusions.json", false);
	listrequest.onreadystatechange = function()	{
		if (listRequest.readyState === 4 && (listRequest.status === 200 || listRequest.status == 0)) {
			excludedSites = listRequest.responseText;
		}
	}
	listRequest.send(null)
}

const siteIsNotExcluded = (site) => {
  return !excludedSites.indexOf(site) > -1
}

// const excludedSites = loadExcludedSites();