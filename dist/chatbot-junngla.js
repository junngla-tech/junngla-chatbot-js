var pl = Object.defineProperty;
var gl = (e, t, n) => t in e ? pl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var J = (e, t, n) => gl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function cr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {}, Ft = [], $e = () => {
}, _l = () => !1, ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ur = (e) => e.startsWith("onUpdate:"), ce = Object.assign, fr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ml = Object.prototype.hasOwnProperty, W = (e, t) => ml.call(e, t), O = Array.isArray, Gt = (e) => ss(e) === "[object Map]", Po = (e) => ss(e) === "[object Set]", P = (e) => typeof e == "function", ae = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", Bo = (e) => (se(e) || P(e)) && P(e.then) && P(e.catch), Ho = Object.prototype.toString, ss = (e) => Ho.call(e), bl = (e) => ss(e).slice(8, -1), rs = (e) => ss(e) === "[object Object]", hr = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ln = /* @__PURE__ */ cr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Tl = /-(\w)/g, xe = os(
  (e) => e.replace(Tl, (t, n) => n ? n.toUpperCase() : "")
), yl = /\B([A-Z])/g, Ae = os(
  (e) => e.replace(yl, "-$1").toLowerCase()
), is = os((e) => e.charAt(0).toUpperCase() + e.slice(1)), xs = os(
  (e) => e ? `on${is(e)}` : ""
), mt = (e, t) => !Object.is(e, t), Ln = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Do = (e, t, n, s = !1) => {
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
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Lr;
const ls = () => Lr || (Lr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ot(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ae(s) ? wl(s) : ot(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (ae(e) || se(e))
    return e;
}
const xl = /;(?![^(]*\))/g, El = /:([^]+)/, kl = /\/\*[^]*?\*\//g;
function wl(e) {
  const t = {};
  return e.replace(kl, "").split(xl).forEach((n) => {
    if (n) {
      const s = n.split(El);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function as(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const s = as(e[n]);
      s && (t += s + " ");
    }
  else if (se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Sl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vl = /* @__PURE__ */ cr(Sl);
function Lo(e) {
  return !!e || e === "";
}
const $o = (e) => !!(e && e.__v_isRef === !0), Uo = (e) => ae(e) ? e : e == null ? "" : O(e) || se(e) && (e.toString === Ho || !P(e.toString)) ? $o(e) ? Uo(e.value) : JSON.stringify(e, jo, 2) : String(e), jo = (e, t) => $o(t) ? jo(e, t.value) : Gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[Es(s, o) + " =>"] = r, n),
    {}
  )
} : Po(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Es(n))
} : yt(t) ? Es(t) : se(t) && !O(t) && !rs(t) ? String(t) : t, Es = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Rl = { VITE_API_CHATBOT: "https://api.chatbot.junngla.com", GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_e46b9a90-a571-4ab1-b26b-aea4462300ae", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/10.8.2 node/v20.19.0 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_e46b9a90-a571-4ab1-b26b-aea4462300ae", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "junngla-tech", GRADLE_HOME: "/usr/share/gradle-8.13", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.0.13004108", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "91486299", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", SYSTEMD_EXEC_PID: "708", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.13/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250323.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.7/x64", JOURNAL_STREAM: "8:6636", GITHUB_WORKFLOW: "Build Docker Images", _: "/opt/hostedtoolcache/node/20.19.0/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", npm_config_npm_version: "10.8.2", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", STATS_D: "false", GITHUB_RUN_ID: "14112989455", STATS_VMFE: "true", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "tag", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4209f8f77e942a80a28201ecc8672b24d9a346bb", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "junngla-tech/junngla-chatbot-frontend-web/.github/workflows/docker-image.yml@refs/tags/1.0.0", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/20.19.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_28b762f5-2f14-461e-956f-d930a7126440", INVOCATION_ID: "d9f9112320264494b1ca9f7e3b838518", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", NODE: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", npm_package_name: "junngla-chatbot-frontend-web", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "8", GITHUB_TRIGGERING_ACTOR: "CamiloMH", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 13", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "1.0.0", GITHUB_REPOSITORY: "junngla-tech/junngla-chatbot-frontend-web", STATS_D_D: "false", npm_lifecycle_script: "vue-tsc -b && vite build", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "955357351", GITHUB_ACTIONS: "true", STATS_PIP: "false", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4209f8f77e942a80a28201ecc8672b24d9a346bb", GITHUB_RUN_ATTEMPT: "1", STATS_D_TC: "true", GITHUB_REF: "refs/tags/1.0.0", GITHUB_ACTOR: "CamiloMH", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", npm_config_globalconfig: "/opt/hostedtoolcache/node/20.19.0/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_e46b9a90-a571-4ab1-b26b-aea4462300ae", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", GITHUB_ACTOR_ID: "28745682", RUNNER_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web", npm_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_e46b9a90-a571-4ab1-b26b-aea4462300ae", npm_config_global_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.2.12479018", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", STATS_EXTP: "https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_e46b9a90-a571-4ab1-b26b-aea4462300ae", INIT_CWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", EDITOR: "vi", NODE_ENV: "production" };
let Ie;
class Cl {
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
function Il() {
  return Ie;
}
let ne;
const ks = /* @__PURE__ */ new WeakSet();
class Fo {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $r(this), Wo(this);
    const t = ne, n = Ue;
    ne = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      zo(this), ne = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        gr(t);
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
let Go = 0, an, cn;
function Vo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = cn, cn = e;
    return;
  }
  e.next = an, an = e;
}
function dr() {
  Go++;
}
function pr() {
  if (--Go > 0)
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
function Wo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), gr(s), Al(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function $s(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ko(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ko(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Tn))
    return;
  e.globalVersion = Tn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !$s(e)) {
    e.flags &= -3;
    return;
  }
  const n = ne, s = Ue;
  ne = e, Ue = !0;
  try {
    Wo(e);
    const r = e.fn(e._value);
    (t.version === 0 || mt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ne = n, Ue = s, zo(e), e.flags &= -3;
  }
}
function gr(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      gr(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Al(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const qo = [];
function lt() {
  qo.push(Ue), Ue = !1;
}
function at() {
  const e = qo.pop();
  Ue = e === void 0 ? !0 : e;
}
function $r(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ne;
    ne = void 0;
    try {
      t();
    } finally {
      ne = n;
    }
  }
}
let Tn = 0;
class Ol {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class _r {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!ne || !Ue || ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ne)
      n = this.activeLink = new Ol(ne, this), ne.deps ? (n.prevDep = ne.depsTail, ne.depsTail.nextDep = n, ne.depsTail = n) : ne.deps = ne.depsTail = n, Xo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ne.depsTail, n.nextDep = void 0, ne.depsTail.nextDep = n, ne.depsTail = n, ne.deps === n && (ne.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Tn++, this.notify(t);
  }
  notify(t) {
    dr();
    try {
      Rl.NODE_ENV;
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      pr();
    }
  }
}
function Xo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Xo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Us = /* @__PURE__ */ new WeakMap(), At = Symbol(
  ""
), js = Symbol(
  ""
), yn = Symbol(
  ""
);
function _e(e, t, n) {
  if (Ue && ne) {
    let s = Us.get(e);
    s || Us.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new _r()), r.map = s, r.key = n), r.track();
  }
}
function st(e, t, n, s, r, o) {
  const i = Us.get(e);
  if (!i) {
    Tn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (dr(), t === "clear")
    i.forEach(l);
  else {
    const a = O(e), u = a && hr(n);
    if (a && n === "length") {
      const c = Number(s);
      i.forEach((d, p) => {
        (p === "length" || p === yn || !yt(p) && p >= c) && l(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), u && l(i.get(yn)), t) {
        case "add":
          a ? u && l(i.get("length")) : (l(i.get(At)), Gt(e) && l(i.get(js)));
          break;
        case "delete":
          a || (l(i.get(At)), Gt(e) && l(i.get(js)));
          break;
        case "set":
          Gt(e) && l(i.get(At));
          break;
      }
  }
  pr();
}
function Bt(e) {
  const t = V(e);
  return t === e ? t : (_e(t, "iterate", yn), Be(e) ? t : t.map(me));
}
function cs(e) {
  return _e(e = V(e), "iterate", yn), e;
}
const Nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ws(this, Symbol.iterator, me);
  },
  concat(...e) {
    return Bt(this).concat(
      ...e.map((t) => O(t) ? Bt(t) : t)
    );
  },
  entries() {
    return ws(this, "entries", (e) => (e[1] = me(e[1]), e));
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
    return Ss(this, "includes", e);
  },
  indexOf(...e) {
    return Ss(this, "indexOf", e);
  },
  join(e) {
    return Bt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ss(this, "lastIndexOf", e);
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
    return ws(this, "values", me);
  }
};
function ws(e, t, n) {
  const s = cs(e), r = s[t]();
  return s !== e && !Be(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const Ml = Array.prototype;
function Je(e, t, n, s, r, o) {
  const i = cs(e), l = i !== e && !Be(e), a = i[t];
  if (a !== Ml[t]) {
    const d = a.apply(e, o);
    return l ? me(d) : d;
  }
  let u = n;
  i !== e && (l ? u = function(d, p) {
    return n.call(this, me(d), p, e);
  } : n.length > 2 && (u = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const c = a.call(i, u, s);
  return l && r ? r(c) : c;
}
function Ur(e, t, n, s) {
  const r = cs(e);
  let o = n;
  return r !== e && (Be(e) ? n.length > 3 && (o = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : o = function(i, l, a) {
    return n.call(this, i, me(l), a, e);
  }), r[t](o, ...s);
}
function Ss(e, t, n) {
  const s = V(e);
  _e(s, "iterate", yn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && br(n[0]) ? (n[0] = V(n[0]), s[t](...n)) : r;
}
function Qt(e, t, n = []) {
  lt(), dr();
  const s = V(e)[t].apply(e, n);
  return pr(), at(), s;
}
const Pl = /* @__PURE__ */ cr("__proto__,__v_isRef,__isVue"), Yo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function Bl(e) {
  yt(e) || (e = String(e));
  const t = V(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Zo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? si : ni : o ? ti : ei).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = O(t);
    if (!r) {
      let a;
      if (i && (a = Nl[n]))
        return a;
      if (n === "hasOwnProperty")
        return Bl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      pe(t) ? t : s
    );
    return (yt(n) ? Yo.has(n) : Pl(n)) || (r || _e(t, "get", n), o) ? l : pe(l) ? i && hr(n) ? l : l.value : se(l) ? r ? ri(l) : mr(l) : l;
  }
}
class Jo extends Zo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const a = Ot(o);
      if (!Be(s) && !Ot(s) && (o = V(o), s = V(s)), !O(t) && pe(o) && !pe(s))
        return a ? !1 : (o.value = s, !0);
    }
    const i = O(t) && hr(n) ? Number(n) < t.length : W(t, n), l = Reflect.set(
      t,
      n,
      s,
      pe(t) ? t : r
    );
    return t === V(r) && (i ? mt(s, o) && st(t, "set", n, s) : st(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = W(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && st(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!yt(n) || !Yo.has(n)) && _e(t, "has", n), s;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      O(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class Qo extends Zo {
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
const Hl = /* @__PURE__ */ new Jo(), Dl = /* @__PURE__ */ new Qo(), Ll = /* @__PURE__ */ new Jo(!0), $l = /* @__PURE__ */ new Qo(!0), Fs = (e) => e, An = (e) => Reflect.getPrototypeOf(e);
function Ul(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = V(r), i = Gt(o), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = r[e](...s), c = n ? Fs : t ? Gs : me;
    return !t && _e(
      o,
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
function jl(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = V(o), l = V(r);
      e || (mt(r, l) && _e(i, "get", r), _e(i, "get", l));
      const { has: a } = An(i), u = t ? Fs : e ? Gs : me;
      if (a.call(i, r))
        return u(o.get(r));
      if (a.call(i, l))
        return u(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && _e(V(r), "iterate", At), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = V(o), l = V(r);
      return e || (mt(r, l) && _e(i, "has", r), _e(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
    },
    forEach(r, o) {
      const i = this, l = i.__v_raw, a = V(l), u = t ? Fs : e ? Gs : me;
      return !e && _e(a, "iterate", At), l.forEach((c, d) => r.call(o, u(c), u(d), i));
    }
  };
  return ce(
    n,
    e ? {
      add: On("add"),
      set: On("set"),
      delete: On("delete"),
      clear: On("clear")
    } : {
      add(r) {
        !t && !Be(r) && !Ot(r) && (r = V(r));
        const o = V(this);
        return An(o).has.call(o, r) || (o.add(r), st(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !Be(o) && !Ot(o) && (o = V(o));
        const i = V(this), { has: l, get: a } = An(i);
        let u = l.call(i, r);
        u || (r = V(r), u = l.call(i, r));
        const c = a.call(i, r);
        return i.set(r, o), u ? mt(o, c) && st(i, "set", r, o) : st(i, "add", r, o), this;
      },
      delete(r) {
        const o = V(this), { has: i, get: l } = An(o);
        let a = i.call(o, r);
        a || (r = V(r), a = i.call(o, r)), l && l.call(o, r);
        const u = o.delete(r);
        return a && st(o, "delete", r, void 0), u;
      },
      clear() {
        const r = V(this), o = r.size !== 0, i = r.clear();
        return o && st(
          r,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Ul(r, e, t);
  }), n;
}
function us(e, t) {
  const n = jl(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    W(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Fl = {
  get: /* @__PURE__ */ us(!1, !1)
}, Gl = {
  get: /* @__PURE__ */ us(!1, !0)
}, Vl = {
  get: /* @__PURE__ */ us(!0, !1)
}, Wl = {
  get: /* @__PURE__ */ us(!0, !0)
}, ei = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap();
function zl(e) {
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
function Kl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zl(bl(e));
}
function mr(e) {
  return Ot(e) ? e : fs(
    e,
    !1,
    Hl,
    Fl,
    ei
  );
}
function ql(e) {
  return fs(
    e,
    !1,
    Ll,
    Gl,
    ti
  );
}
function ri(e) {
  return fs(
    e,
    !0,
    Dl,
    Vl,
    ni
  );
}
function Nn(e) {
  return fs(
    e,
    !0,
    $l,
    Wl,
    si
  );
}
function fs(e, t, n, s, r) {
  if (!se(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = Kl(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? s : n
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
function br(e) {
  return e ? !!e.__v_raw : !1;
}
function V(e) {
  const t = e && e.__v_raw;
  return t ? V(t) : e;
}
function Xl(e) {
  return !W(e, "__v_skip") && Object.isExtensible(e) && Do(e, "__v_skip", !0), e;
}
const me = (e) => se(e) ? mr(e) : e, Gs = (e) => se(e) ? ri(e) : e;
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ft(e) {
  return Yl(e, !1);
}
function Yl(e, t) {
  return pe(e) ? e : new Zl(e, t);
}
class Zl {
  constructor(t, n) {
    this.dep = new _r(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : V(t), this._value = n ? t : me(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Be(t) || Ot(t);
    t = s ? t : V(t), mt(t, n) && (this._rawValue = t, this._value = s ? t : me(t), this.dep.trigger());
  }
}
function oi(e) {
  return pe(e) ? e.value : e;
}
const Jl = {
  get: (e, t, n) => t === "__v_raw" ? e : oi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return pe(r) && !pe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ii(e) {
  return Vt(e) ? e : new Proxy(e, Jl);
}
class Ql {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new _r(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Tn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ne !== this)
      return Vo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ko(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ea(e, t, n = !1) {
  let s, r;
  return P(e) ? s = e : (s = e.get, r = e.set), new Ql(s, r, n);
}
const Mn = {}, Vn = /* @__PURE__ */ new WeakMap();
let Rt;
function ta(e, t = !1, n = Rt) {
  if (n) {
    let s = Vn.get(n);
    s || Vn.set(n, s = []), s.push(e);
  }
}
function na(e, t, n = Q) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: a } = n, u = (v) => r ? v : Be(v) || r === !1 || r === 0 ? rt(v, 1) : rt(v);
  let c, d, p, _, w = !1, b = !1;
  if (pe(e) ? (d = () => e.value, w = Be(e)) : Vt(e) ? (d = () => u(e), w = !0) : O(e) ? (b = !0, w = e.some((v) => Vt(v) || Be(v)), d = () => e.map((v) => {
    if (pe(v))
      return v.value;
    if (Vt(v))
      return u(v);
    if (P(v))
      return a ? a(v, 2) : v();
  })) : P(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (p) {
      lt();
      try {
        p();
      } finally {
        at();
      }
    }
    const v = Rt;
    Rt = c;
    try {
      return a ? a(e, 3, [_]) : e(_);
    } finally {
      Rt = v;
    }
  } : d = $e, t && r) {
    const v = d, D = r === !0 ? 1 / 0 : r;
    d = () => rt(v(), D);
  }
  const C = Il(), B = () => {
    c.stop(), C && C.active && fr(C.effects, c);
  };
  if (o && t) {
    const v = t;
    t = (...D) => {
      v(...D), B();
    };
  }
  let $ = b ? new Array(e.length).fill(Mn) : Mn;
  const j = (v) => {
    if (!(!(c.flags & 1) || !c.dirty && !v))
      if (t) {
        const D = c.run();
        if (r || w || (b ? D.some((H, Y) => mt(H, $[Y])) : mt(D, $))) {
          p && p();
          const H = Rt;
          Rt = c;
          try {
            const Y = [
              D,
              // pass undefined as the old value when it's changed for the first time
              $ === Mn ? void 0 : b && $[0] === Mn ? [] : $,
              _
            ];
            a ? a(t, 3, Y) : (
              // @ts-expect-error
              t(...Y)
            ), $ = D;
          } finally {
            Rt = H;
          }
        }
      } else
        c.run();
  };
  return l && l(j), c = new Fo(d), c.scheduler = i ? () => i(j, !1) : j, _ = (v) => ta(v, !1, c), p = c.onStop = () => {
    const v = Vn.get(c);
    if (v) {
      if (a)
        a(v, 4);
      else
        for (const D of v) D();
      Vn.delete(c);
    }
  }, t ? s ? j(!0) : $ = c.run() : i ? i(j.bind(null, !0), !0) : c.run(), B.pause = c.pause.bind(c), B.resume = c.resume.bind(c), B.stop = B, B;
}
function rt(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, pe(e))
    rt(e.value, t, n);
  else if (O(e))
    for (let s = 0; s < e.length; s++)
      rt(e[s], t, n);
  else if (Po(e) || Gt(e))
    e.forEach((s) => {
      rt(s, t, n);
    });
  else if (rs(e)) {
    for (const s in e)
      rt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && rt(e[s], t, n);
  }
  return e;
}
var ht = { VITE_API_CHATBOT: "https://api.chatbot.junngla.com", GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_e46b9a90-a571-4ab1-b26b-aea4462300ae", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/10.8.2 node/v20.19.0 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_e46b9a90-a571-4ab1-b26b-aea4462300ae", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "junngla-tech", GRADLE_HOME: "/usr/share/gradle-8.13", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.0.13004108", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "91486299", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", SYSTEMD_EXEC_PID: "708", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.13/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250323.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.7/x64", JOURNAL_STREAM: "8:6636", GITHUB_WORKFLOW: "Build Docker Images", _: "/opt/hostedtoolcache/node/20.19.0/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", npm_config_npm_version: "10.8.2", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", STATS_D: "false", GITHUB_RUN_ID: "14112989455", STATS_VMFE: "true", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "tag", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "4209f8f77e942a80a28201ecc8672b24d9a346bb", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "junngla-tech/junngla-chatbot-frontend-web/.github/workflows/docker-image.yml@refs/tags/1.0.0", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/20.19.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_28b762f5-2f14-461e-956f-d930a7126440", INVOCATION_ID: "d9f9112320264494b1ca9f7e3b838518", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", NODE: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", npm_package_name: "junngla-chatbot-frontend-web", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "8", GITHUB_TRIGGERING_ACTOR: "CamiloMH", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 13", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "1.0.0", GITHUB_REPOSITORY: "junngla-tech/junngla-chatbot-frontend-web", STATS_D_D: "false", npm_lifecycle_script: "vue-tsc -b && vite build", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "955357351", GITHUB_ACTIONS: "true", STATS_PIP: "false", npm_package_version: "1.0.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "4209f8f77e942a80a28201ecc8672b24d9a346bb", GITHUB_RUN_ATTEMPT: "1", STATS_D_TC: "true", GITHUB_REF: "refs/tags/1.0.0", GITHUB_ACTOR: "CamiloMH", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", npm_config_globalconfig: "/opt/hostedtoolcache/node/20.19.0/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_e46b9a90-a571-4ab1-b26b-aea4462300ae", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", GITHUB_ACTOR_ID: "28745682", RUNNER_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web", npm_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_e46b9a90-a571-4ab1-b26b-aea4462300ae", npm_config_global_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.2.12479018", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", STATS_EXTP: "https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_e46b9a90-a571-4ab1-b26b-aea4462300ae", INIT_CWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", EDITOR: "vi", NODE_ENV: "production" };
const un = [];
let vs = !1;
function sa(e, ...t) {
  if (vs) return;
  vs = !0, lt();
  const n = un.length ? un[un.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = ra();
  if (s)
    qt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, l;
          return (l = (i = o.toString) == null ? void 0 : i.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${Xi(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...oa(r)), console.warn(...o);
  }
  at(), vs = !1;
}
function ra() {
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
`], ...ia(n));
  }), t;
}
function ia({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Xi(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...la(e.props), o] : [r + o];
}
function la(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...li(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function li(e, t, n) {
  return ae(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : pe(t) ? (t = li(e, V(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = V(t), n ? t : [`${e}=`, t]);
}
function qt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    hs(r, t, n);
  }
}
function je(e, t, n, s) {
  if (P(e)) {
    const r = qt(e, t, n, s);
    return r && Bo(r) && r.catch((o) => {
      hs(o, t, n);
    }), r;
  }
  if (O(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(je(e[o], t, n, s));
    return r;
  }
}
function hs(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Q;
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
    if (o) {
      lt(), qt(o, null, 10, [
        e,
        a,
        u
      ]), at();
      return;
    }
  }
  aa(e, n, r, s, i);
}
function aa(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Te = [];
let qe = -1;
const Wt = [];
let dt = null, Ht = 0;
const ai = /* @__PURE__ */ Promise.resolve();
let Wn = null;
function zn(e) {
  const t = Wn || ai;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ca(e) {
  let t = qe + 1, n = Te.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Te[s], o = xn(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Tr(e) {
  if (!(e.flags & 1)) {
    const t = xn(e), n = Te[Te.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xn(n) ? Te.push(e) : Te.splice(ca(t), 0, e), e.flags |= 1, ci();
  }
}
function ci() {
  Wn || (Wn = ai.then(fi));
}
function ua(e) {
  O(e) ? Wt.push(...e) : dt && e.id === -1 ? dt.splice(Ht + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1), ci();
}
function jr(e, t, n = qe + 1) {
  for (; n < Te.length; n++) {
    const s = Te[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Te.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ui(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, s) => xn(n) - xn(s)
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
const xn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fi(e) {
  const t = $e;
  try {
    for (qe = 0; qe < Te.length; qe++) {
      const n = Te[qe];
      n && !(n.flags & 8) && (ht.NODE_ENV !== "production" && t(n), n.flags & 4 && (n.flags &= -2), qt(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; qe < Te.length; qe++) {
      const n = Te[qe];
      n && (n.flags &= -2);
    }
    qe = -1, Te.length = 0, ui(), Wn = null, (Te.length || Wt.length) && fi();
  }
}
let Se = null, hi = null;
function Kn(e) {
  const t = Se;
  return Se = e, hi = e && e.type.__scopeId || null, t;
}
function di(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Jr(-1);
    const o = Kn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Kn(o), s._d && Jr(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function fa(e, t) {
  if (Se === null)
    return e;
  const n = ms(Se), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, a = Q] = t[r];
    o && (P(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && rt(i), s.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function kt(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[s];
    a && (lt(), je(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), at());
  }
}
const ha = Symbol("_vte"), pi = (e) => e.__isTeleport, pt = Symbol("_leaveCb"), Pn = Symbol("_enterCb");
function da() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return yr(() => {
    e.isMounted = !0;
  }), Ei(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ne = [Function, Array], gi = {
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
}, _i = (e) => {
  const t = e.subTree;
  return t.component ? _i(t.component) : t;
}, pa = {
  name: "BaseTransition",
  props: gi,
  setup(e, { slots: t }) {
    const n = Wi(), s = da();
    return () => {
      const r = t.default && Ti(t.default(), !0);
      if (!r || !r.length)
        return;
      const o = mi(r), i = V(e), { mode: l } = i;
      if (s.isLeaving)
        return Rs(o);
      const a = Fr(o);
      if (!a)
        return Rs(o);
      let u = Vs(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      a.type !== we && En(a, u);
      let c = n.subTree && Fr(n.subTree);
      if (c && c.type !== we && !Ct(a, c) && _i(n).type !== we) {
        let d = Vs(
          c,
          i,
          s,
          n
        );
        if (En(c, d), l === "out-in" && a.type !== we)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Rs(o);
        l === "in-out" && a.type !== we ? d.delayLeave = (p, _, w) => {
          const b = bi(
            s,
            c
          );
          b[String(c.key)] = c, p[pt] = () => {
            _(), p[pt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            w(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return o;
    };
  }
};
function mi(e) {
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
const ga = pa;
function bi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Vs(e, t, n, s, r) {
  const {
    appear: o,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: p,
    onLeave: _,
    onAfterLeave: w,
    onLeaveCancelled: b,
    onBeforeAppear: C,
    onAppear: B,
    onAfterAppear: $,
    onAppearCancelled: j
  } = t, v = String(e.key), D = bi(n, e), H = (L, z) => {
    L && je(
      L,
      s,
      9,
      z
    );
  }, Y = (L, z) => {
    const ie = z[1];
    H(L, z), O(L) ? L.every((I) => I.length <= 1) && ie() : L.length <= 1 && ie();
  }, Z = {
    mode: i,
    persisted: l,
    beforeEnter(L) {
      let z = a;
      if (!n.isMounted)
        if (o)
          z = C || a;
        else
          return;
      L[pt] && L[pt](
        !0
        /* cancelled */
      );
      const ie = D[v];
      ie && Ct(e, ie) && ie.el[pt] && ie.el[pt](), H(z, [L]);
    },
    enter(L) {
      let z = u, ie = c, I = d;
      if (!n.isMounted)
        if (o)
          z = B || u, ie = $ || c, I = j || d;
        else
          return;
      let re = !1;
      const ge = L[Pn] = (Ze) => {
        re || (re = !0, Ze ? H(I, [L]) : H(ie, [L]), Z.delayedLeave && Z.delayedLeave(), L[Pn] = void 0);
      };
      z ? Y(z, [L, ge]) : ge();
    },
    leave(L, z) {
      const ie = String(e.key);
      if (L[Pn] && L[Pn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return z();
      H(p, [L]);
      let I = !1;
      const re = L[pt] = (ge) => {
        I || (I = !0, z(), ge ? H(b, [L]) : H(w, [L]), L[pt] = void 0, D[ie] === e && delete D[ie]);
      };
      D[ie] = e, _ ? Y(_, [L, re]) : re();
    },
    clone(L) {
      const z = Vs(
        L,
        t,
        n,
        s,
        r
      );
      return r && r(z), z;
    }
  };
  return Z;
}
function Rs(e) {
  if (ds(e))
    return e = Tt(e), e.children = null, e;
}
function Fr(e) {
  if (!ds(e))
    return pi(e.type) && e.children ? mi(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && P(n.default))
      return n.default();
  }
}
function En(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, En(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ti(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Le ? (i.patchFlag & 128 && r++, s = s.concat(
      Ti(i.children, t, l)
    )) : (t || i.type !== we) && s.push(l != null ? Tt(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return P(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function yi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function qn(e, t, n, s, r = !1) {
  if (O(e)) {
    e.forEach(
      (w, b) => qn(
        w,
        t && (O(t) ? t[b] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (fn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && qn(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? ms(s.component) : s.el, i = r ? null : o, { i: l, r: a } = e, u = t && t.r, c = l.refs === Q ? l.refs = {} : l.refs, d = l.setupState, p = V(d), _ = d === Q ? () => !1 : (w) => W(p, w);
  if (u != null && u !== a && (ae(u) ? (c[u] = null, _(u) && (d[u] = null)) : pe(u) && (u.value = null)), P(a))
    qt(a, l, 12, [i, c]);
  else {
    const w = ae(a), b = pe(a);
    if (w || b) {
      const C = () => {
        if (e.f) {
          const B = w ? _(a) ? d[a] : c[a] : a.value;
          r ? O(B) && fr(B, o) : O(B) ? B.includes(o) || B.push(o) : w ? (c[a] = [o], _(a) && (d[a] = c[a])) : (a.value = [o], e.k && (c[e.k] = a.value));
        } else w ? (c[a] = i, _(a) && (d[a] = i)) : b && (a.value = i, e.k && (c[e.k] = i));
      };
      i ? (C.id = -1, Ce(C, n)) : C();
    }
  }
}
ls().requestIdleCallback;
ls().cancelIdleCallback;
const fn = (e) => !!e.type.__asyncLoader, ds = (e) => e.type.__isKeepAlive;
function _a(e, t) {
  xi(e, "a", t);
}
function ma(e, t) {
  xi(e, "da", t);
}
function xi(e, t, n = fe) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ps(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ds(r.parent.vnode) && ba(s, t, n, r), r = r.parent;
  }
}
function ba(e, t, n, s) {
  const r = ps(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ki(() => {
    fr(s[t], r);
  }, n);
}
function ps(e, t, n = fe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      lt();
      const l = vn(n), a = je(t, n, e, i);
      return l(), at(), a;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const ct = (e) => (t, n = fe) => {
  (!wn || e === "sp") && ps(e, (...s) => t(...s), n);
}, Ta = ct("bm"), yr = ct("m"), ya = ct(
  "bu"
), xa = ct("u"), Ei = ct(
  "bum"
), ki = ct("um"), Ea = ct(
  "sp"
), ka = ct("rtg"), wa = ct("rtc");
function Sa(e, t = fe) {
  ps("ec", e, t);
}
const va = "components";
function hn(e, t) {
  return Ca(va, e, !0, t) || e;
}
const Ra = Symbol.for("v-ndc");
function Ca(e, t, n = !0, s = !1) {
  const r = Se || fe;
  if (r) {
    const o = r.type;
    {
      const l = qi(
        o,
        !1
      );
      if (l && (l === t || l === xe(t) || l === is(xe(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Gr(r[e] || o[e], t) || // global registration
      Gr(r.appContext[e], t)
    );
    return !i && s ? o : i;
  }
}
function Gr(e, t) {
  return e && (e[t] || e[xe(t)] || e[is(xe(t))]);
}
function Ia(e, t, n, s) {
  let r;
  const o = n, i = O(e);
  if (i || ae(e)) {
    const l = i && Vt(e);
    let a = !1;
    l && (a = !Be(e), e = cs(e)), r = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      r[u] = t(
        a ? me(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, o);
  } else if (se(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, o)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        r[a] = t(e[c], c, a, o);
      }
    }
  else
    r = [];
  return r;
}
const Ws = (e) => e ? zi(e) ? ms(e) : Ws(e.parent) : null, dn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => Si(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Tr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zn.bind(e.proxy)),
    $watch: (e) => Ya.bind(e)
  })
), Cs = (e, t) => e !== Q && !e.__isScriptSetup && W(e, t), Aa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: a } = e;
    let u;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Cs(s, t))
          return i[t] = 1, s[t];
        if (r !== Q && W(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && W(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== Q && W(n, t))
          return i[t] = 4, n[t];
        zs && (i[t] = 0);
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
    if (n !== Q && W(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, W(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Cs(r, t) ? (r[t] = n, !0) : s !== Q && W(s, t) ? (s[t] = n, !0) : W(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== Q && W(e, i) || Cs(t, i) || (l = o[0]) && W(l, i) || W(s, i) || W(dn, i) || W(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : W(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Vr(e) {
  return O(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let zs = !0;
function Oa(e) {
  const t = Si(e), n = e.proxy, s = e.ctx;
  zs = !1, t.beforeCreate && Wr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: p,
    beforeUpdate: _,
    updated: w,
    activated: b,
    deactivated: C,
    beforeDestroy: B,
    beforeUnmount: $,
    destroyed: j,
    unmounted: v,
    render: D,
    renderTracked: H,
    renderTriggered: Y,
    errorCaptured: Z,
    serverPrefetch: L,
    // public API
    expose: z,
    inheritAttrs: ie,
    // assets
    components: I,
    directives: re,
    filters: ge
  } = t;
  if (u && Na(u, s, null), i)
    for (const le in i) {
      const ee = i[le];
      P(ee) && (s[le] = ee.bind(n));
    }
  if (r) {
    const le = r.call(n, n);
    se(le) && (e.data = mr(le));
  }
  if (zs = !0, o)
    for (const le in o) {
      const ee = o[le], xt = P(ee) ? ee.bind(n, n) : P(ee.get) ? ee.get.bind(n, n) : $e, Cn = !P(ee) && P(ee.set) ? ee.set.bind(n) : $e, Et = Js({
        get: xt,
        set: Cn
      });
      Object.defineProperty(s, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Et.value,
        set: (Fe) => Et.value = Fe
      });
    }
  if (l)
    for (const le in l)
      wi(l[le], s, n, le);
  if (a) {
    const le = P(a) ? a.call(n) : a;
    Reflect.ownKeys(le).forEach((ee) => {
      Ri(ee, le[ee]);
    });
  }
  c && Wr(c, e, "c");
  function he(le, ee) {
    O(ee) ? ee.forEach((xt) => le(xt.bind(n))) : ee && le(ee.bind(n));
  }
  if (he(Ta, d), he(yr, p), he(ya, _), he(xa, w), he(_a, b), he(ma, C), he(Sa, Z), he(wa, H), he(ka, Y), he(Ei, $), he(ki, v), he(Ea, L), O(z))
    if (z.length) {
      const le = e.exposed || (e.exposed = {});
      z.forEach((ee) => {
        Object.defineProperty(le, ee, {
          get: () => n[ee],
          set: (xt) => n[ee] = xt
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === $e && (e.render = D), ie != null && (e.inheritAttrs = ie), I && (e.components = I), re && (e.directives = re), L && yi(e);
}
function Na(e, t, n = $e) {
  O(e) && (e = Ks(e));
  for (const s in e) {
    const r = e[s];
    let o;
    se(r) ? "default" in r ? o = $n(
      r.from || s,
      r.default,
      !0
    ) : o = $n(r.from || s) : o = $n(r), pe(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function Wr(e, t, n) {
  je(
    O(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function wi(e, t, n, s) {
  let r = s.includes(".") ? Ui(n, s) : () => n[s];
  if (ae(e)) {
    const o = t[e];
    P(o) && bt(r, o);
  } else if (P(e))
    bt(r, e.bind(n));
  else if (se(e))
    if (O(e))
      e.forEach((o) => wi(o, t, n, s));
    else {
      const o = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(o) && bt(r, o, e);
    }
}
function Si(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (u) => Xn(a, u, i, !0)
  ), Xn(a, t, i)), se(t) && o.set(t, a), a;
}
function Xn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Xn(e, o, n, !0), r && r.forEach(
    (i) => Xn(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = Ma[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ma = {
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
  watch: Ba,
  // provide / inject
  provide: zr,
  inject: Pa
};
function zr(e, t) {
  return t ? e ? function() {
    return ce(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Pa(e, t) {
  return sn(Ks(e), Ks(t));
}
function Ks(e) {
  if (O(e)) {
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
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Kr(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    Vr(e),
    Vr(t ?? {})
  ) : t;
}
function Ba(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = be(e[s], t[s]);
  return n;
}
function vi() {
  return {
    app: null,
    config: {
      isNativeTag: _l,
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
let Ha = 0;
function Da(e, t) {
  return function(s, r = null) {
    P(s) || (s = ce({}, s)), r != null && !se(r) && (r = null);
    const o = vi(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = o.app = {
      _uid: Ha++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: yc,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return i.has(c) || (c && P(c.install) ? (i.add(c), c.install(u, ...d)) : P(c) && (i.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (o.components[c] = d, u) : o.components[c];
      },
      directive(c, d) {
        return d ? (o.directives[c] = d, u) : o.directives[c];
      },
      mount(c, d, p) {
        if (!a) {
          const _ = u._ceVNode || de(s, r);
          return _.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(_, c, p), a = !0, u._container = c, c.__vue_app__ = u, ms(_.component);
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
        return o.provides[c] = d, u;
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
function Ri(e, t) {
  if (fe) {
    let n = fe.provides;
    const s = fe.parent && fe.parent.provides;
    s === n && (n = fe.provides = Object.create(s)), n[e] = t;
  }
}
function $n(e, t, n = !1) {
  const s = fe || Se;
  if (s || zt) {
    const r = zt ? zt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(s && s.proxy) : t;
  }
}
const Ci = {}, Ii = () => Object.create(Ci), Ai = (e) => Object.getPrototypeOf(e) === Ci;
function La(e, t, n, s = !1) {
  const r = {}, o = Ii();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Oi(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : ql(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function $a(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, l = V(r), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let p = c[d];
        if (gs(e.emitsOptions, p))
          continue;
        const _ = t[p];
        if (a)
          if (W(o, p))
            _ !== o[p] && (o[p] = _, u = !0);
          else {
            const w = xe(p);
            r[w] = qs(
              a,
              l,
              w,
              _,
              e,
              !1
            );
          }
        else
          _ !== o[p] && (o[p] = _, u = !0);
      }
    }
  } else {
    Oi(e, t, r, o) && (u = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !W(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ae(d)) === d || !W(t, c))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[d] = qs(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (o !== l)
      for (const d in o)
        (!t || !W(t, d)) && (delete o[d], u = !0);
  }
  u && st(e.attrs, "set", "");
}
function Oi(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (ln(a))
        continue;
      const u = t[a];
      let c;
      r && W(r, c = xe(a)) ? !o || !o.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : gs(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, i = !0);
    }
  if (o) {
    const a = V(n), u = l || Q;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = qs(
        r,
        a,
        d,
        u[d],
        e,
        !W(u, d)
      );
    }
  }
  return i;
}
function qs(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = W(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && P(a)) {
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
    i[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ae(n)) && (s = !0));
  }
  return s;
}
const Ua = /* @__PURE__ */ new WeakMap();
function Ni(e, t, n = !1) {
  const s = n ? Ua : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let a = !1;
  if (!P(e)) {
    const c = (d) => {
      a = !0;
      const [p, _] = Ni(d, t, !0);
      ce(i, p), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !a)
    return se(e) && s.set(e, Ft), Ft;
  if (O(o))
    for (let c = 0; c < o.length; c++) {
      const d = xe(o[c]);
      qr(d) && (i[d] = Q);
    }
  else if (o)
    for (const c in o) {
      const d = xe(c);
      if (qr(d)) {
        const p = o[c], _ = i[d] = O(p) || P(p) ? { type: p } : ce({}, p), w = _.type;
        let b = !1, C = !0;
        if (O(w))
          for (let B = 0; B < w.length; ++B) {
            const $ = w[B], j = P($) && $.name;
            if (j === "Boolean") {
              b = !0;
              break;
            } else j === "String" && (C = !1);
          }
        else
          b = P(w) && w.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = b, _[
          1
          /* shouldCastTrue */
        ] = C, (b || W(_, "default")) && l.push(d);
      }
    }
  const u = [i, l];
  return se(e) && s.set(e, u), u;
}
function qr(e) {
  return e[0] !== "$" && !ln(e);
}
const Mi = (e) => e[0] === "_" || e === "$stable", xr = (e) => O(e) ? e.map(Xe) : [Xe(e)], ja = (e, t, n) => {
  if (t._n)
    return t;
  const s = di((...r) => (ht.NODE_ENV !== "production" && fe && (!n || (n.root, fe.root)), xr(t(...r))), n);
  return s._c = !1, s;
}, Pi = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Mi(r)) continue;
    const o = e[r];
    if (P(o))
      t[r] = ja(r, o, s);
    else if (o != null) {
      const i = xr(o);
      t[r] = () => i;
    }
  }
}, Bi = (e, t) => {
  const n = xr(t);
  e.slots.default = () => n;
}, Hi = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, Fa = (e, t, n) => {
  const s = e.slots = Ii();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Hi(s, t, n), n && Do(s, "_", r, !0)) : Pi(t, s);
  } else t && Bi(e, t);
}, Ga = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = Q;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : Hi(r, t, n) : (o = !t.$stable, Pi(t, r)), i = t;
  } else t && (Bi(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Mi(l) && i[l] == null && delete r[l];
}, Ce = sc;
function Va(e) {
  return Wa(e);
}
function Wa(e, t) {
  const n = ls();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: p,
    setScopeId: _ = $e,
    insertStaticContent: w
  } = e, b = (f, h, g, y = null, m = null, T = null, S = void 0, k = null, E = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !Ct(f, h) && (y = In(f), Fe(f, m, T, !0), f = null), h.patchFlag === -2 && (E = !1, h.dynamicChildren = null);
    const { type: x, ref: N, shapeFlag: R } = h;
    switch (x) {
      case _s:
        C(f, h, g, y);
        break;
      case we:
        B(f, h, g, y);
        break;
      case As:
        f == null && $(h, g, y, S);
        break;
      case Le:
        I(
          f,
          h,
          g,
          y,
          m,
          T,
          S,
          k,
          E
        );
        break;
      default:
        R & 1 ? D(
          f,
          h,
          g,
          y,
          m,
          T,
          S,
          k,
          E
        ) : R & 6 ? re(
          f,
          h,
          g,
          y,
          m,
          T,
          S,
          k,
          E
        ) : (R & 64 || R & 128) && x.process(
          f,
          h,
          g,
          y,
          m,
          T,
          S,
          k,
          E,
          Zt
        );
    }
    N != null && m && qn(N, f && f.ref, T, h || f, !h);
  }, C = (f, h, g, y) => {
    if (f == null)
      s(
        h.el = l(h.children),
        g,
        y
      );
    else {
      const m = h.el = f.el;
      h.children !== f.children && u(m, h.children);
    }
  }, B = (f, h, g, y) => {
    f == null ? s(
      h.el = a(h.children || ""),
      g,
      y
    ) : h.el = f.el;
  }, $ = (f, h, g, y) => {
    [f.el, f.anchor] = w(
      f.children,
      h,
      g,
      y,
      f.el,
      f.anchor
    );
  }, j = ({ el: f, anchor: h }, g, y) => {
    let m;
    for (; f && f !== h; )
      m = p(f), s(f, g, y), f = m;
    s(h, g, y);
  }, v = ({ el: f, anchor: h }) => {
    let g;
    for (; f && f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, D = (f, h, g, y, m, T, S, k, E) => {
    h.type === "svg" ? S = "svg" : h.type === "math" && (S = "mathml"), f == null ? H(
      h,
      g,
      y,
      m,
      T,
      S,
      k,
      E
    ) : L(
      f,
      h,
      m,
      T,
      S,
      k,
      E
    );
  }, H = (f, h, g, y, m, T, S, k) => {
    let E, x;
    const { props: N, shapeFlag: R, transition: A, dirs: M } = f;
    if (E = f.el = i(
      f.type,
      T,
      N && N.is,
      N
    ), R & 8 ? c(E, f.children) : R & 16 && Z(
      f.children,
      E,
      null,
      y,
      m,
      Is(f, T),
      S,
      k
    ), M && kt(f, null, y, "created"), Y(E, f, f.scopeId, S, y), N) {
      for (const te in N)
        te !== "value" && !ln(te) && o(E, te, null, N[te], T, y);
      "value" in N && o(E, "value", null, N.value, T), (x = N.onVnodeBeforeMount) && ze(x, y, f);
    }
    M && kt(f, null, y, "beforeMount");
    const G = za(m, A);
    G && A.beforeEnter(E), s(E, h, g), ((x = N && N.onVnodeMounted) || G || M) && Ce(() => {
      x && ze(x, y, f), G && A.enter(E), M && kt(f, null, y, "mounted");
    }, m);
  }, Y = (f, h, g, y, m) => {
    if (g && _(f, g), y)
      for (let T = 0; T < y.length; T++)
        _(f, y[T]);
    if (m) {
      let T = m.subTree;
      if (h === T || Fi(T.type) && (T.ssContent === h || T.ssFallback === h)) {
        const S = m.vnode;
        Y(
          f,
          S,
          S.scopeId,
          S.slotScopeIds,
          m.parent
        );
      }
    }
  }, Z = (f, h, g, y, m, T, S, k, E = 0) => {
    for (let x = E; x < f.length; x++) {
      const N = f[x] = k ? gt(f[x]) : Xe(f[x]);
      b(
        null,
        N,
        h,
        g,
        y,
        m,
        T,
        S,
        k
      );
    }
  }, L = (f, h, g, y, m, T, S) => {
    const k = h.el = f.el;
    let { patchFlag: E, dynamicChildren: x, dirs: N } = h;
    E |= f.patchFlag & 16;
    const R = f.props || Q, A = h.props || Q;
    let M;
    if (g && wt(g, !1), (M = A.onVnodeBeforeUpdate) && ze(M, g, h, f), N && kt(h, f, g, "beforeUpdate"), g && wt(g, !0), (R.innerHTML && A.innerHTML == null || R.textContent && A.textContent == null) && c(k, ""), x ? z(
      f.dynamicChildren,
      x,
      k,
      g,
      y,
      Is(h, m),
      T
    ) : S || ee(
      f,
      h,
      k,
      null,
      g,
      y,
      Is(h, m),
      T,
      !1
    ), E > 0) {
      if (E & 16)
        ie(k, R, A, g, m);
      else if (E & 2 && R.class !== A.class && o(k, "class", null, A.class, m), E & 4 && o(k, "style", R.style, A.style, m), E & 8) {
        const G = h.dynamicProps;
        for (let te = 0; te < G.length; te++) {
          const q = G[te], ve = R[q], Ee = A[q];
          (Ee !== ve || q === "value") && o(k, q, ve, Ee, m, g);
        }
      }
      E & 1 && f.children !== h.children && c(k, h.children);
    } else !S && x == null && ie(k, R, A, g, m);
    ((M = A.onVnodeUpdated) || N) && Ce(() => {
      M && ze(M, g, h, f), N && kt(h, f, g, "updated");
    }, y);
  }, z = (f, h, g, y, m, T, S) => {
    for (let k = 0; k < h.length; k++) {
      const E = f[k], x = h[k], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ct(E, x) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 70) ? d(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      b(
        E,
        x,
        N,
        null,
        y,
        m,
        T,
        S,
        !0
      );
    }
  }, ie = (f, h, g, y, m) => {
    if (h !== g) {
      if (h !== Q)
        for (const T in h)
          !ln(T) && !(T in g) && o(
            f,
            T,
            h[T],
            null,
            m,
            y
          );
      for (const T in g) {
        if (ln(T)) continue;
        const S = g[T], k = h[T];
        S !== k && T !== "value" && o(f, T, k, S, m, y);
      }
      "value" in g && o(f, "value", h.value, g.value, m);
    }
  }, I = (f, h, g, y, m, T, S, k, E) => {
    const x = h.el = f ? f.el : l(""), N = h.anchor = f ? f.anchor : l("");
    let { patchFlag: R, dynamicChildren: A, slotScopeIds: M } = h;
    M && (k = k ? k.concat(M) : M), f == null ? (s(x, g, y), s(N, g, y), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      N,
      m,
      T,
      S,
      k,
      E
    )) : R > 0 && R & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (z(
      f.dynamicChildren,
      A,
      g,
      m,
      T,
      S,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || m && h === m.subTree) && Di(
      f,
      h,
      !0
      /* shallow */
    )) : ee(
      f,
      h,
      g,
      N,
      m,
      T,
      S,
      k,
      E
    );
  }, re = (f, h, g, y, m, T, S, k, E) => {
    h.slotScopeIds = k, f == null ? h.shapeFlag & 512 ? m.ctx.activate(
      h,
      g,
      y,
      S,
      E
    ) : ge(
      h,
      g,
      y,
      m,
      T,
      S,
      E
    ) : Ze(f, h, E);
  }, ge = (f, h, g, y, m, T, S) => {
    const k = f.component = fc(
      f,
      y,
      m
    );
    if (ds(f) && (k.ctx.renderer = Zt), hc(k, !1, S), k.asyncDep) {
      if (m && m.registerDep(k, he, S), !f.el) {
        const E = k.subTree = de(we);
        B(null, E, h, g);
      }
    } else
      he(
        k,
        f,
        h,
        g,
        m,
        T,
        S
      );
  }, Ze = (f, h, g) => {
    const y = h.component = f.component;
    if (tc(f, h, g))
      if (y.asyncDep && !y.asyncResolved) {
        le(y, h, g);
        return;
      } else
        y.next = h, y.update();
    else
      h.el = f.el, y.vnode = h;
  }, he = (f, h, g, y, m, T, S) => {
    const k = () => {
      if (f.isMounted) {
        let { next: R, bu: A, u: M, parent: G, vnode: te } = f;
        {
          const Ve = Li(f);
          if (Ve) {
            R && (R.el = te.el, le(f, R, S)), Ve.asyncDep.then(() => {
              f.isUnmounted || k();
            });
            return;
          }
        }
        let q = R, ve;
        wt(f, !1), R ? (R.el = te.el, le(f, R, S)) : R = te, A && Ln(A), (ve = R.props && R.props.onVnodeBeforeUpdate) && ze(ve, G, R, te), wt(f, !0);
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
          T
        ), R.el = Ee.el, q === null && nc(f, Ee.el), M && Ce(M, m), (ve = R.props && R.props.onVnodeUpdated) && Ce(
          () => ze(ve, G, R, te),
          m
        );
      } else {
        let R;
        const { el: A, props: M } = h, { bm: G, m: te, parent: q, root: ve, type: Ee } = f, Ge = fn(h);
        wt(f, !1), G && Ln(G), !Ge && (R = M && M.onVnodeBeforeMount) && ze(R, q, h), wt(f, !0);
        {
          ve.ce && ve.ce._injectChildStyle(Ee);
          const Ve = f.subTree = Yr(f);
          b(
            null,
            Ve,
            g,
            y,
            f,
            m,
            T
          ), h.el = Ve.el;
        }
        if (te && Ce(te, m), !Ge && (R = M && M.onVnodeMounted)) {
          const Ve = h;
          Ce(
            () => ze(R, q, Ve),
            m
          );
        }
        (h.shapeFlag & 256 || q && fn(q.vnode) && q.vnode.shapeFlag & 256) && f.a && Ce(f.a, m), f.isMounted = !0, h = g = y = null;
      }
    };
    f.scope.on();
    const E = f.effect = new Fo(k);
    f.scope.off();
    const x = f.update = E.run.bind(E), N = f.job = E.runIfDirty.bind(E);
    N.i = f, N.id = f.uid, E.scheduler = () => Tr(N), wt(f, !0), x();
  }, le = (f, h, g) => {
    h.component = f;
    const y = f.vnode.props;
    f.vnode = h, f.next = null, $a(f, h.props, y, g), Ga(f, h.children, g), lt(), jr(f), at();
  }, ee = (f, h, g, y, m, T, S, k, E = !1) => {
    const x = f && f.children, N = f ? f.shapeFlag : 0, R = h.children, { patchFlag: A, shapeFlag: M } = h;
    if (A > 0) {
      if (A & 128) {
        Cn(
          x,
          R,
          g,
          y,
          m,
          T,
          S,
          k,
          E
        );
        return;
      } else if (A & 256) {
        xt(
          x,
          R,
          g,
          y,
          m,
          T,
          S,
          k,
          E
        );
        return;
      }
    }
    M & 8 ? (N & 16 && Yt(x, m, T), R !== x && c(g, R)) : N & 16 ? M & 16 ? Cn(
      x,
      R,
      g,
      y,
      m,
      T,
      S,
      k,
      E
    ) : Yt(x, m, T, !0) : (N & 8 && c(g, ""), M & 16 && Z(
      R,
      g,
      y,
      m,
      T,
      S,
      k,
      E
    ));
  }, xt = (f, h, g, y, m, T, S, k, E) => {
    f = f || Ft, h = h || Ft;
    const x = f.length, N = h.length, R = Math.min(x, N);
    let A;
    for (A = 0; A < R; A++) {
      const M = h[A] = E ? gt(h[A]) : Xe(h[A]);
      b(
        f[A],
        M,
        g,
        null,
        m,
        T,
        S,
        k,
        E
      );
    }
    x > N ? Yt(
      f,
      m,
      T,
      !0,
      !1,
      R
    ) : Z(
      h,
      g,
      y,
      m,
      T,
      S,
      k,
      E,
      R
    );
  }, Cn = (f, h, g, y, m, T, S, k, E) => {
    let x = 0;
    const N = h.length;
    let R = f.length - 1, A = N - 1;
    for (; x <= R && x <= A; ) {
      const M = f[x], G = h[x] = E ? gt(h[x]) : Xe(h[x]);
      if (Ct(M, G))
        b(
          M,
          G,
          g,
          null,
          m,
          T,
          S,
          k,
          E
        );
      else
        break;
      x++;
    }
    for (; x <= R && x <= A; ) {
      const M = f[R], G = h[A] = E ? gt(h[A]) : Xe(h[A]);
      if (Ct(M, G))
        b(
          M,
          G,
          g,
          null,
          m,
          T,
          S,
          k,
          E
        );
      else
        break;
      R--, A--;
    }
    if (x > R) {
      if (x <= A) {
        const M = A + 1, G = M < N ? h[M].el : y;
        for (; x <= A; )
          b(
            null,
            h[x] = E ? gt(h[x]) : Xe(h[x]),
            g,
            G,
            m,
            T,
            S,
            k,
            E
          ), x++;
      }
    } else if (x > A)
      for (; x <= R; )
        Fe(f[x], m, T, !0), x++;
    else {
      const M = x, G = x, te = /* @__PURE__ */ new Map();
      for (x = G; x <= A; x++) {
        const Re = h[x] = E ? gt(h[x]) : Xe(h[x]);
        Re.key != null && te.set(Re.key, x);
      }
      let q, ve = 0;
      const Ee = A - G + 1;
      let Ge = !1, Ve = 0;
      const Jt = new Array(Ee);
      for (x = 0; x < Ee; x++) Jt[x] = 0;
      for (x = M; x <= R; x++) {
        const Re = f[x];
        if (ve >= Ee) {
          Fe(Re, m, T, !0);
          continue;
        }
        let We;
        if (Re.key != null)
          We = te.get(Re.key);
        else
          for (q = G; q <= A; q++)
            if (Jt[q - G] === 0 && Ct(Re, h[q])) {
              We = q;
              break;
            }
        We === void 0 ? Fe(Re, m, T, !0) : (Jt[We - G] = x + 1, We >= Ve ? Ve = We : Ge = !0, b(
          Re,
          h[We],
          g,
          null,
          m,
          T,
          S,
          k,
          E
        ), ve++);
      }
      const Hr = Ge ? Ka(Jt) : Ft;
      for (q = Hr.length - 1, x = Ee - 1; x >= 0; x--) {
        const Re = G + x, We = h[Re], Dr = Re + 1 < N ? h[Re + 1].el : y;
        Jt[x] === 0 ? b(
          null,
          We,
          g,
          Dr,
          m,
          T,
          S,
          k,
          E
        ) : Ge && (q < 0 || x !== Hr[q] ? Et(We, g, Dr, 2) : q--);
      }
    }
  }, Et = (f, h, g, y, m = null) => {
    const { el: T, type: S, transition: k, children: E, shapeFlag: x } = f;
    if (x & 6) {
      Et(f.component.subTree, h, g, y);
      return;
    }
    if (x & 128) {
      f.suspense.move(h, g, y);
      return;
    }
    if (x & 64) {
      S.move(f, h, g, Zt);
      return;
    }
    if (S === Le) {
      s(T, h, g);
      for (let R = 0; R < E.length; R++)
        Et(E[R], h, g, y);
      s(f.anchor, h, g);
      return;
    }
    if (S === As) {
      j(f, h, g);
      return;
    }
    if (y !== 2 && x & 1 && k)
      if (y === 0)
        k.beforeEnter(T), s(T, h, g), Ce(() => k.enter(T), m);
      else {
        const { leave: R, delayLeave: A, afterLeave: M } = k, G = () => s(T, h, g), te = () => {
          R(T, () => {
            G(), M && M();
          });
        };
        A ? A(T, G, te) : te();
      }
    else
      s(T, h, g);
  }, Fe = (f, h, g, y = !1, m = !1) => {
    const {
      type: T,
      props: S,
      ref: k,
      children: E,
      dynamicChildren: x,
      shapeFlag: N,
      patchFlag: R,
      dirs: A,
      cacheIndex: M
    } = f;
    if (R === -2 && (m = !1), k != null && qn(k, null, g, f, !0), M != null && (h.renderCache[M] = void 0), N & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const G = N & 1 && A, te = !fn(f);
    let q;
    if (te && (q = S && S.onVnodeBeforeUnmount) && ze(q, h, f), N & 6)
      dl(f.component, g, y);
    else {
      if (N & 128) {
        f.suspense.unmount(g, y);
        return;
      }
      G && kt(f, null, h, "beforeUnmount"), N & 64 ? f.type.remove(
        f,
        h,
        g,
        Zt,
        y
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (T !== Le || R > 0 && R & 64) ? Yt(
        x,
        h,
        g,
        !1,
        !0
      ) : (T === Le && R & 384 || !m && N & 16) && Yt(E, h, g), y && Pr(f);
    }
    (te && (q = S && S.onVnodeUnmounted) || G) && Ce(() => {
      q && ze(q, h, f), G && kt(f, null, h, "unmounted");
    }, g);
  }, Pr = (f) => {
    const { type: h, el: g, anchor: y, transition: m } = f;
    if (h === Le) {
      hl(g, y);
      return;
    }
    if (h === As) {
      v(f);
      return;
    }
    const T = () => {
      r(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (f.shapeFlag & 1 && m && !m.persisted) {
      const { leave: S, delayLeave: k } = m, E = () => S(g, T);
      k ? k(f.el, T, E) : E();
    } else
      T();
  }, hl = (f, h) => {
    let g;
    for (; f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, dl = (f, h, g) => {
    const { bum: y, scope: m, job: T, subTree: S, um: k, m: E, a: x } = f;
    Xr(E), Xr(x), y && Ln(y), m.stop(), T && (T.flags |= 8, Fe(S, f, h, g)), k && Ce(k, h), Ce(() => {
      f.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve());
  }, Yt = (f, h, g, y = !1, m = !1, T = 0) => {
    for (let S = T; S < f.length; S++)
      Fe(f[S], h, g, y, m);
  }, In = (f) => {
    if (f.shapeFlag & 6)
      return In(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = p(f.anchor || f.el), g = h && h[ha];
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
    ), h._vnode = f, ys || (ys = !0, jr(), ui(), ys = !1);
  }, Zt = {
    p: b,
    um: Fe,
    m: Et,
    r: Pr,
    mt: ge,
    mc: Z,
    pc: ee,
    pbc: z,
    n: In,
    o: e
  };
  return {
    render: Br,
    hydrate: void 0,
    createApp: Da(Br)
  };
}
function Is({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function wt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function za(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Di(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (O(s) && O(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = gt(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && Di(i, l)), l.type === _s && (l.el = i.el);
    }
}
function Ka(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < u ? o = l + 1 : i = l;
      u < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Li(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Li(t);
}
function Xr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const qa = Symbol.for("v-scx"), Xa = () => $n(qa);
function bt(e, t, n) {
  return $i(e, t, n);
}
function $i(e, t, n = Q) {
  const { immediate: s, deep: r, flush: o, once: i } = n, l = ce({}, n), a = t && s || !t && o !== "post";
  let u;
  if (wn) {
    if (o === "sync") {
      const _ = Xa();
      u = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!a) {
      const _ = () => {
      };
      return _.stop = $e, _.resume = $e, _.pause = $e, _;
    }
  }
  const c = fe;
  l.call = (_, w, b) => je(_, c, w, b);
  let d = !1;
  o === "post" ? l.scheduler = (_) => {
    Ce(_, c && c.suspense);
  } : o !== "sync" && (d = !0, l.scheduler = (_, w) => {
    w ? _() : Tr(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), d && (_.flags |= 2, c && (_.id = c.uid, _.i = c));
  };
  const p = na(e, t, l);
  return wn && (u ? u.push(p) : a && p()), p;
}
function Ya(e, t, n) {
  const s = this.proxy, r = ae(e) ? e.includes(".") ? Ui(s, e) : () => s[e] : e.bind(s, s);
  let o;
  P(t) ? o = t : (o = t.handler, n = t);
  const i = vn(this), l = $i(r, o.bind(s), n);
  return i(), l;
}
function Ui(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Za = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xe(t)}Modifiers`] || e[`${Ae(t)}Modifiers`];
function Ja(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  let r = n;
  const o = t.startsWith("update:"), i = o && Za(s, t.slice(7));
  i && (i.trim && (r = n.map((c) => ae(c) ? c.trim() : c)), i.number && (r = n.map(Ds)));
  let l, a = s[l = xs(t)] || // also try camelCase event handler (#2249)
  s[l = xs(xe(t))];
  !a && o && (a = s[l = xs(Ae(t))]), a && je(
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
function ji(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!P(e)) {
    const a = (u) => {
      const c = ji(u, t, !0);
      c && (l = !0, ce(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (se(e) && s.set(e, null), null) : (O(o) ? o.forEach((a) => i[a] = null) : ce(i, o), se(e) && s.set(e, i), i);
}
function gs(e, t) {
  return !e || !ns(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), W(e, t[0].toLowerCase() + t.slice(1)) || W(e, Ae(t)) || W(e, t));
}
function Yr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: l,
    emit: a,
    render: u,
    renderCache: c,
    props: d,
    data: p,
    setupState: _,
    ctx: w,
    inheritAttrs: b
  } = e, C = Kn(e);
  let B, $;
  try {
    if (n.shapeFlag & 4) {
      const v = r || s, D = ht.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(v, {
        get(H, Y, Z) {
          return sa(
            `Property '${String(
              Y
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(H, Y, Z);
        }
      }) : v;
      B = Xe(
        u.call(
          D,
          v,
          c,
          ht.NODE_ENV !== "production" ? Nn(d) : d,
          _,
          p,
          w
        )
      ), $ = l;
    } else {
      const v = t;
      ht.NODE_ENV, B = Xe(
        v.length > 1 ? v(
          ht.NODE_ENV !== "production" ? Nn(d) : d,
          ht.NODE_ENV !== "production" ? {
            get attrs() {
              return Nn(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : v(
          ht.NODE_ENV !== "production" ? Nn(d) : d,
          null
        )
      ), $ = t.props ? l : Qa(l);
    }
  } catch (v) {
    pn.length = 0, hs(v, e, 1), B = de(we);
  }
  let j = B;
  if ($ && b !== !1) {
    const v = Object.keys($), { shapeFlag: D } = j;
    v.length && D & 7 && (o && v.some(ur) && ($ = ec(
      $,
      o
    )), j = Tt(j, $, !1, !0));
  }
  return n.dirs && (j = Tt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && En(j, n.transition), B = j, Kn(C), B;
}
const Qa = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ns(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ec = (e, t) => {
  const n = {};
  for (const s in e)
    (!ur(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function tc(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: a } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Zr(s, i, u) : !!i;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const p = c[d];
        if (i[p] !== s[p] && !gs(u, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Zr(s, i, u) : !0 : !!i;
  return !1;
}
function Zr(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !gs(n, o))
      return !0;
  }
  return !1;
}
function nc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Fi = (e) => e.__isSuspense;
function sc(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : ua(e);
}
const Le = Symbol.for("v-fgt"), _s = Symbol.for("v-txt"), we = Symbol.for("v-cmt"), As = Symbol.for("v-stc"), pn = [];
let Oe = null;
function He(e = !1) {
  pn.push(Oe = e ? null : []);
}
function rc() {
  pn.pop(), Oe = pn[pn.length - 1] || null;
}
let kn = 1;
function Jr(e, t = !1) {
  kn += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function Gi(e) {
  return e.dynamicChildren = kn > 0 ? Oe || Ft : null, rc(), kn > 0 && Oe && Oe.push(e), e;
}
function it(e, t, n, s, r, o) {
  return Gi(
    Ye(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function Xs(e, t, n, s, r) {
  return Gi(
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
function Yn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vi = ({ key: e }) => e ?? null, Un = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || pe(e) || P(e) ? { i: Se, r: e, k: t, f: !!n } : e : null);
function Ye(e, t = null, n = null, s = 0, r = null, o = e === Le ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vi(t),
    ref: t && Un(t),
    scopeId: hi,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Se
  };
  return l ? (Er(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= ae(n) ? 8 : 16), kn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Oe.push(a), a;
}
const de = oc;
function oc(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Ra) && (e = we), Yn(e)) {
    const l = Tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Er(l, n), kn > 0 && !o && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (bc(e) && (e = e.__vccOpts), t) {
    t = ic(t);
    let { class: l, style: a } = t;
    l && !ae(l) && (t.class = as(l)), se(a) && (br(a) && !O(a) && (a = ce({}, a)), t.style = ot(a));
  }
  const i = ae(e) ? 1 : Fi(e) ? 128 : pi(e) ? 64 : se(e) ? 4 : P(e) ? 2 : 0;
  return Ye(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function ic(e) {
  return e ? br(e) || Ai(e) ? ce({}, e) : e : null;
}
function Tt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: a } = e, u = t ? ac(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Vi(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? O(o) ? o.concat(Un(t)) : [o, Un(t)] : Un(t)
    ) : o,
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
    patchFlag: t && e.type !== Le ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Tt(e.ssContent),
    ssFallback: e.ssFallback && Tt(e.ssFallback),
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
function lc(e = " ", t = 0) {
  return de(_s, null, e, t);
}
function Ys(e = "", t = !1) {
  return t ? (He(), Xs(we, null, e)) : de(we, null, e);
}
function Xe(e) {
  return e == null || typeof e == "boolean" ? de(we) : O(e) ? de(
    Le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yn(e) ? gt(e) : de(_s, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Tt(e);
}
function Er(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Er(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ai(t) ? t._ctx = Se : r === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else P(t) ? (t = { default: t, _ctx: Se }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [lc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ac(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = as([t.class, s.class]));
      else if (r === "style")
        t.style = ot([t.style, s.style]);
      else if (ns(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(O(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
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
const cc = vi();
let uc = 0;
function fc(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || cc, o = {
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
    scope: new Cl(
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
    propsOptions: Ni(s, r),
    emitsOptions: ji(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ja.bind(null, o), e.ce && e.ce(o), o;
}
let fe = null;
const Wi = () => fe || Se;
let Zn, Zs;
{
  const e = ls(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Zn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fe = n
  ), Zs = t(
    "__VUE_SSR_SETTERS__",
    (n) => wn = n
  );
}
const vn = (e) => {
  const t = fe;
  return Zn(e), e.scope.on(), () => {
    e.scope.off(), Zn(t);
  };
}, Qr = () => {
  fe && fe.scope.off(), Zn(null);
};
function zi(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function hc(e, t = !1, n = !1) {
  t && Zs(t);
  const { props: s, children: r } = e.vnode, o = zi(e);
  La(e, s, o, t), Fa(e, r, n);
  const i = o ? dc(e, t) : void 0;
  return t && Zs(!1), i;
}
function dc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Aa);
  const { setup: s } = n;
  if (s) {
    lt();
    const r = e.setupContext = s.length > 1 ? gc(e) : null, o = vn(e), i = qt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Bo(i);
    if (at(), o(), (l || e.sp) && !fn(e) && yi(e), l) {
      if (i.then(Qr, Qr), t)
        return i.then((a) => {
          eo(e, a);
        }).catch((a) => {
          hs(a, e, 0);
        });
      e.asyncDep = i;
    } else
      eo(e, i);
  } else
    Ki(e);
}
function eo(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = ii(t)), Ki(e);
}
function Ki(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $e);
  {
    const r = vn(e);
    lt();
    try {
      Oa(e);
    } finally {
      at(), r();
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
function ms(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ii(Xl(e.exposed)), {
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
function qi(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Xi(e, t, n = !1) {
  let s = qi(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? mc(s) : n ? "App" : "Anonymous";
}
function bc(e) {
  return P(e) && "__vccOpts" in e;
}
const Js = (e, t) => ea(e, t, wn);
function Tc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? se(t) && !O(t) ? Yn(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Yn(n) && (n = [n]), de(e, t, n));
}
const yc = "3.5.13";
let Qs;
const to = typeof window < "u" && window.trustedTypes;
if (to)
  try {
    Qs = /* @__PURE__ */ to.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Yi = Qs ? (e) => Qs.createHTML(e) : (e) => e, xc = "http://www.w3.org/2000/svg", Ec = "http://www.w3.org/1998/Math/MathML", nt = typeof document < "u" ? document : null, no = nt && /* @__PURE__ */ nt.createElement("template"), kc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? nt.createElementNS(xc, e) : t === "mathml" ? nt.createElementNS(Ec, e) : n ? nt.createElement(e, { is: n }) : nt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => nt.createTextNode(e),
  createComment: (e) => nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => nt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      no.innerHTML = Yi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = no.content;
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
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ut = "transition", en = "animation", Sn = Symbol("_vtc"), Zi = {
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
}, wc = /* @__PURE__ */ ce(
  {},
  gi,
  Zi
), Sc = (e) => (e.displayName = "Transition", e.props = wc, e), vc = /* @__PURE__ */ Sc(
  (e, { slots: t }) => Tc(ga, Rc(e), t)
), St = (e, t = []) => {
  O(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, so = (e) => e ? O(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Rc(e) {
  const t = {};
  for (const I in e)
    I in Zi || (t[I] = e[I]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = o,
    appearActiveClass: u = i,
    appearToClass: c = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: _ = `${n}-leave-to`
  } = e, w = Cc(r), b = w && w[0], C = w && w[1], {
    onBeforeEnter: B,
    onEnter: $,
    onEnterCancelled: j,
    onLeave: v,
    onLeaveCancelled: D,
    onBeforeAppear: H = B,
    onAppear: Y = $,
    onAppearCancelled: Z = j
  } = t, L = (I, re, ge, Ze) => {
    I._enterCancelled = Ze, vt(I, re ? c : l), vt(I, re ? u : i), ge && ge();
  }, z = (I, re) => {
    I._isLeaving = !1, vt(I, d), vt(I, _), vt(I, p), re && re();
  }, ie = (I) => (re, ge) => {
    const Ze = I ? Y : $, he = () => L(re, I, ge);
    St(Ze, [re, he]), ro(() => {
      vt(re, I ? a : o), Qe(re, I ? c : l), so(Ze) || oo(re, s, b, he);
    });
  };
  return ce(t, {
    onBeforeEnter(I) {
      St(B, [I]), Qe(I, o), Qe(I, i);
    },
    onBeforeAppear(I) {
      St(H, [I]), Qe(I, a), Qe(I, u);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(I, re) {
      I._isLeaving = !0;
      const ge = () => z(I, re);
      Qe(I, d), I._enterCancelled ? (Qe(I, p), ao()) : (ao(), Qe(I, p)), ro(() => {
        I._isLeaving && (vt(I, d), Qe(I, _), so(v) || oo(I, s, C, ge));
      }), St(v, [I, ge]);
    },
    onEnterCancelled(I) {
      L(I, !1, void 0, !0), St(j, [I]);
    },
    onAppearCancelled(I) {
      L(I, !0, void 0, !0), St(Z, [I]);
    },
    onLeaveCancelled(I) {
      z(I), St(D, [I]);
    }
  });
}
function Cc(e) {
  if (e == null)
    return null;
  if (se(e))
    return [Os(e.enter), Os(e.leave)];
  {
    const t = Os(e);
    return [t, t];
  }
}
function Os(e) {
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
function ro(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ic = 0;
function oo(e, t, n, s) {
  const r = e._endId = ++Ic, o = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: l, propCount: a } = Ac(e, t);
  if (!i)
    return s();
  const u = i + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, p), o();
  }, p = (_) => {
    _.target === e && ++c >= a && d();
  };
  setTimeout(() => {
    c < a && d();
  }, l + 1), e.addEventListener(u, p);
}
function Ac(e, t) {
  const n = window.getComputedStyle(e), s = (w) => (n[w] || "").split(", "), r = s(`${ut}Delay`), o = s(`${ut}Duration`), i = io(r, o), l = s(`${en}Delay`), a = s(`${en}Duration`), u = io(l, a);
  let c = null, d = 0, p = 0;
  t === ut ? i > 0 && (c = ut, d = i, p = o.length) : t === en ? u > 0 && (c = en, d = u, p = a.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? ut : en : null, p = c ? c === ut ? o.length : a.length : 0);
  const _ = c === ut && /\b(transform|all)(,|$)/.test(
    s(`${ut}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: p,
    hasTransform: _
  };
}
function io(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => lo(n) + lo(e[s])));
}
function lo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ao() {
  return document.body.offsetHeight;
}
function Oc(e, t, n) {
  const s = e[Sn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const co = Symbol("_vod"), Nc = Symbol("_vsh"), Mc = Symbol(""), Pc = /(^|;)\s*display\s*:/;
function Bc(e, t, n) {
  const s = e.style, r = ae(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (ae(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && jn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && jn(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), jn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Mc];
      i && (n += ";" + i), s.cssText = n, o = Pc.test(n);
    }
  } else t && e.removeAttribute("style");
  co in e && (e[co] = o ? s.display : "", e[Nc] && (s.display = "none"));
}
const uo = /\s*!important$/;
function jn(e, t, n) {
  if (O(n))
    n.forEach((s) => jn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Hc(e, t);
    uo.test(n) ? e.setProperty(
      Ae(s),
      n.replace(uo, ""),
      "important"
    ) : e[s] = n;
  }
}
const fo = ["Webkit", "Moz", "ms"], Ns = {};
function Hc(e, t) {
  const n = Ns[t];
  if (n)
    return n;
  let s = xe(t);
  if (s !== "filter" && s in e)
    return Ns[t] = s;
  s = is(s);
  for (let r = 0; r < fo.length; r++) {
    const o = fo[r] + s;
    if (o in e)
      return Ns[t] = o;
  }
  return t;
}
const ho = "http://www.w3.org/1999/xlink";
function po(e, t, n, s, r, o = vl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ho, t.slice(6, t.length)) : e.setAttributeNS(ho, t, n) : n == null || o && !Lo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : yt(n) ? String(n) : n
  );
}
function go(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Yi(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Lo(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(r || t);
}
function Dt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Dc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const _o = Symbol("_vei");
function Lc(e, t, n, s, r = null) {
  const o = e[_o] || (e[_o] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [l, a] = $c(t);
    if (s) {
      const u = o[t] = Fc(
        s,
        r
      );
      Dt(e, l, u, a);
    } else i && (Dc(e, l, i, a), o[t] = void 0);
  }
}
const mo = /(?:Once|Passive|Capture)$/;
function $c(e) {
  let t;
  if (mo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(mo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ae(e.slice(2)), t];
}
let Ms = 0;
const Uc = /* @__PURE__ */ Promise.resolve(), jc = () => Ms || (Uc.then(() => Ms = 0), Ms = Date.now());
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
  if (O(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vc = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? Oc(e, s, i) : t === "style" ? Bc(e, n, s) : ns(t) ? ur(t) || Lc(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wc(e, t, s, i)) ? (go(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && po(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ae(s)) ? go(e, xe(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), po(e, t, s, i));
};
function Wc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bo(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return bo(t) && ae(n) ? !1 : t in e;
}
const To = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zc(e, t, n) {
  const s = /* @__PURE__ */ Mt(e, t);
  rs(s) && ce(s, t);
  class r extends kr {
    constructor(i) {
      super(s, i, n);
    }
  }
  return r.def = s, r;
}
const Kc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class kr extends Kc {
  constructor(t, n = {}, s = ko) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== ko ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof kr) {
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
    this._connected = !1, zn(() => {
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
      const { props: o, styles: i } = s;
      let l;
      if (o && !O(o))
        for (const a in o) {
          const u = o[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = Ls(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[xe(a)] = !0);
        }
      this._numberProps = l, r && this._resolveProps(s), this.shadowRoot && this._applyStyles(i), this._mount(s);
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
        W(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => oi(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = O(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r]);
    for (const r of s.map(xe))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : To;
    const r = xe(t);
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
    if (n !== this._props[t] && (n === To ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), s)) {
      const o = this._ob;
      o && o.disconnect(), n === !0 ? this.setAttribute(Ae(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ae(t), n + "") : n || this.removeAttribute(Ae(t)), o && o.observe(this, { attributes: !0 });
    }
  }
  _update() {
    Qc(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = de(this._def, ce(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const r = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            rs(i[0]) ? ce({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (o, ...i) => {
        r(o, i), Ae(o) !== o && r(Ae(o), i);
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
      const o = document.createElement("style");
      s && o.setAttribute("nonce", s), o.textContent = t[r], this.shadowRoot.prepend(o);
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
      const r = t[s], o = r.getAttribute("name") || "default", i = this._slots[o], l = r.parentNode;
      if (i)
        for (const a of i) {
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
const yo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return O(t) ? (n) => Ln(t, n) : t;
};
function qc(e) {
  e.target.composing = !0;
}
function xo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ps = Symbol("_assign"), Xc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Ps] = yo(r);
    const o = s || r.props && r.props.type === "number";
    Dt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), o && (l = Ds(l)), e[Ps](l);
    }), n && Dt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Dt(e, "compositionstart", qc), Dt(e, "compositionend", xo), Dt(e, "change", xo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
    if (e[Ps] = yo(i), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ds(e.value) : e.value, a = t ?? "";
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
    const o = Ae(r.key);
    if (t.some(
      (i) => i === o || Yc[i] === o
    ))
      return e(r);
  });
}, Jc = /* @__PURE__ */ ce({ patchProp: Vc }, kc);
let Eo;
function Ji() {
  return Eo || (Eo = Va(Jc));
}
const Qc = (...e) => {
  Ji().render(...e);
}, ko = (...e) => {
  const t = Ji().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = tu(s);
    if (!r) return;
    const o = t._component;
    !P(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, eu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function eu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tu(e) {
  return ae(e) ? document.querySelector(e) : e;
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
function ou(e, t, n, s, r, o) {
  return He(), it("div", {
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
    }, Uo(e.headerName), 5),
    Ye("button", {
      class: "close-btn",
      style: ot({ color: e.closeBtnColor }),
      onClick: t[0] || (t[0] = (i) => e.$emit("close"))
    }, " X ", 4)
  ], 4);
}
const iu = /* @__PURE__ */ Xt(nu, [["render", ou], ["styles", [su]], ["__scopeId", "data-v-a82ecf7a"]]);
function wr() {
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
let Pt = wr();
function Qi(e) {
  Pt = e;
}
const gn = { exec: () => null };
function K(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const s = {
    replace: (r, o) => {
      let i = typeof o == "string" ? o : o.source;
      return i = i.replace(ye.caret, "$1"), n = n.replace(r, i), s;
    },
    getRegex: () => new RegExp(n, t)
  };
  return s;
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
  listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
  htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, lu = /^(?:[ \t]*(?:\n|$))+/, au = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, cu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Rn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, uu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Sr = /(?:[*+-]|\d{1,9}[.)])/, el = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, tl = K(el).replace(/bull/g, Sr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), fu = K(el).replace(/bull/g, Sr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), vr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, hu = /^[^\n]+/, Rr = /(?!\s*\])(?:\\.|[^\[\]\\])+/, du = K(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Rr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), pu = K(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Sr).getRegex(), bs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Cr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, gu = K("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Cr).replace("tag", bs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), nl = K(vr).replace("hr", Rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", bs).getRegex(), _u = K(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", nl).getRegex(), Ir = {
  blockquote: _u,
  code: au,
  def: du,
  fences: cu,
  heading: uu,
  hr: Rn,
  html: gu,
  lheading: tl,
  list: pu,
  newline: lu,
  paragraph: nl,
  table: gn,
  text: hu
}, wo = K("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", bs).getRegex(), mu = {
  ...Ir,
  lheading: fu,
  table: wo,
  paragraph: K(vr).replace("hr", Rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", wo).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", bs).getRegex()
}, bu = {
  ...Ir,
  html: K(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Cr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: gn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: K(vr).replace("hr", Rn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", tl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Tu = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, yu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, sl = /^( {2,}|\\)\n(?!\s*$)/, xu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Ts = /[\p{P}\p{S}]/u, Ar = /[\s\p{P}\p{S}]/u, rl = /[^\s\p{P}\p{S}]/u, Eu = K(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ar).getRegex(), ol = /(?!~)[\p{P}\p{S}]/u, ku = /(?!~)[\s\p{P}\p{S}]/u, wu = /(?:[^\s\p{P}\p{S}]|~)/u, Su = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, il = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, vu = K(il, "u").replace(/punct/g, Ts).getRegex(), Ru = K(il, "u").replace(/punct/g, ol).getRegex(), ll = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Cu = K(ll, "gu").replace(/notPunctSpace/g, rl).replace(/punctSpace/g, Ar).replace(/punct/g, Ts).getRegex(), Iu = K(ll, "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, ku).replace(/punct/g, ol).getRegex(), Au = K("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, rl).replace(/punctSpace/g, Ar).replace(/punct/g, Ts).getRegex(), Ou = K(/\\(punct)/, "gu").replace(/punct/g, Ts).getRegex(), Nu = K(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Mu = K(Cr).replace("(?:-->|$)", "-->").getRegex(), Pu = K("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Mu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Jn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Bu = K(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Jn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), al = K(/^!?\[(label)\]\[(ref)\]/).replace("label", Jn).replace("ref", Rr).getRegex(), cl = K(/^!?\[(ref)\](?:\[\])?/).replace("ref", Rr).getRegex(), Hu = K("reflink|nolink(?!\\()", "g").replace("reflink", al).replace("nolink", cl).getRegex(), Or = {
  _backpedal: gn,
  // only used for GFM url
  anyPunctuation: Ou,
  autolink: Nu,
  blockSkip: Su,
  br: sl,
  code: yu,
  del: gn,
  emStrongLDelim: vu,
  emStrongRDelimAst: Cu,
  emStrongRDelimUnd: Au,
  escape: Tu,
  link: Bu,
  nolink: cl,
  punctuation: Eu,
  reflink: al,
  reflinkSearch: Hu,
  tag: Pu,
  text: xu,
  url: gn
}, Du = {
  ...Or,
  link: K(/^!?\[(label)\]\((.*?)\)/).replace("label", Jn).getRegex(),
  reflink: K(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Jn).getRegex()
}, er = {
  ...Or,
  emStrongRDelimAst: Iu,
  emStrongLDelim: Ru,
  url: K(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Lu = {
  ...er,
  br: K(sl).replace("{2,}", "*").getRegex(),
  text: K(er.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Bn = {
  normal: Ir,
  gfm: mu,
  pedantic: bu
}, tn = {
  normal: Or,
  gfm: er,
  breaks: Lu,
  pedantic: Du
}, $u = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, So = (e) => $u[e];
function Ke(e, t) {
  if (t) {
    if (ye.escapeTest.test(e))
      return e.replace(ye.escapeReplace, So);
  } else if (ye.escapeTestNoEncode.test(e))
    return e.replace(ye.escapeReplaceNoEncode, So);
  return e;
}
function vo(e) {
  try {
    e = encodeURI(e).replace(ye.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Ro(e, t) {
  var o;
  const n = e.replace(ye.findPipe, (i, l, a) => {
    let u = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), s = n.split(ye.splitPipe);
  let r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((o = s.at(-1)) != null && o.trim()) && s.pop(), t)
    if (s.length > t)
      s.splice(t);
    else
      for (; s.length < t; )
        s.push("");
  for (; r < s.length; r++)
    s[r] = s[r].trim().replace(ye.slashPipe, "|");
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
function Co(e, t, n, s, r) {
  const o = t.href, i = t.title || null, l = e[1].replace(r.other.outputLinkReplace, "$1");
  if (e[0].charAt(0) !== "!") {
    s.state.inLink = !0;
    const a = {
      type: "link",
      raw: n,
      href: o,
      title: i,
      text: l,
      tokens: s.inlineTokens(l)
    };
    return s.state.inLink = !1, a;
  }
  return {
    type: "image",
    raw: n,
    href: o,
    title: i,
    text: l
  };
}
function ju(e, t, n) {
  const s = e.match(n.other.indentCodeCompensation);
  if (s === null)
    return t;
  const r = s[1];
  return t.split(`
`).map((o) => {
    const i = o.match(n.other.beginningSpace);
    if (i === null)
      return o;
    const [l] = i;
    return l.length >= r.length ? o.slice(r.length) : o;
  }).join(`
`);
}
class Qn {
  // set by the lexer
  constructor(t) {
    J(this, "options");
    J(this, "rules");
    // set by the lexer
    J(this, "lexer");
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
`), r = "", o = "";
      const i = [];
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
${c}` : c, o = o ? `${o}
${d}` : d;
        const p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, i, !0), this.lexer.state.top = p, s.length === 0)
          break;
        const _ = i.at(-1);
        if ((_ == null ? void 0 : _.type) === "code")
          break;
        if ((_ == null ? void 0 : _.type) === "blockquote") {
          const w = _, b = w.raw + `
` + s.join(`
`), C = this.blockquote(b);
          i[i.length - 1] = C, r = r.substring(0, r.length - w.raw.length) + C.raw, o = o.substring(0, o.length - w.text.length) + C.text;
          break;
        } else if ((_ == null ? void 0 : _.type) === "list") {
          const w = _, b = w.raw + `
` + s.join(`
`), C = this.list(b);
          i[i.length - 1] = C, r = r.substring(0, r.length - _.raw.length) + C.raw, o = o.substring(0, o.length - w.raw.length) + C.raw, s = b.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: r,
        tokens: i,
        text: o
      };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let s = n[1].trim();
      const r = s.length > 1, o = {
        type: "list",
        raw: "",
        ordered: r,
        start: r ? +s.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      s = r ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = r ? s : "[*+-]");
      const i = this.rules.other.listItemRegex(s);
      let l = !1;
      for (; t; ) {
        let u = !1, c = "", d = "";
        if (!(n = i.exec(t)) || this.rules.block.hr.test(t))
          break;
        c = n[0], t = t.substring(c.length);
        let p = n[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, ($) => " ".repeat(3 * $.length)), _ = t.split(`
`, 1)[0], w = !p.trim(), b = 0;
        if (this.options.pedantic ? (b = 2, d = p.trimStart()) : w ? b = n[1].length + 1 : (b = n[2].search(this.rules.other.nonSpaceChar), b = b > 4 ? 1 : b, d = p.slice(b), b += n[1].length), w && this.rules.other.blankLine.test(_) && (c += _ + `
`, t = t.substring(_.length + 1), u = !0), !u) {
          const $ = this.rules.other.nextBulletRegex(b), j = this.rules.other.hrRegex(b), v = this.rules.other.fencesBeginRegex(b), D = this.rules.other.headingBeginRegex(b), H = this.rules.other.htmlBeginRegex(b);
          for (; t; ) {
            const Y = t.split(`
`, 1)[0];
            let Z;
            if (_ = Y, this.options.pedantic ? (_ = _.replace(this.rules.other.listReplaceNesting, "  "), Z = _) : Z = _.replace(this.rules.other.tabCharGlobal, "    "), v.test(_) || D.test(_) || H.test(_) || $.test(_) || j.test(_))
              break;
            if (Z.search(this.rules.other.nonSpaceChar) >= b || !_.trim())
              d += `
` + Z.slice(b);
            else {
              if (w || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(p) || D.test(p) || j.test(p))
                break;
              d += `
` + _;
            }
            !w && !_.trim() && (w = !0), c += Y + `
`, t = t.substring(Y.length + 1), p = Z.slice(b);
          }
        }
        o.loose || (l ? o.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let C = null, B;
        this.options.gfm && (C = this.rules.other.listIsTask.exec(d), C && (B = C[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), o.items.push({
          type: "list_item",
          raw: c,
          task: !!C,
          checked: B,
          loose: !1,
          text: d,
          tokens: []
        }), o.raw += c;
      }
      const a = o.items.at(-1);
      if (a)
        a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else
        return;
      o.raw = o.raw.trimEnd();
      for (let u = 0; u < o.items.length; u++)
        if (this.lexer.state.top = !1, o.items[u].tokens = this.lexer.blockTokens(o.items[u].text, []), !o.loose) {
          const c = o.items[u].tokens.filter((p) => p.type === "space"), d = c.length > 0 && c.some((p) => this.rules.other.anyLine.test(p.raw));
          o.loose = d;
        }
      if (o.loose)
        for (let u = 0; u < o.items.length; u++)
          o.items[u].loose = !0;
      return o;
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
      const s = n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = n[2] ? n[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return {
        type: "def",
        tag: s,
        raw: n[0],
        href: r,
        title: o
      };
    }
  }
  table(t) {
    var l;
    const n = this.rules.block.table.exec(t);
    if (!n || !this.rules.other.tableDelimiter.test(n[2]))
      return;
    const s = Ro(n[1]), r = n[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = (l = n[3]) != null && l.trim() ? n[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = {
      type: "table",
      raw: n[0],
      header: [],
      align: [],
      rows: []
    };
    if (s.length === r.length) {
      for (const a of r)
        this.rules.other.tableAlignRight.test(a) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? i.align.push("left") : i.align.push(null);
      for (let a = 0; a < s.length; a++)
        i.header.push({
          text: s[a],
          tokens: this.lexer.inline(s[a]),
          header: !0,
          align: i.align[a]
        });
      for (const a of o)
        i.rows.push(Ro(a, i.header.length).map((u, c) => ({
          text: u,
          tokens: this.lexer.inline(u),
          header: !1,
          align: i.align[c]
        })));
      return i;
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
        const i = nn(s.slice(0, -1), "\\");
        if ((s.length - i.length) % 2 === 0)
          return;
      } else {
        const i = Uu(n[2], "()");
        if (i > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + i;
          n[2] = n[2].substring(0, i), n[0] = n[0].substring(0, a).trim(), n[3] = "";
        }
      }
      let r = n[2], o = "";
      if (this.options.pedantic) {
        const i = this.rules.other.pedanticHrefTitle.exec(r);
        i && (r = i[1], o = i[3]);
      } else
        o = n[3] ? n[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), Co(n, {
        href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
        title: o && o.replace(this.rules.inline.anyPunctuation, "$1")
      }, n[0], this.lexer, this.rules);
    }
  }
  reflink(t, n) {
    let s;
    if ((s = this.rules.inline.reflink.exec(t)) || (s = this.rules.inline.nolink.exec(t))) {
      const r = (s[2] || s[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = n[r.toLowerCase()];
      if (!o) {
        const i = s[0].charAt(0);
        return {
          type: "text",
          raw: i,
          text: i
        };
      }
      return Co(s, o, s[0], this.lexer, this.rules);
    }
  }
  emStrong(t, n, s = "") {
    let r = this.rules.inline.emStrongLDelim.exec(t);
    if (!r || r[3] && s.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(r[1] || r[2] || "") || !s || this.rules.inline.punctuation.exec(s)) {
      const i = [...r[0]].length - 1;
      let l, a, u = i, c = 0;
      const d = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, n = n.slice(-1 * t.length + i); (r = d.exec(n)) != null; ) {
        if (l = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !l)
          continue;
        if (a = [...l].length, r[3] || r[4]) {
          u += a;
          continue;
        } else if ((r[5] || r[6]) && i % 3 && !((i + a) % 3)) {
          c += a;
          continue;
        }
        if (u -= a, u > 0)
          continue;
        a = Math.min(a, a + u + c);
        const p = [...r[0]][0].length, _ = t.slice(0, i + r.index + p + a);
        if (Math.min(i, a) % 2) {
          const b = _.slice(1, -1);
          return {
            type: "em",
            raw: _,
            text: b,
            tokens: this.lexer.inlineTokens(b)
          };
        }
        const w = _.slice(2, -2);
        return {
          type: "strong",
          raw: _,
          text: w,
          tokens: this.lexer.inlineTokens(w)
        };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let s = n[2].replace(this.rules.other.newLineCharGlobal, " ");
      const r = this.rules.other.nonSpaceChar.test(s), o = this.rules.other.startingSpaceChar.test(s) && this.rules.other.endingSpaceChar.test(s);
      return r && o && (s = s.substring(1, s.length - 1)), {
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
      let r, o;
      if (n[2] === "@")
        r = n[0], o = "mailto:" + r;
      else {
        let i;
        do
          i = n[0], n[0] = ((s = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : s[0]) ?? "";
        while (i !== n[0]);
        r = n[0], n[1] === "www." ? o = "http://" + n[0] : o = n[0];
      }
      return {
        type: "link",
        raw: n[0],
        text: r,
        href: o,
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
    J(this, "tokens");
    J(this, "options");
    J(this, "state");
    J(this, "tokenizer");
    J(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Pt, this.options.tokenizer = this.options.tokenizer || new Qn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: ye,
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
    t = t.replace(ye.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const s = this.inlineQueue[n];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], s = !1) {
    var r, o, i;
    for (this.options.pedantic && (t = t.replace(ye.tabCharGlobal, "    ").replace(ye.spaceLine, "")); t; ) {
      let l;
      if ((o = (r = this.options.extensions) == null ? void 0 : r.block) != null && o.some((u) => (l = u.call({ lexer: this }, t, n)) ? (t = t.substring(l.raw.length), n.push(l), !0) : !1))
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
      if ((i = this.options.extensions) != null && i.startBlock) {
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
    let o = !1, i = "";
    for (; t; ) {
      o || (i = ""), o = !1;
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
      if (c = this.tokenizer.emStrong(t, s, i)) {
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
        let w;
        this.options.extensions.startInline.forEach((b) => {
          w = b.call({ lexer: this }, _), typeof w == "number" && w >= 0 && (p = Math.min(p, w));
        }), p < 1 / 0 && p >= 0 && (d = t.substring(0, p + 1));
      }
      if (c = this.tokenizer.inlineText(d)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (i = c.raw.slice(-1)), o = !0;
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
class es {
  // set by the parser
  constructor(t) {
    J(this, "options");
    J(this, "parser");
    this.options = t || Pt;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: s }) {
    var i;
    const r = (i = (n || "").match(ye.notSpaceStart)) == null ? void 0 : i[0], o = t.replace(ye.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + Ke(r) + '">' + (s ? o : Ke(o, !0)) + `</code></pre>
` : "<pre><code>" + (s ? o : Ke(o, !0)) + `</code></pre>
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
    const o = n ? "ol" : "ul", i = n && s !== 1 ? ' start="' + s + '"' : "";
    return "<" + o + i + `>
` + r + "</" + o + `>
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
    for (let o = 0; o < t.header.length; o++)
      s += this.tablecell(t.header[o]);
    n += this.tablerow({ text: s });
    let r = "";
    for (let o = 0; o < t.rows.length; o++) {
      const i = t.rows[o];
      s = "";
      for (let l = 0; l < i.length; l++)
        s += this.tablecell(i[l]);
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
    const r = this.parser.parseInline(s), o = vo(t);
    if (o === null)
      return r;
    t = o;
    let i = '<a href="' + t + '"';
    return n && (i += ' title="' + Ke(n) + '"'), i += ">" + r + "</a>", i;
  }
  image({ href: t, title: n, text: s }) {
    const r = vo(t);
    if (r === null)
      return Ke(s);
    t = r;
    let o = `<img src="${t}" alt="${s}"`;
    return n && (o += ` title="${Ke(n)}"`), o += ">", o;
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
    J(this, "options");
    J(this, "renderer");
    J(this, "textRenderer");
    this.options = t || Pt, this.options.renderer = this.options.renderer || new es(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Nr();
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
    var r, o;
    let s = "";
    for (let i = 0; i < t.length; i++) {
      const l = t[i];
      if ((o = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && o[l.type]) {
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
          for (; i + 1 < t.length && t[i + 1].type === "text"; )
            u = t[++i], c += `
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
    var r, o;
    let s = "";
    for (let i = 0; i < t.length; i++) {
      const l = t[i];
      if ((o = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && o[l.type]) {
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
    J(this, "options");
    J(this, "block");
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
J(_n, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class Fu {
  constructor(...t) {
    J(this, "defaults", wr());
    J(this, "options", this.setOptions);
    J(this, "parse", this.parseMarkdown(!0));
    J(this, "parseInline", this.parseMarkdown(!1));
    J(this, "Parser", Pe);
    J(this, "Renderer", es);
    J(this, "TextRenderer", Nr);
    J(this, "Lexer", Me);
    J(this, "Tokenizer", Qn);
    J(this, "Hooks", _n);
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, n) {
    var r, o;
    let s = [];
    for (const i of t)
      switch (s = s.concat(n.call(this, i)), i.type) {
        case "table": {
          const l = i;
          for (const a of l.header)
            s = s.concat(this.walkTokens(a.tokens, n));
          for (const a of l.rows)
            for (const u of a)
              s = s.concat(this.walkTokens(u.tokens, n));
          break;
        }
        case "list": {
          const l = i;
          s = s.concat(this.walkTokens(l.items, n));
          break;
        }
        default: {
          const l = i;
          (o = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && o[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((a) => {
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
      if (r.async = this.defaults.async || r.async || !1, s.extensions && (s.extensions.forEach((o) => {
        if (!o.name)
          throw new Error("extension name required");
        if ("renderer" in o) {
          const i = n.renderers[o.name];
          i ? n.renderers[o.name] = function(...l) {
            let a = o.renderer.apply(this, l);
            return a === !1 && (a = i.apply(this, l)), a;
          } : n.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const i = n[o.level];
          i ? i.unshift(o.tokenizer) : n[o.level] = [o.tokenizer], o.start && (o.level === "block" ? n.startBlock ? n.startBlock.push(o.start) : n.startBlock = [o.start] : o.level === "inline" && (n.startInline ? n.startInline.push(o.start) : n.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (n.childTokens[o.name] = o.childTokens);
      }), r.extensions = n), s.renderer) {
        const o = this.defaults.renderer || new es(this.defaults);
        for (const i in s.renderer) {
          if (!(i in o))
            throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i))
            continue;
          const l = i, a = s.renderer[l], u = o[l];
          o[l] = (...c) => {
            let d = a.apply(o, c);
            return d === !1 && (d = u.apply(o, c)), d || "";
          };
        }
        r.renderer = o;
      }
      if (s.tokenizer) {
        const o = this.defaults.tokenizer || new Qn(this.defaults);
        for (const i in s.tokenizer) {
          if (!(i in o))
            throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i))
            continue;
          const l = i, a = s.tokenizer[l], u = o[l];
          o[l] = (...c) => {
            let d = a.apply(o, c);
            return d === !1 && (d = u.apply(o, c)), d;
          };
        }
        r.tokenizer = o;
      }
      if (s.hooks) {
        const o = this.defaults.hooks || new _n();
        for (const i in s.hooks) {
          if (!(i in o))
            throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i))
            continue;
          const l = i, a = s.hooks[l], u = o[l];
          _n.passThroughHooks.has(i) ? o[l] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(o, c)).then((p) => u.call(o, p));
            const d = a.call(o, c);
            return u.call(o, d);
          } : o[l] = (...c) => {
            let d = a.apply(o, c);
            return d === !1 && (d = u.apply(o, c)), d;
          };
        }
        r.hooks = o;
      }
      if (s.walkTokens) {
        const o = this.defaults.walkTokens, i = s.walkTokens;
        r.walkTokens = function(l) {
          let a = [];
          return a.push(i.call(this, l)), o && (a = a.concat(o.call(this, l))), a;
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
      const o = { ...r }, i = { ...this.defaults, ...o }, l = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === !0 && o.async === !1)
        return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof s > "u" || s === null)
        return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof s != "string")
        return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
      i.hooks && (i.hooks.options = i, i.hooks.block = t);
      const a = i.hooks ? i.hooks.provideLexer() : t ? Me.lex : Me.lexInline, u = i.hooks ? i.hooks.provideParser() : t ? Pe.parse : Pe.parseInline;
      if (i.async)
        return Promise.resolve(i.hooks ? i.hooks.preprocess(s) : s).then((c) => a(c, i)).then((c) => i.hooks ? i.hooks.processAllTokens(c) : c).then((c) => i.walkTokens ? Promise.all(this.walkTokens(c, i.walkTokens)).then(() => c) : c).then((c) => u(c, i)).then((c) => i.hooks ? i.hooks.postprocess(c) : c).catch(l);
      try {
        i.hooks && (s = i.hooks.preprocess(s));
        let c = a(s, i);
        i.hooks && (c = i.hooks.processAllTokens(c)), i.walkTokens && this.walkTokens(c, i.walkTokens);
        let d = u(c, i);
        return i.hooks && (d = i.hooks.postprocess(d)), d;
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
function X(e, t) {
  return Nt.parse(e, t);
}
X.options = X.setOptions = function(e) {
  return Nt.setOptions(e), X.defaults = Nt.defaults, Qi(X.defaults), X;
};
X.getDefaults = wr;
X.defaults = Pt;
X.use = function(...e) {
  return Nt.use(...e), X.defaults = Nt.defaults, Qi(X.defaults), X;
};
X.walkTokens = function(e, t) {
  return Nt.walkTokens(e, t);
};
X.parseInline = Nt.parseInline;
X.Parser = Pe;
X.parser = Pe.parse;
X.Renderer = es;
X.TextRenderer = Nr;
X.Lexer = Me;
X.lexer = Me.lex;
X.Tokenizer = Qn;
X.Hooks = _n;
X.parse = X;
X.options;
X.setOptions;
X.use;
X.walkTokens;
X.parseInline;
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
        marginLeft: "auto",
        textAlign: "right",
        borderRadius: "8px 8px 0px 8px"
      } : e === "assistantError" ? {
        color: "#ffffff",
        backgroundColor: "#bd1637",
        marginRight: "auto",
        textAlign: "left",
        borderRadius: "8px 8px 8px 0px"
      } : {
        color: this.assistantMessageColor,
        backgroundColor: this.assistantMessageBackground,
        marginRight: "auto",
        textAlign: "left",
        borderRadius: "8px 8px 8px 0px"
      };
    },
    renderMarkdown(e) {
      return X(e);
    }
  }
}), Vu = ".chat-messages[data-v-0e018185]{flex-grow:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column}.message[data-v-0e018185]{margin-bottom:10px;display:inline-block;padding:0 8px;border:1px solid #3d3d3d9f,}", Wu = { class: "chat-messages" }, zu = ["innerHTML"];
function Ku(e, t, n, s, r, o) {
  return He(), it("div", Wu, [
    (He(!0), it(Le, null, Ia(e.messages, (i, l) => (He(), it("div", {
      key: l,
      class: as(["message", i.from]),
      style: ot(e.messageStyle(i.from))
    }, [
      Ye("p", {
        innerHTML: e.renderMarkdown(i.text),
        class: "message-content"
      }, null, 8, zu)
    ], 6))), 128))
  ]);
}
const qu = /* @__PURE__ */ Xt(Gu, [["render", Ku], ["styles", [Vu]], ["__scopeId", "data-v-0e018185"]]), Xu = /* @__PURE__ */ Mt({
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
    const n = ft(e.userInput);
    return bt(
      () => e.userInput,
      (o) => {
        n.value = o;
      }
    ), bt(n, (o) => {
      t("update:userInput", o);
    }), { localInput: n, handleSend: () => {
      t("send-message");
    }, buttonStyle: () => ({
      backgroundColor: e.buttonBackgroundColor,
      color: e.buttonTextColor
    }) };
  }
}), Yu = "button[data-v-f711a16f]:disabled{background:#ccc;cursor:not-allowed}.chat-input[data-v-f711a16f]{display:flex;align-items:center;padding:10px;border-top:1px solid #ccc}.chat-input input[data-v-f711a16f]{flex-grow:1;padding:8px;border:1px solid #ccc;border-radius:5px;background:#f9f9f9;color:#292929}.chat-input button[data-v-f711a16f]{margin-left:10px;padding:8px 12px;border:none;border-radius:5px;cursor:pointer}.chat-input button[data-v-f711a16f]:disabled,.chat-input input[data-v-f711a16f]:disabled{background:#ccc;cursor:not-allowed}.loading-indicator[data-v-f711a16f]{display:inline-block;margin-left:10px}.spinner[data-v-f711a16f]{border:4px solid rgba(0,0,0,.1);border-left-color:#007bff;border-radius:50%;width:20px;height:20px;animation:spin-f711a16f 1s linear infinite}@keyframes spin-f711a16f{to{transform:rotate(360deg)}}", Zu = { class: "chat-input" }, Ju = ["placeholder", "disabled"], Qu = ["disabled"], ef = {
  key: 0,
  class: "loading-indicator"
};
function tf(e, t, n, s, r, o) {
  return He(), it("div", Zu, [
    fa(Ye("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => e.localInput = i),
      onKeyup: t[1] || (t[1] = Zc((...i) => e.handleSend && e.handleSend(...i), ["enter"])),
      placeholder: e.placeholder,
      disabled: e.sending
    }, null, 40, Ju), [
      [Xc, e.localInput]
    ]),
    Ye("button", {
      disabled: e.sending,
      onClick: t[2] || (t[2] = (...i) => e.handleSend && e.handleSend(...i)),
      style: ot(e.buttonStyle())
    }, " Enviar ", 12, Qu),
    e.sending ? (He(), it("div", ef, t[3] || (t[3] = [
      Ye("div", { class: "spinner" }, null, -1)
    ]))) : Ys("", !0)
  ]);
}
const nf = /* @__PURE__ */ Xt(Xu, [["render", tf], ["styles", [Yu]], ["__scopeId", "data-v-f711a16f"]]), sf = /* @__PURE__ */ Mt({
  name: "ChatWindow",
  components: {
    ChatHeader: iu,
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
    const n = ft(e.userInput);
    return bt(
      () => e.userInput,
      (o) => {
        n.value = o;
      }
    ), bt(n, (o) => {
      t("update:userInput", o);
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
}), rf = ".chat-window[data-v-ca0f0763]{position:fixed;bottom:20px;right:20px;max-height:800px;background:#fff;border-radius:10px;box-shadow:0 0 15px #0000004d;display:flex;flex-direction:column;overflow:hidden}@media screen and (max-width: 600px){.chat-window[data-v-ca0f0763]{width:100%!important;height:100%!important;bottom:0;right:0;border-radius:0;max-height:none}}";
function of(e, t, n, s, r, o) {
  const i = hn("ChatHeader"), l = hn("ChatMessages"), a = hn("ChatInput");
  return He(), it("div", {
    class: "chat-window",
    style: ot({
      width: e.chatbotWidth,
      height: e.chatbotHeight
    })
  }, [
    de(i, {
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
const lf = /* @__PURE__ */ Xt(sf, [["render", of], ["styles", [rf]], ["__scopeId", "data-v-ca0f0763"]]), af = /* @__PURE__ */ Mt({
  name: "ChatToggle",
  props: {
    headerIcon: {
      type: String,
      required: !0
    }
  }
}), cf = ".chatbot-toggle[data-v-d7b03065]{position:fixed;bottom:20px;right:20px;background:#fff;border-radius:50%;width:60px;height:60px;border:none;box-shadow:0 0 10px #0000004d;cursor:pointer;padding:0}.chatbot-toggle img[data-v-d7b03065]{width:100%;height:100%;border-radius:50%}", uf = ["src"];
function ff(e, t, n, s, r, o) {
  return He(), it("button", {
    class: "chatbot-toggle",
    onClick: t[0] || (t[0] = (i) => e.$emit("toggle-chat"))
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
class Io extends Error {
  constructor(t, n) {
    super(t), Hn(this, "type"), Hn(this, "field"), Hn(this, "value"), Hn(this, "line"), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
function Bs(e) {
}
function gf(e) {
  const { onEvent: t = Bs, onError: n = Bs, onRetry: s = Bs, onComment: r } = e;
  let o = "", i = !0, l, a = "", u = "";
  function c(b) {
    const C = i ? b.replace(/^\xEF\xBB\xBF/, "") : b, [B, $] = _f(`${o}${C}`);
    for (const j of B)
      d(j);
    o = $, i = !1;
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
    const C = b.indexOf(":");
    if (C !== -1) {
      const B = b.slice(0, C), $ = b[C + 1] === " " ? 2 : 1, j = b.slice(C + $);
      p(B, j, b);
      return;
    }
    p(b, "", b);
  }
  function p(b, C, B) {
    switch (b) {
      case "event":
        u = C;
        break;
      case "data":
        a = `${a}${C}
`;
        break;
      case "id":
        l = C.includes("\0") ? void 0 : C;
        break;
      case "retry":
        /^\d+$/.test(C) ? s(parseInt(C, 10)) : n(
          new Io(`Invalid \`retry\` value: "${C}"`, {
            type: "invalid-retry",
            value: C,
            line: B
          })
        );
        break;
      default:
        n(
          new Io(
            `Unknown field "${b.length > 20 ? `${b.slice(0, 20)}…` : b}"`,
            { type: "unknown-field", field: b, value: C, line: B }
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
  function w(b = {}) {
    o && b.consume && d(o), l = void 0, a = "", u = "", o = "";
  }
  return { feed: c, reset: w };
}
function _f(e) {
  const t = [];
  let n = "";
  const s = e.length;
  for (let r = 0; r < s; r++) {
    const o = e[r];
    o === "\r" && e[r + 1] === `
` ? (t.push(n), n = "", r++) : o === "\r" || o === `
` ? (t.push(n), n = "") : n += o;
  }
  return [t, n];
}
class Ao extends Event {
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
    return s(Oo(this), n);
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
    return t(Oo(this), n);
  }
}
function mf(e) {
  const t = globalThis.DOMException;
  return typeof t == "function" ? new t(e, "SyntaxError") : new SyntaxError(e);
}
function tr(e) {
  return e instanceof Error ? "errors" in e && Array.isArray(e.errors) ? e.errors.map(tr).join(", ") : "cause" in e && e.cause instanceof Error ? `${e}: ${tr(e.cause)}` : e.message : `${e}`;
}
function Oo(e) {
  return {
    type: e.type,
    message: e.message,
    code: e.code,
    defaultPrevented: e.defaultPrevented,
    cancelable: e.cancelable,
    timeStamp: e.timeStamp
  };
}
var ul = (e) => {
  throw TypeError(e);
}, Mr = (e, t, n) => t.has(e) || ul("Cannot " + n), U = (e, t, n) => (Mr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ue = (e, t, n) => t.has(e) ? ul("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), oe = (e, t, n, s) => (Mr(e, t, "write to private field"), t.set(e, n), n), tt = (e, t, n) => (Mr(e, t, "access private method"), n), ke, It, Lt, Fn, ts, mn, jt, bn, _t, $t, Kt, Ut, rn, De, nr, sr, rr, No, or, ir, on, lr, ar;
let Gn = class extends EventTarget {
  constructor(t, n) {
    var s, r;
    super(), ue(this, De), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, ue(this, ke), ue(this, It), ue(this, Lt), ue(this, Fn), ue(this, ts), ue(this, mn), ue(this, jt), ue(this, bn, null), ue(this, _t), ue(this, $t), ue(this, Kt, null), ue(this, Ut, null), ue(this, rn, null), ue(this, sr, async (o) => {
      var i;
      U(this, $t).reset();
      const { body: l, redirected: a, status: u, headers: c } = o;
      if (u === 204) {
        tt(this, De, on).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (a ? oe(this, Lt, new URL(o.url)) : oe(this, Lt, void 0), u !== 200) {
        tt(this, De, on).call(this, `Non-200 status code (${u})`, u);
        return;
      }
      if (!(c.get("content-type") || "").startsWith("text/event-stream")) {
        tt(this, De, on).call(this, 'Invalid content type, expected "text/event-stream"', u);
        return;
      }
      if (U(this, ke) === this.CLOSED)
        return;
      oe(this, ke, this.OPEN);
      const d = new Event("open");
      if ((i = U(this, rn)) == null || i.call(this, d), this.dispatchEvent(d), typeof l != "object" || !l || !("getReader" in l)) {
        tt(this, De, on).call(this, "Invalid response body, expected a web ReadableStream", u), this.close();
        return;
      }
      const p = new TextDecoder(), _ = l.getReader();
      let w = !0;
      do {
        const { done: b, value: C } = await _.read();
        C && U(this, $t).feed(p.decode(C, { stream: !b })), b && (w = !1, U(this, $t).reset(), tt(this, De, lr).call(this));
      } while (w);
    }), ue(this, rr, (o) => {
      oe(this, _t, void 0), !(o.name === "AbortError" || o.type === "aborted") && tt(this, De, lr).call(this, tr(o));
    }), ue(this, or, (o) => {
      typeof o.id == "string" && oe(this, bn, o.id);
      const i = new MessageEvent(o.event || "message", {
        data: o.data,
        origin: U(this, Lt) ? U(this, Lt).origin : U(this, It).origin,
        lastEventId: o.id || ""
      });
      U(this, Ut) && (!o.event || o.event === "message") && U(this, Ut).call(this, i), this.dispatchEvent(i);
    }), ue(this, ir, (o) => {
      oe(this, mn, o);
    }), ue(this, ar, () => {
      oe(this, jt, void 0), U(this, ke) === this.CONNECTING && tt(this, De, nr).call(this);
    });
    try {
      if (t instanceof URL)
        oe(this, It, t);
      else if (typeof t == "string")
        oe(this, It, new URL(t, bf()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw mf("An invalid or illegal string was specified");
    }
    oe(this, $t, gf({
      onEvent: U(this, or),
      onRetry: U(this, ir)
    })), oe(this, ke, this.CONNECTING), oe(this, mn, 3e3), oe(this, ts, (s = n == null ? void 0 : n.fetch) != null ? s : globalThis.fetch), oe(this, Fn, (r = n == null ? void 0 : n.withCredentials) != null ? r : !1), tt(this, De, nr).call(this);
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
    return U(this, ke);
  }
  /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */
  get url() {
    return U(this, It).href;
  }
  /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */
  get withCredentials() {
    return U(this, Fn);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return U(this, Kt);
  }
  set onerror(t) {
    oe(this, Kt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return U(this, Ut);
  }
  set onmessage(t) {
    oe(this, Ut, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return U(this, rn);
  }
  set onopen(t) {
    oe(this, rn, t);
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
    U(this, jt) && clearTimeout(U(this, jt)), U(this, ke) !== this.CLOSED && (U(this, _t) && U(this, _t).abort(), oe(this, ke, this.CLOSED), oe(this, _t, void 0));
  }
};
ke = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
nr = function() {
  oe(this, ke, this.CONNECTING), oe(this, _t, new AbortController()), U(this, ts)(U(this, It), tt(this, De, No).call(this)).then(U(this, sr)).catch(U(this, rr));
}, sr = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), /**
* Get request options for the `fetch()` request
*
* @returns The request options
* @internal
*/
No = function() {
  var e;
  const t = {
    // [spec] Let `corsAttributeState` be `Anonymous`…
    // [spec] …will have their mode set to "cors"…
    mode: "cors",
    redirect: "follow",
    headers: { Accept: "text/event-stream", ...U(this, bn) ? { "Last-Event-ID": U(this, bn) } : void 0 },
    cache: "no-store",
    signal: (e = U(this, _t)) == null ? void 0 : e.signal
  };
  return "window" in globalThis && (t.credentials = this.withCredentials ? "include" : "same-origin"), t;
}, or = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), /**
* Handles the process referred to in the EventSource specification as "failing a connection".
*
* @param error - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
on = function(e, t) {
  var n;
  U(this, ke) !== this.CLOSED && oe(this, ke, this.CLOSED);
  const s = new Ao("error", { code: t, message: e });
  (n = U(this, Kt)) == null || n.call(this, s), this.dispatchEvent(s);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
lr = function(e, t) {
  var n;
  if (U(this, ke) === this.CLOSED)
    return;
  oe(this, ke, this.CONNECTING);
  const s = new Ao("error", { code: t, message: e });
  (n = U(this, Kt)) == null || n.call(this, s), this.dispatchEvent(s), oe(this, jt, setTimeout(U(this, ar), U(this, mn)));
}, ar = /* @__PURE__ */ new WeakMap(), /**
* ReadyState representing an EventSource currently trying to connect
*
* @public
*/
Gn.CONNECTING = 0, /**
* ReadyState representing an EventSource connection that is open (eg connected)
*
* @public
*/
Gn.OPEN = 1, /**
* ReadyState representing an EventSource connection that is closed (eg disconnected)
*
* @public
*/
Gn.CLOSED = 2;
function bf() {
  const e = "document" in globalThis ? globalThis.document : void 0;
  return e && typeof e == "object" && "baseURI" in e && typeof e.baseURI == "string" ? e.baseURI : void 0;
}
const Hs = "https://api.chatbot.junngla.com";
class Tf {
  constructor(t) {
    this.config = t;
  }
  async loadChatHistory(t) {
    const n = await fetch(`${Hs}/openai/${t}/chat`, {
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
    const n = await fetch(`${Hs}/openai/chat`, {
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
    return new Gn(`${Hs}/openai/${t}/chat-streams`, {
      fetch: (n) => fetch(n, {
        headers: {
          ...this.config.apikey && { "X-Api-Key": this.config.apikey }
        }
      })
    });
  }
}
const F = {
  dataApiKey: "",
  dataUuidUser: "",
  defaultMessage: "Hola!, soy el asistente de integración de RedPay. ¿En qué puedo ayudarte?",
  chatbotWidth: "800px",
  chatbotHeight: "600px",
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
function Dn(e) {
  return typeof e == "string" && e.trim() !== "";
}
function Mo(e) {
  return typeof e == "string" && /^\d+(\.\d+)?$/.test(e);
}
function yf(e) {
  if (typeof e != "string") return !1;
  try {
    return new URL(e), !0;
  } catch {
    return !1;
  }
}
function xf(e) {
  const t = {
    ...F,
    ...e
  };
  return Dn(e.dataApiKey) || (console.error(
    "Implementación fallida: 'dataApiKey' es requerida y debe ser una cadena no vacía. Se usará el valor por defecto."
  ), t.dataApiKey = F.dataApiKey), [
    {
      key: "dataUuidUser",
      validator: Dn,
      error: "'data-uuid-user' es inválida."
    },
    {
      key: "defaultMessage",
      validator: Dn,
      error: "'default-message' es inválida."
    },
    {
      key: "headerName",
      validator: Dn,
      error: "'header-name' es inválida."
    },
    {
      key: "headerIcon",
      validator: yf,
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
      validator: Mo,
      error: "'chatbot-width' debe ser una cadena numérica."
    },
    {
      key: "chatbotHeight",
      validator: Mo,
      error: "'chatbot-height' debe ser una cadena numérica."
    }
  ].forEach(({ key: s, validator: r, error: o }) => {
    e[s] !== void 0 && e[s] !== F[s] && (r(e[s]) || (console.error(
      `Implementación fallida: ${o} Se usará el valor por defecto para '${s}'.`
    ), t[s] = F[s]));
  }), t;
}
const Ef = /* @__PURE__ */ Mt({
  name: "ChatBot",
  props: {
    dataApiKey: { type: String, default: F.dataApiKey },
    dataUuidUser: { type: String, default: F.dataUuidUser },
    defaultMessage: {
      type: String,
      default: F.defaultMessage
    },
    headerName: { type: String, default: F.headerName },
    headerIcon: { type: String, default: F.headerIcon },
    headerBackgroundColor: {
      type: String,
      default: F.headerBackgroundColor
    },
    headerTextColor: {
      type: String,
      default: F.headerTextColor
    },
    closeBtnColor: { type: String, default: F.closeBtnColor },
    userMessageColor: {
      type: String,
      default: F.userMessageColor
    },
    userMessageBackground: {
      type: String,
      default: F.userMessageBackground
    },
    assistantMessageColor: {
      type: String,
      default: F.assistantMessageColor
    },
    assistantMessageBackground: {
      type: String,
      default: F.assistantMessageBackground
    },
    buttonBackgroundColor: {
      type: String,
      default: F.buttonBackgroundColor
    },
    buttonTextColor: {
      type: String,
      default: F.buttonTextColor
    },
    chatbotWidth: { type: String, default: F.chatbotWidth },
    chatbotHeight: { type: String, default: F.chatbotHeight }
  },
  components: { ChatWindow: lf, ChatToggle: hf },
  setup(e) {
    const t = Js(() => xf(e)), n = { apikey: t.value.dataApiKey };
    Ri("chatConfig", n);
    const s = new Tf(n), r = ft(!1), o = ft(""), i = ft([]), l = ft(null), a = ft(!1), u = ft("");
    let c = null, d = null;
    const p = Js(
      () => a.value && u.value ? `Estado: ${u.value}` : "Escribe tu mensaje..."
    ), _ = Wi(), w = () => {
      zn(() => {
        var H, Y;
        const v = (Y = (H = _ == null ? void 0 : _.vnode) == null ? void 0 : H.el) == null ? void 0 : Y.getRootNode();
        if (!v) return;
        const D = v.querySelector(
          ".chat-messages"
        );
        D && (D.scrollTop = D.scrollHeight);
      });
    };
    bt(
      i,
      () => {
        w();
      },
      { deep: !0 }
    );
    const b = async () => {
      r.value ? (c && (c.close(), c = null), r.value = !1) : (r.value = !0, await zn(), w(), i.value.length === 0 && (a.value = !0, await B(), a.value = !1, w()));
    }, C = (v, D) => {
      i.value.push({ text: v, from: D });
    }, B = async () => {
      var D, H;
      const v = localStorage.getItem("threadId");
      if (v) {
        l.value = v;
        try {
          const Y = await s.loadChatHistory(l.value);
          for (const Z of Y) {
            const L = ((H = (D = Z == null ? void 0 : Z.content[0]) == null ? void 0 : D.text) == null ? void 0 : H.value) || "", z = (Z == null ? void 0 : Z.role) || "assistant";
            L && C(L, z);
          }
        } catch (Y) {
          console.error("Error al cargar el historial del chat", Y), C("Error al cargar el historial de mensajes.", "assistantError");
        }
      } else
        C(t.value.defaultMessage, "assistant");
    }, $ = async () => {
      if (o.value.trim() === "" || a.value) return;
      C(o.value, "user");
      const v = localStorage.getItem("threadId"), D = { message: o.value, threadId: v };
      o.value = "", a.value = !0;
      try {
        const H = await s.sendChatMessage(D);
        H.threadId && (l.value = H.threadId, localStorage.setItem("threadId", H.threadId), j(H.threadId));
      } catch (H) {
        console.error("Error al enviar el mensaje", H), C("Ocurrio un error con el servicio", "assistantError"), a.value = !1;
      }
    }, j = (v) => {
      (c == null ? void 0 : c.readyState) !== EventSource.OPEN && (c = s.createChatStream(v), d = null, u.value = "", c.addEventListener(`${l.value}`, (D) => {
        try {
          const H = JSON.parse(D.data);
          H.word && (d === null ? (C(H.word, "assistant"), d = i.value.length - 1) : i.value[d].text += H.word), ["created", "queued", "in_progress", "completed", "failed"].includes(H.status) && (u.value = H.status), (H.status === "completed" || H.status === "failed") && (a.value = !1, d = null, c == null || c.close());
        } catch (H) {
          console.error("Error al procesar el evento SSE", H);
        }
      }), c.onerror = () => {
        a.value = !1, c == null || c.close();
      });
    };
    return yr(() => {
      const v = localStorage.getItem("threadId");
      v && (l.value = v);
    }), {
      isOpen: r,
      userInput: o,
      messages: i,
      sending: a,
      placeholderText: p,
      toggleChat: b,
      sendMessage: $,
      validatedProps: t
    };
  }
}), kf = ".chat-slide-enter-active[data-v-ddefe430],.chat-slide-leave-active[data-v-ddefe430]{transition:transform .4s ease,opacity .4s ease}.chat-slide-enter-from[data-v-ddefe430]{transform:translate(100%);opacity:0}.chat-slide-enter-to[data-v-ddefe430],.chat-slide-leave-from[data-v-ddefe430]{transform:translate(0);opacity:1}.chat-slide-leave-to[data-v-ddefe430]{transform:translate(100%);opacity:0}";
function wf(e, t, n, s, r, o) {
  const i = hn("ChatWindow"), l = hn("ChatToggle");
  return He(), it("div", null, [
    de(vc, { name: "chat-slide" }, {
      default: di(() => [
        e.isOpen ? (He(), Xs(i, {
          key: 0,
          messages: e.messages,
          userInput: e.userInput,
          "onUpdate:userInput": t[0] || (t[0] = (a) => e.userInput = a),
          sending: e.sending,
          placeholder: e.placeholderText,
          "header-name": e.validatedProps.headerName,
          "header-icon": e.validatedProps.headerIcon,
          "header-background-color": e.validatedProps.headerBackgroundColor,
          "header-text-color": e.validatedProps.headerTextColor,
          "close-btn-color": e.validatedProps.closeBtnColor,
          "user-message-color": e.validatedProps.userMessageColor,
          "user-message-background": e.validatedProps.userMessageBackground,
          "assistant-message-color": e.validatedProps.assistantMessageColor,
          "assistant-message-background": e.validatedProps.assistantMessageBackground,
          "button-background-color": e.validatedProps.buttonBackgroundColor,
          "chatbot-height": e.validatedProps.chatbotHeight,
          "chatbot-width": e.validatedProps.chatbotWidth,
          "button-text-color": e.validatedProps.buttonTextColor,
          onSendMessage: e.sendMessage,
          onToggleChat: e.toggleChat
        }, null, 8, ["messages", "userInput", "sending", "placeholder", "header-name", "header-icon", "header-background-color", "header-text-color", "close-btn-color", "user-message-color", "user-message-background", "assistant-message-color", "assistant-message-background", "button-background-color", "chatbot-height", "chatbot-width", "button-text-color", "onSendMessage", "onToggleChat"])) : Ys("", !0)
      ]),
      _: 1
    }),
    e.isOpen ? Ys("", !0) : (He(), Xs(l, {
      key: 0,
      onToggleChat: e.toggleChat,
      "header-icon": e.validatedProps.headerIcon
    }, null, 8, ["onToggleChat", "header-icon"]))
  ]);
}
const fl = /* @__PURE__ */ Xt(Ef, [["render", wf], ["styles", [kf]], ["__scopeId", "data-v-ddefe430"]]), Sf = {
  dataApiKey: {
    type: String,
    required: !0
  },
  dataUuidUser: {
    type: String,
    default: F.dataUuidUser
  },
  defaultMessage: {
    type: String,
    default: F.defaultMessage
  },
  headerName: {
    type: String,
    default: F.headerName
  },
  headerIcon: {
    type: String,
    default: F.headerIcon
  },
  headerBackgroundColor: {
    type: String,
    default: F.headerBackgroundColor
  },
  headerTextColor: {
    type: String,
    default: F.headerTextColor
  },
  userMessageColor: {
    type: String,
    default: F.userMessageColor
  },
  assistantMessageColor: {
    type: String,
    default: F.assistantMessageColor
  },
  userMessageBackground: {
    type: String,
    default: F.userMessageBackground
  },
  assistantMessageBackground: {
    type: String,
    default: F.assistantMessageBackground
  },
  closeBtnColor: {
    type: String,
    default: F.closeBtnColor
  },
  buttonBackgroundColor: {
    type: String,
    default: F.buttonBackgroundColor
  },
  buttonTextColor: {
    type: String,
    default: F.buttonTextColor
  },
  chatbotWidth: {
    type: String,
    default: F.chatbotWidth
  },
  chatbotHeight: {
    type: String,
    default: F.chatbotHeight
  }
};
fl.props = Sf;
const vf = /* @__PURE__ */ zc(fl, { shadowRoot: !0 });
customElements.define("chat-bot", vf);
