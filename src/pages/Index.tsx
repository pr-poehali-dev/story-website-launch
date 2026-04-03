import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const AUTHOR_IMAGE = "https://cdn.poehali.dev/projects/9d087903-6158-457c-933f-d15b5d516d1d/files/b9d38b86-7db7-48f3-9ab8-802d1641b956.jpg";
const BOOK_IMAGE = "https://cdn.poehali.dev/projects/9d087903-6158-457c-933f-d15b5d516d1d/files/d57bbfef-90a5-47aa-aa08-53a85b9ff0af.jpg";

const STORIES = [
  {
    id: 1,
    title: "Железная пятёрка",
    genre: "Жизненная проза",
    year: "2024",
    preview: "История про нашу футбольную команду. В карьере, где стоит мини-футбольная площадка, всегда кипела жизнь...",
    readTime: "20 мин",
    text: `Сегодня я хочу рассказать вам одну историю, про нашу футбольную команду. В карьере, где стоит мини-футбольная площадка, всегда кипела жизнь, там всегда собиралась наша футбольная команда. Место где мы познакомились, где проводили своё свободное время от школы и в каникулы после работы. Мы знали, что если мы не будем тренироваться, то будем проигрывать даже самым слабым командам нашего маленького посёлка. Поэтому мы тренировались с самого утра и до самого вечера. Тренировали удары, защиту, поэтому после этих долгих и упорных тренировок мы стали самой сильной командой среди всех дворовых команд, нас никто не мог победить, пока не образовалась новая команда из игроков, которые играли в юношеской лиге нашего района. После одного поражения от них, мы тренировались ещё больше. И только совместными усилиями смогли их победить.

Начало карьеры нашей команды

Наша команда состояла из 5 человек, которые жили в соседних домах. Мы познакомились благодаря нашему любимому месту в посёлке — футбольному полю в карьере. Мы были совсем маленькие, когда познакомились. Нам было по 10–11 лет. Команда наша состояла только из пацанов, которые увлекались футболом. Все мы болели за разные команды, но только одно нас объединяло — любовь к футболу.

А вот и наша команда: Артём — мой одноклассник и хороший полузащитник, Никита — первый нападающий и мой лучший друг, Рома — вратарь, который был немного полноват, но со временем всё поменялось, он похудел и это ему очень идёт, Ваня — центральный и единственный защитник нашей команды, и я — второй нападающий, который мог играть на любой позиции, в общем универсальный игрок нашей команды.

Мы много тренировались. Наш день проходил так: сначала в 8 мы встречались и бегали, тем самым тренируя дыхалку и выносливость, потому что приходилось очень много бегать во время матча. Далее мы тренировали удары по воротам, тем самым тренируя точность. После ударов по воротам мы изучали новые комбинации игры, дальше тренировали выходы один на один с вратарём. Изучали новые финты и другие приёмы с мячом, тренировали передачи, чтобы каждый пас доходил до партнёра. После такой тренировки у нас оставалось ещё примерно 2–3 часа на отдых и подготовку к матчу.

Дальше мы выбирали единый цвет формы с полевыми игроками, а вратарь чаще всего одевал чёрную футболку и синие шорты. Собирались за 30 минут до начала матча на разминку, чтобы не повредить мышцы при игре. Обсуждали какой схемой будем играть мы, и какой тактикой сегодня будет играть наш соперник — и мы подбирали тактику игры, противоположную им, чтобы создавать больше моментов и пытаться выиграть за счёт этого.

Первые матчи

Первый такой матч мы сыграли через полгода после создания нашей команды «Железная пятёрка». Что-то вроде такого логотипа у нас было на футболках и шортах, но к сожалению, сейчас формы с собой у меня нет.

Мы играли с почти самой сильной командой нашего посёлка. Мы играли почти на равных, каждый тайм у нас длился 20 минут, таких тайма у нас было 2, иногда приходилось играть даже 3, чтобы не проиграть. Перерыв у нас был 5–10 минут, там мы обсуждали кто как играет и что нужно сделать чтобы победить.

В первом тайме у нас был счёт 1:1, поэтому после перерыва мы собрались и всеми силами начали их атаковать. В один момент мне ударили по ноге и тем самым я заработал штрафной удар, примерно на середине поля. Передо мной выстроилась стенка из 3 человек, вратарь у той команды стоял неподвижно и верил, что со всем справится стенка и ему не придется ловить мяч. Поэтому я взял мяч, поставил его за 5 метров от стенки, сделал 3 шага назад и один влево. После свистка, который разрешил мне произвести удар, я как следует разбежался. Вижу, что один человек из стенки начинает убегать вправо, закрывая моего друга. Поэтому пришлось бить по воротам. Вратарь быстро передвинулся в середину ворот, чтобы словить мяч, но удар был настолько сильным, что мяч взмыл над стенкой как ракета и залетел в левый угол ворот соперника. Тем самым я вывел команду вперёд, счёт стал 2:1.

И только теперь соперник занервничал и начал атаковать наши ворота. Благодаря нашему вратарю, который уверенно отбивал мячи, мы держались. Но когда началось дополнительное время к тайму мы пропускаем сильный удар и счёт становится 2:2. Поэтому мы перешли в добавленное время, где мы боролись за каждый мяч. Соперник заработал штрафной и после свистка начинает разбег, я вижу и предугадываю ситуацию, начинаю бежать на игрока, который стоял на дальней штанге, отбираю у него мяч и начинаю бежать к воротам соперника. Вижу, что вратарь немного дальше вышел и я именно тогда начинаю делать замах, чтобы ударить по воротам. Делаю удар и мяч попадает в штангу и отлетает обратно ко мне. Вижу, что вратарь смотрит не на меня, потому что не развернулся ещё, поэтому я делаю второй удар, который каким-то образом попадает от перекладины в правый угол ворот. И я снова вывожу свою команду вперёд.

Только из-за этого мы побеждаем в этом не лёгком матче против хорошего соперника, который дал нам понять, что мы очень сильная команда. Дальше у нас всё происходило как обычно, утром и днём тренировка, а вечером игра. Мы выигрывали всех, кого можно, мы никогда никому не поддавались, мы всегда играли в полную силу. Иногда тренировки переносились из-за погоды, но матчи мы никогда не переносили — играли в любую погоду, хоть в холодный дождь, хоть в палящее солнце.

Первый турнир для нашей команды

Один раз мы устроили турнир. Было 15 команд, которые играли не хуже нашего. Каждый день мы играли по 2 матча: первый в 2 часа, второй в 6 часов — такой перерыв был нужен, чтобы другие команды тоже смогли играть. Один день у нас был выходной, чтобы набраться сил, отдохнуть и выспаться.

Мы одерживали победы со счётом 2:0, 3:1 — всегда забивали на 2 или даже 3 гола больше чем соперники. Мы всегда боролись за мяч, никогда просто так его не отдавали. Последним соперником в нашем турнире стала команда, которая, как и мы выиграла все матчи, забивала по 5, а то и 6 мячей за матч. Но главной их слабостью было то, что у них была плохая оборона, а вратарь не доставал даже до перекладины.

Матч начался, и сразу в начале мне делают подножку, я зарабатываю пенальти. Вижу, что вратарь нервничает, поэтому я показываю ему, в какой угол собираюсь пробить. Делаю разбег и бью по воротам, но вратарь начинает прыгать в другую сторону, и из-за этого я забиваю первый гол. Подхожу к вратарю после первого тайма и спрашиваю: «Почему ты прыгнул в другую сторону?». Он мне отвечает: «Я думал, что ты хочешь меня обмануть и пробить в противоположный угол».

После этого наша команда начинает сильно уходить в оборону, а я остаюсь в центральном круге. Когда защитник отобрал мяч, он своей точной передачей делает мне пас, мяч попадает прямо мне в ногу, и я выбегаю один на один с вратарём как на тренировке, обвожу вратаря, но вижу, что на меня несётся защитник, который хочет отобрать мяч — я останавливаюсь и выбиваю мяч в аут, тем самым не забивая гол. После этого момента соперники забивают 2 быстрых гола.

И только тогда я понял, что нужно включать свой прайм на сильные удары и скорость. Мы разводим мяч, я начинаю забегать, защитник делает навес, я принимаю мяч и наношу удар по воротам. Вратарь удивился, каким образом мяч после попадания по воротам отскакивает на нашу половину поля, но судья увидел, что мяч пересёк линию ворот, и засчитал гол — счёт становится 2:2.

Остается 5 секунд до конца матча, мяч у меня, а я нахожусь на своей половине поля, и все остальные игроки на другой. Поэтому я не нашёл другого выбора как ударить по воротам — ведь для меня это не составляло никакой сложности. Я делаю удар, мяч начинает вилять из стороны в сторону из-за такой силы удара и залетает в ворота. Счёт становится 3:2 в нашу пользу, тем самым мы выигрываем турнир, который научил нас чему-то новому.

Мой первый прайм

Свой первый прайм я получил как раз в последнем матче на турнире. После этого турнира у меня появилось прозвище «Роналдо младший». Я, наверное, знаю почему они меня называют именно так — наверное, из-за сильных ударов и не только реакции, но и скорости.

Я много времени проводил на футбольном поле, именно это место придаёт мне спокойствие. Я провёл на нём всё своё детство и юность, а сейчас, когда уехал учиться, я хочу всегда на него вернуться, встретиться с друзьями, с которыми играли в детстве. Сейчас мне очень тяжело играть в футбол, после последней игры у меня травмировано колено.

Про футбол я могу рассказать многое. Моя любимая команда «Зенит», которая сейчас находится в чемпионской гонке за первое место в Российской Премьер Лиге. В этой команде играет очень много игроков не только из России, но и из Бразилии, Аргентины, Словении, Колумбии. Но все эти игроки придают мне силы, и только из-за них я пытаюсь добиться успехов в своей футбольной карьере. Меня даже поздравлял с днём рождения вратарь Зенита Евгений Латышонок.

Подводя итоги, я могу уверенно сказать, что наша дворовая команда была самой лучшей, только с ней у меня ассоциируется слово «команда».

Мой последний матч в своей футбольной карьере

Хочу рассказать вам про команду, которая состоит из хоккеистов, которые играют в футбол. Совсем недавно к нам приехала хоккейная команда из Вельска. Как я и сказал, у нас в посёлке появилась новая футбольная команда, состоящая только из хоккеистов. Они на моё удивление играют в футбол довольно неплохо — это 16-я команда в нашей дворовой лиге.

Когда мы пришли на очередную тренировку, мы увидели новые незнакомые лица — это были хоккеисты, мы поняли это когда увидели футболки с их логотипом. Мы предложили им сыграть 5 на 5 в футбол, они согласились. Договорились сыграть в 6 часов вечера. Опубликовали объявление, пришло около 40 человек посмотреть этот легендарный матч. Матч проходил 12 августа 2025 года на поле в карьере. Я не знал, что это будет мой последний матч в моей карьере, даже не задумывался об этом.

Матч начался в 18:05 после свистка судьи. Игра шла уверенно, было много моментов, к концу первого тайма счёт был 4:0 в нашу пользу. Меня похвалили мои любимые болельщики, друг сказал, что нужно играть чуть-чуть пожёстче, чтобы они не расслаблялись. Я дал установку своим сокомандникам, похвалил их за хороший первый тайм.

Примерно на 10-й минуте второго тайма мне хотят сделать подкат, но я вовремя успел среагировать, подпрыгнул и поднял мяч. Оставалось 2 защитника передо мной, обвожу первого, потом убираю второго ложным замахом и наношу удар по воротам — мяч залетает между ног вратарю. Болельщики сразу засвистели, выбежали на поле, а я посвятил этот гол именно им.

Под громкие аплодисменты мы продолжаем игру. Вижу, что защитник не справляется и бегу помогать ему. От него начинает убегать нападающий противоположной команды, я начинаю делать подкат, всё получилось, но вдруг я задеваю сетку, и на меня падает тот нападающий. Это было настолько больно, что меня поднимали двое моих игроков, они очень переживали за меня — замен у нашей команды не было.

Меня посадили на скамейку к болельщикам, дали холодной воды. Ко мне прибежал врач, который тоже смотрел наш матч, он похвалил меня и спросил, что у меня болит. Я сказал, что очень сильно болит колено. Он помазал мне мазью колено и спросил, пойду ли я дальше играть. Я сказал, что пойду.

На последней минуте матча счёт был 7:1. Я знал, что мы выиграем, поэтому, пока мяч был у меня под правой ногой, я сделал замах и ударил по мячу внешней стороной стопы. Мяч по такой красивой дуге полетел в ворота, вратарь подумал, что он уйдёт мимо, но только я знал, что мяч залетит в ворота — ведь это был мой фирменный удар, который я тренировал очень долго. В итоге мяч, попав в штангу, попадает во вторую штангу и залетает в ворота. Под громкие аплодисменты мы заканчиваем матч со счётом 8:1.

Я подошёл к тому игроку, который сказал, что я плохо играю, и спросил: «Ну как тебе гол?». Он мне ответил, что гол получился офигенный, и забрал свои слова обратно. Я поблагодарил соперников за игру, поблагодарил моих любимых болельщиков за такую уютную атмосферу, и мы с командой разошлись. Больше я в футбол не играл.

Тренировка малышей

После того матча я не играл в футбол совсем. Оказалось, что у меня из колена выпал осколок, который потом достали. Это просто не описать словами, какую боль я чувствовал.

После этого я начал заниматься с детьми, которых мне приводили мои друзья и болельщики. Мы бегали, били по воротам, отрабатывали передачи, тренировали всё, что можно — в общем как на нашей обычной тренировке. Я был их личным тренером, но только летом. Было нас человек 15: 7 человек в основе, 8 на замене. Платили мне по 200 рублей за тренировку. Тренировок у нас было 3 в неделю: в понедельник, среду и пятницу.

Я им сказал, что тренироваться нужно в полную силу, отлынивать нельзя — а то у них не будет никакого результата. Ещё сказал, что нужно правильно питаться, чтобы мышцы росли.

Мы много тренировались, я видел, как они старались. Поэтому я сказал: если сегодня тренировка пройдёт отлично, если вы все будете стараться, то на следующей тренировке будет сюрприз. Они согласились и начали тренироваться ещё лучше, чем на прошлых тренировках. Успокаивает как-то, когда дети стараются делать что-то в первый раз.

Наступила следующая тренировка. Я со своей командой договорился сыграть матч, но только не в полную силу, чтобы дети тоже смогли порадоваться. Они играли слажено, как я их и учил на тренировке. После первого тайма я дал им установку на второй тайм, показал на тактической доске с фишками и маркером. Они все поняли. Я поменял защитника и нападающего в начале тайма, а потом и остальных, чтобы все дети смогли поиграть. Матч закончился со счётом 2:1 в пользу детей — вы бы видели, как они искренне радовались.

Игра проходила 4 человека против 7, только поэтому было не честно. Я написал каждому из родителей и сказал, что дети сегодня очень хорошо сыграли, никого из детей выделять не стал, чтобы не обидеть других.

После последней тренировки я им сказал, что в этом году тренировок у нас больше не будет — будете тренироваться самостоятельно, чтобы не потерять свою форму. Каждому из родителей сказал, что уезжаю дальше учиться. Они, конечно, немного расстроились — это было видно по их глазам.

Перед отъездом я сказал родителям, чтобы они сделали дневник тренировок, чтобы я видел, какие упражнения делают дети, насколько возросла их сила, скорость, реакция. Ну а этим летом мы и проверим, кто как занимался. Ведь кто занимался хорошо на протяжении больше полугода, те будут быстрее, более ловкими, и сила удара у тех будет намного сильнее, чем была.`,
  },
];



const BOOKS = [
  {
    id: 1,
    title: "Книга 1",
    year: "—",
    pages: 0,
    description: "Здесь появится описание вашей книги. Пришлите название, год и описание — добавлю.",
    genre: "Жизненная проза",
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
            Г. Ч.
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
                    Герман
                    <br />
                    <span className="italic" style={{ color: "hsl(35 65% 55%)" }}>Чесноков</span>
                  </h1>
                  <p className="animate-fade-up delay-300 font-cormorant italic text-xl text-muted-foreground mb-10 leading-relaxed">
                    Молодой писатель из Архангельской области.
                    <br />
                    Жизненные истории, в которых узнаёшь себя.
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
                    { num: "1", label: "рассказ" },
                    { num: "2024", label: "год начала" },
                    { num: "∞", label: "идей впереди" },
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
                  Пишу о жизни — такой, какая она есть на самом деле.
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
                Жизненная проза
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
                    "Герман Чесноков — молодой писатель из посёлка Октябрьский Архангельской области. Пишет жизненные истории — о простых людях, настоящих чувствах и моментах, которые остаются с нами навсегда.",
                    "Начал писать в 2024 году. Первый рассказ — «Железная пятёрка». В прозе ищет то, что объединяет людей: узнаваемые ситуации, честные эмоции, живые диалоги.",
                    "Верит, что хорошая история — это та, в которой читатель видит себя.",
                  ].map((para, i) => (
                    <p key={i} className="font-cormorant text-lg text-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-up delay-400">
                  {[
                    { icon: "PenLine", text: "Дебют в 2024 году" },
                    { icon: "MapPin", text: "Архангельская область" },
                    { icon: "BookOpen", text: "Жизненная проза" },
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
                      «Пишу о жизни — такой, какая она есть на самом деле»
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
                { icon: "Mail", label: "Почта", value: "gcesnokov549@gmail.com" },
                { icon: "Send", label: "Telegram", value: "Скоро" },
                { icon: "BookOpen", label: "Рассказы", value: "На этом сайте" },
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
              © 2024 Герман Чесноков
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