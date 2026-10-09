'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuToggle.focus();
  }
});

// Reset the mobile menu if the visitor switches to a desktop viewport.
const mobileViewport = window.matchMedia('(max-width: 800px)');
mobileViewport.addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();

// This demo uses synthetic records only. Nothing is sent to a server.
const records = [
  { claim: 'C101', member: 'M011', amount: 240 },
  { claim: 'C102', member: 'M012', amount: 180 },
  { claim: 'C102', member: 'M012', amount: 180 },
  { claim: 'C103', member: '', amount: 95 },
  { claim: 'C104', member: 'M014', amount: -30 },
  { claim: 'C105', member: 'M015', amount: 420 }
];
const rows = document.querySelector('#demo-rows');

function renderRecords(validated = false) {
  const seen = new Set();
  let accepted = 0;
  rows.replaceChildren();

  for (const record of records) {
    let result = 'Pending';
    if (validated) {
      if (seen.has(record.claim)) {
        result = 'Duplicate';
      } else if (!record.member) {
        result = 'Missing ID';
      } else if (!Number.isFinite(record.amount) || record.amount < 0) {
        result = 'Invalid amount';
      } else {
        result = 'Passed';
        accepted += 1;
      }
      seen.add(record.claim);
    }

    const row = document.createElement('tr');
    const values = [record.claim, record.member || '—', String(record.amount), result];
    values.forEach((value, index) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      if (index === 3 && validated) {
        cell.className = result === 'Passed' ? 'row-good' : 'row-bad';
      }
      row.append(cell);
    });
    rows.append(row);
  }
  return accepted;
}

renderRecords();
document.querySelector('#run-demo').addEventListener('click', () => {
  const accepted = renderRecords(true);
  document.querySelector('#demo-result').textContent =
    `${accepted} passed · ${records.length - accepted} quarantined. ` +
    'Duplicate, missing ID, and invalid amount detected. Only valid records proceed to analytics.';
  document.querySelector('[data-demo-label]').textContent = 'Run checks again';
});
