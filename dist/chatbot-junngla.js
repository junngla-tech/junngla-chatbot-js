var gl = Object.defineProperty;
var _l = (e, t, n) => t in e ? gl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var q = (e, t, n) => _l(e, typeof t != "symbol" ? t + "" : t, n);
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
const X = {}, Ft = [], $e = () => {
}, ml = () => !1, ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cr = (e) => e.startsWith("onUpdate:"), ae = Object.assign, ur = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, bl = Object.prototype.hasOwnProperty, G = (e, t) => bl.call(e, t), M = Array.isArray, Gt = (e) => rs(e) === "[object Map]", Mi = (e) => rs(e) === "[object Set]", D = (e) => typeof e == "function", ie = (e) => typeof e == "string", Tt = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", Pi = (e) => (Q(e) || D(e)) && D(e.then) && D(e.catch), Bi = Object.prototype.toString, rs = (e) => Bi.call(e), xl = (e) => rs(e).slice(8, -1), is = (e) => rs(e) === "[object Object]", fr = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ln = /* @__PURE__ */ ar(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Tl = /-(\w)/g, ye = os(
  (e) => e.replace(Tl, (t, n) => n ? n.toUpperCase() : "")
), yl = /\B([A-Z])/g, Ae = os(
  (e) => e.replace(yl, "-$1").toLowerCase()
), ls = os((e) => e.charAt(0).toUpperCase() + e.slice(1)), Es = os(
  (e) => e ? `on${ls(e)}` : ""
), mt = (e, t) => !Object.is(e, t), $n = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Hi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ds = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ls = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Lr;
const as = () => Lr || (Lr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ot(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ie(s) ? Sl(s) : ot(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ie(e) || Q(e))
    return e;
}
const El = /;(?![^(]*\))/g, wl = /:([^]+)/, kl = /\/\*[^]*?\*\//g;
function Sl(e) {
  const t = {};
  return e.replace(kl, "").split(El).forEach((n) => {
    if (n) {
      const s = n.split(wl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function cs(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const s = cs(e[n]);
      s && (t += s + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const vl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rl = /* @__PURE__ */ ar(vl);
function Di(e) {
  return !!e || e === "";
}
const Li = (e) => !!(e && e.__v_isRef === !0), $i = (e) => ie(e) ? e : e == null ? "" : M(e) || Q(e) && (e.toString === Bi || !D(e.toString)) ? Li(e) ? $i(e.value) : JSON.stringify(e, Ui, 2) : String(e), Ui = (e, t) => Li(t) ? Ui(e, t.value) : Gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[ws(s, i) + " =>"] = r, n),
    {}
  )
} : Mi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ws(n))
} : Tt(t) ? ws(t) : Q(t) && !M(t) && !is(t) ? String(t) : t, ws = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Cl = { VITE_API_CHATBOT: "https://api.chatbot.junngla.com", GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/10.8.2 node/v20.19.0 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "junngla-tech", GRADLE_HOME: "/usr/share/gradle-8.13", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.0.13004108", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "91486299", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", SYSTEMD_EXEC_PID: "710", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.13/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250323.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.7/x64", JOURNAL_STREAM: "8:6024", GITHUB_WORKFLOW: "Build Docker Images", _: "/opt/hostedtoolcache/node/20.19.0/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", npm_config_npm_version: "10.8.2", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", STATS_D: "false", GITHUB_RUN_ID: "14131257675", STATS_VMFE: "true", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "tag", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "bb3aa63e3e2ee21940ad00982bf33df7f3be2ba2", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "junngla-tech/junngla-chatbot-frontend-web/.github/workflows/docker-image.yml@refs/tags/1.0.2", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/20.19.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_2058bd4f-3f23-4a77-8d01-34c6f52aca0c", INVOCATION_ID: "c914e83ab6a84729bde5945a91057e3c", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", NODE: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", npm_package_name: "junngla-chatbot-frontend-web", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "CamiloMH", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 19", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "1.0.2", GITHUB_REPOSITORY: "junngla-tech/junngla-chatbot-frontend-web", STATS_D_D: "false", npm_lifecycle_script: "vue-tsc -b && vite build", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "955357351", GITHUB_ACTIONS: "true", STATS_PIP: "false", npm_package_version: "1.0.2", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "bb3aa63e3e2ee21940ad00982bf33df7f3be2ba2", GITHUB_RUN_ATTEMPT: "1", STATS_D_TC: "true", GITHUB_REF: "refs/tags/1.0.2", GITHUB_ACTOR: "CamiloMH", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", npm_config_globalconfig: "/opt/hostedtoolcache/node/20.19.0/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", GITHUB_ACTOR_ID: "28745682", RUNNER_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web", npm_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", npm_config_global_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.2.12479018", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", STATS_EXTP: "https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", INIT_CWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", EDITOR: "vi", NODE_ENV: "production" };
let Ie;
class Il {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ie, !t && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(
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
      const n = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ie = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ie = this.parent;
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
function Al() {
  return Ie;
}
let J;
const ks = /* @__PURE__ */ new WeakSet();
class ji {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ks.has(this) && (ks.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $r(this), Vi(this);
    const t = J, n = Ue;
    J = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      Wi(this), J = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        pr(t);
      this.deps = this.depsTail = void 0, $r(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ks.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $s(this) && this.run();
  }
  get dirty() {
    return $s(this);
  }
}
let Fi = 0, an, cn;
function Gi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = cn, cn = e;
    return;
  }
  e.next = an, an = e;
}
function hr() {
  Fi++;
}
function dr() {
  if (--Fi > 0)
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
function Vi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Wi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), pr(s), Ol(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function $s(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (zi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function zi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xn))
    return;
  e.globalVersion = xn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !$s(e)) {
    e.flags &= -3;
    return;
  }
  const n = J, s = Ue;
  J = e, Ue = !0;
  try {
    Vi(e);
    const r = e.fn(e._value);
    (t.version === 0 || mt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    J = n, Ue = s, Wi(e), e.flags &= -3;
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
function Ol(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const Ki = [];
function at() {
  Ki.push(Ue), Ue = !1;
}
function ct() {
  const e = Ki.pop();
  Ue = e === void 0 ? !0 : e;
}
function $r(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = J;
    J = void 0;
    try {
      t();
    } finally {
      J = n;
    }
  }
}
let xn = 0;
class Nl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class gr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!J || !Ue || J === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== J)
      n = this.activeLink = new Nl(J, this), J.deps ? (n.prevDep = J.depsTail, J.depsTail.nextDep = n, J.depsTail = n) : J.deps = J.depsTail = n, qi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = J.depsTail, n.nextDep = void 0, J.depsTail.nextDep = n, J.depsTail = n, J.deps === n && (J.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, xn++, this.notify(t);
  }
  notify(t) {
    hr();
    try {
      Cl.NODE_ENV;
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      dr();
    }
  }
}
function qi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        qi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Us = /* @__PURE__ */ new WeakMap(), At = Symbol(
  ""
), js = Symbol(
  ""
), Tn = Symbol(
  ""
);
function _e(e, t, n) {
  if (Ue && J) {
    let s = Us.get(e);
    s || Us.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new gr()), r.map = s, r.key = n), r.track();
  }
}
function rt(e, t, n, s, r, i) {
  const o = Us.get(e);
  if (!o) {
    xn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (hr(), t === "clear")
    o.forEach(l);
  else {
    const a = M(e), u = a && fr(n);
    if (a && n === "length") {
      const c = Number(s);
      o.forEach((d, p) => {
        (p === "length" || p === Tn || !Tt(p) && p >= c) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(Tn)), t) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(At)), Gt(e) && l(o.get(js)));
          break;
        case "delete":
          a || (l(o.get(At)), Gt(e) && l(o.get(js)));
          break;
        case "set":
          Gt(e) && l(o.get(At));
          break;
      }
  }
  dr();
}
function Bt(e) {
  const t = j(e);
  return t === e ? t : (_e(t, "iterate", Tn), Be(e) ? t : t.map(me));
}
function us(e) {
  return _e(e = j(e), "iterate", Tn), e;
}
const Ml = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ss(this, Symbol.iterator, me);
  },
  concat(...e) {
    return Bt(this).concat(
      ...e.map((t) => M(t) ? Bt(t) : t)
    );
  },
  entries() {
    return Ss(this, "entries", (e) => (e[1] = me(e[1]), e));
  },
  every(e, t) {
    return Je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Je(this, "filter", e, t, (n) => n.map(me), arguments);
  },
  find(e, t) {
    return Je(this, "find", e, t, me, arguments);
  },
  findIndex(e, t) {
    return Je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Je(this, "findLast", e, t, me, arguments);
  },
  findLastIndex(e, t) {
    return Je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return vs(this, "includes", e);
  },
  indexOf(...e) {
    return vs(this, "indexOf", e);
  },
  join(e) {
    return Bt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return vs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qt(this, "pop");
  },
  push(...e) {
    return Qt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ur(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ur(this, "reduceRight", e, t);
  },
  shift() {
    return Qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qt(this, "splice", e);
  },
  toReversed() {
    return Bt(this).toReversed();
  },
  toSorted(e) {
    return Bt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Bt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qt(this, "unshift", e);
  },
  values() {
    return Ss(this, "values", me);
  }
};
function Ss(e, t, n) {
  const s = us(e), r = s[t]();
  return s !== e && !Be(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Pl = Array.prototype;
function Je(e, t, n, s, r, i) {
  const o = us(e), l = o !== e && !Be(e), a = o[t];
  if (a !== Pl[t]) {
    const d = a.apply(e, i);
    return l ? me(d) : d;
  }
  let u = n;
  o !== e && (l ? u = function(d, p) {
    return n.call(this, me(d), p, e);
  } : n.length > 2 && (u = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const c = a.call(o, u, s);
  return l && r ? r(c) : c;
}
function Ur(e, t, n, s) {
  const r = us(e);
  let i = n;
  return r !== e && (Be(e) ? n.length > 3 && (i = function(o, l, a) {
    return n.call(this, o, l, a, e);
  }) : i = function(o, l, a) {
    return n.call(this, o, me(l), a, e);
  }), r[t](i, ...s);
}
function vs(e, t, n) {
  const s = j(e);
  _e(s, "iterate", Tn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && mr(n[0]) ? (n[0] = j(n[0]), s[t](...n)) : r;
}
function Qt(e, t, n = []) {
  at(), hr();
  const s = j(e)[t].apply(e, n);
  return dr(), ct(), s;
}
const Bl = /* @__PURE__ */ ar("__proto__,__v_isRef,__isVue"), Xi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Tt)
);
function Hl(e) {
  Tt(e) || (e = String(e));
  const t = j(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Yi {
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
      return s === (r ? i ? no : to : i ? eo : Qi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = M(t);
    if (!r) {
      let a;
      if (o && (a = Ml[n]))
        return a;
      if (n === "hasOwnProperty")
        return Hl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      pe(t) ? t : s
    );
    return (Tt(n) ? Xi.has(n) : Bl(n)) || (r || _e(t, "get", n), i) ? l : pe(l) ? o && fr(n) ? l : l.value : Q(l) ? r ? so(l) : _r(l) : l;
  }
}
class Zi extends Yi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = Ot(i);
      if (!Be(s) && !Ot(s) && (i = j(i), s = j(s)), !M(t) && pe(i) && !pe(s))
        return a ? !1 : (i.value = s, !0);
    }
    const o = M(t) && fr(n) ? Number(n) < t.length : G(t, n), l = Reflect.set(
      t,
      n,
      s,
      pe(t) ? t : r
    );
    return t === j(r) && (o ? mt(s, i) && rt(t, "set", n, s) : rt(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = G(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && rt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Tt(n) || !Xi.has(n)) && _e(t, "has", n), s;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      M(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class Ji extends Yi {
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
const Dl = /* @__PURE__ */ new Zi(), Ll = /* @__PURE__ */ new Ji(), $l = /* @__PURE__ */ new Zi(!0), Ul = /* @__PURE__ */ new Ji(!0), Fs = (e) => e, An = (e) => Reflect.getPrototypeOf(e);
function jl(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = j(r), o = Gt(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, u = r[e](...s), c = n ? Fs : t ? Gs : me;
    return !t && _e(
      i,
      "iterate",
      a ? js : At
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
function On(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Fl(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = j(i), l = j(r);
      e || (mt(r, l) && _e(o, "get", r), _e(o, "get", l));
      const { has: a } = An(o), u = t ? Fs : e ? Gs : me;
      if (a.call(o, r))
        return u(i.get(r));
      if (a.call(o, l))
        return u(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && _e(j(r), "iterate", At), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = j(i), l = j(r);
      return e || (mt(r, l) && _e(o, "has", r), _e(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = j(l), u = t ? Fs : e ? Gs : me;
      return !e && _e(a, "iterate", At), l.forEach((c, d) => r.call(i, u(c), u(d), o));
    }
  };
  return ae(
    n,
    e ? {
      add: On("add"),
      set: On("set"),
      delete: On("delete"),
      clear: On("clear")
    } : {
      add(r) {
        !t && !Be(r) && !Ot(r) && (r = j(r));
        const i = j(this);
        return An(i).has.call(i, r) || (i.add(r), rt(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Be(i) && !Ot(i) && (i = j(i));
        const o = j(this), { has: l, get: a } = An(o);
        let u = l.call(o, r);
        u || (r = j(r), u = l.call(o, r));
        const c = a.call(o, r);
        return o.set(r, i), u ? mt(i, c) && rt(o, "set", r, i) : rt(o, "add", r, i), this;
      },
      delete(r) {
        const i = j(this), { has: o, get: l } = An(i);
        let a = o.call(i, r);
        a || (r = j(r), a = o.call(i, r)), l && l.call(i, r);
        const u = i.delete(r);
        return a && rt(i, "delete", r, void 0), u;
      },
      clear() {
        const r = j(this), i = r.size !== 0, o = r.clear();
        return i && rt(
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
    n[r] = jl(r, e, t);
  }), n;
}
function fs(e, t) {
  const n = Fl(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    G(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Gl = {
  get: /* @__PURE__ */ fs(!1, !1)
}, Vl = {
  get: /* @__PURE__ */ fs(!1, !0)
}, Wl = {
  get: /* @__PURE__ */ fs(!0, !1)
}, zl = {
  get: /* @__PURE__ */ fs(!0, !0)
}, Qi = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), to = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap();
function Kl(e) {
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
function ql(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Kl(xl(e));
}
function _r(e) {
  return Ot(e) ? e : hs(
    e,
    !1,
    Dl,
    Gl,
    Qi
  );
}
function Xl(e) {
  return hs(
    e,
    !1,
    $l,
    Vl,
    eo
  );
}
function so(e) {
  return hs(
    e,
    !0,
    Ll,
    Wl,
    to
  );
}
function Nn(e) {
  return hs(
    e,
    !0,
    Ul,
    zl,
    no
  );
}
function hs(e, t, n, s, r) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = ql(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
function Vt(e) {
  return Ot(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ot(e) {
  return !!(e && e.__v_isReadonly);
}
function Be(e) {
  return !!(e && e.__v_isShallow);
}
function mr(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Yl(e) {
  return !G(e, "__v_skip") && Object.isExtensible(e) && Hi(e, "__v_skip", !0), e;
}
const me = (e) => Q(e) ? _r(e) : e, Gs = (e) => Q(e) ? so(e) : e;
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function nt(e) {
  return Zl(e, !1);
}
function Zl(e, t) {
  return pe(e) ? e : new Jl(e, t);
}
class Jl {
  constructor(t, n) {
    this.dep = new gr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : j(t), this._value = n ? t : me(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Be(t) || Ot(t);
    t = s ? t : j(t), mt(t, n) && (this._rawValue = t, this._value = s ? t : me(t), this.dep.trigger());
  }
}
function ro(e) {
  return pe(e) ? e.value : e;
}
const Ql = {
  get: (e, t, n) => t === "__v_raw" ? e : ro(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return pe(r) && !pe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function io(e) {
  return Vt(e) ? e : new Proxy(e, Ql);
}
class ea {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new gr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    J !== this)
      return Gi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return zi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ta(e, t, n = !1) {
  let s, r;
  return D(e) ? s = e : (s = e.get, r = e.set), new ea(s, r, n);
}
const Mn = {}, zn = /* @__PURE__ */ new WeakMap();
let Rt;
function na(e, t = !1, n = Rt) {
  if (n) {
    let s = zn.get(n);
    s || zn.set(n, s = []), s.push(e);
  }
}
function sa(e, t, n = X) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, u = (R) => r ? R : Be(R) || r === !1 || r === 0 ? it(R, 1) : it(R);
  let c, d, p, _, S = !1, b = !1;
  if (pe(e) ? (d = () => e.value, S = Be(e)) : Vt(e) ? (d = () => u(e), S = !0) : M(e) ? (b = !0, S = e.some((R) => Vt(R) || Be(R)), d = () => e.map((R) => {
    if (pe(R))
      return R.value;
    if (Vt(R))
      return u(R);
    if (D(R))
      return a ? a(R, 2) : R();
  })) : D(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (p) {
      at();
      try {
        p();
      } finally {
        ct();
      }
    }
    const R = Rt;
    Rt = c;
    try {
      return a ? a(e, 3, [_]) : e(_);
    } finally {
      Rt = R;
    }
  } : d = $e, t && r) {
    const R = d, F = r === !0 ? 1 / 0 : r;
    d = () => it(R(), F);
  }
  const A = Al(), I = () => {
    c.stop(), A && A.active && ur(A.effects, c);
  };
  if (i && t) {
    const R = t;
    t = (...F) => {
      R(...F), I();
    };
  }
  let N = b ? new Array(e.length).fill(Mn) : Mn;
  const B = (R) => {
    if (!(!(c.flags & 1) || !c.dirty && !R))
      if (t) {
        const F = c.run();
        if (r || S || (b ? F.some((ee, oe) => mt(ee, N[oe])) : mt(F, N))) {
          p && p();
          const ee = Rt;
          Rt = c;
          try {
            const oe = [
              F,
              // pass undefined as the old value when it's changed for the first time
              N === Mn ? void 0 : b && N[0] === Mn ? [] : N,
              _
            ];
            a ? a(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            ), N = F;
          } finally {
            Rt = ee;
          }
        }
      } else
        c.run();
  };
  return l && l(B), c = new ji(d), c.scheduler = o ? () => o(B, !1) : B, _ = (R) => na(R, !1, c), p = c.onStop = () => {
    const R = zn.get(c);
    if (R) {
      if (a)
        a(R, 4);
      else
        for (const F of R) F();
      zn.delete(c);
    }
  }, t ? s ? B(!0) : N = c.run() : o ? o(B.bind(null, !0), !0) : c.run(), I.pause = c.pause.bind(c), I.resume = c.resume.bind(c), I.stop = I, I;
}
function it(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, pe(e))
    it(e.value, t, n);
  else if (M(e))
    for (let s = 0; s < e.length; s++)
      it(e[s], t, n);
  else if (Mi(e) || Gt(e))
    e.forEach((s) => {
      it(s, t, n);
    });
  else if (is(e)) {
    for (const s in e)
      it(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && it(e[s], t, n);
  }
  return e;
}
var ht = { VITE_API_CHATBOT: "https://api.chatbot.junngla.com", GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/10.8.2 node/v20.19.0 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "junngla-tech", GRADLE_HOME: "/usr/share/gradle-8.13", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.0.13004108", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "91486299", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", SYSTEMD_EXEC_PID: "710", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.13/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250323.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.7/x64", JOURNAL_STREAM: "8:6024", GITHUB_WORKFLOW: "Build Docker Images", _: "/opt/hostedtoolcache/node/20.19.0/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", npm_config_npm_version: "10.8.2", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", STATS_D: "false", GITHUB_RUN_ID: "14131257675", STATS_VMFE: "true", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "tag", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "bb3aa63e3e2ee21940ad00982bf33df7f3be2ba2", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "junngla-tech/junngla-chatbot-frontend-web/.github/workflows/docker-image.yml@refs/tags/1.0.2", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/20.19.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_2058bd4f-3f23-4a77-8d01-34c6f52aca0c", INVOCATION_ID: "c914e83ab6a84729bde5945a91057e3c", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", NODE: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", npm_package_name: "junngla-chatbot-frontend-web", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "CamiloMH", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 19", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "1.0.2", GITHUB_REPOSITORY: "junngla-tech/junngla-chatbot-frontend-web", STATS_D_D: "false", npm_lifecycle_script: "vue-tsc -b && vite build", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "955357351", GITHUB_ACTIONS: "true", STATS_PIP: "false", npm_package_version: "1.0.2", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "bb3aa63e3e2ee21940ad00982bf33df7f3be2ba2", GITHUB_RUN_ATTEMPT: "1", STATS_D_TC: "true", GITHUB_REF: "refs/tags/1.0.2", GITHUB_ACTOR: "CamiloMH", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", npm_config_globalconfig: "/opt/hostedtoolcache/node/20.19.0/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", GITHUB_ACTOR_ID: "28745682", RUNNER_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web", npm_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", npm_config_global_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.2.12479018", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", STATS_EXTP: "https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_e0917f85-ce7e-493e-b55c-ec1f6757d1f8", INIT_CWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", EDITOR: "vi", NODE_ENV: "production" };
const un = [];
let Rs = !1;
function ra(e, ...t) {
  if (Rs) return;
  Rs = !0, at();
  const n = un.length ? un[un.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = ia();
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
          ({ vnode: i }) => `at <${Yo(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...oa(r)), console.warn(...i);
  }
  ct(), Rs = !1;
}
function ia() {
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
function oa(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...la(n));
  }), t;
}
function la({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Yo(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [r, ...aa(e.props), i] : [r + i];
}
function aa(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...oo(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function oo(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : pe(t) ? (t = oo(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : D(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
function qt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    ds(r, t, n);
  }
}
function je(e, t, n, s) {
  if (D(e)) {
    const r = qt(e, t, n, s);
    return r && Pi(r) && r.catch((i) => {
      ds(i, t, n);
    }), r;
  }
  if (M(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(je(e[i], t, n, s));
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
      at(), qt(i, null, 10, [
        e,
        a,
        u
      ]), ct();
      return;
    }
  }
  ca(e, n, r, s, o);
}
function ca(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const xe = [];
let qe = -1;
const Wt = [];
let dt = null, Ht = 0;
const lo = /* @__PURE__ */ Promise.resolve();
let Kn = null;
function br(e) {
  const t = Kn || lo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ua(e) {
  let t = qe + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = xe[s], i = yn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function xr(e) {
  if (!(e.flags & 1)) {
    const t = yn(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yn(n) ? xe.push(e) : xe.splice(ua(t), 0, e), e.flags |= 1, ao();
  }
}
function ao() {
  Kn || (Kn = lo.then(uo));
}
function fa(e) {
  M(e) ? Wt.push(...e) : dt && e.id === -1 ? dt.splice(Ht + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1), ao();
}
function jr(e, t, n = qe + 1) {
  for (; n < xe.length; n++) {
    const s = xe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function co(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, s) => yn(n) - yn(s)
    );
    if (Wt.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, Ht = 0; Ht < dt.length; Ht++) {
      const n = dt[Ht];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    dt = null, Ht = 0;
  }
}
const yn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function uo(e) {
  const t = $e;
  try {
    for (qe = 0; qe < xe.length; qe++) {
      const n = xe[qe];
      n && !(n.flags & 8) && (ht.NODE_ENV !== "production" && t(n), n.flags & 4 && (n.flags &= -2), qt(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; qe < xe.length; qe++) {
      const n = xe[qe];
      n && (n.flags &= -2);
    }
    qe = -1, xe.length = 0, co(), Kn = null, (xe.length || Wt.length) && uo();
  }
}
let Se = null, fo = null;
function qn(e) {
  const t = Se;
  return Se = e, fo = e && e.type.__scopeId || null, t;
}
function ho(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Jr(-1);
    const i = qn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      qn(i), s._d && Jr(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ha(e, t) {
  if (Se === null)
    return e;
  const n = bs(Se), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = X] = t[r];
    i && (D(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && it(o), s.push({
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
function wt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (at(), je(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ct());
  }
}
const da = Symbol("_vte"), po = (e) => e.__isTeleport, pt = Symbol("_leaveCb"), Pn = Symbol("_enterCb");
function pa() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Tr(() => {
    e.isMounted = !0;
  }), Eo(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ne = [Function, Array], go = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ne,
  onEnter: Ne,
  onAfterEnter: Ne,
  onEnterCancelled: Ne,
  // leave
  onBeforeLeave: Ne,
  onLeave: Ne,
  onAfterLeave: Ne,
  onLeaveCancelled: Ne,
  // appear
  onBeforeAppear: Ne,
  onAppear: Ne,
  onAfterAppear: Ne,
  onAppearCancelled: Ne
}, _o = (e) => {
  const t = e.subTree;
  return t.component ? _o(t.component) : t;
}, ga = {
  name: "BaseTransition",
  props: go,
  setup(e, { slots: t }) {
    const n = zo(), s = pa();
    return () => {
      const r = t.default && xo(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = mo(r), o = j(e), { mode: l } = o;
      if (s.isLeaving)
        return Cs(i);
      const a = Fr(i);
      if (!a)
        return Cs(i);
      let u = Vs(
        a,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      a.type !== ke && En(a, u);
      let c = n.subTree && Fr(n.subTree);
      if (c && c.type !== ke && !Ct(a, c) && _o(n).type !== ke) {
        let d = Vs(
          c,
          o,
          s,
          n
        );
        if (En(c, d), l === "out-in" && a.type !== ke)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Cs(i);
        l === "in-out" && a.type !== ke ? d.delayLeave = (p, _, S) => {
          const b = bo(
            s,
            c
          );
          b[String(c.key)] = c, p[pt] = () => {
            _(), p[pt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            S(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function mo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ke) {
        t = n;
        break;
      }
  }
  return t;
}
const _a = ga;
function bo(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Vs(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: p,
    onLeave: _,
    onAfterLeave: S,
    onLeaveCancelled: b,
    onBeforeAppear: A,
    onAppear: I,
    onAfterAppear: N,
    onAppearCancelled: B
  } = t, R = String(e.key), F = bo(n, e), ee = (L, K) => {
    L && je(
      L,
      s,
      9,
      K
    );
  }, oe = (L, K) => {
    const se = K[1];
    ee(L, K), M(L) ? L.every((C) => C.length <= 1) && se() : L.length <= 1 && se();
  }, le = {
    mode: o,
    persisted: l,
    beforeEnter(L) {
      let K = a;
      if (!n.isMounted)
        if (i)
          K = A || a;
        else
          return;
      L[pt] && L[pt](
        !0
        /* cancelled */
      );
      const se = F[R];
      se && Ct(e, se) && se.el[pt] && se.el[pt](), ee(K, [L]);
    },
    enter(L) {
      let K = u, se = c, C = d;
      if (!n.isMounted)
        if (i)
          K = I || u, se = N || c, C = B || d;
        else
          return;
      let te = !1;
      const ge = L[Pn] = (Ze) => {
        te || (te = !0, Ze ? ee(C, [L]) : ee(se, [L]), le.delayedLeave && le.delayedLeave(), L[Pn] = void 0);
      };
      K ? oe(K, [L, ge]) : ge();
    },
    leave(L, K) {
      const se = String(e.key);
      if (L[Pn] && L[Pn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      ee(p, [L]);
      let C = !1;
      const te = L[pt] = (ge) => {
        C || (C = !0, K(), ge ? ee(b, [L]) : ee(S, [L]), L[pt] = void 0, F[se] === e && delete F[se]);
      };
      F[se] = e, _ ? oe(_, [L, te]) : te();
    },
    clone(L) {
      const K = Vs(
        L,
        t,
        n,
        s,
        r
      );
      return r && r(K), K;
    }
  };
  return le;
}
function Cs(e) {
  if (ps(e))
    return e = xt(e), e.children = null, e;
}
function Fr(e) {
  if (!ps(e))
    return po(e.type) && e.children ? mo(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && D(n.default))
      return n.default();
  }
}
function En(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, En(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function xo(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === Le ? (o.patchFlag & 128 && r++, s = s.concat(
      xo(o.children, t, l)
    )) : (t || o.type !== ke) && s.push(l != null ? xt(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return D(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function To(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Xn(e, t, n, s, r = !1) {
  if (M(e)) {
    e.forEach(
      (S, b) => Xn(
        S,
        t && (M(t) ? t[b] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (fn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Xn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? bs(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e, u = t && t.r, c = l.refs === X ? l.refs = {} : l.refs, d = l.setupState, p = j(d), _ = d === X ? () => !1 : (S) => G(p, S);
  if (u != null && u !== a && (ie(u) ? (c[u] = null, _(u) && (d[u] = null)) : pe(u) && (u.value = null)), D(a))
    qt(a, l, 12, [o, c]);
  else {
    const S = ie(a), b = pe(a);
    if (S || b) {
      const A = () => {
        if (e.f) {
          const I = S ? _(a) ? d[a] : c[a] : a.value;
          r ? M(I) && ur(I, i) : M(I) ? I.includes(i) || I.push(i) : S ? (c[a] = [i], _(a) && (d[a] = c[a])) : (a.value = [i], e.k && (c[e.k] = a.value));
        } else S ? (c[a] = o, _(a) && (d[a] = o)) : b && (a.value = o, e.k && (c[e.k] = o));
      };
      o ? (A.id = -1, Ce(A, n)) : A();
    }
  }
}
as().requestIdleCallback;
as().cancelIdleCallback;
const fn = (e) => !!e.type.__asyncLoader, ps = (e) => e.type.__isKeepAlive;
function ma(e, t) {
  yo(e, "a", t);
}
function ba(e, t) {
  yo(e, "da", t);
}
function yo(e, t, n = fe) {
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
      ps(r.parent.vnode) && xa(s, t, n, r), r = r.parent;
  }
}
function xa(e, t, n, s) {
  const r = gs(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  wo(() => {
    ur(s[t], r);
  }, n);
}
function gs(e, t, n = fe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      at();
      const l = vn(n), a = je(t, n, e, o);
      return l(), ct(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const ut = (e) => (t, n = fe) => {
  (!kn || e === "sp") && gs(e, (...s) => t(...s), n);
}, Ta = ut("bm"), Tr = ut("m"), ya = ut(
  "bu"
), Ea = ut("u"), Eo = ut(
  "bum"
), wo = ut("um"), wa = ut(
  "sp"
), ka = ut("rtg"), Sa = ut("rtc");
function va(e, t = fe) {
  gs("ec", e, t);
}
const Ra = "components";
function hn(e, t) {
  return Ia(Ra, e, !0, t) || e;
}
const Ca = Symbol.for("v-ndc");
function Ia(e, t, n = !0, s = !1) {
  const r = Se || fe;
  if (r) {
    const i = r.type;
    {
      const l = Xo(
        i,
        !1
      );
      if (l && (l === t || l === ye(t) || l === ls(ye(t))))
        return i;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Gr(r[e] || i[e], t) || // global registration
      Gr(r.appContext[e], t)
    );
    return !o && s ? i : o;
  }
}
function Gr(e, t) {
  return e && (e[t] || e[ye(t)] || e[ls(ye(t))]);
}
function Aa(e, t, n, s) {
  let r;
  const i = n, o = M(e);
  if (o || ie(e)) {
    const l = o && Vt(e);
    let a = !1;
    l && (a = !Be(e), e = us(e)), r = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(
        a ? me(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (Q(e))
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
const Ws = (e) => e ? Ko(e) ? bs(e) : Ws(e.parent) : null, dn = (
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
    $parent: (e) => Ws(e.parent),
    $root: (e) => Ws(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => So(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      xr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = br.bind(e.proxy)),
    $watch: (e) => Za.bind(e)
  })
), Is = (e, t) => e !== X && !e.__isScriptSetup && G(e, t), Oa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: a } = e;
    let u;
    if (t[0] !== "$") {
      const _ = o[t];
      if (_ !== void 0)
        switch (_) {
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
        if (Is(s, t))
          return o[t] = 1, s[t];
        if (r !== X && G(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && G(u, t)
        )
          return o[t] = 3, i[t];
        if (n !== X && G(n, t))
          return o[t] = 4, n[t];
        zs && (o[t] = 0);
      }
    }
    const c = dn[t];
    let d, p;
    if (c)
      return t === "$attrs" && _e(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== X && G(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, G(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Is(r, t) ? (r[t] = n, !0) : s !== X && G(s, t) ? (s[t] = n, !0) : G(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== X && G(e, o) || Is(t, o) || (l = i[0]) && G(l, o) || G(s, o) || G(dn, o) || G(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : G(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Vr(e) {
  return M(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let zs = !0;
function Na(e) {
  const t = So(e), n = e.proxy, s = e.ctx;
  zs = !1, t.beforeCreate && Wr(t.beforeCreate, e, "bc");
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
    beforeUpdate: _,
    updated: S,
    activated: b,
    deactivated: A,
    beforeDestroy: I,
    beforeUnmount: N,
    destroyed: B,
    unmounted: R,
    render: F,
    renderTracked: ee,
    renderTriggered: oe,
    errorCaptured: le,
    serverPrefetch: L,
    // public API
    expose: K,
    inheritAttrs: se,
    // assets
    components: C,
    directives: te,
    filters: ge
  } = t;
  if (u && Ma(u, s, null), o)
    for (const re in o) {
      const Y = o[re];
      D(Y) && (s[re] = Y.bind(n));
    }
  if (r) {
    const re = r.call(n, n);
    Q(re) && (e.data = _r(re));
  }
  if (zs = !0, i)
    for (const re in i) {
      const Y = i[re], yt = D(Y) ? Y.bind(n, n) : D(Y.get) ? Y.get.bind(n, n) : $e, Cn = !D(Y) && D(Y.set) ? Y.set.bind(n) : $e, Et = Zs({
        get: yt,
        set: Cn
      });
      Object.defineProperty(s, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Et.value,
        set: (Fe) => Et.value = Fe
      });
    }
  if (l)
    for (const re in l)
      ko(l[re], s, n, re);
  if (a) {
    const re = D(a) ? a.call(n) : a;
    Reflect.ownKeys(re).forEach((Y) => {
      Ro(Y, re[Y]);
    });
  }
  c && Wr(c, e, "c");
  function he(re, Y) {
    M(Y) ? Y.forEach((yt) => re(yt.bind(n))) : Y && re(Y.bind(n));
  }
  if (he(Ta, d), he(Tr, p), he(ya, _), he(Ea, S), he(ma, b), he(ba, A), he(va, le), he(Sa, ee), he(ka, oe), he(Eo, N), he(wo, R), he(wa, L), M(K))
    if (K.length) {
      const re = e.exposed || (e.exposed = {});
      K.forEach((Y) => {
        Object.defineProperty(re, Y, {
          get: () => n[Y],
          set: (yt) => n[Y] = yt
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === $e && (e.render = F), se != null && (e.inheritAttrs = se), C && (e.components = C), te && (e.directives = te), L && To(e);
}
function Ma(e, t, n = $e) {
  M(e) && (e = Ks(e));
  for (const s in e) {
    const r = e[s];
    let i;
    Q(r) ? "default" in r ? i = Un(
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
function Wr(e, t, n) {
  je(
    M(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ko(e, t, n, s) {
  let r = s.includes(".") ? Uo(n, s) : () => n[s];
  if (ie(e)) {
    const i = t[e];
    D(i) && bt(r, i);
  } else if (D(e))
    bt(r, e.bind(n));
  else if (Q(e))
    if (M(e))
      e.forEach((i) => ko(i, t, n, s));
    else {
      const i = D(e.handler) ? e.handler.bind(n) : t[e.handler];
      D(i) && bt(r, i, e);
    }
}
function So(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (u) => Yn(a, u, o, !0)
  ), Yn(a, t, o)), Q(t) && i.set(t, a), a;
}
function Yn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Yn(e, i, n, !0), r && r.forEach(
    (o) => Yn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Pa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Pa = {
  data: zr,
  props: Kr,
  emits: Kr,
  // objects
  methods: sn,
  computed: sn,
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
  components: sn,
  directives: sn,
  // watch
  watch: Ha,
  // provide / inject
  provide: zr,
  inject: Ba
};
function zr(e, t) {
  return t ? e ? function() {
    return ae(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ba(e, t) {
  return sn(Ks(e), Ks(t));
}
function Ks(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function sn(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Kr(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    Vr(e),
    Vr(t ?? {})
  ) : t;
}
function Ha(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = be(e[s], t[s]);
  return n;
}
function vo() {
  return {
    app: null,
    config: {
      isNativeTag: ml,
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
let Da = 0;
function La(e, t) {
  return function(s, r = null) {
    D(s) || (s = ae({}, s)), r != null && !Q(r) && (r = null);
    const i = vo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: Da++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Tc,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return o.has(c) || (c && D(c.install) ? (o.add(c), c.install(u, ...d)) : D(c) && (o.add(c), c(u, ...d))), u;
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
          const _ = u._ceVNode || de(s, r);
          return _.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(_, c, p), a = !0, u._container = c, c.__vue_app__ = u, bs(_.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (je(
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
function Ro(e, t) {
  if (fe) {
    let n = fe.provides;
    const s = fe.parent && fe.parent.provides;
    s === n && (n = fe.provides = Object.create(s)), n[e] = t;
  }
}
function Un(e, t, n = !1) {
  const s = fe || Se;
  if (s || zt) {
    const r = zt ? zt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && D(t) ? t.call(s && s.proxy) : t;
  }
}
const Co = {}, Io = () => Object.create(Co), Ao = (e) => Object.getPrototypeOf(e) === Co;
function $a(e, t, n, s = !1) {
  const r = {}, i = Io();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oo(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : Xl(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Ua(e, t, n, s) {
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
        if (_s(e.emitsOptions, p))
          continue;
        const _ = t[p];
        if (a)
          if (G(i, p))
            _ !== i[p] && (i[p] = _, u = !0);
          else {
            const S = ye(p);
            r[S] = qs(
              a,
              l,
              S,
              _,
              e,
              !1
            );
          }
        else
          _ !== i[p] && (i[p] = _, u = !0);
      }
    }
  } else {
    Oo(e, t, r, i) && (u = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !G(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ae(d)) === d || !G(t, c))) && (a ? n && // for camelCase
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
        (!t || !G(t, d)) && (delete i[d], u = !0);
  }
  u && rt(e.attrs, "set", "");
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
      r && G(r, c = ye(a)) ? !i || !i.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : _s(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, o = !0);
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
        !G(u, d)
      );
    }
  }
  return o;
}
function qs(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = G(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && D(a)) {
        const { propsDefaults: u } = r;
        if (n in u)
          s = u[n];
        else {
          const c = vn(r);
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
    ] && (s === "" || s === Ae(n)) && (s = !0));
  }
  return s;
}
const ja = /* @__PURE__ */ new WeakMap();
function No(e, t, n = !1) {
  const s = n ? ja : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let a = !1;
  if (!D(e)) {
    const c = (d) => {
      a = !0;
      const [p, _] = No(d, t, !0);
      ae(o, p), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !a)
    return Q(e) && s.set(e, Ft), Ft;
  if (M(i))
    for (let c = 0; c < i.length; c++) {
      const d = ye(i[c]);
      qr(d) && (o[d] = X);
    }
  else if (i)
    for (const c in i) {
      const d = ye(c);
      if (qr(d)) {
        const p = i[c], _ = o[d] = M(p) || D(p) ? { type: p } : ae({}, p), S = _.type;
        let b = !1, A = !0;
        if (M(S))
          for (let I = 0; I < S.length; ++I) {
            const N = S[I], B = D(N) && N.name;
            if (B === "Boolean") {
              b = !0;
              break;
            } else B === "String" && (A = !1);
          }
        else
          b = D(S) && S.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = b, _[
          1
          /* shouldCastTrue */
        ] = A, (b || G(_, "default")) && l.push(d);
      }
    }
  const u = [o, l];
  return Q(e) && s.set(e, u), u;
}
function qr(e) {
  return e[0] !== "$" && !ln(e);
}
const Mo = (e) => e[0] === "_" || e === "$stable", yr = (e) => M(e) ? e.map(Xe) : [Xe(e)], Fa = (e, t, n) => {
  if (t._n)
    return t;
  const s = ho((...r) => (ht.NODE_ENV !== "production" && fe && (!n || (n.root, fe.root)), yr(t(...r))), n);
  return s._c = !1, s;
}, Po = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Mo(r)) continue;
    const i = e[r];
    if (D(i))
      t[r] = Fa(r, i, s);
    else if (i != null) {
      const o = yr(i);
      t[r] = () => o;
    }
  }
}, Bo = (e, t) => {
  const n = yr(t);
  e.slots.default = () => n;
}, Ho = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, Ga = (e, t, n) => {
  const s = e.slots = Io();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ho(s, t, n), n && Hi(s, "_", r, !0)) : Po(t, s);
  } else t && Bo(e, t);
}, Va = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = X;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Ho(r, t, n) : (i = !t.$stable, Po(t, r)), o = t;
  } else t && (Bo(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !Mo(l) && o[l] == null && delete r[l];
}, Ce = rc;
function Wa(e) {
  return za(e);
}
function za(e, t) {
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
    setScopeId: _ = $e,
    insertStaticContent: S
  } = e, b = (f, h, g, T = null, m = null, x = null, k = void 0, w = null, E = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !Ct(f, h) && (T = In(f), Fe(f, m, x, !0), f = null), h.patchFlag === -2 && (E = !1, h.dynamicChildren = null);
    const { type: y, ref: P, shapeFlag: v } = h;
    switch (y) {
      case ms:
        A(f, h, g, T);
        break;
      case ke:
        I(f, h, g, T);
        break;
      case Os:
        f == null && N(h, g, T, k);
        break;
      case Le:
        C(
          f,
          h,
          g,
          T,
          m,
          x,
          k,
          w,
          E
        );
        break;
      default:
        v & 1 ? F(
          f,
          h,
          g,
          T,
          m,
          x,
          k,
          w,
          E
        ) : v & 6 ? te(
          f,
          h,
          g,
          T,
          m,
          x,
          k,
          w,
          E
        ) : (v & 64 || v & 128) && y.process(
          f,
          h,
          g,
          T,
          m,
          x,
          k,
          w,
          E,
          Zt
        );
    }
    P != null && m && Xn(P, f && f.ref, x, h || f, !h);
  }, A = (f, h, g, T) => {
    if (f == null)
      s(
        h.el = l(h.children),
        g,
        T
      );
    else {
      const m = h.el = f.el;
      h.children !== f.children && u(m, h.children);
    }
  }, I = (f, h, g, T) => {
    f == null ? s(
      h.el = a(h.children || ""),
      g,
      T
    ) : h.el = f.el;
  }, N = (f, h, g, T) => {
    [f.el, f.anchor] = S(
      f.children,
      h,
      g,
      T,
      f.el,
      f.anchor
    );
  }, B = ({ el: f, anchor: h }, g, T) => {
    let m;
    for (; f && f !== h; )
      m = p(f), s(f, g, T), f = m;
    s(h, g, T);
  }, R = ({ el: f, anchor: h }) => {
    let g;
    for (; f && f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, F = (f, h, g, T, m, x, k, w, E) => {
    h.type === "svg" ? k = "svg" : h.type === "math" && (k = "mathml"), f == null ? ee(
      h,
      g,
      T,
      m,
      x,
      k,
      w,
      E
    ) : L(
      f,
      h,
      m,
      x,
      k,
      w,
      E
    );
  }, ee = (f, h, g, T, m, x, k, w) => {
    let E, y;
    const { props: P, shapeFlag: v, transition: O, dirs: H } = f;
    if (E = f.el = o(
      f.type,
      x,
      P && P.is,
      P
    ), v & 8 ? c(E, f.children) : v & 16 && le(
      f.children,
      E,
      null,
      T,
      m,
      As(f, x),
      k,
      w
    ), H && wt(f, null, T, "created"), oe(E, f, f.scopeId, k, T), P) {
      for (const Z in P)
        Z !== "value" && !ln(Z) && i(E, Z, null, P[Z], x, T);
      "value" in P && i(E, "value", null, P.value, x), (y = P.onVnodeBeforeMount) && ze(y, T, f);
    }
    H && wt(f, null, T, "beforeMount");
    const U = Ka(m, O);
    U && O.beforeEnter(E), s(E, h, g), ((y = P && P.onVnodeMounted) || U || H) && Ce(() => {
      y && ze(y, T, f), U && O.enter(E), H && wt(f, null, T, "mounted");
    }, m);
  }, oe = (f, h, g, T, m) => {
    if (g && _(f, g), T)
      for (let x = 0; x < T.length; x++)
        _(f, T[x]);
    if (m) {
      let x = m.subTree;
      if (h === x || Fo(x.type) && (x.ssContent === h || x.ssFallback === h)) {
        const k = m.vnode;
        oe(
          f,
          k,
          k.scopeId,
          k.slotScopeIds,
          m.parent
        );
      }
    }
  }, le = (f, h, g, T, m, x, k, w, E = 0) => {
    for (let y = E; y < f.length; y++) {
      const P = f[y] = w ? gt(f[y]) : Xe(f[y]);
      b(
        null,
        P,
        h,
        g,
        T,
        m,
        x,
        k,
        w
      );
    }
  }, L = (f, h, g, T, m, x, k) => {
    const w = h.el = f.el;
    let { patchFlag: E, dynamicChildren: y, dirs: P } = h;
    E |= f.patchFlag & 16;
    const v = f.props || X, O = h.props || X;
    let H;
    if (g && kt(g, !1), (H = O.onVnodeBeforeUpdate) && ze(H, g, h, f), P && wt(h, f, g, "beforeUpdate"), g && kt(g, !0), (v.innerHTML && O.innerHTML == null || v.textContent && O.textContent == null) && c(w, ""), y ? K(
      f.dynamicChildren,
      y,
      w,
      g,
      T,
      As(h, m),
      x
    ) : k || Y(
      f,
      h,
      w,
      null,
      g,
      T,
      As(h, m),
      x,
      !1
    ), E > 0) {
      if (E & 16)
        se(w, v, O, g, m);
      else if (E & 2 && v.class !== O.class && i(w, "class", null, O.class, m), E & 4 && i(w, "style", v.style, O.style, m), E & 8) {
        const U = h.dynamicProps;
        for (let Z = 0; Z < U.length; Z++) {
          const W = U[Z], ve = v[W], Ee = O[W];
          (Ee !== ve || W === "value") && i(w, W, ve, Ee, m, g);
        }
      }
      E & 1 && f.children !== h.children && c(w, h.children);
    } else !k && y == null && se(w, v, O, g, m);
    ((H = O.onVnodeUpdated) || P) && Ce(() => {
      H && ze(H, g, h, f), P && wt(h, f, g, "updated");
    }, T);
  }, K = (f, h, g, T, m, x, k) => {
    for (let w = 0; w < h.length; w++) {
      const E = f[w], y = h[w], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ct(E, y) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 70) ? d(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      b(
        E,
        y,
        P,
        null,
        T,
        m,
        x,
        k,
        !0
      );
    }
  }, se = (f, h, g, T, m) => {
    if (h !== g) {
      if (h !== X)
        for (const x in h)
          !ln(x) && !(x in g) && i(
            f,
            x,
            h[x],
            null,
            m,
            T
          );
      for (const x in g) {
        if (ln(x)) continue;
        const k = g[x], w = h[x];
        k !== w && x !== "value" && i(f, x, w, k, m, T);
      }
      "value" in g && i(f, "value", h.value, g.value, m);
    }
  }, C = (f, h, g, T, m, x, k, w, E) => {
    const y = h.el = f ? f.el : l(""), P = h.anchor = f ? f.anchor : l("");
    let { patchFlag: v, dynamicChildren: O, slotScopeIds: H } = h;
    H && (w = w ? w.concat(H) : H), f == null ? (s(y, g, T), s(P, g, T), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      P,
      m,
      x,
      k,
      w,
      E
    )) : v > 0 && v & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (K(
      f.dynamicChildren,
      O,
      g,
      m,
      x,
      k,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || m && h === m.subTree) && Do(
      f,
      h,
      !0
      /* shallow */
    )) : Y(
      f,
      h,
      g,
      P,
      m,
      x,
      k,
      w,
      E
    );
  }, te = (f, h, g, T, m, x, k, w, E) => {
    h.slotScopeIds = w, f == null ? h.shapeFlag & 512 ? m.ctx.activate(
      h,
      g,
      T,
      k,
      E
    ) : ge(
      h,
      g,
      T,
      m,
      x,
      k,
      E
    ) : Ze(f, h, E);
  }, ge = (f, h, g, T, m, x, k) => {
    const w = f.component = fc(
      f,
      T,
      m
    );
    if (ps(f) && (w.ctx.renderer = Zt), hc(w, !1, k), w.asyncDep) {
      if (m && m.registerDep(w, he, k), !f.el) {
        const E = w.subTree = de(ke);
        I(null, E, h, g);
      }
    } else
      he(
        w,
        f,
        h,
        g,
        m,
        x,
        k
      );
  }, Ze = (f, h, g) => {
    const T = h.component = f.component;
    if (nc(f, h, g))
      if (T.asyncDep && !T.asyncResolved) {
        re(T, h, g);
        return;
      } else
        T.next = h, T.update();
    else
      h.el = f.el, T.vnode = h;
  }, he = (f, h, g, T, m, x, k) => {
    const w = () => {
      if (f.isMounted) {
        let { next: v, bu: O, u: H, parent: U, vnode: Z } = f;
        {
          const Ve = Lo(f);
          if (Ve) {
            v && (v.el = Z.el, re(f, v, k)), Ve.asyncDep.then(() => {
              f.isUnmounted || w();
            });
            return;
          }
        }
        let W = v, ve;
        kt(f, !1), v ? (v.el = Z.el, re(f, v, k)) : v = Z, O && $n(O), (ve = v.props && v.props.onVnodeBeforeUpdate) && ze(ve, U, v, Z), kt(f, !0);
        const Ee = Yr(f), Ge = f.subTree;
        f.subTree = Ee, b(
          Ge,
          Ee,
          // parent may have changed if it's in a teleport
          d(Ge.el),
          // anchor may have changed if it's in a fragment
          In(Ge),
          f,
          m,
          x
        ), v.el = Ee.el, W === null && sc(f, Ee.el), H && Ce(H, m), (ve = v.props && v.props.onVnodeUpdated) && Ce(
          () => ze(ve, U, v, Z),
          m
        );
      } else {
        let v;
        const { el: O, props: H } = h, { bm: U, m: Z, parent: W, root: ve, type: Ee } = f, Ge = fn(h);
        kt(f, !1), U && $n(U), !Ge && (v = H && H.onVnodeBeforeMount) && ze(v, W, h), kt(f, !0);
        {
          ve.ce && ve.ce._injectChildStyle(Ee);
          const Ve = f.subTree = Yr(f);
          b(
            null,
            Ve,
            g,
            T,
            f,
            m,
            x
          ), h.el = Ve.el;
        }
        if (Z && Ce(Z, m), !Ge && (v = H && H.onVnodeMounted)) {
          const Ve = h;
          Ce(
            () => ze(v, W, Ve),
            m
          );
        }
        (h.shapeFlag & 256 || W && fn(W.vnode) && W.vnode.shapeFlag & 256) && f.a && Ce(f.a, m), f.isMounted = !0, h = g = T = null;
      }
    };
    f.scope.on();
    const E = f.effect = new ji(w);
    f.scope.off();
    const y = f.update = E.run.bind(E), P = f.job = E.runIfDirty.bind(E);
    P.i = f, P.id = f.uid, E.scheduler = () => xr(P), kt(f, !0), y();
  }, re = (f, h, g) => {
    h.component = f;
    const T = f.vnode.props;
    f.vnode = h, f.next = null, Ua(f, h.props, T, g), Va(f, h.children, g), at(), jr(f), ct();
  }, Y = (f, h, g, T, m, x, k, w, E = !1) => {
    const y = f && f.children, P = f ? f.shapeFlag : 0, v = h.children, { patchFlag: O, shapeFlag: H } = h;
    if (O > 0) {
      if (O & 128) {
        Cn(
          y,
          v,
          g,
          T,
          m,
          x,
          k,
          w,
          E
        );
        return;
      } else if (O & 256) {
        yt(
          y,
          v,
          g,
          T,
          m,
          x,
          k,
          w,
          E
        );
        return;
      }
    }
    H & 8 ? (P & 16 && Yt(y, m, x), v !== y && c(g, v)) : P & 16 ? H & 16 ? Cn(
      y,
      v,
      g,
      T,
      m,
      x,
      k,
      w,
      E
    ) : Yt(y, m, x, !0) : (P & 8 && c(g, ""), H & 16 && le(
      v,
      g,
      T,
      m,
      x,
      k,
      w,
      E
    ));
  }, yt = (f, h, g, T, m, x, k, w, E) => {
    f = f || Ft, h = h || Ft;
    const y = f.length, P = h.length, v = Math.min(y, P);
    let O;
    for (O = 0; O < v; O++) {
      const H = h[O] = E ? gt(h[O]) : Xe(h[O]);
      b(
        f[O],
        H,
        g,
        null,
        m,
        x,
        k,
        w,
        E
      );
    }
    y > P ? Yt(
      f,
      m,
      x,
      !0,
      !1,
      v
    ) : le(
      h,
      g,
      T,
      m,
      x,
      k,
      w,
      E,
      v
    );
  }, Cn = (f, h, g, T, m, x, k, w, E) => {
    let y = 0;
    const P = h.length;
    let v = f.length - 1, O = P - 1;
    for (; y <= v && y <= O; ) {
      const H = f[y], U = h[y] = E ? gt(h[y]) : Xe(h[y]);
      if (Ct(H, U))
        b(
          H,
          U,
          g,
          null,
          m,
          x,
          k,
          w,
          E
        );
      else
        break;
      y++;
    }
    for (; y <= v && y <= O; ) {
      const H = f[v], U = h[O] = E ? gt(h[O]) : Xe(h[O]);
      if (Ct(H, U))
        b(
          H,
          U,
          g,
          null,
          m,
          x,
          k,
          w,
          E
        );
      else
        break;
      v--, O--;
    }
    if (y > v) {
      if (y <= O) {
        const H = O + 1, U = H < P ? h[H].el : T;
        for (; y <= O; )
          b(
            null,
            h[y] = E ? gt(h[y]) : Xe(h[y]),
            g,
            U,
            m,
            x,
            k,
            w,
            E
          ), y++;
      }
    } else if (y > O)
      for (; y <= v; )
        Fe(f[y], m, x, !0), y++;
    else {
      const H = y, U = y, Z = /* @__PURE__ */ new Map();
      for (y = U; y <= O; y++) {
        const Re = h[y] = E ? gt(h[y]) : Xe(h[y]);
        Re.key != null && Z.set(Re.key, y);
      }
      let W, ve = 0;
      const Ee = O - U + 1;
      let Ge = !1, Ve = 0;
      const Jt = new Array(Ee);
      for (y = 0; y < Ee; y++) Jt[y] = 0;
      for (y = H; y <= v; y++) {
        const Re = f[y];
        if (ve >= Ee) {
          Fe(Re, m, x, !0);
          continue;
        }
        let We;
        if (Re.key != null)
          We = Z.get(Re.key);
        else
          for (W = U; W <= O; W++)
            if (Jt[W - U] === 0 && Ct(Re, h[W])) {
              We = W;
              break;
            }
        We === void 0 ? Fe(Re, m, x, !0) : (Jt[We - U] = y + 1, We >= Ve ? Ve = We : Ge = !0, b(
          Re,
          h[We],
          g,
          null,
          m,
          x,
          k,
          w,
          E
        ), ve++);
      }
      const Hr = Ge ? qa(Jt) : Ft;
      for (W = Hr.length - 1, y = Ee - 1; y >= 0; y--) {
        const Re = U + y, We = h[Re], Dr = Re + 1 < P ? h[Re + 1].el : T;
        Jt[y] === 0 ? b(
          null,
          We,
          g,
          Dr,
          m,
          x,
          k,
          w,
          E
        ) : Ge && (W < 0 || y !== Hr[W] ? Et(We, g, Dr, 2) : W--);
      }
    }
  }, Et = (f, h, g, T, m = null) => {
    const { el: x, type: k, transition: w, children: E, shapeFlag: y } = f;
    if (y & 6) {
      Et(f.component.subTree, h, g, T);
      return;
    }
    if (y & 128) {
      f.suspense.move(h, g, T);
      return;
    }
    if (y & 64) {
      k.move(f, h, g, Zt);
      return;
    }
    if (k === Le) {
      s(x, h, g);
      for (let v = 0; v < E.length; v++)
        Et(E[v], h, g, T);
      s(f.anchor, h, g);
      return;
    }
    if (k === Os) {
      B(f, h, g);
      return;
    }
    if (T !== 2 && y & 1 && w)
      if (T === 0)
        w.beforeEnter(x), s(x, h, g), Ce(() => w.enter(x), m);
      else {
        const { leave: v, delayLeave: O, afterLeave: H } = w, U = () => s(x, h, g), Z = () => {
          v(x, () => {
            U(), H && H();
          });
        };
        O ? O(x, U, Z) : Z();
      }
    else
      s(x, h, g);
  }, Fe = (f, h, g, T = !1, m = !1) => {
    const {
      type: x,
      props: k,
      ref: w,
      children: E,
      dynamicChildren: y,
      shapeFlag: P,
      patchFlag: v,
      dirs: O,
      cacheIndex: H
    } = f;
    if (v === -2 && (m = !1), w != null && Xn(w, null, g, f, !0), H != null && (h.renderCache[H] = void 0), P & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const U = P & 1 && O, Z = !fn(f);
    let W;
    if (Z && (W = k && k.onVnodeBeforeUnmount) && ze(W, h, f), P & 6)
      pl(f.component, g, T);
    else {
      if (P & 128) {
        f.suspense.unmount(g, T);
        return;
      }
      U && wt(f, null, h, "beforeUnmount"), P & 64 ? f.type.remove(
        f,
        h,
        g,
        Zt,
        T
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== Le || v > 0 && v & 64) ? Yt(
        y,
        h,
        g,
        !1,
        !0
      ) : (x === Le && v & 384 || !m && P & 16) && Yt(E, h, g), T && Pr(f);
    }
    (Z && (W = k && k.onVnodeUnmounted) || U) && Ce(() => {
      W && ze(W, h, f), U && wt(f, null, h, "unmounted");
    }, g);
  }, Pr = (f) => {
    const { type: h, el: g, anchor: T, transition: m } = f;
    if (h === Le) {
      dl(g, T);
      return;
    }
    if (h === Os) {
      R(f);
      return;
    }
    const x = () => {
      r(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (f.shapeFlag & 1 && m && !m.persisted) {
      const { leave: k, delayLeave: w } = m, E = () => k(g, x);
      w ? w(f.el, x, E) : E();
    } else
      x();
  }, dl = (f, h) => {
    let g;
    for (; f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, pl = (f, h, g) => {
    const { bum: T, scope: m, job: x, subTree: k, um: w, m: E, a: y } = f;
    Xr(E), Xr(y), T && $n(T), m.stop(), x && (x.flags |= 8, Fe(k, f, h, g)), w && Ce(w, h), Ce(() => {
      f.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve());
  }, Yt = (f, h, g, T = !1, m = !1, x = 0) => {
    for (let k = x; k < f.length; k++)
      Fe(f[k], h, g, T, m);
  }, In = (f) => {
    if (f.shapeFlag & 6)
      return In(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = p(f.anchor || f.el), g = h && h[da];
    return g ? p(g) : h;
  };
  let ys = !1;
  const Br = (f, h, g) => {
    f == null ? h._vnode && Fe(h._vnode, null, null, !0) : b(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      g
    ), h._vnode = f, ys || (ys = !0, jr(), co(), ys = !1);
  }, Zt = {
    p: b,
    um: Fe,
    m: Et,
    r: Pr,
    mt: ge,
    mc: le,
    pc: Y,
    pbc: K,
    n: In,
    o: e
  };
  return {
    render: Br,
    hydrate: void 0,
    createApp: La(Br)
  };
}
function As({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function kt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ka(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Do(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (M(s) && M(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = gt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Do(o, l)), l.type === ms && (l.el = o.el);
    }
}
function qa(e) {
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
function Lo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Lo(t);
}
function Xr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Xa = Symbol.for("v-scx"), Ya = () => Un(Xa);
function bt(e, t, n) {
  return $o(e, t, n);
}
function $o(e, t, n = X) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = ae({}, n), a = t && s || !t && i !== "post";
  let u;
  if (kn) {
    if (i === "sync") {
      const _ = Ya();
      u = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!a) {
      const _ = () => {
      };
      return _.stop = $e, _.resume = $e, _.pause = $e, _;
    }
  }
  const c = fe;
  l.call = (_, S, b) => je(_, c, S, b);
  let d = !1;
  i === "post" ? l.scheduler = (_) => {
    Ce(_, c && c.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (_, S) => {
    S ? _() : xr(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), d && (_.flags |= 2, c && (_.id = c.uid, _.i = c));
  };
  const p = sa(e, t, l);
  return kn && (u ? u.push(p) : a && p()), p;
}
function Za(e, t, n) {
  const s = this.proxy, r = ie(e) ? e.includes(".") ? Uo(s, e) : () => s[e] : e.bind(s, s);
  let i;
  D(t) ? i = t : (i = t.handler, n = t);
  const o = vn(this), l = $o(r, i.bind(s), n);
  return o(), l;
}
function Uo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Ja = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ye(t)}Modifiers`] || e[`${Ae(t)}Modifiers`];
function Qa(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  let r = n;
  const i = t.startsWith("update:"), o = i && Ja(s, t.slice(7));
  o && (o.trim && (r = n.map((c) => ie(c) ? c.trim() : c)), o.number && (r = n.map(Ds)));
  let l, a = s[l = Es(t)] || // also try camelCase event handler (#2249)
  s[l = Es(ye(t))];
  !a && i && (a = s[l = Es(Ae(t))]), a && je(
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
    e.emitted[l] = !0, je(
      u,
      e,
      6,
      r
    );
  }
}
function jo(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!D(e)) {
    const a = (u) => {
      const c = jo(u, t, !0);
      c && (l = !0, ae(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (Q(e) && s.set(e, null), null) : (M(i) ? i.forEach((a) => o[a] = null) : ae(o, i), Q(e) && s.set(e, o), o);
}
function _s(e, t) {
  return !e || !ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, Ae(t)) || G(e, t));
}
function Yr(e) {
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
    setupState: _,
    ctx: S,
    inheritAttrs: b
  } = e, A = qn(e);
  let I, N;
  try {
    if (n.shapeFlag & 4) {
      const R = r || s, F = ht.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(R, {
        get(ee, oe, le) {
          return ra(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ee, oe, le);
        }
      }) : R;
      I = Xe(
        u.call(
          F,
          R,
          c,
          ht.NODE_ENV !== "production" ? Nn(d) : d,
          _,
          p,
          S
        )
      ), N = l;
    } else {
      const R = t;
      ht.NODE_ENV, I = Xe(
        R.length > 1 ? R(
          ht.NODE_ENV !== "production" ? Nn(d) : d,
          ht.NODE_ENV !== "production" ? {
            get attrs() {
              return Nn(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : R(
          ht.NODE_ENV !== "production" ? Nn(d) : d,
          null
        )
      ), N = t.props ? l : ec(l);
    }
  } catch (R) {
    pn.length = 0, ds(R, e, 1), I = de(ke);
  }
  let B = I;
  if (N && b !== !1) {
    const R = Object.keys(N), { shapeFlag: F } = B;
    R.length && F & 7 && (i && R.some(cr) && (N = tc(
      N,
      i
    )), B = xt(B, N, !1, !0));
  }
  return n.dirs && (B = xt(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && En(B, n.transition), I = B, qn(A), I;
}
const ec = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ss(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, tc = (e, t) => {
  const n = {};
  for (const s in e)
    (!cr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function nc(e, t, n) {
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
        if (o[p] !== s[p] && !_s(u, p))
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
    if (t[i] !== e[i] && !_s(n, i))
      return !0;
  }
  return !1;
}
function sc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Fo = (e) => e.__isSuspense;
function rc(e, t) {
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : fa(e);
}
const Le = Symbol.for("v-fgt"), ms = Symbol.for("v-txt"), ke = Symbol.for("v-cmt"), Os = Symbol.for("v-stc"), pn = [];
let Oe = null;
function He(e = !1) {
  pn.push(Oe = e ? null : []);
}
function ic() {
  pn.pop(), Oe = pn[pn.length - 1] || null;
}
let wn = 1;
function Jr(e, t = !1) {
  wn += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function Go(e) {
  return e.dynamicChildren = wn > 0 ? Oe || Ft : null, ic(), wn > 0 && Oe && Oe.push(e), e;
}
function lt(e, t, n, s, r, i) {
  return Go(
    Ye(
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
function Xs(e, t, n, s, r) {
  return Go(
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
function Zn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vo = ({ key: e }) => e ?? null, jn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || pe(e) || D(e) ? { i: Se, r: e, k: t, f: !!n } : e : null);
function Ye(e, t = null, n = null, s = 0, r = null, i = e === Le ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vo(t),
    ref: t && jn(t),
    scopeId: fo,
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
    ctx: Se
  };
  return l ? (Er(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ie(n) ? 8 : 16), wn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Oe.push(a), a;
}
const de = oc;
function oc(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Ca) && (e = ke), Zn(e)) {
    const l = xt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Er(l, n), wn > 0 && !i && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (bc(e) && (e = e.__vccOpts), t) {
    t = lc(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = cs(l)), Q(a) && (mr(a) && !M(a) && (a = ae({}, a)), t.style = ot(a));
  }
  const o = ie(e) ? 1 : Fo(e) ? 128 : po(e) ? 64 : Q(e) ? 4 : D(e) ? 2 : 0;
  return Ye(
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
function lc(e) {
  return e ? mr(e) || Ao(e) ? ae({}, e) : e : null;
}
function xt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, u = t ? Wo(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Vo(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? M(i) ? i.concat(jn(t)) : [i, jn(t)] : jn(t)
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
    patchFlag: t && e.type !== Le ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && xt(e.ssContent),
    ssFallback: e.ssFallback && xt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && En(
    c,
    a.clone(c)
  ), c;
}
function ac(e = " ", t = 0) {
  return de(ms, null, e, t);
}
function Fn(e = "", t = !1) {
  return t ? (He(), Xs(ke, null, e)) : de(ke, null, e);
}
function Xe(e) {
  return e == null || typeof e == "boolean" ? de(ke) : M(e) ? de(
    Le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Zn(e) ? gt(e) : de(ms, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xt(e);
}
function Er(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (M(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Er(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ao(t) ? t._ctx = Se : r === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else D(t) ? (t = { default: t, _ctx: Se }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ac(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Wo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = cs([t.class, s.class]));
      else if (r === "style")
        t.style = ot([t.style, s.style]);
      else if (ss(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(M(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function ze(e, t, n, s = null) {
  je(e, t, 7, [
    n,
    s
  ]);
}
const cc = vo();
let uc = 0;
function fc(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || cc, i = {
    uid: uc++,
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
    scope: new Il(
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
    propsOptions: No(s, r),
    emitsOptions: jo(s, r),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Qa.bind(null, i), e.ce && e.ce(i), i;
}
let fe = null;
const zo = () => fe || Se;
let Jn, Ys;
{
  const e = as(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Jn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fe = n
  ), Ys = t(
    "__VUE_SSR_SETTERS__",
    (n) => kn = n
  );
}
const vn = (e) => {
  const t = fe;
  return Jn(e), e.scope.on(), () => {
    e.scope.off(), Jn(t);
  };
}, Qr = () => {
  fe && fe.scope.off(), Jn(null);
};
function Ko(e) {
  return e.vnode.shapeFlag & 4;
}
let kn = !1;
function hc(e, t = !1, n = !1) {
  t && Ys(t);
  const { props: s, children: r } = e.vnode, i = Ko(e);
  $a(e, s, i, t), Ga(e, r, n);
  const o = i ? dc(e, t) : void 0;
  return t && Ys(!1), o;
}
function dc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Oa);
  const { setup: s } = n;
  if (s) {
    at();
    const r = e.setupContext = s.length > 1 ? gc(e) : null, i = vn(e), o = qt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Pi(o);
    if (ct(), i(), (l || e.sp) && !fn(e) && To(e), l) {
      if (o.then(Qr, Qr), t)
        return o.then((a) => {
          ei(e, a);
        }).catch((a) => {
          ds(a, e, 0);
        });
      e.asyncDep = o;
    } else
      ei(e, o);
  } else
    qo(e);
}
function ei(e, t, n) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = io(t)), qo(e);
}
function qo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $e);
  {
    const r = vn(e);
    at();
    try {
      Na(e);
    } finally {
      ct(), r();
    }
  }
}
const pc = {
  get(e, t) {
    return _e(e, "get", ""), e[t];
  }
};
function gc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, pc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function bs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(io(Yl(e.exposed)), {
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
const _c = /(?:^|[-_])(\w)/g, mc = (e) => e.replace(_c, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Xo(e, t = !0) {
  return D(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yo(e, t, n = !1) {
  let s = Xo(t);
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
  return s ? mc(s) : n ? "App" : "Anonymous";
}
function bc(e) {
  return D(e) && "__vccOpts" in e;
}
const Zs = (e, t) => ta(e, t, kn);
function xc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? Q(t) && !M(t) ? Zn(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Zn(n) && (n = [n]), de(e, t, n));
}
const Tc = "3.5.13";
let Js;
const ti = typeof window < "u" && window.trustedTypes;
if (ti)
  try {
    Js = /* @__PURE__ */ ti.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zo = Js ? (e) => Js.createHTML(e) : (e) => e, yc = "http://www.w3.org/2000/svg", Ec = "http://www.w3.org/1998/Math/MathML", st = typeof document < "u" ? document : null, ni = st && /* @__PURE__ */ st.createElement("template"), wc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? st.createElementNS(yc, e) : t === "mathml" ? st.createElementNS(Ec, e) : n ? st.createElement(e, { is: n }) : st.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => st.createTextNode(e),
  createComment: (e) => st.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => st.querySelector(e),
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
      ni.innerHTML = Zo(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ni.content;
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
}, ft = "transition", en = "animation", Sn = Symbol("_vtc"), Jo = {
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
}, kc = /* @__PURE__ */ ae(
  {},
  go,
  Jo
), Sc = (e) => (e.displayName = "Transition", e.props = kc, e), vc = /* @__PURE__ */ Sc(
  (e, { slots: t }) => xc(_a, Rc(e), t)
), St = (e, t = []) => {
  M(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, si = (e) => e ? M(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Rc(e) {
  const t = {};
  for (const C in e)
    C in Jo || (t[C] = e[C]);
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
    leaveToClass: _ = `${n}-leave-to`
  } = e, S = Cc(r), b = S && S[0], A = S && S[1], {
    onBeforeEnter: I,
    onEnter: N,
    onEnterCancelled: B,
    onLeave: R,
    onLeaveCancelled: F,
    onBeforeAppear: ee = I,
    onAppear: oe = N,
    onAppearCancelled: le = B
  } = t, L = (C, te, ge, Ze) => {
    C._enterCancelled = Ze, vt(C, te ? c : l), vt(C, te ? u : o), ge && ge();
  }, K = (C, te) => {
    C._isLeaving = !1, vt(C, d), vt(C, _), vt(C, p), te && te();
  }, se = (C) => (te, ge) => {
    const Ze = C ? oe : N, he = () => L(te, C, ge);
    St(Ze, [te, he]), ri(() => {
      vt(te, C ? a : i), Qe(te, C ? c : l), si(Ze) || ii(te, s, b, he);
    });
  };
  return ae(t, {
    onBeforeEnter(C) {
      St(I, [C]), Qe(C, i), Qe(C, o);
    },
    onBeforeAppear(C) {
      St(ee, [C]), Qe(C, a), Qe(C, u);
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(C, te) {
      C._isLeaving = !0;
      const ge = () => K(C, te);
      Qe(C, d), C._enterCancelled ? (Qe(C, p), ai()) : (ai(), Qe(C, p)), ri(() => {
        C._isLeaving && (vt(C, d), Qe(C, _), si(R) || ii(C, s, A, ge));
      }), St(R, [C, ge]);
    },
    onEnterCancelled(C) {
      L(C, !1, void 0, !0), St(B, [C]);
    },
    onAppearCancelled(C) {
      L(C, !0, void 0, !0), St(le, [C]);
    },
    onLeaveCancelled(C) {
      K(C), St(F, [C]);
    }
  });
}
function Cc(e) {
  if (e == null)
    return null;
  if (Q(e))
    return [Ns(e.enter), Ns(e.leave)];
  {
    const t = Ns(e);
    return [t, t];
  }
}
function Ns(e) {
  return Ls(e);
}
function Qe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Sn] || (e[Sn] = /* @__PURE__ */ new Set())).add(t);
}
function vt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Sn];
  n && (n.delete(t), n.size || (e[Sn] = void 0));
}
function ri(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ic = 0;
function ii(e, t, n, s) {
  const r = e._endId = ++Ic, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: a } = Ac(e, t);
  if (!o)
    return s();
  const u = o + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, p), i();
  }, p = (_) => {
    _.target === e && ++c >= a && d();
  };
  setTimeout(() => {
    c < a && d();
  }, l + 1), e.addEventListener(u, p);
}
function Ac(e, t) {
  const n = window.getComputedStyle(e), s = (S) => (n[S] || "").split(", "), r = s(`${ft}Delay`), i = s(`${ft}Duration`), o = oi(r, i), l = s(`${en}Delay`), a = s(`${en}Duration`), u = oi(l, a);
  let c = null, d = 0, p = 0;
  t === ft ? o > 0 && (c = ft, d = o, p = i.length) : t === en ? u > 0 && (c = en, d = u, p = a.length) : (d = Math.max(o, u), c = d > 0 ? o > u ? ft : en : null, p = c ? c === ft ? i.length : a.length : 0);
  const _ = c === ft && /\b(transform|all)(,|$)/.test(
    s(`${ft}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: p,
    hasTransform: _
  };
}
function oi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => li(n) + li(e[s])));
}
function li(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ai() {
  return document.body.offsetHeight;
}
function Oc(e, t, n) {
  const s = e[Sn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ci = Symbol("_vod"), Nc = Symbol("_vsh"), Mc = Symbol(""), Pc = /(^|;)\s*display\s*:/;
function Bc(e, t, n) {
  const s = e.style, r = ie(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
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
      const o = s[Mc];
      o && (n += ";" + o), s.cssText = n, i = Pc.test(n);
    }
  } else t && e.removeAttribute("style");
  ci in e && (e[ci] = i ? s.display : "", e[Nc] && (s.display = "none"));
}
const ui = /\s*!important$/;
function Gn(e, t, n) {
  if (M(n))
    n.forEach((s) => Gn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Hc(e, t);
    ui.test(n) ? e.setProperty(
      Ae(s),
      n.replace(ui, ""),
      "important"
    ) : e[s] = n;
  }
}
const fi = ["Webkit", "Moz", "ms"], Ms = {};
function Hc(e, t) {
  const n = Ms[t];
  if (n)
    return n;
  let s = ye(t);
  if (s !== "filter" && s in e)
    return Ms[t] = s;
  s = ls(s);
  for (let r = 0; r < fi.length; r++) {
    const i = fi[r] + s;
    if (i in e)
      return Ms[t] = i;
  }
  return t;
}
const hi = "http://www.w3.org/1999/xlink";
function di(e, t, n, s, r, i = Rl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(hi, t.slice(6, t.length)) : e.setAttributeNS(hi, t, n) : n == null || i && !Di(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Tt(n) ? String(n) : n
  );
}
function pi(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Zo(n) : n);
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
    l === "boolean" ? n = Di(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Dt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Dc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const gi = Symbol("_vei");
function Lc(e, t, n, s, r = null) {
  const i = e[gi] || (e[gi] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = $c(t);
    if (s) {
      const u = i[t] = Fc(
        s,
        r
      );
      Dt(e, l, u, a);
    } else o && (Dc(e, l, o, a), i[t] = void 0);
  }
}
const _i = /(?:Once|Passive|Capture)$/;
function $c(e) {
  let t;
  if (_i.test(e)) {
    t = {};
    let s;
    for (; s = e.match(_i); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ae(e.slice(2)), t];
}
let Ps = 0;
const Uc = /* @__PURE__ */ Promise.resolve(), jc = () => Ps || (Uc.then(() => Ps = 0), Ps = Date.now());
function Fc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    je(
      Gc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = jc(), n;
}
function Gc(e, t) {
  if (M(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vc = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Oc(e, s, o) : t === "style" ? Bc(e, n, s) : ss(t) ? cr(t) || Lc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wc(e, t, s, o)) ? (pi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && di(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(s)) ? pi(e, ye(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), di(e, t, s, o));
};
function Wc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mi(t) && D(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return mi(t) && ie(n) ? !1 : t in e;
}
const bi = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zc(e, t, n) {
  const s = /* @__PURE__ */ Mt(e, t);
  is(s) && ae(s, t);
  class r extends wr {
    constructor(o) {
      super(s, o, n);
    }
  }
  return r.def = s, r;
}
const Kc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class wr extends Kc {
  constructor(t, n = {}, s = Ei) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Ei ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
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
    this._connected = !1, br(() => {
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
      if (i && !M(i))
        for (const a in i) {
          const u = i[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = Ls(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[ye(a)] = !0);
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
        G(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ro(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = M(n) ? n : Object.keys(n || {});
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
    let s = n ? this.getAttribute(t) : bi;
    const r = ye(t);
    n && this._numberProps && this._numberProps[r] && (s = Ls(s)), this._setProp(r, s, !1, !0);
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
    if (n !== this._props[t] && (n === bi ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), s)) {
      const i = this._ob;
      i && i.disconnect(), n === !0 ? this.setAttribute(Ae(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ae(t), n + "") : n || this.removeAttribute(Ae(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    Qc(this._createVNode(), this._root);
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
        r(i, o), Ae(i) !== i && r(Ae(i), o);
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
const xi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return M(t) ? (n) => $n(t, n) : t;
};
function qc(e) {
  e.target.composing = !0;
}
function Ti(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Bs = Symbol("_assign"), Xc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Bs] = xi(r);
    const i = s || r.props && r.props.type === "number";
    Dt(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = Ds(l)), e[Bs](l);
    }), n && Dt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Dt(e, "compositionstart", qc), Dt(e, "compositionend", Ti), Dt(e, "change", Ti));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Bs] = xi(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ds(e.value) : e.value, a = t ?? "";
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
}, Zc = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (r) => {
    if (!("key" in r))
      return;
    const i = Ae(r.key);
    if (t.some(
      (o) => o === i || Yc[o] === i
    ))
      return e(r);
  });
}, Jc = /* @__PURE__ */ ae({ patchProp: Vc }, wc);
let yi;
function Qo() {
  return yi || (yi = Wa(Jc));
}
const Qc = (...e) => {
  Qo().render(...e);
}, Ei = (...e) => {
  const t = Qo().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = tu(s);
    if (!r) return;
    const i = t._component;
    !D(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, eu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function eu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tu(e) {
  return ie(e) ? document.querySelector(e) : e;
}
const nu = /* @__PURE__ */ Mt({
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
}), su = ".chat-header[data-v-a82ecf7a]{display:flex;align-items:center;padding:10px;border-top-left-radius:10px;border-top-right-radius:10px}.chat-header img[data-v-a82ecf7a]{width:40px;height:40px;border-radius:50%;margin-right:10px}.chat-header .chatbot-name[data-v-a82ecf7a]{flex-grow:1;font-weight:700}.close-btn[data-v-a82ecf7a]{background:transparent;border:none;font-size:16px;cursor:pointer}", Xt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, ru = ["src"];
function iu(e, t, n, s, r, i) {
  return He(), lt("div", {
    class: "chat-header",
    style: ot({ backgroundColor: e.headerBackgroundColor })
  }, [
    Ye("img", {
      src: e.headerIcon,
      alt: "Chatbot",
      class: "chatbot-image"
    }, null, 8, ru),
    Ye("span", {
      class: "chatbot-name",
      style: ot({ color: e.headerTextColor })
    }, $i(e.headerName), 5),
    Ye("button", {
      class: "close-btn",
      style: ot({ color: e.closeBtnColor }),
      onClick: t[0] || (t[0] = (o) => e.$emit("close"))
    }, " X ", 4)
  ], 4);
}
const ou = /* @__PURE__ */ Xt(nu, [["render", iu], ["styles", [su]], ["__scopeId", "data-v-a82ecf7a"]]);
function kr() {
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
let Pt = kr();
function el(e) {
  Pt = e;
}
const gn = { exec: () => null };
function V(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const s = {
    replace: (r, i) => {
      let o = typeof i == "string" ? i : i.source;
      return o = o.replace(Te.caret, "$1"), n = n.replace(r, o), s;
    },
    getRegex: () => new RegExp(n, t)
  };
  return s;
}
const Te = {
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
}, lu = /^(?:[ \t]*(?:\n|$))+/, au = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, cu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Rn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, uu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Sr = /(?:[*+-]|\d{1,9}[.)])/, tl = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, nl = V(tl).replace(/bull/g, Sr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), fu = V(tl).replace(/bull/g, Sr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), vr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, hu = /^[^\n]+/, Rr = /(?!\s*\])(?:\\.|[^\[\]\\])+/, du = V(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Rr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), pu = V(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Sr).getRegex(), xs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Cr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, gu = V("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Cr).replace("tag", xs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), sl = V(vr).replace("hr", Rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", xs).getRegex(), _u = V(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", sl).getRegex(), Ir = {
  blockquote: _u,
  code: au,
  def: du,
  fences: cu,
  heading: uu,
  hr: Rn,
  html: gu,
  lheading: nl,
  list: pu,
  newline: lu,
  paragraph: sl,
  table: gn,
  text: hu
}, wi = V("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", xs).getRegex(), mu = {
  ...Ir,
  lheading: fu,
  table: wi,
  paragraph: V(vr).replace("hr", Rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", wi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", xs).getRegex()
}, bu = {
  ...Ir,
  html: V(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Cr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: gn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: V(vr).replace("hr", Rn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", nl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, xu = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Tu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, rl = /^( {2,}|\\)\n(?!\s*$)/, yu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ts = /[\p{P}\p{S}]/u, Ar = /[\s\p{P}\p{S}]/u, il = /[^\s\p{P}\p{S}]/u, Eu = V(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ar).getRegex(), ol = /(?!~)[\p{P}\p{S}]/u, wu = /(?!~)[\s\p{P}\p{S}]/u, ku = /(?:[^\s\p{P}\p{S}]|~)/u, Su = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, ll = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, vu = V(ll, "u").replace(/punct/g, Ts).getRegex(), Ru = V(ll, "u").replace(/punct/g, ol).getRegex(), al = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Cu = V(al, "gu").replace(/notPunctSpace/g, il).replace(/punctSpace/g, Ar).replace(/punct/g, Ts).getRegex(), Iu = V(al, "gu").replace(/notPunctSpace/g, ku).replace(/punctSpace/g, wu).replace(/punct/g, ol).getRegex(), Au = V("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, il).replace(/punctSpace/g, Ar).replace(/punct/g, Ts).getRegex(), Ou = V(/\\(punct)/, "gu").replace(/punct/g, Ts).getRegex(), Nu = V(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Mu = V(Cr).replace("(?:-->|$)", "-->").getRegex(), Pu = V("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Mu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Qn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Bu = V(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Qn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), cl = V(/^!?\[(label)\]\[(ref)\]/).replace("label", Qn).replace("ref", Rr).getRegex(), ul = V(/^!?\[(ref)\](?:\[\])?/).replace("ref", Rr).getRegex(), Hu = V("reflink|nolink(?!\\()", "g").replace("reflink", cl).replace("nolink", ul).getRegex(), Or = {
  _backpedal: gn,
  // only used for GFM url
  anyPunctuation: Ou,
  autolink: Nu,
  blockSkip: Su,
  br: rl,
  code: Tu,
  del: gn,
  emStrongLDelim: vu,
  emStrongRDelimAst: Cu,
  emStrongRDelimUnd: Au,
  escape: xu,
  link: Bu,
  nolink: ul,
  punctuation: Eu,
  reflink: cl,
  reflinkSearch: Hu,
  tag: Pu,
  text: yu,
  url: gn
}, Du = {
  ...Or,
  link: V(/^!?\[(label)\]\((.*?)\)/).replace("label", Qn).getRegex(),
  reflink: V(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Qn).getRegex()
}, Qs = {
  ...Or,
  emStrongRDelimAst: Iu,
  emStrongLDelim: Ru,
  url: V(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Lu = {
  ...Qs,
  br: V(rl).replace("{2,}", "*").getRegex(),
  text: V(Qs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Bn = {
  normal: Ir,
  gfm: mu,
  pedantic: bu
}, tn = {
  normal: Or,
  gfm: Qs,
  breaks: Lu,
  pedantic: Du
}, $u = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ki = (e) => $u[e];
function Ke(e, t) {
  if (t) {
    if (Te.escapeTest.test(e))
      return e.replace(Te.escapeReplace, ki);
  } else if (Te.escapeTestNoEncode.test(e))
    return e.replace(Te.escapeReplaceNoEncode, ki);
  return e;
}
function Si(e) {
  try {
    e = encodeURI(e).replace(Te.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function vi(e, t) {
  var i;
  const n = e.replace(Te.findPipe, (o, l, a) => {
    let u = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), s = n.split(Te.splitPipe);
  let r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((i = s.at(-1)) != null && i.trim()) && s.pop(), t)
    if (s.length > t)
      s.splice(t);
    else
      for (; s.length < t; )
        s.push("");
  for (; r < s.length; r++)
    s[r] = s[r].trim().replace(Te.slashPipe, "|");
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
function Uu(e, t) {
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
function Ri(e, t, n, s, r) {
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
    q(this, "options");
    q(this, "rules");
    // set by the lexer
    q(this, "lexer");
    this.options = t || Pt;
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
        const _ = o.at(-1);
        if ((_ == null ? void 0 : _.type) === "code")
          break;
        if ((_ == null ? void 0 : _.type) === "blockquote") {
          const S = _, b = S.raw + `
` + s.join(`
`), A = this.blockquote(b);
          o[o.length - 1] = A, r = r.substring(0, r.length - S.raw.length) + A.raw, i = i.substring(0, i.length - S.text.length) + A.text;
          break;
        } else if ((_ == null ? void 0 : _.type) === "list") {
          const S = _, b = S.raw + `
` + s.join(`
`), A = this.list(b);
          o[o.length - 1] = A, r = r.substring(0, r.length - _.raw.length) + A.raw, i = i.substring(0, i.length - S.raw.length) + A.raw, s = b.substring(o.at(-1).raw.length).split(`
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
`, 1)[0].replace(this.rules.other.listReplaceTabs, (N) => " ".repeat(3 * N.length)), _ = t.split(`
`, 1)[0], S = !p.trim(), b = 0;
        if (this.options.pedantic ? (b = 2, d = p.trimStart()) : S ? b = n[1].length + 1 : (b = n[2].search(this.rules.other.nonSpaceChar), b = b > 4 ? 1 : b, d = p.slice(b), b += n[1].length), S && this.rules.other.blankLine.test(_) && (c += _ + `
`, t = t.substring(_.length + 1), u = !0), !u) {
          const N = this.rules.other.nextBulletRegex(b), B = this.rules.other.hrRegex(b), R = this.rules.other.fencesBeginRegex(b), F = this.rules.other.headingBeginRegex(b), ee = this.rules.other.htmlBeginRegex(b);
          for (; t; ) {
            const oe = t.split(`
`, 1)[0];
            let le;
            if (_ = oe, this.options.pedantic ? (_ = _.replace(this.rules.other.listReplaceNesting, "  "), le = _) : le = _.replace(this.rules.other.tabCharGlobal, "    "), R.test(_) || F.test(_) || ee.test(_) || N.test(_) || B.test(_))
              break;
            if (le.search(this.rules.other.nonSpaceChar) >= b || !_.trim())
              d += `
` + le.slice(b);
            else {
              if (S || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || R.test(p) || F.test(p) || B.test(p))
                break;
              d += `
` + _;
            }
            !S && !_.trim() && (S = !0), c += oe + `
`, t = t.substring(oe.length + 1), p = le.slice(b);
          }
        }
        i.loose || (l ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let A = null, I;
        this.options.gfm && (A = this.rules.other.listIsTask.exec(d), A && (I = A[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
          type: "list_item",
          raw: c,
          task: !!A,
          checked: I,
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
    const s = vi(n[1]), r = n[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (l = n[3]) != null && l.trim() ? n[3].replace(this.rules.other.tableRowBlankLine, "").split(`
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
        o.rows.push(vi(a, o.header.length).map((u, c) => ({
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
        const o = Uu(n[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), Ri(n, {
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
      return Ri(s, i, s[0], this.lexer, this.rules);
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
        const p = [...r[0]][0].length, _ = t.slice(0, o + r.index + p + a);
        if (Math.min(o, a) % 2) {
          const b = _.slice(1, -1);
          return {
            type: "em",
            raw: _,
            text: b,
            tokens: this.lexer.inlineTokens(b)
          };
        }
        const S = _.slice(2, -2);
        return {
          type: "strong",
          raw: _,
          text: S,
          tokens: this.lexer.inlineTokens(S)
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
class Me {
  constructor(t) {
    q(this, "tokens");
    q(this, "options");
    q(this, "state");
    q(this, "tokenizer");
    q(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Pt, this.options.tokenizer = this.options.tokenizer || new es(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: Te,
      block: Bn.normal,
      inline: tn.normal
    };
    this.options.pedantic ? (n.block = Bn.pedantic, n.inline = tn.pedantic) : this.options.gfm && (n.block = Bn.gfm, this.options.breaks ? n.inline = tn.breaks : n.inline = tn.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Bn,
      inline: tn
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new Me(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new Me(n).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(Te.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const s = this.inlineQueue[n];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], s = !1) {
    var r, i, o;
    for (this.options.pedantic && (t = t.replace(Te.tabCharGlobal, "    ").replace(Te.spaceLine, "")); t; ) {
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
        const _ = t.slice(1);
        let S;
        this.options.extensions.startInline.forEach((b) => {
          S = b.call({ lexer: this }, _), typeof S == "number" && S >= 0 && (p = Math.min(p, S));
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
    q(this, "options");
    q(this, "parser");
    this.options = t || Pt;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: s }) {
    var o;
    const r = (o = (n || "").match(Te.notSpaceStart)) == null ? void 0 : o[0], i = t.replace(Te.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + Ke(r) + '">' + (s ? i : Ke(i, !0)) + `</code></pre>
` : "<pre><code>" + (s ? i : Ke(i, !0)) + `</code></pre>
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
      t.loose ? ((s = t.tokens[0]) == null ? void 0 : s.type) === "paragraph" ? (t.tokens[0].text = r + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = r + " " + Ke(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
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
    return `<code>${Ke(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: s }) {
    const r = this.parser.parseInline(s), i = Si(t);
    if (i === null)
      return r;
    t = i;
    let o = '<a href="' + t + '"';
    return n && (o += ' title="' + Ke(n) + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: t, title: n, text: s }) {
    const r = Si(t);
    if (r === null)
      return Ke(s);
    t = r;
    let i = `<img src="${t}" alt="${s}"`;
    return n && (i += ` title="${Ke(n)}"`), i += ">", i;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Ke(t.text);
  }
}
class Nr {
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
class Pe {
  constructor(t) {
    q(this, "options");
    q(this, "renderer");
    q(this, "textRenderer");
    this.options = t || Pt, this.options.renderer = this.options.renderer || new ts(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Nr();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new Pe(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new Pe(n).parseInline(t);
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
class _n {
  constructor(t) {
    q(this, "options");
    q(this, "block");
    this.options = t || Pt;
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
    return this.block ? Me.lex : Me.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? Pe.parse : Pe.parseInline;
  }
}
q(_n, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class Fu {
  constructor(...t) {
    q(this, "defaults", kr());
    q(this, "options", this.setOptions);
    q(this, "parse", this.parseMarkdown(!0));
    q(this, "parseInline", this.parseMarkdown(!1));
    q(this, "Parser", Pe);
    q(this, "Renderer", ts);
    q(this, "TextRenderer", Nr);
    q(this, "Lexer", Me);
    q(this, "Tokenizer", es);
    q(this, "Hooks", _n);
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
        const i = this.defaults.hooks || new _n();
        for (const o in s.hooks) {
          if (!(o in i))
            throw new Error(`hook '${o}' does not exist`);
          if (["options", "block"].includes(o))
            continue;
          const l = o, a = s.hooks[l], u = i[l];
          _n.passThroughHooks.has(o) ? i[l] = (c) => {
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
    return Me.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return Pe.parse(t, n ?? this.defaults);
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
      const a = o.hooks ? o.hooks.provideLexer() : t ? Me.lex : Me.lexInline, u = o.hooks ? o.hooks.provideParser() : t ? Pe.parse : Pe.parseInline;
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
        const r = "<p>An error occurred:</p><pre>" + Ke(s.message + "", !0) + "</pre>";
        return n ? Promise.resolve(r) : r;
      }
      if (n)
        return Promise.reject(s);
      throw s;
    };
  }
}
const Nt = new Fu();
function z(e, t) {
  return Nt.parse(e, t);
}
z.options = z.setOptions = function(e) {
  return Nt.setOptions(e), z.defaults = Nt.defaults, el(z.defaults), z;
};
z.getDefaults = kr;
z.defaults = Pt;
z.use = function(...e) {
  return Nt.use(...e), z.defaults = Nt.defaults, el(z.defaults), z;
};
z.walkTokens = function(e, t) {
  return Nt.walkTokens(e, t);
};
z.parseInline = Nt.parseInline;
z.Parser = Pe;
z.parser = Pe.parse;
z.Renderer = ts;
z.TextRenderer = Nr;
z.Lexer = Me;
z.lexer = Me.lex;
z.Tokenizer = es;
z.Hooks = _n;
z.parse = z;
z.options;
z.setOptions;
z.use;
z.walkTokens;
z.parseInline;
Pe.parse;
Me.lex;
const Gu = /* @__PURE__ */ Mt({
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
      return z(e);
    }
  }
}), Vu = ".chat-messages[data-v-89298033]{flex-grow:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column}.message[data-v-89298033]{margin-bottom:10px;padding:8px;border:1px solid #3d3d3d9f;max-width:85%}", Wu = { class: "chat-messages" }, zu = ["innerHTML"];
function Ku(e, t, n, s, r, i) {
  return He(), lt("div", Wu, [
    (He(!0), lt(Le, null, Aa(e.messages, (o, l) => (He(), lt("div", {
      key: l,
      class: cs(["message", o.from]),
      style: ot(e.messageStyle(o.from))
    }, [
      Ye("p", {
        innerHTML: e.renderMarkdown(o.text),
        class: "message-content"
      }, null, 8, zu)
    ], 6))), 128))
  ]);
}
const qu = /* @__PURE__ */ Xt(Gu, [["render", Ku], ["styles", [Vu]], ["__scopeId", "data-v-89298033"]]), Xu = /* @__PURE__ */ Mt({
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
    const n = nt(e.userInput);
    return bt(
      () => e.userInput,
      (i) => {
        n.value = i;
      }
    ), bt(n, (i) => {
      t("update:userInput", i);
    }), { localInput: n, handleSend: () => {
      t("send-message");
    }, buttonStyle: () => ({
      backgroundColor: e.buttonBackgroundColor,
      color: e.buttonTextColor
    }) };
  }
}), Yu = "button[data-v-aaadc865]:disabled{background:#ccc;cursor:not-allowed}.chat-input[data-v-aaadc865]{display:flex;align-items:center;padding:10px;border-top:1px solid #ccc}.chat-input input[data-v-aaadc865]{flex-grow:1;padding:8px;border:1px solid #ccc;border-radius:5px;background:#f9f9f9;color:#292929;font-size:medium}.chat-input button[data-v-aaadc865]{margin-left:10px;padding:8px 12px;border:none;border-radius:5px;cursor:pointer;font-size:medium}.chat-input button[data-v-aaadc865]:disabled,.chat-input input[data-v-aaadc865]:disabled{background:#ccc;cursor:not-allowed}.loading-indicator[data-v-aaadc865]{display:inline-block;margin-left:10px}.spinner[data-v-aaadc865]{border:4px solid rgba(0,0,0,.1);border-left-color:#007bff;border-radius:50%;width:20px;height:20px;animation:spin-aaadc865 1s linear infinite}@keyframes spin-aaadc865{to{transform:rotate(360deg)}}", Zu = { class: "chat-input" }, Ju = ["placeholder", "disabled"], Qu = ["disabled"], ef = {
  key: 0,
  class: "loading-indicator"
};
function tf(e, t, n, s, r, i) {
  return He(), lt("div", Zu, [
    ha(Ye("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.localInput = o),
      onKeyup: t[1] || (t[1] = Zc((...o) => e.handleSend && e.handleSend(...o), ["enter"])),
      placeholder: e.placeholder,
      disabled: e.sending
    }, null, 40, Ju), [
      [Xc, e.localInput]
    ]),
    Ye("button", {
      disabled: e.sending,
      onClick: t[2] || (t[2] = (...o) => e.handleSend && e.handleSend(...o)),
      style: ot(e.buttonStyle())
    }, " Enviar ", 12, Qu),
    e.sending ? (He(), lt("div", ef, t[3] || (t[3] = [
      Ye("div", { class: "spinner" }, null, -1)
    ]))) : Fn("", !0)
  ]);
}
const nf = /* @__PURE__ */ Xt(Xu, [["render", tf], ["styles", [Yu]], ["__scopeId", "data-v-aaadc865"]]), sf = /* @__PURE__ */ Mt({
  name: "ChatWindow",
  components: {
    ChatHeader: ou,
    ChatMessages: qu,
    ChatInput: nf
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
    const n = nt(e.userInput);
    return bt(
      () => e.userInput,
      (i) => {
        n.value = i;
      }
    ), bt(n, (i) => {
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
}), rf = ".chat-window[data-v-5921353b]{position:fixed;bottom:20px;right:20px;width:min(90vw,400px);height:min(50vh,500px);background:#fff;border-radius:10px;box-shadow:0 0 15px #0000004d;display:flex;flex-direction:column;overflow:hidden}@media screen and (max-width: 845px){.chat-window[data-v-5921353b]{width:100%!important;height:70%!important;bottom:0;right:0;border-radius:0;max-height:none}}";
function of(e, t, n, s, r, i) {
  const o = hn("ChatHeader"), l = hn("ChatMessages"), a = hn("ChatInput");
  return He(), lt("div", {
    class: "chat-window",
    style: ot({
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
const lf = /* @__PURE__ */ Xt(sf, [["render", of], ["styles", [rf]], ["__scopeId", "data-v-5921353b"]]), af = /* @__PURE__ */ Mt({
  name: "ChatToggle",
  props: {
    headerIcon: {
      type: String,
      required: !0
    }
  }
}), cf = ".chatbot-toggle[data-v-d7b03065]{position:fixed;bottom:20px;right:20px;background:#fff;border-radius:50%;width:60px;height:60px;border:none;box-shadow:0 0 10px #0000004d;cursor:pointer;padding:0}.chatbot-toggle img[data-v-d7b03065]{width:100%;height:100%;border-radius:50%}", uf = ["src"];
function ff(e, t, n, s, r, i) {
  return He(), lt("button", {
    class: "chatbot-toggle",
    onClick: t[0] || (t[0] = (o) => e.$emit("toggle-chat"))
  }, [
    Ye("img", {
      src: e.headerIcon,
      alt: "Chatbot",
      class: "chatbot-icon"
    }, null, 8, uf)
  ]);
}
const hf = /* @__PURE__ */ Xt(af, [["render", ff], ["styles", [cf]], ["__scopeId", "data-v-d7b03065"]]);
var df = Object.defineProperty, pf = (e, t, n) => t in e ? df(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Hn = (e, t, n) => pf(e, typeof t != "symbol" ? t + "" : t, n);
class Ci extends Error {
  constructor(t, n) {
    super(t), Hn(this, "type"), Hn(this, "field"), Hn(this, "value"), Hn(this, "line"), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
function Hs(e) {
}
function gf(e) {
  const { onEvent: t = Hs, onError: n = Hs, onRetry: s = Hs, onComment: r } = e;
  let i = "", o = !0, l, a = "", u = "";
  function c(b) {
    const A = o ? b.replace(/^\xEF\xBB\xBF/, "") : b, [I, N] = _f(`${i}${A}`);
    for (const B of I)
      d(B);
    i = N, o = !1;
  }
  function d(b) {
    if (b === "") {
      _();
      return;
    }
    if (b.startsWith(":")) {
      r && r(b.slice(b.startsWith(": ") ? 2 : 1));
      return;
    }
    const A = b.indexOf(":");
    if (A !== -1) {
      const I = b.slice(0, A), N = b[A + 1] === " " ? 2 : 1, B = b.slice(A + N);
      p(I, B, b);
      return;
    }
    p(b, "", b);
  }
  function p(b, A, I) {
    switch (b) {
      case "event":
        u = A;
        break;
      case "data":
        a = `${a}${A}
`;
        break;
      case "id":
        l = A.includes("\0") ? void 0 : A;
        break;
      case "retry":
        /^\d+$/.test(A) ? s(parseInt(A, 10)) : n(
          new Ci(`Invalid \`retry\` value: "${A}"`, {
            type: "invalid-retry",
            value: A,
            line: I
          })
        );
        break;
      default:
        n(
          new Ci(
            `Unknown field "${b.length > 20 ? `${b.slice(0, 20)}…` : b}"`,
            { type: "unknown-field", field: b, value: A, line: I }
          )
        );
        break;
    }
  }
  function _() {
    a.length > 0 && t({
      id: l,
      event: u || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: a.endsWith(`
`) ? a.slice(0, -1) : a
    }), l = void 0, a = "", u = "";
  }
  function S(b = {}) {
    i && b.consume && d(i), l = void 0, a = "", u = "", i = "";
  }
  return { feed: c, reset: S };
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
class Ii extends Event {
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
    return s(Ai(this), n);
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
    return t(Ai(this), n);
  }
}
function mf(e) {
  const t = globalThis.DOMException;
  return typeof t == "function" ? new t(e, "SyntaxError") : new SyntaxError(e);
}
function er(e) {
  return e instanceof Error ? "errors" in e && Array.isArray(e.errors) ? e.errors.map(er).join(", ") : "cause" in e && e.cause instanceof Error ? `${e}: ${er(e.cause)}` : e.message : `${e}`;
}
function Ai(e) {
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
}, Mr = (e, t, n) => t.has(e) || fl("Cannot " + n), $ = (e, t, n) => (Mr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ue = (e, t, n) => t.has(e) ? fl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ne = (e, t, n, s) => (Mr(e, t, "write to private field"), t.set(e, n), n), tt = (e, t, n) => (Mr(e, t, "access private method"), n), we, It, Lt, Vn, ns, mn, jt, bn, _t, $t, Kt, Ut, rn, De, tr, nr, sr, Oi, rr, ir, on, or, lr;
class Wn extends EventTarget {
  constructor(t, n) {
    var s, r;
    super(), ue(this, De), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, ue(this, we), ue(this, It), ue(this, Lt), ue(this, Vn), ue(this, ns), ue(this, mn), ue(this, jt), ue(this, bn, null), ue(this, _t), ue(this, $t), ue(this, Kt, null), ue(this, Ut, null), ue(this, rn, null), ue(this, nr, async (i) => {
      var o;
      $(this, $t).reset();
      const { body: l, redirected: a, status: u, headers: c } = i;
      if (u === 204) {
        tt(this, De, on).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (a ? ne(this, Lt, new URL(i.url)) : ne(this, Lt, void 0), u !== 200) {
        tt(this, De, on).call(this, `Non-200 status code (${u})`, u);
        return;
      }
      if (!(c.get("content-type") || "").startsWith("text/event-stream")) {
        tt(this, De, on).call(this, 'Invalid content type, expected "text/event-stream"', u);
        return;
      }
      if ($(this, we) === this.CLOSED)
        return;
      ne(this, we, this.OPEN);
      const d = new Event("open");
      if ((o = $(this, rn)) == null || o.call(this, d), this.dispatchEvent(d), typeof l != "object" || !l || !("getReader" in l)) {
        tt(this, De, on).call(this, "Invalid response body, expected a web ReadableStream", u), this.close();
        return;
      }
      const p = new TextDecoder(), _ = l.getReader();
      let S = !0;
      do {
        const { done: b, value: A } = await _.read();
        A && $(this, $t).feed(p.decode(A, { stream: !b })), b && (S = !1, $(this, $t).reset(), tt(this, De, or).call(this));
      } while (S);
    }), ue(this, sr, (i) => {
      ne(this, _t, void 0), !(i.name === "AbortError" || i.type === "aborted") && tt(this, De, or).call(this, er(i));
    }), ue(this, rr, (i) => {
      typeof i.id == "string" && ne(this, bn, i.id);
      const o = new MessageEvent(i.event || "message", {
        data: i.data,
        origin: $(this, Lt) ? $(this, Lt).origin : $(this, It).origin,
        lastEventId: i.id || ""
      });
      $(this, Ut) && (!i.event || i.event === "message") && $(this, Ut).call(this, o), this.dispatchEvent(o);
    }), ue(this, ir, (i) => {
      ne(this, mn, i);
    }), ue(this, lr, () => {
      ne(this, jt, void 0), $(this, we) === this.CONNECTING && tt(this, De, tr).call(this);
    });
    try {
      if (t instanceof URL)
        ne(this, It, t);
      else if (typeof t == "string")
        ne(this, It, new URL(t, bf()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw mf("An invalid or illegal string was specified");
    }
    ne(this, $t, gf({
      onEvent: $(this, rr),
      onRetry: $(this, ir)
    })), ne(this, we, this.CONNECTING), ne(this, mn, 3e3), ne(this, ns, (s = n == null ? void 0 : n.fetch) != null ? s : globalThis.fetch), ne(this, Vn, (r = n == null ? void 0 : n.withCredentials) != null ? r : !1), tt(this, De, tr).call(this);
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
    return $(this, we);
  }
  /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */
  get url() {
    return $(this, It).href;
  }
  /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */
  get withCredentials() {
    return $(this, Vn);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return $(this, Kt);
  }
  set onerror(t) {
    ne(this, Kt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return $(this, Ut);
  }
  set onmessage(t) {
    ne(this, Ut, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return $(this, rn);
  }
  set onopen(t) {
    ne(this, rn, t);
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
    $(this, jt) && clearTimeout($(this, jt)), $(this, we) !== this.CLOSED && ($(this, _t) && $(this, _t).abort(), ne(this, we, this.CLOSED), ne(this, _t, void 0));
  }
}
we = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
tr = function() {
  ne(this, we, this.CONNECTING), ne(this, _t, new AbortController()), $(this, ns)($(this, It), tt(this, De, Oi).call(this)).then($(this, nr)).catch($(this, sr));
}, nr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), /**
* Get request options for the `fetch()` request
*
* @returns The request options
* @internal
*/
Oi = function() {
  var e;
  const t = {
    // [spec] Let `corsAttributeState` be `Anonymous`…
    // [spec] …will have their mode set to "cors"…
    mode: "cors",
    redirect: "follow",
    headers: { Accept: "text/event-stream", ...$(this, bn) ? { "Last-Event-ID": $(this, bn) } : void 0 },
    cache: "no-store",
    signal: (e = $(this, _t)) == null ? void 0 : e.signal
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
  $(this, we) !== this.CLOSED && ne(this, we, this.CLOSED);
  const s = new Ii("error", { code: t, message: e });
  (n = $(this, Kt)) == null || n.call(this, s), this.dispatchEvent(s);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
or = function(e, t) {
  var n;
  if ($(this, we) === this.CLOSED)
    return;
  ne(this, we, this.CONNECTING);
  const s = new Ii("error", { code: t, message: e });
  (n = $(this, Kt)) == null || n.call(this, s), this.dispatchEvent(s), ne(this, jt, setTimeout($(this, lr), $(this, mn)));
}, lr = /* @__PURE__ */ new WeakMap(), /**
* ReadyState representing an EventSource currently trying to connect
*
* @public
*/
Wn.CONNECTING = 0, /**
* ReadyState representing an EventSource connection that is open (eg connected)
*
* @public
*/
Wn.OPEN = 1, /**
* ReadyState representing an EventSource connection that is closed (eg disconnected)
*
* @public
*/
Wn.CLOSED = 2;
function bf() {
  const e = "document" in globalThis ? globalThis.document : void 0;
  return e && typeof e == "object" && "baseURI" in e && typeof e.baseURI == "string" ? e.baseURI : void 0;
}
const Dn = "https://api.chatbot.junngla.com";
class xf {
  constructor(t) {
    this.config = t;
  }
  async loadChatHistory(t) {
    const n = await fetch(`${Dn}/openai/${t}/chat`, {
      headers: {
        "Content-Type": "application/json",
        ...this.config.apikey && { "X-Api-Key": this.config.apikey }
      }
    });
    if (!n.ok)
      throw new Error("Error loading chat history");
    return n.json();
  }
  async sendChatMessage(t) {
    const n = await fetch(`${Dn}/openai/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.config.apikey && { "X-Api-Key": this.config.apikey }
      },
      body: JSON.stringify(t)
    });
    if (!n.ok)
      throw new Error("Error sending chat message");
    return n.json();
  }
  createChatStream(t) {
    return new Wn(`${Dn}/openai/${t}/chat-streams`, {
      fetch: (n) => fetch(n, {
        headers: {
          ...this.config.apikey && { "X-Api-Key": this.config.apikey }
        }
      })
    });
  }
  async checkHealth() {
    const t = await fetch(`${Dn}/check/health`, {
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
  buttonTextColor: "#fff"
};
function et(e) {
  return /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(e);
}
function Ln(e) {
  return typeof e == "string" && e.trim() !== "";
}
function Ni(e) {
  return typeof e == "string" && /^\d+(\.\d+)?$/.test(e);
}
function Tf(e) {
  if (typeof e != "string") return !1;
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
function yf(e) {
  const t = {
    ...ce,
    ...e
  };
  return Ln(e.dataApiKey) || (console.error(
    "Implementación fallida: 'dataApiKey' es requerida y debe ser una cadena no vacía. Se usará el valor por defecto."
  ), t.dataApiKey = ce.dataApiKey), [
    {
      key: "dataUuidUser",
      validator: Ln,
      error: "'data-uuid-user' es inválida."
    },
    {
      key: "defaultMessage",
      validator: Ln,
      error: "'default-message' es inválida."
    },
    {
      key: "headerName",
      validator: Ln,
      error: "'header-name' es inválida."
    },
    {
      key: "headerIcon",
      validator: Tf,
      error: "'header-icon' debe ser una URL."
    },
    {
      key: "headerBackgroundColor",
      validator: et,
      error: "'header-background-color' debe ser un color hexadecimal válido."
    },
    {
      key: "headerTextColor",
      validator: et,
      error: "'header-text-color' debe ser un color hexadecimal válido."
    },
    {
      key: "userMessageColor",
      validator: et,
      error: "'user-message-color' debe ser un color hexadecimal válido."
    },
    {
      key: "assistantMessageColor",
      validator: et,
      error: "'assistant-message-color' debe ser un color hexadecimal válido."
    },
    {
      key: "userMessageBackground",
      validator: et,
      error: "'user-message-background' debe ser un color hexadecimal válido."
    },
    {
      key: "assistantMessageBackground",
      validator: et,
      error: "'assistant-message-background' debe ser un color hexadecimal válido."
    },
    {
      key: "closeBtnColor",
      validator: et,
      error: "'close-btn-color' debe ser un color hexadecimal válido."
    },
    {
      key: "buttonBackgroundColor",
      validator: et,
      error: "'button-background-color' debe ser un color hexadecimal válido."
    },
    {
      key: "buttonTextColor",
      validator: et,
      error: "'button-text-color' debe ser un color hexadecimal válido."
    },
    {
      key: "chatbotWidth",
      validator: Ni,
      error: "'chatbot-width' debe ser una cadena numérica."
    },
    {
      key: "chatbotHeight",
      validator: Ni,
      error: "'chatbot-height' debe ser una cadena numérica."
    }
  ].forEach(({ key: s, validator: r, error: i }) => {
    e[s] !== void 0 && e[s] !== ce[s] && (r(e[s]) || (console.error(
      `Implementación fallida: ${i} Se usará el valor por defecto para '${s}'.`
    ), t[s] = ce[s]));
  }), t;
}
const Ef = /* @__PURE__ */ Mt({
  name: "ChatBot",
  components: { ChatWindow: lf, ChatToggle: hf },
  props: { ...ce },
  setup(e) {
    const t = Zs(() => yf(e)), n = { apikey: t.value.dataApiKey };
    Ro("chatConfig", n);
    const s = new xf(n), r = {
      isOpen: nt(!1),
      userInput: nt(""),
      messages: nt([]),
      threadId: nt(localStorage.getItem("threadId")),
      sending: nt(!1),
      chatStatus: nt(""),
      showChatBot: nt(!1)
    };
    let i = null, o = null, l = null;
    const a = Zs(
      () => r.sending.value && r.chatStatus.value ? `Estado: ${r.chatStatus.value}` : "Escribe tu mensaje..."
    ), u = zo(), c = () => {
      br(() => {
        var B, R;
        const I = (R = (B = u == null ? void 0 : u.vnode) == null ? void 0 : B.el) == null ? void 0 : R.getRootNode();
        if (!I) return;
        const N = I.querySelector(
          ".chat-messages"
        );
        N && (N.scrollTop = N.scrollHeight);
      });
    };
    bt(r.messages, c, { deep: !0 });
    const d = () => {
      i && o && (i.removeEventListener(`${r.threadId.value}`, o), i.close(), i = null, o = null);
    }, p = (I, N) => {
      r.messages.value.push({ text: I, from: N });
    }, _ = async () => {
      if (r.threadId.value)
        try {
          (await s.loadChatHistory(r.threadId.value)).forEach((N) => {
            var F, ee;
            const B = ((ee = (F = N == null ? void 0 : N.content[0]) == null ? void 0 : F.text) == null ? void 0 : ee.value) || "", R = (N == null ? void 0 : N.role) || "assistant";
            B && p(B, R);
          });
        } catch {
          p("Error al cargar historial.", "assistantError");
        }
      else
        p(t.value.defaultMessage, "assistant");
    }, S = (I) => {
      d(), i = s.createChatStream(I), o = (N) => {
        const B = JSON.parse(N.data);
        B.word && (l === null ? (p(B.word, "assistant"), l = r.messages.value.length - 1) : r.messages.value[l].text += B.word), r.chatStatus.value = B.status, ["completed", "failed"].includes(B.status) && (r.sending.value = !1, l = null, d());
      }, i.addEventListener(`${r.threadId.value}`, o), i.onerror = d;
    }, b = async () => {
      if (!(!r.userInput.value.trim() || r.sending.value)) {
        p(r.userInput.value, "user"), r.sending.value = !0;
        try {
          const { threadId: I } = await s.sendChatMessage({ message: r.userInput.value, threadId: r.threadId.value });
          r.threadId.value = I, localStorage.setItem("threadId", I), S(I);
        } catch {
          p("Error al enviar mensaje.", "assistantError"), r.sending.value = !1;
        }
        r.userInput.value = "";
      }
    }, A = async () => {
      r.isOpen.value = !r.isOpen.value, r.isOpen.value && !r.messages.value.length && (r.sending.value = !0, await _(), r.sending.value = !1);
    };
    return Tr(async () => {
      try {
        const { success: I } = await s.checkHealth();
        r.showChatBot.value = I;
      } catch {
        r.showChatBot.value = !1;
      }
    }), { ...r, validatedProps: t, sendMessage: b, toggleChat: A, placeholderText: a };
  }
}), wf = ".chat-slide-enter-active[data-v-76067343],.chat-slide-leave-active[data-v-76067343]{transition:transform .4s ease,opacity .4s ease}.chat-slide-enter-from[data-v-76067343]{transform:translate(100%);opacity:0}.chat-slide-enter-to[data-v-76067343],.chat-slide-leave-from[data-v-76067343]{transform:translate(0);opacity:1}.chat-slide-leave-to[data-v-76067343]{transform:translate(100%);opacity:0}", kf = { key: 0 };
function Sf(e, t, n, s, r, i) {
  const o = hn("ChatWindow"), l = hn("ChatToggle");
  return e.showChatBot ? (He(), lt("div", kf, [
    de(vc, { name: "chat-slide" }, {
      default: ho(() => [
        e.isOpen ? (He(), Xs(o, Wo({
          key: 0,
          messages: e.messages,
          userInput: e.userInput,
          "onUpdate:userInput": t[0] || (t[0] = (a) => e.userInput = a),
          sending: e.sending,
          placeholder: e.placeholderText
        }, e.validatedProps, {
          onSendMessage: e.sendMessage,
          onToggleChat: e.toggleChat
        }), null, 16, ["messages", "userInput", "sending", "placeholder", "onSendMessage", "onToggleChat"])) : Fn("", !0)
      ]),
      _: 1
    }),
    e.isOpen ? Fn("", !0) : (He(), Xs(l, {
      key: 0,
      onToggleChat: e.toggleChat,
      "header-icon": e.validatedProps.headerIcon
    }, null, 8, ["onToggleChat", "header-icon"]))
  ])) : Fn("", !0);
}
const hl = /* @__PURE__ */ Xt(Ef, [["render", Sf], ["styles", [wf]], ["__scopeId", "data-v-76067343"]]), vf = {
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
  }
};
hl.props = vf;
const Rf = /* @__PURE__ */ zc(hl, { shadowRoot: !0 });
customElements.define("chat-bot", Rf);
