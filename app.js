const tareas= [
    {
        titulo: 'investigacion',
        status:'pendiente'
    },
    {
        titulo: 'investigacion',
        status:'pendiente'
    }
];
const fs = require("fs");
exports.leerTareas = function () {
    let texto = fs.readFileSync("./tareas.json");
    return JSON.parse(texto);
}
exports.agregarTarea = function (tarea) {
    let tareas = exports.leerTareas();
    tareas.push(tarea);
    let formato = JSON.stringify(tareas);
    fs.writeFileSync("./tareas.json", formato);
}
exports.filtrarTareasPorEstado = function (status) {
    let tareas = exports.leerTareas();
    return tareas.filter((tarea) => tarea.status === status);
}