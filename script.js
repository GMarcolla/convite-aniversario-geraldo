/**
 * script.js — Scroll Reveal (Fade-in ao rolar)
 * Convite de Aniversário 60 Anos — Geraldo Bet
 *
 * Utiliza IntersectionObserver para detectar quando cada elemento
 * com a classe .reveal entra no viewport e adiciona a classe
 * .is-visible, disparando a animação CSS de fade-in + translateY.
 */

(function () {
  'use strict';

  // Configuração do Observer
  const OBSERVER_OPTIONS = {
    root: null,         // viewport do browser
    rootMargin: '0px',
    threshold: 0.12,   // dispara quando 12% do elemento estiver visível
  };

  // Callback executado ao observar entrada/saída de elementos
  function onIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Para de observar após animar (evita re-trigger)
        observer.unobserve(entry.target);
      }
    });
  }

  // Inicializa o observer
  function initScrollReveal() {
    // Suporte a browsers antigos: exibe tudo imediatamente
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(onIntersect, OBSERVER_OPTIONS);

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  // Aguarda o DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }

})();
