Package.describe({
  name: 'mdg:outlines',
  version: '0.0.1',
  readme: 'README.md',
  summary: 'Press ctrl+~ to show outlines around all dom elements',
  git: 'https://github.com/meteor/chromatic',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use(['ecmascript', 'jquery'], 'client');
  api.addFiles(['outlines.js', 'outlines.css'], 'client');
});
