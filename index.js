

// $('.search_detail').click(()=>{
//     //alert('hello .....');
//     if($('.dropbtn').attr('id')==='search_id'){
//         $('.dropbtn') .html('Search By Title');
//         $('.dropbtn') .attr('id','search_title');
//         $('.search_detail') .html('Search By Id');
//         $('.search_detail') .attr('id','search_id');
//     }else{
//         $('.dropbtn') .html('Search By Id');
//         $('.dropbtn') .attr('id','search_id');
//         $('.search_detail') .html('Search By Title');
//         $('.search_detail') .attr('id','search_title');
//     }
// });

$('.search-active-btn').click(() => {
    if ($('.search-active-btn').attr('id') === 'search-by-title') {
        $('.search-active-btn').attr('id', 'search-by-id');
        $('.search-active-btn').html('Search By Id');
        $('#search_title_console').css("display", "block");
        $('#search_id_console').css("display", "none");
    } else {
        $('.search-active-btn').attr('id', 'search-by-title');
        $('.search-active-btn').html('Search By Title');
        $('#search_id_console').css("display", "block");
        $('#search_title_console').css("display", "none");
    }
});

$('#search_id_submit').click(() => {
    loadDetailsFromId();

});
$('#search_title_submit').click(()=>{
    loadDetailsFromTitleYear();
});
let loadDetailsFromId = () => {
    // $('#movie-list').css("display","block");
    let searchId = $('#search_by_id').val();
    $('#movie-list').css({ display: "block" });
    $.ajax({
        type: 'Get', //Get Method
        dataType: 'json',
        url: 'https://www.omdbapi.com/?i=' + searchId + '&apikey=8d17237',
        //Execute success code
        success: (data) => {
            let dataDetails = data;
            //alert('Show on console ....');
            console.log(dataDetails);
            $('#movie_title').html(dataDetails.Title);
            $('#movie_language').html('<h7 class="font-weight-bold">Language :</h7> '+dataDetails.Language);
            $('#movie_image').attr("src",((dataDetails.Poster).length===0 ? 'default_movie.jpg' :dataDetails.Poster));
            $('#released_year').html('<h7 class="font-weight-bold">Released Year :</h7> '+dataDetails.Year);
            $('#released_genre').html('<h7 class="font-weight-bold">Genre :</h7> '+dataDetails.Genre);
            $('#movie_runtime').html('<h7 class="font-weight-bold">Runtime :</h7> '+dataDetails.Runtime);
            $('#movie_plot').html(dataDetails.Plot);

            $('#movie_rating').html('<h7 class="font-weight-bold">IMDB :</h7> '+dataDetails.imdbRating + '   <h7 class="font-weight-bold">IMDB Votes : </h7>' + dataDetails.imdbVotes);
            //  $('#movie_imdb_votes').html(dataDetails.imdbVotes);
            $('#movie_release').html('<h4 class="d-inline-block">Released Date : </h4> ' + dataDetails.Released);
            $('#movie_director').html('<h4 class="d-inline-block">Director : </h4> ' + dataDetails.Director);
            $('#movie_writer').html('<h4 class="d-inline-block">Writer : </h4>'+dataDetails.Writer);
            $('#movie_awards').html('<h4 class="d-inline-block ">Awards : </h4> '+dataDetails.Awards);
            var resultActor="";
            console.log(dataDetails.Actors.split(',').length);
            console.log(dataDetails.Actors.split(',')[0]);
            console.log(dataDetails.Actors.split(',')[1]);
            resultActor +='<h4 class="font-weight-bold">Actors : </h4> ';
            for(var act=0;act<dataDetails.Actors.split(',').length;act++){
                resultActor += '<a href="#" class="card-link">'+dataDetails.Actors.split(',')[act]+'</a>';
            }
            $('#movie_actors').html(resultActor);

        },
        //On error execute code
        error: (data) => {
            console.log('something going wrong .....');
        }
    });


};




let loadDetailsFromTitleYear = () => {
    let searchTitle = $('#search_by_title').val();
    let searchYear=$('#search_by_year').val();
    // $('#movie-list').css("display","block");
    $('#movie-list').css({ display: "block" });
    $.ajax({
        type: 'Get', //Get Method
        dataType: 'json',
        url: 'https://www.omdbapi.com/?t=' + searchTitle+'&y='+searchYear +'&apikey=8d17237',
        //Execute success code
        success: (data) => {
            let dataDetails = data;
            alert('Show on console ....');
            console.log(dataDetails);
            $('#movie_title').html(dataDetails.Title);
            $('#movie_language').html('<h7 class="font-weight-bold">Language :</h7> '+dataDetails.Language);
            $('#movie_image').attr("src",((dataDetails.Poster).length===0 ? 'default_movie.jpg' :dataDetails.Poster));
            $('#released_year').html('<h7 class="font-weight-bold">Released Year :</h7> '+dataDetails.Year);
            $('#released_genre').html('<h7 class="font-weight-bold">Genre :</h7> '+dataDetails.Genre);
            $('#movie_runtime').html('<h7 class="font-weight-bold">Runtime :</h7> '+dataDetails.Runtime);
            $('#movie_plot').html(dataDetails.Plot);

            $('#movie_rating').html('<h7 class="font-weight-bold">IMDB :</h7> '+dataDetails.imdbRating + '   <h7 class="font-weight-bold">IMDB Votes : </h7>' + dataDetails.imdbVotes);
            //  $('#movie_imdb_votes').html(dataDetails.imdbVotes);
            $('#movie_release').html('<h4 class="d-inline-block">Released Date : </h4> ' + dataDetails.Released);
            $('#movie_director').html('<h4 class="d-inline-block">Director : </h4> ' + dataDetails.Director);
            $('#movie_writer').html('<h4 class="d-inline-block">Writer : </h4>'+dataDetails.Writer);
            $('#movie_awards').html('<h4 class="d-inline-block ">Awards : </h4> '+dataDetails.Awards);
            var resultActor="";
            resultActor +='<h4 class="font-weight-bold">Actors : </h4> ';
            for(var act=0;act<dataDetails.Actors.split(',').length;act++){
                resultActor += '<a href="#" class="card-link">'+dataDetails.Actors.split(',')[act]+'</a>';
            }
            $('#movie_actors').html(resultActor);

        },
        //On error execute code
        error: (data) => {
            console.log('something going wrong .....');
        }
    });


};




