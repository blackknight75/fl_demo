</div>
</div>
</div>
<script type="text/javascript">
(function($){
$('input[name^=Q4]').click(function(){
var qarray = [
$('#que4 span.question-text'),$('#que5 span.question-text'),$('#que9 span.question-text'), $('#que10 span.question-text'), $('#que11 span.question-text'), $('#que12 span.question-text'), $('#que13 span.question-text'), $('#que14 span.question-text'), $('#que15 span.question-text'), $('#que16 span.question-text')];
if($('#Q4_2').is(':checked')) {
qarray[0].text( qarray[0].text().replace("When were you", "When was your friend or relative"));
qarray[1].text( qarray[1].text().replace("Had you", "Had your friend or relative"));
qarray[2].text( qarray[2].text().replace("healthcare provider", "healthcare provider for the person under your care"));
qarray[3].text( qarray[3].text().replace("schedule your next healthcare provider appointment", "schedule an appointment with the healthcare provider for the person under your care"));
qarray[4].text( qarray[4].text().replace("Verzenio with your doctor", "Verzenio with the doctor for the person under your care"));
qarray[5].text( qarray[5].text().replace("Verzenio with your doctor", "Verzenio with the doctor for the person under your care"));
qarray[6].text( qarray[6].text().replace("Verzenio", "Verzenio for the person under your care"));
qarray[7].text( qarray[7].text().replace("Verzenio", "Verzenio for the person under your care"));
qarray[8].text( qarray[8].text().replace("Are you", "Is the person under your care"));
qarray[9].text( qarray[9].text().replace("describes your current treatment regimen", "describes the current treatment regimen for the person under your care"));
}
else {
qarray[0].text( qarray[0].text().replace("When was your friend or relative", "When were you"));
qarray[1].text( qarray[1].text().replace("Had your friend or relative", "Had you"));
qarray[2].text( qarray[2].text().replace("healthcare provider for the person under your care", "healthcare provider"));
qarray[3].text( qarray[3].text().replace("schedule an appointment with the healthcare provider for the person under your care", "schedule your next healthcare provider appointment"));
qarray[4].text( qarray[4].text().replace("Verzenio with the doctor for the person under your care", "Verzenio with your doctor"));
qarray[5].text( qarray[5].text().replace("Verzenio with the doctor for the person under your care", "Verzenio with your doctor"));
qarray[6].text( qarray[6].text().replace("Verzenio for the person under your care", "Verzenio"));
qarray[7].text( qarray[7].text().replace("Verzenio for the person under your care", "Verzenio"));
qarray[8].text( qarray[8].text().replace("Is the person under your care", "Are you"));
qarray[9].text( qarray[9].text().replace("describes the current treatment regimen for the person under your care", "describes your current treatment regimen"));
}
});
}(jQuery));
</script>
