$(document).ready(function() {
  var courseStructure = [
    {
      section: "MERN stack ",
      subsections: [
        {
          title: "MERN stack: Introduction",
          mediaType: "video",
          mediaSource: "video.mp4",
          description: "Learn to develop full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) stack through hands-on projects and comprehensive tutorials. Master front-end and back-end development with this popular JavaScript stack"
        },
      ]
    },
    {
      section: "Data Structures and Algorithm",
      subsections: [
        {
          title: "DSA 2.1: Introduction",
          mediaType: "audio",
          mediaSource: "audio.mp3",
          description: "Master the fundamentals of Data Structures and Algorithms (DSA) with this comprehensive course, covering essential concepts and problem-solving techniques to excel in programming interviews and real-world development challenges"
        },
      ]
    }
  ];

  var courseNav = $('#courseNav');
  $.each(courseStructure, function(index, section) {
    courseNav.append('<li class="list-group-item"><a href="#section' + (index + 1) + '">' + section.section + '</a></li>');
  });

  var mainContent = $('#mainContent');
  $.each(courseStructure, function(index, section) {
    mainContent.append('<section id="section' + (index + 1) + '"><h2>' + section.section + '</h2></section>');
    var currentSection = $('#section' + (index + 1));
    $.each(section.subsections, function(subIndex, subsection) {
      currentSection.append('<div class="card mb-3"><div class="card-body"><h3>' + subsection.title + '</h3>');
      if (subsection.mediaType === 'video') {
        currentSection.append('<video controls class="mb-3"><source src="' + subsection.mediaSource + '" type="video/mp4">Your browser does not support the video tag.</video>');
      } else if (subsection.mediaType === 'audio') {
        currentSection.append('<audio controls class="mb-3"><source src="' + subsection.mediaSource + '" type="audio/mpeg">Your browser does not support the audio tag.</audio>');
      }
      currentSection.append('<p>' + subsection.description + '</p></div></div>');
    });
  });

  $('#languageSelect').change(function() {
    var selectedLanguage = $(this).val();
  });

});
