import { useRef, useState, type ChangeEvent, type ReactNode } from "react";

type Screen = "home" | "profiles" | "appearance" | "settings" | "pin" | "add";
type IconName =
  | "home"
  | "people"
  | "palette"
  | "settings"
  | "camera"
  | "check"
  | "image"
  | "plus"
  | "more"
  | "search"
  | "arrow"
  | "lock"
  | "shield"
  | "eye"
  | "clock"
  | "cloud"
  | "trash"
  | "back"
  | "fingerprint"
  | "delete"
  | "info";

const profiles = [
  {
    name: "Elena Rostova",
    relation: "Profil principal",
    status: "Principal",
    photo: "/assets/elena-rostova.png",
    wallpaper: "Cyber Obsidian",
    wallpaperImage: "/assets/cyber-obsidian.png",
  },
  {
    name: "Kenji Sato",
    relation: "Correspondance avant",
    status: "Actif",
    photo: "/assets/kenji-camera.png",
    wallpaper: "Ruban violet 4K",
    wallpaperImage: "/assets/violet-ribbon.png",
  },
  {
    name: "Marcus Lind",
    relation: "Profil invité",
    status: "Actif",
    photo: "/assets/marcus-lind.png",
    wallpaper: "Carbone obsidienne",
    wallpaperImage: "/assets/obsidian-carbon.png",
  },
];

const wallpapers = [
  {
    name: "Rubans lumineux",
    owner: "Kenji Sato",
    image: "/assets/violet-ribbon.png",
  },
  {
    name: "Prisme holographique",
    owner: "Elena Rostova",
    image: "/assets/holographic-prisma.png",
  },
  {
    name: "Carbone obsidienne",
    owner: "Marcus Lind",
    image: "/assets/obsidian-carbon.png",
  },
];

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  const paths: Record<IconName, ReactNode> = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.5-4 2.4-6 5.5-6s5 2 5.5 6" />
        <path d="M16 5.5a3 3 0 0 1 0 5.5M17 13c2.2.5 3.4 2.2 3.8 5" />
      </>
    ),
    palette: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.5-3.3 2 2 0 0 1 1.5-3.4H18A3 3 0 0 0 21 11a8 8 0 0 0-9-8Z" />
        <circle cx="7.5" cy="11" r=".7" fill="currentColor" />
        <circle cx="10" cy="7.5" r=".7" fill="currentColor" />
        <circle cx="14.5" cy="7.5" r=".7" fill="currentColor" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.4 3a8 8 0 0 0-1.7 1L5 6.1 3 9.5 5.1 11a7 7 0 0 0 0 2L3 14.5 5 18l2.4-1a8 8 0 0 0 1.7 1l.4 3h5l.4-3a8 8 0 0 0 1.7-1l2.4 1 2-3.5-2.1-1.5a7 7 0 0 0 .1-1Z" />
      </>
    ),
    camera: (
      <>
        <path d="M4 7h3l1.5-2h7L17 7h3v12H4Z" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
    check: <path d="m6 12 4 4 8-9" />,
    image: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8" cy="9" r="1.5" />
        <path d="m4 17 5-5 4 4 2-2 5 4" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    more: (
      <>
        <circle cx="12" cy="5" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m15 8 4 4-4 4" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    cloud: <path d="M6 18h12a4 4 0 0 0 .5-8A7 7 0 0 0 5.2 8.5 4.8 4.8 0 0 0 6 18Z" />,
    trash: (
      <>
        <path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" />
      </>
    ),
    back: (
      <>
        <path d="m15 18-6-6 6-6" />
        <path d="M9 12h11" />
      </>
    ),
    fingerprint: (
      <>
        <path d="M8 11a4 4 0 0 1 8 0c0 4-1 7-3 9" />
        <path d="M5 11a7 7 0 0 1 14 0c0 3-.4 6-1.8 9" />
        <path d="M11 14c0 3-.4 5-1.4 7M8 15c0 2-.2 3.5-.8 5" />
      </>
    ),
    delete: (
      <>
        <path d="m9 8-4 4 4 4h10V8Z" />
        <path d="m13 10 4 4M17 10l-4 4" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </>
    ),
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <button
      className={`switch ${checked ? "is-on" : ""}`}
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      aria-label={label}
    >
      <span />
    </button>
  );
}

function Header({
  title,
  subtitle,
  back,
  actions,
}: {
  title: string;
  subtitle?: string;
  back?: () => void;
  actions?: ReactNode;
}) {
  return (
    <header className="app-header">
      <div className="header-title">
        {back && (
          <button className="icon-button" onClick={back} aria-label="Retour">
            <Icon name="back" />
          </button>
        )}
        <div>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      {actions && <div className="header-actions">{actions}</div>}
    </header>
  );
}

function Navigation({
  active,
  onNavigate,
}: {
  active: Screen;
  onNavigate: (screen: Screen) => void;
}) {
  const items: { id: Screen; label: string; icon: IconName }[] = [
    { id: "home", label: "Accueil", icon: "home" },
    { id: "profiles", label: "Profils", icon: "people" },
    { id: "appearance", label: "Apparence", icon: "palette" },
    { id: "settings", label: "Réglages", icon: "settings" },
  ];
  return (
    <nav className="bottom-nav" aria-label="Navigation principale">
      {items.map((item) => (
        <button
          key={item.id}
          className={active === item.id ? "active" : ""}
          onClick={() => onNavigate(item.id)}
        >
          <span className="nav-icon">
            <Icon name={item.icon} size={20} />
          </span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function ScreenLayout({
  children,
  screen,
  onNavigate,
}: {
  children: ReactNode;
  screen: Screen;
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="screen">
      <div className="screen-content">{children}</div>
      <Navigation active={screen} onNavigate={onNavigate} />
    </div>
  );
}

function Home({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const [auto, setAuto] = useState(true);
  const [recognition, setRecognition] = useState(true);
  return (
    <ScreenLayout screen="home" onNavigate={onNavigate}>
      <Header
        title="FaceWallpaper"
        actions={
          <button className="avatar-button" aria-label="Profil d’Elena">
            <img src="/assets/elena-rostova.png" alt="" />
          </button>
        }
      />
      <main className="page home-page">
        <section className="camera-panel" aria-label="Aperçu de la caméra">
          <div className="camera-view">
            <img src="/assets/kenji-camera.png" alt="Kenji devant la caméra" />
            <span className="live-status">
              <i />
              En direct
            </span>
            <span className="face-frame" aria-hidden="true" />
          </div>
          <div className="recognition-row">
            <span className="success-icon">
              <Icon name="check" size={16} />
            </span>
            <div>
              <strong>Kenji Sato reconnu</strong>
              <p>Correspondance à 99 % · à l’instant</p>
            </div>
          </div>
        </section>

        <section className="surface current-wallpaper">
          <div className="section-heading">
            <span>Fond d’écran actuel</span>
            <em>Appliqué</em>
          </div>
          <div className="wallpaper-summary">
            <img src="/assets/violet-ribbon.png" alt="Aperçu du fond Ruban violet" />
            <div>
              <h2>Ruban violet</h2>
              <p>Attribué à Kenji Sato</p>
              <button className="primary-small" onClick={() => onNavigate("appearance")}>
                Modifier
              </button>
            </div>
          </div>
        </section>

        <div className="quick-links">
          <button className="surface quick-link" onClick={() => onNavigate("profiles")}>
            <span className="muted-row">
              Profils enregistrés <Icon name="people" size={18} />
            </span>
            <strong>
              3 <small>personnes</small>
            </strong>
            <span className="link-label">
              Gérer les profils <Icon name="arrow" size={15} />
            </span>
          </button>
          <button className="surface quick-link" onClick={() => onNavigate("appearance")}>
            <span className="muted-row">
              Photo par défaut <Icon name="image" size={18} />
            </span>
            <strong className="compact">Configurée</strong>
            <span className="link-label muted">Personne inconnue</span>
          </button>
        </div>

        <section className="surface preferences">
          <div className="section-heading">
            <span>Préférences</span>
          </div>
          <div className="setting-line">
            <div>
              <strong>Changer automatiquement</strong>
              <p>Après reconnaissance du visage</p>
            </div>
            <Switch
              checked={auto}
              onChange={() => setAuto(!auto)}
              label="Changer automatiquement"
            />
          </div>
          <div className="setting-line">
            <div>
              <strong>Reconnaissance faciale</strong>
              <p>Analyser à l’allumage de l’écran</p>
            </div>
            <Switch
              checked={recognition}
              onChange={() => setRecognition(!recognition)}
              label="Reconnaissance faciale"
            />
          </div>
        </section>
      </main>
    </ScreenLayout>
  );
}

function Profiles({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const [filter, setFilter] = useState("Tous");
  return (
    <ScreenLayout screen="profiles" onNavigate={onNavigate}>
      <Header
        title="Profils"
        subtitle="3 personnes enregistrées"
        actions={
          <>
            <button className="icon-button" aria-label="Rechercher">
              <Icon name="search" />
            </button>
            <button className="icon-button" aria-label="Plus d’options">
              <Icon name="more" />
            </button>
          </>
        }
      />
      <main className="page profiles-page">
        <div className="filters" aria-label="Filtres des profils">
          {["Tous", "Actifs", "Principal", "Récents"].map((item) => (
            <button
              key={item}
              className={filter === item ? "selected" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "Tous" && " 3"}
            </button>
          ))}
        </div>
        <section className="profile-grid">
          {profiles.map((profile) => (
            <article className="profile-card" key={profile.name}>
              <div className="profile-photo">
                <img src={profile.photo} alt={`Portrait de ${profile.name}`} />
                <button className="photo-menu" aria-label={`Gérer ${profile.name}`}>
                  <Icon name="more" size={18} />
                </button>
              </div>
              <div className="profile-name">
                <h2>{profile.name}</h2>
                <span>{profile.status}</span>
              </div>
              <p>{profile.relation}</p>
              <div className="profile-wallpaper">
                <img src={profile.wallpaperImage} alt="" />
                <span>
                  <small>Fond d’écran</small>
                  {profile.wallpaper}
                </span>
              </div>
            </article>
          ))}
          <button className="add-profile-card" onClick={() => onNavigate("add")}>
            <span>
              <Icon name="plus" size={28} />
            </span>
            <strong>Ajouter une personne</strong>
            <p>Configurer la reconnaissance et son fond d’écran</p>
          </button>
        </section>
        <div className="info-strip">
          <Icon name="info" size={18} />
          <span>Le fond d’écran change après reconnaissance.</span>
        </div>
        <button className="floating-action" onClick={() => onNavigate("add")}>
          <Icon name="plus" size={20} /> Ajouter
        </button>
      </main>
    </ScreenLayout>
  );
}

function Appearance({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const defaultInput = useRef<HTMLInputElement>(null);
  const personInput = useRef<HTMLInputElement>(null);
  const [defaultImage, setDefaultImage] = useState("/assets/cyber-obsidian.png");
  const [personImage, setPersonImage] = useState("/assets/violet-ribbon.png");
  const [auto, setAuto] = useState(true);

  const selectImage = (event: ChangeEvent<HTMLInputElement>, setter: (value: string) => void) => {
    const file = event.target.files?.[0];
    if (file) setter(URL.createObjectURL(file));
  };

  return (
    <ScreenLayout screen="appearance" onNavigate={onNavigate}>
      <Header
        title="Apparence"
        subtitle="Photos affichées selon la personne"
        actions={
          <button className="icon-button" aria-label="Plus d’options">
            <Icon name="more" />
          </button>
        }
      />
      <main className="page appearance-page">
        <div className="compact-toggle">
          <div>
            <strong>Changement automatique</strong>
            <p>Utiliser la photo liée au profil reconnu</p>
          </div>
          <Switch checked={auto} onChange={() => setAuto(!auto)} label="Changement automatique" />
        </div>

        <section className="image-section">
          <div className="title-row">
            <h2>Photo par défaut</h2>
            <span>Personne inconnue</span>
          </div>
          <article className="default-photo">
            <img src={defaultImage} alt="Photo affichée pour une personne inconnue" />
            <div>
              <h3>Image par défaut</h3>
              <p>Affichée lorsque le visage n’est pas reconnu.</p>
              <button className="secondary-button" onClick={() => defaultInput.current?.click()}>
                <Icon name="image" size={17} /> Choisir une photo
              </button>
              <input
                ref={defaultInput}
                type="file"
                accept="image/*"
                onChange={(e) => selectImage(e, setDefaultImage)}
                hidden
              />
            </div>
          </article>
        </section>

        <section className="image-section">
          <div className="title-row">
            <h2>Photo personnalisée</h2>
            <span>Kenji Sato</span>
          </div>
          <article className="personal-photo">
            <img src={personImage} alt="Photo personnalisée de Kenji Sato" />
            <div>
              <h3>Rubans lumineux</h3>
              <p>Utilisée après reconnaissance de Kenji.</p>
              <button className="secondary-button" onClick={() => personInput.current?.click()}>
                <Icon name="image" size={17} /> Remplacer
              </button>
              <input
                ref={personInput}
                type="file"
                accept="image/*"
                onChange={(e) => selectImage(e, setPersonImage)}
                hidden
              />
            </div>
          </article>
        </section>

        <section className="image-section">
          <div className="title-row">
            <h2>Autres profils</h2>
            <span>2 configurés</span>
          </div>
          <div className="wallpaper-list">
            {wallpapers.slice(1).map((wallpaper) => (
              <article key={wallpaper.name}>
                <img src={wallpaper.image} alt="" />
                <div>
                  <h3>{wallpaper.name}</h3>
                  <p>{wallpaper.owner}</p>
                </div>
                <button className="text-button">Modifier</button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </ScreenLayout>
  );
}

function SettingRow({
  icon,
  title,
  description,
  control,
  danger,
}: {
  icon: IconName;
  title: string;
  description: string;
  control?: ReactNode;
  danger?: boolean;
}) {
  return (
    <div className={`settings-row ${danger ? "danger" : ""}`}>
      <span className="row-icon">
        <Icon name={icon} size={18} />
      </span>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      {control}
    </div>
  );
}

function Settings({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const [pin, setPin] = useState(true);
  const [liveness, setLiveness] = useState(true);
  const [sensitivity, setSensitivity] = useState("Moyenne");
  return (
    <ScreenLayout screen="settings" onNavigate={onNavigate}>
      <Header title="Réglages" />
      <main className="page settings-page">
        <section className="settings-group">
          <h2>Sécurité</h2>
          <div className="settings-surface">
            <SettingRow
              icon="lock"
              title="Protection par PIN"
              description="Exiger le code pour modifier les profils"
              control={
                <Switch checked={pin} onChange={() => setPin(!pin)} label="Protection par PIN" />
              }
            />
            <button className="settings-action" onClick={() => onNavigate("pin")}>
              <SettingRow
                icon="fingerprint"
                title="Modifier le code PIN"
                description="Mettre à jour le code à 6 chiffres"
                control={<Icon name="arrow" size={17} />}
              />
            </button>
          </div>
        </section>

        <section className="settings-group">
          <h2>Reconnaissance</h2>
          <div className="settings-surface">
            <div className="sensitivity">
              <div className="setting-label">
                <Icon name="settings" size={18} />
                <div>
                  <strong>Sensibilité</strong>
                  <p>Tolérance de la correspondance faciale</p>
                </div>
              </div>
              <div className="segmented">
                {["Faible", "Moyenne", "Élevée"].map((item) => (
                  <button
                    className={sensitivity === item ? "active" : ""}
                    onClick={() => setSensitivity(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <SettingRow
              icon="eye"
              title="Détection de présence"
              description="Limiter les tentatives avec une photo"
              control={
                <Switch
                  checked={liveness}
                  onChange={() => setLiveness(!liveness)}
                  label="Détection de présence"
                />
              }
            />
            <SettingRow
              icon="clock"
              title="Fréquence d’analyse"
              description="À l’allumage de l’écran"
              control={<button className="select-button">Au réveil</button>}
            />
          </div>
        </section>

        <section className="settings-group">
          <h2>Données et confidentialité</h2>
          <div className="settings-surface">
            <SettingRow
              icon="shield"
              title="Traitement sur l’appareil"
              description="Les données faciales restent sur ce téléphone"
            />
            <SettingRow
              icon="cloud"
              title="Exporter une sauvegarde"
              description="Copie chiffrée des profils"
              control={<button className="outline-button">Exporter</button>}
            />
            <SettingRow
              icon="trash"
              title="Effacer les données faciales"
              description="Supprimer définitivement les profils enregistrés"
              control={<button className="danger-button">Effacer</button>}
              danger
            />
          </div>
        </section>
      </main>
    </ScreenLayout>
  );
}

function PinScreen({ onBack }: { onBack: () => void }) {
  const [digits, setDigits] = useState("");
  const [message, setMessage] = useState("");
  const addDigit = (digit: string) => {
    if (digits.length >= 6) return;
    const next = digits + digit;
    setDigits(next);
    if (next.length === 6) {
      setMessage("Accès autorisé");
      window.setTimeout(onBack, 650);
    }
  };
  const letters: Record<string, string> = {
    "2": "ABC",
    "3": "DEF",
    "4": "GHI",
    "5": "JKL",
    "6": "MNO",
    "7": "PQRS",
    "8": "TUV",
    "9": "WXYZ",
  };
  return (
    <div className="pin-screen">
      <header className="pin-header">
        <button className="icon-button" onClick={onBack} aria-label="Retour">
          <Icon name="back" />
        </button>
        <span>
          <Icon name="shield" size={16} /> FACEWALLPAPER
        </span>
        <i />
      </header>
      <main>
        <div className="pin-lock">
          <Icon name="lock" size={24} />
        </div>
        <h1>Code administrateur</h1>
        <p>Saisissez votre code à 6 chiffres pour accéder aux réglages et aux profils.</p>
        <div className="pin-dots" aria-label={`${digits.length} chiffres saisis`}>
          {Array.from({ length: 6 }).map((_, index) => (
            <span className={index < digits.length ? "filled" : ""} key={index} />
          ))}
        </div>
        <span className="pin-message" aria-live="polite">
          {message}
        </span>
        <div className="keypad">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
            <button key={digit} onClick={() => addDigit(digit)}>
              <strong>{digit}</strong>
              <small>{letters[digit] || "\u00A0"}</small>
            </button>
          ))}
          <button className="keypad-icon" aria-label="Utiliser l’empreinte">
            <Icon name="fingerprint" size={27} />
          </button>
          <button onClick={() => addDigit("0")}>
            <strong>0</strong>
            <small>+</small>
          </button>
          <button
            className="keypad-icon"
            onClick={() => setDigits(digits.slice(0, -1))}
            aria-label="Effacer un chiffre"
          >
            <Icon name="delete" size={25} />
          </button>
        </div>
        <div className="pin-footer">
          <button>Code oublié ?</button>
          <span>·</span>
          <button>
            <Icon name="fingerprint" size={18} /> Utiliser l’empreinte
          </button>
        </div>
      </main>
    </div>
  );
}

function AddPerson({ onBack }: { onBack: () => void }) {
  const [samples, setSamples] = useState(7);
  const [name, setName] = useState("Marcus Lind");
  return (
    <div className="add-screen">
      <Header title="Ajouter une personne" back={onBack} />
      <main className="page add-page">
        <div className="capture-progress">
          <div>
            <span>Capture du visage</span>
            <strong>{samples} / 10</strong>
          </div>
          <i>
            <b style={{ width: `${samples * 10}%` }} />
          </i>
        </div>
        <section className="capture-zone">
          <div className="capture-photo">
            <img src="/assets/marcus-lind.png" alt="Visage en cours d’enregistrement" />
            <span />
          </div>
          <p>
            <Icon name="camera" size={18} /> Tournez légèrement la tête vers la droite
          </p>
        </section>
        <section className="samples">
          <div className="title-row">
            <h2>Angles enregistrés</h2>
            <span>10 requis</span>
          </div>
          <div>
            {Array.from({ length: 10 }).map((_, index) => (
              <span className={index < samples ? "complete" : ""} key={index}>
                {index < samples ? <img src="/assets/marcus-lind.png" alt="" /> : index + 1}
              </span>
            ))}
          </div>
        </section>
        <section className="surface identity-form">
          <div className="title-row">
            <h2>Identité</h2>
            <span>Correspondance vérifiée</span>
          </div>
          <label>
            Nom complet
            <input value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <fieldset>
            <legend>Relation</legend>
            <div className="segmented">
              <button>Famille</button>
              <button>Collègue</button>
              <button className="active">Moi</button>
              <button>Invité</button>
            </div>
          </fieldset>
        </section>
        <div className="capture-actions">
          <button className="secondary-button" onClick={() => setSamples(Math.max(0, samples - 1))}>
            Reprendre
          </button>
          <button
            className="primary-button"
            onClick={() => (samples < 10 ? setSamples(samples + 1) : onBack())}
          >
            <Icon name="fingerprint" size={19} />
            {samples < 10 ? `Ajouter un angle (${10 - samples})` : "Terminer"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  if (screen === "pin") return <PinScreen onBack={() => setScreen("settings")} />;
  if (screen === "add") return <AddPerson onBack={() => setScreen("profiles")} />;
  if (screen === "profiles") return <Profiles onNavigate={setScreen} />;
  if (screen === "appearance") return <Appearance onNavigate={setScreen} />;
  if (screen === "settings") return <Settings onNavigate={setScreen} />;
  return <Home onNavigate={setScreen} />;
}
