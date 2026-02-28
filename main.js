/**
 * CIA — Console Integrado de Análise
 * main.js — v1.0
 *
 * Módulos:
 *  1. WhatsApp — monta link wa.me com mensagem codificada
 *  2. Lead Form — validação front-end + estado de sucesso
 *  3. Header — menu mobile, sombra no scroll
 */

(function () {
  'use strict';

  /* ============================================================
     1. WHATSAPP
     ============================================================
     Para alterar número ou mensagem, edite apenas estas duas constantes.
  */
  const WA_NUMBER  = '5511952855141';  // ← altere aqui: DDI + DDD + número (sem espaços)
  const WA_MESSAGE =
    'Olá! Tudo bem?\n' +
    'Gostaria de solicitar uma demonstração do CIA — Console Integrado de Análise.\n' +
    'Pode me informar os próximos passos e horários disponíveis?\n' +
    'Obrigado!';

  function openWhatsApp() {
    const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_MESSAGE);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Vincula a todos os elementos com a classe .wa-trigger
  document.querySelectorAll('.wa-trigger').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openWhatsApp();
    });
  });


  /* ============================================================
     2. LEAD FORM — validação e estado de sucesso
     ============================================================ */
  function initLeadForm(formId) {
    var form = document.getElementById(formId);
    if (!form) return;

    var fieldsWrap  = form.querySelector('.form-fields');
    var successWrap = form.querySelector('.form-success');
    var errorMsg    = form.querySelector('.form-error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var valid = true;

      // Limpa estados anteriores
      form.querySelectorAll('.form-input').forEach(function (inp) {
        inp.classList.remove('is-invalid');
      });
      if (errorMsg) errorMsg.classList.remove('is-visible');

      // Valida campos required
      form.querySelectorAll('[required]').forEach(function (field) {
        if (field.type === 'checkbox' && !field.checked) {
          valid = false;
          return;
        }
        if (field.type !== 'checkbox' && !field.value.trim()) {
          valid = false;
          field.classList.add('is-invalid');
          return;
        }
        if (field.type === 'email') {
          var emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRx.test(field.value.trim())) {
            valid = false;
            field.classList.add('is-invalid');
          }
        }
      });

      if (!valid) {
        if (errorMsg) errorMsg.classList.add('is-visible');
        return;
      }

      // Sucesso — oculta campos, exibe mensagem de confirmação
      if (fieldsWrap) fieldsWrap.style.display = 'none';
      if (successWrap) successWrap.classList.add('is-visible');

      // Rebind do botão WhatsApp dentro do card de sucesso
      if (successWrap) {
        successWrap.querySelectorAll('.wa-trigger').forEach(function (btn) {
          btn.addEventListener('click', function (ev) {
            ev.preventDefault();
            openWhatsApp();
          });
        });
      }
    });
  }

  // Inicializa todos os formulários de lead da página
  initLeadForm('form-lead-hero');
  initLeadForm('form-lead-contato');


  /* ============================================================
     3. HEADER — menu mobile + sombra dinâmica
     ============================================================ */
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  var header     = document.querySelector('.site-header');

  // Toggle menu mobile
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('is-open');

      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('is-open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Fecha ao clicar em qualquer link
    mobileMenu.querySelectorAll('a, button').forEach(function (el) {
      el.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Sombra no header após scroll
  if (header) {
    var rafId = null;
    window.addEventListener('scroll', function () {
      if (rafId) return;
      rafId = requestAnimationFrame(function () {
        header.style.boxShadow = window.scrollY > 10
          ? '0 1px 16px rgba(7,28,70,.09)'
          : '';
        rafId = null;
      });
    }, { passive: true });
  }

})();
