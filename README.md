# WebViewer User Bookmarks sample - using files and Node.js backend

[WebViewer](https://www.pdftron.com/webviewer) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com). It allows you to view and annotate PDF files on your web app with a fully customizable UI.

![WebViewer](./user-bookmarks.png)

This is a WebViewer User Bookmarks sample to show how you can save and load user bookmarks through files with a Node.js backend.

For more information, see this [guide](https://www.pdftron.com/documentation/web/get-started/todo/).

## Initial setup

Before you begin, make sure your development environment includes [Node.js](https://nodejs.org/en/).

## Install

```
git clone https://github.com/PDFTron/webviewer-user-bookmarks-nodejs-sample.git
cd webviewer-user-bookmarks-nodejs-sample
npm install
```

## Run

```
npm start
```

## How to use

- Create bookmarks using the `New Bookmark` button in the bookmarks tab in the left panel
- Edit bookmark names with the pencil icon on each bookmark.
- Delete bookmarks using the `x` icon on each bookmark
- Bookmarks are automatically saved using the 'userBookmarksChanged' event.

## Contributing

See [contributing](./CONTRIBUTING.md).

## License

See [license](./LICENSE).
