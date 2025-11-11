<script setup lang="ts">
import AccordionItem from "./AccordionItem.vue";

const faqData = [
  {
    id: "faq1",
    question: "Jakie korzyści daje flota elektryczna Voltura?",
    answer: "Niższe koszty eksploatacji, prosta obsługa serwisowa i wizerunek marki dbającej o środowisko.",
  },
  {
    id: "faq2",
    question: "Czy samochody Voltura sprawdzą się w trasach długodystansowych?",
    answer: "Tak, wysoki zasięg baterii i dostęp do gęstej sieci szybkich ładowarek gwarantują komfort podróży.",
  },
  {
    id: "faq3",
    question: "Jakie wsparcie serwisowe oferujecie dla flot?",
    answer: "Oferujemy dedykowanego doradcę flotowego, priorytetowe terminy napraw oraz całodobowy serwis mobilny.",
  },
];
</script>

<template>
  <section>
    <h2 class="fw-bold">Gama naszych samochodów</h2>
    <p>
      Voltura oferuje rozwiązania flotowe i korporacyjne, które łączą oszczędności z nowoczesnym wizerunkiem.
      <br />
      Nasze samochody elektryczne sprawdzają się zarówno w dużych flotach, jak i w małych firmach, dla których liczy się
      ekonomia, niezawodność i troska o środowisko.
    </p>
    <div class="accordion accordion-flush" id="accordion">
      <AccordionItem v-for="faq in faqData" :key="faq.id" :id="faq.id" :question="faq.question" :answer="faq.answer" />
    </div>
  </section>
</template>
