$(function() {

 $.ajax({
    url: 'https://www.codeschool.com/users/1877865.json',
    dataType: 'jsonp',
    success: function(response) {
        addCourses(response.courses.completed);
    }
  });

    function addCourses(courses){

        var badges = $("#badges");

        courses.forEach(function(course) {

            var courseholder = $("<div />", {
              "class" : "course"
            }).appendTo(badges);

            $("<h3 />", {
                text: course.title
            }).appendTo(courseholder);

            $("<img />", {
                src: course.badge
            }).appendTo(courseholder);

            $("<a />", {
                "class" : "btn btn-primary",
                href: course.url,
                target: "_blank",
                text: "See Course"
            }).appendTo(courseholder);

        })
    }

});
