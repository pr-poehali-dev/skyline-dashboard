import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/50">Двигатели и АКПП для Лады</Badge>,
    title: "Надёжные агрегаты для Лады нового поколения.",
    content: "Двигатели и автоматические коробки передач с гарантией. Быстрая доставка по всей России.",
    showButton: true,
    buttonText: 'Смотреть каталог'
  },
  {
    id: 'about',
    title: 'Почему выбирают нас?',
    content: 'Работаем только с проверенными поставщиками. Каждый агрегат проходит диагностику перед отправкой. Гарантия на все позиции — от 3 месяцев.'
  },
  {
    id: 'products',
    title: 'Наш каталог',
    content: 'Двигатели и АКПП для Vesta, Granta, Largus, XRAY и других моделей. Средняя цена — от 60 000 ₽.',
    products: [
      {
        name: 'Двигатель 1.6L (ВАЗ-21129)',
        price: 'от 55 000 ₽',
        image: 'https://cdn.poehali.dev/projects/9ad70d97-5aaf-4d39-a0d5-5e43598a0cfc/files/3bb0c65c-79e7-4ef4-ae9f-1bdc1e8f833a.jpg',
        description: 'Лада Гранта, Калина 2, Приора — с пробегом, после диагностики'
      },
      {
        name: 'Двигатель 1.8L (ВАЗ-21179)',
        price: 'от 65 000 ₽',
        image: 'https://cdn.poehali.dev/projects/9ad70d97-5aaf-4d39-a0d5-5e43598a0cfc/files/4ed85511-3eec-4297-89e8-ad0f9ab2efa4.jpg',
        description: 'Лада Веста, XRAY — оригинал, на гарантии'
      },
      {
        name: 'АКПП Jatco CVT',
        price: 'от 60 000 ₽',
        image: 'https://cdn.poehali.dev/projects/9ad70d97-5aaf-4d39-a0d5-5e43598a0cfc/files/605ae803-6f5c-483b-8801-ed3376bd1f8e.jpg',
        description: 'Лада Веста АТ, Granta АТ — вариатор в отличном состоянии'
      }
    ]
  },
  {
    id: 'guarantee',
    title: 'Гарантия и доставка',
    content: 'Гарантия от 3 до 6 месяцев на каждый агрегат. Отправляем транспортными компаниями по всей России в течение 1–2 дней после оплаты.'
  },
  {
    id: 'contact',
    title: 'Оставьте заявку',
    content: 'Укажите модель и год автомобиля — подберём подходящий агрегат и назовём точную цену. Работаем без выходных.',
    showButton: true,
    buttonText: 'Получить консультацию'
  },
]
