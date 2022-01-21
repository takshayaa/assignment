module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      autoprefixer: {
        options: {
          // Task-specific options go here.
          browsers: ['last 2 versions', 'firefox > 3']
        },
        your_target: {
          // Target-specific file lists and/or options go here.
        }
      },
      watch:
        {
         files: ['css/style.css'],
         tasks: ['autoprefixer']
        },
        cssmin:
        {
          target: { 
            files: {
               'css/styleprefixed.min.css': ['css/styleprefixed.css'] }
          }
        },
        uglify:
        {
        target: { 
            files: {
            'js/output.min.js': ['js/*.js'] }
        }
        },
        imagemin:
        { 
        dynamic:
            {
            files: [
                {
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{jpg,png,gif}'],
                dest: 'images/build'
                    }]
            }
        }


        
    
  
        });
        grunt.loadNpmTasks('grunt-autoprefixer');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask("default", ['autoprefixer']);
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.registerTask("minifyNewImages", 'newer:imagemin');



  };
  