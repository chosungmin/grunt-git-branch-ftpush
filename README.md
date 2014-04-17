# grunt-git-branch-ftpush

> grunt-contrib-ftpush + git 사용시 remote dest를 git branch 값으로 자동 변경해 주는 플러그인

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-git-branch-ftpush --save-dev
npm install grunt-contrib-ftpush --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-git-branch-ftpush');
grunt.loadNpmTasks('grunt-contrib-ftpush');
```

## The "GitBranchFtpush" task

### Overview
In your project's Gruntfile, add a section named `GitBranchFtpush` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	GitBranchFtpush: {
		ftp : {
			options : {
				ftp_root: '/서비스 root 폴더/'
			}
		}
	}
});
```

ftpush 설정 추가 'dest: '<%= grunt.config.get(\'ftp_dest.path\') %>'

```js
ftpush: {
  build: {
    auth: {
      host: '',
      port: '',
      authKey: ''
    },
    src: '',
    dest: '<%= grunt.config.get(\'ftp_dest.path\') %>',
    exclusions: '',
    keep: []
  }
}
```

task 추가

```js
grunt.registerTask('push', ['GitBranchFtpush', 'ftpush']);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.2.0 beta release