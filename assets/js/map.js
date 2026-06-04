/**
 * OPM Branches Map Controller
 * Powered by Leaflet (OpenStreetMap) - 100% Free, High Performance, and Keyless.
 * Integrates Leaflet, dynamic coordinates mapping, info window custom styles,
 * and user geolocation-based routing and fallbacks.
 */

let leafletMap = null;
let leafletMarkers = {};
let userPosition = null;
let userMarker = null;

// Branches data corresponding to grid elements in branches.html
const branchesData = [
  // Rivers State (HQ Region)
  {
    id: "hq",
    name: "Doctor Jesus City (World HQ)",
    address: "Mbodo Aluu, Port Harcourt, Rivers State, Nigeria",
    lat: 4.9318,
    lng: 6.9172,
    category: "rivers",
    isHQ: true
  },
  {
    id: "ada-george",
    name: "OPM Ada George",
    address: "5 Ada George Road, Obio/Akpor, Port Harcourt, Rivers State, Nigeria",
    lat: 4.8219,
    lng: 6.9691,
    category: "rivers"
  },
  {
    id: "woji",
    name: "OPM Woji",
    address: "57 Ilom Street, Woji Town, Port Harcourt, Rivers State, Nigeria",
    lat: 4.8194,
    lng: 7.0601,
    category: "rivers"
  },
  {
    id: "ahoada",
    name: "OPM Ahoada",
    address: "11 Chief Agbokor Street, Ihudede Layout, Ahoada, Rivers State, Nigeria",
    lat: 5.0772,
    lng: 6.6475,
    category: "rivers"
  },
  {
    id: "bonny-island",
    name: "OPM Bonny Island",
    address: "Tuotamuno Close Akiama (Near Naval Base), Bonny, Rivers State, Nigeria",
    lat: 4.4447,
    lng: 7.1704,
    category: "rivers"
  },
  {
    id: "bori",
    name: "OPM Bori",
    address: "25 Barido Konya Lane, Off Hospital Road, Bori, Rivers State, Nigeria",
    lat: 4.6756,
    lng: 7.3629,
    category: "rivers"
  },
  {
    id: "rumukwurushi",
    name: "OPM Rumukwurushi",
    address: "Shell Pipeline, Rumuwogozor, Port Harcourt, Rivers State, Nigeria",
    lat: 4.8622,
    lng: 7.0514,
    category: "rivers"
  },
  {
    id: "eleme",
    name: "OPM Eleme",
    address: "Along East-West Road, Aleto, Eleme, Rivers State, Nigeria",
    lat: 4.7933,
    lng: 7.1264,
    category: "rivers"
  },
  {
    id: "oyigbo",
    name: "OPM Oyigbo",
    address: "Near Express Junction, Oyigbo, Rivers State, Nigeria",
    lat: 4.8837,
    lng: 7.1950,
    category: "rivers"
  },
  {
    id: "rumuji",
    name: "OPM Rumuji",
    address: "1 OPM Close, Along East-West Road, Rumuji, Rivers State, Nigeria",
    lat: 4.9754,
    lng: 6.7865,
    category: "rivers"
  },
  {
    id: "umuebele",
    name: "OPM Umuebele",
    address: "4 Ekpo Ephraim Ave, Umuebele, Rivers State, Nigeria",
    lat: 4.8728,
    lng: 7.1654,
    category: "rivers"
  },
  {
    id: "rumuigbo",
    name: "OPM Rumuigbo",
    address: "Near Obiwali Road, Rumuigbo, Port Harcourt, Rivers State, Nigeria",
    lat: 4.8436,
    lng: 6.9928,
    category: "rivers"
  },
  {
    id: "choba",
    name: "OPM Choba",
    address: "Near Uniport Main Gate, Choba, Port Harcourt, Rivers State, Nigeria",
    lat: 4.8931,
    lng: 6.9068,
    category: "rivers"
  },

  // Lagos Region
  {
    id: "isolo",
    name: "OPM Isolo (Lagos HQ)",
    address: "9 Olutosin Ajayi Street, Ajao Estate, Lagos, Nigeria",
    lat: 6.5298,
    lng: 3.3267,
    category: "lagos",
    isHQ: true
  },
  {
    id: "ejigbo",
    name: "OPM Ejigbo",
    address: "11 Kayode Street, Ejigbo, Lagos, Nigeria",
    lat: 6.5413,
    lng: 3.2986,
    category: "lagos"
  },
  {
    id: "ibeju-lekki",
    name: "OPM Ibeju Lekki",
    address: "Gbetu, Off Awoyaya New Road, Lagos, Nigeria",
    lat: 6.4789,
    lng: 3.7656,
    category: "lagos"
  },
  {
    id: "ikorodu",
    name: "OPM Ikorodu (Ijede/Owutu)",
    address: "Ijede and Owutu Locations, Ikorodu, Lagos, Nigeria",
    lat: 6.6194,
    lng: 3.5103,
    category: "lagos"
  },
  {
    id: "badagry",
    name: "OPM Badagry",
    address: "Off Torikoh Road, Badagry, Lagos, Nigeria",
    lat: 6.4316,
    lng: 2.8876,
    category: "lagos"
  },
  {
    id: "ojo",
    name: "OPM Ojo",
    address: "Near Ojo Cantonment, Lagos, Nigeria",
    lat: 6.4578,
    lng: 3.1896,
    category: "lagos"
  },
  {
    id: "festac",
    name: "OPM Festac",
    address: "7th Avenue, Festac Town, Lagos, Nigeria",
    lat: 6.4674,
    lng: 3.2798,
    category: "lagos"
  },

  // South-East & South-South
  {
    id: "aba-1",
    name: "OPM Aba 1",
    address: "17 Osisioma Road (Opposite Total), Aba, Abia State, Nigeria",
    lat: 5.1386,
    lng: 7.3375,
    category: "se-ss"
  },
  {
    id: "aba-2",
    name: "OPM Aba 2",
    address: "30 Compost Road, Ogbor Hill, Aba, Abia State, Nigeria",
    lat: 5.1147,
    lng: 7.3824,
    category: "se-ss"
  },
  {
    id: "umuahia",
    name: "OPM Umuahia",
    address: "3 Eze Iheoma Ave (Opposite Golden Guinea), Umuahia, Abia State, Nigeria",
    lat: 5.5267,
    lng: 7.4895,
    category: "se-ss"
  },
  {
    id: "ohanku-ndoki",
    name: "OPM Ohanku Ndoki",
    address: "Traditional Seat, Ohanku Ndoki, Abia State, Nigeria",
    lat: 4.9833,
    lng: 7.3833,
    category: "se-ss"
  },
  {
    id: "onitsha",
    name: "OPM Onitsha",
    address: "93 Limca Road, Nkpor, Onitsha, Anambra State, Nigeria",
    lat: 6.1360,
    lng: 6.8122,
    category: "se-ss"
  },
  {
    id: "nnewi",
    name: "OPM Nnewi",
    address: "Igwe Orizu Road, Nnewi, Anambra State, Nigeria",
    lat: 6.0156,
    lng: 6.9114,
    category: "se-ss"
  },
  {
    id: "asaba",
    name: "OPM Asaba",
    address: "37 Ezani Ave, Asaba, Delta State, Nigeria",
    lat: 6.1983,
    lng: 6.7289,
    category: "se-ss"
  },
  {
    id: "warri",
    name: "OPM Warri",
    address: "Lottiebiri Quarter, Ogbe-Ijaw, Warri, Delta State, Nigeria",
    lat: 5.5167,
    lng: 5.7500,
    category: "se-ss"
  },
  {
    id: "ughelli",
    name: "OPM Ughelli",
    address: "Unenerhie Town Junction, Ughelli, Delta State, Nigeria",
    lat: 5.5002,
    lng: 6.0006,
    category: "se-ss"
  },
  {
    id: "uyo-ikot",
    name: "OPM Uyo/Ikot Ekpene",
    address: "Locations in Uyo and Ikot Ekpene, Akwa Ibom State, Nigeria",
    lat: 5.0333,
    lng: 7.9266,
    category: "se-ss"
  },
  {
    id: "calabar",
    name: "OPM Calabar",
    address: "8 Kufre Street, Calabar, Cross River State, Nigeria",
    lat: 4.9757,
    lng: 8.3417,
    category: "se-ss"
  },

  // Northern & Western Nigeria
  {
    id: "abuja",
    name: "OPM Abuja (FCT)",
    address: "Bwari, Gwagwalada, and Nyanya Locations, Abuja, Nigeria",
    lat: 9.0765,
    lng: 7.3986,
    category: "north-west"
  },
  {
    id: "kano",
    name: "OPM Kano",
    address: "11 Abeokuta Road, Sabon Gari, Kano, Nigeria",
    lat: 12.0022,
    lng: 8.5920,
    category: "north-west"
  },
  {
    id: "kogi",
    name: "OPM Kogi",
    address: "Okene (Sunshine School Eika), Kogi State, Nigeria",
    lat: 7.5516,
    lng: 6.2416,
    category: "north-west"
  },
  {
    id: "edo",
    name: "OPM Edo",
    address: "Multiple Locations, Benin City, Edo State, Nigeria",
    lat: 6.3350,
    lng: 5.6037,
    category: "north-west"
  },

  // International Stations
  {
    id: "houston",
    name: "OPM Houston (USA)",
    address: "12355 Fondren Rd, Houston, TX 77063, USA",
    lat: 29.6508,
    lng: -95.5015,
    category: "intl"
  },
  {
    id: "london",
    name: "OPM London (UK)",
    address: "Regional Outreach Center, London, UK",
    lat: 51.5074,
    lng: -0.1278,
    category: "intl"
  },
  {
    id: "johannesburg",
    name: "OPM Johannesburg (SA)",
    address: "Yeoville, Johannesburg, South Africa",
    lat: -26.1772,
    lng: 28.0539,
    category: "intl"
  },
  {
    id: "dubai",
    name: "OPM Dubai (UAE)",
    address: "United Arab Emirates Outreach, Dubai, UAE",
    lat: 25.2048,
    lng: 55.2708,
    category: "intl"
  },
  {
    id: "accra",
    name: "OPM Accra (Ghana)",
    address: "Accra, Ghana Outreach",
    lat: 5.6037,
    lng: -0.1870,
    category: "intl"
  },
  {
    id: "germany",
    name: "OPM International Germany",
    address: "Turkey, Germany, and Benin Republic Outreach Centers",
    lat: 51.1657,
    lng: 10.4515,
    category: "intl"
  }
];

// Initialize Leaflet Map
function initLeafletMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  // Initialize Leaflet Map centered on Port Harcourt HQ
  leafletMap = L.map(mapElement, {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([4.9318, 6.9172], 7);

  // Apply clean monochrome OpenStreetMap tiles matching site style
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(leafletMap);

  // Plot Leaflet Markers
  branchesData.forEach(branch => {
    // Use Leaflet's custom DivIcon for beautiful minimalist styling
    const customIcon = L.divIcon({
      className: 'custom-leaflet-pin',
      html: `<div style="background-color: ${branch.isHQ ? '#D4AF37' : '#000000'}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 8px rgba(0,0,0,0.3);"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    const marker = L.marker([branch.lat, branch.lng], { icon: customIcon }).addTo(leafletMap);
    
    leafletMarkers[branch.id] = marker;

    marker.on("click", () => {
      selectBranch(branch, true);
    });
  });

  // Always request user's exact geolocation on load
  requestUserLocation();

  bindCardsToMap();
}

// Request User's Exact Geolocation
function requestUserLocation() {
  // 1. Try secure HTML5 browser Geolocation first
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log("User exact browser location acquired:", userPosition);
        plotUserMarker(userPosition);
      },
      (error) => {
        console.warn("Browser geolocation failed or denied. Trying IP-based fallback...", error);
        fallbackToIpLocation();
      },
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 0
      }
    );
  } else {
    console.warn("Browser geolocation not supported. Trying IP-based fallback...");
    fallbackToIpLocation();
  }
}

// IP-based Geolocation Fallback (Works even in non-secure HTTP contexts!)
function fallbackToIpLocation() {
  fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {
      if (data && data.latitude && data.longitude) {
        userPosition = {
          lat: data.latitude,
          lng: data.longitude
        };
        console.log("User approximate IP location acquired:", userPosition);
        plotUserMarker(userPosition);
      }
    })
    .catch(err => {
      console.warn("IP geolocation fallback also failed:", err);
    });
}

// Plot User's pulsating position marker
function plotUserMarker(pos) {
  if (!leafletMap) return;

  // Inject pulsating keyframes style dynamically
  if (!document.getElementById("pulsate-style")) {
    const style = document.createElement("style");
    style.id = "pulsate-style";
    style.innerHTML = `
      @keyframes pulsate {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.3); box-shadow: 0 0 15px rgba(0, 122, 255, 0.8); }
        100% { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  const userIcon = L.divIcon({
    className: 'user-location-pin',
    html: `<div style="background-color: #007AFF; width: 14px; height: 14px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,122,255,0.6); animation: pulsate 2s infinite ease-out; cursor: pointer;"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });

  if (userMarker) {
    userMarker.setLatLng([pos.lat, pos.lng]);
  } else {
    userMarker = L.marker([pos.lat, pos.lng], { icon: userIcon }).addTo(leafletMap);
    userMarker.bindPopup("<strong style='font-family: \"Inter\", sans-serif; font-size: 11px;'>Your Current Location</strong>");
  }
}

// Function to select and focus on a specific branch
function selectBranch(branch, zoomIn = false) {
  // Highlight corresponding card in the list
  const cards = document.querySelectorAll(".branch-card");
  cards.forEach(card => card.classList.remove("active"));

  // Find card matching this branch
  const targetCard = Array.from(cards).find(
    card => card.getAttribute("data-id") === branch.id
  );

  if (targetCard) {
    targetCard.classList.add("active");
    // Smooth scroll card into list viewport center on desktop/mobile
    targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // Set InfoWindow Content with premium typography & buttons
  const isSpecialHQ = branch.isHQ ? `<span class="badge-hq" style="display:inline-block; font-size:10px; font-weight:700; color:#D4AF37; margin-bottom:6px; letter-spacing:1px; text-transform:uppercase;">★ Headquarters Station</span>` : '';
  const contentString = `
    <div class="map-infowindow" style="padding: 5px; max-width: 240px; font-family: 'Inter', sans-serif;">
      ${isSpecialHQ}
      <h4 style="margin: 0 0 6px 0; font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; color: #000000; line-height: 1.3;">${branch.name}</h4>
      <p style="margin: 0 0 12px 0; font-size: 11px; color: #555555; line-height: 1.4;">${branch.address}</p>
      <button onclick="navigateToBranch(${branch.lat}, ${branch.lng}, '${escapeHtml(branch.name)}')" 
              class="infowindow-nav-btn" 
              style="display: block; width: 100%; text-align: center; background: #000000; color: #FFFFFF; font-weight: 700; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; transition: background 0.2s ease;">
        Get Navigation Directions
      </button>
    </div>
  `;

  const lMarker = leafletMarkers[branch.id];
  if (lMarker) {
    lMarker.bindPopup(contentString).openPopup();
    leafletMap.panTo(lMarker.getLatLng());
    if (zoomIn) {
      const targetZoom = branch.category === "intl" ? 6 : 13;
      leafletMap.setZoom(targetZoom);
    }
  }
}

// Bind HTML Branch cards clicks to Map Focus
function bindCardsToMap() {
  const cards = document.querySelectorAll(".branch-card");

  cards.forEach(card => {
    // Extract branch ID from card attribute
    const branchId = card.getAttribute("data-id");
    const branch = branchesData.find(b => b.id === branchId);

    if (branch) {
      // Setup card click event
      card.addEventListener("click", (e) => {
        // Prevent click activation if user specifically clicked a child navigation button
        if (e.target.closest(".btn-navigate")) {
          return;
        }
        
        selectBranch(branch, true);

        // Smooth scroll map container into view on mobile
        if (window.innerWidth < 768) {
          const mapContainer = document.querySelector(".map-container");
          if (mapContainer) {
            mapContainer.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });

      // Add elegant 'Get Directions' dynamic action button dynamically to cards
      const cardBody = card.querySelector("div");
      if (cardBody && !card.querySelector(".btn-navigate")) {
        const btnNav = document.createElement("button");
        btnNav.className = "btn-navigate";
        btnNav.innerHTML = `
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          Get Directions
        `;
        btnNav.style.cssText = `
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 15px;
          padding: 8px 16px;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.8rem;
          color: var(--text-dark);
          cursor: pointer;
          transition: all 0.2s ease;
        `;
        
        btnNav.addEventListener("mouseenter", () => {
          btnNav.style.borderColor = "var(--primary-color)";
          btnNav.style.background = "var(--primary-color)";
          btnNav.style.color = "var(--text-light)";
        });

        btnNav.addEventListener("mouseleave", () => {
          btnNav.style.borderColor = "var(--border-color)";
          btnNav.style.background = "transparent";
          btnNav.style.color = "var(--text-dark)";
        });

        btnNav.addEventListener("click", (evt) => {
          evt.stopPropagation();
          navigateToBranch(branch.lat, branch.lng, branch.name);
        });

        cardBody.appendChild(btnNav);
      }
    }
  });
}

// Use User Geolocation for Google Maps Directions Routing
function navigateToBranch(destLat, destLng, destName) {
  let origin = "My+Location";
  if (userPosition) {
    origin = `${userPosition.lat},${userPosition.lng}`;
  }
  
  // Note: On mobile phones (both iOS and Android), providing "origin=My+Location" triggers 
  // the device's native, high-accuracy OS-level hardware GPS chip directly in the Google Maps App,
  // bypassing all browser sandboxes, network blocks, or HTTP/HTTPS web security policies.
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destLat},${destLng}&travelmode=driving`;
  window.open(mapsUrl, "_blank");
}

// Utility to escape HTML entities in name strings to prevent XSS issues inside templates
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Self-loading Leaflet engine immediately
(function loadLeaflet() {
  // Load Leaflet Stylesheet
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
  document.head.appendChild(link);

  // Load Leaflet JS
  const script = document.createElement("script");
  script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  script.onload = () => {
    initLeafletMap();
  };
  document.head.appendChild(script);
})();
