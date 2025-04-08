var ml = Object.defineProperty;
var bl = (e, t, n) => t in e ? ml(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Q = (e, t, n) => bl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ar(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = {}, Ht = [], Ue = () => {
}, Cl = () => !1, ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cr = (e) => e.startsWith("onUpdate:"), ae = Object.assign, ur = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, _l = Object.prototype.hasOwnProperty, z = (e, t) => _l.call(e, t), I = Array.isArray, Gt = (e) => rs(e) === "[object Map]", Fi = (e) => rs(e) === "[object Set]", L = (e) => typeof e == "function", le = (e) => typeof e == "string", St = (e) => typeof e == "symbol", ne = (e) => e !== null && typeof e == "object", Li = (e) => (ne(e) || L(e)) && L(e.then) && L(e.catch), Ni = Object.prototype.toString, rs = (e) => Ni.call(e), Sl = (e) => rs(e).slice(8, -1), is = (e) => rs(e) === "[object Object]", fr = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ln = /* @__PURE__ */ ar(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, yl = /-(\w)/g, ye = os(
  (e) => e.replace(yl, (t, n) => n ? n.toUpperCase() : "")
), xl = /\B([A-Z])/g, Te = os(
  (e) => e.replace(xl, "-$1").toLowerCase()
), ls = os((e) => e.charAt(0).toUpperCase() + e.slice(1)), xs = os(
  (e) => e ? `on${ls(e)}` : ""
), Ct = (e, t) => !Object.is(e, t), Bn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, $i = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ns = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, $s = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Br;
const as = () => Br || (Br = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function lt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = le(s) ? kl(s) : lt(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (le(e) || ne(e))
    return e;
}
const vl = /;(?![^(]*\))/g, wl = /:([^]+)/, Pl = /\/\*[^]*?\*\//g;
function kl(e) {
  const t = {};
  return e.replace(Pl, "").split(vl).forEach((n) => {
    if (n) {
      const s = n.split(wl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function cs(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = cs(e[n]);
      s && (t += s + " ");
    }
  else if (ne(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const El = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ml = /* @__PURE__ */ ar(El);
function Bi(e) {
  return !!e || e === "";
}
const Ui = (e) => !!(e && e.__v_isRef === !0), Wi = (e) => le(e) ? e : e == null ? "" : I(e) || ne(e) && (e.toString === Ni || !L(e.toString)) ? Ui(e) ? Wi(e.value) : JSON.stringify(e, Hi, 2) : String(e), Hi = (e, t) => Ui(t) ? Hi(e, t.value) : Gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[vs(s, i) + " =>"] = r, n),
    {}
  )
} : Fi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => vs(n))
} : St(t) ? vs(t) : ne(t) && !I(t) && !is(t) ? String(t) : t, vs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    St(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Al = { ACLOCAL_PATH: "C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal", ALLUSERSPROFILE: "C:\\ProgramData", AMDRMSDKPATH: "C:\\Program Files\\AMD\\RyzenMasterSDK\\", APPDATA: "C:\\Users\\Miloh\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_27524_ETDYEVIMEJAKEXAB", COLOR: "1", COLORTERM: "truecolor", COMMONPROGRAMFILES: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-3I26BL6", COMSPEC: "C:\\WINDOWS\\system32\\cmd.exe", CONFIG_SITE: "C:/Program Files/Git/etc/config.site", DISPLAY: "needs-to-be-defined", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\WINDOWS\\notepad.exe", EFC_33944: "1", EXEPATH: "C:\\Program Files\\Git\\bin", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\Miloh", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\Miloh", HOSTNAME: "DESKTOP-3I26BL6", INFOPATH: "C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info", INIT_CWD: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end", "IntelliJ IDEA": "C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;", JAVA_HOME: "C:\\Program Files\\Java\\jdk-20", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\Miloh\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-3I26BL6", MANPATH: "C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man", MAVEN_HOME: "C:\\Program Files\\Maven\\apache-maven-3.9.1", MINGW_CHOST: "x86_64-w64-mingw32", MINGW_PACKAGE_PREFIX: "mingw-w64-x86_64", MINGW_PREFIX: "C:/Program Files/Git/mingw64", MSYSTEM: "MINGW64", MSYSTEM_CARCH: "x86_64", MSYSTEM_CHOST: "x86_64-w64-mingw32", MSYSTEM_PREFIX: "C:/Program Files/Git/mingw64", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", npm_command: "run-script", npm_config_cache: "C:\\Users\\Miloh\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Program Files\\nodejs\\etc\\npmrc", npm_config_global_prefix: "C:\\Program Files\\nodejs", npm_config_init_module: "C:\\Users\\Miloh\\.npm-init.js", npm_config_legacy_peer_deps: "true", npm_config_local_prefix: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end", npm_config_node_gyp: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "10.5.2", npm_config_prefix: "C:\\Program Files\\nodejs", npm_config_userconfig: "C:\\Users\\Miloh\\.npmrc", npm_config_user_agent: "npm/10.5.2 node/v20.13.1 win32 x64 workspaces/false", npm_execpath: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "vue-tsc -b && vite build", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end\\package.json", npm_package_name: "junngla-chatbot-frontend-web", npm_package_version: "1.1.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\Miloh\\OneDrive", ORIGINAL_PATH: "C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files\\dotnet;C:\\Program Files\\Maven\\apache-maven-3.9.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Ruby33-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311\\Scripts;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311;C:\\Users\\Miloh\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\npm;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\MongoDB Atlas CLI;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\Miloh\\AppData\\Local\\Programs\\mongosh;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand", ORIGINAL_TEMP: "C:/Users/Miloh/AppData/Local/Temp", ORIGINAL_TMP: "C:/Users/Miloh/AppData/Local/Temp", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", PATH: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\node_modules\\.bin;C:\\Users\\Miloh\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files\\dotnet;C:\\Program Files\\Maven\\apache-maven-3.9.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Ruby33-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311\\Scripts;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311;C:\\Users\\Miloh\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\npm;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\MongoDB Atlas CLI;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\Miloh\\AppData\\Local\\Programs\\mongosh;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.RB;.RBW", PKG_CONFIG_PATH: "C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig", PLINK_PROTOCOL: "ssh", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD", PROCESSOR_LEVEL: "25", PROCESSOR_REVISION: "5000", ProgramData: "C:\\ProgramData", PROGRAMFILES: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\PowerShell\\Modules\\", PUBLIC: "C:\\Users\\Public", PWD: "C:/Users/Miloh/Desktop/Junngla/Proyectos/CHATBOT/chat-bot-front-end", SESSIONNAME: "Console", SHELL: "C:\\Program Files\\Git\\usr\\bin\\bash.exe", SHLVL: "2", SSH_ASKPASS: "C:/Program Files/Git/mingw64/bin/git-askpass.exe", SYSTEMDRIVE: "C:", SYSTEMROOT: "C:\\WINDOWS", TEMP: "C:\\Users\\Miloh\\AppData\\Local\\Temp", TERM: "xterm-256color", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.98.2", TMP: "C:\\Users\\Miloh\\AppData\\Local\\Temp", TMPDIR: "C:\\Users\\Miloh\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-3I26BL6", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-3I26BL6", USERNAME: "Miloh", USERPROFILE: "C:\\Users\\Miloh", VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: "1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-a98055278d-sock", WINDIR: "C:\\WINDOWS", _: "C:/Program Files/nodejs/node.exe" };
let Ae;
class Tl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ae, !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ae;
      try {
        return Ae = this, t();
      } finally {
        Ae = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ae = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ae = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Rl() {
  return Ae;
}
let te;
const ws = /* @__PURE__ */ new WeakSet();
class Gi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ae && Ae.active && Ae.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ws.has(this) && (ws.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ur(this), zi(this);
    const t = te, n = We;
    te = this, We = !0;
    try {
      return this.fn();
    } finally {
      Ki(this), te = t, We = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        pr(t);
      this.deps = this.depsTail = void 0, Ur(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ws.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Bs(this) && this.run();
  }
  get dirty() {
    return Bs(this);
  }
}
let ji = 0, an, cn;
function Vi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = cn, cn = e;
    return;
  }
  e.next = an, an = e;
}
function hr() {
  ji++;
}
function dr() {
  if (--ji > 0)
    return;
  if (cn) {
    let t = cn;
    for (cn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; an; ) {
    let t = an;
    for (an = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function zi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ki(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), pr(s), Il(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Bs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === _n))
    return;
  e.globalVersion = _n;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Bs(e)) {
    e.flags &= -3;
    return;
  }
  const n = te, s = We;
  te = e, We = !0;
  try {
    zi(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ct(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    te = n, We = s, Ki(e), e.flags &= -3;
  }
}
function pr(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      pr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Il(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let We = !0;
const Ji = [];
function ct() {
  Ji.push(We), We = !1;
}
function ut() {
  const e = Ji.pop();
  We = e === void 0 ? !0 : e;
}
function Ur(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = te;
    te = void 0;
    try {
      t();
    } finally {
      te = n;
    }
  }
}
let _n = 0;
class Ol {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class gr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!te || !We || te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== te)
      n = this.activeLink = new Ol(te, this), te.deps ? (n.prevDep = te.depsTail, te.depsTail.nextDep = n, te.depsTail = n) : te.deps = te.depsTail = n, Qi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = te.depsTail, n.nextDep = void 0, te.depsTail.nextDep = n, te.depsTail = n, te.deps === n && (te.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, _n++, this.notify(t);
  }
  notify(t) {
    hr();
    try {
      Al.NODE_ENV;
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      dr();
    }
  }
}
function Qi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Qi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Us = /* @__PURE__ */ new WeakMap(), Tt = Symbol(
  ""
), Ws = Symbol(
  ""
), Sn = Symbol(
  ""
);
function me(e, t, n) {
  if (We && te) {
    let s = Us.get(e);
    s || Us.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new gr()), r.map = s, r.key = n), r.track();
  }
}
function it(e, t, n, s, r, i) {
  const o = Us.get(e);
  if (!o) {
    _n++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (hr(), t === "clear")
    o.forEach(l);
  else {
    const a = I(e), u = a && fr(n);
    if (a && n === "length") {
      const c = Number(s);
      o.forEach((d, p) => {
        (p === "length" || p === Sn || !St(p) && p >= c) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Sn)), t) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(Tt)), Gt(e) && l(o.get(Ws)));
          break;
        case "delete":
          a || (l(o.get(Tt)), Gt(e) && l(o.get(Ws)));
          break;
        case "set":
          Gt(e) && l(o.get(Tt));
          break;
      }
  }
  dr();
}
function Ft(e) {
  const t = j(e);
  return t === e ? t : (me(t, "iterate", Sn), Le(e) ? t : t.map(be));
}
function us(e) {
  return me(e = j(e), "iterate", Sn), e;
}
const Dl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ps(this, Symbol.iterator, be);
  },
  concat(...e) {
    return Ft(this).concat(
      ...e.map((t) => I(t) ? Ft(t) : t)
    );
  },
  entries() {
    return Ps(this, "entries", (e) => (e[1] = be(e[1]), e));
  },
  every(e, t) {
    return et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return et(this, "filter", e, t, (n) => n.map(be), arguments);
  },
  find(e, t) {
    return et(this, "find", e, t, be, arguments);
  },
  findIndex(e, t) {
    return et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return et(this, "findLast", e, t, be, arguments);
  },
  findLastIndex(e, t) {
    return et(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ks(this, "includes", e);
  },
  indexOf(...e) {
    return ks(this, "indexOf", e);
  },
  join(e) {
    return Ft(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ks(this, "lastIndexOf", e);
  },
  map(e, t) {
    return et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yt(this, "pop");
  },
  push(...e) {
    return Yt(this, "push", e);
  },
  reduce(e, ...t) {
    return Wr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Wr(this, "reduceRight", e, t);
  },
  shift() {
    return Yt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yt(this, "splice", e);
  },
  toReversed() {
    return Ft(this).toReversed();
  },
  toSorted(e) {
    return Ft(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ft(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yt(this, "unshift", e);
  },
  values() {
    return Ps(this, "values", be);
  }
};
function Ps(e, t, n) {
  const s = us(e), r = s[t]();
  return s !== e && !Le(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Fl = Array.prototype;
function et(e, t, n, s, r, i) {
  const o = us(e), l = o !== e && !Le(e), a = o[t];
  if (a !== Fl[t]) {
    const d = a.apply(e, i);
    return l ? be(d) : d;
  }
  let u = n;
  o !== e && (l ? u = function(d, p) {
    return n.call(this, be(d), p, e);
  } : n.length > 2 && (u = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const c = a.call(o, u, s);
  return l && r ? r(c) : c;
}
function Wr(e, t, n, s) {
  const r = us(e);
  let i = n;
  return r !== e && (Le(e) ? n.length > 3 && (i = function(o, l, a) {
    return n.call(this, o, l, a, e);
  }) : i = function(o, l, a) {
    return n.call(this, o, be(l), a, e);
  }), r[t](i, ...s);
}
function ks(e, t, n) {
  const s = j(e);
  me(s, "iterate", Sn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && br(n[0]) ? (n[0] = j(n[0]), s[t](...n)) : r;
}
function Yt(e, t, n = []) {
  ct(), hr();
  const s = j(e)[t].apply(e, n);
  return dr(), ut(), s;
}
const Ll = /* @__PURE__ */ ar("__proto__,__v_isRef,__isVue"), Xi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(St)
);
function Nl(e) {
  St(e) || (e = String(e));
  const t = j(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class Zi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? ro : so : i ? no : to).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = I(t);
    if (!r) {
      let a;
      if (o && (a = Dl[n]))
        return a;
      if (n === "hasOwnProperty")
        return Nl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      pe(t) ? t : s
    );
    return (St(n) ? Xi.has(n) : Ll(n)) || (r || me(t, "get", n), i) ? l : pe(l) ? o && fr(n) ? l : l.value : ne(l) ? r ? io(l) : mr(l) : l;
  }
}
class Yi extends Zi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = Rt(i);
      if (!Le(s) && !Rt(s) && (i = j(i), s = j(s)), !I(t) && pe(i) && !pe(s))
        return a ? !1 : (i.value = s, !0);
    }
    const o = I(t) && fr(n) ? Number(n) < t.length : z(t, n), l = Reflect.set(
      t,
      n,
      s,
      pe(t) ? t : r
    );
    return t === j(r) && (o ? Ct(s, i) && it(t, "set", n, s) : it(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = z(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && it(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!St(n) || !Xi.has(n)) && me(t, "has", n), s;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      I(t) ? "length" : Tt
    ), Reflect.ownKeys(t);
  }
}
class eo extends Zi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const $l = /* @__PURE__ */ new Yi(), Bl = /* @__PURE__ */ new eo(), Ul = /* @__PURE__ */ new Yi(!0), Wl = /* @__PURE__ */ new eo(!0), Hs = (e) => e, Tn = (e) => Reflect.getPrototypeOf(e);
function Hl(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = j(r), o = Gt(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, u = r[e](...s), c = n ? Hs : t ? Gs : be;
    return !t && me(
      i,
      "iterate",
      a ? Ws : Tt
    ), {
      // iterator protocol
      next() {
        const { value: d, done: p } = u.next();
        return p ? { value: d, done: p } : {
          value: l ? [c(d[0]), c(d[1])] : c(d),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Rn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Gl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = j(i), l = j(r);
      e || (Ct(r, l) && me(o, "get", r), me(o, "get", l));
      const { has: a } = Tn(o), u = t ? Hs : e ? Gs : be;
      if (a.call(o, r))
        return u(i.get(r));
      if (a.call(o, l))
        return u(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && me(j(r), "iterate", Tt), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = j(i), l = j(r);
      return e || (Ct(r, l) && me(o, "has", r), me(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = j(l), u = t ? Hs : e ? Gs : be;
      return !e && me(a, "iterate", Tt), l.forEach((c, d) => r.call(i, u(c), u(d), o));
    }
  };
  return ae(
    n,
    e ? {
      add: Rn("add"),
      set: Rn("set"),
      delete: Rn("delete"),
      clear: Rn("clear")
    } : {
      add(r) {
        !t && !Le(r) && !Rt(r) && (r = j(r));
        const i = j(this);
        return Tn(i).has.call(i, r) || (i.add(r), it(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Le(i) && !Rt(i) && (i = j(i));
        const o = j(this), { has: l, get: a } = Tn(o);
        let u = l.call(o, r);
        u || (r = j(r), u = l.call(o, r));
        const c = a.call(o, r);
        return o.set(r, i), u ? Ct(i, c) && it(o, "set", r, i) : it(o, "add", r, i), this;
      },
      delete(r) {
        const i = j(this), { has: o, get: l } = Tn(i);
        let a = o.call(i, r);
        a || (r = j(r), a = o.call(i, r)), l && l.call(i, r);
        const u = i.delete(r);
        return a && it(i, "delete", r, void 0), u;
      },
      clear() {
        const r = j(this), i = r.size !== 0, o = r.clear();
        return i && it(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Hl(r, e, t);
  }), n;
}
function fs(e, t) {
  const n = Gl(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    z(n, r) && r in s ? n : s,
    r,
    i
  );
}
const jl = {
  get: /* @__PURE__ */ fs(!1, !1)
}, Vl = {
  get: /* @__PURE__ */ fs(!1, !0)
}, zl = {
  get: /* @__PURE__ */ fs(!0, !1)
}, Kl = {
  get: /* @__PURE__ */ fs(!0, !0)
}, to = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap(), ro = /* @__PURE__ */ new WeakMap();
function ql(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Jl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ql(Sl(e));
}
function mr(e) {
  return Rt(e) ? e : hs(
    e,
    !1,
    $l,
    jl,
    to
  );
}
function Ql(e) {
  return hs(
    e,
    !1,
    Ul,
    Vl,
    no
  );
}
function io(e) {
  return hs(
    e,
    !0,
    Bl,
    zl,
    so
  );
}
function In(e) {
  return hs(
    e,
    !0,
    Wl,
    Kl,
    ro
  );
}
function hs(e, t, n, s, r) {
  if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = Jl(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
function jt(e) {
  return Rt(e) ? jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Rt(e) {
  return !!(e && e.__v_isReadonly);
}
function Le(e) {
  return !!(e && e.__v_isShallow);
}
function br(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Xl(e) {
  return !z(e, "__v_skip") && Object.isExtensible(e) && $i(e, "__v_skip", !0), e;
}
const be = (e) => ne(e) ? mr(e) : e, Gs = (e) => ne(e) ? io(e) : e;
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Oe(e) {
  return Zl(e, !1);
}
function Zl(e, t) {
  return pe(e) ? e : new Yl(e, t);
}
class Yl {
  constructor(t, n) {
    this.dep = new gr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : j(t), this._value = n ? t : be(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Le(t) || Rt(t);
    t = s ? t : j(t), Ct(t, n) && (this._rawValue = t, this._value = s ? t : be(t), this.dep.trigger());
  }
}
function oo(e) {
  return pe(e) ? e.value : e;
}
const ea = {
  get: (e, t, n) => t === "__v_raw" ? e : oo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return pe(r) && !pe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function lo(e) {
  return jt(e) ? e : new Proxy(e, ea);
}
class ta {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new gr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _n - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    te !== this)
      return Vi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function na(e, t, n = !1) {
  let s, r;
  return L(e) ? s = e : (s = e.get, r = e.set), new ta(s, r, n);
}
const On = {}, zn = /* @__PURE__ */ new WeakMap();
let Et;
function sa(e, t = !1, n = Et) {
  if (n) {
    let s = zn.get(n);
    s || zn.set(n, s = []), s.push(e);
  }
}
function ra(e, t, n = X) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, u = (A) => r ? A : Le(A) || r === !1 || r === 0 ? ot(A, 1) : ot(A);
  let c, d, p, m, P = !1, b = !1;
  if (pe(e) ? (d = () => e.value, P = Le(e)) : jt(e) ? (d = () => u(e), P = !0) : I(e) ? (b = !0, P = e.some((A) => jt(A) || Le(A)), d = () => e.map((A) => {
    if (pe(A))
      return A.value;
    if (jt(A))
      return u(A);
    if (L(A))
      return a ? a(A, 2) : A();
  })) : L(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (p) {
      ct();
      try {
        p();
      } finally {
        ut();
      }
    }
    const A = Et;
    Et = c;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      Et = A;
    }
  } : d = Ue, t && r) {
    const A = d, T = r === !0 ? 1 / 0 : r;
    d = () => ot(A(), T);
  }
  const E = Rl(), D = () => {
    c.stop(), E && E.active && ur(E.effects, c);
  };
  if (i && t) {
    const A = t;
    t = (...T) => {
      A(...T), D();
    };
  }
  let B = b ? new Array(e.length).fill(On) : On;
  const W = (A) => {
    if (!(!(c.flags & 1) || !c.dirty && !A))
      if (t) {
        const T = c.run();
        if (r || P || (b ? T.some((N, H) => Ct(N, B[H])) : Ct(T, B))) {
          p && p();
          const N = Et;
          Et = c;
          try {
            const H = [
              T,
              // pass undefined as the old value when it's changed for the first time
              B === On ? void 0 : b && B[0] === On ? [] : B,
              m
            ];
            a ? a(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            ), B = T;
          } finally {
            Et = N;
          }
        }
      } else
        c.run();
  };
  return l && l(W), c = new Gi(d), c.scheduler = o ? () => o(W, !1) : W, m = (A) => sa(A, !1, c), p = c.onStop = () => {
    const A = zn.get(c);
    if (A) {
      if (a)
        a(A, 4);
      else
        for (const T of A) T();
      zn.delete(c);
    }
  }, t ? s ? W(!0) : B = c.run() : o ? o(W.bind(null, !0), !0) : c.run(), D.pause = c.pause.bind(c), D.resume = c.resume.bind(c), D.stop = D, D;
}
function ot(e, t = 1 / 0, n) {
  if (t <= 0 || !ne(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, pe(e))
    ot(e.value, t, n);
  else if (I(e))
    for (let s = 0; s < e.length; s++)
      ot(e[s], t, n);
  else if (Fi(e) || Gt(e))
    e.forEach((s) => {
      ot(s, t, n);
    });
  else if (is(e)) {
    for (const s in e)
      ot(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n);
  }
  return e;
}
var dt = { ACLOCAL_PATH: "C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal", ALLUSERSPROFILE: "C:\\ProgramData", AMDRMSDKPATH: "C:\\Program Files\\AMD\\RyzenMasterSDK\\", APPDATA: "C:\\Users\\Miloh\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_27524_ETDYEVIMEJAKEXAB", COLOR: "1", COLORTERM: "truecolor", COMMONPROGRAMFILES: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-3I26BL6", COMSPEC: "C:\\WINDOWS\\system32\\cmd.exe", CONFIG_SITE: "C:/Program Files/Git/etc/config.site", DISPLAY: "needs-to-be-defined", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\WINDOWS\\notepad.exe", EFC_33944: "1", EXEPATH: "C:\\Program Files\\Git\\bin", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\Miloh", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\Miloh", HOSTNAME: "DESKTOP-3I26BL6", INFOPATH: "C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info", INIT_CWD: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end", "IntelliJ IDEA": "C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;", JAVA_HOME: "C:\\Program Files\\Java\\jdk-20", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\Miloh\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-3I26BL6", MANPATH: "C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man", MAVEN_HOME: "C:\\Program Files\\Maven\\apache-maven-3.9.1", MINGW_CHOST: "x86_64-w64-mingw32", MINGW_PACKAGE_PREFIX: "mingw-w64-x86_64", MINGW_PREFIX: "C:/Program Files/Git/mingw64", MSYSTEM: "MINGW64", MSYSTEM_CARCH: "x86_64", MSYSTEM_CHOST: "x86_64-w64-mingw32", MSYSTEM_PREFIX: "C:/Program Files/Git/mingw64", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", npm_command: "run-script", npm_config_cache: "C:\\Users\\Miloh\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Program Files\\nodejs\\etc\\npmrc", npm_config_global_prefix: "C:\\Program Files\\nodejs", npm_config_init_module: "C:\\Users\\Miloh\\.npm-init.js", npm_config_legacy_peer_deps: "true", npm_config_local_prefix: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end", npm_config_node_gyp: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "10.5.2", npm_config_prefix: "C:\\Program Files\\nodejs", npm_config_userconfig: "C:\\Users\\Miloh\\.npmrc", npm_config_user_agent: "npm/10.5.2 node/v20.13.1 win32 x64 workspaces/false", npm_execpath: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "vue-tsc -b && vite build", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end\\package.json", npm_package_name: "junngla-chatbot-frontend-web", npm_package_version: "1.1.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\Miloh\\OneDrive", ORIGINAL_PATH: "C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files\\dotnet;C:\\Program Files\\Maven\\apache-maven-3.9.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Ruby33-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311\\Scripts;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311;C:\\Users\\Miloh\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\npm;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\MongoDB Atlas CLI;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\Miloh\\AppData\\Local\\Programs\\mongosh;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand", ORIGINAL_TEMP: "C:/Users/Miloh/AppData/Local/Temp", ORIGINAL_TMP: "C:/Users/Miloh/AppData/Local/Temp", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", PATH: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\node_modules\\.bin;C:\\Users\\Miloh\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files\\dotnet;C:\\Program Files\\Maven\\apache-maven-3.9.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Ruby33-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311\\Scripts;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311;C:\\Users\\Miloh\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\npm;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\MongoDB Atlas CLI;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\Miloh\\AppData\\Local\\Programs\\mongosh;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.RB;.RBW", PKG_CONFIG_PATH: "C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig", PLINK_PROTOCOL: "ssh", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD", PROCESSOR_LEVEL: "25", PROCESSOR_REVISION: "5000", ProgramData: "C:\\ProgramData", PROGRAMFILES: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\PowerShell\\Modules\\", PUBLIC: "C:\\Users\\Public", PWD: "C:/Users/Miloh/Desktop/Junngla/Proyectos/CHATBOT/chat-bot-front-end", SESSIONNAME: "Console", SHELL: "C:\\Program Files\\Git\\usr\\bin\\bash.exe", SHLVL: "2", SSH_ASKPASS: "C:/Program Files/Git/mingw64/bin/git-askpass.exe", SYSTEMDRIVE: "C:", SYSTEMROOT: "C:\\WINDOWS", TEMP: "C:\\Users\\Miloh\\AppData\\Local\\Temp", TERM: "xterm-256color", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.98.2", TMP: "C:\\Users\\Miloh\\AppData\\Local\\Temp", TMPDIR: "C:\\Users\\Miloh\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-3I26BL6", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-3I26BL6", USERNAME: "Miloh", USERPROFILE: "C:\\Users\\Miloh", VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: "1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-a98055278d-sock", WINDIR: "C:\\WINDOWS", _: "C:/Program Files/nodejs/node.exe" };
const un = [];
let Es = !1;
function ia(e, ...t) {
  if (Es) return;
  Es = !0, ct();
  const n = un.length ? un[un.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = oa();
  if (s)
    qt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var o, l;
          return (l = (o = i.toString) == null ? void 0 : o.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${Qo(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...la(r)), console.warn(...i);
  }
  ut(), Es = !1;
}
function oa() {
  let e = un[un.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function la(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...aa(n));
  }), t;
}
function aa({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Qo(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [r, ...ca(e.props), i] : [r + i];
}
function ca(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...ao(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ao(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : pe(t) ? (t = ao(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
function qt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    ds(r, t, n);
  }
}
function He(e, t, n, s) {
  if (L(e)) {
    const r = qt(e, t, n, s);
    return r && Li(r) && r.catch((i) => {
      ds(i, t, n);
    }), r;
  }
  if (I(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(He(e[i], t, n, s));
    return r;
  }
}
function ds(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      ct(), qt(i, null, 10, [
        e,
        a,
        u
      ]), ut();
      return;
    }
  }
  ua(e, n, r, s, o);
}
function ua(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const _e = [];
let Je = -1;
const Vt = [];
let pt = null, Lt = 0;
const co = /* @__PURE__ */ Promise.resolve();
let Kn = null;
function Cr(e) {
  const t = Kn || co;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fa(e) {
  let t = Je + 1, n = _e.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = _e[s], i = yn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function _r(e) {
  if (!(e.flags & 1)) {
    const t = yn(e), n = _e[_e.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yn(n) ? _e.push(e) : _e.splice(fa(t), 0, e), e.flags |= 1, uo();
  }
}
function uo() {
  Kn || (Kn = co.then(ho));
}
function ha(e) {
  I(e) ? Vt.push(...e) : pt && e.id === -1 ? pt.splice(Lt + 1, 0, e) : e.flags & 1 || (Vt.push(e), e.flags |= 1), uo();
}
function Hr(e, t, n = Je + 1) {
  for (; n < _e.length; n++) {
    const s = _e[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      _e.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function fo(e) {
  if (Vt.length) {
    const t = [...new Set(Vt)].sort(
      (n, s) => yn(n) - yn(s)
    );
    if (Vt.length = 0, pt) {
      pt.push(...t);
      return;
    }
    for (pt = t, Lt = 0; Lt < pt.length; Lt++) {
      const n = pt[Lt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    pt = null, Lt = 0;
  }
}
const yn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ho(e) {
  const t = Ue;
  try {
    for (Je = 0; Je < _e.length; Je++) {
      const n = _e[Je];
      n && !(n.flags & 8) && (dt.NODE_ENV !== "production" && t(n), n.flags & 4 && (n.flags &= -2), qt(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Je < _e.length; Je++) {
      const n = _e[Je];
      n && (n.flags &= -2);
    }
    Je = -1, _e.length = 0, fo(), Kn = null, (_e.length || Vt.length) && ho();
  }
}
let Pe = null, po = null;
function qn(e) {
  const t = Pe;
  return Pe = e, po = e && e.type.__scopeId || null, t;
}
function go(e, t = Pe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Yr(-1);
    const i = qn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      qn(i), s._d && Yr(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function da(e, t) {
  if (Pe === null)
    return e;
  const n = Cs(Pe), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = X] = t[r];
    i && (L(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ot(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function vt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (ct(), He(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ut());
  }
}
const pa = Symbol("_vte"), mo = (e) => e.__isTeleport, gt = Symbol("_leaveCb"), Dn = Symbol("_enterCb");
function ga() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Sr(() => {
    e.isMounted = !0;
  }), wo(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ie = [Function, Array], bo = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ie,
  onEnter: Ie,
  onAfterEnter: Ie,
  onEnterCancelled: Ie,
  // leave
  onBeforeLeave: Ie,
  onLeave: Ie,
  onAfterLeave: Ie,
  onLeaveCancelled: Ie,
  // appear
  onBeforeAppear: Ie,
  onAppear: Ie,
  onAfterAppear: Ie,
  onAppearCancelled: Ie
}, Co = (e) => {
  const t = e.subTree;
  return t.component ? Co(t.component) : t;
}, ma = {
  name: "BaseTransition",
  props: bo,
  setup(e, { slots: t }) {
    const n = zo(), s = ga();
    return () => {
      const r = t.default && yo(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = _o(r), o = j(e), { mode: l } = o;
      if (s.isLeaving)
        return Ms(i);
      const a = Gr(i);
      if (!a)
        return Ms(i);
      let u = js(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      a.type !== we && xn(a, u);
      let c = n.subTree && Gr(n.subTree);
      if (c && c.type !== we && !Mt(a, c) && Co(n).type !== we) {
        let d = js(
          c,
          o,
          s,
          n
        );
        if (xn(c, d), l === "out-in" && a.type !== we)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Ms(i);
        l === "in-out" && a.type !== we ? d.delayLeave = (p, m, P) => {
          const b = So(
            s,
            c
          );
          b[String(c.key)] = c, p[gt] = () => {
            m(), p[gt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            P(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function _o(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== we) {
        t = n;
        break;
      }
  }
  return t;
}
const ba = ma;
function So(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function js(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: P,
    onLeaveCancelled: b,
    onBeforeAppear: E,
    onAppear: D,
    onAfterAppear: B,
    onAppearCancelled: W
  } = t, A = String(e.key), T = So(n, e), N = ($, V) => {
    $ && He(
      $,
      s,
      9,
      V
    );
  }, H = ($, V) => {
    const ie = V[1];
    N($, V), I($) ? $.every((M) => M.length <= 1) && ie() : $.length <= 1 && ie();
  }, Z = {
    mode: o,
    persisted: l,
    beforeEnter($) {
      let V = a;
      if (!n.isMounted)
        if (i)
          V = E || a;
        else
          return;
      $[gt] && $[gt](
        !0
        /* cancelled */
      );
      const ie = T[A];
      ie && Mt(e, ie) && ie.el[gt] && ie.el[gt](), N(V, [$]);
    },
    enter($) {
      let V = u, ie = c, M = d;
      if (!n.isMounted)
        if (i)
          V = D || u, ie = B || c, M = W || d;
        else
          return;
      let se = !1;
      const ge = $[Dn] = (Ye) => {
        se || (se = !0, Ye ? N(M, [$]) : N(ie, [$]), Z.delayedLeave && Z.delayedLeave(), $[Dn] = void 0);
      };
      V ? H(V, [$, ge]) : ge();
    },
    leave($, V) {
      const ie = String(e.key);
      if ($[Dn] && $[Dn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return V();
      N(p, [$]);
      let M = !1;
      const se = $[gt] = (ge) => {
        M || (M = !0, V(), ge ? N(b, [$]) : N(P, [$]), $[gt] = void 0, T[ie] === e && delete T[ie]);
      };
      T[ie] = e, m ? H(m, [$, se]) : se();
    },
    clone($) {
      const V = js(
        $,
        t,
        n,
        s,
        r
      );
      return r && r(V), V;
    }
  };
  return Z;
}
function Ms(e) {
  if (ps(e))
    return e = _t(e), e.children = null, e;
}
function Gr(e) {
  if (!ps(e))
    return mo(e.type) && e.children ? _o(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && L(n.default))
      return n.default();
  }
}
function xn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, xn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function yo(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === Be ? (o.patchFlag & 128 && r++, s = s.concat(
      yo(o.children, t, l)
    )) : (t || o.type !== we) && s.push(l != null ? _t(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ot(e, t) {
  return L(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function xo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Jn(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach(
      (P, b) => Jn(
        P,
        t && (I(t) ? t[b] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (fn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Jn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Cs(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e, u = t && t.r, c = l.refs === X ? l.refs = {} : l.refs, d = l.setupState, p = j(d), m = d === X ? () => !1 : (P) => z(p, P);
  if (u != null && u !== a && (le(u) ? (c[u] = null, m(u) && (d[u] = null)) : pe(u) && (u.value = null)), L(a))
    qt(a, l, 12, [o, c]);
  else {
    const P = le(a), b = pe(a);
    if (P || b) {
      const E = () => {
        if (e.f) {
          const D = P ? m(a) ? d[a] : c[a] : a.value;
          r ? I(D) && ur(D, i) : I(D) ? D.includes(i) || D.push(i) : P ? (c[a] = [i], m(a) && (d[a] = c[a])) : (a.value = [i], e.k && (c[e.k] = a.value));
        } else P ? (c[a] = o, m(a) && (d[a] = o)) : b && (a.value = o, e.k && (c[e.k] = o));
      };
      o ? (E.id = -1, Me(E, n)) : E();
    }
  }
}
as().requestIdleCallback;
as().cancelIdleCallback;
const fn = (e) => !!e.type.__asyncLoader, ps = (e) => e.type.__isKeepAlive;
function Ca(e, t) {
  vo(e, "a", t);
}
function _a(e, t) {
  vo(e, "da", t);
}
function vo(e, t, n = fe) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (gs(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ps(r.parent.vnode) && Sa(s, t, n, r), r = r.parent;
  }
}
function Sa(e, t, n, s) {
  const r = gs(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Po(() => {
    ur(s[t], r);
  }, n);
}
function gs(e, t, n = fe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      ct();
      const l = kn(n), a = He(t, n, e, o);
      return l(), ut(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const ft = (e) => (t, n = fe) => {
  (!wn || e === "sp") && gs(e, (...s) => t(...s), n);
}, ya = ft("bm"), Sr = ft("m"), xa = ft(
  "bu"
), va = ft("u"), wo = ft(
  "bum"
), Po = ft("um"), wa = ft(
  "sp"
), Pa = ft("rtg"), ka = ft("rtc");
function Ea(e, t = fe) {
  gs("ec", e, t);
}
const Ma = "components";
function hn(e, t) {
  return Ta(Ma, e, !0, t) || e;
}
const Aa = Symbol.for("v-ndc");
function Ta(e, t, n = !0, s = !1) {
  const r = Pe || fe;
  if (r) {
    const i = r.type;
    {
      const l = Jo(
        i,
        !1
      );
      if (l && (l === t || l === ye(t) || l === ls(ye(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      jr(r[e] || i[e], t) || // global registration
      jr(r.appContext[e], t)
    );
    return !o && s ? i : o;
  }
}
function jr(e, t) {
  return e && (e[t] || e[ye(t)] || e[ls(ye(t))]);
}
function Ra(e, t, n, s) {
  let r;
  const i = n, o = I(e);
  if (o || le(e)) {
    const l = o && jt(e);
    let a = !1;
    l && (a = !Le(e), e = us(e)), r = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(
        a ? be(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (ne(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        r[a] = t(e[c], c, a, i);
      }
    }
  else
    r = [];
  return r;
}
const Vs = (e) => e ? Ko(e) ? Cs(e) : Vs(e.parent) : null, dn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Vs(e.parent),
    $root: (e) => Vs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Eo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      _r(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Cr.bind(e.proxy)),
    $watch: (e) => Ya.bind(e)
  })
), As = (e, t) => e !== X && !e.__isScriptSetup && z(e, t), Ia = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: a } = e;
    let u;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (As(s, t))
          return o[t] = 1, s[t];
        if (r !== X && z(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && z(u, t)
        )
          return o[t] = 3, i[t];
        if (n !== X && z(n, t))
          return o[t] = 4, n[t];
        zs && (o[t] = 0);
      }
    }
    const c = dn[t];
    let d, p;
    if (c)
      return t === "$attrs" && me(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== X && z(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, z(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return As(r, t) ? (r[t] = n, !0) : s !== X && z(s, t) ? (s[t] = n, !0) : z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== X && z(e, o) || As(t, o) || (l = i[0]) && z(l, o) || z(s, o) || z(dn, o) || z(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Vr(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let zs = !0;
function Oa(e) {
  const t = Eo(e), n = e.proxy, s = e.ctx;
  zs = !1, t.beforeCreate && zr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: p,
    beforeUpdate: m,
    updated: P,
    activated: b,
    deactivated: E,
    beforeDestroy: D,
    beforeUnmount: B,
    destroyed: W,
    unmounted: A,
    render: T,
    renderTracked: N,
    renderTriggered: H,
    errorCaptured: Z,
    serverPrefetch: $,
    // public API
    expose: V,
    inheritAttrs: ie,
    // assets
    components: M,
    directives: se,
    filters: ge
  } = t;
  if (u && Da(u, s, null), o)
    for (const oe in o) {
      const Y = o[oe];
      L(Y) && (s[oe] = Y.bind(n));
    }
  if (r) {
    const oe = r.call(n, n);
    ne(oe) && (e.data = mr(oe));
  }
  if (zs = !0, i)
    for (const oe in i) {
      const Y = i[oe], yt = L(Y) ? Y.bind(n, n) : L(Y.get) ? Y.get.bind(n, n) : Ue, Mn = !L(Y) && L(Y.set) ? Y.set.bind(n) : Ue, xt = Xs({
        get: yt,
        set: Mn
      });
      Object.defineProperty(s, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => xt.value,
        set: (Ge) => xt.value = Ge
      });
    }
  if (l)
    for (const oe in l)
      ko(l[oe], s, n, oe);
  if (a) {
    const oe = L(a) ? a.call(n) : a;
    Reflect.ownKeys(oe).forEach((Y) => {
      Ao(Y, oe[Y]);
    });
  }
  c && zr(c, e, "c");
  function he(oe, Y) {
    I(Y) ? Y.forEach((yt) => oe(yt.bind(n))) : Y && oe(Y.bind(n));
  }
  if (he(ya, d), he(Sr, p), he(xa, m), he(va, P), he(Ca, b), he(_a, E), he(Ea, Z), he(ka, N), he(Pa, H), he(wo, B), he(Po, A), he(wa, $), I(V))
    if (V.length) {
      const oe = e.exposed || (e.exposed = {});
      V.forEach((Y) => {
        Object.defineProperty(oe, Y, {
          get: () => n[Y],
          set: (yt) => n[Y] = yt
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Ue && (e.render = T), ie != null && (e.inheritAttrs = ie), M && (e.components = M), se && (e.directives = se), $ && xo(e);
}
function Da(e, t, n = Ue) {
  I(e) && (e = Ks(e));
  for (const s in e) {
    const r = e[s];
    let i;
    ne(r) ? "default" in r ? i = Un(
      r.from || s,
      r.default,
      !0
    ) : i = Un(r.from || s) : i = Un(r), pe(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function zr(e, t, n) {
  He(
    I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ko(e, t, n, s) {
  let r = s.includes(".") ? Wo(n, s) : () => n[s];
  if (le(e)) {
    const i = t[e];
    L(i) && Xe(r, i);
  } else if (L(e))
    Xe(r, e.bind(n));
  else if (ne(e))
    if (I(e))
      e.forEach((i) => ko(i, t, n, s));
    else {
      const i = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(i) && Xe(r, i, e);
    }
}
function Eo(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (u) => Qn(a, u, o, !0)
  ), Qn(a, t, o)), ne(t) && i.set(t, a), a;
}
function Qn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Qn(e, i, n, !0), r && r.forEach(
    (o) => Qn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Fa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Fa = {
  data: Kr,
  props: qr,
  emits: qr,
  // objects
  methods: sn,
  computed: sn,
  // lifecycle
  beforeCreate: Ce,
  created: Ce,
  beforeMount: Ce,
  mounted: Ce,
  beforeUpdate: Ce,
  updated: Ce,
  beforeDestroy: Ce,
  beforeUnmount: Ce,
  destroyed: Ce,
  unmounted: Ce,
  activated: Ce,
  deactivated: Ce,
  errorCaptured: Ce,
  serverPrefetch: Ce,
  // assets
  components: sn,
  directives: sn,
  // watch
  watch: Na,
  // provide / inject
  provide: Kr,
  inject: La
};
function Kr(e, t) {
  return t ? e ? function() {
    return ae(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function La(e, t) {
  return sn(Ks(e), Ks(t));
}
function Ks(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function sn(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qr(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    Vr(e),
    Vr(t ?? {})
  ) : t;
}
function Na(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ce(e[s], t[s]);
  return n;
}
function Mo() {
  return {
    app: null,
    config: {
      isNativeTag: Cl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let $a = 0;
function Ba(e, t) {
  return function(s, r = null) {
    L(s) || (s = ae({}, s)), r != null && !ne(r) && (r = null);
    const i = Mo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: $a++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: vc,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return o.has(c) || (c && L(c.install) ? (o.add(c), c.install(u, ...d)) : L(c) && (o.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (i.components[c] = d, u) : i.components[c];
      },
      directive(c, d) {
        return d ? (i.directives[c] = d, u) : i.directives[c];
      },
      mount(c, d, p) {
        if (!a) {
          const m = u._ceVNode || de(s, r);
          return m.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(m, c, p), a = !0, u._container = c, c.__vue_app__ = u, Cs(m.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (He(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return i.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = zt;
        zt = u;
        try {
          return c();
        } finally {
          zt = d;
        }
      }
    };
    return u;
  };
}
let zt = null;
function Ao(e, t) {
  if (fe) {
    let n = fe.provides;
    const s = fe.parent && fe.parent.provides;
    s === n && (n = fe.provides = Object.create(s)), n[e] = t;
  }
}
function Un(e, t, n = !1) {
  const s = fe || Pe;
  if (s || zt) {
    const r = zt ? zt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(s && s.proxy) : t;
  }
}
const To = {}, Ro = () => Object.create(To), Io = (e) => Object.getPrototypeOf(e) === To;
function Ua(e, t, n, s = !1) {
  const r = {}, i = Ro();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oo(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : Ql(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Wa(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = j(r), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let p = c[d];
        if (ms(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (z(i, p))
            m !== i[p] && (i[p] = m, u = !0);
          else {
            const P = ye(p);
            r[P] = qs(
              a,
              l,
              P,
              m,
              e,
              !1
            );
          }
        else
          m !== i[p] && (i[p] = m, u = !0);
      }
    }
  } else {
    Oo(e, t, r, i) && (u = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !z(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Te(d)) === d || !z(t, c))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[d] = qs(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== l)
      for (const d in i)
        (!t || !z(t, d)) && (delete i[d], u = !0);
  }
  u && it(e.attrs, "set", "");
}
function Oo(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (ln(a))
        continue;
      const u = t[a];
      let c;
      r && z(r, c = ye(a)) ? !i || !i.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : ms(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, o = !0);
    }
  if (i) {
    const a = j(n), u = l || X;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = qs(
        r,
        a,
        d,
        u[d],
        e,
        !z(u, d)
      );
    }
  }
  return o;
}
function qs(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = z(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && L(a)) {
        const { propsDefaults: u } = r;
        if (n in u)
          s = u[n];
        else {
          const c = kn(r);
          s = u[n] = a.call(
            null,
            t
          ), c();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Te(n)) && (s = !0));
  }
  return s;
}
const Ha = /* @__PURE__ */ new WeakMap();
function Do(e, t, n = !1) {
  const s = n ? Ha : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let a = !1;
  if (!L(e)) {
    const c = (d) => {
      a = !0;
      const [p, m] = Do(d, t, !0);
      ae(o, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !a)
    return ne(e) && s.set(e, Ht), Ht;
  if (I(i))
    for (let c = 0; c < i.length; c++) {
      const d = ye(i[c]);
      Jr(d) && (o[d] = X);
    }
  else if (i)
    for (const c in i) {
      const d = ye(c);
      if (Jr(d)) {
        const p = i[c], m = o[d] = I(p) || L(p) ? { type: p } : ae({}, p), P = m.type;
        let b = !1, E = !0;
        if (I(P))
          for (let D = 0; D < P.length; ++D) {
            const B = P[D], W = L(B) && B.name;
            if (W === "Boolean") {
              b = !0;
              break;
            } else W === "String" && (E = !1);
          }
        else
          b = L(P) && P.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = b, m[
          1
          /* shouldCastTrue */
        ] = E, (b || z(m, "default")) && l.push(d);
      }
    }
  const u = [o, l];
  return ne(e) && s.set(e, u), u;
}
function Jr(e) {
  return e[0] !== "$" && !ln(e);
}
const Fo = (e) => e[0] === "_" || e === "$stable", yr = (e) => I(e) ? e.map(Qe) : [Qe(e)], Ga = (e, t, n) => {
  if (t._n)
    return t;
  const s = go((...r) => (dt.NODE_ENV !== "production" && fe && (!n || (n.root, fe.root)), yr(t(...r))), n);
  return s._c = !1, s;
}, Lo = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Fo(r)) continue;
    const i = e[r];
    if (L(i))
      t[r] = Ga(r, i, s);
    else if (i != null) {
      const o = yr(i);
      t[r] = () => o;
    }
  }
}, No = (e, t) => {
  const n = yr(t);
  e.slots.default = () => n;
}, $o = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, ja = (e, t, n) => {
  const s = e.slots = Ro();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? ($o(s, t, n), n && $i(s, "_", r, !0)) : Lo(t, s);
  } else t && No(e, t);
}, Va = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = X;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : $o(r, t, n) : (i = !t.$stable, Lo(t, r)), o = t;
  } else t && (No(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Fo(l) && o[l] == null && delete r[l];
}, Me = oc;
function za(e) {
  return Ka(e);
}
function Ka(e, t) {
  const n = as();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: p,
    setScopeId: m = Ue,
    insertStaticContent: P
  } = e, b = (f, h, g, S = null, C = null, _ = null, w = void 0, v = null, x = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !Mt(f, h) && (S = An(f), Ge(f, C, _, !0), f = null), h.patchFlag === -2 && (x = !1, h.dynamicChildren = null);
    const { type: y, ref: O, shapeFlag: k } = h;
    switch (y) {
      case bs:
        E(f, h, g, S);
        break;
      case we:
        D(f, h, g, S);
        break;
      case Rs:
        f == null && B(h, g, S, w);
        break;
      case Be:
        M(
          f,
          h,
          g,
          S,
          C,
          _,
          w,
          v,
          x
        );
        break;
      default:
        k & 1 ? T(
          f,
          h,
          g,
          S,
          C,
          _,
          w,
          v,
          x
        ) : k & 6 ? se(
          f,
          h,
          g,
          S,
          C,
          _,
          w,
          v,
          x
        ) : (k & 64 || k & 128) && y.process(
          f,
          h,
          g,
          S,
          C,
          _,
          w,
          v,
          x,
          Xt
        );
    }
    O != null && C && Jn(O, f && f.ref, _, h || f, !h);
  }, E = (f, h, g, S) => {
    if (f == null)
      s(
        h.el = l(h.children),
        g,
        S
      );
    else {
      const C = h.el = f.el;
      h.children !== f.children && u(C, h.children);
    }
  }, D = (f, h, g, S) => {
    f == null ? s(
      h.el = a(h.children || ""),
      g,
      S
    ) : h.el = f.el;
  }, B = (f, h, g, S) => {
    [f.el, f.anchor] = P(
      f.children,
      h,
      g,
      S,
      f.el,
      f.anchor
    );
  }, W = ({ el: f, anchor: h }, g, S) => {
    let C;
    for (; f && f !== h; )
      C = p(f), s(f, g, S), f = C;
    s(h, g, S);
  }, A = ({ el: f, anchor: h }) => {
    let g;
    for (; f && f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, T = (f, h, g, S, C, _, w, v, x) => {
    h.type === "svg" ? w = "svg" : h.type === "math" && (w = "mathml"), f == null ? N(
      h,
      g,
      S,
      C,
      _,
      w,
      v,
      x
    ) : $(
      f,
      h,
      C,
      _,
      w,
      v,
      x
    );
  }, N = (f, h, g, S, C, _, w, v) => {
    let x, y;
    const { props: O, shapeFlag: k, transition: R, dirs: F } = f;
    if (x = f.el = o(
      f.type,
      _,
      O && O.is,
      O
    ), k & 8 ? c(x, f.children) : k & 16 && Z(
      f.children,
      x,
      null,
      S,
      C,
      Ts(f, _),
      w,
      v
    ), F && vt(f, null, S, "created"), H(x, f, f.scopeId, w, S), O) {
      for (const ee in O)
        ee !== "value" && !ln(ee) && i(x, ee, null, O[ee], _, S);
      "value" in O && i(x, "value", null, O.value, _), (y = O.onVnodeBeforeMount) && Ke(y, S, f);
    }
    F && vt(f, null, S, "beforeMount");
    const G = qa(C, R);
    G && R.beforeEnter(x), s(x, h, g), ((y = O && O.onVnodeMounted) || G || F) && Me(() => {
      y && Ke(y, S, f), G && R.enter(x), F && vt(f, null, S, "mounted");
    }, C);
  }, H = (f, h, g, S, C) => {
    if (g && m(f, g), S)
      for (let _ = 0; _ < S.length; _++)
        m(f, S[_]);
    if (C) {
      let _ = C.subTree;
      if (h === _ || Go(_.type) && (_.ssContent === h || _.ssFallback === h)) {
        const w = C.vnode;
        H(
          f,
          w,
          w.scopeId,
          w.slotScopeIds,
          C.parent
        );
      }
    }
  }, Z = (f, h, g, S, C, _, w, v, x = 0) => {
    for (let y = x; y < f.length; y++) {
      const O = f[y] = v ? mt(f[y]) : Qe(f[y]);
      b(
        null,
        O,
        h,
        g,
        S,
        C,
        _,
        w,
        v
      );
    }
  }, $ = (f, h, g, S, C, _, w) => {
    const v = h.el = f.el;
    let { patchFlag: x, dynamicChildren: y, dirs: O } = h;
    x |= f.patchFlag & 16;
    const k = f.props || X, R = h.props || X;
    let F;
    if (g && wt(g, !1), (F = R.onVnodeBeforeUpdate) && Ke(F, g, h, f), O && vt(h, f, g, "beforeUpdate"), g && wt(g, !0), (k.innerHTML && R.innerHTML == null || k.textContent && R.textContent == null) && c(v, ""), y ? V(
      f.dynamicChildren,
      y,
      v,
      g,
      S,
      Ts(h, C),
      _
    ) : w || Y(
      f,
      h,
      v,
      null,
      g,
      S,
      Ts(h, C),
      _,
      !1
    ), x > 0) {
      if (x & 16)
        ie(v, k, R, g, C);
      else if (x & 2 && k.class !== R.class && i(v, "class", null, R.class, C), x & 4 && i(v, "style", k.style, R.style, C), x & 8) {
        const G = h.dynamicProps;
        for (let ee = 0; ee < G.length; ee++) {
          const q = G[ee], ke = k[q], xe = R[q];
          (xe !== ke || q === "value") && i(v, q, ke, xe, C, g);
        }
      }
      x & 1 && f.children !== h.children && c(v, h.children);
    } else !w && y == null && ie(v, k, R, g, C);
    ((F = R.onVnodeUpdated) || O) && Me(() => {
      F && Ke(F, g, h, f), O && vt(h, f, g, "updated");
    }, S);
  }, V = (f, h, g, S, C, _, w) => {
    for (let v = 0; v < h.length; v++) {
      const x = f[v], y = h[v], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mt(x, y) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? d(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      b(
        x,
        y,
        O,
        null,
        S,
        C,
        _,
        w,
        !0
      );
    }
  }, ie = (f, h, g, S, C) => {
    if (h !== g) {
      if (h !== X)
        for (const _ in h)
          !ln(_) && !(_ in g) && i(
            f,
            _,
            h[_],
            null,
            C,
            S
          );
      for (const _ in g) {
        if (ln(_)) continue;
        const w = g[_], v = h[_];
        w !== v && _ !== "value" && i(f, _, v, w, C, S);
      }
      "value" in g && i(f, "value", h.value, g.value, C);
    }
  }, M = (f, h, g, S, C, _, w, v, x) => {
    const y = h.el = f ? f.el : l(""), O = h.anchor = f ? f.anchor : l("");
    let { patchFlag: k, dynamicChildren: R, slotScopeIds: F } = h;
    F && (v = v ? v.concat(F) : F), f == null ? (s(y, g, S), s(O, g, S), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      O,
      C,
      _,
      w,
      v,
      x
    )) : k > 0 && k & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (V(
      f.dynamicChildren,
      R,
      g,
      C,
      _,
      w,
      v
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || C && h === C.subTree) && Bo(
      f,
      h,
      !0
      /* shallow */
    )) : Y(
      f,
      h,
      g,
      O,
      C,
      _,
      w,
      v,
      x
    );
  }, se = (f, h, g, S, C, _, w, v, x) => {
    h.slotScopeIds = v, f == null ? h.shapeFlag & 512 ? C.ctx.activate(
      h,
      g,
      S,
      w,
      x
    ) : ge(
      h,
      g,
      S,
      C,
      _,
      w,
      x
    ) : Ye(f, h, x);
  }, ge = (f, h, g, S, C, _, w) => {
    const v = f.component = pc(
      f,
      S,
      C
    );
    if (ps(f) && (v.ctx.renderer = Xt), gc(v, !1, w), v.asyncDep) {
      if (C && C.registerDep(v, he, w), !f.el) {
        const x = v.subTree = de(we);
        D(null, x, h, g);
      }
    } else
      he(
        v,
        f,
        h,
        g,
        C,
        _,
        w
      );
  }, Ye = (f, h, g) => {
    const S = h.component = f.component;
    if (rc(f, h, g))
      if (S.asyncDep && !S.asyncResolved) {
        oe(S, h, g);
        return;
      } else
        S.next = h, S.update();
    else
      h.el = f.el, S.vnode = h;
  }, he = (f, h, g, S, C, _, w) => {
    const v = () => {
      if (f.isMounted) {
        let { next: k, bu: R, u: F, parent: G, vnode: ee } = f;
        {
          const Ve = Uo(f);
          if (Ve) {
            k && (k.el = ee.el, oe(f, k, w)), Ve.asyncDep.then(() => {
              f.isUnmounted || v();
            });
            return;
          }
        }
        let q = k, ke;
        wt(f, !1), k ? (k.el = ee.el, oe(f, k, w)) : k = ee, R && Bn(R), (ke = k.props && k.props.onVnodeBeforeUpdate) && Ke(ke, G, k, ee), wt(f, !0);
        const xe = Xr(f), je = f.subTree;
        f.subTree = xe, b(
          je,
          xe,
          // parent may have changed if it's in a teleport
          d(je.el),
          // anchor may have changed if it's in a fragment
          An(je),
          f,
          C,
          _
        ), k.el = xe.el, q === null && ic(f, xe.el), F && Me(F, C), (ke = k.props && k.props.onVnodeUpdated) && Me(
          () => Ke(ke, G, k, ee),
          C
        );
      } else {
        let k;
        const { el: R, props: F } = h, { bm: G, m: ee, parent: q, root: ke, type: xe } = f, je = fn(h);
        wt(f, !1), G && Bn(G), !je && (k = F && F.onVnodeBeforeMount) && Ke(k, q, h), wt(f, !0);
        {
          ke.ce && ke.ce._injectChildStyle(xe);
          const Ve = f.subTree = Xr(f);
          b(
            null,
            Ve,
            g,
            S,
            f,
            C,
            _
          ), h.el = Ve.el;
        }
        if (ee && Me(ee, C), !je && (k = F && F.onVnodeMounted)) {
          const Ve = h;
          Me(
            () => Ke(k, q, Ve),
            C
          );
        }
        (h.shapeFlag & 256 || q && fn(q.vnode) && q.vnode.shapeFlag & 256) && f.a && Me(f.a, C), f.isMounted = !0, h = g = S = null;
      }
    };
    f.scope.on();
    const x = f.effect = new Gi(v);
    f.scope.off();
    const y = f.update = x.run.bind(x), O = f.job = x.runIfDirty.bind(x);
    O.i = f, O.id = f.uid, x.scheduler = () => _r(O), wt(f, !0), y();
  }, oe = (f, h, g) => {
    h.component = f;
    const S = f.vnode.props;
    f.vnode = h, f.next = null, Wa(f, h.props, S, g), Va(f, h.children, g), ct(), Hr(f), ut();
  }, Y = (f, h, g, S, C, _, w, v, x = !1) => {
    const y = f && f.children, O = f ? f.shapeFlag : 0, k = h.children, { patchFlag: R, shapeFlag: F } = h;
    if (R > 0) {
      if (R & 128) {
        Mn(
          y,
          k,
          g,
          S,
          C,
          _,
          w,
          v,
          x
        );
        return;
      } else if (R & 256) {
        yt(
          y,
          k,
          g,
          S,
          C,
          _,
          w,
          v,
          x
        );
        return;
      }
    }
    F & 8 ? (O & 16 && Qt(y, C, _), k !== y && c(g, k)) : O & 16 ? F & 16 ? Mn(
      y,
      k,
      g,
      S,
      C,
      _,
      w,
      v,
      x
    ) : Qt(y, C, _, !0) : (O & 8 && c(g, ""), F & 16 && Z(
      k,
      g,
      S,
      C,
      _,
      w,
      v,
      x
    ));
  }, yt = (f, h, g, S, C, _, w, v, x) => {
    f = f || Ht, h = h || Ht;
    const y = f.length, O = h.length, k = Math.min(y, O);
    let R;
    for (R = 0; R < k; R++) {
      const F = h[R] = x ? mt(h[R]) : Qe(h[R]);
      b(
        f[R],
        F,
        g,
        null,
        C,
        _,
        w,
        v,
        x
      );
    }
    y > O ? Qt(
      f,
      C,
      _,
      !0,
      !1,
      k
    ) : Z(
      h,
      g,
      S,
      C,
      _,
      w,
      v,
      x,
      k
    );
  }, Mn = (f, h, g, S, C, _, w, v, x) => {
    let y = 0;
    const O = h.length;
    let k = f.length - 1, R = O - 1;
    for (; y <= k && y <= R; ) {
      const F = f[y], G = h[y] = x ? mt(h[y]) : Qe(h[y]);
      if (Mt(F, G))
        b(
          F,
          G,
          g,
          null,
          C,
          _,
          w,
          v,
          x
        );
      else
        break;
      y++;
    }
    for (; y <= k && y <= R; ) {
      const F = f[k], G = h[R] = x ? mt(h[R]) : Qe(h[R]);
      if (Mt(F, G))
        b(
          F,
          G,
          g,
          null,
          C,
          _,
          w,
          v,
          x
        );
      else
        break;
      k--, R--;
    }
    if (y > k) {
      if (y <= R) {
        const F = R + 1, G = F < O ? h[F].el : S;
        for (; y <= R; )
          b(
            null,
            h[y] = x ? mt(h[y]) : Qe(h[y]),
            g,
            G,
            C,
            _,
            w,
            v,
            x
          ), y++;
      }
    } else if (y > R)
      for (; y <= k; )
        Ge(f[y], C, _, !0), y++;
    else {
      const F = y, G = y, ee = /* @__PURE__ */ new Map();
      for (y = G; y <= R; y++) {
        const Ee = h[y] = x ? mt(h[y]) : Qe(h[y]);
        Ee.key != null && ee.set(Ee.key, y);
      }
      let q, ke = 0;
      const xe = R - G + 1;
      let je = !1, Ve = 0;
      const Zt = new Array(xe);
      for (y = 0; y < xe; y++) Zt[y] = 0;
      for (y = F; y <= k; y++) {
        const Ee = f[y];
        if (ke >= xe) {
          Ge(Ee, C, _, !0);
          continue;
        }
        let ze;
        if (Ee.key != null)
          ze = ee.get(Ee.key);
        else
          for (q = G; q <= R; q++)
            if (Zt[q - G] === 0 && Mt(Ee, h[q])) {
              ze = q;
              break;
            }
        ze === void 0 ? Ge(Ee, C, _, !0) : (Zt[ze - G] = y + 1, ze >= Ve ? Ve = ze : je = !0, b(
          Ee,
          h[ze],
          g,
          null,
          C,
          _,
          w,
          v,
          x
        ), ke++);
      }
      const Nr = je ? Ja(Zt) : Ht;
      for (q = Nr.length - 1, y = xe - 1; y >= 0; y--) {
        const Ee = G + y, ze = h[Ee], $r = Ee + 1 < O ? h[Ee + 1].el : S;
        Zt[y] === 0 ? b(
          null,
          ze,
          g,
          $r,
          C,
          _,
          w,
          v,
          x
        ) : je && (q < 0 || y !== Nr[q] ? xt(ze, g, $r, 2) : q--);
      }
    }
  }, xt = (f, h, g, S, C = null) => {
    const { el: _, type: w, transition: v, children: x, shapeFlag: y } = f;
    if (y & 6) {
      xt(f.component.subTree, h, g, S);
      return;
    }
    if (y & 128) {
      f.suspense.move(h, g, S);
      return;
    }
    if (y & 64) {
      w.move(f, h, g, Xt);
      return;
    }
    if (w === Be) {
      s(_, h, g);
      for (let k = 0; k < x.length; k++)
        xt(x[k], h, g, S);
      s(f.anchor, h, g);
      return;
    }
    if (w === Rs) {
      W(f, h, g);
      return;
    }
    if (S !== 2 && y & 1 && v)
      if (S === 0)
        v.beforeEnter(_), s(_, h, g), Me(() => v.enter(_), C);
      else {
        const { leave: k, delayLeave: R, afterLeave: F } = v, G = () => s(_, h, g), ee = () => {
          k(_, () => {
            G(), F && F();
          });
        };
        R ? R(_, G, ee) : ee();
      }
    else
      s(_, h, g);
  }, Ge = (f, h, g, S = !1, C = !1) => {
    const {
      type: _,
      props: w,
      ref: v,
      children: x,
      dynamicChildren: y,
      shapeFlag: O,
      patchFlag: k,
      dirs: R,
      cacheIndex: F
    } = f;
    if (k === -2 && (C = !1), v != null && Jn(v, null, g, f, !0), F != null && (h.renderCache[F] = void 0), O & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const G = O & 1 && R, ee = !fn(f);
    let q;
    if (ee && (q = w && w.onVnodeBeforeUnmount) && Ke(q, h, f), O & 6)
      gl(f.component, g, S);
    else {
      if (O & 128) {
        f.suspense.unmount(g, S);
        return;
      }
      G && vt(f, null, h, "beforeUnmount"), O & 64 ? f.type.remove(
        f,
        h,
        g,
        Xt,
        S
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Be || k > 0 && k & 64) ? Qt(
        y,
        h,
        g,
        !1,
        !0
      ) : (_ === Be && k & 384 || !C && O & 16) && Qt(x, h, g), S && Fr(f);
    }
    (ee && (q = w && w.onVnodeUnmounted) || G) && Me(() => {
      q && Ke(q, h, f), G && vt(f, null, h, "unmounted");
    }, g);
  }, Fr = (f) => {
    const { type: h, el: g, anchor: S, transition: C } = f;
    if (h === Be) {
      pl(g, S);
      return;
    }
    if (h === Rs) {
      A(f);
      return;
    }
    const _ = () => {
      r(g), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (f.shapeFlag & 1 && C && !C.persisted) {
      const { leave: w, delayLeave: v } = C, x = () => w(g, _);
      v ? v(f.el, _, x) : x();
    } else
      _();
  }, pl = (f, h) => {
    let g;
    for (; f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, gl = (f, h, g) => {
    const { bum: S, scope: C, job: _, subTree: w, um: v, m: x, a: y } = f;
    Qr(x), Qr(y), S && Bn(S), C.stop(), _ && (_.flags |= 8, Ge(w, f, h, g)), v && Me(v, h), Me(() => {
      f.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve());
  }, Qt = (f, h, g, S = !1, C = !1, _ = 0) => {
    for (let w = _; w < f.length; w++)
      Ge(f[w], h, g, S, C);
  }, An = (f) => {
    if (f.shapeFlag & 6)
      return An(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = p(f.anchor || f.el), g = h && h[pa];
    return g ? p(g) : h;
  };
  let ys = !1;
  const Lr = (f, h, g) => {
    f == null ? h._vnode && Ge(h._vnode, null, null, !0) : b(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      g
    ), h._vnode = f, ys || (ys = !0, Hr(), fo(), ys = !1);
  }, Xt = {
    p: b,
    um: Ge,
    m: xt,
    r: Fr,
    mt: ge,
    mc: Z,
    pc: Y,
    pbc: V,
    n: An,
    o: e
  };
  return {
    render: Lr,
    hydrate: void 0,
    createApp: Ba(Lr)
  };
}
function Ts({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function qa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Bo(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = mt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Bo(o, l)), l.type === bs && (l.el = o.el);
    }
}
function Ja(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < u ? i = l + 1 : o = l;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Uo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Uo(t);
}
function Qr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Qa = Symbol.for("v-scx"), Xa = () => Un(Qa);
function Za(e, t) {
  return xr(e, null, t);
}
function Xe(e, t, n) {
  return xr(e, t, n);
}
function xr(e, t, n = X) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = ae({}, n), a = t && s || !t && i !== "post";
  let u;
  if (wn) {
    if (i === "sync") {
      const m = Xa();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Ue, m.resume = Ue, m.pause = Ue, m;
    }
  }
  const c = fe;
  l.call = (m, P, b) => He(m, c, P, b);
  let d = !1;
  i === "post" ? l.scheduler = (m) => {
    Me(m, c && c.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (m, P) => {
    P ? m() : _r(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const p = ra(e, t, l);
  return wn && (u ? u.push(p) : a && p()), p;
}
function Ya(e, t, n) {
  const s = this.proxy, r = le(e) ? e.includes(".") ? Wo(s, e) : () => s[e] : e.bind(s, s);
  let i;
  L(t) ? i = t : (i = t.handler, n = t);
  const o = kn(this), l = xr(r, i.bind(s), n);
  return o(), l;
}
function Wo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const ec = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ye(t)}Modifiers`] || e[`${Te(t)}Modifiers`];
function tc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  let r = n;
  const i = t.startsWith("update:"), o = i && ec(s, t.slice(7));
  o && (o.trim && (r = n.map((c) => le(c) ? c.trim() : c)), o.number && (r = n.map(Ns)));
  let l, a = s[l = xs(t)] || // also try camelCase event handler (#2249)
  s[l = xs(ye(t))];
  !a && i && (a = s[l = xs(Te(t))]), a && He(
    a,
    e,
    6,
    r
  );
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, He(
      u,
      e,
      6,
      r
    );
  }
}
function Ho(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!L(e)) {
    const a = (u) => {
      const c = Ho(u, t, !0);
      c && (l = !0, ae(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (ne(e) && s.set(e, null), null) : (I(i) ? i.forEach((a) => o[a] = null) : ae(o, i), ne(e) && s.set(e, o), o);
}
function ms(e, t) {
  return !e || !ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, Te(t)) || z(e, t));
}
function Xr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: a,
    render: u,
    renderCache: c,
    props: d,
    data: p,
    setupState: m,
    ctx: P,
    inheritAttrs: b
  } = e, E = qn(e);
  let D, B;
  try {
    if (n.shapeFlag & 4) {
      const A = r || s, T = dt.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(A, {
        get(N, H, Z) {
          return ia(
            `Property '${String(
              H
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(N, H, Z);
        }
      }) : A;
      D = Qe(
        u.call(
          T,
          A,
          c,
          dt.NODE_ENV !== "production" ? In(d) : d,
          m,
          p,
          P
        )
      ), B = l;
    } else {
      const A = t;
      dt.NODE_ENV, D = Qe(
        A.length > 1 ? A(
          dt.NODE_ENV !== "production" ? In(d) : d,
          dt.NODE_ENV !== "production" ? {
            get attrs() {
              return In(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : A(
          dt.NODE_ENV !== "production" ? In(d) : d,
          null
        )
      ), B = t.props ? l : nc(l);
    }
  } catch (A) {
    pn.length = 0, ds(A, e, 1), D = de(we);
  }
  let W = D;
  if (B && b !== !1) {
    const A = Object.keys(B), { shapeFlag: T } = W;
    A.length && T & 7 && (i && A.some(cr) && (B = sc(
      B,
      i
    )), W = _t(W, B, !1, !0));
  }
  return n.dirs && (W = _t(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && xn(W, n.transition), D = W, qn(E), D;
}
const nc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ss(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, sc = (e, t) => {
  const n = {};
  for (const s in e)
    (!cr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function rc(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Zr(s, o, u) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const p = c[d];
        if (o[p] !== s[p] && !ms(u, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Zr(s, o, u) : !0 : !!o;
  return !1;
}
function Zr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !ms(n, i))
      return !0;
  }
  return !1;
}
function ic({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Go = (e) => e.__isSuspense;
function oc(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : ha(e);
}
const Be = Symbol.for("v-fgt"), bs = Symbol.for("v-txt"), we = Symbol.for("v-cmt"), Rs = Symbol.for("v-stc"), pn = [];
let Re = null;
function Ne(e = !1) {
  pn.push(Re = e ? null : []);
}
function lc() {
  pn.pop(), Re = pn[pn.length - 1] || null;
}
let vn = 1;
function Yr(e, t = !1) {
  vn += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function jo(e) {
  return e.dynamicChildren = vn > 0 ? Re || Ht : null, lc(), vn > 0 && Re && Re.push(e), e;
}
function at(e, t, n, s, r, i) {
  return jo(
    Ze(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Js(e, t, n, s, r) {
  return jo(
    de(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Xn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vo = ({ key: e }) => e ?? null, Wn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || pe(e) || L(e) ? { i: Pe, r: e, k: t, f: !!n } : e : null);
function Ze(e, t = null, n = null, s = 0, r = null, i = e === Be ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vo(t),
    ref: t && Wn(t),
    scopeId: po,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Pe
  };
  return l ? (vr(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), vn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const de = ac;
function ac(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Aa) && (e = we), Xn(e)) {
    const l = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vr(l, n), vn > 0 && !i && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (yc(e) && (e = e.__vccOpts), t) {
    t = cc(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = cs(l)), ne(a) && (br(a) && !I(a) && (a = ae({}, a)), t.style = lt(a));
  }
  const o = le(e) ? 1 : Go(e) ? 128 : mo(e) ? 64 : ne(e) ? 4 : L(e) ? 2 : 0;
  return Ze(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function cc(e) {
  return e ? br(e) || Io(e) ? ae({}, e) : e : null;
}
function _t(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, u = t ? fc(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Vo(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? I(i) ? i.concat(Wn(t)) : [i, Wn(t)] : Wn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Be ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && xn(
    c,
    a.clone(c)
  ), c;
}
function uc(e = " ", t = 0) {
  return de(bs, null, e, t);
}
function Hn(e = "", t = !1) {
  return t ? (Ne(), Js(we, null, e)) : de(we, null, e);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? de(we) : I(e) ? de(
    Be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xn(e) ? mt(e) : de(bs, null, String(e));
}
function mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
}
function vr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), vr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Io(t) ? t._ctx = Pe : r === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: Pe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [uc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function fc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = cs([t.class, s.class]));
      else if (r === "style")
        t.style = lt([t.style, s.style]);
      else if (ss(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(I(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ke(e, t, n, s = null) {
  He(e, t, 7, [
    n,
    s
  ]);
}
const hc = Mo();
let dc = 0;
function pc(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || hc, i = {
    uid: dc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Tl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Do(s, r),
    emitsOptions: Ho(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = tc.bind(null, i), e.ce && e.ce(i), i;
}
let fe = null;
const zo = () => fe || Pe;
let Zn, Qs;
{
  const e = as(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Zn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fe = n
  ), Qs = t(
    "__VUE_SSR_SETTERS__",
    (n) => wn = n
  );
}
const kn = (e) => {
  const t = fe;
  return Zn(e), e.scope.on(), () => {
    e.scope.off(), Zn(t);
  };
}, ei = () => {
  fe && fe.scope.off(), Zn(null);
};
function Ko(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function gc(e, t = !1, n = !1) {
  t && Qs(t);
  const { props: s, children: r } = e.vnode, i = Ko(e);
  Ua(e, s, i, t), ja(e, r, n);
  const o = i ? mc(e, t) : void 0;
  return t && Qs(!1), o;
}
function mc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ia);
  const { setup: s } = n;
  if (s) {
    ct();
    const r = e.setupContext = s.length > 1 ? Cc(e) : null, i = kn(e), o = qt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Li(o);
    if (ut(), i(), (l || e.sp) && !fn(e) && xo(e), l) {
      if (o.then(ei, ei), t)
        return o.then((a) => {
          ti(e, a);
        }).catch((a) => {
          ds(a, e, 0);
        });
      e.asyncDep = o;
    } else
      ti(e, o);
  } else
    qo(e);
}
function ti(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = lo(t)), qo(e);
}
function qo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ue);
  {
    const r = kn(e);
    ct();
    try {
      Oa(e);
    } finally {
      ut(), r();
    }
  }
}
const bc = {
  get(e, t) {
    return me(e, "get", ""), e[t];
  }
};
function Cc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, bc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Cs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(lo(Xl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in dn)
        return dn[n](e);
    },
    has(t, n) {
      return n in t || n in dn;
    }
  })) : e.proxy;
}
const _c = /(?:^|[-_])(\w)/g, Sc = (e) => e.replace(_c, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Jo(e, t = !0) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qo(e, t, n = !1) {
  let s = Jo(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (i) => {
      for (const o in i)
        if (i[o] === t)
          return o;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Sc(s) : n ? "App" : "Anonymous";
}
function yc(e) {
  return L(e) && "__vccOpts" in e;
}
const Xs = (e, t) => na(e, t, wn);
function xc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ne(t) && !I(t) ? Xn(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Xn(n) && (n = [n]), de(e, t, n));
}
const vc = "3.5.13";
let Zs;
const ni = typeof window < "u" && window.trustedTypes;
if (ni)
  try {
    Zs = /* @__PURE__ */ ni.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Xo = Zs ? (e) => Zs.createHTML(e) : (e) => e, wc = "http://www.w3.org/2000/svg", Pc = "http://www.w3.org/1998/Math/MathML", rt = typeof document < "u" ? document : null, si = rt && /* @__PURE__ */ rt.createElement("template"), kc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? rt.createElementNS(wc, e) : t === "mathml" ? rt.createElementNS(Pc, e) : n ? rt.createElement(e, { is: n }) : rt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => rt.createTextNode(e),
  createComment: (e) => rt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => rt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      si.innerHTML = Xo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = si.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ht = "transition", en = "animation", Pn = Symbol("_vtc"), Zo = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Ec = /* @__PURE__ */ ae(
  {},
  bo,
  Zo
), Mc = (e) => (e.displayName = "Transition", e.props = Ec, e), Ac = /* @__PURE__ */ Mc(
  (e, { slots: t }) => xc(ba, Tc(e), t)
), Pt = (e, t = []) => {
  I(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ri = (e) => e ? I(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Tc(e) {
  const t = {};
  for (const M in e)
    M in Zo || (t[M] = e[M]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: u = o,
    appearToClass: c = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, P = Rc(r), b = P && P[0], E = P && P[1], {
    onBeforeEnter: D,
    onEnter: B,
    onEnterCancelled: W,
    onLeave: A,
    onLeaveCancelled: T,
    onBeforeAppear: N = D,
    onAppear: H = B,
    onAppearCancelled: Z = W
  } = t, $ = (M, se, ge, Ye) => {
    M._enterCancelled = Ye, kt(M, se ? c : l), kt(M, se ? u : o), ge && ge();
  }, V = (M, se) => {
    M._isLeaving = !1, kt(M, d), kt(M, m), kt(M, p), se && se();
  }, ie = (M) => (se, ge) => {
    const Ye = M ? H : B, he = () => $(se, M, ge);
    Pt(Ye, [se, he]), ii(() => {
      kt(se, M ? a : i), tt(se, M ? c : l), ri(Ye) || oi(se, s, b, he);
    });
  };
  return ae(t, {
    onBeforeEnter(M) {
      Pt(D, [M]), tt(M, i), tt(M, o);
    },
    onBeforeAppear(M) {
      Pt(N, [M]), tt(M, a), tt(M, u);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(M, se) {
      M._isLeaving = !0;
      const ge = () => V(M, se);
      tt(M, d), M._enterCancelled ? (tt(M, p), ci()) : (ci(), tt(M, p)), ii(() => {
        M._isLeaving && (kt(M, d), tt(M, m), ri(A) || oi(M, s, E, ge));
      }), Pt(A, [M, ge]);
    },
    onEnterCancelled(M) {
      $(M, !1, void 0, !0), Pt(W, [M]);
    },
    onAppearCancelled(M) {
      $(M, !0, void 0, !0), Pt(Z, [M]);
    },
    onLeaveCancelled(M) {
      V(M), Pt(T, [M]);
    }
  });
}
function Rc(e) {
  if (e == null)
    return null;
  if (ne(e))
    return [Is(e.enter), Is(e.leave)];
  {
    const t = Is(e);
    return [t, t];
  }
}
function Is(e) {
  return $s(e);
}
function tt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Pn] || (e[Pn] = /* @__PURE__ */ new Set())).add(t);
}
function kt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Pn];
  n && (n.delete(t), n.size || (e[Pn] = void 0));
}
function ii(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ic = 0;
function oi(e, t, n, s) {
  const r = e._endId = ++Ic, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: a } = Oc(e, t);
  if (!o)
    return s();
  const u = o + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, p), i();
  }, p = (m) => {
    m.target === e && ++c >= a && d();
  };
  setTimeout(() => {
    c < a && d();
  }, l + 1), e.addEventListener(u, p);
}
function Oc(e, t) {
  const n = window.getComputedStyle(e), s = (P) => (n[P] || "").split(", "), r = s(`${ht}Delay`), i = s(`${ht}Duration`), o = li(r, i), l = s(`${en}Delay`), a = s(`${en}Duration`), u = li(l, a);
  let c = null, d = 0, p = 0;
  t === ht ? o > 0 && (c = ht, d = o, p = i.length) : t === en ? u > 0 && (c = en, d = u, p = a.length) : (d = Math.max(o, u), c = d > 0 ? o > u ? ht : en : null, p = c ? c === ht ? i.length : a.length : 0);
  const m = c === ht && /\b(transform|all)(,|$)/.test(
    s(`${ht}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: p,
    hasTransform: m
  };
}
function li(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ai(n) + ai(e[s])));
}
function ai(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ci() {
  return document.body.offsetHeight;
}
function Dc(e, t, n) {
  const s = e[Pn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ui = Symbol("_vod"), Fc = Symbol("_vsh"), Lc = Symbol(""), Nc = /(^|;)\s*display\s*:/;
function $c(e, t, n) {
  const s = e.style, r = le(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (le(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Gn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Gn(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), Gn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Lc];
      o && (n += ";" + o), s.cssText = n, i = Nc.test(n);
    }
  } else t && e.removeAttribute("style");
  ui in e && (e[ui] = i ? s.display : "", e[Fc] && (s.display = "none"));
}
const fi = /\s*!important$/;
function Gn(e, t, n) {
  if (I(n))
    n.forEach((s) => Gn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Bc(e, t);
    fi.test(n) ? e.setProperty(
      Te(s),
      n.replace(fi, ""),
      "important"
    ) : e[s] = n;
  }
}
const hi = ["Webkit", "Moz", "ms"], Os = {};
function Bc(e, t) {
  const n = Os[t];
  if (n)
    return n;
  let s = ye(t);
  if (s !== "filter" && s in e)
    return Os[t] = s;
  s = ls(s);
  for (let r = 0; r < hi.length; r++) {
    const i = hi[r] + s;
    if (i in e)
      return Os[t] = i;
  }
  return t;
}
const di = "http://www.w3.org/1999/xlink";
function pi(e, t, n, s, r, i = Ml(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(di, t.slice(6, t.length)) : e.setAttributeNS(di, t, n) : n == null || i && !Bi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : St(n) ? String(n) : n
  );
}
function gi(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xo(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Bi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Nt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Uc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const mi = Symbol("_vei");
function Wc(e, t, n, s, r = null) {
  const i = e[mi] || (e[mi] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = Hc(t);
    if (s) {
      const u = i[t] = Vc(
        s,
        r
      );
      Nt(e, l, u, a);
    } else o && (Uc(e, l, o, a), i[t] = void 0);
  }
}
const bi = /(?:Once|Passive|Capture)$/;
function Hc(e) {
  let t;
  if (bi.test(e)) {
    t = {};
    let s;
    for (; s = e.match(bi); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Te(e.slice(2)), t];
}
let Ds = 0;
const Gc = /* @__PURE__ */ Promise.resolve(), jc = () => Ds || (Gc.then(() => Ds = 0), Ds = Date.now());
function Vc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    He(
      zc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = jc(), n;
}
function zc(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const Ci = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Kc = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Dc(e, s, o) : t === "style" ? $c(e, n, s) : ss(t) ? cr(t) || Wc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qc(e, t, s, o)) ? (gi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pi(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? gi(e, ye(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), pi(e, t, s, o));
};
function qc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ci(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ci(t) && le(n) ? !1 : t in e;
}
const _i = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Jc(e, t, n) {
  const s = /* @__PURE__ */ Ot(e, t);
  is(s) && ae(s, t);
  class r extends wr {
    constructor(o) {
      super(s, o, n);
    }
  }
  return r.def = s, r;
}
const Qc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class wr extends Qc {
  constructor(t, n = {}, s = vi) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== vi ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof wr) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, Cr(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const r of s)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: o } = s;
      let l;
      if (i && !I(i))
        for (const a in i) {
          const u = i[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = $s(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[ye(a)] = !0);
        }
      this._numberProps = l, r && this._resolveProps(s), this.shadowRoot && this._applyStyles(o), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then(
      (s) => t(this._def = s, !0)
    ) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        z(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => oo(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = I(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r]);
    for (const r of s.map(ye))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(i) {
          this._setProp(r, i, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : _i;
    const r = ye(t);
    n && this._numberProps && this._numberProps[r] && (s = $s(s)), this._setProp(r, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, r = !1) {
    if (n !== this._props[t] && (n === _i ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), s)) {
      const i = this._ob;
      i && i.disconnect(), n === !0 ? this.setAttribute(Te(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Te(t), n + "") : n || this.removeAttribute(Te(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    nu(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = de(this._def, ae(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const r = (i, o) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            is(o[0]) ? ae({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      s.emit = (i, ...o) => {
        r(i, o), Te(i) !== i && r(Te(i), o);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let r = t.length - 1; r >= 0; r--) {
      const i = document.createElement("style");
      s && i.setAttribute("nonce", s), i.textContent = t[r], this.shadowRoot.prepend(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const r = t[s], i = r.getAttribute("name") || "default", o = this._slots[i], l = r.parentNode;
      if (o)
        for (const a of o) {
          if (n && a.nodeType === 1) {
            const u = n + "-s", c = document.createTreeWalker(a, 1);
            a.setAttribute(u, "");
            let d;
            for (; d = c.nextNode(); )
              d.setAttribute(u, "");
          }
          l.insertBefore(a, r);
        }
      else
        for (; r.firstChild; ) l.insertBefore(r.firstChild, r);
      l.removeChild(r);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const Si = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => Bn(t, n) : t;
};
function Xc(e) {
  e.target.composing = !0;
}
function yi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Fs = Symbol("_assign"), Zc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Fs] = Si(r);
    const i = s || r.props && r.props.type === "number";
    Nt(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = Ns(l)), e[Fs](l);
    }), n && Nt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Nt(e, "compositionstart", Xc), Nt(e, "compositionend", yi), Nt(e, "change", yi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Fs] = Si(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ns(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, Yc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, eu = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (r) => {
    if (!("key" in r))
      return;
    const i = Te(r.key);
    if (t.some(
      (o) => o === i || Yc[o] === i
    ))
      return e(r);
  });
}, tu = /* @__PURE__ */ ae({ patchProp: Kc }, kc);
let xi;
function Yo() {
  return xi || (xi = za(tu));
}
const nu = (...e) => {
  Yo().render(...e);
}, vi = (...e) => {
  const t = Yo().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = ru(s);
    if (!r) return;
    const i = t._component;
    !L(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, su(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function su(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ru(e) {
  return le(e) ? document.querySelector(e) : e;
}
const iu = /* @__PURE__ */ Ot({
  name: "ChatHeader",
  props: {
    headerName: {
      type: String,
      required: !0
    },
    headerIcon: {
      type: String,
      required: !0
    },
    headerBackgroundColor: {
      type: String,
      required: !0
    },
    headerTextColor: {
      type: String,
      required: !0
    },
    closeBtnColor: {
      type: String,
      required: !0
    }
  }
}), ou = ".chat-header[data-v-a82ecf7a]{display:flex;align-items:center;padding:10px;border-top-left-radius:10px;border-top-right-radius:10px}.chat-header img[data-v-a82ecf7a]{width:40px;height:40px;border-radius:50%;margin-right:10px}.chat-header .chatbot-name[data-v-a82ecf7a]{flex-grow:1;font-weight:700}.close-btn[data-v-a82ecf7a]{background:transparent;border:none;font-size:16px;cursor:pointer}", Jt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, lu = ["src"];
function au(e, t, n, s, r, i) {
  return Ne(), at("div", {
    class: "chat-header",
    style: lt({ backgroundColor: e.headerBackgroundColor })
  }, [
    Ze("img", {
      src: e.headerIcon,
      alt: "Chatbot",
      class: "chatbot-image"
    }, null, 8, lu),
    Ze("span", {
      class: "chatbot-name",
      style: lt({ color: e.headerTextColor })
    }, Wi(e.headerName), 5),
    Ze("button", {
      class: "close-btn",
      style: lt({ color: e.closeBtnColor }),
      onClick: t[0] || (t[0] = (o) => e.$emit("close"))
    }, " X ", 4)
  ], 4);
}
const cu = /* @__PURE__ */ Jt(iu, [["render", au], ["styles", [ou]], ["__scopeId", "data-v-a82ecf7a"]]);
function Pr() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let Dt = Pr();
function el(e) {
  Dt = e;
}
const gn = { exec: () => null };
function K(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const s = {
    replace: (r, i) => {
      let o = typeof i == "string" ? i : i.source;
      return o = o.replace(Se.caret, "$1"), n = n.replace(r, o), s;
    },
    getRegex: () => new RegExp(n, t)
  };
  return s;
}
const Se = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
  htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, uu = /^(?:[ \t]*(?:\n|$))+/, fu = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, hu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, En = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, du = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, kr = /(?:[*+-]|\d{1,9}[.)])/, tl = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, nl = K(tl).replace(/bull/g, kr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), pu = K(tl).replace(/bull/g, kr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Er = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, gu = /^[^\n]+/, Mr = /(?!\s*\])(?:\\.|[^\[\]\\])+/, mu = K(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Mr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), bu = K(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, kr).getRegex(), _s = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ar = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Cu = K("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ar).replace("tag", _s).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), sl = K(Er).replace("hr", En).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _s).getRegex(), _u = K(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", sl).getRegex(), Tr = {
  blockquote: _u,
  code: fu,
  def: mu,
  fences: hu,
  heading: du,
  hr: En,
  html: Cu,
  lheading: nl,
  list: bu,
  newline: uu,
  paragraph: sl,
  table: gn,
  text: gu
}, wi = K("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", En).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _s).getRegex(), Su = {
  ...Tr,
  lheading: pu,
  table: wi,
  paragraph: K(Er).replace("hr", En).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", wi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _s).getRegex()
}, yu = {
  ...Tr,
  html: K(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ar).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: gn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: K(Er).replace("hr", En).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", nl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, xu = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, vu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, rl = /^( {2,}|\\)\n(?!\s*$)/, wu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ss = /[\p{P}\p{S}]/u, Rr = /[\s\p{P}\p{S}]/u, il = /[^\s\p{P}\p{S}]/u, Pu = K(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Rr).getRegex(), ol = /(?!~)[\p{P}\p{S}]/u, ku = /(?!~)[\s\p{P}\p{S}]/u, Eu = /(?:[^\s\p{P}\p{S}]|~)/u, Mu = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, ll = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Au = K(ll, "u").replace(/punct/g, Ss).getRegex(), Tu = K(ll, "u").replace(/punct/g, ol).getRegex(), al = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ru = K(al, "gu").replace(/notPunctSpace/g, il).replace(/punctSpace/g, Rr).replace(/punct/g, Ss).getRegex(), Iu = K(al, "gu").replace(/notPunctSpace/g, Eu).replace(/punctSpace/g, ku).replace(/punct/g, ol).getRegex(), Ou = K("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, il).replace(/punctSpace/g, Rr).replace(/punct/g, Ss).getRegex(), Du = K(/\\(punct)/, "gu").replace(/punct/g, Ss).getRegex(), Fu = K(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Lu = K(Ar).replace("(?:-->|$)", "-->").getRegex(), Nu = K("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Lu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Yn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, $u = K(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Yn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), cl = K(/^!?\[(label)\]\[(ref)\]/).replace("label", Yn).replace("ref", Mr).getRegex(), ul = K(/^!?\[(ref)\](?:\[\])?/).replace("ref", Mr).getRegex(), Bu = K("reflink|nolink(?!\\()", "g").replace("reflink", cl).replace("nolink", ul).getRegex(), Ir = {
  _backpedal: gn,
  // only used for GFM url
  anyPunctuation: Du,
  autolink: Fu,
  blockSkip: Mu,
  br: rl,
  code: vu,
  del: gn,
  emStrongLDelim: Au,
  emStrongRDelimAst: Ru,
  emStrongRDelimUnd: Ou,
  escape: xu,
  link: $u,
  nolink: ul,
  punctuation: Pu,
  reflink: cl,
  reflinkSearch: Bu,
  tag: Nu,
  text: wu,
  url: gn
}, Uu = {
  ...Ir,
  link: K(/^!?\[(label)\]\((.*?)\)/).replace("label", Yn).getRegex(),
  reflink: K(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Yn).getRegex()
}, Ys = {
  ...Ir,
  emStrongRDelimAst: Iu,
  emStrongLDelim: Tu,
  url: K(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Wu = {
  ...Ys,
  br: K(rl).replace("{2,}", "*").getRegex(),
  text: K(Ys.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Fn = {
  normal: Tr,
  gfm: Su,
  pedantic: yu
}, tn = {
  normal: Ir,
  gfm: Ys,
  breaks: Wu,
  pedantic: Uu
}, Hu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Pi = (e) => Hu[e];
function qe(e, t) {
  if (t) {
    if (Se.escapeTest.test(e))
      return e.replace(Se.escapeReplace, Pi);
  } else if (Se.escapeTestNoEncode.test(e))
    return e.replace(Se.escapeReplaceNoEncode, Pi);
  return e;
}
function ki(e) {
  try {
    e = encodeURI(e).replace(Se.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Ei(e, t) {
  var i;
  const n = e.replace(Se.findPipe, (o, l, a) => {
    let u = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), s = n.split(Se.splitPipe);
  let r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((i = s.at(-1)) != null && i.trim()) && s.pop(), t)
    if (s.length > t)
      s.splice(t);
    else
      for (; s.length < t; )
        s.push("");
  for (; r < s.length; r++)
    s[r] = s[r].trim().replace(Se.slashPipe, "|");
  return s;
}
function nn(e, t, n) {
  const s = e.length;
  if (s === 0)
    return "";
  let r = 0;
  for (; r < s && e.charAt(s - r - 1) === t; )
    r++;
  return e.slice(0, s - r);
}
function Gu(e, t) {
  if (e.indexOf(t[1]) === -1)
    return -1;
  let n = 0;
  for (let s = 0; s < e.length; s++)
    if (e[s] === "\\")
      s++;
    else if (e[s] === t[0])
      n++;
    else if (e[s] === t[1] && (n--, n < 0))
      return s;
  return -1;
}
function Mi(e, t, n, s, r) {
  const i = t.href, o = t.title || null, l = e[1].replace(r.other.outputLinkReplace, "$1");
  if (e[0].charAt(0) !== "!") {
    s.state.inLink = !0;
    const a = {
      type: "link",
      raw: n,
      href: i,
      title: o,
      text: l,
      tokens: s.inlineTokens(l)
    };
    return s.state.inLink = !1, a;
  }
  return {
    type: "image",
    raw: n,
    href: i,
    title: o,
    text: l
  };
}
function ju(e, t, n) {
  const s = e.match(n.other.indentCodeCompensation);
  if (s === null)
    return t;
  const r = s[1];
  return t.split(`
`).map((i) => {
    const o = i.match(n.other.beginningSpace);
    if (o === null)
      return i;
    const [l] = o;
    return l.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
class es {
  // set by the lexer
  constructor(t) {
    Q(this, "options");
    Q(this, "rules");
    // set by the lexer
    Q(this, "lexer");
    this.options = t || Dt;
  }
  space(t) {
    const n = this.rules.block.newline.exec(t);
    if (n && n[0].length > 0)
      return {
        type: "space",
        raw: n[0]
      };
  }
  code(t) {
    const n = this.rules.block.code.exec(t);
    if (n) {
      const s = n[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? s : nn(s, `
`)
      };
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const s = n[0], r = ju(s, n[3] || "", this.rules);
      return {
        type: "code",
        raw: s,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
        text: r
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let s = n[2].trim();
      if (this.rules.other.endingHash.test(s)) {
        const r = nn(s, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (s = r.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t);
    if (n)
      return {
        type: "hr",
        raw: nn(n[0], `
`)
      };
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      let s = nn(n[0], `
`).split(`
`), r = "", i = "";
      const o = [];
      for (; s.length > 0; ) {
        let l = !1;
        const a = [];
        let u;
        for (u = 0; u < s.length; u++)
          if (this.rules.other.blockquoteStart.test(s[u]))
            a.push(s[u]), l = !0;
          else if (!l)
            a.push(s[u]);
          else
            break;
        s = s.slice(u);
        const c = a.join(`
`), d = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${c}` : c, i = i ? `${i}
${d}` : d;
        const p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, o, !0), this.lexer.state.top = p, s.length === 0)
          break;
        const m = o.at(-1);
        if ((m == null ? void 0 : m.type) === "code")
          break;
        if ((m == null ? void 0 : m.type) === "blockquote") {
          const P = m, b = P.raw + `
` + s.join(`
`), E = this.blockquote(b);
          o[o.length - 1] = E, r = r.substring(0, r.length - P.raw.length) + E.raw, i = i.substring(0, i.length - P.text.length) + E.text;
          break;
        } else if ((m == null ? void 0 : m.type) === "list") {
          const P = m, b = P.raw + `
` + s.join(`
`), E = this.list(b);
          o[o.length - 1] = E, r = r.substring(0, r.length - m.raw.length) + E.raw, i = i.substring(0, i.length - P.raw.length) + E.raw, s = b.substring(o.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: r,
        tokens: o,
        text: i
      };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let s = n[1].trim();
      const r = s.length > 1, i = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +s.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      s = r ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = r ? s : "[*+-]");
      const o = this.rules.other.listItemRegex(s);
      let l = !1;
      for (; t; ) {
        let u = !1, c = "", d = "";
        if (!(n = o.exec(t)) || this.rules.block.hr.test(t))
          break;
        c = n[0], t = t.substring(c.length);
        let p = n[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (B) => " ".repeat(3 * B.length)), m = t.split(`
`, 1)[0], P = !p.trim(), b = 0;
        if (this.options.pedantic ? (b = 2, d = p.trimStart()) : P ? b = n[1].length + 1 : (b = n[2].search(this.rules.other.nonSpaceChar), b = b > 4 ? 1 : b, d = p.slice(b), b += n[1].length), P && this.rules.other.blankLine.test(m) && (c += m + `
`, t = t.substring(m.length + 1), u = !0), !u) {
          const B = this.rules.other.nextBulletRegex(b), W = this.rules.other.hrRegex(b), A = this.rules.other.fencesBeginRegex(b), T = this.rules.other.headingBeginRegex(b), N = this.rules.other.htmlBeginRegex(b);
          for (; t; ) {
            const H = t.split(`
`, 1)[0];
            let Z;
            if (m = H, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), Z = m) : Z = m.replace(this.rules.other.tabCharGlobal, "    "), A.test(m) || T.test(m) || N.test(m) || B.test(m) || W.test(m))
              break;
            if (Z.search(this.rules.other.nonSpaceChar) >= b || !m.trim())
              d += `
` + Z.slice(b);
            else {
              if (P || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || A.test(p) || T.test(p) || W.test(p))
                break;
              d += `
` + m;
            }
            !P && !m.trim() && (P = !0), c += H + `
`, t = t.substring(H.length + 1), p = Z.slice(b);
          }
        }
        i.loose || (l ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let E = null, D;
        this.options.gfm && (E = this.rules.other.listIsTask.exec(d), E && (D = E[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: c,
          task: !!E,
          checked: D,
          loose: !1,
          text: d,
          tokens: []
        }), i.raw += c;
      }
      const a = i.items.at(-1);
      if (a)
        a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else
        return;
      i.raw = i.raw.trimEnd();
      for (let u = 0; u < i.items.length; u++)
        if (this.lexer.state.top = !1, i.items[u].tokens = this.lexer.blockTokens(i.items[u].text, []), !i.loose) {
          const c = i.items[u].tokens.filter((p) => p.type === "space"), d = c.length > 0 && c.some((p) => this.rules.other.anyLine.test(p.raw));
          i.loose = d;
        }
      if (i.loose)
        for (let u = 0; u < i.items.length; u++)
          i.items[u].loose = !0;
      return i;
    }
  }
  html(t) {
    const n = this.rules.block.html.exec(t);
    if (n)
      return {
        type: "html",
        block: !0,
        raw: n[0],
        pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
        text: n[0]
      };
  }
  def(t) {
    const n = this.rules.block.def.exec(t);
    if (n) {
      const s = n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = n[2] ? n[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return {
        type: "def",
        tag: s,
        raw: n[0],
        href: r,
        title: i
      };
    }
  }
  table(t) {
    var l;
    const n = this.rules.block.table.exec(t);
    if (!n || !this.rules.other.tableDelimiter.test(n[2]))
      return;
    const s = Ei(n[1]), r = n[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (l = n[3]) != null && l.trim() ? n[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: n[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === r.length) {
      for (const a of r)
        this.rules.other.tableAlignRight.test(a) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? o.align.push("left") : o.align.push(null);
      for (let a = 0; a < s.length; a++)
        o.header.push({
          text: s[a],
          tokens: this.lexer.inline(s[a]),
          header: !0,
          align: o.align[a]
        });
      for (const a of i)
        o.rows.push(Ei(a, o.header.length).map((u, c) => ({
          text: u,
          tokens: this.lexer.inline(u),
          header: !1,
          align: o.align[c]
        })));
      return o;
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1])
      };
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t);
    if (n) {
      const s = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: s,
        tokens: this.lexer.inline(s)
      };
    }
  }
  text(t) {
    const n = this.rules.block.text.exec(t);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0])
      };
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t);
    if (n)
      return {
        type: "escape",
        raw: n[0],
        text: n[1]
      };
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t);
    if (n)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: n[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: n[0]
      };
  }
  link(t) {
    const n = this.rules.inline.link.exec(t);
    if (n) {
      const s = n[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
        if (!this.rules.other.endAngleBracket.test(s))
          return;
        const o = nn(s.slice(0, -1), "\\");
        if ((s.length - o.length) % 2 === 0)
          return;
      } else {
        const o = Gu(n[2], "()");
        if (o > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + o;
          n[2] = n[2].substring(0, o), n[0] = n[0].substring(0, a).trim(), n[3] = "";
        }
      }
      let r = n[2], i = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(r);
        o && (r = o[1], i = o[3]);
      } else
        i = n[3] ? n[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), Mi(n, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, n[0], this.lexer, this.rules);
    }
  }
  reflink(t, n) {
    let s;
    if ((s = this.rules.inline.reflink.exec(t)) || (s = this.rules.inline.nolink.exec(t))) {
      const r = (s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = n[r.toLowerCase()];
      if (!i) {
        const o = s[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return Mi(s, i, s[0], this.lexer, this.rules);
    }
  }
  emStrong(t, n, s = "") {
    let r = this.rules.inline.emStrongLDelim.exec(t);
    if (!r || r[3] && s.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(r[1] || r[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const o = [...r[0]].length - 1;
      let l, a, u = o, c = 0;
      const d = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, n = n.slice(-1 * t.length + o); (r = d.exec(n)) != null; ) {
        if (l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !l)
          continue;
        if (a = [...l].length, r[3] || r[4]) {
          u += a;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + a) % 3)) {
          c += a;
          continue;
        }
        if (u -= a, u > 0)
          continue;
        a = Math.min(a, a + u + c);
        const p = [...r[0]][0].length, m = t.slice(0, o + r.index + p + a);
        if (Math.min(o, a) % 2) {
          const b = m.slice(1, -1);
          return {
            type: "em",
            raw: m,
            text: b,
            tokens: this.lexer.inlineTokens(b)
          };
        }
        const P = m.slice(2, -2);
        return {
          type: "strong",
          raw: m,
          text: P,
          tokens: this.lexer.inlineTokens(P)
        };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let s = n[2].replace(this.rules.other.newLineCharGlobal, " ");
      const r = this.rules.other.nonSpaceChar.test(s), i = this.rules.other.startingSpaceChar.test(s) && this.rules.other.endingSpaceChar.test(s);
      return r && i && (s = s.substring(1, s.length - 1)), {
        type: "codespan",
        raw: n[0],
        text: s
      };
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t);
    if (n)
      return {
        type: "br",
        raw: n[0]
      };
  }
  del(t) {
    const n = this.rules.inline.del.exec(t);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2])
      };
  }
  autolink(t) {
    const n = this.rules.inline.autolink.exec(t);
    if (n) {
      let s, r;
      return n[2] === "@" ? (s = n[1], r = "mailto:" + s) : (s = n[1], r = s), {
        type: "link",
        raw: n[0],
        text: s,
        href: r,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  url(t) {
    var s;
    let n;
    if (n = this.rules.inline.url.exec(t)) {
      let r, i;
      if (n[2] === "@")
        r = n[0], i = "mailto:" + r;
      else {
        let o;
        do
          o = n[0], n[0] = ((s = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : s[0]) ?? "";
        while (o !== n[0]);
        r = n[0], n[1] === "www." ? i = "http://" + n[0] : i = n[0];
      }
      return {
        type: "link",
        raw: n[0],
        text: r,
        href: i,
        tokens: [
          {
            type: "text",
            raw: r,
            text: r
          }
        ]
      };
    }
  }
  inlineText(t) {
    const n = this.rules.inline.text.exec(t);
    if (n) {
      const s = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        escaped: s
      };
    }
  }
}
class De {
  constructor(t) {
    Q(this, "tokens");
    Q(this, "options");
    Q(this, "state");
    Q(this, "tokenizer");
    Q(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Dt, this.options.tokenizer = this.options.tokenizer || new es(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: Se,
      block: Fn.normal,
      inline: tn.normal
    };
    this.options.pedantic ? (n.block = Fn.pedantic, n.inline = tn.pedantic) : this.options.gfm && (n.block = Fn.gfm, this.options.breaks ? n.inline = tn.breaks : n.inline = tn.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Fn,
      inline: tn
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new De(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new De(n).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(Se.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const s = this.inlineQueue[n];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], s = !1) {
    var r, i, o;
    for (this.options.pedantic && (t = t.replace(Se.tabCharGlobal, "    ").replace(Se.spaceLine, "")); t; ) {
      let l;
      if ((i = (r = this.options.extensions) == null ? void 0 : r.block) != null && i.some((u) => (l = u.call({ lexer: this }, t, n)) ? (t = t.substring(l.raw.length), n.push(l), !0) : !1))
        continue;
      if (l = this.tokenizer.space(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        l.raw.length === 1 && u !== void 0 ? u.raw += `
` : n.push(l);
        continue;
      }
      if (l = this.tokenizer.code(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.at(-1).src = u.text) : n.push(l);
        continue;
      }
      if (l = this.tokenizer.fences(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.heading(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.hr(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.blockquote(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.list(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.html(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.def(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + l.raw, u.text += `
` + l.raw, this.inlineQueue.at(-1).src = u.text) : this.tokens.links[l.tag] || (this.tokens.links[l.tag] = {
          href: l.href,
          title: l.title
        });
        continue;
      }
      if (l = this.tokenizer.table(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.lheading(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      let a = t;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let u = 1 / 0;
        const c = t.slice(1);
        let d;
        this.options.extensions.startBlock.forEach((p) => {
          d = p.call({ lexer: this }, c), typeof d == "number" && d >= 0 && (u = Math.min(u, d));
        }), u < 1 / 0 && u >= 0 && (a = t.substring(0, u + 1));
      }
      if (this.state.top && (l = this.tokenizer.paragraph(a))) {
        const u = n.at(-1);
        s && (u == null ? void 0 : u.type) === "paragraph" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : n.push(l), s = a.length !== t.length, t = t.substring(l.raw.length);
        continue;
      }
      if (l = this.tokenizer.text(t)) {
        t = t.substring(l.raw.length);
        const u = n.at(-1);
        (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + l.raw, u.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : n.push(l);
        continue;
      }
      if (t) {
        const u = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else
          throw new Error(u);
      }
    }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, n = []) {
    var l, a, u;
    let s = t, r = null;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
          c.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
      s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
      s = s.slice(0, r.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i = !1, o = "";
    for (; t; ) {
      i || (o = ""), i = !1;
      let c;
      if ((a = (l = this.options.extensions) == null ? void 0 : l.inline) != null && a.some((p) => (c = p.call({ lexer: this }, t, n)) ? (t = t.substring(c.raw.length), n.push(c), !0) : !1))
        continue;
      if (c = this.tokenizer.escape(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.tag(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.link(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(c.raw.length);
        const p = n.at(-1);
        c.type === "text" && (p == null ? void 0 : p.type) === "text" ? (p.raw += c.raw, p.text += c.text) : n.push(c);
        continue;
      }
      if (c = this.tokenizer.emStrong(t, s, o)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.codespan(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.br(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.del(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.autolink(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (!this.state.inLink && (c = this.tokenizer.url(t))) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      let d = t;
      if ((u = this.options.extensions) != null && u.startInline) {
        let p = 1 / 0;
        const m = t.slice(1);
        let P;
        this.options.extensions.startInline.forEach((b) => {
          P = b.call({ lexer: this }, m), typeof P == "number" && P >= 0 && (p = Math.min(p, P));
        }), p < 1 / 0 && p >= 0 && (d = t.substring(0, p + 1));
      }
      if (c = this.tokenizer.inlineText(d)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (o = c.raw.slice(-1)), i = !0;
        const p = n.at(-1);
        (p == null ? void 0 : p.type) === "text" ? (p.raw += c.raw, p.text += c.text) : n.push(c);
        continue;
      }
      if (t) {
        const p = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(p);
          break;
        } else
          throw new Error(p);
      }
    }
    return n;
  }
}
class ts {
  // set by the parser
  constructor(t) {
    Q(this, "options");
    Q(this, "parser");
    this.options = t || Dt;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: s }) {
    var o;
    const r = (o = (n || "").match(Se.notSpaceStart)) == null ? void 0 : o[0], i = t.replace(Se.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + qe(r) + '">' + (s ? i : qe(i, !0)) + `</code></pre>
` : "<pre><code>" + (s ? i : qe(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  heading({ tokens: t, depth: n }) {
    return `<h${n}>${this.parser.parseInline(t)}</h${n}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    const n = t.ordered, s = t.start;
    let r = "";
    for (let l = 0; l < t.items.length; l++) {
      const a = t.items[l];
      r += this.listitem(a);
    }
    const i = n ? "ol" : "ul", o = n && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + i + o + `>
` + r + "</" + i + `>
`;
  }
  listitem(t) {
    var s;
    let n = "";
    if (t.task) {
      const r = this.checkbox({ checked: !!t.checked });
      t.loose ? ((s = t.tokens[0]) == null ? void 0 : s.type) === "paragraph" ? (t.tokens[0].text = r + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = r + " " + qe(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
        type: "text",
        raw: r + " ",
        text: r + " ",
        escaped: !0
      }) : n += r + " ";
    }
    return n += this.parser.parse(t.tokens, !!t.loose), `<li>${n}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let n = "", s = "";
    for (let i = 0; i < t.header.length; i++)
      s += this.tablecell(t.header[i]);
    n += this.tablerow({ text: s });
    let r = "";
    for (let i = 0; i < t.rows.length; i++) {
      const o = t.rows[i];
      s = "";
      for (let l = 0; l < o.length; l++)
        s += this.tablecell(o[l]);
      r += this.tablerow({ text: s });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + n + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const n = this.parser.parseInline(t.tokens), s = t.header ? "th" : "td";
    return (t.align ? `<${s} align="${t.align}">` : `<${s}>`) + n + `</${s}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${qe(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: s }) {
    const r = this.parser.parseInline(s), i = ki(t);
    if (i === null)
      return r;
    t = i;
    let o = '<a href="' + t + '"';
    return n && (o += ' title="' + qe(n) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: t, title: n, text: s }) {
    const r = ki(t);
    if (r === null)
      return qe(s);
    t = r;
    let i = `<img src="${t}" alt="${s}"`;
    return n && (i += ` title="${qe(n)}"`), i += ">", i;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : qe(t.text);
  }
}
class Or {
  // no need for block level renderers
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}
class Fe {
  constructor(t) {
    Q(this, "options");
    Q(this, "renderer");
    Q(this, "textRenderer");
    this.options = t || Dt, this.options.renderer = this.options.renderer || new ts(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Or();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new Fe(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new Fe(n).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, n = !0) {
    var r, i;
    let s = "";
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[l.type]) {
        const u = l, c = this.options.extensions.renderers[u.type].call({ parser: this }, u);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u.type)) {
          s += c || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "space": {
          s += this.renderer.space(a);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(a);
          continue;
        }
        case "code": {
          s += this.renderer.code(a);
          continue;
        }
        case "table": {
          s += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          s += this.renderer.list(a);
          continue;
        }
        case "html": {
          s += this.renderer.html(a);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let u = a, c = this.renderer.text(u);
          for (; o + 1 < t.length && t[o + 1].type === "text"; )
            u = t[++o], c += `
` + this.renderer.text(u);
          n ? s += this.renderer.paragraph({
            type: "paragraph",
            raw: c,
            text: c,
            tokens: [{ type: "text", raw: c, text: c, escaped: !0 }]
          }) : s += c;
          continue;
        }
        default: {
          const u = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return s;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, n = this.renderer) {
    var r, i;
    let s = "";
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[l.type]) {
        const u = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (u !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(l.type)) {
          s += u || "";
          continue;
        }
      }
      const a = l;
      switch (a.type) {
        case "escape": {
          s += n.text(a);
          break;
        }
        case "html": {
          s += n.html(a);
          break;
        }
        case "link": {
          s += n.link(a);
          break;
        }
        case "image": {
          s += n.image(a);
          break;
        }
        case "strong": {
          s += n.strong(a);
          break;
        }
        case "em": {
          s += n.em(a);
          break;
        }
        case "codespan": {
          s += n.codespan(a);
          break;
        }
        case "br": {
          s += n.br(a);
          break;
        }
        case "del": {
          s += n.del(a);
          break;
        }
        case "text": {
          s += n.text(a);
          break;
        }
        default: {
          const u = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return s;
  }
}
class mn {
  constructor(t) {
    Q(this, "options");
    Q(this, "block");
    this.options = t || Dt;
  }
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? De.lex : De.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? Fe.parse : Fe.parseInline;
  }
}
Q(mn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class Vu {
  constructor(...t) {
    Q(this, "defaults", Pr());
    Q(this, "options", this.setOptions);
    Q(this, "parse", this.parseMarkdown(!0));
    Q(this, "parseInline", this.parseMarkdown(!1));
    Q(this, "Parser", Fe);
    Q(this, "Renderer", ts);
    Q(this, "TextRenderer", Or);
    Q(this, "Lexer", De);
    Q(this, "Tokenizer", es);
    Q(this, "Hooks", mn);
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, n) {
    var r, i;
    let s = [];
    for (const o of t)
      switch (s = s.concat(n.call(this, o)), o.type) {
        case "table": {
          const l = o;
          for (const a of l.header)
            s = s.concat(this.walkTokens(a.tokens, n));
          for (const a of l.rows)
            for (const u of a)
              s = s.concat(this.walkTokens(u.tokens, n));
          break;
        }
        case "list": {
          const l = o;
          s = s.concat(this.walkTokens(l.items, n));
          break;
        }
        default: {
          const l = o;
          (i = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && i[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((a) => {
            const u = l[a].flat(1 / 0);
            s = s.concat(this.walkTokens(u, n));
          }) : l.tokens && (s = s.concat(this.walkTokens(l.tokens, n)));
        }
      }
    return s;
  }
  use(...t) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((s) => {
      const r = { ...s };
      if (r.async = this.defaults.async || r.async || !1, s.extensions && (s.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const o = n.renderers[i.name];
          o ? n.renderers[i.name] = function(...l) {
            let a = i.renderer.apply(this, l);
            return a === !1 && (a = o.apply(this, l)), a;
          } : n.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = n[i.level];
          o ? o.unshift(i.tokenizer) : n[i.level] = [i.tokenizer], i.start && (i.level === "block" ? n.startBlock ? n.startBlock.push(i.start) : n.startBlock = [i.start] : i.level === "inline" && (n.startInline ? n.startInline.push(i.start) : n.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (n.childTokens[i.name] = i.childTokens);
      }), r.extensions = n), s.renderer) {
        const i = this.defaults.renderer || new ts(this.defaults);
        for (const o in s.renderer) {
          if (!(o in i))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const l = o, a = s.renderer[l], u = i[l];
          i[l] = (...c) => {
            let d = a.apply(i, c);
            return d === !1 && (d = u.apply(i, c)), d || "";
          };
        }
        r.renderer = i;
      }
      if (s.tokenizer) {
        const i = this.defaults.tokenizer || new es(this.defaults);
        for (const o in s.tokenizer) {
          if (!(o in i))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const l = o, a = s.tokenizer[l], u = i[l];
          i[l] = (...c) => {
            let d = a.apply(i, c);
            return d === !1 && (d = u.apply(i, c)), d;
          };
        }
        r.tokenizer = i;
      }
      if (s.hooks) {
        const i = this.defaults.hooks || new mn();
        for (const o in s.hooks) {
          if (!(o in i))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const l = o, a = s.hooks[l], u = i[l];
          mn.passThroughHooks.has(o) ? i[l] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(i, c)).then((p) => u.call(i, p));
            const d = a.call(i, c);
            return u.call(i, d);
          } : i[l] = (...c) => {
            let d = a.apply(i, c);
            return d === !1 && (d = u.apply(i, c)), d;
          };
        }
        r.hooks = i;
      }
      if (s.walkTokens) {
        const i = this.defaults.walkTokens, o = s.walkTokens;
        r.walkTokens = function(l) {
          let a = [];
          return a.push(o.call(this, l)), i && (a = a.concat(i.call(this, l))), a;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, n) {
    return De.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return Fe.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (s, r) => {
      const i = { ...r }, o = { ...this.defaults, ...i }, l = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && i.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = t);
      const a = o.hooks ? o.hooks.provideLexer() : t ? De.lex : De.lexInline, u = o.hooks ? o.hooks.provideParser() : t ? Fe.parse : Fe.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then((c) => a(c, o)).then((c) => o.hooks ? o.hooks.processAllTokens(c) : c).then((c) => o.walkTokens ? Promise.all(this.walkTokens(c, o.walkTokens)).then(() => c) : c).then((c) => u(c, o)).then((c) => o.hooks ? o.hooks.postprocess(c) : c).catch(l);
      try {
        o.hooks && (s = o.hooks.preprocess(s));
        let c = a(s, o);
        o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
        let d = u(c, o);
        return o.hooks && (d = o.hooks.postprocess(d)), d;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(t, n) {
    return (s) => {
      if (s.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        const r = "<p>An error occurred:</p><pre>" + qe(s.message + "", !0) + "</pre>";
        return n ? Promise.resolve(r) : r;
      }
      if (n)
        return Promise.reject(s);
      throw s;
    };
  }
}
const It = new Vu();
function J(e, t) {
  return It.parse(e, t);
}
J.options = J.setOptions = function(e) {
  return It.setOptions(e), J.defaults = It.defaults, el(J.defaults), J;
};
J.getDefaults = Pr;
J.defaults = Dt;
J.use = function(...e) {
  return It.use(...e), J.defaults = It.defaults, el(J.defaults), J;
};
J.walkTokens = function(e, t) {
  return It.walkTokens(e, t);
};
J.parseInline = It.parseInline;
J.Parser = Fe;
J.parser = Fe.parse;
J.Renderer = ts;
J.TextRenderer = Or;
J.Lexer = De;
J.lexer = De.lex;
J.Tokenizer = es;
J.Hooks = mn;
J.parse = J;
J.options;
J.setOptions;
J.use;
J.walkTokens;
J.parseInline;
Fe.parse;
De.lex;
const zu = /* @__PURE__ */ Ot({
  name: "ChatMessages",
  props: {
    messages: { type: Array, required: !0 },
    userMessageColor: { type: String, required: !0 },
    assistantMessageColor: { type: String, required: !0 },
    userMessageBackground: { type: String, required: !0 },
    assistantMessageBackground: { type: String, required: !0 }
  },
  methods: {
    messageStyle(e) {
      return e === "user" ? {
        color: this.userMessageColor,
        backgroundColor: this.userMessageBackground,
        alignSelf: "flex-end",
        textAlign: "left",
        borderRadius: "8px 8px 0px 8px"
      } : e === "assistantError" ? {
        color: "#ffffff",
        backgroundColor: "#bd1637",
        alignSelf: "flex-start",
        textAlign: "left",
        borderRadius: "8px 8px 8px 0px"
      } : {
        color: this.assistantMessageColor,
        backgroundColor: this.assistantMessageBackground,
        alignSelf: "flex-start",
        textAlign: "left",
        borderRadius: "8px 8px 8px 0px"
      };
    },
    renderMarkdown(e) {
      return J(e);
    }
  }
}), Ku = ".chat-messages[data-v-a342bf86]{flex-grow:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column}.message[data-v-a342bf86]{margin-bottom:10px;padding:8px;border:1px solid #3d3d3d9f;max-width:85%}.message-content[data-v-a342bf86]{word-wrap:break-word;overflow-wrap:break-word}[data-v-a342bf86] .message-content pre{white-space:pre-wrap!important;word-break:break-word;overflow-wrap:break-word;overflow-x:auto;max-width:100%;background-color:#f5f5f5;padding:10px;border-radius:5px;box-sizing:border-box}[data-v-a342bf86] .message-content code{white-space:pre-wrap!important;word-break:break-word;font-family:monospace}", qu = { class: "chat-messages" }, Ju = ["innerHTML"];
function Qu(e, t, n, s, r, i) {
  return Ne(), at("div", qu, [
    (Ne(!0), at(Be, null, Ra(e.messages, (o, l) => (Ne(), at("div", {
      key: l,
      class: cs(["message", o.from]),
      style: lt(e.messageStyle(o.from))
    }, [
      Ze("p", {
        innerHTML: e.renderMarkdown(o.text),
        class: "message-content"
      }, null, 8, Ju)
    ], 6))), 128))
  ]);
}
const Xu = /* @__PURE__ */ Jt(zu, [["render", Qu], ["styles", [Ku]], ["__scopeId", "data-v-a342bf86"]]), Zu = /* @__PURE__ */ Ot({
  name: "ChatInput",
  props: {
    userInput: {
      type: String,
      required: !0
    },
    sending: {
      type: Boolean,
      required: !0
    },
    placeholder: {
      type: String,
      required: !0
    },
    buttonBackgroundColor: {
      type: String,
      required: !0
    },
    buttonTextColor: {
      type: String,
      required: !0
    }
  },
  emits: ["send-message", "update:userInput"],
  setup(e, { emit: t }) {
    const n = Oe(e.userInput);
    return Xe(
      () => e.userInput,
      (i) => {
        n.value = i;
      }
    ), Xe(n, (i) => {
      t("update:userInput", i);
    }), { localInput: n, handleSend: () => {
      t("send-message");
    }, buttonStyle: () => ({
      backgroundColor: e.buttonBackgroundColor,
      color: e.buttonTextColor
    }) };
  }
}), Yu = "button[data-v-aaadc865]:disabled{background:#ccc;cursor:not-allowed}.chat-input[data-v-aaadc865]{display:flex;align-items:center;padding:10px;border-top:1px solid #ccc}.chat-input input[data-v-aaadc865]{flex-grow:1;padding:8px;border:1px solid #ccc;border-radius:5px;background:#f9f9f9;color:#292929;font-size:medium}.chat-input button[data-v-aaadc865]{margin-left:10px;padding:8px 12px;border:none;border-radius:5px;cursor:pointer;font-size:medium}.chat-input button[data-v-aaadc865]:disabled,.chat-input input[data-v-aaadc865]:disabled{background:#ccc;cursor:not-allowed}.loading-indicator[data-v-aaadc865]{display:inline-block;margin-left:10px}.spinner[data-v-aaadc865]{border:4px solid rgba(0,0,0,.1);border-left-color:#007bff;border-radius:50%;width:20px;height:20px;animation:spin-aaadc865 1s linear infinite}@keyframes spin-aaadc865{to{transform:rotate(360deg)}}", ef = { class: "chat-input" }, tf = ["placeholder", "disabled"], nf = ["disabled"], sf = {
  key: 0,
  class: "loading-indicator"
};
function rf(e, t, n, s, r, i) {
  return Ne(), at("div", ef, [
    da(Ze("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localInput = o),
      onKeyup: t[1] || (t[1] = eu((...o) => e.handleSend && e.handleSend(...o), ["enter"])),
      placeholder: e.placeholder,
      disabled: e.sending
    }, null, 40, tf), [
      [Zc, e.localInput]
    ]),
    Ze("button", {
      disabled: e.sending,
      onClick: t[2] || (t[2] = (...o) => e.handleSend && e.handleSend(...o)),
      style: lt(e.buttonStyle())
    }, " Enviar ", 12, nf),
    e.sending ? (Ne(), at("div", sf, t[3] || (t[3] = [
      Ze("div", { class: "spinner" }, null, -1)
    ]))) : Hn("", !0)
  ]);
}
const of = /* @__PURE__ */ Jt(Zu, [["render", rf], ["styles", [Yu]], ["__scopeId", "data-v-aaadc865"]]), lf = /* @__PURE__ */ Ot({
  name: "ChatWindow",
  components: {
    ChatHeader: cu,
    ChatMessages: Xu,
    ChatInput: of
  },
  props: {
    messages: { type: Array, required: !0 },
    userInput: { type: String, required: !0 },
    sending: { type: Boolean, required: !0 },
    placeholder: { type: String, required: !0 },
    headerName: { type: String, required: !0 },
    headerIcon: { type: String, required: !0 },
    headerBackgroundColor: { type: String, required: !0 },
    headerTextColor: { type: String, required: !0 },
    closeBtnColor: { type: String, required: !0 },
    userMessageColor: { type: String, required: !0 },
    userMessageBackground: { type: String, required: !0 },
    assistantMessageColor: { type: String, required: !0 },
    assistantMessageBackground: { type: String, required: !0 },
    buttonBackgroundColor: { type: String, required: !0 },
    buttonTextColor: { type: String, required: !0 },
    chatbotWidth: { type: String, required: !0 },
    chatbotHeight: { type: String, required: !0 }
  },
  emits: ["send-message", "toggle-chat", "update:userInput"],
  setup(e, { emit: t }) {
    const n = Oe(e.userInput);
    return Xe(
      () => e.userInput,
      (i) => {
        n.value = i;
      }
    ), Xe(n, (i) => {
      t("update:userInput", i);
    }), {
      localUserInput: n,
      handleSendMessage: () => {
        t("send-message");
      },
      closeWindow: () => {
        t("toggle-chat");
      }
    };
  }
}), af = ".chat-window[data-v-5921353b]{position:fixed;bottom:20px;right:20px;width:min(90vw,400px);height:min(50vh,500px);background:#fff;border-radius:10px;box-shadow:0 0 15px #0000004d;display:flex;flex-direction:column;overflow:hidden}@media screen and (max-width: 845px){.chat-window[data-v-5921353b]{width:100%!important;height:70%!important;bottom:0;right:0;border-radius:0;max-height:none}}";
function cf(e, t, n, s, r, i) {
  const o = hn("ChatHeader"), l = hn("ChatMessages"), a = hn("ChatInput");
  return Ne(), at("div", {
    class: "chat-window",
    style: lt({
      width: e.chatbotWidth,
      height: e.chatbotHeight
    })
  }, [
    de(o, {
      onClose: e.closeWindow,
      "header-name": e.headerName,
      "header-icon": e.headerIcon,
      "header-background-color": e.headerBackgroundColor,
      "header-text-color": e.headerTextColor,
      "close-btn-color": e.closeBtnColor
    }, null, 8, ["onClose", "header-name", "header-icon", "header-background-color", "header-text-color", "close-btn-color"]),
    de(l, {
      messages: e.messages,
      "user-message-color": e.userMessageColor,
      "user-message-background": e.userMessageBackground,
      "assistant-message-color": e.assistantMessageColor,
      "assistant-message-background": e.assistantMessageBackground
    }, null, 8, ["messages", "user-message-color", "user-message-background", "assistant-message-color", "assistant-message-background"]),
    de(a, {
      userInput: e.localUserInput,
      "onUpdate:userInput": t[0] || (t[0] = (u) => e.localUserInput = u),
      sending: e.sending,
      placeholder: e.placeholder,
      "button-background-color": e.buttonBackgroundColor,
      "button-text-color": e.buttonTextColor,
      onSendMessage: e.handleSendMessage
    }, null, 8, ["userInput", "sending", "placeholder", "button-background-color", "button-text-color", "onSendMessage"])
  ], 4);
}
const uf = /* @__PURE__ */ Jt(lf, [["render", cf], ["styles", [af]], ["__scopeId", "data-v-5921353b"]]), ff = /* @__PURE__ */ Ot({
  name: "ChatToggle",
  props: {
    headerIcon: {
      type: String,
      required: !0
    }
  }
}), hf = ".chatbot-toggle[data-v-d7b03065]{position:fixed;bottom:20px;right:20px;background:#fff;border-radius:50%;width:60px;height:60px;border:none;box-shadow:0 0 10px #0000004d;cursor:pointer;padding:0}.chatbot-toggle img[data-v-d7b03065]{width:100%;height:100%;border-radius:50%}", df = ["src"];
function pf(e, t, n, s, r, i) {
  return Ne(), at("button", {
    class: "chatbot-toggle",
    onClick: t[0] || (t[0] = (o) => e.$emit("toggle-chat"))
  }, [
    Ze("img", {
      src: e.headerIcon,
      alt: "Chatbot",
      class: "chatbot-icon"
    }, null, 8, df)
  ]);
}
const gf = /* @__PURE__ */ Jt(ff, [["render", pf], ["styles", [hf]], ["__scopeId", "data-v-d7b03065"]]);
var mf = Object.defineProperty, bf = (e, t, n) => t in e ? mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ln = (e, t, n) => bf(e, typeof t != "symbol" ? t + "" : t, n);
class Ai extends Error {
  constructor(t, n) {
    super(t), Ln(this, "type"), Ln(this, "field"), Ln(this, "value"), Ln(this, "line"), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
function Ls(e) {
}
function Cf(e) {
  const { onEvent: t = Ls, onError: n = Ls, onRetry: s = Ls, onComment: r } = e;
  let i = "", o = !0, l, a = "", u = "";
  function c(b) {
    const E = o ? b.replace(/^\xEF\xBB\xBF/, "") : b, [D, B] = _f(`${i}${E}`);
    for (const W of D)
      d(W);
    i = B, o = !1;
  }
  function d(b) {
    if (b === "") {
      m();
      return;
    }
    if (b.startsWith(":")) {
      r && r(b.slice(b.startsWith(": ") ? 2 : 1));
      return;
    }
    const E = b.indexOf(":");
    if (E !== -1) {
      const D = b.slice(0, E), B = b[E + 1] === " " ? 2 : 1, W = b.slice(E + B);
      p(D, W, b);
      return;
    }
    p(b, "", b);
  }
  function p(b, E, D) {
    switch (b) {
      case "event":
        u = E;
        break;
      case "data":
        a = `${a}${E}
`;
        break;
      case "id":
        l = E.includes("\0") ? void 0 : E;
        break;
      case "retry":
        /^\d+$/.test(E) ? s(parseInt(E, 10)) : n(
          new Ai(`Invalid \`retry\` value: "${E}"`, {
            type: "invalid-retry",
            value: E,
            line: D
          })
        );
        break;
      default:
        n(
          new Ai(
            `Unknown field "${b.length > 20 ? `${b.slice(0, 20)}…` : b}"`,
            { type: "unknown-field", field: b, value: E, line: D }
          )
        );
        break;
    }
  }
  function m() {
    a.length > 0 && t({
      id: l,
      event: u || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: a.endsWith(`
`) ? a.slice(0, -1) : a
    }), l = void 0, a = "", u = "";
  }
  function P(b = {}) {
    i && b.consume && d(i), l = void 0, a = "", u = "", i = "";
  }
  return { feed: c, reset: P };
}
function _f(e) {
  const t = [];
  let n = "";
  const s = e.length;
  for (let r = 0; r < s; r++) {
    const i = e[r];
    i === "\r" && e[r + 1] === `
` ? (t.push(n), n = "", r++) : i === "\r" || i === `
` ? (t.push(n), n = "") : n += i;
  }
  return [t, n];
}
class Ti extends Event {
  /**
   * Constructs a new `ErrorEvent` instance. This is typically not called directly,
   * but rather emitted by the `EventSource` object when an error occurs.
   *
   * @param type - The type of the event (should be "error")
   * @param errorEventInitDict - Optional properties to include in the error event
   */
  constructor(t, n) {
    var s, r;
    super(t), this.code = (s = n == null ? void 0 : n.code) != null ? s : void 0, this.message = (r = n == null ? void 0 : n.message) != null ? r : void 0;
  }
  /**
   * Node.js "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Node.js when you `console.log` an instance of this class.
   *
   * @param _depth - The current depth
   * @param options - The options passed to `util.inspect`
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @returns A string representation of the error
   */
  [Symbol.for("nodejs.util.inspect.custom")](t, n, s) {
    return s(Ri(this), n);
  }
  /**
   * Deno "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Deno when you `console.log` an instance of this class.
   *
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @param options - The options passed to `Deno.inspect`
   * @returns A string representation of the error
   */
  [Symbol.for("Deno.customInspect")](t, n) {
    return t(Ri(this), n);
  }
}
function Sf(e) {
  const t = globalThis.DOMException;
  return typeof t == "function" ? new t(e, "SyntaxError") : new SyntaxError(e);
}
function er(e) {
  return e instanceof Error ? "errors" in e && Array.isArray(e.errors) ? e.errors.map(er).join(", ") : "cause" in e && e.cause instanceof Error ? `${e}: ${er(e.cause)}` : e.message : `${e}`;
}
function Ri(e) {
  return {
    type: e.type,
    message: e.message,
    code: e.code,
    defaultPrevented: e.defaultPrevented,
    cancelable: e.cancelable,
    timeStamp: e.timeStamp
  };
}
var fl = (e) => {
  throw TypeError(e);
}, Dr = (e, t, n) => t.has(e) || fl("Cannot " + n), U = (e, t, n) => (Dr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ue = (e, t, n) => t.has(e) ? fl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), re = (e, t, n, s) => (Dr(e, t, "write to private field"), t.set(e, n), n), st = (e, t, n) => (Dr(e, t, "access private method"), n), ve, At, $t, jn, ns, bn, Wt, Cn, bt, Bt, Kt, Ut, rn, $e, tr, nr, sr, Ii, rr, ir, on, or, lr;
class Vn extends EventTarget {
  constructor(t, n) {
    var s, r;
    super(), ue(this, $e), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, ue(this, ve), ue(this, At), ue(this, $t), ue(this, jn), ue(this, ns), ue(this, bn), ue(this, Wt), ue(this, Cn, null), ue(this, bt), ue(this, Bt), ue(this, Kt, null), ue(this, Ut, null), ue(this, rn, null), ue(this, nr, async (i) => {
      var o;
      U(this, Bt).reset();
      const { body: l, redirected: a, status: u, headers: c } = i;
      if (u === 204) {
        st(this, $e, on).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (a ? re(this, $t, new URL(i.url)) : re(this, $t, void 0), u !== 200) {
        st(this, $e, on).call(this, `Non-200 status code (${u})`, u);
        return;
      }
      if (!(c.get("content-type") || "").startsWith("text/event-stream")) {
        st(this, $e, on).call(this, 'Invalid content type, expected "text/event-stream"', u);
        return;
      }
      if (U(this, ve) === this.CLOSED)
        return;
      re(this, ve, this.OPEN);
      const d = new Event("open");
      if ((o = U(this, rn)) == null || o.call(this, d), this.dispatchEvent(d), typeof l != "object" || !l || !("getReader" in l)) {
        st(this, $e, on).call(this, "Invalid response body, expected a web ReadableStream", u), this.close();
        return;
      }
      const p = new TextDecoder(), m = l.getReader();
      let P = !0;
      do {
        const { done: b, value: E } = await m.read();
        E && U(this, Bt).feed(p.decode(E, { stream: !b })), b && (P = !1, U(this, Bt).reset(), st(this, $e, or).call(this));
      } while (P);
    }), ue(this, sr, (i) => {
      re(this, bt, void 0), !(i.name === "AbortError" || i.type === "aborted") && st(this, $e, or).call(this, er(i));
    }), ue(this, rr, (i) => {
      typeof i.id == "string" && re(this, Cn, i.id);
      const o = new MessageEvent(i.event || "message", {
        data: i.data,
        origin: U(this, $t) ? U(this, $t).origin : U(this, At).origin,
        lastEventId: i.id || ""
      });
      U(this, Ut) && (!i.event || i.event === "message") && U(this, Ut).call(this, o), this.dispatchEvent(o);
    }), ue(this, ir, (i) => {
      re(this, bn, i);
    }), ue(this, lr, () => {
      re(this, Wt, void 0), U(this, ve) === this.CONNECTING && st(this, $e, tr).call(this);
    });
    try {
      if (t instanceof URL)
        re(this, At, t);
      else if (typeof t == "string")
        re(this, At, new URL(t, yf()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw Sf("An invalid or illegal string was specified");
    }
    re(this, Bt, Cf({
      onEvent: U(this, rr),
      onRetry: U(this, ir)
    })), re(this, ve, this.CONNECTING), re(this, bn, 3e3), re(this, ns, (s = n == null ? void 0 : n.fetch) != null ? s : globalThis.fetch), re(this, jn, (r = n == null ? void 0 : n.withCredentials) != null ? r : !1), st(this, $e, tr).call(this);
  }
  /**
   * Returns the state of this EventSource object's connection. It can have the values described below.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/readyState)
   *
   * Note: typed as `number` instead of `0 | 1 | 2` for compatibility with the `EventSource` interface,
   * defined in the TypeScript `dom` library.
   *
   * @public
   */
  get readyState() {
    return U(this, ve);
  }
  /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */
  get url() {
    return U(this, At).href;
  }
  /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */
  get withCredentials() {
    return U(this, jn);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return U(this, Kt);
  }
  set onerror(t) {
    re(this, Kt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return U(this, Ut);
  }
  set onmessage(t) {
    re(this, Ut, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return U(this, rn);
  }
  set onopen(t) {
    re(this, rn, t);
  }
  addEventListener(t, n, s) {
    const r = n;
    super.addEventListener(t, r, s);
  }
  removeEventListener(t, n, s) {
    const r = n;
    super.removeEventListener(t, r, s);
  }
  /**
   * Aborts any instances of the fetch algorithm started for this EventSource object, and sets the readyState attribute to CLOSED.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/close)
   *
   * @public
   */
  close() {
    U(this, Wt) && clearTimeout(U(this, Wt)), U(this, ve) !== this.CLOSED && (U(this, bt) && U(this, bt).abort(), re(this, ve, this.CLOSED), re(this, bt, void 0));
  }
}
ve = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
tr = function() {
  re(this, ve, this.CONNECTING), re(this, bt, new AbortController()), U(this, ns)(U(this, At), st(this, $e, Ii).call(this)).then(U(this, nr)).catch(U(this, sr));
}, nr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), /**
* Get request options for the `fetch()` request
*
* @returns The request options
* @internal
*/
Ii = function() {
  var e;
  const t = {
    // [spec] Let `corsAttributeState` be `Anonymous`…
    // [spec] …will have their mode set to "cors"…
    mode: "cors",
    redirect: "follow",
    headers: { Accept: "text/event-stream", ...U(this, Cn) ? { "Last-Event-ID": U(this, Cn) } : void 0 },
    cache: "no-store",
    signal: (e = U(this, bt)) == null ? void 0 : e.signal
  };
  return "window" in globalThis && (t.credentials = this.withCredentials ? "include" : "same-origin"), t;
}, rr = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), /**
* Handles the process referred to in the EventSource specification as "failing a connection".
*
* @param error - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
on = function(e, t) {
  var n;
  U(this, ve) !== this.CLOSED && re(this, ve, this.CLOSED);
  const s = new Ti("error", { code: t, message: e });
  (n = U(this, Kt)) == null || n.call(this, s), this.dispatchEvent(s);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
or = function(e, t) {
  var n;
  if (U(this, ve) === this.CLOSED)
    return;
  re(this, ve, this.CONNECTING);
  const s = new Ti("error", { code: t, message: e });
  (n = U(this, Kt)) == null || n.call(this, s), this.dispatchEvent(s), re(this, Wt, setTimeout(U(this, lr), U(this, bn)));
}, lr = /* @__PURE__ */ new WeakMap(), /**
* ReadyState representing an EventSource currently trying to connect
*
* @public
*/
Vn.CONNECTING = 0, /**
* ReadyState representing an EventSource connection that is open (eg connected)
*
* @public
*/
Vn.OPEN = 1, /**
* ReadyState representing an EventSource connection that is closed (eg disconnected)
*
* @public
*/
Vn.CLOSED = 2;
function yf() {
  const e = "document" in globalThis ? globalThis.document : void 0;
  return e && typeof e == "object" && "baseURI" in e && typeof e.baseURI == "string" ? e.baseURI : void 0;
}
const Nn = "http://localhost:5000";
class xf {
  constructor(t) {
    this.config = t;
  }
  async loadChatHistory(t) {
    const n = await fetch(`${Nn}/openai/${t}/chat`, {
      headers: {
        "Content-Type": "application/json",
        ...this.config.apikey && { "X-Api-Key": this.config.apikey }
      }
    });
    if (!n.ok)
      throw new Error("Error loading chat history");
    return n.json();
  }
  async sendChatMessage(t, n, s) {
    const r = await fetch(`${Nn}/openai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.config.apikey && { "X-Api-Key": this.config.apikey },
        ...s && { "X-Uuid-User": s }
      },
      body: JSON.stringify({
        message: t,
        thread_id: n
      })
    });
    if (!r.ok)
      throw new Error("Error sending chat message");
    return r.json();
  }
  createChatStream(t) {
    return new Vn(`${Nn}/openai/${t}/chat-streams`, {
      fetch: (n) => fetch(n, {
        headers: {
          ...this.config.apikey && { "X-Api-Key": this.config.apikey }
        }
      })
    });
  }
  async checkHealth() {
    const t = await fetch(`${Nn}/check/health`, {
      headers: {
        ...this.config.apikey && { "X-Api-Key": this.config.apikey }
      }
    });
    if (!t.ok)
      throw new Error("Error checking health");
    return t.json();
  }
}
const ce = {
  dataApiKey: "",
  dataUuidUser: "",
  defaultMessage: "Hola!, soy el asistente de integración de RedPay. ¿En qué puedo ayudarte?",
  chatbotWidth: "500px",
  chatbotHeight: "500px",
  headerName: "RedPay Assistant",
  headerIcon: "https://capstone-bucket-s3.s3.sa-east-1.amazonaws.com/junngla/chatbot.avif",
  headerBackgroundColor: "#bd1637",
  headerTextColor: "#ffffff",
  userMessageColor: "#303030",
  assistantMessageColor: "#828282",
  userMessageBackground: "#fff",
  assistantMessageBackground: "#f9f9f9",
  closeBtnColor: "#ffffff",
  buttonBackgroundColor: "#007bff",
  buttonTextColor: "#fff",
  chatMode: "public"
}, hl = {
  dataApiKey: {
    type: String,
    required: !0
  },
  dataUuidUser: {
    type: String,
    default: ce.dataUuidUser
  },
  defaultMessage: {
    type: String,
    default: ce.defaultMessage
  },
  headerName: {
    type: String,
    default: ce.headerName
  },
  headerIcon: {
    type: String,
    default: ce.headerIcon
  },
  headerBackgroundColor: {
    type: String,
    default: ce.headerBackgroundColor
  },
  headerTextColor: {
    type: String,
    default: ce.headerTextColor
  },
  userMessageColor: {
    type: String,
    default: ce.userMessageColor
  },
  assistantMessageColor: {
    type: String,
    default: ce.assistantMessageColor
  },
  userMessageBackground: {
    type: String,
    default: ce.userMessageBackground
  },
  assistantMessageBackground: {
    type: String,
    default: ce.assistantMessageBackground
  },
  closeBtnColor: {
    type: String,
    default: ce.closeBtnColor
  },
  buttonBackgroundColor: {
    type: String,
    default: ce.buttonBackgroundColor
  },
  buttonTextColor: {
    type: String,
    default: ce.buttonTextColor
  },
  chatbotWidth: {
    type: String,
    default: ce.chatbotWidth
  },
  chatbotHeight: {
    type: String,
    default: ce.chatbotHeight
  },
  chatMode: {
    type: String,
    default: ce.chatMode
  }
};
function nt(e) {
  return /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(e);
}
function $n(e) {
  return typeof e == "string" && e.trim() !== "";
}
function Oi(e) {
  return typeof e == "string" && /^\d+(\.\d+)?$/.test(e);
}
function vf(e) {
  if (typeof e != "string") return !1;
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
function Di(e) {
  const t = {
    ...ce,
    ...e
  };
  return $n(e.dataApiKey) || (console.error(
    "Implementación fallida: 'dataApiKey' es requerida y debe ser una cadena no vacía. Se usará el valor por defecto."
  ), t.dataApiKey = ce.dataApiKey), [
    {
      key: "dataUuidUser",
      validator: $n,
      error: "'data-uuid-user' es inválida."
    },
    {
      key: "defaultMessage",
      validator: $n,
      error: "'default-message' es inválida."
    },
    {
      key: "headerName",
      validator: $n,
      error: "'header-name' es inválida."
    },
    {
      key: "headerIcon",
      validator: vf,
      error: "'header-icon' debe ser una URL."
    },
    {
      key: "headerBackgroundColor",
      validator: nt,
      error: "'header-background-color' debe ser un color hexadecimal válido."
    },
    {
      key: "headerTextColor",
      validator: nt,
      error: "'header-text-color' debe ser un color hexadecimal válido."
    },
    {
      key: "userMessageColor",
      validator: nt,
      error: "'user-message-color' debe ser un color hexadecimal válido."
    },
    {
      key: "assistantMessageColor",
      validator: nt,
      error: "'assistant-message-color' debe ser un color hexadecimal válido."
    },
    {
      key: "userMessageBackground",
      validator: nt,
      error: "'user-message-background' debe ser un color hexadecimal válido."
    },
    {
      key: "assistantMessageBackground",
      validator: nt,
      error: "'assistant-message-background' debe ser un color hexadecimal válido."
    },
    {
      key: "closeBtnColor",
      validator: nt,
      error: "'close-btn-color' debe ser un color hexadecimal válido."
    },
    {
      key: "buttonBackgroundColor",
      validator: nt,
      error: "'button-background-color' debe ser un color hexadecimal válido."
    },
    {
      key: "buttonTextColor",
      validator: nt,
      error: "'button-text-color' debe ser un color hexadecimal válido."
    },
    {
      key: "chatbotWidth",
      validator: Oi,
      error: "'chatbot-width' debe ser una cadena numérica."
    },
    {
      key: "chatbotHeight",
      validator: Oi,
      error: "'chatbot-height' debe ser una cadena numérica."
    },
    {
      key: "chatMode",
      validator: (s) => s === "public" || s === "private",
      error: "'chat-mode' debe ser 'public' o 'private'."
    }
  ].forEach(({ key: s, validator: r, error: i }) => {
    e[s] !== void 0 && e[s] !== ce[s] && (r(e[s]) || (console.error(
      `Implementación fallida: ${i} Se usará el valor por defecto para '${s}'.`
    ), t[s] = ce[s]));
  }), t;
}
const wf = /* @__PURE__ */ Ot({
  name: "ChatBot",
  components: { ChatWindow: uf, ChatToggle: gf },
  props: hl,
  setup(e) {
    const t = Oe(Di(e)), n = Oe(e.chatMode || "public"), s = Oe(e.dataUuidUser || null);
    Za(() => {
      const { chatMode: T, ...N } = e;
      t.value = {
        ...t.value,
        ...Di(N)
      };
    });
    const r = { apikey: t.value.dataApiKey };
    Ao("chatConfig", r);
    const i = new xf(r), o = Xs(() => `${n.value}_threadId`), l = Oe(localStorage.getItem(o.value)), a = {
      isOpen: Oe(!1),
      userInput: Oe(""),
      messages: Oe([]),
      threadId: l,
      sending: Oe(!1),
      chatStatus: Oe(""),
      showChatBot: Oe(!1)
    }, u = zo(), c = Xs(
      () => a.sending.value && a.chatStatus.value ? `Estado: ${a.chatStatus.value}` : "Escribe tu mensaje..."
    ), d = () => {
      Cr(() => {
        var H, Z;
        const T = (Z = (H = u == null ? void 0 : u.vnode) == null ? void 0 : H.el) == null ? void 0 : Z.getRootNode();
        if (!T) return;
        const N = T.querySelector(".chat-messages");
        N && (N.scrollTop = N.scrollHeight);
      });
    };
    Xe(a.messages, d, { deep: !0 });
    const p = () => {
      b && E && (b.removeEventListener(`${a.threadId.value}`, E), b.close(), b = null, E = null);
    }, m = (T, N) => {
      a.messages.value.push({ text: T, from: N });
    }, P = async () => {
      if (a.threadId.value)
        try {
          (await i.loadChatHistory(a.threadId.value)).forEach((N) => {
            var $, V;
            const H = ((V = ($ = N == null ? void 0 : N.content[0]) == null ? void 0 : $.text) == null ? void 0 : V.value) || "", Z = (N == null ? void 0 : N.role) || "assistant";
            H && m(H, Z);
          });
        } catch {
          m("Error al cargar historial.", "assistantError");
        }
      else
        m(t.value.defaultMessage, "assistant");
    };
    let b = null, E = null, D = null;
    const B = (T) => {
      p(), b = i.createChatStream(T), E = (N) => {
        const H = JSON.parse(N.data);
        H.word && (D === null ? (m(H.word, "assistant"), D = a.messages.value.length - 1) : a.messages.value[D].text += H.word), a.chatStatus.value = H.status, ["completed", "failed"].includes(H.status) && (a.sending.value = !1, D = null, p());
      }, b.addEventListener(`${a.threadId.value}`, E), b.onerror = p;
    }, W = async () => {
      if (!(!a.userInput.value.trim() || a.sending.value)) {
        m(a.userInput.value, "user"), a.sending.value = !0;
        try {
          const { threadId: T } = await i.sendChatMessage(
            a.userInput.value,
            a.threadId.value,
            s.value
          );
          a.threadId.value = T, localStorage.setItem(o.value, T), B(T);
        } catch {
          m("Error al enviar mensaje.", "assistantError"), a.sending.value = !1;
        }
        a.userInput.value = "";
      }
    }, A = async () => {
      a.isOpen.value = !a.isOpen.value, a.isOpen.value && !a.messages.value.length ? (a.sending.value = !0, await P(), a.sending.value = !1) : d();
    };
    return Xe(
      () => e.chatMode,
      async (T, N) => {
        if (T && T !== N && (T === "public" || T === "private")) {
          n.value = T;
          const H = localStorage.getItem(`${T}_threadId`);
          a.threadId.value = H || null, a.messages.value = [], await P();
        }
      }
    ), Xe(
      () => e.dataUuidUser,
      (T, N) => {
        T && T !== N && (s.value = T);
      }
    ), Sr(async () => {
      if (n.value === "private" && !s.value) {
        console.error("[ChatBot Error] El modo 'private' requiere que se proporcione 'dataUuidUser'.");
        return;
      }
      try {
        const { success: T } = await i.checkHealth();
        a.showChatBot.value = T;
      } catch {
        a.showChatBot.value = !1;
      }
    }), {
      ...a,
      sendMessage: W,
      toggleChat: A,
      placeholderText: c,
      ...t.value
    };
  }
}), Pf = ".chat-slide-enter-active[data-v-6ad61b1a],.chat-slide-leave-active[data-v-6ad61b1a]{transition:transform .4s ease,opacity .4s ease}.chat-slide-enter-from[data-v-6ad61b1a]{transform:translate(100%);opacity:0}.chat-slide-enter-to[data-v-6ad61b1a],.chat-slide-leave-from[data-v-6ad61b1a]{transform:translate(0);opacity:1}.chat-slide-leave-to[data-v-6ad61b1a]{transform:translate(100%);opacity:0}", kf = { key: 0 };
function Ef(e, t, n, s, r, i) {
  const o = hn("ChatWindow"), l = hn("ChatToggle");
  return e.showChatBot ? (Ne(), at("div", kf, [
    de(Ac, { name: "chat-slide" }, {
      default: go(() => [
        e.isOpen ? (Ne(), Js(o, {
          key: 0,
          messages: e.messages,
          userInput: e.userInput,
          "onUpdate:userInput": t[0] || (t[0] = (a) => e.userInput = a),
          sending: e.sending,
          placeholder: e.placeholderText,
          "header-name": e.headerName,
          "header-icon": e.headerIcon,
          "header-background-color": e.headerBackgroundColor,
          "header-text-color": e.headerTextColor,
          "close-btn-color": e.closeBtnColor,
          "user-message-color": e.userMessageColor,
          "user-message-background": e.userMessageBackground,
          "assistant-message-color": e.assistantMessageColor,
          "assistant-message-background": e.assistantMessageBackground,
          "button-background-color": e.buttonBackgroundColor,
          "button-text-color": e.buttonTextColor,
          "chatbot-width": e.chatbotWidth,
          "chatbot-height": e.chatbotHeight,
          onSendMessage: e.sendMessage,
          onToggleChat: e.toggleChat
        }, null, 8, ["messages", "userInput", "sending", "placeholder", "header-name", "header-icon", "header-background-color", "header-text-color", "close-btn-color", "user-message-color", "user-message-background", "assistant-message-color", "assistant-message-background", "button-background-color", "button-text-color", "chatbot-width", "chatbot-height", "onSendMessage", "onToggleChat"])) : Hn("", !0)
      ]),
      _: 1
    }),
    e.isOpen ? Hn("", !0) : (Ne(), Js(l, {
      key: 0,
      onToggleChat: e.toggleChat,
      "header-icon": e.headerIcon
    }, null, 8, ["onToggleChat", "header-icon"]))
  ])) : Hn("", !0);
}
const dl = /* @__PURE__ */ Jt(wf, [["render", Ef], ["styles", [Pf]], ["__scopeId", "data-v-6ad61b1a"]]);
dl.props = hl;
const Mf = /* @__PURE__ */ Jc(dl, { shadowRoot: !0 });
customElements.define("chat-bot", Mf);
