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
    hero_subtitle: "تتقسيط فاخر وتنقل آمن",
    hero_button: "عرض تقسيط",
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
    halal_usage: "الاستخدام بدل الملكية",
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
    if(translations[l]?.[key]){
      el.textContent = translations[l][key];
    }
  });

  document.querySelectorAll("[data-key-placeholder]").forEach(el=>{
    const key = el.dataset.keyPlaceholder;
    if(translations[l]?.[key]){
      el.placeholder = translations[l][key];
    }
  });

  document.body.dir = (l === "ar") ? "rtl" : "ltr";

  if(flag) flag.textContent = flags[l];

  localStorage.setItem("lang", l);
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
