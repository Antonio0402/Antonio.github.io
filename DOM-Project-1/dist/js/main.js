//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


let Headspace = "@Headspace, #mindfulmoments";
let CoFounder = "Andy Puddicombe, Headspace co-founder";
let Anonymous = "Anonymous";

const quotes = [
{
  quote: '"To know yourself is to be confident. To be confident is to fearlessly express your potential."',
  person: CoFounder
},
{
  quote: '"A day thinking about what could happen, should happen, or what might have been is a day missed."',
  person: Headspace
},
{
  quote: '"Creativity is as boundless, spacious and limitless as the sky. We are born with it. It cannot be lost and it cannot be destroyed. It can only be forgotten."',
  person: CoFounder
},
{
  quote: "Distractions are everywhere. Notice what takes your attention, acknowledge it, and then let it go.",
  person: Headspace
},
{
  quote: '"Remember the blue sky. It may at times be obscured by clouds, but it is always there."',
  person: CoFounder
},
{
  quote: '"So much time and effort is spent on wanting to change, trying to change, to be somebody different, better, or new. Why not use this time to get comfortable with yourself as you are instead?"',
  person: CoFounder
},
{
  quote: '"Look up and smile. But only if you feel like it."',
  person: Headspace
},
{
  quote: '"To know one\'s own mind is nothing short of life-changing."',
  person: Headspace
},
{
  quote: '"We can\'t always change what\'s happening around us, but we can change what happens within us."',
  person: CoFounder
},
{
  quote: '"Meditation nourishes the mind in the same way that food nourishes the body."',
  person: CoFounder
},
{
  quote: '"In the midst of movement and chaos, keep stillness inside of you."',
  person: Anonymous
},
{
  quote: '"Life is short. We can live it lost in thought or we can choose to be present as life unfolds around us."',
  person: Headspace
},
{
  quote: '"Meditation means letting go of our baggage, letting go of all the pre-rehearsed stories and inner-dialogue that we\'ve grown so attached to."',
  person: CoFounder
},
{
  quote: '"Mindfulness allows us to live life fully. Fully aware, fully awake, fully alive."',
  person: Headspace
},
{
  quote: '"We can\'t control the sea, but we can learn how to surf the waves."',
  person: Headspace
},
{
  quote: '"There is no good or bad meditation — there is simply awareness or non-awareness. To begin with, we get distracted a lot. Over time, we get distracted less. Be gentle with your approach, be patient with the mind, and be kind to yourself along the way."',
  person: CoFounder
},
{
  quote: '"Everyone has a little madness on the inside. The skill is in understanding the madness, and then being at ease with it."',
  person: Headspace
},
{
  quote: '"Meditation is not about having yet another new strategy of self-help plan, but rather providing a framework in which to see yourself more clearly."',
  person: CoFounder
},
{
  quote: '"The quieter you become, the more you can hear."',
  person: Anonymous
},
{
  quote: '"Clarity dictates our perspective, and our perspective dictates our experience. Get more clarity in your life."',
  person: CoFounder
},
{
  quote: '"Now is a great time to be present. Now is good, too. And now."',
  person: Headspace
},
{
  quote: '"The heart of meditation is taking ourselves a little less seriously."',
  person: Headspace
},
{
  quote: '"We can\'t control the sea, but we can learn how to surf the waves."',
  person: Headspace
},
{
  quote: '"It is not that thinking is bad, and non-thinking is good. True freedom is when we are equally content, no matter what arises in the mind; free from bias, beyond any idea of thought versus no-thought, or this versus that."',
  person: CoFounder
},
{
  quote: '"No matter how fast life is moving around us, there is always a place of stillness inside."',
  person: Headspace
},
{
  quote: '"There are no mistakes in meditation. There is only the process of learning how to approach the practice, and discovering what habits or actions to let go of. This journey is unique for us all."',
  person: CoFounder
},
{
  quote: '"There is no room for anger when the mind is calm."',
  person: Headspace
},

{
  quote: '"Meditation means letting go of our baggage, letting go of all the pre-rehearsed stories and inner-dialogue that we\'ve grown so attached to."',
  person: CoFounder
},
{
  quote: '"The mind is our most precious resource, through which we experience every single moment of life. Are you looking after yours?"',
  person: Headspace
},
{
  quote: '"The mind is our most precious resource, through which we experience every single moment of life. Are you looking after yours?"',
  person: Headspace
},
{
  quote: '"In letting go, we cease trying to make something happen, and then the mind naturally opens. It is like watching a flower grow — free from effort, its petals naturally unfold to reveal its beauty."',
  person: CoFounder
},
{
  quote: '"Meditation is less about knowing what to do and more about knowing what not to do."',
  person: Headspace
},
{
  quote: '"Best advice ever received was from one of my meditation teachers at the monastery: \'Be present, be patient, be gentle, be kind…everything else will take care of itself."',
  person: CoFounder
},
{
  quote: '"Meditation and life are not separate. Meditation simply helps us to see and understand life more clearly."',
  person: Headspace
},
];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random].quote;
  person.textContent = quotes[random].person;
});

