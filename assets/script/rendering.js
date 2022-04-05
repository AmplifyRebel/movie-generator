const picksContainer = $("#picked-movies-cont")

const renderPicks = ({search,genre,rated,sortProperty,descending})=>{
    picksContainer.html("")
    let filteredPicks = fullSearch(search)
    if (genre!="All Genres"){
        filteredPicks = filterMovies("Genre",genre,filteredPicks);
    }
    if (rated!="All Ratings"){
        filteredPicks = strictFilterMovies("Rated",rated,filteredPicks)
    }
    sortMovies(sortProperty,descending,filteredPicks);
    for (let i = 0;i<(Math.min(filteredPicks.length,10));i++){
        const btn = $("<button>")
        btn.text(filteredPicks[i].Title);
        picksContainer.append(btn);
    }
}

const renderPicksSp = ({search,genres,ratings,sortProperty,descending})=>{
    picksContainer.html("")
    let filteredPicks = fullSearch(search);
    let newPicks = []
    for(let genre of genres){
        const picksToAdd = filterMovies("Genre",genre,filteredPicks);
        console.log("picks to add")
        console.log(picksToAdd)
        newPicks.concat(picksToAdd)
        picksToAdd.forEach(pick=>{
            newPicks.push(pick)
        })
        console.log("here are the new picks");
        console.log(newPicks);
    }
    filteredPicks = [...newPicks];
    newPicks = [];
    for(let rating of ratings){
        const picksToAdd = strictFilterMovies("Rated",rating,filteredPicks);
        newPicks.concat(picksToAdd)
        picksToAdd.forEach(pick=>{
            newPicks.push(pick)
        })
    }
    filteredPicks = [...newPicks];
    sortMovies(sortProperty,descending,filteredPicks);
    const titles = []
    for (let i = 0;i<(Math.min(filteredPicks.length,10));i++){
        const btn = $("<button>")
        btn.text(filteredPicks[i].Title);
        if (!titles.includes(filteredPicks[i].Title)){
            picksContainer.append(btn);
            titles.push(filteredPicks[i].Title)
        }        
        console.log(titles);
    }
}

function renderMain(title){
    
}