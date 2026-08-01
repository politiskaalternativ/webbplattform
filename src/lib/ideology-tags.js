/**
 * lib/ideology-tags.js
 *
 * Delad taggning av ideologier efter tema (frihet, jämlikhet, gemenskap,
 * hållbarhet, marknad, ordning). Används för filtrering och kort-taggar på
 * både bibliotek.html och ideologikarta.html.
 *
 * Tidigare fanns detta som två oberoende kopior i respektive sida, vilket
 * ledde till att en ideologi (degrowth) kunde tas bort ur ideologies.js utan
 * att alla kopior städades. Genom att dela modulen finns bara en plats att
 * hålla i synk med src/lib/ideologies.js.
 */

export const categoryConfig = {
  frihet: { label: 'Frihet', color: '#2f5da8' },
  jamlikhet: { label: 'Jämlikhet', color: '#9b3a4a' },
  gemenskap: { label: 'Gemenskap', color: '#7d5a1f' },
  hallbarhet: { label: 'Hållbarhet', color: '#2f7a47' },
  marknad: { label: 'Marknad', color: '#5a3f9f' },
  ordning: { label: 'Ordning', color: '#3f4a56' },
};

export const tagMap = {
  liberalism:       ['frihet', 'marknad'],
  socialliberalism: ['frihet', 'jamlikhet'],
  nyliberalism:     ['frihet', 'marknad'],
  libertarianism:   ['frihet', 'marknad'],
  ordoliberalism:   ['marknad', 'ordning'],
  socialdemokrati:  ['jamlikhet', 'gemenskap'],
  kommunism:        ['jamlikhet', 'gemenskap'],
  konservatism:     ['gemenskap', 'ordning'],
  nationalism:      ['gemenskap', 'ordning'],
  ekologism:        ['hallbarhet', 'gemenskap'],
  socialism:        ['jamlikhet', 'gemenskap'],
  fascism:          ['ordning', 'gemenskap'],
};
