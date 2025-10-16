import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: 'Trash2',
      title: 'Вывоз строительного мусора',
      description: 'Быстро уберем строительные отходы после ремонта',
      price: 'от 2000₽'
    },
    {
      icon: 'Sofa',
      title: 'Крупногабаритные предметы',
      description: 'Вынесем и вывезем мебель, технику, любые габаритные вещи',
      price: 'от 1500₽'
    },
    {
      icon: 'Recycle',
      title: 'Общий мусор из квартиры',
      description: 'Полный вывоз бытового мусора и хлама',
      price: 'от 1000₽'
    },
    {
      icon: 'Sparkles',
      title: 'Уборка после вывоза',
      description: 'Оставим квартиру в чистоте',
      price: 'от 800₽'
    }
  ];

  const prices = [
    {
      name: 'Базовый',
      price: '1500₽',
      features: ['До 1 куб.м мусора', 'Грузчики 1 час', 'Вывоз на полигон', 'Работа в пределах МКАД']
    },
    {
      name: 'Стандарт',
      price: '3500₽',
      features: ['До 3 куб.м мусора', 'Грузчики 2 часа', 'Вывоз на полигон', 'Работа в пределах МКАД', 'Вынос из квартиры'],
      popular: true
    },
    {
      name: 'Премиум',
      price: '6000₽',
      features: ['До 6 куб.м мусора', 'Грузчики 4 часа', 'Вывоз на полигон', 'Работа по всей Москве', 'Вынос из квартиры', 'Уборка после']
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Отличная работа! Приехали вовремя, всё быстро вынесли и вывезли. Квартира чистая.',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Помогли избавиться от старой мебели после ремонта. Ребята вежливые, аккуратные.',
      rating: 5
    },
    {
      name: 'Елена Морозова',
      text: 'Заказывала вывоз строительного мусора. Всё убрали быстро, цена адекватная.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Как быстро вы можете приехать?',
      answer: 'Мы работаем ежедневно с 8:00 до 22:00. В большинстве случаев можем приехать в течение 2-3 часов после заявки.'
    },
    {
      question: 'Куда вы вывозите мусор?',
      answer: 'Весь мусор мы вывозим на официальные полигоны и перерабатывающие предприятия. У нас есть все необходимые лицензии.'
    },
    {
      question: 'Что входит в стоимость?',
      answer: 'В стоимость входит: работа грузчиков, транспорт, вывоз на полигон. Дополнительно оплачивается только выезд за МКАД.'
    },
    {
      question: 'Какие способы оплаты принимаете?',
      answer: 'Принимаем наличные, переводы на карту, безналичный расчет для юридических лиц.'
    },
    {
      question: 'Нужно ли мне быть дома во время вывоза?',
      answer: 'Желательно присутствие, но если это невозможно — обсудим детали заранее.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Trash2" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-accent">МусорИзКвартиры.рф</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-secondary hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="text-secondary hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-secondary hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-accent mb-6 leading-tight">
                Вывоз мусора из квартиры
                <span className="text-primary"> за 2 часа</span>
              </h1>
              <p className="text-xl text-secondary mb-8">
                Профессионально уберем и вывезем любой мусор: строительный, бытовой, крупногабаритный. Работаем по всей Москве.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-secondary">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2 часа</div>
                  <div className="text-secondary">среднее время работы</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-secondary">принимаем заявки</div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <img 
                src="https://cdn.poehali.dev/projects/43055a3e-0bdd-47f5-8e8e-e03e926889a6/files/542c45b5-7b83-4277-86e5-1b2f08870bd9.jpg" 
                alt="Вывоз мусора"
                className="rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-accent mb-4">Наши услуги</h2>
          <p className="text-center text-secondary mb-12 text-lg">Решим любую задачу по вывозу мусора</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-center text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-secondary mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-accent mb-4">Прозрачные цены</h2>
          <p className="text-center text-secondary mb-12 text-lg">Выберите подходящий тариф</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'border-4 border-primary scale-105' : 'border-2'} animate-scale-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-center text-2xl">{plan.name}</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90'}`}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <img 
                src="https://cdn.poehali.dev/projects/43055a3e-0bdd-47f5-8e8e-e03e926889a6/files/701db2ab-fa9d-49aa-8a84-dfbf64d40be8.jpg" 
                alt="Чистая квартира"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold text-accent mb-6">Почему выбирают нас?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Быстро приезжаем</h3>
                    <p className="text-secondary">Выезжаем через 2-3 часа после заявки. Работаем без выходных.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Официально</h3>
                    <p className="text-secondary">Все лицензии и документы. Заключаем договор.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="ThumbsUp" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Аккуратные грузчики</h3>
                    <p className="text-secondary">Бережно относимся к вашей квартире и имуществу.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Прозрачные цены</h3>
                    <p className="text-secondary">Фиксированная стоимость. Никаких скрытых платежей.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-accent mb-4">Отзывы клиентов</h2>
          <p className="text-center text-secondary mb-12 text-lg">Нам доверяют сотни москвичей</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center text-accent mb-4">Частые вопросы</h2>
          <p className="text-center text-secondary mb-12 text-lg">Ответы на популярные вопросы</p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 hover:border-primary transition-colors">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-accent mb-4">Оставьте заявку</h2>
          <p className="text-center text-secondary mb-12 text-lg">Перезвоним в течение 5 минут</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <img 
                src="https://cdn.poehali.dev/projects/43055a3e-0bdd-47f5-8e8e-e03e926889a6/files/6732c1a6-d3f5-459e-8e88-53ce9c84435a.jpg" 
                alt="Наша команда"
                className="rounded-2xl shadow-2xl"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <span className="text-xl font-semibold">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <span className="text-xl">info@мусоризквартиры.рф</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <span className="text-xl">Москва, работаем по всему городу</span>
                </div>
              </div>
            </div>
            <Card className="animate-fade-in-right">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input placeholder="Иван" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Адрес</label>
                    <Input placeholder="ул. Примерная, д. 123" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Комментарий</label>
                    <Textarea placeholder="Опишите, что нужно вывезти..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-secondary text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Trash2" size={28} />
                <span className="text-xl font-bold">МусорИзКвартиры.рф</span>
              </div>
              <p className="text-white/80">Профессиональный вывоз мусора по Москве</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Вывоз строительного мусора</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Крупногабаритные предметы</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Бытовой мусор</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#prices" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@мусоризквартиры.рф</li>
                <li>Москва, 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 МусорИзКвартиры.рф. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
