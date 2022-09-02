var viewerElement = document.getElementById('viewer');
var DOCUMENT_ID = 'webviewer-demo-1';

WebViewer({
  path: 'lib',
  initialDoc: './webviewer-demo.pdf',
  // fullAPI: true,
}, viewerElement).then(instance => {
  instance.enableElements(['bookmarksPanel', 'bookmarksPanelButton']);

  instance.addEventListener('userBookmarksChanged', e => {
    const bookmarks = e.detail;
    const bookmarksString = JSON.stringify(bookmarks);
    saveBookmarksString(DOCUMENT_ID, bookmarksString).then(function() {
      console.log('Bookmarks saved successfully.');
    });
  })

  // Add a save button on header
  instance.setHeaderItems(function(header) {
    header.push({
      type: 'actionButton',
      img: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
      onClick: function() {
        const bookmarks = instance.exportBookmarks();
        const bookmarksString = JSON.stringify(bookmarks);
        saveBookmarksString(DOCUMENT_ID, bookmarksString).then(function() {
          alert('Bookmarks saved successfully.');
        });
      }
    });
  });

  // Load bookmarks when document is loaded
  instance.docViewer.on('documentLoaded', function() {
    loadBookmarksString(DOCUMENT_ID).then(function(bookmarksString = '') {
      const bookmarks = JSON.parse(bookmarksString);
      instance.importBookmarks(bookmarks);
    });
  });
});


// Make a POST request with bookmarks string
const saveBookmarksString = function (documentId, bookmarksString) {
  return new Promise(function(resolve) {
    fetch(`/server/bookmarksHandler.js?documentId=${documentId}`, {
      method: 'POST',
      body: bookmarksString
    }).then(function(response) {
      if (response.status === 200) {
        resolve();
      }
    });
  });
};

// Make a GET request to get bookmarks string
const loadBookmarksString = function (documentId) {
  return new Promise(function(resolve) {
    fetch(`/server/bookmarksHandler.js?documentId=${documentId}`, {
      method: 'GET'
    }).then(function(response) {
      if (response.status === 200) {
        response.text().then(function(bookmarksString) {
          resolve(bookmarksString);
        })
      }
    });
  });
};
