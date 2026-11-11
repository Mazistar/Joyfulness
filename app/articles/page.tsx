import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "מאמרים — Joyfulness",
  description: "מחשבות על גוף, רצון, גבולות ועונג. מילים שאפשר להרגיש בגוף.",
};

export default function ArticlesPage() {
  return (
    <>
      <header className="inner-header">
        <a className="article-brand" href="/" aria-label="Joyfulness — לדף הבית">
          <Image className="brand-logo" src="/images/joyfulness-logo.png" alt="Joyfulness" width={2172} height={724} priority />
        </a>
        <nav aria-label="ניווט ראשי">
          <a href="/">דף הבית</a>
          <a href="/#questionnaire">השאלון</a>
          <a href="/#book">משוגעת</a>
        </nav>
      </header>

      <main className="articles-page">
        <section className="articles-masthead">
          <p className="kicker dark">המאמרים של Joyfulness</p>
          <h1>מילים שאפשר<br /><em>להרגיש בגוף.</em></h1>
          <p>אני כותבת כדי להבין מה לעזאזל קורה לי. בדרך הגוף נכנס לשיחה, אומר לא, מבקש עוד ומדי פעם פשוט סוגר את העסק.</p>
        </section>

        <section className="articles-list" aria-label="רשימת מאמרים">
          <a className="article-card" href="/articles/hamitos-shel-lihyot-normalit">
            <div className="article-card-art rose" aria-hidden="true">
              <span>אני מעדיפה<br />להיות חיה</span>
              <i />
            </div>
            <div className="article-card-copy">
              <p className="article-meta">חדש · גוף, קול ועונג · 7 דקות קריאה</p>
              <h2>המיתוס של להיות נורמלית</h2>
              <p>נורמלי הוא לא בהכרח בריא. לפעמים הגוף עוצר אותנו, לא מפני שבגד בנו — אלא מפני שהוא כבר לא מוכן שניעלם.</p>
              <span className="article-read">לקריאת המאמר <b aria-hidden="true">←</b></span>
            </div>
          </a>

          <a className="article-card" href="/articles/kama-makom-la-naim">
            <div className="article-card-art" aria-hidden="true">
              <span>מה נעים<br />לך עכשיו?</span>
              <i />
            </div>
            <div className="article-card-copy">
              <p className="article-meta">תודעת עונג · 6 דקות קריאה</p>
              <h2>את יודעת מה כולם צריכים. אבל מה נעים לך?</h2>
              <p>יכול להיות שאת יודעת מה כולם צריכים — ורק מול השאלה מה נעים לך פתאום נהיה שקט.</p>
              <span className="article-read">לקריאת המאמר <b aria-hidden="true">←</b></span>
            </div>
          </a>
        </section>

        <section className="articles-coming">
          <span>עוד בדרך</span>
          <p>זה הבית החדש של המאמרים שלי. בקרוב יצטרפו לכאן עוד מילים על גבולות, רצון, גוף, יחסים והחיים עצמם.</p>
        </section>
      </main>

      <footer>
        <span>© Joyfulness</span>
        <span>מרחב אנושי · עדין · לא שיפוטי</span>
        <a href="/">חזרה לדף הבית</a>
      </footer>
    </>
  );
}
