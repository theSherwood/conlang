import { Tag as t, RootDictionary } from "./types";

let emptyWord = {
  is: "",
  noun: "",
  transitive: "",
  intransitive: "",
  adjective: "",
  adverb: "",
  preposition: "",
  tags: [],
};

// prettier-ignore
enum r {
  enter_subclause, exit_subclause, transitive, intransitive, me, it, you, one,
  two, three, four, five, six, seven, eight, nine, zeroth, first, second, third, 
  fourth, fifth, sixth, seventh, eighth, ninth, time, past, present, future, second_time, 
  day, year, yes, no, maybe, true, false, good, bad, simple, complex, none, some, all, 
  few, many, merge, split, group, part, connect, branch, love, hate, life, death, prev, 
  next, chaos, order, male, female, neuter, rare, common, open, close, big, small, agent, 
  object, same, distinct, opposite, begin, end, near, far, smooth, rough, and, or, xor, create, 
  repair, break, destroy, take, put, count, iterate, to, from, through, around, between, 
  more, less, pleasure, pain, this, that, overt, covert, real, model, unreal, static, 
  dynamic, corner, round, hard, soft, thing, direction, obligation, work, change, shape, 
  use, mark, light, which_does, which_receives, participle, noun_swap
}

let grammar: RootDictionary = {
  [r.enter_subclause]: {},
  [r.exit_subclause]: {},
  [r.transitive]: {},
  [r.intransitive]: {},
  // suffixes?
  [r.which_does]: {},
  [r.which_receives]: {},
  [r.participle]: {},
  [r.noun_swap]: {},
};

let pronouns: RootDictionary = {
  [r.me]: {},
  [r.it]: {},
  [r.you]: {},
};

let numbers: RootDictionary = {
  // TODO: figure out how to handle zero/none
  [r.one]: { is: "", tags: [t.Number, t.Root] },
  [r.two]: { is: "", tags: [t.Number, t.Root] },
  [r.three]: { is: "", tags: [t.Number, t.Root] },
  [r.four]: { is: "", tags: [t.Number, t.Root] },
  [r.five]: { is: "", tags: [t.Number, t.Root] },
  [r.six]: { is: "", tags: [t.Number, t.Root] },
  [r.seven]: { is: "", tags: [t.Number, t.Root] },
  [r.eight]: { is: "", tags: [t.Number, t.Root] },
  [r.nine]: { is: "", tags: [t.Number, t.Root] },
};

let ordinals: RootDictionary = {
  [r.zeroth]: { is: "", tags: [t.Number, t.Root] },
  [r.first]: { is: "", tags: [t.Number, t.Root] },
  [r.second]: { is: "", tags: [t.Number, t.Root] },
  [r.third]: { is: "", tags: [t.Number, t.Root] },
  [r.fourth]: { is: "", tags: [t.Number, t.Root] },
  [r.fifth]: { is: "", tags: [t.Number, t.Root] },
  [r.sixth]: { is: "", tags: [t.Number, t.Root] },
  [r.seventh]: { is: "", tags: [t.Number, t.Root] },
  [r.eighth]: { is: "", tags: [t.Number, t.Root] },
  [r.ninth]: { is: "", tags: [t.Number, t.Root] },
};

let timeRoot: RootDictionary = {
  [r.time]: { is: "", tags: [t.Time] },

  [r.past]: { is: "", tags: [t.Time] },
  [r.present]: { is: "", tags: [t.Time] },
  [r.future]: { is: "", tags: [t.Time] },

  [r.second_time]: { is: "", tags: [t.Time] },
  [r.day]: { is: "", tags: [t.Time] },
  [r.year]: { is: "", tags: [t.Time] },
};

let roots: RootDictionary = {
  ...grammar,
  ...pronouns,
  ...numbers,
  ...ordinals,
  ...timeRoot,

  [r.yes]: {},
  [r.no]: {},
  [r.maybe]: {},

  [r.true]: {},
  [r.false]: {},

  [r.good]: { is: "" },
  [r.bad]: { is: "" },

  [r.simple]: { is: "" },
  [r.complex]: { is: "" },

  [r.none]: { is: "" },
  [r.some]: { is: "" },
  [r.all]: { is: "" },

  [r.few]: {},
  [r.many]: {},

  [r.merge]: { is: "" },
  [r.split]: { is: "" },

  [r.connect]: { is: "" },
  [r.branch]: { is: "" },

  [r.group]: { is: "" },
  [r.part]: { is: "" },

  [r.love]: { is: "" },
  [r.hate]: { is: "" },

  [r.life]: { is: "" },
  [r.death]: { is: "" },

  [r.prev]: { is: "" },
  [r.next]: { is: "" },

  [r.chaos]: {},
  [r.order]: {},

  [r.male]: {},
  [r.female]: {},
  [r.neuter]: {},

  [r.rare]: {},
  [r.common]: {},

  [r.open]: {},
  [r.close]: {},

  [r.big]: {},
  [r.small]: {},

  [r.agent]: {},
  [r.object]: {},

  [r.same]: {},
  [r.distinct]: {},
  [r.opposite]: {},

  [r.begin]: {},
  [r.end]: {},

  [r.near]: {},
  [r.far]: {},

  [r.smooth]: {},
  [r.rough]: {},

  [r.and]: {},
  [r.or]: {},
  [r.xor]: {},

  [r.create]: {},
  [r.repair]: {},
  [r.break]: {},
  [r.destroy]: {},

  [r.take]: {},
  [r.put]: {},

  [r.count]: {},
  [r.iterate]: {},

  [r.to]: {},
  [r.from]: {},

  [r.through]: {},
  [r.around]: {},
  [r.between]: {},

  [r.more]: {},
  [r.less]: {},

  [r.pleasure]: {},
  [r.pain]: {},

  [r.this]: {},
  [r.that]: {},

  [r.overt]: {},
  [r.covert]: {},

  [r.real]: {},
  [r.model]: {},
  [r.unreal]: {},

  [r.static]: {},
  [r.dynamic]: {},

  [r.corner]: {},
  [r.round]: {},

  [r.hard]: {},
  [r.soft]: {},

  // TODO: organize
  [r.thing]: {},
  [r.direction]: {},
  [r.obligation]: {},
  [r.work]: {},
  [r.change]: {},
  [r.shape]: {},
  [r.use]: {},
  [r.mark]: {},
  [r.light]: {},
};

export { r, roots };
