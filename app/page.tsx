import Image from "next/image";
import JourneyExperience from "./journey-experience";

const Logo = ({ light = false }: { light?: boolean }) => (
  <Image
    className={light ? "brand-logo brand-logo-light" : "brand-logo"}
    src="/images/joyfulness-logo.png"
    alt="Joyfulness"
    width={2172}
    height={724}
    priority
  />
);

export default function Home() {
  return (
    <div className="home-page">
      <header className="magazine-header">
        <a className="logo-link" href="#top" aria-label="Joyfulness — דף הבית">
          <Logo />
        </a>
        <nav aria-label="ניווט ראשי">
          <a href="#articles">מאמרים</a>
          <a href="#moments">רגעים</a>
          <a href="#questionnaire">השאלון</a>
          <a href="#book">משוגעת</a>
          <a href="#mazi">מזי</a>
        </nav>
        <a className="header-question" href="#questionnaire">מה נעים לי עכשיו?</a>
      </header>

      <main id="top">
        <section className="editorial-hero" aria-labelledby="home-title">
          <div className="hero-copy">
            <p className="eyebrow">Joyfulness · גוף, רצון ועונג</p>
            <h1 id="home-title">
              לא בא לי להיות
              <strong>חזקה</strong>
              היום.
            </h1>
            <p className="hero-subcopy">כולם צריכים ממני משהו.<br />רגע. ומה בא לי?</p>
            <a className="ink-link" href="#brand-statement">להישאר רגע עם השאלה <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="hero-image-wrap">
            <Image
              src="/images/mazi-hero-color.webp"
              alt="מזי מחייכת ופונה קדימה באור טבעי ליד הים"
              width={1672}
              height={941}
              priority
              sizes="(max-width: 760px) 100vw, 58vw"
            />
          </figure>
        </section>

        <section className="brand-statement" id="brand-statement">
          <p className="section-label">הצהרת כוונות</p>
          <h2>פחות להחזיק.<br />יותר <em>להרגיש.</em></h2>
          <div className="statement-copy">
            <p>שנים ידעתי להחזיק, לדאוג ולהסתדר. רק את עצמי שמעתי קצת אחר כך.</p>
            <p>היום אני כותבת על מה שלמדתי לשמוע: הגוף, הרצון, ה״לא״ — והעונג שמחזיר לחיים.</p>
          </div>
        </section>

        <section className="opening-stories" aria-label="שלושה מקומות להתחיל מהם">
          <a className="opening-card opening-paper" href="/articles/kama-makom-la-naim">
            <span className="card-index">01 · מאמר</span>
            <h3>את יודעת מה כולם צריכים. אבל מה נעים לך?</h3>
            <p>יכול להיות שאת יודעת מה כולם צריכים — ורק מול השאלה מה נעים לך פתאום נהיה שקט.</p>
            <b>לקריאה ←</b>
          </a>
          <article className="opening-card opening-velvet">
            <span className="card-index">02 · רגע</span>
            <p className="velvet-line">את לא צריכה להוכיח שאת יכולה להחזיק הכול.</p>
            <small>אפשר להניח משהו. אפילו לרגע.</small>
          </article>
          <a className="opening-card opening-sand" href="#questionnaire">
            <span className="card-index">03 · שאלה</span>
            <h3>איפה ה״כן״ שלך יוצא מהר מדי?</h3>
            <b>לבדוק מהבטן ←</b>
          </a>
        </section>

        <section className="questionnaire-zone" id="questionnaire" aria-labelledby="questionnaire-title">
          <div className="questionnaire-intro">
            <p className="section-label">השאלון</p>
            <h2 id="questionnaire-title">מה הגוף שלך<br /><strong>כבר יודע?</strong></h2>
            <p>עשר שאלות קצרות שיעזרו לך לראות איפה ה״כן״ שלך יוצא מהר מדי — ומה בך מבקש עכשיו קצת יותר מקום.</p>
            <div className="questionnaire-meta" aria-label="פרטי השאלון">
              <span>3 דקות</span><i>·</i><span>אישי</span><i>·</i><span>ללא ציון</span>
            </div>
            <a className="cream-button" href="#questions">להתחיל מהבטן</a>
          </div>
          <div className="questionnaire-landscape" role="img" aria-label="עקבות יחפות בחול ליד סלע">
            <span>אולי הגוף כבר<br />השאיר לך סימן.</span>
          </div>
          <div className="questionnaire-app" id="questions">
            <JourneyExperience />
          </div>
        </section>

        <section className="sensory-archive" id="articles" aria-labelledby="archive-title">
          <div className="archive-heading">
            <p className="section-label">הארכיון החושי</p>
            <h2 id="archive-title">מילים שאפשר<br /><em>להרגיש בגוף.</em></h2>
            <a className="ink-link" href="/articles">לכל המאמרים <span aria-hidden="true">←</span></a>
          </div>
          <div className="archive-grid">
            <a className="archive-tile archive-feature" href="/articles/hamitos-shel-lihyot-normalit">
              <span>מאמר · 7 דקות</span>
              <h3>המיתוס של להיות נורמלית</h3>
              <p>נורמלי הוא לא בהכרח בריא. לפעמים הגוף עוצר אותנו מפני שהוא כבר לא מוכן שניעלם.</p>
            </a>
            <article className="archive-tile archive-velvet">
              <span>רגע לשמור</span>
              <blockquote>הגוף לא עושה דרמה.<br />הוא שולח חשבונית.</blockquote>
            </article>
            <a className="archive-tile archive-note" href="/articles/kama-makom-la-naim">
              <span>תודעת עונג</span>
              <h3>גם ליהנות הפך לעוד משימה. יופי. עוד משהו לעשות נכון.</h3>
            </a>
            <a className="archive-tile archive-sand" href="#questionnaire">
              <span>שאלה לקחת איתך</span>
              <h3>אם לא היית צריכה לנהל את התגובה שלה — מה היה נכון לך?</h3>
            </a>
          </div>
        </section>

        <section className="micro-moments" id="moments" aria-labelledby="moments-title">
          <div className="moments-heading">
            <p className="section-label">מיקרו־רגעים</p>
            <h2 id="moments-title">לא צריך להפוך<br />את כל החיים.</h2>
          </div>
          <div className="moments-list">
            <article><span>01</span><p>לפני שאת עונה, קחי נשימה אחת שלא שייכת לאף אחת אחרת.</p></article>
            <article><span>02</span><p>נסי להגיד: ״אני בודקת וחוזרת אלייך״. זו תשובה שלמה.</p></article>
            <article><span>03</span><p>שימי לב איפה בגוף יש קצת יותר מקום כשאת אומרת אמת.</p></article>
          </div>
        </section>

        <section className="featured-story" id="mazi" aria-labelledby="featured-title">
          <figure>
            <Image
              src="/images/mazi-editorial-bw.webp"
              alt="מזי יושבת על הרצפה באור שמש חזק, בתצלום שחור־לבן"
              width={2048}
              height={1368}
              loading="lazy"
              sizes="(max-width: 760px) 100vw, 54vw"
            />
          </figure>
          <div className="featured-copy">
            <p className="section-label">מאמר מרכזי</p>
            <h2 id="featured-title">הוא אוהב אותי.<br />ובכל זאת, אני <strong>לבד.</strong></h2>
            <p>יש בדידות שלא נולדת מהיעדר אהבה. היא נולדת מהרגע שבו את מפסיקה להביא את עצמך לקשר כדי לשמור עליו.</p>
            <a className="gold-link" href="/articles/hamitos-shel-lihyot-normalit">להמשיך לקרוא ←</a>
          </div>
        </section>

        <section className="book-section" id="book" aria-labelledby="book-title">
          <div className="book-copy">
            <p className="section-label">הספר משוגעת</p>
            <h2 id="book-title">הייתי נורמלית מדי.<br /><strong>אז השתגעתי.</strong></h2>
            <p>ספר על הרגע שבו החיים המנומסים כבר לא הספיקו. על גוף, תשוקה, פחד, ועל האומץ להפסיק להיעלם בתוך מה שמצופה.</p>
            <a className="cream-button dark-button" href="#letters">אני רוצה לשמוע עוד</a>
          </div>
          <figure>
            <Image
              src="/images/meshugaat-reading-scene.webp"
              alt="הספר משוגעת על מצעים מקומטים וקטיפה בורדו, לצד משקפיים, אוזניות וכף רגל בקצה הפריים"
              width={1128}
              height={1410}
              loading="lazy"
              sizes="(max-width: 760px) 100vw, 52vw"
            />
          </figure>
        </section>

        <section className="letters-section" id="letters" aria-labelledby="letters-title">
          <p className="section-label">מכתבים מ־Joyfulness</p>
          <h2 id="letters-title">אם נאלמת קצת,<br /><strong>אני אכתוב לך.</strong></h2>
          <p>מדי פעם מכתב קטן. בלי שיעורי בית ובלי להסביר לך איך לחיות. אולי רק משפט אחד שיחזיר אותך לשיחה.</p>
          <form className="letters-form">
            <label htmlFor="email">כתובת המייל שלך</label>
            <div>
              <input id="email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="name@example.com" required />
              <button type="submit">להצטרף</button>
            </div>
          </form>
        </section>
      </main>

      <footer className="magazine-footer">
        <a className="footer-logo" href="#top" aria-label="Joyfulness — חזרה לראש העמוד"><Logo light /></a>
        <p>פחות להחזיק. יותר להרגיש.</p>
        <nav aria-label="ניווט תחתון"><a href="/articles">מאמרים</a><a href="#questionnaire">השאלון</a><a href="#book">משוגעת</a></nav>
        <small>© Joyfulness · התשובות בשאלון אינן נשמרות באתר</small>
      </footer>
    </div>
  );
}
