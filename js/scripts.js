$(function() {

  var starkCount = 0;
  var lannisterCount = 0;
  var targaryenCount = 0;
  var boltonCount = 0;

    var calculate = function() {
    // question1
      if($("input:radio[name=question1]:checked").val() === "stark") {
        starkCount++;
      } else if ($("input:radio[name=question1]:checked").val() === "lannister") {
        lannisterCount++;
      } else if ($("input:radio[name=question1]:checked").val() === "targaryen") {
        targaryenCount++;
      } else if ($("input:radio[name=question1]:checked").val() === "bolton") {
        boltonCount++;
      }

      //question2
      if($("input:radio[name=question2]:checked").val() === "stark") {
        starkCount++;
      } else if ($("input:radio[name=question2]:checked").val() === "lannister") {
        lannisterCount++;
      } else if ($("input:radio[name=question2]:checked").val() === "targaryen") {
        targaryenCount++;
      } else if ($("input:radio[name=question2]:checked").val() === "bolton") {
        boltonCount++;
      }

      //question3
      if($("input:radio[name=question3]:checked").val() === "stark") {
        starkCount++;
      } else if ($("input:radio[name=question3]:checked").val() === "lannister") {
        lannisterCount++;
      } else if ($("input:radio[name=question3]:checked").val() === "targaryen") {
        targaryenCount++;
      } else if ($("input:radio[name=question3]:checked").val() === "bolton") {
        boltonCount++;
      }

      //question4
      if($("input:radio[name=question4]:checked").val() === "stark") {
        starkCount++;
      } else if ($("input:radio[name=question4]:checked").val() === "lannister") {
        lannisterCount++;
      } else if ($("input:radio[name=question4]:checked").val() === "targaryen") {
        targaryenCount++;
      } else if ($("input:radio[name=question4]:checked").val() === "bolton") {
        boltonCount++;
      }

      //question5
      if($("input:radio[name=question5]:checked").val() === "stark") {
        starkCount++;
      } else if ($("input:radio[name=question5]:checked").val() === "lannister") {
        lannisterCount++;
      } else if ($("input:radio[name=question5]:checked").val() === "targaryen") {
        targaryenCount++;
      } else if ($("input:radio[name=question5]:checked").val() === "bolton") {
        boltonCount++;
      }

      var tally = function() {
        if (starkCount > (lannisterCount || targaryenCount || boltonCount)) {
          $("starkOutput").show();
        } else if (lannisterCount > (starkCount || targaryenCount || boltonCount)) {
          $("lannisterOutput").show();
        } else if (targaryenCount > (starkCount || lannisterCount || boltonCount)) {
          $("targaryenOutput").show();
        } else if (boltonCount > (starkCount || targaryenCount || lannisterCount)) {
          $("boltonOutput").show();
        }
      };

    }

    //begin front end

    $("#quiz").submit(function(event) {
      event.preventDefault();

      calculate();

      if (starkCount > (lannisterCount || targaryenCount || boltonCount)) {
        $("#starkOutput").show();
        $("#lannisterOutput").hide();
        $("#targaryenOutput").hide();
        $("#boltonOutput").hide();
      } else if (lannisterCount > (starkCount || targaryenCount || boltonCount)) {
        $("#starkOutput").hide();
        $("#lannisterOutput").show();
        $("#targaryenOutput").hide();
        $("#boltonOutput").hide();
      } else if (targaryenCount > (starkCount || lannisterCount || boltonCount)) {
        $("#starkOutput").hide();
        $("#lannisterOutput").hide();
        $("#targaryenOutput").show();
        $("#boltonOutput").hide();
      } else if (boltonCount > (starkCount || targaryenCount || lannisterCount)) {
        $("#starkOutput").hide();
        $("#lannisterOutput").hide();
        $("#targaryenOutput").hide();
        $("#boltonOutput").show();
      }

      starkCount = 0;
      lannisterCount = 0;
      targaryenCount = 0;
      boltonCount = 0;



      console.log(starkCount);

    })
});
