import { pleasureJourney } from './pleasure-map.js';

const visibilityJourney = {
  id: 'visibility', number: '01', title: 'ומה איתי?',
  subtitle: 'נראות והודיה — לפגוש את מה שאת נותנת ואת מה שגם את רוצה לקבל.',
  opening: 'רגע לראות אותך, לא רק דרך כל מה שאת עושה לאחרים.',
  questions: [
    { text: 'כששואלים אותך באמת „מה שלומך?”, מה קורה?', options: [['אני מצליחה לעצור ולשתף', 'visible'], ['אני עונה מהר שהכול בסדר', 'holding'], ['אני מיד חוזרת להתעניין באחרים', 'giving'], ['לא תמיד ברור לי מה אני מרגישה', 'listening']] },
    { text: 'כשמכירים במה שעשית או מודים לך, איך זה פוגש אותך?', options: [['אני מצליחה לקבל את זה', 'receiving'], ['אני מקטינה או מבטלת', 'invisible'], ['נעים לי, אבל גם מביך', 'receiving'], ['אני כבר עוברת לדבר הבא', 'holding']] },
    { text: 'על מה היית רוצה להודות לעצמך היום?', options: [['על משהו שהעזתי', 'courage'], ['על הדרך שבה דאגתי לעצמי', 'selfcare'], ['על מה שנתתי לאחרים', 'giving'], ['על זה שהמשכתי גם כשלא היה פשוט', 'strength']] },
    { text: 'איפה היית רוצה שיראו אותך קצת יותר?', options: [['בבית ובמשפחה', 'visible'], ['בקשר או בחברות', 'connection'], ['בעבודה או ביצירה שלי', 'recognition'], ['קודם כול — בעיניים של עצמי', 'selfcare']] },
    { text: 'איזה משפט היית רוצה לקחת איתך?', options: [['גם מה שאני מרגישה ראוי למקום', 'visible'], ['מותר לי לקבל בלי מיד להחזיר', 'receiving'], ['אני לא צריכה להיעלם כדי להיות אהובה', 'connection'], ['אפשר לעצור ולהכיר במה שכבר עשיתי', 'recognition']] }
  ],
  reflections: [
    'נראות לא מתחילה רק במבט של מישהי אחרת. לפעמים היא מתחילה ברגע שבו את לא ממהרת לעבור הלאה מעצמך.',
    'הודיה לעצמך אינה התרברבות. היא דרך להכיר במאמץ, באומץ ובמה שכבר חי בך.'
  ],
  insights: {
    visible: ['יש בך רצון להיות נוכחת ולא רק מתפקדת.', 'הקול והחוויה שלך מבקשים יותר מקום גלוי.'],
    holding: ['יש בך כוח גדול להחזיק ולהמשיך.', 'אולי הכוח הזה מבקש גם רגע שבו מותר להניח ולקבל.'],
    giving: ['הנתינה שלך היא איכות משמעותית וחיה.', 'לצד הנתינה, משהו בך מבקש להיכלל במשוואה.'],
    listening: ['יש בך נכונות לעצור ולהקשיב למה שעוד לא קיבל מילים.', 'אולי דרוש עוד שקט כדי לזהות מה את מרגישה וצריכה.'],
    receiving: ['את מתחילה לאפשר לטוב להגיע גם אלייך.', 'קבלה בלי הקטנה ובלי החזר מיידי מבקשת עוד תרגול ורשות.'],
    invisible: ['יש בך צניעות ורגישות למרחב שסביבך.', 'הערך שלך מבקש הכרה גם בלי שתצטרכי להצדיק אותו.'],
    courage: ['את יודעת לזהות אומץ גם בצעדים שאינם גדולים מבחוץ.', 'כדאי לתת מקום למה שהעזת, לפני שאת ממשיכה הלאה.'],
    selfcare: ['כבר קיימת בך תנועה של בחירה בעצמך.', 'הדאגה לעצמך מבקשת להפוך לחלק טבעי מהיום.'],
    strength: ['את רואה את הכוח שעזר לך לעבור תקופה או רגע מורכב.', 'גם הכוח שלך זקוק למנוחה, הכרה ותמיכה.'],
    connection: ['את מבקשת קשר שבו אפשר להיות קרובה וגם נוכחת.', 'הנראות בתוך קשר מבקשת ביטחון והדדיות.'],
    recognition: ['יש בך עשייה שראויה לעצירה ולהכרה.', 'אולי הגיע הזמן לאפשר לעצמך לראות את התרומה שלך במלואה.']
  },
  invitation: 'לפני השינה, להשלים משפט אחד: „היום אני רוצה להודות לעצמי על…” — בלי להקטין ובלי להסביר.'
};

const boundariesJourney = {
  id: 'boundaries', number: '02', title: 'בא לך באמת?',
  subtitle: 'גבולות ורצון — להבחין בין כן אוטומטי לבין כן שהוא באמת שלך.',
  opening: 'לא כל „כן” הוא רצון, ולא כל „לא” צריך להגיע עם הסבר.',
  questions: [
    { text: 'כשמבקשים ממך משהו, איפה מופיעה התשובה הראשונה?', options: [['אני יודעת די מהר מה אני רוצה', 'clarity'], ['הגוף יודע לפני המילים', 'body'], ['אני חושבת קודם מה מצפים ממני', 'pleasing'], ['אני צריכה זמן כדי להבין', 'time']] },
    { text: 'מה קורה כשאת רוצה לומר „לא”?', options: [['אני אומרת אותו בבירור', 'boundary'], ['אני מרככת ומסבירה הרבה', 'pleasing'], ['אני אומרת כן ומתחרטת', 'overrun'], ['זה תלוי במי שמולי', 'safety']] },
    { text: 'מה הכי משפיע על הבחירה שלך?', options: [['החשש לאכזב', 'pleasing'], ['השלכות מעשיות אמיתיות', 'safety'], ['הרצון לשמור על הקשר', 'connection'], ['מה שנכון ומתאים לי', 'clarity']] },
    { text: 'למה היית רוצה לומר „כן” קצת יותר?', options: [['למנוחה', 'rest'], ['לזמן שהוא שלי', 'space'], ['ליצירה, משחק או סקרנות', 'aliveness'], ['לקשר שיש בו מקום גם לי', 'connection']] },
    { text: 'איזו תשובה היית רוצה שתהיה זמינה לך?', options: [['אני רוצה לחשוב ולחזור אלייך', 'time'], ['הפעם זה לא מתאים לי', 'boundary'], ['אני יכולה לעזור בחלק הזה', 'choice'], ['כן, אני באמת רוצה', 'clarity']] }
  ],
  reflections: [
    'לפעמים הגבול כבר נמצא בגוף, ורק המילים מגיעות אחר כך. זמן לחשוב יכול להיות גבול בפני עצמו.',
    'גבול אינו רק „לא”. הוא מפנה מקום ל„כן” שלך — למנוחה, לקשר, ליצירה ולמה שבאמת חשוב לך.'
  ],
  insights: {
    clarity: ['יש בך קול שיודע לזהות מה נכון ומתאים לך.', 'הבהירות הזו מבקשת אמון גם מול ציפיות מבחוץ.'],
    body: ['הגוף שלך כבר משתתף בבחירה ומסמן את הכיוון.', 'אולי יעזור לתת לסימן הגופני עוד רגע לפני התשובה.'],
    pleasing: ['יש בך רגישות עמוקה לאחרים ולמה שהם מרגישים.', 'הרצון שלך מבקש להישאר נוכח גם כשמישהו אחר עלול להתאכזב.'],
    time: ['את יודעת שזמן יכול לעזור לך לשמוע תשובה אמיתית.', 'השהיה לפני תשובה מבקשת להפוך לאפשרות זמינה ולגיטימית.'],
    boundary: ['כבר קיימת בך היכולת לומר גבול ברור.', 'הגבול הזה מבקש יציבות גם כשאחרים מגיבים אליו.'],
    overrun: ['את מצליחה לזהות בדיעבד מתי עברת את הגבול שלך.', 'אולי אפשר להקדים את ההקשבה לרגע שלפני ההסכמה.'],
    safety: ['את רואה שלא כל בחירה מתקיימת בתנאים שווים.', 'הגבול שלך מבקש להתחשב גם בביטחון ובהשלכות המעשיות.'],
    connection: ['חשוב לך לשמור על קשר וקרבה.', 'הקשר שאת מבקשת צריך להכיל גם שונות, גבול ומקום עבורך.'],
    rest: ['משהו בך כבר יודע שמנוחה היא חלק מהחיים.', 'ה„כן” למנוחה מבקש לקבל מקום ממשי ביומן ובבחירות.'],
    space: ['את מבקשת זמן שאינו מוגדר רק דרך צרכים של אחרים.', 'המרחב שלך מבקש שמירה ותמיכה.'],
    aliveness: ['יש בך רצון לחיוּת, משחק וסקרנות.', 'החלק הזה מבקש רשות שאינה תלויה בתועלת או בהספק.'],
    choice: ['את מחפשת דרך לבחור בלי לחשוב רק ב„הכול או כלום”.', 'אפשרויות ביניים ודיוק התנאים מבקשים להישאר זמינים.']
  },
  invitation: 'בפעם הבאה שמגיעה בקשה, לנסות משפט אחד לפני התשובה: „אני רוצה לחשוב ולחזור אלייך”.'
};

const journeys = [visibilityJourney, boundariesJourney, pleasureJourney];
const host = document.querySelector('#journeyApp');
let current = null;
let step = 0;
let answers = [];
let selected = '';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function show(content, classes = '') {
  host.innerHTML = `<section class="app-screen ${classes}" tabindex="-1">${content}</section>`;
  host.querySelector('.app-screen').focus({ preventScroll: true });
}

function showChoices() {
  current = null; step = 0; answers = []; selected = '';
  show(`<p class="kicker dark">מרחב של בחירה</p><h3>מה קורא לך היום?</h3><div class="journey-grid">${journeys.map(journey => `<button class="journey-card" data-journey="${journey.id}" type="button"><span class="journey-number">${journey.number}</span><strong>${journey.title}</strong><span>${journey.subtitle}</span><small>כ־4 דקות · להתחיל ←</small></button>`).join('')}</div><p class="privacy-note">התשובות נשארות בזיכרון הלשונית בלבד. אפשר לדלג או לסיים בלי למסור פרטים.</p>`, 'center');
  host.querySelectorAll('[data-journey]').forEach(button => button.onclick = () => startJourney(button.dataset.journey));
}

function startJourney(id) {
  current = journeys.find(journey => journey.id === id);
  step = 0; answers = []; selected = '';
  show(`<p class="kicker dark">${current.title}</p><h3>${current.opening}</h3><p>חמש שאלות קצרות, שני רגעי שיקוף ודוח שאפשר לשמור. את בוחרת כמה לשתף.</p><div class="controls"><button class="primary-action" id="beginJourney" type="button">מתאים לי להתחיל ←</button><button class="secondary-action" id="backToChoices" type="button">לבחירת מסע אחר</button></div>`, 'center');
  host.querySelector('#beginJourney').onclick = renderQuestion;
  host.querySelector('#backToChoices').onclick = showChoices;
}

function stopButton() {
  return '<button class="stop-button" id="stopJourney" type="button">די לי בינתיים, תודה</button>';
}

function bindStop() {
  const button = host.querySelector('#stopJourney');
  if (button) button.onclick = () => celebrate(true);
}

function renderQuestion() {
  const question = current.questions[step];
  const previous = answers[step];
  selected = previous?.tag || '';
  show(`<div class="progress-row"><span>${current.title} · ${step + 1} מתוך ${current.questions.length}</span><div class="progress-track"><i style="width:${((step + 1) / current.questions.length) * 100}%"></i></div></div><div class="question-wrap"><h3>${question.text}</h3><div class="answers">${question.options.map(([label, tag]) => `<button class="answer ${selected === tag ? 'selected' : ''}" data-tag="${tag}" type="button">${label}</button>`).join('')}</div><label class="note-label" for="personalNote">אם תרצי, אפשר להוסיף במילים שלך</label><textarea class="note-field" id="personalNote" maxlength="800" placeholder="אפשר גם להשאיר ריק">${escapeHtml(previous?.note || '')}</textarea></div><div class="controls"><button class="primary-action" id="nextQuestion" type="button">להמשיך ←</button><button class="secondary-action" id="skipQuestion" type="button">לדלג</button><button class="quiet-action" id="previousQuestion" type="button">${step ? '→ לחזור' : '→ לבחירת המסעות'}</button></div><p class="error" id="questionError" role="status"></p>${stopButton()}`);
  host.querySelectorAll('[data-tag]').forEach(button => button.onclick = () => {
    selected = button.dataset.tag;
    host.querySelectorAll('[data-tag]').forEach(option => option.classList.toggle('selected', option === button));
  });
  host.querySelector('#nextQuestion').onclick = () => saveAnswer(false);
  host.querySelector('#skipQuestion').onclick = () => saveAnswer(true);
  host.querySelector('#previousQuestion').onclick = () => { if (step) { step--; renderQuestion(); } else showChoices(); };
  bindStop();
}

function saveAnswer(skip) {
  const note = host.querySelector('#personalNote').value.trim();
  if (!skip && !selected && !note) {
    host.querySelector('#questionError').textContent = 'אפשר לבחור תשובה, לכתוב במילים שלך או לדלג.';
    return;
  }
  answers[step] = skip ? { skipped: true } : { tag: selected, note, skipped: false, question: current.questions[step].text };
  answers = answers.slice(0, step + 1);
  step++;
  if (step === current.questions.length) celebrate(false);
  else if (step === 2 || step === 4) showReflection(step === 2 ? 0 : 1);
  else renderQuestion();
}

function recentAnswerText() {
  const answered = answers.slice(Math.max(0, step - 2), step).filter(item => item && !item.skipped);
  return answered.map(item => {
    const question = current.questions.find(entry => entry.text === item.question);
    const option = question?.options.find(([, tag]) => tag === item.tag)?.[0] || '';
    return [option, item.note].filter(Boolean).join(' — ');
  }).filter(Boolean).join(' · ');
}

function showReflection(index) {
  const words = recentAnswerText();
  show(`<div class="reflection-card"><p class="kicker dark">רגע של שיקוף</p><h3>נעצור כאן לרגע.</h3><blockquote>${current.reflections[index]}</blockquote>${words ? `<p>במילים שבחרת הופיעו: ${escapeHtml(words)}</p>` : '<p>גם מה שהשארת פתוח הוא חלק מהקצב שלך.</p>'}</div><div class="controls" style="margin-top:24px"><button class="primary-action" id="continueJourney" type="button">להמשיך בקצב שלי ←</button><button class="secondary-action" id="returnQuestion" type="button">לחזור לשאלה האחרונה</button></div>${stopButton()}`, 'center');
  host.querySelector('#continueJourney').onclick = renderQuestion;
  host.querySelector('#returnQuestion').onclick = () => { step--; renderQuestion(); };
  bindStop();
}

function celebrate(stopped) {
  show(`<div class="celebration-symbol">✦</div><p class="confetti" aria-hidden="true">· ✦ ·</p><h3>${stopped ? 'הקשבת לעצמך ועצרת.' : 'הגעת עד לכאן, בקצב שלך.'}</h3><p>${stopped ? 'לדעת שדי לך בינתיים זו בחירה שראויה לחגיגה. מה שכבר אספת מספיק.' : 'עצרת, הרגשת ובחרת. גם התנועה הקטנה הזאת היא משהו לקחת איתך.'}</p><div class="controls"><button class="primary-action" id="seeReport" type="button">לראות מה אספתי ←</button>${stopped && step < current.questions.length ? '<button class="secondary-action" id="resumeJourney" type="button">בעצם, להמשיך</button>' : ''}<button class="quiet-action" id="celebrateChoices" type="button">לבחירת מסע אחר</button></div>`, 'center');
  host.querySelector('#seeReport').onclick = renderReport;
  host.querySelector('#celebrateChoices').onclick = showChoices;
  const resume = host.querySelector('#resumeJourney');
  if (resume) resume.onclick = renderQuestion;
}

function answerLabel(answer, position) {
  if (!answer || answer.skipped) return 'בחרת להשאיר את השאלה פתוחה.';
  const option = current.questions[position].options.find(([, tag]) => tag === answer.tag)?.[0] || '';
  return [option, answer.note].filter(Boolean).join(' — ') || 'השאלה נשארה פתוחה.';
}

function renderReport() {
  const answered = answers.map((answer, index) => answer && !answer.skipped ? { answer, index } : null).filter(Boolean);
  const answeredCount = answers.filter(answer => answer && !answer.skipped).length;
  const first = answered[0];
  const later = answered[Math.min(2, answered.length - 1)] || first;
  const strength = first ? (current.insights[first.answer.tag] || Object.values(current.insights)[0])[0] : 'בחרת לעצור ולהקשיב, וגם זו כבר תנועה של נאמנות לעצמך.';
  const need = later ? (current.insights[later.answer.tag] || Object.values(current.insights)[0])[1] : 'מה שמבקש מקום יכול להישאר פתוח. אין צורך לנסח אותו לפני שהוא מוכן.';
  const labels = current.questions.map((_, index) => answerLabel(answers[index], index));
  const mirrors = {
    visibility: `כששאלו איך את, ענית: „${labels[0]}”. כשמגיעה אלייך הכרה, ענית: „${labels[1]}”. החיבור בין שתי התשובות מזמין לבדוק לא רק מי רואה אותך — אלא גם כמה את מאפשרת לעצמך להישאר נראית.`,
    boundaries: `מול בקשה, התשובה הראשונה שלך הייתה: „${labels[0]}”. וכשרצית לומר לא, סימנת: „${labels[1]}”. בין הידיעה הפנימית לבין המילים שיוצאות החוצה נמצא הגבול שלך — לא כחומה, אלא כדרך להישאר בקשר עם עצמך.`,
    pleasure: `הרגע הנעים שבחרת היה: „${labels[0]}”. והסימן שעזר לך לזהות אותו היה: „${labels[1]}”. זו כבר מפה: החוויה, סימן הגוף והתנאים שאִפשרו לה לקרות.`
  };
  const lenses = {
    visibility: ['נראות היא גם היכולת לקבל', 'תודעת עונג מזכירה שלא מספיק שיראו כמה את נותנת. גם החוויה שלך, המאמץ שלך והטוב שמגיע אלייך ראויים להישאר רגע במרכז — בלי הקטנה ובלי החזר מיידי.', 'מה היה משתנה אילו היית מאמינה שלא צריך להרוויח מקום?'],
    boundaries: ['גבול הוא הדרך של הרצון לקבל צורה', 'תודעת עונג לא שואלת רק למה לומר לא. היא שואלת לאיזה כן את רוצה לפנות מקום. גבול מיטיב אינו היעלמות מהקשר; הוא האפשרות להיות בתוכו בלי להיעלם מעצמך.', 'לאיזה כן שלך הגבול הזה מנסה לפנות מקום?'],
    pleasure: ['עונג הוא מידע, לא פרס', 'הגוף מספר מה מרכך, מחיה, מסקרן וממלא אותך. כשאת מבחינה גם בתנאים — זמן, פרטיות, בחירה או קשר — את לא רק מחפשת רגע נעים; את לומדת איך לבנות לו מקום.', 'איזה תנאי אחד יכול להפוך רגע נעים לאפשרי יותר?']
  };
  const lens = lenses[current.id];
  const desire = answers[3] && !answers[3].skipped ? labels[3] : 'עוד לא סימנת למה היית רוצה לתת יותר מקום — ואפשר להשאיר את הרצון פתוח.';
  const practice = answers[4] && !answers[4].skipped ? `את בחרת: „${labels[4]}” אפשר להתייחס לזה כהזמנה, לא כמטלה.` : current.invitation;
  show(`<div class="report-head"><p class="kicker dark" style="justify-content:center">השיקוף שלך · ${current.title}</p><h3>זה מה שאני שומעת<br>בין התשובות שלך.</h3><p>לא פענוח שלך ולא מסקנה עלייך. רק ניסיון לחבר בין ${answeredCount || 'מעט'} הדברים שבחרת לשתף, ולהחזיר לך שאלה שאפשר להמשיך איתה.</p></div><section class="report-mirror"><span>01 · מה עולה מהתשובות</span><p>${escapeHtml(mirrors[current.id])}</p></section><div class="report-grid"><section class="report-block"><span>כוח שכבר נמצא כאן</span><h4>מה כבר חי בך</h4><p>${escapeHtml(strength)}</p></section><section class="report-block"><span>תנועה שמבקשת מקום</span><h4>ומה מבקש להתרחב</h4><p>${escapeHtml(need)}</p></section></div><section class="pleasure-lens"><span>02 · דרך העיניים של תודעת עונג</span><h4>${lens[0]}</h4><p>${lens[1]}</p></section><div class="report-grid report-next"><section class="report-block"><span>הרצון שסימנת</span><h4>${escapeHtml(desire)}</h4></section><section class="report-block"><span>ניסוי קטן, רק אם מתאים</span><p>${escapeHtml(practice)}</p></section></div><section class="carry-question"><span>שאלה לקחת איתך</span><h4>${lens[2]}</h4></section><details class="answers-report"><summary>לראות את התשובות שלי</summary>${current.questions.map((question, index) => `<div class="answer-row"><small>${question.text}</small><p>${escapeHtml(answerLabel(answers[index], index))}</p></div>`).join('')}</details><p class="report-note">השיקוף הנוכחי נבנה מקומית מהבחירות שלך ואינו נשלח לשרת. הוא אינו אבחון או תחליף לליווי מקצועי.</p><div class="controls"><button class="primary-action" id="printReport" type="button">להדפסה / שמירה כ־PDF</button><button class="secondary-action" id="anotherJourney" type="button">לבחור מסע נוסף</button><a class="secondary-action" href="#meeting">לדבר איתי</a></div>`, 'report-screen');
  host.querySelector('#printReport').onclick = () => window.print();
  host.querySelector('#anotherJourney').onclick = showChoices;
}

document.querySelector('#bookingButton').onclick = () => window.alert('היומן עדיין לא מחובר. כאן תיפתח בהמשך בחירת זמן לשיחה.');
showChoices();
