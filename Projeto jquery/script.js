$(document).ready(function () {
  $('#form-tarefa').on('submit', function (e) {
    e.preventDefault();

    const nomeTarefa = $('#tarefa').val().trim();

    if (nomeTarefa !== '') {
      const novaTarefa = $('<li></li>').text(nomeTarefa);
      $('#lista-tarefas').append(novaTarefa);
      $('#tarefa').val('');
    } else {
      alert('Escreva uma tarefa.');
    }
  });

  $('#lista-tarefas').on('click', 'li', function () {
    $(this).toggleClass('riscado'); 
  });
});
