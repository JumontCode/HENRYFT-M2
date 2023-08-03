const URLPrincipal = 'http://localhost:5000/amigos'
let btn = document.querySelector('#boton')


/****  FUNCION PARA MOSTRAR LOS AMIGOS   ****/ 
// $('#boton').click(()=>{});
    btn.addEventListener('click',verAmigos)

    function verAmigos(){
        $.get(URLPrincipal, (amigos)=>{
        let listaAmigos = document.querySelector('#lista')
        amigos.forEach((amigo) => {
            let li = document.createElement('li');
            li.innerHTML = amigo.name;
            listaAmigos.appendChild(li);
        });
    })}


/****  FUNCION PARA BUSCAR LOS AMIGOS   ****/ 
    let btnBuscar = document.querySelector('#search');
    btn.addEventListener('click',BuscarAmigos);
    let id = document.querySelector('#input').value;
    function BuscarAmigos(){
        let span = document.querySelector('#amigo')
        if(id){
            $.get(`${URLPrincipal}/${id}`, (busqueda)=>{
                span.innerHTML = busqueda.name;
                id = $('#input').val('');
            })
        }}

/****  FUNCION PARA ELIMINAR AMIGOS   ****/ 
$('#delete').click(() => {
    let id = $('#inputDelete').val();
    if (id) {
      $.ajax({
        url: `${URLPrincipal}/${id}`,
        type: 'DELETE',
        success: () => {
        }
      })
    } else {
      alert('Por favor, ingrese un input válido')
    }
  });