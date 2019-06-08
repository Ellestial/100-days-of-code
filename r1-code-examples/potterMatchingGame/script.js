var request = new XMLHttpRequest();
request.open('GET', 'https://www.potterapi.com/v1/characters?key=$2a$10$g1ou2bpWNcB/sLAp9iZLMuspw2OPKf2DUpeRzY3zZzPT8SeC1u7yi', true)
request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
        var data = JSON.parse(this.response);
        console.log(data);
        var test = data.filter(function(character) {
            return character.bloodStatus == 'pure-blood'
        });
        console.log(test);
    }
}
request.send();


