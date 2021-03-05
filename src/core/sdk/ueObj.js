 class Vector2 {
     constructor(_x, _y) {
         this.x = _x;
         this.y = _y;
         return this;
     }
 }
 class Vector3 {
     constructor(_x, _y, _z) {
         this.x = _x;
         this.y = _y;
         this.z = _z;
         return this;
     }
 };
 // Pitch：沿着Y轴旋转；
 // Roll：沿着X轴旋转；
 // Yaw：沿着Z轴旋转；
 class Rotator {
     constructor(_roll, _pitch, _yaw) {

         this.roll = _roll;
         this.pitch = _pitch;
         this.yaw = _yaw;
         return this;
     }
 }
 class Color {
     constructor(_R = 1, _G = 1, _B = 1, _A = 1) {

         this.r = _R;
         this.g = _G;
         this.b = _B;
         this.a = _A;
         return this;
     }
 };
 class DefaultColor {
     constructor() {};
     red = {
         r: 1,
         g: 0,
         b: 0,
         a: 1
     };
     green = {
         r: 0,
         g: 1,
         b: 0,
         a: 1
     };
     blue = {
         r: 0,
         g: 0,
         b: 1,
         a: 1
     };
     yellow = {
         r: 1,
         g: 1,
         b: 0,
         a: 1
     };
     purple = {
         r: 1,
         g: 0,
         b: 1,
         a: 1
     };
     cyan = {
         r: 0,
         g: 1,
         b: 1,
         a: 1
     };
     black = {
         r: 0,
         g: 0,
         b: 0,
         a: 1
     };
     white = {
         r: 1,
         g: 1,
         b: 1,
         a: 1
     };
     gray = {
         r: 0.5,
         g: 0.5,
         b: 0.5,
         a: 1
     }
 };
 /*
         n
 *       |
 *       |
 * w—————|————→e
 *       |
 *       ↓
 *       s
 * 单位：厘米
 */
 let bounds = function (w = -10000, e = 10000, s = 10000, n = -10000) {
     return {
         west: w,
         east: e,
         south: s,
         north: n
     };
 }
 export {
     Vector2,
     Vector3,
     Rotator,
     Color,
     DefaultColor,
     bounds
 }