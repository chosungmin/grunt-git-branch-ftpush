# GitBranchCheck

> git과 grunt-contrib-ftpush 사용시 push 폴더를 git branch로 자동 설정시켜주는 플러그인

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install GitBranchCheck --save-dev
npm install grunt-contrib-ftpush --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('GitBranchCheck');
grunt.loadNpmTasks('grunt-contrib-ftpush');
```

## The "GitBranchCheck" task

### Overview
In your project's Gruntfile, add a section named `GitBranchCheck` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	GitBranchCheck: {
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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_