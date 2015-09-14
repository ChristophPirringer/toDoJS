$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task-name").val();
    var newTask = {taskName: inputtedTask}

    $("ul#unfinished-tasks").append("<li><span class='complete'><span class='unfinished-task'>" + newTask.taskName +
    "</span> <span class='glyphicon glyphicon-ok check' aria-hidden='true'></span></span></li>")

    $(".complete").last().click(function() {
      $("ul#completed-tasks").append("<li><span class = 'entry'><span class='done-task'>" + newTask.taskName +
      "</span> <span class='glyphicon glyphicon-remove incomplete' aria-hidden='true'></span></span></li>")
      $(this).remove();
      $('.entry').click(function() { $(this).remove(); });
      $('.incomplete').click(function() { $(this).remove();
        $("ul#unfinished-tasks").append("<li><span class='complete'><span class='unfinished-task'>" + newTask.taskName +
        "</span> <span class='glyphicon glyphicon-ok check' aria-hidden='true'></span></span></li>")
        $(".complete").last().click(function() {
          $("ul#completed-tasks").append("<li><span class = 'entry'><span class='done-task'>" + newTask.taskName +
          "</span> <span class='glyphicon glyphicon-remove incomplete' aria-hidden='true'></span></span></li>")
          $(this).remove();
          });
      });
    });

  });
});
