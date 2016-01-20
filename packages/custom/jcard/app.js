'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Jcard = new Module('jcard');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Jcard.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Jcard.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Jcard.menus.add({
    title: 'jcard example page',
    link: 'jcard example page',
    roles: ['authenticated'],
    menu: 'main'
  })/*.add({
    title: 'View Card',
    link: 'cardDirectiveExample',
    roles: ['authenticated'],
    menu: 'main'
  })*/.add({
    title: 'Admin Cards',
    link: 'adminCards',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Jcard.aggregateAsset('css', 'jcard.css');
  //Jcard.aggregateAsset('less', 'jcard.less');
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Jcard.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Jcard.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Jcard.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Jcard;
});
