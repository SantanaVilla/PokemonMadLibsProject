const storySection = document.getElementById("completed-story");

const madLibsForm = document.getElementById("PokemonMadlib-Form");

const submitMadlib = (Event) => {
    // alert("Gotta Catch 'Em All!");
    // Prevents Inputs from resetting and clears url address bar off inputs
    Event.preventDefault();
    madLibsForm.classList.add("hide");

    // Object to Store Form Data
    const form = new FormData(Event.target);
    const userSubmission = Object.fromEntries(form);

    // console.log(userSubmission);

    const story = `<p> So you want to be a <span class="inserted-text">${userSubmission.adjective_1}</span> Pokemon trainer, huh? You want to
    catch a <span class="inserted-text">${userSubmission.Pokemon_1}</span> and <span class="inserted-text">${userSubmission.verb_1}</span> all
    the gym badges? It is not an easy task to accomplish! You will be traveling across <span class="inserted-text">${userSubmission.place_1}</span> and meeting all types of <span class="inserted-text">${userSubmission.adjective_2}</span> opponents! But be wary trainer because wild Pokemon can be <span class="inserted-text">${userSubmission.adjective_3}</span>! However, with a <span class="inserted-text">${userSubmission.adjective_4}</span> attitude and your trusty <span class="inserted-text">${userSubmission.Pokemon_2}</span> by your side, anything is possible! 
    </p>`;

    // console.log(story);

    storySection.innerHTML += story;

    storySection.classList.remove("hide");

    let resetButton = `<button id="madlibs-reset" onclick="resetMadLibs()">Play Again?</button>`;
    storySection.innerHTML += resetButton;

}

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madLibsForm.reset();
    madLibsForm.classList.remove('hide');
}