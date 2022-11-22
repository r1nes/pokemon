$(document).ready(function() {

    $.get("https://uyghur.ai/course/data/pokemon.json", function(data, status) {
        displayPokemonCards(data);

        function displayPokemonCards(pokemonData) {
            let pokemonDiv = document.getElementById("pokemonContainer");
            let rows = pokemonData.length / 6;
            let bgType = " ";
            for (let eachRow = 0; eachRow < rows; eachRow++) {
                let rowId = "row" + eachRow;
                pokemonDiv.innerHTML += "<div class='row' id='" + rowId + "'></div>";

                for (let i = 0; i < 6; i++) {
                    let currentIndex = eachRow * 6 + i;
                    if (pokemonData[currentIndex].type[0] == 'Water') {
                        bgType = "water-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Fire') {
                        bgType = "fire-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Grass') {
                        bgType = "grass-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Electric') {
                        bgType = "electric-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Bug') {
                        bgType = "bug-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Ghost') {
                        bgType = "ghost-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Normal') {
                        bgType = "normal-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Psychic') {
                        bgType = "psychic-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Dragon') {
                        bgType = "dragon-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Ice') {
                        bgType = "ice-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Poison') {
                        bgType = "poison-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Ground') {
                        bgType = "ground-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Rock') {
                        bgType = "rock-type";
                    } else if (pokemonData[currentIndex].type[0] == 'Fighting') {
                        bgType = "fighting-type";
                    } else {
                        bgType = " ";
                    }
                    if (pokemonData[currentIndex] != null || pokemonData[currentIndex] != undefined) {
                        document.getElementById(rowId).innerHTML +=
                            "<div class='col-2'>" +
                            "<div class='card h-100 " + bgType + " '>" +
                            //"<img src='" + pokemonData[currentIndex].img + "' onclick='pokemonSayHello(" + JSON.stringify(pokemonData[currentIndex]) + ")' class='card-img-top'>" +
                            "<img src='" + pokemonData[currentIndex].img + "'  class='card-img-top'>" +
                            "<div class='card-body'>" +
                            "<p class='card-text'></p></div>" +
                            "<div class='card-footer card-text'>" + pokemonData[currentIndex].name + "</div>" +
                            "</div></div>";
                    }
                }
            }
        }



        function loadPokemonInfo(pokemon) {
            let alertText = "";
            if (pokemon != null || pokemon != undefined) {
                alertText = "Hi, I'm " + pokemon.name + "! My type(s): " + pokemon.type;
            }

            alert(alertText);
        }

        function pokemonSayHello(pokemon) {
            alert("Hi, I'm " + pokemon.name + " I'm " + pokemon.type + " type.");
        }

        $(document).ready(function() {
            $("#hide-type").click(function() {
                let selectedType = $('#pokemonTypeOption :selected').text();
                if (selectedType == "Water") {
                    $(".water-type").hide();
                } else if (selectedType == "fire") {
                    $(".fire-type").hide();
                } else if (selectedType == "grass") {
                    $(".grass-type").hide();
                } else if (selectedType == "electric") {
                    $(".electric-type").hide();
                } else if (selectedType == "bug") {
                    $(".bug-type").hide();
                } else if (selectedType == "ghost") {
                    $(".ghost-type").hide();
                } else if (selectedType == "normal") {
                    $(".normal-type").hide();
                } else if (selectedType == "psychic") {
                    $(".psychic-type").hide();
                } else if (selectedType == "dragon") {
                    $(".dragon-type").hide();
                } else if (selectedType == "ice") {
                    $(".ice-type").hide();
                } else if (selectedType == "poison") {
                    $(".poison-type").hide();
                } else if (selectedType == "ground") {
                    $(".ground-type").hide();
                } else if (selectedType == "rock") {
                    $(".fighting-type").hide();
                } else {
                    alert("select a type");
                }

            });

            $("#show-type").click(function() {
                let selectedType = $('#pokemonTypeOption :selected').text();
                if (selectedType == "water") {
                    $(".water-type").show();
                } else if (selectedType == "fire") {
                    $(".fire-type").show();
                } else if (selectedType == "grass") {
                    $(".grass-type").show();
                } else if (selectedType == "electric") {
                    $(".electric-type").show();
                } else if (selectedType == "bug") {
                    $(".bug-type").show();
                } else if (selectedType == "ghost") {
                    $(".ghost-type").show();
                } else if (selectedType == "normal") {
                    $(".normal-type").show();
                } else if (selectedType == "psychic") {
                    $(".psychic-type").show();
                } else if (selectedType == "dragon") {
                    $(".dragon-type").show();
                } else if (selectedType == "ice") {
                    $(".ice-type").show();
                } else if (selectedType == "poison") {
                    $(".poison-type").show();
                } else if (selectedType == "ground") {
                    $(".ground-type").show();
                } else if (selectedType == "rock") {
                    $(".fighting-type").show();
                } else {
                    alert("select a type");
                }

            });

        });
    });
});