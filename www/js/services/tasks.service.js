services.factory('TaskService', function(){
  var lista = [
    {nome:'Tarefa 1', pronto: false},
    {nome:'Tarefa 2', pronto: true},
    {nome:'Tarefa 3', pronto: false},
    {nome:'Tarefa 4', pronto: false},
    {nome:'Tarefa 5', pronto: true},
  ];

  this.recuperarTarefas = function(){
    return lista;
  };
  return this;
});
