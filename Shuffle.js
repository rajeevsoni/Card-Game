/**
 * Created by rajeevsoni on 08-05-2015.
 */


function memory_tile_shuffle( array ){
    var i=array.length, j,temp;

    while(--i>0){
        j=Math.floor(Math.random()*(i+1));
        temp=array[j];
        array[j]=array[i];
        array[i]=temp;
    }
}
