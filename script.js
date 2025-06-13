// let narrativeIndex = 0;
let totalFoodItems = 0;
let clickedCount = 0;

// const fullNarrative = [
//   "After moving to Jakarta in 2010, my mom always packed me a Korean lunch, doshirak, to school.",
//   "I was always so embarrassed as my lunch always looked different from my friends'.",
//   "The smell of kimchi always lingered: sharp, fermented, impossible to hide. I remember scrunching my nose at the lunch table, wishing it would disappear before anyone noticed.",
//   "'What did you bring today?' my friend would ask, already peering over before I even opened the lid.",
//   "I was embarrassed by my lunch because I didn't want to be the only kid in my grade with a Korean lunch.",
//   "But surprisingly, my friends were fascinated and curious about my lunch.",
//   "I started sharing my lunch (because I was taught to), and they shared theirs.",
//   "We started sharing not only our lunches but also our cultures.",
//   "They had their favorites, and I had mine. They hated kimchi, though.",
//   "There were days I got mad at my mom for packing me kimchi.",
//   "But they always loved my Korean rice and egg rolls.",
//   "They loved how it stuck together, how it felt different in their mouths.",
//   "It was funny to see something so ordinary to me become one of their favorite parts of my lunch.",
//   "My favorite was Kerupuk. It was light and salty. I never knew something so airy could taste so bold.",
//   "I started to stop shrinking into myself during lunch. I began opening my lunchbox with a little less hesitation.",
//   "These simple exchanges became a daily thing, and I started getting more accustomed to the Indonesian food and culture."
// ];

const riceSpeech = [
  "'What did you bring today?'",
  "'Did you bring rice again? This is Korean rice, right?'",
  "'It's so sticky!'",
  "'This is so different from Indonesian rice.'"
];
const riceResponse = [
  "'The usual, rice, eggrolls, and kimchi!'",
  "'Yes, do you want to try it?'",
  "'That's how it's meant to be!'",
  "'Right? but I also really like Indonesian rice.'"
];

const kimchiSpeech = [
  "'What is that smell? It smells so weird.'",
  "'Ewww'",
  "'Can you stop bringing Kimchi?'"
];
const kimchiResponse = [
  "'Sorry...my mom packed me kimchi again.'",
  "...",
  "'I'll tell my mom...'"
];

const eggSpeech = [
  "'What is that yellow spiraly thingy?'",
  "'Woah, it's so soft. So different from my fried egg.'",
  "'This is so yummy. Can you bring more tomorrow?'"
];
const eggResponse = [
  "'My favorite part! They're Korean eggrolls called 계란말이!'",
  "'I know, that's why it's my favorite.'",
  "'Yes! I'll ask my mom.'"
];

const indoRiceSpeech = [
  "'Can I try your fried rice?'",
  "'It's so dry and fluffy. I really like it though.'",
  "'Do you want to switch my lunch with yours?'"
];
const indoRiceResponse = [
  "'Sure!'",
  "'I like your Korean rice more.'",
  "'Yes, please!'"
];

const indoEggSpeech = [
  "'The egg is such a nice touch to the meal'",
  "'The egg adds a nice touch to the meal.'"
];
const indoEggResponse = [
  "'Agreed! It's my favorite.'",
  "'It really does.'"
];

const indoKerupukSpeech = [
  "'Can I try this?'",
  "'Wow, Kerupuk really goes well with the fried rice.'",
];
const indoKerupukResponse = [
  "'Go ahead! It's an Indonesian cracker called Kerupuk!'",
  "'I know right?'"
];

const speechBubble = document.getElementById('speech-bubble');
// const narrativeBox = document.getElementById('narrative-text');
const indoSpeechBubble = document.getElementById('indo-speech-bubble');
const biteSound = document.getElementById('biteSound');

function playBiteSound() {
  biteSound.currentTime = 0;
  biteSound.play();
}

document.querySelectorAll('.riceSection, .eggSection, .kimchiSection, .indoSection').forEach(() => {
  totalFoodItems++;
});

function handleClick(elements, speechArray, responseArray, isKorean) {
  let localIndex = 0;
  elements.forEach((el) => {
    el.addEventListener('click', () => {
      // if (narrativeIndex >= fullNarrative.length) return;

      playBiteSound();
      el.style.display = 'none';
      clickedCount++;

      // narrativeBox.textContent = fullNarrative[narrativeIndex];
      // narrativeBox.classList.remove('hidden');

      const sIndex = Math.min(localIndex, speechArray.length - 1);
      const rIndex = Math.min(localIndex, responseArray.length - 1);

      speechBubble.textContent = isKorean ? speechArray[sIndex] : responseArray[rIndex];
      indoSpeechBubble.textContent = isKorean ? responseArray[rIndex] : speechArray[sIndex];
      speechBubble.classList.remove('hidden');
      indoSpeechBubble.classList.remove('hidden');

      localIndex++;
      // narrativeIndex++;

      if (clickedCount === totalFoodItems) {
        setTimeout(() => {
          window.location.href = "ending.html";
        }, 2000);
      }
    });
  });
}

// Korean food items
handleClick(document.querySelectorAll('.riceSection'), riceSpeech, riceResponse, true);
handleClick(document.querySelectorAll('.kimchiSection'), kimchiSpeech, kimchiResponse, true);
handleClick(document.querySelectorAll('.eggSection'), eggSpeech, eggResponse, true);

// Indonesian food items
handleClick(document.querySelectorAll('.indo-rice-group .indoSection'), indoRiceSpeech, indoRiceResponse, false);
handleClick(document.querySelectorAll('.indo-egg-group .indoSection'), indoEggSpeech, indoEggResponse, false);
handleClick(document.querySelectorAll('.indo-kerupuk-group .indoSection'), indoKerupukSpeech, indoKerupukResponse, false);
