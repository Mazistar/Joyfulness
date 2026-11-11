"use client";

import { useEffect, useMemo, useState } from "react";

type Question = {
  id: string;
  eyebrow: string;
  text: string;
  hint?: string;
  note?: string;
  multiple?: boolean;
  max?: number;
  options: { value: string; label: string }[];
};

type ReportData = {
  title: string;
  opening: string;
  context_insight: string;
  consent_and_desire: string;
  protective_mechanism: string;
  what_is_not_broken: string;
  growth_edge: string;
  small_practice: string;
  joyfulness_lens: string;
  invitation: string;
  mirror_quote: string;
  belonging_insight: string;
  body_message: string;
  permission_them: string;
  permission_me: string;
  pleasure_compass: string;
  strength: string;
  growing_edge: string;
  steps: string[];
  carry_question: string;
  fairy_whisper: string;
};

const questions: Question[] = [
  {
    id: "age",
    eyebrow: "חלק א׳ · איפה את בתוך החיים שלך?",
    text: "בת כמה את?",
    options: ["18–24", "25–34", "35–44", "45–54", "55–64", "65 ומעלה", "מעדיפה לא לומר"].map((label) => ({ value: label, label })),
  },
  {
    id: "life_stage",
    eyebrow: "חלק א׳ · איפה את בתוך החיים שלך?",
    text: "מה הכי דומה לחיים שלך עכשיו?",
    hint: "אפשר לבחור עד שניים.",
    multiple: true,
    max: 2,
    options: [
      ["building", "אני עדיין בונה לי מקום בעולם: עבודה, זוגיות, עצמאות."],
      ["holding", "אני מחזיקה בית, ילדים ועוד אלף דברים."],
      ["caring", "אני דואגת להרבה אנשים, לפעמים עוד לפני שהם ביקשו."],
      ["changing", "משהו בחיים שלי משתנה עכשיו."],
      ["space", "התפנה קצת מקום, ואני מנסה להבין מחדש מה בא לי."],
      ["body", "אני רוצה לחזור לגוף, לעונג ולדברים שעושים לי טוב."],
      ["other", "לא ממש מצאתי את עצמי כאן."],
      ["prefer_not", "מעדיפה לא לומר."],
    ].map(([value, label]) => ({ value, label })),
  },
  {
    id: "hard_contexts",
    eyebrow: "חלק ב׳ · איפה קשה לך לבחור בעצמך?",
    text: "מול מי הכי קשה לך לומר ״לא״ או לבקש משהו אחר?",
    hint: "אפשר לבחור עד שניים.",
    multiple: true,
    max: 2,
    options: [
      ["work", "בעבודה. קשה לי לאכזב או להיראות לא מספיק מחויבת."],
      ["partner", "בזוגיות או בדייטים."],
      ["children", "מול הילדים. תמיד יש עוד משהו שהם צריכים."],
      ["family", "מול ההורים או המשפחה."],
      ["friends", "מול חברות."],
      ["self", "מול עצמי. אני דורשת מעצמי יותר ממה שהייתי דורשת מאחרות."],
      ["depends", "תלוי מי מבקשת ומה היא רוצה."],
      ["none", "כרגע לא עולה לי מקום כזה."],
    ].map(([value, label]) => ({ value, label })),
  },
  {
    id: "easy_context",
    eyebrow: "חלק ב׳ · ועכשיו הצד השני של המפה",
    text: "ואיפה דווקא קצת יותר קל לך לומר ״לא״ או לבקש שינוי?",
    options: [
      ["work", "בעבודה."], ["partner", "בזוגיות או בדייטים."], ["children", "מול הילדים."],
      ["family", "מול ההורים או המשפחה."], ["friends", "מול חברות."],
      ["self", "מול עצמי."], ["varies", "זה משתנה. לפעמים קל ולפעמים ממש לא."],
      ["nowhere", "האמת? כרגע זה לא קל לי בשום מקום."], ["unknown", "לא יודעת."],
    ].map(([value, label]) => ({ value, label })),
  },
  {
    id: "before_yes",
    eyebrow: "חלק ב׳ · רגע לפני ה״כן״",
    text: "רגע לפני שאת אומרת ״כן״ למשהו שלא ממש מתאים לך, מה עובר לך בראש?",
    hint: "אפשר לבחור עד שניים.", multiple: true, max: 2,
    options: [
      ["disappointment", "אוי, היא תיעלב או תכעס עליי."],
      ["responsibility", "אם אני לא אעשה את זה, זה פשוט לא יקרה."],
      ["goodness", "לא נעים לי לצאת אנוכית או לא מספיק טובה."],
      ["real_consequence", "יש לזה מחיר אמיתי בעבודה, בכסף או בקשר שלי."],
      ["automatic", "כבר אמרתי ״כן״ לפני שהספקתי לבדוק מה בא לי."],
      ["want_help", "לפעמים אני באמת רוצה לעזור, גם אם זה דורש ממני."],
      ["unknown", "אין לי מושג. זה פשוט מרגיש לא נעים."],
      ["depends", "תלוי מי מבקשת ותלוי באיזה יום תפסת אותי."],
    ].map(([value, label]) => ({ value, label })),
  },
  {
    id: "yes_gives",
    eyebrow: "חלק ב׳ · ה״כן״ עושה בשבילך משהו",
    text: "ומה ה״כן״ הזה נותן לך באותו רגע?",
    hint: "אפשר לבחור עד שניים.", multiple: true, max: 2,
    options: [
      ["peace", "שקט. אין ריב ואין שיחה מתישה."],
      ["control", "שליטה. לפחות אני יודעת שזה יקרה."],
      ["needed", "תחושה שצריכים אותי ושאני חשובה."],
      ["reliable", "להיות זאת שתמיד אפשר לסמוך עליה."],
      ["criticism", "לא להסתבך עם ביקורת, כעס או פרצופים."],
      ["real_choice", "לפעמים זה באמת כן שלי. אני רוצה לעזור."],
      ["unknown", "לא יודעת. אף פעם לא חשבתי על זה."],
      ["other", "משהו אחר."],
    ].map(([value, label]) => ({ value, label })),
  },
  {
    id: "after_yes",
    eyebrow: "חלק ג׳ · מה קורה לך אחר כך?",
    text: "אחרי ״כן״ שלא הרגיש נכון, מה קורה לך בדרך כלל?",
    hint: "אפשר לבחור עד שניים.", multiple: true, max: 2,
    note: "תחושות בגוף יכולות להגיע מהרבה סיבות. אנחנו רק מקשיבות למה שאת מזהה, בלי לקבוע למה זה קורה.",
    options: [
      ["tired", "אני גמורה. כאילו מישהו רוקן לי את הסוללה."],
      ["pain", "הגוף שלי מתכווץ או מתחיל לכאוב."],
      ["breath", "הנשימה מתקצרת, הלב דופק או משהו נתקע בגרון."],
      ["self_anger", "אני כועסת על עצמי: למה שוב הסכמתי?"],
      ["other_anger", "אני כועסת על מי שביקשה, גם אם אני לא אומרת כלום."],
      ["loss_control", "כל היום שלי מתבלגן ואני מרגישה שאיבדתי שליטה."],
      ["disconnect", "אני מתרחקת מהגוף, ממגע או מעונג."],
      ["move_on", "אני פשוט עושה את זה וממשיכה הלאה."],
      ["no_pattern", "אני לא מזהה משהו קבוע."],
      ["other", "משהו אחר."],
    ].map(([value, label]) => ({ value, label })),
  },
  {
    id: "less_room",
    eyebrow: "חלק ג׳ · למה נשאר פחות מקום?",
    text: "בזמן שאת אומרת ״כן״ לכולם, למה נשאר פחות מקום?",
    hint: "אפשר לבחור עד שניים.", multiple: true, max: 2,
    options: [
      ["rest", "לנוח בלי להרגיש שאני צריכה להסביר."],
      ["space", "לזמן ריק שהוא רק שלי."],
      ["play", "ליצור, לשחק, לצחוק ולעשות משהו סתם כי בא לי."],
      ["body", "לגוף, לתנועה, למגע או לעונג."],
      ["nourishing", "לאנשים ולמפגשים שממלאים גם אותי."],
      ["quiet", "לקצת שקט בראש."],
      ["desire", "לרצון שלי, גם כשהוא עדיין לא לגמרי ברור."],
      ["nothing", "האמת? אני לא מרגישה שמשהו משמעותי נדחק הצידה."],
    ].map(([value, label]) => ({ value, label })),
  },
  {
    id: "yes_type",
    eyebrow: "חלק ד׳ · איזה ״כן״ את רוצה להחזיר לעצמך?",
    text: "איזה ״כן״ יוצא ממך הכי הרבה בתקופה הזו?",
    options: [
      ["enthusiastic", "״כן! בא לי.״"],
      ["free_consent", "״אני לא מתלהבת, אבל בוחרת בזה בלב שלם.״"],
      ["considerate", "״זה דורש ממני, אבל חשוב לי לעזור.״"],
      ["contracted", "״הפה אומר כן. הגוף אומר ממש לא.״"],
      ["automatic", "״אופס, כבר הסכמתי לפני שבדקתי.״"],
      ["varies", "אין אחד קבוע. זה תלוי באדם ובמצב."],
      ["unsure", "אני לא בטוחה שאני יודעת להרגיש את ההבדל."],
    ].map(([value, label]) => ({ value, label })),
  },
  {
    id: "desired_edge",
    eyebrow: "חלק ד׳ · רק דבר אחד, לא שיפוץ כללי",
    text: "מה היית רוצה שיהיה קצת יותר קל?",
    options: [
      ["pause", "לקחת שנייה לפני שאני עונה."],
      ["no_without_fear", "לומר ״לא״ בלי לנהל אחר כך סרט שלם בראש."],
      ["set_conditions", "לומר ״כן״, אבל בתנאים שמתאימים גם לי."],
      ["notice_earlier", "לקלוט את הכיווץ לפני שכבר הסכמתי."],
      ["more_alive_yes", "להכניס לחיים יותר ״כן״ שעושה לי ניצוץ."],
      ["trust_body", "לסמוך קצת יותר על מה שהגוף שלי אומר."],
      ["no_change", "האמת? כרגע לא בא לי לשנות משהו."],
      ["other", "משהו אחר."],
    ].map(([value, label]) => ({ value, label })),
  },
];

const joyfulnessReflection = (
  <div className="reflection-card">
    <p className="kicker dark">רגע קטן באמצע</p>
    <h3>רגע, זה מעניין.</h3>
    <p>במקום אחד את יודעת לומר ״לא״. במקום אחר הכול מסתבך.</p>
    <p>אז היכולת קיימת. כנראה שהמחיר מרגיש אחרת.</p>
    <p><strong>אנחנו לא סופרות כמה פעמים אמרת ״כן״ וכמה פעמים אמרת ״לא״. אנחנו מקשיבות לאיזה ״כן״ באמת שייך לך.</strong></p>
  </div>
);

export default function JourneyExperience() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [reflection, setReflection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [report, setReport] = useState<ReportData | null>(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState("");

  const question = questions[step];
  const selected = answers[question?.id] ?? [];
  const progress = Math.round(((step + 1) / questions.length) * 100);
  const answerPayload = useMemo(() => questions.map((q) => ({
    id: q.id,
    question: q.text,
    values: answers[q.id] ?? [],
    answers: (answers[q.id] ?? []).map((value) => q.options.find((option) => option.value === value)?.label ?? value),
  })).filter((entry) => entry.answers.length), [answers]);

  useEffect(() => {
    if (!report) return;
    let active = true;
    let objectUrl = "";

    async function buildPdfPreview() {
      setPdfLoading(true);
      setPdfError("");
      try {
        await document.fonts.ready;
        const source = document.querySelector<HTMLElement>(".report-document");
        if (!source) throw new Error("הדוח עדיין לא מוכן לתצוגה.");

        const shell = document.createElement("div");
        shell.className = "pdf-export-shell";
        const clone = source.cloneNode(true) as HTMLElement;
        clone.classList.add("pdf-export");
        shell.appendChild(clone);
        document.body.appendChild(shell);

        try {
          const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
            import("html2canvas"),
            import("jspdf"),
          ]);
          const pages = Array.from(clone.querySelectorAll<HTMLElement>(".report-page"));
          if (!pages.length) throw new Error("לא מצאנו את עמודי הדוח.");

          const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait", compress: true });
          for (let index = 0; index < pages.length; index += 1) {
            const page = pages[index];
            const canvas = await html2canvas(page, {
              scale: 2,
              useCORS: true,
              backgroundColor: "#fffaf3",
              logging: false,
              width: page.scrollWidth,
              height: page.scrollHeight,
              windowWidth: page.scrollWidth,
              windowHeight: page.scrollHeight,
            });
            if (index > 0) pdf.addPage("a4", "portrait");
            pdf.addImage(canvas.toDataURL("image/jpeg", 0.98), "JPEG", 0, 0, 210, 297, `report-page-${index + 1}`, "FAST");
          }

          const blob = pdf.output("blob");
          objectUrl = URL.createObjectURL(blob);
          if (active) setPdfUrl(objectUrl);
        } finally {
          shell.remove();
        }
      } catch (reason) {
        if (active) setPdfError(reason instanceof Error ? reason.message : "לא הצלחנו לפתוח את ה־PDF כרגע.");
      } finally {
        if (active) setPdfLoading(false);
      }
    }

    const timer = window.setTimeout(() => void buildPdfPreview(), 80);
    return () => {
      active = false;
      window.clearTimeout(timer);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [report]);

  function choose(value: string) {
    setError("");
    if (!question.multiple) {
      setAnswers((current) => ({ ...current, [question.id]: [value] }));
      return;
    }
    const current = selected;
    const next = current.includes(value) ? current.filter((item) => item !== value) : current.length < (question.max ?? 2) ? [...current, value] : current;
    setAnswers((state) => ({ ...state, [question.id]: next }));
  }

  function next() {
    if (!selected.length) {
      setError("לא מצאת תשובה שמתאימה? אפשר לדלג. אין כאן מבחן.");
      return;
    }
    if (step === 3) {
      setReflection(true);
      return;
    }
    if (step === questions.length - 1) {
      void createReport();
      return;
    }
    setStep((value) => value + 1);
  }

  function skip() {
    setError("");
    if (step === 3) setReflection(true);
    else if (step === questions.length - 1) void createReport();
    else setStep((value) => value + 1);
  }

  async function createReport() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/report", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ answers: answerPayload }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "לא הצלחנו להכין את הדוח כרגע.");
      setReport(data.report);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "לא הצלחנו להכין את הדוח כרגע.");
    } finally {
      setLoading(false);
    }
  }

  if (report) {
    return (
      <div className="journey-app report-app" aria-live="polite">
        <div className="report-toolbar controls">
          {pdfUrl ? <a className="primary-action pdf-download" href={pdfUrl} download="joyfulness-personal-report.pdf">להוריד את ה־PDF</a> : <span className="toolbar-status">מכינה את ה־PDF…</span>}
          <button className="secondary-action" type="button" onClick={() => { setReport(null); setPdfUrl(""); setStep(0); setAnswers({}); }}>למלא שוב</button>
        </div>

        <section className="pdf-preview-panel" aria-live="polite">
          <div className="pdf-preview-head">
            <div><p className="report-kicker">הדוח שלך</p><h3>{pdfLoading ? "עוד רגע הוא כאן." : pdfUrl ? "מוכן. אפשר לפתוח, לקרוא ולשמור." : "הדו״ח מוכן לקריאה."}</h3></div>
            {pdfUrl && <a className="secondary-action pdf-download" href={pdfUrl} target="_blank" rel="noreferrer">לפתוח בחלון מלא</a>}
          </div>
          {pdfLoading && <div className="pdf-making"><span aria-hidden="true">✦</span><p>מחברת את החוטים.<br />משאירה מקום לנשום.</p></div>}
          {pdfError && <div className="pdf-fallback"><p>{pdfError}</p><button className="secondary-action" type="button" onClick={() => window.print()}>לפתוח דרך הדפסה</button></div>}
          {pdfUrl && <iframe className="pdf-frame" title="הדוח האישי שלך ב־PDF" src={pdfUrl} />}
        </section>

        <main className="report-document" tabIndex={-1}>
          <article className="report-page report-cover">
            <div className="report-page-content">
              <p className="report-brand">JOYFULNESS · מזל טוב סולומון</p>
              <p className="report-kicker">הדוח האישי שלך</p>
              <h2>{report.title}</h2>
              <p className="report-lead">ענית מהבטן. עכשיו אפשר לראות מה קורה בשנייה שלפני ה״כן״, ומה קורה לך אחריו.</p>
              <img className="report-cover-art" src="/assets/report-thread.png" alt="קו שנע מקשר סבוך אל פריחה" />
              <p className="report-cover-line">הגוף הוא המפתח.<br />העונג הוא השפה.</p>
            </div>
            <footer>הדוח האישי שלך <span>01</span></footer>
          </article>

          <article className="report-page">
            <div className="report-page-content">
              <p className="report-kicker">מה קורה אצלך</p>
              <h2>את שומעת את כולם.<br /><em>את עצמך קצת אחר כך.</em></h2>
              <p className="report-lead">{report.opening}</p>
              <section className="report-feature-card"><span>המקום שבו זה מסתבך</span><p>{report.context_insight}</p></section>
              <blockquote>{report.mirror_quote}</blockquote>
              <aside className="fairy-whisper"><span>🧚 לחישה מהפיה</span><p>{report.fairy_whisper}</p></aside>
              <p className="report-small">הדוח מבוסס על מה שסימנת בשאלון. הוא מציע שיקוף ושאלות, לא אבחון פסיכולוגי או רפואי.</p>
            </div>
            <footer>JOYFULNESS · רואים אותך <span>02</span></footer>
          </article>

          <article className="report-page">
            <div className="report-page-content">
              <p className="report-kicker">ה״כן״ המהיר</p>
              <h2>לפעמים הוא עושה<br /><em>סדר מהר.</em></h2>
              <p className="report-lead">{report.protective_mechanism}</p>
              <div className="report-two">
                <section className="report-soft-card"><span>מה הוא נותן לך באותו רגע</span><p>{report.belonging_insight}</p></section>
                <section className="report-soft-card rose"><span>מה מגיע אחר כך</span><p>{report.consent_and_desire}</p></section>
              </div>
              <p className="report-statement">{report.what_is_not_broken}</p>
            </div>
            <footer>JOYFULNESS · המנגנון ששמר עלייך <span>03</span></footer>
          </article>

          <article className="report-page">
            <div className="report-page-content">
              <p className="report-kicker">הגוף נכנס לשיחה</p>
              <h2>הגוף לא עושה דרמה.<br /><em>הוא מדבר.</em></h2>
              <p className="report-lead">{report.body_message}</p>
              <section className="report-feature-card olive-card">
                <span>מה אפשר לשאול ברגע הזה?</span>
                <ul>
                  <li>עניתי מהר מדי?</li>
                  <li>יש לי מקום לעוד דבר כרגע?</li>
                  <li>אני רוצה לעזור, אבל אולי בדרך אחרת?</li>
                </ul>
              </section>
              <blockquote>רגע לפני התשובה:<br />מה קורה לי עכשיו?</blockquote>
              <p className="report-small"><strong>חשוב:</strong> עייפות, כאב או תחושות גופניות יכולים להגיע מסיבות רבות. הדוח אינו מחליף בירור רפואי או תמיכה מקצועית כשצריך.</p>
            </div>
            <footer>JOYFULNESS · הגוף כמקור מידע <span>04</span></footer>
          </article>

          <article className="report-page">
            <div className="report-page-content">
              <p className="report-kicker">להחזיר את הבחירה</p>
              <h2>מותר להם.<br /><em>מותר לי.</em></h2>
              <p className="report-lead">להם מותר להרגיש.<br />לך מותר לבחור.</p>
              <div className="report-two permission-grid">
                <section className="report-soft-card rose"><span>מותר להם</span><p>{report.permission_them}</p></section>
                <section className="report-soft-card"><span>מותר לי</span><p>{report.permission_me}</p></section>
              </div>
              <section className="report-practice"><span>ניסוי קטן לשבוע הקרוב</span><h3>עשרים שניות שהן רק שלך</h3><ol><li>אל תעני עדיין.</li><li>אמרי: ״אני בודקת וחוזרת אלייך.״</li><li>בדקי: רוצה? יכולה? מתאים לי עכשיו?</li></ol><p className="report-practice-line">תשובה אחת. בלי כתב הגנה.</p></section>
            </div>
            <footer>JOYFULNESS · מה מותר להם ומה מותר לי <span>05</span></footer>
          </article>

          <article className="report-page">
            <div className="report-page-content">
              <p className="report-kicker">תודעת עונג</p>
              <h2>מה מחזיר לך<br /><em>קצת חיים?</em></h2>
              <p className="report-lead">{report.pleasure_compass}</p>
              <section className="report-dark-card"><span>הניסוי שלך השבוע</span><p>{report.joyfulness_lens}</p></section>
              <div className="report-three">
                <section><b>01</b><h3>מה מכווץ?</h3><p>איפה הגוף נסגר?</p></section>
                <section><b>02</b><h3>מה נעים?</h3><p>אפילו קצת.</p></section>
                <section><b>03</b><h3>מה בא לי?</h3><p>לפני ההסברים.</p></section>
              </div>
            </div>
            <footer>JOYFULNESS · איזה כן שייך לך? <span>06</span></footer>
          </article>

          <article className="report-page">
            <div className="report-page-content">
              <p className="report-kicker">לשבוע הקרוב</p>
              <h2>רק דבר אחד<br /><em>לתרגל.</em></h2>
              <div className="report-two">
                <section className="report-soft-card"><span>מה כבר יש בך</span><p>{report.strength}</p></section>
                <section className="report-soft-card rose"><span>מה רצית שיהיה קל יותר</span><p>{report.growing_edge}</p></section>
              </div>
              <h3 className="report-subtitle">שלושת הצעדים שלך</h3>
              <div className="report-steps">{report.steps.map((item, index) => <p key={item}><b>{index + 1}</b>{item}</p>)}</div>
              <blockquote>לפני שאת עונה לה,<br />תני גם לך להיכנס לשיחה.</blockquote>
              <section className="report-question"><span>שאלה לקחת איתך</span><p>{report.carry_question}</p></section>
            </div>
            <footer>JOYFULNESS · צעד אחד שאפשר לחיות <span>07</span></footer>
          </article>

          <article className="report-page report-personal">
            <div className="report-page-content">
              <p className="report-kicker">מילה ממני</p>
              <h2>אם משהו כאן תפס אותך,<br />אפשר להתחיל משם.</h2>
              <div className="report-personal-grid">
                <img src="/assets/report-mazi.png" alt="מזל טוב סולומון עם הספר משוגעת" />
                <div>
                  <p className="report-lead">אני פוגשת שוב ושוב את הרגע הזה: ה״כן״ כבר בחוץ, ואת נשארת עם הכיווץ.</p>
                  <p>{report.invitation}</p>
                  <p className="report-signature">מזל טוב סולומון</p>
                  <small>יוצרת Joyfulness · מחברת הספר “משוגעת”</small>
                </div>
              </div>
              <section className="report-cta"><div><h3>שיחת פוקוס ראשונית</h3><p>נבחר בקשה אחת שחוזרת על עצמה ונמצא תשובה שאפשר להשתמש בה כבר השבוע.<br />בהטבה מיוחדת למסיימות השאלון.</p></div><a className="button button-light" href="#meeting">אני רוצה שיחת פוקוס</a></section>
              <p className="report-closing">אפשר להתחיל מהמקום שבו אמרת:<br />למה שוב הסכמתי?</p>
              <p className="report-small">הדוח הוא כלי להתבוננות ולהכוונה אישית. הוא אינו אבחון רפואי או נפשי ואינו מחליף טיפול או ייעוץ מקצועי.</p>
            </div>
            <footer>JOYFULNESS · מזל טוב סולומון <span>08</span></footer>
          </article>
        </main>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="journey-app" aria-live="polite">
        <section className="app-screen center report-loading"><div className="loading-orbit" aria-hidden="true">✦</div><h3>רגע. מחברת את החוטים.</h3><p>מחפשת משפט אחד מדויק<br />בתוך מה שסימנת.</p></section>
      </div>
    );
  }

  if (reflection) {
    return (
      <div className="journey-app" aria-live="polite">
        <section className="app-screen center" tabIndex={-1}>
          {joyfulnessReflection}
          <div className="controls reflection-controls"><button className="primary-action" type="button" onClick={() => { setReflection(false); setStep(4); }}>להמשיך ←</button></div>
        </section>
      </div>
    );
  }

  return (
    <div className="journey-app" aria-live="polite">
      <section className="app-screen" tabIndex={-1}>
        <div className="progress-row"><span>{step + 1} מתוך {questions.length}</span><div className="progress-track"><i style={{ width: `${progress}%` }} /></div></div>
        <div className="question-wrap">
          <p className="question-eyebrow">{question.eyebrow}</p>
          <h3>{question.text}</h3>
          {question.hint && <p className="question-hint">{question.hint}</p>}
          <div className="answers">
            {question.options.map((option) => (
              <button key={option.value} className={`answer ${selected.includes(option.value) ? "selected" : ""}`} type="button" aria-pressed={selected.includes(option.value)} onClick={() => choose(option.value)}>
                {question.id === "age" ? <span dir="ltr">{option.label}</span> : option.label}
              </button>
            ))}
          </div>
          {question.note && <p className="question-note">{question.note}</p>}
        </div>
        <div className="controls">
          <button className="primary-action" type="button" onClick={next}>{step === questions.length - 1 ? "לקבל את הדוח שלי ←" : step === 0 ? "מתחילה ←" : "עוד שאלה אחת ←"}</button>
          <button className="secondary-action" type="button" onClick={skip}>לדלג</button>
          {step > 0 && <button className="quiet-action" type="button" onClick={() => setStep((value) => value - 1)}>→ לחזור</button>}
        </div>
        <p className="error" role="status">{error}</p>
        <button className="stop-button" type="button" onClick={() => void createReport()}>די לי בינתיים, תודה</button>
      </section>
    </div>
  );
}
