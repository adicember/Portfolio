import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Aditika: procedural 3D character (React + three.js).
 *
 * Install:   npm i react react-dom three@0.128.0
 * Pin three to 0.128.0: the lighting, colour-space and tone-mapping values below are tuned for that
 * version. Newer three.js (r155+) uses physical light units and would look different.
 *
 * Usage:     <AditikaCharacter />   (fills its parent; the parent needs a height, e.g. 100vh)
 * Keys:      1 Front, 2 Three-quarter, 3 Side, 4 Back, 5 Face
 */

const PRESETS = {
  front: { pos: [0, 2.4, 8.2], tgt: [0, 1.85, 0] },
  three: { pos: [5.2, 2.9, 6.4], tgt: [0, 1.85, 0] },
  side: { pos: [8.4, 2.5, 0.3], tgt: [0, 1.85, 0] },
  back: { pos: [0, 2.7, -8.2], tgt: [0, 1.85, 0] },
  face: { pos: [0, 3.1, 3.3], tgt: [0, 3.0, 0] },
};

export default function AditikaCharacter() {
  const mountRef = useRef(null);
  const apiRef = useRef(null);
  const [wave, setWave] = useState(true);
  const [hintHidden, setHintHidden] = useState(false);
  const [noGL, setNoGL] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* +1 = her left hand waves (right side of the screen), the other hand rests on her hip */
    const WAVE_SIDE = 1;

    let W = mount.clientWidth || 800;
    let H = mount.clientHeight || 600;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      setNoGL(true);
      return;
    }
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W, H);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, {
      display: "block",
      width: "100%",
      height: "100%",
      touchAction: "none",
    });

    /* ---------- scene, character and hair (unchanged from the HTML version) ---------- */
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);

    scene.add(new THREE.HemisphereLight(0xb58cff, 0x1a0830, 0.9));
    var key = new THREE.DirectionalLight(0xfff0f8, 1.1);
    key.position.set(3, 6, 5);
    scene.add(key);
    var rimL = new THREE.PointLight(0xb23dff, 1.6, 16);
    rimL.position.set(-4, 3.5, -3);
    scene.add(rimL);
    var rimR = new THREE.PointLight(0xff4fa0, 1.3, 16);
    rimR.position.set(4, 2.5, -3);
    scene.add(rimR);
    var fill = new THREE.PointLight(0x7a3cff, 0.8, 14);
    fill.position.set(-3, 1.5, 4);
    scene.add(fill);

    var V3 = THREE.Vector3;
    function mat(color, opts) {
      return new THREE.MeshStandardMaterial(Object.assign({ color: color, roughness: 0.6, metalness: 0 }, opts || {}));
    }
    function mesh(geo, m, x, y, z) {
      var o = new THREE.Mesh(geo, m);
      o.position.set(x || 0, y || 0, z || 0);
      return o;
    }
    function between(a, b, r, m) {
      var d = new V3().subVectors(b, a);
      var len = d.length();
      var o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 10), m);
      o.position.copy(a).addScaledVector(d, 0.5);
      o.quaternion.setFromUnitVectors(new V3(0, 1, 0), d.normalize());
      return o;
    }
    function lathe(points, segs, spline, material, zScale) {
      var v = points.map(function (p) { return new THREE.Vector2(p[0], p[1]); });
      var pts = new THREE.SplineCurve(v).getPoints(spline);
      var m = new THREE.Mesh(new THREE.LatheGeometry(pts, segs), material);
      m.scale.z = zScale;
      return { mesh: m, pts: pts };
    }

    var DS = THREE.DoubleSide;
    var skin = mat(0xf0bfa3, { roughness: 0.7 });
    var skinDark = mat(0xe0a58a, { roughness: 0.7 });
    var shirt = mat(0xdcd9bd, { roughness: 0.8, side: DS });
    var collarMat = mat(0xc3c0a0, { roughness: 0.8 });
    var pants = mat(0x5b72c4, { roughness: 0.9, side: DS });
    var jeansEdge = mat(0x46589f, { roughness: 0.9 });
    var belt = mat(0x2b1a14, { roughness: 0.6 });
    var shoeMat = mat(0x2b1a14, { roughness: 0.55 });
    var hairA = mat(0x160a28, { roughness: 0.5, emissive: 0x0c0418 });
    var hairB = mat(0x221044, { roughness: 0.5, emissive: 0x100620 });
    var hairC = mat(0x331a5e, { roughness: 0.45, emissive: 0x14082a });
    var black = mat(0x0b0b0f, { roughness: 0.25, metalness: 0.35 });

    var girl = new THREE.Group();
    scene.add(girl);

    var hipsL = lathe([[0.44, 1.06], [0.445, 0.98], [0.42, 0.86], [0.37, 0.76], [0.28, 0.70], [0.14, 0.675], [0.005, 0.668]], 40, 30, pants, 0.74);
    girl.add(hipsL.mesh);
    var beltM = mesh(new THREE.CylinderGeometry(0.462, 0.462, 0.06, 40, 1, true), belt, 0, 1.045, 0);
    beltM.material = belt.clone(); beltM.material.side = DS;
    beltM.scale.z = 0.74;
    girl.add(beltM);

    var crotch = mesh(new THREE.SphereGeometry(0.3, 28, 20), pants, 0, 0.88, 0);
    crotch.scale.set(1.15, 0.9, 0.78);
    girl.add(crotch);

    function buildLeg(s, splay, thighPitch, knee) {
      var hipG = new THREE.Group();
      hipG.position.set(s * 0.17, 1.0, 0);
      hipG.rotation.set(thighPitch, 0, s * splay);
      hipG.add(mesh(new THREE.SphereGeometry(0.205, 24, 18), pants, 0, 0, 0));
      hipG.add(mesh(new THREE.CylinderGeometry(0.205, 0.185, 0.47, 24), pants, 0, -0.235, 0));
      var kneeG = new THREE.Group();
      kneeG.position.y = -0.47;
      kneeG.rotation.x = knee;
      kneeG.add(mesh(new THREE.SphereGeometry(0.185, 22, 16), pants, 0, 0, 0));
      kneeG.add(mesh(new THREE.CylinderGeometry(0.185, 0.225, 0.40, 24), pants, 0, -0.20, 0));
      var cuff = mesh(new THREE.TorusGeometry(0.225, 0.009, 8, 32), jeansEdge, 0, -0.395, 0);
      cuff.rotation.x = Math.PI / 2;
      kneeG.add(cuff);
      kneeG.add(mesh(new THREE.CylinderGeometry(0.052, 0.048, 0.12, 12), skin, 0, -0.41, 0));
      var foot = new THREE.Group();
      foot.position.y = -0.47;
      foot.rotation.set(-(thighPitch + knee), 0, -s * splay);
      var shoe = mesh(new THREE.SphereGeometry(0.15, 20, 14), shoeMat, 0, -0.04, 0.08);
      shoe.scale.set(0.85, 0.38, 1.6);
      foot.add(shoe);
      kneeG.add(foot);
      hipG.add(kneeG);
      girl.add(hipG);
    }

    var top = new THREE.Group();
    girl.add(top);

    var TS = 0.72;
    var shirtL = lathe([[0.455, 1.07], [0.41, 1.18], [0.335, 1.38], [0.37, 1.58], [0.40, 1.75], [0.43, 1.92], [0.37, 2.05], [0.21, 2.12], [0.145, 2.145]], 48, 70, shirt, TS);
    top.add(shirtL.mesh);
    var collarG = new THREE.Group();
    collarG.position.y = 2.145;
    collarG.scale.z = TS;
    var collar = mesh(new THREE.TorusGeometry(0.145, 0.02, 10, 40), collarMat);
    collar.rotation.x = Math.PI / 2;
    collarG.add(collar);
    top.add(collarG);
    top.add(mesh(new THREE.CylinderGeometry(0.092, 0.1, 0.5, 24), skin, 0, 2.3, 0));

    function buildArm(side, thumbSign) {
      var shoulder = new THREE.Group();
      shoulder.position.set(side * 0.55, 1.98, 0);
      shoulder.add(mesh(new THREE.SphereGeometry(0.125, 20, 16), shirt));
      shoulder.add(mesh(new THREE.CylinderGeometry(0.078, 0.068, 0.55, 16), skin, 0, -0.275, 0));
      shoulder.add(mesh(new THREE.CylinderGeometry(0.115, 0.128, 0.27, 22), shirt, 0, -0.135, 0));

      var elbow = new THREE.Group();
      elbow.position.y = -0.55;
      elbow.add(mesh(new THREE.SphereGeometry(0.07, 14, 12), skin));
      elbow.add(mesh(new THREE.CylinderGeometry(0.066, 0.052, 0.5, 16), skin, 0, -0.25, 0));
      shoulder.add(elbow);

      var hand = new THREE.Group();
      hand.position.y = -0.5;
      var palm = mesh(new THREE.SphereGeometry(0.1, 18, 14), skin, 0, -0.08, 0);
      palm.scale.set(1.1, 1.05, 0.5);
      hand.add(palm);
      var xs = [-0.065, -0.022, 0.022, 0.065];
      var fan = [0.2, 0.07, -0.07, -0.2];
      var lens = [0.11, 0.145, 0.135, 0.105];
      xs.forEach(function (x, k) {
        var piv = new THREE.Group();
        piv.position.set(x, -0.14, 0);
        piv.rotation.z = fan[k];
        var L = lens[k];
        piv.add(mesh(new THREE.CylinderGeometry(0.02, 0.023, L, 10), skin, 0, -L / 2, 0));
        piv.add(mesh(new THREE.SphereGeometry(0.02, 10, 8), skin, 0, -L, 0));
        hand.add(piv);
      });
      var tp = new THREE.Group();
      tp.position.set(thumbSign * 0.095, -0.07, 0);
      tp.rotation.z = thumbSign * 1.0;
      tp.add(mesh(new THREE.CylinderGeometry(0.022, 0.026, 0.1, 10), skin, 0, -0.05, 0));
      tp.add(mesh(new THREE.SphereGeometry(0.022, 10, 8), skin, 0, -0.1, 0));
      hand.add(tp);
      elbow.add(hand);
      top.add(shoulder);
      return { side: side, shoulder: shoulder, elbow: elbow, hand: hand, phase: 0 };
    }

    var waveArm = buildArm(WAVE_SIDE, WAVE_SIDE);

    var hipSide = -WAVE_SIDE;
    var hipArm = buildArm(hipSide, -hipSide);
    (function poseHip(A, s) {
      var L1 = 0.55, L2 = 0.5;
      var S = new V3(s * 0.55, 1.98, 0);
      var f = new V3(s * 0.1, -0.8, 0.55).normalize();
      var P = new V3(s * 0.44, 1.22, 0.08);
      var W = P.clone().addScaledVector(f, -0.08);
      var d = W.clone().sub(S), dist = Math.min(d.length(), L1 + L2 - 0.001), dir = d.clone().normalize();
      var a = (L1 * L1 - L2 * L2 + dist * dist) / (2 * dist);
      var h = Math.sqrt(Math.max(0, L1 * L1 - a * a));
      var pole = new V3(s, 0, -0.5);
      var p = pole.clone().sub(dir.clone().multiplyScalar(pole.dot(dir))).normalize();
      var E = S.clone().addScaledVector(dir, a).addScaledVector(p, h);

      var down = new V3(0, -1, 0);
      var q1 = new THREE.Quaternion().setFromUnitVectors(down, E.clone().sub(S).normalize());
      var q2w = new THREE.Quaternion().setFromUnitVectors(down, W.clone().sub(E).normalize());
      A.shoulder.quaternion.copy(q1);
      A.elbow.quaternion.copy(q1.clone().invert().multiply(q2w));

      var y = f.clone().negate();
      var n0 = new V3(-s, 0, 0);
      var z = n0.clone().sub(y.clone().multiplyScalar(n0.dot(y))).normalize();
      var x = new V3().crossVectors(y, z);
      var qh = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z));
      A.hand.quaternion.copy(q2w.clone().invert().multiply(qh));
    })(hipArm, hipSide);

    var rightArm = waveArm.side < 0 ? waveArm : hipArm;
    var goldMat = mat(0xd9b441, { roughness: 0.28, metalness: 0.5, emissive: 0x5a4210 });
    [-0.38].forEach(function (yy) {
      var bg = mesh(new THREE.TorusGeometry(0.066, 0.018, 12, 36), goldMat, 0, yy, 0);
      bg.rotation.x = Math.PI / 2;
      rightArm.elbow.add(bg);
    });

    buildLeg(hipSide, 0.045, -0.04, 0.06);
    buildLeg(-hipSide, 0.10, -0.20, 0.34);

    var head = new THREE.Group();
    head.position.set(0, 3.02, 0);
    top.add(head);

    var HS = new V3(1, 1.05, 0.97);
    function surf(x, y) {
      var v = 0.3844 - x * x - Math.pow(y / HS.y, 2);
      return HS.z * Math.sqrt(Math.max(0, v));
    }
    var skull = mesh(new THREE.SphereGeometry(0.62, 48, 32), skin);
    skull.scale.copy(HS);
    head.add(skull);

    var eyes = [];
    [-1, 1].forEach(function (s) {
      var g = new THREE.Group();
      g.position.set(s * 0.22, 0.05, 0.5);
      var white = mesh(new THREE.SphereGeometry(0.096, 18, 14), mat(0xffffff, { roughness: 0.3 }));
      white.scale.set(1, 1.15, 0.5);
      g.add(white);
      var iris = mesh(new THREE.SphereGeometry(0.07, 18, 14), mat(0x2a1250, { roughness: 0.2 }), 0, -0.004, 0.026);
      iris.scale.set(1, 1.1, 0.5);
      g.add(iris);
      g.add(mesh(new THREE.SphereGeometry(0.036, 12, 10), mat(0x050308, { roughness: 0.2 }), 0, -0.004, 0.04));
      g.add(mesh(new THREE.SphereGeometry(0.019, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), s * 0.02, 0.03, 0.052));
      g.add(mesh(new THREE.SphereGeometry(0.009, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }), -s * 0.022, -0.028, 0.05));
      head.add(g);
      eyes.push(g);
      head.add(between(new V3(s * 0.295, 0.095, 0.5), new V3(s * 0.365, 0.15, 0.49), 0.007, black));
      head.add(between(new V3(s * 0.3, 0.06, 0.5), new V3(s * 0.38, 0.07, 0.49), 0.007, black));
      (function () {
        var bp = [[0.10, 0.296], [0.215, 0.332], [0.335, 0.304]].map(function (q) {
          return new V3(s * q[0], q[1], surf(q[0], q[1]) + 0.014);
        });
        head.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(bp), 16, 0.02, 8, false), hairA));
        head.add(mesh(new THREE.SphereGeometry(0.02, 10, 8), hairA, bp[0].x, bp[0].y, bp[0].z));
        head.add(mesh(new THREE.SphereGeometry(0.02, 10, 8), hairA, bp[2].x, bp[2].y, bp[2].z));
      })();
    });
    head.add(mesh(new THREE.SphereGeometry(0.035, 12, 10), skinDark, 0, -0.05, surf(0, -0.05) + 0.02));
    var mouth = mesh(new THREE.TorusGeometry(0.095, 0.014, 8, 24, Math.PI), mat(0xb02a68, { roughness: 0.4 }), 0, -0.14, surf(0, -0.2) + 0.012);
    mouth.rotation.z = Math.PI;
    head.add(mouth);
    [-1, 1].forEach(function (s) {
      var blush = new THREE.Mesh(new THREE.CircleGeometry(0.09, 24),
        new THREE.MeshBasicMaterial({ color: 0xff6aa8, transparent: true, opacity: 0.32, depthWrite: false }));
      blush.position.set(s * 0.34, -0.1, surf(0.34, -0.1) + 0.008);
      blush.rotation.y = s * 0.7;
      head.add(blush);
    });

    var glasses = new THREE.Group();
    [-1, 1].forEach(function (s) {
      var rg = mesh(new THREE.TorusGeometry(0.17, 0.024, 14, 48), black, s * 0.235, 0.05, 0.585);
      rg.rotation.y = s * 0.2;
      glasses.add(rg);
      var lens = new THREE.Mesh(new THREE.CircleGeometry(0.17, 40),
        new THREE.MeshBasicMaterial({ color: 0x9b4dff, transparent: true, opacity: 0.12, side: DS, depthWrite: false }));
      lens.position.copy(rg.position);
      lens.rotation.y = s * 0.2;
      glasses.add(lens);
      glasses.add(between(new V3(s * 0.42, 0.08, 0.565), new V3(s * 0.62, 0.05, 0.1), 0.014, black));
    });
    glasses.add(mesh(new THREE.TorusGeometry(0.05, 0.016, 8, 16, Math.PI), black, 0, 0.1, 0.6));
    head.add(glasses);

    /* ---------- wavy hair ---------- */
    var hair = new THREE.Group();
    head.add(hair);
    /* under-layer is now the same purple as the hair, so any tiny gap between strands reads as hair, not a bald/dark patch */
    var capMat = mat(0x3a1c6e, { roughness: 0.55, emissive: 0x160a2c, side: DS });
    var capTop = mesh(new THREE.SphereGeometry(0.64, 40, 24, 0, Math.PI * 2, 0, 1.0), capMat);
    capTop.scale.copy(HS);
    hair.add(capTop);
    var capBack = mesh(new THREE.SphereGeometry(0.64, 40, 28, Math.PI / 2 + 0.85, Math.PI * 2 - 1.7, 0, 2.2), capMat);
    capBack.scale.copy(HS);
    hair.add(capBack);
    /* hair underlayer: a dark purple open shell behind and beside the neck, so gaps between the long
       strands show shadowed hair instead of the smooth cap, skull or neck, even when viewed from below */
    var shellMat = mat(0x24124a, { roughness: 0.7, emissive: 0x0e0620, side: DS });
    var shell = mesh(new THREE.CylinderGeometry(0.585, 0.46, 1.25, 48, 1, true, 1.4, Math.PI * 2 - 2.8), shellMat, 0, -0.78, 0);
    shell.scale.z = 0.97;
    hair.add(shell);

    var ringlets = [];
    var lockMats = [hairA, hairB, hairA, hairC].map(function (m) { var c = m.clone(); c.side = DS; return c; });
    function scalpPt(theta, phi) {
      return new V3(0.65 * Math.sin(theta) * Math.sin(phi), 0.683 * Math.cos(theta), 0.632 * Math.sin(theta) * Math.cos(phi));
    }
    function addStrand(pts, r0, r1, material, segs, hold) {
      hold = hold || 0;
      var root = pts[0].clone();
      var curve = new THREE.CatmullRomCurve3(pts.map(function (p) { return p.clone().sub(root); }));
      var n = segs || 60, radial = 8;
      var frames = curve.computeFrenetFrames(n, false);
      var pos = [], idx = [];
      for (var i = 0; i <= n; i++) {
        var t = i / n, P = curve.getPoint(t), N = frames.normals[i], B = frames.binormals[i];
        var r = t < hold ? r0 : r0 + (r1 - r0) * Math.pow((t - hold) / (1 - hold), 1.1);
        for (var j = 0; j <= radial; j++) {
          var an = j / radial * Math.PI * 2, c = Math.cos(an), sn = Math.sin(an);
          pos.push(P.x + r * (c * N.x + sn * B.x), P.y + r * (c * N.y + sn * B.y), P.z + r * (c * N.z + sn * B.z));
        }
      }
      for (var ii = 0; ii < n; ii++) {
        for (var jj = 0; jj < radial; jj++) {
          var a = ii * (radial + 1) + jj, b = a + radial + 1;
          idx.push(a, b, a + 1, b, b + 1, a + 1);
        }
      }
      var g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      g.computeVertexNormals();
      var holder = new THREE.Group();
      holder.position.copy(root);
      holder.add(new THREE.Mesh(g, material));
      hair.add(holder);
      ringlets.push(holder);
    }
    function smooth(t) { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); }
    function dl(s, wph) { return (0.06 + 0.05 * s) * Math.sin(s * Math.PI * 2 * 2.4 + wph); }
    var TWO_PI = Math.PI * 2;
    function sidePhi(phi0, si) { return si > 0 ? phi0 : TWO_PI - phi0; }

    /* 0. crown: strands radiate from the exact top of the head, so there is no hole at the crown */
    for (var ci = 0; ci < 28; ci++) {
      var cphi = ci / 28 * TWO_PI;
      var cpts = [];
      for (var cm = 0; cm <= 5; cm++) {
        var cs = cm / 5;
        cpts.push(scalpPt(0.0 + 0.7 * cs, cphi + 0.12 * Math.sin(cs * 6 + ci)));
      }
      addStrand(cpts, 0.058, 0.04, lockMats[ci % 4], 30, 0.7);
    }

    /* 1. scalp fill */
    [-1, 1].forEach(function (si) {
      for (var i = 0; i < 7; i++) {
        var phi0 = 0.14 + 0.88 * i / 6;
        var thEnd = 0.98 + 0.28 * smooth((phi0 - 0.5) / 0.5);
        var pts = [];
        for (var m = 0; m <= 6; m++) {
          var sS = m / 6;
          pts.push(scalpPt(0.2 + (thEnd - 0.2) * sS, sidePhi(phi0, si) + si * dl(sS, phi0 * 3)));
        }
        addStrand(pts, 0.052, 0.034, lockMats[(i + (si > 0 ? 1 : 0)) % 4], 40, 0.6);
      }
    });

    /* 2. front locks */
    function hp(phi, y, off, s) {
      var rho = Math.sqrt(Math.max(0.0004, 0.3844 - Math.pow(y / 1.05, 2))) + off;
      return new V3(s * rho * Math.sin(phi), y, rho * 0.97 * Math.cos(phi));
    }
    [-1, 1].forEach(function (si) {
      for (var k = 0; k < 5; k++) {
        var u = k / 4, ph = k * 1.3;
        var w1 = 0.05 * Math.sin(ph), w2 = 0.05 * Math.sin(ph + 1.8);
        var pts = [
          new V3(si * 0.02 * (1 + u), 0.67, -0.04),
          new V3(si * (0.03 + 0.05 * u), 0.645, 0.14),
          hp(0.10 + 0.16 * u, 0.58, 0.03, si),
          hp(0.38 + 0.30 * u + w1, 0.44, 0.05, si),
          hp(0.88 + 0.26 * u + w2, 0.22, 0.055, si),
          hp(1.28 + 0.10 * u, -0.06, 0.06, si),
          new V3(si * (0.63 - 0.03 * u), -0.38, 0.17 + 0.05 * u)
        ];
        for (var q = 1; q <= 8; q++) {
          var t = q / 8;
          pts.push(new V3(
            si * (0.58 - 0.07 * t + 0.045 * Math.sin(t * Math.PI * 3.2 + ph)),
            -0.38 - t * 0.95,
            0.20 + 0.07 * u + 0.12 * t + 0.03 * Math.cos(t * Math.PI * 3.2 + ph)));
        }
        addStrand(pts, 0.058, 0.032, lockMats[(k + (si > 0 ? 1 : 0)) % 4], 90, 0.3);
      }
    });

    /* 2b. centre-parted bangs: a dense sheet of strands that start at the crown, split at a centre part,
           sweep over the forehead and curve out to the temples, so no scalp or stubby ends show at the hairline */
    [-1, 1].forEach(function (si) {
      for (var bk = 0; bk < 18; bk++) {
        var bu = (bk - 8) / 9, bph = bk * 0.9 + (si > 0 ? 0.4 : 0);
        var bpts = [
          new V3(si * 0.012, 0.675, -0.02),
          new V3(si * (0.02 + 0.02 * bu), 0.655, 0.12),
          hp(0.06 + 0.04 * bu, 0.60, 0.05, si),
          hp(0.11 + 0.11 * bu, 0.47 + 0.07 * bu, 0.058, si),
          hp(0.42 + 0.26 * bu + 0.03 * Math.sin(bph), 0.37 - 0.05 * bu, 0.062, si),
          hp(0.95 + 0.22 * bu + 0.03 * Math.sin(bph + 1.6), 0.17 - 0.05 * bu, 0.066, si),
          hp(1.30 + 0.06 * bu, -0.08, 0.068, si),
          new V3(si * (0.62 - 0.03 * bu), -0.38, 0.15 + 0.05 * bu)
        ];
        for (var bq = 1; bq <= 8; bq++) {
          var bt = bq / 8;
          bpts.push(new V3(
            si * (0.58 - 0.07 * bt + 0.045 * Math.sin(bt * Math.PI * 3.2 + bph)),
            -0.38 - bt * 0.85,
            0.19 + 0.05 * bu + 0.12 * bt + 0.03 * Math.cos(bt * Math.PI * 3.2 + bph)));
        }
        addStrand(bpts, 0.056, 0.032, lockMats[(bk + (si > 0 ? 1 : 0)) % 4], 90, 0.3);
      }
    });

    /* 3. original side fill over the temples and ears */
    [-1, 1].forEach(function (si) {
      for (var k = 0; k < 4; k++) {
        var phi0 = 1.1 + 0.1 * k, ph = k * 1.1;
        var pts = [];
        for (var m = 0; m <= 7; m++) {
          var sS = 0.35 * m / 7;
          pts.push(scalpPt(0.2 + 1.4 * m / 7, sidePhi(phi0, si) + si * dl(sS, phi0 * 3)));
        }
        pts.push(new V3(si * 0.62, -0.38, 0.12 + 0.03 * k));
        for (var q = 1; q <= 6; q++) {
          var t = q / 6;
          pts.push(new V3(
            si * (0.57 - 0.08 * t + 0.04 * Math.sin(t * Math.PI * 3.0 + ph)),
            -0.38 - t * 0.8,
            0.12 + 0.03 * k + 0.1 * t + 0.03 * Math.cos(t * Math.PI * 3.0 + ph)));
        }
        addStrand(pts, 0.058, 0.036, lockMats[(k + 2) % 4], 90, 0.3);
      }
    });

    /* 3b. NEW dense side coverage: fills the temple-to-ear wedge that used to show as a dark patch.
           Strands run down the side of the head from the scalp (phi 0.8 → 1.5) and hang beside the
           neck, blending into the front locks and the back hair. */
    [-1, 1].forEach(function (si) {
      for (var k = 0; k < 14; k++) {
        var u = k / 13;
        var phi0 = 0.8 + 0.72 * u;            // 0.8 (cheek side) .. 1.52 (behind the ear)
        var wph = phi0 * 3 + 0.7;
        var pts = [];
        var M = 7;
        for (var m = 0; m <= M; m++) {
          var sS = 0.45 * m / M;
          pts.push(scalpPt(0.25 + 1.65 * m / M, sidePhi(phi0, si) + si * dl(sS, wph)));
        }
        // hang down beside the head/neck; stay slightly outside the skull so nothing pokes through
        var hang = 0.75 + 0.5 * u;
        for (var q = 1; q <= 8; q++) {
          var tt = q / 8;
          var pI = phi0 + (Math.PI * 0.5 - phi0) * 0.35 * smooth(tt);
          var rho = 0.60 - 0.06 * tt + 0.03 * Math.sin(tt * Math.PI * 3 + wph);
          pts.push(new V3(
            si * rho * Math.sin(pI),
            -0.24 - hang * tt,
            0.97 * rho * Math.cos(pI) * (1 - 0.55 * tt) - 0.02 * tt));
        }
        addStrand(pts, 0.062, 0.04, lockMats[(k + 1) % 4], 96, 0.5);
      }
    });

    /* 4. long back + side hair */
    var LEN = 1.3;
    for (var row = 0; row < 2; row++) {
      var NB = 22;
      for (var ib = 0; ib <= NB; ib++) {
        if (row && ib === NB) continue;
        var phi0 = 1.45 + (Math.PI - 1.45) * (ib + (row ? 0.5 : 0)) / NB;
        [-1, 1].forEach(function (si) {
          if (phi0 > Math.PI - 0.001 && si < 0) return;
          var ph = sidePhi(phi0, si);
          var wph = phi0 * 3 + row * 0.5;
          var L = LEN + 0.04 * Math.sin(ib * 1.7 + row);
          var pts = [];
          var M = 8;
          for (var m = 0; m <= M; m++) {
            var sS = 0.5 * m / M;
            pts.push(scalpPt(0.2 + 1.75 * m / M, ph + si * dl(sS, wph)));
          }
          for (var q = 1; q <= 9; q++) {
            var tt = q / 9;
            var phiI = ph + si * dl(0.5 + 0.5 * tt, wph) + (Math.PI - ph) * 0.5 * smooth(tt);
            var rho = 0.604 * (1 - 0.3 * tt) + 0.02 * tt - 0.03 * row * tt;
            pts.push(new V3(rho * Math.sin(phiI), -0.26 - L * tt, 0.97 * rho * Math.cos(phiI)));
          }
          addStrand(pts, 0.062, 0.04, lockMats[(ib + row) % 4], 96, 0.5);
        });
      }
    }

    /* ---------- camera controls + presets ---------- */
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.minDistance = 1.8;
    controls.maxDistance = 14;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotateSpeed = 1.6;

    camera.position.set(...PRESETS.three.pos);
    controls.target.set(...PRESETS.three.tgt);
    controls.update();
    /* lock the vertical angle so dragging only spins her horizontally */
    controls.minPolarAngle = controls.maxPolarAngle = controls.getPolarAngle();

    let goal = null;
    let waving = !reduceMotion;
    if (reduceMotion) setWave(false);

    const go = (name) => {
      const p = PRESETS[name];
      if (!p) return;
      goal = { pos: new V3(...p.pos), tgt: new V3(...p.tgt) };
      controls.autoRotate = false;
      if (reduceMotion) {
        camera.position.copy(goal.pos);
        controls.target.copy(goal.tgt);
        goal = null;
      }
    };

    apiRef.current = {
      go,
      setSpin: (on) => {
        controls.autoRotate = on;
        if (on) goal = null;
      },
      setWaving: (on) => {
        waving = on;
      },
    };

    const onStart = () => {
      goal = null;
      setHintHidden(true);
    };
    controls.addEventListener("start", onStart);
    const hintTimer = setTimeout(() => setHintHidden(true), 7000);

    const onResize = () => {
      W = mount.clientWidth || 800;
      H = mount.clientHeight || 600;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener("resize", onResize);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onResize) : null;
    if (ro) ro.observe(mount);

    /* ---------- animation ---------- */
    const clock = new THREE.Clock();
    let waveAmt = waving ? 1 : 0;
    let nextBlink = 2.5;
    let blinkT = -1;
    const lerp = (a, b, t) => a + (b - a) * t;
    let raf = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;

      if (goal) {
        const k = 1 - Math.pow(0.002, dt);
        camera.position.lerp(goal.pos, k);
        controls.target.lerp(goal.tgt, k);
        if (camera.position.distanceTo(goal.pos) < 0.02 && controls.target.distanceTo(goal.tgt) < 0.02) goal = null;
      }
      controls.update();

      // wave (waving arm only; the other hand stays on the hip)
      waveAmt += ((waving ? 1 : 0) - waveAmt) * (1 - Math.pow(0.01, dt));
      const w = waveAmt;
      const s = waveArm.side;
      const sw = Math.sin(t * 7);
      waveArm.shoulder.rotation.z = s * lerp(0.14, 2.1, w) + s * 0.04 * w * Math.sin(t * 3.5);
      waveArm.elbow.rotation.z = s * (lerp(0.08, 0.9, w) + 0.38 * w * sw);
      waveArm.hand.rotation.z = s * 0.28 * w * Math.sin(t * 7 - 0.9);

      // idle motion
      const motion = reduceMotion ? 0.25 : 1;
      top.position.y = Math.sin(t * 2.2) * 0.012 * motion;
      top.rotation.y = Math.sin(t * 0.9) * 0.07 * motion;
      head.rotation.z = Math.sin(t * 1.3) * 0.05 * motion;
      head.rotation.y = Math.sin(t * 0.7) * 0.1 * motion;
      head.rotation.x = Math.sin(t * 1.1) * 0.02 * motion;
      ringlets.forEach((g, i) => {
        g.rotation.z = Math.sin(t * 2 + i) * 0.02 * motion;
        g.rotation.x = Math.cos(t * 1.7 + i * 0.8) * 0.015 * motion;
      });

      // blink
      if (blinkT < 0 && t > nextBlink) blinkT = 0;
      if (blinkT >= 0) {
        blinkT += dt;
        const by = blinkT < 0.07 ? 1 - (blinkT / 0.07) * 0.9 : blinkT < 0.14 ? 0.1 + ((blinkT - 0.07) / 0.07) * 0.9 : 1;
        eyes.forEach((e) => { e.scale.y = Math.max(by, 0.1); });
        if (blinkT > 0.14) {
          blinkT = -1;
          nextBlink = t + 2 + Math.random() * 3;
          eyes.forEach((e) => { e.scale.y = 1; });
        }
      }

      rimL.position.x = -4 + Math.sin(t * 0.6) * 1.2;
      rimR.position.x = 4 + Math.cos(t * 0.5) * 1.2;

      renderer.render(scene, camera);
    };
    tick();

    /* ---------- cleanup ---------- */
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hintTimer);
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
      controls.removeEventListener("start", onStart);
      controls.dispose();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      apiRef.current = null;
    };
  }, []);

  useEffect(() => { apiRef.current && apiRef.current.setWaving(wave); }, [wave]);

  return (
    <div className="aditika">
      <style>{CSS}</style>
      <div className="aditika-stage" ref={mountRef} />
      <p className={"aditika-hint" + (hintHidden ? " is-hidden" : "")}>
        Drag to spin
      </p>
      {noGL && (
        <div className="aditika-fallback">
          WebGL isn’t available in this browser, so the 3D character can’t be shown.
        </div>
      )}
    </div>
  );
}

const CSS = `
.aditika { position: relative; width: 100%; height: 100%; min-height: 360px; background: transparent; color: #f3eef8;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; overflow: hidden; }
.aditika-stage { position: absolute; inset: 0; cursor: grab; }
.aditika-stage:active { cursor: grabbing; }
.aditika-hint { position: absolute; top: 18px; left: 50%; transform: translateX(-50%); margin: 0;
  max-width: calc(100% - 32px); text-align: center; font-size: 14px; color: #b9aecb;
  pointer-events: none; transition: opacity .8s ease; }
.aditika-hint.is-hidden { opacity: 0; }
.aditika-fallback { position: absolute; inset: 0; display: grid; place-items: center; text-align: center;
  padding: 24px; color: #b9aecb; }
`;
