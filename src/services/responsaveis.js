let lista = []

function list(){
    return lista
}

function create(req){
    lista.push(req)
}

function update(id, req){
    lista[id-1] = req;
}

module.exports = {list, create,update}