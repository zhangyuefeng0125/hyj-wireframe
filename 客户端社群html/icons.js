/* SVG 图标精灵：所有图标以 <use xlink:href="#i-xxx"> 引用
   图标来源：依据设计稿截图 1:1 描摹（线性图标，stroke 统一 currentColor） */
(function () {
  var s = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
  <defs>
    <g id="i-back" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5 8 12l7 7"/></g>
    <g id="i-search" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8.5" cy="8.5" r="5.6"/><path d="m12.8 12.8 3.4 3.4"/></g>
    <g id="i-calendar" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2.6" y="4" width="12.8" height="11.4" rx="2"/><path d="M2.6 7.6h12.8M6 2.4v3M12 2.4v3"/></g>
    <g id="i-clock" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8.5" r="6"/><path d="M8.5 5v3.8l2.4 1.5"/></g>
    <g id="i-pin" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.4S13.6 10.7 13.6 7.6a5.1 5.1 0 1 0-10.2 0c0 3.1 5.1 6.8 5.1 6.8Z"/><circle cx="8.5" cy="7.5" r="1.9"/></g>
    <g id="i-users" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.6" cy="5.6" r="2.7"/><path d="M1.9 14c0-2.6 2.1-4.4 4.7-4.4s4.7 1.8 4.7 4.4"/><path d="M11.4 3.2a2.7 2.7 0 0 1 0 5.2M12.6 10c1.9.4 3.1 1.9 3.1 4"/></g>
    <g id="i-eye" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1.3 8.5S4 3.9 8.5 3.9s7.2 4.6 7.2 4.6-2.7 4.6-7.2 4.6S1.3 8.5 1.3 8.5Z"/><circle cx="8.5" cy="8.5" r="2.1"/></g>
    <g id="i-chev-right" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 3.5 5 4.5-5 4.5"/></g>
    <g id="i-close" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M3.6 3.6 12.4 12.4M12.4 3.6 3.6 12.4"/></g>
    <g id="i-check" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 8.4 3.4 3.4L13 4.6"/></g>
    <g id="i-bubble" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 8.6c0 3.2-2.9 5.8-6.5 5.8-.9 0-1.8-.15-2.6-.42L1.6 15.4l1.3-3.2A5.4 5.4 0 0 1 1 8.6C1 5.4 3.9 2.8 7.5 2.8S14 5.4 14 8.6Z"/></g>
    <g id="i-user-plus" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="5" r="3.1"/><path d="M1.2 15c0-3.2 2.6-5.4 5.8-5.4 1 0 1.9.2 2.7.5"/><path d="M12.4 9.6v4.2M10.3 11.7h4.2"/></g>
    <g id="i-share" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10.6 2.6 15 6.4l-4.4 3.8V8.1c-4.4 0-6.6 1.6-8.4 5.4-.6-4.6 1.6-8 6.4-8.6V2.6Z"/></g>
    <g id="i-crown" fill="currentColor"><path d="M2.4 12.9 1.1 4.4l3.9 2.7L8.5 2l3.5 5.1 3.9-2.7-1.3 8.5H2.4Z"/></g>
    <g id="i-download" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 2.4v8.2M5 7.6 8.5 11l3.5-3.4M2.6 13.4h11.8"/></g>
    <g id="i-copy" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5.4" y="5.4" width="8.2" height="8.2" rx="1.8"/><path d="M10.6 5.4V3.6a1.8 1.8 0 0 0-1.8-1.8H3.6a1.8 1.8 0 0 0-1.8 1.8v5.2a1.8 1.8 0 0 0 1.8 1.8h1.8"/></g>
    <g id="i-shield" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 1.9 14 4v4c0 3.4-2.3 6-5.5 6.9C5.3 14 3 11.4 3 8V4l5.5-2.1Z"/><path d="m6.3 8 1.6 1.7 3-3.4"/></g>
    <g id="i-calendar-stat" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2.2" y="3.6" width="12.6" height="11.2" rx="2"/><path d="M2.2 7h12.6M5.6 2.2v2.8M11.4 2.2v2.8M5.4 11h1.4M9 11h1.4"/></g>
  </defs>
</svg>`;
  document.body.insertAdjacentHTML("afterbegin", s);
})();