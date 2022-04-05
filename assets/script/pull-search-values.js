function pullVals() {

    var genreEls = document.querySelectorAll("#genre-checkbox-list input:checked");
    var ratingEls = document.querySelectorAll("#rated-checkbox-list input:checked");
    var searchEl = document.querySelector("input");
    var sortEl = document.querySelector("select");
    
    // console.log(genreEls);
    // console.log(ratingEls);
    // console.log(searchEl);
    // console.log(sortEl);

    var searchObj = {};
    searchObj.search = searchEl.value;
    searchObj.sortProperty = sortEl.value;

    searchObj.genres = [];
    for (let i=0;i<genreEls.length;i++){
        searchObj.genres.push(genreEls[i].value);
    }
    
    searchObj.ratings = [];
    for (let j=0; j<ratingEls.length; j++){
        searchObj.ratings.push(ratingEls[j].value);
    }
    searchObj.descending = true;
    renderPicksSp(searchObj);
    console.log(searchObj);
}
