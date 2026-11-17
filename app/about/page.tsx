import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "מי אני? — מזל טוב סולומון | Joyfulness",
  description: "הסיפור האישי של מזל טוב סולומון — על חופש, עונג, ביטוי אותנטי והדרך מהילדה הטובה אל החיים בגוף.",
};

export default function AboutPage() {
  return (
    <>
      <header className="inner-header article-header">
        <a className="article-brand" href="/" aria-label="Joyfulness — לדף הבית">
          <Image className="brand-logo" src="/images/joyfulness-logo.png" alt="Joyfulness" width={2172} height={724} priority />
        </a>
        <nav aria-label="ניווט ראשי">
          <a href="/articles">מאמרים</a>
          <a href="/#questionnaire">השאלון</a>
          <a href="/#book">משוגעת</a>
        </nav>
      </header>

      <main className="about-page">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero-copy">
            <p className="section-label">מי עומדת מאחורי Joyfulness</p>
            <h1 id="about-title">מי <strong>אני?</strong></h1>
            <p>החופש, העונג והביטוי העצמי האותנטי שאת רואה היום לא קרו בן לילה.</p>
          </div>
          <figure>
            <Image
              src="/images/mazi-editorial-bw.webp"
              alt="מזל טוב סולומון יושבת באור שמש, בתצלום שחור־לבן"
              width={2048}
              height={1368}
              priority
              sizes="(max-width: 760px) 100vw, 52vw"
            />
          </figure>
        </section>

        <article className="about-story">
          <p className="about-opening">סביר להניח שאת פה כי בא לך לדעת מי עומדת מאחורי כל זה. אבל לפני שאני מציפה אותך בתארים, בספרים או בהישגים, חשוב לי שתדעי משהו אחד: החופש, העונג והביטוי העצמי האותנטי שאת רואה היום לא קרו בן לילה. הם נבנו אבן אחר אבן, מתוך פירוק אמיץ של כל התבניות שהחזיקו אותי.</p>

          <p>אני לא הולכת לשקר לך – זה לא היה פוטוגני.</p>

          <p>זה היה חשוף, מטלטל ומפחיד.</p>

          <p>הייתה תקופה ארוכה בחיים שלי שבה הייתי כלואה לחלוטין בתוך הציפייה להיות &quot;הילדה הטובה&quot;. תפקדתי מעולה, החזקתי את הבית, העבודה והתפקידים, אבל מתחת לשריון המהודק הזה – העונג שלי נקבר והחיוניות שלי נחנקה.</p>

          <p>עד שהגיעה הקריסה. הרגע שבו הכל התפורר.</p>

          <p>כשעמדתי מול השבריריות של עצמי, שאלתי:</p>

          <blockquote>&quot;מי אני כשאין לי יותר שום תבנית להישען עליה?&quot;</blockquote>

          <p>שם הבנתי את הסוד: כשאין תבנית שמחזיקה אותך, אף תבנית גם לא יכולה לכלוא אותך יותר.</p>

          <p>הפסקתי לבקש פטור או אישור להיות מי שאני. הפסקתי לחכות לרגע &quot;בטוח&quot;, ונתתי לעצמי את הרשות האולטימטיבית: להסכים להיות &quot;משוגעת&quot;, להחזיר את האש לבטן התחתונה, להתחבר לחוצפה הקדושה שלי ולהתמסר לביטוי האותנטי שלי.</p>

          <p>היום, דרך הסדנאות, הליווי והכתיבה, אני עוזרת למורים, מטפלים ומנחים לשבור את הסורגים השקופים של הבושה, האשמה והספק העצמי. השליחות שלי היא ללמד איך להוריד את השריון, להבין את האיתותים של הגוף, לעבור מהישרדות וריצוי אל עבר חיות טהורה, ולהשפיע עם האמת שלך בעולם.</p>

          <p>כי ברגע שאת מסכימה להפסיק להצטמק מול הציפיות של אחרים, נפתחת השאלה הכי מרגשת ביקום:</p>

          <blockquote className="about-question">&quot;מה עוד אפשרי עבורי?&quot;</blockquote>

          <p>את לא צריכה להיות חסרת פחד כדי לשנות את החיים שלך. את לא צריכה תכנית מושלמת. את רק צריכה לקבל החלטה אחת: לפעול מתוך הרצון והעונג שלך, לתת לעצמך רשות להגיד &quot;בא לי&quot; עמוק וחשוף, ולסמוך על הגוף שלך. הוא יודע.</p>

          <p>מזמינה אותך לשרוף את התסריטים הישנים, לסמוך על הקול הפראי שלך, ולגלות כמה חופש, עונג והשפעה מחכים לך בצד השני.</p>

          <div className="about-signature">
            <span>באהבה,</span>
            <strong>מזל טוב</strong>
          </div>
        </article>

        <section className="article-cta about-cta">
          <p className="kicker">אפשר להתחיל מכאן</p>
          <h2>מה הגוף שלך<br />כבר יודע?</h2>
          <p>עשר שאלות קצרות שיעזרו לך לראות איפה ה״כן״ שלך יוצא מהר מדי — ומה בך מבקש עכשיו קצת יותר מקום.</p>
          <a className="button button-light" href="/#questionnaire">להתחיל מהבטן</a>
        </section>
      </main>

      <footer>
        <span>© Joyfulness</span>
        <span>פחות להחזיק. יותר להרגיש.</span>
        <a href="/">חזרה לדף הבית</a>
      </footer>
    </>
  );
}
