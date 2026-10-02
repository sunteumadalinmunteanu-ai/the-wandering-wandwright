const TYPES=['ember','tempest','mirror','thorn','aegis','star'];
const WANDS=[
  {
    "id": "ember",
    "image": "ember-v3.png",
    "name": "The Unquiet Ember",
    "title": "For the wizard who begins again.",
    "length": "15 inches · Swept cedar & an openwork phoenix cage",
    "material": "Heartwood of the last cedar to survive the Burning of the First Grove",
    "core": "A soul-ember freely gifted by a phoenix at its thousandth rebirth",
    "details": "Obsidian drawn from a sealed primordial caldera; gold beaten into phoenix-wing filigree",
    "provenance": "Orin crossed a dead volcano for the wood. The phoenix made him wait forty years for the ember. Its wing-shaped setting was hammered from a single ingot of sunken royal gold.",
    "quote": "Anyone can carve cedar. This cedar remembers a fire that burned a kingdom. The soul inside it remembers surviving something far worse. You and it have that in common.",
    "powers": [
      [
        "The First Spark",
        "At will",
        "Burning Hands",
        "You cast Burning Hands at 1st level.",
        "1 action · 15-foot cone · Instantaneous"
      ],
      [
        "The Phoenix Unbound",
        "Once per day",
        "Sunbeam",
        "You cast Sunbeam at 6th level. Repeated searing rays can turn a battle.",
        "1 action · Self · Concentration, up to 1 minute"
      ]
    ]
  },
  {
    "id": "tempest",
    "image": "tempest-v3.png",
    "name": "The Borrowed Storm",
    "title": "For the wizard who finds another way.",
    "length": "18 inches · A silver-ribbed crescent, the longest in the collection",
    "material": "An ash bough from the suspended gardens of a djinn prince",
    "core": "The prince’s last breath before he became a living storm",
    "details": "Silver ribs forged in the Plane of Air; a sapphire that imprisoned a century of thunder",
    "provenance": "The garden has no road, no stairs, and no fixed place in the sky. Orin won the breath by answering a riddle the prince had kept unanswered for seven hundred years.",
    "quote": "It is longer than most, because it refuses to be hurried. That curve is not decoration. It is the shape of a wind nobody has successfully bottled twice.",
    "powers": [
      [
        "Above the Ordinary",
        "At will",
        "Levitate",
        "You cast Levitate at 2nd level.",
        "1 action · 60 feet · Concentration, up to 10 minutes"
      ],
      [
        "The Prince’s Thunder",
        "Once per day",
        "Chain Lightning",
        "You cast Chain Lightning at 6th level. Lightning tears through as many as four targets.",
        "1 action · 150 feet · Instantaneous"
      ]
    ]
  },
  {
    "id": "mirror",
    "image": "mirror-v2.png",
    "name": "The Velvet Paradox",
    "title": "For the wizard who changes the question.",
    "length": "14 inches · Polished ebony, pearl crescents & violet glass",
    "material": "Ebony from a tree that grows only in the reflection of a lost Feywild palace",
    "core": "Moonlight trapped in a prism during an eclipse visible only to the dead",
    "details": "Mother-of-pearl from an astral leviathan; violet glass cooled inside a silver mirror",
    "provenance": "The tree has no trunk in the waking world. Orin obtained its wood by bargaining with his own reflection, which still insists that it was the original.",
    "quote": "A lesser wand shows people something untrue. This one understands that a convincing possibility can be more powerful than a fact. Do try to be interesting with it.",
    "powers": [
      [
        "An Elegant Lie",
        "At will",
        "Silent Image",
        "You cast Silent Image at 1st level.",
        "1 action · 60 feet · Concentration, up to 10 minutes"
      ],
      [
        "The World Agrees",
        "Once per day",
        "Mass Suggestion",
        "You cast Mass Suggestion at 6th level. One persuasive idea can redirect an entire gathering.",
        "1 action · 60 feet · 24 hours; no concentration"
      ]
    ]
  },
  {
    "id": "thorn",
    "image": "thorn-v3.png",
    "name": "The Patient Wild",
    "title": "For the wizard who helps things grow.",
    "length": "11 inches · A living hooked grip with a golden seed-blossom",
    "material": "Silver willow cut from the roots of the First Dryad’s sleeping tree",
    "core": "An emerald seed from the garden at the heart of the Plane of Earth",
    "details": "Fossilized dryad tears in amber; adamantine thorns set by hand beneath a botanical gold crown",
    "provenance": "The willow may be cut only with the dryad’s permission. She granted one branch after Orin restored a forest erased from every map. It is still alive.",
    "quote": "The smallest wand on this counter has outlived three empires. Do not mistake gentleness for a lack of power. There are forests that have swallowed armies.",
    "powers": [
      [
        "The Garden Answers",
        "At will",
        "Entangle",
        "You cast Entangle at 1st level.",
        "1 action · 90 feet · Concentration, up to 1 minute"
      ],
      [
        "The First Spring",
        "Once per day",
        "Heal",
        "You cast Heal at 6th level. Restore 70 hit points and end blindness, deafness, and diseases.",
        "1 action · 60 feet · Instantaneous"
      ]
    ]
  },
  {
    "id": "aegis",
    "image": "aegis-v3.png",
    "name": "The Last Bastion",
    "title": "For the wizard who chooses to stay.",
    "length": "13 inches · A faceted shaft with a tarrasque-scale grip",
    "material": "Petrified ironwood from the gate of a fortress that survived a god’s siege",
    "core": "A heart-diamond surrendered by an elder earth elemental",
    "details": "A tarrasque scale recovered from beneath a ruined mountain; bronze cast from the fortress’s final bell",
    "provenance": "A hundred expeditions searched for that scale. Orin returned with one fragment and a debt to the mountain. The elemental gave its diamond to honour the fortress’s defenders.",
    "quote": "The scale was shed. Recovering it was nevertheless deeply unpleasant. Hold this wand and remember: the point of being unbreakable is having somewhere for others to stand.",
    "powers": [
      [
        "Not One Step Further",
        "At will",
        "Shield",
        "You cast Shield at 1st level when its normal reaction trigger occurs.",
        "1 reaction · Self · Until the start of your next turn"
      ],
      [
        "The Gate Still Stands",
        "Once per day",
        "Globe of Invulnerability",
        "You cast Globe of Invulnerability at 6th level. A stationary sanctuary blocks outside spells of 5th level or lower.",
        "1 action · Self, 10-foot radius · Concentration, up to 1 minute"
      ]
    ]
  },
  {
    "id": "star",
    "image": "star-v3.png",
    "name": "The Unwritten Constellation",
    "title": "For the wizard who must understand.",
    "length": "16 inches · An armillary pommel with a suspended star",
    "material": "White birch grown in the crater of a star that fell before the first dawn",
    "core": "A spark taken from a dying star before its light reached the mortal world",
    "details": "Meteorite silver etched with a vanished constellation; platinum orbit rings and a diamond from the Astral Sea",
    "provenance": "Its constellation no longer exists in the sky. Orin learned its shape from an astronomer who had been dead for two thousand years, and its final ring took thirteen years to balance.",
    "quote": "Those rings are not merely pretty. They describe a sky that has ceased to exist. The little star inside remembers it. Ask politely, and it may show you what everyone else has missed.",
    "powers": [
      [
        "Nothing Unnamed",
        "At will",
        "Identify",
        "You cast Identify at 1st level.",
        "1 minute · Touch · Instantaneous"
      ],
      [
        "Beyond the Veil",
        "Once per day",
        "True Seeing",
        "You cast True Seeing at 6th level. Grant truesight to 120 feet and perceive hidden realities.",
        "1 action · Touch · 1 hour; no concentration"
      ]
    ]
  }
];
// Scores map every answer to one or more personalities. Q15 favours identity or ambition, not a random outcome.
const Q=(category,text,aside,answers)=>({category,text,aside,answers:answers.map(([text,scores])=>({text,scores}))});
const QUESTIONS=[
Q('The nature of magic','What makes a spell good?','“No, ‘when it works’ is not quite an answer.”',[
['It changes something that matters.',{ember:3,thorn:1}],['It does exactly what I intended.',{aegis:3,star:1}],['It achieves what nobody expected.',{tempest:3,mirror:1}],['It reveals something true.',{star:3,mirror:1}]]),
Q('Under pressure','Your spell fails. What happens next?','Orin turns a page. The page turns itself back. He ignores it.',[
['I try again, with more conviction.',{ember:3}],['I find the flaw before repeating it.',{star:3,aegis:1}],['I improvise. The plan was only a suggestion.',{tempest:3}],['I make the failure look intentional.',{mirror:3}]]),
Q('Instinct','You hear a footstep behind you in an empty tower. Your first instinct?','“Answer before your sensible self arrives.”',[
['Light. I want to see what is there.',{ember:2,star:1}],['A ward between us.',{aegis:3}],['Silence, concealment, then observation.',{mirror:3}],['A way out. Preferably upward.',{tempest:3}]]),
Q('Casting style','How would you rather end a dangerous encounter?','“I asked how it ends. Not how impressive you look.”',[
['A single decisive burst of power.',{ember:3}],['Nobody can hurt anyone anymore.',{aegis:2,thorn:2}],['The enemy chases something that isn’t there.',{mirror:3}],['I change the terrain and the terms.',{tempest:2,star:1,thorn:1}]]),
Q('Risk & control','An unfinished spell promises something extraordinary. Do you cast it?','“The last customer said yes. We still receive postcards.”',[
['Yes. Discovery requires a little courage.',{tempest:2,ember:2}],['Only after I understand the missing part.',{star:3}],['Only if someone needs me to.',{thorn:2,aegis:2}],['I convince somebody it was already finished.',{mirror:3}]]),
Q('What you keep','A beloved object breaks. What do you do?','Orin places a cracked teacup on the counter.',[
['Repair it. Its history is part of its value.',{thorn:3,aegis:1}],['Improve the design while I am at it.',{star:3}],['Make something unexpected from the pieces.',{tempest:3,mirror:1}],['Keep one piece, and begin again.',{ember:3}]]),
Q('A small choice','Four things lie on the counter. Choose.','“No explanation. Your fingers have already decided.”',[
['A key with no known lock.',{star:2,tempest:1}],['A feather that refuses to fall.',{tempest:3}],['A candle that has survived a flood.',{ember:2,aegis:1}],['A seed inside a silver coin.',{thorn:2,mirror:1}]]),
Q('In your hand','What should your wand feel like?','“Now we get to something the wood understands.”',[
['Warm, light, and eager.',{ember:3}],['Flexible, almost restless.',{tempest:2,thorn:1}],['Cool, smooth, exquisitely balanced.',{mirror:3,star:1}],['Solid, textured, reassuring.',{aegis:3,thorn:1}]]),
Q('Old companions','Your old wand disappointed you. Why?','“It is quite all right. I shall not tell it.”',[
['It hesitated when I needed strength.',{ember:3}],['It could not keep up with my ideas.',{tempest:2,star:2}],['It made subtle work feel clumsy.',{mirror:3}],['It could not protect what I loved.',{aegis:2,thorn:2}]]),
Q('What you learned','What did your teacher misunderstand about you?','A quill hovers over Orin’s notebook, looking judgemental.',[
['My persistence was not recklessness.',{ember:2,aegis:1}],['My questions were not disrespect.',{star:3}],['My kindness was not a lack of ambition.',{thorn:3}],['My mischief was a method.',{mirror:2,tempest:2}]]),
Q('Ambition','In ten years, what do you hope your magic can do?','“Think bigger than your next examination.”',[
['Bring light where hope has gone out.',{ember:2,thorn:1}],['Open paths nobody knew existed.',{tempest:3}],['Understand the hidden architecture of things.',{star:3,mirror:1}],['Keep the people I love safe.',{aegis:2,thorn:2}]]),
Q('Your limits','Would you learn a dangerous spell you might never use?','“A closed book is still a choice.”',[
['Yes. Understanding is its own responsibility.',{star:3}],['Yes. One day it could save somebody.',{aegis:2,ember:1}],['Only if it leaves others their freedom.',{thorn:2,tempest:1}],['I would learn how to make people believe I knew it.',{mirror:3}]]),
Q('A practical demonstration','Orin offers a bell. “Cast something useful.”','He carefully declines to define useful.',[
['Make it warn us of approaching danger.',{aegis:3}],['Let it ring with no sound except to me.',{mirror:2,star:1}],['Turn it into a tiny travelling raincloud.',{tempest:3}],['Repair its crack and coax a flower from it.',{thorn:3,ember:1}]]),
Q('The finishing touch','Which detail feels like yours?','“This is the first part where your opinion is actually relevant.”',[
['Dark stone and a flicker of gold.',{ember:3}],['Silver winding around pale wood.',{tempest:3}],['Something hidden that catches the light.',{mirror:2,star:2}],['A texture that remembers the living world.',{thorn:2,aegis:2}]]),
Q('One last question','The wizard you are, or the wizard you are trying to become?','Orin closes the notebook. For once, the quill is still.',[
['Who I am. Give my instincts a clearer voice.',{}],['Who I could become: braver, more unbound.',{ember:4,tempest:4}],['Who I could become: wiser, more perceptive.',{star:4,mirror:4}],['Who I could become: kinder, harder to break.',{thorn:4,aegis:4}]])
];
function chooseWand(answers){const score=Object.fromEntries(TYPES.map(t=>[t,0]));answers.forEach((a,i)=>{Object.entries(QUESTIONS[i].answers[a].scores).forEach(([k,v])=>score[k]+=v)});const ranked=TYPES.slice().sort((a,b)=>score[b]-score[a]||TYPES.indexOf(a)-TYPES.indexOf(b));return {wand:WANDS.find(w=>w.id===ranked[0]),score};}
if(typeof module!=='undefined')module.exports={QUESTIONS,WANDS,chooseWand};
