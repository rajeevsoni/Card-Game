/**
 * Created by rajeevsoni on 08-05-2015.
 */

var memory_array=['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L','M','M','N','N'];
var memory_values=[];
var memory_tile_ids=[];
var tiles_flipped=0;
var clicks=0;


function flipTile(tile,val){


    clicks++;
    document.getElementById('click').innerHTML=clicks;
    if(tile.innerHTML=="" && memory_values.length<2) {
        tile.style.background='#FFF';
        tile.innerHTML=val;

        if(memory_values.length==0){
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if(memory_values.length==1){
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
            if(memory_values[0]==memory_values[1]){
                tiles_flipped += 2;

                memory_values=[];
                memory_tile_ids=[];

                if(tiles_flipped==memory_array.length){
                    var temp=clicks;
                    alert("!!!!! YOU WIN !!!!!\n\n You took "+temp+" Clicks to complete the game.");
                    clicks=0;

                    document.getElementById('memory_board').innerHTML = "";
                    document.getElementById('click').innerHTML=clicks;
                }

            }else {
                function flipBack() {
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);

                    tile_1.style.background = 'red no-repeat';
                    tile_1.innerHTML = "";

                    tile_2.style.background = 'red no-repeat';
                    tile_2.innerHTML = "";

                    memory_values = [];
                    memory_tile_ids = [];
                }

                setTimeout(flipBack,600);

            }

        }
    }

}




define(['shuffle'],function(){



    return {

        newBoard:function(){
            clicks=0;
            document.getElementById('click').innerHTML=clicks;
            alert("Rules for playing Game:- \n ->Click on tiles in such a way that same pair of tile(tiles with same letters) opens in Continuation. \n\n ->Open all tiles in above manner to win in minimum clicks .");
            tiles_flipped=0;
            var output='';
            memory_tile_shuffle(memory_array);

            for(var i=0;i<memory_array.length;i++)
            {
                output += '<div class="innerLetter" id="title_'+i+'"onclick="flipTile(this,\''+memory_array[i]+'\')"></div>';
            }
            document.getElementById('memory_board').innerHTML=output;
        }
    }





})
