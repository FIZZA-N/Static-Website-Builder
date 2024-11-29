document.addEventListener('DOMContentLoaded', function () {
    var togglebutton = document.getElementById('toggle-skills');
    var Skills = document.getElementById('Skills');
    togglebutton.addEventListener('click', function () {
        if (Skills.style.display === 'none') {
            Skills.style.display = 'block';
        }
        else {
            Skills.style.display = 'none';
        }
    });
});
