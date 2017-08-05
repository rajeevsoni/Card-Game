/**
 * Created by rajeevsoni on 08-05-2015.
 */


require(["gameStart"],function(start){

    document.getElementById("startButton").onclick=function () {
        start.newBoard();
    };
})
