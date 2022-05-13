$('#busca').on('click', function(event){
    event.preventDefault()

    var nome = $("#nomepokemon").val()
    var url = `https://pokeapi.co/api/v2/pokemon/${nome}`

    $.ajax({
        url: url,
        type: "GET",
        dataType: 'json',

        success: function(result) {
            console.log(result)

            var img = result.sprites.front_default;
            $('#pokeimage').attr('src', img)
            $('#pokename').html(`Nome: ${result.name}`)
            $('#poketipo').html(`Um movimento: ${result.moves[0].move.name}`)
            $('#pokehabilidade').html(`Uma habilidade: ${result.abilities[1].ability.name}`)
           
        },
    })
})