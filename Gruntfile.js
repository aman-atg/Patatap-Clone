module.exports = function(grunt) {
  // config
  const sass = require("node-sass");

  grunt.initConfig({
    concat: {
      js: {
        src: "dist/js/*.js",
        dest: "public/build/js/scripts.js"
      },
      css: {
        src: "dist/css/style.css",
        dest: "public/build/css/styles.css"
      }
    },
    sass: {
      options: {
        implementation: sass
      },
      build: {
        files: [
          {
            src: "dist/css/sass/*.scss",
            dest: "dist/css/styles(sass).css"
          }
        ]
      }
    },
    ugligy: {
      bar: {
        app: {
          src: "public/build/js/scripts.js",
          dest: "public/build/js/scripts.min.js"
        }
        // paper: {
        //   src: "dist/js/circlePaperscript.js",
        //   dest: "public/build/js/circlePaperscript.min.js"
        // }
      }
    }
  });

  //load plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-sass");

  //register tasks
  grunt.registerTask("concat-js", ["concat:js"]);
  grunt.registerTask("concat-css", ["concat:css"]);
};
