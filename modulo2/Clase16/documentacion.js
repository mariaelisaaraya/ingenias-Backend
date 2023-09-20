/**
* My method description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
*
* @method methodName
* @param {String} foo Argument 1
* @param {Object} config A config object
* @param {String} config.name The name on the config object
* @param {Function} config.callback A callback function on the config object
* @param {Boolean} [extra=false] Do extra, optional work
* @return {Boolean} Returns true on success
*/
function methodName(foo, config, extra) {
    return true
}

/**
* My method description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
*
// esta funcion escribe mi archivo frutas.json
* @method guardarFrutas
* @param {Object} frutas A frutas object
* @param {String} frutas.nombre The name on the config object
* @param {Number} frutas.importe
* @param {Number} frutas.stock The name on the config object
* @param {Number} frutas.id
*/
function guardarFrutas(frutas){
    const datos = JSON.stringify(frutas);
    fs.writeFileSync(__dirname + process.env.DATABASE_PATH ,datos)
}
