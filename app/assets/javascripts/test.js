<html>
     <head>
          <!-- If you were emailed this survey, you will need to save it to disk and view it in a web browser, Since your email program does not support HTML. -->
          <meta http-equiv="content-type" content="text/html; charset=%CHARSET%" />
          <title>%TITLE%</title>
          %STYLE%%SCRIPT%
          <script type="text/javascript" src="https://www.infosurv.com/@live/includes/jquery.cookie.js"></script>
          <script type="text/javascript" src="https://www2.infosurv.com/js/ErrorValidation3.js"></script>
     </head>
     <body onload="%ONLOAD%">
          <!-- Do not edit the form action command or any of the form fields. -->
          %HEADER%
          %FORM%
          %FOOTER%
          <div style="text-align:center;clear: both;">
               <img src="https://surveys.infosurv.com/vovici/images/general/infosurv_logo_small.png">
               <br>
               <small>&copy; 2018 Infosurv, Inc. All rights reserved. v2.0</small>
          </div>
          <script type="text/javascript">

               var isArray = function (value) {
                    return Object.prototype.toString.apply(value) === '[object Array]';
               };

               var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

               Array.prototype.shuffle = function() {
                    var int, j, temp;
                    int = this.length;
                    if (int === 0) {
                         return;
                    }
                    while (--int) {
                         j = Math.floor(Math.random() * (int + 1));
                         temp = this[int];
                         this[int] = this[j];
                         this[j] = temp;
                    }
                    return this;
               };

               (function ($) {
                    var slideholder = $('#slideholder'),
                        count = 16, // total number of slides
                        submit = $('input.submit-button'),
                        endanchor = $('a[name=END]'),
                        buttons = [$('<input type="button" style="float:left;" value="<< Back">'),$('<input type="button" style="float:right;" value="Next >>">')],
                        counter = 1, // start at slide 1
                        inc = 1,
                        history = [],
                        shownindexes = [];

                    function errorpage(whatpage) {
                         slideholder.css('margin-left','0');
                         $('div.ourQuest').hide();
                         $('#'+whatpage).show();
                         buttons[1].hide();
                    }

                    function checkCookie(){
                         if($.cookie('verzenio_v2_survey_infosurv') && $.cookie('verzenio_v2_survey_infosurv') == '1') {
                              errorpage('already_completed');
                         } else if ($.cookie('verzenio_v2_survey_infosurv') && $.cookie('verzenio_v2_survey_infosurv') == '0') {
                              errorpage('terminus');
                         } else {
                              $.cookie('verzenio_v2_survey_infosurv','2', {expires: 30 });
                         }
                    }

                    function reColor() {
                         $('tbody tr:visible').each(function(i,r) {
                              var somethingotherthanthis=$(this).removeClass('odd-row even-row');
                              if(i%2) {
                                   somethingotherthanthis.addClass('odd-row');
                              } else {
                                   somethingotherthanthis.addClass('even-row');
                              }
                         });
                    }

                     function terminator() {
                         if( $('#Q4_3').is(':checked') || $('#Q4_4').is(':checked') || $('#Q4_5').is(':checked') || $('#Q30_2').is(':checked') ) {
                            submit.trigger('click');
                            $.cookie('verzenio_v2_survey_infosurv', '1', {expires: 30 });
                            return true;
                         }
                              else return false;
                    }

                    function brancher(qid){
                      if (qid=='Q25') {
                        if ($('#Q25_6').is(':checked')) {
                          $("#que11").hide();
                        inc = 2;
                        } else {

                        }
                      }
                    }

                    function rowHider() {
                         var authorizethese = [],
                         colorcounter = 1;
                         for (var i = 1; i < 7; i++){
                              if ($('#Q888_'+i).is(':checked')) {
                                   $('#Q9T'+i).show();
                                   authorizethese.push(i-1);
                              }
                              else{
                                   $('#Q9T'+i).hide();
                              }
                         }
                         reColor();
                         return authorizethese;
                    }


                    function validityCheck(page) {
                         var valid_quests = [
                           'Q2',
                           'Q3',
                           'Q4',
                           'Q5',
                           'Q8',
                           'Q6',
                           'Q10',
                           'Q11',
                           'Q24',
                           'Q25',
                           'Q26',
                           'Q27',
                           'Q28',
                           'Q29',
                           'Q30',
                           'Q31'
                          ],
                              returncondition = true,
                              useme = valid_quests[page-1],
                              errormess = $('#validerr');
                         brancher(useme);
                         if(useme != '') {
                              if (isArray(useme)) {
                                   var temp_useme = [];
                                   for(var i = 0, end=shownindexes.length; i< end; i++) {
                                       temp_useme.push(useme[shownindexes[i]]);
                                   }
                                   if(useme[0]!='Q10_A_1')
                                        useme=temp_useme;
                                   for (var x = 0, y = useme.length; x<y; x++) {
                                        if(!needsAnswer(useme[x])) {
                                             returncondition = false;
                                        }
                                   }
                                   if (returncondition) {
                                        errormess.css('visibility','hidden');
                                   } else {
                                        errormess.css('visibility','visible');
                                   }
                                   return returncondition;
                              } else {
                                   returncondition = needsAnswer(useme);
                                   if (returncondition) {
                                        errormess.css('visibility','hidden');
                                   } else {
                                        errormess.css('visibility','visible');
                                   }
                              return returncondition;
                              }
                         } else {
                              errormess.css('visibility','hidden');
                              return true;
                         }
                    }

                    function needsAnswer(resource){
                         var checkwhere,
                              whattype,
                              errormess = $('#validerr');
                         if(resource.indexOf('_')==-1) {
                              checkwhere = $('input[name='+resource+']');
                         } else {
                              checkwhere =  $('input[name^='+resource+']');
                         }
                         whattype = checkwhere.attr('type');
                         if (!whattype && $('#'+resource).is('select')) { whattype = 'select'; }
                         switch(whattype) {
                              case "radio":
                                   if ($('input[name='+resource+']:checked').length==0) { return false; }
                                   else { return true; }
                              break;
                              case "checkbox":
                                   if ($('input[name^='+resource+']:checked').length==0) { return false; }
                                   else { return true; }
                              break;
                              case "select":
                                   if ($('#'+resource).val() == 0) { return false; }
                                   else { return true; }
                              break;
                              case "text":
                              case "textarea":
                                   if($('#'+resource).val()=="") {
                                        return false;
                                   } else {
                                        return true;
                                   }
                              break;
                         };
                    }

                    buttons[1].click(function () {
                         $('#slideholder').scrollTop(0);
                         if (validityCheck(counter)) {
                              if(terminator()) {
                                   return false;
                              }
                              history.push(inc);
                              if (counter<count) {
                                   counter=counter+inc;
                                   inc=1;
                                   slideholder.animate({
                                        marginLeft: '-='+480+'px'
                                   }, 500);
                                   if (counter == count) {
                                        this.value = 'Submit';
                                   }
                              } else {
                                   $.cookie('verzenio_v2_survey_infosurv','1', { expires: 30 });
                                   submit.trigger('click');
                              }
                         }
                    });

                    buttons[0].click(function () {
                         $('#validerr').css('visibility','hidden');
                         if (counter>1) {
                              counter=counter-history.pop();
                              lastinc=1;
                              slideholder.animate({
                                   marginLeft: '+='+480+'px'
                              }, 500);
                              if (counter != count) {
                                   buttons[1].val('Next >>');
                              }
                         }
                    });

                    buttons[1].insertAfter(endanchor);
                    //buttons[0].insertAfter(endanchor);
                    checkCookie();
               }(jQuery));
          </script>
     </body>
</html>
