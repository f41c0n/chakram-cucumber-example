const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: 'report/',
    reportPath: 'report/',
    displayDuration: true,
    durationInMS: true
});