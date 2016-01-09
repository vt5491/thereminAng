'use strict';

/**
 * @ngdoc directive
 * @name thereminAngApp.directive:canvaskeys
 * @description
 * # canvaskeys
 */
angular.module('thereminAngApp')
  .directive('canvaskeys', function ( $document, $rootScope, monad, monadBase) {
//webvr-decorator-> code commented out on: 1/7/2016, 8:29:15 PM
//    return {
//      template: '<div></div>',
//      restrict: 'E',
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the canvaskeys directive');
//      }
//    };
//webvr-decorator-> end code commenting

    return {
      
      restrict: 'A',

      link: function postLink(scope, element, attrs) {
        
        var kbdHandler = function(event) {

          // prevent browser from handling as well
          event.preventDefault();

          switch( event.keyCode) {
            case 'S'.charCodeAt(0):
              monad.camera.translateZ(monadBase.CAMERA_MOVE_DELTA); 
            break;
            
            case 'W'.charCodeAt(0):
              monad.camera.translateZ(-monadBase.CAMERA_MOVE_DELTA);
            break;
            
            case 'A'.charCodeAt(0):
              monad.camera.translateX(monadBase.CAMERA_MOVE_DELTA);
            break;
            
            case 'D'.charCodeAt(0):
              monad.camera.translateX(-monadBase.CAMERA_MOVE_DELTA);
            break;

            case 'Q'.charCodeAt(0):
              monad.cube.rotation.z +=  monadBase.ONE_DEGREE * monadBase.CAMERA_ROT_DELTA;
            break;
            
            case 'E'.charCodeAt(0):
              monad.cube.rotation.z +=  -monadBase.ONE_DEGREE * monadBase.CAMERA_ROT_DELTA;
            break;
            
            case 'P'.charCodeAt(0):
              monad.camera.translateY(-monadBase.CAMERA_MOVE_DELTA);
            break;
            
            case 'N'.charCodeAt(0):
              monad.camera.translateY(monadBase.CAMERA_MOVE_DELTA);
            break;
            
            case 'R'.charCodeAt(0):
              monad.BasePosition.copy(monad.INIT_POSITION);
              monad.BaseRotation.copy(monad.INIT_ROTATION);
            break;            
          }
        };

        // I have to bind to $document for runtime and to element for testing.  I think I should
        // be able to use element for both, but for now just bind to both
        $document.on("keydown", kbdHandler);
        element.on("keydown", kbdHandler);
      }
    };
//webvr-decorator-> file updated on: 1/7/2016, 8:29:15 PM
  });


