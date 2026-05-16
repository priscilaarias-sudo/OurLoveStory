// CONFIGURACIÓN DE DATOS
const characterData = [
    {
        id: 1,
        name: "Mauro",
        class: "Guerreror",
        stats: { affinity: 95, kindness: 99, humor: 85 },
        likes: "Valorant, Ramen, Noches de stream",
        img: "imagenes/Mauro2.jpeg", 
        lore: "Un guerrero veterano apodado el Escudo de las Profundidades, cuya espada y pesada armadura de bronce están consagradas a proteger a su esposa, la maga elfa Priscila, en su peligrosa búsqueda de conocimientos prohibidos. Mientras Priscila se adentra en el estudio de las artes arcanas en las mazmorras más oscuras del reino, Mauro despeja las amenazas de las sombras con un estilo de combate firme y letal, actuando como la barrera física que le permite a ella conjurar sin interrupciones. "
    },
    {
        id: 2,
        name: "Priscila",
        class: "Mago",
        stats: { affinity: 100, kindness: 90, humor: 70 },
        likes: "Totoro, Té de jazmín, Paisajes pastel",
        img: "imagenes/Priscila2.jpeg",
        lore: "La Erudita de los Subterráneos, esta joven elfa es la encargada de catalogar los secretos mágicos prohibidos en las mazmorras de la vieja academia. Armada con su báculo botánico y un cinturón lleno de pociones destiladas por ella misma, Lyra usa sus anteojos encantados para descifrar antiguos glifos que otros confunden con simples grietas. A pesar del peligro de las celdas oscuras, su curiosidad es más fuerte que su miedo, y recorre los calabozos buscando pergaminos perdidos que puedan salvar su reino de una antigua maldición."
    },
    {
        id: 3,
        name: "Sushi",
        class: "Paladino",
        stats: { affinity: 88, kindness: 95, humor: 92 },

        img: "imagenes/Sushi2.jpeg", 
        lore: "Un paladino de la orden del Maullido Solar Criado en los establos reales, su nobleza natural lo llevó a ganar la confianza del rey felino y a portar la legendaria armadura de placas grabada. Armado con su escudo solar y su espada de fidelidad, Bigotes patrulla incansablemente los calabozos oscuros, protegiendo a los inocentes de las criaturas de la noche mientras busca el tesoro perdido de su orden. "
    },
    {
        id: 4,
        name: "Lola",
        class: "Asesino",
        stats: { affinity: 99, kindness: 88, humor: 95 },
        likes: "Nuevas aventuras, Playlist compartidas",
        img: "imagenes/Lola.jpeg",
        lore: "Una letal asesina de la orden de la Sombra de Jade dotada de un sigilo sobrenatural y agilidad felina, se infiltró en la fortaleza del Archiduque Malacor para detener sus oscuros planes de dominación; tras evadir guardias y desactivar un peligroso vórtice de magia rúnica verde, logró robar un amuleto ancestral de poder incalculable, escapando audazmente entre el humo y las sombras para convertirse, muy a su pesar, en la inesperada guardiana del destino de los Nueve Reinos."
    },
    {
        id: 5,
        name: "Grisin",
        class: "Bardo",
        stats: { affinity: 92, kindness: 98, humor: 80 },
        likes: "Caminatas largas, Atardeceres, Flores",
        img: "imagenes/Grisin.jpeg",
        lore: "Un bardo viajero que recorre tabernas, castillos y ruinas antiguas recolectando historias, secretos y canciones olvidadas. Con su laúd encantado puede inspirar a sus aliados y desorientar enemigos mediante melodías mágicas. Aunque prefiere resolver conflictos con ingenio y carisma, siempre lleva una daga como último recurso. Su mayor objetivo es encontrar un antiguo tesoro escondido en las ruinas de un reino perdido y convertir esa aventura en la canción más legendaria de todas."
    },
    {
        id: 6,
        name: "Luna",
        class: "Brujo",
        stats: { affinity: 85, kindness: 80, humor: 100 },
        likes: "Mantitas, Días de lluvia, Cine en casa",
        img: "imagenes/Luna.jpeg",
        lore: "Una bruja errante que domina antiguos hechizos de ilusión, sombras y fuego arcano. Recorre bibliotecas olvidadas y torres en ruinas buscando grimorios prohibidos para ampliar su conocimiento. Aunque su apariencia impone misterio, suele ayudar a viajeros perdidos a cambio de información o ingredientes raros. Su objetivo es descubrir un antiguo secreto mágico oculto tras los muros de una academia abandonada."
    }
];

const lettersData = [
    { month: "Mes 1", title: "Te amo", text: "Parece mentira que ya haya pasado un mes desde que decidimos empezar este viaje juntos. En este poco tiempo me has demostrado lo increíble que eres y no puedo evitar sonreír cada vez que pienso en nosotros. Gracias por este primer mes lleno de risas y complicidad; es solo el comienzo. ", date: "Septiembre 2025" },
    { month: "Mes 2", title: "Te amo", text: "Dos meses a tu lado y cada día descubro algo nuevo que me encanta de ti. Me fascina cómo logras hacerme sentir tan cómoda y feliz con solo una mirada o un abrazo. Eres el refugio al que siempre quiero volver y mi lugar favorito en el mundo.", date: "Octubre 2025" },
    { month: "Mes 3", title: "Te amo", text: "Tres meses compartiendo momentos, confidencias y un montón de historias. Me encanta ver cómo lo nuestro va creciendo poco a poco, con raíces fuertes y bonitas. Gracias por regalarme tu tiempo, tu cariño y por hacer que estos noventa días hayan sido tan especiales.", date: "Noviembre 2025" },
     { month: "Mes 4", title: "Te amo", text: "Cuatro meses con mi persona favorita. Estar contigo se siente tan natural y mágico a la vez que a veces olvido el tiempo. Valoro muchísimo cada conversación, cada tontería de la que nos reímos y la forma tan única que tienes de cuidarme.", date: "Diciembre 2025" },
    { month: "Mes 5", title: "Te amo", text: "¡Ya van cinco meses! Siento que cada día a tu lado es una pequeña aventura y no cambiaría por nada del mundo todo lo que hemos vivido hasta ahora. Gracias por ser mi compañero de risas, de planes improvisados y de vida. ¡Que sigan sumando los meses!", date: "Enero 2026" },
    { month: "Mes 6", title: "Te amo", text: "Medio año juntos, mi amor. Seis meses llenos de recuerdos inolvidables, de apoyarnos en todo y de construir algo hermoso día con día. Gracias por ser esa luz constante en mi vida y por hacerme tan feliz durante todo este tiempo. Te quiero muchísimo.", date: "Febrero 2026" },
     { month: "Mes 7", title: "Te amo", text: "Siete meses y mi amor por ti no hace más que crecer. Me encanta saber que, no importa qué tan complicado sea el día, siempre puedo contar contigo para sacarme una sonrisa. Eres mi calma, mi alegría y la razón de mis pensamientos más bonitos.", date: "Marzo 2026" },
    { month: "Mes 8", title: "Te amo", text: "Ocho meses compartiendo sueños, metas y un montón de momentos que ya se quedaron guardados en mi corazón para siempre. Me hace muy feliz ver cómo encajamos tan bien y cómo construimos nuestro propio mundo paso a pasito. Gracias por ser el mejor novio.", date: "Abril 2026" },
    { month: "Mes 9", title: "Te amo", text: "Nueve meses a tu lado y sigo sintiendo la misma emoción que el primer día, pero con un amor mucho más profundo. Eres una parte fundamental de mi vida, mi confidente y mi amor. Gracias por estos meses perfectos; estoy lista para todos los que vengan después.", date: "Mayo 2026" },
    // Agrega hasta el mes 9...
];

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const introScreen = document.getElementById('intro-screen');
    const mainUI = document.getElementById('main-ui');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            introScreen.classList.add('hidden');
            setTimeout(() => {
                introScreen.style.display = 'none';
                mainUI.style.display = 'block';
                renderSection('char-db'); 
            }, 800);
        });
    }

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSection(btn.dataset.target);
        });
    });
});

function renderSection(section) {
    const contentDisplay = document.getElementById('content-display');
    const titleElement = document.getElementById('window-title');
    if (!contentDisplay) return;

    contentDisplay.innerHTML = '';
    
    switch(section) {
        case 'char-db':
            titleElement.innerText = "Personajes";
            loadCharacters();
            break;
        case 'achievements':
            titleElement.innerText = "Logros";
            loadAchievements();
            break;
        case 'gallery':
            titleElement.innerText = "Galeria";
            loadGallery();
            break;
       
        case 'music': // <-- FALTA ESTA LÍNEA
            titleElement.innerText = "Musica"; // <-- FALTA ESTA LÍNEA
            loadMusic(); // <-- FALTA ESTA LÍNEA
            break; // <-- FALTA ESTA LÍNEA
        case 'secret-ending':
            titleElement.innerText = "Minijuego";
            loadSecretEnding();
            break;
        default:
            contentDisplay.innerHTML = "<h2>Sección en construcción...</h2>";
    case 'letters':
    titleElement.innerText = "Cartas";
    loadLetters();
    break;

    case 'memo':
    titleElement.innerText = "Notas";
    loadMemo();
    break;
        }

}
// --- LOGROS ORIGINALES RECUPERADOS ---
function loadAchievements() {
    const contentDisplay = document.getElementById('content-display');
    const achievements = [
        { title: "Tutorial Completed", desc: "Nuestra primera cita sin morir de nervios.", rarity: "Common", color: "#84fab0", icon: "🌱" },
        { title: "9 Months Win Streak", desc: "Alcanzamos el hito de los 9 meses juntos.", rarity: "Legendary", color: "#ffd700", icon: "✨" },
        { title: "Deep Talk Master", desc: "Desbloqueado tras noches enteras de charla.", rarity: "Epic", color: "#a0c4ff", icon: "💬" },
        { title: "Food Explorer", desc: "Por todas las cenas y nuevos sabores probados.", rarity: "Rare", color: "#ff85a2", icon: "🍕" },
        { title: "First Boss Defeated", desc: "Superamos nuestro primer desacuerdo con éxito.", rarity: "Legendary", color: "#ffcc33", icon: "⚔️" },
        { title: "The Best Player 2", desc: "Elegirte cada día fue mi mejor jugada.", rarity: "Mythic", color: "#ffffff", icon: "👑" }
    ];

    let html = '<div class="achievements-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; padding: 20px; max-height: 70vh; overflow-y: auto;">';
    achievements.forEach(ach => {
        html += `
            <div class="ach-card" style="background: rgba(255, 255, 255, 0.1); border: 2px solid ${ach.color}; border-radius: 15px; padding: 15px; display: flex; align-items: center; gap: 15px; box-shadow: 0 0 10px ${ach.color}44;">
                <div style="min-width: 60px; height: 60px; background: ${ach.color}; border-radius: 12px; display: flex; justify-content: center; align-items: center; font-size: 28px; color: #1a1b3a;">${ach.icon}</div>
                <div>
                    <h4 style="margin:0; color:${ach.color}; font-family: 'Fredoka One'; font-size: 1.1em;">${ach.title}</h4>
                    <p style="margin:4px 0; font-size:0.85em; color: #fff; opacity:0.9;">${ach.desc}</p>
                    <span style="font-size: 0.65em; font-weight: bold; text-transform: uppercase; background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 10px; color: ${ach.color};">${ach.rarity}</span>
                </div>
            </div>`;
    });
    contentDisplay.innerHTML = html + '</div>';
}

// --- PERSONAJES CON TU DISEÑO ORIGINAL ---
function loadCharacters() {
    const contentDisplay = document.getElementById('content-display');
    let html = '<div class="character-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px; max-height: 70vh; overflow-y: auto;">';
    
    characterData.forEach(char => {
        html += `
            <div class="char-card" onclick="openModal(${char.id})" style="cursor:pointer; background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 20px; display: flex; flex-direction: column; align-items: center; transition: transform 0.3s ease;">
                <img src="${char.img}" style="width:100%; height:180px; border-radius:15px; object-fit:cover; border: 3px solid white; margin-bottom: 15px;">
                <div style="width: 100%;">
                    <h3 style="font-family: 'Fredoka One'; color:#ff85a2; font-size: 1.2em; margin: 0;">${char.name}</h3>
                    <p style="font-size:0.7em; color: #ffd700; margin-bottom: 10px;">LEVEL 9 • ${char.class}</p>
                    <div style="height:6px; background:rgba(0,0,0,0.3); border-radius:10px; margin-bottom:5px;">
                        <div style="width:${char.stats.affinity}%; height:100%; background:linear-gradient(90deg, #ff85a2, #ffacc1); border-radius:10px;"></div>
                    </div>
                    <button style="width: 100%; margin-top: 10px; background: #ff85a2; border: none; border-radius: 8px; color: white; padding: 5px; font-family: 'Fredoka One'; font-size: 0.8em;">VER FICHA</button>
                </div>
            </div>`;
    });
    contentDisplay.innerHTML = html + '</div>';
}

function loadGallery() {
    const contentDisplay = document.getElementById('content-display');
    
    // AQUÍ AGREGÁ TODAS LAS QUE QUIERAS
    // Solo fijate bien en el "type": "image" o "video"
    const media = [
        { url: "imagenes/EcoParque.jpeg", caption: "Gracias por mostrarme parte de tu infancia", type: "image" },
        { url: "videos/GatoGordo.mp4", caption: "La noche perfecta", type: "video" },
        { url: "imagenes/Caminito.jpeg", caption: "Amo hacerte compañia en el trabajo", type: "image" },
        { url: "imagenes/Dormir.jpeg", caption: "Primera vez durmiendo juntitos en mi casa !", type: "image" },
        { url: "imagenes/Ramo.jpeg", caption: "Gracias por darme mi primer ramito de flores :c <3", type: "image" },
        { url: "imagenes/PuertoMadero.jpeg", caption: "Vacaciones !!!", type: "image" }
        // Podés seguir agregando líneas aquí abajo...
    ];

    let html = '<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px; max-height: 70vh; overflow-y: auto;">';
    
    media.forEach(item => {
        const randomRot = (Math.random() * 6 - 3).toFixed(2);
        
        let mediaHTML = "";
        if (item.type === "video") {
            // El video se reproduce solo al pasar el mouse (hover)
            mediaHTML = `<video src="${item.url}" style="width: 100%; height: 150px; object-fit: cover; border: 1px solid #ddd;" muted loop onmouseover="this.play()" onmouseout="this.pause()"></video>`;
        } else {
            mediaHTML = `<img src="${item.url}" style="width: 100%; height: 150px; object-fit: cover; border: 1px solid #ddd;">`;
        }

        html += `
            <div class="photo-card" style="background: white; padding: 10px 10px 30px 10px; border-radius: 5px; box-shadow: 0 10px 20px rgba(0,0,0,0.3); transform: rotate(${randomRot}deg); transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='scale(1.1) rotate(0deg)'; this.style.zIndex='100';" onmouseout="this.style.transform='rotate(${randomRot}deg)'; this.style.zIndex='1';">
                ${mediaHTML}
                <p style="font-family: 'Nanum Pen Script', cursive; color: #333; text-align: center; margin-top: 10px; font-size: 1.2em;">${item.caption}</p>
            </div>`;
    });
    contentDisplay.innerHTML = html + '</div>';
}

// --- FICHA DE PERSONAJE (MODAL) RECUPERADA ---
function openModal(id) {
    const char = characterData.find(c => c.id === id);
    const modal = document.getElementById('char-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div style="text-align: center; color: white;">
            <h2 style="font-family: 'Fredoka One'; color: #ff85a2; font-size: 2.2em; margin-bottom: 10px;">${char.name}</h2>
            <img src="${char.img}" style="width:180px; height:180px; border-radius:50%; border: 6px solid #fff; object-fit: cover; box-shadow: 0 0 20px rgba(255,133,162,0.6); margin-bottom:15px;">
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 20px; text-align: left; border: 1px solid rgba(255,255,255,0.2);">
                <p><strong>✨ CLASE:</strong> ${char.class}</p>
                <p><strong>💖 LORE:</strong> ${char.lore}</p>
                
                <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.2); margin: 15px 0;">
                <p><strong>ESTADÍSTICAS:</strong> Afinidad ${char.stats.affinity}% | Humor ${char.stats.humor}%</p>
            </div>
        </div>`;
    modal.style.display = "flex";
}

function loadMemo() {
    
    const contentDisplay = document.getElementById('content-display');

    
    
    
    const notes = [
    { text: "Te amo con todo mi corazon.", color: "#fff9c4", tag: "<3" },
    { text: "¡ Una estrellita al mejor novio !✨", color: "#ffccbc", tag: "<3" },
    { text: "Mi corazon hace tun tun tun (sahur) cuano te veo", color: "#c8e6c9", tag: "<3" },
    { text: "A tu lado... todo es mas bonito...", color: "#bbdefb", tag: "<3" },
    { text: "No olvides tomar aguita", color: "#f8bbd0", tag: "<3" },
    { text: "¿Quien te ama mucho? Po yo!", color: "#e1bee7", tag: "<3" },
    // --- NUEVAS NOTAS AGREGADAS ---
    { text: "Alegras todos y cada uno de mis dias", color: "#fff9c4", tag: "<3" },
    { text: "Tu felicidad es mi prioridad número 1. 🥇", color: "#ffccbc", tag: "<3" },
    { text: "Tus abracitos y besitos siempre llenan mi energia", color: "#c8e6c9", tag: "<3" },
    { text: "Con tal de verte haria lo que fuera", color: "#f8bbd0", tag: "<3" },
    { text: "cupon valido para darnos un besito luego de leer esto!!!!!!!", color: "#bbdefb", tag: "<3" },
    { text: "9 meses juntos... ¡y vamos por el nivel 10mo! 🚩", color: "#e1bee7", tag: "<3" }
];

   // Busca esta línea dentro de loadMemo() y reemplázala:
let html = `
    <div class="memo-container" style="
        display: grid; 
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); 
        gap: 25px; 
        padding: 30px; 
        height: 450px; /* Altura fija para que aparezca el scroll */
        overflow-y: auto; /* Activa el scroll vertical */
        overflow-x: hidden; /* Evita que se mueva de costado */
        perspective: 1000px;
    ">`;

    notes.forEach(note => {
        const randomRot = (Math.random() * 10 - 5).toFixed(1); // Rotación entre -5 y 5 grados
        const randomSkew = (Math.random() * 2 - 1).toFixed(1);

        html += `
            <div class="post-it-note" style="
                background-color: ${note.color};
                padding: 25px 15px 15px 15px;
                color: #333;
                font-family: 'Nanum Pen Script', cursive;
                font-size: 1.5em;
                box-shadow: 8px 8px 15px rgba(0,0,0,0.2);
                transform: rotate(${randomRot}deg) skew(${randomSkew}deg);
                position: relative;
                min-height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                transition: all 0.3s ease;
                border-radius: 2px;
                cursor: default;
            " onmouseover="this.style.transform='scale(1.05) rotate(0deg)'; this.style.zIndex='10';" 
               onmouseout="this.style.transform='rotate(${randomRot}deg) skew(${randomSkew}deg)'; this.style.zIndex='1';">
                
                <!-- El Pin/Chincheta -->
                <div style="
                    position: absolute; 
                    top: -10px; 
                    left: 50%; 
                    transform: translateX(-50%);
                    width: 20px; 
                    height: 20px; 
                    background: radial-gradient(circle, #ff4d4d, #b30000); 
                    border-radius: 50%;
                    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
                "></div>

                <div style="line-height: 1.2; padding-top: 10px;">${note.text}</div>
                
                <div style="
                    text-align: right; 
                    font-size: 0.6em; 
                    font-family: 'Fredoka One'; 
                    color: rgba(0,0,0,0.4); 
                    letter-spacing: 1px;
                ">#${note.tag}</div>
            </div>`;
    });

    html += `</div>`;
    contentDisplay.innerHTML = html;
}
function loadSecretEnding() {
    const contentDisplay = document.getElementById('content-display');
    contentDisplay.innerHTML = '<div style="padding:40px; text-align:center;"><h2 id="typewriter" style="color:#ff85a2; font-family:Fredoka One;"></h2></div>';
    const text = "Eres el mejor regalo que me dio la vida. Gracias por estos 9 meses. Te amo. ♡";
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// --- LÓGICA PARA CERRAR EL MODAL ---

// Esta función cierra el modal al tocar la X o fuera de la tarjeta
function closeModal() {
    const modal = document.getElementById('char-modal');
    modal.style.display = "none";
}

// Escuchamos el clic en cualquier parte de la ventana
window.onclick = function(event) {
    const modal = document.getElementById('char-modal');
    // Si el usuario hace clic en el fondo oscuro (el modal) o en el botón cerrar
    if (event.target == modal || event.target.className == 'close-modal') {
        modal.style.display = "none";
    }
}

let currentSongIndex = 0;
const cancionesDedicadas = [
    { id: "sDMxQF18yvA", title: "Chachachá" },
    { id: "nyuo9-OjNNg", title: "I Wanna Be Yours" },
    { id: "cNGjD0VG4R8", title: "Perfect" },
   { id: "Qq_c8y9tNFI", title: "The Darkness At The Heart Of My Love" },
    { id: "mjacAmhFOYc", title: "Me gusta" }, 
    { id: "15Me8nszoN0", title: "Bonsai" }
];

function loadMusic() {
    const contentDisplay = document.getElementById('content-display');
    renderMusicSection();
}

function renderMusicSection() {
    const contentDisplay = document.getElementById('content-display');
    const song = cancionesDedicadas[currentSongIndex];

    contentDisplay.innerHTML = `
        <div style="padding: 20px; text-align: center; color: white;">
            <!-- SECCIÓN 1: SOUNDTRACK -->
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 15px; margin-bottom: 30px; border: 1px dashed #ff85a2;">
                <h4 style="font-family: 'Fredoka One'; color: #ff85a2; margin-bottom: 10px;">🎵 BGM: POKÉMON SOUNDTRACK</h4>
                <div style="display: flex; justify-content: center; gap: 10px;">
                    <button onclick="document.getElementById('bg-music').play()" style="background:#84fab0; border:none; padding:5px 15px; border-radius:5px; cursor:pointer;">ON</button>
                    <button onclick="document.getElementById('bg-music').pause()" style="background:#ff85a2; border:none; padding:5px 15px; border-radius:5px; cursor:pointer;">OFF</button>
                </div>
            </div>

            <hr style="opacity: 0.2; margin-bottom: 20px;">

            <!-- SECCIÓN 2: DEDICATORIAS -->
            <h4 style="font-family: 'Fredoka One'; color: #ff85a2;">💖 MIS DEDICATORIAS (${currentSongIndex + 1}/6)</h4>
            <p style="font-size: 0.9em; margin-bottom: 15px;">${song.title}</p>
            
            <div style="position: relative; display: inline-block; width: 100%; max-width: 400px;">
                <iframe width="100%" height="225" src="https://www.youtube.com/embed/${song.id}" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen style="border-radius: 15px; border: 3px solid white;">
                </iframe>
            </div>

            <!-- FLECHITAS -->
            <div style="margin-top: 20px; display: flex; justify-content: center; gap: 40px; align-items: center;">
                <button onclick="changeDedicada(-1)" style="background: none; border: none; color: #ff85a2; font-size: 2em; cursor: pointer;">❮</button>
                <button onclick="changeDedicada(1)" style="background: none; border: none; color: #ff85a2; font-size: 2em; cursor: pointer;">❯</button>
            </div>
        </div>
    `;
}

function changeDedicada(step) {
    currentSongIndex += step;
    if (currentSongIndex < 0) currentSongIndex = cancionesDedicadas.length - 1;
    if (currentSongIndex >= cancionesDedicadas.length) currentSongIndex = 0;
    
    // Pausamos la música de fondo automáticamente si ella le da play a un video
    document.getElementById('bg-music').pause();
    renderMusicSection();
}

function loadLetters() {
    const contentDisplay = document.getElementById('content-display');
    let html = '<div class="letters-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px; max-height: 70vh; overflow-y: auto;">';
    
    lettersData.forEach((letter, index) => {
        html += `
            <div class="letter-card" onclick="openLetter(${index})" style="
                background: #fff0f3; 
                border: 2px dashed #ff85a2; 
                border-radius: 10px; 
                padding: 20px; 
                text-align: center; 
                cursor: pointer; 
                position: relative;
                transition: transform 0.3s;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            " onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="font-size: 40px; margin-bottom: 10px;">✉️</div>
                <h4 style="font-family: 'Fredoka One'; color: #ff85a2; margin: 0;">${letter.month}</h4>
                <p style="font-size: 0.7em; color: #777;">${letter.date}</p>
                <div style="margin-top: 10px; color: #ff85a2; font-size: 1.2em;">❤</div>
            </div>`;
    });
    contentDisplay.innerHTML = html + '</div>';
}

function openLetter(index) {
    const letter = lettersData[index];
    const modal = document.getElementById('char-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div style="
            background: #fff; 
            padding: 30px; 
            border-radius: 5px; 
            color: #333; 
            font-family: 'Nanum Pen Script', cursive; 
            font-size: 1.5em; 
            line-height: 1.4;
            box-shadow: inset 0 0 50px rgba(0,0,0,0.05);
            min-height: 300px;
            position: relative;
        ">
            <h2 style="color: #ff85a2; font-family: 'Fredoka One'; font-size: 1.2em; text-align: center;">${letter.title}</h2>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            <p style="white-space: pre-wrap;">${letter.text}</p>
            <div style="text-align: right; margin-top: 30px; color: #ff85a2;">— Con amor, Tu Player 1 ♡</div>
        </div>
    `;
    modal.style.display = "flex";
}

// Variables para el mini juego
let bossClicks = 0;
const maxHP = 15; // Cantidad de clics para ganar

function loadSecretEnding() {
    const contentDisplay = document.getElementById('content-display');
    bossClicks = 0; // Reiniciar clics al entrar

    contentDisplay.innerHTML = `
        <div id="final-boss-container" style="text-align: center; padding: 30px; color: white; animation: fadeIn 1s;">
            <h2 style="font-family: 'Fredoka One'; color: #ff4d4d; text-shadow: 0 0 10px rgba(255,77,77,0.5);">⚠️ FINAL BOSS DETECTED ⚠️</h2>
            <p style="font-size: 0.8em; margin-bottom: 20px; opacity: 0.8;">¡DERROTA AL CORAZÓN PARA DESBLOQUEAR EL FINAL!</p>

            <!-- Barra de Vida del Boss -->
            <div style="width: 100%; max-width: 300px; height: 20px; background: #333; border: 2px solid #fff; margin: 0 auto 30px; border-radius: 10px; overflow: hidden;">
                <div id="boss-hp-bar" style="width: 100%; height: 100%; background: linear-gradient(90deg, #ff4d4d, #ff85a2); transition: width 0.2s ease;"></div>
            </div>

            <!-- El Boss -->
            <div id="heart-boss" onclick="hitBoss()" style="
                font-size: 100px; 
                cursor: pointer; 
                display: inline-block; 
                transition: transform 0.1s ease;
                filter: drop-shadow(0 0 15px rgba(255,133,162,0.8));
                user-select: none;
            ">💖</div>

            <div id="hit-message" style="height: 20px; margin-top: 20px; font-family: 'Fredoka One'; color: #ffd700;"></div>
        </div>
    `;
}

function hitBoss() {
    bossClicks++;
    const hpBar = document.getElementById('boss-hp-bar');
    const heart = document.getElementById('heart-boss');
    const msg = document.getElementById('hit-message');

    // Cálculo de vida
    let percentage = 100 - (bossClicks * (100 / maxHP));
    hpBar.style.width = percentage + "%";

    // Efecto visual de golpe
    heart.style.transform = "scale(0.8) rotate(" + (Math.random() * 20 - 10) + "deg)";
    setTimeout(() => {
        heart.style.transform = "scale(1) rotate(0deg)";
    }, 50);

    // Mensajes aleatorios de golpe
    const words = ["¡CRITICAL!", "LOVE HIT!", "💖", "K.O!", "+999 XP"];
    msg.innerText = words[Math.floor(Math.random() * words.length)];

    if (bossClicks >= maxHP) {
        showFinalLetter();
    }
}

function showFinalLetter() {
    const contentDisplay = document.getElementById('content-display');
    
    // Música: Podrías poner una canción especial aquí si quieres
    const music = document.getElementById('bg-music');
    if(music) music.volume = 0.3; // Bajamos un poco el volumen para leer

    contentDisplay.innerHTML = `
        <div style="padding: 30px; text-align: center; color: white;">
            <h2 style="font-family: 'Fredoka One'; color: #ffd700; margin-bottom: 20px; animation: bounce 1s infinite;">🏆 ¡VICTORIA! 🏆</h2>
            
            <div id="typewriter-final" style="
                font-family: 'Nanum Pen Script', cursive; 
                font-size: 1.8em; 
                line-height: 1.4; 
                min-height: 200px;
                background: rgba(255,255,255,0.1);
                padding: 20px;
                border-radius: 15px;
                border: 1px solid rgba(255,255,255,0.3);
            "></div>

            <div id="credits" style="display:none; margin-top: 30px; animation: fadeIn 2s;">
                <hr style="opacity:0.3; margin: 20px 0;">
                <p style="font-size:0.7em; letter-spacing: 2px;"><3</p>
                <p style="font-size:0.9em; color:#ff85a2;">Te amo amorcito.</p>
                <p style="font-size:0.9em; color:#ff85a2;">Vas a ser mi persona favorita toda la vida.</p>
                <p style="font-size:0.9em; color:#ff85a2;">Estos son solo los primeros 9 meses de nuestra historia sin fin.</p>
                <br>
                <button onclick="location.reload()" style="background:#ff85a2; border:none; padding:10px 20px; color:white; border-radius:5px; cursor:pointer; font-family:'Fredoka One';">REPLAY ADVENTURE?</button>
            </div>
        </div>
    `;

    const finalMsg = "Felicidades, amor. Has completado el nivel 9 de nuestra historia. Te amo infinitamente. ♡";
    
    let i = 0;
    function typeEffect() {
        if (i < finalMsg.length) {
            document.getElementById("typewriter-final").innerHTML += finalMsg.charAt(i);
            i++;
            setTimeout(typeEffect, 50);
        } else {
            document.getElementById('credits').style.display = 'block';
        }
    }
    typeEffect();
}