import { ArrowUpRight, Check, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const modules = [
  { title: 'Биткоин и ценность криптовалют', text: 'Почему покупают биткоин, чем определяется его ценность и что стоит за вопросом «чем он обеспечен». Ограниченная эмиссия, доверие и роль децентрализации.' },
  { title: 'Блокчейн и транзакции', text: 'Как устроен блокчейн, как отправляются и подтверждаются транзакции. Типы блокчейнов, механизмы консенсуса и различия между сетями.' },
  { title: 'Кошельки и первые переводы', text: 'Виды кошельков и безопасная работа с ними. Приватные ключи, seed-фразы, адреса и комиссии.', practice: 'Создаём кошелёк и выполняем первые транзакции.' },
  { title: 'Криптовалюты и собственный токен', text: 'Чем монета отличается от токена. Стандарты токенов, эмиссия и основы смарт-контрактов.', practice: 'Создаём собственный токен.' },
  { title: 'DEX и CEX: работа с биржами', text: 'Разница между централизованными и децентрализованными биржами. Хранение активов, торговля, комиссии и KYC.', practice: 'Создаём аккаунт на CEX и настраиваем его защиту.' },
  { title: 'DeFi и пулы ликвидности', text: 'Как устроены децентрализованные финансы и какие способы получения дохода существуют. Аналитика в DefiLlama, комиссии, непостоянные потери и риски протоколов.', practice: 'Создаём собственный пул ликвидности на Uniswap.' },
  { title: 'Perp-DEX: Hyperliquid и Aster', text: 'Бессрочные фьючерсы на децентрализованных площадках. Разбираем Hyperliquid и Aster: маржа, плечо, funding и риск ликвидации.' },
  { title: 'Лендинг и looping в DeFi', text: 'Кредитование под залог криптоактивов и повторное заимствование — looping. Разбираем Aave и DeltaPrime, процентные ставки, обеспечение и риски ликвидации.', practice: 'Разбираем предоставление криптоактивов в долг под процент.' },
  { title: 'NFT и NFA', text: 'Что такое невзаимозаменяемые токены и активы, как устроены их метаданные и права владельца.', practice: 'Создаём собственный невзаимозаменяемый токен.' },
  { title: 'Фундаментальный анализ криптоактивов', text: 'Оцениваем технологию, команду, токеномику, применение и показатели проекта. Отделяем факты от маркетинга и выявляем риски.' },
  { title: 'Инвестиционный портфель', text: 'Формирование портфеля под цели и риск-профиль. Диверсификация активов, распределение долей и ребалансировка без обещаний доходности.' },
];

export function IndividualCourse() {
  return <section id="course" className="section course-section"><div className="site-container course-layout">
    <div className="course-overview">
      <div className="eyebrow"><GraduationCap size={16} />Индивидуальное обучение</div>
      <h2 className="section-heading">Курс по крипте</h2>
      <p className="section-intro">От понимания биткоина до собственного токена, DeFi и осознанного портфеля. Один на один с преподавателем, с практикой на ваших задачах.</p>
      <div className="course-facts"><span>11 тем</span><span>Персональный темп</span><span>Теория + практика</span></div>
      <Button asChild variant="cyan" className="action-button"><a href="https://t.me/amelkov_by" target="_blank" rel="noopener noreferrer">Обсудить обучение <ArrowUpRight /></a></Button>
      <p className="course-note">Программу и темп согласуем под ваш опыт. Практику начинаем в тестовой сети или с минимальными суммами; доступы всегда остаются у вас. DeFi и торговля с плечом связаны с риском потери средств.</p>
    </div>
    <div className="course-program"><div className="course-program-heading">Программа курса <span>01 — 11</span></div><Accordion type="multiple" defaultValue={['module-0']}>
      {modules.map((module, index) => <AccordionItem key={module.title} value={`module-${index}`}><AccordionTrigger className="course-trigger"><span className="course-module-number">{String(index + 1).padStart(2, '0')}</span><span className="course-module-title">{module.title}</span></AccordionTrigger><AccordionContent className="course-content"><p>{module.text}</p>{module.practice && <div className="course-practice"><Check size={15} /><span>{module.practice}</span></div>}</AccordionContent></AccordionItem>)}
    </Accordion></div>
  </div></section>;
}