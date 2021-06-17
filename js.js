function $(id) { return document.getElementById(id); }

window.onload = () => {

    //making all project descriptions start at the same horizontal level
    largestHeight = $('GA').clientHeight;
    $('DB').style.height = largestHeight + 'px';
    $('PS').style.height = largestHeight + 'px';


    //setting the height of the skill set container and of each column
    maxHeight = Math.max($('left').clientHeight, $('center').clientHeight, $('right').clientHeight) + 'px';
    $('skill-container').style.height = maxHeight;
    $('left').style.height = maxHeight;
    $('center').style.height = maxHeight;
    $('right').style.height = maxHeight;


    //setting the bottom margin of the skill-section so it's content doesn't overlap with the proj-section
    skillSize = $('skill-container').clientHeight;;
    $('skill-section').style.marginBottom = skillSize + 100 + 'px';

    //setting the bottom margin of the proj-section so its content doesn't overlap with the footer
    listSize = $('proj-list-container').clientHeight;
    $('proj-section').style.marginBottom = listSize + 100 + 'px';


    //styling the testimonial buttons once they are selected
    styleTestimonialBtns();

    $('testimonial-1').addEventListener('click', () => {
        styleTestimonialBtns();
    })
    $('testimonial-2').addEventListener('click', () => {
        styleTestimonialBtns();
    })


}

function styleTestimonialBtns() {
    var testimonials = document.getElementsByName('testimonials');
    for (var testimonial of testimonials) {
        if ($(testimonial.id).checked) {
            $(testimonial.id).labels[0].classList.add('selected-testimonial-btn-label');
            $(testimonial.id).labels[0].classList.remove('unselected-testimonial-btn-label');
        }
        else {
            $(testimonial.id).labels[0].classList.remove('selected-testimonial-btn-label');
            $(testimonial.id).labels[0].classList.add('unselected-testimonial-btn-label');
        }
    }
}