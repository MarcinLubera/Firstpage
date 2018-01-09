module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    notify: {
      ready: {
        options: {
          title: 'Sprawdzaj!',
          message: 'Wszystko gotowe'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },
    watch: {
      global: {
        files: ['css/*.scss'],
        tasks: ['sass', 'notify:ready'],
        options: {
          nospawn: true
        }
      }
    },
    'http-server': {

      'dev': {

        // the server root directory
        root: "",

        // the server port
        // can also be written as a function, e.g.
        // port: function() { return 8282; }
        port: 8080,


        // the host ip address
        // If specified to, for example, "127.0.0.1" the server will
        // only be available on that ip.
        // Specify "0.0.0.0" to be available everywhere
        host: "127.0.0.1",
        openBrowser : true,
        showDir: true,
        autoIndex: true,

        // run in parallel with other tasks
        runInBackground: true | false

      }

    }
  });

  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};

console.log(process.cwd())