function flip(card){
  card.classList.toggle("flipped");
}

const btn = document.getElementById("langBtn");
const menu = document.getElementById("langMenu");
const flag = document.getElementById("currentFlag");

const flags = {
  nl: "🇳🇱",
  en: "🇬🇧",
  ar: "🇸🇦"
};

let lang = localStorage.getItem("lang") || "nl";

const translations = {
  nl: {
    brand: "Kalaji Automotive",
    nav_home: "Home",
    nav_lease: "Lease",
    nav_apply: "Aanvraag",
    hero_title: "Kalaji Automotive",
    hero_subtitle: "Premium leasing & zakelijke mobiliteit",
    hero_button: "Bekijk lease",
    contact_title: "Contact us",
    lease_title: "Lease opties",
    car_person_title: "Personenwagen",
    car_person_desc: "Perfect voor dagelijks gebruik",
    car_business_title: "Bedrijfswagen",
    car_business_desc: "Ideaal voor ondernemers",
    car_truck_title: "Vrachtwagen",
    car_truck_desc: "Voor professioneel werk",

    ticker_lease: "✔ Rentevrije leasing",
    ticker_transparent: "✔ Transparant",
    ticker_sharia: "✔ Islamitische principes",
    ticker_fast: "✔ Binnen 24 uur geregeld",



    age_0_1: "0 - 1 jaar",
    age_1_2: "1 - 2 jaar",
    age_3_5: "3 - 5 jaar",
    age_5_10: "5 - 10 jaar",
    age_10_plus: "10+ jaar",


    Kvk_nummer: "Kvk-nummer",
    company_age: "Hoe oud is uw bedrijf?",
    downpayment: "Gewenste aanbetaling",
    duration_select: "Looptijd",

    footer_contact: "Contact",
    footer_terms: "Algemene Voorwaarden",
    footer_privacy: "Privacybeleid",




    duration_1: "1 jaar",
    duration_2: "2 jaar",
    duration_3: "3 jaar",
    duration_4: "4 jaar",
    duration_5: "5 jaar",
    duration_6: "6 jaar",
    duration_7: "7 jaar",
    duration_8: "8 jaar",
    duration_9: "9 jaar",
    duration_10: "10 jaar",


    budget_month: "Budget per maand",




    
    halal_title: "Waarom Halal Lease?",
    halal_sharia: "Sharia-proof",
    halal_sharia_desc: "100% islamitisch verantwoord",
    halal_interest: "Geen rente (riba)",
    halal_interest_desc: "Alleen betalen voor gebruik",
    halal_transparent: "Transparant",
    halal_transparent_desc: "Geen verborgen kosten",
    halal_usage: "Gebruik i.p.v. bezit",
    halal_usage_desc: "Je betaalt alleen voor gebruik",
    halal_fair: "Eerlijke afspraken",
    halal_fair_desc: "Duidelijk en betrouwbaar",
    form_title: "Aanvraag",
    form_submit: "Verstuur aanvraag",
    form_car: "Personenwagen",
    form_business: "Bedrijfswagen",
    form_truck: "Vrachtwagen",
    name: "Naam",
    email: "Email",
    phone: "Telefoon",
    budget: "Budget",
    duration: "Looptijd",
    kilometers: "Kilometers per jaar",
    extra: "Extra wensen",
    form_vehicle_type: "Voertuig type"
  },

  en: {
    brand: "Kalaji Automotive",
    nav_home: "Home",
    nav_lease: "Lease",
    nav_apply: "Application",
    hero_title: "Kalaji Automotive",
    hero_subtitle: "Premium leasing & business mobility",
    hero_button: "View leasing",
    contact_title: "Contact us",
    lease_title: "Lease options",
    car_person_title: "Passenger car",


    ticker_lease: "✔ Rent-free leasing",
    ticker_transparent: "✔ Transparent",
    ticker_sharia: "✔ Islamic principles",
    ticker_fast: "✔ Within 24 hours arranged",


    age_0_1: "0 - 1 years",
    age_1_2: "1 - 2 years",
    age_3_5: "3 - 5 years",
    age_5_10: "5 - 10 years",
    age_10_plus: "10+ years",



    Kvk_nummer: "KVK-number of your company",
    company_age: "How old is your company?",
    downpayment: "Desired down payment",
    duration_select: "Duration",

    footer_contact: "Contact",
    footer_terms: "Terms & Conditions",
    footer_privacy: "Privacy Policy",




    duration_1: "1 year",
    duration_2: "2 years",
    duration_3: "3 years",
    duration_4: "4 years",
    duration_5: "5 years",
    duration_6: "6 years",
    duration_7: "7 years",
    duration_8: "8 years",
    duration_9: "9 years",
    duration_10: "10 years",



    budget_month: "Monthly budget",








    car_person_desc: "Perfect for daily use",
    car_business_title: "Commercial vehicle",
    car_business_desc: "Ideal for entrepreneurs",
    car_truck_title: "Truck",
    car_truck_desc: "For professional work",
    halal_title: "Why Halal Leasing?",
    halal_sharia: "Sharia-compliant",
    halal_sharia_desc: "100% Islamic responsible",
    halal_interest: "No interest (riba)",
    halal_interest_desc: "Pay only for usage",
    halal_transparent: "Transparent",
    halal_transparent_desc: "No hidden costs",
    halal_usage: "Use instead of ownership",
    halal_usage_desc: "You only pay for usage",
    halal_fair: "Fair agreements",
    halal_fair_desc: "Clear and reliable",
    form_title: "Application",
    form_submit: "Submit request",
    form_car: "Passenger car",
    form_business: "Commercial vehicle",
    form_truck: "Truck",
    name: "Name",
    email: "Email",
    phone: "Phone",
    budget: "Budget",
    duration: "Duration",
    kilometers: "Kilometers per year",
    extra: "Additional wishes",
    form_vehicle_type: "Vehicle type"
  },

  ar: {
    brand: "Kalaji Automotive",
    nav_home: "الرئيسية",
    nav_lease: "تقسيط",
    nav_apply: "طلب",
    hero_title: "Kalaji Automotive",
    hero_subtitle: "تقسيط فاخر وتنقل آمن",
    hero_button: "عرض تقسيط",


    age_0_1: "0 - 1 سنة",
    age_1_2: "1 - 2 سنة",
    age_3_5: "3 - 5 سنوات",
    age_5_10: "5 - 10 سنوات",
    age_10_plus: "10+ سنوات",



    ticker_lease: "✔ تقسيط بدون ربا",
    ticker_transparent: "✔ شفاف",
    ticker_sharia: "✔ مبادئ إسلامية",
    ticker_fast: "✔ تواصل خلال 24 ساعة",

    Kvk_nummer: "رقم السجل التجاري",
    company_age: "كم عمر شركتك؟",
    downpayment: "الدفعة الأولى المفضلة",
    duration_select: "مدة العقد",







    duration_1: "سنة واحدة",
    duration_2: "سنتان",
    duration_3: "3 سنوات",
    duration_4: "4 سنوات",
    duration_5: "5 سنوات",
    duration_6: "6 سنوات",
    duration_7: "7 سنوات",
    duration_8: "8 سنوات",
    duration_9: "9 سنوات",
    duration_10: "10 سنوات",






    budget_month: "الميزانية الشهرية",










    contact_title: "اتصل بنا",
    lease_title: "خيارات تقسيط",
    car_person_title: "سيارة خاصة",
    car_person_desc: "مثالي للاستخدام اليومي",
    car_business_title: "مركبة تجارية",
    car_business_desc: "مثالي لرواد الأعمال",
    car_truck_title: "شاحنة",
    car_truck_desc: "للعمل المهني",
    halal_title: "لماذا تقسيط الحلال؟",
    halal_sharia: "متوافق مع الشريعة",
    halal_sharia_desc: "إسلامي 100%",
    halal_interest: "بدون ربا",
    halal_interest_desc: "ادفع مقابل الاستخدام فقط",
    halal_transparent: "شفاف",
    halal_transparent_desc: "بدون تكاليف خفية",
    halal_usage: "المالك الرئيسي من اليوم الاول",
    halal_usage_desc: "تدفع فقط للاستخدام",
    halal_fair: "اتفاقات عادلة",
    halal_fair_desc: "واضح وموثوق",
    form_title: "طلب",
    form_submit: "إرسال الطلب",
    form_car: "سيارة خاصة",
    form_business: "مركبة تجارية",
    form_truck: "شاحنة",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    budget: "الميزانية",
    duration: "المدة",
    kilometers: "الكيلومترات سنوياً",
    extra: "طلبات إضافية",
    form_vehicle_type: "نوع المركبة"
  }
};

function setLang(l){
  document.querySelectorAll("[data-key]").forEach(el=>{
    const key = el.dataset.key;
    if(translations[lang]?.[key]){
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-key-placeholder]").forEach(el=>{
    const key = el.dataset.keyPlaceholder;
    if(translations[lang]?.[key]){
      el.placeholder = translations[lang][key];
    }
  });

document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
document.documentElement.setAttribute("lang", l);


if (flag && flags[l]) {
  flag.textContent = flags[l];
}

localStorage.setItem("lang", l);

const track = document.querySelector(".track");

track.classList.remove("reset-animation");

void track.offsetWidth;

track.classList.add("reset-animation");
}

if(btn && menu){
  btn.addEventListener("click", ()=>{
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".lang-option").forEach(opt=>{
    opt.addEventListener("click", ()=>{
      lang = opt.dataset.lang;
      menu.classList.remove("active");
      setLang(lang);

      // force refresh ticker text
document.querySelectorAll(".ticker span[data-key]").forEach(el => {
  const key = el.dataset.key;

  if (translations[lang]?.[key]) {
    el.textContent = translations[lang][key];
  }
});
    });
  });

  document.addEventListener("click",(e)=>{
    if(!e.target.closest(".lang-wrapper")){
      menu.classList.remove("active");
    }
  });
}

setLang(lang);

const form = document.getElementById("contactForm");

if(form){
  form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    try{
      const data = new FormData(form);

      const response = await fetch(form.action,{
        method:"POST",
        body:data,
        headers:{ "Accept":"application/json" }
      });

      if(response.ok){
        window.location.href = "bedankt.html";
      }else{
        alert("Er ging iets mis");
      }

    }catch(err){
      alert("Netwerk fout");
    }
  });
}

const sections = document.querySelectorAll("section");

function updateSections(){
  if(!sections.length) return;

  let bestSection = null;
  let bestVisible = 0;

  sections.forEach(section=>{
    const rect = section.getBoundingClientRect();
    const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

    if(visible > bestVisible){
      bestVisible = visible;
      bestSection = section;
    }
  });

  if(bestSection){
    sections.forEach(sec=>sec.classList.remove("active"));
    bestSection.classList.add("active");
  }
}

window.addEventListener("scroll", ()=>{
  updateSections();

  const scrollBottom = window.innerHeight + window.scrollY;
  const docHeight = document.body.offsetHeight;

  if(sections.length && scrollBottom >= docHeight - 50){
    sections.forEach(sec=>sec.classList.remove("active"));
    sections[sections.length - 1].classList.add("active");
  }
});









