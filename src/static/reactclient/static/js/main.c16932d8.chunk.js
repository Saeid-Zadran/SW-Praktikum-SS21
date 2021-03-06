(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    257: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        a = r(1),
        o = r.n(a),
        i = r(22),
        s = r.n(i),
        c = r(4),
        l = r(5),
        d = r(8),
        u = r(7),
        j = r(17),
        h = r(26),
        p = r(310),
        b = r(311),
        g = r(312),
        O = r(51),
        f = r.n(O),
        m =
          (r(245),
          {
            apiKey: "AIzaSyBX9M-pI-93U-FAWnyYIdWvBDl6NL36Q9o",
            authDomain: "sw-praktikum-hdm.firebaseapp.com",
            projectId: "sw-praktikum-hdm",
            storageBucket: "sw-praktikum-hdm.appspot.com",
            messagingSenderId: "20042938175",
            appId: "1:20042938175:web:3a97340b47d361bfad858a",
          }),
        x = r(228),
        P = r(10),
        v = "#FFFFFF",
        y = Object(x.a)({
          palette: {
            black: "#000000",
            white: v,
            primary: {
              contrastText: v,
              dark: P.a.indigo[900],
              main: P.a.indigo[500],
              light: P.a.indigo[100],
            },
            secondary: {
              contrastText: v,
              dark: P.a.blue[900],
              main: P.a.blue.A400,
              light: P.a.blue.A400,
            },
            success: {
              contrastText: v,
              dark: P.a.green[900],
              main: P.a.green[600],
              light: P.a.green[400],
            },
            info: {
              contrastText: v,
              dark: P.a.blue[900],
              main: P.a.blue[600],
              light: P.a.blue[400],
            },
            warning: {
              contrastText: v,
              dark: P.a.orange[900],
              main: P.a.orange[600],
              light: P.a.orange[400],
            },
            error: {
              contrastText: v,
              dark: P.a.red[900],
              main: P.a.red[600],
              light: P.a.red[400],
            },
            text: {
              primary: P.a.blueGrey[800],
              secondary: P.a.blueGrey[600],
              link: P.a.blue[600],
            },
            background: { default: "#F4F6F8", paper: v },
            icon: P.a.blueGrey[600],
            divider: P.a.grey[200],
          },
        }),
        S = r(231),
        C = r(99),
        w = r(314),
        k = r(295),
        I = r(59),
        F = r(3),
        E = r(12),
        D = r(258),
        T = r(316),
        N = r(259),
        B = r(292),
        R = r(293),
        L = r(294),
        A = r(261),
        M = r(11),
        V = Object(E.a)("avatarButtonRef"),
        U = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              (n = t.call(this, e)),
              Object.defineProperty(Object(I.a)(n), V, {
                writable: !0,
                value: Object(a.createRef)(),
              }),
              (n.handleAvatarButtonClick = function () {
                n.setState({ open: !n.state.open });
              }),
              (n.handleClose = function () {
                n.setState({ open: !1 });
              }),
              (n.handleSignOutButtonClicked = function () {
                f.a.auth().signOut();
              }),
              (n.state = { open: !1 }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.user,
                    a = this.state.open;
                  return r
                    ? Object(n.jsxs)("div", {
                        children: [
                          Object(n.jsx)(D.a, {
                            className: t.avatarButton,
                            ref: Object(F.a)(this, V)[V],
                            onClick: this.handleAvatarButtonClick,
                            children: Object(n.jsx)(T.a, { src: r.photoURL }),
                          }),
                          Object(n.jsx)(N.a, {
                            open: a,
                            anchorEl: Object(F.a)(this, V)[V].current,
                            onClose: this.handleClose,
                            anchorOrigin: {
                              vertical: "top",
                              horizontal: "left",
                            },
                            transformOrigin: {
                              vertical: "top",
                              horizontal: "right",
                            },
                            children: Object(n.jsx)(B.a, {
                              onClickAway: this.handleClose,
                              children: Object(n.jsxs)(S.a, {
                                className: t.profileBox,
                                children: [
                                  Object(n.jsx)(C.a, {
                                    align: "center",
                                    children: "Hello",
                                  }),
                                  Object(n.jsx)(R.a, { className: t.divider }),
                                  Object(n.jsx)(C.a, {
                                    align: "center",
                                    variant: "body2",
                                    children: r.displayName,
                                  }),
                                  Object(n.jsx)(C.a, {
                                    align: "center",
                                    variant: "body2",
                                    children: r.email,
                                  }),
                                  Object(n.jsx)(R.a, { className: t.divider }),
                                  Object(n.jsx)(L.a, {
                                    container: !0,
                                    justify: "center",
                                    children: Object(n.jsx)(L.a, {
                                      item: !0,
                                      children: Object(n.jsx)(A.a, {
                                        color: "primary",
                                        onClick:
                                          this.handleSignOutButtonClicked,
                                        children: "Logout",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        J = Object(M.a)(function (e) {
          return {
            avatarButton: { float: "right" },
            divider: { margin: e.spacing(1) },
            profileBox: {
              padding: e.spacing(1),
              background: e.palette.background.default,
            },
          };
        })(U),
        _ =
          (a.Component,
          (function (e) {
            Object(d.a)(r, e);
            var t = Object(u.a)(r);
            function r(e) {
              var n;
              return (
                Object(c.a)(this, r),
                ((n = t.call(this, e)).handleTabChange = function (e, t) {
                  n.setState({ tabindex: t });
                }),
                (n.state = { tabindex: 0 }),
                n
              );
            }
            return (
              Object(l.a)(r, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.user;
                    return Object(n.jsxs)(S.a, {
                      variant: "outlined",
                      children: [
                        Object(n.jsx)(J, { user: e }),
                        Object(n.jsx)(C.a, {
                          variant: "h3",
                          component: "h1",
                          align: "center",
                        }),
                        Object(n.jsxs)(C.a, {
                          variant: "h4",
                          component: "h2",
                          align: "center",
                          children: [
                            Object(n.jsx)("img", {
                              width: "700",
                              alt: "logo-dozent",
                              src: "../projectonomy-logo.png",
                            }),
                            " ",
                            Object(n.jsx)("br", {}),
                            " Home",
                          ],
                        }),
                        Object(n.jsxs)(w.a, {
                          indicatorColor: "primary",
                          textColor: "primary",
                          centered: !0,
                          value: this.state.tabindex,
                          onChange: this.handleTabChange,
                          children: [
                            Object(n.jsx)(k.a, {
                              label: "Projects",
                              component: j.b,
                              to: "/dozent/project",
                            }),
                            Object(n.jsx)(k.a, {
                              label: "Ratings",
                              component: j.b,
                              to: "/dozent/rating",
                            }),
                            Object(n.jsx)(k.a, {
                              label: "About",
                              component: j.b,
                              to: "/about",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                },
              ]),
              r
            );
          })(a.Component)),
        W = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).handleTabChange = function (e, t) {
                n.setState({ tabindex: t });
              }),
              (n.state = { tabindex: 0 }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.user;
                  return Object(n.jsxs)(S.a, {
                    variant: "outlined",
                    children: [
                      Object(n.jsx)(J, { user: e }),
                      Object(n.jsx)(C.a, {
                        variant: "h3",
                        component: "h1",
                        align: "center",
                      }),
                      Object(n.jsxs)(C.a, {
                        variant: "h4",
                        component: "h2",
                        align: "center",
                        children: [
                          Object(n.jsx)("img", {
                            width: "700",
                            alt: "logo-admin",
                            src: "projectonomy-logo.png",
                          }),
                          " ",
                          Object(n.jsx)("br", {}),
                          " Home",
                        ],
                      }),
                      Object(n.jsxs)(w.a, {
                        indicatorColor: "primary",
                        textColor: "primary",
                        centered: !0,
                        value: this.state.tabindex,
                        onChange: this.handleTabChange,
                        children: [
                          Object(n.jsx)(k.a, {
                            label: "Persons",
                            component: j.b,
                            to: "/admin/person",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "Students",
                            component: j.b,
                            to: "/admin/students",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "Projects",
                            component: j.b,
                            to: "/admin/projects",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "Modules",
                            component: j.b,
                            to: "/admin/modules",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "Project Types",
                            component: j.b,
                            to: "/admin/projectTypes",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "Semesters",
                            component: j.b,
                            to: "/admin/semester",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "Ratings",
                            component: j.b,
                            to: "/admin/ratings",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "Participations",
                            component: j.b,
                            to: "/admin/participation",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "About",
                            component: j.b,
                            to: "/about",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        q = r(296),
        z = Object(q.a)(function (e) {
          return {
            root: {
              width: "100%",
              marginTop: e.spacing(2),
              marginBottom: e.spacing(2),
              padding: e.spacing(1),
            },
            content: { margin: e.spacing(1) },
          };
        });
      var G = function () {
          var e = z();
          return Object(n.jsx)(S.a, {
            elevation: 0,
            className: e.root,
            children: Object(n.jsxs)("div", {
              className: e.content,
              children: [
                Object(n.jsx)(C.a, {
                  variant: "h6",
                  children: "Python Projectmanagementsystem Project",
                }),
                Object(n.jsx)("img", {
                  width: "300",
                  alt: "logo",
                  src: "projectonomy.jpg",
                }),
                Object(n.jsx)("br", {}),
                Object(n.jsx)(C.a, {
                  children: "React Frontend written by Gruppe 10",
                }),
                Object(n.jsx)(C.a, {
                  children: "Python Backend written by Gruppe 10",
                }),
                Object(n.jsx)("br", {}),
                Object(n.jsx)(C.a, {
                  variant: "body2",
                  children:
                    "\xa9 Hochschule der Medien 2020, all rights reserved.",
                }),
              ],
            }),
          });
        },
        H = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            Object(c.a)(this, r);
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
              a[o] = arguments[o];
            return (
              ((e = t.call.apply(
                t,
                [this].concat(a)
              )).handleSignInButtonClicked = function () {
                e.props.onSignIn();
              }),
              e
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(C.a, {
                        className: e.root,
                        align: "center",
                        variant: "h6",
                        children:
                          "Welcome to the HdM React/Python Project Showcase",
                      }),
                      Object(n.jsx)(C.a, {
                        className: e.root,
                        align: "center",
                        children: "It appears, that you are not signed in.",
                      }),
                      Object(n.jsx)(C.a, {
                        className: e.root,
                        align: "center",
                        children:
                          "To use the services of the Projectmanagement System",
                      }),
                      Object(n.jsx)(L.a, {
                        container: !0,
                        justify: "center",
                        children: Object(n.jsx)(L.a, {
                          item: !0,
                          children: Object(n.jsx)(A.a, {
                            variant: "contained",
                            color: "primary",
                            onClick: this.handleSignInButtonClicked,
                            children: "Sign in with Google",
                          }),
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        Y = Object(M.a)(function (e) {
          return { root: { margin: e.spacing(2) } };
        })(H),
        K = r(297),
        Q = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            return Object(c.a)(this, r), t.apply(this, arguments);
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes;
                  return e.show
                    ? Object(n.jsx)("div", {
                        className: t.root,
                        children: Object(n.jsx)(K.a, { color: "secondary" }),
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        X = Object(M.a)(function (e) {
          return { root: { width: "100%", marginTop: e.spacing(2) } };
        })(Q),
        Z = r(313),
        $ = r(298),
        ee = r(225),
        te = r.n(ee),
        re = Object(E.a)("standardText"),
        ne = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            Object(c.a)(this, r);
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
              a[o] = arguments[o];
            return (
              (e = t.call.apply(t, [this].concat(a))),
              Object.defineProperty(Object(I.a)(e), re, {
                writable: !0,
                value: "This should not have happend. Soooo sorry...",
              }),
              e
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.error,
                    a = e.contextErrorMsg,
                    o = e.onReload;
                  return null !== r
                    ? Object(n.jsxs)(Z.a, {
                        severity: "error",
                        className: t.root,
                        children: [
                          Object(n.jsx)("div", {
                            children: Object(F.a)(this, re)[re],
                          }),
                          Object(n.jsx)($.a, { children: a }),
                          Object(n.jsx)("div", {
                            className: t.margins,
                            children: "Error message (for debugging only) is:",
                          }),
                          Object(n.jsx)("div", { children: r.message }),
                          o
                            ? Object(n.jsx)("div", {
                                className: t.margins,
                                children: Object(n.jsx)(A.a, {
                                  variant: "contained",
                                  color: "primary",
                                  startIcon: Object(n.jsx)(te.a, {}),
                                  onClick: o,
                                  children: "Reload",
                                }),
                              })
                            : null,
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        ae = Object(M.a)(function (e) {
          return { margins: { marginTop: e.spacing(2) } };
        })(ne),
        oe = r(15),
        ie = r(303),
        se = r(308),
        ce = r(23),
        le = r.n(ce),
        de = r(28),
        ue = r.n(de),
        je = (function () {
          function e() {
            Object(c.a)(this, e), (this.id = 0), (this.creation_time = null);
          }
          return (
            Object(l.a)(e, [
              {
                key: "setCreationTime",
                value: function (e) {
                  this.creation_time = e;
                },
              },
              {
                key: "getCreationTime",
                value: function () {
                  return this.creation_time;
                },
              },
              {
                key: "setID",
                value: function (e) {
                  this.id = e;
                },
              },
              {
                key: "getID",
                value: function () {
                  return this.id;
                },
              },
              {
                key: "toString",
                value: function () {
                  var e = " ";
                  for (var t in this) e += t + ":" + this[t] + " ";
                  return e;
                },
              },
            ]),
            e
          );
        })(),
        he = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            return Object(c.a)(this, r), ((e = t.call(this)).name = ""), e;
          }
          return (
            Object(l.a)(r, [
              {
                key: "setName",
                value: function (e) {
                  this.name = e;
                },
              },
              {
                key: "getName",
                value: function () {
                  return this.name;
                },
              },
              {
                key: "toString",
                value: function () {
                  var e = "";
                  for (var t in this) e += t + ": " + this[t] + " ";
                  return e;
                },
              },
            ]),
            r
          );
        })(je),
        pe = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            return Object(c.a)(this, r), ((e = t.call(this)).edv_nr = ""), e;
          }
          return (
            Object(l.a)(
              r,
              [
                {
                  key: "setEdvNr",
                  value: function (e) {
                    this.edv_nr = e;
                  },
                },
                {
                  key: "getEdvNr",
                  value: function () {
                    return this.edv_nr;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e))
                      e.forEach(function (e) {
                        Object.setPrototypeOf(e, r.prototype), t.push(e);
                      });
                    else {
                      var n = e;
                      Object.setPrototypeOf(n, r.prototype), t.push(n);
                    }
                    return t;
                  },
                },
              ]
            ),
            r
          );
        })(he),
        be = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            return (
              Object(c.a)(this, r),
              ((e = t.call(this)).project = ""),
              (e.student = ""),
              e
            );
          }
          return (
            Object(l.a)(
              r,
              [
                {
                  key: "setProject",
                  value: function (e) {
                    this.project = e;
                  },
                },
                {
                  key: "getProject",
                  value: function () {
                    return this.project;
                  },
                },
                {
                  key: "setStudent",
                  value: function (e) {
                    this.student = e;
                  },
                },
                {
                  key: "getStudent",
                  value: function () {
                    return this.student;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e))
                      e.forEach(function (e) {
                        Object.setPrototypeOf(e, r.prototype), t.push(e);
                      });
                    else {
                      var n = e;
                      Object.setPrototypeOf(n, r.prototype), t.push(n);
                    }
                    return t;
                  },
                },
              ]
            ),
            r
          );
        })(je),
        ge = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            return (
              Object(c.a)(this, r),
              ((e = t.call(this)).sws = ""),
              (e.ects = ""),
              e
            );
          }
          return (
            Object(l.a)(
              r,
              [
                {
                  key: "setSws",
                  value: function (e) {
                    this.sws = e;
                  },
                },
                {
                  key: "getSws",
                  value: function () {
                    return this.sws;
                  },
                },
                {
                  key: "setEcts",
                  value: function (e) {
                    this.ects = e;
                  },
                },
                {
                  key: "getEcts",
                  value: function () {
                    return this.ects;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e))
                      e.forEach(function (e) {
                        Object.setPrototypeOf(e, r.prototype), t.push(e);
                      });
                    else {
                      var n = e;
                      Object.setPrototypeOf(n, r.prototype), t.push(n);
                    }
                    return t;
                  },
                },
              ]
            ),
            r
          );
        })(he),
        Oe = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            return (
              Object(c.a)(this, r),
              ((e = t.call(this)).project = null),
              (e.evaluator = null),
              (e.to_be_assessed = null),
              (e.grade = 0),
              (e.passed = !0),
              e
            );
          }
          return (
            Object(l.a)(
              r,
              [
                {
                  key: "setProject",
                  value: function (e) {
                    this.project = e;
                  },
                },
                {
                  key: "getProject",
                  value: function () {
                    return this.project;
                  },
                },
                {
                  key: "setEvaluator",
                  value: function (e) {
                    this.evaluator = e;
                  },
                },
                {
                  key: "getEvaluator",
                  value: function () {
                    return this.evaluator;
                  },
                },
                {
                  key: "setToBeAssessed",
                  value: function (e) {
                    this.to_be_assessed = e;
                  },
                },
                {
                  key: "getToBeAssessed",
                  value: function () {
                    return this.to_be_assessed;
                  },
                },
                {
                  key: "setGrade",
                  value: function (e) {
                    this.grade = e;
                  },
                },
                {
                  key: "getGrade",
                  value: function () {
                    return this.grade;
                  },
                },
                {
                  key: "setPassed",
                  value: function (e) {
                    this.passed = e;
                  },
                },
                {
                  key: "getPassed",
                  value: function () {
                    return this.passed;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e))
                      e.forEach(function (e) {
                        Object.setPrototypeOf(e, r.prototype), t.push(e);
                      });
                    else {
                      var n = e;
                      Object.setPrototypeOf(n, r.prototype), t.push(n);
                    }
                    return t;
                  },
                },
              ]
            ),
            r
          );
        })(je),
        fe = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            return (
              Object(c.a)(this, r),
              ((e = t.call(this)).start = null),
              (e.end = null),
              e
            );
          }
          return (
            Object(l.a)(
              r,
              [
                {
                  key: "setStart",
                  value: function (e) {
                    this.start = e;
                  },
                },
                {
                  key: "getStart",
                  value: function () {
                    return this.start;
                  },
                },
                {
                  key: "setEnd",
                  value: function (e) {
                    this.end = e;
                  },
                },
                {
                  key: "getEnd",
                  value: function () {
                    return this.end;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e))
                      e.forEach(function (e) {
                        Object.setPrototypeOf(e, r.prototype), t.push(e);
                      });
                    else {
                      var n = e;
                      Object.setPrototypeOf(n, r.prototype), t.push(n);
                    }
                    return t;
                  },
                },
              ]
            ),
            r
          );
        })(he),
        me = (function () {
          function e() {
            Object(c.a)(this, e), (this.name = "");
          }
          return (
            Object(l.a)(
              e,
              [
                {
                  key: "setStatus",
                  value: function (e) {
                    this.name = e;
                  },
                },
                {
                  key: "getStatus",
                  value: function () {
                    return this.name;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (t) {
                    var r = [];
                    if (Array.isArray(t))
                      t.forEach(function (t) {
                        Object.setPrototypeOf(t, e.prototype), r.push(t);
                      });
                    else {
                      var n = t;
                      Object.setPrototypeOf(n, e.prototype), r.push(n);
                    }
                    return r;
                  },
                },
              ]
            ),
            e
          );
        })(),
        xe = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            return (
              Object(c.a)(this, r),
              ((e = t.call(this)).role = null),
              (e.email = ""),
              (e.google_user_id = ""),
              e
            );
          }
          return (
            Object(l.a)(
              r,
              [
                {
                  key: "setRole",
                  value: function (e) {
                    this.role = e;
                  },
                },
                {
                  key: "getRole",
                  value: function () {
                    return this.role;
                  },
                },
                {
                  key: "setEmail",
                  value: function (e) {
                    this.email = e;
                  },
                },
                {
                  key: "getEmail",
                  value: function () {
                    return this.email;
                  },
                },
                {
                  key: "setGoogleUserId",
                  value: function (e) {
                    this.google_user_id = e;
                  },
                },
                {
                  key: "getGoogleUserId",
                  value: function () {
                    return this.google_user_id;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e))
                      e.forEach(function (e) {
                        Object.setPrototypeOf(e, r.prototype), t.push(e);
                      });
                    else {
                      var n = e;
                      Object.setPrototypeOf(n, r.prototype), t.push(n);
                    }
                    return t;
                  },
                },
              ]
            ),
            r
          );
        })(he),
        Pe = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            return (
              Object(c.a)(this, r),
              ((e = t.call(this)).course_abbr = ""),
              (e.matriculation_nr = ""),
              e
            );
          }
          return (
            Object(l.a)(
              r,
              [
                {
                  key: "setCourseAbbr",
                  value: function (e) {
                    this.course_abbr = e;
                  },
                },
                {
                  key: "getCourseAbbr",
                  value: function () {
                    return this.course_abbr;
                  },
                },
                {
                  key: "setMatriculationNr",
                  value: function (e) {
                    this.matriculation_nr = e;
                  },
                },
                {
                  key: "getMatriculationNr",
                  value: function () {
                    return this.matriculation_nr;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e))
                      e.forEach(function (e) {
                        Object.setPrototypeOf(e, r.prototype), t.push(e);
                      });
                    else {
                      var n = e;
                      Object.setPrototypeOf(n, r.prototype), t.push(n);
                    }
                    return t;
                  },
                },
              ]
            ),
            r
          );
        })(xe),
        ve = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            var e;
            return (
              Object(c.a)(this, r),
              ((e = t.call(this)).status = ""),
              (e.owner = ""),
              (e.module = null),
              (e.projectType = null),
              (e.semester = null),
              (e.capacity = ""),
              (e.external_partner_list = ""),
              (e.short_description = ""),
              (e.flag = 0),
              (e.bd_before_lecture_period = ""),
              (e.bd_during_lecture_period = ""),
              (e.bd_during_exam_period = ""),
              (e.preferred_bd_during_lecture_period = ""),
              (e.special_room = ""),
              (e.language = ""),
              (e.room = ""),
              e
            );
          }
          return (
            Object(l.a)(
              r,
              [
                {
                  key: "setStatus",
                  value: function (e) {
                    this.status = e;
                  },
                },
                {
                  key: "getStatus",
                  value: function () {
                    return this.status;
                  },
                },
                {
                  key: "setOwner",
                  value: function (e) {
                    this.owner = e;
                  },
                },
                {
                  key: "getOwner",
                  value: function () {
                    return this.owner;
                  },
                },
                {
                  key: "setModule",
                  value: function (e) {
                    this.module = e;
                  },
                },
                {
                  key: "getModule",
                  value: function () {
                    return this.module;
                  },
                },
                {
                  key: "setProjectType",
                  value: function (e) {
                    this.project_type = e;
                  },
                },
                {
                  key: "getProjectType",
                  value: function () {
                    return this.project_type;
                  },
                },
                {
                  key: "setSemester",
                  value: function (e) {
                    this.semester = e;
                  },
                },
                {
                  key: "getSemester",
                  value: function () {
                    return this.semester;
                  },
                },
                {
                  key: "setCapacity",
                  value: function (e) {
                    this.capacity = e;
                  },
                },
                {
                  key: "getCapacity",
                  value: function () {
                    return this.capacity;
                  },
                },
                {
                  key: "setExternalPartnerList",
                  value: function (e) {
                    this.external_partner_list = e;
                  },
                },
                {
                  key: "getExternalPartnerList",
                  value: function () {
                    return this.external_partner_list;
                  },
                },
                {
                  key: "setShortDescription",
                  value: function (e) {
                    this.short_description = e;
                  },
                },
                {
                  key: "getShortDescription",
                  value: function () {
                    return this.short_description;
                  },
                },
                {
                  key: "setFlag",
                  value: function (e) {
                    this.flag = e;
                  },
                },
                {
                  key: "getFlag",
                  value: function () {
                    return this.Flag;
                  },
                },
                {
                  key: "setBdBeforeLecturePeriod",
                  value: function (e) {
                    this.bd_before_lecture_period = e;
                  },
                },
                {
                  key: "getBdBeforeLecturePeriod",
                  value: function () {
                    return this.bd_before_lecture_period;
                  },
                },
                {
                  key: "setBdDuringLecturePeriod",
                  value: function (e) {
                    this.bd_during_lecture_period = e;
                  },
                },
                {
                  key: "getBdDuringLecturePeriod",
                  value: function () {
                    return this.bd_during_lecture_period;
                  },
                },
                {
                  key: "setBdDuringExamPeriod",
                  value: function (e) {
                    this.bd_during_exam_period = e;
                  },
                },
                {
                  key: "getBdDuringExamPeriod",
                  value: function () {
                    return this.bd_during_exam_period;
                  },
                },
                {
                  key: "setPreferredBdDuringLecturePeriod",
                  value: function (e) {
                    this.preferred_bd_during_lecture_period = e;
                  },
                },
                {
                  key: "getPreferredBdDuringLecturePeriod",
                  value: function () {
                    return this.preferred_bd_during_lecture_period;
                  },
                },
                {
                  key: "setSpecialRoom",
                  value: function (e) {
                    this.special_room = e;
                  },
                },
                {
                  key: "getSpecialRoom",
                  value: function () {
                    return this.special_room;
                  },
                },
                {
                  key: "setLanguage",
                  value: function (e) {
                    this.language = e;
                  },
                },
                {
                  key: "getLanguage",
                  value: function () {
                    return this.language;
                  },
                },
                {
                  key: "setRoom",
                  value: function (e) {
                    this.room = e;
                  },
                },
                {
                  key: "getRoom",
                  value: function () {
                    return this.room;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (e) {
                    var t = [];
                    if (Array.isArray(e))
                      e.forEach(function (e) {
                        Object.setPrototypeOf(e, r.prototype), t.push(e);
                      });
                    else {
                      var n = e;
                      Object.setPrototypeOf(n, r.prototype), t.push(n);
                    }
                    return t;
                  },
                },
              ]
            ),
            r
          );
        })(he),
        ye = (function () {
          function e() {
            Object(c.a)(this, e), (this.name = ""), (this.id = "");
          }
          return (
            Object(l.a)(
              e,
              [
                {
                  key: "setRoleName",
                  value: function (e) {
                    this.name = e;
                  },
                },
                {
                  key: "getRoleName",
                  value: function () {
                    return this.name;
                  },
                },
                {
                  key: "setId",
                  value: function (e) {
                    this.id = e;
                  },
                },
                {
                  key: "getId",
                  value: function () {
                    return this.id;
                  },
                },
              ],
              [
                {
                  key: "fromJSON",
                  value: function (t) {
                    var r = [];
                    if (Array.isArray(t))
                      t.forEach(function (t) {
                        Object.setPrototypeOf(t, e.prototype), r.push(t);
                      });
                    else {
                      var n = t;
                      Object.setPrototypeOf(n, e.prototype), r.push(n);
                    }
                    return r;
                  },
                },
              ]
            ),
            e
          );
        })(),
        Se = Object(E.a)("api"),
        Ce = Object(E.a)("managementServerBaseURL"),
        we = Object(E.a)("getPersonsURL"),
        ke = Object(E.a)("addPersonURL"),
        Ie = Object(E.a)("getPersonURL"),
        Fe = Object(E.a)("getPersonByMailURL"),
        Ee = Object(E.a)("updatePersonURL"),
        De = Object(E.a)("deletePersonURL"),
        Te = Object(E.a)("searchPersonURL"),
        Ne = Object(E.a)("getProjectsURL"),
        Be = Object(E.a)("addProjectURL"),
        Re = Object(E.a)("getProjectURL"),
        Le = Object(E.a)("updateProjectURL"),
        Ae = Object(E.a)("deleteProjectURL"),
        Me = Object(E.a)("getProjectsByAcceptedURL"),
        Ve = Object(E.a)("searchProjectsByOwnerURL"),
        Ue = Object(E.a)("getProjectsByStudentURL"),
        Je = Object(E.a)("getStudentsURL"),
        _e = Object(E.a)("addStudentURL"),
        We = Object(E.a)("getStudentURL"),
        qe = Object(E.a)("getStudentByMailURL"),
        ze = Object(E.a)("updateStudentURL"),
        Ge = Object(E.a)("deleteStudentURL"),
        He = Object(E.a)("searchStudentURL"),
        Ye = Object(E.a)("getParticipationsURL"),
        Ke = Object(E.a)("getParticipationURL"),
        Qe = Object(E.a)("addParticipationURL"),
        Xe = Object(E.a)("updateParticipationURL"),
        Ze = Object(E.a)("deleteParticipationIdURL"),
        $e = Object(E.a)("getParticipationsByStudentURL"),
        et = Object(E.a)("getSemestersURL"),
        tt = Object(E.a)("addSemesterURL"),
        rt = Object(E.a)("getSemesterURL"),
        nt = Object(E.a)("updateSemesterURL"),
        at = Object(E.a)("deleteSemesterURL"),
        ot = Object(E.a)("searchSemesterURL"),
        it = Object(E.a)("getRatingsURL"),
        st = Object(E.a)("addRatingURL"),
        ct = Object(E.a)("getRatingURL"),
        lt = Object(E.a)("updateRatingURL"),
        dt = Object(E.a)("deleteRatingURL"),
        ut = Object(E.a)("getRatingsByStudentURL"),
        jt = Object(E.a)("getRatingsByDozentURL"),
        ht = Object(E.a)("getRolesURL"),
        pt = Object(E.a)("addRoleURL"),
        bt = Object(E.a)("getRoleURL"),
        gt = Object(E.a)("updateRoleURL"),
        Ot = Object(E.a)("deleteRoleURL"),
        ft = Object(E.a)("searchRoleURL"),
        mt = Object(E.a)("getProjectTypesURL"),
        xt = Object(E.a)("addProjectTypeURL"),
        Pt = Object(E.a)("getProjectTypeURL"),
        vt = Object(E.a)("updateProjectTypeURL"),
        yt = Object(E.a)("deleteProjectTypeURL"),
        St = Object(E.a)("searchProjectTypeURL"),
        Ct = Object(E.a)("getStatusesURL"),
        wt = Object(E.a)("addStatusURL"),
        kt = Object(E.a)("getStatusURL"),
        It = Object(E.a)("updateStatusURL"),
        Ft = Object(E.a)("deleteStatusURL"),
        Et = Object(E.a)("searchStatusURL"),
        Dt = Object(E.a)("getModulesURL"),
        Tt = Object(E.a)("addModuleURL"),
        Nt = Object(E.a)("getModuleURL"),
        Bt = Object(E.a)("updateModuleURL"),
        Rt = Object(E.a)("deleteModuleURL"),
        Lt = Object(E.a)("searchModuleURL"),
        At = Object(E.a)("fetchAdvanced"),
        Mt = (function () {
          function e() {
            var t = this;
            Object(c.a)(this, e),
              Object.defineProperty(this, Ce, {
                writable: !0,
                value: "/management",
              }),
              Object.defineProperty(this, we, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/persons");
                },
              }),
              Object.defineProperty(this, ke, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/persons");
                },
              }),
              Object.defineProperty(this, Ie, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/person/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Fe, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/person/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Ee, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/person/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, De, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/person/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Te, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/person-by-name/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Ne, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/projects");
                },
              }),
              Object.defineProperty(this, Be, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/projects");
                },
              }),
              Object.defineProperty(this, Re, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/project/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Le, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/project/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Ae, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/project/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Me, {
                writable: !0,
                value: function () {
                  return "".concat(
                    Object(F.a)(t, Ce)[Ce],
                    "/project-by-status"
                  );
                },
              }),
              Object.defineProperty(this, Ve, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/project-by-owner/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Ue, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/participation/")
                    .concat(e, "/project");
                },
              }),
              Object.defineProperty(this, Je, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/students");
                },
              }),
              Object.defineProperty(this, _e, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/students");
                },
              }),
              Object.defineProperty(this, We, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/student/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, qe, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/student-by-mail/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, ze, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/student/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Ge, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/student/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, He, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/student-by-name/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Ye, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/participation");
                },
              }),
              Object.defineProperty(this, Ke, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/student/")
                    .concat(e, "/participation");
                },
              }),
              Object.defineProperty(this, Qe, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/student/")
                    .concat(e, "/participation");
                },
              }),
              Object.defineProperty(this, Xe, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/participation/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Ze, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/participation/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, $e, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(
                      Object(F.a)(t, Ce)[Ce],
                      "/participation-by-student/"
                    )
                    .concat(e);
                },
              }),
              Object.defineProperty(this, et, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/semester");
                },
              }),
              Object.defineProperty(this, tt, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/semester");
                },
              }),
              Object.defineProperty(this, rt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/semester/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, nt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/semester/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, at, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/semester/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, ot, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/semester-by-name/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, it, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/ratings");
                },
              }),
              Object.defineProperty(this, st, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/ratings");
                },
              }),
              Object.defineProperty(this, ct, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/rating/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, lt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/rating/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, dt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/rating/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, ut, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/rating-student/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, jt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/rating-dozent/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, ht, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/role");
                },
              }),
              Object.defineProperty(this, pt, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/role");
                },
              }),
              Object.defineProperty(this, bt, {
                writable: !0,
                value: function (e) {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/role/").concat(e);
                },
              }),
              Object.defineProperty(this, gt, {
                writable: !0,
                value: function (e) {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/role/").concat(e);
                },
              }),
              Object.defineProperty(this, Ot, {
                writable: !0,
                value: function (e) {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/role/").concat(e);
                },
              }),
              Object.defineProperty(this, ft, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/role-by-name/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, mt, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/project_type");
                },
              }),
              Object.defineProperty(this, xt, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/project_type");
                },
              }),
              Object.defineProperty(this, Pt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/project_type/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, vt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/project_type/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, yt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/project_type/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, St, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/project_type-by-name/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Ct, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/status");
                },
              }),
              Object.defineProperty(this, wt, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/status");
                },
              }),
              Object.defineProperty(this, kt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/status/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, It, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/status/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Ft, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/status/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Et, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/status-by-name/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Dt, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/modules");
                },
              }),
              Object.defineProperty(this, Tt, {
                writable: !0,
                value: function () {
                  return "".concat(Object(F.a)(t, Ce)[Ce], "/modules");
                },
              }),
              Object.defineProperty(this, Nt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/module/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Bt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/module/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Rt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/module/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, Lt, {
                writable: !0,
                value: function (e) {
                  return ""
                    .concat(Object(F.a)(t, Ce)[Ce], "/module-by-name/")
                    .concat(e);
                },
              }),
              Object.defineProperty(this, At, {
                writable: !0,
                value: function (e, t) {
                  return fetch(e, t).then(function (e) {
                    if (!e.ok)
                      throw Error(
                        "".concat(e.status, " ").concat(e.statusText)
                      );
                    return e.json();
                  });
                },
              });
          }
          return (
            Object(l.a)(
              e,
              [
                {
                  key: "getPersons",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, we)[we]())
                      .then(function (e) {
                        var t = xe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getPersonByMail",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Fe)[Fe](e))
                      .then(function (e) {
                        var t = xe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getPerson",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ie)[Ie](e))
                      .then(function (e) {
                        var t = xe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addPerson",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, ke)[ke](), {
                        method: "POST",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = xe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updatePerson",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ee)[Ee](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = xe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deletePerson",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, De)[De](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = xe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "searchPerson",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Te)[Te](e))
                      .then(function (e) {
                        var t = xe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getProjects",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ne)[Ne]())
                      .then(function (e) {
                        var t = ve.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getProject",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Re)[Re](e))
                      .then(function (e) {
                        var t = ve.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addProject",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Be)[Be](), {
                        method: "POST",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = ve.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updateProject",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Le)[Le](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = ve.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deleteProject",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ae)[Ae](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = ve.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "searchProjectsByOwner",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ve)[Ve](e))
                      .then(function (e) {
                        var t = ve.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getProjectsByAccepted",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Me)[Me]())
                      .then(function (e) {
                        var t = ve.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getProjectsByStudent",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ue)[Ue](e))
                      .then(function (e) {
                        var t = ve.fromJSON(e);
                        return (
                          
                          new Promise(function (e) {
                            e(t);
                          })
                        );
                      });
                  },
                },
                {
                  key: "getStudents",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Je)[Je]())
                      .then(function (e) {
                        var t = Pe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getStudent",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, We)[We](e))
                      .then(function (e) {
                        var t = Pe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getStudentByMail",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, qe)[qe](e))
                      .then(function (e) {
                        var t = Pe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addStudent",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, _e)[_e](), {
                        method: "POST",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = Pe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updateStudent",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, ze)[ze](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = Pe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deleteStudent",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ge)[Ge](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = Pe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "searchStudent",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, He)[He](e))
                      .then(function (e) {
                        var t = Pe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getParticipations",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ye)[Ye]())
                      .then(function (e) {
                        var t = be.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getParticipation",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ke)[Ke](e))
                      .then(function (e) {
                        var t = be.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addParticipation",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Qe)[Qe](e), { method: "POST" })
                      .then(function (e) {
                        var t = be.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updateParticipation",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Xe)[Xe](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = be.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deleteParticipation",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ze)[Ze](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = be.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getParticipationsByStudent",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, $e)[$e](e))
                      .then(function (e) {
                        var t = be.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getSemesters",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, et)[et]())
                      .then(function (e) {
                        var t = fe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getSemester",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, rt)[rt](e))
                      .then(function (e) {
                        var t = fe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addSemester",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, tt)[tt](), {
                        method: "POST",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = fe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updateSemester",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, nt)[nt](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = fe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deleteSemester",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, at)[at](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = fe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "searchSemester",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, ot)[ot](e))
                      .then(function (e) {
                        var t = fe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getRatings",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, it)[it]())
                      .then(function (e) {
                        var t = Oe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getRating",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, ct)[ct](e))
                      .then(function (e) {
                        var t = Oe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addRating",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, st)[st](), {
                        method: "POST",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = Oe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updateRating",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, lt)[lt](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = Oe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deleteRating",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, dt)[dt](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = Oe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getRatingsByStudent",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, ut)[ut](e))
                      .then(function (e) {
                        var t = Oe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getRatingsByDozent",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, jt)[jt](e))
                      .then(function (e) {
                        var t = Oe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getRoles",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, ht)[ht]())
                      .then(function (e) {
                        var t = ye.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getRole",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, bt)[bt](e))
                      .then(function (e) {
                        var t = ye.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addRole",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, pt)[pt](), {
                        method: "POST",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = ye.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updateRole",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, gt)[gt](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = ye.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deleteRole",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ot)[Ot](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = ye.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "searchRole",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, ft)[ft](e))
                      .then(function (e) {
                        var t = ye.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getProjectTypes",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, mt)[mt]())
                      .then(function (e) {
                        var t = ge.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getProjectType",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Pt)[Pt](e))
                      .then(function (e) {
                        var t = ge.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addProjectType",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, xt)[xt](), {
                        method: "POST",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = ge.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updateProjectType",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, vt)[vt](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = ge.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deleteProjectType",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, yt)[yt](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = ge.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "searchProjectType",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, St)[St](e))
                      .then(function (e) {
                        var t = ge.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getModules",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Dt)[Dt]())
                      .then(function (e) {
                        var t = pe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getModule",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Nt)[Nt](e))
                      .then(function (e) {
                        var t = pe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addModule",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Tt)[Tt](), {
                        method: "POST",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = pe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updateModule",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Bt)[Bt](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = pe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deleteModule",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Rt)[Rt](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = pe.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "searchModule",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Lt)[Lt](e))
                      .then(function (e) {
                        var t = pe.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getStatuses",
                  value: function () {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ct)[Ct]())
                      .then(function (e) {
                        var t = me.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "getStatus",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, kt)[kt](e))
                      .then(function (e) {
                        var t = me.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "addStatus",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, wt)[wt](), {
                        method: "POST",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = me.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "updateStatus",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, It)[It](e.getID()), {
                        method: "PUT",
                        headers: {
                          Accept: "application/json, text/plain",
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify(e),
                      })
                      .then(function (e) {
                        var t = me.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "deleteStatus",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Ft)[Ft](e), { method: "DELETE" })
                      .then(function (e) {
                        var t = me.fromJSON(e)[0];
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
                {
                  key: "searchStatus",
                  value: function (e) {
                    return Object(F.a)(this, At)
                      [At](Object(F.a)(this, Et)[Et](e))
                      .then(function (e) {
                        var t = me.fromJSON(e);
                        return new Promise(function (e) {
                          e(t);
                        });
                      });
                  },
                },
              ],
              [
                {
                  key: "getApi",
                  value: function () {
                    return (
                      null == Object(F.a)(this, Se)[Se] &&
                        (Object(F.a)(this, Se)[Se] = new e()),
                      Object(F.a)(this, Se)[Se]
                    );
                  },
                },
              ]
            ),
            e
          );
        })();
      Object.defineProperty(Mt, Se, { writable: !0, value: null });
      var Vt = r(16),
        Ut = r(299),
        Jt = r(300),
        _t = r(301),
        Wt = r(302),
        qt = r(304),
        zt = r(19),
        Gt = r.n(zt),
        Ht = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).addModule = function () {
                var e = new pe();
                e.setName(n.state.name),
                  e.setEdvNr(n.state.edvNr),
                  Mt.getApi()
                    .addModule(e)
                    .then(function (e) {
                      n.setState(n.baseState), n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.updateModule = function () {
                var e = Object.assign(new pe(), n.props.module);
                e.setName(n.state.name),
                  e.setEdvNr(n.state.edvNr),
                  Mt.getApi()
                    .updateModule(e)
                    .then(function (t) {
                      n.setState({
                        updatingInProgress: !1,
                        updatingError: null,
                      }),
                        (n.baseState.name = n.state.name),
                        (n.baseState.edvNr = n.state.edvNr),
                        n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.textFieldValueChange = function (e) {
                var t,
                  r = !1;
                0 === e.target.value.trim().length && (r = !0),
                  n.setState(
                    ((t = {}),
                    Object(Vt.a)(t, e.target.id, e.target.value),
                    Object(Vt.a)(t, e.target.id + "ValidationFailed", r),
                    Object(Vt.a)(t, e.target.id + "Edited", !0),
                    t)
                  );
              }),
              (n.handleClose = function () {
                n.setState(n.baseState), n.props.onClose(null);
              });
            var a = "",
              o = "";
            return (
              e.module && ((a = e.module.getName()), (o = e.module.getEdvNr())),
              (n.state = {
                name: a,
                nameValidationFailed: !1,
                nameEdited: !1,
                edvNr: o,
                enrNrValidationFailed: !1,
                enrEdited: !1,
                addingInProgress: !1,
                updatingInProgress: !1,
                addingError: null,
                updatingError: null,
              }),
              (n.baseState = n.state),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.module,
                    a = e.show,
                    o = this.state,
                    i = o.name,
                    s = o.nameValidationFailed,
                    c = o.nameEdited,
                    l = o.edvNr,
                    d = o.edvNrValidationFailed,
                    u = o.edvNrEdited,
                    j = o.addingInProgress,
                    h = o.addingError,
                    p = o.updatingInProgress,
                    b = o.updatingError,
                    g = "",
                    O = "";
                  return (
                    r
                      ? ((g = "Update a module"),
                        (O = "Module ID: ".concat(r.getID())))
                      : ((g = "Create a new module"),
                        (O = "Enter module data")),
                    a
                      ? Object(n.jsxs)(Ut.a, {
                          open: a,
                          onClose: this.handleClose,
                          maxWidth: "xs",
                          children: [
                            Object(n.jsxs)(Jt.a, {
                              id: "form-dialog-title",
                              children: [
                                g,
                                Object(n.jsx)(D.a, {
                                  className: t.closeButton,
                                  onClick: this.handleClose,
                                  children: Object(n.jsx)(Gt.a, {}),
                                }),
                              ],
                            }),
                            Object(n.jsxs)(_t.a, {
                              children: [
                                Object(n.jsx)(Wt.a, { children: O }),
                                Object(n.jsxs)("form", {
                                  className: t.root,
                                  noValidate: !0,
                                  autoComplete: "off",
                                  children: [
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "name",
                                      label: "Name:",
                                      value: i,
                                      onChange: this.textFieldValueChange,
                                      error: s,
                                      helperText: s
                                        ? "The name must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "edvNr",
                                      label: "EDV Nummer:",
                                      value: l,
                                      onChange: this.textFieldValueChange,
                                      error: d,
                                      helperText: d
                                        ? "The EDV number must contain at least one character"
                                        : " ",
                                    }),
                                  ],
                                }),
                                Object(n.jsx)(X, { show: j || p }),
                                r
                                  ? Object(n.jsx)(ae, {
                                      error: b,
                                      contextErrorMsg: "The module ".concat(
                                        r.getID(),
                                        " could not be updated."
                                      ),
                                      onReload: this.updateModule,
                                    })
                                  : Object(n.jsx)(ae, {
                                      error: h,
                                      contextErrorMsg:
                                        "The module could not be added.",
                                      onReload: this.addModule,
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(qt.a, {
                              children: [
                                Object(n.jsx)(A.a, {
                                  onClick: this.handleClose,
                                  color: "secondary",
                                  children: "Cancel",
                                }),
                                r
                                  ? Object(n.jsx)(A.a, {
                                      disabled: s || d,
                                      variant: "contained",
                                      onClick: this.updateModule,
                                      color: "primary",
                                      children: "Update",
                                    })
                                  : Object(n.jsx)(A.a, {
                                      disabled: s || !c || d || !u,
                                      variant: "contained",
                                      onClick: this.addModule,
                                      color: "primary",
                                      children: "Add",
                                    }),
                              ],
                            }),
                          ],
                        })
                      : null
                  );
                },
              },
            ]),
            r
          );
        })(a.Component),
        Yt = Object(M.a)(function (e) {
          return {
            root: { width: "100%" },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(Ht),
        Kt = r(317),
        Qt = r(306),
        Xt = r(307),
        Zt = r(32),
        $t = r.n(Zt),
        er = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).deleteModule = function () {
                Mt.getApi()
                  .deleteModule(n.props.module.getID())
                  .then(function (e) {
                    n.setState({ deletingInProgress: !1, deletingError: null }),
                      n.props.onClose(n.props.module);
                  })
                  .catch(function (e) {
                    return n.setState({
                      deletingInProgress: !1,
                      deletingError: e,
                    });
                  }),
                  n.setState({ deletingInProgress: !0, deletingError: null });
              }),
              (n.handleClose = function () {
                n.props.onClose(null);
              }),
              (n.state = { deletingInProgress: !1, deletingError: null }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.module,
                    a = e.show,
                    o = this.state,
                    i = o.deletingInProgress,
                    s = o.deletingError;
                  return a
                    ? Object(n.jsxs)(Ut.a, {
                        open: a,
                        onClose: this.handleClose,
                        children: [
                          Object(n.jsxs)(Jt.a, {
                            id: "delete-dialog-title",
                            children: [
                              "Delete module",
                              Object(n.jsx)(D.a, {
                                className: t.closeButton,
                                onClick: this.handleClose,
                                children: Object(n.jsx)(Gt.a, {}),
                              }),
                            ],
                          }),
                          Object(n.jsxs)(_t.a, {
                            children: [
                              Object(n.jsxs)(Wt.a, {
                                children: [
                                  "Really delete module ",
                                  r.getName(),
                                  "?",
                                ],
                              }),
                              Object(n.jsx)(X, { show: i }),
                              Object(n.jsx)(ae, {
                                error: s,
                                contextErrorMsg: "The module   "
                                  .concat(r.getName(), " ' (ID: ")
                                  .concat(r.getID(), ") could not be deleted."),
                                onReload: this.deleteModule,
                              }),
                            ],
                          }),
                          Object(n.jsxs)(qt.a, {
                            children: [
                              Object(n.jsx)(A.a, {
                                onClick: this.handleClose,
                                color: "secondary",
                                children: "Cancel",
                              }),
                              Object(n.jsx)(A.a, {
                                variant: "contained",
                                onClick: this.deleteModule,
                                color: "primary",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        tr = Object(M.a)(function (e) {
          return {
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(er),
        rr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).expansionPanelStateChanged = function () {
                n.props.onExpandedStateChange(n.props.module);
              }),
              (n.editModuleButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showModuleForm: !0 });
              }),
              (n.moduleFormClosed = function (e) {
                e
                  ? n.setState({ module: e, showModuleForm: !1 })
                  : n.setState({ showModuleForm: !1 });
              }),
              (n.deleteModuleButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showModuleDeleteDialog: !0 });
              }),
              (n.deleteModuleDialogClosed = function (e) {
                e && n.props.onModuleDeleted(e),
                  n.setState({ showModuleDeleteDialog: !1 });
              }),
              (n.state = {
                module: e.module,
                showModuleForm: !1,
                showModuleDeleteDialog: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.expandedState,
                    a = this.state,
                    o = a.module,
                    i = a.showModuleForm,
                    s = a.showModuleDeleteDialog;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(Kt.a, {
                        defaultExpanded: !1,
                        expanded: r,
                        onChange: this.expansionPanelStateChanged,
                        children: Object(n.jsx)(Qt.a, {
                          expandIcon: Object(n.jsx)($t.a, {}),
                          id: "module".concat(o.getID(), "accountpanel-header"),
                          children: Object(n.jsxs)(L.a, {
                            container: !0,
                            spacing: 1,
                            justify: "flex-start",
                            alignItems: "center",
                            children: [
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(C.a, {
                                  variant: "body1",
                                  className: t.heading,
                                  children: [
                                    "Modulname:  ",
                                    o.getName(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "EdV-Nr:     ",
                                    o.getEdvNr(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(Xt.a, {
                                  variant: "text",
                                  size: "small",
                                  children: [
                                    Object(n.jsx)(A.a, {
                                      color: "primary",
                                      onClick: this.editModuleButtonClicked,
                                      children: "edit",
                                    }),
                                    Object(n.jsx)(A.a, {
                                      color: "secondary",
                                      onClick: this.deleteModuleButtonClicked,
                                      children: "delete",
                                    }),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsx)(C.a, {
                                  variant: "body2",
                                  color: "textSecondary",
                                  children: "List of module",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(n.jsx)(Yt, {
                        show: i,
                        module: o,
                        onClose: this.moduleFormClosed,
                      }),
                      Object(n.jsx)(tr, {
                        show: s,
                        module: o,
                        onClose: this.deleteModuleDialogClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        nr = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(rr),
        ar = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).getModules = function () {
                Mt.getApi()
                  .getModules()
                  .then(function (e) {
                    return n.setState({
                      modules: e,
                      filteredModules: Object(oe.a)(e),
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      modules: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  }),
                  n.setState({ loadingInProgress: !0, error: null });
              }),
              (n.onExpandedStateChange = function (e) {
                var t = null;
                e.getID() !== n.state.expandedModuleID && (t = e.getID()),
                  n.setState({ expandedModuleID: t });
              }),
              (n.moduleDeleted = function (e) {
                var t = n.state.modules.filter(function (t) {
                  return t.getID() !== e.getID();
                });
                n.setState({
                  modules: t,
                  filteredModules: Object(oe.a)(t),
                  showModuleForm: !1,
                });
              }),
              (n.addModuleButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showModuleForm: !0 });
              }),
              (n.moduleFormClosed = function (e) {
                if (e) {
                  var t = [].concat(Object(oe.a)(n.state.modules), [e]);
                  n.setState({
                    modules: t,
                    filteredModules: Object(oe.a)(t),
                    showModuleForm: !1,
                  });
                } else n.setState({ showModuleForm: !1 });
              }),
              (n.filterFieldValueChange = function (e) {
                var t = e.target.value.toLowerCase();
                n.setState({
                  filteredModules: n.state.modules.filter(function (e) {
                    var r = e.getName().toLowerCase().includes(t),
                      n = e.getEdvNr().toLowerCase().includes(t);
                    return r || n;
                  }),
                  moduleFilter: t,
                });
              }),
              (n.clearFilterFieldButtonClicked = function () {
                n.setState({
                  filteredModules: Object(oe.a)(n.state.modules),
                  moduleFilter: "",
                });
              });
            var a = null;
            return (
              n.props.location.expandModule &&
                (a = n.props.location.expandModule.getID()),
              (n.state = {
                modules: [],
                filteredModules: [],
                ModuleFilter: "",
                error: null,
                loadingInProgress: !1,
                expandedModuleID: a,
                showModuleForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getModules();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    r = this.state,
                    a = r.filteredModules,
                    o = r.moduleFilter,
                    i = r.expandedModuleID,
                    s = r.loadingInProgress,
                    c = r.error,
                    l = r.showModuleForm;
                  return Object(n.jsxs)("div", {
                    className: t.root,
                    children: [
                      Object(n.jsxs)(L.a, {
                        className: t.moduleFilter,
                        container: !0,
                        spacing: 1,
                        justify: "flex-start",
                        alignItems: "center",
                        children: [
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(C.a, {
                              children: "Filter module list by name:",
                            }),
                          }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            xs: 4,
                            children: Object(n.jsx)(ie.a, {
                              autoFocus: !0,
                              fullWidth: !0,
                              id: "moduleFilter",
                              type: "text",
                              value: o,
                              onChange: this.filterFieldValueChange,
                              InputProps: {
                                endAdornment: Object(n.jsx)(se.a, {
                                  position: "end",
                                  children: Object(n.jsx)(D.a, {
                                    onClick: this.clearFilterFieldButtonClicked,
                                    children: Object(n.jsx)(ue.a, {}),
                                  }),
                                }),
                              },
                            }),
                          }),
                          Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(A.a, {
                              variant: "contained",
                              color: "primary",
                              startIcon: Object(n.jsx)(le.a, {}),
                              onClick: this.addModuleButtonClicked,
                              children: "Add Module",
                            }),
                          }),
                        ],
                      }),
                      a.map(function (t) {
                        return Object(n.jsx)(
                          nr,
                          {
                            module: t,
                            expandedState: i === t.getID(),
                            onExpandedStateChange: e.onExpandedStateChange,
                            onModuleDeleted: e.moduleDeleted,
                          },
                          t.getID()
                        );
                      }),
                      Object(n.jsx)(X, { show: s }),
                      Object(n.jsx)(ae, {
                        error: c,
                        contextErrorMsg:
                          "The list of modules could not be loaded.",
                        onReload: this.getModules,
                      }),
                      Object(n.jsx)(Yt, {
                        show: l,
                        onClose: this.moduleFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        or = Object(h.f)(
          Object(M.a)(function (e) {
            return {
              root: { width: "100%" },
              ProjectFilter: {
                marginTop: e.spacing(2),
                marginBottom: e.spacing(1),
              },
            };
          })(ar)
        ),
        ir = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).addProject = function () {
                var e = new ve();
                e.setName(n.state.name),
                  e.setStatus(n.state.status),
                  e.setOwner(n.state.owner),
                  e.setModule(n.state.module),
                  e.setProjectType(n.state.projectType),
                  e.setSemester(n.state.semester),
                  e.setCapacity(n.state.capacity),
                  e.setExternalPartnerList(n.state.externalPartnerList),
                  e.setShortDescription(n.state.shortDescription),
                  e.setFlag(n.state.flag),
                  e.setBdBeforeLecturePeriod(n.state.bdBeforeLecturePeriod),
                  e.setBdDuringLecturePeriod(n.state.bdDuringLecturePeriod),
                  e.setBdDuringExamPeriod(n.state.bdDuringExamPeriod),
                  e.setPreferredBdDuringLecturePeriod(
                    n.state.preferredBdDuringLecturePeriod
                  ),
                  e.setSpecialRoom(n.state.specialRoom),
                  e.setLanguage(n.state.language),
                  e.setRoom(n.state.room),
                  Mt.getApi()
                    .addProject(e)
                    .then(function (e) {
                      n.setState(n.baseState), n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.updateProject = function () {
                var e = Object.assign(new ve(), n.props.project);
                e.setName(n.state.name),
                  e.setStatus(n.state.status),
                  e.setOwner(n.state.owner),
                  e.setModule(n.state.module),
                  e.setProjectType(n.state.project_type),
                  e.setSemester(n.state.semester),
                  e.setCapacity(n.state.capacity),
                  e.setExternalPartnerList(n.state.externalPartnerList),
                  e.setShortDescription(n.state.shortDescription),
                  e.setFlag(n.state.flag),
                  e.setBdBeforeLecturePeriod(n.state.bdBeforeLecturePeriod),
                  e.setBdDuringLecturePeriod(n.state.bdDuringLecturePeriod),
                  e.setBdDuringExamPeriod(n.state.bdDuringExamPeriod),
                  e.setPreferredBdDuringLecturePeriod(
                    n.state.preferredBdDuringLecturePeriod
                  ),
                  e.setSpecialRoom(n.state.specialRoom),
                  e.setLanguage(n.state.language),
                  e.setRoom(n.state.room),
                  Mt.getApi()
                    .updateProject(e)
                    .then(function (t) {
                      n.setState({
                        updatingInProgress: !1,
                        updatingError: null,
                      }),
                        (n.baseState.name = n.state.name),
                        (n.baseState.status = n.state.status),
                        (n.baseState.owner = n.state.owner),
                        (n.baseState.module = n.state.module),
                        (n.baseState.project_type = n.state.project_type),
                        (n.baseState.semester = n.state.semester),
                        (n.baseState.capacity = n.state.capacity),
                        (n.baseState.externalPartnerList =
                          n.state.externalPartnerList),
                        (n.baseState.shortDescription =
                          n.state.shortDescription),
                        (n.baseState.flag = n.state.flag),
                        (n.baseState.bdBeforeLecturePeriod =
                          n.state.bdBeforeLecturePeriod),
                        (n.baseState.bdDuringLecturePeriod =
                          n.state.bdDuringLecturePeriod),
                        (n.baseState.bdDuringExamPeriod =
                          n.state.bdDuringExamPeriod),
                        (n.baseState.preferredBdDuringLecturePeriod =
                          n.state.preferredBdDuringLecturePeriod),
                        (n.baseState.specialRoom = n.state.specialRoom),
                        (n.baseState.language = n.state.language),
                        (n.baseState.room = n.state.room),
                        n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.textFieldValueChange = function (e) {
                var t,
                  r = !1;
                0 === e.target.value.trim().length && (r = !0),
                  n.setState(
                    ((t = {}),
                    Object(Vt.a)(t, e.target.id, e.target.value),
                    Object(Vt.a)(t, e.target.id + "ValidationFailed", r),
                    Object(Vt.a)(t, e.target.id + "Edited", !0),
                    t)
                  );
              }),
              (n.handleClose = function () {
                n.setState(n.baseState), n.props.onClose(null);
              });
            var a = "",
              o = "",
              i = "",
              s = "",
              l = "",
              d = "",
              u = "",
              j = "",
              h = "",
              p = "",
              b = "",
              g = "",
              O = "",
              f = "",
              m = "",
              x = "",
              P = "";
            return (
              e.project &&
                ((a = e.project.getName()),
                (o = e.project.getStatus()),
                (i = e.project.getOwner()),
                (s = e.project.getModule()),
                (l = e.project.getProjectType()),
                (d = e.project.getSemester()),
                (u = e.project.getCapacity()),
                (j = e.project.getExternalPartnerList()),
                (h = e.project.getShortDescription()),
                (p = e.project.getFlag()),
                (b = e.project.getBdBeforeLecturePeriod()),
                (g = e.project.getBdDuringLecturePeriod()),
                (O = e.project.getBdDuringExamPeriod()),
                (f = e.project.getPreferredBdDuringLecturePeriod()),
                (m = e.project.getSpecialRoom()),
                (x = e.project.getLanguage()),
                (P = e.project.getRoom())),
              (n.state = {
                name: a,
                nameValidationFailed: !1,
                nameEdited: !1,
                status: o,
                statusValidationFailed: !1,
                statusEdited: !1,
                owner: i,
                ownerValidationFailed: !1,
                ownerEdited: !1,
                module: s,
                moduleValidationFailed: !1,
                moduleEdited: !1,
                project_type: l,
                projectTypeValidationFailed: !1,
                projectTypeEdited: !1,
                semester: d,
                semesterValidationFailed: !1,
                semesterEdited: !1,
                capacity: u,
                capacityValidationFailed: !1,
                capacityEdited: !1,
                externalPartnerList: j,
                externalPartnerListValidationFailed: !1,
                externalPartnerListEdited: !1,
                shortDescription: h,
                shortDescriptionValidationFailed: !1,
                shortDescriptionEdited: !1,
                flag: p,
                flagValidationFailed: !1,
                flagEdited: !1,
                bdBeforeLecturePeriod: b,
                bdBeforeLecturePeriodValidationFailed: !1,
                bdBeforeLecturePeriodEdited: !1,
                bdDuringLecturePeriod: g,
                bdDuringLecturePeriodValidationFailed: !1,
                bdDuringLecturePeriodEdited: !1,
                bdDuringExamPeriod: O,
                bdDuringExamPeriodValidationFailed: !1,
                bdDuringExamPeriodEdited: !1,
                preferredBdDuringLecturePeriod: f,
                preferredBdDuringLecturePeriodValidationFailed: !1,
                preferredBdDuringLecturePeriodEdited: !1,
                specialRoom: m,
                specialRoomValidationFailed: !1,
                specialRoomEdited: !1,
                language: x,
                languageValidationFailed: !1,
                languageEdited: !1,
                room: P,
                roomValidationFailed: !1,
                roomEdited: !1,
                addingInProgress: !1,
                updatingInProgress: !1,
                addingError: null,
                updatingError: null,
              }),
              (n.baseState = n.state),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.project,
                    a = e.show,
                    o = this.state,
                    i = o.name,
                    s = o.nameValidationFailed,
                    c = o.nameEdited,
                    l = o.status,
                    d = o.statusValidationFailed,
                    u = o.statusEdited,
                    j = o.owner,
                    h = o.ownerValidationFailed,
                    p = o.ownerEdited,
                    b = o.module,
                    g = o.moduleValidationFailed,
                    O = o.moduleEdited,
                    f = o.project_type,
                    m = o.projectTypeValidationFailed,
                    x = o.projectTypeEdited,
                    P = o.semester,
                    v = o.semesterEdited,
                    y = o.semesterValidationFailed,
                    S = o.capacity,
                    C = o.capacityValidationFailed,
                    w = o.capacityEdited,
                    k = o.externalPartnerList,
                    I = o.externalPartnerListValidationFailed,
                    F = o.externalPartnerListEdited,
                    E = o.shortDescription,
                    T = o.shortDescriptionValidationFailed,
                    N = o.shortDescriptionEdited,
                    B = o.flag,
                    R = o.flagValidationFailed,
                    L = o.flagEdited,
                    M = o.bdBeforeLecturePeriod,
                    V = o.bdBeforeLecturePeriodValidationFailed,
                    U = o.bdBeforeLecturePeriodEdited,
                    J = o.bdDuringLecturePeriod,
                    _ = o.bdDuringLecturePeriodValidationFailed,
                    W = o.bdDuringLecturePeriodEdited,
                    q = o.bdDuringExamPeriod,
                    z = o.bdDuringExamPeriodValidationFailed,
                    G = o.bdDuringExamPeriodEdited,
                    H = o.preferredBdDuringLecturePeriod,
                    Y = o.preferredBdDuringLecturePeriodValidationFailed,
                    K = o.preferredBdDuringLecturePeriodEdited,
                    Q = (o.specialRoom, o.specialRoomValidationFailed),
                    Z = o.specialRoomEdited,
                    $ = o.language,
                    ee = o.languageValidationFailed,
                    te = o.languageEdited,
                    re = o.room,
                    ne = o.roomValidationFailed,
                    oe = o.roomEdited,
                    se = o.addingInProgress,
                    ce = o.addingError,
                    le = o.updatingInProgress,
                    de = o.updatingError,
                    ue = "",
                    je = "";
                  return (
                    r
                      ? ((ue = "Update a project"),
                        (je = "Project ID: ".concat(r.getID())))
                      : ((ue = "Create a new project"),
                        (je = "Enter project data")),
                    a
                      ? Object(n.jsxs)(Ut.a, {
                          open: a,
                          onClose: this.handleClose,
                          maxWidth: "xs",
                          children: [
                            Object(n.jsxs)(Jt.a, {
                              id: "form-dialog-title",
                              children: [
                                ue,
                                Object(n.jsx)(D.a, {
                                  className: t.closeButton,
                                  onClick: this.handleClose,
                                  children: Object(n.jsx)(Gt.a, {}),
                                }),
                              ],
                            }),
                            Object(n.jsxs)(_t.a, {
                              children: [
                                Object(n.jsx)(Wt.a, { children: je }),
                                Object(n.jsxs)("form", {
                                  className: t.root,
                                  noValidate: !0,
                                  autoComplete: "off",
                                  children: [
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "name",
                                      label: "Name:",
                                      value: i,
                                      onChange: this.textFieldValueChange,
                                      error: s,
                                      helperText: s
                                        ? "The name must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "status",
                                      label: "Status:",
                                      value: l,
                                      onChange: this.textFieldValueChange,
                                      error: d,
                                      helperText: d
                                        ? "The status must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "owner",
                                      label: "Owner:",
                                      value: j,
                                      onChange: this.textFieldValueChange,
                                      error: h,
                                      helperText: h
                                        ? "The owner must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "module",
                                      label: "Module:",
                                      value: b,
                                      onChange: this.textFieldValueChange,
                                      error: g,
                                      helperText: g
                                        ? "The Module must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "project_type",
                                      label: "Project Type:",
                                      value: f,
                                      onChange: this.textFieldValueChange,
                                      error: m,
                                      helperText: m
                                        ? "The project type must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "semester",
                                      label: "Semester:",
                                      value: P,
                                      onChange: this.textFieldValueChange,
                                      error: y,
                                      helperText: y
                                        ? "The semester must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "capacity",
                                      label: "Capacity:",
                                      value: S,
                                      onChange: this.textFieldValueChange,
                                      error: C,
                                      helperText: C
                                        ? "The capacity must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "externalPartnerList",
                                      label: "External PartnerList:",
                                      value: k,
                                      onChange: this.textFieldValueChange,
                                      error: I,
                                      helperText: I
                                        ? "The external PartnerList must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "shortDescription",
                                      label: "Short Description:",
                                      value: E,
                                      onChange: this.textFieldValueChange,
                                      error: T,
                                      helperText: T
                                        ? "The short description must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "flag",
                                      label: "Flag:",
                                      value: B,
                                      onChange: this.textFieldValueChange,
                                      error: R,
                                      helperText: R
                                        ? "The flag must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "bdBeforeLecturePeriod",
                                      label: "BlockDays before lecture period:",
                                      value: M,
                                      onChange: this.textFieldValueChange,
                                      error: V,
                                      helperText: V
                                        ? "You must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "bdDuringLecturePeriod",
                                      label: "BlockDays during lecture period:",
                                      value: J,
                                      onChange: this.textFieldValueChange,
                                      error: _,
                                      helperText: _
                                        ? "You must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "bdDuringExamPeriod",
                                      label: "BlockDays during exam period :",
                                      value: q,
                                      onChange: this.textFieldValueChange,
                                      error: z,
                                      helperText: z
                                        ? "You must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "preferredBdDuringLecturePeriod",
                                      label:
                                        "Preferred BlockDays during lecture period:",
                                      value: H,
                                      onChange: this.textFieldValueChange,
                                      error: Y,
                                      helperText: Y
                                        ? "You must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "language",
                                      label: "Language:",
                                      value: $,
                                      onChange: this.textFieldValueChange,
                                      error: ee,
                                      helperText: ee
                                        ? "The language must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "room",
                                      label: "Room:",
                                      value: re,
                                      onChange: this.textFieldValueChange,
                                      error: ne,
                                      helperText: ne
                                        ? "The room must contain at least one character"
                                        : " ",
                                    }),
                                  ],
                                }),
                                Object(n.jsx)(X, { show: se || le }),
                                r
                                  ? Object(n.jsx)(ae, {
                                      error: de,
                                      contextErrorMsg: "The project ".concat(
                                        r.getID(),
                                        " could not be updated."
                                      ),
                                      onReload: this.updateProject,
                                    })
                                  : Object(n.jsx)(ae, {
                                      error: ce,
                                      contextErrorMsg:
                                        "The project could not be added.",
                                      onReload: this.addProject,
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(qt.a, {
                              children: [
                                Object(n.jsx)(A.a, {
                                  onClick: this.handleClose,
                                  color: "secondary",
                                  children: "Cancel",
                                }),
                                r
                                  ? Object(n.jsx)(A.a, {
                                      disabled:
                                        s ||
                                        d ||
                                        h ||
                                        g ||
                                        m ||
                                        y ||
                                        C ||
                                        I ||
                                        T ||
                                        R ||
                                        V ||
                                        _ ||
                                        z ||
                                        Y ||
                                        Q ||
                                        ee ||
                                        ne,
                                      variant: "contained",
                                      onClick: this.updateProject,
                                      color: "primary",
                                      children: "Update",
                                    })
                                  : Object(n.jsx)(A.a, {
                                      disabled:
                                        s ||
                                        !c ||
                                        d ||
                                        !u ||
                                        h ||
                                        !p ||
                                        g ||
                                        !O ||
                                        m ||
                                        !x ||
                                        y ||
                                        !v ||
                                        C ||
                                        !w ||
                                        I ||
                                        !F ||
                                        T ||
                                        !N ||
                                        R ||
                                        !L ||
                                        V ||
                                        !U ||
                                        _ ||
                                        !W ||
                                        z ||
                                        !G ||
                                        Y ||
                                        !K ||
                                        Q ||
                                        !Z ||
                                        ee ||
                                        !te ||
                                        ne ||
                                        !oe,
                                      variant: "contained",
                                      onClick: this.addProject,
                                      color: "primary",
                                      children: "Add",
                                    }),
                              ],
                            }),
                          ],
                        })
                      : null
                  );
                },
              },
            ]),
            r
          );
        })(a.Component),
        sr = Object(M.a)(function (e) {
          return {
            root: { width: "100%" },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(ir),
        cr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).deleteProject = function () {
                Mt.getApi()
                  .deleteProject(n.props.project.getID())
                  .then(function (e) {
                    n.setState({ deletingInProgress: !1, deletingError: null }),
                      n.props.onClose(n.props.project);
                  })
                  .catch(function (e) {
                    return n.setState({
                      deletingInProgress: !1,
                      deletingError: e,
                    });
                  }),
                  n.setState({ deletingInProgress: !0, deletingError: null });
              }),
              (n.handleClose = function () {
                n.props.onClose(null);
              }),
              (n.state = { deletingInProgress: !1, deletingError: null }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.project,
                    a = e.show,
                    o = this.state,
                    i = o.deletingInProgress,
                    s = o.deletingError;
                  return a
                    ? Object(n.jsxs)(Ut.a, {
                        open: a,
                        onClose: this.handleClose,
                        children: [
                          Object(n.jsxs)(Jt.a, {
                            id: "delete-dialog-title",
                            children: [
                              "Delete project",
                              Object(n.jsx)(D.a, {
                                className: t.closeButton,
                                onClick: this.handleClose,
                                children: Object(n.jsx)(Gt.a, {}),
                              }),
                            ],
                          }),
                          Object(n.jsxs)(_t.a, {
                            children: [
                              Object(n.jsxs)(Wt.a, {
                                children: [
                                  "Really delete project ",
                                  r.getName(),
                                  "?",
                                ],
                              }),
                              Object(n.jsx)(X, { show: i }),
                              Object(n.jsx)(ae, {
                                error: s,
                                contextErrorMsg: "The project   "
                                  .concat(r.getName(), " ' (ID: ")
                                  .concat(r.getID(), ") could not be deleted."),
                                onReload: this.deleteProject,
                              }),
                            ],
                          }),
                          Object(n.jsxs)(qt.a, {
                            children: [
                              Object(n.jsx)(A.a, {
                                onClick: this.handleClose,
                                color: "secondary",
                                children: "Cancel",
                              }),
                              Object(n.jsx)(A.a, {
                                variant: "contained",
                                onClick: this.deleteProject,
                                color: "primary",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        lr = Object(M.a)(function (e) {
          return {
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(cr),
        dr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).editProjectButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showProjectForm: !0 });
              }),
              (n.projectFormClosed = function (e) {
                e
                  ? n.setState({ project: e, showProjectForm: !1 })
                  : n.setState({ showProjectForm: !1 });
              }),
              (n.deleteProjectButtonClicked = function (e) {
                e.stopPropagation(),
                  n.setState({ showProjectDeleteDialog: !0 });
              }),
              (n.deleteProjectDialogClosed = function (e) {
                e && n.props.onProjectDeleted(e),
                  n.setState({ showProjectDeleteDialog: !1 });
              }),
              (n.state = {
                project: e.project,
                showProjectForm: !1,
                showProjectDeleteDialog: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state,
                    r = t.project,
                    a = t.showProjectForm,
                    o = t.showProjectDeleteDialog;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(Kt.a, {
                        children: Object(n.jsx)(Qt.a, {
                          id: "project".concat(
                            r.getID(),
                            "projectpanel-header"
                          ),
                          children: Object(n.jsxs)(L.a, {
                            container: !0,
                            spacing: 1,
                            justify: "flex-start",
                            alignItems: "center",
                            children: [
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(C.a, {
                                  variant: "body1",
                                  className: e.heading,
                                  children: [
                                    "Projet-ID:      ",
                                    r.getID(),
                                    ", ",
                                    Object(n.jsx)("br", {}),
                                    "Projektname:    ",
                                    r.getName(),
                                    ", ",
                                    Object(n.jsx)("br", {}),
                                    "Modul:          ",
                                    r.getOwner(),
                                    Object(n.jsx)("br", {}),
                                    "Projekt-Typ:    ",
                                    r.getProjectType(),
                                    Object(n.jsx)("br", {}),
                                    "Semester:       ",
                                    r.getSemester(),
                                    Object(n.jsx)("br", {}),
                                    "Projektinhaber: ",
                                    r.getOwner(),
                                    Object(n.jsx)("br", {}),
                                    "Partner:        ",
                                    r.getExternalPartnerList(),
                                    Object(n.jsx)("br", {}),
                                    "Status:         ",
                                    r.getOwner(),
                                    Object(n.jsx)("br", {}),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(Xt.a, {
                                  variant: "text",
                                  size: "small",
                                  children: [
                                    Object(n.jsx)(A.a, {
                                      color: "primary",
                                      onClick: this.editProjectButtonClicked,
                                      children: "edit",
                                    }),
                                    Object(n.jsx)(A.a, {
                                      color: "secondary",
                                      onClick: this.deleteProjectButtonClicked,
                                      children: "delete",
                                    }),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                            ],
                          }),
                        }),
                      }),
                      Object(n.jsx)(sr, {
                        show: a,
                        project: r,
                        onClose: this.projectFormClosed,
                      }),
                      Object(n.jsx)(lr, {
                        show: o,
                        project: r,
                        onClose: this.deleteProjectDialogClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        ur = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(dr),
        jr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getProjects = function () {
                Mt.getApi()
                  .getProjects()
                  .then(function (e) {
                    return n.setState({
                      projects: e,
                      filteredProjects: Object(oe.a)(e),
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      projects: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  }),
                  n.setState({ loadingInProgress: !0, error: null });
              }),
              (n.projectDeleted = function (e) {
                var t = n.state.projects.filter(function (t) {
                  return t.getID() !== e.getID();
                });
                n.setState({
                  projects: t,
                  filteredProjects: Object(oe.a)(t),
                  showProjectForm: !1,
                });
              }),
              (n.addProjectButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showProjectForm: !0 });
              }),
              (n.projectFormClosed = function (e) {
                if (e) {
                  var t = [].concat(Object(oe.a)(n.state.projects), [e]);
                  n.setState({
                    projects: t,
                    filteredProjects: Object(oe.a)(t),
                    showProjectForm: !1,
                  });
                } else n.setState({ showProjectForm: !1 });
              }),
              (n.filterFieldValueChange = function (e) {
                var t = e.target.value.toLowerCase();
                n.setState({
                  filteredProjects: n.state.projects.filter(function (e) {
                    var r = e.getStatus().toLowerCase().includes(t),
                      n = e.getOwner().toLowerCase().includes(t),
                      a = e.getModule().toLowerCase().includes(t),
                      o = e.getProjectType().toLowerCase().includes(t),
                      i = e.getSemester().toLowerCase().includes(t),
                      s = e.getCapacity().toLowerCase().includes(t),
                      c = e.getExternalPartnerList().toLowerCase().includes(t),
                      l = e.getShortDescription().toLowerCase().includes(t),
                      d = e.getFlag().toLowerCase().includes(t),
                      u = e
                        .getBdBeforeLecturePeriod()
                        .toLowerCase()
                        .includes(t),
                      j = e
                        .getBdDuringLecturePeriod()
                        .toLowerCase()
                        .includes(t),
                      h = e.getBdDuringExamPeriod().toLowerCase().includes(t),
                      p = e.getPreferredBdDuringLecturePeriod
                        .toLowerCase()
                        .includes(t),
                      b = e.getSpecialRoom().toLowerCase().includes(t),
                      g = e.getLanguage().toLowerCase().includes(t),
                      O = e.getRoom().toLowerCase().includes(t);
                    return (
                      r ||
                      n ||
                      a ||
                      o ||
                      i ||
                      s ||
                      c ||
                      l ||
                      d ||
                      u ||
                      j ||
                      h ||
                      p ||
                      b ||
                      g ||
                      O
                    );
                  }),
                  projectFilter: t,
                });
              }),
              (n.clearFilterFieldButtonClicked = function () {
                n.setState({
                  filteredProjects: Object(oe.a)(n.state.projects),
                  projectFilter: "",
                });
              }),
              (n.state = {
                projects: [],
                filteredProjects: [],
                ProjectFilter: "",
                error: null,
                loadingInProgress: !1,
                showProjectForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getProjects();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    r = this.state,
                    a = r.filteredProjects,
                    o = r.projectFilter,
                    i = r.loadingInProgress,
                    s = r.error,
                    c = r.showProjectForm;
                  return Object(n.jsxs)("div", {
                    className: t.root,
                    children: [
                      Object(n.jsxs)(L.a, {
                        className: t.projectFilter,
                        container: !0,
                        spacing: 1,
                        justify: "flex-start",
                        alignItems: "center",
                        children: [
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(C.a, {
                              children: "Filter project list by name:",
                            }),
                          }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            xs: 4,
                            children: Object(n.jsx)(ie.a, {
                              autoFocus: !0,
                              fullWidth: !0,
                              id: "projectFilter",
                              type: "text",
                              value: o,
                              onChange: this.filterFieldValueChange,
                              InputProps: {
                                endAdornment: Object(n.jsx)(se.a, {
                                  position: "end",
                                  children: Object(n.jsx)(D.a, {
                                    onClick: this.clearFilterFieldButtonClicked,
                                    children: Object(n.jsx)(ue.a, {}),
                                  }),
                                }),
                              },
                            }),
                          }),
                          Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(A.a, {
                              variant: "contained",
                              color: "primary",
                              startIcon: Object(n.jsx)(le.a, {}),
                              onClick: this.addProjectButtonClicked,
                              children: "Add Project",
                            }),
                          }),
                        ],
                      }),
                      a.map(function (t) {
                        return Object(n.jsx)(
                          ur,
                          { project: t, onProjectDeleted: e.projectDeleted },
                          t.getID()
                        );
                      }),
                      Object(n.jsx)(X, { show: i }),
                      Object(n.jsx)(ae, {
                        error: s,
                        contextErrorMsg:
                          "The list of projects could not be loaded.",
                        onReload: this.getProjects,
                      }),
                      Object(n.jsx)(sr, {
                        show: c,
                        onClose: this.projectFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        hr = Object(h.f)(
          Object(M.a)(function (e) {
            return {
              root: { width: "100%" },
              ProjectFilter: {
                marginTop: e.spacing(2),
                marginBottom: e.spacing(1),
              },
            };
          })(jr)
        ),
        pr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).addPerson = function () {
                var e = new xe();
                e.setName(n.state.name),
                  e.setRole(n.state.role),
                  Mt.getApi()
                    .addPerson(e)
                    .then(function (e) {
                      n.setState(n.baseState), n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.updatePerson = function () {
                var e = Object.assign(new xe(), n.props.person);
                e.setName(n.state.name),
                  e.setRole(n.state.role),
                  Mt.getApi()
                    .updatePerson(e)
                    .then(function (t) {
                      n.setState({
                        updatingInProgress: !1,
                        updatingError: null,
                      }),
                        (n.baseState.name = n.state.name),
                        (n.baseState.role = n.state.role),
                        n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.textFieldValueChange = function (e) {
                var t,
                  r = !1;
                0 === e.target.value.trim().length && (r = !0),
                  n.setState(
                    ((t = {}),
                    Object(Vt.a)(t, e.target.id, e.target.value),
                    Object(Vt.a)(t, e.target.id + "ValidationFailed", r),
                    Object(Vt.a)(t, e.target.id + "Edited", !0),
                    t)
                  );
              }),
              (n.handleClose = function () {
                n.setState(n.baseState), n.props.onClose(null);
              });
            var a = "",
              o = "";
            return (
              e.person && ((a = e.person.getName()), (o = e.person.getRole())),
              (n.state = {
                name: a,
                nameValidationFailed: !1,
                nameEdited: !1,
                role: o,
                roleValidationFailed: !1,
                roleEdited: !1,
                addingInProgress: !1,
                updatingInProgress: !1,
                addingError: null,
                updatingError: null,
              }),
              (n.baseState = n.state),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.person,
                    a = e.show,
                    o = this.state,
                    i = o.name,
                    s = o.nameValidationFailed,
                    c = o.nameEdited,
                    l = o.role,
                    d = o.roleValidationFailed,
                    u = o.roleEdited,
                    j = o.addingInProgress,
                    h = o.addingError,
                    p = o.updatingInProgress,
                    b = o.updatingError,
                    g = "",
                    O = "";
                  return (
                    r
                      ? ((g = "Update a person"),
                        (O = "Person ID: ".concat(r.getID())))
                      : ((g = "Create a new person"),
                        (O = "Enter person data")),
                    a
                      ? Object(n.jsxs)(Ut.a, {
                          open: a,
                          onClose: this.handleClose,
                          maxWidth: "xs",
                          children: [
                            Object(n.jsxs)(Jt.a, {
                              id: "form-dialog-title",
                              children: [
                                g,
                                Object(n.jsx)(D.a, {
                                  className: t.closeButton,
                                  onClick: this.handleClose,
                                  children: Object(n.jsx)(Gt.a, {}),
                                }),
                              ],
                            }),
                            Object(n.jsxs)(_t.a, {
                              children: [
                                Object(n.jsx)(Wt.a, { children: O }),
                                Object(n.jsxs)("form", {
                                  className: t.root,
                                  noValidate: !0,
                                  autoComplete: "off",
                                  children: [
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "name",
                                      label: "Name:",
                                      value: i,
                                      onChange: this.textFieldValueChange,
                                      error: s,
                                      helperText: s
                                        ? "The name must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "role",
                                      label: "Role:",
                                      value: l,
                                      onChange: this.textFieldValueChange,
                                      error: d,
                                      helperText: d
                                        ? "The role must contain at least one character"
                                        : " ",
                                    }),
                                  ],
                                }),
                                Object(n.jsx)(X, { show: j || p }),
                                r
                                  ? Object(n.jsx)(ae, {
                                      error: b,
                                      contextErrorMsg: "The person ".concat(
                                        r.getID(),
                                        " could not be updated."
                                      ),
                                      onReload: this.updatePerson,
                                    })
                                  : Object(n.jsx)(ae, {
                                      error: h,
                                      contextErrorMsg:
                                        "The person could not be added.",
                                      onReload: this.addPerson,
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(qt.a, {
                              children: [
                                Object(n.jsx)(A.a, {
                                  onClick: this.handleClose,
                                  color: "secondary",
                                  children: "Cancel",
                                }),
                                r
                                  ? Object(n.jsx)(A.a, {
                                      disabled: s || d,
                                      variant: "contained",
                                      onClick: this.updatePerson,
                                      color: "primary",
                                      children: "Update",
                                    })
                                  : Object(n.jsx)(A.a, {
                                      disabled: s || !c || d || !u,
                                      variant: "contained",
                                      onClick: this.addPerson,
                                      color: "primary",
                                      children: "Add",
                                    }),
                              ],
                            }),
                          ],
                        })
                      : null
                  );
                },
              },
            ]),
            r
          );
        })(a.Component),
        br = Object(M.a)(function (e) {
          return {
            root: { width: "100%" },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(pr),
        gr = r(309),
        Or = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).deletePerson = function () {
                Mt.getApi()
                  .deletePerson(n.props.person.getID())
                  .then(function (e) {
                    n.setState({ deletingInProgress: !1, deletingError: null }),
                      n.props.onClose(n.props.person);
                  })
                  .catch(function (e) {
                    return n.setState({
                      deletingInProgress: !1,
                      deletingError: e,
                    });
                  }),
                  n.setState({ deletingInProgress: !0, deletingError: null });
              }),
              (n.handleClose = function () {
                n.props.onClose(null);
              }),
              (n.state = { deletingInProgress: !1, deletingError: null }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.person,
                    a = e.show,
                    o = this.state,
                    i = o.deletingInProgress,
                    s = o.deletingError;
                  return a
                    ? Object(n.jsxs)(Ut.a, {
                        open: a,
                        onClose: this.handleClose,
                        children: [
                          Object(n.jsxs)(Jt.a, {
                            id: "delete-dialog-title",
                            children: [
                              "Delete person",
                              Object(n.jsx)(D.a, {
                                className: t.closeButton,
                                onClick: this.handleClose,
                                children: Object(n.jsx)(Gt.a, {}),
                              }),
                            ],
                          }),
                          Object(n.jsxs)(_t.a, {
                            children: [
                              Object(n.jsxs)(Wt.a, {
                                children: [
                                  "Really delete person '",
                                  r.getRole(),
                                  "' (ID: ",
                                  r.getID(),
                                  ")?",
                                ],
                              }),
                              Object(n.jsx)(X, { show: i }),
                              Object(n.jsx)(ae, {
                                error: s,
                                contextErrorMsg: "The person '"
                                  .concat(r.getRole(), "' (ID: ")
                                  .concat(r.getID(), ") could not be deleted."),
                                onReload: this.deletePerson,
                              }),
                            ],
                          }),
                          Object(n.jsxs)(qt.a, {
                            children: [
                              Object(n.jsx)(A.a, {
                                onClick: this.handleClose,
                                color: "secondary",
                                children: "Cancel",
                              }),
                              Object(n.jsx)(A.a, {
                                variant: "contained",
                                onClick: this.deletePerson,
                                color: "primary",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        fr = Object(M.a)(function (e) {
          return {
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(Or),
        mr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).expansionPanelStateChanged = function () {
                n.props.onExpandedStateChange(n.props.person);
              }),
              (n.editPersonButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showPersonForm: !0 });
              }),
              (n.personFormClosed = function (e) {
                e
                  ? n.setState({ person: e, showPersonForm: !1 })
                  : n.setState({ showPersonForm: !1 });
              }),
              (n.deletePersonButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showPersonDeleteDialog: !0 });
              }),
              (n.deletePersonDialogClosed = function (e) {
                e && n.props.onPersonDeleted(e),
                  n.setState({ showPersonDeleteDialog: !1 });
              }),
              (n.state = {
                person: e.person,
                showPersonForm: !1,
                showPersonDeleteDialog: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.expandedState,
                    a = this.state,
                    o = a.person,
                    i = a.showPersonForm,
                    s = a.showPersonDeleteDialog;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsxs)(Kt.a, {
                        defaultExpanded: !1,
                        expanded: r,
                        onChange: this.expansionPanelStateChanged,
                        children: [
                          Object(n.jsx)(Qt.a, {
                            expandIcon: Object(n.jsx)($t.a, {}),
                            id: "person".concat(
                              o.getID(),
                              "personpanel-header"
                            ),
                            children: Object(n.jsxs)(L.a, {
                              container: !0,
                              spacing: 1,
                              justify: "flex-start",
                              alignItems: "center",
                              children: [
                                Object(n.jsx)(L.a, {
                                  item: !0,
                                  children: Object(n.jsxs)(C.a, {
                                    variant: "body1",
                                    className: t.heading,
                                    children: [
                                      "Name:   ",
                                      o.getName(),
                                      Object(n.jsx)("br", {}),
                                      "Rolle:  ",
                                      o.getRole(),
                                      Object(n.jsx)("br", {}),
                                    ],
                                  }),
                                }),
                                Object(n.jsx)(L.a, {
                                  item: !0,
                                  children: Object(n.jsxs)(Xt.a, {
                                    variant: "text",
                                    size: "small",
                                    children: [
                                      Object(n.jsx)(A.a, {
                                        color: "primary",
                                        onClick: this.editPersonButtonClicked,
                                        children: "edit",
                                      }),
                                      Object(n.jsx)(A.a, {
                                        color: "secondary",
                                        onClick: this.deletePersonButtonClicked,
                                        children: "delete",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                                Object(n.jsx)(L.a, {
                                  item: !0,
                                  children: Object(n.jsx)(C.a, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    children: "List of project",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          Object(n.jsx)(gr.a, {
                            children: Object(n.jsx)(hr, { show: r, person: o }),
                          }),
                        ],
                      }),
                      Object(n.jsx)(br, {
                        show: i,
                        person: o,
                        onClose: this.personFormClosed,
                      }),
                      Object(n.jsx)(fr, {
                        show: s,
                        person: o,
                        onClose: this.deletePersonDialogClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        xr = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(mr),
        Pr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getPersons = function () {
                Mt.getApi()
                  .getPersons()
                  .then(function (e) {
                    return n.setState({
                      persons: e,
                      filteredPersons: Object(oe.a)(e),
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      persons: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  }),
                  n.setState({ loadingInProgress: !0, error: null });
              }),
              (n.personDeleted = function (e) {
                var t = n.state.persons.filter(function (t) {
                  return t.getID() !== e.getID();
                });
                n.setState({
                  persons: t,
                  filteredPersons: Object(oe.a)(t),
                  showPersonForm: !1,
                });
              }),
              (n.addPersonButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showPersonForm: !0 });
              }),
              (n.personFormClosed = function (e) {
                if (e) {
                  var t = [].concat(Object(oe.a)(n.state.persons), [e]);
                  n.setState({
                    persons: t,
                    filteredPersons: Object(oe.a)(t),
                    showPersonForm: !1,
                  });
                } else n.setState({ showPersonForm: !1 });
              }),
              (n.filterFieldValueChange = function (e) {
                var t = e.target.value.toLowerCase();
                n.setState({
                  filteredPersons: n.state.persons.filter(function (e) {
                    var r = e.getName().toLowerCase().includes(t),
                      n =
                        (e.getEmail().toLowerCase().includes(t),
                        e.getGoogleUserId().toLowerCase().includes(t));
                    return r || n;
                  }),
                  personFilter: t,
                });
              }),
              (n.clearFilterFieldButtonClicked = function () {
                n.setState({
                  filteredPersons: Object(oe.a)(n.state.persons),
                  personFilter: "",
                });
              }),
              (n.state = {
                persons: [],
                filteredPersons: [],
                personFilter: "",
                error: null,
                loadingInProgress: !1,
                showPersonForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getPersons();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    r = this.state,
                    a = r.filteredPersons,
                    o = r.personFilter,
                    i = (r.expandedPersonID, r.loadingInProgress),
                    s = r.error,
                    c = r.showPersonForm;
                  return Object(n.jsxs)("div", {
                    className: t.root,
                    children: [
                      Object(n.jsxs)(L.a, {
                        className: t.personFilter,
                        container: !0,
                        spacing: 1,
                        justify: "flex-start",
                        alignItems: "center",
                        children: [
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(C.a, {
                              children: "Filter person list by name:",
                            }),
                          }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            xs: 4,
                            children: Object(n.jsx)(ie.a, {
                              autoFocus: !0,
                              fullWidth: !0,
                              id: "personFilter",
                              type: "text",
                              value: o,
                              onChange: this.filterFieldValueChange,
                              InputProps: {
                                endAdornment: Object(n.jsx)(se.a, {
                                  position: "end",
                                  children: Object(n.jsx)(D.a, {
                                    onClick: this.clearFilterFieldButtonClicked,
                                    children: Object(n.jsx)(ue.a, {}),
                                  }),
                                }),
                              },
                            }),
                          }),
                          Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(A.a, {
                              variant: "contained",
                              color: "primary",
                              startIcon: Object(n.jsx)(le.a, {}),
                              onClick: this.addPersonButtonClicked,
                              children: "Add Person",
                            }),
                          }),
                        ],
                      }),
                      a.map(function (t) {
                        return Object(n.jsx)(
                          xr,
                          { person: t, onPersonDeleted: e.personDeleted },
                          t.getID()
                        );
                      }),
                      Object(n.jsx)(X, { show: i }),
                      Object(n.jsx)(ae, {
                        error: s,
                        contextErrorMsg:
                          "The list of persons could not be loaded.",
                        onReload: this.getPersons,
                      }),
                      Object(n.jsx)(br, {
                        show: c,
                        onClose: this.personFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        vr = Object(h.f)(
          Object(M.a)(function (e) {
            return {
              root: { width: "100%" },
              personFilter: {
                marginTop: e.spacing(2),
                marginBottom: e.spacing(1),
              },
            };
          })(Pr)
        ),
        yr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).addSemester = function () {
                var e = new fe();
                e.setName(n.state.name),
                  e.setStart(n.state.start),
                  e.setEnd(n.state.end),
                  Mt.getApi()
                    .addSemester(e)
                    .then(function (e) {
                      n.setState(n.baseState), n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.updateSemester = function () {
                var e = Object.assign(new fe(), n.props.semester);
                e.setName(n.state.name),
                  e.setStart(n.state.start),
                  e.setEnd(n.state.end),
                  Mt.getApi()
                    .updateSemester(e)
                    .then(function (t) {
                      n.setState({
                        updatingInProgress: !1,
                        updatingError: null,
                      }),
                        (n.baseState.name = n.state.name),
                        (n.baseState.start = n.state.start),
                        (n.baseState.end = n.state.end),
                        n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.textFieldValueChange = function (e) {
                var t,
                  r = !1;
                0 === e.target.value.trim().length && (r = !0),
                  n.setState(
                    ((t = {}),
                    Object(Vt.a)(t, e.target.id, e.target.value),
                    Object(Vt.a)(t, e.target.id + "ValidationFailed", r),
                    Object(Vt.a)(t, e.target.id + "Edited", !0),
                    t)
                  );
              }),
              (n.handleClose = function () {
                n.setState(n.baseState), n.props.onClose(null);
              });
            var a = "",
              o = "",
              i = "";
            return (
              e.semester &&
                ((a = e.semester.getName()),
                (o = e.semester.getStart()),
                (i = e.semester.getEnd())),
              (n.state = {
                name: a,
                nameValidationFailed: !1,
                nameEdited: !1,
                start: o,
                startValidationFailed: !1,
                startEdited: !1,
                end: i,
                endValidationFailed: !1,
                endEdited: !1,
                addingInProgress: !1,
                updatingInProgress: !1,
                addingError: null,
                updatingError: null,
              }),
              (n.baseState = n.state),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.semester,
                    a = e.show,
                    o = this.state,
                    i = o.name,
                    s = o.nameValidationFailed,
                    c = o.nameEdited,
                    l = o.start,
                    d = o.startValidationFailed,
                    u = o.startEdited,
                    j = o.end,
                    h = o.endValidationFailed,
                    p = o.endEdited,
                    b = o.addingInProgress,
                    g = o.addingError,
                    O = o.updatingInProgress,
                    f = o.updatingError,
                    m = "",
                    x = "";
                  return (
                    r
                      ? ((m = "Update a semester"),
                        (x = "Semester ID: "
                          .concat(r.getID(), " / Start: ")
                          .concat(r.getStart(), " / End: ")
                          .concat(r.getEnd())))
                      : ((m = "Create a new semester"),
                        (x = "Enter semester data")),
                    a
                      ? Object(n.jsxs)(Ut.a, {
                          open: a,
                          onClose: this.handleClose,
                          maxWidth: "xs",
                          children: [
                            Object(n.jsxs)(Jt.a, {
                              id: "form-dialog-title",
                              children: [
                                m,
                                Object(n.jsx)(D.a, {
                                  className: t.closeButton,
                                  onClick: this.handleClose,
                                  children: Object(n.jsx)(Gt.a, {}),
                                }),
                              ],
                            }),
                            Object(n.jsxs)(_t.a, {
                              children: [
                                Object(n.jsx)(Wt.a, { children: x }),
                                Object(n.jsxs)("form", {
                                  className: t.root,
                                  noValidate: !0,
                                  autoComplete: "off",
                                  children: [
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "name",
                                      label: "Name:",
                                      value: i,
                                      onChange: this.textFieldValueChange,
                                      error: s,
                                      helperText: s
                                        ? "The name must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "datetime-local",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "start",
                                      label: "Start:",
                                      value: l,
                                      onChange: this.textFieldValueChange,
                                      error: d,
                                      helperText: d
                                        ? "The start must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "datetime-local",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "end",
                                      label: "End:",
                                      value: j,
                                      onChange: this.textFieldValueChange,
                                      error: h,
                                      helperText: h
                                        ? "The End must contain at least one character"
                                        : " ",
                                    }),
                                  ],
                                }),
                                Object(n.jsx)(X, { show: b || O }),
                                r
                                  ? Object(n.jsx)(ae, {
                                      error: f,
                                      contextErrorMsg: "The semester ".concat(
                                        r.getID(),
                                        " could not be updated."
                                      ),
                                      onReload: this.updateSemester,
                                    })
                                  : Object(n.jsx)(ae, {
                                      error: g,
                                      contextErrorMsg:
                                        "The semester could not be added.",
                                      onReload: this.addSemester,
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(qt.a, {
                              children: [
                                Object(n.jsx)(A.a, {
                                  onClick: this.handleClose,
                                  color: "secondary",
                                  children: "Cancel",
                                }),
                                r
                                  ? Object(n.jsx)(A.a, {
                                      disabled: s || d || h,
                                      variant: "contained",
                                      onClick: this.updateSemester,
                                      color: "primary",
                                      children: "Update",
                                    })
                                  : Object(n.jsx)(A.a, {
                                      disabled: s || !c || d || !u || h || !p,
                                      variant: "contained",
                                      onClick: this.addSemester,
                                      color: "primary",
                                      children: "Add",
                                    }),
                              ],
                            }),
                          ],
                        })
                      : null
                  );
                },
              },
            ]),
            r
          );
        })(a.Component),
        Sr = Object(M.a)(function (e) {
          return {
            root: { width: "100%" },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(yr),
        Cr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).deleteSemester = function () {
                Mt.getApi()
                  .deleteSemester(n.props.semester.getID())
                  .then(function (e) {
                    n.setState({ deletingInProgress: !1, deletingError: null }),
                      n.props.onClose(n.props.semester);
                  })
                  .catch(function (e) {
                    return n.setState({
                      deletingInProgress: !1,
                      deletingError: e,
                    });
                  }),
                  n.setState({ deletingInProgress: !0, deletingError: null });
              }),
              (n.handleClose = function () {
                n.props.onClose(null);
              }),
              (n.state = { deletingInProgress: !1, deletingError: null }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.semester,
                    a = e.show,
                    o = this.state,
                    i = o.deletingInProgress,
                    s = o.deletingError;
                  return a
                    ? Object(n.jsxs)(Ut.a, {
                        open: a,
                        onClose: this.handleClose,
                        children: [
                          Object(n.jsxs)(Jt.a, {
                            id: "delete-dialog-title",
                            children: [
                              "Delete semester",
                              Object(n.jsx)(D.a, {
                                className: t.closeButton,
                                onClick: this.handleClose,
                                children: Object(n.jsx)(Gt.a, {}),
                              }),
                            ],
                          }),
                          Object(n.jsxs)(_t.a, {
                            children: [
                              Object(n.jsxs)(Wt.a, {
                                children: [
                                  "Really delete semester ",
                                  Object(n.jsx)("br", {}),
                                  Object(n.jsx)("br", {}),
                                  " Name: ",
                                  r.getName(),
                                  "? ",
                                  Object(n.jsx)("br", {}),
                                  " Start: ",
                                  r.getStart(),
                                  "? ",
                                  Object(n.jsx)("br", {}),
                                  " End: ",
                                  r.getEnd(),
                                  "? ",
                                  Object(n.jsx)("br", {}),
                                  Object(n.jsx)("br", {}),
                                  "(ID: ",
                                  r.getID(),
                                  ")?",
                                ],
                              }),
                              Object(n.jsx)(X, { show: i }),
                              Object(n.jsx)(ae, {
                                error: s,
                                contextErrorMsg: "The semester '"
                                  .concat(r.getName(), " ")
                                  .concat(r.getStart(), " ")
                                  .concat(r.getEnd(), "' (ID: ")
                                  .concat(r.getID(), ") could not be deleted."),
                                onReload: this.deleteSemester,
                              }),
                            ],
                          }),
                          Object(n.jsxs)(qt.a, {
                            children: [
                              Object(n.jsx)(A.a, {
                                onClick: this.handleClose,
                                color: "secondary",
                                children: "Cancel",
                              }),
                              Object(n.jsx)(A.a, {
                                variant: "contained",
                                onClick: this.deleteSemester,
                                color: "primary",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        wr = Object(M.a)(function (e) {
          return {
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(Cr),
        kr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).expansionPanelStateChanged = function () {
                n.props.onExpandedStateChange(n.props.semester);
              }),
              (n.editSemesterButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showSemesterForm: !0 });
              }),
              (n.semesterFormClosed = function (e) {
                e
                  ? n.setState({ semester: e, showSemesterForm: !1 })
                  : n.setState({ showSemesterForm: !1 });
              }),
              (n.deleteSemesterButtonClicked = function (e) {
                e.stopPropagation(),
                  n.setState({ showSemesterDeleteDialog: !0 });
              }),
              (n.deleteSemesterDialogClosed = function (e) {
                e && n.props.onSemesterDeleted(e),
                  n.setState({ showSemesterDeleteDialog: !1 });
              }),
              (n.state = {
                semester: e.semester,
                showSemesterForm: !1,
                showSemesterDeleteDialog: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = (e.expandedState, this.state),
                    a = r.semester,
                    o = r.showSemesterForm,
                    i = r.showSemesterDeleteDialog;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(Kt.a, {
                        children: Object(n.jsx)(Qt.a, {
                          expandIcon: Object(n.jsx)($t.a, {}),
                          id: "semester".concat(
                            a.getID(),
                            "semesterpanel-header"
                          ),
                          children: Object(n.jsxs)(L.a, {
                            container: !0,
                            spacing: 1,
                            justify: "flex-start",
                            alignItems: "center",
                            children: [
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(C.a, {
                                  variant: "body1",
                                  className: t.heading,
                                  children: [
                                    "Semestername:   ",
                                    a.getName(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Beginn:         ",
                                    a.getStart(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Ende:           ",
                                    a.getEnd(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(Xt.a, {
                                  variant: "text",
                                  size: "small",
                                  children: [
                                    Object(n.jsx)(A.a, {
                                      color: "primary",
                                      onClick: this.editSemesterButtonClicked,
                                      children: "edit",
                                    }),
                                    Object(n.jsx)(A.a, {
                                      color: "secondary",
                                      onClick: this.deleteSemesterButtonClicked,
                                      children: "delete",
                                    }),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsx)(C.a, {
                                  variant: "body2",
                                  color: "textSecondary",
                                  children: "List of semester",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(n.jsx)(Sr, {
                        show: o,
                        semester: a,
                        onClose: this.semesterFormClosed,
                      }),
                      Object(n.jsx)(wr, {
                        show: i,
                        semester: a,
                        onClose: this.deleteSemesterDialogClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        Ir = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(kr),
        Fr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getSemesters = function () {
                Mt.getApi()
                  .getSemesters()
                  .then(function (e) {
                    return n.setState({
                      semester: e,
                      filteredSemesters: Object(oe.a)(e),
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      semester: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  }),
                  n.setState({ loadingInProgress: !0, error: null });
              }),
              (n.semesterDeleted = function (e) {
                var t = n.state.semester.filter(function (t) {
                  return t.getID() !== e.getID();
                });
                n.setState({
                  semester: t,
                  filteredSemesters: Object(oe.a)(t),
                  showSemesterForm: !1,
                });
              }),
              (n.addSemesterButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showSemesterForm: !0 });
              }),
              (n.semesterFormClosed = function (e) {
                if (e) {
                  var t = [].concat(Object(oe.a)(n.state.semester), [e]);
                  n.setState({
                    semester: t,
                    filteredSemesters: Object(oe.a)(t),
                    showSemesterForm: !1,
                  });
                } else n.setState({ showSemesterForm: !1 });
              }),
              (n.filterFieldValueChange = function (e) {
                var t = e.target.value.toLowerCase();
                n.setState({
                  filteredSemesters: n.state.semester.filter(function (e) {
                    var r = e.getName().toLowerCase().includes(t),
                      n = e.getStart().toLowerCase().includes(t),
                      a = e.getEnd().toLowerCase().includes(t);
                    return r || n || a;
                  }),
                  semesterFilter: t,
                });
              }),
              (n.clearFilterFieldButtonClicked = function () {
                n.setState({
                  filteredSemesters: Object(oe.a)(n.state.semester),
                  semesterFilter: "",
                });
              }),
              (n.state = {
                semester: [],
                filteredSemesters: [],
                semesterFilter: "",
                error: null,
                loadingInProgress: !1,
                showSemesterForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getSemesters();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    r = this.state,
                    a = r.semester,
                    o = r.semesterFilter,
                    i = r.loadingInProgress,
                    s = r.error,
                    c = r.showSemesterForm;
                  return Object(n.jsxs)("div", {
                    className: t.root,
                    children: [
                      Object(n.jsxs)(L.a, {
                        className: t.semesterFilter,
                        container: !0,
                        spacing: 1,
                        justify: "flex-start",
                        alignItems: "center",
                        children: [
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(C.a, {
                              children: "Filter semester list by name:",
                            }),
                          }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            xs: 4,
                            children: Object(n.jsx)(ie.a, {
                              autoFocus: !0,
                              fullWidth: !0,
                              id: "semesterFilter",
                              type: "text",
                              value: o,
                              onChange: this.filterFieldValueChange,
                              InputProps: {
                                endAdornment: Object(n.jsx)(se.a, {
                                  position: "end",
                                  children: Object(n.jsx)(D.a, {
                                    onClick: this.clearFilterFieldButtonClicked,
                                    children: Object(n.jsx)(ue.a, {}),
                                  }),
                                }),
                              },
                            }),
                          }),
                          Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(A.a, {
                              variant: "contained",
                              color: "primary",
                              startIcon: Object(n.jsx)(le.a, {}),
                              onClick: this.addSemesterButtonClicked,
                              children: "Add Semester",
                            }),
                          }),
                        ],
                      }),
                      a.map(function (t) {
                        return Object(n.jsx)(
                          Ir,
                          { semester: t, onSemesterDeleted: e.semesterDeleted },
                          t.getID()
                        );
                      }),
                      Object(n.jsx)(X, { show: i }),
                      Object(n.jsx)(ae, {
                        error: s,
                        contextErrorMsg:
                          "The list of semesters could not be loaded.",
                        onReload: this.getSemesters,
                      }),
                      Object(n.jsx)(Sr, {
                        show: c,
                        onClose: this.semesterFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        Er = Object(h.f)(
          Object(M.a)(function (e) {
            return {
              root: { width: "100%" },
              ProjectFilter: {
                marginTop: e.spacing(2),
                marginBottom: e.spacing(1),
              },
            };
          })(Fr)
        ),
        Dr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).addStudent = function () {
                var e = new Pe();
                e.setName(n.state.name),
                  e.setMatriculationNr(n.state.matriculationNr),
                  e.setCourseAbbr(n.state.courseAbbr),
                  Mt.getApi()
                    .addStudent(e)
                    .then(function (e) {
                      n.setState(n.baseState), n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.updateStudent = function () {
                var e = Object.assign(new Pe(), n.props.student);
                e.setName(n.state.name),
                  e.setCourseAbbr(n.state.courseAbbr),
                  e.setMatriculationNr(n.state.matriculationNr),
                  Mt.getApi()
                    .updateStudent(e)
                    .then(function (t) {
                      n.setState({
                        updatingInProgress: !1,
                        updatingError: null,
                      }),
                        (n.baseState.name = n.state.name),
                        (n.baseState.courseAbbr = n.state.courseAbbr),
                        (n.baseState.matriculationNr = n.state.matriculationNr),
                        n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.textFieldValueChange = function (e) {
                var t,
                  r = !1;
                0 === e.target.value.trim().length && (r = !0),
                  n.setState(
                    ((t = {}),
                    Object(Vt.a)(t, e.target.id, e.target.value),
                    Object(Vt.a)(t, e.target.id + "ValidationFailed", r),
                    Object(Vt.a)(t, e.target.id + "Edited", !0),
                    t)
                  );
              }),
              (n.handleClose = function () {
                n.setState(n.baseState), n.props.onClose(null);
              });
            var a = "",
              o = "",
              i = "";
            return (
              e.student &&
                ((a = e.student.getName()),
                (o = e.student.getCourseAbbr()),
                (i = e.student.getMatriculationNr())),
              (n.state = {
                name: a,
                nameValidationFailed: !1,
                nameEdited: !1,
                courseAbbr: o,
                courseAbbrValidationFailed: !1,
                courseAbbrEdited: !1,
                matriculationNr: i,
                matriculationNrValidationFailed: !1,
                matriculationNrEdited: !1,
                addingInProgress: !1,
                updatingInProgress: !1,
                addingError: null,
                updatingError: null,
              }),
              (n.baseState = n.state),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.student,
                    a = e.show,
                    o = this.state,
                    i = o.name,
                    s = o.nameValidationFailed,
                    c = o.nameEdited,
                    l = o.courseAbbr,
                    d = o.courseAbbrValidationFailed,
                    u = o.courseAbbrEdited,
                    j = o.matriculationNr,
                    h = o.matriculationNrValidationFailed,
                    p = o.matriculationNrEdited,
                    b = o.addingInProgress,
                    g = o.addingError,
                    O = o.updatingInProgress,
                    f = o.updatingError,
                    m = "",
                    x = "";
                  return (
                    r
                      ? ((m = "Update a student"),
                        (x = "Student ID: ".concat(r.getID())))
                      : ((m = "Create a new student"),
                        (x = "Enter student data")),
                    a
                      ? Object(n.jsxs)(Ut.a, {
                          open: a,
                          onClose: this.handleClose,
                          maxWidth: "xs",
                          children: [
                            Object(n.jsxs)(Jt.a, {
                              id: "form-dialog-title",
                              children: [
                                m,
                                Object(n.jsx)(D.a, {
                                  className: t.closeButton,
                                  onClick: this.handleClose,
                                  children: Object(n.jsx)(Gt.a, {}),
                                }),
                              ],
                            }),
                            Object(n.jsxs)(_t.a, {
                              children: [
                                Object(n.jsx)(Wt.a, { children: x }),
                                Object(n.jsxs)("form", {
                                  className: t.root,
                                  noValidate: !0,
                                  autoComplete: "off",
                                  children: [
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "name",
                                      label: "Name:",
                                      value: i,
                                      onChange: this.textFieldValueChange,
                                      error: s,
                                      helperText: s
                                        ? "The name must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "courseAbbr",
                                      label: "CourseAbbr:",
                                      value: l,
                                      onChange: this.textFieldValueChange,
                                      error: d,
                                      helperText: d
                                        ? "The Course Abbr must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "matriculationNr",
                                      label: "MatriculationNr:",
                                      value: j,
                                      onChange: this.textFieldValueChange,
                                      error: h,
                                      helperText: h
                                        ? "The matriculation number must contain at least one character"
                                        : " ",
                                    }),
                                  ],
                                }),
                                Object(n.jsx)(X, { show: b || O }),
                                r
                                  ? Object(n.jsx)(ae, {
                                      error: f,
                                      contextErrorMsg: "The student ".concat(
                                        r.getID(),
                                        " could not be updated."
                                      ),
                                      onReload: this.updateStudent,
                                    })
                                  : Object(n.jsx)(ae, {
                                      error: g,
                                      contextErrorMsg:
                                        "The student could not be added.",
                                      onReload: this.addStudent,
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(qt.a, {
                              children: [
                                Object(n.jsx)(A.a, {
                                  onClick: this.handleClose,
                                  color: "secondary",
                                  children: "Cancel",
                                }),
                                r
                                  ? Object(n.jsx)(A.a, {
                                      disabled: s || d || h,
                                      variant: "contained",
                                      onClick: this.updateStudent,
                                      color: "primary",
                                      children: "Update",
                                    })
                                  : Object(n.jsx)(A.a, {
                                      disabled: s || !c || d || !u || h || !p,
                                      variant: "contained",
                                      onClick: this.addStudent,
                                      color: "primary",
                                      children: "Add",
                                    }),
                              ],
                            }),
                          ],
                        })
                      : null
                  );
                },
              },
            ]),
            r
          );
        })(a.Component),
        Tr = Object(M.a)(function (e) {
          return {
            root: { width: "100%" },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(Dr),
        Nr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).deleteStudent = function () {
                Mt.getApi()
                  .deleteStudent(n.props.student.getID())
                  .then(function (e) {
                    n.setState({ deletingInProgress: !1, deletingError: null }),
                      n.props.onClose(n.props.student);
                  })
                  .catch(function (e) {
                    return n.setState({
                      deletingInProgress: !1,
                      deletingError: e,
                    });
                  }),
                  n.setState({ deletingInProgress: !0, deletingError: null });
              }),
              (n.handleClose = function () {
                n.props.onClose(null);
              }),
              (n.state = { deletingInProgress: !1, deletingError: null }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.student,
                    a = e.show,
                    o = this.state,
                    i = o.deletingInProgress,
                    s = o.deletingError;
                  return a
                    ? Object(n.jsxs)(Ut.a, {
                        open: a,
                        onClose: this.handleClose,
                        children: [
                          Object(n.jsxs)(Jt.a, {
                            id: "delete-dialog-title",
                            children: [
                              "Delete student",
                              Object(n.jsx)(D.a, {
                                className: t.closeButton,
                                onClick: this.handleClose,
                                children: Object(n.jsx)(Gt.a, {}),
                              }),
                            ],
                          }),
                          Object(n.jsxs)(_t.a, {
                            children: [
                              Object(n.jsxs)(Wt.a, {
                                children: [
                                  "Really delete student '",
                                  r.getCourseAbbr(),
                                  " ",
                                  r.getMatriculationNr(),
                                  "' (ID: ",
                                  r.getID(),
                                  ")?",
                                ],
                              }),
                              Object(n.jsx)(X, { show: i }),
                              Object(n.jsx)(ae, {
                                error: s,
                                contextErrorMsg: "The student '"
                                  .concat(r.getCourseAbbr(), " ")
                                  .concat(r.getMatriculationNr(), "' (ID: ")
                                  .concat(r.getID(), ") could not be deleted."),
                                onReload: this.deleteStudent,
                              }),
                            ],
                          }),
                          Object(n.jsxs)(qt.a, {
                            children: [
                              Object(n.jsx)(A.a, {
                                onClick: this.handleClose,
                                color: "secondary",
                                children: "Cancel",
                              }),
                              Object(n.jsx)(A.a, {
                                variant: "contained",
                                onClick: this.deleteStudent,
                                color: "primary",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        Br = Object(M.a)(function (e) {
          return {
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(Nr),
        Rr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).editStudentButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showStudentForm: !0 });
              }),
              (n.studentFormClosed = function (e) {
                e
                  ? n.setState({ student: e, showStudentForm: !1 })
                  : n.setState({ showStudentForm: !1 });
              }),
              (n.deleteStudentButtonClicked = function (e) {
                e.stopPropagation(),
                  n.setState({ showStudentDeleteDialog: !0 });
              }),
              (n.deleteStudentDialogClosed = function (e) {
                e && n.props.onStudentDeleted(e),
                  n.setState({ showStudentDeleteDialog: !1 });
              }),
              (n.state = {
                student: e.student,
                showStudentForm: !1,
                showStudentDeleteDialog: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state,
                    r = t.student,
                    a = t.showStudentForm,
                    o = t.showStudentDeleteDialog;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(Kt.a, {
                        children: Object(n.jsx)(Qt.a, {
                          children: Object(n.jsxs)(L.a, {
                            container: !0,
                            spacing: 1,
                            justify: "flex-start",
                            alignItems: "center",
                            children: [
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(C.a, {
                                  variant: "body1",
                                  className: e.heading,
                                  children: [
                                    "Name:           ",
                                    r.getName(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Studiengang:    ",
                                    r.getCourseAbbr(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Matrikelnummer: ",
                                    r.getMatriculationNr(),
                                    Object(n.jsx)("br", {}),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(Xt.a, {
                                  variant: "text",
                                  size: "small",
                                  children: [
                                    Object(n.jsx)(A.a, {
                                      color: "primary",
                                      onClick: this.editStudentButtonClicked,
                                      children: "edit",
                                    }),
                                    Object(n.jsx)(A.a, {
                                      color: "secondary",
                                      onClick: this.deleteStudentButtonClicked,
                                      children: "delete",
                                    }),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                            ],
                          }),
                        }),
                      }),
                      Object(n.jsx)(Tr, {
                        show: a,
                        student: r,
                        onClose: this.studentFormClosed,
                      }),
                      Object(n.jsx)(Br, {
                        show: o,
                        student: r,
                        onClose: this.deleteStudentDialogClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        Lr = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(Rr),
        Ar = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getStudent = function () {
                Mt.getApi()
                  .getStudents()
                  .then(function (e) {
                    return n.setState({
                      student: e,
                      filteredStudent: Object(oe.a)(e),
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      student: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  }),
                  n.setState({ loadingInProgress: !0, error: null });
              }),
              (n.studentDeleted = function (e) {
                var t = n.state.student.filter(function (t) {
                  return t.getID() !== e.getID();
                });
                n.setState({
                  student: t,
                  filteredStudents: Object(oe.a)(t),
                  showStudentForm: !1,
                });
              }),
              (n.addStudentButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showStudentForm: !0 });
              }),
              (n.studentFormClosed = function (e) {
                if (e) {
                  var t = [].concat(Object(oe.a)(n.state.student), [e]);
                  n.setState({
                    student: t,
                    filteredStudent: Object(oe.a)(t),
                    showStudentForm: !1,
                  });
                } else n.setState({ showStudentForm: !1 });
              }),
              (n.filterFieldValueChange = function (e) {
                var t = e.target.value.toLowerCase();
                n.setState({
                  filteredStudent: n.state.student.filter(function (e) {
                    var r = e.getCourseAbbr().toLowerCase().includes(t),
                      n = e.getMatriculationNr().toLowerCase().includes(t);
                    return r || n;
                  }),
                  studentFilter: t,
                });
              }),
              (n.clearFilterFieldButtonClicked = function () {
                n.setState({
                  filterStudent: Object(oe.a)(n.state.student),
                  studentFilter: "",
                });
              }),
              (n.state = {
                student: [],
                error: null,
                loadingInProgress: !1,
                showStudentForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getStudent();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    r = this.state,
                    a = r.student,
                    o = r.loadingInProgress,
                    i = r.error,
                    s = r.showStudentForm;
                  return Object(n.jsxs)("div", {
                    className: t.root,
                    children: [
                      Object(n.jsxs)(L.a, {
                        className: t.studentFilter,
                        container: !0,
                        spacing: 1,
                        justify: "flex-start",
                        alignItems: "center",
                        children: [
                          Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(A.a, {
                              variant: "contained",
                              color: "primary",
                              startIcon: Object(n.jsx)(le.a, {}),
                              onClick: this.addStudentButtonClicked,
                              children: "Add Student",
                            }),
                          }),
                        ],
                      }),
                      a.map(function (t) {
                        return Object(n.jsx)(
                          Lr,
                          { student: t, onStudentDeleted: e.studentDeleted },
                          t.getID()
                        );
                      }),
                      Object(n.jsx)(X, { show: o }),
                      Object(n.jsx)(ae, {
                        error: i,
                        contextErrorMsg:
                          "The list of student could not be loaded.",
                        onReload: this.getStudent,
                      }),
                      Object(n.jsx)(Tr, {
                        show: s,
                        onClose: this.studentFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        Mr = Object(h.f)(
          Object(M.a)(function (e) {
            return {
              root: { width: "100%" },
              studentFilter: {
                marginTop: e.spacing(2),
                marginBottom: e.spacing(1),
              },
            };
          })(Ar)
        ),
        Vr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).addProjectType = function () {
                var e = new ge();
                e.setName(n.state.name),
                  e.setSws(n.state.sws),
                  e.setEcts(n.state.ects),
                  Mt.getApi()
                    .addProjectType(e)
                    .then(function (e) {
                      n.setState(n.baseState), n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.updateProjectType = function () {
                var e = Object.assign(new ge(), n.props.projectType);
                e.setName(n.state.name),
                  e.setSws(n.state.sws),
                  e.setEcts(n.state.ects),
                  Mt.getApi()
                    .updateProjectType(e)
                    .then(function (t) {
                      n.setState({
                        updatingInProgress: !1,
                        updatingError: null,
                      }),
                        (n.baseState.name = n.state.name),
                        (n.baseState.sws = n.state.sws),
                        (n.baseState.ects = n.state.ects),
                        n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.textFieldValueChange = function (e) {
                var t,
                  r = !1;
                0 === e.target.value.trim().length && (r = !0),
                  n.setState(
                    ((t = {}),
                    Object(Vt.a)(t, e.target.id, e.target.value),
                    Object(Vt.a)(t, e.target.id + "ValidationFailed", r),
                    Object(Vt.a)(t, e.target.id + "Edited", !0),
                    t)
                  );
              }),
              (n.handleClose = function () {
                n.setState(n.baseState), n.props.onClose(null);
              });
            var a = "",
              o = 0,
              i = 0;
            return (
              e.projectType &&
                ((a = e.projectType.getName()),
                (o = e.projectType.getSws()),
                (i = e.projectType.getEcts())),
              (n.state = {
                name: a,
                nameValidationFailed: !1,
                nameEdited: !1,
                sws: o,
                swsValidationFailed: !1,
                swsEdited: !1,
                ects: i,
                ectsValidationFailed: !1,
                ectsEdited: !1,
                addingInProgress: !1,
                updatingInProgress: !1,
                addingError: null,
                updatingError: null,
              }),
              (n.baseState = n.state),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.projectType,
                    a = e.show,
                    o = this.state,
                    i = o.name,
                    s = o.nameValidationFailed,
                    c = o.nameEdited,
                    l = o.sws,
                    d = o.swsValidationFailed,
                    u = o.swsEdited,
                    j = o.ects,
                    h = o.ectsValidationFailed,
                    p = o.ectsEdited,
                    b = o.addingInProgress,
                    g = o.addingError,
                    O = o.updatingInProgress,
                    f = o.updatingError,
                    m = "",
                    x = "";
                  return (
                    r
                      ? ((m = "Update a projecttype"),
                        (x = "ProjectType ID: ".concat(r.getID())))
                      : ((m = "Create a new projecttype"),
                        (x = "Enter projecttype data")),
                    a
                      ? Object(n.jsxs)(Ut.a, {
                          open: a,
                          onClose: this.handleClose,
                          maxWidth: "xs",
                          children: [
                            Object(n.jsxs)(Jt.a, {
                              id: "form-dialog-title",
                              children: [
                                m,
                                Object(n.jsx)(D.a, {
                                  className: t.closeButton,
                                  onClick: this.handleClose,
                                  children: Object(n.jsx)(Gt.a, {}),
                                }),
                              ],
                            }),
                            Object(n.jsxs)(_t.a, {
                              children: [
                                Object(n.jsx)(Wt.a, { children: x }),
                                Object(n.jsxs)("form", {
                                  className: t.root,
                                  noValidate: !0,
                                  autoComplete: "off",
                                  children: [
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "name",
                                      label: "Name:",
                                      value: i,
                                      onChange: this.textFieldValueChange,
                                      error: s,
                                      helperText: s
                                        ? "The name must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "number",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "sws",
                                      label: "SWS:",
                                      value: l,
                                      onChange: this.textFieldValueChange,
                                      error: d,
                                      helperText: d
                                        ? "SWS must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "number",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "ects",
                                      label: "ECTS:",
                                      value: j,
                                      onChange: this.textFieldValueChange,
                                      error: h,
                                      helperText: h
                                        ? "ECTS must contain at least one character"
                                        : " ",
                                    }),
                                  ],
                                }),
                                Object(n.jsx)(X, { show: b || O }),
                                r
                                  ? Object(n.jsx)(ae, {
                                      error: f,
                                      contextErrorMsg:
                                        "The projecttype ".concat(
                                          r.getID(),
                                          " could not be updated."
                                        ),
                                      onReload: this.updateProjectType,
                                    })
                                  : Object(n.jsx)(ae, {
                                      error: g,
                                      contextErrorMsg:
                                        "The projecttype could not be added.",
                                      onReload: this.addProjectType,
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(qt.a, {
                              children: [
                                Object(n.jsx)(A.a, {
                                  onClick: this.handleClose,
                                  color: "secondary",
                                  children: "Cancel",
                                }),
                                r
                                  ? Object(n.jsx)(A.a, {
                                      disabled: s || d || h,
                                      variant: "contained",
                                      onClick: this.updateProjectType,
                                      color: "primary",
                                      children: "Update",
                                    })
                                  : Object(n.jsx)(A.a, {
                                      disabled: s || !c || d || !u || h || !p,
                                      variant: "contained",
                                      onClick: this.addProjectType,
                                      color: "primary",
                                      children: "Add",
                                    }),
                              ],
                            }),
                          ],
                        })
                      : null
                  );
                },
              },
            ]),
            r
          );
        })(a.Component),
        Ur = Object(M.a)(function (e) {
          return {
            root: { width: "100%" },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(Vr),
        Jr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).deleteProjectType = function () {
                Mt.getApi()
                  .deleteProjectType(n.props.projectType.getID())
                  .then(function (e) {
                    n.setState({ deletingInProgress: !1, deletingError: null }),
                      n.props.onClose(n.props.projectType);
                  })
                  .catch(function (e) {
                    return n.setState({
                      deletingInProgress: !1,
                      deletingError: e,
                    });
                  }),
                  n.setState({ deletingInProgress: !0, deletingError: null });
              }),
              (n.handleClose = function () {
                n.props.onClose(null);
              }),
              (n.state = { deletingInProgress: !1, deletingError: null }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.projectType,
                    a = e.show,
                    o = this.state,
                    i = o.deletingInProgress,
                    s = o.deletingError;
                  return a
                    ? Object(n.jsxs)(Ut.a, {
                        open: a,
                        onClose: this.handleClose,
                        children: [
                          Object(n.jsxs)(Jt.a, {
                            id: "delete-dialog-title",
                            children: [
                              "Delete projectType",
                              Object(n.jsx)(D.a, {
                                className: t.closeButton,
                                onClick: this.handleClose,
                                children: Object(n.jsx)(Gt.a, {}),
                              }),
                            ],
                          }),
                          Object(n.jsxs)(_t.a, {
                            children: [
                              Object(n.jsxs)(Wt.a, {
                                children: [
                                  "Really delete projectType ",
                                  r.getName(),
                                  "?",
                                ],
                              }),
                              Object(n.jsx)(X, { show: i }),
                              Object(n.jsx)(ae, {
                                error: s,
                                contextErrorMsg: "The projectType   "
                                  .concat(r.getName(), " ' (ID: ")
                                  .concat(r.getID(), ") could not be deleted."),
                                onReload: this.deleteProjectType,
                              }),
                            ],
                          }),
                          Object(n.jsxs)(qt.a, {
                            children: [
                              Object(n.jsx)(A.a, {
                                onClick: this.handleClose,
                                color: "secondary",
                                children: "Cancel",
                              }),
                              Object(n.jsx)(A.a, {
                                variant: "contained",
                                onClick: this.deleteProjectType,
                                color: "primary",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        _r = Object(M.a)(function (e) {
          return {
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(Jr),
        Wr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).editProjectTypeButtonClicked = function (
                e
              ) {
                e.stopPropagation(), n.setState({ showProjectTypeForm: !0 });
              }),
              (n.projectTypeFormClosed = function (e) {
                e
                  ? n.setState({ projectType: e, showProjectTypeForm: !1 })
                  : n.setState({ showProjectTypeForm: !1 });
              }),
              (n.deleteProjectTypeButtonClicked = function (e) {
                e.stopPropagation(),
                  n.setState({ showProjectTypeDeleteDialog: !0 });
              }),
              (n.deleteProjectTypeDialogClosed = function (e) {
                e && n.props.onProjectTypeDeleted(e),
                  n.setState({ showProjectTypeDeleteDialog: !1 });
              }),
              (n.state = {
                projectType: e.projectType,
                showProjectTypeForm: !1,
                showProjectTypeDeleteDialog: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state,
                    r = t.projectType,
                    a = t.showProjectTypeForm,
                    o = t.showProjectTypeDeleteDialog;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(Kt.a, {
                        onChange: this.expansionPanelStateChanged,
                        children: Object(n.jsx)(Qt.a, {
                          children: Object(n.jsxs)(L.a, {
                            container: !0,
                            spacing: 1,
                            justify: "flex-start",
                            alignItems: "center",
                            children: [
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(C.a, {
                                  variant: "body1",
                                  className: e.heading,
                                  children: [
                                    "Projektart:   ",
                                    r.getName(),
                                    Object(n.jsx)("br", {}),
                                    "SWS:          ",
                                    r.getSws(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "ECTS:         ",
                                    r.getEcts(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(Xt.a, {
                                  variant: "text",
                                  size: "small",
                                  children: [
                                    Object(n.jsx)(A.a, {
                                      color: "primary",
                                      onClick:
                                        this.editProjectTypeButtonClicked,
                                      children: "edit",
                                    }),
                                    Object(n.jsx)(A.a, {
                                      color: "secondary",
                                      onClick:
                                        this.deleteProjectTypeButtonClicked,
                                      children: "delete",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(n.jsx)(Ur, {
                        show: a,
                        projectType: r,
                        onClose: this.projectTypeFormClosed,
                      }),
                      Object(n.jsx)(_r, {
                        show: o,
                        projectType: r,
                        onClose: this.deleteProjectTypeDialogClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        qr = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(Wr),
        zr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getProjectTypes = function () {
                Mt.getApi()
                  .getProjectTypes()
                  .then(function (e) {
                    return n.setState({
                      projectType: e,
                      filteredProjectTypes: Object(oe.a)(e),
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      projectTypes: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  }),
                  n.setState({ loadingInProgress: !0, error: null });
              }),
              (n.projectTypeDeleted = function (e) {
                var t = n.state.projectTypes.filter(function (t) {
                  return t.getID() !== e.getID();
                });
                n.setState({
                  projectTypes: t,
                  filteredProjectTypes: Object(oe.a)(t),
                  showProjectTypeForm: !1,
                });
              }),
              (n.addProjectTypeButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showProjectTypeForm: !0 });
              }),
              (n.projectTypeFormClosed = function (e) {
                if (e) {
                  var t = [].concat(Object(oe.a)(n.state.projectType), [e]);
                  n.setState({
                    projectTypes: t,
                    filteredProjectTypes: Object(oe.a)(t),
                    showProjectTypeForm: !1,
                  });
                } else n.setState({ showProjectTypeForm: !1 });
              }),
              (n.filterFieldValueChange = function (e) {
                var t = e.target.value.toLowerCase();
                n.setState({
                  filteredProjectTypes: n.state.projectTypes.filter(function (
                    e
                  ) {
                    var r = e.getName().toLowerCase().includes(t),
                      n = e.getSws().toLowerCase().includes(t),
                      a = e.getEcts().toLowerCase().includes(t);
                    return n || a || r;
                  }),
                  projectTypeFilter: t,
                });
              }),
              (n.clearFilterFieldButtonClicked = function () {
                n.setState({
                  filteredProjectTypes: Object(oe.a)(n.state.projectTypes),
                  projectTypeFilter: "",
                });
              }),
              (n.state = {
                projectTypes: [],
                filteredProjectTypes: [],
                ProjectTypeFilter: "",
                error: null,
                loadingInProgress: !1,
                showProjectTypeForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getProjectTypes();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    r = this.state,
                    a = r.filteredProjectTypes,
                    o = r.projectTypeFilter,
                    i = r.loadingInProgress,
                    s = r.error,
                    c = r.showProjectTypeForm;
                  return Object(n.jsxs)("div", {
                    className: t.root,
                    children: [
                      Object(n.jsxs)(L.a, {
                        className: t.projectTypeFilter,
                        container: !0,
                        spacing: 1,
                        justify: "flex-start",
                        alignItems: "center",
                        children: [
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(C.a, {
                              children: "Filter projectType list by name:",
                            }),
                          }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            xs: 4,
                            children: Object(n.jsx)(ie.a, {
                              autoFocus: !0,
                              fullWidth: !0,
                              id: "projectTypeFilter",
                              type: "text",
                              value: o,
                              onChange: this.filterFieldValueChange,
                              InputProps: {
                                endAdornment: Object(n.jsx)(se.a, {
                                  position: "end",
                                  children: Object(n.jsx)(D.a, {
                                    onClick: this.clearFilterFieldButtonClicked,
                                    children: Object(n.jsx)(ue.a, {}),
                                  }),
                                }),
                              },
                            }),
                          }),
                          Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                          Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsx)(A.a, {
                              variant: "contained",
                              color: "primary",
                              startIcon: Object(n.jsx)(le.a, {}),
                              onClick: this.addProjectTypeButtonClicked,
                              children: "Add Project Type",
                            }),
                          }),
                        ],
                      }),
                      a.map(function (t) {
                        return Object(n.jsx)(
                          qr,
                          {
                            projectType: t,
                            onProjectTypeDeleted: e.projectTypeDeleted,
                          },
                          t.getID()
                        );
                      }),
                      Object(n.jsx)(X, { show: i }),
                      Object(n.jsx)(ae, {
                        error: s,
                        contextErrorMsg:
                          "The list of projectTypes could not be loaded.",
                        onReload: this.getProjectTypes,
                      }),
                      Object(n.jsx)(Ur, {
                        show: c,
                        onClose: this.projectTypeFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        Gr = Object(h.f)(
          Object(M.a)(function (e) {
            return {
              root: { width: "100%" },
              ProjectFilter: {
                marginTop: e.spacing(2),
                marginBottom: e.spacing(1),
              },
            };
          })(zr)
        ),
        Hr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).addRating = function () {
                var e = new Oe();
                e.setProject(n.state.project),
                  e.setEvaluator(n.state.evaluator),
                  e.setToBeAssessed(n.state.toBeAssessed),
                  e.setGrade(n.state.grade),
                  e.setPassed(n.state.passed),
                  Mt.getApi()
                    .addRating(e)
                    .then(function (e) {
                      n.setState(n.baseState), n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.updateRating = function () {
                var e = Object.assign(new Oe(), n.props.rating);
                e.setProject(n.state.project),
                  e.setEvaluator(n.state.evaluator),
                  e.setToBeAssessed(n.state.toBeAssessed),
                  e.setGrade(n.state.grade),
                  e.setPassed(n.state.passed),
                  Mt.getApi()
                    .updateRating(e)
                    .then(function (t) {
                      n.setState({
                        updatingInProgress: !1,
                        updatingError: null,
                      }),
                        (n.baseState.project = n.state.project),
                        (n.baseState.evaluator = n.state.evaluator),
                        (n.baseState.toBeAssessed = n.state.toBeAssessed),
                        (n.baseState.grade = n.state.grade),
                        (n.baseState.passed = n.state.passed),
                        n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.textFieldValueChange = function (e) {
                var t,
                  r = !1;
                0 === e.target.value.trim().length && (r = !0),
                  n.setState(
                    ((t = {}),
                    Object(Vt.a)(t, e.target.id, e.target.value),
                    Object(Vt.a)(t, e.target.id + "ValidationFailed", r),
                    Object(Vt.a)(t, e.target.id + "Edited", !0),
                    t)
                  );
              }),
              (n.handleClose = function () {
                n.setState(n.baseState), n.props.onClose(null);
              });
            var a = "",
              o = "",
              i = "",
              s = "",
              l = "";
            return (
              e.rating &&
                ((a = e.rating.getProject()),
                (o = e.rating.getEvaluator()),
                (i = e.rating.getToBeAssessed()),
                (s = e.rating.getGrade()),
                (l = e.rating.getPassed())),
              (n.state = {
                project: a,
                projectValidationFailed: !1,
                projectEdited: !1,
                evaluator: o,
                evaluatorValidationFailed: !1,
                evaluatorEdited: !1,
                toBeAssessed: i,
                toBeAssessedValidationFailed: !1,
                toBeAssessedEdited: !1,
                grade: s,
                gradeValidationFailed: !1,
                gradeEdited: !1,
                passed: l,
                passedValidationFailed: !1,
                passedEdited: !1,
                addingInProgress: !1,
                updatingInProgress: !1,
                addingError: null,
                updatingError: null,
              }),
              (n.baseState = n.state),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.rating,
                    a = e.show,
                    o = this.state,
                    i = o.project,
                    s = o.projectValidationFailed,
                    c = o.projectEdited,
                    l = o.evaluator,
                    d = o.evaluatorValidationFailed,
                    u = o.evaluatorEdited,
                    j = o.toBeAssessed,
                    h = o.toBeAssessedValidationFailed,
                    p = o.toBeAssessedEdited,
                    b = o.grade,
                    g = o.gradeValidationFailed,
                    O = o.gradeEdited,
                    f = o.passed,
                    m = o.passedValidationFailed,
                    x = o.passedEdited,
                    P = o.addingInProgress,
                    v = o.addingError,
                    y = o.updatingInProgress,
                    S = o.updatingError,
                    C = "",
                    w = "";
                  return (
                    r
                      ? ((C = "Update a rating"),
                        (w = "Rating ID: ".concat(r.getID())))
                      : ((C = "Create a new rating"),
                        (w = "Enter rating data")),
                    a
                      ? Object(n.jsxs)(Ut.a, {
                          open: a,
                          onClose: this.handleClose,
                          maxWidth: "xs",
                          children: [
                            Object(n.jsxs)(Jt.a, {
                              id: "form-dialog-title",
                              children: [
                                C,
                                Object(n.jsx)(D.a, {
                                  className: t.closeButton,
                                  onClick: this.handleClose,
                                  children: Object(n.jsx)(Gt.a, {}),
                                }),
                              ],
                            }),
                            Object(n.jsxs)(_t.a, {
                              children: [
                                Object(n.jsx)(Wt.a, { children: w }),
                                Object(n.jsxs)("form", {
                                  className: t.root,
                                  noValidate: !0,
                                  autoComplete: "off",
                                  children: [
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "project",
                                      label: "Project:",
                                      value: i,
                                      onChange: this.textFieldValueChange,
                                      error: s,
                                      helperText: s
                                        ? "The project must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "evaluator",
                                      label: "Evaluator:",
                                      value: l,
                                      onChange: this.textFieldValueChange,
                                      error: d,
                                      helperText: d
                                        ? "The evaluator must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "toBeAssessed",
                                      label: "To be assessed",
                                      value: j,
                                      onChange: this.textFieldValueChange,
                                      error: h,
                                      helperText: h
                                        ? "To be assessed must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "grade",
                                      label: "Grade",
                                      value: b,
                                      onChange: this.textFieldValueChange,
                                      error: g,
                                      helperText: g
                                        ? "The grade must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "passed",
                                      label: "Passed",
                                      value: f,
                                      onChange: this.textFieldValueChange,
                                      error: m,
                                      helperText: m
                                        ? "Passed must contain at least one character"
                                        : " ",
                                    }),
                                  ],
                                }),
                                Object(n.jsx)(X, { show: P || y }),
                                r
                                  ? Object(n.jsx)(ae, {
                                      error: S,
                                      contextErrorMsg: "The rating ".concat(
                                        r.getID(),
                                        " could not be updated."
                                      ),
                                      onReload: this.updateRating,
                                    })
                                  : Object(n.jsx)(ae, {
                                      error: v,
                                      contextErrorMsg:
                                        "The rating could not be added.",
                                      onReload: this.addRating,
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(qt.a, {
                              children: [
                                Object(n.jsx)(A.a, {
                                  onClick: this.handleClose,
                                  color: "secondary",
                                  children: "Cancel",
                                }),
                                r
                                  ? Object(n.jsx)(A.a, {
                                      disabled: s || d || h || g || m,
                                      variant: "contained",
                                      onClick: this.updateRating,
                                      color: "primary",
                                      children: "Update",
                                    })
                                  : Object(n.jsx)(A.a, {
                                      disabled:
                                        s ||
                                        !c ||
                                        d ||
                                        !u ||
                                        h ||
                                        !p ||
                                        g ||
                                        !O ||
                                        m ||
                                        !x,
                                      variant: "contained",
                                      onClick: this.addRating,
                                      color: "primary",
                                      children: "Add",
                                    }),
                              ],
                            }),
                          ],
                        })
                      : null
                  );
                },
              },
            ]),
            r
          );
        })(a.Component),
        Yr = Object(M.a)(function (e) {
          return {
            root: { width: "100%" },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(Hr),
        Kr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).deleteRating = function () {
                Mt.getApi()
                  .deleteRating(n.props.rating.getID())
                  .then(function (e) {
                    n.setState({ deletingInProgress: !1, deletingError: null }),
                      n.props.onClose(n.props.rating);
                  })
                  .catch(function (e) {
                    return n.setState({
                      deletingInProgress: !1,
                      deletingError: e,
                    });
                  }),
                  n.setState({ deletingInProgress: !0, deletingError: null });
              }),
              (n.handleClose = function () {
                n.props.onClose(null);
              }),
              (n.state = { deletingInProgress: !1, deletingError: null }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.rating,
                    a = e.show,
                    o = this.state,
                    i = o.deletingInProgress,
                    s = o.deletingError;
                  return a
                    ? Object(n.jsxs)(Ut.a, {
                        open: a,
                        onClose: this.handleClose,
                        children: [
                          Object(n.jsxs)(Jt.a, {
                            id: "delete-dialog-title",
                            children: [
                              "Delete rating",
                              Object(n.jsx)(D.a, {
                                className: t.closeButton,
                                onClick: this.handleClose,
                                children: Object(n.jsx)(Gt.a, {}),
                              }),
                            ],
                          }),
                          Object(n.jsxs)(_t.a, {
                            children: [
                              Object(n.jsxs)(Wt.a, {
                                children: [
                                  "Really delete rating ",
                                  r.getProject(),
                                  " ",
                                  r.getEvaluator(),
                                  " ",
                                  r.getToBeAssessed(),
                                  " ",
                                  r.getGrade(),
                                  " ",
                                  r.getPassed(),
                                  " (ID: ",
                                  r.getID(),
                                  ")?",
                                ],
                              }),
                              Object(n.jsx)(X, { show: i }),
                              Object(n.jsx)(ae, {
                                error: s,
                                contextErrorMsg: "The rating '"
                                  .concat(r.getProject(), " ")
                                  .concat(r.getEvaluator())
                                  .concat(r.getToBeAssessed())
                                  .concat(r.getGrade())
                                  .concat(r.getPassed(), "' (ID: ")
                                  .concat(r.getID(), ") could not be deleted."),
                                onReload: this.deleteRating,
                              }),
                            ],
                          }),
                          Object(n.jsxs)(qt.a, {
                            children: [
                              Object(n.jsx)(A.a, {
                                onClick: this.handleClose,
                                color: "secondary",
                                children: "Cancel",
                              }),
                              Object(n.jsx)(A.a, {
                                variant: "contained",
                                onClick: this.deleteRating,
                                color: "primary",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        Qr = Object(M.a)(function (e) {
          return {
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(Kr),
        Xr = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).editRatingButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showRatingForm: !0 });
              }),
              (n.ratingFormClosed = function (e) {
                e
                  ? n.setState({ rating: e, showRatingForm: !1 })
                  : n.setState({ showRatingForm: !1 });
              }),
              (n.deleteRatingButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showRatingDeleteDialog: !0 });
              }),
              (n.deleteRatingDialogClosed = function (e) {
                e && n.props.onRatingDeleted(e),
                  n.setState({ showRatingDeleteDialog: !1 });
              }),
              (n.state = {
                rating: e.rating,
                showRatingForm: !1,
                showRatingDeleteDialog: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state,
                    r = t.rating,
                    a = t.showRatingForm,
                    o = t.showRatingDeleteDialog;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(Kt.a, {
                        children: Object(n.jsx)(Qt.a, {
                          children: Object(n.jsxs)(L.a, {
                            container: !0,
                            spacing: 1,
                            justify: "flex-start",
                            alignItems: "center",
                            children: [
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(C.a, {
                                  variant: "body1",
                                  className: e.heading,
                                  children: [
                                    "Projekt:  ",
                                    r.getProject(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Pr\xfcfer:   ",
                                    r.getEvaluator(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Gepr\xfcfter:",
                                    r.getToBeAssessed(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Note:     ",
                                    r.getGrade(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Bestanden:",
                                    r.getPassed(),
                                    Object(n.jsx)("br", {}),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(Xt.a, {
                                  variant: "text",
                                  size: "small",
                                  children: [
                                    Object(n.jsx)(A.a, {
                                      color: "primary",
                                      onClick: this.editRatingButtonClicked,
                                      children: "edit",
                                    }),
                                    Object(n.jsx)(A.a, {
                                      color: "secondary",
                                      onClick: this.deleteRatingButtonClicked,
                                      children: "delete",
                                    }),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                            ],
                          }),
                        }),
                      }),
                      Object(n.jsx)(Yr, {
                        show: a,
                        rating: r,
                        onClose: this.ratingFormClosed,
                      }),
                      Object(n.jsx)(Qr, {
                        show: o,
                        rating: r,
                        onClose: this.deleteRatingDialogClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        Zr = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(Xr),
        $r = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).getRatings = function () {
                Mt.getApi()
                  .getRatings()
                  .then(function (e) {
                    return n.setState({
                      rating: e,
                      filteredRating: Object(oe.a)(e),
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      rating: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  }),
                  n.setState({ loadingInProgress: !0, error: null });
              }),
              (n.onExpandedStateChange = function (e) {
                var t = null;
                e.getID() !== n.state.expandedRatingID && (t = e.getID()),
                  n.setState({ expandedRatingID: t });
              }),
              (n.ratingDeleted = function (e) {
                var t = n.state.rating.filter(function (t) {
                  return t.getID() !== e.getID();
                });
                n.setState({
                  rating: t,
                  filteredRating: Object(oe.a)(t),
                  showRatingForm: !1,
                });
              }),
              (n.addRatingButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showRatingForm: !0 });
              }),
              (n.ratingFormClosed = function (e) {
                if (e) {
                  var t = [].concat(Object(oe.a)(n.state.rating), [e]);
                  n.setState({
                    rating: t,
                    filteredRating: Object(oe.a)(t),
                    showRatingForm: !1,
                  });
                } else n.setState({ showRatingForm: !1 });
              }),
              (n.filterFieldValueChange = function (e) {
                var t = e.target.value.toLowerCase();
                n.setState({
                  filteredRating: n.state.rating.filter(function (e) {
                    var r = e.getName().toLowerCase().includes(t),
                      n = e.getProject().toLowerCase().includes(t),
                      a = e.getEvaluator().toLowerCase().includes(t),
                      o = e.getToBeAssessed().toLowerCase().includes(t),
                      i = e.getGrade().toLowerCase().includes(t),
                      s = e.getPassed().toLowerCase().includes(t);
                    return r || n || a || o || i || s;
                  }),
                  ratingFilter: t,
                });
              }),
              (n.clearFilterFieldButtonClicked = function () {
                n.setState({
                  filteredRating: Object(oe.a)(n.state.rating),
                  ratingFilter: "",
                });
              });
            var a = null;
            return (
              n.props.location.expandRating &&
                (a = n.props.location.expandRating.getID()),
              (n.state = {
                rating: [],
                filteredRating: [],
                error: null,
                loadingInProgress: !1,
                expandedRatingID: a,
                showRatingForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getRatings();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    r = this.state,
                    a = r.rating,
                    o = r.loadingInProgress,
                    i = r.error,
                    s = r.showRatingForm;
                  return Object(n.jsxs)("div", {
                    className: t.root,
                    children: [
                      Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                      Object(n.jsx)(L.a, {
                        item: !0,
                        children: Object(n.jsx)(A.a, {
                          variant: "contained",
                          color: "primary",
                          startIcon: Object(n.jsx)(le.a, {}),
                          onClick: this.addRatingButtonClicked,
                          children: "Add Rating",
                        }),
                      }),
                      a.map(function (t) {
                        return Object(n.jsx)(
                          Zr,
                          {
                            rating: t,
                            onExpandedStateChange: e.onExpandedStateChange,
                            onRatingDeleted: e.ratingDeleted,
                          },
                          t.getID()
                        );
                      }),
                      Object(n.jsx)(X, { show: o }),
                      Object(n.jsx)(ae, {
                        error: i,
                        contextErrorMsg:
                          "The list of ratings could not be loaded.",
                        onReload: this.getRatings,
                      }),
                      " //TODO: \xdcBERPR\xdcFEN OB INITIALISIERT",
                      Object(n.jsx)(Yr, {
                        show: s,
                        onClose: this.ratingFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        en = Object(h.f)(
          Object(M.a)(function (e) {
            return {
              root: { width: "100%" },
              RatingFilter: {
                marginTop: e.spacing(2),
                marginBottom: e.spacing(1),
              },
            };
          })($r)
        ),
        tn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            Object(c.a)(this, r),
              ((n = t.call(this, e)).addParticipation = function () {
                var e = new be();
                e.setProject(n.state.project),
                  e.setStudent(n.state.student),
                  Mt.getApi()
                    .addParticipation(e)
                    .then(function (e) {
                      n.setState(n.baseState), n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.updateParticipation = function () {
                var e = Object.assign(new be(), n.props.participation);
                e.setProject(n.state.project),
                  e.setStudent(n.state.student),
                  Mt.getApi()
                    .updateParticipation(e)
                    .then(function (t) {
                      n.setState({
                        updatingInProgress: !1,
                        updatingError: null,
                      }),
                        (n.baseState.project = n.state.project),
                        (n.baseState.student = n.state.student),
                        n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.textFieldValueChange = function (e) {
                var t,
                  r = !1;
                0 === e.target.value.trim().length && (r = !0),
                  n.setState(
                    ((t = {}),
                    Object(Vt.a)(t, e.target.id, e.target.value),
                    Object(Vt.a)(t, e.target.id + "ValidationFailed", r),
                    Object(Vt.a)(t, e.target.id + "Edited", !0),
                    t)
                  );
              }),
              (n.handleClose = function () {
                n.setState(n.baseState), n.props.onClose(null);
              });
            var a = "",
              o = "";
            return (
              e.participation &&
                ((a = e.participation.getProject()),
                (o = e.participation.getStudent())),
              (n.state = {
                project: a,
                projectValidationFailed: !1,
                projectEdited: !1,
                student: o,
                studentValidationFailed: !1,
                studentEdited: !1,
                addingInProgress: !1,
                updatingInProgress: !1,
                addingError: null,
                updatingError: null,
              }),
              (n.baseState = n.state),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.participation,
                    a = e.show,
                    o = this.state,
                    i = o.project,
                    s = o.projectValidationFailed,
                    c = o.projectEdited,
                    l = o.student,
                    d = o.studentValidationFailed,
                    u = o.studentEdited,
                    j = o.addingInProgress,
                    h = o.addingError,
                    p = o.updatingInProgress,
                    b = o.updatingError,
                    g = "",
                    O = "";
                  return (
                    r
                      ? ((g = "Update a participation"),
                        (O = "Participation ID: ".concat(r.getID())))
                      : ((g = "Create a new participation"),
                        (O = "Enter participation data")),
                    a
                      ? Object(n.jsxs)(Ut.a, {
                          open: a,
                          onClose: this.handleClose,
                          maxWidth: "xs",
                          children: [
                            Object(n.jsxs)(Jt.a, {
                              id: "form-dialog-title",
                              children: [
                                g,
                                Object(n.jsx)(D.a, {
                                  className: t.closeButton,
                                  onClick: this.handleClose,
                                  children: Object(n.jsx)(Gt.a, {}),
                                }),
                              ],
                            }),
                            Object(n.jsxs)(_t.a, {
                              children: [
                                Object(n.jsx)(Wt.a, { children: O }),
                                Object(n.jsxs)("form", {
                                  className: t.root,
                                  noValidate: !0,
                                  autoComplete: "off",
                                  children: [
                                    Object(n.jsx)(ie.a, {
                                      autoFocus: !0,
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "project",
                                      label: "Project:",
                                      value: i,
                                      onChange: this.textFieldValueChange,
                                      error: s,
                                      helperText: s
                                        ? "The Project must contain at least one character"
                                        : " ",
                                    }),
                                    Object(n.jsx)(ie.a, {
                                      type: "text",
                                      required: !0,
                                      fullWidth: !0,
                                      margin: "normal",
                                      id: "student",
                                      label: "Student:",
                                      value: l,
                                      onChange: this.textFieldValueChange,
                                      error: d,
                                      helperText: d
                                        ? "The student must contain at least one character"
                                        : " ",
                                    }),
                                  ],
                                }),
                                Object(n.jsx)(X, { show: j || p }),
                                r
                                  ? Object(n.jsx)(ae, {
                                      error: b,
                                      contextErrorMsg:
                                        "The participation ".concat(
                                          r.getID(),
                                          " could not be updated."
                                        ),
                                      onReload: this.updateParticipation,
                                    })
                                  : Object(n.jsx)(ae, {
                                      error: h,
                                      contextErrorMsg:
                                        "The participation could not be added.",
                                      onReload: this.addParticipation,
                                    }),
                              ],
                            }),
                            Object(n.jsxs)(qt.a, {
                              children: [
                                Object(n.jsx)(A.a, {
                                  onClick: this.handleClose,
                                  color: "secondary",
                                  children: "Cancel",
                                }),
                                i
                                  ? Object(n.jsx)(A.a, {
                                      disabled: s || d,
                                      variant: "contained",
                                      onClick: this.updateParticipation,
                                      color: "primary",
                                      children: "Update",
                                    })
                                  : Object(n.jsx)(A.a, {
                                      disabled: s || !c || d || !u,
                                      variant: "contained",
                                      onClick: this.addParticipation,
                                      color: "primary",
                                      children: "Add",
                                    }),
                              ],
                            }),
                          ],
                        })
                      : null
                  );
                },
              },
            ]),
            r
          );
        })(a.Component),
        rn = Object(M.a)(function (e) {
          return {
            root: { width: "100%" },
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(tn),
        nn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).deleteParticipation = function () {
                Mt.getApi()
                  .deleteParticipation(n.props.participation.getID())
                  .then(function (e) {
                    n.setState({ deletingInProgress: !1, deletingError: null }),
                      n.props.onClose(n.props.participation);
                  })
                  .catch(function (e) {
                    return n.setState({
                      deletingInProgress: !1,
                      deletingError: e,
                    });
                  }),
                  n.setState({ deletingInProgress: !0, deletingError: null });
              }),
              (n.handleClose = function () {
                n.props.onClose(null);
              }),
              (n.state = { deletingInProgress: !1, deletingError: null }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.participation,
                    a = e.show,
                    o = this.state,
                    i = o.deletingInProgress,
                    s = o.deletingError;
                  return a
                    ? Object(n.jsxs)(Ut.a, {
                        open: a,
                        onClose: this.handleClose,
                        children: [
                          Object(n.jsxs)(Jt.a, {
                            id: "delete-dialog-title",
                            children: [
                              "Delete participation",
                              Object(n.jsx)(D.a, {
                                className: t.closeButton,
                                onClick: this.handleClose,
                                children: Object(n.jsx)(Gt.a, {}),
                              }),
                            ],
                          }),
                          Object(n.jsxs)(_t.a, {
                            children: [
                              Object(n.jsxs)(Wt.a, {
                                children: [
                                  "Really delete participation '",
                                  r.getProject(),
                                  " ",
                                  r.getStudent(),
                                  "' (ID: ",
                                  r.getID(),
                                  ")?",
                                ],
                              }),
                              Object(n.jsx)(X, { show: i }),
                              Object(n.jsx)(ae, {
                                error: s,
                                contextErrorMsg: "The participation '"
                                  .concat(r.getProject(), " ")
                                  .concat(r.getStudent(), "' (ID: ")
                                  .concat(r.getID(), ") could not be deleted."),
                                onReload: this.deleteParticipation,
                              }),
                            ],
                          }),
                          Object(n.jsxs)(qt.a, {
                            children: [
                              Object(n.jsx)(A.a, {
                                onClick: this.handleClose,
                                color: "secondary",
                                children: "Cancel",
                              }),
                              Object(n.jsx)(A.a, {
                                variant: "contained",
                                onClick: this.deleteParticipation,
                                color: "primary",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            r
          );
        })(a.Component),
        an = Object(M.a)(function (e) {
          return {
            closeButton: {
              position: "absolute",
              right: e.spacing(1),
              top: e.spacing(1),
              color: e.palette.grey[500],
            },
          };
        })(nn),
        on = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).editParticipationButtonClicked = function (
                e
              ) {
                e.stopPropagation(), n.setState({ showParticipationForm: !0 });
              }),
              (n.participationFormClosed = function (e) {
                e
                  ? n.setState({ participation: e, showParticipationForm: !1 })
                  : n.setState({ showParticipationForm: !1 });
              }),
              (n.deleteParticipationButtonClicked = function (e) {
                e.stopPropagation(),
                  n.setState({ showParticipationDeleteDialog: !0 });
              }),
              (n.deleteParticipationDialogClosed = function (e) {
                e && n.props.onParticipationDeleted(e),
                  n.setState({ showParticipationDeleteDialog: !1 });
              }),
              (n.state = {
                participation: e.participation,
                showParticipationForm: !1,
                showParticipationDeleteDialog: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state,
                    r = t.participation,
                    a = t.showParticipationForm,
                    o = t.showParticipationDeleteDialog;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(Kt.a, {
                        children: Object(n.jsx)(Qt.a, {
                          children: Object(n.jsxs)(L.a, {
                            container: !0,
                            spacing: 1,
                            justify: "flex-start",
                            alignItems: "center",
                            children: [
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(C.a, {
                                  variant: "body1",
                                  className: e.heading,
                                  children: [
                                    "Projekt:  ",
                                    r.getProject(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Student:  ",
                                    r.getStudent(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(Xt.a, {
                                  variant: "text",
                                  size: "small",
                                  children: [
                                    Object(n.jsx)(A.a, {
                                      color: "primary",
                                      onClick:
                                        this.editParticipationButtonClicked,
                                      children: "edit",
                                    }),
                                    Object(n.jsx)(A.a, {
                                      color: "secondary",
                                      onClick:
                                        this.deleteParticipationButtonClicked,
                                      children: "delete",
                                    }),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                            ],
                          }),
                        }),
                      }),
                      Object(n.jsx)(rn, {
                        show: a,
                        participation: r,
                        onClose: this.participationFormClosed,
                      }),
                      Object(n.jsx)(an, {
                        show: o,
                        participation: r,
                        onClose: this.deleteParticipationDialogClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        sn = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(on),
        cn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getParticipations = function () {
                Mt.getApi()
                  .getParticipations()
                  .then(function (e) {
                    return n.setState({
                      participations: e,
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      participations: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  }),
                  n.setState({ loadingInProgress: !0, error: null });
              }),
              (n.participationDeleted = function (e) {
                var t = n.state.participations.filter(function (t) {
                  return t.getID() !== e.getID();
                });
                n.setState({
                  participations: t,
                  filteredParticipations: Object(oe.a)(t),
                  showParticipationForm: !1,
                });
              }),
              (n.addParticipationButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showParticipationForm: !0 });
              }),
              (n.participationFormClosed = function (e) {
                if (e) {
                  var t = [].concat(Object(oe.a)(n.state.participations), [e]);
                  n.setState({
                    persons: t,
                    filteredParticipations: Object(oe.a)(t),
                    showParticipationForm: !1,
                  });
                } else n.setState({ showParticipationForm: !1 });
              }),
              (n.state = {
                participations: [],
                error: null,
                loadingInProgress: !1,
                loadingParticipationError: null,
                showParticipationForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getParticipations();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    r = this.state,
                    a = r.participations,
                    o = r.loadingInProgress,
                    i = r.error,
                    s = r.showParticipationForm;
                  return Object(n.jsxs)("div", {
                    className: t.root,
                    children: [
                      Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                      Object(n.jsx)(L.a, {
                        item: !0,
                        children: Object(n.jsx)(A.a, {
                          variant: "contained",
                          color: "primary",
                          startIcon: Object(n.jsx)(le.a, {}),
                          onClick: this.addParticipationButtonClicked,
                          children: "Add Participation",
                        }),
                      }),
                      a.map(function (t) {
                        return Object(n.jsx)(
                          sn,
                          {
                            participation: t,
                            onParticipationDeleted: e.participationDeleted,
                          },
                          t.getID()
                        );
                      }),
                      Object(n.jsx)(X, { show: o }),
                      Object(n.jsx)(ae, {
                        error: i,
                        contextErrorMsg:
                          "The list of participations could not be loaded.",
                        onReload: this.getParticipations,
                      }),
                      Object(n.jsx)(rn, {
                        show: s,
                        onClose: this.participationFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        ln = Object(h.f)(
          Object(M.a)(function (e) {
            return {
              root: { width: "100%" },
              participationList: { marginBottom: e.spacing(2) },
              addParticipationButton: {
                position: "absolute",
                right: e.spacing(3),
                bottom: e.spacing(1),
              },
            };
          })(cn)
        ),
        dn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r() {
            return Object(c.a)(this, r), t.apply(this, arguments);
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  return Object(n.jsx)("div", {
                    children: Object(n.jsxs)("center", {
                      children: [
                        Object(n.jsx)(C.a, {
                          children: "W\xe4hlen Sie Ihre Rolle:",
                        }),
                        Object(n.jsx)(j.b, {
                          to: "/student/project",
                          children: Object(n.jsx)(A.a, { children: "Student" }),
                        }),
                        Object(n.jsx)("br", {}),
                        Object(n.jsx)(j.b, {
                          to: "/dozent",
                          children: Object(n.jsx)(A.a, { children: "Dozent" }),
                        }),
                        Object(n.jsx)("br", {}),
                        Object(n.jsx)(j.b, {
                          to: "/admin",
                          children: Object(n.jsx)(A.a, { children: "Admin" }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        un = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).handleTabChange = function (e, t) {
                n.setState({ tabindex: t });
              }),
              (n.state = { tabindex: 0 }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.user;
                  return Object(n.jsxs)(S.a, {
                    variant: "outlined",
                    children: [
                      Object(n.jsx)(J, { user: e }),
                      Object(n.jsx)(C.a, {
                        variant: "h3",
                        component: "h1",
                        align: "center",
                      }),
                      Object(n.jsxs)(C.a, {
                        variant: "h4",
                        component: "h2",
                        align: "center",
                        children: [
                          Object(n.jsx)("img", {
                            width: "700",
                            alt: "logo-student",
                            src: "../projectonomy-logo.png",
                          }),
                          " ",
                          Object(n.jsx)("br", {}),
                          " Home",
                        ],
                      }),
                      Object(n.jsxs)(w.a, {
                        indicatorColor: "primary",
                        textColor: "primary",
                        centered: !0,
                        value: this.state.tabindex,
                        onChange: this.handleTabChange,
                        children: [
                          Object(n.jsx)(k.a, {
                            label: "Projects",
                            component: j.b,
                            to: "/student/project",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "Ratings",
                            component: j.b,
                            to: "/student/rating",
                          }),
                          Object(n.jsx)(k.a, {
                            label: "About",
                            component: j.b,
                            to: "/about",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        jn = r(31),
        hn = r.n(jn),
        pn = r(45),
        bn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).addParticipation = function () {
                var e = new be();
                e.setProject(n.state.project),
                  e.setStudent(n.state.student),
                  Mt.getApi()
                    .addParticipation(e)
                    .then(function (e) {
                      n.setState(n.baseState), n.props.onClose(e);
                    })
                    .catch(function (e) {
                      return n.setState({
                        updatingInProgress: !1,
                        updatingError: e,
                      });
                    }),
                  n.setState({ updatingInProgress: !0, updatingError: null });
              }),
              (n.deleteParticipationButtonClicked = function (e) {
                e.stopPropagation(),
                  n.setState({ showParticipationDeleteDialog: !0 });
              }),
              (n.deleteParticipationDialogClosed = function (e) {
                e && n.props.onParticipationDeleted(e),
                  n.setState({ showParticipationDeleteDialog: !1 });
              }),
              (n.getParticipationsByProjectURL = function (e) {
                Mt.getApi()
                  .getParticipationsByProjectURL(e)
                  .then(function (e) {
                    return n.setState({
                      participations: e,
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      participations: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  }),
                  n.setState({ loadingInProgress: !0, error: null });
              }),
              (n.deleteParticipation = function () {
                Mt.getApi()
                  .deleteParticipation(n.state.participation.getID())
                  .then(function () {
                    n.setState({ deletingInProgress: !1, deletingError: null });
                  })
                  .catch(function (e) {
                    return n.setState({
                      deletingInProgress: !1,
                      deletingError: e,
                    });
                  }),
                  n.setState({ deletingInProgress: !0, deletingError: null });
              }),
              (n.addParticipationButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showParticipationForm: !0 });
              }),
              (n.state = {
                project: n.props.project,
                showProjectForm: !1,
                showProjectDeleteDialog: !1,
                participationDeleted: !1,
                participation: null,
                participations: [],
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props.classes,
                    r = this.state,
                    a = r.project;
                  r.showProjectForm,
                    r.showParticipationDeleteDialog,
                    r.participations,
                    r.participation;
                  return Object(n.jsx)("div", {
                    className: t.root,
                    children: Object(n.jsx)(Kt.a, {
                      children: Object(n.jsx)(Qt.a, {
                        id: "project".concat(a.getID(), "accountpanel-header"),
                        children: Object(n.jsx)(L.a, {
                          container: !0,
                          spacing: 1,
                          justify: "flex-start",
                          alignItems: "center",
                          children: Object(n.jsx)(L.a, {
                            item: !0,
                            children: Object(n.jsxs)(C.a, {
                              variant: "body1",
                              className: t.heading,
                              children: [
                                "Projekt-ID:     ",
                                a.getID(),
                                ", ",
                                Object(n.jsx)("br", {}),
                                "Projektname:    ",
                                a.getName(),
                                ", ",
                                Object(n.jsx)("br", {}),
                                "Modul:          ",
                                a.getOwner(),
                                Object(n.jsx)("br", {}),
                                "Projekt-Typ:    ",
                                a.getProjectType(),
                                Object(n.jsx)("br", {}),
                                "Semester:       ",
                                a.getSemester(),
                                Object(n.jsx)("br", {}),
                                "Projektinhaber: ",
                                a.getOwner(),
                                Object(n.jsx)("br", {}),
                                Object(n.jsx)(
                                  A.a,
                                  ((e = {
                                    variant: "contained",
                                    color: "secondary",
                                    className: t.buttonAblehnen,
                                  }),
                                  Object(Vt.a)(e, "variant", "outlined"),
                                  Object(Vt.a)(e, "color", "primary"),
                                  Object(Vt.a)(e, "size", "small"),
                                  Object(Vt.a)(
                                    e,
                                    "onClick",
                                    this.deleteParticipationButtonClicked
                                  ),
                                  Object(Vt.a)(e, "children", "Abmelden"),
                                  e)
                                ),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        gn = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(bn),
        On = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).state = {
                project: e.project,
                showProjectForm: !1,
                showProjectDeleteDialog: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    r = this.props.classes,
                    a = this.state.project;
                  return Object(n.jsx)("div", {
                    children: Object(n.jsx)(Kt.a, {
                      children: Object(n.jsx)(Qt.a, {
                        id: "project".concat(a.getID(), "projectpanel-header"),
                        children: Object(n.jsx)(L.a, {
                          container: !0,
                          spacing: 1,
                          justify: "flex-start",
                          alignItems: "center",
                          children: Object(n.jsxs)(L.a, {
                            item: !0,
                            children: [
                              Object(n.jsxs)(C.a, {
                                variant: "body1",
                                className: r.heading,
                                children: [
                                  "Projet-ID:      ",
                                  a.getID(),
                                  ", ",
                                  Object(n.jsx)("br", {}),
                                  "Projektname:    ",
                                  a.getName(),
                                  ", ",
                                  Object(n.jsx)("br", {}),
                                  "Modul:          ",
                                  a.getOwner(),
                                  Object(n.jsx)("br", {}),
                                  "Projekt-Typ:    ",
                                  a.getProjectType(),
                                  Object(n.jsx)("br", {}),
                                  "Semester:       ",
                                  a.getSemester(),
                                  Object(n.jsx)("br", {}),
                                  "Projektinhaber: ",
                                  a.getOwner(),
                                  Object(n.jsx)("br", {}),
                                  "Partner:        ",
                                  a.getExternalPartnerList(),
                                  Object(n.jsx)("br", {}),
                                  "Beschreibung:   ",
                                  a.getShortDescription(),
                                  Object(n.jsx)("br", {}),
                                  Object(n.jsx)(
                                    A.a,
                                    ((e = {
                                      color: "secondary",
                                      className: r.buttonAnmelden,
                                      variant: "contained",
                                    }),
                                    Object(Vt.a)(e, "color", "primary"),
                                    Object(Vt.a)(e, "size", "small"),
                                    Object(Vt.a)(
                                      e,
                                      "onClick",
                                      this.addParticipationButtonClicked
                                    ),
                                    Object(Vt.a)(e, "children", "Anmelden"),
                                    e)
                                  ),
                                  Object(n.jsx)(
                                    A.a,
                                    ((t = {
                                      variant: "contained",
                                      color: "secondary",
                                      className: r.buttonAbmelden,
                                    }),
                                    Object(Vt.a)(t, "variant", "outlined"),
                                    Object(Vt.a)(t, "color", "primary"),
                                    Object(Vt.a)(t, "size", "small"),
                                    Object(Vt.a)(
                                      t,
                                      "onClick",
                                      this.deleteParticipationButtonClicked
                                    ),
                                    Object(Vt.a)(t, "children", "Abmelden"),
                                    t)
                                  ),
                                ],
                              }),
                              Object(n.jsx)(C.a, {
                                variant: "body1",
                                className: r.heading,
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        fn = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(On),
        mn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getProjectsByStudent = Object(pn.a)(
                hn.a.mark(function e() {
                  return hn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            
                            (e.next = 3),
                            Mt.getApi()
                              .getStudentByMail(n.props.currentUserMail)
                              .then(function (e) {
                                return n.setState({
                                  currentUser: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  currentUser: [],
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              })
                          );
                        case 3:
                          n.setState({ loadingInProgress: !0, error: null }),
                            Mt.getApi()
                              .getProjectsByStudent(n.state.currentUser.id)
                              .then(function (e) {
                                return n.setState({
                                  projectStudents: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  projectStudents: [],
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              }),
                            
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (n.getProjectsByAccepted = function () {
                Mt.getApi()
                  .getProjectsByAccepted()
                  .then(function (e) {
                    return n.setState({
                      acceptedProjects: e,
                      loadingInProgress: !1,
                      error: null,
                    });
                  })
                  .catch(function (e) {
                    return n.setState({
                      acceptedProjects: [],
                      loadingInProgress: !1,
                      error: e,
                    });
                  });
              }),
              (n.state = {
                projectStudents: [],
                acceptedProjects: [],
                error: null,
                loadingInProgress: !1,
                currentUser: [],
                student: null,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getProjectsByStudent(), this.getProjectsByAccepted();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state,
                    r = t.projectStudents,
                    a = t.loadingInProgress,
                    o = t.error,
                    i = t.acceptedProjects;
                  return Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                      Object(n.jsxs)(L.a, {
                        item: !0,
                        children: [
                          Object(n.jsx)("h1", { children: "Meine Projekte" }),
                          r.map(function (e) {
                            return Object(n.jsx)(gn, { project: e }, e.getID());
                          }),
                        ],
                      }),
                      Object(n.jsx)(C.a, {
                        variant: "body1",
                        className: e.bottom,
                        children: Object(n.jsxs)(L.a, {
                          children: [
                            Object(n.jsx)("h1", {
                              children: "Verf\xfcgbare Projekte",
                            }),
                            i.map(function (e) {
                              return Object(n.jsx)(
                                fn,
                                { project: e },
                                e.getID()
                              );
                            }),
                            Object(n.jsx)(X, { show: a }),
                            Object(n.jsx)(ae, {
                              error: o,
                              contextErrorMsg:
                                "The list of projects could not be loaded.",
                              onReload: this.getProjectsByStudent,
                            }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        xn = Object(h.f)(
          Object(M.a)(function (e) {
            return { root: { width: "100%" } };
          })(mn)
        ),
        Pn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).state = { rating: e.rating }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state.rating;
                  return Object(n.jsx)("div", {
                    children: Object(n.jsx)(Kt.a, {
                      children: Object(n.jsx)(Qt.a, {
                        children: Object(n.jsxs)(L.a, {
                          container: !0,
                          spacing: 1,
                          justify: "flex-start",
                          alignItems: "center",
                          children: [
                            Object(n.jsx)(L.a, {
                              item: !0,
                              children: Object(n.jsxs)(C.a, {
                                variant: "body1",
                                className: e.heading,
                                children: [
                                  "Projekt:  ",
                                  t.getProject(),
                                  ",",
                                  Object(n.jsx)("br", {}),
                                  "Pr\xfcfer:   ",
                                  t.getEvaluator(),
                                  ",",
                                  Object(n.jsx)("br", {}),
                                  "Note:     ",
                                  t.getGrade(),
                                  ",",
                                  Object(n.jsx)("br", {}),
                                  "Bestanden:",
                                  t.getPassed(),
                                  Object(n.jsx)("br", {}),
                                ],
                              }),
                            }),
                            Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                          ],
                        }),
                      }),
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        vn = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(Pn),
        yn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getRatingsByStudent = Object(pn.a)(
                hn.a.mark(function e() {
                  return hn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Mt.getApi()
                              .getStudentByMail(n.props.currentUserMail)
                              .then(function (e) {
                                return n.setState({
                                  currentUser: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  currentUser: [],
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              })
                          );
                        case 2:
                          n.setState({ loadingInProgress: !0, error: null }),
                            Mt.getApi()
                              .getRatingsByStudent(n.state.currentUser.id)
                              .then(function (e) {
                                return n.setState({
                                  ratingStudents: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  ratingStudents: [],
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              }),
                            
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (n.state = {
                ratingStudents: [],
                error: null,
                loadingInProgress: !1,
                student: null,
                currentUser: [],
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getRatingsByStudent();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state,
                    r = t.loadingInProgress,
                    a = t.error,
                    o = (t.student, t.ratingStudents);
                  return Object(n.jsx)("div", {
                    className: e.root,
                    children: Object(n.jsx)(L.a, {
                      className: e.projectFilter,
                      container: !0,
                      spacing: 1,
                      justify: "flex-start",
                      alignItems: "center",
                      children: Object(n.jsxs)(L.a, {
                        item: !0,
                        children: [
                          Object(n.jsx)("h1", { children: "Semesterbericht" }),
                          Object(n.jsxs)(S.a, {
                            className: e.paper,
                            children: [
                              " ",
                              o.map(function (e) {
                                return Object(n.jsx)(
                                  vn,
                                  { rating: e },
                                  e.getID()
                                );
                              }),
                              Object(n.jsx)(X, { show: r }),
                              Object(n.jsx)(ae, {
                                error: a,
                                contextErrorMsg:
                                  "The list of ratings could not be loaded.",
                                onReload: this.getRatingsByStudent,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        Sn = Object(h.f)(
          Object(M.a)(function (e) {
            return { root: { width: "100%" } };
          })(yn)
        ),
        Cn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getRatingsByDozent = Object(pn.a)(
                hn.a.mark(function e() {
                  return hn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Mt.getApi()
                              .getPersonByMail(n.props.currentUserMail)
                              .then(function (e) {
                                return n.setState({
                                  currentUser: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  currentUser: 0,
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              })
                          );
                        case 2:
                          n.setState({ loadingInProgress: !0, error: null }),
                            Mt.getApi()
                              .getRatingsByDozent(n.state.currentUser[0].id)
                              .then(function (e) {
                                return n.setState({
                                  dozentRatings: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  dozentRatings: [],
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (n.state = {
                dozentRatings: [],
                error: null,
                loadingInProgress: !1,
                currentUser: [],
                person: null,
                ratingForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getRatingsByDozent();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state,
                    r = t.loadingInProgress,
                    a = t.error,
                    o = t.dozentRatings,
                    i = (t.rating, t.showRatingForm);
                  return Object(n.jsxs)("div", {
                    className: e.root,
                    children: [
                      Object(n.jsxs)(L.a, {
                        className: e.projectFilter,
                        container: !0,
                        spacing: 1,
                        justify: "flex-start",
                        alignItems: "center",
                        children: [
                          Object(n.jsxs)(L.a, {
                            item: !0,
                            children: [
                              Object(n.jsx)("h1", {
                                children: "Meine Beurteilungen",
                              }),
                              Object(n.jsxs)(S.a, {
                                className: e.paper,
                                children: [
                                  " ",
                                  o.map(function (e) {
                                    return Object(n.jsx)(
                                      Zr,
                                      { rating: e },
                                      e.getID()
                                    );
                                  }),
                                  Object(n.jsx)(X, { show: r }),
                                  Object(n.jsx)(ae, {
                                    error: a,
                                    contextErrorMsg:
                                      "The list of ratings could not be loaded.",
                                    onReload: this.getRatingsByDozent,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(n.jsx)(A.a, {
                            variant: "contained",
                            color: "primary",
                            startIcon: Object(n.jsx)(le.a, {}),
                            onClick: this.addRatingButtonClicked,
                            children: "Add Rating",
                          }),
                        ],
                      }),
                      Object(n.jsx)(Yr, {
                        show: i,
                        onClose: this.ratingFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        wn = Object(h.f)(
          Object(M.a)(function (e) {
            return { root: { width: "100%" } };
          })(Cn)
        ),
        kn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).searchProjectsByOwner = Object(pn.a)(
                hn.a.mark(function e() {
                  return hn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            0,
                            (e.next = 3),
                            Mt.getApi()
                              .getPersonByMail(n.props.currentUserMail)
                              .then(function (e) {
                                return n.setState({
                                  currentUser: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  currentUser: 0,
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              })
                          );
                        case 3:
                          n.setState({ loadingInProgress: !0, error: null }),
                            Mt.getApi()
                              .searchProjectsByOwner(n.state.currentUser[0].id)
                              .then(function (e) {
                                return n.setState({
                                  projects: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  projects: [],
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (n.projectDeleted = function (e) {
                var t = n.state.projects.filter(function (t) {
                  return t.getID() !== e.getID();
                });
                n.setState({ projects: t, showProjectForm: !1 });
              }),
              (n.addProjectButtonClicked = function (e) {
                e.stopPropagation(), n.setState({ showProjectForm: !0 });
              }),
              (n.projectFormClosed = function (e) {
                if (e) {
                  var t = [].concat(Object(oe.a)(n.state.projects), [e]);
                  n.setState({ projects: t, showProjectForm: !1 });
                } else n.setState({ showProjectForm: !1 });
              }),
              (n.filterFieldValueChange = function (e) {
                var t = e.target.value.toLowerCase();
                n.setState({
                  filteredProjects: n.state.projects.filter(function (e) {
                    var r = e.getSemester().toLowerCase().includes(t),
                      n = e.getModule().toLowerCase().includes(t),
                      a = e.getShortDescription().toLowerCase().includes(t),
                      o = e.getExternalPartnerList().toLowerCase().includes(t),
                      i = e.getCapacity().toLowerCase().includes(t),
                      s = e.getBdDuringExamPeriod().toLowerCase().includes(t),
                      c = e
                        .getBdBeforeLecturePeriod()
                        .toLowerCase()
                        .includes(t),
                      l = e
                        .getBdDuringLecturePeriod()
                        .toLowerCase()
                        .includes(t),
                      d = e.getPreferredBdDuringLecturePeriod
                        .toLowerCase()
                        .includes(t),
                      u = e.getLanguage().toLowerCase().includes(t),
                      j = e.getRoom().toLowerCase().includes(t),
                      h = e.getFlag().toLowerCase().includes(t),
                      p = e.getStatus().toLowerCase().includes(t),
                      b = e.getProjectType().toLowerCase().includes(t),
                      g = e.getOwner().toLowerCase().includes(t);
                    return (
                      r ||
                      n ||
                      a ||
                      o ||
                      i ||
                      s ||
                      c ||
                      l ||
                      d ||
                      u ||
                      j ||
                      h ||
                      p ||
                      b ||
                      g
                    );
                  }),
                  projectFilter: t,
                });
              }),
              (n.clearFilterFieldButtonClicked = function () {
                n.setState({
                  filteredProjects: Object(oe.a)(n.state.projects),
                  projectFilter: "",
                });
              }),
              (n.state = {
                projects: [],
                currentUser: [],
                person: null,
                error: null,
                loadingInProgress: !1,
                showProjectForm: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.searchProjectsByOwner();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.classes,
                    r = this.state,
                    a = r.projects,
                    o = r.loadingInProgress,
                    i = r.error,
                    s = r.showProjectForm;
                  return Object(n.jsxs)("div", {
                    className: t.root,
                    children: [
                      Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                      Object(n.jsx)(L.a, {
                        item: !0,
                        children: Object(n.jsx)(A.a, {
                          variant: "contained",
                          color: "primary",
                          startIcon: Object(n.jsx)(le.a, {}),
                          onClick: this.addProjectButtonClicked,
                          children: "Neues Projekt beantragen",
                        }),
                      }),
                      a.map(function (t) {
                        return Object(n.jsx)(
                          ur,
                          { project: t, onProjectDeleted: e.projectDeleted },
                          t.getID()
                        );
                      }),
                      Object(n.jsx)(X, { show: o }),
                      Object(n.jsx)(ae, {
                        error: i,
                        contextErrorMsg:
                          "The list of projects could not be loaded.",
                        onReload: this.searchProjectsByOwner,
                      }),
                      Object(n.jsx)(sr, {
                        show: s,
                        onClose: this.projectFormClosed,
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        In = Object(h.f)(
          Object(M.a)(function (e) {
            return {
              root: { width: "100%" },
              ProjectFilter: {
                marginTop: e.spacing(2),
                marginBottom: e.spacing(1),
              },
            };
          })(kn)
        ),
        Fn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).expansionPanelStateChanged = function () {
                n.props.onExpandedStateChange(n.props.participation);
              }),
              (n.state = { participation: e.participation }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.classes,
                    r = e.expandedState,
                    a = this.state.participation;
                  return Object(n.jsx)("div", {
                    children: Object(n.jsxs)(Kt.a, {
                      defaultExpanded: !1,
                      expanded: r,
                      onChange: this.expansionPanelStateChanged,
                      children: [
                        Object(n.jsx)(Qt.a, {
                          expandIcon: Object(n.jsx)($t.a, {}),
                          id: "participation".concat(
                            a.getID(),
                            "participationpanel-header"
                          ),
                          children: Object(n.jsxs)(L.a, {
                            container: !0,
                            spacing: 1,
                            justify: "flex-start",
                            alignItems: "center",
                            children: [
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsxs)(C.a, {
                                  variant: "body1",
                                  className: t.heading,
                                  children: [
                                    "Student:  ",
                                    a.getProject(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                    "Projekt:   ",
                                    a.getStudent(),
                                    ",",
                                    Object(n.jsx)("br", {}),
                                  ],
                                }),
                              }),
                              Object(n.jsx)(L.a, { item: !0, xs: !0 }),
                              Object(n.jsx)(L.a, {
                                item: !0,
                                children: Object(n.jsx)(C.a, {
                                  variant: "body2",
                                  color: "textSecondary",
                                  children: "List of participations",
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(n.jsx)(gr.a, {
                          children: Object(n.jsx)(Sn, {
                            show: r,
                            participation: a,
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        En = Object(M.a)(function (e) {
          return { root: { width: "100%" } };
        })(Fn),
        Dn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).getParticipationsByStudent = Object(pn.a)(
                hn.a.mark(function e() {
                  return hn.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            0,
                            (e.next = 3),
                            Mt.getApi()
                              .getParticipationsByStudent(
                                n.props.currentUserMail
                              )
                              .then(function (e) {
                                return n.setState({
                                  currentUser: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  currentUser: 0,
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              })
                          );
                        case 3:
                          n.setState({ loadingInProgress: !0, error: null }),
                            Mt.getApi()
                              .getParticipationsByStudent(
                                n.state.currentUser.id
                              )
                              .then(function (e) {
                                return n.setState({
                                  studentParticipations: e,
                                  loadingInProgress: !1,
                                  error: null,
                                });
                              })
                              .catch(function (e) {
                                return n.setState({
                                  studentParticipations: [],
                                  loadingInProgress: !1,
                                  error: e,
                                });
                              });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (n.state = {
                studentParticipations: [],
                error: null,
                loadingInProgress: !1,
                currentUser: [],
                person: null,
              }),
              n
            );
          }
          return (
            Object(l.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getParticipationsByStudent();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.classes,
                    t = this.state,
                    r = t.loadingInProgress,
                    a = t.error,
                    o = t.studentParticipations;
                  t.participation;
                  return Object(n.jsx)("div", {
                    className: e.root,
                    children: Object(n.jsx)(L.a, {
                      className: e.projectFilter,
                      container: !0,
                      spacing: 1,
                      justify: "flex-start",
                      alignItems: "center",
                      children: Object(n.jsxs)(L.a, {
                        item: !0,
                        children: [
                          Object(n.jsx)("h1", { children: "Meine Teilnahmen" }),
                          Object(n.jsxs)(S.a, {
                            className: e.paper,
                            children: [
                              " ",
                              o.map(function (e) {
                                return Object(n.jsx)(
                                  En,
                                  { rating: e },
                                  e.getID()
                                );
                              }),
                              Object(n.jsx)(X, { show: r }),
                              Object(n.jsx)(ae, {
                                error: a,
                                contextErrorMsg:
                                  "The list of ratings could not be loaded.",
                                onReload: this.getParticipationsByStudent,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(a.Component),
        Tn = Object(h.f)(
          Object(M.a)(function (e) {
            return { root: { width: "100%" } };
          })(Dn)
        ),
        Nn = (function (e) {
          Object(d.a)(r, e);
          var t = Object(u.a)(r);
          function r(e) {
            var n;
            return (
              Object(c.a)(this, r),
              ((n = t.call(this, e)).handleAuthStateChange = function (e) {
                e
                  ? (n.setState({ authLoading: !0 }),
                    e
                      .getIdToken()
                      .then(function (t) {
                        (document.cookie = "token=".concat(t, ";path=/")),
                          n.setState({
                            currentUser: e,
                            authError: null,
                            authLoading: !1,
                          });
                      })
                      .catch(function (e) {
                        n.setState({ authError: e, authLoading: !1 });
                      }))
                  : ((document.cookie = "token=;path=/"),
                    n.setState({ currentUser: null, authLoading: !1 }));
              }),
              (n.handleSignIn = function () {
                n.setState({ authLoading: !0 });
                var e = new f.a.auth.GoogleAuthProvider();
                f.a.auth().signInWithRedirect(e);
              }),
              (n.state = {
                currentUser: null,
                currentUserRole: null,
                appError: null,
                authError: null,
                authLoading: !1,
              }),
              n
            );
          }
          return (
            Object(l.a)(
              r,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    f.a.initializeApp(m),
                      (f.a.auth().languageCode = "en"),
                      f.a.auth().onAuthStateChanged(this.handleAuthStateChange);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state,
                      t = e.currentUser,
                      r = e.appError,
                      a = e.authError,
                      o = e.authLoading;
                    return Object(n.jsxs)(p.a, {
                      theme: y,
                      children: [
                        Object(n.jsx)(b.a, {}),
                        Object(n.jsx)(j.a, {
                          basename: "/static/reactclient",
                          children: Object(n.jsxs)(g.a, {
                            children: [
                              t
                                ? Object(n.jsxs)(n.Fragment, {
                                    children: [
                                      Object(n.jsx)(h.a, {
                                        from: "/",
                                        to: "start",
                                      }),
                                      Object(n.jsx)(h.b, {
                                        exact: !0,
                                        path: "/start",
                                        children: Object(n.jsx)(dn, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/admin",
                                        children: Object(n.jsx)(W, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/student",
                                        children: Object(n.jsx)(un, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/dozent",
                                        children: Object(n.jsx)(_, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/admin/students",
                                        children: Object(n.jsx)(Mr, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/admin/person",
                                        children: Object(n.jsx)(vr, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/admin/projects",
                                        children: Object(n.jsx)(hr, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/admin/projectTypes",
                                        children: Object(n.jsx)(Gr, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/admin/semester",
                                        children: Object(n.jsx)(Er, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/admin/ratings",
                                        children: Object(n.jsx)(en, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/admin/participation",
                                        children: Object(n.jsx)(ln, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/admin/modules",
                                        children: Object(n.jsx)(or, {}),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/student/project",
                                        children: Object(n.jsx)(xn, {
                                          currentUserMail: t.email,
                                        }),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/student/rating",
                                        children: Object(n.jsx)(Sn, {
                                          currentUserMail: t.email,
                                        }),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/student/participation",
                                        children: Object(n.jsx)(Tn, {
                                          currentUserMail: t.email,
                                        }),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/dozent/rating",
                                        children: Object(n.jsx)(wn, {
                                          currentUserMail: t.email,
                                        }),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/dozent/project",
                                        children: Object(n.jsx)(In, {
                                          currentUserMail: t.email,
                                        }),
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/about",
                                        component: G,
                                      }),
                                      Object(n.jsx)(h.b, {
                                        path: "/projects",
                                        children: Object(n.jsx)(hr, {}),
                                      }),
                                    ],
                                  })
                                : Object(n.jsxs)(n.Fragment, {
                                    children: [
                                      Object(n.jsx)(h.a, { to: "/index.html" }),
                                      Object(n.jsx)(Y, {
                                        onSignIn: this.handleSignIn,
                                      }),
                                    ],
                                  }),
                              Object(n.jsx)(X, { show: o }),
                              Object(n.jsx)(ae, {
                                error: a,
                                contextErrorMsg:
                                  "Something went wrong during sighn in process.",
                                onReload: this.handleSignIn,
                              }),
                              Object(n.jsx)(ae, {
                                error: r,
                                contextErrorMsg:
                                  "Something went wrong inside the app. Please reload the page.",
                              }),
                            ],
                          }),
                        }),
                      ],
                    });
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { appError: e };
                  },
                },
              ]
            ),
            r
          );
        })(o.a.Component);
      s.a.render(Object(n.jsx)(Nn, {}), document.getElementById("root"));
    },
  },
  [[257, 1, 2]],
]);
//# sourceMappingURL=main.c16932d8.chunk.js.map
