import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const AUTHOR_IMAGE = "https://cdn.poehali.dev/projects/9d087903-6158-457c-933f-d15b5d516d1d/files/b9d38b86-7db7-48f3-9ab8-802d1641b956.jpg";
const BOOK_IMAGE = "https://cdn.poehali.dev/projects/9d087903-6158-457c-933f-d15b5d516d1d/files/d57bbfef-90a5-47aa-aa08-53a85b9ff0af.jpg";

const STORIES = [
  {
    id: 1,
    title: "Последний трамвай",
    genre: "Городская проза",
    year: "2023",
    preview: "Дождь барабанил по крышам, когда Антон заметил трамвай на путях, которых здесь не должно было быть...",
    readTime: "12 мин",
    text: `Дождь барабанил по крышам, когда Антон заметил трамвай на путях, которых здесь не должно было быть. Он стоял посреди Садового кольца — там, где уже двадцать лет не было рельсов.

Антон потёр глаза. Трамвай был настоящим. Жёлтым, немного облезлым, с туманными окнами. В одном из них мигал слабый свет, будто внутри кто-то читал при свече.

Он подошёл ближе. Двери открылись с тем характерным скрежетом, который он помнил с детства. Из темноты донёсся запах влажного дерева и чего-то ещё — старых газет, может быть, или времени.

— Садитесь, — сказал кондуктор, не поднимая головы. Женщина в синем форменном пальто что-то записывала в журнал. — Последний рейс через пять минут.

— Куда идёт трамвай? — спросил Антон.

Она подняла глаза. В них была такая усталость, что он почувствовал её физически.

— Туда, где вы хотели остаться, — ответила она просто. — Все пассажиры едут по разным адресам.

Антон вошёл. Сиденья были деревянными и тёплыми. У окна сидел старик с шахматной доской. Рядом — девочка лет десяти, державшая в руках рыжего кота. Кот смотрел на Антона с пониманием.

Трамвай тронулся беззвучно. За окном поплыл город, но уже другой — с теми зданиями, которых больше нет, с людьми в пальто, которые давно умерли.

— Первая остановка, — объявила кондукторша. — Переулок Детства.

Антон не сошёл. Он остался сидеть и смотреть в окно, как за стеклом проплывает то, что он думал, что потерял навсегда.`,
  },
  {
    id: 2,
    title: "Буква Щ",
    genre: "Абсурдизм",
    year: "2022",
    preview: "Однажды из алфавита исчезла буква Щ. Просто пропала — между Ш и Ъ образовалась дыра...",
    readTime: "8 мин",
    text: `Однажды из алфавита исчезла буква Щ. Просто пропала — между Ш и Ъ образовалась дыра, как выбитый зуб.

Поначалу никто не заметил. Щука стала укой, щепетильность — епетильностью, борщ превратился в бор (что вызвало некоторую путаницу в меню ресторанов). Лингвисты написали несколько встревоженных статей. Правительство создало комиссию.

Щ тем временем сидела в небольшом кафе в Праге и пила кофе. Она была похожа на пожилую женщину — угловатую, с острыми локтями. Напротив неё расположилась Ъ, которая всегда знала больше, чем говорила.

— Они хватились? — спросила Щ, помешивая сахар.

— Комиссия, — сказала Ъ. — И петиция. Несколько тысяч подписей.

— Странно. Я думала, без меня удобнее.

Ъ покачала головой.

— Язык без буквы — это человек без воспоминания. Технически жив, а чего-то не хватает.

Щ посмотрела в окно. По улице шла женщина с сумкой и ребёнком. Ребёнок на что-то показывал и кричал что-то радостное. Наверное, кричал щенок! Но теперь это звучало как енок, и женщина недоуменно смотрела по сторонам, не понимая, чему так радуется её сын.

— Ладно, — сказала Щ и встала. — Пойду обратно.

Она расплатилась, оставила на столике монету с буквой Щ как чаевые и вышла в сырой пражский день.

На следующее утро лингвисты обнаружили её на месте. Между Ш и Ъ снова всё было в порядке. Комиссию распустили. Рестораны вернули борщ в меню.

Никто так и не узнал, куда она ходила. Но с тех пор на некоторых словах с буквой Щ остался едва заметный запах пражского кофе.`,
  },
  {
    id: 3,
    title: "Коллекционер тишины",
    genre: "Магический реализм",
    year: "2024",
    preview: "Он собирал тишину в стеклянные банки. Разную — тишину библиотек, тишину после ссоры, тишину перед рассветом...",
    readTime: "15 мин",
    text: `Он собирал тишину в стеклянные банки. Разную — тишину библиотек, тишину после ссоры, тишину перед рассветом.

У него была особая технология: нужно было прийти в нужное место в нужное время, открыть банку с притёртой стеклянной крышкой и подождать. Тишина входила медленно, как дым — она была чуть голубоватой и немного пахла озоном.

Самой редкой в его коллекции была банка из монастырской библиотеки в горах. Он поехал туда специально. Монахи смотрели на него с любопытством — человек, сидящий неподвижно с открытой банкой, — но ничего не говорили. Это была их природа.

Когда банка наполнилась, он почувствовал, как что-то щёлкнуло внутри. Монастырская тишина была особенной: в ней было столько молитв, столько лет созерцания, что она весила как вода.

Дома он поставил её на отдельную полку.

Однажды пришла журналистка — писать о нём статью. Она смотрела на полки с банками с видом человека, который не уверен, стоит ли вызывать врача.

— И что вы с ними делаете? — спросила она наконец.

— Открываю иногда, — ответил он. — Когда слишком шумно.

— Внутри или снаружи?

Он посмотрел на неё с уважением. Умная женщина.

— По-разному, — сказал он честно.

Журналистка написала статью. Редактор сократил её вдвое, убрал всё про внутренний шум и оставил только забавную историю про чудака с банками. Читатели написали много добрых комментариев.

Он прочёл статью, улыбнулся и открыл банку с тишиной перед рассветом.`,
  },
];

const BOOKS = [
  {
    id: 1,
    title: "Карты несуществующих городов",
    year: "2023",
    pages: 312,
    description: "Сборник историй о местах, которых нет на картах, но которые существуют в памяти каждого.",
    genre: "Проза",
    cover: BOOK_IMAGE,
  },
  {
    id: 2,
    title: "Азбука молчания",
    year: "2021",
    pages: 228,
    description: "Двадцать шесть историй — по одной на каждую букву. О языке, потере слов и находке смысла.",
    genre: "Малая проза",
    cover: BOOK_IMAGE,
  },
  {
    id: 3,
    title: "Инвентарь потерь",
    year: "2019",
    pages: 180,
    description: "Дебютный сборник. Одиннадцать историй об утратах, которые невозможно занести в список.",
    genre: "Лирическая проза",
    cover: BOOK_IMAGE,
  },
];

type Section = "home" | "stories" | "books" | "about" | "contacts";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [openReader, setOpenReader] = useState<(typeof STORIES)[0] | null>(null);
  const [fontSize, setFontSize] = useState(18);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [scrollPos, setScrollPos] = useState(0);
  const readerRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const handleScroll = () => {
    if (readerRef.current) {
      const el = readerRef.current;
      const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPos(Math.round(progress));
    }
  };

  useEffect(() => {
    if (openReader && readerRef.current) {
      readerRef.current.scrollTop = 0;
      setScrollPos(0);
    }
  }, [openReader]);

  const navigate = (section: Section) => {
    setActiveSection(section);
    setOpenReader(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: { key: Section; label: string }[] = [
    { key: "home", label: "Главная" },
    { key: "stories", label: "Рассказы" },
    { key: "books", label: "Книги" },
    { key: "about", label: "Обо мне" },
    { key: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate("home")}
            className="font-cormorant text-xl font-light tracking-wider text-gold hover:opacity-80 transition-opacity"
          >
            А. В.
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigate(item.key)}
                className={`nav-link ${activeSection === item.key ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-muted-foreground hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigate(item.key)}
                className={`w-full px-6 py-3 text-left font-ibm text-sm tracking-widest uppercase transition-colors ${
                  activeSection === item.key
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Reader Overlay */}
      {openReader && (
        <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
            <div>
              <p className="font-ibm text-xs tracking-widest uppercase text-muted-foreground mb-0.5">
                {openReader.genre}
              </p>
              <h2 className="font-cormorant text-xl font-light text-foreground">
                {openReader.title}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 border border-border rounded px-3 py-1.5">
                <button
                  onClick={() => setFontSize((s) => Math.max(14, s - 1))}
                  className="font-ibm text-xs text-muted-foreground hover:text-gold transition-colors w-4 text-center"
                >
                  A
                </button>
                <span className="font-ibm text-xs text-muted-foreground w-6 text-center">
                  {fontSize}
                </span>
                <button
                  onClick={() => setFontSize((s) => Math.min(26, s + 1))}
                  className="font-ibm text-base text-muted-foreground hover:text-gold transition-colors w-4 text-center"
                >
                  A
                </button>
              </div>

              <button
                onClick={() => toggleBookmark(openReader.id)}
                className={`transition-colors ${
                  bookmarks.includes(openReader.id)
                    ? "text-gold"
                    : "text-muted-foreground hover:text-gold"
                }`}
              >
                <Icon
                  name={bookmarks.includes(openReader.id) ? "Bookmark" : "BookmarkPlus"}
                  size={18}
                />
              </button>

              <button
                onClick={() => setOpenReader(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
          </div>

          <div className="h-0.5 bg-muted shrink-0">
            <div
              className="h-full transition-all duration-100"
              style={{
                width: `${scrollPos}%`,
                background: "linear-gradient(90deg, hsl(35 65% 55%), hsl(35 55% 45%))",
              }}
            />
          </div>

          <div
            ref={readerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-6 py-12 scrollbar-thin"
            style={{ "--reader-font-size": `${fontSize}px` } as React.CSSProperties}
          >
            <div className="reader-container">
              {openReader.text.split("\n\n").map((para, i) => (
                <p key={i} className={i === 0 ? "drop-cap" : ""}>
                  {para}
                </p>
              ))}
            </div>

            <div className="divider-ornament max-w-lg mx-auto mt-16 mb-8">
              <span className="font-cormorant text-gold text-lg">✦</span>
            </div>

            <p className="font-cormorant italic text-muted-foreground text-center text-lg mb-16">
              Конец
            </p>
          </div>

          <div className="flex items-center justify-between px-6 py-3 border-t border-border shrink-0">
            <span className="font-ibm text-xs text-muted-foreground">
              {openReader.readTime} чтения
            </span>
            <span className="font-ibm text-xs text-muted-foreground">
              {scrollPos}%
            </span>
          </div>
        </div>
      )}

      <main className="pt-16">
        {/* HOME */}
        {activeSection === "home" && (
          <div>
            <section className="min-h-[90vh] flex items-center relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BOOK_IMAGE})` }}
              >
                <div className="absolute inset-0 bg-background/85" />
              </div>

              <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

              <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="animate-fade-up delay-100 font-ibm text-xs tracking-widest uppercase text-gold mb-8">
                    Авторский сайт
                  </p>
                  <h1 className="animate-fade-up delay-200 font-cormorant font-light text-6xl md:text-7xl lg:text-8xl leading-none text-foreground mb-6">
                    Алексей
                    <br />
                    <span className="italic" style={{ color: "hsl(35 65% 55%)" }}>Варгин</span>
                  </h1>
                  <p className="animate-fade-up delay-300 font-cormorant italic text-xl text-muted-foreground mb-10 leading-relaxed">
                    Писатель. Магический реализм, городская проза, абсурдизм.
                    <br />
                    Истории о том, что происходит между словами.
                  </p>
                  <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
                    <button
                      onClick={() => navigate("stories")}
                      className="font-ibm text-sm tracking-wider uppercase px-8 py-3 hover:opacity-90 transition-opacity"
                      style={{ background: "hsl(35 65% 55%)", color: "hsl(24 15% 7%)" }}
                    >
                      Читать рассказы
                    </button>
                    <button
                      onClick={() => navigate("books")}
                      className="font-ibm text-sm tracking-wider uppercase px-8 py-3 border border-border text-foreground hover:border-gold hover:text-gold transition-colors"
                    >
                      Все книги
                    </button>
                  </div>
                </div>

                <div className="animate-fade-up delay-500 hidden lg:flex flex-col gap-8 pl-12 border-l border-border">
                  {[
                    { num: "3", label: "книги" },
                    { num: "47", label: "рассказов" },
                    { num: "12", label: "лет в литературе" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-cormorant text-5xl font-light leading-none" style={{ color: "hsl(35 65% 55%)" }}>
                        {stat.num}
                      </div>
                      <div className="font-ibm text-xs tracking-widest uppercase text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-24">
              <div className="divider-ornament mb-16">
                <span className="font-cormorant text-2xl font-light">
                  Последние рассказы
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {STORIES.map((story, i) => (
                  <div
                    key={story.id}
                    className={`card-literary p-8 cursor-pointer animate-fade-up delay-${(i + 2) * 100}`}
                    onClick={() => setOpenReader(story)}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-ibm text-xs tracking-widest uppercase text-muted-foreground">
                        {story.genre}
                      </span>
                      <span className="font-ibm text-xs text-muted-foreground">
                        {story.year}
                      </span>
                    </div>
                    <h3 className="font-cormorant text-2xl font-light text-foreground mb-3">
                      {story.title}
                    </h3>
                    <p className="font-cormorant italic text-muted-foreground leading-relaxed mb-6 text-sm">
                      {story.preview}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-ibm text-xs" style={{ color: "hsl(35 65% 55%)" }}>
                        {story.readTime}
                      </span>
                      {bookmarks.includes(story.id) && (
                        <Icon name="Bookmark" size={14} className="text-gold" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button
                  onClick={() => navigate("stories")}
                  className="font-ibm text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1"
                >
                  Все рассказы →
                </button>
              </div>
            </section>

            <section className="py-24 border-y border-border bg-card/40">
              <div className="max-w-3xl mx-auto px-6 text-center">
                <div className="font-cormorant text-5xl leading-none mb-4" style={{ color: "hsl(35 65% 55% / 0.3)" }}>
                  «
                </div>
                <blockquote className="font-cormorant italic text-2xl md:text-3xl font-light text-foreground leading-relaxed">
                  Писать — значит выбирать, какую тишину нарушить.
                </blockquote>
                <div className="font-cormorant text-5xl leading-none mt-2" style={{ color: "hsl(35 65% 55% / 0.3)" }}>
                  »
                </div>
              </div>
            </section>
          </div>
        )}

        {/* STORIES */}
        {activeSection === "stories" && (
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-16">
              <p className="font-ibm text-xs tracking-widest uppercase mb-4 animate-fade-up delay-100" style={{ color: "hsl(35 65% 55%)" }}>
                Архив
              </p>
              <h1 className="font-cormorant text-5xl md:text-6xl font-light animate-fade-up delay-200">
                Рассказы
              </h1>
              <p className="font-cormorant italic text-muted-foreground text-xl mt-4 animate-fade-up delay-300">
                Короткая проза — 47 текстов
              </p>
            </div>

            <div className="space-y-4 animate-fade-up delay-300">
              {STORIES.map((story, i) => (
                <div
                  key={story.id}
                  className="card-literary cursor-pointer group"
                  onClick={() => setOpenReader(story)}
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="font-cormorant text-4xl font-light w-12 shrink-0" style={{ color: "hsl(35 65% 55% / 0.2)" }}>
                      0{i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <h3 className="font-cormorant text-2xl font-light text-foreground group-hover:text-gold transition-colors">
                          {story.title}
                        </h3>
                        <span className="font-ibm text-xs tracking-widest uppercase text-muted-foreground">
                          {story.genre}
                        </span>
                      </div>
                      <p className="font-cormorant italic text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {story.preview}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-ibm text-xs text-muted-foreground">
                        {story.year}
                      </span>
                      <span className="font-ibm text-xs" style={{ color: "hsl(35 65% 55%)" }}>
                        {story.readTime}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(story.id);
                        }}
                        className={`transition-colors ${
                          bookmarks.includes(story.id)
                            ? "text-gold"
                            : "text-muted-foreground hover:text-gold"
                        }`}
                      >
                        <Icon
                          name={bookmarks.includes(story.id) ? "Bookmark" : "BookmarkPlus"}
                          size={16}
                        />
                      </button>
                      <Icon
                        name="ArrowRight"
                        size={16}
                        className="text-muted-foreground group-hover:text-gold transition-colors"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {bookmarks.length > 0 && (
              <div className="mt-16 p-6 border rounded" style={{ borderColor: "hsl(35 65% 55% / 0.3)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Bookmark" size={16} style={{ color: "hsl(35 65% 55%)" }} />
                  <span className="font-ibm text-xs tracking-widest uppercase" style={{ color: "hsl(35 65% 55%)" }}>
                    Закладки
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {STORIES.filter((s) => bookmarks.includes(s.id)).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setOpenReader(s)}
                      className="font-ibm text-xs tracking-wide px-3 py-1.5 border border-border hover:border-gold hover:text-gold text-muted-foreground transition-colors"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* BOOKS */}
        {activeSection === "books" && (
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-16">
              <p className="font-ibm text-xs tracking-widest uppercase mb-4 animate-fade-up delay-100" style={{ color: "hsl(35 65% 55%)" }}>
                Библиография
              </p>
              <h1 className="font-cormorant text-5xl md:text-6xl font-light animate-fade-up delay-200">
                Книги
              </h1>
            </div>

            <div className="space-y-8">
              {BOOKS.map((book, i) => (
                <div
                  key={book.id}
                  className={`card-literary animate-fade-up delay-${(i + 2) * 100}`}
                >
                  <div className="flex flex-col md:flex-row gap-8 p-8">
                    <div
                      className="w-full md:w-40 h-48 md:h-56 bg-cover bg-center shrink-0 relative overflow-hidden"
                      style={{ backgroundImage: `url(${book.cover})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 font-ibm text-xs tracking-widest uppercase text-foreground/80">
                        {book.year}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-ibm text-xs tracking-widest uppercase text-muted-foreground">
                          {book.genre}
                        </span>
                        <span className="text-muted-foreground">·</span>
                        <span className="font-ibm text-xs text-muted-foreground">
                          {book.pages} стр.
                        </span>
                      </div>
                      <h3 className="font-cormorant text-3xl font-light text-foreground mb-4">
                        {book.title}
                      </h3>
                      <p className="font-cormorant italic text-muted-foreground leading-relaxed text-lg mb-6">
                        {book.description}
                      </p>
                      <button
                        className="self-start font-ibm text-xs tracking-widest uppercase px-6 py-2.5 border transition-all hover:opacity-90"
                        style={{ borderColor: "hsl(35 65% 55%)", color: "hsl(35 65% 55%)" }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLButtonElement).style.background = "hsl(35 65% 55%)";
                          (e.currentTarget as HTMLButtonElement).style.color = "hsl(24 15% 7%)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                          (e.currentTarget as HTMLButtonElement).style.color = "hsl(35 65% 55%)";
                        }}
                      >
                        Купить книгу
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABOUT */}
        {activeSection === "about" && (
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-ibm text-xs tracking-widest uppercase mb-4 animate-fade-up delay-100" style={{ color: "hsl(35 65% 55%)" }}>
                  Биография
                </p>
                <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-10 animate-fade-up delay-200">
                  Обо мне
                </h1>

                <div
                  className="w-full aspect-[4/5] bg-cover bg-center mb-10 animate-fade-up delay-200 lg:hidden"
                  style={{ backgroundImage: `url(${AUTHOR_IMAGE})` }}
                />

                <div className="space-y-6 animate-fade-up delay-300">
                  {[
                    "Алексей Варгин — прозаик, лауреат нескольких литературных премий. Родился в 1981 году в Ленинграде. Окончил филологический факультет Санкт-Петербургского университета.",
                    "Дебютный сборник «Инвентарь потерь» вышел в 2019 году и был удостоен премии «Новая словесность». С тех пор опубликовал ещё две книги и несколько десятков рассказов в литературных журналах.",
                    "Работает на пересечении магического реализма, городской прозы и абсурдизма. Его тексты переведены на шесть языков. Живёт и работает в Санкт-Петербурге.",
                  ].map((para, i) => (
                    <p key={i} className="font-cormorant text-lg text-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-up delay-400">
                  {[
                    { icon: "Award", text: "Премия «Новая словесность» 2019" },
                    { icon: "Globe", text: "Переведён на 6 языков" },
                    { icon: "BookOpen", text: "Публикации в «Новом мире», «Октябре»" },
                  ].map((item) => (
                    <div key={item.text} className="text-center">
                      <Icon
                        name={item.icon as "Award"}
                        size={20}
                        className="mx-auto mb-2"
                        style={{ color: "hsl(35 65% 55%)" }}
                      />
                      <p className="font-ibm text-xs text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block animate-fade-up delay-300 sticky top-24">
                <div
                  className="w-full aspect-[3/4] bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${AUTHOR_IMAGE})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="h-px mb-4" style={{ background: "hsl(35 65% 55% / 0.4)" }} />
                    <p className="font-cormorant italic text-sm" style={{ color: "hsl(35 35% 85% / 0.8)" }}>
                      «Каждая история — это попытка остановить время на одном мгновении»
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACTS */}
        {activeSection === "contacts" && (
          <div className="max-w-3xl mx-auto px-6 py-16">
            <p className="font-ibm text-xs tracking-widest uppercase mb-4 animate-fade-up delay-100" style={{ color: "hsl(35 65% 55%)" }}>
              Связаться
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-4 animate-fade-up delay-200">
              Контакты
            </h1>
            <p className="font-cormorant italic text-muted-foreground text-xl mb-16 animate-fade-up delay-300">
              Для издательств, прессы, читателей
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-16 animate-fade-up delay-300">
              {[
                { icon: "Mail", label: "Почта", value: "vargin@mail.ru" },
                { icon: "Send", label: "Telegram", value: "@vargin_writes" },
                { icon: "BookOpen", label: "Литрес", value: "vargin.author" },
              ].map((contact) => (
                <div key={contact.label} className="card-literary p-6 text-center">
                  <Icon
                    name={contact.icon as "Mail"}
                    size={20}
                    className="mx-auto mb-3"
                    style={{ color: "hsl(35 65% 55%)" }}
                  />
                  <p className="font-ibm text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    {contact.label}
                  </p>
                  <p className="font-cormorant text-sm text-foreground">
                    {contact.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="card-literary p-8 md:p-10 animate-fade-up delay-400">
              <h3 className="font-cormorant text-2xl font-light mb-6">
                Написать сообщение
              </h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-ibm text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full bg-muted border border-border px-4 py-3 font-cormorant text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="font-ibm text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-muted border border-border px-4 py-3 font-cormorant text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-ibm text-xs tracking-widest uppercase text-muted-foreground block mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-muted border border-border px-4 py-3 font-cormorant text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>
                <button
                  className="font-ibm text-sm tracking-wider uppercase px-8 py-3 hover:opacity-90 transition-opacity"
                  style={{ background: "hsl(35 65% 55%)", color: "hsl(24 15% 7%)" }}
                >
                  Отправить
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="border-t border-border mt-16 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-cormorant italic text-muted-foreground text-sm">
              © 2024 Алексей Варгин
            </span>
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  className="font-ibm text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
