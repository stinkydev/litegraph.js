module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    projectFiles: ['src/litegraph.js',
      'src/nodes/base.js',
      'src/nodes/events.js',
      'src/nodes/interface.js',
      'src/nodes/input.js',
      'src/nodes/math.js',
      'src/nodes/logic.js',
      'src/nodes/image.js',
      'src/nodes/gltextures.js',
      'src/nodes/glfx.js',
      'src/nodes/midi.js',
      'src/nodes/audio.js',
      'src/nodes/network.js'
    ],
    concat: {
      build: {
        src: '<%= projectFiles %>',
        dest: 'build/litegraph.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n',
        compress: {
          drop_console: false
        }
      },
      build: {
        src: 'build/litegraph.js',
        dest: 'build/litegraph.min.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('build', ['concat:build', 'uglify:build'])
}
