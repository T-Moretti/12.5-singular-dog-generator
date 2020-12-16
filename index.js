
function formSubmission() {
    $('form').submit(event => {
        event.preventDefault();
        let dogSearch = $('#site-search').val();
        produceDogImage(dogSearch);
    });
}

function produceDogImage(dogSearch) {
    fetch(`https://dog.ceo/api/breed/${dogSearch}/images/random`)
    .then(response => {
        if (response.status === 404) throw Error()
        return response.json()
    })
    .then(responseJson => showResults(responseJson))
    .catch(error => alert('Oh no! There was an error. Please try again!'));
}

function showResults(responseJson) {
    const image = responseJson.message;
    $('#image-holder').html('');
        $('#image-holder').append(`<img src="${image}" class="results-img">`)
        $('.results').removeClass('hidden') 
}

$(function() {
    formSubmission();
});