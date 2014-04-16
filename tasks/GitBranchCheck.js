/*
 * GitBranchCheck
 * https://github.com/chosungmin/gitBranchCheck
 *
 * Copyright (c) 2014 chosungmin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){
	grunt.registerMultiTask('GitBranchCheck', 'Git Branch Check', function() {
		var done = this.async();
		var options = this.options({
			ftp_root : this.options.ftp_root || ''
		});

		if(options.ftp_root === '/' || options.ftp_root === ''){
			console.log('/(root) 폴더에는 파일을 업로드 할 수 없습니다.\r\n서비스 루트 폴더를 지정해주세요.\r\nex) ftp_root: \'/service/\'');
			return false;
		}else if(options.ftp_root.match(/\/$/) === null){
			options.ftp_root += '/';
		}
		
		var ftp_root        = options.ftp_root;
		var ftp_desc        = '';
		var branch_name     = '';
		var branch_name_all = '';
		var push_branch     = '';
		var build_file_path = '.grunt/ftpush/';
		var build_file_dest = build_file_path;
		var build_file_org  = build_file_path + 'build.json';
		var build_file_chk  = build_file_path + 'build_check.txt';
		var build_file_list = [];

		grunt.util.spawn({
			cmd: 'git',
			args: ['status']
		}, function (err, res) {
			if (err) {
				console.log('git 저장소가 설정되어 있지 않습니다.\r\ngit 저장소를 설정해주세요.\r\nex) git init');
				grunt.fail.fatal(err);
			} else {
				//res.stdout = (res.stdout === '') ? '* master' : res.stdout ;
				//branch_name = res.stdout.match(/\* (.)+/);
				//branch_name = branch_name[0].replace(/\* /, '');
				branch_name = res.stdout.match(/^On branch\s(.)+\n/);
				branch_name = branch_name[0].replace(/On branch\s|\n/g, '');
				ftp_desc = ftp_root + branch_name;
				branch_name_all = res.stdout.replace('*', '').split(/\n/);

				grunt.config.set('ftp_dest', {path:ftp_desc});
				console.log('Upload Remote Folder : ' + grunt.config.get('ftp_dest.path'));
				
				if(!grunt.file.exists(build_file_path)){
					grunt.file.mkdir(build_file_path);
				}

				grunt.file.recurse(build_file_path, function(abspath, rootdir, subdir, filename){
					build_file_list.push(filename);
				});

				for(var i=0, cnt=branch_name_all.length; i<cnt; i++){
					branch_name_all[i] = branch_name_all[i].replace(/^\s*|\s*$/g, '') + '_build.json';
				}
				branch_name_all.push('build.json');
				branch_name_all.push('build_check.txt');

				for(var j=0, cnt2=build_file_list.length; j<cnt2; j++){
					if(branch_name_all.indexOf(build_file_list[j]) === -1){
						grunt.file.delete(build_file_path + build_file_list[j]);
					}
				}

				build_file_dest += (branch_name + '_build.json');

				if(grunt.file.exists(build_file_chk)){
					push_branch = grunt.file.read(build_file_chk);
					grunt.file.write(build_file_chk, branch_name);
				}else{
					grunt.file.write(build_file_chk, branch_name);
					push_branch = grunt.file.read(build_file_chk);
				}

				if(grunt.file.exists(build_file_org)){
					grunt.file.read(build_file_org);
				}else{
					grunt.file.write(build_file_org, '{}');
				}

				if(push_branch !== branch_name){
					grunt.file.copy(build_file_org, build_file_path + push_branch + '_build.json');

					if(grunt.file.exists(build_file_dest)){
						grunt.file.copy(build_file_dest, build_file_org);
					}else{
						grunt.file.write(build_file_dest, '{}');
						grunt.file.write(build_file_org, '{}');
					}
				}
			}

			done();
		});
	});
};
