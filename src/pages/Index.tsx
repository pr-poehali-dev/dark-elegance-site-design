import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const industries = [
    { title: "Юридическая", description: "Корпоративное право, регулирование, комплаенс", icon: "Scale" },
    { title: "Финансовая", description: "Инвестиционные стратегии, риск-менеджмент, структурирование", icon: "TrendingUp" },
    { title: "Промышленная", description: "Технологическая трансформация, оптимизация процессов", icon: "Factory" },
    { title: "Экологическая", description: "ESG-стратегии, устойчивое развитие, экологический аудит", icon: "Leaf" }
  ];

  const services = [
    { title: "Стратегический консалтинг", description: "Разработка долгосрочных стратегий развития бизнеса", icon: "Target" },
    { title: "Операционная эффективность", description: "Оптимизация бизнес-процессов и повышение производительности", icon: "Zap" },
    { title: "Антикризисное управление", description: "Стабилизация и восстановление в сложных ситуациях", icon: "Shield" }
  ];

  const team = [
    { name: "Александр Петров", role: "Управляющий партнёр", expertise: "M&A, корпоративные финансы" },
    { name: "Мария Волкова", role: "Партнёр по стратегии", expertise: "Цифровая трансформация" },
    { name: "Дмитрий Козлов", role: "Партнёр по операциям", expertise: "Операционное превосходство" }
  ];

  const insights = [
    { title: "Будущее регулирования ESG: что ждать в 2025", category: "Экология", readTime: "8 мин" },
    { title: "Цифровая трансформация промышленности", category: "Технологии", readTime: "12 мин" },
    { title: "Новые тренды в корпоративном управлении", category: "Право", readTime: "6 мин" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl font-serif">ConsultExpert</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="story-link">Главная</a>
              <a href="#about" className="story-link">О нас</a>
              <a href="#team" className="story-link">Наша команда</a>
              <a href="#services" className="story-link">Услуги</a>
              <a href="#industries" className="story-link">Отрасли</a>
              <a href="#insights" className="story-link">Аналитика</a>
              <a href="#contact" className="story-link">Контакты</a>
            </div>
            <Button className="hidden md:block">Связаться с нами</Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 z-10"></div>
        <img 
          src="/img/36ad6ac2-e898-4f48-92a2-19366ae2122a.jpg" 
          alt="Symbolic representation of precision and balance"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-foreground leading-tight">
            Специализированная<br />
            <span className="text-primary">экспертиза.</span><br />
            Реальные результаты.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Решаем сложные задачи в критически важных отраслях глубоко и точно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-scale">
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Узнать больше
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наш подход основан на глубоком понимании специфики отраслей и многолетнем опыте решения сложных бизнес-задач
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale bg-card border-border animate-fade-in">
              <CardHeader>
                <Icon name="Brain" size={48} className="text-primary mb-4" />
                <CardTitle className="font-serif">Глубокая экспертиза</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  15+ лет опыта в сложных отраслях. Наши специалисты имеют профильное образование и практический опыт работы в ведущих компаниях.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-scale bg-card border-border animate-fade-in">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mb-4" />
                <CardTitle className="font-serif">Персональный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Каждый проект ведёт команда из 3-5 экспертов. Мы не используем стандартные шаблоны — только индивидуальные решения.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-scale bg-card border-border animate-fade-in">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mb-4" />
                <CardTitle className="font-serif">Измеримые результаты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  95% наших рекомендаций успешно внедряются. Средний ROI проектов составляет 340% в течение первого года.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Отрасли, в которых мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Концентрируемся на сложных, высокорегулируемых отраслях, где требуется особая экспертиза
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-scale bg-card border-border animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Icon name={industry.icon as any} size={32} className="text-accent" />
                    <div>
                      <CardTitle className="font-serif text-xl">{industry.title}</CardTitle>
                      <CardDescription className="mt-2">{industry.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Основные услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Комплексная поддержка бизнеса на всех этапах развития
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale bg-card border-border animate-fade-in">
                <CardHeader>
                  <Icon name={service.icon as any} size={40} className="text-primary mb-4" />
                  <CardTitle className="font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Опытные профессионалы с экспертизой в ведущих консалтинговых компаниях и корпорациях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-scale bg-card border-border animate-fade-in text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-serif">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{member.expertise}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Последние публикации</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Экспертная аналитика и инсайты по ключевым трендам в бизнесе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="hover-scale bg-card border-border animate-fade-in cursor-pointer">
                <div className="aspect-video bg-muted/50 relative overflow-hidden">
                  <img 
                    src="/img/b9328daa-0a21-4d06-af30-3610e04e574d.jpg" 
                    alt="Abstract analytical visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{insight.category}</Badge>
                    <span className="text-sm text-muted-foreground">{insight.readTime}</span>
                  </div>
                  <CardTitle className="font-serif hover:text-primary transition-colors">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Готовы к переменам?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта. Первичная консультация — бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-scale">
              <Icon name="Calendar" size={20} className="mr-2" />
              Запланировать консультацию
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted/30 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-xl font-serif mb-4">ConsultExpert</h3>
              <p className="text-muted-foreground mb-4">
                Специализированная экспертиза для сложных бизнес-задач
              </p>
              <div className="flex gap-4">
                <Icon name="Linkedin" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="story-link">Стратегический консалтинг</a></li>
                <li><a href="#" className="story-link">Операционная эффективность</a></li>
                <li><a href="#" className="story-link">Антикризисное управление</a></li>
                <li><a href="#" className="story-link">Due Diligence</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Отрасли</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="story-link">Юридическая</a></li>
                <li><a href="#" className="story-link">Финансовая</a></li>
                <li><a href="#" className="story-link">Промышленная</a></li>
                <li><a href="#" className="story-link">Экологическая</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@consultexpert.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Тверская, 15</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2024 ConsultExpert. Все права защищены.</p>
            <div className="flex gap-6 text-muted-foreground text-sm">
              <a href="#" className="story-link">Политика конфиденциальности</a>
              <a href="#" className="story-link">Условия использования</a>
              <a href="#" className="story-link">Карта сайта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;