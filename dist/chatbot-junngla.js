var Da = Object.defineProperty;
var La = (t, e, s) => e in t ? Da(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var J = (t, e, s) => La(t, typeof e != "symbol" ? e + "" : e, s);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function or(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const Q = {}, Nt = [], Be = () => {
}, Fa = () => !1, Ys = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), ar = (t) => t.startsWith("onUpdate:"), ae = Object.assign, lr = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, Na = Object.prototype.hasOwnProperty, V = (t, e) => Na.call(t, e), M = Array.isArray, Bt = (t) => Zs(t) === "[object Map]", Bi = (t) => Zs(t) === "[object Set]", D = (t) => typeof t == "function", oe = (t) => typeof t == "string", Ct = (t) => typeof t == "symbol", te = (t) => t !== null && typeof t == "object", $i = (t) => (te(t) || D(t)) && D(t.then) && D(t.catch), Ui = Object.prototype.toString, Zs = (t) => Ui.call(t), Ba = (t) => Zs(t).slice(8, -1), en = (t) => Zs(t) === "[object Object]", cr = (t) => oe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, ss = /* @__PURE__ */ or(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (s) => e[s] || (e[s] = t(s));
}, $a = /-(\w)/g, Ce = tn(
  (t) => t.replace($a, (e, s) => s ? s.toUpperCase() : "")
), Ua = /\B([A-Z])/g, Ee = tn(
  (t) => t.replace(Ua, "-$1").toLowerCase()
), sn = tn((t) => t.charAt(0).toUpperCase() + t.slice(1)), Cn = tn(
  (t) => t ? `on${sn(t)}` : ""
), bt = (t, e) => !Object.is(t, e), Is = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, Hi = (t, e, s, n = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Nn = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, Bn = (t) => {
  const e = oe(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let Hr;
const nn = () => Hr || (Hr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function at(t) {
  if (M(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const n = t[s], r = oe(n) ? qa(n) : at(n);
      if (r)
        for (const i in r)
          e[i] = r[i];
    }
    return e;
  } else if (oe(t) || te(t))
    return t;
}
const Ha = /;(?![^(]*\))/g, Wa = /:([^]+)/, Va = /\/\*[^]*?\*\//g;
function qa(t) {
  const e = {};
  return t.replace(Va, "").split(Ha).forEach((s) => {
    if (s) {
      const n = s.split(Wa);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function rn(t) {
  let e = "";
  if (oe(t))
    e = t;
  else if (M(t))
    for (let s = 0; s < t.length; s++) {
      const n = rn(t[s]);
      n && (e += n + " ");
    }
  else if (te(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const Ga = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ja = /* @__PURE__ */ or(Ga);
function Wi(t) {
  return !!t || t === "";
}
const Vi = (t) => !!(t && t.__v_isRef === !0), qi = (t) => oe(t) ? t : t == null ? "" : M(t) || te(t) && (t.toString === Ui || !D(t.toString)) ? Vi(t) ? qi(t.value) : JSON.stringify(t, Gi, 2) : String(t), Gi = (t, e) => Vi(e) ? Gi(t, e.value) : Bt(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [n, r], i) => (s[Sn(n, i) + " =>"] = r, s),
    {}
  )
} : Bi(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => Sn(s))
} : Ct(e) ? Sn(e) : te(e) && !M(e) && !en(e) ? String(e) : e, Sn = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ct(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
var za = { ACLOCAL_PATH: "C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal", ALLUSERSPROFILE: "C:\\ProgramData", AMDRMSDKPATH: "C:\\Program Files\\AMD\\RyzenMasterSDK\\", APPDATA: "C:\\Users\\Miloh\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_15272_UIJDLUTPEMKXMCDJ", COLOR: "1", COLORTERM: "truecolor", COMMONPROGRAMFILES: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-3I26BL6", COMSPEC: "C:\\WINDOWS\\system32\\cmd.exe", CONFIG_SITE: "C:/Program Files/Git/etc/config.site", DISPLAY: "needs-to-be-defined", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\WINDOWS\\notepad.exe", EFC_31780: "1", EXEPATH: "C:\\Program Files\\Git\\bin", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\Miloh", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\Miloh", HOSTNAME: "DESKTOP-3I26BL6", INFOPATH: "C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info", INIT_CWD: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end", "IntelliJ IDEA": "C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;", JAVA_HOME: "C:\\Program Files\\Java\\jdk-20", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\Miloh\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-3I26BL6", MANPATH: "C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man", MAVEN_HOME: "C:\\Program Files\\Maven\\apache-maven-3.9.1", MINGW_CHOST: "x86_64-w64-mingw32", MINGW_PACKAGE_PREFIX: "mingw-w64-x86_64", MINGW_PREFIX: "C:/Program Files/Git/mingw64", MSYSTEM: "MINGW64", MSYSTEM_CARCH: "x86_64", MSYSTEM_CHOST: "x86_64-w64-mingw32", MSYSTEM_PREFIX: "C:/Program Files/Git/mingw64", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", npm_command: "run-script", npm_config_cache: "C:\\Users\\Miloh\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Program Files\\nodejs\\etc\\npmrc", npm_config_global_prefix: "C:\\Program Files\\nodejs", npm_config_init_module: "C:\\Users\\Miloh\\.npm-init.js", npm_config_legacy_peer_deps: "true", npm_config_local_prefix: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end", npm_config_node_gyp: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "10.5.2", npm_config_prefix: "C:\\Program Files\\nodejs", npm_config_userconfig: "C:\\Users\\Miloh\\.npmrc", npm_config_user_agent: "npm/10.5.2 node/v20.13.1 win32 x64 workspaces/false", npm_execpath: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "vue-tsc -b && vite build", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end\\package.json", npm_package_name: "junngla-chatbot-frontend-web", npm_package_version: "1.1.2", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\Miloh\\OneDrive", ORIGINAL_PATH: "C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files\\dotnet;C:\\Program Files\\Maven\\apache-maven-3.9.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Ruby33-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311\\Scripts;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311;C:\\Users\\Miloh\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\npm;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\MongoDB Atlas CLI;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\Miloh\\AppData\\Local\\Programs\\mongosh;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand", ORIGINAL_TEMP: "C:/Users/Miloh/AppData/Local/Temp", ORIGINAL_TMP: "C:/Users/Miloh/AppData/Local/Temp", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", PATH: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\node_modules\\.bin;C:\\Users\\Miloh\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files\\dotnet;C:\\Program Files\\Maven\\apache-maven-3.9.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Ruby33-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311\\Scripts;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311;C:\\Users\\Miloh\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\npm;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\MongoDB Atlas CLI;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\Miloh\\AppData\\Local\\Programs\\mongosh;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.RB;.RBW", PKG_CONFIG_PATH: "C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig", PLINK_PROTOCOL: "ssh", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD", PROCESSOR_LEVEL: "25", PROCESSOR_REVISION: "5000", ProgramData: "C:\\ProgramData", PROGRAMFILES: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\PowerShell\\Modules\\", PUBLIC: "C:\\Users\\Public", PWD: "C:/Users/Miloh/Desktop/Junngla/Proyectos/CHATBOT/chat-bot-front-end", SESSIONNAME: "Console", SHELL: "C:\\Program Files\\Git\\usr\\bin\\bash.exe", SHLVL: "2", SSH_ASKPASS: "C:/Program Files/Git/mingw64/bin/git-askpass.exe", SYSTEMDRIVE: "C:", SYSTEMROOT: "C:\\WINDOWS", TEMP: "C:\\Users\\Miloh\\AppData\\Local\\Temp", TERM: "xterm-256color", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.99.2", TMP: "C:\\Users\\Miloh\\AppData\\Local\\Temp", TMPDIR: "C:\\Users\\Miloh\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-3I26BL6", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-3I26BL6", USERNAME: "Miloh", USERPROFILE: "C:\\Users\\Miloh", VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: "1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-a98055278d-sock", WINDIR: "C:\\WINDOWS", _: "C:/Program Files/nodejs/node.exe" };
let Ae;
class Ka {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ae, !e && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].pause();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].resume();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = Ae;
      try {
        return Ae = this, e();
      } finally {
        Ae = s;
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
  stop(e) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ja() {
  return Ae;
}
let ee;
const wn = /* @__PURE__ */ new WeakSet();
class ji {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ae && Ae.active && Ae.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, wn.has(this) && (wn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ki(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Wr(this), Ji(this);
    const e = ee, s = $e;
    ee = this, $e = !0;
    try {
      return this.fn();
    } finally {
      Qi(this), ee = e, $e = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        fr(e);
      this.deps = this.depsTail = void 0, Wr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? wn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $n(this) && this.run();
  }
  get dirty() {
    return $n(this);
  }
}
let zi = 0, ns, rs;
function Ki(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = rs, rs = t;
    return;
  }
  t.next = ns, ns = t;
}
function ur() {
  zi++;
}
function hr() {
  if (--zi > 0)
    return;
  if (rs) {
    let e = rs;
    for (rs = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; ns; ) {
    let e = ns;
    for (ns = void 0; e; ) {
      const s = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (n) {
          t || (t = n);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function Ji(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Qi(t) {
  let e, s = t.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), fr(n), Qa(n)) : e = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  t.deps = e, t.depsTail = s;
}
function $n(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Xi(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Xi(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === fs))
    return;
  t.globalVersion = fs;
  const e = t.dep;
  if (t.flags |= 2, e.version > 0 && !t.isSSR && t.deps && !$n(t)) {
    t.flags &= -3;
    return;
  }
  const s = ee, n = $e;
  ee = t, $e = !0;
  try {
    Ji(t);
    const r = t.fn(t._value);
    (e.version === 0 || bt(r, t._value)) && (t._value = r, e.version++);
  } catch (r) {
    throw e.version++, r;
  } finally {
    ee = s, $e = n, Qi(t), t.flags &= -3;
  }
}
function fr(t, e = !1) {
  const { dep: s, prevSub: n, nextSub: r } = t;
  if (n && (n.nextSub = r, t.prevSub = void 0), r && (r.prevSub = n, t.nextSub = void 0), s.subs === t && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      fr(i, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function Qa(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let $e = !0;
const Yi = [];
function ct() {
  Yi.push($e), $e = !1;
}
function ut() {
  const t = Yi.pop();
  $e = t === void 0 ? !0 : t;
}
function Wr(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = ee;
    ee = void 0;
    try {
      e();
    } finally {
      ee = s;
    }
  }
}
let fs = 0;
class Xa {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class pr {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(e) {
    if (!ee || !$e || ee === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== ee)
      s = this.activeLink = new Xa(ee, this), ee.deps ? (s.prevDep = ee.depsTail, ee.depsTail.nextDep = s, ee.depsTail = s) : ee.deps = ee.depsTail = s, Zi(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = ee.depsTail, s.nextDep = void 0, ee.depsTail.nextDep = s, ee.depsTail = s, ee.deps === s && (ee.deps = n);
    }
    return s;
  }
  trigger(e) {
    this.version++, fs++, this.notify(e);
  }
  notify(e) {
    ur();
    try {
      za.NODE_ENV;
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      hr();
    }
  }
}
function Zi(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let n = e.deps; n; n = n.nextDep)
        Zi(n);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const Un = /* @__PURE__ */ new WeakMap(), Tt = Symbol(
  ""
), Hn = Symbol(
  ""
), ps = Symbol(
  ""
);
function ge(t, e, s) {
  if ($e && ee) {
    let n = Un.get(t);
    n || Un.set(t, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new pr()), r.map = n, r.key = s), r.track();
  }
}
function it(t, e, s, n, r, i) {
  const o = Un.get(t);
  if (!o) {
    fs++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (ur(), e === "clear")
    o.forEach(a);
  else {
    const l = M(t), u = l && cr(s);
    if (l && s === "length") {
      const c = Number(n);
      o.forEach((p, d) => {
        (d === "length" || d === ps || !Ct(d) && d >= c) && a(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && a(o.get(s)), u && a(o.get(ps)), e) {
        case "add":
          l ? u && a(o.get("length")) : (a(o.get(Tt)), Bt(t) && a(o.get(Hn)));
          break;
        case "delete":
          l || (a(o.get(Tt)), Bt(t) && a(o.get(Hn)));
          break;
        case "set":
          Bt(t) && a(o.get(Tt));
          break;
      }
  }
  hr();
}
function Dt(t) {
  const e = H(t);
  return e === t ? e : (ge(e, "iterate", ps), Le(t) ? e : e.map(me));
}
function on(t) {
  return ge(t = H(t), "iterate", ps), t;
}
const Ya = {
  __proto__: null,
  [Symbol.iterator]() {
    return xn(this, Symbol.iterator, me);
  },
  concat(...t) {
    return Dt(this).concat(
      ...t.map((e) => M(e) ? Dt(e) : e)
    );
  },
  entries() {
    return xn(this, "entries", (t) => (t[1] = me(t[1]), t));
  },
  every(t, e) {
    return tt(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return tt(this, "filter", t, e, (s) => s.map(me), arguments);
  },
  find(t, e) {
    return tt(this, "find", t, e, me, arguments);
  },
  findIndex(t, e) {
    return tt(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return tt(this, "findLast", t, e, me, arguments);
  },
  findLastIndex(t, e) {
    return tt(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return tt(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return vn(this, "includes", t);
  },
  indexOf(...t) {
    return vn(this, "indexOf", t);
  },
  join(t) {
    return Dt(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return vn(this, "lastIndexOf", t);
  },
  map(t, e) {
    return tt(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Kt(this, "pop");
  },
  push(...t) {
    return Kt(this, "push", t);
  },
  reduce(t, ...e) {
    return Vr(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Vr(this, "reduceRight", t, e);
  },
  shift() {
    return Kt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return tt(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Kt(this, "splice", t);
  },
  toReversed() {
    return Dt(this).toReversed();
  },
  toSorted(t) {
    return Dt(this).toSorted(t);
  },
  toSpliced(...t) {
    return Dt(this).toSpliced(...t);
  },
  unshift(...t) {
    return Kt(this, "unshift", t);
  },
  values() {
    return xn(this, "values", me);
  }
};
function xn(t, e, s) {
  const n = on(t), r = n[e]();
  return n !== t && !Le(t) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = s(i.value)), i;
  }), r;
}
const Za = Array.prototype;
function tt(t, e, s, n, r, i) {
  const o = on(t), a = o !== t && !Le(t), l = o[e];
  if (l !== Za[e]) {
    const p = l.apply(t, i);
    return a ? me(p) : p;
  }
  let u = s;
  o !== t && (a ? u = function(p, d) {
    return s.call(this, me(p), d, t);
  } : s.length > 2 && (u = function(p, d) {
    return s.call(this, p, d, t);
  }));
  const c = l.call(o, u, n);
  return a && r ? r(c) : c;
}
function Vr(t, e, s, n) {
  const r = on(t);
  let i = s;
  return r !== t && (Le(t) ? s.length > 3 && (i = function(o, a, l) {
    return s.call(this, o, a, l, t);
  }) : i = function(o, a, l) {
    return s.call(this, o, me(a), l, t);
  }), r[e](i, ...n);
}
function vn(t, e, s) {
  const n = H(t);
  ge(n, "iterate", ps);
  const r = n[e](...s);
  return (r === -1 || r === !1) && gr(s[0]) ? (s[0] = H(s[0]), n[e](...s)) : r;
}
function Kt(t, e, s = []) {
  ct(), ur();
  const n = H(t)[e].apply(t, s);
  return hr(), ut(), n;
}
const el = /* @__PURE__ */ or("__proto__,__v_isRef,__isVue"), eo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Ct)
);
function tl(t) {
  Ct(t) || (t = String(t));
  const e = H(this);
  return ge(e, "has", t), e.hasOwnProperty(t);
}
class to {
  constructor(e = !1, s = !1) {
    this._isReadonly = e, this._isShallow = s;
  }
  get(e, s, n) {
    if (s === "__v_skip") return e.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? ao : oo : i ? io : ro).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const o = M(e);
    if (!r) {
      let l;
      if (o && (l = Ya[s]))
        return l;
      if (s === "hasOwnProperty")
        return tl;
    }
    const a = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      pe(e) ? e : n
    );
    return (Ct(s) ? eo.has(s) : el(s)) || (r || ge(e, "get", s), i) ? a : pe(a) ? o && cr(s) ? a : a.value : te(a) ? r ? lo(a) : dr(a) : a;
  }
}
class so extends to {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, n, r) {
    let i = e[s];
    if (!this._isShallow) {
      const l = Rt(i);
      if (!Le(n) && !Rt(n) && (i = H(i), n = H(n)), !M(e) && pe(i) && !pe(n))
        return l ? !1 : (i.value = n, !0);
    }
    const o = M(e) && cr(s) ? Number(s) < e.length : V(e, s), a = Reflect.set(
      e,
      s,
      n,
      pe(e) ? e : r
    );
    return e === H(r) && (o ? bt(n, i) && it(e, "set", s, n) : it(e, "add", s, n)), a;
  }
  deleteProperty(e, s) {
    const n = V(e, s);
    e[s];
    const r = Reflect.deleteProperty(e, s);
    return r && n && it(e, "delete", s, void 0), r;
  }
  has(e, s) {
    const n = Reflect.has(e, s);
    return (!Ct(s) || !eo.has(s)) && ge(e, "has", s), n;
  }
  ownKeys(e) {
    return ge(
      e,
      "iterate",
      M(e) ? "length" : Tt
    ), Reflect.ownKeys(e);
  }
}
class no extends to {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const sl = /* @__PURE__ */ new so(), nl = /* @__PURE__ */ new no(), rl = /* @__PURE__ */ new so(!0), il = /* @__PURE__ */ new no(!0), Wn = (t) => t, xs = (t) => Reflect.getPrototypeOf(t);
function ol(t, e, s) {
  return function(...n) {
    const r = this.__v_raw, i = H(r), o = Bt(i), a = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, u = r[t](...n), c = s ? Wn : e ? Vn : me;
    return !e && ge(
      i,
      "iterate",
      l ? Hn : Tt
    ), {
      // iterator protocol
      next() {
        const { value: p, done: d } = u.next();
        return d ? { value: p, done: d } : {
          value: a ? [c(p[0]), c(p[1])] : c(p),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function vs(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function al(t, e) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = H(i), a = H(r);
      t || (bt(r, a) && ge(o, "get", r), ge(o, "get", a));
      const { has: l } = xs(o), u = e ? Wn : t ? Vn : me;
      if (l.call(o, r))
        return u(i.get(r));
      if (l.call(o, a))
        return u(i.get(a));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !t && ge(H(r), "iterate", Tt), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = H(i), a = H(r);
      return t || (bt(r, a) && ge(o, "has", r), ge(o, "has", a)), r === a ? i.has(r) : i.has(r) || i.has(a);
    },
    forEach(r, i) {
      const o = this, a = o.__v_raw, l = H(a), u = e ? Wn : t ? Vn : me;
      return !t && ge(l, "iterate", Tt), a.forEach((c, p) => r.call(i, u(c), u(p), o));
    }
  };
  return ae(
    s,
    t ? {
      add: vs("add"),
      set: vs("set"),
      delete: vs("delete"),
      clear: vs("clear")
    } : {
      add(r) {
        !e && !Le(r) && !Rt(r) && (r = H(r));
        const i = H(this);
        return xs(i).has.call(i, r) || (i.add(r), it(i, "add", r, r)), this;
      },
      set(r, i) {
        !e && !Le(i) && !Rt(i) && (i = H(i));
        const o = H(this), { has: a, get: l } = xs(o);
        let u = a.call(o, r);
        u || (r = H(r), u = a.call(o, r));
        const c = l.call(o, r);
        return o.set(r, i), u ? bt(i, c) && it(o, "set", r, i) : it(o, "add", r, i), this;
      },
      delete(r) {
        const i = H(this), { has: o, get: a } = xs(i);
        let l = o.call(i, r);
        l || (r = H(r), l = o.call(i, r)), a && a.call(i, r);
        const u = i.delete(r);
        return l && it(i, "delete", r, void 0), u;
      },
      clear() {
        const r = H(this), i = r.size !== 0, o = r.clear();
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
    s[r] = ol(r, t, e);
  }), s;
}
function an(t, e) {
  const s = al(t, e);
  return (n, r, i) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? n : Reflect.get(
    V(s, r) && r in n ? s : n,
    r,
    i
  );
}
const ll = {
  get: /* @__PURE__ */ an(!1, !1)
}, cl = {
  get: /* @__PURE__ */ an(!1, !0)
}, ul = {
  get: /* @__PURE__ */ an(!0, !1)
}, hl = {
  get: /* @__PURE__ */ an(!0, !0)
}, ro = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ new WeakMap(), ao = /* @__PURE__ */ new WeakMap();
function fl(t) {
  switch (t) {
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
function pl(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : fl(Ba(t));
}
function dr(t) {
  return Rt(t) ? t : ln(
    t,
    !1,
    sl,
    ll,
    ro
  );
}
function dl(t) {
  return ln(
    t,
    !1,
    rl,
    cl,
    io
  );
}
function lo(t) {
  return ln(
    t,
    !0,
    nl,
    ul,
    oo
  );
}
function ks(t) {
  return ln(
    t,
    !0,
    il,
    hl,
    ao
  );
}
function ln(t, e, s, n, r) {
  if (!te(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const i = r.get(t);
  if (i)
    return i;
  const o = pl(t);
  if (o === 0)
    return t;
  const a = new Proxy(
    t,
    o === 2 ? n : s
  );
  return r.set(t, a), a;
}
function $t(t) {
  return Rt(t) ? $t(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Rt(t) {
  return !!(t && t.__v_isReadonly);
}
function Le(t) {
  return !!(t && t.__v_isShallow);
}
function gr(t) {
  return t ? !!t.__v_raw : !1;
}
function H(t) {
  const e = t && t.__v_raw;
  return e ? H(e) : t;
}
function gl(t) {
  return !V(t, "__v_skip") && Object.isExtensible(t) && Hi(t, "__v_skip", !0), t;
}
const me = (t) => te(t) ? dr(t) : t, Vn = (t) => te(t) ? lo(t) : t;
function pe(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Me(t) {
  return ml(t, !1);
}
function ml(t, e) {
  return pe(t) ? t : new bl(t, e);
}
class bl {
  constructor(e, s) {
    this.dep = new pr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : H(e), this._value = s ? e : me(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, n = this.__v_isShallow || Le(e) || Rt(e);
    e = n ? e : H(e), bt(e, s) && (this._rawValue = e, this._value = n ? e : me(e), this.dep.trigger());
  }
}
function co(t) {
  return pe(t) ? t.value : t;
}
const _l = {
  get: (t, e, s) => e === "__v_raw" ? t : co(Reflect.get(t, e, s)),
  set: (t, e, s, n) => {
    const r = t[e];
    return pe(r) && !pe(s) ? (r.value = s, !0) : Reflect.set(t, e, s, n);
  }
};
function uo(t) {
  return $t(t) ? t : new Proxy(t, _l);
}
class yl {
  constructor(e, s, n) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new pr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return Ki(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Xi(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function Cl(t, e, s = !1) {
  let n, r;
  return D(t) ? n = t : (n = t.get, r = t.set), new yl(n, r, s);
}
const Ps = {}, Hs = /* @__PURE__ */ new WeakMap();
let At;
function Sl(t, e = !1, s = At) {
  if (s) {
    let n = Hs.get(s);
    n || Hs.set(s, n = []), n.push(t);
  }
}
function wl(t, e, s = Q) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: a, call: l } = s, u = (S) => r ? S : Le(S) || r === !1 || r === 0 ? ot(S, 1) : ot(S);
  let c, p, d, m, A = !1, v = !1;
  if (pe(t) ? (p = () => t.value, A = Le(t)) : $t(t) ? (p = () => u(t), A = !0) : M(t) ? (v = !0, A = t.some((S) => $t(S) || Le(S)), p = () => t.map((S) => {
    if (pe(S))
      return S.value;
    if ($t(S))
      return u(S);
    if (D(S))
      return l ? l(S, 2) : S();
  })) : D(t) ? e ? p = l ? () => l(t, 2) : t : p = () => {
    if (d) {
      ct();
      try {
        d();
      } finally {
        ut();
      }
    }
    const S = At;
    At = c;
    try {
      return l ? l(t, 3, [m]) : t(m);
    } finally {
      At = S;
    }
  } : p = Be, e && r) {
    const S = p, T = r === !0 ? 1 / 0 : r;
    p = () => ot(S(), T);
  }
  const L = Ja(), N = () => {
    c.stop(), L && L.active && lr(L.effects, c);
  };
  if (i && e) {
    const S = e;
    e = (...T) => {
      S(...T), N();
    };
  }
  let U = v ? new Array(t.length).fill(Ps) : Ps;
  const W = (S) => {
    if (!(!(c.flags & 1) || !c.dirty && !S))
      if (e) {
        const T = c.run();
        if (r || A || (v ? T.some((G, X) => bt(G, U[X])) : bt(T, U))) {
          d && d();
          const G = At;
          At = c;
          try {
            const X = [
              T,
              // pass undefined as the old value when it's changed for the first time
              U === Ps ? void 0 : v && U[0] === Ps ? [] : U,
              m
            ];
            l ? l(e, 3, X) : (
              // @ts-expect-error
              e(...X)
            ), U = T;
          } finally {
            At = G;
          }
        }
      } else
        c.run();
  };
  return a && a(W), c = new ji(p), c.scheduler = o ? () => o(W, !1) : W, m = (S) => Sl(S, !1, c), d = c.onStop = () => {
    const S = Hs.get(c);
    if (S) {
      if (l)
        l(S, 4);
      else
        for (const T of S) T();
      Hs.delete(c);
    }
  }, e ? n ? W(!0) : U = c.run() : o ? o(W.bind(null, !0), !0) : c.run(), N.pause = c.pause.bind(c), N.resume = c.resume.bind(c), N.stop = N, N;
}
function ot(t, e = 1 / 0, s) {
  if (e <= 0 || !te(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(t)))
    return t;
  if (s.add(t), e--, pe(t))
    ot(t.value, e, s);
  else if (M(t))
    for (let n = 0; n < t.length; n++)
      ot(t[n], e, s);
  else if (Bi(t) || Bt(t))
    t.forEach((n) => {
      ot(n, e, s);
    });
  else if (en(t)) {
    for (const n in t)
      ot(t[n], e, s);
    for (const n of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, n) && ot(t[n], e, s);
  }
  return t;
}
var pt = { ACLOCAL_PATH: "C:\\Program Files\\Git\\mingw64\\share\\aclocal;C:\\Program Files\\Git\\usr\\share\\aclocal", ALLUSERSPROFILE: "C:\\ProgramData", AMDRMSDKPATH: "C:\\Program Files\\AMD\\RyzenMasterSDK\\", APPDATA: "C:\\Users\\Miloh\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_15272_UIJDLUTPEMKXMCDJ", COLOR: "1", COLORTERM: "truecolor", COMMONPROGRAMFILES: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-3I26BL6", COMSPEC: "C:\\WINDOWS\\system32\\cmd.exe", CONFIG_SITE: "C:/Program Files/Git/etc/config.site", DISPLAY: "needs-to-be-defined", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\WINDOWS\\notepad.exe", EFC_31780: "1", EXEPATH: "C:\\Program Files\\Git\\bin", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\Miloh", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\Miloh", HOSTNAME: "DESKTOP-3I26BL6", INFOPATH: "C:\\Program Files\\Git\\usr\\local\\info;C:\\Program Files\\Git\\usr\\share\\info;C:\\Program Files\\Git\\usr\\info;C:\\Program Files\\Git\\share\\info", INIT_CWD: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end", "IntelliJ IDEA": "C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;", JAVA_HOME: "C:\\Program Files\\Java\\jdk-20", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\Miloh\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-3I26BL6", MANPATH: "C:\\Program Files\\Git\\mingw64\\local\\man;C:\\Program Files\\Git\\mingw64\\share\\man;C:\\Program Files\\Git\\usr\\local\\man;C:\\Program Files\\Git\\usr\\share\\man;C:\\Program Files\\Git\\usr\\man;C:\\Program Files\\Git\\share\\man", MAVEN_HOME: "C:\\Program Files\\Maven\\apache-maven-3.9.1", MINGW_CHOST: "x86_64-w64-mingw32", MINGW_PACKAGE_PREFIX: "mingw-w64-x86_64", MINGW_PREFIX: "C:/Program Files/Git/mingw64", MSYSTEM: "MINGW64", MSYSTEM_CARCH: "x86_64", MSYSTEM_CHOST: "x86_64-w64-mingw32", MSYSTEM_PREFIX: "C:/Program Files/Git/mingw64", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", npm_command: "run-script", npm_config_cache: "C:\\Users\\Miloh\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Program Files\\nodejs\\etc\\npmrc", npm_config_global_prefix: "C:\\Program Files\\nodejs", npm_config_init_module: "C:\\Users\\Miloh\\.npm-init.js", npm_config_legacy_peer_deps: "true", npm_config_local_prefix: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end", npm_config_node_gyp: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "10.5.2", npm_config_prefix: "C:\\Program Files\\nodejs", npm_config_userconfig: "C:\\Users\\Miloh\\.npmrc", npm_config_user_agent: "npm/10.5.2 node/v20.13.1 win32 x64 workspaces/false", npm_execpath: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "vue-tsc -b && vite build", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end\\package.json", npm_package_name: "junngla-chatbot-frontend-web", npm_package_version: "1.1.2", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "C:\\Users\\Miloh\\AppData\\Roaming\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\Miloh\\OneDrive", ORIGINAL_PATH: "C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files\\dotnet;C:\\Program Files\\Maven\\apache-maven-3.9.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Ruby33-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311\\Scripts;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311;C:\\Users\\Miloh\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\npm;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\MongoDB Atlas CLI;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\Miloh\\AppData\\Local\\Programs\\mongosh;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand", ORIGINAL_TEMP: "C:/Users/Miloh/AppData/Local/Temp", ORIGINAL_TMP: "C:/Users/Miloh/AppData/Local/Temp", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", PATH: "C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\chat-bot-front-end\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\CHATBOT\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\Proyectos\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\Junngla\\node_modules\\.bin;C:\\Users\\Miloh\\Desktop\\node_modules\\.bin;C:\\Users\\Miloh\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm\\v20.13.1\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\Miloh\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\DTS\\Binn;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files\\dotnet;C:\\Program Files\\Maven\\apache-maven-3.9.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Ruby33-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311\\Scripts;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Python\\Python311;C:\\Users\\Miloh\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\npm;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\MongoDB Atlas CLI;C:\\Users\\Miloh\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\Miloh\\AppData\\Local\\Programs\\mongosh;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2024.3.2.1\\bin;C:\\Users\\Miloh\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Git\\usr\\bin\\core_perl", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.RB;.RBW", PKG_CONFIG_PATH: "C:\\Program Files\\Git\\mingw64\\lib\\pkgconfig;C:\\Program Files\\Git\\mingw64\\share\\pkgconfig", PLINK_PROTOCOL: "ssh", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD", PROCESSOR_LEVEL: "25", PROCESSOR_REVISION: "5000", ProgramData: "C:\\ProgramData", PROGRAMFILES: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft SQL Server\\150\\Tools\\PowerShell\\Modules\\", PUBLIC: "C:\\Users\\Public", PWD: "C:/Users/Miloh/Desktop/Junngla/Proyectos/CHATBOT/chat-bot-front-end", SESSIONNAME: "Console", SHELL: "C:\\Program Files\\Git\\usr\\bin\\bash.exe", SHLVL: "2", SSH_ASKPASS: "C:/Program Files/Git/mingw64/bin/git-askpass.exe", SYSTEMDRIVE: "C:", SYSTEMROOT: "C:\\WINDOWS", TEMP: "C:\\Users\\Miloh\\AppData\\Local\\Temp", TERM: "xterm-256color", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.99.2", TMP: "C:\\Users\\Miloh\\AppData\\Local\\Temp", TMPDIR: "C:\\Users\\Miloh\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-3I26BL6", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-3I26BL6", USERNAME: "Miloh", USERPROFILE: "C:\\Users\\Miloh", VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: "1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\Miloh\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-a98055278d-sock", WINDIR: "C:\\WINDOWS", _: "C:/Program Files/nodejs/node.exe" };
const is = [];
let kn = !1;
function xl(t, ...e) {
  if (kn) return;
  kn = !0, ct();
  const s = is.length ? is[is.length - 1].component : null, n = s && s.appContext.config.warnHandler, r = vl();
  if (n)
    Wt(
      n,
      s,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((i) => {
          var o, a;
          return (a = (o = i.toString) == null ? void 0 : o.call(i)) != null ? a : JSON.stringify(i);
        }).join(""),
        s && s.proxy,
        r.map(
          ({ vnode: i }) => `at <${ta(s, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${t}`, ...e];
    r.length && i.push(`
`, ...kl(r)), console.warn(...i);
  }
  ut(), kn = !1;
}
function vl() {
  let t = is[is.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const s = e[0];
    s && s.vnode === t ? s.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const n = t.component && t.component.parent;
    t = n && n.vnode;
  }
  return e;
}
function kl(t) {
  const e = [];
  return t.forEach((s, n) => {
    e.push(...n === 0 ? [] : [`
`], ...Pl(s));
  }), e;
}
function Pl({ vnode: t, recurseCount: e }) {
  const s = e > 0 ? `... (${e} recursive calls)` : "", n = t.component ? t.component.parent == null : !1, r = ` at <${ta(
    t.component,
    t.type,
    n
  )}`, i = ">" + s;
  return t.props ? [r, ...Al(t.props), i] : [r + i];
}
function Al(t) {
  const e = [], s = Object.keys(t);
  return s.slice(0, 3).forEach((n) => {
    e.push(...ho(n, t[n]));
  }), s.length > 3 && e.push(" ..."), e;
}
function ho(t, e, s) {
  return oe(e) ? (e = JSON.stringify(e), s ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? s ? e : [`${t}=${e}`] : pe(e) ? (e = ho(t, H(e.value), !0), s ? e : [`${t}=Ref<`, e, ">"]) : D(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = H(e), s ? e : [`${t}=`, e]);
}
function Wt(t, e, s, n) {
  try {
    return n ? t(...n) : t();
  } catch (r) {
    cn(r, e, s);
  }
}
function He(t, e, s, n) {
  if (D(t)) {
    const r = Wt(t, e, s, n);
    return r && $i(r) && r.catch((i) => {
      cn(i, e, s);
    }), r;
  }
  if (M(t)) {
    const r = [];
    for (let i = 0; i < t.length; i++)
      r.push(He(t[i], e, s, n));
    return r;
  }
}
function cn(t, e, s, n = !0) {
  const r = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = e && e.appContext.config || Q;
  if (e) {
    let a = e.parent;
    const l = e.proxy, u = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let p = 0; p < c.length; p++)
          if (c[p](t, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      ct(), Wt(i, null, 10, [
        t,
        l,
        u
      ]), ut();
      return;
    }
  }
  El(t, s, r, n, o);
}
function El(t, e, s, n = !0, r = !1) {
  if (r)
    throw t;
  console.error(t);
}
const _e = [];
let Ke = -1;
const Ut = [];
let dt = null, Lt = 0;
const fo = /* @__PURE__ */ Promise.resolve();
let Ws = null;
function mr(t) {
  const e = Ws || fo;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Tl(t) {
  let e = Ke + 1, s = _e.length;
  for (; e < s; ) {
    const n = e + s >>> 1, r = _e[n], i = ds(r);
    i < t || i === t && r.flags & 2 ? e = n + 1 : s = n;
  }
  return e;
}
function br(t) {
  if (!(t.flags & 1)) {
    const e = ds(t), s = _e[_e.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= ds(s) ? _e.push(t) : _e.splice(Tl(e), 0, t), t.flags |= 1, po();
  }
}
function po() {
  Ws || (Ws = fo.then(mo));
}
function Rl(t) {
  M(t) ? Ut.push(...t) : dt && t.id === -1 ? dt.splice(Lt + 1, 0, t) : t.flags & 1 || (Ut.push(t), t.flags |= 1), po();
}
function qr(t, e, s = Ke + 1) {
  for (; s < _e.length; s++) {
    const n = _e[s];
    if (n && n.flags & 2) {
      if (t && n.id !== t.uid)
        continue;
      _e.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function go(t) {
  if (Ut.length) {
    const e = [...new Set(Ut)].sort(
      (s, n) => ds(s) - ds(n)
    );
    if (Ut.length = 0, dt) {
      dt.push(...e);
      return;
    }
    for (dt = e, Lt = 0; Lt < dt.length; Lt++) {
      const s = dt[Lt];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    dt = null, Lt = 0;
  }
}
const ds = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function mo(t) {
  const e = Be;
  try {
    for (Ke = 0; Ke < _e.length; Ke++) {
      const s = _e[Ke];
      s && !(s.flags & 8) && (pt.NODE_ENV !== "production" && e(s), s.flags & 4 && (s.flags &= -2), Wt(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; Ke < _e.length; Ke++) {
      const s = _e[Ke];
      s && (s.flags &= -2);
    }
    Ke = -1, _e.length = 0, go(), Ws = null, (_e.length || Ut.length) && mo();
  }
}
let xe = null, bo = null;
function Vs(t) {
  const e = xe;
  return xe = t, bo = t && t.type.__scopeId || null, e;
}
function _o(t, e = xe, s) {
  if (!e || t._n)
    return t;
  const n = (...r) => {
    n._d && ti(-1);
    const i = Vs(e);
    let o;
    try {
      o = t(...r);
    } finally {
      Vs(i), n._d && ti(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qn(t, e) {
  if (xe === null)
    return t;
  const s = dn(xe), n = t.dirs || (t.dirs = []);
  for (let r = 0; r < e.length; r++) {
    let [i, o, a, l = Q] = e[r];
    i && (D(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ot(o), n.push({
      dir: i,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return t;
}
function xt(t, e, s, n) {
  const r = t.dirs, i = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[n];
    l && (ct(), He(l, s, 8, [
      t.el,
      a,
      t,
      e
    ]), ut());
  }
}
const Ml = Symbol("_vte"), yo = (t) => t.__isTeleport, gt = Symbol("_leaveCb"), As = Symbol("_enterCb");
function Ol() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return _r(() => {
    t.isMounted = !0;
  }), Ao(() => {
    t.isUnmounting = !0;
  }), t;
}
const Re = [Function, Array], Co = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Re,
  onEnter: Re,
  onAfterEnter: Re,
  onEnterCancelled: Re,
  // leave
  onBeforeLeave: Re,
  onLeave: Re,
  onAfterLeave: Re,
  onLeaveCancelled: Re,
  // appear
  onBeforeAppear: Re,
  onAppear: Re,
  onAfterAppear: Re,
  onAppearCancelled: Re
}, So = (t) => {
  const e = t.subTree;
  return e.component ? So(e.component) : e;
}, Il = {
  name: "BaseTransition",
  props: Co,
  setup(t, { slots: e }) {
    const s = Xo(), n = Ol();
    return () => {
      const r = e.default && vo(e.default(), !0);
      if (!r || !r.length)
        return;
      const i = wo(r), o = H(t), { mode: a } = o;
      if (n.isLeaving)
        return Pn(i);
      const l = Gr(i);
      if (!l)
        return Pn(i);
      let u = Gn(
        l,
        o,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (p) => u = p
      );
      l.type !== we && gs(l, u);
      let c = s.subTree && Gr(s.subTree);
      if (c && c.type !== we && !Et(l, c) && So(s).type !== we) {
        let p = Gn(
          c,
          o,
          n,
          s
        );
        if (gs(c, p), a === "out-in" && l.type !== we)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete p.afterLeave, c = void 0;
          }, Pn(i);
        a === "in-out" && l.type !== we ? p.delayLeave = (d, m, A) => {
          const v = xo(
            n,
            c
          );
          v[String(c.key)] = c, d[gt] = () => {
            m(), d[gt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            A(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function wo(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const s of t)
      if (s.type !== we) {
        e = s;
        break;
      }
  }
  return e;
}
const Dl = Il;
function xo(t, e) {
  const { leavingVNodes: s } = t;
  let n = s.get(e.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(e.type, n)), n;
}
function Gn(t, e, s, n, r) {
  const {
    appear: i,
    mode: o,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: p,
    onBeforeLeave: d,
    onLeave: m,
    onAfterLeave: A,
    onLeaveCancelled: v,
    onBeforeAppear: L,
    onAppear: N,
    onAfterAppear: U,
    onAppearCancelled: W
  } = e, S = String(t.key), T = xo(s, t), G = (F, K) => {
    F && He(
      F,
      n,
      9,
      K
    );
  }, X = (F, K) => {
    const re = K[1];
    G(F, K), M(F) ? F.every((E) => E.length <= 1) && re() : F.length <= 1 && re();
  }, se = {
    mode: o,
    persisted: a,
    beforeEnter(F) {
      let K = l;
      if (!s.isMounted)
        if (i)
          K = L || l;
        else
          return;
      F[gt] && F[gt](
        !0
        /* cancelled */
      );
      const re = T[S];
      re && Et(t, re) && re.el[gt] && re.el[gt](), G(K, [F]);
    },
    enter(F) {
      let K = u, re = c, E = p;
      if (!s.isMounted)
        if (i)
          K = N || u, re = U || c, E = W || p;
        else
          return;
      let ne = !1;
      const de = F[As] = (et) => {
        ne || (ne = !0, et ? G(E, [F]) : G(re, [F]), se.delayedLeave && se.delayedLeave(), F[As] = void 0);
      };
      K ? X(K, [F, de]) : de();
    },
    leave(F, K) {
      const re = String(t.key);
      if (F[As] && F[As](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return K();
      G(d, [F]);
      let E = !1;
      const ne = F[gt] = (de) => {
        E || (E = !0, K(), de ? G(v, [F]) : G(A, [F]), F[gt] = void 0, T[re] === t && delete T[re]);
      };
      T[re] = t, m ? X(m, [F, ne]) : ne();
    },
    clone(F) {
      const K = Gn(
        F,
        e,
        s,
        n,
        r
      );
      return r && r(K), K;
    }
  };
  return se;
}
function Pn(t) {
  if (un(t))
    return t = yt(t), t.children = null, t;
}
function Gr(t) {
  if (!un(t))
    return yo(t.type) && t.children ? wo(t.children) : t;
  const { shapeFlag: e, children: s } = t;
  if (s) {
    if (e & 16)
      return s[0];
    if (e & 32 && D(s.default))
      return s.default();
  }
}
function gs(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, gs(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function vo(t, e = !1, s) {
  let n = [], r = 0;
  for (let i = 0; i < t.length; i++) {
    let o = t[i];
    const a = s == null ? o.key : String(s) + String(o.key != null ? o.key : i);
    o.type === Ne ? (o.patchFlag & 128 && r++, n = n.concat(
      vo(o.children, e, a)
    )) : (e || o.type !== we) && n.push(a != null ? yt(o, { key: a }) : o);
  }
  if (r > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ot(t, e) {
  return D(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: t.name }, e, { setup: t })
  ) : t;
}
function ko(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function qs(t, e, s, n, r = !1) {
  if (M(t)) {
    t.forEach(
      (A, v) => qs(
        A,
        e && (M(e) ? e[v] : e),
        s,
        n,
        r
      )
    );
    return;
  }
  if (os(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && qs(t, e, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? dn(n.component) : n.el, o = r ? null : i, { i: a, r: l } = t, u = e && e.r, c = a.refs === Q ? a.refs = {} : a.refs, p = a.setupState, d = H(p), m = p === Q ? () => !1 : (A) => V(d, A);
  if (u != null && u !== l && (oe(u) ? (c[u] = null, m(u) && (p[u] = null)) : pe(u) && (u.value = null)), D(l))
    Wt(l, a, 12, [o, c]);
  else {
    const A = oe(l), v = pe(l);
    if (A || v) {
      const L = () => {
        if (t.f) {
          const N = A ? m(l) ? p[l] : c[l] : l.value;
          r ? M(N) && lr(N, i) : M(N) ? N.includes(i) || N.push(i) : A ? (c[l] = [i], m(l) && (p[l] = c[l])) : (l.value = [i], t.k && (c[t.k] = l.value));
        } else A ? (c[l] = o, m(l) && (p[l] = o)) : v && (l.value = o, t.k && (c[t.k] = o));
      };
      o ? (L.id = -1, Pe(L, s)) : L();
    }
  }
}
nn().requestIdleCallback;
nn().cancelIdleCallback;
const os = (t) => !!t.type.__asyncLoader, un = (t) => t.type.__isKeepAlive;
function Ll(t, e) {
  Po(t, "a", e);
}
function Fl(t, e) {
  Po(t, "da", e);
}
function Po(t, e, s = ue) {
  const n = t.__wdc || (t.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return t();
  });
  if (hn(e, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      un(r.parent.vnode) && Nl(n, e, s, r), r = r.parent;
  }
}
function Nl(t, e, s, n) {
  const r = hn(
    e,
    t,
    n,
    !0
    /* prepend */
  );
  Eo(() => {
    lr(n[e], r);
  }, s);
}
function hn(t, e, s = ue, n = !1) {
  if (s) {
    const r = s[t] || (s[t] = []), i = e.__weh || (e.__weh = (...o) => {
      ct();
      const a = ys(s), l = He(e, s, t, o);
      return a(), ut(), l;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const ht = (t) => (e, s = ue) => {
  (!bs || t === "sp") && hn(t, (...n) => e(...n), s);
}, Bl = ht("bm"), _r = ht("m"), $l = ht(
  "bu"
), Ul = ht("u"), Ao = ht(
  "bum"
), Eo = ht("um"), Hl = ht(
  "sp"
), Wl = ht("rtg"), Vl = ht("rtc");
function ql(t, e = ue) {
  hn("ec", t, e);
}
const Gl = "components";
function as(t, e) {
  return zl(Gl, t, !0, e) || t;
}
const jl = Symbol.for("v-ndc");
function zl(t, e, s = !0, n = !1) {
  const r = xe || ue;
  if (r) {
    const i = r.type;
    {
      const a = ea(
        i,
        !1
      );
      if (a && (a === e || a === Ce(e) || a === sn(Ce(e))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      jr(r[t] || i[t], e) || // global registration
      jr(r.appContext[t], e)
    );
    return !o && n ? i : o;
  }
}
function jr(t, e) {
  return t && (t[e] || t[Ce(e)] || t[sn(Ce(e))]);
}
function Kl(t, e, s, n) {
  let r;
  const i = s, o = M(t);
  if (o || oe(t)) {
    const a = o && $t(t);
    let l = !1;
    a && (l = !Le(t), t = on(t)), r = new Array(t.length);
    for (let u = 0, c = t.length; u < c; u++)
      r[u] = e(
        l ? me(t[u]) : t[u],
        u,
        void 0,
        i
      );
  } else if (typeof t == "number") {
    r = new Array(t);
    for (let a = 0; a < t; a++)
      r[a] = e(a + 1, a, void 0, i);
  } else if (te(t))
    if (t[Symbol.iterator])
      r = Array.from(
        t,
        (a, l) => e(a, l, void 0, i)
      );
    else {
      const a = Object.keys(t);
      r = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        r[l] = e(t[c], c, l, i);
      }
    }
  else
    r = [];
  return r;
}
const jn = (t) => t ? Yo(t) ? dn(t) : jn(t.parent) : null, ls = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => jn(t.parent),
    $root: (t) => jn(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Ro(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      br(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = mr.bind(t.proxy)),
    $watch: (t) => mc.bind(t)
  })
), An = (t, e) => t !== Q && !t.__isScriptSetup && V(t, e), Jl = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: a, appContext: l } = t;
    let u;
    if (e[0] !== "$") {
      const m = o[e];
      if (m !== void 0)
        switch (m) {
          case 1:
            return n[e];
          case 2:
            return r[e];
          case 4:
            return s[e];
          case 3:
            return i[e];
        }
      else {
        if (An(n, e))
          return o[e] = 1, n[e];
        if (r !== Q && V(r, e))
          return o[e] = 2, r[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = t.propsOptions[0]) && V(u, e)
        )
          return o[e] = 3, i[e];
        if (s !== Q && V(s, e))
          return o[e] = 4, s[e];
        zn && (o[e] = 0);
      }
    }
    const c = ls[e];
    let p, d;
    if (c)
      return e === "$attrs" && ge(t.attrs, "get", ""), c(t);
    if (
      // css module (injected by vue-loader)
      (p = a.__cssModules) && (p = p[e])
    )
      return p;
    if (s !== Q && V(s, e))
      return o[e] = 4, s[e];
    if (
      // global properties
      d = l.config.globalProperties, V(d, e)
    )
      return d[e];
  },
  set({ _: t }, e, s) {
    const { data: n, setupState: r, ctx: i } = t;
    return An(r, e) ? (r[e] = s, !0) : n !== Q && V(n, e) ? (n[e] = s, !0) : V(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = s, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: s, ctx: n, appContext: r, propsOptions: i }
  }, o) {
    let a;
    return !!s[o] || t !== Q && V(t, o) || An(e, o) || (a = i[0]) && V(a, o) || V(n, o) || V(ls, o) || V(r.config.globalProperties, o);
  },
  defineProperty(t, e, s) {
    return s.get != null ? t._.accessCache[e] = 0 : V(s, "value") && this.set(t, e, s.value, null), Reflect.defineProperty(t, e, s);
  }
};
function zr(t) {
  return M(t) ? t.reduce(
    (e, s) => (e[s] = null, e),
    {}
  ) : t;
}
let zn = !0;
function Ql(t) {
  const e = Ro(t), s = t.proxy, n = t.ctx;
  zn = !1, e.beforeCreate && Kr(e.beforeCreate, t, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: p,
    mounted: d,
    beforeUpdate: m,
    updated: A,
    activated: v,
    deactivated: L,
    beforeDestroy: N,
    beforeUnmount: U,
    destroyed: W,
    unmounted: S,
    render: T,
    renderTracked: G,
    renderTriggered: X,
    errorCaptured: se,
    serverPrefetch: F,
    // public API
    expose: K,
    inheritAttrs: re,
    // assets
    components: E,
    directives: ne,
    filters: de
  } = e;
  if (u && Xl(u, n, null), o)
    for (const ie in o) {
      const Y = o[ie];
      D(Y) && (n[ie] = Y.bind(s));
    }
  if (r) {
    const ie = r.call(s, s);
    te(ie) && (t.data = dr(ie));
  }
  if (zn = !0, i)
    for (const ie in i) {
      const Y = i[ie], St = D(Y) ? Y.bind(s, s) : D(Y.get) ? Y.get.bind(s, s) : Be, Ss = !D(Y) && D(Y.set) ? Y.set.bind(s) : Be, wt = Xn({
        get: St,
        set: Ss
      });
      Object.defineProperty(n, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (We) => wt.value = We
      });
    }
  if (a)
    for (const ie in a)
      To(a[ie], n, s, ie);
  if (l) {
    const ie = D(l) ? l.call(s) : l;
    Reflect.ownKeys(ie).forEach((Y) => {
      Oo(Y, ie[Y]);
    });
  }
  c && Kr(c, t, "c");
  function fe(ie, Y) {
    M(Y) ? Y.forEach((St) => ie(St.bind(s))) : Y && ie(Y.bind(s));
  }
  if (fe(Bl, p), fe(_r, d), fe($l, m), fe(Ul, A), fe(Ll, v), fe(Fl, L), fe(ql, se), fe(Vl, G), fe(Wl, X), fe(Ao, U), fe(Eo, S), fe(Hl, F), M(K))
    if (K.length) {
      const ie = t.exposed || (t.exposed = {});
      K.forEach((Y) => {
        Object.defineProperty(ie, Y, {
          get: () => s[Y],
          set: (St) => s[Y] = St
        });
      });
    } else t.exposed || (t.exposed = {});
  T && t.render === Be && (t.render = T), re != null && (t.inheritAttrs = re), E && (t.components = E), ne && (t.directives = ne), F && ko(t);
}
function Xl(t, e, s = Be) {
  M(t) && (t = Kn(t));
  for (const n in t) {
    const r = t[n];
    let i;
    te(r) ? "default" in r ? i = Ds(
      r.from || n,
      r.default,
      !0
    ) : i = Ds(r.from || n) : i = Ds(r), pe(i) ? Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : e[n] = i;
  }
}
function Kr(t, e, s) {
  He(
    M(t) ? t.map((n) => n.bind(e.proxy)) : t.bind(e.proxy),
    e,
    s
  );
}
function To(t, e, s, n) {
  let r = n.includes(".") ? qo(s, n) : () => s[n];
  if (oe(t)) {
    const i = e[t];
    D(i) && Qe(r, i);
  } else if (D(t))
    Qe(r, t.bind(s));
  else if (te(t))
    if (M(t))
      t.forEach((i) => To(i, e, s, n));
    else {
      const i = D(t.handler) ? t.handler.bind(s) : e[t.handler];
      D(i) && Qe(r, i, t);
    }
}
function Ro(t) {
  const e = t.type, { mixins: s, extends: n } = e, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = t.appContext, a = i.get(e);
  let l;
  return a ? l = a : !r.length && !s && !n ? l = e : (l = {}, r.length && r.forEach(
    (u) => Gs(l, u, o, !0)
  ), Gs(l, e, o)), te(e) && i.set(e, l), l;
}
function Gs(t, e, s, n = !1) {
  const { mixins: r, extends: i } = e;
  i && Gs(t, i, s, !0), r && r.forEach(
    (o) => Gs(t, o, s, !0)
  );
  for (const o in e)
    if (!(n && o === "expose")) {
      const a = Yl[o] || s && s[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const Yl = {
  data: Jr,
  props: Qr,
  emits: Qr,
  // objects
  methods: es,
  computed: es,
  // lifecycle
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  // assets
  components: es,
  directives: es,
  // watch
  watch: ec,
  // provide / inject
  provide: Jr,
  inject: Zl
};
function Jr(t, e) {
  return e ? t ? function() {
    return ae(
      D(t) ? t.call(this, this) : t,
      D(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Zl(t, e) {
  return es(Kn(t), Kn(e));
}
function Kn(t) {
  if (M(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++)
      e[t[s]] = t[s];
    return e;
  }
  return t;
}
function be(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function es(t, e) {
  return t ? ae(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Qr(t, e) {
  return t ? M(t) && M(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ae(
    /* @__PURE__ */ Object.create(null),
    zr(t),
    zr(e ?? {})
  ) : e;
}
function ec(t, e) {
  if (!t) return e;
  if (!e) return t;
  const s = ae(/* @__PURE__ */ Object.create(null), t);
  for (const n in e)
    s[n] = be(t[n], e[n]);
  return s;
}
function Mo() {
  return {
    app: null,
    config: {
      isNativeTag: Fa,
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
let tc = 0;
function sc(t, e) {
  return function(n, r = null) {
    D(n) || (n = ae({}, n)), r != null && !te(r) && (r = null);
    const i = Mo(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = i.app = {
      _uid: tc++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Uc,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...p) {
        return o.has(c) || (c && D(c.install) ? (o.add(c), c.install(u, ...p)) : D(c) && (o.add(c), c(u, ...p))), u;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u;
      },
      component(c, p) {
        return p ? (i.components[c] = p, u) : i.components[c];
      },
      directive(c, p) {
        return p ? (i.directives[c] = p, u) : i.directives[c];
      },
      mount(c, p, d) {
        if (!l) {
          const m = u._ceVNode || he(n, r);
          return m.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), t(m, c, d), l = !0, u._container = c, c.__vue_app__ = u, dn(m.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (He(
          a,
          u._instance,
          16
        ), t(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, p) {
        return i.provides[c] = p, u;
      },
      runWithContext(c) {
        const p = Ht;
        Ht = u;
        try {
          return c();
        } finally {
          Ht = p;
        }
      }
    };
    return u;
  };
}
let Ht = null;
function Oo(t, e) {
  if (ue) {
    let s = ue.provides;
    const n = ue.parent && ue.parent.provides;
    n === s && (s = ue.provides = Object.create(n)), s[t] = e;
  }
}
function Ds(t, e, s = !1) {
  const n = ue || xe;
  if (n || Ht) {
    const r = Ht ? Ht._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return s && D(e) ? e.call(n && n.proxy) : e;
  }
}
const Io = {}, Do = () => Object.create(Io), Lo = (t) => Object.getPrototypeOf(t) === Io;
function nc(t, e, s, n = !1) {
  const r = {}, i = Do();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Fo(t, e, r, i);
  for (const o in t.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? t.props = n ? r : dl(r) : t.type.props ? t.props = r : t.props = i, t.attrs = i;
}
function rc(t, e, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = t, a = H(r), [l] = t.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = t.vnode.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        let d = c[p];
        if (fn(t.emitsOptions, d))
          continue;
        const m = e[d];
        if (l)
          if (V(i, d))
            m !== i[d] && (i[d] = m, u = !0);
          else {
            const A = Ce(d);
            r[A] = Jn(
              l,
              a,
              A,
              m,
              t,
              !1
            );
          }
        else
          m !== i[d] && (i[d] = m, u = !0);
      }
    }
  } else {
    Fo(t, e, r, i) && (u = !0);
    let c;
    for (const p in a)
      (!e || // for camelCase
      !V(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ee(p)) === p || !V(e, c))) && (l ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[c] !== void 0) && (r[p] = Jn(
        l,
        a,
        p,
        void 0,
        t,
        !0
      )) : delete r[p]);
    if (i !== a)
      for (const p in i)
        (!e || !V(e, p)) && (delete i[p], u = !0);
  }
  u && it(t.attrs, "set", "");
}
function Fo(t, e, s, n) {
  const [r, i] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let l in e) {
      if (ss(l))
        continue;
      const u = e[l];
      let c;
      r && V(r, c = Ce(l)) ? !i || !i.includes(c) ? s[c] = u : (a || (a = {}))[c] = u : fn(t.emitsOptions, l) || (!(l in n) || u !== n[l]) && (n[l] = u, o = !0);
    }
  if (i) {
    const l = H(s), u = a || Q;
    for (let c = 0; c < i.length; c++) {
      const p = i[c];
      s[p] = Jn(
        r,
        l,
        p,
        u[p],
        t,
        !V(u, p)
      );
    }
  }
  return o;
}
function Jn(t, e, s, n, r, i) {
  const o = t[s];
  if (o != null) {
    const a = V(o, "default");
    if (a && n === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && D(l)) {
        const { propsDefaults: u } = r;
        if (s in u)
          n = u[s];
        else {
          const c = ys(r);
          n = u[s] = l.call(
            null,
            e
          ), c();
        }
      } else
        n = l;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !a ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ee(s)) && (n = !0));
  }
  return n;
}
const ic = /* @__PURE__ */ new WeakMap();
function No(t, e, s = !1) {
  const n = s ? ic : e.propsCache, r = n.get(t);
  if (r)
    return r;
  const i = t.props, o = {}, a = [];
  let l = !1;
  if (!D(t)) {
    const c = (p) => {
      l = !0;
      const [d, m] = No(p, e, !0);
      ae(o, d), m && a.push(...m);
    };
    !s && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
  }
  if (!i && !l)
    return te(t) && n.set(t, Nt), Nt;
  if (M(i))
    for (let c = 0; c < i.length; c++) {
      const p = Ce(i[c]);
      Xr(p) && (o[p] = Q);
    }
  else if (i)
    for (const c in i) {
      const p = Ce(c);
      if (Xr(p)) {
        const d = i[c], m = o[p] = M(d) || D(d) ? { type: d } : ae({}, d), A = m.type;
        let v = !1, L = !0;
        if (M(A))
          for (let N = 0; N < A.length; ++N) {
            const U = A[N], W = D(U) && U.name;
            if (W === "Boolean") {
              v = !0;
              break;
            } else W === "String" && (L = !1);
          }
        else
          v = D(A) && A.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = v, m[
          1
          /* shouldCastTrue */
        ] = L, (v || V(m, "default")) && a.push(p);
      }
    }
  const u = [o, a];
  return te(t) && n.set(t, u), u;
}
function Xr(t) {
  return t[0] !== "$" && !ss(t);
}
const Bo = (t) => t[0] === "_" || t === "$stable", yr = (t) => M(t) ? t.map(Je) : [Je(t)], oc = (t, e, s) => {
  if (e._n)
    return e;
  const n = _o((...r) => (pt.NODE_ENV !== "production" && ue && (!s || (s.root, ue.root)), yr(e(...r))), s);
  return n._c = !1, n;
}, $o = (t, e, s) => {
  const n = t._ctx;
  for (const r in t) {
    if (Bo(r)) continue;
    const i = t[r];
    if (D(i))
      e[r] = oc(r, i, n);
    else if (i != null) {
      const o = yr(i);
      e[r] = () => o;
    }
  }
}, Uo = (t, e) => {
  const s = yr(e);
  t.slots.default = () => s;
}, Ho = (t, e, s) => {
  for (const n in e)
    (s || n !== "_") && (t[n] = e[n]);
}, ac = (t, e, s) => {
  const n = t.slots = Do();
  if (t.vnode.shapeFlag & 32) {
    const r = e._;
    r ? (Ho(n, e, s), s && Hi(n, "_", r, !0)) : $o(e, n);
  } else e && Uo(t, e);
}, lc = (t, e, s) => {
  const { vnode: n, slots: r } = t;
  let i = !0, o = Q;
  if (n.shapeFlag & 32) {
    const a = e._;
    a ? s && a === 1 ? i = !1 : Ho(r, e, s) : (i = !e.$stable, $o(e, r)), o = e;
  } else e && (Uo(t, e), o = { default: 1 });
  if (i)
    for (const a in r)
      !Bo(a) && o[a] == null && delete r[a];
}, Pe = xc;
function cc(t) {
  return uc(t);
}
function uc(t, e) {
  const s = nn();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: p,
    nextSibling: d,
    setScopeId: m = Be,
    insertStaticContent: A
  } = t, v = (h, f, g, y = null, b = null, _ = null, k = void 0, x = null, w = !!f.dynamicChildren) => {
    if (h === f)
      return;
    h && !Et(h, f) && (y = ws(h), We(h, b, _, !0), h = null), f.patchFlag === -2 && (w = !1, f.dynamicChildren = null);
    const { type: C, ref: O, shapeFlag: P } = f;
    switch (C) {
      case pn:
        L(h, f, g, y);
        break;
      case we:
        N(h, f, g, y);
        break;
      case Tn:
        h == null && U(f, g, y, k);
        break;
      case Ne:
        E(
          h,
          f,
          g,
          y,
          b,
          _,
          k,
          x,
          w
        );
        break;
      default:
        P & 1 ? T(
          h,
          f,
          g,
          y,
          b,
          _,
          k,
          x,
          w
        ) : P & 6 ? ne(
          h,
          f,
          g,
          y,
          b,
          _,
          k,
          x,
          w
        ) : (P & 64 || P & 128) && C.process(
          h,
          f,
          g,
          y,
          b,
          _,
          k,
          x,
          w,
          jt
        );
    }
    O != null && b && qs(O, h && h.ref, _, f || h, !f);
  }, L = (h, f, g, y) => {
    if (h == null)
      n(
        f.el = a(f.children),
        g,
        y
      );
    else {
      const b = f.el = h.el;
      f.children !== h.children && u(b, f.children);
    }
  }, N = (h, f, g, y) => {
    h == null ? n(
      f.el = l(f.children || ""),
      g,
      y
    ) : f.el = h.el;
  }, U = (h, f, g, y) => {
    [h.el, h.anchor] = A(
      h.children,
      f,
      g,
      y,
      h.el,
      h.anchor
    );
  }, W = ({ el: h, anchor: f }, g, y) => {
    let b;
    for (; h && h !== f; )
      b = d(h), n(h, g, y), h = b;
    n(f, g, y);
  }, S = ({ el: h, anchor: f }) => {
    let g;
    for (; h && h !== f; )
      g = d(h), r(h), h = g;
    r(f);
  }, T = (h, f, g, y, b, _, k, x, w) => {
    f.type === "svg" ? k = "svg" : f.type === "math" && (k = "mathml"), h == null ? G(
      f,
      g,
      y,
      b,
      _,
      k,
      x,
      w
    ) : F(
      h,
      f,
      b,
      _,
      k,
      x,
      w
    );
  }, G = (h, f, g, y, b, _, k, x) => {
    let w, C;
    const { props: O, shapeFlag: P, transition: R, dirs: I } = h;
    if (w = h.el = o(
      h.type,
      _,
      O && O.is,
      O
    ), P & 8 ? c(w, h.children) : P & 16 && se(
      h.children,
      w,
      null,
      y,
      b,
      En(h, _),
      k,
      x
    ), I && xt(h, null, y, "created"), X(w, h, h.scopeId, k, y), O) {
      for (const Z in O)
        Z !== "value" && !ss(Z) && i(w, Z, null, O[Z], _, y);
      "value" in O && i(w, "value", null, O.value, _), (C = O.onVnodeBeforeMount) && je(C, y, h);
    }
    I && xt(h, null, y, "beforeMount");
    const $ = hc(b, R);
    $ && R.beforeEnter(w), n(w, f, g), ((C = O && O.onVnodeMounted) || $ || I) && Pe(() => {
      C && je(C, y, h), $ && R.enter(w), I && xt(h, null, y, "mounted");
    }, b);
  }, X = (h, f, g, y, b) => {
    if (g && m(h, g), y)
      for (let _ = 0; _ < y.length; _++)
        m(h, y[_]);
    if (b) {
      let _ = b.subTree;
      if (f === _ || jo(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const k = b.vnode;
        X(
          h,
          k,
          k.scopeId,
          k.slotScopeIds,
          b.parent
        );
      }
    }
  }, se = (h, f, g, y, b, _, k, x, w = 0) => {
    for (let C = w; C < h.length; C++) {
      const O = h[C] = x ? mt(h[C]) : Je(h[C]);
      v(
        null,
        O,
        f,
        g,
        y,
        b,
        _,
        k,
        x
      );
    }
  }, F = (h, f, g, y, b, _, k) => {
    const x = f.el = h.el;
    let { patchFlag: w, dynamicChildren: C, dirs: O } = f;
    w |= h.patchFlag & 16;
    const P = h.props || Q, R = f.props || Q;
    let I;
    if (g && vt(g, !1), (I = R.onVnodeBeforeUpdate) && je(I, g, f, h), O && xt(f, h, g, "beforeUpdate"), g && vt(g, !0), (P.innerHTML && R.innerHTML == null || P.textContent && R.textContent == null) && c(x, ""), C ? K(
      h.dynamicChildren,
      C,
      x,
      g,
      y,
      En(f, b),
      _
    ) : k || Y(
      h,
      f,
      x,
      null,
      g,
      y,
      En(f, b),
      _,
      !1
    ), w > 0) {
      if (w & 16)
        re(x, P, R, g, b);
      else if (w & 2 && P.class !== R.class && i(x, "class", null, R.class, b), w & 4 && i(x, "style", P.style, R.style, b), w & 8) {
        const $ = f.dynamicProps;
        for (let Z = 0; Z < $.length; Z++) {
          const j = $[Z], ve = P[j], Se = R[j];
          (Se !== ve || j === "value") && i(x, j, ve, Se, b, g);
        }
      }
      w & 1 && h.children !== f.children && c(x, f.children);
    } else !k && C == null && re(x, P, R, g, b);
    ((I = R.onVnodeUpdated) || O) && Pe(() => {
      I && je(I, g, f, h), O && xt(f, h, g, "updated");
    }, y);
  }, K = (h, f, g, y, b, _, k) => {
    for (let x = 0; x < f.length; x++) {
      const w = h[x], C = f[x], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === Ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Et(w, C) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 70) ? p(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      v(
        w,
        C,
        O,
        null,
        y,
        b,
        _,
        k,
        !0
      );
    }
  }, re = (h, f, g, y, b) => {
    if (f !== g) {
      if (f !== Q)
        for (const _ in f)
          !ss(_) && !(_ in g) && i(
            h,
            _,
            f[_],
            null,
            b,
            y
          );
      for (const _ in g) {
        if (ss(_)) continue;
        const k = g[_], x = f[_];
        k !== x && _ !== "value" && i(h, _, x, k, b, y);
      }
      "value" in g && i(h, "value", f.value, g.value, b);
    }
  }, E = (h, f, g, y, b, _, k, x, w) => {
    const C = f.el = h ? h.el : a(""), O = f.anchor = h ? h.anchor : a("");
    let { patchFlag: P, dynamicChildren: R, slotScopeIds: I } = f;
    I && (x = x ? x.concat(I) : I), h == null ? (n(C, g, y), n(O, g, y), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      O,
      b,
      _,
      k,
      x,
      w
    )) : P > 0 && P & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (K(
      h.dynamicChildren,
      R,
      g,
      b,
      _,
      k,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && Wo(
      h,
      f,
      !0
      /* shallow */
    )) : Y(
      h,
      f,
      g,
      O,
      b,
      _,
      k,
      x,
      w
    );
  }, ne = (h, f, g, y, b, _, k, x, w) => {
    f.slotScopeIds = x, h == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      g,
      y,
      k,
      w
    ) : de(
      f,
      g,
      y,
      b,
      _,
      k,
      w
    ) : et(h, f, w);
  }, de = (h, f, g, y, b, _, k) => {
    const x = h.component = Mc(
      h,
      y,
      b
    );
    if (un(h) && (x.ctx.renderer = jt), Oc(x, !1, k), x.asyncDep) {
      if (b && b.registerDep(x, fe, k), !h.el) {
        const w = x.subTree = he(we);
        N(null, w, f, g);
      }
    } else
      fe(
        x,
        h,
        f,
        g,
        b,
        _,
        k
      );
  }, et = (h, f, g) => {
    const y = f.component = h.component;
    if (Sc(h, f, g))
      if (y.asyncDep && !y.asyncResolved) {
        ie(y, f, g);
        return;
      } else
        y.next = f, y.update();
    else
      f.el = h.el, y.vnode = f;
  }, fe = (h, f, g, y, b, _, k) => {
    const x = () => {
      if (h.isMounted) {
        let { next: P, bu: R, u: I, parent: $, vnode: Z } = h;
        {
          const qe = Vo(h);
          if (qe) {
            P && (P.el = Z.el, ie(h, P, k)), qe.asyncDep.then(() => {
              h.isUnmounted || x();
            });
            return;
          }
        }
        let j = P, ve;
        vt(h, !1), P ? (P.el = Z.el, ie(h, P, k)) : P = Z, R && Is(R), (ve = P.props && P.props.onVnodeBeforeUpdate) && je(ve, $, P, Z), vt(h, !0);
        const Se = Zr(h), Ve = h.subTree;
        h.subTree = Se, v(
          Ve,
          Se,
          // parent may have changed if it's in a teleport
          p(Ve.el),
          // anchor may have changed if it's in a fragment
          ws(Ve),
          h,
          b,
          _
        ), P.el = Se.el, j === null && wc(h, Se.el), I && Pe(I, b), (ve = P.props && P.props.onVnodeUpdated) && Pe(
          () => je(ve, $, P, Z),
          b
        );
      } else {
        let P;
        const { el: R, props: I } = f, { bm: $, m: Z, parent: j, root: ve, type: Se } = h, Ve = os(f);
        vt(h, !1), $ && Is($), !Ve && (P = I && I.onVnodeBeforeMount) && je(P, j, f), vt(h, !0);
        {
          ve.ce && ve.ce._injectChildStyle(Se);
          const qe = h.subTree = Zr(h);
          v(
            null,
            qe,
            g,
            y,
            h,
            b,
            _
          ), f.el = qe.el;
        }
        if (Z && Pe(Z, b), !Ve && (P = I && I.onVnodeMounted)) {
          const qe = f;
          Pe(
            () => je(P, j, qe),
            b
          );
        }
        (f.shapeFlag & 256 || j && os(j.vnode) && j.vnode.shapeFlag & 256) && h.a && Pe(h.a, b), h.isMounted = !0, f = g = y = null;
      }
    };
    h.scope.on();
    const w = h.effect = new ji(x);
    h.scope.off();
    const C = h.update = w.run.bind(w), O = h.job = w.runIfDirty.bind(w);
    O.i = h, O.id = h.uid, w.scheduler = () => br(O), vt(h, !0), C();
  }, ie = (h, f, g) => {
    f.component = h;
    const y = h.vnode.props;
    h.vnode = f, h.next = null, rc(h, f.props, y, g), lc(h, f.children, g), ct(), qr(h), ut();
  }, Y = (h, f, g, y, b, _, k, x, w = !1) => {
    const C = h && h.children, O = h ? h.shapeFlag : 0, P = f.children, { patchFlag: R, shapeFlag: I } = f;
    if (R > 0) {
      if (R & 128) {
        Ss(
          C,
          P,
          g,
          y,
          b,
          _,
          k,
          x,
          w
        );
        return;
      } else if (R & 256) {
        St(
          C,
          P,
          g,
          y,
          b,
          _,
          k,
          x,
          w
        );
        return;
      }
    }
    I & 8 ? (O & 16 && Gt(C, b, _), P !== C && c(g, P)) : O & 16 ? I & 16 ? Ss(
      C,
      P,
      g,
      y,
      b,
      _,
      k,
      x,
      w
    ) : Gt(C, b, _, !0) : (O & 8 && c(g, ""), I & 16 && se(
      P,
      g,
      y,
      b,
      _,
      k,
      x,
      w
    ));
  }, St = (h, f, g, y, b, _, k, x, w) => {
    h = h || Nt, f = f || Nt;
    const C = h.length, O = f.length, P = Math.min(C, O);
    let R;
    for (R = 0; R < P; R++) {
      const I = f[R] = w ? mt(f[R]) : Je(f[R]);
      v(
        h[R],
        I,
        g,
        null,
        b,
        _,
        k,
        x,
        w
      );
    }
    C > O ? Gt(
      h,
      b,
      _,
      !0,
      !1,
      P
    ) : se(
      f,
      g,
      y,
      b,
      _,
      k,
      x,
      w,
      P
    );
  }, Ss = (h, f, g, y, b, _, k, x, w) => {
    let C = 0;
    const O = f.length;
    let P = h.length - 1, R = O - 1;
    for (; C <= P && C <= R; ) {
      const I = h[C], $ = f[C] = w ? mt(f[C]) : Je(f[C]);
      if (Et(I, $))
        v(
          I,
          $,
          g,
          null,
          b,
          _,
          k,
          x,
          w
        );
      else
        break;
      C++;
    }
    for (; C <= P && C <= R; ) {
      const I = h[P], $ = f[R] = w ? mt(f[R]) : Je(f[R]);
      if (Et(I, $))
        v(
          I,
          $,
          g,
          null,
          b,
          _,
          k,
          x,
          w
        );
      else
        break;
      P--, R--;
    }
    if (C > P) {
      if (C <= R) {
        const I = R + 1, $ = I < O ? f[I].el : y;
        for (; C <= R; )
          v(
            null,
            f[C] = w ? mt(f[C]) : Je(f[C]),
            g,
            $,
            b,
            _,
            k,
            x,
            w
          ), C++;
      }
    } else if (C > R)
      for (; C <= P; )
        We(h[C], b, _, !0), C++;
    else {
      const I = C, $ = C, Z = /* @__PURE__ */ new Map();
      for (C = $; C <= R; C++) {
        const ke = f[C] = w ? mt(f[C]) : Je(f[C]);
        ke.key != null && Z.set(ke.key, C);
      }
      let j, ve = 0;
      const Se = R - $ + 1;
      let Ve = !1, qe = 0;
      const zt = new Array(Se);
      for (C = 0; C < Se; C++) zt[C] = 0;
      for (C = I; C <= P; C++) {
        const ke = h[C];
        if (ve >= Se) {
          We(ke, b, _, !0);
          continue;
        }
        let Ge;
        if (ke.key != null)
          Ge = Z.get(ke.key);
        else
          for (j = $; j <= R; j++)
            if (zt[j - $] === 0 && Et(ke, f[j])) {
              Ge = j;
              break;
            }
        Ge === void 0 ? We(ke, b, _, !0) : (zt[Ge - $] = C + 1, Ge >= qe ? qe = Ge : Ve = !0, v(
          ke,
          f[Ge],
          g,
          null,
          b,
          _,
          k,
          x,
          w
        ), ve++);
      }
      const $r = Ve ? fc(zt) : Nt;
      for (j = $r.length - 1, C = Se - 1; C >= 0; C--) {
        const ke = $ + C, Ge = f[ke], Ur = ke + 1 < O ? f[ke + 1].el : y;
        zt[C] === 0 ? v(
          null,
          Ge,
          g,
          Ur,
          b,
          _,
          k,
          x,
          w
        ) : Ve && (j < 0 || C !== $r[j] ? wt(Ge, g, Ur, 2) : j--);
      }
    }
  }, wt = (h, f, g, y, b = null) => {
    const { el: _, type: k, transition: x, children: w, shapeFlag: C } = h;
    if (C & 6) {
      wt(h.component.subTree, f, g, y);
      return;
    }
    if (C & 128) {
      h.suspense.move(f, g, y);
      return;
    }
    if (C & 64) {
      k.move(h, f, g, jt);
      return;
    }
    if (k === Ne) {
      n(_, f, g);
      for (let P = 0; P < w.length; P++)
        wt(w[P], f, g, y);
      n(h.anchor, f, g);
      return;
    }
    if (k === Tn) {
      W(h, f, g);
      return;
    }
    if (y !== 2 && C & 1 && x)
      if (y === 0)
        x.beforeEnter(_), n(_, f, g), Pe(() => x.enter(_), b);
      else {
        const { leave: P, delayLeave: R, afterLeave: I } = x, $ = () => n(_, f, g), Z = () => {
          P(_, () => {
            $(), I && I();
          });
        };
        R ? R(_, $, Z) : Z();
      }
    else
      n(_, f, g);
  }, We = (h, f, g, y = !1, b = !1) => {
    const {
      type: _,
      props: k,
      ref: x,
      children: w,
      dynamicChildren: C,
      shapeFlag: O,
      patchFlag: P,
      dirs: R,
      cacheIndex: I
    } = h;
    if (P === -2 && (b = !1), x != null && qs(x, null, g, h, !0), I != null && (f.renderCache[I] = void 0), O & 256) {
      f.ctx.deactivate(h);
      return;
    }
    const $ = O & 1 && R, Z = !os(h);
    let j;
    if (Z && (j = k && k.onVnodeBeforeUnmount) && je(j, f, h), O & 6)
      Ia(h.component, g, y);
    else {
      if (O & 128) {
        h.suspense.unmount(g, y);
        return;
      }
      $ && xt(h, null, f, "beforeUnmount"), O & 64 ? h.type.remove(
        h,
        f,
        g,
        jt,
        y
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ne || P > 0 && P & 64) ? Gt(
        C,
        f,
        g,
        !1,
        !0
      ) : (_ === Ne && P & 384 || !b && O & 16) && Gt(w, f, g), y && Nr(h);
    }
    (Z && (j = k && k.onVnodeUnmounted) || $) && Pe(() => {
      j && je(j, f, h), $ && xt(h, null, f, "unmounted");
    }, g);
  }, Nr = (h) => {
    const { type: f, el: g, anchor: y, transition: b } = h;
    if (f === Ne) {
      Oa(g, y);
      return;
    }
    if (f === Tn) {
      S(h);
      return;
    }
    const _ = () => {
      r(g), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (h.shapeFlag & 1 && b && !b.persisted) {
      const { leave: k, delayLeave: x } = b, w = () => k(g, _);
      x ? x(h.el, _, w) : w();
    } else
      _();
  }, Oa = (h, f) => {
    let g;
    for (; h !== f; )
      g = d(h), r(h), h = g;
    r(f);
  }, Ia = (h, f, g) => {
    const { bum: y, scope: b, job: _, subTree: k, um: x, m: w, a: C } = h;
    Yr(w), Yr(C), y && Is(y), b.stop(), _ && (_.flags |= 8, We(k, h, f, g)), x && Pe(x, f), Pe(() => {
      h.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Gt = (h, f, g, y = !1, b = !1, _ = 0) => {
    for (let k = _; k < h.length; k++)
      We(h[k], f, g, y, b);
  }, ws = (h) => {
    if (h.shapeFlag & 6)
      return ws(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const f = d(h.anchor || h.el), g = f && f[Ml];
    return g ? d(g) : f;
  };
  let yn = !1;
  const Br = (h, f, g) => {
    h == null ? f._vnode && We(f._vnode, null, null, !0) : v(
      f._vnode || null,
      h,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = h, yn || (yn = !0, qr(), go(), yn = !1);
  }, jt = {
    p: v,
    um: We,
    m: wt,
    r: Nr,
    mt: de,
    mc: se,
    pc: Y,
    pbc: K,
    n: ws,
    o: t
  };
  return {
    render: Br,
    hydrate: void 0,
    createApp: sc(Br)
  };
}
function En({ type: t, props: e }, s) {
  return s === "svg" && t === "foreignObject" || s === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : s;
}
function vt({ effect: t, job: e }, s) {
  s ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function hc(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Wo(t, e, s = !1) {
  const n = t.children, r = e.children;
  if (M(n) && M(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let a = r[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = mt(r[i]), a.el = o.el), !s && a.patchFlag !== -2 && Wo(o, a)), a.type === pn && (a.el = o.el);
    }
}
function fc(t) {
  const e = t.slice(), s = [0];
  let n, r, i, o, a;
  const l = t.length;
  for (n = 0; n < l; n++) {
    const u = t[n];
    if (u !== 0) {
      if (r = s[s.length - 1], t[r] < u) {
        e[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        a = i + o >> 1, t[s[a]] < u ? i = a + 1 : o = a;
      u < t[s[i]] && (i > 0 && (e[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = e[o];
  return s;
}
function Vo(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Vo(e);
}
function Yr(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
const pc = Symbol.for("v-scx"), dc = () => Ds(pc);
function gc(t, e) {
  return Cr(t, null, e);
}
function Qe(t, e, s) {
  return Cr(t, e, s);
}
function Cr(t, e, s = Q) {
  const { immediate: n, deep: r, flush: i, once: o } = s, a = ae({}, s), l = e && n || !e && i !== "post";
  let u;
  if (bs) {
    if (i === "sync") {
      const m = dc();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = Be, m.resume = Be, m.pause = Be, m;
    }
  }
  const c = ue;
  a.call = (m, A, v) => He(m, c, A, v);
  let p = !1;
  i === "post" ? a.scheduler = (m) => {
    Pe(m, c && c.suspense);
  } : i !== "sync" && (p = !0, a.scheduler = (m, A) => {
    A ? m() : br(m);
  }), a.augmentJob = (m) => {
    e && (m.flags |= 4), p && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const d = wl(t, e, a);
  return bs && (u ? u.push(d) : l && d()), d;
}
function mc(t, e, s) {
  const n = this.proxy, r = oe(t) ? t.includes(".") ? qo(n, t) : () => n[t] : t.bind(n, n);
  let i;
  D(e) ? i = e : (i = e.handler, s = e);
  const o = ys(this), a = Cr(r, i.bind(n), s);
  return o(), a;
}
function qo(t, e) {
  const s = e.split(".");
  return () => {
    let n = t;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const bc = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Ce(e)}Modifiers`] || t[`${Ee(e)}Modifiers`];
function _c(t, e, ...s) {
  if (t.isUnmounted) return;
  const n = t.vnode.props || Q;
  let r = s;
  const i = e.startsWith("update:"), o = i && bc(n, e.slice(7));
  o && (o.trim && (r = s.map((c) => oe(c) ? c.trim() : c)), o.number && (r = s.map(Nn)));
  let a, l = n[a = Cn(e)] || // also try camelCase event handler (#2249)
  n[a = Cn(Ce(e))];
  !l && i && (l = n[a = Cn(Ee(e))]), l && He(
    l,
    t,
    6,
    r
  );
  const u = n[a + "Once"];
  if (u) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[a])
      return;
    t.emitted[a] = !0, He(
      u,
      t,
      6,
      r
    );
  }
}
function Go(t, e, s = !1) {
  const n = e.emitsCache, r = n.get(t);
  if (r !== void 0)
    return r;
  const i = t.emits;
  let o = {}, a = !1;
  if (!D(t)) {
    const l = (u) => {
      const c = Go(u, e, !0);
      c && (a = !0, ae(o, c));
    };
    !s && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !i && !a ? (te(t) && n.set(t, null), null) : (M(i) ? i.forEach((l) => o[l] = null) : ae(o, i), te(t) && n.set(t, o), o);
}
function fn(t, e) {
  return !t || !Ys(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), V(t, e[0].toLowerCase() + e.slice(1)) || V(t, Ee(e)) || V(t, e));
}
function Zr(t) {
  const {
    type: e,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: a,
    emit: l,
    render: u,
    renderCache: c,
    props: p,
    data: d,
    setupState: m,
    ctx: A,
    inheritAttrs: v
  } = t, L = Vs(t);
  let N, U;
  try {
    if (s.shapeFlag & 4) {
      const S = r || n, T = pt.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(S, {
        get(G, X, se) {
          return xl(
            `Property '${String(
              X
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(G, X, se);
        }
      }) : S;
      N = Je(
        u.call(
          T,
          S,
          c,
          pt.NODE_ENV !== "production" ? ks(p) : p,
          m,
          d,
          A
        )
      ), U = a;
    } else {
      const S = e;
      pt.NODE_ENV, N = Je(
        S.length > 1 ? S(
          pt.NODE_ENV !== "production" ? ks(p) : p,
          pt.NODE_ENV !== "production" ? {
            get attrs() {
              return ks(a);
            },
            slots: o,
            emit: l
          } : { attrs: a, slots: o, emit: l }
        ) : S(
          pt.NODE_ENV !== "production" ? ks(p) : p,
          null
        )
      ), U = e.props ? a : yc(a);
    }
  } catch (S) {
    cs.length = 0, cn(S, t, 1), N = he(we);
  }
  let W = N;
  if (U && v !== !1) {
    const S = Object.keys(U), { shapeFlag: T } = W;
    S.length && T & 7 && (i && S.some(ar) && (U = Cc(
      U,
      i
    )), W = yt(W, U, !1, !0));
  }
  return s.dirs && (W = yt(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(s.dirs) : s.dirs), s.transition && gs(W, s.transition), N = W, Vs(L), N;
}
const yc = (t) => {
  let e;
  for (const s in t)
    (s === "class" || s === "style" || Ys(s)) && ((e || (e = {}))[s] = t[s]);
  return e;
}, Cc = (t, e) => {
  const s = {};
  for (const n in t)
    (!ar(n) || !(n.slice(9) in e)) && (s[n] = t[n]);
  return s;
};
function Sc(t, e, s) {
  const { props: n, children: r, component: i } = t, { props: o, children: a, patchFlag: l } = e, u = i.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (s && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? ei(n, o, u) : !!o;
    if (l & 8) {
      const c = e.dynamicProps;
      for (let p = 0; p < c.length; p++) {
        const d = c[p];
        if (o[d] !== n[d] && !fn(u, d))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : n === o ? !1 : n ? o ? ei(n, o, u) : !0 : !!o;
  return !1;
}
function ei(t, e, s) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (e[i] !== t[i] && !fn(s, i))
      return !0;
  }
  return !1;
}
function wc({ vnode: t, parent: e }, s) {
  for (; e; ) {
    const n = e.subTree;
    if (n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t)
      (t = e.vnode).el = s, e = e.parent;
    else
      break;
  }
}
const jo = (t) => t.__isSuspense;
function xc(t, e) {
  e && e.pendingBranch ? M(t) ? e.effects.push(...t) : e.effects.push(t) : Rl(t);
}
const Ne = Symbol.for("v-fgt"), pn = Symbol.for("v-txt"), we = Symbol.for("v-cmt"), Tn = Symbol.for("v-stc"), cs = [];
let Te = null;
function Ue(t = !1) {
  cs.push(Te = t ? null : []);
}
function vc() {
  cs.pop(), Te = cs[cs.length - 1] || null;
}
let ms = 1;
function ti(t, e = !1) {
  ms += t, t < 0 && Te && e && (Te.hasOnce = !0);
}
function zo(t) {
  return t.dynamicChildren = ms > 0 ? Te || Nt : null, vc(), ms > 0 && Te && Te.push(t), t;
}
function lt(t, e, s, n, r, i) {
  return zo(
    Xe(
      t,
      e,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function Ko(t, e, s, n, r) {
  return zo(
    he(
      t,
      e,
      s,
      n,
      r,
      !0
    )
  );
}
function js(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Et(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Jo = ({ key: t }) => t ?? null, Ls = ({
  ref: t,
  ref_key: e,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? oe(t) || pe(t) || D(t) ? { i: xe, r: t, k: e, f: !!s } : t : null);
function Xe(t, e = null, s = null, n = 0, r = null, i = t === Ne ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Jo(e),
    ref: e && Ls(e),
    scopeId: bo,
    slotScopeIds: null,
    children: s,
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
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return a ? (Sr(l, s), i & 128 && t.normalize(l)) : s && (l.shapeFlag |= oe(s) ? 8 : 16), ms > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Te && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Te.push(l), l;
}
const he = kc;
function kc(t, e = null, s = null, n = 0, r = null, i = !1) {
  if ((!t || t === jl) && (t = we), js(t)) {
    const a = yt(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return s && Sr(a, s), ms > 0 && !i && Te && (a.shapeFlag & 6 ? Te[Te.indexOf(t)] = a : Te.push(a)), a.patchFlag = -2, a;
  }
  if (Bc(t) && (t = t.__vccOpts), e) {
    e = Pc(e);
    let { class: a, style: l } = e;
    a && !oe(a) && (e.class = rn(a)), te(l) && (gr(l) && !M(l) && (l = ae({}, l)), e.style = at(l));
  }
  const o = oe(t) ? 1 : jo(t) ? 128 : yo(t) ? 64 : te(t) ? 4 : D(t) ? 2 : 0;
  return Xe(
    t,
    e,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Pc(t) {
  return t ? gr(t) || Lo(t) ? ae({}, t) : t : null;
}
function yt(t, e, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: a, transition: l } = t, u = e ? Ec(r || {}, e) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: u,
    key: u && Jo(u),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? M(i) ? i.concat(Ls(e)) : [i, Ls(e)] : Ls(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: a,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Ne ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && yt(t.ssContent),
    ssFallback: t.ssFallback && yt(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return l && n && gs(
    c,
    l.clone(c)
  ), c;
}
function Ac(t = " ", e = 0) {
  return he(pn, null, t, e);
}
function Qo(t = "", e = !1) {
  return e ? (Ue(), Ko(we, null, t)) : he(we, null, t);
}
function Je(t) {
  return t == null || typeof t == "boolean" ? he(we) : M(t) ? he(
    Ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : js(t) ? mt(t) : he(pn, null, String(t));
}
function mt(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : yt(t);
}
function Sr(t, e) {
  let s = 0;
  const { shapeFlag: n } = t;
  if (e == null)
    e = null;
  else if (M(e))
    s = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), Sr(t, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = e._;
      !r && !Lo(e) ? e._ctx = xe : r === 3 && xe && (xe.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else D(e) ? (e = { default: e, _ctx: xe }, s = 32) : (e = String(e), n & 64 ? (s = 16, e = [Ac(e)]) : s = 8);
  t.children = e, t.shapeFlag |= s;
}
function Ec(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    for (const r in n)
      if (r === "class")
        e.class !== n.class && (e.class = rn([e.class, n.class]));
      else if (r === "style")
        e.style = at([e.style, n.style]);
      else if (Ys(r)) {
        const i = e[r], o = n[r];
        o && i !== o && !(M(i) && i.includes(o)) && (e[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (e[r] = n[r]);
  }
  return e;
}
function je(t, e, s, n = null) {
  He(t, e, 7, [
    s,
    n
  ]);
}
const Tc = Mo();
let Rc = 0;
function Mc(t, e, s) {
  const n = t.type, r = (e ? e.appContext : t.appContext) || Tc, i = {
    uid: Rc++,
    vnode: t,
    type: n,
    parent: e,
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
    scope: new Ka(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(r.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: No(n, r),
    emitsOptions: Go(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
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
  return i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = _c.bind(null, i), t.ce && t.ce(i), i;
}
let ue = null;
const Xo = () => ue || xe;
let zs, Qn;
{
  const t = nn(), e = (s, n) => {
    let r;
    return (r = t[s]) || (r = t[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  zs = e(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ue = s
  ), Qn = e(
    "__VUE_SSR_SETTERS__",
    (s) => bs = s
  );
}
const ys = (t) => {
  const e = ue;
  return zs(t), t.scope.on(), () => {
    t.scope.off(), zs(e);
  };
}, si = () => {
  ue && ue.scope.off(), zs(null);
};
function Yo(t) {
  return t.vnode.shapeFlag & 4;
}
let bs = !1;
function Oc(t, e = !1, s = !1) {
  e && Qn(e);
  const { props: n, children: r } = t.vnode, i = Yo(t);
  nc(t, n, i, e), ac(t, r, s);
  const o = i ? Ic(t, e) : void 0;
  return e && Qn(!1), o;
}
function Ic(t, e) {
  const s = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Jl);
  const { setup: n } = s;
  if (n) {
    ct();
    const r = t.setupContext = n.length > 1 ? Lc(t) : null, i = ys(t), o = Wt(
      n,
      t,
      0,
      [
        t.props,
        r
      ]
    ), a = $i(o);
    if (ut(), i(), (a || t.sp) && !os(t) && ko(t), a) {
      if (o.then(si, si), e)
        return o.then((l) => {
          ni(t, l);
        }).catch((l) => {
          cn(l, t, 0);
        });
      t.asyncDep = o;
    } else
      ni(t, o);
  } else
    Zo(t);
}
function ni(t, e, s) {
  D(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : te(e) && (t.setupState = uo(e)), Zo(t);
}
function Zo(t, e, s) {
  const n = t.type;
  t.render || (t.render = n.render || Be);
  {
    const r = ys(t);
    ct();
    try {
      Ql(t);
    } finally {
      ut(), r();
    }
  }
}
const Dc = {
  get(t, e) {
    return ge(t, "get", ""), t[e];
  }
};
function Lc(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, Dc),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function dn(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(uo(gl(t.exposed)), {
    get(e, s) {
      if (s in e)
        return e[s];
      if (s in ls)
        return ls[s](t);
    },
    has(e, s) {
      return s in e || s in ls;
    }
  })) : t.proxy;
}
const Fc = /(?:^|[-_])(\w)/g, Nc = (t) => t.replace(Fc, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ea(t, e = !0) {
  return D(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function ta(t, e, s = !1) {
  let n = ea(e);
  if (!n && e.__file) {
    const r = e.__file.match(/([^/\\]+)\.\w+$/);
    r && (n = r[1]);
  }
  if (!n && t && t.parent) {
    const r = (i) => {
      for (const o in i)
        if (i[o] === e)
          return o;
    };
    n = r(
      t.components || t.parent.type.components
    ) || r(t.appContext.components);
  }
  return n ? Nc(n) : s ? "App" : "Anonymous";
}
function Bc(t) {
  return D(t) && "__vccOpts" in t;
}
const Xn = (t, e) => Cl(t, e, bs);
function $c(t, e, s) {
  const n = arguments.length;
  return n === 2 ? te(e) && !M(e) ? js(e) ? he(t, null, [e]) : he(t, e) : he(t, null, e) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && js(s) && (s = [s]), he(t, e, s));
}
const Uc = "3.5.13";
let Yn;
const ri = typeof window < "u" && window.trustedTypes;
if (ri)
  try {
    Yn = /* @__PURE__ */ ri.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const sa = Yn ? (t) => Yn.createHTML(t) : (t) => t, Hc = "http://www.w3.org/2000/svg", Wc = "http://www.w3.org/1998/Math/MathML", rt = typeof document < "u" ? document : null, ii = rt && /* @__PURE__ */ rt.createElement("template"), Vc = {
  insert: (t, e, s) => {
    e.insertBefore(t, s || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, s, n) => {
    const r = e === "svg" ? rt.createElementNS(Hc, t) : e === "mathml" ? rt.createElementNS(Wc, t) : s ? rt.createElement(t, { is: s }) : rt.createElement(t);
    return t === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (t) => rt.createTextNode(t),
  createComment: (t) => rt.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => rt.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, s, n, r, i) {
    const o = s ? s.previousSibling : e.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; e.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      ii.innerHTML = sa(
        n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t
      );
      const a = ii.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      e.insertBefore(a, s);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      s ? s.previousSibling : e.lastChild
    ];
  }
}, ft = "transition", Jt = "animation", _s = Symbol("_vtc"), na = {
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
}, qc = /* @__PURE__ */ ae(
  {},
  Co,
  na
), Gc = (t) => (t.displayName = "Transition", t.props = qc, t), jc = /* @__PURE__ */ Gc(
  (t, { slots: e }) => $c(Dl, zc(t), e)
), kt = (t, e = []) => {
  M(t) ? t.forEach((s) => s(...e)) : t && t(...e);
}, oi = (t) => t ? M(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function zc(t) {
  const e = {};
  for (const E in t)
    E in na || (e[E] = t[E]);
  if (t.css === !1)
    return e;
  const {
    name: s = "v",
    type: n,
    duration: r,
    enterFromClass: i = `${s}-enter-from`,
    enterActiveClass: o = `${s}-enter-active`,
    enterToClass: a = `${s}-enter-to`,
    appearFromClass: l = i,
    appearActiveClass: u = o,
    appearToClass: c = a,
    leaveFromClass: p = `${s}-leave-from`,
    leaveActiveClass: d = `${s}-leave-active`,
    leaveToClass: m = `${s}-leave-to`
  } = t, A = Kc(r), v = A && A[0], L = A && A[1], {
    onBeforeEnter: N,
    onEnter: U,
    onEnterCancelled: W,
    onLeave: S,
    onLeaveCancelled: T,
    onBeforeAppear: G = N,
    onAppear: X = U,
    onAppearCancelled: se = W
  } = e, F = (E, ne, de, et) => {
    E._enterCancelled = et, Pt(E, ne ? c : a), Pt(E, ne ? u : o), de && de();
  }, K = (E, ne) => {
    E._isLeaving = !1, Pt(E, p), Pt(E, m), Pt(E, d), ne && ne();
  }, re = (E) => (ne, de) => {
    const et = E ? X : U, fe = () => F(ne, E, de);
    kt(et, [ne, fe]), ai(() => {
      Pt(ne, E ? l : i), st(ne, E ? c : a), oi(et) || li(ne, n, v, fe);
    });
  };
  return ae(e, {
    onBeforeEnter(E) {
      kt(N, [E]), st(E, i), st(E, o);
    },
    onBeforeAppear(E) {
      kt(G, [E]), st(E, l), st(E, u);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(E, ne) {
      E._isLeaving = !0;
      const de = () => K(E, ne);
      st(E, p), E._enterCancelled ? (st(E, d), hi()) : (hi(), st(E, d)), ai(() => {
        E._isLeaving && (Pt(E, p), st(E, m), oi(S) || li(E, n, L, de));
      }), kt(S, [E, de]);
    },
    onEnterCancelled(E) {
      F(E, !1, void 0, !0), kt(W, [E]);
    },
    onAppearCancelled(E) {
      F(E, !0, void 0, !0), kt(se, [E]);
    },
    onLeaveCancelled(E) {
      K(E), kt(T, [E]);
    }
  });
}
function Kc(t) {
  if (t == null)
    return null;
  if (te(t))
    return [Rn(t.enter), Rn(t.leave)];
  {
    const e = Rn(t);
    return [e, e];
  }
}
function Rn(t) {
  return Bn(t);
}
function st(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.add(s)), (t[_s] || (t[_s] = /* @__PURE__ */ new Set())).add(e);
}
function Pt(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.remove(n));
  const s = t[_s];
  s && (s.delete(e), s.size || (t[_s] = void 0));
}
function ai(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Jc = 0;
function li(t, e, s, n) {
  const r = t._endId = ++Jc, i = () => {
    r === t._endId && n();
  };
  if (s != null)
    return setTimeout(i, s);
  const { type: o, timeout: a, propCount: l } = Qc(t, e);
  if (!o)
    return n();
  const u = o + "end";
  let c = 0;
  const p = () => {
    t.removeEventListener(u, d), i();
  }, d = (m) => {
    m.target === t && ++c >= l && p();
  };
  setTimeout(() => {
    c < l && p();
  }, a + 1), t.addEventListener(u, d);
}
function Qc(t, e) {
  const s = window.getComputedStyle(t), n = (A) => (s[A] || "").split(", "), r = n(`${ft}Delay`), i = n(`${ft}Duration`), o = ci(r, i), a = n(`${Jt}Delay`), l = n(`${Jt}Duration`), u = ci(a, l);
  let c = null, p = 0, d = 0;
  e === ft ? o > 0 && (c = ft, p = o, d = i.length) : e === Jt ? u > 0 && (c = Jt, p = u, d = l.length) : (p = Math.max(o, u), c = p > 0 ? o > u ? ft : Jt : null, d = c ? c === ft ? i.length : l.length : 0);
  const m = c === ft && /\b(transform|all)(,|$)/.test(
    n(`${ft}Property`).toString()
  );
  return {
    type: c,
    timeout: p,
    propCount: d,
    hasTransform: m
  };
}
function ci(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((s, n) => ui(s) + ui(t[n])));
}
function ui(t) {
  return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function hi() {
  return document.body.offsetHeight;
}
function Xc(t, e, s) {
  const n = t[_s];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : s ? t.setAttribute("class", e) : t.className = e;
}
const Ks = Symbol("_vod"), ra = Symbol("_vsh"), fi = {
  beforeMount(t, { value: e }, { transition: s }) {
    t[Ks] = t.style.display === "none" ? "" : t.style.display, s && e ? s.beforeEnter(t) : Qt(t, e);
  },
  mounted(t, { value: e }, { transition: s }) {
    s && e && s.enter(t);
  },
  updated(t, { value: e, oldValue: s }, { transition: n }) {
    !e != !s && (n ? e ? (n.beforeEnter(t), Qt(t, !0), n.enter(t)) : n.leave(t, () => {
      Qt(t, !1);
    }) : Qt(t, e));
  },
  beforeUnmount(t, { value: e }) {
    Qt(t, e);
  }
};
function Qt(t, e) {
  t.style.display = e ? t[Ks] : "none", t[ra] = !e;
}
const Yc = Symbol(""), Zc = /(^|;)\s*display\s*:/;
function eu(t, e, s) {
  const n = t.style, r = oe(s);
  let i = !1;
  if (s && !r) {
    if (e)
      if (oe(e))
        for (const o of e.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          s[a] == null && Fs(n, a, "");
        }
      else
        for (const o in e)
          s[o] == null && Fs(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Fs(n, o, s[o]);
  } else if (r) {
    if (e !== s) {
      const o = n[Yc];
      o && (s += ";" + o), n.cssText = s, i = Zc.test(s);
    }
  } else e && t.removeAttribute("style");
  Ks in t && (t[Ks] = i ? n.display : "", t[ra] && (n.display = "none"));
}
const pi = /\s*!important$/;
function Fs(t, e, s) {
  if (M(s))
    s.forEach((n) => Fs(t, e, n));
  else if (s == null && (s = ""), e.startsWith("--"))
    t.setProperty(e, s);
  else {
    const n = tu(t, e);
    pi.test(s) ? t.setProperty(
      Ee(n),
      s.replace(pi, ""),
      "important"
    ) : t[n] = s;
  }
}
const di = ["Webkit", "Moz", "ms"], Mn = {};
function tu(t, e) {
  const s = Mn[e];
  if (s)
    return s;
  let n = Ce(e);
  if (n !== "filter" && n in t)
    return Mn[e] = n;
  n = sn(n);
  for (let r = 0; r < di.length; r++) {
    const i = di[r] + n;
    if (i in t)
      return Mn[e] = i;
  }
  return e;
}
const gi = "http://www.w3.org/1999/xlink";
function mi(t, e, s, n, r, i = ja(e)) {
  n && e.startsWith("xlink:") ? s == null ? t.removeAttributeNS(gi, e.slice(6, e.length)) : t.setAttributeNS(gi, e, s) : s == null || i && !Wi(s) ? t.removeAttribute(e) : t.setAttribute(
    e,
    i ? "" : Ct(s) ? String(s) : s
  );
}
function bi(t, e, s, n, r) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? sa(s) : s);
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const a = i === "OPTION" ? t.getAttribute("value") || "" : t.value, l = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(s);
    (a !== l || !("_value" in t)) && (t.value = l), s == null && t.removeAttribute(e), t._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const a = typeof t[e];
    a === "boolean" ? s = Wi(s) : s == null && a === "string" ? (s = "", o = !0) : a === "number" && (s = 0, o = !0);
  }
  try {
    t[e] = s;
  } catch {
  }
  o && t.removeAttribute(r || e);
}
function Ft(t, e, s, n) {
  t.addEventListener(e, s, n);
}
function su(t, e, s, n) {
  t.removeEventListener(e, s, n);
}
const _i = Symbol("_vei");
function nu(t, e, s, n, r = null) {
  const i = t[_i] || (t[_i] = {}), o = i[e];
  if (n && o)
    o.value = n;
  else {
    const [a, l] = ru(e);
    if (n) {
      const u = i[e] = au(
        n,
        r
      );
      Ft(t, a, u, l);
    } else o && (su(t, a, o, l), i[e] = void 0);
  }
}
const yi = /(?:Once|Passive|Capture)$/;
function ru(t) {
  let e;
  if (yi.test(t)) {
    e = {};
    let n;
    for (; n = t.match(yi); )
      t = t.slice(0, t.length - n[0].length), e[n[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Ee(t.slice(2)), e];
}
let On = 0;
const iu = /* @__PURE__ */ Promise.resolve(), ou = () => On || (iu.then(() => On = 0), On = Date.now());
function au(t, e) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    He(
      lu(n, s.value),
      e,
      5,
      [n]
    );
  };
  return s.value = t, s.attached = ou(), s;
}
function lu(t, e) {
  if (M(e)) {
    const s = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      s.call(t), t._stopped = !0;
    }, e.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return e;
}
const Ci = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, cu = (t, e, s, n, r, i) => {
  const o = r === "svg";
  e === "class" ? Xc(t, n, o) : e === "style" ? eu(t, s, n) : Ys(e) ? ar(e) || nu(t, e, s, n, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : uu(t, e, n, o)) ? (bi(t, e, n), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && mi(t, e, n, o, i, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(e) || !oe(n)) ? bi(t, Ce(e), n, i, e) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), mi(t, e, n, o));
};
function uu(t, e, s, n) {
  if (n)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Ci(e) && D(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ci(e) && oe(s) ? !1 : e in t;
}
const Si = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hu(t, e, s) {
  const n = /* @__PURE__ */ Ot(t, e);
  en(n) && ae(n, e);
  class r extends wr {
    constructor(o) {
      super(n, o, s);
    }
  }
  return r.def = n, r;
}
const fu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class wr extends fu {
  constructor(e, s = {}, n = ki) {
    super(), this._def = e, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== ki ? this._root = this.shadowRoot : e.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let e = this;
    for (; e = e && (e.parentNode || e.host); )
      if (e instanceof wr) {
        this._parent = e;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : e && e._pendingResolve ? this._pendingResolve = e._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(e = this._parent) {
    e && (this._instance.parent = e._instance, this._instance.provides = e._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, mr(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const r of n)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const e = (n, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: o } = n;
      let a;
      if (i && !M(i))
        for (const l in i) {
          const u = i[l];
          (u === Number || u && u.type === Number) && (l in this._props && (this._props[l] = Bn(this._props[l])), (a || (a = /* @__PURE__ */ Object.create(null)))[Ce(l)] = !0);
        }
      this._numberProps = a, r && this._resolveProps(n), this.shadowRoot && this._applyStyles(o), this._mount(n);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then(
      (n) => e(this._def = n, !0)
    ) : e(this._def);
  }
  _mount(e) {
    this._app = this._createApp(e), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const n in s)
        V(this, n) || Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => co(s[n])
        });
  }
  _resolveProps(e) {
    const { props: s } = e, n = M(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r]);
    for (const r of n.map(Ce))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(i) {
          this._setProp(r, i, !0, !0);
        }
      });
  }
  _setAttr(e) {
    if (e.startsWith("data-v-")) return;
    const s = this.hasAttribute(e);
    let n = s ? this.getAttribute(e) : Si;
    const r = Ce(e);
    s && this._numberProps && this._numberProps[r] && (n = Bn(n)), this._setProp(r, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, s, n = !0, r = !1) {
    if (s !== this._props[e] && (s === Si ? delete this._props[e] : (this._props[e] = s, e === "key" && this._app && (this._app._ceVNode.key = s)), r && this._instance && this._update(), n)) {
      const i = this._ob;
      i && i.disconnect(), s === !0 ? this.setAttribute(Ee(e), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(Ee(e), s + "") : s || this.removeAttribute(Ee(e)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    _u(this._createVNode(), this._root);
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const s = he(this._def, ae(e, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0;
      const r = (i, o) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            en(o[0]) ? ae({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      n.emit = (i, ...o) => {
        r(i, o), Ee(i) !== i && r(Ee(i), o);
      }, this._setParent();
    }), s;
  }
  _applyStyles(e, s) {
    if (!e) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const n = this._nonce;
    for (let r = e.length - 1; r >= 0; r--) {
      const i = document.createElement("style");
      n && i.setAttribute("nonce", n), i.textContent = e[r], this.shadowRoot.prepend(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const e = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const n = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (e[n] || (e[n] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const e = (this._teleportTarget || this).querySelectorAll("slot"), s = this._instance.type.__scopeId;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = r.getAttribute("name") || "default", o = this._slots[i], a = r.parentNode;
      if (o)
        for (const l of o) {
          if (s && l.nodeType === 1) {
            const u = s + "-s", c = document.createTreeWalker(l, 1);
            l.setAttribute(u, "");
            let p;
            for (; p = c.nextNode(); )
              p.setAttribute(u, "");
          }
          a.insertBefore(l, r);
        }
      else
        for (; r.firstChild; ) a.insertBefore(r.firstChild, r);
      a.removeChild(r);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(e) {
    this._applyStyles(e.styles, e);
  }
  /**
   * @internal
   */
  _removeChildStyle(e) {
  }
}
const wi = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return M(e) ? (s) => Is(e, s) : e;
};
function pu(t) {
  t.target.composing = !0;
}
function xi(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const In = Symbol("_assign"), du = {
  created(t, { modifiers: { lazy: e, trim: s, number: n } }, r) {
    t[In] = wi(r);
    const i = n || r.props && r.props.type === "number";
    Ft(t, e ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let a = t.value;
      s && (a = a.trim()), i && (a = Nn(a)), t[In](a);
    }), s && Ft(t, "change", () => {
      t.value = t.value.trim();
    }), e || (Ft(t, "compositionstart", pu), Ft(t, "compositionend", xi), Ft(t, "change", xi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (t[In] = wi(o), t.composing) return;
    const a = (i || t.type === "number") && !/^0\d/.test(t.value) ? Nn(t.value) : t.value, l = e ?? "";
    a !== l && (document.activeElement === t && t.type !== "range" && (n && e === s || r && t.value.trim() === l) || (t.value = l));
  }
}, gu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, mu = (t, e) => {
  const s = t._withKeys || (t._withKeys = {}), n = e.join(".");
  return s[n] || (s[n] = (r) => {
    if (!("key" in r))
      return;
    const i = Ee(r.key);
    if (e.some(
      (o) => o === i || gu[o] === i
    ))
      return t(r);
  });
}, bu = /* @__PURE__ */ ae({ patchProp: cu }, Vc);
let vi;
function ia() {
  return vi || (vi = cc(bu));
}
const _u = (...t) => {
  ia().render(...t);
}, ki = (...t) => {
  const e = ia().createApp(...t), { mount: s } = e;
  return e.mount = (n) => {
    const r = Cu(n);
    if (!r) return;
    const i = e._component;
    !D(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, yu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, e;
};
function yu(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Cu(t) {
  return oe(t) ? document.querySelector(t) : t;
}
const Su = /* @__PURE__ */ Ot({
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
}), wu = ".chat-header[data-v-a82ecf7a]{display:flex;align-items:center;padding:10px;border-top-left-radius:10px;border-top-right-radius:10px}.chat-header img[data-v-a82ecf7a]{width:40px;height:40px;border-radius:50%;margin-right:10px}.chat-header .chatbot-name[data-v-a82ecf7a]{flex-grow:1;font-weight:700}.close-btn[data-v-a82ecf7a]{background:transparent;border:none;font-size:16px;cursor:pointer}", Vt = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
}, xu = ["src"];
function vu(t, e, s, n, r, i) {
  return Ue(), lt("div", {
    class: "chat-header",
    style: at({ backgroundColor: t.headerBackgroundColor })
  }, [
    Xe("img", {
      src: t.headerIcon,
      alt: "Chatbot",
      class: "chatbot-image"
    }, null, 8, xu),
    Xe("span", {
      class: "chatbot-name",
      style: at({ color: t.headerTextColor })
    }, qi(t.headerName), 5),
    Xe("button", {
      class: "close-btn",
      style: at({ color: t.closeBtnColor }),
      onClick: e[0] || (e[0] = (o) => t.$emit("close"))
    }, " X ", 4)
  ], 4);
}
const ku = /* @__PURE__ */ Vt(Su, [["render", vu], ["styles", [wu]], ["__scopeId", "data-v-a82ecf7a"]]);
function xr() {
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
let It = xr();
function oa(t) {
  It = t;
}
const us = { exec: () => null };
function q(t, e = "") {
  let s = typeof t == "string" ? t : t.source;
  const n = {
    replace: (r, i) => {
      let o = typeof i == "string" ? i : i.source;
      return o = o.replace(ye.caret, "$1"), s = s.replace(r, o), n;
    },
    getRegex: () => new RegExp(s, e)
  };
  return n;
}
const ye = {
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
  listItemRegex: (t) => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}#`),
  htmlBeginRegex: (t) => new RegExp(`^ {0,${Math.min(3, t - 1)}}<(?:[a-z].*>|!--)`, "i")
}, Pu = /^(?:[ \t]*(?:\n|$))+/, Au = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Eu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Cs = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Tu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, vr = /(?:[*+-]|\d{1,9}[.)])/, aa = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, la = q(aa).replace(/bull/g, vr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Ru = q(aa).replace(/bull/g, vr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), kr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Mu = /^[^\n]+/, Pr = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Ou = q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Pr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Iu = q(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, vr).getRegex(), gn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ar = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Du = q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ar).replace("tag", gn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ca = q(kr).replace("hr", Cs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", gn).getRegex(), Lu = q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ca).getRegex(), Er = {
  blockquote: Lu,
  code: Au,
  def: Ou,
  fences: Eu,
  heading: Tu,
  hr: Cs,
  html: Du,
  lheading: la,
  list: Iu,
  newline: Pu,
  paragraph: ca,
  table: us,
  text: Mu
}, Pi = q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Cs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", gn).getRegex(), Fu = {
  ...Er,
  lheading: Ru,
  table: Pi,
  paragraph: q(kr).replace("hr", Cs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Pi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", gn).getRegex()
}, Nu = {
  ...Er,
  html: q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ar).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: us,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: q(kr).replace("hr", Cs).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", la).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Bu = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, $u = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ua = /^( {2,}|\\)\n(?!\s*$)/, Uu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, mn = /[\p{P}\p{S}]/u, Tr = /[\s\p{P}\p{S}]/u, ha = /[^\s\p{P}\p{S}]/u, Hu = q(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Tr).getRegex(), fa = /(?!~)[\p{P}\p{S}]/u, Wu = /(?!~)[\s\p{P}\p{S}]/u, Vu = /(?:[^\s\p{P}\p{S}]|~)/u, qu = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, pa = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Gu = q(pa, "u").replace(/punct/g, mn).getRegex(), ju = q(pa, "u").replace(/punct/g, fa).getRegex(), da = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", zu = q(da, "gu").replace(/notPunctSpace/g, ha).replace(/punctSpace/g, Tr).replace(/punct/g, mn).getRegex(), Ku = q(da, "gu").replace(/notPunctSpace/g, Vu).replace(/punctSpace/g, Wu).replace(/punct/g, fa).getRegex(), Ju = q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ha).replace(/punctSpace/g, Tr).replace(/punct/g, mn).getRegex(), Qu = q(/\\(punct)/, "gu").replace(/punct/g, mn).getRegex(), Xu = q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Yu = q(Ar).replace("(?:-->|$)", "-->").getRegex(), Zu = q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Yu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Js = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, eh = q(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Js).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ga = q(/^!?\[(label)\]\[(ref)\]/).replace("label", Js).replace("ref", Pr).getRegex(), ma = q(/^!?\[(ref)\](?:\[\])?/).replace("ref", Pr).getRegex(), th = q("reflink|nolink(?!\\()", "g").replace("reflink", ga).replace("nolink", ma).getRegex(), Rr = {
  _backpedal: us,
  // only used for GFM url
  anyPunctuation: Qu,
  autolink: Xu,
  blockSkip: qu,
  br: ua,
  code: $u,
  del: us,
  emStrongLDelim: Gu,
  emStrongRDelimAst: zu,
  emStrongRDelimUnd: Ju,
  escape: Bu,
  link: eh,
  nolink: ma,
  punctuation: Hu,
  reflink: ga,
  reflinkSearch: th,
  tag: Zu,
  text: Uu,
  url: us
}, sh = {
  ...Rr,
  link: q(/^!?\[(label)\]\((.*?)\)/).replace("label", Js).getRegex(),
  reflink: q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Js).getRegex()
}, Zn = {
  ...Rr,
  emStrongRDelimAst: Ku,
  emStrongLDelim: ju,
  url: q(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, nh = {
  ...Zn,
  br: q(ua).replace("{2,}", "*").getRegex(),
  text: q(Zn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Es = {
  normal: Er,
  gfm: Fu,
  pedantic: Nu
}, Xt = {
  normal: Rr,
  gfm: Zn,
  breaks: nh,
  pedantic: sh
}, rh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ai = (t) => rh[t];
function ze(t, e) {
  if (e) {
    if (ye.escapeTest.test(t))
      return t.replace(ye.escapeReplace, Ai);
  } else if (ye.escapeTestNoEncode.test(t))
    return t.replace(ye.escapeReplaceNoEncode, Ai);
  return t;
}
function Ei(t) {
  try {
    t = encodeURI(t).replace(ye.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function Ti(t, e) {
  var i;
  const s = t.replace(ye.findPipe, (o, a, l) => {
    let u = !1, c = a;
    for (; --c >= 0 && l[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), n = s.split(ye.splitPipe);
  let r = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((i = n.at(-1)) != null && i.trim()) && n.pop(), e)
    if (n.length > e)
      n.splice(e);
    else
      for (; n.length < e; )
        n.push("");
  for (; r < n.length; r++)
    n[r] = n[r].trim().replace(ye.slashPipe, "|");
  return n;
}
function Yt(t, e, s) {
  const n = t.length;
  if (n === 0)
    return "";
  let r = 0;
  for (; r < n && t.charAt(n - r - 1) === e; )
    r++;
  return t.slice(0, n - r);
}
function ih(t, e) {
  if (t.indexOf(e[1]) === -1)
    return -1;
  let s = 0;
  for (let n = 0; n < t.length; n++)
    if (t[n] === "\\")
      n++;
    else if (t[n] === e[0])
      s++;
    else if (t[n] === e[1] && (s--, s < 0))
      return n;
  return -1;
}
function Ri(t, e, s, n, r) {
  const i = e.href, o = e.title || null, a = t[1].replace(r.other.outputLinkReplace, "$1");
  if (t[0].charAt(0) !== "!") {
    n.state.inLink = !0;
    const l = {
      type: "link",
      raw: s,
      href: i,
      title: o,
      text: a,
      tokens: n.inlineTokens(a)
    };
    return n.state.inLink = !1, l;
  }
  return {
    type: "image",
    raw: s,
    href: i,
    title: o,
    text: a
  };
}
function oh(t, e, s) {
  const n = t.match(s.other.indentCodeCompensation);
  if (n === null)
    return e;
  const r = n[1];
  return e.split(`
`).map((i) => {
    const o = i.match(s.other.beginningSpace);
    if (o === null)
      return i;
    const [a] = o;
    return a.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
class Qs {
  // set by the lexer
  constructor(e) {
    J(this, "options");
    J(this, "rules");
    // set by the lexer
    J(this, "lexer");
    this.options = e || It;
  }
  space(e) {
    const s = this.rules.block.newline.exec(e);
    if (s && s[0].length > 0)
      return {
        type: "space",
        raw: s[0]
      };
  }
  code(e) {
    const s = this.rules.block.code.exec(e);
    if (s) {
      const n = s[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: s[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : Yt(n, `
`)
      };
    }
  }
  fences(e) {
    const s = this.rules.block.fences.exec(e);
    if (s) {
      const n = s[0], r = oh(n, s[3] || "", this.rules);
      return {
        type: "code",
        raw: n,
        lang: s[2] ? s[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : s[2],
        text: r
      };
    }
  }
  heading(e) {
    const s = this.rules.block.heading.exec(e);
    if (s) {
      let n = s[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        const r = Yt(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return {
        type: "heading",
        raw: s[0],
        depth: s[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(e) {
    const s = this.rules.block.hr.exec(e);
    if (s)
      return {
        type: "hr",
        raw: Yt(s[0], `
`)
      };
  }
  blockquote(e) {
    const s = this.rules.block.blockquote.exec(e);
    if (s) {
      let n = Yt(s[0], `
`).split(`
`), r = "", i = "";
      const o = [];
      for (; n.length > 0; ) {
        let a = !1;
        const l = [];
        let u;
        for (u = 0; u < n.length; u++)
          if (this.rules.other.blockquoteStart.test(n[u]))
            l.push(n[u]), a = !0;
          else if (!a)
            l.push(n[u]);
          else
            break;
        n = n.slice(u);
        const c = l.join(`
`), p = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${c}` : c, i = i ? `${i}
${p}` : p;
        const d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(p, o, !0), this.lexer.state.top = d, n.length === 0)
          break;
        const m = o.at(-1);
        if ((m == null ? void 0 : m.type) === "code")
          break;
        if ((m == null ? void 0 : m.type) === "blockquote") {
          const A = m, v = A.raw + `
` + n.join(`
`), L = this.blockquote(v);
          o[o.length - 1] = L, r = r.substring(0, r.length - A.raw.length) + L.raw, i = i.substring(0, i.length - A.text.length) + L.text;
          break;
        } else if ((m == null ? void 0 : m.type) === "list") {
          const A = m, v = A.raw + `
` + n.join(`
`), L = this.list(v);
          o[o.length - 1] = L, r = r.substring(0, r.length - m.raw.length) + L.raw, i = i.substring(0, i.length - A.raw.length) + L.raw, n = v.substring(o.at(-1).raw.length).split(`
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
  list(e) {
    let s = this.rules.block.list.exec(e);
    if (s) {
      let n = s[1].trim();
      const r = n.length > 1, i = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      const o = this.rules.other.listItemRegex(n);
      let a = !1;
      for (; e; ) {
        let u = !1, c = "", p = "";
        if (!(s = o.exec(e)) || this.rules.block.hr.test(e))
          break;
        c = s[0], e = e.substring(c.length);
        let d = s[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (U) => " ".repeat(3 * U.length)), m = e.split(`
`, 1)[0], A = !d.trim(), v = 0;
        if (this.options.pedantic ? (v = 2, p = d.trimStart()) : A ? v = s[1].length + 1 : (v = s[2].search(this.rules.other.nonSpaceChar), v = v > 4 ? 1 : v, p = d.slice(v), v += s[1].length), A && this.rules.other.blankLine.test(m) && (c += m + `
`, e = e.substring(m.length + 1), u = !0), !u) {
          const U = this.rules.other.nextBulletRegex(v), W = this.rules.other.hrRegex(v), S = this.rules.other.fencesBeginRegex(v), T = this.rules.other.headingBeginRegex(v), G = this.rules.other.htmlBeginRegex(v);
          for (; e; ) {
            const X = e.split(`
`, 1)[0];
            let se;
            if (m = X, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), se = m) : se = m.replace(this.rules.other.tabCharGlobal, "    "), S.test(m) || T.test(m) || G.test(m) || U.test(m) || W.test(m))
              break;
            if (se.search(this.rules.other.nonSpaceChar) >= v || !m.trim())
              p += `
` + se.slice(v);
            else {
              if (A || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || S.test(d) || T.test(d) || W.test(d))
                break;
              p += `
` + m;
            }
            !A && !m.trim() && (A = !0), c += X + `
`, e = e.substring(X.length + 1), d = se.slice(v);
          }
        }
        i.loose || (a ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (a = !0));
        let L = null, N;
        this.options.gfm && (L = this.rules.other.listIsTask.exec(p), L && (N = L[0] !== "[ ] ", p = p.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: c,
          task: !!L,
          checked: N,
          loose: !1,
          text: p,
          tokens: []
        }), i.raw += c;
      }
      const l = i.items.at(-1);
      if (l)
        l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else
        return;
      i.raw = i.raw.trimEnd();
      for (let u = 0; u < i.items.length; u++)
        if (this.lexer.state.top = !1, i.items[u].tokens = this.lexer.blockTokens(i.items[u].text, []), !i.loose) {
          const c = i.items[u].tokens.filter((d) => d.type === "space"), p = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
          i.loose = p;
        }
      if (i.loose)
        for (let u = 0; u < i.items.length; u++)
          i.items[u].loose = !0;
      return i;
    }
  }
  html(e) {
    const s = this.rules.block.html.exec(e);
    if (s)
      return {
        type: "html",
        block: !0,
        raw: s[0],
        pre: s[1] === "pre" || s[1] === "script" || s[1] === "style",
        text: s[0]
      };
  }
  def(e) {
    const s = this.rules.block.def.exec(e);
    if (s) {
      const n = s[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = s[2] ? s[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = s[3] ? s[3].substring(1, s[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : s[3];
      return {
        type: "def",
        tag: n,
        raw: s[0],
        href: r,
        title: i
      };
    }
  }
  table(e) {
    var a;
    const s = this.rules.block.table.exec(e);
    if (!s || !this.rules.other.tableDelimiter.test(s[2]))
      return;
    const n = Ti(s[1]), r = s[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (a = s[3]) != null && a.trim() ? s[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], o = {
      type: "table",
      raw: s[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === r.length) {
      for (const l of r)
        this.rules.other.tableAlignRight.test(l) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(l) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(l) ? o.align.push("left") : o.align.push(null);
      for (let l = 0; l < n.length; l++)
        o.header.push({
          text: n[l],
          tokens: this.lexer.inline(n[l]),
          header: !0,
          align: o.align[l]
        });
      for (const l of i)
        o.rows.push(Ti(l, o.header.length).map((u, c) => ({
          text: u,
          tokens: this.lexer.inline(u),
          header: !1,
          align: o.align[c]
        })));
      return o;
    }
  }
  lheading(e) {
    const s = this.rules.block.lheading.exec(e);
    if (s)
      return {
        type: "heading",
        raw: s[0],
        depth: s[2].charAt(0) === "=" ? 1 : 2,
        text: s[1],
        tokens: this.lexer.inline(s[1])
      };
  }
  paragraph(e) {
    const s = this.rules.block.paragraph.exec(e);
    if (s) {
      const n = s[1].charAt(s[1].length - 1) === `
` ? s[1].slice(0, -1) : s[1];
      return {
        type: "paragraph",
        raw: s[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(e) {
    const s = this.rules.block.text.exec(e);
    if (s)
      return {
        type: "text",
        raw: s[0],
        text: s[0],
        tokens: this.lexer.inline(s[0])
      };
  }
  escape(e) {
    const s = this.rules.inline.escape.exec(e);
    if (s)
      return {
        type: "escape",
        raw: s[0],
        text: s[1]
      };
  }
  tag(e) {
    const s = this.rules.inline.tag.exec(e);
    if (s)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(s[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(s[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(s[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(s[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: s[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: s[0]
      };
  }
  link(e) {
    const s = this.rules.inline.link.exec(e);
    if (s) {
      const n = s[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n))
          return;
        const o = Yt(n.slice(0, -1), "\\");
        if ((n.length - o.length) % 2 === 0)
          return;
      } else {
        const o = ih(s[2], "()");
        if (o > -1) {
          const l = (s[0].indexOf("!") === 0 ? 5 : 4) + s[1].length + o;
          s[2] = s[2].substring(0, o), s[0] = s[0].substring(0, l).trim(), s[3] = "";
        }
      }
      let r = s[2], i = "";
      if (this.options.pedantic) {
        const o = this.rules.other.pedanticHrefTitle.exec(r);
        o && (r = o[1], i = o[3]);
      } else
        i = s[3] ? s[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), Ri(s, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
      }, s[0], this.lexer, this.rules);
    }
  }
  reflink(e, s) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = s[r.toLowerCase()];
      if (!i) {
        const o = n[0].charAt(0);
        return {
          type: "text",
          raw: o,
          text: o
        };
      }
      return Ri(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, s, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const o = [...r[0]].length - 1;
      let a, l, u = o, c = 0;
      const p = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, s = s.slice(-1 * e.length + o); (r = p.exec(s)) != null; ) {
        if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a)
          continue;
        if (l = [...a].length, r[3] || r[4]) {
          u += l;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + l) % 3)) {
          c += l;
          continue;
        }
        if (u -= l, u > 0)
          continue;
        l = Math.min(l, l + u + c);
        const d = [...r[0]][0].length, m = e.slice(0, o + r.index + d + l);
        if (Math.min(o, l) % 2) {
          const v = m.slice(1, -1);
          return {
            type: "em",
            raw: m,
            text: v,
            tokens: this.lexer.inlineTokens(v)
          };
        }
        const A = m.slice(2, -2);
        return {
          type: "strong",
          raw: m,
          text: A,
          tokens: this.lexer.inlineTokens(A)
        };
      }
    }
  }
  codespan(e) {
    const s = this.rules.inline.code.exec(e);
    if (s) {
      let n = s[2].replace(this.rules.other.newLineCharGlobal, " ");
      const r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = n.substring(1, n.length - 1)), {
        type: "codespan",
        raw: s[0],
        text: n
      };
    }
  }
  br(e) {
    const s = this.rules.inline.br.exec(e);
    if (s)
      return {
        type: "br",
        raw: s[0]
      };
  }
  del(e) {
    const s = this.rules.inline.del.exec(e);
    if (s)
      return {
        type: "del",
        raw: s[0],
        text: s[2],
        tokens: this.lexer.inlineTokens(s[2])
      };
  }
  autolink(e) {
    const s = this.rules.inline.autolink.exec(e);
    if (s) {
      let n, r;
      return s[2] === "@" ? (n = s[1], r = "mailto:" + n) : (n = s[1], r = n), {
        type: "link",
        raw: s[0],
        text: n,
        href: r,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e) {
    var n;
    let s;
    if (s = this.rules.inline.url.exec(e)) {
      let r, i;
      if (s[2] === "@")
        r = s[0], i = "mailto:" + r;
      else {
        let o;
        do
          o = s[0], s[0] = ((n = this.rules.inline._backpedal.exec(s[0])) == null ? void 0 : n[0]) ?? "";
        while (o !== s[0]);
        r = s[0], s[1] === "www." ? i = "http://" + s[0] : i = s[0];
      }
      return {
        type: "link",
        raw: s[0],
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
  inlineText(e) {
    const s = this.rules.inline.text.exec(e);
    if (s) {
      const n = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: s[0],
        text: s[0],
        escaped: n
      };
    }
  }
}
class Ie {
  constructor(e) {
    J(this, "tokens");
    J(this, "options");
    J(this, "state");
    J(this, "tokenizer");
    J(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || It, this.options.tokenizer = this.options.tokenizer || new Qs(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const s = {
      other: ye,
      block: Es.normal,
      inline: Xt.normal
    };
    this.options.pedantic ? (s.block = Es.pedantic, s.inline = Xt.pedantic) : this.options.gfm && (s.block = Es.gfm, this.options.breaks ? s.inline = Xt.breaks : s.inline = Xt.gfm), this.tokenizer.rules = s;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Es,
      inline: Xt
    };
  }
  /**
   * Static Lex Method
   */
  static lex(e, s) {
    return new Ie(s).lex(e);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(e, s) {
    return new Ie(s).inlineTokens(e);
  }
  /**
   * Preprocessing
   */
  lex(e) {
    e = e.replace(ye.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let s = 0; s < this.inlineQueue.length; s++) {
      const n = this.inlineQueue[s];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, s = [], n = !1) {
    var r, i, o;
    for (this.options.pedantic && (e = e.replace(ye.tabCharGlobal, "    ").replace(ye.spaceLine, "")); e; ) {
      let a;
      if ((i = (r = this.options.extensions) == null ? void 0 : r.block) != null && i.some((u) => (a = u.call({ lexer: this }, e, s)) ? (e = e.substring(a.raw.length), s.push(a), !0) : !1))
        continue;
      if (a = this.tokenizer.space(e)) {
        e = e.substring(a.raw.length);
        const u = s.at(-1);
        a.raw.length === 1 && u !== void 0 ? u.raw += `
` : s.push(a);
        continue;
      }
      if (a = this.tokenizer.code(e)) {
        e = e.substring(a.raw.length);
        const u = s.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + a.raw, u.text += `
` + a.text, this.inlineQueue.at(-1).src = u.text) : s.push(a);
        continue;
      }
      if (a = this.tokenizer.fences(e)) {
        e = e.substring(a.raw.length), s.push(a);
        continue;
      }
      if (a = this.tokenizer.heading(e)) {
        e = e.substring(a.raw.length), s.push(a);
        continue;
      }
      if (a = this.tokenizer.hr(e)) {
        e = e.substring(a.raw.length), s.push(a);
        continue;
      }
      if (a = this.tokenizer.blockquote(e)) {
        e = e.substring(a.raw.length), s.push(a);
        continue;
      }
      if (a = this.tokenizer.list(e)) {
        e = e.substring(a.raw.length), s.push(a);
        continue;
      }
      if (a = this.tokenizer.html(e)) {
        e = e.substring(a.raw.length), s.push(a);
        continue;
      }
      if (a = this.tokenizer.def(e)) {
        e = e.substring(a.raw.length);
        const u = s.at(-1);
        (u == null ? void 0 : u.type) === "paragraph" || (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + a.raw, u.text += `
` + a.raw, this.inlineQueue.at(-1).src = u.text) : this.tokens.links[a.tag] || (this.tokens.links[a.tag] = {
          href: a.href,
          title: a.title
        });
        continue;
      }
      if (a = this.tokenizer.table(e)) {
        e = e.substring(a.raw.length), s.push(a);
        continue;
      }
      if (a = this.tokenizer.lheading(e)) {
        e = e.substring(a.raw.length), s.push(a);
        continue;
      }
      let l = e;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let u = 1 / 0;
        const c = e.slice(1);
        let p;
        this.options.extensions.startBlock.forEach((d) => {
          p = d.call({ lexer: this }, c), typeof p == "number" && p >= 0 && (u = Math.min(u, p));
        }), u < 1 / 0 && u >= 0 && (l = e.substring(0, u + 1));
      }
      if (this.state.top && (a = this.tokenizer.paragraph(l))) {
        const u = s.at(-1);
        n && (u == null ? void 0 : u.type) === "paragraph" ? (u.raw += `
` + a.raw, u.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : s.push(a), n = l.length !== e.length, e = e.substring(a.raw.length);
        continue;
      }
      if (a = this.tokenizer.text(e)) {
        e = e.substring(a.raw.length);
        const u = s.at(-1);
        (u == null ? void 0 : u.type) === "text" ? (u.raw += `
` + a.raw, u.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = u.text) : s.push(a);
        continue;
      }
      if (e) {
        const u = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else
          throw new Error(u);
      }
    }
    return this.state.top = !0, s;
  }
  inline(e, s = []) {
    return this.inlineQueue.push({ src: e, tokens: s }), s;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(e, s = []) {
    var a, l, u;
    let n = e, r = null;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; )
          c.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; )
      n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; )
      n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i = !1, o = "";
    for (; e; ) {
      i || (o = ""), i = !1;
      let c;
      if ((l = (a = this.options.extensions) == null ? void 0 : a.inline) != null && l.some((d) => (c = d.call({ lexer: this }, e, s)) ? (e = e.substring(c.raw.length), s.push(c), !0) : !1))
        continue;
      if (c = this.tokenizer.escape(e)) {
        e = e.substring(c.raw.length), s.push(c);
        continue;
      }
      if (c = this.tokenizer.tag(e)) {
        e = e.substring(c.raw.length), s.push(c);
        continue;
      }
      if (c = this.tokenizer.link(e)) {
        e = e.substring(c.raw.length), s.push(c);
        continue;
      }
      if (c = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(c.raw.length);
        const d = s.at(-1);
        c.type === "text" && (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : s.push(c);
        continue;
      }
      if (c = this.tokenizer.emStrong(e, n, o)) {
        e = e.substring(c.raw.length), s.push(c);
        continue;
      }
      if (c = this.tokenizer.codespan(e)) {
        e = e.substring(c.raw.length), s.push(c);
        continue;
      }
      if (c = this.tokenizer.br(e)) {
        e = e.substring(c.raw.length), s.push(c);
        continue;
      }
      if (c = this.tokenizer.del(e)) {
        e = e.substring(c.raw.length), s.push(c);
        continue;
      }
      if (c = this.tokenizer.autolink(e)) {
        e = e.substring(c.raw.length), s.push(c);
        continue;
      }
      if (!this.state.inLink && (c = this.tokenizer.url(e))) {
        e = e.substring(c.raw.length), s.push(c);
        continue;
      }
      let p = e;
      if ((u = this.options.extensions) != null && u.startInline) {
        let d = 1 / 0;
        const m = e.slice(1);
        let A;
        this.options.extensions.startInline.forEach((v) => {
          A = v.call({ lexer: this }, m), typeof A == "number" && A >= 0 && (d = Math.min(d, A));
        }), d < 1 / 0 && d >= 0 && (p = e.substring(0, d + 1));
      }
      if (c = this.tokenizer.inlineText(p)) {
        e = e.substring(c.raw.length), c.raw.slice(-1) !== "_" && (o = c.raw.slice(-1)), i = !0;
        const d = s.at(-1);
        (d == null ? void 0 : d.type) === "text" ? (d.raw += c.raw, d.text += c.text) : s.push(c);
        continue;
      }
      if (e) {
        const d = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else
          throw new Error(d);
      }
    }
    return s;
  }
}
class Xs {
  // set by the parser
  constructor(e) {
    J(this, "options");
    J(this, "parser");
    this.options = e || It;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: s, escaped: n }) {
    var o;
    const r = (o = (s || "").match(ye.notSpaceStart)) == null ? void 0 : o[0], i = e.replace(ye.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + ze(r) + '">' + (n ? i : ze(i, !0)) + `</code></pre>
` : "<pre><code>" + (n ? i : ze(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  heading({ tokens: e, depth: s }) {
    return `<h${s}>${this.parser.parseInline(e)}</h${s}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    const s = e.ordered, n = e.start;
    let r = "";
    for (let a = 0; a < e.items.length; a++) {
      const l = e.items[a];
      r += this.listitem(l);
    }
    const i = s ? "ol" : "ul", o = s && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + o + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    var n;
    let s = "";
    if (e.task) {
      const r = this.checkbox({ checked: !!e.checked });
      e.loose ? ((n = e.tokens[0]) == null ? void 0 : n.type) === "paragraph" ? (e.tokens[0].text = r + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = r + " " + ze(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
        type: "text",
        raw: r + " ",
        text: r + " ",
        escaped: !0
      }) : s += r + " ";
    }
    return s += this.parser.parse(e.tokens, !!e.loose), `<li>${s}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let s = "", n = "";
    for (let i = 0; i < e.header.length; i++)
      n += this.tablecell(e.header[i]);
    s += this.tablerow({ text: n });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      const o = e.rows[i];
      n = "";
      for (let a = 0; a < o.length; a++)
        n += this.tablecell(o[a]);
      r += this.tablerow({ text: n });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + s + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    const s = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + s + `</${n}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${ze(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: s, tokens: n }) {
    const r = this.parser.parseInline(n), i = Ei(e);
    if (i === null)
      return r;
    e = i;
    let o = '<a href="' + e + '"';
    return s && (o += ' title="' + ze(s) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: e, title: s, text: n }) {
    const r = Ei(e);
    if (r === null)
      return ze(n);
    e = r;
    let i = `<img src="${e}" alt="${n}"`;
    return s && (i += ` title="${ze(s)}"`), i += ">", i;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : ze(e.text);
  }
}
class Mr {
  // no need for block level renderers
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
}
class De {
  constructor(e) {
    J(this, "options");
    J(this, "renderer");
    J(this, "textRenderer");
    this.options = e || It, this.options.renderer = this.options.renderer || new Xs(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Mr();
  }
  /**
   * Static Parse Method
   */
  static parse(e, s) {
    return new De(s).parse(e);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(e, s) {
    return new De(s).parseInline(e);
  }
  /**
   * Parse Loop
   */
  parse(e, s = !0) {
    var r, i;
    let n = "";
    for (let o = 0; o < e.length; o++) {
      const a = e[o];
      if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[a.type]) {
        const u = a, c = this.options.extensions.renderers[u.type].call({ parser: this }, u);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u.type)) {
          n += c || "";
          continue;
        }
      }
      const l = a;
      switch (l.type) {
        case "space": {
          n += this.renderer.space(l);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(l);
          continue;
        }
        case "code": {
          n += this.renderer.code(l);
          continue;
        }
        case "table": {
          n += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          n += this.renderer.list(l);
          continue;
        }
        case "html": {
          n += this.renderer.html(l);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let u = l, c = this.renderer.text(u);
          for (; o + 1 < e.length && e[o + 1].type === "text"; )
            u = e[++o], c += `
` + this.renderer.text(u);
          s ? n += this.renderer.paragraph({
            type: "paragraph",
            raw: c,
            text: c,
            tokens: [{ type: "text", raw: c, text: c, escaped: !0 }]
          }) : n += c;
          continue;
        }
        default: {
          const u = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return n;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(e, s = this.renderer) {
    var r, i;
    let n = "";
    for (let o = 0; o < e.length; o++) {
      const a = e[o];
      if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[a.type]) {
        const u = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (u !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          n += u || "";
          continue;
        }
      }
      const l = a;
      switch (l.type) {
        case "escape": {
          n += s.text(l);
          break;
        }
        case "html": {
          n += s.html(l);
          break;
        }
        case "link": {
          n += s.link(l);
          break;
        }
        case "image": {
          n += s.image(l);
          break;
        }
        case "strong": {
          n += s.strong(l);
          break;
        }
        case "em": {
          n += s.em(l);
          break;
        }
        case "codespan": {
          n += s.codespan(l);
          break;
        }
        case "br": {
          n += s.br(l);
          break;
        }
        case "del": {
          n += s.del(l);
          break;
        }
        case "text": {
          n += s.text(l);
          break;
        }
        default: {
          const u = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(u), "";
          throw new Error(u);
        }
      }
    }
    return n;
  }
}
class hs {
  constructor(e) {
    J(this, "options");
    J(this, "block");
    this.options = e || It;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? Ie.lex : Ie.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? De.parse : De.parseInline;
  }
}
J(hs, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class ah {
  constructor(...e) {
    J(this, "defaults", xr());
    J(this, "options", this.setOptions);
    J(this, "parse", this.parseMarkdown(!0));
    J(this, "parseInline", this.parseMarkdown(!1));
    J(this, "Parser", De);
    J(this, "Renderer", Xs);
    J(this, "TextRenderer", Mr);
    J(this, "Lexer", Ie);
    J(this, "Tokenizer", Qs);
    J(this, "Hooks", hs);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, s) {
    var r, i;
    let n = [];
    for (const o of e)
      switch (n = n.concat(s.call(this, o)), o.type) {
        case "table": {
          const a = o;
          for (const l of a.header)
            n = n.concat(this.walkTokens(l.tokens, s));
          for (const l of a.rows)
            for (const u of l)
              n = n.concat(this.walkTokens(u.tokens, s));
          break;
        }
        case "list": {
          const a = o;
          n = n.concat(this.walkTokens(a.items, s));
          break;
        }
        default: {
          const a = o;
          (i = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && i[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((l) => {
            const u = a[l].flat(1 / 0);
            n = n.concat(this.walkTokens(u, s));
          }) : a.tokens && (n = n.concat(this.walkTokens(a.tokens, s)));
        }
      }
    return n;
  }
  use(...e) {
    const s = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      const r = { ...n };
      if (r.async = this.defaults.async || r.async || !1, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          const o = s.renderers[i.name];
          o ? s.renderers[i.name] = function(...a) {
            let l = i.renderer.apply(this, a);
            return l === !1 && (l = o.apply(this, a)), l;
          } : s.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = s[i.level];
          o ? o.unshift(i.tokenizer) : s[i.level] = [i.tokenizer], i.start && (i.level === "block" ? s.startBlock ? s.startBlock.push(i.start) : s.startBlock = [i.start] : i.level === "inline" && (s.startInline ? s.startInline.push(i.start) : s.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (s.childTokens[i.name] = i.childTokens);
      }), r.extensions = s), n.renderer) {
        const i = this.defaults.renderer || new Xs(this.defaults);
        for (const o in n.renderer) {
          if (!(o in i))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const a = o, l = n.renderer[a], u = i[a];
          i[a] = (...c) => {
            let p = l.apply(i, c);
            return p === !1 && (p = u.apply(i, c)), p || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        const i = this.defaults.tokenizer || new Qs(this.defaults);
        for (const o in n.tokenizer) {
          if (!(o in i))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const a = o, l = n.tokenizer[a], u = i[a];
          i[a] = (...c) => {
            let p = l.apply(i, c);
            return p === !1 && (p = u.apply(i, c)), p;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        const i = this.defaults.hooks || new hs();
        for (const o in n.hooks) {
          if (!(o in i))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const a = o, l = n.hooks[a], u = i[a];
          hs.passThroughHooks.has(o) ? i[a] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(i, c)).then((d) => u.call(i, d));
            const p = l.call(i, c);
            return u.call(i, p);
          } : i[a] = (...c) => {
            let p = l.apply(i, c);
            return p === !1 && (p = u.apply(i, c)), p;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        const i = this.defaults.walkTokens, o = n.walkTokens;
        r.walkTokens = function(a) {
          let l = [];
          return l.push(o.call(this, a)), i && (l = l.concat(i.call(this, a))), l;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, s) {
    return Ie.lex(e, s ?? this.defaults);
  }
  parser(e, s) {
    return De.parse(e, s ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, r) => {
      const i = { ...r }, o = { ...this.defaults, ...i }, a = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && i.async === !1)
        return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null)
        return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      o.hooks && (o.hooks.options = o, o.hooks.block = e);
      const l = o.hooks ? o.hooks.provideLexer() : e ? Ie.lex : Ie.lexInline, u = o.hooks ? o.hooks.provideParser() : e ? De.parse : De.parseInline;
      if (o.async)
        return Promise.resolve(o.hooks ? o.hooks.preprocess(n) : n).then((c) => l(c, o)).then((c) => o.hooks ? o.hooks.processAllTokens(c) : c).then((c) => o.walkTokens ? Promise.all(this.walkTokens(c, o.walkTokens)).then(() => c) : c).then((c) => u(c, o)).then((c) => o.hooks ? o.hooks.postprocess(c) : c).catch(a);
      try {
        o.hooks && (n = o.hooks.preprocess(n));
        let c = l(n, o);
        o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
        let p = u(c, o);
        return o.hooks && (p = o.hooks.postprocess(p)), p;
      } catch (c) {
        return a(c);
      }
    };
  }
  onError(e, s) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const r = "<p>An error occurred:</p><pre>" + ze(n.message + "", !0) + "</pre>";
        return s ? Promise.resolve(r) : r;
      }
      if (s)
        return Promise.reject(n);
      throw n;
    };
  }
}
const Mt = new ah();
function z(t, e) {
  return Mt.parse(t, e);
}
z.options = z.setOptions = function(t) {
  return Mt.setOptions(t), z.defaults = Mt.defaults, oa(z.defaults), z;
};
z.getDefaults = xr;
z.defaults = It;
z.use = function(...t) {
  return Mt.use(...t), z.defaults = Mt.defaults, oa(z.defaults), z;
};
z.walkTokens = function(t, e) {
  return Mt.walkTokens(t, e);
};
z.parseInline = Mt.parseInline;
z.Parser = De;
z.parser = De.parse;
z.Renderer = Xs;
z.TextRenderer = Mr;
z.Lexer = Ie;
z.lexer = Ie.lex;
z.Tokenizer = Qs;
z.Hooks = hs;
z.parse = z;
z.options;
z.setOptions;
z.use;
z.walkTokens;
z.parseInline;
De.parse;
Ie.lex;
const lh = /* @__PURE__ */ Ot({
  name: "ChatMessages",
  props: {
    messages: { type: Array, required: !0 },
    userMessageColor: { type: String, required: !0 },
    assistantMessageColor: { type: String, required: !0 },
    userMessageBackground: { type: String, required: !0 },
    assistantMessageBackground: { type: String, required: !0 }
  },
  methods: {
    messageStyle(t) {
      return t === "user" ? {
        color: this.userMessageColor,
        backgroundColor: this.userMessageBackground,
        alignSelf: "flex-end",
        textAlign: "left",
        borderRadius: "8px 8px 0px 8px"
      } : t === "assistantError" ? {
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
    renderMarkdown(t) {
      return z(t);
    }
  }
}), ch = ".chat-messages[data-v-a342bf86]{flex-grow:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column}.message[data-v-a342bf86]{margin-bottom:10px;padding:8px;border:1px solid #3d3d3d9f;max-width:85%}.message-content[data-v-a342bf86]{word-wrap:break-word;overflow-wrap:break-word}[data-v-a342bf86] .message-content pre{white-space:pre-wrap!important;word-break:break-word;overflow-wrap:break-word;overflow-x:auto;max-width:100%;background-color:#f5f5f5;padding:10px;border-radius:5px;box-sizing:border-box}[data-v-a342bf86] .message-content code{white-space:pre-wrap!important;word-break:break-word;font-family:monospace}", uh = { class: "chat-messages" }, hh = ["innerHTML"];
function fh(t, e, s, n, r, i) {
  return Ue(), lt("div", uh, [
    (Ue(!0), lt(Ne, null, Kl(t.messages, (o, a) => (Ue(), lt("div", {
      key: a,
      class: rn(["message", o.from]),
      style: at(t.messageStyle(o.from))
    }, [
      Xe("p", {
        innerHTML: t.renderMarkdown(o.text),
        class: "message-content"
      }, null, 8, hh)
    ], 6))), 128))
  ]);
}
const ph = /* @__PURE__ */ Vt(lh, [["render", fh], ["styles", [ch]], ["__scopeId", "data-v-a342bf86"]]), dh = /* @__PURE__ */ Ot({
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
  setup(t, { emit: e }) {
    const s = Me(t.userInput);
    return Qe(
      () => t.userInput,
      (i) => {
        s.value = i;
      }
    ), Qe(s, (i) => {
      e("update:userInput", i);
    }), { localInput: s, handleSend: () => {
      e("send-message");
    }, buttonStyle: () => ({
      backgroundColor: t.buttonBackgroundColor,
      color: t.buttonTextColor
    }) };
  }
}), gh = "button[data-v-aaadc865]:disabled{background:#ccc;cursor:not-allowed}.chat-input[data-v-aaadc865]{display:flex;align-items:center;padding:10px;border-top:1px solid #ccc}.chat-input input[data-v-aaadc865]{flex-grow:1;padding:8px;border:1px solid #ccc;border-radius:5px;background:#f9f9f9;color:#292929;font-size:medium}.chat-input button[data-v-aaadc865]{margin-left:10px;padding:8px 12px;border:none;border-radius:5px;cursor:pointer;font-size:medium}.chat-input button[data-v-aaadc865]:disabled,.chat-input input[data-v-aaadc865]:disabled{background:#ccc;cursor:not-allowed}.loading-indicator[data-v-aaadc865]{display:inline-block;margin-left:10px}.spinner[data-v-aaadc865]{border:4px solid rgba(0,0,0,.1);border-left-color:#007bff;border-radius:50%;width:20px;height:20px;animation:spin-aaadc865 1s linear infinite}@keyframes spin-aaadc865{to{transform:rotate(360deg)}}", mh = { class: "chat-input" }, bh = ["placeholder", "disabled"], _h = ["disabled"], yh = {
  key: 0,
  class: "loading-indicator"
};
function Ch(t, e, s, n, r, i) {
  return Ue(), lt("div", mh, [
    qn(Xe("input", {
      "onUpdate:modelValue": e[0] || (e[0] = (o) => t.localInput = o),
      onKeyup: e[1] || (e[1] = mu((...o) => t.handleSend && t.handleSend(...o), ["enter"])),
      placeholder: t.placeholder,
      disabled: t.sending
    }, null, 40, bh), [
      [du, t.localInput]
    ]),
    Xe("button", {
      disabled: t.sending,
      onClick: e[2] || (e[2] = (...o) => t.handleSend && t.handleSend(...o)),
      style: at(t.buttonStyle())
    }, " Enviar ", 12, _h),
    t.sending ? (Ue(), lt("div", yh, e[3] || (e[3] = [
      Xe("div", { class: "spinner" }, null, -1)
    ]))) : Qo("", !0)
  ]);
}
const Sh = /* @__PURE__ */ Vt(dh, [["render", Ch], ["styles", [gh]], ["__scopeId", "data-v-aaadc865"]]), wh = /* @__PURE__ */ Ot({
  name: "ChatWindow",
  components: {
    ChatHeader: ku,
    ChatMessages: ph,
    ChatInput: Sh
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
  setup(t, { emit: e }) {
    const s = Me(t.userInput);
    return Qe(
      () => t.userInput,
      (i) => {
        s.value = i;
      }
    ), Qe(s, (i) => {
      e("update:userInput", i);
    }), {
      localUserInput: s,
      handleSendMessage: () => {
        e("send-message");
      },
      closeWindow: () => {
        e("toggle-chat");
      }
    };
  }
}), xh = ".chat-window[data-v-5921353b]{position:fixed;bottom:20px;right:20px;width:min(90vw,400px);height:min(50vh,500px);background:#fff;border-radius:10px;box-shadow:0 0 15px #0000004d;display:flex;flex-direction:column;overflow:hidden}@media screen and (max-width: 845px){.chat-window[data-v-5921353b]{width:100%!important;height:70%!important;bottom:0;right:0;border-radius:0;max-height:none}}";
function vh(t, e, s, n, r, i) {
  const o = as("ChatHeader"), a = as("ChatMessages"), l = as("ChatInput");
  return Ue(), lt("div", {
    class: "chat-window",
    style: at({
      width: t.chatbotWidth,
      height: t.chatbotHeight
    })
  }, [
    he(o, {
      onClose: t.closeWindow,
      "header-name": t.headerName,
      "header-icon": t.headerIcon,
      "header-background-color": t.headerBackgroundColor,
      "header-text-color": t.headerTextColor,
      "close-btn-color": t.closeBtnColor
    }, null, 8, ["onClose", "header-name", "header-icon", "header-background-color", "header-text-color", "close-btn-color"]),
    he(a, {
      messages: t.messages,
      "user-message-color": t.userMessageColor,
      "user-message-background": t.userMessageBackground,
      "assistant-message-color": t.assistantMessageColor,
      "assistant-message-background": t.assistantMessageBackground
    }, null, 8, ["messages", "user-message-color", "user-message-background", "assistant-message-color", "assistant-message-background"]),
    he(l, {
      userInput: t.localUserInput,
      "onUpdate:userInput": e[0] || (e[0] = (u) => t.localUserInput = u),
      sending: t.sending,
      placeholder: t.placeholder,
      "button-background-color": t.buttonBackgroundColor,
      "button-text-color": t.buttonTextColor,
      onSendMessage: t.handleSendMessage
    }, null, 8, ["userInput", "sending", "placeholder", "button-background-color", "button-text-color", "onSendMessage"])
  ], 4);
}
const kh = /* @__PURE__ */ Vt(wh, [["render", vh], ["styles", [xh]], ["__scopeId", "data-v-5921353b"]]), Ph = /* @__PURE__ */ Ot({
  name: "ChatToggle",
  props: {
    headerIcon: {
      type: String,
      required: !0
    }
  }
}), Ah = ".chatbot-toggle[data-v-d7b03065]{position:fixed;bottom:20px;right:20px;background:#fff;border-radius:50%;width:60px;height:60px;border:none;box-shadow:0 0 10px #0000004d;cursor:pointer;padding:0}.chatbot-toggle img[data-v-d7b03065]{width:100%;height:100%;border-radius:50%}", Eh = ["src"];
function Th(t, e, s, n, r, i) {
  return Ue(), lt("button", {
    class: "chatbot-toggle",
    onClick: e[0] || (e[0] = (o) => t.$emit("toggle-chat"))
  }, [
    Xe("img", {
      src: t.headerIcon,
      alt: "Chatbot",
      class: "chatbot-icon"
    }, null, 8, Eh)
  ]);
}
const Rh = /* @__PURE__ */ Vt(Ph, [["render", Th], ["styles", [Ah]], ["__scopeId", "data-v-d7b03065"]]), Ze = /* @__PURE__ */ Object.create(null);
Ze.open = "0";
Ze.close = "1";
Ze.ping = "2";
Ze.pong = "3";
Ze.message = "4";
Ze.upgrade = "5";
Ze.noop = "6";
const Ns = /* @__PURE__ */ Object.create(null);
Object.keys(Ze).forEach((t) => {
  Ns[Ze[t]] = t;
});
const er = { type: "error", data: "parser error" }, ba = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", _a = typeof ArrayBuffer == "function", ya = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Or = ({ type: t, data: e }, s, n) => ba && e instanceof Blob ? s ? n(e) : Mi(e, n) : _a && (e instanceof ArrayBuffer || ya(e)) ? s ? n(e) : Mi(new Blob([e]), n) : n(Ze[t] + (e || "")), Mi = (t, e) => {
  const s = new FileReader();
  return s.onload = function() {
    const n = s.result.split(",")[1];
    e("b" + (n || ""));
  }, s.readAsDataURL(t);
};
function Oi(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Dn;
function Mh(t, e) {
  if (ba && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Oi).then(e);
  if (_a && (t.data instanceof ArrayBuffer || ya(t.data)))
    return e(Oi(t.data));
  Or(t, !1, (s) => {
    Dn || (Dn = new TextEncoder()), e(Dn.encode(s));
  });
}
const Ii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ts = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Ii.length; t++)
  ts[Ii.charCodeAt(t)] = t;
const Oh = (t) => {
  let e = t.length * 0.75, s = t.length, n, r = 0, i, o, a, l;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), c = new Uint8Array(u);
  for (n = 0; n < s; n += 4)
    i = ts[t.charCodeAt(n)], o = ts[t.charCodeAt(n + 1)], a = ts[t.charCodeAt(n + 2)], l = ts[t.charCodeAt(n + 3)], c[r++] = i << 2 | o >> 4, c[r++] = (o & 15) << 4 | a >> 2, c[r++] = (a & 3) << 6 | l & 63;
  return u;
}, Ih = typeof ArrayBuffer == "function", Ir = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: Ca(t, e)
    };
  const s = t.charAt(0);
  return s === "b" ? {
    type: "message",
    data: Dh(t.substring(1), e)
  } : Ns[s] ? t.length > 1 ? {
    type: Ns[s],
    data: t.substring(1)
  } : {
    type: Ns[s]
  } : er;
}, Dh = (t, e) => {
  if (Ih) {
    const s = Oh(t);
    return Ca(s, e);
  } else
    return { base64: !0, data: t };
}, Ca = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Sa = "", Lh = (t, e) => {
  const s = t.length, n = new Array(s);
  let r = 0;
  t.forEach((i, o) => {
    Or(i, !1, (a) => {
      n[o] = a, ++r === s && e(n.join(Sa));
    });
  });
}, Fh = (t, e) => {
  const s = t.split(Sa), n = [];
  for (let r = 0; r < s.length; r++) {
    const i = Ir(s[r], e);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function Nh() {
  return new TransformStream({
    transform(t, e) {
      Mh(t, (s) => {
        const n = s.length;
        let r;
        if (n < 126)
          r = new Uint8Array(1), new DataView(r.buffer).setUint8(0, n);
        else if (n < 65536) {
          r = new Uint8Array(3);
          const i = new DataView(r.buffer);
          i.setUint8(0, 126), i.setUint16(1, n);
        } else {
          r = new Uint8Array(9);
          const i = new DataView(r.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(n));
        }
        t.data && typeof t.data != "string" && (r[0] |= 128), e.enqueue(r), e.enqueue(s);
      });
    }
  });
}
let Ln;
function Ts(t) {
  return t.reduce((e, s) => e + s.length, 0);
}
function Rs(t, e) {
  if (t[0].length === e)
    return t.shift();
  const s = new Uint8Array(e);
  let n = 0;
  for (let r = 0; r < e; r++)
    s[r] = t[0][n++], n === t[0].length && (t.shift(), n = 0);
  return t.length && n < t[0].length && (t[0] = t[0].slice(n)), s;
}
function Bh(t, e) {
  Ln || (Ln = new TextDecoder());
  const s = [];
  let n = 0, r = -1, i = !1;
  return new TransformStream({
    transform(o, a) {
      for (s.push(o); ; ) {
        if (n === 0) {
          if (Ts(s) < 1)
            break;
          const l = Rs(s, 1);
          i = (l[0] & 128) === 128, r = l[0] & 127, r < 126 ? n = 3 : r === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (Ts(s) < 2)
            break;
          const l = Rs(s, 2);
          r = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (Ts(s) < 8)
            break;
          const l = Rs(s, 8), u = new DataView(l.buffer, l.byteOffset, l.length), c = u.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            a.enqueue(er);
            break;
          }
          r = c * Math.pow(2, 32) + u.getUint32(4), n = 3;
        } else {
          if (Ts(s) < r)
            break;
          const l = Rs(s, r);
          a.enqueue(Ir(i ? l : Ln.decode(l), e)), n = 0;
        }
        if (r === 0 || r > t) {
          a.enqueue(er);
          break;
        }
      }
    }
  });
}
const wa = 4;
function ce(t) {
  if (t) return $h(t);
}
function $h(t) {
  for (var e in ce.prototype)
    t[e] = ce.prototype[e];
  return t;
}
ce.prototype.on = ce.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
ce.prototype.once = function(t, e) {
  function s() {
    this.off(t, s), e.apply(this, arguments);
  }
  return s.fn = e, this.on(t, s), this;
};
ce.prototype.off = ce.prototype.removeListener = ce.prototype.removeAllListeners = ce.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var s = this._callbacks["$" + t];
  if (!s) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var n, r = 0; r < s.length; r++)
    if (n = s[r], n === e || n.fn === e) {
      s.splice(r, 1);
      break;
    }
  return s.length === 0 && delete this._callbacks["$" + t], this;
};
ce.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), s = this._callbacks["$" + t], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  if (s) {
    s = s.slice(0);
    for (var n = 0, r = s.length; n < r; ++n)
      s[n].apply(this, e);
  }
  return this;
};
ce.prototype.emitReserved = ce.prototype.emit;
ce.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
ce.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const bn = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, s) => s(e, 0), Oe = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Uh = "arraybuffer";
function xa(t, ...e) {
  return e.reduce((s, n) => (t.hasOwnProperty(n) && (s[n] = t[n]), s), {});
}
const Hh = Oe.setTimeout, Wh = Oe.clearTimeout;
function _n(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = Hh.bind(Oe), t.clearTimeoutFn = Wh.bind(Oe)) : (t.setTimeoutFn = Oe.setTimeout.bind(Oe), t.clearTimeoutFn = Oe.clearTimeout.bind(Oe));
}
const Vh = 1.33;
function qh(t) {
  return typeof t == "string" ? Gh(t) : Math.ceil((t.byteLength || t.size) * Vh);
}
function Gh(t) {
  let e = 0, s = 0;
  for (let n = 0, r = t.length; n < r; n++)
    e = t.charCodeAt(n), e < 128 ? s += 1 : e < 2048 ? s += 2 : e < 55296 || e >= 57344 ? s += 3 : (n++, s += 4);
  return s;
}
function va() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function jh(t) {
  let e = "";
  for (let s in t)
    t.hasOwnProperty(s) && (e.length && (e += "&"), e += encodeURIComponent(s) + "=" + encodeURIComponent(t[s]));
  return e;
}
function zh(t) {
  let e = {}, s = t.split("&");
  for (let n = 0, r = s.length; n < r; n++) {
    let i = s[n].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return e;
}
class Kh extends Error {
  constructor(e, s, n) {
    super(e), this.description = s, this.context = n, this.type = "TransportError";
  }
}
class Dr extends ce {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, _n(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, s, n) {
    return super.emitReserved("error", new Kh(e, s, n)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const s = Ir(e, this.socket.binaryType);
    this.onPacket(s);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, s = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(s);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const s = jh(e);
    return s.length ? "?" + s : "";
  }
}
class Jh extends Dr {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const s = () => {
      this.readyState = "paused", e();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || s();
      })), this.writable || (n++, this.once("drain", function() {
        --n || s();
      }));
    } else
      s();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const s = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    Fh(e, this.socket.binaryType).forEach(s), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, Lh(e, (s) => {
      this.doWrite(s, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", s = this.query || {};
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = va()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(e, s);
  }
}
let ka = !1;
try {
  ka = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Qh = ka;
function Xh() {
}
class Yh extends Jh {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const s = location.protocol === "https:";
      let n = location.port;
      n || (n = s ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, s) {
    const n = this.request({
      method: "POST",
      data: e
    });
    n.on("success", s), n.on("error", (r, i) => {
      this.onError("xhr post error", r, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (s, n) => {
      this.onError("xhr poll error", s, n);
    }), this.pollXhr = e;
  }
}
class Ye extends ce {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, s, n) {
    super(), this.createRequest = e, _n(this, n), this._opts = n, this._method = n.method || "GET", this._uri = s, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const s = xa(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    s.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(s);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let r in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(r) && n.setRequestHeader(r, this._opts.extraHeaders[r]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
        var r;
        n.readyState === 3 && ((r = this._opts.cookieJar) === null || r === void 0 || r.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (r) {
      this.setTimeoutFn(() => {
        this._onError(r);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = Ye.requestsCount++, Ye.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = Xh, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ye.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
Ye.requestsCount = 0;
Ye.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Di);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in Oe ? "pagehide" : "unload";
    addEventListener(t, Di, !1);
  }
}
function Di() {
  for (let t in Ye.requests)
    Ye.requests.hasOwnProperty(t) && Ye.requests[t].abort();
}
const Zh = function() {
  const t = Pa({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class ef extends Yh {
  constructor(e) {
    super(e);
    const s = e && e.forceBase64;
    this.supportsBinary = Zh && !s;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new Ye(Pa, this.uri(), e);
  }
}
function Pa(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Qh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new Oe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Aa = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class tf extends Dr {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), s = this.opts.protocols, n = Aa ? {} : xa(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, s, n);
    } catch (r) {
      return this.emitReserved("error", r);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = s === e.length - 1;
      Or(n, this.supportsBinary, (i) => {
        try {
          this.doWrite(n, i);
        } catch {
        }
        r && bn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", s = this.query || {};
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = va()), this.supportsBinary || (s.b64 = 1), this.createUri(e, s);
  }
}
const Fn = Oe.WebSocket || Oe.MozWebSocket;
class sf extends tf {
  createSocket(e, s, n) {
    return Aa ? new Fn(e, s, n) : s ? new Fn(e, s) : new Fn(e);
  }
  doWrite(e, s) {
    this.ws.send(s);
  }
}
class nf extends Dr {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((e) => {
        const s = Bh(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(s).getReader(), r = Nh();
        r.readable.pipeTo(e.writable), this._writer = r.writable.getWriter();
        const i = () => {
          n.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), i());
          }).catch((a) => {
          });
        };
        i();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = s === e.length - 1;
      this._writer.write(n).then(() => {
        r && bn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const rf = {
  websocket: sf,
  webtransport: nf,
  polling: ef
}, of = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, af = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function tr(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, s = t.indexOf("["), n = t.indexOf("]");
  s != -1 && n != -1 && (t = t.substring(0, s) + t.substring(s, n).replace(/:/g, ";") + t.substring(n, t.length));
  let r = of.exec(t || ""), i = {}, o = 14;
  for (; o--; )
    i[af[o]] = r[o] || "";
  return s != -1 && n != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = lf(i, i.path), i.queryKey = cf(i, i.query), i;
}
function lf(t, e) {
  const s = /\/{2,9}/g, n = e.replace(s, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function cf(t, e) {
  const s = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, r, i) {
    r && (s[r] = i);
  }), s;
}
const sr = typeof addEventListener == "function" && typeof removeEventListener == "function", Bs = [];
sr && addEventListener("offline", () => {
  Bs.forEach((t) => t());
}, !1);
class _t extends ce {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, s) {
    if (super(), this.binaryType = Uh, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (s = e, e = null), e) {
      const n = tr(e);
      s.hostname = n.host, s.secure = n.protocol === "https" || n.protocol === "wss", s.port = n.port, n.query && (s.query = n.query);
    } else s.host && (s.hostname = tr(s.host).host);
    _n(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((n) => {
      const r = n.prototype.name;
      this.transports.push(r), this._transportsByName[r] = n;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = zh(this.opts.query)), sr && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Bs.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const s = Object.assign({}, this.opts.query);
    s.EIO = wa, s.transport = e, this.id && (s.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: s,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const e = this.opts.rememberUpgrade && _t.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const s = this.createTransport(e);
    s.open(), this.setTransport(s);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (s) => this._onClose("transport close", s));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", _t.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const s = new Error("server error");
          s.code = e.data, this._onError(s);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this._getWritablePackets();
      this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let s = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const r = this.writeBuffer[n].data;
      if (r && (s += qh(r)), n > 0 && s > this._maxPayload)
        return this.writeBuffer.slice(0, n);
      s += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const e = Date.now() > this._pingTimeoutTime;
    return e && (this._pingTimeoutTime = 0, bn(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), e;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(e, s, n) {
    return this._sendPacket("message", e, s, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, s, n) {
    return this._sendPacket("message", e, s, n), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(e, s, n, r) {
    if (typeof s == "function" && (r = s, s = void 0), typeof n == "function" && (r = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const i = {
      type: e,
      data: s,
      options: n
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, s = () => {
      this.off("upgrade", s), this.off("upgradeError", s), e();
    }, n = () => {
      this.once("upgrade", s), this.once("upgradeError", s);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : e();
    }) : this.upgrading ? n() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (_t.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, s) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), sr && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = Bs.indexOf(this._offlineEventListener);
        n !== -1 && Bs.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
_t.protocol = wa;
class uf extends _t {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(e) {
    let s = this.createTransport(e), n = !1;
    _t.priorWebsocketSuccess = !1;
    const r = () => {
      n || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (p) => {
        if (!n)
          if (p.type === "pong" && p.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            _t.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (c(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = s.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function i() {
      n || (n = !0, c(), s.close(), s = null);
    }
    const o = (p) => {
      const d = new Error("probe error: " + p);
      d.transport = s.name, i(), this.emitReserved("upgradeError", d);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function u(p) {
      s && p.name !== s.name && i();
    }
    const c = () => {
      s.removeListener("open", r), s.removeListener("error", o), s.removeListener("close", a), this.off("close", l), this.off("upgrading", u);
    };
    s.once("open", r), s.once("error", o), s.once("close", a), this.once("close", l), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      n || s.open();
    }, 200) : s.open();
  }
  onHandshake(e) {
    this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(e) {
    const s = [];
    for (let n = 0; n < e.length; n++)
      ~this.transports.indexOf(e[n]) && s.push(e[n]);
    return s;
  }
}
let hf = class extends uf {
  constructor(e, s = {}) {
    const n = typeof e == "object" ? e : s;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((r) => rf[r]).filter((r) => !!r)), super(e, n);
  }
};
function ff(t, e = "", s) {
  let n = t;
  s = s || typeof location < "u" && location, t == null && (t = s.protocol + "//" + s.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = s.protocol + t : t = s.host + t), /^(https?|wss?):\/\//.test(t) || (typeof s < "u" ? t = s.protocol + "//" + t : t = "https://" + t), n = tr(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + e, n.href = n.protocol + "://" + i + (s && s.port === n.port ? "" : ":" + n.port), n;
}
const pf = typeof ArrayBuffer == "function", df = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Ea = Object.prototype.toString, gf = typeof Blob == "function" || typeof Blob < "u" && Ea.call(Blob) === "[object BlobConstructor]", mf = typeof File == "function" || typeof File < "u" && Ea.call(File) === "[object FileConstructor]";
function Lr(t) {
  return pf && (t instanceof ArrayBuffer || df(t)) || gf && t instanceof Blob || mf && t instanceof File;
}
function $s(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let s = 0, n = t.length; s < n; s++)
      if ($s(t[s]))
        return !0;
    return !1;
  }
  if (Lr(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return $s(t.toJSON(), !0);
  for (const s in t)
    if (Object.prototype.hasOwnProperty.call(t, s) && $s(t[s]))
      return !0;
  return !1;
}
function bf(t) {
  const e = [], s = t.data, n = t;
  return n.data = nr(s, e), n.attachments = e.length, { packet: n, buffers: e };
}
function nr(t, e) {
  if (!t)
    return t;
  if (Lr(t)) {
    const s = { _placeholder: !0, num: e.length };
    return e.push(t), s;
  } else if (Array.isArray(t)) {
    const s = new Array(t.length);
    for (let n = 0; n < t.length; n++)
      s[n] = nr(t[n], e);
    return s;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const s = {};
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (s[n] = nr(t[n], e));
    return s;
  }
  return t;
}
function _f(t, e) {
  return t.data = rr(t.data, e), delete t.attachments, t;
}
function rr(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let s = 0; s < t.length; s++)
      t[s] = rr(t[s], e);
  else if (typeof t == "object")
    for (const s in t)
      Object.prototype.hasOwnProperty.call(t, s) && (t[s] = rr(t[s], e));
  return t;
}
const yf = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Cf = 5;
var B;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(B || (B = {}));
class Sf {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === B.EVENT || e.type === B.ACK) && $s(e) ? this.encodeAsBinary({
      type: e.type === B.EVENT ? B.BINARY_EVENT : B.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let s = "" + e.type;
    return (e.type === B.BINARY_EVENT || e.type === B.BINARY_ACK) && (s += e.attachments + "-"), e.nsp && e.nsp !== "/" && (s += e.nsp + ","), e.id != null && (s += e.id), e.data != null && (s += JSON.stringify(e.data, this.replacer)), s;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const s = bf(e), n = this.encodeAsString(s.packet), r = s.buffers;
    return r.unshift(n), r;
  }
}
function Li(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Fr extends ce {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let s;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      s = this.decodeString(e);
      const n = s.type === B.BINARY_EVENT;
      n || s.type === B.BINARY_ACK ? (s.type = n ? B.EVENT : B.ACK, this.reconstructor = new wf(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
    } else if (Lr(e) || e.base64)
      if (this.reconstructor)
        s = this.reconstructor.takeBinaryData(e), s && (this.reconstructor = null, super.emitReserved("decoded", s));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let s = 0;
    const n = {
      type: Number(e.charAt(0))
    };
    if (B[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === B.BINARY_EVENT || n.type === B.BINARY_ACK) {
      const i = s + 1;
      for (; e.charAt(++s) !== "-" && s != e.length; )
        ;
      const o = e.substring(i, s);
      if (o != Number(o) || e.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }
    if (e.charAt(s + 1) === "/") {
      const i = s + 1;
      for (; ++s && !(e.charAt(s) === "," || s === e.length); )
        ;
      n.nsp = e.substring(i, s);
    } else
      n.nsp = "/";
    const r = e.charAt(s + 1);
    if (r !== "" && Number(r) == r) {
      const i = s + 1;
      for (; ++s; ) {
        const o = e.charAt(s);
        if (o == null || Number(o) != o) {
          --s;
          break;
        }
        if (s === e.length)
          break;
      }
      n.id = Number(e.substring(i, s + 1));
    }
    if (e.charAt(++s)) {
      const i = this.tryParse(e.substr(s));
      if (Fr.isPayloadValid(n.type, i))
        n.data = i;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, s) {
    switch (e) {
      case B.CONNECT:
        return Li(s);
      case B.DISCONNECT:
        return s === void 0;
      case B.CONNECT_ERROR:
        return typeof s == "string" || Li(s);
      case B.EVENT:
      case B.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && yf.indexOf(s[0]) === -1);
      case B.ACK:
      case B.BINARY_ACK:
        return Array.isArray(s);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class wf {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const s = _f(this.reconPack, this.buffers);
      return this.finishedReconstruction(), s;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Fr,
  Encoder: Sf,
  get PacketType() {
    return B;
  },
  protocol: Cf
}, Symbol.toStringTag, { value: "Module" }));
function Fe(t, e, s) {
  return t.on(e, s), function() {
    t.off(e, s);
  };
}
const vf = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Ta extends ce {
  /**
   * `Socket` constructor.
   */
  constructor(e, s, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = s, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      Fe(e, "open", this.onopen.bind(this)),
      Fe(e, "packet", this.onpacket.bind(this)),
      Fe(e, "error", this.onerror.bind(this)),
      Fe(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...s) {
    var n, r, i;
    if (vf.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (s.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const o = {
      type: B.EVENT,
      data: s
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const c = this.ids++, p = s.pop();
      this._registerAckCallback(c, p), o.id = c;
    }
    const a = (r = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || r === void 0 ? void 0 : r.writable, l = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (l ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, s) {
    var n;
    const r = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (r === void 0) {
      this.acks[e] = s;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      s.call(this, new Error("operation has timed out"));
    }, r), o = (...a) => {
      this.io.clearTimeoutFn(i), s.apply(this, a);
    };
    o.withError = !0, this.acks[e] = o;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...s) {
    return new Promise((n, r) => {
      const i = (o, a) => o ? r(o) : n(a);
      i.withError = !0, s.push(i), this.emit(e, ...s);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let s;
    typeof e[e.length - 1] == "function" && (s = e.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((r, ...i) => n !== this._queue[0] ? void 0 : (r !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), s && s(r)) : (this._queue.shift(), s && s(null, ...i)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const s = this._queue[0];
    s.pending && !e || (s.pending = !0, s.tryCount++, this.flags = s.flags, this.emit.apply(this, s.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: B.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, s) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, s), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((n) => String(n.id) === e)) {
        const n = this.acks[e];
        delete this.acks[e], n.withError && n.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case B.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case B.EVENT:
        case B.BINARY_EVENT:
          this.onevent(e);
          break;
        case B.ACK:
        case B.BINARY_ACK:
          this.onack(e);
          break;
        case B.DISCONNECT:
          this.ondisconnect();
          break;
        case B.CONNECT_ERROR:
          this.destroy();
          const n = new Error(e.data.message);
          n.data = e.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const s = e.data || [];
    e.id != null && s.push(this.ack(e.id)), this.connected ? this.emitEvent(s) : this.receiveBuffer.push(Object.freeze(s));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const s = this._anyListeners.slice();
      for (const n of s)
        n.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const s = this;
    let n = !1;
    return function(...r) {
      n || (n = !0, s.packet({
        type: B.ACK,
        id: e,
        data: r
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const s = this.acks[e.id];
    typeof s == "function" && (delete this.acks[e.id], s.withError && e.data.unshift(null), s.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, s) {
    this.id = e, this.recovered = s && this._pid === s, this._pid = s, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: B.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const s = this._anyListeners;
      for (let n = 0; n < s.length; n++)
        if (e === s[n])
          return s.splice(n, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const s = this._anyOutgoingListeners;
      for (let n = 0; n < s.length; n++)
        if (e === s[n])
          return s.splice(n, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const s = this._anyOutgoingListeners.slice();
      for (const n of s)
        n.apply(this, e.data);
    }
  }
}
function qt(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
qt.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), s = Math.floor(e * this.jitter * t);
    t = (Math.floor(e * 10) & 1) == 0 ? t - s : t + s;
  }
  return Math.min(t, this.max) | 0;
};
qt.prototype.reset = function() {
  this.attempts = 0;
};
qt.prototype.setMin = function(t) {
  this.ms = t;
};
qt.prototype.setMax = function(t) {
  this.max = t;
};
qt.prototype.setJitter = function(t) {
  this.jitter = t;
};
class ir extends ce {
  constructor(e, s) {
    var n;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (s = e, e = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, _n(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((n = s.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new qt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = e;
    const r = s.parser || xf;
    this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this._autoConnect = s.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var s;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (s = this.backoff) === null || s === void 0 || s.setMin(e), this);
  }
  randomizationFactor(e) {
    var s;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (s = this.backoff) === null || s === void 0 || s.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var s;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (s = this.backoff) === null || s === void 0 || s.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new hf(this.uri, this.opts);
    const s = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const r = Fe(s, "open", function() {
      n.onopen(), e && e();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = Fe(s, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        r(), i(new Error("timeout")), s.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(r), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      Fe(e, "ping", this.onping.bind(this)),
      Fe(e, "data", this.ondata.bind(this)),
      Fe(e, "error", this.onerror.bind(this)),
      Fe(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      Fe(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (s) {
      this.onclose("parse error", s);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    bn(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, s) {
    let n = this.nsps[e];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Ta(this, e, s), this.nsps[e] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const s = Object.keys(this.nsps);
    for (const n of s)
      if (this.nsps[n].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const s = this.encoder.encode(e);
    for (let n = 0; n < s.length; n++)
      this.engine.write(s[n], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(e, s) {
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, s), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const s = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((r) => {
          r ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", r)) : e.onreconnect();
        }));
      }, s);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Zt = {};
function Us(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const s = ff(t, e.path || "/socket.io"), n = s.source, r = s.id, i = s.path, o = Zt[r] && i in Zt[r].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let l;
  return a ? l = new ir(n, e) : (Zt[r] || (Zt[r] = new ir(n, e)), l = Zt[r]), s.query && !e.query && (e.query = s.queryKey), l.socket(s.path, e);
}
Object.assign(Us, {
  Manager: ir,
  Socket: Ta,
  io: Us,
  connect: Us
});
const Ms = "https://api.chatbot.junngla.com";
class kf {
  constructor(e) {
    J(this, "socket", null);
    this.config = e;
  }
  async loadChatHistory(e) {
    const s = await fetch(`${Ms}/openai/${e}/chat`, {
      headers: {
        "Content-Type": "application/json",
        ...this.config.apikey && { "X-Api-Key": this.config.apikey }
      }
    });
    if (!s.ok)
      throw new Error("Error loading chat history");
    return s.json();
  }
  async sendChatMessage(e, s, n) {
    const r = await fetch(`${Ms}/openai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.config.apikey && { "X-Api-Key": this.config.apikey },
        ...n && { "X-Uuid-User": n }
      },
      body: JSON.stringify({
        message: e,
        thread_id: s
      })
    });
    if (!r.ok)
      throw new Error("Error sending chat message");
    return r.json();
  }
  async checkHealth() {
    const e = await fetch(`${Ms}/check/health`, {
      headers: {
        ...this.config.apikey && { "X-Api-Key": this.config.apikey }
      }
    });
    if (!e.ok)
      throw new Error("Error checking health");
    return e.json();
  }
  createChatSocket(e, s) {
    return this.socket && this.socket.disconnect(), this.socket = Us(Ms, {
      query: { threadId: e, apiKey: this.config.apikey },
      transports: ["websocket"],
      extraHeaders: {
        Origin: window.location.origin
      }
    }), this.socket.on("auth_error", (n) => {
      console.error("Error al conectar socket:", n), s && s("Ocurrio un error al autenticar el cliente");
    }), this.socket;
  }
  closeSocket() {
    this.socket && (this.socket.disconnect(), this.socket = null);
  }
}
const le = {
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
}, Ra = {
  dataApiKey: {
    type: String,
    required: !0
  },
  dataUuidUser: {
    type: String,
    default: le.dataUuidUser
  },
  defaultMessage: {
    type: String,
    default: le.defaultMessage
  },
  headerName: {
    type: String,
    default: le.headerName
  },
  headerIcon: {
    type: String,
    default: le.headerIcon
  },
  headerBackgroundColor: {
    type: String,
    default: le.headerBackgroundColor
  },
  headerTextColor: {
    type: String,
    default: le.headerTextColor
  },
  userMessageColor: {
    type: String,
    default: le.userMessageColor
  },
  assistantMessageColor: {
    type: String,
    default: le.assistantMessageColor
  },
  userMessageBackground: {
    type: String,
    default: le.userMessageBackground
  },
  assistantMessageBackground: {
    type: String,
    default: le.assistantMessageBackground
  },
  closeBtnColor: {
    type: String,
    default: le.closeBtnColor
  },
  buttonBackgroundColor: {
    type: String,
    default: le.buttonBackgroundColor
  },
  buttonTextColor: {
    type: String,
    default: le.buttonTextColor
  },
  chatbotWidth: {
    type: String,
    default: le.chatbotWidth
  },
  chatbotHeight: {
    type: String,
    default: le.chatbotHeight
  },
  chatMode: {
    type: String,
    default: le.chatMode
  }
};
function nt(t) {
  return /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(t);
}
function Os(t) {
  return typeof t == "string" && t.trim() !== "";
}
function Fi(t) {
  return typeof t == "string" && /^\d+(\.\d+)?$/.test(t);
}
function Pf(t) {
  if (typeof t != "string") return !1;
  try {
    return new URL(t), !0;
  } catch {
    return !1;
  }
}
function Ni(t) {
  const e = {
    ...le,
    ...t
  };
  return Os(t.dataApiKey) || (console.error(
    "Implementación fallida: 'dataApiKey' es requerida y debe ser una cadena no vacía. Se usará el valor por defecto."
  ), e.dataApiKey = le.dataApiKey), [
    {
      key: "dataUuidUser",
      validator: Os,
      error: "'data-uuid-user' es inválida."
    },
    {
      key: "defaultMessage",
      validator: Os,
      error: "'default-message' es inválida."
    },
    {
      key: "headerName",
      validator: Os,
      error: "'header-name' es inválida."
    },
    {
      key: "headerIcon",
      validator: Pf,
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
      validator: Fi,
      error: "'chatbot-width' debe ser una cadena numérica."
    },
    {
      key: "chatbotHeight",
      validator: Fi,
      error: "'chatbot-height' debe ser una cadena numérica."
    },
    {
      key: "chatMode",
      validator: (n) => n === "public" || n === "private",
      error: "'chat-mode' debe ser 'public' o 'private'."
    }
  ].forEach(({ key: n, validator: r, error: i }) => {
    t[n] !== void 0 && t[n] !== le[n] && (r(t[n]) || (console.error(
      `Implementación fallida: ${i} Se usará el valor por defecto para '${n}'.`
    ), e[n] = le[n]));
  }), e;
}
const Af = /* @__PURE__ */ Ot({
  name: "ChatBot",
  components: { ChatWindow: kh, ChatToggle: Rh },
  props: Ra,
  setup(t) {
    const e = Me(Ni(t)), s = Me(t.chatMode || "public"), n = Me(t.dataUuidUser || null);
    gc(() => {
      const { chatMode: S, ...T } = t;
      e.value = {
        ...e.value,
        ...Ni(T)
      };
    });
    const r = { apikey: e.value.dataApiKey };
    Oo("chatConfig", r);
    const i = new kf(r), o = Xn(() => `${s.value}_threadId`), a = Me(localStorage.getItem(o.value)), l = {
      isOpen: Me(!1),
      userInput: Me(""),
      messages: Me([]),
      threadId: a,
      sending: Me(!1),
      chatStatus: Me(""),
      showChatBot: Me(!1)
    }, u = Xo(), c = Xn(
      () => l.sending.value && l.chatStatus.value ? `Estado: ${l.chatStatus.value}` : "Escribe tu mensaje..."
    ), p = () => {
      mr(() => {
        var G, X;
        const S = (X = (G = u == null ? void 0 : u.vnode) == null ? void 0 : G.el) == null ? void 0 : X.getRootNode();
        if (!S) return;
        const T = S.querySelector(".chat-messages");
        T && (T.scrollTop = T.scrollHeight);
      });
    };
    Qe(l.messages, p, { deep: !0 });
    const d = (S, T) => {
      l.messages.value.push({ text: S, from: T });
    }, m = async () => {
      if (l.threadId.value)
        try {
          (await i.loadChatHistory(l.threadId.value)).forEach((T) => {
            var se, F;
            const G = ((F = (se = T == null ? void 0 : T.content[0]) == null ? void 0 : se.text) == null ? void 0 : F.value) || "", X = (T == null ? void 0 : T.role) || "assistant";
            G && d(G, X);
          });
        } catch {
          d("Error al cargar historial.", "assistantError");
        }
      else
        d(e.value.defaultMessage, "assistant");
    }, A = () => {
      i.closeSocket(), L = null;
    };
    let v = null, L = null;
    const N = (S) => {
      i.closeSocket(), v = i.createChatSocket(S, (T) => {
        d(T, "assistantError"), l.sending.value = !1;
      }), v.on("connect", () => {
        console.log("Socket conectado", v == null ? void 0 : v.id);
      }), v.on("chat-event", (T) => {
        T.word && (L === null ? (d(T.word, "assistant"), L = l.messages.value.length - 1) : l.messages.value[L].text += T.word), l.chatStatus.value = T.status, ["completed"].includes(T.status) && (l.sending.value = !1, L = null, A()), ["failed"].includes(T.status) && (d(T.error || "Lo lamentamos, ocurrió un error...", "assistantError"), l.sending.value = !1, L = null, A());
      }), v.on("disconnect", () => {
        console.log("Socket desconectado");
      });
    }, U = async () => {
      if (!(!l.userInput.value.trim() || l.sending.value)) {
        d(l.userInput.value, "user"), l.sending.value = !0;
        try {
          const { threadId: S } = await i.sendChatMessage(
            l.userInput.value,
            l.threadId.value,
            n.value
          );
          l.threadId.value = S, localStorage.setItem(o.value, S), N(S);
        } catch {
          d("Error al enviar mensaje.", "assistantError"), l.sending.value = !1;
        }
        l.userInput.value = "";
      }
    }, W = async () => {
      l.isOpen.value = !l.isOpen.value, l.isOpen.value && !l.messages.value.length ? (l.sending.value = !0, await m(), l.sending.value = !1) : p();
    };
    return Qe(
      () => t.chatMode,
      async (S, T) => {
        if (S && S !== T && (S === "public" || S === "private")) {
          A(), s.value = S;
          const G = localStorage.getItem(`${S}_threadId`);
          l.threadId.value = G || null, l.messages.value = [], await m();
        }
      }
    ), Qe(
      () => t.dataUuidUser,
      (S, T) => {
        S && S !== T && (n.value = S);
      }
    ), _r(async () => {
      if (s.value === "private" && !n.value) {
        console.error("[ChatBot Error] El modo 'private' requiere que se proporcione 'dataUuidUser'.");
        return;
      }
      try {
        const { success: S } = await i.checkHealth();
        l.showChatBot.value = S;
      } catch {
        l.showChatBot.value = !1;
      }
    }), {
      ...l,
      sendMessage: U,
      toggleChat: W,
      placeholderText: c,
      ...e.value
    };
  }
}), Ef = ".chat-slide-enter-active[data-v-a6093eef],.chat-slide-leave-active[data-v-a6093eef]{transition:transform .4s ease,opacity .4s ease}.chat-slide-enter-from[data-v-a6093eef]{transform:translate(100%);opacity:0}.chat-slide-enter-to[data-v-a6093eef],.chat-slide-leave-from[data-v-a6093eef]{transform:translate(0);opacity:1}.chat-slide-leave-to[data-v-a6093eef]{transform:translate(100%);opacity:0}";
function Tf(t, e, s, n, r, i) {
  const o = as("ChatWindow"), a = as("ChatToggle");
  return qn((Ue(), lt("div", null, [
    he(jc, { name: "chat-slide" }, {
      default: _o(() => [
        t.isOpen ? (Ue(), Ko(o, {
          key: 0,
          messages: t.messages,
          userInput: t.userInput,
          "onUpdate:userInput": e[0] || (e[0] = (l) => t.userInput = l),
          sending: t.sending,
          placeholder: t.placeholderText,
          "header-name": t.headerName,
          "header-icon": t.headerIcon,
          "header-background-color": t.headerBackgroundColor,
          "header-text-color": t.headerTextColor,
          "close-btn-color": t.closeBtnColor,
          "user-message-color": t.userMessageColor,
          "user-message-background": t.userMessageBackground,
          "assistant-message-color": t.assistantMessageColor,
          "assistant-message-background": t.assistantMessageBackground,
          "button-background-color": t.buttonBackgroundColor,
          "button-text-color": t.buttonTextColor,
          "chatbot-width": t.chatbotWidth,
          "chatbot-height": t.chatbotHeight,
          onSendMessage: t.sendMessage,
          onToggleChat: t.toggleChat
        }, null, 8, ["messages", "userInput", "sending", "placeholder", "header-name", "header-icon", "header-background-color", "header-text-color", "close-btn-color", "user-message-color", "user-message-background", "assistant-message-color", "assistant-message-background", "button-background-color", "button-text-color", "chatbot-width", "chatbot-height", "onSendMessage", "onToggleChat"])) : Qo("", !0)
      ]),
      _: 1
    }),
    qn(he(a, {
      onToggleChat: t.toggleChat,
      "header-icon": t.headerIcon
    }, null, 8, ["onToggleChat", "header-icon"]), [
      [fi, !t.isOpen]
    ])
  ], 512)), [
    [fi, t.showChatBot]
  ]);
}
const Ma = /* @__PURE__ */ Vt(Af, [["render", Tf], ["styles", [Ef]], ["__scopeId", "data-v-a6093eef"]]);
Ma.props = Ra;
const Rf = /* @__PURE__ */ hu(Ma, { shadowRoot: !0 });
customElements.define("chat-bot", Rf);
