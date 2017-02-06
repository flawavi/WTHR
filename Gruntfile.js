module.exports = function(grunt) {
	grunt.initConfig({
    eslint: {
      target: ['./src/*.js']
    },
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'src/styles/main.css' : 'sass/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('eslint-grunt');
	grunt.registerTask('default', ['watch', 'sass', 'eslint']);
}
