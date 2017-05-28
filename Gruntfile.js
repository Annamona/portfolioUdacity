module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 286,
			height: 160,
            suffix: '_lg',
            quality: 30
          },{
            width: 286,
			height: 160,
            suffix: '_md',
            quality: 30
          },{
            width: 286,
			height: 160,
            suffix: '_sm',
            quality: 30
          },{
            width: 286,
			height: 160,
            suffix: '_xs',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
