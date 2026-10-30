import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Shield, Hexagon, Send, LockKeyhole, GraduationCap, TrendingUp, BriefcaseBusiness, Scale, ChartNoAxesCombined, Layers, Network, Check, Clock3, Fingerprint, BookOpen, Menu, X, Code2, Building2, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import networkImage from '@/assets/crypto-network.jpg';
import networkVideo from '@/assets/crypto-network-loop.mp4.asset.json';
import { IndividualCourse } from '@/components/individual-course';
import expertPortrait from '@/assets/expert-portrait.jpg.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Layer Null — консультации по криптовалюте, DeFi и безопасности' },
    { name: 'description', content: 'Индивидуальный курс по криптовалюте и персональное сопровождение: легальная работа с криптовалютой, инвестиции, DeFi и кибербезопасность. Запись в Telegram @amelkov_by.' },
    { property: 'og:title', content: 'Layer Null // Consulting — криптовалюта без лишних рисков' },
    { property: 'og:description', content: 'От первых шагов до DeFi: персональные консультации, техническая экспертиза и безопасность цифровых активов.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Index,
});
const telegram = 'https://t.me/amelkov_by';
const email = 'amelkov.center@gmail.com';
const nav = [{ label: 'Кому полезно', id: 'for-whom' }, { label: 'Направления', id: 'services' }, { label: 'Курс', id: 'course' }, { label: 'Опыт', id: 'expert' }, { label: 'FAQ', id: 'faq' }];
const audiences = [
  { icon: GraduationCap, title: 'Новичкам', text: 'Разобраться в криптовалюте с нуля. Научиться покупать, продавать и хранить активы, избегая типичных ошибок.' },
  { icon: TrendingUp, title: 'Инвесторам', text: 'Сформировать осознанный криптопортфель, освоить долгосрочное инвестирование и инструменты DeFi.' },
  { icon: BriefcaseBusiness, title: 'Предпринимателям', text: 'Работать с официальными площадками и выводить средства в фиат с соблюдением правовых требований.' },
  { icon: ShieldCheck, title: 'Тем, кто ценит безопасность', text: 'Защитить активы от фишинга, скам-проектов, поддельных сервисов и блокировок аккаунтов.' },
];
const services = [
 { icon: Scale, title: 'Легальность и законодательство', items: ['Правовые аспекты владения криптовалютой и совершения операций.', 'Соблюдение AML/KYC-процедур на регулируемых биржах.', 'Ввод и вывод средств с учётом банковских и налоговых норм.'] },
 { icon: ChartNoAxesCombined, title: 'Инвестиции в криптовалюту', items: ['Подбор Bitcoin, Ethereum и альткоинов с учётом вашего риск-профиля.', 'Стратегии DCA, фиксация прибыли и ребалансировка портфеля.', 'Фундаментальный анализ проектов и защита от скама.'] },
 { icon: Layers, title: 'Работа с криптобиржами', items: ['Выбор надёжной площадки, регистрация и защита аккаунта.', 'Ордера, комиссии и работа с торговыми терминалами.', 'Настройка 2FA, аппаратных ключей и антифишинговых кодов.'] },
 { icon: Network, title: 'Технологии DeFi и Web3', items: ['Горячие и холодные кошельки: MetaMask, Ledger, Trezor.', 'Стейкинг, лендинг, пулы ликвидности и мосты между сетями.', 'Устройство смарт-контрактов и риски децентрализованных финансов.'] },
 { icon: Shield, title: 'Кибербезопасность цифровых активов', items: ['Аудит защиты устройств, паролей и хранения seed-фраз.', 'Распознавание фишинга, поддельных сайтов и опасных разрешений.', 'Проверка транзакций и смарт-контрактов перед отправкой средств.'] },
];
const steps = [
 ['Первичный контакт', 'Пишете в Telegram и коротко описываете вашу задачу.'],
 ['Предварительный разбор', 'Созвон или чат на 10–15 минут: определяем цели и формат.'],
 ['Подготовка', 'Получаете базовый чек-лист безопасности перед сессией.'],
 ['Практическая сессия', 'Видеосвязь и демонстрация экрана. Все действия выполняете вы.'],
 ['Поддержка', '7 дней ответов на вопросы и сопровождения в чате после встречи.'],
];
const formats = [
 { title: 'Разовая консультация', time: '1 час', text: 'Решение конкретной задачи: вывод средств, настройка кошелька, аудит безопасности или анализ портфеля.' },
 { title: 'Обучающее сопровождение', time: '1–2 недели', text: 'Пошаговая практика от первой покупки до DeFi-инструментов под моим личным контролем.', featured: true },
 { title: 'Инвестиционная стратегия', time: 'Индивидуальный формат', text: 'План инвестирования и подбор инфраструктуры под ваши цели, горизонт планирования и отношение к риску.' },
];
const advantages = [
 { icon: Code2, title: 'Техническая экспертиза', text: 'Понимание технологий и механизмов блокчейна, а не виртуальные обещания.' },
 { icon: Scale, title: 'Строгая легальность', text: 'Рекомендации с учётом действующего законодательства и AML-требований.' },
 { icon: ShieldCheck, title: 'Безопасность прежде всего', text: 'Фокус на сохранении капитала и защите от киберугроз.' },
 { icon: Fingerprint, title: 'Конфиденциальность', text: 'Приватность ваших данных и индивидуальный формат общения.' },
];
const experience = [
 { icon: GraduationCap, title: 'Профильное образование', text: 'Выпускник БНТУ по специальности «Ценные бумаги, криптовалюты, деривативы».' },
 { icon: Building2, title: 'IT-компании и стартапы', text: 'Опыт работы в BelHard, Innowise, Spark VS, Zborka и других технологических компаниях.' },
 { icon: Landmark, title: 'Отраслевая экспертиза', text: 'Экс-директор Ассоциации распределённых реестров Республики Беларусь.' },
 { icon: BookOpen, title: 'Автор и преподаватель', text: 'Автор и преподаватель курса о криптовалютах и блокчейн-технологиях в BelHard.Academy.' },
];
const faq = [
 ['Нужно ли передавать доступ к кошелькам и аккаунтам?', 'Категорически нет. Я никогда не прошу и не принимаю пароли, seed-фразы или API-ключи клиентов. Все настройки и транзакции вы делаете сами. Моя задача — обучить вас алгоритму и проверить правильность каждого шага.'],
 ['У меня нет опыта в ИТ и финансах. Я разберусь?', 'Да. Обучение строится простым и понятным языком, без избыточного академического сленга. Мы идём от простого к сложному и повторяем практику столько, сколько потребуется для уверенности.'],
 ['Как вы обеспечиваете легальность процедур?', 'Мы работаем с официальными, верифицированными площадками, соблюдающими AML/KYC-стандарты. Я объясняю, как сохранять историю операций, выписки и чеки для подтверждения происхождения средств перед банками и налоговыми органами. Применимые требования разбираем с учётом вашей ситуации.'],
 ['Чем консультация отличается от видео на YouTube?', 'Вы получаете индивидуальный разбор вашей конкретной ситуации, актуальные инструменты и помощь в предотвращении критических ошибок. В бесплатных материалах информация может быть устаревшей, а реклама и ссылки — небезопасными.'],
];
function Brand() { return <a href="#" className="brand" aria-label="Layer Null — в начало"><Hexagon className="brand-mark" strokeWidth={1.5} /><div><div className="brand-title">LAYER NULL</div><div className="brand-sub">// CONSULTING</div></div></a>; }
function TelegramButton({ children = 'Написать в Telegram', glass = false }: { children?: React.ReactNode; glass?: boolean }) { return <Button asChild variant={glass ? 'glass' : 'cyan'} className="action-button"><a href={telegram} target="_blank" rel="noopener noreferrer"><Send />{children}<ArrowUpRight /></a></Button>; }
function SectionTitle({ number, label, title, text }: { number: string; label: string; title: string; text?: string }) { return <div className="section-top"><div className="eyebrow"><span>{number} /</span>{label}</div><h2 className="section-heading">{title}</h2>{text && <p className="section-intro">{text}</p>}</div>; }
function Index() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [videoFailed, setVideoFailed] = useState(false);
 return <>
 <header className="site-header"><div className="site-container header-inner"><Brand /><nav className="desktop-nav" aria-label="Основная навигация">{nav.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav><Button asChild variant="glass" className="header-cta"><a href="#contact">Записаться <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>{menuOpen && <nav className="mobile-nav" aria-label="Мобильная навигация">{[...nav, { label: 'Записаться', id: 'contact' }].map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>}</header>
 <main>
 <section className="hero"><img className="hero-media" src={networkImage} alt="" width={1920} height={1088} fetchPriority="high" />{!videoFailed && <video className="hero-media" autoPlay muted loop playsInline poster={networkImage} aria-hidden="true" onError={() => setVideoFailed(true)}><source src={networkVideo.url} type="video/mp4" /></video>}<div className="site-container hero-inner"><div className="eyebrow hero-badge"><ShieldCheck size={13} /><span>100% Легально и безопасно</span></div><h1>Layer Null<span className="hero-tagline">Криптовалюта.<br />Знания. Безопасность.</span></h1><p className="hero-desc">От первых шагов до DeFi и инвестиций. Персональное обучение, консультации и сопровождение — с пониманием технологий, соблюдением закона и защитой ваших активов.</p><div className="hero-actions"><Button asChild variant="cyan" className="action-button"><a href="#contact">Записаться на консультацию <ArrowUpRight /></a></Button><TelegramButton glass>Задать вопрос в Telegram</TelegramButton></div><div className="hero-note"><LockKeyhole />Ваши ключи и доступы всегда остаются только у вас</div><div className="hero-trust"><div><ShieldCheck />Безопасность активов</div><div><Scale />Соблюдение законодательства</div><div><GraduationCap />Индивидуальный подход</div></div></div></section>
 <section id="for-whom" className="section"><div className="site-container"><SectionTitle number="01" label="Для кого" title="Кому полезны мои консультации" text="Неважно, на каком вы этапе. Важно — двигаться дальше осознанно." /><div className="audience-grid">{audiences.map(({icon: Icon,title,text}) => <article className="info-card" key={title}><div className="icon-badge"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
 <section id="services" className="section"><div className="site-container"><SectionTitle number="02" label="Экспертиза" title="Ключевые направления и темы" text="Системный подход к криптовалюте: от правовых основ до технических деталей." /><div className="services-grid">{services.map(({icon: Icon,title,items},i) => <article className={`info-card service-card ${i === 4 ? 'service-wide' : ''}`} key={title}><div className="service-header"><div className="icon-badge"><Icon /></div><h3>{title}</h3></div><ul className="service-list">{items.map(item => <li key={item}><Check /><span>{item}</span></li>)}</ul></article>)}</div></div></section>
 <section id="process" className="section"><div className="site-container"><SectionTitle number="03" label="Процесс" title="От вашего вопроса — к уверенным действиям" text="Понятный процесс, практическая работа и поддержка после встречи." /><div className="process-grid">{steps.map(([title,text],i) => <div className="process-step" key={title}><div className="step-number">0{i+1}</div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
 <section id="formats" className="section"><div className="site-container"><SectionTitle number="04" label="Форматы работы" title="Ваши цели. Ваш формат." text="Выберем подходящий вариант на короткой вводной беседе." /><div className="formats-grid">{formats.map(format => <article key={format.title} className={`info-card format-card ${format.featured ? 'featured' : ''}`}>{format.featured && <span className="popular">ПОПУЛЯРНЫЙ ВЫБОР</span>}<span className="duration"><Clock3 />{format.time}</span><h3>{format.title}</h3><p>{format.text}</p><Button asChild variant={format.featured ? 'cyan' : 'glass'} className="action-button"><a href={telegram} target="_blank" rel="noopener noreferrer">Обсудить формат <ArrowUpRight /></a></Button></article>)}</div></div></section>
 <IndividualCourse />
 <section id="why-me" className="section"><div className="site-container why-layout"><SectionTitle number="05" label="Мой подход" title="Технологии — без иллюзий. Безопасность — без компромиссов." text="Не обещаю лёгких денег. Помогаю понимать инструменты, оценивать риски и принимать самостоятельные решения." /><div className="why-grid">{advantages.map(({icon: Icon,title,text}) => <div className="why-item" key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
 <section id="expert" className="section expert-section"><div className="site-container expert-layout"><figure className="expert-visual"><img className="expert-main-photo" src={expertPortrait.url} alt="Деловой портрет преподавателя Layer Null" loading="lazy" width={768} height={1024} /><figcaption className="expert-caption"><span className="status-dot" />Практик · Преподаватель · Эксперт</figcaption></figure><div className="expert-copy"><SectionTitle number="06" label="Об эксперте" title="Опыт на стыке финансов, технологий и образования" text="Профессиональный путь позволяет рассматривать криптовалюты одновременно как финансовый инструмент, технологию и регулируемую сферу." /><div className="experience-list">{experience.map(({icon: Icon,title,text}) => <div className="experience-item" key={title}><div className="icon-badge"><Icon /></div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></div></section>
 <section className="guide"><div className="site-container guide-inner"><BookOpen className="guide-icon" strokeWidth={1.2} /><div className="guide-copy"><div className="eyebrow">Начните с безопасности</div><h3>Бесплатный гайд: 7 правил кибербезопасности</h3><p>Проверка официальных сайтов, настройка 2FA, хранение seed-фраз и защита от поддельных смарт-контрактов.</p></div><TelegramButton glass>Получить гайд</TelegramButton></div></section>
 <section id="faq" className="section"><div className="site-container faq-layout"><div><SectionTitle number="07" label="FAQ" title="Отвечаю на ваши вопросы" text="Главное, что стоит знать перед нашей первой встречей." /><a href={telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-primary">Остался вопрос? Напишите мне <ArrowRight size={14} /></a></div><Accordion type="single" collapsible>{faq.map(([question,answer],i) => <AccordionItem key={question} value={`faq-${i}`}><AccordionTrigger className="faq-trigger">{question}</AccordionTrigger><AccordionContent className="faq-answer">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
 <section id="contact" className="contact"><div className="site-container"><div className="eyebrow"><span className="status-dot" />Открыт к вашим задачам</div><h2>Криптотехнологии —<br />с пониманием и уверенностью.</h2><p>Готовы безопасно и системно освоить криптовалюту? Напишите мне: обсудим вашу задачу и начнём с короткой беседы без обязательств.</p><TelegramButton /><a className="contact-email" href={`mailto:${email}`}>{email}</a></div></section>
 </main>
 <footer className="footer"><div className="site-container"><div className="footer-top"><Brand /><div className="footer-links"><a href={telegram} target="_blank" rel="noopener noreferrer">Telegram · @amelkov_by</a><a href={`mailto:${email}`}>E-mail <ArrowUpRight size={12} className="inline" /></a><a href="#services">Направления</a></div></div><p className="disclaimer">Все материалы и консультации носят исключительно обучающий и информационный характер, ориентированы на повышение технической и финансовой грамотности. Обучение проводится в строгом соответствии с действующим законодательством. Не является индивидуальной инвестиционной рекомендацией или призывом к совершению финансовых операций. Операции с криптовалютой связаны с риском потери средств.</p><div className="copyright">© 2026 LAYER NULL // CONSULTING. Все права защищены.</div></div></footer>
 </>;
}
