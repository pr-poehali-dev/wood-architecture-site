import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import ParametricWaves from "@/components/ParametricWaves";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const projects = [
    {
      url: "https://cdn.poehali.dev/files/32e2fd9d-25b4-4161-9ea5-6df6176ff46e.jpg",
      title: "Современный загородный дом",
    },
    {
      url: "https://cdn.poehali.dev/files/d688bcf7-8e23-4287-aaa0-cb87a48bfa4e.jpg",
      title: "Параметрические формы",
    },
    {
      url: "https://cdn.poehali.dev/files/ffa66328-0d2b-4a46-aac9-5dd1fc8f1f8c.jpg",
      title: "Органичная архитектура",
    },
    {
      url: "https://cdn.poehali.dev/files/5156c5ab-e37c-4832-bf08-b92663c56387.jpg",
      title: "Детали фасада",
    },
    {
      url: "https://cdn.poehali.dev/files/8dcadaa5-a516-457b-9f61-1c9995003d99.jpg",
      title: "Природная эстетика",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative">
      <ParametricWaves />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border relative">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            PARAMETRIC FACADES
          </h1>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О технологии
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Проекты
            </a>
            <a href="#contact">
              <Button variant="default" size="sm">
                Контакты
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <span>Технология "Мягкое дерево"</span>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Фасады из массива дерева
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Создаём уникальные органические формы в стиле параметрической архитектуры. 
                Каждый проект — это симбиоз природных материалов и инновационных технологий.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="group">
                  <a href="#contact" className="flex items-center gap-2">
                    Заказать проект
                    <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#projects" className="flex items-center gap-2">
                    <Icon name="Image" size={20} />
                    Наши работы
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src={projects[0].url}
                alt="Фасад из массива дерева"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О технологии</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Технология "Мягкое дерево" позволяет создавать плавные, органичные формы, 
              которые невозможны при традиционной обработке древесины
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Trees",
                title: "Натуральный массив",
                description: "Используем только качественную древесину с сохранением естественной текстуры",
              },
              {
                icon: "Waves",
                title: "Параметрический дизайн",
                description: "Создаём уникальные органические формы с помощью современных технологий",
              },
              {
                icon: "Home",
                title: "Для загородных домов",
                description: "Идеально подходит для создания эксклюзивных фасадов премиум-класса",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={feature.icon as any} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">
              Примеры реализованных фасадов из массива дерева
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in aspect-[4/3]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={project.url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Обсудим ваш проект и создадим уникальный фасад
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-xl bg-card/50 backdrop-blur-sm animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван Петров"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto group">
                Отправить заявку
                <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                    <p className="font-medium">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium">info@facades.ru</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Адрес</p>
                    <p className="font-medium">Московская обл.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border relative z-10">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Parametric Facades. Фасады из массива дерева</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;