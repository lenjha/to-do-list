function Quest(name, description) {
  this.name = name;
  this.description = description;
}

$(document).ready(function() {
  var quests = [];
  $("#questsToAccept").submit(function(event) {
    debugger;
    event.preventDefault();
    var name = $("input#taskName").val();
    var description = $("input#taskDesc").val();
    var newQuest = new Quest(name, description);
    quests.push(newQuest);

    $("ul#questsToComplete").append("<li><span class='newTask'>" + newQuest.name + "</span></li><li><span class='remove'>Completed?</span></li>")
    $("#questsToComplete").show();
    $("input").each(function() {
      $(this).val("");
    });

    $("#newQuest").last().click(function() {
      $(".questList").show();
      $(".questName").text(newQuest.name);
      $(".questDesc").text(newQuest.description);
    });
  });
});

//add tasks to create a list of things to do
//add option for users to tell if task is done
//use jQuery to remove tasks from the list
