import { NextResponse } from "next/server";

type Answer = { id: string; question: string; answers: string[]; values: string[] };
type Report = {
  title: string; opening: string; context_insight: string; consent_and_desire: string;
  protective_mechanism: string; what_is_not_broken: string; growth_edge: string;
  small_practice: string; joyfulness_lens: string; invitation: string;
  mirror_quote: string; belonging_insight: string; body_message: string;
  permission_them: string; permission_me: string; pleasure_compass: string;
  strength: string; growing_edge: string; steps: string[]; carry_question: string;
  fairy_whisper: string;
};

function cleanAnswers(value: unknown): Answer[] {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 20).flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const source = item as Record<string, unknown>;
    if (typeof source.id !== "string" || typeof source.question !== "string" || !Array.isArray(source.answers)) return [];
    const answers = source.answers.filter((answer): answer is string => typeof answer === "string").slice(0, 3).map((answer) => answer.slice(0, 220));
    const values = Array.isArray(source.values)
      ? source.values.filter((entry): entry is string => typeof entry === "string").slice(0, 3).map((entry) => entry.slice(0, 80))
      : [];
    return answers.length ? [{ id: source.id.slice(0, 60), question: source.question.slice(0, 240), answers, values }] : [];
  });
}

const contextNames: Record<string, string> = {
  work: "בעבודה", partner: "בזוגיות או בדייטים", children: "מול הילדים",
  family: "מול המשפחה", friends: "מול חברות", self: "מול עצמך",
};

const lifeSentences: Record<string, string> = {
  building: "את בונה עכשיו את המקום שלך בעולם. עבודה, קשרים ועצמאות עדיין זזים.",
  holding: "את מחזיקה בית, ילדים ועוד אלף דברים.",
  caring: "את שמה לב למה שאחרים צריכים, לפעמים עוד לפני שביקשו.",
  changing: "משהו בחיים שלך משתנה עכשיו. גם ההרגלים הישנים כבר לא יושבים בדיוק אותו דבר.",
  space: "התפנה קצת מקום. יחד איתו הגיעה השאלה: מה בא לי עכשיו?",
  body: "יש בך רצון לחזור לגוף, לעונג ולדברים שעושים לך טוב.",
  other: "לא מצאת את עצמך לגמרי באפשרויות. גם זו תשובה.",
};

const triggerCopy: Record<string, { text: string; mirror: string }> = {
  disappointment: { text: "החשש שהיא תיעלב או תכעס מגיע לפני שהספקת לבדוק מה מתאים לך.", mirror: "את שומעת את האכזבה שלה עוד לפני שהיא קרתה." },
  responsibility: { text: "המחשבה שאם את לא תעשי, זה פשוט לא יקרה, מקדימה את הרצון שלך.", mirror: "עוד לא ביקשו ממך להחזיק הכול. הידיים כבר מלאות." },
  goodness: { text: "הפחד להיתפס כאנוכית או לא מספיק טובה דוחף את ה״כן״ החוצה.", mirror: "את רוצה להיות טובה. לפעמים את נעלמת בדרך." },
  real_consequence: { text: "יש כאן מחיר אמיתי בעבודה, בכסף או בקשר. התשובה שלך צריכה לשמור גם עלייך וגם על מה שחשוב לך.", mirror: "זה מורכב באמת. עדיין מגיע לך רגע לבדוק." },
  automatic: { text: "ה״כן״ יוצא מהר כל כך, שהבדיקה מתחילה רק אחריו.", mirror: "הפה כבר ענה. את עוד שם, בודקת מה רצית." },
  want_help: { text: "יש פעמים שבהן את באמת רוצה לעזור. הקושי מתחיל כשאין רגע לבדוק כמה זה ידרוש ממך.", mirror: "הנדיבות שלך אמיתית. גם העייפות שאחריה." },
  unknown: { text: "אין תמיד משפט ברור בראש. יש אי־נוחות שמבקשת ממך להסכים.", mirror: "עוד אין לזה שם. הגוף כבר שם לב." },
  depends: { text: "זה משתנה לפי האדם ולפי היום. גם הכוחות שלך הם חלק מהתשובה.", mirror: "אותה בקשה מרגישה אחרת ביום שבו נשאר לך אוויר." },
};

const gainCopy: Record<string, string> = {
  peace: "ה״כן״ מסיים את המתח מהר ומחזיר שקט לחדר.", control: "הוא משאיר את הדברים בידיים שלך.",
  needed: "הוא מזכיר לך שצריכים אותך.", reliable: "הוא שומר על המקום שלך כאישה שאפשר לסמוך עליה.",
  criticism: "הוא חוסך כעס, ביקורת ופרצופים.", real_choice: "לפעמים הוא פשוט שלך. את רוצה לעזור.",
  unknown: "עוד לא ברור מה הוא נותן לך. עצם השאלה כבר פתחה משהו.", other: "יש לו רווח שאת עוד לומדת לזהות.",
};

const afterCopy: Record<string, { headline: string; text: string }> = {
  tired: { headline: "אחר כך הסוללה מתרוקנת.", text: "את עושה את מה שהבטחת, אבל האנרגיה נעלמת בדרך." },
  pain: { headline: "אחר כך הגוף מתכווץ.", text: "הכאב או הכיווץ מגיעים אחרי שהמילים כבר יצאו." },
  breath: { headline: "אחר כך קשה לנשום.", text: "הנשימה מתקצרת, הלב דופק או משהו נתקע בגרון." },
  self_anger: { headline: "אחר כך את כועסת על עצמך.", text: "המחשבה ״למה שוב הסכמתי?״ מגיעה כשכבר מאוחר לשנות בקלות." },
  other_anger: { headline: "אחר כך הכעס עובר אל מי שביקשה.", text: "הסכמת בקול. בפנים נשאר כעס שלא קיבל מקום." },
  loss_control: { headline: "אחר כך כל היום מתבלגן.", text: "עוד בקשה נכנסה, והדברים שלך נדחקו הצדה." },
  disconnect: { headline: "אחר כך את מתרחקת מהגוף.", text: "פחות מגע, פחות עונג ופחות חשק להרגיש." },
  move_on: { headline: "אחר כך את פשוט ממשיכה.", text: "את מתפקדת. לפעמים המחיר מופיע רק מאוחר יותר." },
  no_pattern: { headline: "אין אצלך סימן אחד שחוזר.", text: "זה משתנה, ולכן כדאי להקשיב בכל פעם מחדש." },
  other: { headline: "משהו קורה אחר כך.", text: "עוד אין לו שם מדויק. את כבר מזהה שהוא שם." },
};

const lessNames: Record<string, string> = {
  rest: "מנוחה בלי הסברים", space: "זמן ריק שהוא רק שלך", play: "משחק, יצירה וצחוק",
  body: "תנועה, מגע ועונג", nourishing: "מפגשים שגם ממלאים אותך", quiet: "קצת שקט בראש",
  desire: "הרצון שלך, גם כשהוא עוד לא ברור",
};

const pleasureExperiments: Record<string, string> = {
  rest: "קחי עשר דקות מנוחה בלי להסביר למה את עייפה.", space: "פני רבע שעה שאין בה משימה.",
  play: "עשי משהו קטן שאין לו תוצאה.", body: "בחרי שיר אחד, הליכה קצרה או מגע שנעים לך.",
  nourishing: "כתבי למישהי שאת יוצאת ממפגש איתה קצת יותר מלאה.", quiet: "השאירי חמש דקות בלי לענות לאף אחת.",
  desire: "כתבי משפט אחד שמתחיל ב״בא לי״.", nothing: "אין צורך להמציא חוסר. שימי לב לרגע אחד שכבר נעים לך.",
};

const edgeCopy: Record<string, { label: string; permission: string; question: string; fairy: string }> = {
  pause: { label: "לקחת רגע לפני שאת עונה", permission: "מותר לי לקחת זמן לפני שאני עונה.", question: "מה אני רוצה לענות, אם התשובה לא חייבת לצאת עכשיו?", fairy: "חכי רגע\nעוד לא שאלנו אותך" },
  no_without_fear: { label: "לומר ״לא״ ולהישאר גם עם מה שיגיע אחריו", permission: "מותר לי לומר ״לא״ במשפט אחד.", question: "אם אגיד ״לא״, ממה אני מפחדת? ומה באמת באחריותי?", fairy: "מותר לה להתאכזב\nאת עדיין נשארת" },
  set_conditions: { label: "לתת ל״כן״ שלך תנאים", permission: "מותר לי לומר ״כן״ בתנאים שמתאימים לי.", question: "איזה תנאי יהפוך את ה״כן״ הזה לאפשרי גם בשבילי?", fairy: "ה״כן״ שלך יכול לקבל תנאים\nהוא עדיין ״כן״" },
  notice_earlier: { label: "לתפוס את הכיווץ רגע קודם", permission: "מותר לי להקשיב לכיווץ לפני שאני מסבירה אותו.", question: "מה היה הסימן הראשון בגוף, לפני שהמילים יצאו?", fairy: "הכיווץ הגיע ראשון\nתקשיבי לו" },
  more_alive_yes: { label: "לפנות מקום ל״כן״ שעושה לך ניצוץ", permission: "מותר לי לפנות מקום למה שעושה לי ניצוץ.", question: "מה עשה לי ניצוץ השבוע, ואיך אני נותנת לו עוד עשר דקות?", fairy: "הניצוץ קטן\nתני לו עוד דקה" },
  trust_body: { label: "לסמוך קצת יותר על הגוף", permission: "מותר לי להאמין למה שאני מרגישה, גם בלי הוכחה.", question: "מה הגוף אומר עכשיו, לפני שאני מסבירה אותו?", fairy: "הגוף לא שולח מצגת\nרק סימן" },
  no_change: { label: "להשאיר את הדברים כמו שהם כרגע", permission: "מותר לי לא לשנות כלום כרגע.", question: "מה נעים לי להשאיר בדיוק כמו שהוא?", fairy: "גם לא לזוז\nזו בחירה" },
  other: { label: "למצוא את הדבר שלך", permission: "מותר לי עוד לא לדעת מה אני צריכה.", question: "מה הייתי רוצה שיהיה קצת יותר קל?", fairy: "עוד לא צריך שם\nרק רגע להרגיש" },
};

function buildReport(answers: Answer[]): Report {
  const map = new Map(answers.map((answer) => [answer.id, answer]));
  const values = (id: string) => map.get(id)?.values ?? [];
  const first = (id: string) => values(id)[0];

  const life = values("life_stage").filter((value) => value !== "prefer_not").slice(0, 2).map((value) => lifeSentences[value]).filter(Boolean);
  const hardValues = values("hard_contexts");
  const hardNames = hardValues.map((value) => contextNames[value]).filter(Boolean);
  const hardName = hardNames.length ? hardNames.join(" וגם ") : "בכמה מקומות בחיים";
  const easyValue = first("easy_context");
  const easyName = contextNames[easyValue];
  const sameContext = !!(easyValue && hardValues.includes(easyValue));

  let contextInsight = "יש מקומות שבהם קל לך יותר לשמוע את עצמך, ויש מקומות שבהם התשובה יוצאת לפני הבדיקה.";
  if (sameContext && easyName) contextInsight = `${easyName} זה יכול להיות קל ביום אחד וקשה ביום אחר. הבקשה, האדם שמולך והכוחות שיש לך באותו רגע משנים את התשובה.`;
  else if (hardNames.length && easyName) contextInsight = `${hardName} קשה לך יותר לעצור ולבדוק. ${easyName} זה כבר קורה קצת יותר בקלות. היכולת קיימת. המחיר משתנה לפי מי שמולך.`;
  else if (hardNames.length && easyValue === "nowhere") contextInsight = `${hardName} קשה לך לעצור, וכרגע גם במקומות אחרים זה לא פשוט. נתחיל ברגע אחד קטן. כל השאר יכול לחכות.`;
  else if (hardNames.length) contextInsight = `${hardName} התשובה שלך מסתבכת יותר. זה המקום שכדאי להאט בו קודם.`;

  const trigger = triggerCopy[first("before_yes")] ?? { text: "משהו קורה רגע לפני ה״כן״. עוד אין לו שם ברור, אבל את כבר מתחילה לראות אותו.", mirror: "התשובה יוצאת מהר. את נשארת לבדוק מה קרה שם." };
  const gains = values("yes_gives").slice(0, 2).map((value) => gainCopy[value]).filter(Boolean);
  const gainText = gains.join(" ") || "ה״כן״ המהיר עושה משהו חשוב באותו רגע. הוא מקצר מתח, שומר על קשר או מחזיר תחושת שליטה.";
  const afterValues = values("after_yes");
  const primaryAfter = afterCopy[afterValues[0]] ?? { headline: "אחר כך נשאר משהו בגוף.", text: "אולי עייפות, כעס או כיווץ. כדאי לתת לו רגע לפני שממשיכים." };
  const secondAfter = afterCopy[afterValues[1]];
  const afterText = secondAfter ? `${primaryAfter.text} ${secondAfter.text}` : primaryAfter.text;
  const lessValues = values("less_room");
  const namedLess = lessValues.filter((value) => value !== "nothing").map((value) => lessNames[value]).filter(Boolean);
  const pleasureText = namedLess.length ? `מה שנדחק אצלך הוא ${namedLess.join(" וגם ")}. הגוף מרגיש את מה שחסר.` : "כרגע לא הרגשת שמשהו משמעותי נדחק הצדה. אין צורך לחפש בעיה. אפשר להתחיל ממה שכבר נעים.";
  const pleasureExperiment = pleasureExperiments[lessValues[0]] ?? "בחרי השבוע רגע אחד קטן שעושה לך נעים. תני לו להימשך עוד דקה.";
  const edgeValue = first("desired_edge") || "other";
  const edge = edgeCopy[edgeValue] ?? edgeCopy.other;
  const yesTypeTitles: Record<string, string> = {
    enthusiastic: "יש לך ״כן״ שיודע לשמוח.", free_consent: "את יודעת לבחור גם בלי זיקוקים.",
    considerate: "את רוצה לעזור. גם את חלק מהבקשה.", contracted: "הפה אמר כן. הגוף נשאר מאחור.",
    automatic: "ה״כן״ כבר יצא. את עוד בודקת.", varies: "ה״כן״ שלך משתנה לפי מי שמולך.", unsure: "את מתחילה לשמוע את ההבדל.",
  };
  const permissionThem = hardValues.includes("children") ? "מותר להם לרצות עוד. מותר להם גם לפגוש גבול."
    : hardValues.includes("work") || first("before_yes") === "real_consequence" ? "מותר להם לצפות ממני. מותר לי לבדוק מה אפשרי ומה המחיר."
      : first("before_yes") === "disappointment" || values("yes_gives").includes("criticism") ? "מותר לה להתאכזב. מותר לה לכעוס. אני לא חייבת לסדר מיד את מה שהיא מרגישה."
        : first("before_yes") === "responsibility" || values("yes_gives").includes("control") ? "מותר לדברים לקרות גם בלי שאנהל כל פרט. מותר לאחרים לקחת חלק."
          : "מותר להם לבקש. מותר להם גם לגלות שאני לא תמיד זמינה.";
  const strength = values("yes_gives").includes("real_choice") || values("before_yes").includes("want_help") ? "יש בך נדיבות אמיתית. את יודעת לעזור כשאת בוחרת בזה."
    : values("yes_gives").some((value) => ["control", "reliable"].includes(value)) ? "את יודעת לקחת אחריות ולהחזיק דברים עד הסוף."
      : values("life_stage").some((value) => ["holding", "caring"].includes(value)) ? "את רואה מהר מה צריך ומי צריכה אותך."
        : "את כבר מזהה שיש הבדל בין ״כן״ ששייך לך לבין תשובה שיוצאת מהר.";
  const steps = edgeValue === "no_change"
    ? ["שימי לב ל״כן״ אחד שנעים לך.", "שימי לב ל״לא״ אחד שמגיע בקלות.", "השבוע לא צריך לעשות עם זה כלום."]
    : ["פעם אחת ביום, קחי עשרים שניות לפני תשובה.", "אמרי: ״אני בודקת וחוזרת אלייך.״", pleasureExperiment];

  return {
    title: yesTypeTitles[first("yes_type")] || "הפה אמר כן. את עוד לא החלטת.",
    opening: life.length ? life.join(" ") : "הגעת לכאן עם שאלה על ה״כן״ וה״לא״ שלך. התשובות שלך כבר מסמנות איפה כדאי להאט.",
    context_insight: contextInsight,
    consent_and_desire: `${primaryAfter.headline} ${afterText}`,
    protective_mechanism: trigger.text,
    what_is_not_broken: "ה״כן״ הזה למד לעבוד מהר. השבוע את מוסיפה לו עשרים שניות.",
    growth_edge: edge.label,
    small_practice: pleasureExperiment,
    joyfulness_lens: `השבוע תני מקום ל${namedLess[0] || "רגע אחד שכבר נעים לך"}. ${pleasureExperiment}`,
    invitation: `${hardNames.length ? `${hardName} אפשר להתחיל מבקשה אחת שחוזרת על עצמה.` : "אפשר להתחיל מבקשה אחת שחוזרת על עצמה."} נקשיב למה שקורה בגוף ונמצא תשובה שאת יכולה לחיות איתה.`,
    mirror_quote: trigger.mirror,
    belonging_insight: gainText,
    body_message: `${primaryAfter.headline} ${afterText}`,
    permission_them: permissionThem,
    permission_me: edge.permission,
    pleasure_compass: pleasureText,
    strength,
    growing_edge: `רצית שיהיה קל יותר ${edge.label}. זה הדבר שנתרגל השבוע.`,
    steps,
    carry_question: edge.question,
    fairy_whisper: edge.fairy,
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "הבקשה לא הייתה תקינה." }, { status: 400 }); }
  return NextResponse.json({ report: buildReport(cleanAnswers((body as { answers?: unknown } | null)?.answers)) });
}
