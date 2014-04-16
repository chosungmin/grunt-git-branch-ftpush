/*
 * GitBranchCheck
 * https://github.com/chosungmin/gitBranchCheck
 *
 * Copyright (c) 2014 chosungmin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    GitBranchCheck: {
		ftp : {
			options : {
				ftp_root: '/test/'
			}
		}
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['GitBranchCheck']);

};
