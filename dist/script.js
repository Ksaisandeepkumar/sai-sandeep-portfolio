'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.addEventListener('click', () => { const expanded = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!expanded)); navigation.classList.toggle('open', !expanded); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); toggle.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
const records = [{claim:'C101',member:'M011',amount:240},{claim:'C102',member:'M012',amount:180},{claim:'C102',member:'M012',amount:180},{claim:'C103',member:'',amount:95},{claim:'C104',member:'M014',amount:-30},{claim:'C105',member:'M015',amount:420}];
const rows = document.querySelector('#demo-rows');
function renderRecords(validated = false) { const seen = new Set(); let accepted = 0; rows.replaceChildren(); records.forEach(record => { let result = 'Pending'; if (validated) { if(seen.has(record.claim)) result = 'Duplicate'; else if(!record.member) result = 'Missing ID'; else if(!Number.isFinite(record.amount) || record.amount < 0) result = 'Invalid amount'; else { result = 'Passed'; accepted++; } seen.add(record.claim); } const tr = document.createElement('tr'); [record.claim,record.member || '—',String(record.amount),result].forEach((value,index) => { const td = document.createElement('td'); td.textContent = value; if(index === 3 && validated) td.className = result === 'Passed' ? 'row-good' : 'row-bad'; tr.append(td); }); rows.append(tr); }); return accepted; }
renderRecords();
document.querySelector('#run-demo').addEventListener('click', event => { const accepted = renderRecords(true); document.querySelector('#demo-result').textContent = `${accepted} passed · ${records.length - accepted} quarantined. Duplicate, missing ID, and invalid amount detected. Only valid records proceed to analytics.`; event.currentTarget.firstChild.textContent = 'Run checks again '; });
