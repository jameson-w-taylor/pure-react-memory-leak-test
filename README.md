# React Application Memory Leak Test
This application is to test out a memory leak scenario I stumbled upon while experimenting with different markup.

In the end it was discovered that the leak is caused by having the LastPass Chrome extension enabled. But that leak only happened for an [Ionic sample](https://github.com/jameson-w-taylor/ionic-react-memory-leak), and only when there is a specific style of markup used.

This sample app behaves how I would expect, where the heap snapshot shows references being added and removed as the directions are followed.

## Developer Setup
1. Run `npm install`
1. Run `npm run start`
1. Follow scenarios described in first view of the app