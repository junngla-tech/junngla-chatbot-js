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
}, _l = () => !1, rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ur = (e) => e.startsWith("onUpdate:"), ce = Object.assign, fr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ml = Object.prototype.hasOwnProperty, q = (e, t) => ml.call(e, t), O = Array.isArray, Gt = (e) => os(e) === "[object Map]", Po = (e) => os(e) === "[object Set]", B = (e) => typeof e == "function", ae = (e) => typeof e == "string", Tt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Bo = (e) => (re(e) || B(e)) && B(e.then) && B(e.catch), Ho = Object.prototype.toString, os = (e) => Ho.call(e), bl = (e) => os(e).slice(8, -1), is = (e) => os(e) === "[object Object]", dr = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ln = /* @__PURE__ */ cr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ls = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, yl = /-(\w)/g, xe = ls(
  (e) => e.replace(yl, (t, n) => n ? n.toUpperCase() : "")
), Tl = /\B([A-Z])/g, Ae = ls(
  (e) => e.replace(Tl, "-$1").toLowerCase()
), as = ls((e) => e.charAt(0).toUpperCase() + e.slice(1)), Es = ls(
  (e) => e ? `on${as(e)}` : ""
), mt = (e, t) => !Object.is(e, t), $n = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Do = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ls = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, $s = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Lr;
const cs = () => Lr || (Lr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function it(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ae(s) ? wl(s) : it(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (ae(e) || re(e))
    return e;
}
const xl = /;(?![^(]*\))/g, kl = /:([^]+)/, El = /\/\*[^]*?\*\//g;
function wl(e) {
  const t = {};
  return e.replace(El, "").split(xl).forEach((n) => {
    if (n) {
      const s = n.split(kl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function us(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const s = us(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Sl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vl = /* @__PURE__ */ cr(Sl);
function Lo(e) {
  return !!e || e === "";
}
const $o = (e) => !!(e && e.__v_isRef === !0), Uo = (e) => ae(e) ? e : e == null ? "" : O(e) || re(e) && (e.toString === Ho || !B(e.toString)) ? $o(e) ? Uo(e.value) : JSON.stringify(e, jo, 2) : String(e), jo = (e, t) => $o(t) ? jo(e, t.value) : Gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[ws(s, o) + " =>"] = r, n),
    {}
  )
} : Po(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ws(n))
} : Tt(t) ? ws(t) : re(t) && !O(t) && !is(t) ? String(t) : t, ws = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Rl = { VITE_API_CHATBOT: "https://api.chatbot.junngla.com", GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_143908a2-f9e4-4efb-92b1-0df174d06bd2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/10.8.2 node/v20.19.0 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_143908a2-f9e4-4efb-92b1-0df174d06bd2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "junngla-tech", GRADLE_HOME: "/usr/share/gradle-8.13", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.0.13004108", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "91486299", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", SYSTEMD_EXEC_PID: "707", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.13/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250323.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.7/x64", JOURNAL_STREAM: "8:5814", GITHUB_WORKFLOW: "Build Docker Images", _: "/opt/hostedtoolcache/node/20.19.0/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", npm_config_npm_version: "10.8.2", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", STATS_D: "false", GITHUB_RUN_ID: "14116531250", STATS_VMFE: "true", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "tag", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "f61660df22dd343defa411644e7d8ecd4c685db8", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "junngla-tech/junngla-chatbot-frontend-web/.github/workflows/docker-image.yml@refs/tags/1.0.1", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/20.19.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_5ed24db4-0ffc-4a9f-a3aa-773bc1796261", INVOCATION_ID: "49b772db68354083a7ffe32afcadc94f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", NODE: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", npm_package_name: "junngla-chatbot-frontend-web", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "13", GITHUB_TRIGGERING_ACTOR: "CamiloMH", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 13", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "1.0.1", GITHUB_REPOSITORY: "junngla-tech/junngla-chatbot-frontend-web", STATS_D_D: "false", npm_lifecycle_script: "vue-tsc -b && vite build", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "955357351", GITHUB_ACTIONS: "true", STATS_PIP: "false", npm_package_version: "1.0.1", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "f61660df22dd343defa411644e7d8ecd4c685db8", GITHUB_RUN_ATTEMPT: "1", STATS_D_TC: "true", GITHUB_REF: "refs/tags/1.0.1", GITHUB_ACTOR: "CamiloMH", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", npm_config_globalconfig: "/opt/hostedtoolcache/node/20.19.0/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_143908a2-f9e4-4efb-92b1-0df174d06bd2", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", GITHUB_ACTOR_ID: "28745682", RUNNER_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web", npm_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_143908a2-f9e4-4efb-92b1-0df174d06bd2", npm_config_global_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.2.12479018", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", STATS_EXTP: "https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_143908a2-f9e4-4efb-92b1-0df174d06bd2", INIT_CWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", EDITOR: "vi", NODE_ENV: "production" };
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
let se;
const Ss = /* @__PURE__ */ new WeakSet();
class Fo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ss.has(this) && (Ss.delete(this), this.trigger()));
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
    const t = se, n = Ue;
    se = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      zo(this), se = t, Ue = n, this.flags &= -3;
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
    this.flags & 64 ? Ss.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Us(this) && this.run();
  }
  get dirty() {
    return Us(this);
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
function hr() {
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
function Us(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ko(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ko(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === yn))
    return;
  e.globalVersion = yn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Us(e)) {
    e.flags &= -3;
    return;
  }
  const n = se, s = Ue;
  se = e, Ue = !0;
  try {
    Wo(e);
    const r = e.fn(e._value);
    (t.version === 0 || mt(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    se = n, Ue = s, zo(e), e.flags &= -3;
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
function at() {
  qo.push(Ue), Ue = !1;
}
function ct() {
  const e = qo.pop();
  Ue = e === void 0 ? !0 : e;
}
function $r(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = se;
    se = void 0;
    try {
      t();
    } finally {
      se = n;
    }
  }
}
let yn = 0;
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
    if (!se || !Ue || se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== se)
      n = this.activeLink = new Ol(se, this), se.deps ? (n.prevDep = se.depsTail, se.depsTail.nextDep = n, se.depsTail = n) : se.deps = se.depsTail = n, Xo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = se.depsTail, n.nextDep = void 0, se.depsTail.nextDep = n, se.depsTail = n, se.deps === n && (se.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, yn++, this.notify(t);
  }
  notify(t) {
    hr();
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
const js = /* @__PURE__ */ new WeakMap(), At = Symbol(
  ""
), Fs = Symbol(
  ""
), Tn = Symbol(
  ""
);
function _e(e, t, n) {
  if (Ue && se) {
    let s = js.get(e);
    s || js.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new _r()), r.map = s, r.key = n), r.track();
  }
}
function rt(e, t, n, s, r, o) {
  const i = js.get(e);
  if (!i) {
    yn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (hr(), t === "clear")
    i.forEach(l);
  else {
    const a = O(e), u = a && dr(n);
    if (a && n === "length") {
      const c = Number(s);
      i.forEach((d, p) => {
        (p === "length" || p === Tn || !Tt(p) && p >= c) && l(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), u && l(i.get(Tn)), t) {
        case "add":
          a ? u && l(i.get("length")) : (l(i.get(At)), Gt(e) && l(i.get(Fs)));
          break;
        case "delete":
          a || (l(i.get(At)), Gt(e) && l(i.get(Fs)));
          break;
        case "set":
          Gt(e) && l(i.get(At));
          break;
      }
  }
  pr();
}
function Bt(e) {
  const t = z(e);
  return t === e ? t : (_e(t, "iterate", Tn), Be(e) ? t : t.map(me));
}
function fs(e) {
  return _e(e = z(e), "iterate", Tn), e;
}
const Nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return vs(this, Symbol.iterator, me);
  },
  concat(...e) {
    return Bt(this).concat(
      ...e.map((t) => O(t) ? Bt(t) : t)
    );
  },
  entries() {
    return vs(this, "entries", (e) => (e[1] = me(e[1]), e));
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
    return Rs(this, "includes", e);
  },
  indexOf(...e) {
    return Rs(this, "indexOf", e);
  },
  join(e) {
    return Bt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Rs(this, "lastIndexOf", e);
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
    return vs(this, "values", me);
  }
};
function vs(e, t, n) {
  const s = fs(e), r = s[t]();
  return s !== e && !Be(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const Ml = Array.prototype;
function Je(e, t, n, s, r, o) {
  const i = fs(e), l = i !== e && !Be(e), a = i[t];
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
  const r = fs(e);
  let o = n;
  return r !== e && (Be(e) ? n.length > 3 && (o = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : o = function(i, l, a) {
    return n.call(this, i, me(l), a, e);
  }), r[t](o, ...s);
}
function Rs(e, t, n) {
  const s = z(e);
  _e(s, "iterate", Tn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && br(n[0]) ? (n[0] = z(n[0]), s[t](...n)) : r;
}
function Qt(e, t, n = []) {
  at(), hr();
  const s = z(e)[t].apply(e, n);
  return pr(), ct(), s;
}
const Pl = /* @__PURE__ */ cr("__proto__,__v_isRef,__isVue"), Yo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Tt)
);
function Bl(e) {
  Tt(e) || (e = String(e));
  const t = z(this);
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
    return (Tt(n) ? Yo.has(n) : Pl(n)) || (r || _e(t, "get", n), o) ? l : pe(l) ? i && dr(n) ? l : l.value : re(l) ? r ? ri(l) : mr(l) : l;
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
      if (!Be(s) && !Ot(s) && (o = z(o), s = z(s)), !O(t) && pe(o) && !pe(s))
        return a ? !1 : (o.value = s, !0);
    }
    const i = O(t) && dr(n) ? Number(n) < t.length : q(t, n), l = Reflect.set(
      t,
      n,
      s,
      pe(t) ? t : r
    );
    return t === z(r) && (i ? mt(s, o) && rt(t, "set", n, s) : rt(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = q(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && rt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Tt(n) || !Yo.has(n)) && _e(t, "has", n), s;
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
const Hl = /* @__PURE__ */ new Jo(), Dl = /* @__PURE__ */ new Qo(), Ll = /* @__PURE__ */ new Jo(!0), $l = /* @__PURE__ */ new Qo(!0), Gs = (e) => e, An = (e) => Reflect.getPrototypeOf(e);
function Ul(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = z(r), i = Gt(o), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = r[e](...s), c = n ? Gs : t ? Vs : me;
    return !t && _e(
      o,
      "iterate",
      a ? Fs : At
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
      const o = this.__v_raw, i = z(o), l = z(r);
      e || (mt(r, l) && _e(i, "get", r), _e(i, "get", l));
      const { has: a } = An(i), u = t ? Gs : e ? Vs : me;
      if (a.call(i, r))
        return u(o.get(r));
      if (a.call(i, l))
        return u(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && _e(z(r), "iterate", At), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = z(o), l = z(r);
      return e || (mt(r, l) && _e(i, "has", r), _e(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
    },
    forEach(r, o) {
      const i = this, l = i.__v_raw, a = z(l), u = t ? Gs : e ? Vs : me;
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
        !t && !Be(r) && !Ot(r) && (r = z(r));
        const o = z(this);
        return An(o).has.call(o, r) || (o.add(r), rt(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !Be(o) && !Ot(o) && (o = z(o));
        const i = z(this), { has: l, get: a } = An(i);
        let u = l.call(i, r);
        u || (r = z(r), u = l.call(i, r));
        const c = a.call(i, r);
        return i.set(r, o), u ? mt(o, c) && rt(i, "set", r, o) : rt(i, "add", r, o), this;
      },
      delete(r) {
        const o = z(this), { has: i, get: l } = An(o);
        let a = i.call(o, r);
        a || (r = z(r), a = i.call(o, r)), l && l.call(o, r);
        const u = o.delete(r);
        return a && rt(o, "delete", r, void 0), u;
      },
      clear() {
        const r = z(this), o = r.size !== 0, i = r.clear();
        return o && rt(
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
function ds(e, t) {
  const n = jl(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    q(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Fl = {
  get: /* @__PURE__ */ ds(!1, !1)
}, Gl = {
  get: /* @__PURE__ */ ds(!1, !0)
}, Vl = {
  get: /* @__PURE__ */ ds(!0, !1)
}, Wl = {
  get: /* @__PURE__ */ ds(!0, !0)
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
  return Ot(e) ? e : hs(
    e,
    !1,
    Hl,
    Fl,
    ei
  );
}
function ql(e) {
  return hs(
    e,
    !1,
    Ll,
    Gl,
    ti
  );
}
function ri(e) {
  return hs(
    e,
    !0,
    Dl,
    Vl,
    ni
  );
}
function Nn(e) {
  return hs(
    e,
    !0,
    $l,
    Wl,
    si
  );
}
function hs(e, t, n, s, r) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive))
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
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function Xl(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && Do(e, "__v_skip", !0), e;
}
const me = (e) => re(e) ? mr(e) : e, Vs = (e) => re(e) ? ri(e) : e;
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function nt(e) {
  return Yl(e, !1);
}
function Yl(e, t) {
  return pe(e) ? e : new Zl(e, t);
}
class Zl {
  constructor(t, n) {
    this.dep = new _r(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : z(t), this._value = n ? t : me(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Be(t) || Ot(t);
    t = s ? t : z(t), mt(t, n) && (this._rawValue = t, this._value = s ? t : me(t), this.dep.trigger());
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
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new _r(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = yn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    se !== this)
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
  return B(e) ? s = e : (s = e.get, r = e.set), new Ql(s, r, n);
}
const Mn = {}, zn = /* @__PURE__ */ new WeakMap();
let Rt;
function ta(e, t = !1, n = Rt) {
  if (n) {
    let s = zn.get(n);
    s || zn.set(n, s = []), s.push(e);
  }
}
function na(e, t, n = Q) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: a } = n, u = (C) => r ? C : Be(C) || r === !1 || r === 0 ? ot(C, 1) : ot(C);
  let c, d, p, _, w = !1, b = !1;
  if (pe(e) ? (d = () => e.value, w = Be(e)) : Vt(e) ? (d = () => u(e), w = !0) : O(e) ? (b = !0, w = e.some((C) => Vt(C) || Be(C)), d = () => e.map((C) => {
    if (pe(C))
      return C.value;
    if (Vt(C))
      return u(C);
    if (B(C))
      return a ? a(C, 2) : C();
  })) : B(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (p) {
      at();
      try {
        p();
      } finally {
        ct();
      }
    }
    const C = Rt;
    Rt = c;
    try {
      return a ? a(e, 3, [_]) : e(_);
    } finally {
      Rt = C;
    }
  } : d = $e, t && r) {
    const C = d, K = r === !0 ? 1 / 0 : r;
    d = () => ot(C(), K);
  }
  const I = Il(), N = () => {
    c.stop(), I && I.active && fr(I.effects, c);
  };
  if (o && t) {
    const C = t;
    t = (...K) => {
      C(...K), N();
    };
  }
  let $ = b ? new Array(e.length).fill(Mn) : Mn;
  const j = (C) => {
    if (!(!(c.flags & 1) || !c.dirty && !C))
      if (t) {
        const K = c.run();
        if (r || w || (b ? K.some((L, V) => mt(L, $[V])) : mt(K, $))) {
          p && p();
          const L = Rt;
          Rt = c;
          try {
            const V = [
              K,
              // pass undefined as the old value when it's changed for the first time
              $ === Mn ? void 0 : b && $[0] === Mn ? [] : $,
              _
            ];
            a ? a(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            ), $ = K;
          } finally {
            Rt = L;
          }
        }
      } else
        c.run();
  };
  return l && l(j), c = new Fo(d), c.scheduler = i ? () => i(j, !1) : j, _ = (C) => ta(C, !1, c), p = c.onStop = () => {
    const C = zn.get(c);
    if (C) {
      if (a)
        a(C, 4);
      else
        for (const K of C) K();
      zn.delete(c);
    }
  }, t ? s ? j(!0) : $ = c.run() : i ? i(j.bind(null, !0), !0) : c.run(), N.pause = c.pause.bind(c), N.resume = c.resume.bind(c), N.stop = N, N;
}
function ot(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, pe(e))
    ot(e.value, t, n);
  else if (O(e))
    for (let s = 0; s < e.length; s++)
      ot(e[s], t, n);
  else if (Po(e) || Gt(e))
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
var dt = { VITE_API_CHATBOT: "https://api.chatbot.junngla.com", GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_143908a2-f9e4-4efb-92b1-0df174d06bd2", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/10.8.2 node/v20.19.0 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_143908a2-f9e4-4efb-92b1-0df174d06bd2", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "junngla-tech", GRADLE_HOME: "/usr/share/gradle-8.13", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.0.13004108", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "91486299", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", SYSTEMD_EXEC_PID: "707", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.13/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250323.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.7/x64", JOURNAL_STREAM: "8:5814", GITHUB_WORKFLOW: "Build Docker Images", _: "/opt/hostedtoolcache/node/20.19.0/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", npm_config_npm_version: "10.8.2", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/runner-provisioner.service/memory.pressure", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", STATS_D: "false", GITHUB_RUN_ID: "14116531250", STATS_VMFE: "true", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "tag", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "f61660df22dd343defa411644e7d8ecd4c685db8", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "junngla-tech/junngla-chatbot-frontend-web/.github/workflows/docker-image.yml@refs/tags/1.0.1", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/junngla-chatbot-frontend-web/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/20.19.0/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_5ed24db4-0ffc-4a9f-a3aa-773bc1796261", INVOCATION_ID: "49b772db68354083a7ffe32afcadc94f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", NODE: "/opt/hostedtoolcache/node/20.19.0/x64/bin/node", npm_package_name: "junngla-chatbot-frontend-web", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "13", GITHUB_TRIGGERING_ACTOR: "CamiloMH", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 13", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "1.0.1", GITHUB_REPOSITORY: "junngla-tech/junngla-chatbot-frontend-web", STATS_D_D: "false", npm_lifecycle_script: "vue-tsc -b && vite build", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "955357351", GITHUB_ACTIONS: "true", STATS_PIP: "false", npm_package_version: "1.0.1", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "f61660df22dd343defa411644e7d8ecd4c685db8", GITHUB_RUN_ATTEMPT: "1", STATS_D_TC: "true", GITHUB_REF: "refs/tags/1.0.1", GITHUB_ACTOR: "CamiloMH", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", npm_config_globalconfig: "/opt/hostedtoolcache/node/20.19.0/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_143908a2-f9e4-4efb-92b1-0df174d06bd2", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", GITHUB_ACTOR_ID: "28745682", RUNNER_WORKSPACE: "/home/runner/work/junngla-chatbot-frontend-web", npm_execpath: "/opt/hostedtoolcache/node/20.19.0/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_143908a2-f9e4-4efb-92b1-0df174d06bd2", npm_config_global_prefix: "/opt/hostedtoolcache/node/20.19.0/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.2.12479018", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", STATS_EXTP: "https://provjobdprod.z13.web.core.windows.net/settings/provjobdsettings-latest/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.2.12479018", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_143908a2-f9e4-4efb-92b1-0df174d06bd2", INIT_CWD: "/home/runner/work/junngla-chatbot-frontend-web/junngla-chatbot-frontend-web", EDITOR: "vi", NODE_ENV: "production" };
const un = [];
let Cs = !1;
function sa(e, ...t) {
  if (Cs) return;
  Cs = !0, at();
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
  ct(), Cs = !1;
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
  return ae(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : pe(t) ? (t = li(e, z(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : B(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = z(t), n ? t : [`${e}=`, t]);
}
function qt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    ps(r, t, n);
  }
}
function je(e, t, n, s) {
  if (B(e)) {
    const r = qt(e, t, n, s);
    return r && Bo(r) && r.catch((o) => {
      ps(o, t, n);
    }), r;
  }
  if (O(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(je(e[o], t, n, s));
    return r;
  }
}
function ps(e, t, n, s = !0) {
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
      at(), qt(o, null, 10, [
        e,
        a,
        u
      ]), ct();
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
const ye = [];
let qe = -1;
const Wt = [];
let ht = null, Ht = 0;
const ai = /* @__PURE__ */ Promise.resolve();
let Kn = null;
function qn(e) {
  const t = Kn || ai;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ca(e) {
  let t = qe + 1, n = ye.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ye[s], o = xn(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function yr(e) {
  if (!(e.flags & 1)) {
    const t = xn(e), n = ye[ye.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xn(n) ? ye.push(e) : ye.splice(ca(t), 0, e), e.flags |= 1, ci();
  }
}
function ci() {
  Kn || (Kn = ai.then(fi));
}
function ua(e) {
  O(e) ? Wt.push(...e) : ht && e.id === -1 ? ht.splice(Ht + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1), ci();
}
function jr(e, t, n = qe + 1) {
  for (; n < ye.length; n++) {
    const s = ye[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ye.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ui(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, s) => xn(n) - xn(s)
    );
    if (Wt.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, Ht = 0; Ht < ht.length; Ht++) {
      const n = ht[Ht];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ht = null, Ht = 0;
  }
}
const xn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fi(e) {
  const t = $e;
  try {
    for (qe = 0; qe < ye.length; qe++) {
      const n = ye[qe];
      n && !(n.flags & 8) && (dt.NODE_ENV !== "production" && t(n), n.flags & 4 && (n.flags &= -2), qt(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; qe < ye.length; qe++) {
      const n = ye[qe];
      n && (n.flags &= -2);
    }
    qe = -1, ye.length = 0, ui(), Kn = null, (ye.length || Wt.length) && fi();
  }
}
let Se = null, di = null;
function Xn(e) {
  const t = Se;
  return Se = e, di = e && e.type.__scopeId || null, t;
}
function hi(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Jr(-1);
    const o = Xn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Xn(o), s._d && Jr(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function fa(e, t) {
  if (Se === null)
    return e;
  const n = ys(Se), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, a = Q] = t[r];
    o && (B(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ot(i), s.push({
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
function Et(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[s];
    a && (at(), je(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ct());
  }
}
const da = Symbol("_vte"), pi = (e) => e.__isTeleport, pt = Symbol("_leaveCb"), Pn = Symbol("_enterCb");
function ha() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Tr(() => {
    e.isMounted = !0;
  }), ki(() => {
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
    const n = Wi(), s = ha();
    return () => {
      const r = t.default && yi(t.default(), !0);
      if (!r || !r.length)
        return;
      const o = mi(r), i = z(e), { mode: l } = i;
      if (s.isLeaving)
        return Is(o);
      const a = Fr(o);
      if (!a)
        return Is(o);
      let u = Ws(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      a.type !== we && kn(a, u);
      let c = n.subTree && Fr(n.subTree);
      if (c && c.type !== we && !Ct(a, c) && _i(n).type !== we) {
        let d = Ws(
          c,
          i,
          s,
          n
        );
        if (kn(c, d), l === "out-in" && a.type !== we)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Is(o);
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
function Ws(e, t, n, s, r) {
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
    onBeforeAppear: I,
    onAppear: N,
    onAfterAppear: $,
    onAppearCancelled: j
  } = t, C = String(e.key), K = bi(n, e), L = (D, F) => {
    D && je(
      D,
      s,
      9,
      F
    );
  }, V = (D, F) => {
    const ee = F[1];
    L(D, F), O(D) ? D.every((R) => R.length <= 1) && ee() : D.length <= 1 && ee();
  }, H = {
    mode: i,
    persisted: l,
    beforeEnter(D) {
      let F = a;
      if (!n.isMounted)
        if (o)
          F = I || a;
        else
          return;
      D[pt] && D[pt](
        !0
        /* cancelled */
      );
      const ee = K[C];
      ee && Ct(e, ee) && ee.el[pt] && ee.el[pt](), L(F, [D]);
    },
    enter(D) {
      let F = u, ee = c, R = d;
      if (!n.isMounted)
        if (o)
          F = N || u, ee = $ || c, R = j || d;
        else
          return;
      let oe = !1;
      const ge = D[Pn] = (Ze) => {
        oe || (oe = !0, Ze ? L(R, [D]) : L(ee, [D]), H.delayedLeave && H.delayedLeave(), D[Pn] = void 0);
      };
      F ? V(F, [D, ge]) : ge();
    },
    leave(D, F) {
      const ee = String(e.key);
      if (D[Pn] && D[Pn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return F();
      L(p, [D]);
      let R = !1;
      const oe = D[pt] = (ge) => {
        R || (R = !0, F(), ge ? L(b, [D]) : L(w, [D]), D[pt] = void 0, K[ee] === e && delete K[ee]);
      };
      K[ee] = e, _ ? V(_, [D, oe]) : oe();
    },
    clone(D) {
      const F = Ws(
        D,
        t,
        n,
        s,
        r
      );
      return r && r(F), F;
    }
  };
  return H;
}
function Is(e) {
  if (gs(e))
    return e = yt(e), e.children = null, e;
}
function Fr(e) {
  if (!gs(e))
    return pi(e.type) && e.children ? mi(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && B(n.default))
      return n.default();
  }
}
function kn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function yi(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Le ? (i.patchFlag & 128 && r++, s = s.concat(
      yi(i.children, t, l)
    )) : (t || i.type !== we) && s.push(l != null ? yt(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return B(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ti(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Yn(e, t, n, s, r = !1) {
  if (O(e)) {
    e.forEach(
      (w, b) => Yn(
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
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Yn(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? ys(s.component) : s.el, i = r ? null : o, { i: l, r: a } = e, u = t && t.r, c = l.refs === Q ? l.refs = {} : l.refs, d = l.setupState, p = z(d), _ = d === Q ? () => !1 : (w) => q(p, w);
  if (u != null && u !== a && (ae(u) ? (c[u] = null, _(u) && (d[u] = null)) : pe(u) && (u.value = null)), B(a))
    qt(a, l, 12, [i, c]);
  else {
    const w = ae(a), b = pe(a);
    if (w || b) {
      const I = () => {
        if (e.f) {
          const N = w ? _(a) ? d[a] : c[a] : a.value;
          r ? O(N) && fr(N, o) : O(N) ? N.includes(o) || N.push(o) : w ? (c[a] = [o], _(a) && (d[a] = c[a])) : (a.value = [o], e.k && (c[e.k] = a.value));
        } else w ? (c[a] = i, _(a) && (d[a] = i)) : b && (a.value = i, e.k && (c[e.k] = i));
      };
      i ? (I.id = -1, Ce(I, n)) : I();
    }
  }
}
cs().requestIdleCallback;
cs().cancelIdleCallback;
const fn = (e) => !!e.type.__asyncLoader, gs = (e) => e.type.__isKeepAlive;
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
  if (_s(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      gs(r.parent.vnode) && ba(s, t, n, r), r = r.parent;
  }
}
function ba(e, t, n, s) {
  const r = _s(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ei(() => {
    fr(s[t], r);
  }, n);
}
function _s(e, t, n = fe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      at();
      const l = vn(n), a = je(t, n, e, i);
      return l(), ct(), a;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const ut = (e) => (t, n = fe) => {
  (!wn || e === "sp") && _s(e, (...s) => t(...s), n);
}, ya = ut("bm"), Tr = ut("m"), Ta = ut(
  "bu"
), xa = ut("u"), ki = ut(
  "bum"
), Ei = ut("um"), ka = ut(
  "sp"
), Ea = ut("rtg"), wa = ut("rtc");
function Sa(e, t = fe) {
  _s("ec", e, t);
}
const va = "components";
function dn(e, t) {
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
      if (l && (l === t || l === xe(t) || l === as(xe(t))))
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
  return e && (e[t] || e[xe(t)] || e[as(xe(t))]);
}
function Ia(e, t, n, s) {
  let r;
  const o = n, i = O(e);
  if (i || ae(e)) {
    const l = i && Vt(e);
    let a = !1;
    l && (a = !Be(e), e = fs(e)), r = new Array(e.length);
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
  } else if (re(e))
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
const zs = (e) => e ? zi(e) ? ys(e) : zs(e.parent) : null, hn = (
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
    $parent: (e) => zs(e.parent),
    $root: (e) => zs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Si(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qn.bind(e.proxy)),
    $watch: (e) => Ya.bind(e)
  })
), As = (e, t) => e !== Q && !e.__isScriptSetup && q(e, t), Aa = {
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
        if (As(s, t))
          return i[t] = 1, s[t];
        if (r !== Q && q(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && q(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== Q && q(n, t))
          return i[t] = 4, n[t];
        Ks && (i[t] = 0);
      }
    }
    const c = hn[t];
    let d, p;
    if (c)
      return t === "$attrs" && _e(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Q && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, q(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return As(r, t) ? (r[t] = n, !0) : s !== Q && q(s, t) ? (s[t] = n, !0) : q(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== Q && q(e, i) || As(t, i) || (l = o[0]) && q(l, i) || q(s, i) || q(hn, i) || q(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Vr(e) {
  return O(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ks = !0;
function Oa(e) {
  const t = Si(e), n = e.proxy, s = e.ctx;
  Ks = !1, t.beforeCreate && Wr(t.beforeCreate, e, "bc");
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
    deactivated: I,
    beforeDestroy: N,
    beforeUnmount: $,
    destroyed: j,
    unmounted: C,
    render: K,
    renderTracked: L,
    renderTriggered: V,
    errorCaptured: H,
    serverPrefetch: D,
    // public API
    expose: F,
    inheritAttrs: ee,
    // assets
    components: R,
    directives: oe,
    filters: ge
  } = t;
  if (u && Na(u, s, null), i)
    for (const le in i) {
      const te = i[le];
      B(te) && (s[le] = te.bind(n));
    }
  if (r) {
    const le = r.call(n, n);
    re(le) && (e.data = mr(le));
  }
  if (Ks = !0, o)
    for (const le in o) {
      const te = o[le], xt = B(te) ? te.bind(n, n) : B(te.get) ? te.get.bind(n, n) : $e, Cn = !B(te) && B(te.set) ? te.set.bind(n) : $e, kt = Js({
        get: xt,
        set: Cn
      });
      Object.defineProperty(s, le, {
        enumerable: !0,
        configurable: !0,
        get: () => kt.value,
        set: (Fe) => kt.value = Fe
      });
    }
  if (l)
    for (const le in l)
      wi(l[le], s, n, le);
  if (a) {
    const le = B(a) ? a.call(n) : a;
    Reflect.ownKeys(le).forEach((te) => {
      Ri(te, le[te]);
    });
  }
  c && Wr(c, e, "c");
  function de(le, te) {
    O(te) ? te.forEach((xt) => le(xt.bind(n))) : te && le(te.bind(n));
  }
  if (de(ya, d), de(Tr, p), de(Ta, _), de(xa, w), de(_a, b), de(ma, I), de(Sa, H), de(wa, L), de(Ea, V), de(ki, $), de(Ei, C), de(ka, D), O(F))
    if (F.length) {
      const le = e.exposed || (e.exposed = {});
      F.forEach((te) => {
        Object.defineProperty(le, te, {
          get: () => n[te],
          set: (xt) => n[te] = xt
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === $e && (e.render = K), ee != null && (e.inheritAttrs = ee), R && (e.components = R), oe && (e.directives = oe), D && Ti(e);
}
function Na(e, t, n = $e) {
  O(e) && (e = qs(e));
  for (const s in e) {
    const r = e[s];
    let o;
    re(r) ? "default" in r ? o = Un(
      r.from || s,
      r.default,
      !0
    ) : o = Un(r.from || s) : o = Un(r), pe(o) ? Object.defineProperty(t, s, {
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
    B(o) && bt(r, o);
  } else if (B(e))
    bt(r, e.bind(n));
  else if (re(e))
    if (O(e))
      e.forEach((o) => wi(o, t, n, s));
    else {
      const o = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(o) && bt(r, o, e);
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
    (u) => Zn(a, u, i, !0)
  ), Zn(a, t, i)), re(t) && o.set(t, a), a;
}
function Zn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Zn(e, o, n, !0), r && r.forEach(
    (i) => Zn(e, i, n, !0)
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
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Pa(e, t) {
  return sn(qs(e), qs(t));
}
function qs(e) {
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
    B(s) || (s = ce({}, s)), r != null && !re(r) && (r = null);
    const o = vi(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = o.app = {
      _uid: Ha++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Tc,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return i.has(c) || (c && B(c.install) ? (i.add(c), c.install(u, ...d)) : B(c) && (i.add(c), c(u, ...d))), u;
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
          const _ = u._ceVNode || he(s, r);
          return _.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(_, c, p), a = !0, u._container = c, c.__vue_app__ = u, ys(_.component);
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
function Un(e, t, n = !1) {
  const s = fe || Se;
  if (s || zt) {
    const r = zt ? zt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && B(t) ? t.call(s && s.proxy) : t;
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
  } = e, l = z(r), [a] = e.propsOptions;
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
        if (ms(e.emitsOptions, p))
          continue;
        const _ = t[p];
        if (a)
          if (q(o, p))
            _ !== o[p] && (o[p] = _, u = !0);
          else {
            const w = xe(p);
            r[w] = Xs(
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
      !q(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ae(d)) === d || !q(t, c))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[d] = Xs(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (o !== l)
      for (const d in o)
        (!t || !q(t, d)) && (delete o[d], u = !0);
  }
  u && rt(e.attrs, "set", "");
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
      r && q(r, c = xe(a)) ? !o || !o.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : ms(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, i = !0);
    }
  if (o) {
    const a = z(n), u = l || Q;
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      n[d] = Xs(
        r,
        a,
        d,
        u[d],
        e,
        !q(u, d)
      );
    }
  }
  return i;
}
function Xs(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = q(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && B(a)) {
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
  if (!B(e)) {
    const c = (d) => {
      a = !0;
      const [p, _] = Ni(d, t, !0);
      ce(i, p), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !a)
    return re(e) && s.set(e, Ft), Ft;
  if (O(o))
    for (let c = 0; c < o.length; c++) {
      const d = xe(o[c]);
      qr(d) && (i[d] = Q);
    }
  else if (o)
    for (const c in o) {
      const d = xe(c);
      if (qr(d)) {
        const p = o[c], _ = i[d] = O(p) || B(p) ? { type: p } : ce({}, p), w = _.type;
        let b = !1, I = !0;
        if (O(w))
          for (let N = 0; N < w.length; ++N) {
            const $ = w[N], j = B($) && $.name;
            if (j === "Boolean") {
              b = !0;
              break;
            } else j === "String" && (I = !1);
          }
        else
          b = B(w) && w.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = b, _[
          1
          /* shouldCastTrue */
        ] = I, (b || q(_, "default")) && l.push(d);
      }
    }
  const u = [i, l];
  return re(e) && s.set(e, u), u;
}
function qr(e) {
  return e[0] !== "$" && !ln(e);
}
const Mi = (e) => e[0] === "_" || e === "$stable", xr = (e) => O(e) ? e.map(Xe) : [Xe(e)], ja = (e, t, n) => {
  if (t._n)
    return t;
  const s = hi((...r) => (dt.NODE_ENV !== "production" && fe && (!n || (n.root, fe.root)), xr(t(...r))), n);
  return s._c = !1, s;
}, Pi = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Mi(r)) continue;
    const o = e[r];
    if (B(o))
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
  const n = cs();
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
  } = e, b = (f, h, g, T = null, m = null, y = null, S = void 0, E = null, k = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !Ct(f, h) && (T = In(f), Fe(f, m, y, !0), f = null), h.patchFlag === -2 && (k = !1, h.dynamicChildren = null);
    const { type: x, ref: M, shapeFlag: v } = h;
    switch (x) {
      case bs:
        I(f, h, g, T);
        break;
      case we:
        N(f, h, g, T);
        break;
      case Ns:
        f == null && $(h, g, T, S);
        break;
      case Le:
        R(
          f,
          h,
          g,
          T,
          m,
          y,
          S,
          E,
          k
        );
        break;
      default:
        v & 1 ? K(
          f,
          h,
          g,
          T,
          m,
          y,
          S,
          E,
          k
        ) : v & 6 ? oe(
          f,
          h,
          g,
          T,
          m,
          y,
          S,
          E,
          k
        ) : (v & 64 || v & 128) && x.process(
          f,
          h,
          g,
          T,
          m,
          y,
          S,
          E,
          k,
          Zt
        );
    }
    M != null && m && Yn(M, f && f.ref, y, h || f, !h);
  }, I = (f, h, g, T) => {
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
  }, N = (f, h, g, T) => {
    f == null ? s(
      h.el = a(h.children || ""),
      g,
      T
    ) : h.el = f.el;
  }, $ = (f, h, g, T) => {
    [f.el, f.anchor] = w(
      f.children,
      h,
      g,
      T,
      f.el,
      f.anchor
    );
  }, j = ({ el: f, anchor: h }, g, T) => {
    let m;
    for (; f && f !== h; )
      m = p(f), s(f, g, T), f = m;
    s(h, g, T);
  }, C = ({ el: f, anchor: h }) => {
    let g;
    for (; f && f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, K = (f, h, g, T, m, y, S, E, k) => {
    h.type === "svg" ? S = "svg" : h.type === "math" && (S = "mathml"), f == null ? L(
      h,
      g,
      T,
      m,
      y,
      S,
      E,
      k
    ) : D(
      f,
      h,
      m,
      y,
      S,
      E,
      k
    );
  }, L = (f, h, g, T, m, y, S, E) => {
    let k, x;
    const { props: M, shapeFlag: v, transition: A, dirs: P } = f;
    if (k = f.el = i(
      f.type,
      y,
      M && M.is,
      M
    ), v & 8 ? c(k, f.children) : v & 16 && H(
      f.children,
      k,
      null,
      T,
      m,
      Os(f, y),
      S,
      E
    ), P && Et(f, null, T, "created"), V(k, f, f.scopeId, S, T), M) {
      for (const ne in M)
        ne !== "value" && !ln(ne) && o(k, ne, null, M[ne], y, T);
      "value" in M && o(k, "value", null, M.value, y), (x = M.onVnodeBeforeMount) && ze(x, T, f);
    }
    P && Et(f, null, T, "beforeMount");
    const W = za(m, A);
    W && A.beforeEnter(k), s(k, h, g), ((x = M && M.onVnodeMounted) || W || P) && Ce(() => {
      x && ze(x, T, f), W && A.enter(k), P && Et(f, null, T, "mounted");
    }, m);
  }, V = (f, h, g, T, m) => {
    if (g && _(f, g), T)
      for (let y = 0; y < T.length; y++)
        _(f, T[y]);
    if (m) {
      let y = m.subTree;
      if (h === y || Fi(y.type) && (y.ssContent === h || y.ssFallback === h)) {
        const S = m.vnode;
        V(
          f,
          S,
          S.scopeId,
          S.slotScopeIds,
          m.parent
        );
      }
    }
  }, H = (f, h, g, T, m, y, S, E, k = 0) => {
    for (let x = k; x < f.length; x++) {
      const M = f[x] = E ? gt(f[x]) : Xe(f[x]);
      b(
        null,
        M,
        h,
        g,
        T,
        m,
        y,
        S,
        E
      );
    }
  }, D = (f, h, g, T, m, y, S) => {
    const E = h.el = f.el;
    let { patchFlag: k, dynamicChildren: x, dirs: M } = h;
    k |= f.patchFlag & 16;
    const v = f.props || Q, A = h.props || Q;
    let P;
    if (g && wt(g, !1), (P = A.onVnodeBeforeUpdate) && ze(P, g, h, f), M && Et(h, f, g, "beforeUpdate"), g && wt(g, !0), (v.innerHTML && A.innerHTML == null || v.textContent && A.textContent == null) && c(E, ""), x ? F(
      f.dynamicChildren,
      x,
      E,
      g,
      T,
      Os(h, m),
      y
    ) : S || te(
      f,
      h,
      E,
      null,
      g,
      T,
      Os(h, m),
      y,
      !1
    ), k > 0) {
      if (k & 16)
        ee(E, v, A, g, m);
      else if (k & 2 && v.class !== A.class && o(E, "class", null, A.class, m), k & 4 && o(E, "style", v.style, A.style, m), k & 8) {
        const W = h.dynamicProps;
        for (let ne = 0; ne < W.length; ne++) {
          const Y = W[ne], ve = v[Y], ke = A[Y];
          (ke !== ve || Y === "value") && o(E, Y, ve, ke, m, g);
        }
      }
      k & 1 && f.children !== h.children && c(E, h.children);
    } else !S && x == null && ee(E, v, A, g, m);
    ((P = A.onVnodeUpdated) || M) && Ce(() => {
      P && ze(P, g, h, f), M && Et(h, f, g, "updated");
    }, T);
  }, F = (f, h, g, T, m, y, S) => {
    for (let E = 0; E < h.length; E++) {
      const k = f[E], x = h[E], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === Le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ct(k, x) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 70) ? d(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      b(
        k,
        x,
        M,
        null,
        T,
        m,
        y,
        S,
        !0
      );
    }
  }, ee = (f, h, g, T, m) => {
    if (h !== g) {
      if (h !== Q)
        for (const y in h)
          !ln(y) && !(y in g) && o(
            f,
            y,
            h[y],
            null,
            m,
            T
          );
      for (const y in g) {
        if (ln(y)) continue;
        const S = g[y], E = h[y];
        S !== E && y !== "value" && o(f, y, E, S, m, T);
      }
      "value" in g && o(f, "value", h.value, g.value, m);
    }
  }, R = (f, h, g, T, m, y, S, E, k) => {
    const x = h.el = f ? f.el : l(""), M = h.anchor = f ? f.anchor : l("");
    let { patchFlag: v, dynamicChildren: A, slotScopeIds: P } = h;
    P && (E = E ? E.concat(P) : P), f == null ? (s(x, g, T), s(M, g, T), H(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      g,
      M,
      m,
      y,
      S,
      E,
      k
    )) : v > 0 && v & 64 && A && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (F(
      f.dynamicChildren,
      A,
      g,
      m,
      y,
      S,
      E
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || m && h === m.subTree) && Di(
      f,
      h,
      !0
      /* shallow */
    )) : te(
      f,
      h,
      g,
      M,
      m,
      y,
      S,
      E,
      k
    );
  }, oe = (f, h, g, T, m, y, S, E, k) => {
    h.slotScopeIds = E, f == null ? h.shapeFlag & 512 ? m.ctx.activate(
      h,
      g,
      T,
      S,
      k
    ) : ge(
      h,
      g,
      T,
      m,
      y,
      S,
      k
    ) : Ze(f, h, k);
  }, ge = (f, h, g, T, m, y, S) => {
    const E = f.component = fc(
      f,
      T,
      m
    );
    if (gs(f) && (E.ctx.renderer = Zt), dc(E, !1, S), E.asyncDep) {
      if (m && m.registerDep(E, de, S), !f.el) {
        const k = E.subTree = he(we);
        N(null, k, h, g);
      }
    } else
      de(
        E,
        f,
        h,
        g,
        m,
        y,
        S
      );
  }, Ze = (f, h, g) => {
    const T = h.component = f.component;
    if (tc(f, h, g))
      if (T.asyncDep && !T.asyncResolved) {
        le(T, h, g);
        return;
      } else
        T.next = h, T.update();
    else
      h.el = f.el, T.vnode = h;
  }, de = (f, h, g, T, m, y, S) => {
    const E = () => {
      if (f.isMounted) {
        let { next: v, bu: A, u: P, parent: W, vnode: ne } = f;
        {
          const Ve = Li(f);
          if (Ve) {
            v && (v.el = ne.el, le(f, v, S)), Ve.asyncDep.then(() => {
              f.isUnmounted || E();
            });
            return;
          }
        }
        let Y = v, ve;
        wt(f, !1), v ? (v.el = ne.el, le(f, v, S)) : v = ne, A && $n(A), (ve = v.props && v.props.onVnodeBeforeUpdate) && ze(ve, W, v, ne), wt(f, !0);
        const ke = Yr(f), Ge = f.subTree;
        f.subTree = ke, b(
          Ge,
          ke,
          // parent may have changed if it's in a teleport
          d(Ge.el),
          // anchor may have changed if it's in a fragment
          In(Ge),
          f,
          m,
          y
        ), v.el = ke.el, Y === null && nc(f, ke.el), P && Ce(P, m), (ve = v.props && v.props.onVnodeUpdated) && Ce(
          () => ze(ve, W, v, ne),
          m
        );
      } else {
        let v;
        const { el: A, props: P } = h, { bm: W, m: ne, parent: Y, root: ve, type: ke } = f, Ge = fn(h);
        wt(f, !1), W && $n(W), !Ge && (v = P && P.onVnodeBeforeMount) && ze(v, Y, h), wt(f, !0);
        {
          ve.ce && ve.ce._injectChildStyle(ke);
          const Ve = f.subTree = Yr(f);
          b(
            null,
            Ve,
            g,
            T,
            f,
            m,
            y
          ), h.el = Ve.el;
        }
        if (ne && Ce(ne, m), !Ge && (v = P && P.onVnodeMounted)) {
          const Ve = h;
          Ce(
            () => ze(v, Y, Ve),
            m
          );
        }
        (h.shapeFlag & 256 || Y && fn(Y.vnode) && Y.vnode.shapeFlag & 256) && f.a && Ce(f.a, m), f.isMounted = !0, h = g = T = null;
      }
    };
    f.scope.on();
    const k = f.effect = new Fo(E);
    f.scope.off();
    const x = f.update = k.run.bind(k), M = f.job = k.runIfDirty.bind(k);
    M.i = f, M.id = f.uid, k.scheduler = () => yr(M), wt(f, !0), x();
  }, le = (f, h, g) => {
    h.component = f;
    const T = f.vnode.props;
    f.vnode = h, f.next = null, $a(f, h.props, T, g), Ga(f, h.children, g), at(), jr(f), ct();
  }, te = (f, h, g, T, m, y, S, E, k = !1) => {
    const x = f && f.children, M = f ? f.shapeFlag : 0, v = h.children, { patchFlag: A, shapeFlag: P } = h;
    if (A > 0) {
      if (A & 128) {
        Cn(
          x,
          v,
          g,
          T,
          m,
          y,
          S,
          E,
          k
        );
        return;
      } else if (A & 256) {
        xt(
          x,
          v,
          g,
          T,
          m,
          y,
          S,
          E,
          k
        );
        return;
      }
    }
    P & 8 ? (M & 16 && Yt(x, m, y), v !== x && c(g, v)) : M & 16 ? P & 16 ? Cn(
      x,
      v,
      g,
      T,
      m,
      y,
      S,
      E,
      k
    ) : Yt(x, m, y, !0) : (M & 8 && c(g, ""), P & 16 && H(
      v,
      g,
      T,
      m,
      y,
      S,
      E,
      k
    ));
  }, xt = (f, h, g, T, m, y, S, E, k) => {
    f = f || Ft, h = h || Ft;
    const x = f.length, M = h.length, v = Math.min(x, M);
    let A;
    for (A = 0; A < v; A++) {
      const P = h[A] = k ? gt(h[A]) : Xe(h[A]);
      b(
        f[A],
        P,
        g,
        null,
        m,
        y,
        S,
        E,
        k
      );
    }
    x > M ? Yt(
      f,
      m,
      y,
      !0,
      !1,
      v
    ) : H(
      h,
      g,
      T,
      m,
      y,
      S,
      E,
      k,
      v
    );
  }, Cn = (f, h, g, T, m, y, S, E, k) => {
    let x = 0;
    const M = h.length;
    let v = f.length - 1, A = M - 1;
    for (; x <= v && x <= A; ) {
      const P = f[x], W = h[x] = k ? gt(h[x]) : Xe(h[x]);
      if (Ct(P, W))
        b(
          P,
          W,
          g,
          null,
          m,
          y,
          S,
          E,
          k
        );
      else
        break;
      x++;
    }
    for (; x <= v && x <= A; ) {
      const P = f[v], W = h[A] = k ? gt(h[A]) : Xe(h[A]);
      if (Ct(P, W))
        b(
          P,
          W,
          g,
          null,
          m,
          y,
          S,
          E,
          k
        );
      else
        break;
      v--, A--;
    }
    if (x > v) {
      if (x <= A) {
        const P = A + 1, W = P < M ? h[P].el : T;
        for (; x <= A; )
          b(
            null,
            h[x] = k ? gt(h[x]) : Xe(h[x]),
            g,
            W,
            m,
            y,
            S,
            E,
            k
          ), x++;
      }
    } else if (x > A)
      for (; x <= v; )
        Fe(f[x], m, y, !0), x++;
    else {
      const P = x, W = x, ne = /* @__PURE__ */ new Map();
      for (x = W; x <= A; x++) {
        const Re = h[x] = k ? gt(h[x]) : Xe(h[x]);
        Re.key != null && ne.set(Re.key, x);
      }
      let Y, ve = 0;
      const ke = A - W + 1;
      let Ge = !1, Ve = 0;
      const Jt = new Array(ke);
      for (x = 0; x < ke; x++) Jt[x] = 0;
      for (x = P; x <= v; x++) {
        const Re = f[x];
        if (ve >= ke) {
          Fe(Re, m, y, !0);
          continue;
        }
        let We;
        if (Re.key != null)
          We = ne.get(Re.key);
        else
          for (Y = W; Y <= A; Y++)
            if (Jt[Y - W] === 0 && Ct(Re, h[Y])) {
              We = Y;
              break;
            }
        We === void 0 ? Fe(Re, m, y, !0) : (Jt[We - W] = x + 1, We >= Ve ? Ve = We : Ge = !0, b(
          Re,
          h[We],
          g,
          null,
          m,
          y,
          S,
          E,
          k
        ), ve++);
      }
      const Hr = Ge ? Ka(Jt) : Ft;
      for (Y = Hr.length - 1, x = ke - 1; x >= 0; x--) {
        const Re = W + x, We = h[Re], Dr = Re + 1 < M ? h[Re + 1].el : T;
        Jt[x] === 0 ? b(
          null,
          We,
          g,
          Dr,
          m,
          y,
          S,
          E,
          k
        ) : Ge && (Y < 0 || x !== Hr[Y] ? kt(We, g, Dr, 2) : Y--);
      }
    }
  }, kt = (f, h, g, T, m = null) => {
    const { el: y, type: S, transition: E, children: k, shapeFlag: x } = f;
    if (x & 6) {
      kt(f.component.subTree, h, g, T);
      return;
    }
    if (x & 128) {
      f.suspense.move(h, g, T);
      return;
    }
    if (x & 64) {
      S.move(f, h, g, Zt);
      return;
    }
    if (S === Le) {
      s(y, h, g);
      for (let v = 0; v < k.length; v++)
        kt(k[v], h, g, T);
      s(f.anchor, h, g);
      return;
    }
    if (S === Ns) {
      j(f, h, g);
      return;
    }
    if (T !== 2 && x & 1 && E)
      if (T === 0)
        E.beforeEnter(y), s(y, h, g), Ce(() => E.enter(y), m);
      else {
        const { leave: v, delayLeave: A, afterLeave: P } = E, W = () => s(y, h, g), ne = () => {
          v(y, () => {
            W(), P && P();
          });
        };
        A ? A(y, W, ne) : ne();
      }
    else
      s(y, h, g);
  }, Fe = (f, h, g, T = !1, m = !1) => {
    const {
      type: y,
      props: S,
      ref: E,
      children: k,
      dynamicChildren: x,
      shapeFlag: M,
      patchFlag: v,
      dirs: A,
      cacheIndex: P
    } = f;
    if (v === -2 && (m = !1), E != null && Yn(E, null, g, f, !0), P != null && (h.renderCache[P] = void 0), M & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const W = M & 1 && A, ne = !fn(f);
    let Y;
    if (ne && (Y = S && S.onVnodeBeforeUnmount) && ze(Y, h, f), M & 6)
      hl(f.component, g, T);
    else {
      if (M & 128) {
        f.suspense.unmount(g, T);
        return;
      }
      W && Et(f, null, h, "beforeUnmount"), M & 64 ? f.type.remove(
        f,
        h,
        g,
        Zt,
        T
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Le || v > 0 && v & 64) ? Yt(
        x,
        h,
        g,
        !1,
        !0
      ) : (y === Le && v & 384 || !m && M & 16) && Yt(k, h, g), T && Pr(f);
    }
    (ne && (Y = S && S.onVnodeUnmounted) || W) && Ce(() => {
      Y && ze(Y, h, f), W && Et(f, null, h, "unmounted");
    }, g);
  }, Pr = (f) => {
    const { type: h, el: g, anchor: T, transition: m } = f;
    if (h === Le) {
      dl(g, T);
      return;
    }
    if (h === Ns) {
      C(f);
      return;
    }
    const y = () => {
      r(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (f.shapeFlag & 1 && m && !m.persisted) {
      const { leave: S, delayLeave: E } = m, k = () => S(g, y);
      E ? E(f.el, y, k) : k();
    } else
      y();
  }, dl = (f, h) => {
    let g;
    for (; f !== h; )
      g = p(f), r(f), f = g;
    r(h);
  }, hl = (f, h, g) => {
    const { bum: T, scope: m, job: y, subTree: S, um: E, m: k, a: x } = f;
    Xr(k), Xr(x), T && $n(T), m.stop(), y && (y.flags |= 8, Fe(S, f, h, g)), E && Ce(E, h), Ce(() => {
      f.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve());
  }, Yt = (f, h, g, T = !1, m = !1, y = 0) => {
    for (let S = y; S < f.length; S++)
      Fe(f[S], h, g, T, m);
  }, In = (f) => {
    if (f.shapeFlag & 6)
      return In(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = p(f.anchor || f.el), g = h && h[da];
    return g ? p(g) : h;
  };
  let ks = !1;
  const Br = (f, h, g) => {
    f == null ? h._vnode && Fe(h._vnode, null, null, !0) : b(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      g
    ), h._vnode = f, ks || (ks = !0, jr(), ui(), ks = !1);
  }, Zt = {
    p: b,
    um: Fe,
    m: kt,
    r: Pr,
    mt: ge,
    mc: H,
    pc: te,
    pbc: F,
    n: In,
    o: e
  };
  return {
    render: Br,
    hydrate: void 0,
    createApp: Da(Br)
  };
}
function Os({ type: e, props: t }, n) {
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
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = gt(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && Di(i, l)), l.type === bs && (l.el = i.el);
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
const qa = Symbol.for("v-scx"), Xa = () => Un(qa);
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
    w ? _() : yr(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), d && (_.flags |= 2, c && (_.id = c.uid, _.i = c));
  };
  const p = na(e, t, l);
  return wn && (u ? u.push(p) : a && p()), p;
}
function Ya(e, t, n) {
  const s = this.proxy, r = ae(e) ? e.includes(".") ? Ui(s, e) : () => s[e] : e.bind(s, s);
  let o;
  B(t) ? o = t : (o = t.handler, n = t);
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
  i && (i.trim && (r = n.map((c) => ae(c) ? c.trim() : c)), i.number && (r = n.map(Ls)));
  let l, a = s[l = Es(t)] || // also try camelCase event handler (#2249)
  s[l = Es(xe(t))];
  !a && o && (a = s[l = Es(Ae(t))]), a && je(
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
  if (!B(e)) {
    const a = (u) => {
      const c = ji(u, t, !0);
      c && (l = !0, ce(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (re(e) && s.set(e, null), null) : (O(o) ? o.forEach((a) => i[a] = null) : ce(i, o), re(e) && s.set(e, i), i);
}
function ms(e, t) {
  return !e || !rs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Ae(t)) || q(e, t));
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
  } = e, I = Xn(e);
  let N, $;
  try {
    if (n.shapeFlag & 4) {
      const C = r || s, K = dt.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(C, {
        get(L, V, H) {
          return sa(
            `Property '${String(
              V
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(L, V, H);
        }
      }) : C;
      N = Xe(
        u.call(
          K,
          C,
          c,
          dt.NODE_ENV !== "production" ? Nn(d) : d,
          _,
          p,
          w
        )
      ), $ = l;
    } else {
      const C = t;
      dt.NODE_ENV, N = Xe(
        C.length > 1 ? C(
          dt.NODE_ENV !== "production" ? Nn(d) : d,
          dt.NODE_ENV !== "production" ? {
            get attrs() {
              return Nn(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : C(
          dt.NODE_ENV !== "production" ? Nn(d) : d,
          null
        )
      ), $ = t.props ? l : Qa(l);
    }
  } catch (C) {
    pn.length = 0, ps(C, e, 1), N = he(we);
  }
  let j = N;
  if ($ && b !== !1) {
    const C = Object.keys($), { shapeFlag: K } = j;
    C.length && K & 7 && (o && C.some(ur) && ($ = ec(
      $,
      o
    )), j = yt(j, $, !1, !0));
  }
  return n.dirs && (j = yt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && kn(j, n.transition), N = j, Xn(I), N;
}
const Qa = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || rs(n)) && ((t || (t = {}))[n] = e[n]);
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
        if (i[p] !== s[p] && !ms(u, p))
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
    if (t[o] !== e[o] && !ms(n, o))
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
const Le = Symbol.for("v-fgt"), bs = Symbol.for("v-txt"), we = Symbol.for("v-cmt"), Ns = Symbol.for("v-stc"), pn = [];
let Oe = null;
function He(e = !1) {
  pn.push(Oe = e ? null : []);
}
function rc() {
  pn.pop(), Oe = pn[pn.length - 1] || null;
}
let En = 1;
function Jr(e, t = !1) {
  En += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function Gi(e) {
  return e.dynamicChildren = En > 0 ? Oe || Ft : null, rc(), En > 0 && Oe && Oe.push(e), e;
}
function lt(e, t, n, s, r, o) {
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
function Ys(e, t, n, s, r) {
  return Gi(
    he(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Jn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vi = ({ key: e }) => e ?? null, jn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || pe(e) || B(e) ? { i: Se, r: e, k: t, f: !!n } : e : null);
function Ye(e, t = null, n = null, s = 0, r = null, o = e === Le ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vi(t),
    ref: t && jn(t),
    scopeId: di,
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
  return l ? (kr(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= ae(n) ? 8 : 16), En > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Oe.push(a), a;
}
const he = oc;
function oc(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Ra) && (e = we), Jn(e)) {
    const l = yt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && kr(l, n), En > 0 && !o && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (bc(e) && (e = e.__vccOpts), t) {
    t = ic(t);
    let { class: l, style: a } = t;
    l && !ae(l) && (t.class = us(l)), re(a) && (br(a) && !O(a) && (a = ce({}, a)), t.style = it(a));
  }
  const i = ae(e) ? 1 : Fi(e) ? 128 : pi(e) ? 64 : re(e) ? 4 : B(e) ? 2 : 0;
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
function yt(e, t, n = !1, s = !1) {
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
      n && o ? O(o) ? o.concat(jn(t)) : [o, jn(t)] : jn(t)
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
    ssContent: e.ssContent && yt(e.ssContent),
    ssFallback: e.ssFallback && yt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && kn(
    c,
    a.clone(c)
  ), c;
}
function lc(e = " ", t = 0) {
  return he(bs, null, e, t);
}
function Fn(e = "", t = !1) {
  return t ? (He(), Ys(we, null, e)) : he(we, null, e);
}
function Xe(e) {
  return e == null || typeof e == "boolean" ? he(we) : O(e) ? he(
    Le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jn(e) ? gt(e) : he(bs, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yt(e);
}
function kr(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), kr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ai(t) ? t._ctx = Se : r === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else B(t) ? (t = { default: t, _ctx: Se }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [lc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ac(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = us([t.class, s.class]));
      else if (r === "style")
        t.style = it([t.style, s.style]);
      else if (rs(r)) {
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
let Qn, Zs;
{
  const e = cs(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Qn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fe = n
  ), Zs = t(
    "__VUE_SSR_SETTERS__",
    (n) => wn = n
  );
}
const vn = (e) => {
  const t = fe;
  return Qn(e), e.scope.on(), () => {
    e.scope.off(), Qn(t);
  };
}, Qr = () => {
  fe && fe.scope.off(), Qn(null);
};
function zi(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function dc(e, t = !1, n = !1) {
  t && Zs(t);
  const { props: s, children: r } = e.vnode, o = zi(e);
  La(e, s, o, t), Fa(e, r, n);
  const i = o ? hc(e, t) : void 0;
  return t && Zs(!1), i;
}
function hc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Aa);
  const { setup: s } = n;
  if (s) {
    at();
    const r = e.setupContext = s.length > 1 ? gc(e) : null, o = vn(e), i = qt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Bo(i);
    if (ct(), o(), (l || e.sp) && !fn(e) && Ti(e), l) {
      if (i.then(Qr, Qr), t)
        return i.then((a) => {
          eo(e, a);
        }).catch((a) => {
          ps(a, e, 0);
        });
      e.asyncDep = i;
    } else
      eo(e, i);
  } else
    Ki(e);
}
function eo(e, t, n) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = ii(t)), Ki(e);
}
function Ki(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $e);
  {
    const r = vn(e);
    at();
    try {
      Oa(e);
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
function ys(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ii(Xl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in hn)
        return hn[n](e);
    },
    has(t, n) {
      return n in t || n in hn;
    }
  })) : e.proxy;
}
const _c = /(?:^|[-_])(\w)/g, mc = (e) => e.replace(_c, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function qi(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
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
  return B(e) && "__vccOpts" in e;
}
const Js = (e, t) => ea(e, t, wn);
function yc(e, t, n) {
  const s = arguments.length;
  return s === 2 ? re(t) && !O(t) ? Jn(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Jn(n) && (n = [n]), he(e, t, n));
}
const Tc = "3.5.13";
let Qs;
const to = typeof window < "u" && window.trustedTypes;
if (to)
  try {
    Qs = /* @__PURE__ */ to.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Yi = Qs ? (e) => Qs.createHTML(e) : (e) => e, xc = "http://www.w3.org/2000/svg", kc = "http://www.w3.org/1998/Math/MathML", st = typeof document < "u" ? document : null, no = st && /* @__PURE__ */ st.createElement("template"), Ec = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? st.createElementNS(xc, e) : t === "mathml" ? st.createElementNS(kc, e) : n ? st.createElement(e, { is: n }) : st.createElement(e);
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
}, ft = "transition", en = "animation", Sn = Symbol("_vtc"), Zi = {
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
  (e, { slots: t }) => yc(ga, Rc(e), t)
), St = (e, t = []) => {
  O(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, so = (e) => e ? O(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Rc(e) {
  const t = {};
  for (const R in e)
    R in Zi || (t[R] = e[R]);
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
  } = e, w = Cc(r), b = w && w[0], I = w && w[1], {
    onBeforeEnter: N,
    onEnter: $,
    onEnterCancelled: j,
    onLeave: C,
    onLeaveCancelled: K,
    onBeforeAppear: L = N,
    onAppear: V = $,
    onAppearCancelled: H = j
  } = t, D = (R, oe, ge, Ze) => {
    R._enterCancelled = Ze, vt(R, oe ? c : l), vt(R, oe ? u : i), ge && ge();
  }, F = (R, oe) => {
    R._isLeaving = !1, vt(R, d), vt(R, _), vt(R, p), oe && oe();
  }, ee = (R) => (oe, ge) => {
    const Ze = R ? V : $, de = () => D(oe, R, ge);
    St(Ze, [oe, de]), ro(() => {
      vt(oe, R ? a : o), Qe(oe, R ? c : l), so(Ze) || oo(oe, s, b, de);
    });
  };
  return ce(t, {
    onBeforeEnter(R) {
      St(N, [R]), Qe(R, o), Qe(R, i);
    },
    onBeforeAppear(R) {
      St(L, [R]), Qe(R, a), Qe(R, u);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(R, oe) {
      R._isLeaving = !0;
      const ge = () => F(R, oe);
      Qe(R, d), R._enterCancelled ? (Qe(R, p), ao()) : (ao(), Qe(R, p)), ro(() => {
        R._isLeaving && (vt(R, d), Qe(R, _), so(C) || oo(R, s, I, ge));
      }), St(C, [R, ge]);
    },
    onEnterCancelled(R) {
      D(R, !1, void 0, !0), St(j, [R]);
    },
    onAppearCancelled(R) {
      D(R, !0, void 0, !0), St(H, [R]);
    },
    onLeaveCancelled(R) {
      F(R), St(K, [R]);
    }
  });
}
function Cc(e) {
  if (e == null)
    return null;
  if (re(e))
    return [Ms(e.enter), Ms(e.leave)];
  {
    const t = Ms(e);
    return [t, t];
  }
}
function Ms(e) {
  return $s(e);
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
  const n = window.getComputedStyle(e), s = (w) => (n[w] || "").split(", "), r = s(`${ft}Delay`), o = s(`${ft}Duration`), i = io(r, o), l = s(`${en}Delay`), a = s(`${en}Duration`), u = io(l, a);
  let c = null, d = 0, p = 0;
  t === ft ? i > 0 && (c = ft, d = i, p = o.length) : t === en ? u > 0 && (c = en, d = u, p = a.length) : (d = Math.max(i, u), c = d > 0 ? i > u ? ft : en : null, p = c ? c === ft ? o.length : a.length : 0);
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
          n[l] == null && Gn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Gn(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), Gn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Mc];
      i && (n += ";" + i), s.cssText = n, o = Pc.test(n);
    }
  } else t && e.removeAttribute("style");
  co in e && (e[co] = o ? s.display : "", e[Nc] && (s.display = "none"));
}
const uo = /\s*!important$/;
function Gn(e, t, n) {
  if (O(n))
    n.forEach((s) => Gn(e, t, s));
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
const fo = ["Webkit", "Moz", "ms"], Ps = {};
function Hc(e, t) {
  const n = Ps[t];
  if (n)
    return n;
  let s = xe(t);
  if (s !== "filter" && s in e)
    return Ps[t] = s;
  s = as(s);
  for (let r = 0; r < fo.length; r++) {
    const o = fo[r] + s;
    if (o in e)
      return Ps[t] = o;
  }
  return t;
}
const ho = "http://www.w3.org/1999/xlink";
function po(e, t, n, s, r, o = vl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ho, t.slice(6, t.length)) : e.setAttributeNS(ho, t, n) : n == null || o && !Lo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Tt(n) ? String(n) : n
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
let Bs = 0;
const Uc = /* @__PURE__ */ Promise.resolve(), jc = () => Bs || (Uc.then(() => Bs = 0), Bs = Date.now());
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
  t === "class" ? Oc(e, s, i) : t === "style" ? Bc(e, n, s) : rs(t) ? ur(t) || Lc(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wc(e, t, s, i)) ? (go(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && po(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ae(s)) ? go(e, xe(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), po(e, t, s, i));
};
function Wc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bo(t) && B(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return bo(t) && ae(n) ? !1 : t in e;
}
const yo = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zc(e, t, n) {
  const s = /* @__PURE__ */ Mt(e, t);
  is(s) && ce(s, t);
  class r extends Er {
    constructor(i) {
      super(s, i, n);
    }
  }
  return r.def = s, r;
}
const Kc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Er extends Kc {
  constructor(t, n = {}, s = Eo) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Eo ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Er) {
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
    this._connected = !1, qn(() => {
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
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = $s(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[xe(a)] = !0);
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
        q(this, s) || Object.defineProperty(this, s, {
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
    let s = n ? this.getAttribute(t) : yo;
    const r = xe(t);
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
    if (n !== this._props[t] && (n === yo ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), s)) {
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
    const n = he(this._def, ce(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const r = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            is(i[0]) ? ce({ detail: i }, i[0]) : { detail: i }
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
const To = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return O(t) ? (n) => $n(t, n) : t;
};
function qc(e) {
  e.target.composing = !0;
}
function xo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Hs = Symbol("_assign"), Xc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Hs] = To(r);
    const o = s || r.props && r.props.type === "number";
    Dt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), o && (l = Ls(l)), e[Hs](l);
    }), n && Dt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Dt(e, "compositionstart", qc), Dt(e, "compositionend", xo), Dt(e, "change", xo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
    if (e[Hs] = To(i), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ls(e.value) : e.value, a = t ?? "";
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
}, Jc = /* @__PURE__ */ ce({ patchProp: Vc }, Ec);
let ko;
function Ji() {
  return ko || (ko = Va(Jc));
}
const Qc = (...e) => {
  Ji().render(...e);
}, Eo = (...e) => {
  const t = Ji().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = tu(s);
    if (!r) return;
    const o = t._component;
    !B(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
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
  return He(), lt("div", {
    class: "chat-header",
    style: it({ backgroundColor: e.headerBackgroundColor })
  }, [
    Ye("img", {
      src: e.headerIcon,
      alt: "Chatbot",
      class: "chatbot-image"
    }, null, 8, ru),
    Ye("span", {
      class: "chatbot-name",
      style: it({ color: e.headerTextColor })
    }, Uo(e.headerName), 5),
    Ye("button", {
      class: "close-btn",
      style: it({ color: e.closeBtnColor }),
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
function X(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const s = {
    replace: (r, o) => {
      let i = typeof o == "string" ? o : o.source;
      return i = i.replace(Te.caret, "$1"), n = n.replace(r, i), s;
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
}, lu = /^(?:[ \t]*(?:\n|$))+/, au = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, cu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Rn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, uu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Sr = /(?:[*+-]|\d{1,9}[.)])/, el = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, tl = X(el).replace(/bull/g, Sr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), fu = X(el).replace(/bull/g, Sr).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), vr = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, du = /^[^\n]+/, Rr = /(?!\s*\])(?:\\.|[^\[\]\\])+/, hu = X(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Rr).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), pu = X(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Sr).getRegex(), Ts = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Cr = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, gu = X("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Cr).replace("tag", Ts).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), nl = X(vr).replace("hr", Rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ts).getRegex(), _u = X(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", nl).getRegex(), Ir = {
  blockquote: _u,
  code: au,
  def: hu,
  fences: cu,
  heading: uu,
  hr: Rn,
  html: gu,
  lheading: tl,
  list: pu,
  newline: lu,
  paragraph: nl,
  table: gn,
  text: du
}, wo = X("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ts).getRegex(), mu = {
  ...Ir,
  lheading: fu,
  table: wo,
  paragraph: X(vr).replace("hr", Rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", wo).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ts).getRegex()
}, bu = {
  ...Ir,
  html: X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Cr).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: gn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: X(vr).replace("hr", Rn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", tl).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, yu = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Tu = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, sl = /^( {2,}|\\)\n(?!\s*$)/, xu = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, xs = /[\p{P}\p{S}]/u, Ar = /[\s\p{P}\p{S}]/u, rl = /[^\s\p{P}\p{S}]/u, ku = X(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ar).getRegex(), ol = /(?!~)[\p{P}\p{S}]/u, Eu = /(?!~)[\s\p{P}\p{S}]/u, wu = /(?:[^\s\p{P}\p{S}]|~)/u, Su = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, il = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, vu = X(il, "u").replace(/punct/g, xs).getRegex(), Ru = X(il, "u").replace(/punct/g, ol).getRegex(), ll = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Cu = X(ll, "gu").replace(/notPunctSpace/g, rl).replace(/punctSpace/g, Ar).replace(/punct/g, xs).getRegex(), Iu = X(ll, "gu").replace(/notPunctSpace/g, wu).replace(/punctSpace/g, Eu).replace(/punct/g, ol).getRegex(), Au = X("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, rl).replace(/punctSpace/g, Ar).replace(/punct/g, xs).getRegex(), Ou = X(/\\(punct)/, "gu").replace(/punct/g, xs).getRegex(), Nu = X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Mu = X(Cr).replace("(?:-->|$)", "-->").getRegex(), Pu = X("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Mu).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), es = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Bu = X(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", es).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), al = X(/^!?\[(label)\]\[(ref)\]/).replace("label", es).replace("ref", Rr).getRegex(), cl = X(/^!?\[(ref)\](?:\[\])?/).replace("ref", Rr).getRegex(), Hu = X("reflink|nolink(?!\\()", "g").replace("reflink", al).replace("nolink", cl).getRegex(), Or = {
  _backpedal: gn,
  // only used for GFM url
  anyPunctuation: Ou,
  autolink: Nu,
  blockSkip: Su,
  br: sl,
  code: Tu,
  del: gn,
  emStrongLDelim: vu,
  emStrongRDelimAst: Cu,
  emStrongRDelimUnd: Au,
  escape: yu,
  link: Bu,
  nolink: cl,
  punctuation: ku,
  reflink: al,
  reflinkSearch: Hu,
  tag: Pu,
  text: xu,
  url: gn
}, Du = {
  ...Or,
  link: X(/^!?\[(label)\]\((.*?)\)/).replace("label", es).getRegex(),
  reflink: X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", es).getRegex()
}, er = {
  ...Or,
  emStrongRDelimAst: Iu,
  emStrongLDelim: Ru,
  url: X(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Lu = {
  ...er,
  br: X(sl).replace("{2,}", "*").getRegex(),
  text: X(er.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
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
    if (Te.escapeTest.test(e))
      return e.replace(Te.escapeReplace, So);
  } else if (Te.escapeTestNoEncode.test(e))
    return e.replace(Te.escapeReplaceNoEncode, So);
  return e;
}
function vo(e) {
  try {
    e = encodeURI(e).replace(Te.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Ro(e, t) {
  var o;
  const n = e.replace(Te.findPipe, (i, l, a) => {
    let u = !1, c = l;
    for (; --c >= 0 && a[c] === "\\"; )
      u = !u;
    return u ? "|" : " |";
  }), s = n.split(Te.splitPipe);
  let r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((o = s.at(-1)) != null && o.trim()) && s.pop(), t)
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
class ts {
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
`), I = this.blockquote(b);
          i[i.length - 1] = I, r = r.substring(0, r.length - w.raw.length) + I.raw, o = o.substring(0, o.length - w.text.length) + I.text;
          break;
        } else if ((_ == null ? void 0 : _.type) === "list") {
          const w = _, b = w.raw + `
` + s.join(`
`), I = this.list(b);
          i[i.length - 1] = I, r = r.substring(0, r.length - _.raw.length) + I.raw, o = o.substring(0, o.length - w.raw.length) + I.raw, s = b.substring(i.at(-1).raw.length).split(`
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
          const $ = this.rules.other.nextBulletRegex(b), j = this.rules.other.hrRegex(b), C = this.rules.other.fencesBeginRegex(b), K = this.rules.other.headingBeginRegex(b), L = this.rules.other.htmlBeginRegex(b);
          for (; t; ) {
            const V = t.split(`
`, 1)[0];
            let H;
            if (_ = V, this.options.pedantic ? (_ = _.replace(this.rules.other.listReplaceNesting, "  "), H = _) : H = _.replace(this.rules.other.tabCharGlobal, "    "), C.test(_) || K.test(_) || L.test(_) || $.test(_) || j.test(_))
              break;
            if (H.search(this.rules.other.nonSpaceChar) >= b || !_.trim())
              d += `
` + H.slice(b);
            else {
              if (w || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || C.test(p) || K.test(p) || j.test(p))
                break;
              d += `
` + _;
            }
            !w && !_.trim() && (w = !0), c += V + `
`, t = t.substring(V.length + 1), p = H.slice(b);
          }
        }
        o.loose || (l ? o.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (l = !0));
        let I = null, N;
        this.options.gfm && (I = this.rules.other.listIsTask.exec(d), I && (N = I[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), o.items.push({
          type: "list_item",
          raw: c,
          task: !!I,
          checked: N,
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
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Pt, this.options.tokenizer = this.options.tokenizer || new ts(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
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
    var r, o, i;
    for (this.options.pedantic && (t = t.replace(Te.tabCharGlobal, "    ").replace(Te.spaceLine, "")); t; ) {
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
class ns {
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
    const r = (i = (n || "").match(Te.notSpaceStart)) == null ? void 0 : i[0], o = t.replace(Te.endingNewline, "") + `
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
    this.options = t || Pt, this.options.renderer = this.options.renderer || new ns(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Nr();
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
    J(this, "Renderer", ns);
    J(this, "TextRenderer", Nr);
    J(this, "Lexer", Me);
    J(this, "Tokenizer", ts);
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
        const o = this.defaults.renderer || new ns(this.defaults);
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
        const o = this.defaults.tokenizer || new ts(this.defaults);
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
function Z(e, t) {
  return Nt.parse(e, t);
}
Z.options = Z.setOptions = function(e) {
  return Nt.setOptions(e), Z.defaults = Nt.defaults, Qi(Z.defaults), Z;
};
Z.getDefaults = wr;
Z.defaults = Pt;
Z.use = function(...e) {
  return Nt.use(...e), Z.defaults = Nt.defaults, Qi(Z.defaults), Z;
};
Z.walkTokens = function(e, t) {
  return Nt.walkTokens(e, t);
};
Z.parseInline = Nt.parseInline;
Z.Parser = Pe;
Z.parser = Pe.parse;
Z.Renderer = ns;
Z.TextRenderer = Nr;
Z.Lexer = Me;
Z.lexer = Me.lex;
Z.Tokenizer = ts;
Z.Hooks = _n;
Z.parse = Z;
Z.options;
Z.setOptions;
Z.use;
Z.walkTokens;
Z.parseInline;
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
      return Z(e);
    }
  }
}), Vu = ".chat-messages[data-v-0e018185]{flex-grow:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column}.message[data-v-0e018185]{margin-bottom:10px;display:inline-block;padding:0 8px;border:1px solid #3d3d3d9f,}", Wu = { class: "chat-messages" }, zu = ["innerHTML"];
function Ku(e, t, n, s, r, o) {
  return He(), lt("div", Wu, [
    (He(!0), lt(Le, null, Ia(e.messages, (i, l) => (He(), lt("div", {
      key: l,
      class: us(["message", i.from]),
      style: it(e.messageStyle(i.from))
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
    const n = nt(e.userInput);
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
}), Yu = "button[data-v-aaadc865]:disabled{background:#ccc;cursor:not-allowed}.chat-input[data-v-aaadc865]{display:flex;align-items:center;padding:10px;border-top:1px solid #ccc}.chat-input input[data-v-aaadc865]{flex-grow:1;padding:8px;border:1px solid #ccc;border-radius:5px;background:#f9f9f9;color:#292929;font-size:medium}.chat-input button[data-v-aaadc865]{margin-left:10px;padding:8px 12px;border:none;border-radius:5px;cursor:pointer;font-size:medium}.chat-input button[data-v-aaadc865]:disabled,.chat-input input[data-v-aaadc865]:disabled{background:#ccc;cursor:not-allowed}.loading-indicator[data-v-aaadc865]{display:inline-block;margin-left:10px}.spinner[data-v-aaadc865]{border:4px solid rgba(0,0,0,.1);border-left-color:#007bff;border-radius:50%;width:20px;height:20px;animation:spin-aaadc865 1s linear infinite}@keyframes spin-aaadc865{to{transform:rotate(360deg)}}", Zu = { class: "chat-input" }, Ju = ["placeholder", "disabled"], Qu = ["disabled"], ef = {
  key: 0,
  class: "loading-indicator"
};
function tf(e, t, n, s, r, o) {
  return He(), lt("div", Zu, [
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
      style: it(e.buttonStyle())
    }, " Enviar ", 12, Qu),
    e.sending ? (He(), lt("div", ef, t[3] || (t[3] = [
      Ye("div", { class: "spinner" }, null, -1)
    ]))) : Fn("", !0)
  ]);
}
const nf = /* @__PURE__ */ Xt(Xu, [["render", tf], ["styles", [Yu]], ["__scopeId", "data-v-aaadc865"]]), sf = /* @__PURE__ */ Mt({
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
    const n = nt(e.userInput);
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
}), rf = ".chat-window[data-v-5921353b]{position:fixed;bottom:20px;right:20px;width:min(90vw,400px);height:min(50vh,500px);background:#fff;border-radius:10px;box-shadow:0 0 15px #0000004d;display:flex;flex-direction:column;overflow:hidden}@media screen and (max-width: 845px){.chat-window[data-v-5921353b]{width:100%!important;height:70%!important;bottom:0;right:0;border-radius:0;max-height:none}}";
function of(e, t, n, s, r, o) {
  const i = dn("ChatHeader"), l = dn("ChatMessages"), a = dn("ChatInput");
  return He(), lt("div", {
    class: "chat-window",
    style: it({
      width: e.chatbotWidth,
      height: e.chatbotHeight
    })
  }, [
    he(i, {
      onClose: e.closeWindow,
      "header-name": e.headerName,
      "header-icon": e.headerIcon,
      "header-background-color": e.headerBackgroundColor,
      "header-text-color": e.headerTextColor,
      "close-btn-color": e.closeBtnColor
    }, null, 8, ["onClose", "header-name", "header-icon", "header-background-color", "header-text-color", "close-btn-color"]),
    he(l, {
      messages: e.messages,
      "user-message-color": e.userMessageColor,
      "user-message-background": e.userMessageBackground,
      "assistant-message-color": e.assistantMessageColor,
      "assistant-message-background": e.assistantMessageBackground
    }, null, 8, ["messages", "user-message-color", "user-message-background", "assistant-message-color", "assistant-message-background"]),
    he(a, {
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
function ff(e, t, n, s, r, o) {
  return He(), lt("button", {
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
const df = /* @__PURE__ */ Xt(af, [["render", ff], ["styles", [cf]], ["__scopeId", "data-v-d7b03065"]]);
var hf = Object.defineProperty, pf = (e, t, n) => t in e ? hf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Hn = (e, t, n) => pf(e, typeof t != "symbol" ? t + "" : t, n);
class Io extends Error {
  constructor(t, n) {
    super(t), Hn(this, "type"), Hn(this, "field"), Hn(this, "value"), Hn(this, "line"), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
  }
}
function Ds(e) {
}
function gf(e) {
  const { onEvent: t = Ds, onError: n = Ds, onRetry: s = Ds, onComment: r } = e;
  let o = "", i = !0, l, a = "", u = "";
  function c(b) {
    const I = i ? b.replace(/^\xEF\xBB\xBF/, "") : b, [N, $] = _f(`${o}${I}`);
    for (const j of N)
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
    const I = b.indexOf(":");
    if (I !== -1) {
      const N = b.slice(0, I), $ = b[I + 1] === " " ? 2 : 1, j = b.slice(I + $);
      p(N, j, b);
      return;
    }
    p(b, "", b);
  }
  function p(b, I, N) {
    switch (b) {
      case "event":
        u = I;
        break;
      case "data":
        a = `${a}${I}
`;
        break;
      case "id":
        l = I.includes("\0") ? void 0 : I;
        break;
      case "retry":
        /^\d+$/.test(I) ? s(parseInt(I, 10)) : n(
          new Io(`Invalid \`retry\` value: "${I}"`, {
            type: "invalid-retry",
            value: I,
            line: N
          })
        );
        break;
      default:
        n(
          new Io(
            `Unknown field "${b.length > 20 ? `${b.slice(0, 20)}…` : b}"`,
            { type: "unknown-field", field: b, value: I, line: N }
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
}, Mr = (e, t, n) => t.has(e) || ul("Cannot " + n), U = (e, t, n) => (Mr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ue = (e, t, n) => t.has(e) ? ul("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ie = (e, t, n, s) => (Mr(e, t, "write to private field"), t.set(e, n), n), tt = (e, t, n) => (Mr(e, t, "access private method"), n), Ee, It, Lt, Vn, ss, mn, jt, bn, _t, $t, Kt, Ut, rn, De, nr, sr, rr, No, or, ir, on, lr, ar;
let Wn = class extends EventTarget {
  constructor(t, n) {
    var s, r;
    super(), ue(this, De), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, ue(this, Ee), ue(this, It), ue(this, Lt), ue(this, Vn), ue(this, ss), ue(this, mn), ue(this, jt), ue(this, bn, null), ue(this, _t), ue(this, $t), ue(this, Kt, null), ue(this, Ut, null), ue(this, rn, null), ue(this, sr, async (o) => {
      var i;
      U(this, $t).reset();
      const { body: l, redirected: a, status: u, headers: c } = o;
      if (u === 204) {
        tt(this, De, on).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (a ? ie(this, Lt, new URL(o.url)) : ie(this, Lt, void 0), u !== 200) {
        tt(this, De, on).call(this, `Non-200 status code (${u})`, u);
        return;
      }
      if (!(c.get("content-type") || "").startsWith("text/event-stream")) {
        tt(this, De, on).call(this, 'Invalid content type, expected "text/event-stream"', u);
        return;
      }
      if (U(this, Ee) === this.CLOSED)
        return;
      ie(this, Ee, this.OPEN);
      const d = new Event("open");
      if ((i = U(this, rn)) == null || i.call(this, d), this.dispatchEvent(d), typeof l != "object" || !l || !("getReader" in l)) {
        tt(this, De, on).call(this, "Invalid response body, expected a web ReadableStream", u), this.close();
        return;
      }
      const p = new TextDecoder(), _ = l.getReader();
      let w = !0;
      do {
        const { done: b, value: I } = await _.read();
        I && U(this, $t).feed(p.decode(I, { stream: !b })), b && (w = !1, U(this, $t).reset(), tt(this, De, lr).call(this));
      } while (w);
    }), ue(this, rr, (o) => {
      ie(this, _t, void 0), !(o.name === "AbortError" || o.type === "aborted") && tt(this, De, lr).call(this, tr(o));
    }), ue(this, or, (o) => {
      typeof o.id == "string" && ie(this, bn, o.id);
      const i = new MessageEvent(o.event || "message", {
        data: o.data,
        origin: U(this, Lt) ? U(this, Lt).origin : U(this, It).origin,
        lastEventId: o.id || ""
      });
      U(this, Ut) && (!o.event || o.event === "message") && U(this, Ut).call(this, i), this.dispatchEvent(i);
    }), ue(this, ir, (o) => {
      ie(this, mn, o);
    }), ue(this, ar, () => {
      ie(this, jt, void 0), U(this, Ee) === this.CONNECTING && tt(this, De, nr).call(this);
    });
    try {
      if (t instanceof URL)
        ie(this, It, t);
      else if (typeof t == "string")
        ie(this, It, new URL(t, bf()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw mf("An invalid or illegal string was specified");
    }
    ie(this, $t, gf({
      onEvent: U(this, or),
      onRetry: U(this, ir)
    })), ie(this, Ee, this.CONNECTING), ie(this, mn, 3e3), ie(this, ss, (s = n == null ? void 0 : n.fetch) != null ? s : globalThis.fetch), ie(this, Vn, (r = n == null ? void 0 : n.withCredentials) != null ? r : !1), tt(this, De, nr).call(this);
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
    return U(this, Ee);
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
    return U(this, Vn);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return U(this, Kt);
  }
  set onerror(t) {
    ie(this, Kt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return U(this, Ut);
  }
  set onmessage(t) {
    ie(this, Ut, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return U(this, rn);
  }
  set onopen(t) {
    ie(this, rn, t);
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
    U(this, jt) && clearTimeout(U(this, jt)), U(this, Ee) !== this.CLOSED && (U(this, _t) && U(this, _t).abort(), ie(this, Ee, this.CLOSED), ie(this, _t, void 0));
  }
};
Ee = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
nr = function() {
  ie(this, Ee, this.CONNECTING), ie(this, _t, new AbortController()), U(this, ss)(U(this, It), tt(this, De, No).call(this)).then(U(this, sr)).catch(U(this, rr));
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
  U(this, Ee) !== this.CLOSED && ie(this, Ee, this.CLOSED);
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
  if (U(this, Ee) === this.CLOSED)
    return;
  ie(this, Ee, this.CONNECTING);
  const s = new Ao("error", { code: t, message: e });
  (n = U(this, Kt)) == null || n.call(this, s), this.dispatchEvent(s), ie(this, jt, setTimeout(U(this, ar), U(this, mn)));
}, ar = /* @__PURE__ */ new WeakMap(), /**
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
class yf {
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
const G = {
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
function Mo(e) {
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
function xf(e) {
  const t = {
    ...G,
    ...e
  };
  return Ln(e.dataApiKey) || (console.error(
    "Implementación fallida: 'dataApiKey' es requerida y debe ser una cadena no vacía. Se usará el valor por defecto."
  ), t.dataApiKey = G.dataApiKey), [
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
      validator: Mo,
      error: "'chatbot-width' debe ser una cadena numérica."
    },
    {
      key: "chatbotHeight",
      validator: Mo,
      error: "'chatbot-height' debe ser una cadena numérica."
    }
  ].forEach(({ key: s, validator: r, error: o }) => {
    e[s] !== void 0 && e[s] !== G[s] && (r(e[s]) || (console.error(
      `Implementación fallida: ${o} Se usará el valor por defecto para '${s}'.`
    ), t[s] = G[s]));
  }), t;
}
const kf = /* @__PURE__ */ Mt({
  name: "ChatBot",
  props: {
    dataApiKey: { type: String, default: G.dataApiKey },
    dataUuidUser: { type: String, default: G.dataUuidUser },
    defaultMessage: {
      type: String,
      default: G.defaultMessage
    },
    headerName: { type: String, default: G.headerName },
    headerIcon: { type: String, default: G.headerIcon },
    headerBackgroundColor: {
      type: String,
      default: G.headerBackgroundColor
    },
    headerTextColor: {
      type: String,
      default: G.headerTextColor
    },
    closeBtnColor: { type: String, default: G.closeBtnColor },
    userMessageColor: {
      type: String,
      default: G.userMessageColor
    },
    userMessageBackground: {
      type: String,
      default: G.userMessageBackground
    },
    assistantMessageColor: {
      type: String,
      default: G.assistantMessageColor
    },
    assistantMessageBackground: {
      type: String,
      default: G.assistantMessageBackground
    },
    buttonBackgroundColor: {
      type: String,
      default: G.buttonBackgroundColor
    },
    buttonTextColor: {
      type: String,
      default: G.buttonTextColor
    },
    chatbotWidth: { type: String, default: G.chatbotWidth },
    chatbotHeight: { type: String, default: G.chatbotHeight }
  },
  components: { ChatWindow: lf, ChatToggle: df },
  setup(e) {
    const t = Js(() => xf(e)), n = { apikey: t.value.dataApiKey };
    Ri("chatConfig", n);
    const s = new yf(n), r = nt(!1), o = nt(""), i = nt([]), l = nt(null), a = nt(!1), u = nt(""), c = nt(!1);
    let d = null, p = null;
    const _ = Js(
      () => a.value && u.value ? `Estado: ${u.value}` : "Escribe tu mensaje..."
    ), w = Wi(), b = () => {
      qn(() => {
        var H, D;
        const L = (D = (H = w == null ? void 0 : w.vnode) == null ? void 0 : H.el) == null ? void 0 : D.getRootNode();
        if (!L) return;
        const V = L.querySelector(
          ".chat-messages"
        );
        V && (V.scrollTop = V.scrollHeight);
      });
    };
    bt(
      i,
      () => {
        b();
      },
      { deep: !0 }
    );
    const I = async () => {
      r.value ? (d && (d.close(), d = null), r.value = !1) : (r.value = !0, await qn(), b(), i.value.length === 0 && (a.value = !0, await $(), a.value = !1, b()));
    }, N = (L, V) => {
      i.value.push({ text: L, from: V });
    }, $ = async () => {
      var V, H;
      const L = localStorage.getItem("threadId");
      if (L) {
        l.value = L;
        try {
          const D = await s.loadChatHistory(l.value);
          for (const F of D) {
            const ee = ((H = (V = F == null ? void 0 : F.content[0]) == null ? void 0 : V.text) == null ? void 0 : H.value) || "", R = (F == null ? void 0 : F.role) || "assistant";
            ee && N(ee, R);
          }
        } catch (D) {
          console.error("Error al cargar el historial del chat", D), N("Error al cargar el historial de mensajes.", "assistantError");
        }
      } else
        N(t.value.defaultMessage, "assistant");
    }, j = async () => {
      if (o.value.trim() === "" || a.value) return;
      N(o.value, "user");
      const L = localStorage.getItem("threadId"), V = { message: o.value, threadId: L };
      o.value = "", a.value = !0;
      try {
        const H = await s.sendChatMessage(V);
        H.threadId && (l.value = H.threadId, localStorage.setItem("threadId", H.threadId), C(H.threadId));
      } catch (H) {
        console.error("Error al enviar el mensaje", H), N("Ocurrio un error con el servicio", "assistantError"), a.value = !1;
      }
    }, C = (L) => {
      (d == null ? void 0 : d.readyState) !== EventSource.OPEN && (d = s.createChatStream(L), p = null, u.value = "", d.addEventListener(`${l.value}`, (V) => {
        try {
          const H = JSON.parse(V.data);
          H.word && (p === null ? (N(H.word, "assistant"), p = i.value.length - 1) : i.value[p].text += H.word), ["created", "queued", "in_progress", "completed", "failed"].includes(H.status) && (u.value = H.status), (H.status === "completed" || H.status === "failed") && (a.value = !1, p = null, d == null || d.close());
        } catch (H) {
          console.error("Error al procesar el evento SSE", H);
        }
      }), d.onerror = () => {
        a.value = !1, d == null || d.close();
      });
    }, K = async () => {
      try {
        const L = await s.checkHealth();
        c.value = L.success === !0;
      } catch (L) {
        console.error("Health check failed:", L), c.value = !1;
      }
    };
    return Tr(async () => {
      if (await K(), c.value) {
        const L = localStorage.getItem("threadId");
        L && (l.value = L);
      }
    }), {
      isOpen: r,
      userInput: o,
      messages: i,
      sending: a,
      placeholderText: _,
      toggleChat: I,
      sendMessage: j,
      validatedProps: t,
      showChatBot: c
    };
  }
}), Ef = ".chat-slide-enter-active[data-v-6a10deaa],.chat-slide-leave-active[data-v-6a10deaa]{transition:transform .4s ease,opacity .4s ease}.chat-slide-enter-from[data-v-6a10deaa]{transform:translate(100%);opacity:0}.chat-slide-enter-to[data-v-6a10deaa],.chat-slide-leave-from[data-v-6a10deaa]{transform:translate(0);opacity:1}.chat-slide-leave-to[data-v-6a10deaa]{transform:translate(100%);opacity:0}", wf = { key: 0 };
function Sf(e, t, n, s, r, o) {
  const i = dn("ChatWindow"), l = dn("ChatToggle");
  return e.showChatBot ? (He(), lt("div", wf, [
    he(vc, { name: "chat-slide" }, {
      default: hi(() => [
        e.isOpen ? (He(), Ys(i, {
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
        }, null, 8, ["messages", "userInput", "sending", "placeholder", "header-name", "header-icon", "header-background-color", "header-text-color", "close-btn-color", "user-message-color", "user-message-background", "assistant-message-color", "assistant-message-background", "button-background-color", "chatbot-height", "chatbot-width", "button-text-color", "onSendMessage", "onToggleChat"])) : Fn("", !0)
      ]),
      _: 1
    }),
    e.isOpen ? Fn("", !0) : (He(), Ys(l, {
      key: 0,
      onToggleChat: e.toggleChat,
      "header-icon": e.validatedProps.headerIcon
    }, null, 8, ["onToggleChat", "header-icon"]))
  ])) : Fn("", !0);
}
const fl = /* @__PURE__ */ Xt(kf, [["render", Sf], ["styles", [Ef]], ["__scopeId", "data-v-6a10deaa"]]), vf = {
  dataApiKey: {
    type: String,
    required: !0
  },
  dataUuidUser: {
    type: String,
    default: G.dataUuidUser
  },
  defaultMessage: {
    type: String,
    default: G.defaultMessage
  },
  headerName: {
    type: String,
    default: G.headerName
  },
  headerIcon: {
    type: String,
    default: G.headerIcon
  },
  headerBackgroundColor: {
    type: String,
    default: G.headerBackgroundColor
  },
  headerTextColor: {
    type: String,
    default: G.headerTextColor
  },
  userMessageColor: {
    type: String,
    default: G.userMessageColor
  },
  assistantMessageColor: {
    type: String,
    default: G.assistantMessageColor
  },
  userMessageBackground: {
    type: String,
    default: G.userMessageBackground
  },
  assistantMessageBackground: {
    type: String,
    default: G.assistantMessageBackground
  },
  closeBtnColor: {
    type: String,
    default: G.closeBtnColor
  },
  buttonBackgroundColor: {
    type: String,
    default: G.buttonBackgroundColor
  },
  buttonTextColor: {
    type: String,
    default: G.buttonTextColor
  },
  chatbotWidth: {
    type: String,
    default: G.chatbotWidth
  },
  chatbotHeight: {
    type: String,
    default: G.chatbotHeight
  }
};
fl.props = vf;
const Rf = /* @__PURE__ */ zc(fl, { shadowRoot: !0 });
customElements.define("chat-bot", Rf);
