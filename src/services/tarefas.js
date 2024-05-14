let lista = []

function list(){
    return lista
}

function create(req){
    lista.push(req)
}


module.exports = {list, create}