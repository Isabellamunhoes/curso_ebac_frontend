module.exports = function(grunt) {
    grunt.initConfig({
        less: {
        development: {
            files: {
            "dist/styles.min.css": "src/less/styles.less"
            }
        }
        },
        uglify: {
        build: {
            files: {
            "dist/app.min.js": ["src/js/app.js"]
            }
        }
        },
        copy: {
        html: {
            expand: true,
            cwd: 'src/',
            src: 'index.html',
            dest: 'dist/'
        }
        },
        watch: {
        less: {
            files: ['src/less/**/*.less'],
            tasks: ['less:development']
        },
        js: {
            files: ['src/js/**/*.js'],
            tasks: ['uglify:build']
        },
        html: {
            files: ['src/index.html'],
            tasks: ['copy:html']
        }
        },
        concurrent: {
        build: ['less:development', 'uglify:build', 'copy:html'],
        watch: ['watch:less', 'watch:js', 'watch:html'],
        options: {
            logConcurrentOutput: true
        }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent:build']);
    grunt.registerTask('dev', ['concurrent:build', 'watch']);
    };