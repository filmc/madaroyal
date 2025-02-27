(function($) {
  "use strict";

  $(document).ready(function() {

    var templateOptions = Joomla.getOptions('j51_template');

    // Add parent-hover class to hovered parent items
    $('.hornav li').hover(function() {
      $(this).addClass('parent-hover');
    }, function() {
      $(this).removeClass('parent-hover');
    });

    // Smoothscroll
    $('.menu a, a.smooth-scroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top + parseInt(templateOptions.scrolltoOffset)
          }, 800);
          return false;
        }
      }
    });

    // Bootstrap stuff
    $(document).ready(function() {

      // Turn radios into btn-group
      $('.radio.btn-group label').addClass('btn');
      $(".btn-group label:not(.active)").click(function() {
        var label = $(this);
        var input = $('#' + label.attr('for'));

        if (!input.prop('checked')) {
          label.closest('.btn-group').find("label").removeClass('active btn-success btn-danger btn-primary');
          if (input.val() == '') {
            label.addClass('active btn-primary');
          } else if (input.val() == 0) {
            label.addClass('active btn-danger');
          } else {
            label.addClass('active btn-success');
          }
          input.prop('checked', true);
        }
      });
      $(".btn-group input[checked=checked]").each(function() {
        if ($(this).val() == '') {
          $("label[for=" + $(this).attr('id') + "]").addClass('active btn-primary');
        } else if ($(this).val() == 0) {
          $("label[for=" + $(this).attr('id') + "]").addClass('active btn-danger');
        } else {
          $("label[for=" + $(this).attr('id') + "]").addClass('active btn-success');
        }
      });
    })

  });
})(jQuery);

(function() {
  var templateOptions = Joomla.getOptions("j51_template");

  // Add has-shape to showcase if top1 exists
  let top1 = document.getElementById('container_top1_modules');
  let showcase1 = document.getElementById('container_showcase1_modules');
  if (top1 !== null && showcase1 !== null) {
    showcase1.classList.add('has-shape');
  }

  // Mobile menu
  const menu = new MmenuLight(document.querySelector("#mobile-menu"));

  const navigator = menu.navigation({
    theme: "dark"
  });

  const drawer = menu.offcanvas({
    position: templateOptions.mobileMenuPosition
  });

  document
    .querySelector('a[href="#mobile-menu"]')
    .addEventListener("click", evnt => {
      evnt.preventDefault();
      drawer.open();
    });

  // Animate on scroll
  document.addEventListener('DOMContentLoaded', function() {
    var executeThis = function() {
      var continuousElements = document.getElementsByClassName("animate")
      for (var i = 0; i < continuousElements.length; i++) {
        new Waypoint({
          element: continuousElements[i],
          handler: function() {
            this.element.classList.add("animated");
          },
          offset: "85%"
        })
      }
    };
    var checkWaypoint = function() {
      if (typeof Waypoint === "undefined") {
        setTimeout(checkWaypoint, 50);
      } else {
        executeThis();
      }
    };
    checkWaypoint();

    // Add scrolled class to body on scroll
    new Waypoint({
      element: document.getElementById('container_header'),
      handler: function(direction) {
        document.body.classList.toggle('scrolled');
      },
      offset: -100
    });
  });

  // Apply logo image width to logo-strip
  document.addEventListener('readystatechange', event => {
    let logoWidth = document.getElementById('logo').offsetWidth;
    let logoStrip = document.getElementById('logo-strip');

    if (event.target.readyState === 'complete' && logoStrip) {
      logoStrip.style.width = logoWidth + 'px';
    }
  });

})();

function dodajAktywne(elem) {
  var a = document.getElementsByTagName('a')
  for (i = 0; i < a.length; i++) {
    a[i].parentNode.classList.remove('active')
  }
  elem.parentNode.classList.add('active');
}
