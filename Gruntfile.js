/*
 * grunt-git-branch-ftpush
 * https://github.com/chosungmin/grunt-git-branch-ftpush.git
 *
 * Copyright (c) 2014 chosungmin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    GitBranchFtpush: {
		ftp : {
			options : {
				ftp_root: '/test/'
			}
		}
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['GitBranchFtpush']);

};
