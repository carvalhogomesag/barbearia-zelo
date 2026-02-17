import corte01 from './assets/images/cortes/corte-01.webp';
import corte02 from './assets/images/cortes/corte-02.webp';
import corte03 from './assets/images/cortes/corte-03.webp';
import corte04 from './assets/images/cortes/corte-04.webp';

import loja01 from './assets/images/interior/loja-01.webp';
import loja02 from './assets/images/interior/loja-02.webp';
import loja03 from './assets/images/interior/loja-03.webp';
import loja04 from './assets/images/interior/loja-04.webp';

export const BUSINESS_INFO = {
  name: "Barbearia Zelo",
  barberName: "Sérgio",
  phone: '+351 911 081 781', 
  address: 'R. Carvalhal nº1',
  city: '4410-444 Arcozelo',
  openingHours: 'Segunda a Sábado: 08:00 - 19:30', // Ajustei base 08h
  // Como não tem link de agendamento específico, vamos usar o WhatsApp ou ligar
  bookingUrl: 'https://wa.me/351911081781', 
  googleMapsUrl: 'https://www.google.com/maps/place/Barbearia+Zelo/@41.0628,-8.645,17z',
  instagramUrl: 'https://www.facebook.com/barbeariazelo' // Usando o Face fornecido
};

export const SERVICES = [
  { id: 1, name: 'Corte Zelo', description: 'Corte masculino com acabamento de excelência.', price: '12€' },
  { id: 2, name: 'Barba Tradicional', description: 'Aparo e contorno com o cuidado que você merece.', price: '8€' },
  { id: 3, name: 'Corte + Barba', description: 'Serviço completo de visual renovado.', price: '18€' },
  { id: 4, name: 'Corte Infantil', description: 'Cuidado e paciência para os mais pequenos.', price: '10€' }
];

export const REVIEWS = [
  {
    id: 1,
    author: 'Manuel Oliveira',
    date: 'Há 1 ano',
    text: 'Atendimento cuidado e simpatia. Recomendo o Sérgio, é boa onda. Serviços de qualidade.',
    avatar: 'https://ui-avatars.com/api/?name=Manuel+Oliveira&background=1d4ed8&color=fff'
  },
  {
    id: 2,
    author: 'Fábio Carmo',
    date: 'Há 1 ano',
    text: 'Primeira vez e recomendo. Bom corte e muito profissional. Grato pela preferência.',
    avatar: 'https://ui-avatars.com/api/?name=Fabio+Carmo&background=1d4ed8&color=fff'
  },
  {
    id: 3,
    author: 'Antonio Oliveira',
    date: 'Há 2 anos',
    text: 'Excelente atendimento e qualidade no serviço prestado.',
    avatar: 'https://ui-avatars.com/api/?name=Antonio+Oliveira&background=1d4ed8&color=fff'
  }
];

export const IMAGES = {
  cortes: [
    { id: 1, url: corte01, alt: 'Corte Barbearia Zelo' },
    { id: 2, url: corte02, alt: 'Estilo Sérgio' },
    { id: 3, url: corte03, alt: 'Barba Arcozelo' },
    { id: 4, url: corte04, alt: 'Corte Moderno' },
  ],
  interior: [
    { id: 1, url: loja01, alt: 'Interior Zelo' },
    { id: 2, url: loja02, alt: 'Ambiente' },
    { id: 3, url: loja03, alt: 'Cadeira de Barbeiro' },
    { id: 4, url: loja04, alt: 'Produtos' },
  ]
};