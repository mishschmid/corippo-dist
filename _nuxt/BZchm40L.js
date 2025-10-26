const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BTVdkL6L.js","./entry.CrExh5gA.css"])))=>i.map(i=>d[i]);
import{f as Vs,j as be,k as Er,l as br,c as xi,o as fn,n as fe,a as xe,_ as Gs,m as ul,p as qn,b as Ca,h as Xe,C as ji,q as Ve,s as fl,v as Pa,i as jr,t as Ds,x as p1,y as Jr,z as Qr,A as pl,B as ml,D as gl}from"./BTVdkL6L.js";import{R as _l}from"./DAS8e6CQ.js";import{I as vl}from"./ItnSxhnN.js";import{u as xl,a as yl}from"./BApNeJsa.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tr="178",pi={ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ml=0,to=1,Sl=2,m1=1,g1=2,hn=3,Rn=0,Ce=1,Ye=2,Tn=0,mi=1,eo=2,no=3,io=4,El=5,kn=100,bl=101,Tl=102,Al=103,wl=104,Rl=200,Cl=201,Pl=202,Dl=203,Da=204,La=205,Ll=206,Ul=207,Il=208,Nl=209,Fl=210,Ol=211,zl=212,Bl=213,kl=214,Ua=0,Ia=1,Na=2,yi=3,Fa=4,Oa=5,za=6,Ba=7,Ar=0,Hl=1,Vl=2,An=0,Gl=1,ql=2,Wl=3,Xl=4,Yl=5,Zl=6,Kl=7,_1=300,Mi=301,Si=302,ka=303,Ha=304,qs=306,Va=1e3,Vn=1001,Ga=1002,$e=1003,$l=1004,ss=1005,Be=1006,Zs=1007,Gn=1008,tn=1009,v1=1010,x1=1011,Vi=1012,wr=1013,Wn=1014,dn=1015,Ji=1016,Rr=1017,Cr=1018,Gi=1020,y1=35902,M1=1021,S1=1022,Ke=1023,qi=1026,Wi=1027,E1=1028,Pr=1029,b1=1030,Dr=1031,Lr=1033,Ls=33776,Us=33777,Is=33778,Ns=33779,qa=35840,Wa=35841,Xa=35842,Ya=35843,Za=36196,Ka=37492,$a=37496,ja=37808,Ja=37809,Qa=37810,tr=37811,er=37812,nr=37813,ir=37814,sr=37815,ar=37816,rr=37817,or=37818,lr=37819,cr=37820,hr=37821,Fs=36492,dr=36494,ur=36495,T1=36283,fr=36284,pr=36285,mr=36286,jl=3200,Jl=3201,A1=0,Ql=1,bn="",Oe="srgb",Ei="srgb-linear",Bs="linear",te="srgb",jn=7680,so=519,tc=512,ec=513,nc=514,w1=515,ic=516,sc=517,ac=518,rc=519,ao=35044,ro="300 es",un=2e3,ks=2001;class Kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,gr=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function oc(i,t){return(i%t+t)%t}function Ks(i,t,e){return(1-e)*i+e*t}function Di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const lc={DEG2RAD:Os};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=a[r+0],p=a[r+1],g=a[r+2],M=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=M;return}if(d!==M||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*M,A=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const L=Math.sqrt(E),C=Math.atan2(L,f*A);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}const y=o*A;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+M*y,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-o*p,t[e+2]=c*g+h*p+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(a/2),u=l(n/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*n),h=2*(o*e-a*s),d=2*(a*n-r*e);return this.x=e+l*c+r*d-o*h,this.y=n+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $s.copy(this).projectOnVector(t),this.sub($s)}reflect(t){return this.sub($s.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new U,oo=new Xn;class Gt{constructor(t,e,n,s,a,r,o,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c)}set(t,e,n,s,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],M=s[0],m=s[3],f=s[6],A=s[1],E=s[4],y=s[7],L=s[2],C=s[5],w=s[8];return a[0]=r*M+o*A+l*L,a[3]=r*m+o*E+l*C,a[6]=r*f+o*y+l*w,a[1]=c*M+h*A+d*L,a[4]=c*m+h*E+d*C,a[7]=c*f+h*y+d*w,a[2]=u*M+p*A+g*L,a[5]=u*m+p*E+g*C,a[8]=u*f+p*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*a,p=c*a-r*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*r)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*a-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(r*e-n*a)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new Gt;function R1(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cc(){const i=Hs("canvas");return i.style.display="block",i}const lo={};function gi(i){i in lo||(lo[i]=!0,console.warn(i))}function hc(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function dc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const co=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ho=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fc(){const i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===te&&(s.r=pn(s.r),s.g=pn(s.g),s.b=pn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===te&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bn?Bs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return gi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return gi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:t,whitePoint:n,transfer:Bs,toXYZ:co,fromXYZ:ho,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:te,toXYZ:co,fromXYZ:ho,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}const $t=fc();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class pc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Jn===void 0&&(Jn=Hs("canvas")),Jn.width=t.width,Jn.height=t.height;const s=Jn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Jn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=pn(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mc=0;class Ur{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Js(s[r].image)):a.push(Js(s[r]))}else a=Js(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gc=0;const Qs=new U;class Te extends Kn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Vn,s=Vn,a=Be,r=Gn,o=Ke,l=tn,c=Te.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=wi(),this.name="",this.source=new Ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qs).x}get height(){return this.source.getSize(Qs).y}get depth(){return this.source.getSize(Qs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=_1;Te.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(p+1)/2,L=(f+1)/2,C=(h+u)/4,w=(d+M)/4,F=(g+m)/4;return E>y&&E>L?E<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(E),s=C/n,a=w/n):y>L?y<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),n=C/s,a=F/s):L<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(L),n=w/a,s=F/a),this.set(n,s,a,e),this}let A=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-M)/A,this.z=(u-h)/A,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _c extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:n.depth},a=new Te(s);this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ur(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends _c{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class C1 extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vc extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ge):Ge.fromBufferAttribute(a,r),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),as.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(t.matrixWorld),this.union(as)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),rs.subVectors(this.max,Li),Qn.subVectors(t.a,Li),ti.subVectors(t.b,Li),ei.subVectors(t.c,Li),_n.subVectors(ti,Qn),vn.subVectors(ei,ti),Un.subVectors(Qn,ei);let e=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Un.z,Un.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Un.z,0,-Un.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Un.y,Un.x,0];return!ta(e,Qn,ti,ei,rs)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,Qn,ti,ei,rs))?!1:(os.crossVectors(_n,vn),e=[os.x,os.y,os.z],ta(e,Qn,ti,ei,rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const an=[new U,new U,new U,new U,new U,new U,new U,new U],Ge=new U,as=new Qi,Qn=new U,ti=new U,ei=new U,_n=new U,vn=new U,Un=new U,Li=new U,rs=new U,os=new U,In=new U;function ta(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){In.fromArray(i,a);const o=s.x*Math.abs(In.x)+s.y*Math.abs(In.y)+s.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xc=new Qi,Ui=new U,ea=new U;class Ir{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xc.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(ea)),this.expandByPoint(Ui.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const rn=new U,na=new U,ls=new U,xn=new U,ia=new U,cs=new U,sa=new U;class Nr{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){na.copy(t).add(e).multiplyScalar(.5),ls.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(na);const a=t.distanceTo(e)*.5,r=-this.direction.dot(ls),o=xn.dot(this.direction),l=-xn.dot(ls),c=xn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-o,u=r*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const M=1/h;d*=M,u*=M,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(na).addScaledVector(ls,u),p}intersectSphere(t,e){rn.subVectors(t.center,this.origin);const n=rn.dot(this.direction),s=rn.dot(rn)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,n,s,a){ia.subVectors(e,t),cs.subVectors(n,t),sa.crossVectors(ia,cs);let r=this.direction.dot(sa),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;xn.subVectors(this.origin,t);const l=o*this.direction.dot(cs.crossVectors(xn,cs));if(l<0)return null;const c=o*this.direction.dot(ia.cross(xn));if(c<0||l+c>r)return null;const h=-o*xn.dot(sa);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,a,r,o,l,c,h,d,u,p,g,M,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c,h,d,u,p,g,M,m)}set(t,e,n,s,a,r,o,l,c,h,d,u,p,g,M,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ni.setFromMatrixColumn(t,0).length(),a=1/ni.setFromMatrixColumn(t,1).length(),r=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=r*h,p=r*d,g=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,M=c*d;e[0]=u+M*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=M+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,M=c*d;e[0]=u-M*o,e[4]=-r*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=M-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,g=o*h,M=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=g*d+p,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-M*d}else if(t.order==="XZY"){const u=r*l,p=r*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=r*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yc,t,Mc)}lookAt(t,e,n){const s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),yn.crossVectors(n,Le),yn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),yn.crossVectors(n,Le)),yn.normalize(),hs.crossVectors(Le,yn),s[0]=yn.x,s[4]=hs.x,s[8]=Le.x,s[1]=yn.y,s[5]=hs.y,s[9]=Le.y,s[2]=yn.z,s[6]=hs.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],M=n[6],m=n[10],f=n[14],A=n[3],E=n[7],y=n[11],L=n[15],C=s[0],w=s[4],F=s[8],b=s[12],x=s[1],R=s[5],Y=s[9],V=s[13],X=s[2],$=s[6],D=s[10],B=s[14],z=s[3],K=s[7],et=s[11],dt=s[15];return a[0]=r*C+o*x+l*X+c*z,a[4]=r*w+o*R+l*$+c*K,a[8]=r*F+o*Y+l*D+c*et,a[12]=r*b+o*V+l*B+c*dt,a[1]=h*C+d*x+u*X+p*z,a[5]=h*w+d*R+u*$+p*K,a[9]=h*F+d*Y+u*D+p*et,a[13]=h*b+d*V+u*B+p*dt,a[2]=g*C+M*x+m*X+f*z,a[6]=g*w+M*R+m*$+f*K,a[10]=g*F+M*Y+m*D+f*et,a[14]=g*b+M*V+m*B+f*dt,a[3]=A*C+E*x+y*X+L*z,a[7]=A*w+E*R+y*$+L*K,a[11]=A*F+E*Y+y*D+L*et,a[15]=A*b+E*V+y*B+L*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],M=t[7],m=t[11],f=t[15];return g*(+a*l*d-s*c*d-a*o*u+n*c*u+s*o*p-n*l*p)+M*(+e*l*p-e*c*u+a*r*u-s*r*p+s*c*h-a*l*h)+m*(+e*c*d-e*o*p-a*r*d+n*r*p+a*o*h-n*c*h)+f*(-s*o*h-e*l*d+e*o*u+s*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],M=t[13],m=t[14],f=t[15],A=d*m*c-M*u*c+M*l*p-o*m*p-d*l*f+o*u*f,E=g*u*c-h*m*c-g*l*p+r*m*p+h*l*f-r*u*f,y=h*M*c-g*d*c+g*o*p-r*M*p-h*o*f+r*d*f,L=g*d*l-h*M*l-g*o*u+r*M*u+h*o*m-r*d*m,C=e*A+n*E+s*y+a*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=A*w,t[1]=(M*u*a-d*m*a-M*s*p+n*m*p+d*s*f-n*u*f)*w,t[2]=(o*m*a-M*l*a+M*s*c-n*m*c-o*s*f+n*l*f)*w,t[3]=(d*l*a-o*u*a-d*s*c+n*u*c+o*s*p-n*l*p)*w,t[4]=E*w,t[5]=(h*m*a-g*u*a+g*s*p-e*m*p-h*s*f+e*u*f)*w,t[6]=(g*l*a-r*m*a-g*s*c+e*m*c+r*s*f-e*l*f)*w,t[7]=(r*u*a-h*l*a+h*s*c-e*u*c-r*s*p+e*l*p)*w,t[8]=y*w,t[9]=(g*d*a-h*M*a-g*n*p+e*M*p+h*n*f-e*d*f)*w,t[10]=(r*M*a-g*o*a+g*n*c-e*M*c-r*n*f+e*o*f)*w,t[11]=(h*o*a-r*d*a-h*n*c+e*d*c+r*n*p-e*o*p)*w,t[12]=L*w,t[13]=(h*M*s-g*d*s+g*n*u-e*M*u-h*n*m+e*d*m)*w,t[14]=(g*o*s-r*M*s-g*n*l+e*M*l+r*n*m-e*o*m)*w,t[15]=(r*d*s-h*o*s+h*n*l-e*d*l-r*n*u+e*o*u)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,d=o+o,u=a*c,p=a*h,g=a*d,M=r*h,m=r*d,f=o*d,A=l*c,E=l*h,y=l*d,L=n.x,C=n.y,w=n.z;return s[0]=(1-(M+f))*L,s[1]=(p+y)*L,s[2]=(g-E)*L,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(u+f))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+E)*w,s[9]=(m-A)*w,s[10]=(1-(u+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=ni.set(s[0],s[1],s[2]).length();const r=ni.set(s[4],s[5],s[6]).length(),o=ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);const c=1/a,h=1/r,d=1/o;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=un){const l=this.elements,c=2*a/(e-t),h=2*a/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(o===un)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===ks)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=un){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(r-a),u=(e+t)*c,p=(n+s)*h;let g,M;if(o===un)g=(r+a)*d,M=-2*d;else if(o===ks)g=a*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new U,qe=new re,yc=new U(0,0,0),Mc=new U(1,1,1),yn=new U,hs=new U,Le=new U,uo=new re,fo=new Xn;class en{constructor(t=0,e=0,n=0,s=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fo.setFromEuler(this),this.setFromQuaternion(fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Fr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sc=0;const po=new U,ii=new Xn,on=new re,ds=new U,Ii=new U,Ec=new U,bc=new Xn,mo=new U(1,0,0),go=new U(0,1,0),_o=new U(0,0,1),vo={type:"added"},Tc={type:"removed"},si={type:"childadded",child:null},aa={type:"childremoved",child:null};class Me extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new U,e=new en,n=new Xn,s=new U(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Gt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(mo,t)}rotateY(t){return this.rotateOnAxis(go,t)}rotateZ(t){return this.rotateOnAxis(_o,t)}translateOnAxis(t,e){return po.copy(t).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mo,t)}translateY(t){return this.translateOnAxis(go,t)}translateZ(t){return this.translateOnAxis(_o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ii,ds,this.up):on.lookAt(ds,Ii,this.up),this.quaternion.setFromRotationMatrix(on),s&&(on.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(on),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vo),si.child=t,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tc),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vo),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,t,Ec),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,bc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new U(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new U,ln=new U,ra=new U,cn=new U,ai=new U,ri=new U,xo=new U,oa=new U,la=new U,ca=new U,ha=new he,da=new he,ua=new he;class Ze{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),We.subVectors(t,e),s.cross(We);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){We.subVectors(s,e),ln.subVectors(n,e),ra.subVectors(t,e);const r=We.dot(We),o=We.dot(ln),l=We.dot(ra),c=ln.dot(ln),h=ln.dot(ra),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,s,a,r,o,l){return this.getBarycoord(t,e,n,s,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,cn.x),l.addScaledVector(r,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(t,e,n,s,a,r){return ha.setScalar(0),da.setScalar(0),ua.setScalar(0),ha.fromBufferAttribute(t,e),da.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ha,a.x),r.addScaledVector(da,a.y),r.addScaledVector(ua,a.z),r}static isFrontFacing(t,e,n,s){return We.subVectors(n,e),ln.subVectors(t,e),We.cross(ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),We.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;ai.subVectors(s,n),ri.subVectors(a,n),oa.subVectors(t,n);const l=ai.dot(oa),c=ri.dot(oa);if(l<=0&&c<=0)return e.copy(n);la.subVectors(t,s);const h=ai.dot(la),d=ri.dot(la);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(ai,r);ca.subVectors(t,a);const p=ai.dot(ca),g=ri.dot(ca);if(g>=0&&p<=g)return e.copy(a);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ri,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return xo.subVectors(a,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(xo,o);const f=1/(m+M+u);return r=M*f,o=u*f,e.copy(n).addScaledVector(ai,r).addScaledVector(ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const P1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},us={h:0,s:0,l:0};function fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=oc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=fa(r,a,t+1/3),this.g=fa(r,a,t),this.b=fa(r,a,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=P1[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return $t.workingToColorSpace(ve.copy(this),t),Math.round(Wt(ve.r*255,0,255))*65536+Math.round(Wt(ve.g*255,0,255))*256+Math.round(Wt(ve.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(ve.copy(this),e);const n=ve.r,s=ve.g,a=ve.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-n)/d+2;break;case a:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Oe){$t.workingToColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,s=ve.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(us);const n=Ks(Mn.h,us.h,e),s=Ks(Mn.s,us.s,e),a=Ks(Mn.l,us.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new jt;jt.NAMES=P1;let Ac=0;class ts extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=mi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=La,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=so,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==so&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Or extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new U,fs=new ct;let wc=0;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ao,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fs.fromBufferAttribute(this,e),fs.applyMatrix3(t),this.setXY(e,fs.x,fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),a=we(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ao&&(t.usage=this.usage),t}}class D1 extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class L1 extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class mn extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rc=0;const Fe=new re,pa=new Me,oi=new U,Ue=new Qi,Ni=new Qi,ge=new U;class Pn extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(R1(t)?L1:D1)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Gt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new mn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Ue.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ue.min,Ni.min),Ue.expandByPoint(ge),ge.addVectors(Ue.max,Ni.max),Ue.expandByPoint(ge)):(Ue.expandByPoint(Ni.min),Ue.expandByPoint(Ni.max))}Ue.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)ge.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),l&&(oi.fromBufferAttribute(t,c),ge.add(oi)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new U,l[F]=new U;const c=new U,h=new U,d=new U,u=new ct,p=new ct,g=new ct,M=new U,m=new U;function f(F,b,x){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,x),u.fromBufferAttribute(a,F),p.fromBufferAttribute(a,b),g.fromBufferAttribute(a,x),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[F].add(M),o[b].add(M),o[x].add(M),l[F].add(m),l[b].add(m),l[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let F=0,b=A.length;F<b;++F){const x=A[F],R=x.start,Y=x.count;for(let V=R,X=R+Y;V<X;V+=3)f(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const E=new U,y=new U,L=new U,C=new U;function w(F){L.fromBufferAttribute(s,F),C.copy(L);const b=o[F];E.copy(b),E.sub(L.multiplyScalar(L.dot(b))).normalize(),y.crossVectors(C,b);const R=y.dot(l[F])<0?-1:1;r.setXYZW(F,E.x,E.y,E.z,R)}for(let F=0,b=A.length;F<b;++F){const x=A[F],R=x.start,Y=x.count;for(let V=R,X=R+Y;V<X;V+=3)w(t.getX(V+0)),w(t.getX(V+1)),w(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new U,a=new U,r=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,M),r.fromBufferAttribute(e,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Qe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new re,Nn=new Nr,ps=new Ir,Mo=new U,ms=new U,gs=new U,_s=new U,ma=new U,vs=new U,So=new U,xs=new U;class ke extends Me{constructor(t=new Pn,e=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){vs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(ma.fromBufferAttribute(d,t),r?vs.addScaledVector(ma,h):vs.addScaledVector(ma.sub(e),h))}e.add(vs)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(a),Nn.copy(t.ray).recast(t.near),!(ps.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(ps,Mo)===null||Nn.origin.distanceToSquared(Mo)>(t.far-t.near)**2))&&(yo.copy(a).invert(),Nn.copy(t.ray).applyMatrix4(yo),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,M=u.length;g<M;g++){const m=u[g],f=r[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,L=E;y<L;y+=3){const C=o.getX(y),w=o.getX(y+1),F=o.getX(y+2);s=ys(this,f,t,n,c,h,d,C,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){const A=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=ys(this,r,t,n,c,h,d,A,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,M=u.length;g<M;g++){const m=u[g],f=r[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,L=E;y<L;y+=3){const C=y,w=y+1,F=y+2;s=ys(this,f,t,n,c,h,d,C,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,f=M;m<f;m+=3){const A=m,E=m+1,y=m+2;s=ys(this,r,t,n,c,h,d,A,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Cc(i,t,e,n,s,a,r,o){let l;if(t.side===Ce?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,t.side===Rn,o),l===null)return null;xs.copy(o),xs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xs);return c<e.near||c>e.far?null:{distance:c,point:xs.clone(),object:i}}function ys(i,t,e,n,s,a,r,o,l,c){i.getVertexPosition(o,ms),i.getVertexPosition(l,gs),i.getVertexPosition(c,_s);const h=Cc(i,t,e,n,ms,gs,_s,So);if(h){const d=new U;Ze.getBarycoord(So,ms,gs,_s,d),s&&(h.uv=Ze.getInterpolatedAttribute(s,o,l,c,d,new ct)),a&&(h.uv1=Ze.getInterpolatedAttribute(a,o,l,c,d,new ct)),r&&(h.normal=Ze.getInterpolatedAttribute(r,o,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Ze.getNormal(ms,gs,_s,u.normal),h.face=u,h.barycoord=d}return h}class es extends Pn{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(d,2));function g(M,m,f,A,E,y,L,C,w,F,b){const x=y/w,R=L/F,Y=y/2,V=L/2,X=C/2,$=w+1,D=F+1;let B=0,z=0;const K=new U;for(let et=0;et<D;et++){const dt=et*R-V;for(let vt=0;vt<$;vt++){const bt=vt*x-Y;K[M]=bt*A,K[m]=dt*E,K[f]=X,c.push(K.x,K.y,K.z),K[M]=0,K[m]=0,K[f]=C>0?1:-1,h.push(K.x,K.y,K.z),d.push(vt/w),d.push(1-et/F),B+=1}}for(let et=0;et<F;et++)for(let dt=0;dt<w;dt++){const vt=u+dt+$*et,bt=u+dt+$*(et+1),G=u+(dt+1)+$*(et+1),j=u+(dt+1)+$*et;l.push(vt,bt,j),l.push(bt,G,j),z+=6}o.addGroup(p,z,b),p+=z,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=bi(i[e]);for(const s in n)t[s]=n[s]}return t}function Pc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function U1(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Dc={clone:bi,merge:Ee};var Lc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lc,this.fragmentShader=Uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=Pc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class I1 extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new U,Eo=new ct,bo=new ct;class ze extends I1{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,Eo,bo),e.subVectors(bo,Eo)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,ci=1;class Ic extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(li,ci,t,e);s.layers=this.layers,this.add(s);const a=new ze(li,ci,t,e);a.layers=this.layers,this.add(a);const r=new ze(li,ci,t,e);r.layers=this.layers,this.add(r);const o=new ze(li,ci,t,e);o.layers=this.layers,this.add(o);const l=new ze(li,ci,t,e);l.layers=this.layers,this.add(l);const c=new ze(li,ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class N1 extends Te{constructor(t=[],e=Mi,n,s,a,r,o,l,c,h){super(t,e,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nc extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new N1(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new es(5,5,5),a=new Cn({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Tn});a.uniforms.tEquirect.value=e;const r=new ke(s,a),o=e.minFilter;return e.minFilter===Gn&&(e.minFilter=Be),new Ic(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}class Ms extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fc={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fc)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Oc extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const _a=new U,zc=new U,Bc=new Gt;class En{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_a.subVectors(n,e).cross(zc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bc.getNormalMatrix(t),s=this.coplanarPoint(_a).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Ir,kc=new ct(.5,.5),Ss=new U;class zr{constructor(t=new En,e=new En,n=new En,s=new En,a=new En,r=new En){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],M=s[10],m=s[11],f=s[12],A=s[13],E=s[14],y=s[15];if(n[0].setComponents(l-a,u-c,m-p,y-f).normalize(),n[1].setComponents(l+a,u+c,m+p,y+f).normalize(),n[2].setComponents(l+r,u+h,m+g,y+A).normalize(),n[3].setComponents(l-r,u-h,m-g,y-A).normalize(),n[4].setComponents(l-o,u-d,m-M,y-E).normalize(),e===un)n[5].setComponents(l+o,u+d,m+M,y+E).normalize();else if(e===ks)n[5].setComponents(o,d,M,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){Fn.center.set(0,0,0);const e=kc.distanceTo(t.center);return Fn.radius=.7071067811865476+e,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ss.x=s.normal.x>0?t.max.x:t.min.x,Ss.y=s.normal.y>0?t.max.y:t.min.y,Ss.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class To extends Te{constructor(t,e,n,s,a,r,o,l,c){super(t,e,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class F1 extends Te{constructor(t,e,n=Wn,s,a,r,o=$e,l=$e,c,h=qi,d=1){if(h!==qi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class nn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);const h=n[s],u=n[s+1]-h,p=(r-h)/u;return(s+p)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=e||(r.isVector2?new ct:new U);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],a=[],r=[],o=new U,l=new re;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new U)}a[0]=new U,r[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Wt(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(e===!0){let p=Math.acos(Wt(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Br extends nn{constructor(t=0,e=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hc extends Br{constructor(t,e,n,s,a,r){super(t,e,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function kr(){let i=0,t=0,e=0,n=0;function s(a,r,o,l){i=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,d){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,p=(o-r)/h-(l-r)/(h+d)+(l-o)/d;u*=h,p*=h,s(r,o,u,p)},calc:function(a){const r=a*a,o=r*a;return i+t*a+e*r+n*o}}}const Es=new U,va=new kr,xa=new kr,ya=new kr;class Vc extends nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(Es.subVectors(s[0],s[1]).add(s[0]),c=Es);const d=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(Es.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=Es),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),va.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,m),xa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,m),ya.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ya.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(va.calc(l),xa.calc(l),ya.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ao(i,t,e,n,s){const a=(n-t)*.5,r=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*i+e}function Gc(i,t){const e=1-i;return e*e*t}function qc(i,t){return 2*(1-i)*i*t}function Wc(i,t){return i*i*t}function ki(i,t,e,n){return Gc(i,t)+qc(i,e)+Wc(i,n)}function Xc(i,t){const e=1-i;return e*e*e*t}function Yc(i,t){const e=1-i;return 3*e*e*i*t}function Zc(i,t){return 3*(1-i)*i*i*t}function Kc(i,t){return i*i*i*t}function Hi(i,t,e,n,s){return Xc(i,t)+Yc(i,e)+Zc(i,n)+Kc(i,s)}class O1 extends nn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Hi(t,s.x,a.x,r.x,o.x),Hi(t,s.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $c extends nn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Hi(t,s.x,a.x,r.x,o.x),Hi(t,s.y,a.y,r.y,o.y),Hi(t,s.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class z1 extends nn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jc extends nn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class B1 extends nn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(ki(t,s.x,a.x,r.x),ki(t,s.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jc extends nn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(ki(t,s.x,a.x,r.x),ki(t,s.y,a.y,r.y),ki(t,s.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class k1 extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(Ao(o,l.x,c.x,h.x,d.x),Ao(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var _r=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:Vc,CubicBezierCurve:O1,CubicBezierCurve3:$c,EllipseCurve:Br,LineCurve:z1,LineCurve3:jc,QuadraticBezierCurve:B1,QuadraticBezierCurve3:Jc,SplineCurve:k1});class Qc extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _r[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new _r[s.type]().fromJSON(s))}return this}}class wo extends Qc{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new z1(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new B1(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,r){const o=new O1(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new k1(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,a,r),this}absarc(t,e,n,s,a,r){return this.absellipse(t,e,n,n,s,a,r),this}ellipse(t,e,n,s,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,a,r,o,l),this}absellipse(t,e,n,s,a,r,o,l){const c=new Br(t,e,n,s,a,r,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class H1 extends wo{constructor(t){super(t),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new wo().fromJSON(s))}return this}}function th(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let a=V1(i,0,s,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=ah(i,t,a,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,d=-1/0;for(let u=e;u<s;u+=e){const p=i[u],g=i[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Xi(a,r,e,o,l,c,0),r}function V1(i,t,e,n,s){let a;if(s===gh(i,t,e,n)>0)for(let r=t;r<e;r+=n)a=Ro(r/n|0,i[r],i[r+1],a);else for(let r=e-n;r>=t;r-=n)a=Ro(r/n|0,i[r],i[r+1],a);return a&&Ti(a,a.next)&&(Zi(a),a=a.next),a}function Zn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ti(e,e.next)||le(e.prev,e,e.next)===0)){if(Zi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xi(i,t,e,n,s,a,r){if(!i)return;!r&&a&&hh(i,n,s,a);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(a?nh(i,n,s,a):eh(i)){t.push(l.i,i.i,c.i),Zi(i),i=c.next,o=c.next;continue}if(i=c,i===o){r?r===1?(i=ih(Zn(i),t),Xi(i,t,e,n,s,a,2)):r===2&&sh(i,t,e,n,s,a):Xi(Zn(i),t,e,n,s,a,1);break}}}function eh(i){const t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;const s=t.x,a=e.x,r=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,a,r),d=Math.min(o,l,c),u=Math.max(s,a,r),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&zi(s,o,a,l,r,c,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nh(i,t,e,n){const s=i.prev,a=i,r=i.next;if(le(s,a,r)>=0)return!1;const o=s.x,l=a.x,c=r.x,h=s.y,d=a.y,u=r.y,p=Math.min(o,l,c),g=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),f=vr(p,g,t,e,n),A=vr(M,m,t,e,n);let E=i.prevZ,y=i.nextZ;for(;E&&E.z>=f&&y&&y.z<=A;){if(E.x>=p&&E.x<=M&&E.y>=g&&E.y<=m&&E!==s&&E!==r&&zi(o,h,l,d,c,u,E.x,E.y)&&le(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=p&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&zi(o,h,l,d,c,u,y.x,y.y)&&le(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=f;){if(E.x>=p&&E.x<=M&&E.y>=g&&E.y<=m&&E!==s&&E!==r&&zi(o,h,l,d,c,u,E.x,E.y)&&le(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&zi(o,h,l,d,c,u,y.x,y.y)&&le(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ih(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ti(n,s)&&q1(n,e,e.next,s)&&Yi(n,s)&&Yi(s,n)&&(t.push(n.i,e.i,s.i),Zi(e),Zi(e.next),e=i=s),e=e.next}while(e!==i);return Zn(e)}function sh(i,t,e,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&fh(r,o)){let l=W1(r,o);r=Zn(r,r.next),l=Zn(l,l.next),Xi(r,t,e,n,s,a,0),Xi(l,t,e,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function ah(i,t,e,n){const s=[];for(let a=0,r=t.length;a<r;a++){const o=t[a]*n,l=a<r-1?t[a+1]*n:i.length,c=V1(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(uh(c))}s.sort(rh);for(let a=0;a<s.length;a++)e=oh(s[a],e);return e}function rh(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function oh(i,t){const e=lh(i,t);if(!e)return t;const n=W1(e,i);return Zn(n,n.next),Zn(e,e.next)}function lh(i,t){let e=t;const n=i.x,s=i.y;let a=-1/0,r;if(Ti(i,e))return e;do{if(Ti(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>a&&(a=d,r=e.x<e.next.x?e:e.next,d===n))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&G1(s<c?n:a,s,l,c,s<c?a:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Yi(e,i)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&ch(r,e)))&&(r=e,h=d)}e=e.next}while(e!==o);return r}function ch(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function hh(i,t,e,n){let s=i;do s.z===0&&(s.z=vr(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dh(s)}function dh(i){let t,e=1;do{let n=i,s;i=null;let a=null;for(t=0;n;){t++;let r=n,o=0;for(let c=0;c<e&&(o++,r=r.nextZ,!!r);c++);let l=e;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;n=r}a.nextZ=null,e*=2}while(t>1);return i}function vr(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function uh(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function G1(i,t,e,n,s,a,r,o){return(s-r)*(t-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(s-r)*(n-o)}function zi(i,t,e,n,s,a,r,o){return!(i===r&&t===o)&&G1(i,t,e,n,s,a,r,o)}function fh(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ph(i,t)&&(Yi(i,t)&&Yi(t,i)&&mh(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||Ti(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ti(i,t){return i.x===t.x&&i.y===t.y}function q1(i,t,e,n){const s=Ts(le(i,t,e)),a=Ts(le(i,t,n)),r=Ts(le(e,n,i)),o=Ts(le(e,n,t));return!!(s!==a&&r!==o||s===0&&bs(i,e,t)||a===0&&bs(i,n,t)||r===0&&bs(e,i,n)||o===0&&bs(e,t,n))}function bs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ts(i){return i>0?1:i<0?-1:0}function ph(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&q1(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yi(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function mh(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,a=(i.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function W1(i,t){const e=xr(i.i,i.x,i.y),n=xr(t.i,t.x,t.y),s=i.next,a=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function Ro(i,t,e,n){const s=xr(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xr(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gh(i,t,e,n){let s=0;for(let a=t,r=e-n;a<e;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class _h{static triangulate(t,e,n=2){return th(t,e,n)}}class ui{static area(t){const e=t.length;let n=0;for(let s=e-1,a=0;a<e;s=a++)n+=t[s].x*t[a].y-t[a].x*t[s].y;return n*.5}static isClockWise(t){return ui.area(t)<0}static triangulateShape(t,e){const n=[],s=[],a=[];Co(t),Po(n,t);let r=t.length;e.forEach(Co);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Po(n,e[l]);const o=_h.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Co(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Po(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Hr extends Pn{constructor(t=new H1([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new mn(s,3)),this.setAttribute("uv",new mn(a,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:vh;let E,y=!1,L,C,w,F;f&&(E=f.getSpacedPoints(h),y=!0,u=!1,L=f.computeFrenetFrames(h,!1),C=new U,w=new U,F=new U),u||(m=0,p=0,g=0,M=0);const b=o.extractPoints(c);let x=b.shape;const R=b.holes;if(!ui.isClockWise(x)){x=x.reverse();for(let S=0,ht=R.length;S<ht;S++){const nt=R[S];ui.isClockWise(nt)&&(R[S]=nt.reverse())}}function V(S){const nt=10000000000000001e-36;let ut=S[0];for(let Z=1;Z<=S.length;Z++){const yt=Z%S.length,at=S[yt],Mt=at.x-ut.x,Ht=at.y-ut.y,T=Mt*Mt+Ht*Ht,_=Math.max(Math.abs(at.x),Math.abs(at.y),Math.abs(ut.x),Math.abs(ut.y)),O=nt*_*_;if(T<=O){S.splice(yt,1),Z--;continue}ut=at}}V(x),R.forEach(V);const X=R.length,$=x;for(let S=0;S<X;S++){const ht=R[S];x=x.concat(ht)}function D(S,ht,nt){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().addScaledVector(ht,nt)}const B=x.length;function z(S,ht,nt){let ut,Z,yt;const at=S.x-ht.x,Mt=S.y-ht.y,Ht=nt.x-S.x,T=nt.y-S.y,_=at*at+Mt*Mt,O=at*T-Mt*Ht;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(_),Q=Math.sqrt(Ht*Ht+T*T),W=ht.x-Mt/q,Pt=ht.y+at/q,ft=nt.x-T/Q,wt=nt.y+Ht/Q,Dt=((ft-W)*T-(wt-Pt)*Ht)/(at*T-Mt*Ht);ut=W+at*Dt-S.x,Z=Pt+Mt*Dt-S.y;const tt=ut*ut+Z*Z;if(tt<=2)return new ct(ut,Z);yt=Math.sqrt(tt/2)}else{let q=!1;at>Number.EPSILON?Ht>Number.EPSILON&&(q=!0):at<-Number.EPSILON?Ht<-Number.EPSILON&&(q=!0):Math.sign(Mt)===Math.sign(T)&&(q=!0),q?(ut=-Mt,Z=at,yt=Math.sqrt(_)):(ut=at,Z=Mt,yt=Math.sqrt(_/2))}return new ct(ut/yt,Z/yt)}const K=[];for(let S=0,ht=$.length,nt=ht-1,ut=S+1;S<ht;S++,nt++,ut++)nt===ht&&(nt=0),ut===ht&&(ut=0),K[S]=z($[S],$[nt],$[ut]);const et=[];let dt,vt=K.concat();for(let S=0,ht=X;S<ht;S++){const nt=R[S];dt=[];for(let ut=0,Z=nt.length,yt=Z-1,at=ut+1;ut<Z;ut++,yt++,at++)yt===Z&&(yt=0),at===Z&&(at=0),dt[ut]=z(nt[ut],nt[yt],nt[at]);et.push(dt),vt=vt.concat(dt)}let bt;if(m===0)bt=ui.triangulateShape($,R);else{const S=[],ht=[];for(let nt=0;nt<m;nt++){const ut=nt/m,Z=p*Math.cos(ut*Math.PI/2),yt=g*Math.sin(ut*Math.PI/2)+M;for(let at=0,Mt=$.length;at<Mt;at++){const Ht=D($[at],K[at],yt);Ut(Ht.x,Ht.y,-Z),ut===0&&S.push(Ht)}for(let at=0,Mt=X;at<Mt;at++){const Ht=R[at];dt=et[at];const T=[];for(let _=0,O=Ht.length;_<O;_++){const q=D(Ht[_],dt[_],yt);Ut(q.x,q.y,-Z),ut===0&&T.push(q)}ut===0&&ht.push(T)}}bt=ui.triangulateShape(S,ht)}const G=bt.length,j=g+M;for(let S=0;S<B;S++){const ht=u?D(x[S],vt[S],j):x[S];y?(w.copy(L.normals[0]).multiplyScalar(ht.x),C.copy(L.binormals[0]).multiplyScalar(ht.y),F.copy(E[0]).add(w).add(C),Ut(F.x,F.y,F.z)):Ut(ht.x,ht.y,0)}for(let S=1;S<=h;S++)for(let ht=0;ht<B;ht++){const nt=u?D(x[ht],vt[ht],j):x[ht];y?(w.copy(L.normals[S]).multiplyScalar(nt.x),C.copy(L.binormals[S]).multiplyScalar(nt.y),F.copy(E[S]).add(w).add(C),Ut(F.x,F.y,F.z)):Ut(nt.x,nt.y,d/h*S)}for(let S=m-1;S>=0;S--){const ht=S/m,nt=p*Math.cos(ht*Math.PI/2),ut=g*Math.sin(ht*Math.PI/2)+M;for(let Z=0,yt=$.length;Z<yt;Z++){const at=D($[Z],K[Z],ut);Ut(at.x,at.y,d+nt)}for(let Z=0,yt=R.length;Z<yt;Z++){const at=R[Z];dt=et[Z];for(let Mt=0,Ht=at.length;Mt<Ht;Mt++){const T=D(at[Mt],dt[Mt],ut);y?Ut(T.x,T.y+E[h-1].y,E[h-1].x+nt):Ut(T.x,T.y,d+nt)}}}lt(),st();function lt(){const S=s.length/3;if(u){let ht=0,nt=B*ht;for(let ut=0;ut<G;ut++){const Z=bt[ut];At(Z[2]+nt,Z[1]+nt,Z[0]+nt)}ht=h+m*2,nt=B*ht;for(let ut=0;ut<G;ut++){const Z=bt[ut];At(Z[0]+nt,Z[1]+nt,Z[2]+nt)}}else{for(let ht=0;ht<G;ht++){const nt=bt[ht];At(nt[2],nt[1],nt[0])}for(let ht=0;ht<G;ht++){const nt=bt[ht];At(nt[0]+B*h,nt[1]+B*h,nt[2]+B*h)}}n.addGroup(S,s.length/3-S,0)}function st(){const S=s.length/3;let ht=0;xt($,ht),ht+=$.length;for(let nt=0,ut=R.length;nt<ut;nt++){const Z=R[nt];xt(Z,ht),ht+=Z.length}n.addGroup(S,s.length/3-S,1)}function xt(S,ht){let nt=S.length;for(;--nt>=0;){const ut=nt;let Z=nt-1;Z<0&&(Z=S.length-1);for(let yt=0,at=h+m*2;yt<at;yt++){const Mt=B*yt,Ht=B*(yt+1),T=ht+ut+Mt,_=ht+Z+Mt,O=ht+Z+Ht,q=ht+ut+Ht;Zt(T,_,O,q)}}}function Ut(S,ht,nt){l.push(S),l.push(ht),l.push(nt)}function At(S,ht,nt){Xt(S),Xt(ht),Xt(nt);const ut=s.length/3,Z=A.generateTopUV(n,s,ut-3,ut-2,ut-1);kt(Z[0]),kt(Z[1]),kt(Z[2])}function Zt(S,ht,nt,ut){Xt(S),Xt(ht),Xt(ut),Xt(ht),Xt(nt),Xt(ut);const Z=s.length/3,yt=A.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);kt(yt[0]),kt(yt[1]),kt(yt[3]),kt(yt[1]),kt(yt[2]),kt(yt[3])}function Xt(S){s.push(l[S*3+0]),s.push(l[S*3+1]),s.push(l[S*3+2])}function kt(S){a.push(S.x),a.push(S.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xh(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _r[s.type]().fromJSON(s)),new Hr(n,t.options)}}const vh={generateTopUV:function(i,t,e,n,s){const a=t[e*3],r=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(a,r),new ct(o,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,a){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],p=t[s*3+1],g=t[s*3+2],M=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new ct(r,1-l),new ct(c,1-d),new ct(u,1-g),new ct(M,1-f)]:[new ct(o,1-l),new ct(h,1-d),new ct(p,1-g),new ct(m,1-f)]}};function xh(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];e.shapes.push(a.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ai extends Pn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,p=[],g=[],M=[],m=[];for(let f=0;f<h;f++){const A=f*u-r;for(let E=0;E<c;E++){const y=E*d-a;g.push(y,-A,0),M.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const E=A+c*f,y=A+c*(f+1),L=A+1+c*(f+1),C=A+1+c*f;p.push(E,y,C),p.push(y,L,C)}this.setIndex(p),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(M,3)),this.setAttribute("uv",new mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}class Do extends ts{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A1,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yh extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mh extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class X1 extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ma=new re,Lo=new U,Uo=new U;class Sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Lo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lo),Uo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uo),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Y1 extends I1{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Eh extends Sh{constructor(){super(new Y1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Io extends X1{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Eh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bh extends X1{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Th extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const No=new re;class Fo{constructor(t,e,n=0,s=1/0){this.ray=new Nr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return No.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(No),this}intersectObject(t,e=!0,n=[]){return yr(t,this,n,e),n.sort(Oo),n}intersectObjects(t,e=!0,n=[]){for(let s=0,a=t.length;s<a;s++)yr(t[s],this,n,e);return n.sort(Oo),n}}function Oo(i,t){return i.distance-t.distance}function yr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)yr(a[r],t,e,!0)}}class zo{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ah extends Kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Bo(i,t,e,n){const s=wh(n);switch(e){case M1:return i*t;case E1:return i*t/s.components*s.byteLength;case Pr:return i*t/s.components*s.byteLength;case b1:return i*t*2/s.components*s.byteLength;case Dr:return i*t*2/s.components*s.byteLength;case S1:return i*t*3/s.components*s.byteLength;case Ke:return i*t*4/s.components*s.byteLength;case Lr:return i*t*4/s.components*s.byteLength;case Ls:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Is:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case qa:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case er:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ir:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ar:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case or:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fs:case dr:case ur:return Math.ceil(i/4)*Math.ceil(t/4)*16;case T1:case fr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pr:case mr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wh(i){switch(i){case tn:case v1:return{byteLength:1,components:1};case Vi:case x1:case Ji:return{byteLength:2,components:1};case Rr:case Cr:return{byteLength:2,components:4};case Wn:case wr:case dn:return{byteLength:4,components:1};case y1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Z1(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Rh(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],M=d[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const M=d[p];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ph=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,td=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,su=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,du=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_u=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Su=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ru=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Du=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ou=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ku=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ku=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$u=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ju=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,r2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Ch,alphahash_pars_fragment:Ph,alphamap_fragment:Dh,alphamap_pars_fragment:Lh,alphatest_fragment:Uh,alphatest_pars_fragment:Ih,aomap_fragment:Nh,aomap_pars_fragment:Fh,batching_pars_vertex:Oh,batching_vertex:zh,begin_vertex:Bh,beginnormal_vertex:kh,bsdfs:Hh,iridescence_fragment:Vh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:qh,clipping_planes_pars_fragment:Wh,clipping_planes_pars_vertex:Xh,clipping_planes_vertex:Yh,color_fragment:Zh,color_pars_fragment:Kh,color_pars_vertex:$h,color_vertex:jh,common:Jh,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:td,displacementmap_pars_vertex:ed,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:ad,colorspace_pars_fragment:rd,envmap_fragment:od,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Md,envmap_vertex:dd,fog_vertex:ud,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:_d,lights_lambert_fragment:vd,lights_lambert_pars_fragment:xd,lights_pars_begin:yd,lights_toon_fragment:Sd,lights_toon_pars_fragment:Ed,lights_phong_fragment:bd,lights_phong_pars_fragment:Td,lights_physical_fragment:Ad,lights_physical_pars_fragment:wd,lights_fragment_begin:Rd,lights_fragment_maps:Cd,lights_fragment_end:Pd,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Id,map_fragment:Nd,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:zd,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:kd,morphinstance_vertex:Hd,morphcolor_vertex:Vd,morphnormal_vertex:Gd,morphtarget_pars_vertex:qd,morphtarget_vertex:Wd,normal_fragment_begin:Xd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Kd,normal_vertex:$d,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:tu,iridescence_pars_fragment:eu,opaque_fragment:nu,packing:iu,premultiplied_alpha_fragment:su,project_vertex:au,dithering_fragment:ru,dithering_pars_fragment:ou,roughnessmap_fragment:lu,roughnessmap_pars_fragment:cu,shadowmap_pars_fragment:hu,shadowmap_pars_vertex:du,shadowmap_vertex:uu,shadowmask_pars_fragment:fu,skinbase_vertex:pu,skinning_pars_vertex:mu,skinning_vertex:gu,skinnormal_vertex:_u,specularmap_fragment:vu,specularmap_pars_fragment:xu,tonemapping_fragment:yu,tonemapping_pars_fragment:Mu,transmission_fragment:Su,transmission_pars_fragment:Eu,uv_pars_fragment:bu,uv_pars_vertex:Tu,uv_vertex:Au,worldpos_vertex:wu,background_vert:Ru,background_frag:Cu,backgroundCube_vert:Pu,backgroundCube_frag:Du,cube_vert:Lu,cube_frag:Uu,depth_vert:Iu,depth_frag:Nu,distanceRGBA_vert:Fu,distanceRGBA_frag:Ou,equirect_vert:zu,equirect_frag:Bu,linedashed_vert:ku,linedashed_frag:Hu,meshbasic_vert:Vu,meshbasic_frag:Gu,meshlambert_vert:qu,meshlambert_frag:Wu,meshmatcap_vert:Xu,meshmatcap_frag:Yu,meshnormal_vert:Zu,meshnormal_frag:Ku,meshphong_vert:$u,meshphong_frag:ju,meshphysical_vert:Ju,meshphysical_frag:Qu,meshtoon_vert:t2,meshtoon_frag:e2,points_vert:n2,points_frag:i2,shadow_vert:s2,shadow_frag:a2,sprite_vert:r2,sprite_frag:o2},mt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},je={basic:{uniforms:Ee([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ee([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ee([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ee([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ee([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ee([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ee([mt.points,mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ee([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ee([mt.common,mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ee([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ee([mt.sprite,mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ee([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ee([mt.lights,mt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};je.physical={uniforms:Ee([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const As={r:0,b:0,g:0},On=new en,l2=new re;function c2(i,t,e,n,s,a,r){const o=new jt(0);let l=a===!0?0:1,c,h,d=null,u=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function M(E){let y=!1;const L=g(E);L===null?f(o,l):L&&L.isColor&&(f(L,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const L=g(y);L&&(L.isCubeTexture||L.mapping===qs)?(h===void 0&&(h=new ke(new es(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:bi(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),On.copy(y.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l2.makeRotationFromEuler(On)),h.material.toneMapped=$t.getTransfer(L.colorSpace)!==te,(d!==L||u!==L.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=L,u=L.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new ke(new Ai(2,2),new Cn({name:"BackgroundMaterial",uniforms:bi(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$t.getTransfer(L.colorSpace)!==te,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||u!==L.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=L,u=L.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,y){E.getRGB(As,U1(i)),n.buffers.color.setClear(As.r,As.g,As.b,y,r)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:M,addToRenderList:m,dispose:A}}function h2(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(x,R,Y,V,X){let $=!1;const D=d(V,Y,R);a!==D&&(a=D,c(a.object)),$=p(x,V,Y,X),$&&g(x,V,Y,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,y(x,R,Y,V),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,R,Y){const V=Y.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let $=X[R.id];$===void 0&&($={},X[R.id]=$);let D=$[V];return D===void 0&&(D=u(l()),$[V]=D),D}function u(x){const R=[],Y=[],V=[];for(let X=0;X<e;X++)R[X]=0,Y[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:Y,attributeDivisors:V,object:x,attributes:{},index:null}}function p(x,R,Y,V){const X=a.attributes,$=R.attributes;let D=0;const B=Y.getAttributes();for(const z in B)if(B[z].location>=0){const et=X[z];let dt=$[z];if(dt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),et===void 0||et.attribute!==dt||dt&&et.data!==dt.data)return!0;D++}return a.attributesNum!==D||a.index!==V}function g(x,R,Y,V){const X={},$=R.attributes;let D=0;const B=Y.getAttributes();for(const z in B)if(B[z].location>=0){let et=$[z];et===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(et=x.instanceColor));const dt={};dt.attribute=et,et&&et.data&&(dt.data=et.data),X[z]=dt,D++}a.attributes=X,a.attributesNum=D,a.index=V}function M(){const x=a.newAttributes;for(let R=0,Y=x.length;R<Y;R++)x[R]=0}function m(x){f(x,0)}function f(x,R){const Y=a.newAttributes,V=a.enabledAttributes,X=a.attributeDivisors;Y[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),X[x]!==R&&(i.vertexAttribDivisor(x,R),X[x]=R)}function A(){const x=a.newAttributes,R=a.enabledAttributes;for(let Y=0,V=R.length;Y<V;Y++)R[Y]!==x[Y]&&(i.disableVertexAttribArray(Y),R[Y]=0)}function E(x,R,Y,V,X,$,D){D===!0?i.vertexAttribIPointer(x,R,Y,X,$):i.vertexAttribPointer(x,R,Y,V,X,$)}function y(x,R,Y,V){M();const X=V.attributes,$=Y.getAttributes(),D=R.defaultAttributeValues;for(const B in $){const z=$[B];if(z.location>=0){let K=X[B];if(K===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const et=K.normalized,dt=K.itemSize,vt=t.get(K);if(vt===void 0)continue;const bt=vt.buffer,G=vt.type,j=vt.bytesPerElement,lt=G===i.INT||G===i.UNSIGNED_INT||K.gpuType===wr;if(K.isInterleavedBufferAttribute){const st=K.data,xt=st.stride,Ut=K.offset;if(st.isInstancedInterleavedBuffer){for(let At=0;At<z.locationSize;At++)f(z.location+At,st.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let At=0;At<z.locationSize;At++)m(z.location+At);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let At=0;At<z.locationSize;At++)E(z.location+At,dt/z.locationSize,G,et,xt*j,(Ut+dt/z.locationSize*At)*j,lt)}else{if(K.isInstancedBufferAttribute){for(let st=0;st<z.locationSize;st++)f(z.location+st,K.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let st=0;st<z.locationSize;st++)m(z.location+st);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let st=0;st<z.locationSize;st++)E(z.location+st,dt/z.locationSize,G,et,dt*j,dt/z.locationSize*st*j,lt)}}else if(D!==void 0){const et=D[B];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(z.location,et);break;case 3:i.vertexAttrib3fv(z.location,et);break;case 4:i.vertexAttrib4fv(z.location,et);break;default:i.vertexAttrib1fv(z.location,et)}}}}A()}function L(){F();for(const x in n){const R=n[x];for(const Y in R){const V=R[Y];for(const X in V)h(V[X].object),delete V[X];delete R[Y]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const Y in R){const V=R[Y];for(const X in V)h(V[X].object),delete V[X];delete R[Y]}delete n[x.id]}function w(x){for(const R in n){const Y=n[R];if(Y[x.id]===void 0)continue;const V=Y[x.id];for(const X in V)h(V[X].object),delete V[X];delete Y[x.id]}}function F(){b(),r=!0,a!==s&&(a=s,c(a.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:A}}function d2(i,t,e){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let M=0;M<d;M++)g+=h[M]*u[M];e.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function u2(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Ke&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const F=w===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==tn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dn&&!F)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function f2(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new En,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const A=a?0:n,E=A*4;let y=f.clippingState||null;l.value=y,y=h(g,u,E,p);for(let L=0;L!==E;++L)y[L]=e[L];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const f=p+M*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,y=p;E!==M;++E,y+=4)r.copy(d[E]).applyMatrix4(A,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function p2(i){let t=new WeakMap;function e(r,o){return o===ka?r.mapping=Mi:o===Ha&&(r.mapping=Si),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===ka||o===Ha)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Nc(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const fi=4,ko=[.125,.215,.35,.446,.526,.582],Hn=20,Sa=new Y1,Ho=new jt;let Ea=null,ba=0,Ta=0,Aa=!1;const Bn=(1+Math.sqrt(5))/2,hi=1/Bn,Vo=[new U(-Bn,hi,0),new U(Bn,hi,0),new U(-hi,0,Bn),new U(hi,0,Bn),new U(0,Bn,-hi),new U(0,Bn,hi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],m2=new U;class Go{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,a={}){const{size:r=256,position:o=m2}=a;Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,ba,Ta),this._renderer.xr.enabled=Aa,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Ji,format:Ke,colorSpace:Ei,depthBuffer:!1},s=qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g2(a)),this._blurMaterial=_2(a,t,e)}return s}_compileMaterial(t){const e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,n,s,a){const l=new ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Ho),d.toneMapping=An,d.autoClear=!1;const g=new Or({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),M=new ke(new es,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(Ho),m=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[A],a.y,a.z)):E===1?(l.up.set(0,0,c[A]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[A],a.z)):(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[A]));const y=this._cubeSize;ws(s,E*y,A>2?y:0,y,y),d.setRenderTarget(s),m&&d.render(M,l),d.render(t,l)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Mi||t.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wo());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new ke(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Vo[(s-a-1)%Vo.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ke(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Hn-1),M=a/g,m=isFinite(a)?1+Math.floor(h*M):Hn;m>Hn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const f=[];let A=0;for(let w=0;w<Hn;++w){const F=w/M,b=Math.exp(-F*F/2);f.push(b),w===0?A+=b:w<m&&(A+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/A;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const y=this._sizeLods[s],L=3*y*(s>E-fi?s-E+fi:0),C=4*(this._cubeSize-y);ws(e,L,C,3*y,2*y),l.setRenderTarget(e),l.render(d,Sa)}}function g2(i){const t=[],e=[],n=[];let s=i;const a=i-fi+1+ko.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let l=1/o;r>i-fi?l=ko[r-i+fi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,M=3,m=2,f=1,A=new Float32Array(M*g*p),E=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,F=C>2?0:-1,b=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];A.set(b,M*g*C),E.set(u,m*g*C);const x=[C,C,C,C,C,C];y.set(x,f*g*C)}const L=new Pn;L.setAttribute("position",new Qe(A,M)),L.setAttribute("uv",new Qe(E,m)),L.setAttribute("faceIndex",new Qe(y,f)),t.push(L),s>fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qo(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _2(i,t,e){const n=new Float32Array(Hn),s=new U(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Wo(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Xo(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Vr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v2(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ka||l===Ha,h=l===Mi||l===Si;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Go(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Go(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function x2(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&gi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y2(i,t,e,n){const s={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];const p=a.get(u);p&&(t.remove(p),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let M=0;if(p!==null){const A=p.array;M=p.version;for(let E=0,y=A.length;E<y;E+=3){const L=A[E+0],C=A[E+1],w=A[E+2];u.push(L,C,C,w,w,L)}}else if(g!==void 0){const A=g.array;M=g.version;for(let E=0,y=A.length/3-1;E<y;E+=3){const L=E+0,C=E+1,w=E+2;u.push(L,C,C,w,w,L)}}else return;const m=new(R1(u)?L1:D1)(u,1);m.version=M;const f=a.get(d);f&&t.remove(f),a.set(d,m)}function h(d){const u=a.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function M2(i,t,e){let n;function s(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,p){i.drawElements(n,p,a,u*r),e.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,a,u*r,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,M){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,u,0,M,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*M[A];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function S2(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function E2(i,t,e){const n=new WeakMap,s=new he;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),M===!0&&(E=3);let y=o.attributes.position.count*E,L=1;y>t.maxTextureSize&&(L=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const C=new Float32Array(y*L*4*d),w=new C1(C,y,L,d);w.type=dn,w.needsUpdate=!0;const F=E*4;for(let x=0;x<d;x++){const R=m[x],Y=f[x],V=A[x],X=y*L*4*x;for(let $=0;$<R.count;$++){const D=$*F;p===!0&&(s.fromBufferAttribute(R,$),C[X+D+0]=s.x,C[X+D+1]=s.y,C[X+D+2]=s.z,C[X+D+3]=0),g===!0&&(s.fromBufferAttribute(Y,$),C[X+D+4]=s.x,C[X+D+5]=s.y,C[X+D+6]=s.z,C[X+D+7]=0),M===!0&&(s.fromBufferAttribute(V,$),C[X+D+8]=s.x,C[X+D+9]=s.y,C[X+D+10]=s.z,C[X+D+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new ct(y,L)},n.set(o,u),o.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function b2(i,t,e,n){let s=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}const K1=new Te,Yo=new F1(1,1),$1=new C1,j1=new vc,J1=new N1,Zo=[],Ko=[],$o=new Float32Array(16),jo=new Float32Array(9),Jo=new Float32Array(4);function Ri(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Zo[s];if(a===void 0&&(a=new Float32Array(s),Zo[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ws(i,t){let e=Ko[t];e===void 0&&(e=new Int32Array(t),Ko[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function T2(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function A2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function w2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function R2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function C2(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Jo.set(n),i.uniformMatrix2fv(this.addr,!1,Jo),me(e,n)}}function P2(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;jo.set(n),i.uniformMatrix3fv(this.addr,!1,jo),me(e,n)}}function D2(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;$o.set(n),i.uniformMatrix4fv(this.addr,!1,$o),me(e,n)}}function L2(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function U2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function I2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function N2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function F2(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function O2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function z2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function B2(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function k2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Yo.compareFunction=w1,a=Yo):a=K1,e.setTexture2D(t||a,s)}function H2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||j1,s)}function V2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||J1,s)}function G2(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$1,s)}function q2(i){switch(i){case 5126:return T2;case 35664:return A2;case 35665:return w2;case 35666:return R2;case 35674:return C2;case 35675:return P2;case 35676:return D2;case 5124:case 35670:return L2;case 35667:case 35671:return U2;case 35668:case 35672:return I2;case 35669:case 35673:return N2;case 5125:return F2;case 36294:return O2;case 36295:return z2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return H2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return G2}}function W2(i,t){i.uniform1fv(this.addr,t)}function X2(i,t){const e=Ri(t,this.size,2);i.uniform2fv(this.addr,e)}function Y2(i,t){const e=Ri(t,this.size,3);i.uniform3fv(this.addr,e)}function Z2(i,t){const e=Ri(t,this.size,4);i.uniform4fv(this.addr,e)}function K2(i,t){const e=Ri(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $2(i,t){const e=Ri(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j2(i,t){const e=Ri(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function J2(i,t){i.uniform1iv(this.addr,t)}function Q2(i,t){i.uniform2iv(this.addr,t)}function tf(i,t){i.uniform3iv(this.addr,t)}function ef(i,t){i.uniform4iv(this.addr,t)}function nf(i,t){i.uniform1uiv(this.addr,t)}function sf(i,t){i.uniform2uiv(this.addr,t)}function af(i,t){i.uniform3uiv(this.addr,t)}function rf(i,t){i.uniform4uiv(this.addr,t)}function of(i,t,e){const n=this.cache,s=t.length,a=Ws(e,s);pe(n,a)||(i.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||K1,a[r])}function lf(i,t,e){const n=this.cache,s=t.length,a=Ws(e,s);pe(n,a)||(i.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||j1,a[r])}function cf(i,t,e){const n=this.cache,s=t.length,a=Ws(e,s);pe(n,a)||(i.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||J1,a[r])}function hf(i,t,e){const n=this.cache,s=t.length,a=Ws(e,s);pe(n,a)||(i.uniform1iv(this.addr,a),me(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||$1,a[r])}function df(i){switch(i){case 5126:return W2;case 35664:return X2;case 35665:return Y2;case 35666:return Z2;case 35674:return K2;case 35675:return $2;case 35676:return j2;case 5124:case 35670:return J2;case 35667:case 35671:return Q2;case 35668:case 35672:return tf;case 35669:case 35673:return ef;case 5125:return nf;case 36294:return sf;case 36295:return af;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return of;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return cf;case 36289:case 36303:case 36311:case 36292:return hf}}class uf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q2(e.type)}}class ff{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=df(e.type)}}class pf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Qo(i,t){i.seq.push(t),i.map[t.id]=t}function mf(i,t,e){const n=i.name,s=n.length;for(wa.lastIndex=0;;){const a=wa.exec(n),r=wa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Qo(e,c===void 0?new uf(o,i,t):new ff(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new pf(o),Qo(e,d)),e=d}}}class zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);mf(a,r,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function t1(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const gf=37297;let _f=0;function vf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const e1=new Gt;function xf(i){$t._getMatrix(e1,$t.workingColorSpace,i);const t=`mat3( ${e1.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Bs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function n1(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+vf(i.getShaderSource(t),r)}else return s}function yf(i,t){const e=xf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mf(i,t){let e;switch(t){case Gl:e="Linear";break;case ql:e="Reinhard";break;case Wl:e="Cineon";break;case Xl:e="ACESFilmic";break;case Zl:e="AgX";break;case Kl:e="Neutral";break;case Yl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rs=new U;function Sf(){$t.getLuminanceCoefficients(Rs);const i=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ef(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function bf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function Bi(i){return i!==""}function i1(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function s1(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Af=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mr(i){return i.replace(Af,Rf)}const wf=new Map;function Rf(i,t){let e=qt[t];if(e===void 0){const n=wf.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mr(e)}const Cf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a1(i){return i.replace(Cf,Pf)}function Pf(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function r1(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Df(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===m1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===g1?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case Si:t="ENVMAP_TYPE_CUBE";break;case qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Si:t="ENVMAP_MODE_REFRACTION";break}return t}function If(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ar:t="ENVMAP_BLENDING_MULTIPLY";break;case Hl:t="ENVMAP_BLENDING_MIX";break;case Vl:t="ENVMAP_BLENDING_ADD";break}return t}function Nf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ff(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Df(e),c=Lf(e),h=Uf(e),d=If(e),u=Nf(e),p=Ef(e),g=bf(a),M=s.createProgram();let m,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),f.length>0&&(f+=`
`)):(m=[r1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),f=[r1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?qt.tonemapping_pars_fragment:"",e.toneMapping!==An?Mf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,yf("linearToOutputTexel",e.outputColorSpace),Sf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),r=Mr(r),r=i1(r,e),r=s1(r,e),o=Mr(o),o=i1(o,e),o=s1(o,e),r=a1(r),o=a1(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=A+m+r,y=A+f+o,L=t1(s,s.VERTEX_SHADER,E),C=t1(s,s.FRAGMENT_SHADER,y);s.attachShader(M,L),s.attachShader(M,C),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(R){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(M).trim(),V=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(C).trim();let $=!0,D=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,L,C);else{const B=n1(s,L,"vertex"),z=n1(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+B+`
`+z)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(V===""||X==="")&&(D=!1);D&&(R.diagnostics={runnable:$,programLog:Y,vertexShader:{log:V,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(L),s.deleteShader(C),F=new zs(s,M),b=Tf(s,M)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(M,gf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_f++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=C,this}let Of=0;class zf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bf(t),e.set(t,n)),n}}class Bf{constructor(t){this.id=Of++,this.code=t,this.usedTimes=0}}function kf(i,t,e,n,s,a,r){const o=new Fr,l=new zf,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,R,Y,V){const X=Y.fog,$=V.geometry,D=b.isMeshStandardMaterial?Y.environment:null,B=(b.isMeshStandardMaterial?e:t).get(b.envMap||D),z=B&&B.mapping===qs?B.image.height:null,K=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=et!==void 0?et.length:0;let vt=0;$.morphAttributes.position!==void 0&&(vt=1),$.morphAttributes.normal!==void 0&&(vt=2),$.morphAttributes.color!==void 0&&(vt=3);let bt,G,j,lt;if(K){const Jt=je[K];bt=Jt.vertexShader,G=Jt.fragmentShader}else bt=b.vertexShader,G=b.fragmentShader,l.update(b),j=l.getVertexShaderID(b),lt=l.getFragmentShaderID(b);const st=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ut=V.isInstancedMesh===!0,At=V.isBatchedMesh===!0,Zt=!!b.map,Xt=!!b.matcap,kt=!!B,S=!!b.aoMap,ht=!!b.lightMap,nt=!!b.bumpMap,ut=!!b.normalMap,Z=!!b.displacementMap,yt=!!b.emissiveMap,at=!!b.metalnessMap,Mt=!!b.roughnessMap,Ht=b.anisotropy>0,T=b.clearcoat>0,_=b.dispersion>0,O=b.iridescence>0,q=b.sheen>0,Q=b.transmission>0,W=Ht&&!!b.anisotropyMap,Pt=T&&!!b.clearcoatMap,ft=T&&!!b.clearcoatNormalMap,wt=T&&!!b.clearcoatRoughnessMap,Dt=O&&!!b.iridescenceMap,tt=O&&!!b.iridescenceThicknessMap,St=q&&!!b.sheenColorMap,Ft=q&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,pt=!!b.specularColorMap,Bt=!!b.specularIntensityMap,P=Q&&!!b.transmissionMap,gt=Q&&!!b.thicknessMap,it=!!b.gradientMap,Tt=!!b.alphaMap,rt=b.alphaTest>0,J=!!b.alphaHash,Rt=!!b.extensions;let Vt=An;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const ie={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:bt,fragmentShader:G,defines:b.defines,customVertexShaderID:j,customFragmentShaderID:lt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:At,batchingColor:At&&V._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&V.instanceColor!==null,instancingMorph:Ut&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ei,alphaToCoverage:!!b.alphaToCoverage,map:Zt,matcap:Xt,envMap:kt,envMapMode:kt&&B.mapping,envMapCubeUVHeight:z,aoMap:S,lightMap:ht,bumpMap:nt,normalMap:ut,displacementMap:u&&Z,emissiveMap:yt,normalMapObjectSpace:ut&&b.normalMapType===Ql,normalMapTangentSpace:ut&&b.normalMapType===A1,metalnessMap:at,roughnessMap:Mt,anisotropy:Ht,anisotropyMap:W,clearcoat:T,clearcoatMap:Pt,clearcoatNormalMap:ft,clearcoatRoughnessMap:wt,dispersion:_,iridescence:O,iridescenceMap:Dt,iridescenceThicknessMap:tt,sheen:q,sheenColorMap:St,sheenRoughnessMap:Ft,specularMap:Nt,specularColorMap:pt,specularIntensityMap:Bt,transmission:Q,transmissionMap:P,thicknessMap:gt,gradientMap:it,opaque:b.transparent===!1&&b.blending===mi&&b.alphaToCoverage===!1,alphaMap:Tt,alphaTest:rt,alphaHash:J,combine:b.combine,mapUv:Zt&&M(b.map.channel),aoMapUv:S&&M(b.aoMap.channel),lightMapUv:ht&&M(b.lightMap.channel),bumpMapUv:nt&&M(b.bumpMap.channel),normalMapUv:ut&&M(b.normalMap.channel),displacementMapUv:Z&&M(b.displacementMap.channel),emissiveMapUv:yt&&M(b.emissiveMap.channel),metalnessMapUv:at&&M(b.metalnessMap.channel),roughnessMapUv:Mt&&M(b.roughnessMap.channel),anisotropyMapUv:W&&M(b.anisotropyMap.channel),clearcoatMapUv:Pt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&M(b.sheenRoughnessMap.channel),specularMapUv:Nt&&M(b.specularMap.channel),specularColorMapUv:pt&&M(b.specularColorMap.channel),specularIntensityMapUv:Bt&&M(b.specularIntensityMap.channel),transmissionMapUv:P&&M(b.transmissionMap.channel),thicknessMapUv:gt&&M(b.thicknessMap.channel),alphaMapUv:Tt&&M(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ut||Ht),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(Zt||Tt),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:xt,skinning:V.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:vt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Zt&&b.map.isVideoTexture===!0&&$t.getTransfer(b.map.colorSpace)===te,decodeVideoTextureEmissive:yt&&b.emissiveMap.isVideoTexture===!0&&$t.getTransfer(b.emissiveMap.colorSpace)===te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ye,flipSided:b.side===Ce,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Rt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&b.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function f(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)x.push(R),x.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(A(x,b),E(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function A(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function E(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){const x=g[b.type];let R;if(x){const Y=je[x];R=Dc.clone(Y.uniforms)}else R=b.uniforms;return R}function L(b,x){let R;for(let Y=0,V=h.length;Y<V;Y++){const X=h[Y];if(X.cacheKey===x){R=X,++R.usedTimes;break}}return R===void 0&&(R=new Ff(i,x,b,a),h.push(R)),R}function C(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:F}}function Hf(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function Vf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function o1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function l1(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(d,u,p,g,M,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:M,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=M,f.group=m),t++,f}function o(d,u,p,g,M,m){const f=r(d,u,p,g,M,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,g,M,m){const f=r(d,u,p,g,M,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Vf),n.length>1&&n.sort(u||o1),s.length>1&&s.sort(u||o1)}function h(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function Gf(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new l1,i.set(n,[r])):s>=a.length?(r=new l1,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function qf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new jt};break;case"SpotLight":e={position:new U,direction:new U,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Wf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xf=0;function Yf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zf(i){const t=new qf,e=Wf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,a=new re,r=new re;function o(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,M=0,m=0,f=0,A=0,E=0,y=0,L=0,C=0,w=0;c.sort(Yf);for(let b=0,x=c.length;b<x;b++){const R=c[b],Y=R.color,V=R.intensity,X=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=Y.r*V,d+=Y.g*V,u+=Y.b*V;else if(R.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(R.sh.coefficients[D],V);w++}else if(R.isDirectionalLight){const D=t.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,z=e.get(R);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=R.shadow.matrix,A++}n.directional[p]=D,p++}else if(R.isSpotLight){const D=t.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(Y).multiplyScalar(V),D.distance=X,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,n.spot[M]=D;const B=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,B.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[M]=B.matrix,R.castShadow){const z=e.get(R);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.spotShadow[M]=z,n.spotShadowMap[M]=$,y++}M++}else if(R.isRectAreaLight){const D=t.get(R);D.color.copy(Y).multiplyScalar(V),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=D,m++}else if(R.isPointLight){const D=t.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),D.distance=R.distance,D.decay=R.decay,R.castShadow){const B=R.shadow,z=e.get(R);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=D,g++}else if(R.isHemisphereLight){const D=t.get(R);D.skyColor.copy(R.color).multiplyScalar(V),D.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[f]=D,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==M||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==A||F.numPointShadows!==E||F.numSpotShadows!==y||F.numSpotMaps!==L||F.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,F.directionalLength=p,F.pointLength=g,F.spotLength=M,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=A,F.numPointShadows=E,F.numSpotShadows=y,F.numSpotMaps=L,F.numLightProbes=w,n.version=Xf++)}function l(c,h){let d=0,u=0,p=0,g=0,M=0;const m=h.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){const E=c[f];if(E.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(E.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(E.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(E.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:n}}function c1(i){const t=new Zf(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Kf(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new c1(i),t.set(s,[o])):a>=r.length?(o=new c1(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const $f=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jf(i,t,e){let n=new zr;const s=new ct,a=new ct,r=new he,o=new yh({depthPacking:Jl}),l=new Mh,c={},h=e.maxTextureSize,d={[Rn]:Ce,[Ce]:Rn,[Ye]:Ye},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:$f,fragmentShader:jf}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ke(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m1;let f=this.type;this.render=function(C,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Tn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const V=f!==hn&&this.type===hn,X=f===hn&&this.type!==hn;for(let $=0,D=C.length;$<D;$++){const B=C[$],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const K=z.getFrameExtents();if(s.multiply(K),a.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/K.x),s.x=a.x*K.x,z.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/K.y),s.y=a.y*K.y,z.mapSize.y=a.y)),z.map===null||V===!0||X===!0){const dt=this.type!==hn?{minFilter:$e,magFilter:$e}:{};z.map!==null&&z.map.dispose(),z.map=new Yn(s.x,s.y,dt),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const et=z.getViewportCount();for(let dt=0;dt<et;dt++){const vt=z.getViewport(dt);r.set(a.x*vt.x,a.y*vt.y,a.x*vt.z,a.y*vt.w),Y.viewport(r),z.updateMatrices(B,dt),n=z.getFrustum(),y(w,F,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===hn&&A(z,F),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,x,R)};function A(C,w){const F=t.update(M);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Yn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,F,u,M,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,F,p,M,null)}function E(C,w,F,b){let x=null;const R=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=F.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const Y=x.uuid,V=w.uuid;let X=c[Y];X===void 0&&(X={},c[Y]=X);let $=X[V];$===void 0&&($=x.clone(),X[V]=$,w.addEventListener("dispose",L)),x=$}if(x.visible=w.visible,x.wireframe=w.wireframe,b===hn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Y=i.properties.get(x);Y.light=F}return x}function y(C,w,F,b,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===hn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const V=t.update(C),X=C.material;if(Array.isArray(X)){const $=V.groups;for(let D=0,B=$.length;D<B;D++){const z=$[D],K=X[z.materialIndex];if(K&&K.visible){const et=E(C,K,b,x);C.onBeforeShadow(i,C,w,F,V,et,z),i.renderBufferDirect(F,null,V,et,C,z),C.onAfterShadow(i,C,w,F,V,et,z)}}}else if(X.visible){const $=E(C,X,b,x);C.onBeforeShadow(i,C,w,F,V,$,null),i.renderBufferDirect(F,null,V,$,C,null),C.onAfterShadow(i,C,w,F,V,$,null)}}const Y=C.children;for(let V=0,X=Y.length;V<X;V++)y(Y[V],w,F,b,x)}function L(C){C.target.removeEventListener("dispose",L);for(const F in c){const b=c[F],x=C.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const Qf={[Ua]:Ia,[Na]:za,[Fa]:Ba,[yi]:Oa,[Ia]:Ua,[za]:Na,[Ba]:Fa,[Oa]:yi};function tp(i,t){function e(){let P=!1;const gt=new he;let it=null;const Tt=new he(0,0,0,0);return{setMask:function(rt){it!==rt&&!P&&(i.colorMask(rt,rt,rt,rt),it=rt)},setLocked:function(rt){P=rt},setClear:function(rt,J,Rt,Vt,ie){ie===!0&&(rt*=Vt,J*=Vt,Rt*=Vt),gt.set(rt,J,Rt,Vt),Tt.equals(gt)===!1&&(i.clearColor(rt,J,Rt,Vt),Tt.copy(gt))},reset:function(){P=!1,it=null,Tt.set(-1,0,0,0)}}}function n(){let P=!1,gt=!1,it=null,Tt=null,rt=null;return{setReversed:function(J){if(gt!==J){const Rt=t.get("EXT_clip_control");J?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),gt=J;const Vt=rt;rt=null,this.setClear(Vt)}},getReversed:function(){return gt},setTest:function(J){J?st(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(J){it!==J&&!P&&(i.depthMask(J),it=J)},setFunc:function(J){if(gt&&(J=Qf[J]),Tt!==J){switch(J){case Ua:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=J}},setLocked:function(J){P=J},setClear:function(J){rt!==J&&(gt&&(J=1-J),i.clearDepth(J),rt=J)},reset:function(){P=!1,it=null,Tt=null,rt=null,gt=!1}}}function s(){let P=!1,gt=null,it=null,Tt=null,rt=null,J=null,Rt=null,Vt=null,ie=null;return{setTest:function(Jt){P||(Jt?st(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Jt){gt!==Jt&&!P&&(i.stencilMask(Jt),gt=Jt)},setFunc:function(Jt,He,sn){(it!==Jt||Tt!==He||rt!==sn)&&(i.stencilFunc(Jt,He,sn),it=Jt,Tt=He,rt=sn)},setOp:function(Jt,He,sn){(J!==Jt||Rt!==He||Vt!==sn)&&(i.stencilOp(Jt,He,sn),J=Jt,Rt=He,Vt=sn)},setLocked:function(Jt){P=Jt},setClear:function(Jt){ie!==Jt&&(i.clearStencil(Jt),ie=Jt)},reset:function(){P=!1,gt=null,it=null,Tt=null,rt=null,J=null,Rt=null,Vt=null,ie=null}}}const a=new e,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,M=!1,m=null,f=null,A=null,E=null,y=null,L=null,C=null,w=new jt(0,0,0),F=0,b=!1,x=null,R=null,Y=null,V=null,X=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,B=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=B>=2);let K=null,et={};const dt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),bt=new he().fromArray(dt),G=new he().fromArray(vt);function j(P,gt,it,Tt){const rt=new Uint8Array(4),J=i.createTexture();i.bindTexture(P,J),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<it;Rt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(gt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return J}const lt={};lt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),st(i.DEPTH_TEST),r.setFunc(yi),nt(!1),ut(to),st(i.CULL_FACE),S(Tn);function st(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function xt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ut(P,gt){return d[P]!==gt?(i.bindFramebuffer(P,gt),d[P]=gt,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function At(P,gt){let it=p,Tt=!1;if(P){it=u.get(gt),it===void 0&&(it=[],u.set(gt,it));const rt=P.textures;if(it.length!==rt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Rt=rt.length;J<Rt;J++)it[J]=i.COLOR_ATTACHMENT0+J;it.length=rt.length,Tt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(it)}function Zt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Xt={[kn]:i.FUNC_ADD,[bl]:i.FUNC_SUBTRACT,[Tl]:i.FUNC_REVERSE_SUBTRACT};Xt[Al]=i.MIN,Xt[wl]=i.MAX;const kt={[Rl]:i.ZERO,[Cl]:i.ONE,[Pl]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Fl]:i.SRC_ALPHA_SATURATE,[Il]:i.DST_COLOR,[Ll]:i.DST_ALPHA,[Dl]:i.ONE_MINUS_SRC_COLOR,[La]:i.ONE_MINUS_SRC_ALPHA,[Nl]:i.ONE_MINUS_DST_COLOR,[Ul]:i.ONE_MINUS_DST_ALPHA,[Ol]:i.CONSTANT_COLOR,[zl]:i.ONE_MINUS_CONSTANT_COLOR,[Bl]:i.CONSTANT_ALPHA,[kl]:i.ONE_MINUS_CONSTANT_ALPHA};function S(P,gt,it,Tt,rt,J,Rt,Vt,ie,Jt){if(P===Tn){M===!0&&(xt(i.BLEND),M=!1);return}if(M===!1&&(st(i.BLEND),M=!0),P!==El){if(P!==m||Jt!==b){if((f!==kn||y!==kn)&&(i.blendEquation(i.FUNC_ADD),f=kn,y=kn),Jt)switch(P){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.ONE,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case no:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case io:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,E=null,L=null,C=null,w.set(0,0,0),F=0,m=P,b=Jt}return}rt=rt||gt,J=J||it,Rt=Rt||Tt,(gt!==f||rt!==y)&&(i.blendEquationSeparate(Xt[gt],Xt[rt]),f=gt,y=rt),(it!==A||Tt!==E||J!==L||Rt!==C)&&(i.blendFuncSeparate(kt[it],kt[Tt],kt[J],kt[Rt]),A=it,E=Tt,L=J,C=Rt),(Vt.equals(w)===!1||ie!==F)&&(i.blendColor(Vt.r,Vt.g,Vt.b,ie),w.copy(Vt),F=ie),m=P,b=!1}function ht(P,gt){P.side===Ye?xt(i.CULL_FACE):st(i.CULL_FACE);let it=P.side===Ce;gt&&(it=!it),nt(it),P.blending===mi&&P.transparent===!1?S(Tn):S(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),a.setMask(P.colorWrite);const Tt=P.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),yt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function ut(P){P!==Ml?(st(i.CULL_FACE),P!==R&&(P===to?i.cullFace(i.BACK):P===Sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),R=P}function Z(P){P!==Y&&(D&&i.lineWidth(P),Y=P)}function yt(P,gt,it){P?(st(i.POLYGON_OFFSET_FILL),(V!==gt||X!==it)&&(i.polygonOffset(gt,it),V=gt,X=it)):xt(i.POLYGON_OFFSET_FILL)}function at(P){P?st(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Mt(P){P===void 0&&(P=i.TEXTURE0+$-1),K!==P&&(i.activeTexture(P),K=P)}function Ht(P,gt,it){it===void 0&&(K===null?it=i.TEXTURE0+$-1:it=K);let Tt=et[it];Tt===void 0&&(Tt={type:void 0,texture:void 0},et[it]=Tt),(Tt.type!==P||Tt.texture!==gt)&&(K!==it&&(i.activeTexture(it),K=it),i.bindTexture(P,gt||lt[P]),Tt.type=P,Tt.texture=gt)}function T(){const P=et[K];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(P){bt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),bt.copy(P))}function Ft(P){G.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),G.copy(P))}function Nt(P,gt){let it=c.get(gt);it===void 0&&(it=new WeakMap,c.set(gt,it));let Tt=it.get(P);Tt===void 0&&(Tt=i.getUniformBlockIndex(gt,P.name),it.set(P,Tt))}function pt(P,gt){const Tt=c.get(gt).get(P);l.get(gt)!==Tt&&(i.uniformBlockBinding(gt,Tt,P.__bindingPointIndex),l.set(gt,Tt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,et={},d={},u=new WeakMap,p=[],g=null,M=!1,m=null,f=null,A=null,E=null,y=null,L=null,C=null,w=new jt(0,0,0),F=0,b=!1,x=null,R=null,Y=null,V=null,X=null,bt.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:st,disable:xt,bindFramebuffer:Ut,drawBuffers:At,useProgram:Zt,setBlending:S,setMaterial:ht,setFlipSided:nt,setCullFace:ut,setLineWidth:Z,setPolygonOffset:yt,setScissorTest:at,activeTexture:Mt,bindTexture:Ht,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Dt,texImage3D:tt,updateUBOMapping:Nt,uniformBlockBinding:pt,texStorage2D:ft,texStorage3D:wt,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:Pt,scissor:St,viewport:Ft,reset:Bt}}function ep(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):Hs("canvas")}function M(T,_,O){let q=1;const Q=Ht(T);if((Q.width>O||Q.height>O)&&(q=O/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(q*Q.width),Pt=Math.floor(q*Q.height);d===void 0&&(d=g(W,Pt));const ft=_?g(W,Pt):d;return ft.width=W,ft.height=Pt,ft.getContext("2d").drawImage(T,0,0,W,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Pt+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,_,O,q,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=_;if(_===i.RED&&(O===i.FLOAT&&(W=i.R32F),O===i.HALF_FLOAT&&(W=i.R16F),O===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.R8UI),O===i.UNSIGNED_SHORT&&(W=i.R16UI),O===i.UNSIGNED_INT&&(W=i.R32UI),O===i.BYTE&&(W=i.R8I),O===i.SHORT&&(W=i.R16I),O===i.INT&&(W=i.R32I)),_===i.RG&&(O===i.FLOAT&&(W=i.RG32F),O===i.HALF_FLOAT&&(W=i.RG16F),O===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RG8UI),O===i.UNSIGNED_SHORT&&(W=i.RG16UI),O===i.UNSIGNED_INT&&(W=i.RG32UI),O===i.BYTE&&(W=i.RG8I),O===i.SHORT&&(W=i.RG16I),O===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGB8UI),O===i.UNSIGNED_SHORT&&(W=i.RGB16UI),O===i.UNSIGNED_INT&&(W=i.RGB32UI),O===i.BYTE&&(W=i.RGB8I),O===i.SHORT&&(W=i.RGB16I),O===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),O===i.UNSIGNED_INT&&(W=i.RGBA32UI),O===i.BYTE&&(W=i.RGBA8I),O===i.SHORT&&(W=i.RGBA16I),O===i.INT&&(W=i.RGBA32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),_===i.RGBA){const Pt=Q?Bs:$t.getTransfer(q);O===i.FLOAT&&(W=i.RGBA32F),O===i.HALF_FLOAT&&(W=i.RGBA16F),O===i.UNSIGNED_BYTE&&(W=Pt===te?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function y(T,_){let O;return T?_===null||_===Wn||_===Gi?O=i.DEPTH24_STENCIL8:_===dn?O=i.DEPTH32F_STENCIL8:_===Vi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wn||_===Gi?O=i.DEPTH_COMPONENT24:_===dn?O=i.DEPTH_COMPONENT32F:_===Vi&&(O=i.DEPTH_COMPONENT16),O}function L(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==$e&&T.minFilter!==Be?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){const _=T.target;_.removeEventListener("dispose",C),F(_),_.isVideoTexture&&h.delete(_)}function w(T){const _=T.target;_.removeEventListener("dispose",w),x(_)}function F(T){const _=n.get(T);if(_.__webglInit===void 0)return;const O=T.source,q=u.get(O);if(q){const Q=q[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(T),Object.keys(q).length===0&&u.delete(O)}n.remove(T)}function b(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const O=T.source,q=u.get(O);delete q[_.__cacheKey],r.memory.textures--}function x(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Q=0;Q<_.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=T.textures;for(let q=0,Q=O.length;q<Q;q++){const W=n.get(O[q]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),r.memory.textures--),n.remove(O[q])}n.remove(T)}let R=0;function Y(){R=0}function V(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function X(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function $(T,_){const O=n.get(T);if(T.isVideoTexture&&at(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(O,T,_);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function D(T,_){const O=n.get(T);if(T.version>0&&O.__version!==T.version){lt(O,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function B(T,_){const O=n.get(T);if(T.version>0&&O.__version!==T.version){lt(O,T,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function z(T,_){const O=n.get(T);if(T.version>0&&O.__version!==T.version){st(O,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const K={[Va]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},et={[$e]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[Zs]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},dt={[tc]:i.NEVER,[rc]:i.ALWAYS,[ec]:i.LESS,[w1]:i.LEQUAL,[nc]:i.EQUAL,[ac]:i.GEQUAL,[ic]:i.GREATER,[sc]:i.NOTEQUAL};function vt(T,_){if(_.type===dn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Be||_.magFilter===Zs||_.magFilter===ss||_.magFilter===Gn||_.minFilter===Be||_.minFilter===Zs||_.minFilter===ss||_.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,K[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,et[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,et[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,dt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$e||_.minFilter!==ss&&_.minFilter!==Gn||_.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function bt(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));const q=_.source;let Q=u.get(q);Q===void 0&&(Q={},u.set(q,Q));const W=X(_);if(W!==T.__cacheKey){Q[W]===void 0&&(Q[W]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),Q[W].usedTimes++;const Pt=Q[T.__cacheKey];Pt!==void 0&&(Q[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(_)),T.__cacheKey=W,T.__webglTexture=Q[W].texture}return O}function G(T,_,O){return Math.floor(Math.floor(T/O)/_)}function j(T,_,O,q){const W=T.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,q,_.data);else{W.sort((tt,St)=>tt.start-St.start);let Pt=0;for(let tt=1;tt<W.length;tt++){const St=W[Pt],Ft=W[tt],Nt=St.start+St.count,pt=G(Ft.start,_.width,4),Bt=G(St.start,_.width,4);Ft.start<=Nt+1&&pt===Bt&&G(Ft.start+Ft.count-1,_.width,4)===pt?St.count=Math.max(St.count,Ft.start+Ft.count-St.start):(++Pt,W[Pt]=Ft)}W.length=Pt+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),Dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let tt=0,St=W.length;tt<St;tt++){const Ft=W[tt],Nt=Math.floor(Ft.start/4),pt=Math.ceil(Ft.count/4),Bt=Nt%_.width,P=Math.floor(Nt/_.width),gt=pt,it=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),e.texSubImage2D(i.TEXTURE_2D,0,Bt,P,gt,it,O,q,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function lt(T,_,O){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const Q=bt(T,_),W=_.source;e.bindTexture(q,T.__webglTexture,i.TEXTURE0+O);const Pt=n.get(W);if(W.version!==Pt.__version||Q===!0){e.activeTexture(i.TEXTURE0+O);const ft=$t.getPrimaries($t.workingColorSpace),wt=_.colorSpace===bn?null:$t.getPrimaries(_.colorSpace),Dt=_.colorSpace===bn||ft===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let tt=M(_.image,!1,s.maxTextureSize);tt=Mt(_,tt);const St=a.convert(_.format,_.colorSpace),Ft=a.convert(_.type);let Nt=E(_.internalFormat,St,Ft,_.colorSpace,_.isVideoTexture);vt(q,_);let pt;const Bt=_.mipmaps,P=_.isVideoTexture!==!0,gt=Pt.__version===void 0||Q===!0,it=W.dataReady,Tt=L(_,tt);if(_.isDepthTexture)Nt=y(_.format===Wi,_.type),gt&&(P?e.texStorage2D(i.TEXTURE_2D,1,Nt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,tt.width,tt.height,0,St,Ft,null));else if(_.isDataTexture)if(Bt.length>0){P&&gt&&e.texStorage2D(i.TEXTURE_2D,Tt,Nt,Bt[0].width,Bt[0].height);for(let rt=0,J=Bt.length;rt<J;rt++)pt=Bt[rt],P?it&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,St,Ft,pt.data):e.texImage2D(i.TEXTURE_2D,rt,Nt,pt.width,pt.height,0,St,Ft,pt.data);_.generateMipmaps=!1}else P?(gt&&e.texStorage2D(i.TEXTURE_2D,Tt,Nt,tt.width,tt.height),it&&j(_,tt,St,Ft)):e.texImage2D(i.TEXTURE_2D,0,Nt,tt.width,tt.height,0,St,Ft,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Nt,Bt[0].width,Bt[0].height,tt.depth);for(let rt=0,J=Bt.length;rt<J;rt++)if(pt=Bt[rt],_.format!==Ke)if(St!==null)if(P){if(it)if(_.layerUpdates.size>0){const Rt=Bo(pt.width,pt.height,_.format,_.type);for(const Vt of _.layerUpdates){const ie=pt.data.subarray(Vt*Rt/pt.data.BYTES_PER_ELEMENT,(Vt+1)*Rt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Vt,pt.width,pt.height,1,St,ie)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,tt.depth,St,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Nt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,tt.depth,St,Ft,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Nt,pt.width,pt.height,tt.depth,0,St,Ft,pt.data)}else{P&&gt&&e.texStorage2D(i.TEXTURE_2D,Tt,Nt,Bt[0].width,Bt[0].height);for(let rt=0,J=Bt.length;rt<J;rt++)pt=Bt[rt],_.format!==Ke?St!==null?P?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,St,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Nt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?it&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,St,Ft,pt.data):e.texImage2D(i.TEXTURE_2D,rt,Nt,pt.width,pt.height,0,St,Ft,pt.data)}else if(_.isDataArrayTexture)if(P){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Nt,tt.width,tt.height,tt.depth),it)if(_.layerUpdates.size>0){const rt=Bo(tt.width,tt.height,_.format,_.type);for(const J of _.layerUpdates){const Rt=tt.data.subarray(J*rt/tt.data.BYTES_PER_ELEMENT,(J+1)*rt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,St,Ft,Rt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,St,Ft,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,tt.width,tt.height,tt.depth,0,St,Ft,tt.data);else if(_.isData3DTexture)P?(gt&&e.texStorage3D(i.TEXTURE_3D,Tt,Nt,tt.width,tt.height,tt.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,St,Ft,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,tt.width,tt.height,tt.depth,0,St,Ft,tt.data);else if(_.isFramebufferTexture){if(gt)if(P)e.texStorage2D(i.TEXTURE_2D,Tt,Nt,tt.width,tt.height);else{let rt=tt.width,J=tt.height;for(let Rt=0;Rt<Tt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Nt,rt,J,0,St,Ft,null),rt>>=1,J>>=1}}else if(Bt.length>0){if(P&&gt){const rt=Ht(Bt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Nt,rt.width,rt.height)}for(let rt=0,J=Bt.length;rt<J;rt++)pt=Bt[rt],P?it&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,St,Ft,pt):e.texImage2D(i.TEXTURE_2D,rt,Nt,St,Ft,pt);_.generateMipmaps=!1}else if(P){if(gt){const rt=Ht(tt);e.texStorage2D(i.TEXTURE_2D,Tt,Nt,rt.width,rt.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ft,tt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,St,Ft,tt);m(_)&&f(q),Pt.__version=W.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function st(T,_,O){if(_.image.length!==6)return;const q=bt(T,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const W=n.get(Q);if(Q.version!==W.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const Pt=$t.getPrimaries($t.workingColorSpace),ft=_.colorSpace===bn?null:$t.getPrimaries(_.colorSpace),wt=_.colorSpace===bn||Pt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Dt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,St=[];for(let J=0;J<6;J++)!Dt&&!tt?St[J]=M(_.image[J],!0,s.maxCubemapSize):St[J]=tt?_.image[J].image:_.image[J],St[J]=Mt(_,St[J]);const Ft=St[0],Nt=a.convert(_.format,_.colorSpace),pt=a.convert(_.type),Bt=E(_.internalFormat,Nt,pt,_.colorSpace),P=_.isVideoTexture!==!0,gt=W.__version===void 0||q===!0,it=Q.dataReady;let Tt=L(_,Ft);vt(i.TEXTURE_CUBE_MAP,_);let rt;if(Dt){P&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Bt,Ft.width,Ft.height);for(let J=0;J<6;J++){rt=St[J].mipmaps;for(let Rt=0;Rt<rt.length;Rt++){const Vt=rt[Rt];_.format!==Ke?Nt!==null?P?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,0,0,Vt.width,Vt.height,Nt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,Bt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,0,0,Vt.width,Vt.height,Nt,pt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt,Bt,Vt.width,Vt.height,0,Nt,pt,Vt.data)}}}else{if(rt=_.mipmaps,P&&gt){rt.length>0&&Tt++;const J=Ht(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Bt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St[J].width,St[J].height,Nt,pt,St[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Bt,St[J].width,St[J].height,0,Nt,pt,St[J].data);for(let Rt=0;Rt<rt.length;Rt++){const ie=rt[Rt].image[J].image;P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,0,0,ie.width,ie.height,Nt,pt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,Bt,ie.width,ie.height,0,Nt,pt,ie.data)}}else{P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,pt,St[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Bt,Nt,pt,St[J]);for(let Rt=0;Rt<rt.length;Rt++){const Vt=rt[Rt];P?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,0,0,Nt,pt,Vt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt+1,Bt,Nt,pt,Vt.image[J])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),W.__version=Q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function xt(T,_,O,q,Q,W){const Pt=a.convert(O.format,O.colorSpace),ft=a.convert(O.type),wt=E(O.internalFormat,Pt,ft,O.colorSpace),Dt=n.get(_),tt=n.get(O);if(tt.__renderTarget=_,!Dt.__hasExternalTextures){const St=Math.max(1,_.width>>W),Ft=Math.max(1,_.height>>W);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,W,wt,St,Ft,_.depth,0,Pt,ft,null):e.texImage2D(Q,W,wt,St,Ft,0,Pt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),yt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,tt.__webglTexture,0,Z(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,tt.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(T,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const q=_.depthTexture,Q=q&&q.isDepthTexture?q.type:null,W=y(_.stencilBuffer,Q),Pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Z(_);yt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,W,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,T)}else{const q=_.textures;for(let Q=0;Q<q.length;Q++){const W=q[Q],Pt=a.convert(W.format,W.colorSpace),ft=a.convert(W.type),wt=E(W.internalFormat,Pt,ft,W.colorSpace),Dt=Z(_);O&&yt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,wt,_.width,_.height):yt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,wt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,wt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const Q=q.__webglTexture,W=Z(_);if(_.depthTexture.format===qi)yt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Wi)yt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Zt(T){const _=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?At(_.__webglFramebuffer[0],T):At(_.__webglFramebuffer,T)}else if(O){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),Ut(_.__webglDepthbuffer[q],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,W)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ut(_.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(T,_,O){const q=n.get(T);_!==void 0&&xt(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Zt(T)}function kt(T){const _=T.texture,O=n.get(T),q=n.get(_);T.addEventListener("dispose",w);const Q=T.textures,W=T.isWebGLCubeRenderTarget===!0,Pt=Q.length>1;if(Pt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,r.memory.textures++),W){O.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ft]=[];for(let wt=0;wt<_.mipmaps.length;wt++)O.__webglFramebuffer[ft][wt]=i.createFramebuffer()}else O.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ft=0;ft<_.mipmaps.length;ft++)O.__webglFramebuffer[ft]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ft=0,wt=Q.length;ft<wt;ft++){const Dt=n.get(Q[ft]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),r.memory.textures++)}if(T.samples>0&&yt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){const wt=Q[ft];O.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ft]);const Dt=a.convert(wt.format,wt.colorSpace),tt=a.convert(wt.type),St=E(wt.internalFormat,Dt,tt,wt.colorSpace,T.isXRRenderTarget===!0),Ft=Z(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,St,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,O.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),vt(i.TEXTURE_CUBE_MAP,_);for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0)for(let wt=0;wt<_.mipmaps.length;wt++)xt(O.__webglFramebuffer[ft][wt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt);else xt(O.__webglFramebuffer[ft],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ft=0,wt=Q.length;ft<wt;ft++){const Dt=Q[ft],tt=n.get(Dt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),vt(i.TEXTURE_2D,Dt),xt(O.__webglFramebuffer,T,Dt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(Dt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,q.__webglTexture),vt(ft,_),_.mipmaps&&_.mipmaps.length>0)for(let wt=0;wt<_.mipmaps.length;wt++)xt(O.__webglFramebuffer[wt],T,_,i.COLOR_ATTACHMENT0,ft,wt);else xt(O.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ft,0);m(_)&&f(ft),e.unbindTexture()}T.depthBuffer&&Zt(T)}function S(T){const _=T.textures;for(let O=0,q=_.length;O<q;O++){const Q=_[O];if(m(Q)){const W=A(T),Pt=n.get(Q).__webglTexture;e.bindTexture(W,Pt),f(W),e.unbindTexture()}}}const ht=[],nt=[];function ut(T){if(T.samples>0){if(yt(T)===!1){const _=T.textures,O=T.width,q=T.height;let Q=i.COLOR_BUFFER_BIT;const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(T),ft=_.length>1;if(ft)for(let Dt=0;Dt<_.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const wt=T.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Dt=0;Dt<_.length;Dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Dt]);const tt=n.get(_[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,Q,i.NEAREST),l===!0&&(ht.length=0,nt.length=0,ht.push(i.COLOR_ATTACHMENT0+Dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ht.push(W),nt.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Dt=0;Dt<_.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Dt]);const tt=n.get(_[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Z(T){return Math.min(s.maxSamples,T.samples)}function yt(T){const _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function at(T){const _=r.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Mt(T,_){const O=T.colorSpace,q=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ei&&O!==bn&&($t.getTransfer(O)===te?(q!==Ke||Q!==tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=Xt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=S,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=yt}function np(i,t){function e(n,s=bn){let a;const r=$t.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===Rr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===y1)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===v1)return i.BYTE;if(n===x1)return i.SHORT;if(n===Vi)return i.UNSIGNED_SHORT;if(n===wr)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Ji)return i.HALF_FLOAT;if(n===M1)return i.ALPHA;if(n===S1)return i.RGB;if(n===Ke)return i.RGBA;if(n===qi)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===E1)return i.RED;if(n===Pr)return i.RED_INTEGER;if(n===b1)return i.RG;if(n===Dr)return i.RG_INTEGER;if(n===Lr)return i.RGBA_INTEGER;if(n===Ls||n===Us||n===Is||n===Ns)if(r===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ls)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ls)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Wa||n===Xa||n===Ya)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===qa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===$a)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Za||n===Ka)return r===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===$a)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Ja||n===Qa||n===tr||n===er||n===nr||n===ir||n===sr||n===ar||n===rr||n===or||n===lr||n===cr||n===hr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ja)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tr)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===er)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nr)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ir)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sr)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ar)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rr)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===or)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lr)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cr)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hr)return r===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===dr||n===ur)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Fs)return r===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ur)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===T1||n===fr||n===pr||n===mr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Fs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===fr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ip=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ap{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Te,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:ip,fragmentShader:sp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rp extends Kn{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const M=new ap,m=e.getContextAttributes();let f=null,A=null;const E=[],y=[],L=new ct;let C=null;const w=new ze;w.viewport=new he;const F=new ze;F.viewport=new he;const b=[w,F],x=new Th;let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=E[G];return j===void 0&&(j=new ga,E[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=E[G];return j===void 0&&(j=new ga,E[G]=j),j.getGripSpace()},this.getHand=function(G){let j=E[G];return j===void 0&&(j=new ga,E[G]=j),j.getHandSpace()};function V(G){const j=y.indexOf(G.inputSource);if(j===-1)return;const lt=E[j];lt!==void 0&&(lt.update(G.inputSource,G.frame,c||r),lt.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let G=0;G<E.length;G++){const j=y[G];j!==null&&(y[G]=null,E[G].disconnect(j))}R=null,Y=null,M.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,A=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,st=null,xt=null;m.depth&&(xt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?Wi:qi,st=m.stencil?Gi:Wn);const Ut={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:a};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new Yn(u.textureWidth,u.textureHeight,{format:Ke,type:tn,depthTexture:new F1(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Ke,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(G){for(let j=0;j<G.removed.length;j++){const lt=G.removed[j],st=y.indexOf(lt);st>=0&&(y[st]=null,E[st].disconnect(lt))}for(let j=0;j<G.added.length;j++){const lt=G.added[j];let st=y.indexOf(lt);if(st===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=y.length){y.push(lt),st=Ut;break}else if(y[Ut]===null){y[Ut]=lt,st=Ut;break}if(st===-1)break}const xt=E[st];xt&&xt.connect(lt)}}const D=new U,B=new U;function z(G,j,lt){D.setFromMatrixPosition(j.matrixWorld),B.setFromMatrixPosition(lt.matrixWorld);const st=D.distanceTo(B),xt=j.projectionMatrix.elements,Ut=lt.projectionMatrix.elements,At=xt[14]/(xt[10]-1),Zt=xt[14]/(xt[10]+1),Xt=(xt[9]+1)/xt[5],kt=(xt[9]-1)/xt[5],S=(xt[8]-1)/xt[0],ht=(Ut[8]+1)/Ut[0],nt=At*S,ut=At*ht,Z=st/(-S+ht),yt=Z*-S;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(yt),G.translateZ(Z),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),xt[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const at=At+Z,Mt=Zt+Z,Ht=nt-yt,T=ut+(st-yt),_=Xt*Zt/Mt*at,O=kt*Zt/Mt*at;G.projectionMatrix.makePerspective(Ht,T,_,O,at,Mt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function K(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let j=G.near,lt=G.far;M.texture!==null&&(M.depthNear>0&&(j=M.depthNear),M.depthFar>0&&(lt=M.depthFar)),x.near=F.near=w.near=j,x.far=F.far=w.far=lt,(R!==x.near||Y!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,Y=x.far),w.layers.mask=G.layers.mask|2,F.layers.mask=G.layers.mask|4,x.layers.mask=w.layers.mask|F.layers.mask;const st=G.parent,xt=x.cameras;K(x,st);for(let Ut=0;Ut<xt.length;Ut++)K(xt[Ut],st);xt.length===2?z(x,w,F):x.projectionMatrix.copy(w.projectionMatrix),et(G,x,st)};function et(G,j,lt){lt===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(lt.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=gr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let dt=null;function vt(G,j){if(h=j.getViewerPose(c||r),g=j,h!==null){const lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let st=!1;lt.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let At=0;At<lt.length;At++){const Zt=lt[At];let Xt=null;if(p!==null)Xt=p.getViewport(Zt);else{const S=d.getViewSubImage(u,Zt);Xt=S.viewport,At===0&&(t.setRenderTargetTextures(A,S.colorTexture,S.depthStencilTexture),t.setRenderTarget(A))}let kt=b[At];kt===void 0&&(kt=new ze,kt.layers.enable(At),kt.viewport=new he,b[At]=kt),kt.matrix.fromArray(Zt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Zt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),At===0&&(x.matrix.copy(kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(kt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const At=d.getDepthInformation(lt[0]);At&&At.isValid&&At.texture&&M.init(t,At,s.renderState)}}for(let lt=0;lt<E.length;lt++){const st=y[lt],xt=E[lt];st!==null&&xt!==void 0&&xt.update(st,j,c||r)}dt&&dt(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const bt=new Z1;bt.setAnimationLoop(vt),this.setAnimationLoop=function(G){dt=G},this.dispose=function(){}}}const zn=new en,op=new re;function lp(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,U1(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),M(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,A,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=t.get(f),E=A.envMap,y=A.envMapRotation;E&&(m.envMap.value=E,zn.copy(y),zn.x*=-1,zn.y*=-1,zn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(op.makeRotationFromEuler(zn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ce&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const A=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cp(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const y=E.program;n.uniformBlockBinding(A,y)}function c(A,E){let y=s[A.id];y===void 0&&(g(A),y=h(A),s[A.id]=y,A.addEventListener("dispose",m));const L=E.program;n.updateUBOMapping(A,L);const C=t.render.frame;a[A.id]!==C&&(u(A),a[A.id]=C)}function h(A){const E=d();A.__bindingPointIndex=E;const y=i.createBuffer(),L=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function d(){for(let A=0;A<o;A++)if(r.indexOf(A)===-1)return r.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){const E=s[A.id],y=A.uniforms,L=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,w=y.length;C<w;C++){const F=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,x=F.length;b<x;b++){const R=F[b];if(p(R,C,b,L)===!0){const Y=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let $=0;$<V.length;$++){const D=V[$],B=M(D);typeof D=="number"||typeof D=="boolean"?(R.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,Y+X,R.__data)):D.isMatrix3?(R.__data[0]=D.elements[0],R.__data[1]=D.elements[1],R.__data[2]=D.elements[2],R.__data[3]=0,R.__data[4]=D.elements[3],R.__data[5]=D.elements[4],R.__data[6]=D.elements[5],R.__data[7]=0,R.__data[8]=D.elements[6],R.__data[9]=D.elements[7],R.__data[10]=D.elements[8],R.__data[11]=0):(D.toArray(R.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,E,y,L){const C=A.value,w=E+"_"+y;if(L[w]===void 0)return typeof C=="number"||typeof C=="boolean"?L[w]=C:L[w]=C.clone(),!0;{const F=L[w];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return L[w]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(A){const E=A.uniforms;let y=0;const L=16;for(let w=0,F=E.length;w<F;w++){const b=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,R=b.length;x<R;x++){const Y=b[x],V=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,$=V.length;X<$;X++){const D=V[X],B=M(D),z=y%L,K=z%B.boundary,et=z+K;y+=K,et!==0&&L-et<B.storage&&(y+=L-et),Y.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=B.storage}}}const C=y%L;return C>0&&(y+=L-C),A.__size=y,A.__cache={},this}function M(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const y=r.indexOf(E.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function f(){for(const A in s)i.deleteBuffer(s[A]);r=[],s={},a={}}return{bind:l,update:c,dispose:f}}class hp{constructor(t={}){const{canvas:e=cc(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,f=null;const A=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let L=!1;this._outputColorSpace=Oe;let C=0,w=0,F=null,b=-1,x=null;const R=new he,Y=new he;let V=null;const X=new jt(0);let $=0,D=e.width,B=e.height,z=1,K=null,et=null;const dt=new he(0,0,D,B),vt=new he(0,0,D,B);let bt=!1;const G=new zr;let j=!1,lt=!1;const st=new re,xt=new re,Ut=new U,At=new he,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function kt(){return F===null?z:1}let S=n;function ht(v,I){return e.getContext(v,I)}try{const v={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tr}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",J,!1),S===null){const I="webgl2";if(S=ht(I,v),S===null)throw ht(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let nt,ut,Z,yt,at,Mt,Ht,T,_,O,q,Q,W,Pt,ft,wt,Dt,tt,St,Ft,Nt,pt,Bt,P;function gt(){nt=new x2(S),nt.init(),pt=new np(S,nt),ut=new u2(S,nt,t,pt),Z=new tp(S,nt),ut.reverseDepthBuffer&&u&&Z.buffers.depth.setReversed(!0),yt=new S2(S),at=new Hf,Mt=new ep(S,nt,Z,at,ut,pt,yt),Ht=new p2(y),T=new v2(y),_=new Rh(S),Bt=new h2(S,_),O=new y2(S,_,yt,Bt),q=new b2(S,O,_,yt),St=new E2(S,ut,Mt),wt=new f2(at),Q=new kf(y,Ht,T,nt,ut,Bt,wt),W=new lp(y,at),Pt=new Gf,ft=new Kf(nt),tt=new c2(y,Ht,T,Z,q,p,l),Dt=new Jf(y,q,ut),P=new cp(S,yt,ut,Z),Ft=new d2(S,nt,yt),Nt=new M2(S,nt,yt),yt.programs=Q.programs,y.capabilities=ut,y.extensions=nt,y.properties=at,y.renderLists=Pt,y.shadowMap=Dt,y.state=Z,y.info=yt}gt();const it=new rp(y,S);this.xr=it,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const v=nt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=nt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(v){v!==void 0&&(z=v,this.setSize(D,B,!1))},this.getSize=function(v){return v.set(D,B)},this.setSize=function(v,I,k=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=v,B=I,e.width=Math.floor(v*z),e.height=Math.floor(I*z),k===!0&&(e.style.width=v+"px",e.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(D*z,B*z).floor()},this.setDrawingBufferSize=function(v,I,k){D=v,B=I,z=k,e.width=Math.floor(v*k),e.height=Math.floor(I*k),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(dt)},this.setViewport=function(v,I,k,H){v.isVector4?dt.set(v.x,v.y,v.z,v.w):dt.set(v,I,k,H),Z.viewport(R.copy(dt).multiplyScalar(z).round())},this.getScissor=function(v){return v.copy(vt)},this.setScissor=function(v,I,k,H){v.isVector4?vt.set(v.x,v.y,v.z,v.w):vt.set(v,I,k,H),Z.scissor(Y.copy(vt).multiplyScalar(z).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(v){Z.setScissorTest(bt=v)},this.setOpaqueSort=function(v){K=v},this.setTransparentSort=function(v){et=v},this.getClearColor=function(v){return v.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,k=!0){let H=0;if(v){let N=!1;if(F!==null){const ot=F.texture.format;N=ot===Lr||ot===Dr||ot===Pr}if(N){const ot=F.texture.type,_t=ot===tn||ot===Wn||ot===Vi||ot===Gi||ot===Rr||ot===Cr,Ct=tt.getClearColor(),Et=tt.getClearAlpha(),Ot=Ct.r,zt=Ct.g,Lt=Ct.b;_t?(g[0]=Ot,g[1]=zt,g[2]=Lt,g[3]=Et,S.clearBufferuiv(S.COLOR,0,g)):(M[0]=Ot,M[1]=zt,M[2]=Lt,M[3]=Et,S.clearBufferiv(S.COLOR,0,M))}else H|=S.COLOR_BUFFER_BIT}I&&(H|=S.DEPTH_BUFFER_BIT),k&&(H|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",J,!1),tt.dispose(),Pt.dispose(),ft.dispose(),at.dispose(),Ht.dispose(),T.dispose(),q.dispose(),Bt.dispose(),P.dispose(),Q.dispose(),it.dispose(),it.removeEventListener("sessionstart",qr),it.removeEventListener("sessionend",Wr),Dn.stop()};function Tt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const v=yt.autoReset,I=Dt.enabled,k=Dt.autoUpdate,H=Dt.needsUpdate,N=Dt.type;gt(),yt.autoReset=v,Dt.enabled=I,Dt.autoUpdate=k,Dt.needsUpdate=H,Dt.type=N}function J(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Rt(v){const I=v.target;I.removeEventListener("dispose",Rt),Vt(I)}function Vt(v){ie(v),at.remove(v)}function ie(v){const I=at.get(v).programs;I!==void 0&&(I.forEach(function(k){Q.releaseProgram(k)}),v.isShaderMaterial&&Q.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,k,H,N,ot){I===null&&(I=Zt);const _t=N.isMesh&&N.matrixWorld.determinant()<0,Ct=rl(v,I,k,H,N);Z.setMaterial(H,_t);let Et=k.index,Ot=1;if(H.wireframe===!0){if(Et=O.getWireframeAttribute(k),Et===void 0)return;Ot=2}const zt=k.drawRange,Lt=k.attributes.position;let Yt=zt.start*Ot,Qt=(zt.start+zt.count)*Ot;ot!==null&&(Yt=Math.max(Yt,ot.start*Ot),Qt=Math.min(Qt,(ot.start+ot.count)*Ot)),Et!==null?(Yt=Math.max(Yt,0),Qt=Math.min(Qt,Et.count)):Lt!=null&&(Yt=Math.max(Yt,0),Qt=Math.min(Qt,Lt.count));const ce=Qt-Yt;if(ce<0||ce===1/0)return;Bt.setup(N,H,Ct,k,Et);let se,ne=Ft;if(Et!==null&&(se=_.get(Et),ne=Nt,ne.setIndex(se)),N.isMesh)H.wireframe===!0?(Z.setLineWidth(H.wireframeLinewidth*kt()),ne.setMode(S.LINES)):ne.setMode(S.TRIANGLES);else if(N.isLine){let It=H.linewidth;It===void 0&&(It=1),Z.setLineWidth(It*kt()),N.isLineSegments?ne.setMode(S.LINES):N.isLineLoop?ne.setMode(S.LINE_LOOP):ne.setMode(S.LINE_STRIP)}else N.isPoints?ne.setMode(S.POINTS):N.isSprite&&ne.setMode(S.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)gi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const It=N._multiDrawStarts,oe=N._multiDrawCounts,Kt=N._multiDrawCount,Pe=Et?_.get(Et).bytesPerElement:1,$n=at.get(H).currentProgram.getUniforms();for(let De=0;De<Kt;De++)$n.setValue(S,"_gl_DrawID",De),ne.render(It[De]/Pe,oe[De])}else if(N.isInstancedMesh)ne.renderInstances(Yt,ce,N.count);else if(k.isInstancedBufferGeometry){const It=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,oe=Math.min(k.instanceCount,It);ne.renderInstances(Yt,ce,oe)}else ne.render(Yt,ce)};function Jt(v,I,k){v.transparent===!0&&v.side===Ye&&v.forceSinglePass===!1?(v.side=Ce,v.needsUpdate=!0,is(v,I,k),v.side=Rn,v.needsUpdate=!0,is(v,I,k),v.side=Ye):is(v,I,k)}this.compile=function(v,I,k=null){k===null&&(k=v),f=ft.get(k),f.init(I),E.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),v!==k&&v.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const H=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ot=N.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){const Ct=ot[_t];Jt(Ct,k,N),H.add(Ct)}else Jt(ot,k,N),H.add(ot)}),f=E.pop(),H},this.compileAsync=function(v,I,k=null){const H=this.compile(v,I,k);return new Promise(N=>{function ot(){if(H.forEach(function(_t){at.get(_t).currentProgram.isReady()&&H.delete(_t)}),H.size===0){N(v);return}setTimeout(ot,10)}nt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let He=null;function sn(v){He&&He(v)}function qr(){Dn.stop()}function Wr(){Dn.start()}const Dn=new Z1;Dn.setAnimationLoop(sn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(v){He=v,it.setAnimationLoop(v),v===null?Dn.stop():Dn.start()},it.addEventListener("sessionstart",qr),it.addEventListener("sessionend",Wr),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,I,F),f=ft.get(v,E.length),f.init(I),E.push(f),xt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G.setFromProjectionMatrix(xt),lt=this.localClippingEnabled,j=wt.init(this.clippingPlanes,lt),m=Pt.get(v,A.length),m.init(),A.push(m),it.enabled===!0&&it.isPresenting===!0){const ot=y.xr.getDepthSensingMesh();ot!==null&&Xs(ot,I,-1/0,y.sortObjects)}Xs(v,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,et),Xt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Xt&&tt.addToRenderList(m,v),this.info.render.frame++,j===!0&&wt.beginShadows();const k=f.state.shadowsArray;Dt.render(k,v,I),j===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(f.setupLights(),I.isArrayCamera){const ot=I.cameras;if(N.length>0)for(let _t=0,Ct=ot.length;_t<Ct;_t++){const Et=ot[_t];Yr(H,N,v,Et)}Xt&&tt.render(v);for(let _t=0,Ct=ot.length;_t<Ct;_t++){const Et=ot[_t];Xr(m,v,Et,Et.viewport)}}else N.length>0&&Yr(H,N,v,I),Xt&&tt.render(v),Xr(m,v,I);F!==null&&w===0&&(Mt.updateMultisampleRenderTarget(F),Mt.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(y,v,I),Bt.resetDefaultState(),b=-1,x=null,E.pop(),E.length>0?(f=E[E.length-1],j===!0&&wt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Xs(v,I,k,H){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||G.intersectsSprite(v)){H&&At.setFromMatrixPosition(v.matrixWorld).applyMatrix4(xt);const _t=q.update(v),Ct=v.material;Ct.visible&&m.push(v,_t,Ct,k,At.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||G.intersectsObject(v))){const _t=q.update(v),Ct=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),At.copy(v.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),At.copy(_t.boundingSphere.center)),At.applyMatrix4(v.matrixWorld).applyMatrix4(xt)),Array.isArray(Ct)){const Et=_t.groups;for(let Ot=0,zt=Et.length;Ot<zt;Ot++){const Lt=Et[Ot],Yt=Ct[Lt.materialIndex];Yt&&Yt.visible&&m.push(v,_t,Yt,k,At.z,Lt)}}else Ct.visible&&m.push(v,_t,Ct,k,At.z,null)}}const ot=v.children;for(let _t=0,Ct=ot.length;_t<Ct;_t++)Xs(ot[_t],I,k,H)}function Xr(v,I,k,H){const N=v.opaque,ot=v.transmissive,_t=v.transparent;f.setupLightsView(k),j===!0&&wt.setGlobalState(y.clippingPlanes,k),H&&Z.viewport(R.copy(H)),N.length>0&&ns(N,I,k),ot.length>0&&ns(ot,I,k),_t.length>0&&ns(_t,I,k),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Yr(v,I,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Yn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Ji:tn,minFilter:Gn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const ot=f.state.transmissionRenderTarget[H.id],_t=H.viewport||R;ot.setSize(_t.z*y.transmissionResolutionScale,_t.w*y.transmissionResolutionScale);const Ct=y.getRenderTarget(),Et=y.getActiveCubeFace(),Ot=y.getActiveMipmapLevel();y.setRenderTarget(ot),y.getClearColor(X),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&tt.render(k);const zt=y.toneMapping;y.toneMapping=An;const Lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),j===!0&&wt.setGlobalState(y.clippingPlanes,H),ns(v,k,H),Mt.updateMultisampleRenderTarget(ot),Mt.updateRenderTargetMipmap(ot),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Qt=0,ce=I.length;Qt<ce;Qt++){const se=I[Qt],ne=se.object,It=se.geometry,oe=se.material,Kt=se.group;if(oe.side===Ye&&ne.layers.test(H.layers)){const Pe=oe.side;oe.side=Ce,oe.needsUpdate=!0,Zr(ne,k,H,It,oe,Kt),oe.side=Pe,oe.needsUpdate=!0,Yt=!0}}Yt===!0&&(Mt.updateMultisampleRenderTarget(ot),Mt.updateRenderTargetMipmap(ot))}y.setRenderTarget(Ct,Et,Ot),y.setClearColor(X,$),Lt!==void 0&&(H.viewport=Lt),y.toneMapping=zt}function ns(v,I,k){const H=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ot=v.length;N<ot;N++){const _t=v[N],Ct=_t.object,Et=_t.geometry,Ot=_t.group;let zt=_t.material;zt.allowOverride===!0&&H!==null&&(zt=H),Ct.layers.test(k.layers)&&Zr(Ct,I,k,Et,zt,Ot)}}function Zr(v,I,k,H,N,ot){v.onBeforeRender(y,I,k,H,N,ot),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(y,I,k,H,v,ot),N.transparent===!0&&N.side===Ye&&N.forceSinglePass===!1?(N.side=Ce,N.needsUpdate=!0,y.renderBufferDirect(k,I,H,N,v,ot),N.side=Rn,N.needsUpdate=!0,y.renderBufferDirect(k,I,H,N,v,ot),N.side=Ye):y.renderBufferDirect(k,I,H,N,v,ot),v.onAfterRender(y,I,k,H,N,ot)}function is(v,I,k){I.isScene!==!0&&(I=Zt);const H=at.get(v),N=f.state.lights,ot=f.state.shadowsArray,_t=N.state.version,Ct=Q.getParameters(v,N.state,ot,I,k),Et=Q.getProgramCacheKey(Ct);let Ot=H.programs;H.environment=v.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(v.isMeshStandardMaterial?T:Ht).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ot===void 0&&(v.addEventListener("dispose",Rt),Ot=new Map,H.programs=Ot);let zt=Ot.get(Et);if(zt!==void 0){if(H.currentProgram===zt&&H.lightsStateVersion===_t)return $r(v,Ct),zt}else Ct.uniforms=Q.getUniforms(v),v.onBeforeCompile(Ct,y),zt=Q.acquireProgram(Ct,Et),Ot.set(Et,zt),H.uniforms=Ct.uniforms;const Lt=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Lt.clippingPlanes=wt.uniform),$r(v,Ct),H.needsLights=ll(v),H.lightsStateVersion=_t,H.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=zt,H.uniformsList=null,zt}function Kr(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=zs.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function $r(v,I){const k=at.get(v);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function rl(v,I,k,H,N){I.isScene!==!0&&(I=Zt),Mt.resetTextureUnits();const ot=I.fog,_t=H.isMeshStandardMaterial?I.environment:null,Ct=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ei,Et=(H.isMeshStandardMaterial?T:Ht).get(H.envMap||_t),Ot=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,zt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!k.morphAttributes.position,Yt=!!k.morphAttributes.normal,Qt=!!k.morphAttributes.color;let ce=An;H.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ce=y.toneMapping);const se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=se!==void 0?se.length:0,It=at.get(H),oe=f.state.lights;if(j===!0&&(lt===!0||v!==x)){const Se=v===x&&H.id===b;wt.setState(H,v,Se)}let Kt=!1;H.version===It.__version?(It.needsLights&&It.lightsStateVersion!==oe.state.version||It.outputColorSpace!==Ct||N.isBatchedMesh&&It.batching===!1||!N.isBatchedMesh&&It.batching===!0||N.isBatchedMesh&&It.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&It.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&It.instancing===!1||!N.isInstancedMesh&&It.instancing===!0||N.isSkinnedMesh&&It.skinning===!1||!N.isSkinnedMesh&&It.skinning===!0||N.isInstancedMesh&&It.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&It.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&It.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&It.instancingMorph===!1&&N.morphTexture!==null||It.envMap!==Et||H.fog===!0&&It.fog!==ot||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==wt.numPlanes||It.numIntersection!==wt.numIntersection)||It.vertexAlphas!==Ot||It.vertexTangents!==zt||It.morphTargets!==Lt||It.morphNormals!==Yt||It.morphColors!==Qt||It.toneMapping!==ce||It.morphTargetsCount!==ne)&&(Kt=!0):(Kt=!0,It.__version=H.version);let Pe=It.currentProgram;Kt===!0&&(Pe=is(H,I,N));let $n=!1,De=!1,Pi=!1;const ae=Pe.getUniforms(),Ie=It.uniforms;if(Z.useProgram(Pe.program)&&($n=!0,De=!0,Pi=!0),H.id!==b&&(b=H.id,De=!0),$n||x!==v){Z.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),dc(st),uc(st),ae.setValue(S,"projectionMatrix",st)):ae.setValue(S,"projectionMatrix",v.projectionMatrix),ae.setValue(S,"viewMatrix",v.matrixWorldInverse);const Ae=ae.map.cameraPosition;Ae!==void 0&&Ae.setValue(S,Ut.setFromMatrixPosition(v.matrixWorld)),ut.logarithmicDepthBuffer&&ae.setValue(S,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ae.setValue(S,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,De=!0,Pi=!0)}if(N.isSkinnedMesh){ae.setOptional(S,N,"bindMatrix"),ae.setOptional(S,N,"bindMatrixInverse");const Se=N.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ae.setValue(S,"boneTexture",Se.boneTexture,Mt))}N.isBatchedMesh&&(ae.setOptional(S,N,"batchingTexture"),ae.setValue(S,"batchingTexture",N._matricesTexture,Mt),ae.setOptional(S,N,"batchingIdTexture"),ae.setValue(S,"batchingIdTexture",N._indirectTexture,Mt),ae.setOptional(S,N,"batchingColorTexture"),N._colorsTexture!==null&&ae.setValue(S,"batchingColorTexture",N._colorsTexture,Mt));const Ne=k.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&St.update(N,k,Pe),(De||It.receiveShadow!==N.receiveShadow)&&(It.receiveShadow=N.receiveShadow,ae.setValue(S,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ie.envMap.value=Et,Ie.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Ie.envMapIntensity.value=I.environmentIntensity),De&&(ae.setValue(S,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&ol(Ie,Pi),ot&&H.fog===!0&&W.refreshFogUniforms(Ie,ot),W.refreshMaterialUniforms(Ie,H,z,B,f.state.transmissionRenderTarget[v.id]),zs.upload(S,Kr(It),Ie,Mt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(zs.upload(S,Kr(It),Ie,Mt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ae.setValue(S,"center",N.center),ae.setValue(S,"modelViewMatrix",N.modelViewMatrix),ae.setValue(S,"normalMatrix",N.normalMatrix),ae.setValue(S,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Se=H.uniformsGroups;for(let Ae=0,Ys=Se.length;Ae<Ys;Ae++){const Ln=Se[Ae];P.update(Ln,Pe),P.bind(Ln,Pe)}}return Pe}function ol(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function ll(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,I,k){const H=at.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),at.get(v.texture).__webglTexture=I,at.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const k=at.get(v);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const cl=S.createFramebuffer();this.setRenderTarget=function(v,I=0,k=0){F=v,C=I,w=k;let H=!0,N=null,ot=!1,_t=!1;if(v){const Et=at.get(v);if(Et.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(S.FRAMEBUFFER,null),H=!1;else if(Et.__webglFramebuffer===void 0)Mt.setupRenderTarget(v);else if(Et.__hasExternalTextures)Mt.rebindTextures(v,at.get(v.texture).__webglTexture,at.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Lt=v.depthTexture;if(Et.__boundDepthTexture!==Lt){if(Lt!==null&&at.has(Lt)&&(v.width!==Lt.image.width||v.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Mt.setupDepthRenderbuffer(v)}}const Ot=v.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(_t=!0);const zt=at.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(zt[I])?N=zt[I][k]:N=zt[I],ot=!0):v.samples>0&&Mt.useMultisampledRTT(v)===!1?N=at.get(v).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[k]:N=zt,R.copy(v.viewport),Y.copy(v.scissor),V=v.scissorTest}else R.copy(dt).multiplyScalar(z).floor(),Y.copy(vt).multiplyScalar(z).floor(),V=bt;if(k!==0&&(N=cl),Z.bindFramebuffer(S.FRAMEBUFFER,N)&&H&&Z.drawBuffers(v,N),Z.viewport(R),Z.scissor(Y),Z.setScissorTest(V),ot){const Et=at.get(v.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+I,Et.__webglTexture,k)}else if(_t){const Et=at.get(v.texture),Ot=I;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Et.__webglTexture,k,Ot)}else if(v!==null&&k!==0){const Et=at.get(v.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Et.__webglTexture,k)}b=-1},this.readRenderTargetPixels=function(v,I,k,H,N,ot,_t,Ct=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=at.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et){Z.bindFramebuffer(S.FRAMEBUFFER,Et);try{const Ot=v.textures[Ct],zt=Ot.format,Lt=Ot.type;if(!ut.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-H&&k>=0&&k<=v.height-N&&(v.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ct),S.readPixels(I,k,H,N,pt.convert(zt),pt.convert(Lt),ot))}finally{const Ot=F!==null?at.get(F).__webglFramebuffer:null;Z.bindFramebuffer(S.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(v,I,k,H,N,ot,_t,Ct=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=at.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(Et=Et[_t]),Et)if(I>=0&&I<=v.width-H&&k>=0&&k<=v.height-N){Z.bindFramebuffer(S.FRAMEBUFFER,Et);const Ot=v.textures[Ct],zt=Ot.format,Lt=Ot.type;if(!ut.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Yt),S.bufferData(S.PIXEL_PACK_BUFFER,ot.byteLength,S.STREAM_READ),v.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ct),S.readPixels(I,k,H,N,pt.convert(zt),pt.convert(Lt),0);const Qt=F!==null?at.get(F).__webglFramebuffer:null;Z.bindFramebuffer(S.FRAMEBUFFER,Qt);const ce=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await hc(S,ce,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Yt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ot),S.deleteBuffer(Yt),S.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,k=0){const H=Math.pow(2,-k),N=Math.floor(v.image.width*H),ot=Math.floor(v.image.height*H),_t=I!==null?I.x:0,Ct=I!==null?I.y:0;Mt.setTexture2D(v,0),S.copyTexSubImage2D(S.TEXTURE_2D,k,0,0,_t,Ct,N,ot),Z.unbindTexture()};const hl=S.createFramebuffer(),dl=S.createFramebuffer();this.copyTextureToTexture=function(v,I,k=null,H=null,N=0,ot=null){ot===null&&(N!==0?(gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=N,N=0):ot=0);let _t,Ct,Et,Ot,zt,Lt,Yt,Qt,ce;const se=v.isCompressedTexture?v.mipmaps[ot]:v.image;if(k!==null)_t=k.max.x-k.min.x,Ct=k.max.y-k.min.y,Et=k.isBox3?k.max.z-k.min.z:1,Ot=k.min.x,zt=k.min.y,Lt=k.isBox3?k.min.z:0;else{const Ne=Math.pow(2,-N);_t=Math.floor(se.width*Ne),Ct=Math.floor(se.height*Ne),v.isDataArrayTexture?Et=se.depth:v.isData3DTexture?Et=Math.floor(se.depth*Ne):Et=1,Ot=0,zt=0,Lt=0}H!==null?(Yt=H.x,Qt=H.y,ce=H.z):(Yt=0,Qt=0,ce=0);const ne=pt.convert(I.format),It=pt.convert(I.type);let oe;I.isData3DTexture?(Mt.setTexture3D(I,0),oe=S.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Mt.setTexture2DArray(I,0),oe=S.TEXTURE_2D_ARRAY):(Mt.setTexture2D(I,0),oe=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,I.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,I.unpackAlignment);const Kt=S.getParameter(S.UNPACK_ROW_LENGTH),Pe=S.getParameter(S.UNPACK_IMAGE_HEIGHT),$n=S.getParameter(S.UNPACK_SKIP_PIXELS),De=S.getParameter(S.UNPACK_SKIP_ROWS),Pi=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,se.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,se.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ot),S.pixelStorei(S.UNPACK_SKIP_ROWS,zt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Lt);const ae=v.isDataArrayTexture||v.isData3DTexture,Ie=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Ne=at.get(v),Se=at.get(I),Ae=at.get(Ne.__renderTarget),Ys=at.get(Se.__renderTarget);Z.bindFramebuffer(S.READ_FRAMEBUFFER,Ae.__webglFramebuffer),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let Ln=0;Ln<Et;Ln++)ae&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,at.get(v).__webglTexture,N,Lt+Ln),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,at.get(I).__webglTexture,ot,ce+Ln)),S.blitFramebuffer(Ot,zt,_t,Ct,Yt,Qt,_t,Ct,S.DEPTH_BUFFER_BIT,S.NEAREST);Z.bindFramebuffer(S.READ_FRAMEBUFFER,null),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||at.has(v)){const Ne=at.get(v),Se=at.get(I);Z.bindFramebuffer(S.READ_FRAMEBUFFER,hl),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,dl);for(let Ae=0;Ae<Et;Ae++)ae?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ne.__webglTexture,N,Lt+Ae):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ne.__webglTexture,N),Ie?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Se.__webglTexture,ot,ce+Ae):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Se.__webglTexture,ot),N!==0?S.blitFramebuffer(Ot,zt,_t,Ct,Yt,Qt,_t,Ct,S.COLOR_BUFFER_BIT,S.NEAREST):Ie?S.copyTexSubImage3D(oe,ot,Yt,Qt,ce+Ae,Ot,zt,_t,Ct):S.copyTexSubImage2D(oe,ot,Yt,Qt,Ot,zt,_t,Ct);Z.bindFramebuffer(S.READ_FRAMEBUFFER,null),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Ie?v.isDataTexture||v.isData3DTexture?S.texSubImage3D(oe,ot,Yt,Qt,ce,_t,Ct,Et,ne,It,se.data):I.isCompressedArrayTexture?S.compressedTexSubImage3D(oe,ot,Yt,Qt,ce,_t,Ct,Et,ne,se.data):S.texSubImage3D(oe,ot,Yt,Qt,ce,_t,Ct,Et,ne,It,se):v.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ot,Yt,Qt,_t,Ct,ne,It,se.data):v.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ot,Yt,Qt,se.width,se.height,ne,se.data):S.texSubImage2D(S.TEXTURE_2D,ot,Yt,Qt,_t,Ct,ne,It,se);S.pixelStorei(S.UNPACK_ROW_LENGTH,Kt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Pe),S.pixelStorei(S.UNPACK_SKIP_PIXELS,$n),S.pixelStorei(S.UNPACK_SKIP_ROWS,De),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Pi),ot===0&&I.generateMipmaps&&S.generateMipmap(oe),Z.unbindTexture()},this.copyTextureToTexture3D=function(v,I,k=null,H=null,N=0){return gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,I,k,H,N)},this.initRenderTarget=function(v){at.get(v).__webglFramebuffer===void 0&&Mt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Mt.setTextureCube(v,0):v.isData3DTexture?Mt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Mt.setTexture2DArray(v,0):Mt.setTexture2D(v,0),Z.unbindTexture()},this.resetState=function(){C=0,w=0,F=null,Z.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const h1={type:"change"},Gr={type:"start"},Q1={type:"end"},Cs=new Nr,d1=new En,dp=Math.cos(70*lc.DEG2RAD),ue=new U,Re=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ra=1e-6;class up extends Ah{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Xn,this._lastTargetPosition=new U,this._quat=new Xn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zo,this._sphericalDelta=new zo,this._scale=1,this._panOffset=new U,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new U,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pp.bind(this),this._onPointerDown=fp.bind(this),this._onPointerUp=mp.bind(this),this._onContextMenu=Sp.bind(this),this._onMouseWheel=vp.bind(this),this._onKeyDown=xp.bind(this),this._onTouchStart=yp.bind(this),this._onTouchMove=Mp.bind(this),this._onMouseDown=gp.bind(this),this._onMouseMove=_p.bind(this),this._interceptControlDown=Ep.bind(this),this._interceptControlUp=bp.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(h1),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;ue.copy(e).sub(this.target),ue.applyQuaternion(this._quat),this._spherical.setFromVector3(ue),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Re:n>Math.PI&&(n-=Re),s<-Math.PI?s+=Re:s>Math.PI&&(s-=Re),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(ue.setFromSpherical(this._spherical),ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=ue.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Cs.origin.copy(this.object.position),Cs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cs.direction))<dp?this.object.lookAt(this.target):(d1.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cs.intersectPlane(d1,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ra||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ra||this._lastTargetPosition.distanceToSquared(this.target)>Ra?(this.dispatchEvent(h1),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Re/60*this.autoRotateSpeed*t:Re/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ue.setFromMatrixColumn(e,0),ue.multiplyScalar(-t),this._panOffset.add(ue)}_panUp(t,e){this.screenSpacePanning===!0?ue.setFromMatrixColumn(e,1):(ue.setFromMatrixColumn(e,0),ue.crossVectors(this.object.up,ue)),ue.multiplyScalar(t),this._panOffset.add(ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ue.copy(s).sub(this.target);let a=ue.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,a=e-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Re*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Re*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Re*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Re*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Re*this._rotateDelta.x/e.clientHeight),this._rotateUp(Re*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function fp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function pp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q1),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case pi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case pi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Gr)}function _p(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function vp(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Gr),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Q1))}function xp(i){this.enabled!==!1&&this._handleKeyDown(i)}function yp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Gr)}function Mp(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function Sp(i){this.enabled!==!1&&i.preventDefault()}function Ep(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bp(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Tp=Vs({__name:"Map3D",emits:["hover:path","click:path"],setup(i,{emit:t}){const e=t,n=be(),s=be();let a,r,o,l,c,h=new ct,d=0,u=[],p=null,g=!1,M=5,m={x:0,y:0},f,A=!1;Er(async()=>{!n.value||!s.value||(await E(),$())}),br(()=>{f&&cancelAnimationFrame(f),o&&o.dispose()});async function E(){if(!n.value||!s.value)return;const D=n.value,B=s.value;a=new Oc,a.background=new jt(15790320);const z=D.clientWidth/D.clientHeight;r=new ze(60,z,.1,1e3),r.position.set(12,8,12),o=new hp({canvas:B,alpha:!0,antialias:!0}),o.setSize(D.clientWidth,D.clientHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.shadowMap.enabled=!0,o.shadowMap.type=g1,l=new up(r,o.domElement),l.enableDamping=!0,l.dampingFactor=.05,l.screenSpacePanning=!0,l.minDistance=1,l.maxDistance=50,l.maxPolarAngle=Math.PI/2,l.minPolarAngle=Math.PI/4,y(),await L(),await C(),window.addEventListener("resize",X),D.addEventListener("mousemove",x),D.addEventListener("mousedown",R),D.addEventListener("mouseup",Y),D.addEventListener("click",V),A=!0}function y(){const D=new bh(16777215,.4);a.add(D);const B=new Io(16777215,.8);B.position.set(5,5,5),B.castShadow=!0,B.shadow.mapSize.width=2048,B.shadow.mapSize.height=2048,B.shadow.camera.near=.5,B.shadow.camera.far=50,B.shadow.camera.left=-10,B.shadow.camera.right=10,B.shadow.camera.top=10,B.shadow.camera.bottom=-10,a.add(B);const z=new Io(16777215,.3);z.position.set(-5,-5,5),a.add(z)}async function L(){const D=document.createElement("canvas"),B=D.getContext("2d");if(!B)return;D.width=2048,D.height=2048;const z=new Image;return new Promise(K=>{z.onload=()=>{B.clearRect(0,0,D.width,D.height);const et=z.width/z.height,dt=D.width/D.height;let vt=D.width,bt=D.height,G=0,j=0;et>dt?(bt=D.width/et,j=(D.height-bt)/2):(vt=D.height*et,G=(D.width-vt)/2),B.drawImage(z,G,j,vt,bt);const lt=new To(D);lt.needsUpdate=!0;const st=new Ai(16,16,32,32),xt=new Do({map:lt,transparent:!0,alphaTest:.1});c=new ke(st,xt),c.castShadow=!0,c.receiveShadow=!0,c.rotation.x=-Math.PI/2,a.add(c),K()},z.src="/output.svg",z.onerror=()=>{console.error("Failed to load SVG file"),K()}})}async function C(){try{const B=await(await fetch("/output.svg")).text();console.log("SVG content length:",B.length),console.log("SVG first 500 chars:",B.substring(0,500));const K=new DOMParser().parseFromString(B,"image/svg+xml");console.log("Parsed SVG document:",K);const et=K.querySelectorAll("[data-id]");console.log(`Found ${et.length} rustico elements in SVG`);const dt=K.querySelectorAll("*");console.log(`Total elements in SVG: ${dt.length}`);let vt=0;dt.forEach((bt,G)=>{bt.hasAttribute("data-id")&&(vt++,console.log(`Element ${G} has data-id:`,bt.getAttribute("data-id")))}),console.log(`Elements with data-id found: ${vt}`),et.forEach(bt=>{const G=bt.getAttribute("data-id");if(!G)return;if(console.log("Processing rustico:",G),console.log("Element tag name:",bt.tagName),console.log("Element attributes:",Array.from(bt.attributes).map(lt=>`${lt.name}="${lt.value}"`).join(", ")),bt.tagName==="path"){const lt=bt.getAttribute("d");if(lt){console.log("Element is a path with data:",lt.substring(0,100)),w(G,lt,bt);return}}const j=bt.querySelectorAll("path");if(console.log(`Found ${j.length} path elements within rustico ${G}`),j.length>0){const st=j[0].getAttribute("d");st?(console.log("Using path data:",st.substring(0,100)),w(G,st,bt)):console.log(`No path data found for rustico ${G}`)}else{console.log(`No path found for rustico ${G}`);const lt=bt.children;console.log(`Rustico ${G} has ${lt.length} children:`,Array.from(lt).map(st=>st.tagName));for(let st=0;st<lt.length;st++){const Ut=lt[st].getAttribute("d");if(Ut){console.log(`Found path data in child ${st}:`,Ut.substring(0,100)),w(G,Ut,bt);break}}}}),console.log(`Created ${u.length} interactive objects from SVG`)}catch(D){console.error("Failed to create interactive objects:",D)}}function w(D,B,z){try{const K=z.getAttribute("id")||"";if(!K.includes("_building")){console.log(`Skipping non-building element: ${K}`);return}if(u.find(lt=>lt.userData.id===D)){console.log(`Already have interactive object for rustico ${D}`);return}const dt=F(B);if(!dt){console.log(`Failed to create shape for rustico ${D}`);return}const vt={depth:.2,bevelEnabled:!1},bt=new Hr(dt,vt),G=new Do({color:8900331,transparent:!0,opacity:.8,side:Ye}),j=new ke(bt,G);j.castShadow=!0,j.receiveShadow=!0,j.position.set(0,0,0),j.userData={id:D},u.push(j),c?c.add(j):a.add(j),b(D,dt),console.log(`Created complex interactive for rustico ${D}`)}catch(K){console.error(`Failed to create interactive for rustico ${D}:`,K)}}function F(D){try{const B=new H1,z=D.match(/[MLHVCSQTAZ][^MLHVCSQTAZ]*/g)||[];let K=0,et=0,dt=0,vt=0,bt=!1;const G=3407,j=2516,lt=G/j,st=16,xt=16/lt,Ut=st/G,At=xt/j,Zt=(16-xt)/2;return z.forEach(Xt=>{const kt=Xt[0],S=Xt.slice(1).trim().split(/[\s,]+/).filter(ht=>ht!=="").map(Number);switch(kt){case"M":S.length>=2&&(K=S[0]*Ut-8,et=-S[1]*At+8-Zt,bt?B.moveTo(K,et):(B.moveTo(K,et),dt=K,vt=et,bt=!0));break;case"L":S.length>=2&&(K=S[0]*Ut-8,et=-S[1]*At+8-Zt,B.lineTo(K,et));break;case"H":S.length>=1&&(K=S[0]*Ut-8,B.lineTo(K,et));break;case"V":S.length>=1&&(et=-S[0]*At+8-Zt,B.lineTo(K,et));break;case"Z":bt&&B.lineTo(dt,vt);break;default:S.length>=2&&(K=S[0]*Ut-8,et=-S[1]*At+8-Zt,bt?B.lineTo(K,et):(B.moveTo(K,et),dt=K,vt=et,bt=!0))}}),bt?B:null}catch(B){return console.error("Failed to create shape from path:",B),null}}function b(D,B){const z=B.getPoints(50);if(z.length===0)return;let K=1/0,et=-1/0,dt=1/0,vt=-1/0;z.forEach(Zt=>{K=Math.min(K,Zt.x),et=Math.max(et,Zt.x),dt=Math.min(dt,Zt.y),vt=Math.max(vt,Zt.y)});const bt=(K+et)/2,G=(dt+vt)/2,j=document.createElement("canvas"),lt=j.getContext("2d");if(!lt)return;j.width=128,j.height=64,lt.imageSmoothingEnabled=!0,lt.imageSmoothingQuality="high",lt.clearRect(0,0,j.width,j.height),lt.fillStyle="black",lt.font="bold 40px Arial",lt.textAlign="center",lt.textBaseline="middle",lt.fillText(D,j.width/2,j.height/2);const st=new To(j);st.minFilter=Be,st.magFilter=Be,st.generateMipmaps=!1;const xt=new Or({map:st,transparent:!0,side:Ye}),Ut=new Ai(.25,.125),At=new ke(Ut,xt);At.position.set(bt,G,.05),c?c.add(At):a.add(At)}function x(D){if(!n.value)return;const B=n.value.getBoundingClientRect(),z=(D.clientX-B.left)/B.width*2-1,K=-((D.clientY-B.top)/B.height)*2+1;h.set(z,K);const et=new Fo;if(et.setFromCamera(h,r),u.length>0){const dt=et.intersectObjects(u,!0);if(dt.length>0){const vt=dt[0].object;vt.userData.id&&p!==vt&&(p=vt,console.log("hovering over rustico:",vt.userData.id),e("hover:path",vt.userData.id))}else p&&(p=null,e("hover:path",""))}}function R(D){m.x=D.clientX,m.y=D.clientY,g=!1}function Y(D){Math.sqrt(Math.pow(D.clientX-m.x,2)+Math.pow(D.clientY-m.y,2))>M&&(g=!0)}function V(D){if(g){g=!1;return}const B=new Fo;if(B.setFromCamera(h,r),u.length>0){const z=B.intersectObjects(u,!0);if(z.length>0){const K=z[0].object;if(K.userData.id){console.log("clicked on rustico:",K.userData.id),e("click:path",K.userData.id);return}}}e("click:path","map-clicked")}function X(){if(!n.value||!r||!o)return;const D=n.value,B=D.clientWidth/D.clientHeight;r.aspect=B,r.updateProjectionMatrix(),o.setSize(D.clientWidth,D.clientHeight),l&&l.update()}function $(){A&&(f=requestAnimationFrame($),d+=.01,l&&l.update(),c&&(c.position.y=Math.sin(d*.5)*.1),r&&Math.floor(d*10)%10===0&&console.log("Camera Position:",{x:r.position.x.toFixed(2),y:r.position.y.toFixed(2),z:r.position.z.toFixed(2)}),o.render(a,r))}return(D,B)=>(fn(),xi("div",{class:fe(D.$style.mapContainer),ref_key:"containerRef",ref:n},[xe("canvas",{ref_key:"canvasRef",ref:s,class:fe(D.$style.canvas)},null,2)],2))}}),Ap="_mapContainer_1f562_1",wp="_canvas_1f562_13",Rp={mapContainer:Ap,canvas:wp},Cp={$style:Rp},Pp=Gs(Tp,[["__cssModules",Cp]]),Dp={xmlns:"http://www.w3.org/2000/svg",width:"3407",height:"2516",fill:"none"};function Lp(i,t){return fn(),xi("svg",Dp,t[0]||(t[0]=[ul('<g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1494 1440 18-20.5 23 20-20.5 21.5z" class="path building path" data-id="386" style="color:#7ab2d3;"></path><path d="M1507.43 1443.62c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m7.94 0c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m8.03 5.25c-.45 0-.88-.08-1.3-.23-.41-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02.01-.73.09-1.39.26-1.96.16-.58.4-1.07.71-1.48.31-.4.69-.71 1.12-.92.44-.21.92-.32 1.46-.32.59 0 1.1.12 1.55.34.44.23.8.53 1.07.92s.44.82.5 1.3h-1.82c-.08-.3-.22-.54-.45-.72-.23-.17-.51-.26-.85-.26-.56 0-1 .25-1.29.75q-.435.735-.45 2.01h.06c.13-.26.31-.48.53-.66s.48-.32.76-.42c.29-.1.59-.15.91-.15.52 0 .98.12 1.38.37q.6.36.96.99c.23.43.34.91.34 1.46 0 .59-.13 1.11-.41 1.57-.27.46-.65.82-1.14 1.09-.49.25-1.06.38-1.71.38m-.01-1.45c.29 0 .54-.07.76-.2.23-.14.41-.33.53-.56.13-.23.2-.49.2-.78s-.07-.55-.2-.78c-.12-.23-.3-.42-.52-.55-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.33.19-.47.34c-.13.14-.24.3-.32.49-.07.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.31.42.53.56s.48.21.76.21" class="path path" data-id="386" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1309.5 293.5-75-30-59 97.5v7l84 23 52.5-81z" class="path land path" data-id="Cimitero" style="color:#7ab2d3;"></path><path d="M1228.46 326.328h-1.87a1.7 1.7 0 0 0-.21-.643c-.1-.191-.24-.353-.4-.486a1.9 1.9 0 0 0-.57-.307 2.3 2.3 0 0 0-.7-.106c-.45 0-.84.112-1.18.336q-.495.333-.78.972-.27.635-.27 1.542 0 .934.27 1.569c.19.423.45.742.79.958.33.216.72.324 1.16.324q.375 0 .69-.098c.21-.065.4-.16.56-.285.17-.128.3-.283.41-.465s.19-.389.23-.622l1.87.009q-.075.6-.36 1.159c-.19.369-.45.7-.77.993a3.8 3.8 0 0 1-1.16.69q-.66.252-1.5.251c-.78 0-1.47-.176-2.09-.528-.61-.352-1.09-.862-1.45-1.53-.35-.668-.52-1.476-.52-2.425 0-.951.17-1.761.53-2.429s.85-1.176 1.46-1.525q.915-.529 2.07-.529c.51 0 .97.071 1.41.213.43.143.82.35 1.15.623.34.27.61.6.82.993.21.392.35.84.41 1.346m1.29 5.672v-6.545h1.81V332zm.91-7.389a.97.97 0 0 1-.69-.269.84.84 0 0 1-.29-.652c0-.25.09-.464.29-.643a.96.96 0 0 1 .69-.273q.405 0 .69.273c.19.179.29.393.29.643 0 .253-.1.471-.29.652a.97.97 0 0 1-.69.269m2.36 7.389v-6.545h1.73v1.154h.07q.21-.575.69-.907.465-.333 1.14-.333t1.14.337c.32.222.53.523.64.903h.06c.14-.375.38-.674.73-.899.35-.227.77-.341 1.25-.341.61 0 1.1.195 1.48.584.39.386.58.935.58 1.645V332h-1.81v-4.044c0-.364-.1-.636-.29-.818a1.04 1.04 0 0 0-.73-.273c-.33 0-.58.105-.77.315q-.27.312-.27.823V332h-1.76v-4.082c0-.321-.1-.577-.28-.767q-.27-.286-.72-.286c-.2 0-.39.051-.55.153-.16.1-.28.241-.38.422-.09.179-.14.39-.14.631V332zm10.94 0v-6.545h1.82V332zm.91-7.389a.97.97 0 0 1-.69-.269.88.88 0 0 1-.29-.652c0-.25.1-.464.29-.643a.96.96 0 0 1 .69-.273q.405 0 .69.273c.2.179.29.393.29.643a.84.84 0 0 1-.29.652.97.97 0 0 1-.69.269m5.84.844v1.363h-3.94v-1.363zm-3.04-1.569h1.81v6.103c0 .167.03.298.08.392a.4.4 0 0 0 .21.191c.1.037.2.056.33.056.08 0 .17-.007.25-.021l.2-.039.28 1.351c-.09.028-.22.061-.38.098q-.255.06-.6.072c-.44.018-.82-.041-1.15-.174a1.58 1.58 0 0 1-.76-.622q-.285-.423-.27-1.066zm7.14 8.242q-1.005 0-1.74-.409a2.9 2.9 0 0 1-1.12-1.168q-.39-.759-.39-1.794 0-1.01.39-1.773c.27-.508.63-.904 1.11-1.189q.705-.426 1.68-.426.645 0 1.2.209c.38.136.7.342.98.618q.42.413.66 1.04c.16.415.23.9.23 1.457v.499h-5.52v-1.125h3.81c0-.262-.05-.493-.17-.695a1.2 1.2 0 0 0-.47-.473 1.35 1.35 0 0 0-.69-.175c-.28 0-.52.064-.74.192a1.396 1.396 0 0 0-.67 1.21v1.07c0 .324.06.604.17.84.13.235.3.417.52.545s.48.192.79.192c.2 0 .39-.029.55-.085.17-.057.31-.143.43-.256s.21-.253.28-.418l1.67.111c-.08.403-.26.756-.52 1.057-.26.298-.6.531-1.01.699-.42.164-.89.247-1.43.247M1259 332v-6.545h1.76v1.142h.07q.18-.61.6-.921c.28-.21.6-.315.97-.315.09 0 .19.005.29.017.11.011.2.027.28.047v1.611a3.18 3.18 0 0 0-.77-.098c-.26 0-.5.058-.71.174-.21.114-.38.273-.5.477q-.18.307-.18.708V332zm7.56.128c-.66 0-1.23-.141-1.72-.422a2.87 2.87 0 0 1-1.11-1.185q-.39-.762-.39-1.768 0-1.014.39-1.773.39-.762 1.11-1.185c.49-.284 1.06-.426 1.72-.426q.99 0 1.71.426c.49.282.86.677 1.12 1.185q.39.759.39 1.773 0 1.006-.39 1.768c-.26.506-.63.901-1.12 1.185q-.72.422-1.71.422m.01-1.406q.45 0 .75-.256c.21-.173.36-.409.46-.707.1-.299.16-.638.16-1.019s-.06-.72-.16-1.018-.25-.535-.46-.708q-.3-.26-.75-.26c-.3 0-.56.087-.77.26-.2.173-.36.409-.46.708-.1.298-.16.637-.16 1.018s.06.72.16 1.019.26.534.46.707c.21.17.47.256.77.256" class="path path" data-id="Cimitero" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1241 265.5 11-21 60 27-1.5 22z" class="path land path" data-id="330" style="color:#7ab2d3;"></path><path d="M1274.93 275.119c-.63 0-1.2-.109-1.7-.328a2.94 2.94 0 0 1-1.17-.912 2.33 2.33 0 0 1-.44-1.346h1.86q.015.32.21.562c.13.159.3.283.52.371.21.088.46.132.73.132.28 0 .53-.05.74-.149q.33-.15.51-.413.18-.265.18-.61c0-.233-.06-.439-.19-.618a1.23 1.23 0 0 0-.56-.426 2.2 2.2 0 0 0-.85-.153h-.81v-1.355h.81c.28 0 .53-.049.74-.145.21-.097.38-.23.5-.401q.18-.26.18-.605c0-.219-.05-.411-.16-.575a1 1 0 0 0-.43-.392c-.19-.094-.4-.141-.65-.141q-.375 0-.69.136c-.2.088-.37.215-.49.38a.9.9 0 0 0-.2.579h-1.77c.01-.503.15-.946.43-1.329.28-.384.65-.684 1.12-.899a3.8 3.8 0 0 1 1.61-.329c.6 0 1.13.11 1.58.329q.675.328 1.05.886c.26.369.38.784.38 1.244 0 .489-.15.897-.46 1.223-.3.327-.7.534-1.19.622v.069q.96.123 1.47.669c.34.36.5.812.5 1.355 0 .497-.14.939-.43 1.325s-.68.69-1.19.912q-.75.332-1.74.332m7.91 0c-.63 0-1.2-.109-1.7-.328a2.94 2.94 0 0 1-1.17-.912 2.33 2.33 0 0 1-.44-1.346h1.86q.015.32.21.562c.13.159.3.283.52.371.21.088.46.132.73.132.28 0 .53-.05.74-.149q.33-.15.51-.413.18-.265.18-.61c0-.233-.06-.439-.19-.618a1.23 1.23 0 0 0-.56-.426c-.23-.102-.52-.153-.85-.153h-.81v-1.355h.81c.28 0 .53-.049.74-.145.21-.097.38-.23.5-.401q.18-.26.18-.605c0-.219-.05-.411-.16-.575a1 1 0 0 0-.43-.392c-.19-.094-.4-.141-.65-.141q-.375 0-.69.136c-.2.088-.37.215-.49.38a.9.9 0 0 0-.2.579h-1.77c.01-.503.15-.946.43-1.329.28-.384.65-.684 1.12-.899a3.8 3.8 0 0 1 1.61-.329c.6 0 1.13.11 1.58.329q.675.328 1.05.886c.26.369.38.784.38 1.244 0 .489-.15.897-.46 1.223-.3.327-.7.534-1.19.622v.069q.96.123 1.47.669c.34.36.5.812.5 1.355 0 .497-.14.939-.43 1.325s-.68.69-1.19.912q-.75.332-1.74.332m8.11.073q-1.095-.004-1.89-.541c-.53-.358-.93-.877-1.22-1.556-.28-.679-.42-1.496-.41-2.45q0-1.428.42-2.433c.28-.671.69-1.181 1.21-1.53q.795-.529 1.89-.529c.73 0 1.36.177 1.88.529.53.352.94.863 1.22 1.534q.435 1.001.42 2.429 0 1.435-.42 2.454c-.28.679-.69 1.198-1.21 1.556q-.795.537-1.89.537m0-1.53q.75 0 1.2-.754c.3-.503.44-1.257.44-2.263 0-.662-.07-1.213-.2-1.654-.14-.44-.33-.771-.58-.992a1.23 1.23 0 0 0-.86-.333c-.5 0-.9.249-1.19.746-.3.497-.45 1.241-.46 2.233 0 .67.07 1.23.2 1.679.14.446.33.781.58 1.006q.375.332.87.332" class="path path" data-id="330" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1252 244.5 19.5-37.5 44 17-3.5 47.5z" class="path land path" data-id="329" style="color:#7ab2d3;"></path><path d="M1278.93 241.119c-.63 0-1.2-.109-1.7-.328a2.94 2.94 0 0 1-1.17-.912 2.33 2.33 0 0 1-.44-1.346h1.86q.015.32.21.562c.13.159.3.283.52.371.21.088.46.132.73.132.28 0 .53-.05.74-.149q.33-.15.51-.413.18-.265.18-.61c0-.233-.06-.439-.19-.618a1.23 1.23 0 0 0-.56-.426 2.2 2.2 0 0 0-.85-.153h-.81v-1.355h.81c.28 0 .53-.049.74-.145.21-.097.38-.23.5-.401q.18-.26.18-.605c0-.219-.05-.411-.16-.575a1 1 0 0 0-.43-.392c-.19-.094-.4-.141-.65-.141q-.375 0-.69.136c-.2.088-.37.215-.49.38a.9.9 0 0 0-.2.579h-1.77c.01-.503.15-.946.43-1.329.28-.384.65-.684 1.12-.899a3.8 3.8 0 0 1 1.61-.329c.6 0 1.13.11 1.58.329q.675.328 1.05.886c.26.369.38.784.38 1.244 0 .489-.15.897-.46 1.223-.3.327-.7.534-1.19.622v.069q.96.123 1.47.669c.34.36.5.812.5 1.355 0 .497-.14.939-.43 1.325s-.68.69-1.19.912q-.75.332-1.74.332m4.69-.119v-1.33l3.1-2.876c.27-.256.49-.486.67-.69.18-.205.32-.405.41-.601.1-.199.14-.414.14-.644 0-.255-.06-.475-.17-.66a1.2 1.2 0 0 0-.48-.431q-.3-.153-.69-.153c-.26 0-.5.054-.69.162-.2.108-.36.263-.46.464-.11.202-.17.442-.17.721h-1.75q0-.856.39-1.488c.26-.42.62-.745 1.09-.975.46-.231 1-.346 1.61-.346.62 0 1.17.111 1.63.333.47.219.83.523 1.09.912.25.389.38.835.38 1.338 0 .329-.06.655-.19.976q-.195.481-.69 1.069c-.33.389-.79.857-1.39 1.402l-1.28 1.249v.059h3.67V241zm10.71-8.847c.45 0 .88.076 1.3.226s.79.391 1.12.72q.495.495.78 1.313c.19.543.29 1.209.29 1.999 0 .741-.08 1.403-.25 1.985-.17.58-.4 1.073-.71 1.479s-.69.716-1.12.929q-.66.315-1.47.315c-.58 0-1.1-.112-1.54-.336a2.86 2.86 0 0 1-1.08-.925 2.9 2.9 0 0 1-.49-1.321h1.82q.105.477.45.741.33.26.84.26c.57 0 1-.247 1.3-.741.29-.497.44-1.178.44-2.041h-.06c-.13.255-.3.476-.53.66-.22.182-.47.323-.76.422-.28.1-.58.149-.91.149-.51 0-.97-.121-1.37-.362a2.6 2.6 0 0 1-.96-.997 3 3 0 0 1-.35-1.449c0-.585.14-1.107.41-1.564q.405-.685 1.14-1.074.735-.391 1.71-.388m.02 1.449c-.29 0-.55.068-.77.205s-.4.319-.53.55c-.13.23-.19.487-.19.771 0 .287.07.545.19.775.13.228.3.409.52.546.22.133.48.2.76.2a1.436 1.436 0 0 0 1.06-.447c.14-.142.25-.306.32-.49q.12-.278.12-.588c0-.276-.07-.529-.2-.759a1.434 1.434 0 0 0-1.28-.763" class="path path" data-id="329" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1322 179-33-10-17.5 37.5 44 18 3-29z" class="path land path" data-id="328" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1278.5 209 11.5-24.5 26.5 10-9.5 25.5z" class="path building path" data-id="328" style="color:#7ab2d3;"></path><path d="M1290.93 205.119c-.63 0-1.2-.109-1.7-.328a2.94 2.94 0 0 1-1.17-.912 2.33 2.33 0 0 1-.44-1.346h1.86q.015.32.21.562c.13.159.3.283.52.371.21.088.46.132.73.132.28 0 .53-.05.74-.149q.33-.15.51-.413.18-.265.18-.61c0-.233-.06-.439-.19-.618a1.23 1.23 0 0 0-.56-.426 2.2 2.2 0 0 0-.85-.153h-.81v-1.355h.81c.28 0 .53-.049.74-.145.21-.097.38-.23.5-.401q.18-.26.18-.605c0-.219-.05-.411-.16-.575a1 1 0 0 0-.43-.392c-.19-.094-.4-.141-.65-.141q-.375 0-.69.136c-.2.088-.37.215-.49.38a.9.9 0 0 0-.2.579h-1.77c.01-.503.15-.946.43-1.329.28-.384.65-.684 1.12-.899a3.8 3.8 0 0 1 1.61-.329c.6 0 1.13.11 1.58.329q.675.328 1.05.886c.26.369.38.784.38 1.244 0 .489-.15.897-.46 1.223-.3.327-.7.534-1.19.622v.069q.96.123 1.47.669c.34.36.5.812.5 1.355 0 .497-.14.939-.43 1.325s-.68.69-1.19.912q-.75.332-1.74.332m4.69-.119v-1.33l3.1-2.876c.27-.256.49-.486.67-.69.18-.205.32-.405.41-.601.1-.199.14-.414.14-.644 0-.255-.06-.475-.17-.66a1.2 1.2 0 0 0-.48-.431q-.3-.153-.69-.153c-.26 0-.5.054-.69.162-.2.108-.36.263-.46.464-.11.202-.17.442-.17.721h-1.75q0-.856.39-1.488c.26-.42.62-.745 1.09-.975.46-.231 1-.346 1.61-.346.62 0 1.17.111 1.63.333.47.219.83.523 1.09.912.25.389.38.835.38 1.338 0 .329-.06.655-.19.976q-.195.481-.69 1.069c-.33.389-.79.857-1.39 1.402l-1.28 1.249v.059h3.67V205zm10.81.119c-.65 0-1.24-.106-1.75-.319q-.765-.324-1.2-.882a2 2 0 0 1-.43-1.266c0-.364.08-.697.25-1.001.16-.307.39-.562.68-.763.28-.205.61-.335.96-.392v-.06c-.47-.094-.84-.32-1.13-.677-.29-.361-.44-.78-.44-1.258 0-.451.13-.853.4-1.206.26-.355.62-.633 1.09-.835.46-.204.98-.307 1.57-.307s1.11.103 1.57.307c.47.205.83.485 1.1.84.26.352.39.753.4 1.201-.01.481-.15.9-.45 1.258-.29.357-.67.583-1.12.677v.06c.35.057.66.187.95.392.28.201.51.456.68.763.17.304.26.637.26 1.001 0 .472-.15.893-.44 1.266q-.435.558-1.2.882c-.51.213-1.09.319-1.75.319m0-1.355c.29 0 .55-.052.77-.157q.33-.162.51-.444c.13-.19.19-.409.19-.656 0-.253-.07-.476-.19-.669a1.4 1.4 0 0 0-.52-.46 1.6 1.6 0 0 0-.76-.171q-.42 0-.75.171c-.22.111-.4.264-.53.46a1.24 1.24 0 0 0-.18.669q0 .37.18.656.18.282.51.444c.23.105.48.157.77.157m0-3.899c.25 0 .46-.05.65-.149q.285-.15.45-.413c.11-.177.16-.38.16-.61a1.09 1.09 0 0 0-.6-1.001q-.285-.15-.66-.149c-.25 0-.46.049-.65.149q-.285.144-.45.405c-.11.17-.16.369-.16.596 0 .23.05.433.16.61q.165.263.45.413c.19.099.41.149.65.149" class="path path" data-id="328" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="M1336.5 85h-7l-39.5 83.5 32 10.5 16.5-59.5z" class="path land path" data-id="327" style="color:#7ab2d3;"></path><path d="M1304.93 163.119c-.63 0-1.2-.109-1.7-.328a2.94 2.94 0 0 1-1.17-.912 2.33 2.33 0 0 1-.44-1.346h1.86q.015.32.21.562c.13.159.3.283.52.371.21.088.46.132.73.132.28 0 .53-.05.74-.149q.33-.15.51-.413.18-.265.18-.61c0-.233-.06-.439-.19-.618a1.23 1.23 0 0 0-.56-.426 2.2 2.2 0 0 0-.85-.153h-.81v-1.355h.81c.28 0 .53-.049.74-.145.21-.097.38-.23.5-.401q.18-.26.18-.605c0-.219-.05-.411-.16-.575a1 1 0 0 0-.43-.392c-.19-.094-.4-.141-.65-.141q-.375 0-.69.136c-.2.088-.37.215-.49.38a.9.9 0 0 0-.2.579h-1.77c.01-.503.15-.946.43-1.329.28-.384.65-.684 1.12-.899a3.8 3.8 0 0 1 1.61-.329c.6 0 1.13.11 1.58.329q.675.328 1.05.886c.26.369.38.784.38 1.244 0 .489-.15.897-.46 1.223-.3.327-.7.534-1.19.622v.069q.96.123 1.47.669c.34.36.5.812.5 1.355 0 .497-.14.939-.43 1.325s-.68.69-1.19.912q-.75.332-1.74.332m4.69-.119v-1.33l3.1-2.876c.27-.256.49-.486.67-.69.18-.205.32-.405.41-.601.1-.199.14-.414.14-.644 0-.255-.06-.475-.17-.66a1.2 1.2 0 0 0-.48-.431q-.3-.153-.69-.153c-.26 0-.5.054-.69.162-.2.108-.36.263-.46.464-.11.202-.17.442-.17.721h-1.75q0-.856.39-1.488c.26-.42.62-.745 1.09-.975.46-.231 1-.346 1.61-.346.62 0 1.17.111 1.63.333.47.219.83.523 1.09.912.25.389.38.835.38 1.338 0 .329-.06.655-.19.976q-.195.481-.69 1.069c-.33.389-.79.857-1.39 1.402l-1.28 1.249v.059h3.67V163zm7.9 0 3.62-7.159v-.06h-4.22v-1.508h6.13v1.53l-3.62 7.197z" class="path path" data-id="327" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m833.5 2138.5 4.5-32.5 92.5 11.5 37.5 9 35-5.5 37.5 5.5-8-139.5 77-74-8.5-73.5 87 5 7 79 93-15.5 34.5 27.5 19-27.5 43.5-17 53.5-19 14 63.5-111 40.5-37 51.5-21 32.5-14.5 12.5-66 20.5-33 24v17l-60.5 123-14.5 6-34-22-68-30-44 2.5-54-23-17-17.5z" class="path land path" data-id="150" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m902.5 2176 13.5-30.5 54.5 21-13 32zM1066 2230.5l20.5-30 32.5 21-21.5 32z" class="path building path" data-id="150" style="color:#7ab2d3;"></path><path d="M931.504 2169.27v8.73h-1.845v-6.98h-.051l-1.999 1.26v-1.64l2.161-1.37zm5.262 8.85q-.903 0-1.611-.33a2.8 2.8 0 0 1-1.116-.92 2.35 2.35 0 0 1-.431-1.34h1.79c.02.34.162.61.426.83.264.21.578.31.942.31.29 0 .545-.06.767-.19q.336-.195.524-.54c.128-.24.192-.5.192-.8q0-.465-.196-.81a1.35 1.35 0 0 0-.533-.55c-.227-.13-.487-.2-.78-.2-.255 0-.504.05-.745.16-.239.1-.425.25-.559.43l-1.64-.29.413-4.61h5.335v1.51h-3.814l-.225 2.19h.051q.23-.33.694-.54a2.5 2.5 0 0 1 1.04-.21 2.632 2.632 0 0 1 2.382 1.39c.239.43.357.92.354 1.48.003.59-.134 1.11-.409 1.57-.273.45-.655.81-1.146 1.07q-.733.39-1.705.39m7.969.07q-1.1 0-1.892-.54c-.526-.36-.931-.88-1.215-1.55q-.422-1.02-.417-2.46 0-1.425.421-2.43.427-1.005 1.215-1.53c.528-.35 1.158-.53 1.888-.53s1.358.18 1.883.53c.529.35.935.87 1.219 1.54.284.66.425 1.47.422 2.42q0 1.44-.426 2.46c-.282.68-.685 1.2-1.21 1.55q-.789.54-1.888.54m0-1.53q.75 0 1.197-.75c.298-.51.446-1.26.443-2.27q0-.99-.204-1.65-.2-.66-.571-.99a1.25 1.25 0 0 0-.865-.33c-.497 0-.895.24-1.193.74s-.449 1.24-.452 2.23q0 1.02.2 1.68c.136.45.328.79.575 1.01q.371.33.87.33" class="path path" data-id="150" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#2672F2" stroke-dasharray="2 2" d="m1304 2271-3.5.52m0 0-54 7.98-59.5 6.5-30.5 29-21.5 38.5-45 17-62.5-23L964 2315l-56-32-63.5-18.5H784l-64.5 15-74-18.5-61.5-64.5-46.5-32.5-63.5-12.5-90-48.5-91.5-69-68.5-28-69-41-73.5-75.5L32 1821l-31-33.5 36.5-46.5 12.5-30.5h10.5L86 1741l12.5 59 22 35.5 53 28.5 46 48H255l41 8.5 24 26.5 23.5 15 44.5 11.5 69 29.5 103 32.5 85.5 87.5 101 46.5 53 9 132 61.5 88.5 31.52 39 7.98 57-12.5 130.5-43 57.5-70.5 11-17.5 54.5-10 73-22.5h48.5l142.5-60.5h57.5l110.5 23 181.5 55 106.5-4 73.5 9 278 126 72-10 78-4.5 103 33.5 91.5 64.5 78 36 66 47.5 73.5 10 76.5-10 48.5 4.5 71.5 14 34.5 3.5 18.5 8 34.5 15.5 8-30.5-27-88-25.5-160.5v-84l15-47.5 29.5-15.5 31-15.5 79-23.5 9 14-74.5 30-31 24.5-5.5 28.5 13 56 10 44 10.5 44 30.5 64.5 12.5 124-17.5 57.5-15 17.5-31 11-31-4-30-19.5-110-27-157.5-4.5-134-26-69-47-118.5-63-77-26h-31.5l-71.5 30-80 3.5-78-12.5-95-63.5-100.5-72-35-19.5-20.5 6-52.5 37.5-91.5-9.5-91-34-72.5-43-81.5-37-66.5 13-89 32-86.5 40.5z" class="path land path" data-id="149" style="color:#2672f2;"></path><path d="M494.004 2088.77v8.73h-1.845v-6.98h-.051l-1.999 1.26v-1.64l2.161-1.37zm1.942 7.2v-1.46l3.644-5.74h1.253v2.01h-.742l-2.297 3.64v.07h5.178v1.48zm4.189 1.53v-1.98l.034-.64v-6.11h1.731v8.73zm7.234-8.85c.449 0 .881.08 1.295.23q.627.225 1.117.72c.329.33.589.77.78 1.31.193.54.291 1.21.294 2 0 .74-.084 1.4-.252 1.99a4.4 4.4 0 0 1-.711 1.48c-.31.4-.684.71-1.121.92-.438.21-.926.32-1.466.32-.582 0-1.097-.11-1.543-.34a2.8 2.8 0 0 1-1.078-.92q-.405-.585-.49-1.32h1.82c.071.32.22.56.447.74.228.17.509.26.844.26.568 0 1-.25 1.295-.74q.444-.75.448-2.04h-.06q-.196.375-.528.66-.333.27-.763.42-.426.15-.908.15c-.514 0-.973-.12-1.376-.37a2.6 2.6 0 0 1-.955-.99 3 3 0 0 1-.349-1.45q-.004-.885.405-1.56.409-.69 1.142-1.08.737-.39 1.713-.39m.013 1.45q-.43 0-.767.21c-.222.13-.398.32-.529.55-.128.23-.19.48-.187.77 0 .28.062.54.187.77.128.23.301.41.52.55.222.13.475.2.759.2a1.45 1.45 0 0 0 1.065-.45c.136-.14.243-.3.32-.49a1.553 1.553 0 0 0-.081-1.34 1.45 1.45 0 0 0-1.287-.77" class="path path" data-id="149" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m910 1772.5-6.5-22.5H960l24 35-74 5.5z" class="path land path" data-id="145" style="color:#7ab2d3;"></path><path d="M933.504 1765.27v8.73h-1.845v-6.98h-.051l-1.999 1.26v-1.64l2.161-1.37zm1.942 7.2v-1.46l3.644-5.74h1.253v2.01h-.742l-2.297 3.64v.07h5.178v1.48zm4.189 1.53v-1.98l.034-.64v-6.11h1.731v8.73zm7.264.12q-.903 0-1.611-.33a2.8 2.8 0 0 1-1.116-.92c-.276-.39-.42-.83-.431-1.34h1.79c.02.34.162.61.426.83.264.21.578.31.942.31.29 0 .545-.06.767-.19q.336-.195.524-.54c.128-.24.192-.5.192-.8q0-.465-.196-.81a1.35 1.35 0 0 0-.533-.55c-.227-.13-.487-.2-.78-.2-.255 0-.504.05-.746.16-.238.1-.424.25-.558.43l-1.64-.29.413-4.61h5.335v1.51h-3.814l-.226 2.19h.052q.23-.33.694-.54t1.04-.21c.526 0 .994.12 1.406.37s.737.58.976 1.02c.239.43.357.92.354 1.48.003.59-.134 1.11-.409 1.57-.273.45-.655.81-1.147 1.07q-.732.39-1.704.39" class="path path" data-id="145" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1195.5 1922-5-78.5h18.5l52-15 6.5-20.5 26.5-4 24 4 14 5.5h11l19.5-2.5 19-3h48.5l8.5 64-49.5 16.5-46 19.5-21 26.5-34.5-26.5z" class="path land path" data-id="143" style="color:#7ab2d3;"></path><path d="M1306.5 1864.27v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm1.95 7.2v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.19 1.53v-1.98l.03-.64v-6.11h1.73v8.73zm7.3.12c-.64 0-1.21-.11-1.7-.33-.5-.22-.89-.52-1.18-.91-.28-.39-.43-.84-.43-1.35h1.85c.02.22.08.4.21.57.13.15.31.28.52.37.22.08.46.13.73.13q.42 0 .75-.15c.21-.1.38-.24.5-.41.13-.18.19-.38.19-.61 0-.24-.07-.44-.2-.62s-.31-.33-.55-.43-.53-.15-.85-.15h-.82v-1.36h.82c.27 0 .52-.04.73-.14.22-.1.39-.23.51-.4.11-.18.17-.38.17-.61q0-.33-.15-.57c-.11-.17-.25-.3-.44-.39-.18-.1-.4-.14-.65-.14s-.47.04-.68.13-.38.22-.5.38c-.13.17-.19.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.13-.9c.47-.22 1.01-.33 1.6-.33.6 0 1.13.11 1.58.33.46.22.81.52 1.06.89s.37.78.37 1.24q0 .735-.45 1.23c-.31.32-.71.53-1.19.62v.07c.64.08 1.13.3 1.46.66.34.37.51.82.51 1.36 0 .5-.15.94-.44 1.33-.28.38-.68.69-1.18.91q-.765.33-1.74.33" class="path path" data-id="143" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1559.5 706.5-98 59 37 48 24.5 43 93-46-23.5-55.5z" class="path land path" data-id="119" style="color:#7ab2d3;"></path><path d="M1535.5 780.273V789h-1.84v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.88 0V789h-1.85v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.23-.12q.675 0 1.29.226c.42.151.79.391 1.12.72q.495.495.78 1.313c.19.543.29 1.209.29 1.999 0 .741-.08 1.403-.25 1.985-.16.58-.4 1.073-.71 1.479s-.68.716-1.12.929q-.66.315-1.47.315c-.58 0-1.09-.112-1.54-.336-.45-.228-.8-.536-1.08-.925a2.9 2.9 0 0 1-.49-1.321h1.82q.105.477.45.741.345.26.84.26c.57 0 1-.247 1.3-.741q.435-.746.45-2.041h-.06c-.13.255-.31.476-.53.66-.22.182-.48.323-.76.422-.29.1-.59.149-.91.149q-.78 0-1.38-.362a2.6 2.6 0 0 1-.95-.997c-.24-.423-.35-.906-.35-1.449-.01-.585.13-1.107.4-1.564s.66-.815 1.14-1.074c.5-.261 1.07-.39 1.72-.388m.01 1.449c-.29 0-.54.068-.77.205-.22.136-.39.319-.53.55-.12.23-.19.487-.18.771q0 .43.18.775c.13.228.31.409.52.546.23.133.48.2.76.2.22 0 .41-.04.6-.119.18-.08.33-.189.47-.328.13-.142.24-.306.32-.49a1.623 1.623 0 0 0-.08-1.347c-.13-.23-.31-.415-.53-.554a1.43 1.43 0 0 0-.76-.209" class="path path" data-id="119" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#CFCFCF" stroke-width="2" d="m978.5 2180.5-9-5L982 2142l7-2 38-1.5h30l19.5-2 35.5-2.5 30.5-5.5 12-3.5 19-9 30-20.5 51.5-16 14.5-5 13.5-11.5 7.5-13.5 16-24.5 18-26.5 17-22 62-26 50.5-14.5 59.5-26.5 23.5-29.5 6.5-13.5 34-29.5 13-8 18.5-21.5 5.5-8 1.5-7.5-4-22 6-5.5-35-37.5 5-7.5 41.5 34v46l-5 16-17.5 13.5-19 21.5-19.5 16-19 26.5-20 28.5-17.5 18-38.5 19-19.5 3.5-33.5 5-28 6.5-33 15-12.5 20-28 37-31 32-34.5 21.5-31.5 9.5-22 7.5-8.5 9h30.5l25 9h57.5l10 6 78 61-18 14.5-73-61-32-5.5-37.5-4.5-40.5-4.5-24-6-51 10.5H1074l-17 4.5h-56l-12 5.5z" class="path street path" data-id="118" style="color:#cfcfcf;"></path><path stroke="#CFCFCF" stroke-dasharray="2 2" d="m1337 87-7-4 5.5-13.5 6 5.5 8 15v25.5l-17 74-8 55.5-4 70.5L1286 384l-5 18 5 19.5 5 20.5 27 13.5 37.5 21 29 21L1471 623l97.5 72.5 33.5 57 24 54 39.5 102.5 22.5 111.5 17 64.5 23 48.5 18 49 38 130.5 28 55.5 35 67.5 2 47-4 7.5-16.5 32-6-3-7 11-21.5 30-7-8-34 30-37 13.5-32 29-17 15-19.5 19.5-16.5 12-35.5 32.5-5 13.5-25 31-31.5 26-55.5 27-48.5 5.5h-48.5l-17.5 3.5-20.5 2-13.5-2-9-3.5-25-3.5-28 5-6 20.5-53.5 15.5-20.5-1.5-59-1.5-30.5-3.5H1078l-19-2.5-38.5-11.5v-5l-24-13.5H994l-8.5-19.5-18.5-27.5-6.5-10-3-11.5-38-33.5-26 2.5v-9l-19-9-13.5-4h-11.5l-11.5 6.5-63.5-4.5-14 2-19 2.5-36 3-113-18.5-32 1.5-76.5-10-102.5-7-54 3-72.5-12-83-33.5-35-45-19-45-20.5-58 10.5-10 19 63 27.5 44.5 27.5 38 76 28.5 69.5 13h53l107.5 4.5 72.5 10 32 2.5 114.5 15 30-8 55 2 25-2h40l4 4h17.5l15 7.5 19 12.5 13 3 6 4.5 37.5 27 11 16-7 4 21 23 2.5 9 7.5 11 22 19 16.5 6v2.5l19 5h9.5l33.5 5h29l9.5 2h24l18.5-7 48 5 5-6.5 10-14 7-17 16.5 1.5 49-11.5v15l6.5 5 36.5-5 12.5-3.5 33.5 3.5 62.5-8.5 9.5-8 16.5-7 26-14 55.5-50-5.5-6.5 30.5-25.5 42.5-39.5 16-17.5 3.5-26.5 3-2.5 12-8.5 5 5.5 12 3h12.5l25-10.5 9.5-5 7-5.5 21.5-20 26-30.5 6.5-9.5 26-39.5 4-11-2-10.5-2-9.5-28.5-53.5-10.5-24-31.5-86.5-27.5-85-22-52.5-17.5-50.5-20-64L1652 911l-36-101-23.5-55-34.5-50.5-92-72.5-14.5-16.5-77-107.5-24.5-21.5-36.5-19.5-32.5-20.5-9.5-40.5-14-13.5 9.5-15 44.5-68.5v-38l5-46.5 2.5-35 3-11.5 13.5-45.5 3-10.5z" class="path street path" data-id="118" style="color:#cfcfcf;"></path><path d="M1266 386.773v8.727h-1.84v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.88 0v8.727h-1.85v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.33 8.846c-.66 0-1.24-.106-1.76-.319-.5-.216-.9-.51-1.19-.882a2 2 0 0 1-.44-1.266c0-.364.08-.697.25-1.001.17-.307.39-.562.68-.763q.435-.307.96-.392v-.06c-.46-.094-.84-.32-1.13-.677-.29-.361-.43-.78-.43-1.258q0-.677.39-1.206c.27-.355.63-.633 1.09-.835.46-.204.99-.307 1.58-.307.58 0 1.11.103 1.57.307s.82.485 1.09.84c.26.352.4.753.4 1.201a1.94 1.94 0 0 1-1.57 1.935v.06c.35.057.67.187.95.392.29.201.52.456.68.763.17.304.26.637.26 1.001 0 .472-.15.893-.44 1.266q-.435.558-1.2.882-.765.32-1.74.319m0-1.355c.29 0 .54-.052.76-.157q.33-.162.51-.444c.13-.19.19-.409.19-.656 0-.253-.06-.476-.19-.669-.13-.196-.3-.349-.52-.46a1.6 1.6 0 0 0-.75-.171c-.29 0-.54.057-.76.171-.22.111-.4.264-.52.46-.13.193-.19.416-.19.669q0 .37.18.656c.12.188.3.336.52.444.22.105.48.157.77.157m0-3.899c.24 0 .46-.05.65-.149.19-.1.34-.237.44-.413.11-.177.17-.38.17-.61 0-.227-.06-.426-.17-.596a1.03 1.03 0 0 0-.44-.405c-.19-.1-.4-.149-.65-.149q-.375 0-.66.149-.285.144-.45.405c-.1.17-.16.369-.16.596 0 .23.06.433.17.61.1.176.25.313.44.413q.285.149.66.149" class="path path" data-id="118" style="color:#000;"></path></g><g fill="transparent" class="group"><g class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="M1559 706.5 1452.5 617l-70.5 49.5 39 52 40.5 46.5z" class="path land path" data-id="117" style="color:#7ab2d3;"></path><path d="M1456.5 691.273V700h-1.84v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.88 0V700h-1.85v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm2.41 8.727 3.62-7.159v-.06h-4.21v-1.508h6.12v1.53L1466.7 700z" class="path path" data-id="117" style="color:#000;"></path></g><g class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="M1178 382v-12l79 22 14 14.5 11 41 31 20 40.5 18.5 21.5 22 77.5 108.5-70 51-18.5-28-10.5-32-10-18.5-26-37.5-31-29.5-40-36-47-52.5-14-22z" class="path land path" data-id="116" style="color:#7ab2d3;"></path></g><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="M1362.5 781.5 1379 764l25 31.5-19.5 14z" class="path land path" data-id="115" style="color:#7ab2d3;"></path><path d="M1376.5 782.273V791h-1.84v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.88 0V791h-1.85v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.26 8.846c-.61 0-1.14-.11-1.61-.332a2.84 2.84 0 0 1-1.12-.916 2.3 2.3 0 0 1-.43-1.338h1.79c.02.338.16.612.43.822.26.21.57.315.94.315.29 0 .54-.063.76-.191.23-.131.4-.311.53-.541.13-.233.19-.501.19-.802 0-.306-.07-.576-.2-.809-.12-.233-.3-.415-.53-.546q-.345-.195-.78-.2c-.25 0-.5.053-.74.158a1.3 1.3 0 0 0-.56.43l-1.64-.294.41-4.602h5.34v1.508h-3.82l-.22 2.186h.05q.225-.324.69-.537a2.5 2.5 0 0 1 1.04-.213q.795 0 1.41.371c.41.247.73.587.97 1.019q.36.644.36 1.482c0 .589-.14 1.111-.41 1.569-.27.454-.66.812-1.15 1.074-.49.258-1.06.387-1.7.387" class="path path" data-id="115" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1190.5 743.5 145.5-95 13 30-17.5 8.5 20 43L1235 832l-76-62.5z" class="path land path" data-id="114" style="color:#7ab2d3;"></path><path d="M1270 736.773v8.727h-1.84v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.88 0v8.727h-1.85v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm1.94 7.193v-1.453l3.64-5.74h1.25v2.011h-.74l-2.29 3.635v.068h5.17v1.479zm4.19 1.534v-1.977l.03-.644v-6.106h1.73v8.727z" class="path path" data-id="114" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" d="m1230 569.5 7-5 20-16.5 1.5 1.5h3.5l6.5-6.5 13.5 11-8.5 8 19 19-24 23 29 32.5-29 18-22-34 4.5-4.5-6-6-13.5 13-22.5-25 24.5-24z" class="path building path" data-id="113" style="color:#7ab2d3;"></path><path d="M1250 581.773v8.727h-1.84v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.88 0v8.727h-1.85v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.3 8.846c-.64 0-1.21-.109-1.7-.328a2.9 2.9 0 0 1-1.18-.912 2.33 2.33 0 0 1-.44-1.346h1.86q.015.32.21.562c.13.159.31.283.52.371.22.088.46.132.73.132q.42 0 .75-.149c.21-.1.38-.237.5-.413a1.07 1.07 0 0 0-.01-1.228 1.26 1.26 0 0 0-.55-.426 2.2 2.2 0 0 0-.86-.153h-.81v-1.355h.81c.28 0 .53-.049.74-.145.22-.097.38-.23.5-.401q.18-.26.18-.605c0-.219-.05-.411-.16-.575a1 1 0 0 0-.43-.392c-.18-.094-.4-.141-.65-.141s-.48.046-.68.136c-.21.088-.38.215-.5.38a.97.97 0 0 0-.2.579h-1.77c.01-.503.15-.946.43-1.329.28-.384.65-.684 1.12-.899a3.8 3.8 0 0 1 1.61-.329c.6 0 1.13.11 1.58.329q.675.327 1.05.886c.26.369.38.784.38 1.244 0 .489-.15.897-.46 1.223-.3.327-.7.534-1.19.622v.069q.975.123 1.47.669c.34.36.51.812.5 1.355.01.497-.14.939-.43 1.325-.28.386-.68.69-1.19.912-.5.222-1.08.332-1.73.332" class="path path" data-id="113" style="color:#000;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1210.5 545.5 24.5 19 22-16.5 8.5-8.5 3 3 22.5 19 9 10.5 21 32 15.5 45-146.5 94-31 27.5-95.5-74.5L1186 548z" class="path land path" data-id="113" style="color:#7ab2d3;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1213.5 547-25.5-1.5 33.5-41 5.5 4 14.5 10 24 21-8.5 7.5-22.5-19.5z" class="path land path" data-id="112" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1235 564.5-21.5-17.5 21.5-19.5 21.5 19.5z" class="path building path" data-id="112" style="color:#7ab2d3;"></path><path d="M1229 540.773v8.727h-1.84v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.88 0v8.727h-1.85v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm2.07 8.727v-1.33l3.11-2.876q.39-.384.66-.69c.18-.205.32-.405.41-.601.1-.199.14-.414.14-.644 0-.255-.05-.475-.17-.66a1.2 1.2 0 0 0-.48-.431c-.2-.102-.43-.153-.68-.153-.27 0-.5.054-.7.162s-.35.263-.46.464c-.11.202-.16.442-.16.721h-1.76q0-.857.39-1.488c.26-.42.62-.745 1.09-.975.46-.231 1-.346 1.61-.346.62 0 1.17.111 1.63.333.47.219.83.523 1.09.912q.39.584.39 1.338c0 .329-.07.655-.2.976q-.195.481-.69 1.069c-.33.389-.79.857-1.39 1.402l-1.27 1.249v.059h3.66v1.509z" class="path path" data-id="112" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1430.5 852-8 9v33l-20.5 11-10-34-147.5 102-37-36-9-4-8.5-8-96-17-29.5-18-32-8-110-93 139-91 175 134.5 116-102.5 26 34-17 18 23 28 20-14v15l14.5-4.5z" class="path land path" data-id="111" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1393.5 849.5-8-25 15-5 9 25zM1396 867.5l15-2.5 5 28.5-15 2.5z" class="path building path" data-id="111" style="color:#7ab2d3;"></path><path d="M1329 834.773v8.727h-1.84v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.88 0v8.727h-1.85v-6.976h-.05l-2 1.253v-1.636l2.16-1.368zm5.87 0v8.727h-1.85v-6.976h-.05l-2 1.253v-1.636l2.16-1.368z" class="path path" data-id="111" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m890 1561 6-23.5 29-23 18.5-14v-3.5l8-6v-4.5l33.5-20-14-20.5-4 2.5-23.5-29-13.5 7.5-34-39.5-185.5 83L777 1561l47 8z" class="path land path" data-id="102" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="M866.5 1479.5 880 1502l25-15.5 20 29.5-28.5 19.5-22-30.5-16 11-16-23z" class="path building path" data-id="102" style="color:#7ab2d3;"></path><path d="M893.004 1507.77v8.73h-1.845v-6.98h-.051l-1.999 1.26v-1.64l2.161-1.37zm5.496 8.92q-1.099 0-1.892-.54c-.525-.36-.93-.88-1.214-1.55q-.422-1.02-.418-2.46 0-1.425.422-2.43.426-1.005 1.215-1.53c.528-.35 1.157-.53 1.887-.53s1.358.18 1.884.53c.528.35.935.87 1.219 1.54.284.66.424 1.47.422 2.42q0 1.44-.427 2.46c-.281.68-.684 1.2-1.21 1.55q-.788.54-1.888.54m0-1.53q.75 0 1.198-.75c.298-.51.446-1.26.443-2.27q0-.99-.205-1.65-.2-.66-.571-.99a1.25 1.25 0 0 0-.865-.33c-.497 0-.895.24-1.193.74s-.449 1.24-.452 2.23q0 1.02.201 1.68c.136.45.328.79.575 1.01q.37.33.869.33m4.84 1.34v-1.33l3.107-2.88q.396-.375.665-.69.272-.3.413-.6c.094-.2.14-.41.14-.64q0-.39-.174-.66a1.14 1.14 0 0 0-.478-.43 1.5 1.5 0 0 0-.686-.15c-.267 0-.5.05-.698.16-.199.1-.353.26-.461.46q-.162.3-.162.72h-1.751c0-.57.129-1.07.388-1.49.258-.42.62-.74 1.086-.97s1.003-.35 1.611-.35c.625 0 1.169.11 1.632.34.466.21.828.52 1.087.91.258.39.388.83.388 1.34 0 .33-.066.65-.196.97-.128.32-.357.68-.686 1.07s-.794.86-1.394 1.4l-1.274 1.25v.06h3.665v1.51z" class="path path" data-id="102" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m967.5 1447 17-9.5 34-24-37-44.5-5.5-6-21 12-11-33.5-10-11.5-30 18.5-62.5-32.5-34.5 43-121.5 83 24.5 27.5 187-84 34 39 13-7z" class="path land path" data-id="101" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m984.5 1437.5 34-24-37-45-36 25.5z" class="path building path" data-id="101" style="color:#7ab2d3;"></path><path d="M976.004 1398.77v8.73h-1.845v-6.98h-.051l-1.999 1.26v-1.64l2.161-1.37zm5.496 8.92q-1.099 0-1.892-.54c-.525-.36-.93-.88-1.214-1.55q-.422-1.02-.418-2.46 0-1.425.422-2.43.426-1.005 1.215-1.53c.528-.35 1.157-.53 1.887-.53s1.358.18 1.884.53c.528.35.935.87 1.219 1.54.284.66.424 1.47.422 2.42q0 1.44-.427 2.46c-.281.68-.684 1.2-1.21 1.55q-.788.54-1.888.54m0-1.53q.75 0 1.198-.75c.298-.51.446-1.26.443-2.27q0-.99-.205-1.65-.2-.66-.571-.99a1.25 1.25 0 0 0-.865-.33c-.497 0-.895.24-1.193.74s-.449 1.24-.452 2.23q0 1.02.201 1.68c.136.45.328.79.575 1.01q.37.33.869.33m8.637-7.39v8.73h-1.845v-6.98h-.051l-1.999 1.26v-1.64l2.161-1.37z" class="path path" data-id="101" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1168 984.5 5.5-27.5-83.5-19v-5l-18.5-6-35.5-18-17-9.5-12.5-4-5.5 31.5 16 39-52.5 10 9.5 55.5 10.5 50.5-2 50-18 43-2.5 12-9 13-7 14.5-38.5 33-19.5 6.5-46 61.5 63 31.5 28.5-18 9.5 11 25-23 24.5-25.5 21.5-26.5 31.5-34 26.5 8.5 18-31 32.5 19 47.5-40.5 10-16 6.5-20.5v-36l-6.5-10.5-9.5-101z" class="path land path" data-id="97" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1118 1085-4.5-27.5 52-6 4 28 9 41-70 7-6.5-40zM1098 1104.5l-32.5-5-9 50.5 35 5.5zM1149 1045v-22.5h23.5v22.5z" class="path building path" data-id="97" style="color:#7ab2d3;"></path><path d="M1144.37 1094.65c.44 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.51.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.52.66-.23.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37q-.6-.36-.96-.99c-.23-.43-.34-.91-.34-1.45-.01-.59.13-1.11.4-1.56q.405-.69 1.14-1.08c.49-.26 1.06-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.13.23-.19.48-.19.77 0 .28.07.54.19.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12q.27-.12.48-.33c.13-.14.24-.3.32-.49.07-.18.11-.38.11-.59 0-.27-.07-.52-.2-.75a1.425 1.425 0 0 0-1.28-.77m4.86 7.4 3.62-7.16v-.06h-4.22v-1.51h6.13v1.53l-3.63 7.2z" class="path path" data-id="97" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1250.5 1032-40-11.5-24-7 1.5-17.5-6.5-1.5 2.5-18.5 2.5-19.5 21 8.5 38.5 27 11.5 4.5 9 7z" class="path land path" data-id="96" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1182 995 2-17.5 21 2-2.5 15.5 11.5 2.5-4 23-24.5-7.5 2.5-15.5z" class="path building path" data-id="96" style="color:#7ab2d3;"></path><path d="M1229.37 997.653c.44 0 .88.076 1.29.226.42.151.79.391 1.12.72q.495.495.78 1.313c.19.538.29 1.208.29 1.998 0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.51.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.52.66-.23.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37q-.6-.36-.96-.99c-.23-.43-.34-.91-.34-1.45-.01-.59.13-1.108.4-1.565q.405-.686 1.14-1.074c.49-.261 1.06-.39 1.72-.388m.01 1.449c-.29 0-.54.068-.77.205-.22.136-.4.319-.53.55-.13.233-.19.483-.19.773 0 .28.07.54.19.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12q.27-.12.48-.33c.13-.14.24-.3.32-.49.07-.18.11-.38.11-.59 0-.27-.07-.52-.2-.755a1.434 1.434 0 0 0-1.28-.763m8.1 7.518c-.45 0-.88-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02.01-.73.09-1.39.25-1.96q.255-.872.72-1.477c.31-.403.69-.71 1.12-.92.44-.213.92-.32 1.46-.32.59 0 1.1.114 1.55.341.44.225.8.53 1.07.917.27.386.44.819.49 1.299h-1.82a1.24 1.24 0 0 0-.44-.716c-.23-.173-.51-.26-.85-.26q-.855 0-1.29.742c-.3.494-.44 1.164-.45 2.014h.06c.13-.26.31-.48.53-.66s.48-.32.76-.42c.29-.1.59-.15.91-.15.52 0 .98.12 1.38.37.4.24.72.57.95.99.24.43.35.91.35 1.46 0 .59-.13 1.11-.41 1.57-.27.46-.66.82-1.15 1.09-.49.25-1.05.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78c-.12-.23-.3-.42-.52-.55-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.07.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.31.42.53.56s.48.21.76.21" class="path path" data-id="96" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1424 895 8 23.5 9 29.5 8 12-79 27.5-12 6-11 4.5-43 16-30.5-26.5-27-15.5L1392 871l11 33.5z" class="path land path" data-id="95" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1413 956-9.5-26.5 28.5-9.5 8 27.5z" class="path building path" data-id="95" style="color:#7ab2d3;"></path><path d="M1351.87 941.153c.44 0 .88.076 1.29.226.42.151.79.391 1.12.72q.495.495.78 1.313c.19.543.29 1.209.29 1.999 0 .741-.08 1.403-.25 1.985-.17.58-.4 1.073-.71 1.479s-.69.716-1.12.929q-.66.315-1.47.315c-.58 0-1.1-.112-1.54-.336a2.86 2.86 0 0 1-1.08-.925 2.9 2.9 0 0 1-.49-1.321h1.82q.105.477.45.741c.22.174.51.26.84.26.57 0 1-.247 1.3-.741.29-.497.44-1.178.44-2.041h-.06c-.13.255-.3.476-.52.66a2.656 2.656 0 0 1-1.67.571q-.78 0-1.38-.362a2.7 2.7 0 0 1-.96-.997c-.23-.423-.34-.906-.34-1.449-.01-.585.13-1.107.4-1.564q.405-.686 1.14-1.074c.49-.261 1.06-.39 1.72-.388m.01 1.449c-.29 0-.54.068-.77.205-.22.136-.4.319-.53.55-.13.23-.19.487-.19.771 0 .287.07.545.19.775.13.228.3.409.52.546.22.133.48.2.76.2.21 0 .41-.04.59-.119q.27-.12.48-.328c.13-.142.24-.306.32-.49.07-.185.11-.381.11-.588 0-.276-.07-.529-.2-.759a1.434 1.434 0 0 0-1.28-.763m7.94 7.517c-.61 0-1.14-.11-1.61-.332a2.84 2.84 0 0 1-1.12-.916 2.3 2.3 0 0 1-.43-1.338h1.79c.02.338.16.612.43.822.26.21.57.315.94.315.29 0 .54-.063.76-.191.23-.131.4-.311.53-.541.13-.233.19-.501.19-.802 0-.306-.07-.576-.2-.809-.12-.233-.3-.415-.53-.546q-.345-.195-.78-.2c-.25 0-.5.053-.74.158a1.3 1.3 0 0 0-.56.43l-1.64-.294.41-4.602h5.34v1.508h-3.82l-.22 2.186h.05q.225-.324.69-.537a2.5 2.5 0 0 1 1.04-.213q.795 0 1.41.371c.41.247.73.587.97 1.019q.36.644.36 1.482c0 .589-.14 1.111-.41 1.569-.28.454-.66.812-1.15 1.074-.49.258-1.06.387-1.7.387" class="path path" data-id="95" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="M1481.5 937.5 1458 944l8.5 61 38.5-8.5 11 48.5-39 7.5 2.5 21 43-7 12.5 45.5 29.5 64 17 5.5-36-131.5-21-64.5-40-109.5-48 16 4 16 7 3 23-6.5z" class="path land path" data-id="94" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1458 943-10.5-31.5 22.5-6.5 10.5 32zM1504.5 997l-37.5 8 10.5 47 38-7z" class="path building path" data-id="94" style="color:#7ab2d3;"></path><path d="M1487.87 1021.15c.44 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.51.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.52.66-.23.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37q-.6-.36-.96-.99c-.23-.43-.34-.91-.34-1.45-.01-.59.13-1.11.4-1.56q.405-.69 1.14-1.08c.49-.26 1.06-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.13.23-.19.48-.19.77 0 .28.07.54.19.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12q.27-.12.48-.33c.13-.14.24-.3.32-.49.07-.18.11-.38.11-.59 0-.27-.07-.52-.2-.75a1.425 1.425 0 0 0-1.28-.77m4.62 5.87v-1.46l3.64-5.74h1.25v2.01h-.74l-2.29 3.64v.07h5.17v1.48zm4.19 1.53v-1.98l.03-.64v-6.11h1.73v8.73z" class="path path" data-id="94" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="M1512 1200h5l-3-20.5 34.5-3 4 26.5 9.5 33v29.5l-45 .5v7.5l43.5 26-2 5.5 14.5 7 3.5-12.5 3-16h7.5l-3.5-19.5-7-12-3.5-26.5-3-28-5.5-21-29.5-65-13-45-42 7h-4.5l4.5 13 7 9.5-7 3.5 12 38.5 13 33.5z" class="path land path" data-id="93" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1517.5 1200.5-4-21 34.5-3 4.5 27 9 33 1 29h-45l1.5-31.5-6.5-33.5z" class="path building path" data-id="93" style="color:#7ab2d3;"></path><path d="M1533.87 1217.15c.44 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.51.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.52.66-.23.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37q-.6-.36-.96-.99c-.23-.43-.34-.91-.34-1.45-.01-.59.13-1.11.4-1.56q.405-.69 1.14-1.08c.49-.26 1.06-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.13.23-.19.48-.19.77 0 .28.07.54.19.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12q.27-.12.48-.33c.13-.14.24-.3.32-.49.07-.18.11-.38.11-.59 0-.27-.07-.52-.2-.75a1.425 1.425 0 0 0-1.28-.77m7.98 7.52q-.96 0-1.71-.33c-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.22.08.46.13.73.13q.42 0 .75-.15c.21-.1.38-.24.5-.41.12-.18.19-.38.19-.61 0-.24-.07-.44-.2-.62s-.31-.33-.55-.43-.53-.15-.86-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14.22-.1.38-.23.5-.4.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.18-.1-.4-.14-.65-.14s-.48.04-.68.13c-.21.09-.38.22-.5.38-.13.17-.19.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.975.12 1.47.66c.34.37.51.82.5 1.36.01.5-.14.94-.43 1.33-.28.38-.68.69-1.19.91-.5.22-1.08.33-1.73.33" class="path path" data-id="93" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1647.5 1256.5-122.5-399 91.5-45 35 97.5 24 114.5 37 114.5 18.5 44.5 62.5 179.5-88 20.5-9.5 18-30 63.5-2-3.5 22.5-64.5 2-41.5z" class="path land path" data-id="92" style="color:#7ab2d3;"></path><path d="M1646.87 1104.15c.44 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.51.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.52.66-.23.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37q-.6-.36-.96-.99c-.23-.43-.34-.91-.34-1.45-.01-.59.13-1.11.4-1.56q.405-.69 1.14-1.08c.49-.26 1.06-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.13.23-.19.48-.19.77 0 .28.07.54.19.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12q.27-.12.48-.33c.13-.14.24-.3.32-.49.07-.18.11-.38.11-.59 0-.27-.07-.52-.2-.75a1.425 1.425 0 0 0-1.28-.77m4.75 7.4v-1.33l3.11-2.88q.39-.375.66-.69c.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.05-.48-.17-.66-.12-.19-.28-.33-.48-.43s-.43-.15-.68-.15c-.27 0-.5.05-.7.16-.2.1-.35.26-.46.46s-.16.44-.16.72h-1.76c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91s.39.83.39 1.34c0 .33-.07.65-.2.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.27 1.25v.06h3.66v1.51z" class="path path" data-id="92" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1758 1480.96-20.5-17.96 8.5-16v-11.5l-3-12-8-8.5-40.5-13.5 10-19.5 88-18.5 41 83.5 3 13-3 9.5-51-30.5m-24.5 41.96 44 38.54 5-10z" class="path land path" data-id="91" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1758.5 1478.5 24-39 50 29.5-25.5 41z" class="path building path" data-id="91" style="color:#7ab2d3;"></path><path d="M1765.87 1410.15c.44 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.51.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.52.66-.23.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37q-.6-.36-.96-.99c-.23-.43-.34-.91-.34-1.45-.01-.59.13-1.11.4-1.56q.405-.69 1.14-1.08c.49-.26 1.06-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.13.23-.19.48-.19.77 0 .28.07.54.19.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12q.27-.12.48-.33c.13-.14.24-.3.32-.49.07-.18.11-.38.11-.59 0-.27-.07-.52-.2-.75a1.425 1.425 0 0 0-1.28-.77m8.55-1.33v8.73h-1.85v-6.98h-.05l-2 1.26v-1.64l2.16-1.37z" class="path path" data-id="91" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" d="m1727.5 1519.5 16.5-18.5 20 20-15.5 18.5z" class="path building path" data-id="90" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1705 1519.5 32-56 64.5 56-47.5 51.5-9 6-31.5 14.5H1700l-14-2.5-8-10.5 10-1.5 9-14.5-2.5-16.5 20.5-16z" class="path land path" data-id="90" style="color:#7ab2d3;"></path><path d="M1741.87 1516.15c.44 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.51.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.52.66-.23.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37q-.6-.36-.96-.99c-.23-.43-.34-.91-.34-1.45-.01-.59.13-1.11.4-1.56q.405-.69 1.14-1.08c.49-.26 1.06-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.13.23-.19.48-.19.77 0 .28.07.54.19.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12q.27-.12.48-.33c.13-.14.24-.3.32-.49.07-.18.11-.38.11-.59 0-.27-.07-.52-.2-.75a1.425 1.425 0 0 0-1.28-.77m8.17 7.59q-1.095 0-1.89-.54c-.53-.36-.93-.88-1.22-1.55-.28-.68-.42-1.5-.41-2.46q0-1.425.42-2.43c.28-.67.69-1.18 1.21-1.53.53-.35 1.16-.53 1.89-.53s1.36.18 1.88.53c.53.35.94.87 1.22 1.54.29.66.43 1.47.43 2.42 0 .96-.15 1.78-.43 2.46s-.69 1.2-1.21 1.55q-.795.54-1.89.54m0-1.53q.75 0 1.2-.75c.3-.51.44-1.26.44-2.27 0-.66-.07-1.21-.2-1.65q-.21-.66-.57-.99-.375-.33-.87-.33c-.5 0-.89.24-1.19.74s-.45 1.24-.45 2.23c0 .68.06 1.24.2 1.68.13.45.32.79.57 1.01q.375.33.87.33" class="path path" data-id="90" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1708 1525-66.5 43-39.5-58-46.5 34 4.5 14 16.5-12 11.5-6.5 20.5 16 33 26.5 26.5 11.5 13.5-10.5-3.5-4 10-2 9-14.5-2.5-18.5 19.5-13.5zm0 0-4-5.5 14.5-21 17.5-36.5 8.5-17 2-10-5-12-9-7.5-38-13-27.5 61.5z" class="path land path" data-id="89" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1641.5 1567.5-39.5-57 62.5-49 45 63.5z" class="path building path" data-id="89" style="color:#7ab2d3;"></path><path d="M1649.96 1522.12c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m7.84-3.72c.45 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.16.58-.4 1.07-.71 1.48-.31.4-.68.71-1.12.92s-.93.32-1.47.32c-.58 0-1.09-.11-1.54-.34-.44-.22-.8-.53-1.08-.92-.27-.39-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.23.17.51.26.84.26.57 0 1-.25 1.3-.74.3-.5.44-1.18.45-2.04h-.06c-.13.25-.31.47-.53.66-.22.18-.48.32-.76.42-.29.1-.59.15-.91.15-.52 0-.97-.12-1.38-.37-.4-.24-.72-.57-.95-.99-.23-.43-.35-.91-.35-1.45 0-.59.13-1.11.4-1.56.28-.46.66-.82 1.15-1.08q.735-.39 1.71-.39m.01 1.45a1.44 1.44 0 0 0-1.29.76c-.13.23-.19.48-.19.77 0 .28.06.54.19.77.12.23.3.41.52.55.22.13.47.2.75.2a1.427 1.427 0 0 0 1.07-.45c.14-.14.24-.3.32-.49.08-.18.11-.38.11-.59 0-.27-.06-.52-.19-.75-.13-.24-.31-.42-.53-.56a1.4 1.4 0 0 0-.76-.21" class="path path" data-id="89" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1599.5 1604 27.5-16.5 17.5 12.5 18.5 22.5-58.5 54.5-25-31.5 25-20-11-15zM1556 1618.5l-6.5-12.5 19.5-31-1.5-4.5 3-3.5 6-3 15.5-4 11 6h-6l-18 13.5-14 10.5 10 13.5z" class="path land path" data-id="88" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1575.5 1603.5-10.5-14 14-10 20.5-16 11.5 5.5 15.5 18-27 16.5-6 7 10.5 15-25 19.5-22-26.5z" class="path building path" data-id="88" style="color:#7ab2d3;"></path><path d="M1590.96 1594.12c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m7.94 5.25c-.66 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.44-.8-.44-1.27c0-.36.09-.7.25-1 .17-.31.4-.56.68-.76.29-.21.61-.34.97-.39v-.06c-.47-.1-.85-.32-1.14-.68s-.43-.78-.43-1.26q0-.675.39-1.2c.27-.36.63-.64 1.09-.84s.99-.31 1.58-.31c.58 0 1.11.11 1.57.31s.83.48 1.09.84c.26.35.4.75.4 1.2a1.95 1.95 0 0 1-1.57 1.94v.06c.35.05.67.18.95.39.29.2.52.45.68.76.17.3.26.64.26 1 0 .47-.14.9-.43 1.27s-.69.66-1.21.88c-.5.21-1.09.32-1.74.32m0-1.36c.29 0 .54-.05.76-.15.22-.11.39-.26.52-.45.12-.19.18-.41.18-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.75-.17s-.54.05-.76.17c-.22.11-.39.26-.52.46-.13.19-.19.41-.19.67 0 .24.06.46.18.65.13.19.3.34.52.45.22.1.48.15.77.15m0-3.89c.24 0 .46-.05.65-.15q.285-.15.45-.42a1.2 1.2 0 0 0 0-1.2c-.11-.18-.26-.31-.45-.41-.18-.1-.4-.15-.65-.15q-.375 0-.66.15c-.19.1-.34.23-.45.41-.1.17-.15.37-.15.59 0 .23.05.44.16.61.11.18.25.32.44.42.2.1.41.15.66.15" class="path path" data-id="88" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1376 1792.5-8-28 24-7 65-36.5 41 51-16.5 7.5-9 8.5-61.5 8.5z" class="path land path" data-id="87" style="color:#7ab2d3;"></path><path d="M1428.96 1771.12c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m5.03 5.13 3.61-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2z" class="path path" data-id="87" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1334.5 1680-9-36.5h28.5l13-3 13 27.5z" class="path land path" data-id="86" style="color:#7ab2d3;"></path><path d="M1346.96 1663.12c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m8.03 5.25c-.45 0-.88-.08-1.3-.23-.41-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02.01-.73.09-1.39.26-1.96.16-.58.4-1.07.71-1.48.31-.4.69-.71 1.12-.92.44-.21.92-.32 1.46-.32.59 0 1.1.12 1.55.34.44.23.8.53 1.07.92s.44.82.5 1.3h-1.82c-.08-.3-.22-.54-.45-.72-.23-.17-.51-.26-.85-.26-.56 0-1 .25-1.29.75q-.435.735-.45 2.01h.06c.13-.26.31-.48.53-.66s.48-.32.76-.42c.29-.1.59-.15.91-.15.52 0 .98.12 1.38.37q.6.36.96.99c.23.43.34.91.34 1.46 0 .59-.13 1.11-.41 1.57-.27.46-.65.82-1.15 1.09-.48.25-1.05.38-1.7.38m-.01-1.45c.29 0 .54-.07.76-.2.23-.14.41-.33.53-.56.13-.23.19-.49.19-.78s-.06-.55-.19-.78c-.12-.23-.3-.42-.52-.55-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.33.19-.47.34c-.13.14-.24.3-.32.49-.07.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.31.42.53.56s.48.21.76.21" class="path path" data-id="86" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1325.5 1644-19.5 1 7.5 40.5 21-5z" class="path building path" data-id="85" style="color:#7ab2d3;"></path><path d="M1317.96 1676.12c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m7.87 5.25c-.6 0-1.14-.11-1.61-.33s-.84-.53-1.12-.92c-.27-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.43.83.26.21.57.31.94.31.29 0 .54-.06.77-.19.22-.13.39-.31.52-.54.13-.24.19-.5.19-.8 0-.31-.06-.58-.19-.81-.13-.24-.31-.42-.54-.55-.22-.13-.48-.2-.78-.2-.25 0-.5.05-.74.16-.24.1-.43.25-.56.43l-1.64-.29.41-4.61h5.34v1.51h-3.82l-.22 2.19h.05q.225-.33.69-.54c.31-.14.66-.21 1.04-.21.53 0 1 .12 1.41.37s.74.58.97 1.02c.24.43.36.92.36 1.48 0 .59-.14 1.11-.41 1.57a2.9 2.9 0 0 1-1.15 1.07c-.49.26-1.05.39-1.7.39" class="path path" data-id="85" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1462 1667-42.5-61.5-13 12-18.5 13.5-20.5 9.5 14.5 28.5-67 17-43 9-12-35-21 4 6 31-17.5-2 8 40-81.5 16 12 43h7.5l11 30.5 29 5 16.5 2 5.5-2 3.5-5 15.5-30.5h17.5l48-12 2 17h41l13-5-8.5-28.5 23.5-6.5 65.5-37 42.5 51.5 24-14.5 57-47-6-8 30-25-47.5-58-7.5-13.5 18.5-30.5v-4.5l-13.5 6.5-8.5 16.5-10.5-12-15 10-21 20-37-36.5 42.5 63z" class="path land path" data-id="84" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1188 1700.5 40.5-7.5 4 39.5-38 5.5zM1270.5 1693l-10.5-38 45.5-10 7.5 40zM1150.5 1747l-9.5-30 45.5-15.5 7.5 37.5zM1461.5 1666.5l-41-62 41-28 40.5 61.5zM1235 1775.5l-8-29.5 31.5-7.5 6.5 28.5z" class="path building path" data-id="84" style="color:#7ab2d3;"></path><path d="M1457.46 1625.62c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m4.55 3.6v-1.46l3.64-5.74h1.26v2.01h-.75l-2.29 3.64v.07h5.17v1.48zm4.19 1.53v-1.98l.03-.64v-6.11h1.73v8.73z" class="path path" data-id="84" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1229 1693.5-4-31h11.5l7.5 31z" class="path land path" data-id="83" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1187.5 1700-3-37h40l3.5 30.5z" class="path building path" data-id="83" style="color:#7ab2d3;"></path><path d="M1201.96 1686.12c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m7.91 5.25c-.64 0-1.21-.11-1.7-.33-.5-.22-.89-.52-1.18-.91-.28-.39-.43-.84-.43-1.35h1.85c.02.22.08.4.21.57.13.15.31.28.52.37.22.08.46.13.73.13q.42 0 .75-.15c.21-.1.38-.24.5-.41.13-.18.19-.38.19-.61 0-.24-.07-.44-.2-.62s-.31-.33-.55-.43-.53-.15-.86-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14.22-.1.39-.23.5-.4.12-.18.18-.38.18-.61q0-.33-.15-.57c-.11-.17-.25-.3-.44-.39-.18-.1-.4-.14-.65-.14s-.47.04-.68.13-.38.22-.5.38c-.13.17-.19.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.13-.9c.47-.22 1.01-.33 1.6-.33.6 0 1.13.11 1.58.33.46.22.81.52 1.06.89s.37.78.37 1.24c0 .49-.15.9-.46 1.23-.3.32-.7.53-1.18.62v.07c.64.08 1.13.3 1.46.66.34.37.51.82.5 1.36.01.5-.14.94-.43 1.33-.28.38-.68.69-1.18.91q-.765.33-1.74.33" class="path path" data-id="83" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="M1182.5 1657.5h-7.5l5.5 32-62 18-6-14.5-16.5 3 4 15.5-10 4.5 6 12.5 14.5 52-4 34.5 20.5 4.5 12-4.5 2 13.5 24.5 2 21-8-11.5-31-9.5 2-11-44.5h-4.5l-9-33 45.5-13z" class="path land path" data-id="82" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1108.5 1672.5-17.5 3.5 5 19 18-2.5 5.5 14.5 61-17-8-35-27 6.5-3.5-8.5-33.5 13z" class="path building path" data-id="82" style="color:#7ab2d3;"></path><path d="M1135.96 1686.12c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m4.68 5.13v-1.33l3.11-2.88q.39-.375.66-.69.27-.3.42-.6c.09-.2.14-.41.14-.64q0-.39-.18-.66a1.06 1.06 0 0 0-.48-.43c-.2-.1-.43-.15-.68-.15-.27 0-.5.05-.7.16-.2.1-.35.26-.46.46s-.16.44-.16.72h-1.75c0-.57.13-1.07.38-1.49.26-.42.62-.74 1.09-.97s1-.35 1.61-.35c.63 0 1.17.11 1.63.34.47.21.83.52 1.09.91s.39.83.39 1.34c0 .33-.07.65-.2.97s-.36.68-.68 1.07c-.33.39-.8.86-1.4 1.4l-1.27 1.25v.06h3.66v1.51z" class="path path" data-id="82" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1026 1691-2-8.5 21.5-12h8l2 4 20-8 3 8 13 40.5m0 0 4.5 14 14.5 52-4.5 34 21 4.5 12-4.5 2.5 15-69.5-4.5-29-7-17-8 10.5-41.5v-10.5l17-4.5-8-25zm-16-38.5L1026 1693" class="path land path" data-id="81" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1017.5 1695 13.5 39.5 7 23.5 15.5-4.5-7.5-24.5 43.5-14.5-11.5-38.5-58 19M1046 1800v-33.5h22v33.5z" class="path building path" data-id="81" style="color:#7ab2d3;"></path><path d="M1051.96 1711.12c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15m8.48-3.6v8.73h-1.85v-6.98h-.05l-2 1.26v-1.64l2.16-1.37z" class="path path" data-id="81" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="4 4" d="m862 1660.5 21-8.5 29-1 55 4.5.5-11 12.5-6 13.5 21 19.5-12.5 12.5-5.5 12 19 8 9.5-20 11.5v9.5l-7 4v7l18 56-29-8.5-5.5 32 29.5 8-6 21-30.5-29v-10l-21.5-23 7.5-4.5-7.5-12-47-34-18-7-28.5-17-21.5-4z" class="path land path" data-id="80" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m967.5 1656.5-57.5-4-3.5 37.5 58.5 4.5zm0 0v-12l12.5-6 13.5 21 19-12.5 7 54.5-39.5 4-5.5-49m33.5 94-5.5 29.5 29 9 4.5-20.5v-10z" class="path building path" data-id="80" style="color:#7ab2d3;"></path><path d="M932.963 1678.12c-.656 0-1.24-.11-1.751-.32-.509-.22-.908-.51-1.198-.88s-.434-.8-.434-1.27c0-.36.082-.7.247-1 .167-.31.395-.56.682-.76q.429-.315.963-.39v-.06c-.466-.1-.844-.32-1.134-.68a1.95 1.95 0 0 1-.435-1.26q0-.675.397-1.2.396-.54 1.086-.84c.463-.2.989-.31 1.577-.31s1.112.11 1.573.31q.694.3 1.09.84.397.525.401 1.2a1.96 1.96 0 0 1-1.568 1.94v.06q.524.075.95.39c.287.2.514.45.682.76.17.3.257.64.26 1-.003.47-.149.9-.439 1.27s-.69.66-1.202.88c-.508.21-1.091.32-1.747.32m0-1.36q.439 0 .767-.15.328-.165.511-.45c.125-.19.188-.41.188-.65 0-.26-.064-.48-.192-.67-.128-.2-.301-.35-.52-.46-.218-.12-.47-.17-.754-.17-.281 0-.533.05-.754.17-.222.11-.396.26-.524.46-.125.19-.188.41-.188.67 0 .24.061.46.183.65q.184.285.516.45.332.15.767.15m0-3.89q.366 0 .652-.15t.447-.42c.108-.17.162-.38.162-.61 0-.22-.054-.42-.162-.59a1.1 1.1 0 0 0-.443-.41q-.28-.15-.656-.15-.37 0-.656.15c-.191.1-.34.23-.448.41-.105.17-.157.37-.157.59a1.13 1.13 0 0 0 .609 1.03q.285.15.652.15m8.1 5.32q-1.1 0-1.892-.54c-.526-.36-.931-.88-1.215-1.55q-.422-1.02-.417-2.46 0-1.425.422-2.43.426-1.005 1.214-1.53c.528-.35 1.158-.53 1.888-.53s1.358.18 1.883.53c.529.35.935.87 1.219 1.54.284.66.425 1.47.422 2.42q0 1.44-.426 2.46c-.281.68-.685 1.2-1.21 1.55q-.789.54-1.888.54m0-1.53q.75 0 1.197-.75c.299-.51.446-1.26.443-2.27q0-.99-.204-1.65-.2-.66-.571-.99a1.25 1.25 0 0 0-.865-.33c-.497 0-.895.24-1.193.74s-.449 1.24-.452 2.23q0 1.02.2 1.68c.137.45.328.79.576 1.01q.37.33.869.33" class="path path" data-id="80" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m937.5 1506.5-32.5 25 28 32.5 35.5-22z" class="path building path" data-id="78" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m897 1537.5 7-6 40.5-30-2.5-3.5 10-7.5 26.5 36 11-7.5 3.5 4.5-60.5 41-11 4.5H910l-20-5.5z" class="path land path" data-id="78" style="color:#7ab2d3;"></path><path d="m930.553 1541.5 3.617-7.16v-.06h-4.214v-1.51h6.124v1.53l-3.623 7.2zm9.871.12c-.656 0-1.24-.11-1.751-.32-.509-.22-.908-.51-1.198-.88s-.435-.8-.435-1.27c0-.36.083-.7.248-1 .167-.31.395-.56.681-.76q.43-.315.964-.39v-.06c-.466-.1-.844-.32-1.134-.68a1.95 1.95 0 0 1-.435-1.26q0-.675.397-1.2.396-.54 1.086-.84c.463-.2.989-.31 1.577-.31s1.112.11 1.572.31q.696.3 1.091.84.397.525.401 1.2a1.96 1.96 0 0 1-1.568 1.94v.06q.524.075.95.39c.287.2.514.45.682.76.17.3.257.64.26 1-.003.47-.149.9-.439 1.27s-.69.66-1.202.88c-.508.21-1.091.32-1.747.32m0-1.36q.439 0 .767-.15.328-.165.511-.45c.125-.19.188-.41.188-.65 0-.26-.064-.48-.192-.67-.128-.2-.301-.35-.52-.46-.218-.12-.47-.17-.754-.17-.281 0-.533.05-.754.17-.222.11-.397.26-.524.46-.125.19-.188.41-.188.67a1.19 1.19 0 0 0 .699 1.1q.332.15.767.15m0-3.89q.366 0 .652-.15.285-.15.447-.42c.108-.17.162-.38.162-.61 0-.22-.054-.42-.162-.59a1.1 1.1 0 0 0-.443-.41q-.28-.15-.656-.15-.37 0-.656.15c-.191.1-.34.23-.448.41-.105.17-.157.37-.157.59a1.13 1.13 0 0 0 .609 1.03q.286.15.652.15" class="path path" data-id="78" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1063.5 1460 8.5-9v-25l-15 3-17.5-3zm0 0-57 37-21-30-13.5-21.5 47-30.5 3.5 6 9-6" class="path land path" data-id="77" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m996 1438 35-23.5 32 44.5-34.5 23.5-19.5-25.5-9-1 1.5-11zM950 1488l35-21 24.5 36-31 23.5z" class="path building path" data-id="77" style="color:#7ab2d3;"></path><path d="m1022.55 1452.5 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2zm7.37 0 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2z" class="path path" data-id="77" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1064 1411.5-24-36.5-18.5 14.5 29 32.5z" class="path building path" data-id="76" style="color:#7ab2d3;"></path><path d="m1034.55 1400.5 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2zm9.96.12c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26-.57 0-1 .25-1.3.75-.29.49-.44 1.16-.44 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42.28-.1.59-.15.91-.15.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.22-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55a1.4 1.4 0 0 0-.76-.21 1.45 1.45 0 0 0-1.07.46c-.13.14-.23.3-.31.49a1.55 1.55 0 0 0 .08 1.36c.13.24.3.42.52.56.23.14.48.21.77.21" class="path path" data-id="76" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1076.5 1411.5-4-6 25-19 4.5 5z" class="path land path" data-id="75" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1065 1410.5-24-36 30-23.5 8.5 11 15-11 19.5 23.5z" class="path building path" data-id="75" style="color:#7ab2d3;"></path><path d="m1066.55 1385.5 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2zm9.86.12c-.6 0-1.13-.11-1.61-.33-.47-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.51.05-.75.16-.24.1-.42.25-.56.43l-1.64-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.4.37.42.25.74.58.98 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39" class="path path" data-id="75" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1062.5 1314 5.5-7 33.5 33-5.5 6z" class="path land path" data-id="74" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="M1091.5 1276.5 1068 1307l46 45.5 23.5-28z" class="path building path" data-id="74" style="color:#7ab2d3;"></path><path d="m1099.55 1320.5 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2zm5.96-1.53v-1.46l3.64-5.74h1.26v2.01h-.75l-2.29 3.64v.07h5.17v1.48zm4.19 1.53v-1.98l.03-.64v-6.11h1.73v8.73z" class="path path" data-id="74" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1061.5 1342 6.5-3-23.5-36 15-10.5-4.5-4 43.5-21.5-8-13.5-18-10.5-26-9.5L945 1342l3 13.5 7 17.5 27.5-15 10.5 10 18.5 5 16-5" class="path land path" data-id="72" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1009 1318.5-10 8 29.5 41 35-22.5-30.5-45.5-25 17z" class="path building path" data-id="72" style="color:#7ab2d3;"></path><path d="m1025.55 1339.5 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2zm6.79 0v-1.33l3.11-2.88c.26-.25.49-.48.67-.69.18-.2.32-.4.41-.6s.14-.41.14-.64q0-.39-.18-.66c-.11-.19-.27-.33-.47-.43q-.3-.15-.69-.15c-.27 0-.5.05-.7.16-.2.1-.35.26-.46.46s-.16.44-.16.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.08-.97c.47-.23 1.01-.35 1.61-.35.63 0 1.17.11 1.64.34.46.21.82.52 1.08.91s.39.83.39 1.34c0 .33-.06.65-.2.97-.12.32-.35.68-.68 1.07s-.8.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51z" class="path path" data-id="72" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1091 1210.5-9.5 16 17 9.5-9.5 15.5 2 1.5 11.5 16.5 26.5-37 4 4.5 20.5-24-5-5.5-25.5 20.5z" class="path land path" data-id="71" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1073 1242.5 8.5-16 17.5 9.5-10.5 16z" class="path building path" data-id="71" style="color:#7ab2d3;"></path><path d="m1079.55 1243.5 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2zm10.59-8.73v8.73h-1.84v-6.98h-.06l-1.99 1.26v-1.64l2.16-1.37z" class="path path" data-id="71" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1181 1312.5-11.5-14.5 11.5-9-25-37.5 30-17-11.5-18-42.5 37.5 41.5-48 12-18 10.5-26 59.5 44-31 24.5-5.5-7-31.5 19.5 24 38.5 25 38.5-31 23-22.5-33z" class="path land path" data-id="70" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1156 1251.66-19.5 11.34-4.5-8 42.5-39 11 18.5zm0 0 25 37.34-35 26.5-28.5-38zm63.5-28.16-32 20 22 35 32.5-21z" class="path building path" data-id="70" style="color:#7ab2d3;"></path><path d="m1143.55 1288.5 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2zm10.03.19c-.73 0-1.37-.18-1.89-.54-.53-.36-.93-.88-1.22-1.55q-.42-1.02-.42-2.46c0-.95.14-1.76.43-2.43.28-.67.69-1.18 1.21-1.53.53-.35 1.16-.53 1.89-.53s1.36.18 1.88.53c.53.35.94.87 1.22 1.54.28.66.43 1.47.42 2.42q0 1.44-.42 2.46c-.28.68-.69 1.2-1.21 1.55q-.795.54-1.89.54m0-1.53q.75 0 1.2-.75c.29-.51.44-1.26.44-2.27q0-.99-.21-1.65-.195-.66-.57-.99c-.24-.22-.53-.33-.86-.33-.5 0-.9.24-1.19.74-.3.5-.45 1.24-.46 2.23 0 .68.07 1.24.2 1.68.14.45.33.79.58 1.01q.375.33.87.33" class="path path" data-id="70" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1210.5 1280 32.5-21 29.5 46.5-33 19z" class="path building path" data-id="69" style="color:#7ab2d3;"></path><path d="M1237.56 1295.62c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m7.74-7.52c.45 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.16.58-.4 1.07-.71 1.48-.31.4-.68.71-1.12.92s-.93.32-1.47.32c-.58 0-1.09-.11-1.54-.34-.45-.22-.8-.53-1.08-.92-.27-.39-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.23.17.51.26.84.26.57 0 1-.25 1.3-.74q.435-.75.45-2.04h-.06c-.13.25-.31.47-.53.66-.22.18-.48.32-.76.42-.29.1-.59.15-.91.15-.52 0-.98-.12-1.38-.37-.4-.24-.72-.57-.95-.99-.24-.43-.35-.91-.35-1.45-.01-.59.13-1.11.4-1.56.27-.46.66-.82 1.14-1.08.5-.26 1.07-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.12.23-.19.48-.18.77 0 .28.06.54.18.77.13.23.31.41.52.55.23.13.48.2.76.2.22 0 .41-.04.6-.12a1.54 1.54 0 0 0 .79-.82 1.605 1.605 0 0 0-.08-1.34c-.13-.24-.31-.42-.53-.56-.23-.14-.48-.21-.76-.21" class="path path" data-id="69" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1301.5 1260 12 10h-7.5l-7 8 7 7-16 10-6.5 6.5-4 10.5-53-80.5 30.5-24h3zm0 0-33.5 23.5" class="path land path" data-id="68" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1268 1283.5-33-51 27-22.5 39 50z" class="path building path" data-id="68" style="color:#7ab2d3;"></path><path d="M1263.56 1252.62c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m7.83 1.45c-.65 0-1.24-.11-1.75-.32-.5-.22-.9-.51-1.19-.88s-.44-.8-.44-1.27c0-.36.08-.7.25-1 .17-.31.39-.56.68-.76q.435-.315.96-.39v-.06c-.46-.1-.84-.32-1.13-.68s-.43-.78-.43-1.26q0-.675.39-1.2c.27-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.4.75.4 1.2a1.95 1.95 0 0 1-1.57 1.94v.06c.35.05.67.18.95.39.29.2.52.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.52.46-.13.19-.19.41-.19.67 0 .24.06.46.18.65s.3.34.52.45c.22.1.48.15.76.15m0-3.89q.375 0 .66-.15c.19-.1.34-.24.44-.42.11-.17.17-.38.17-.61 0-.22-.06-.42-.17-.59-.1-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.1.17-.16.37-.16.59 0 .23.06.44.17.61.1.18.25.32.44.42s.41.15.65.15" class="path path" data-id="68" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1335 1226.5-34 27.5m0 0 12.5 16h-8.5l-7 9 7 6 20-12-4.5-10 27-21.5-11.5-13.5z" class="path land path" data-id="67" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1264.5 1208.5 33-27.5 36 44.5-33.5 28z" class="path building path" data-id="67" style="color:#7ab2d3;"></path><path d="M1296.56 1220.62c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m4.92 1.33 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2z" class="path path" data-id="67" style="color:#000;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1274.5 1197-14.5 11-3-2.5-60.5-45.5v-25.5l33.5 7 44.5 25 7 18-11 6.5z" class="path land path" data-id="66" style="color:#7ab2d3;"></path><path d="M1237.56 1176.62c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m7.93 1.45c-.45 0-.88-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02.01-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.69-.71 1.12-.92.44-.21.92-.32 1.46-.32.59 0 1.1.12 1.55.34.44.23.8.53 1.07.92s.44.82.49 1.3h-1.82c-.07-.3-.22-.54-.44-.72-.23-.17-.51-.26-.85-.26q-.855 0-1.29.75c-.3.49-.44 1.16-.45 2.01h.06c.13-.26.31-.48.53-.66s.48-.32.76-.42c.29-.1.59-.15.91-.15.52 0 .98.12 1.38.37.4.24.72.57.95.99.24.43.35.91.35 1.46 0 .59-.13 1.11-.41 1.57-.27.46-.66.82-1.15 1.09-.49.25-1.05.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78c-.12-.23-.3-.42-.52-.55-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.07.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.31.42.53.56s.48.21.76.21" class="path path" data-id="66" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1210 1020-23-8 6.5 36.5 2.5 84.5 34 8 44.5 25.5 7 17-11 8.5 4 5 23.5-18 24.5 29.5 28.5-67.5-10-26.5-7-22.5-9.5-17-22-34-36.5-36.5-15.5 28z" class="path land path" data-id="65" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1279 1107-13.5-5.5-8.5 18 15 7-10.5 22.5 71.5 31.5 17-39.5-71-30z" class="path building path" data-id="65" style="color:#7ab2d3;"></path><path d="M1291.56 1146.62c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m7.77 1.45c-.61 0-1.14-.11-1.61-.33s-.84-.53-1.12-.92-.42-.83-.43-1.34h1.79c.02.34.16.61.43.83.26.21.57.31.94.31.29 0 .54-.06.76-.19.23-.13.4-.31.53-.54.13-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.12-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.25 0-.5.05-.74.16-.24.1-.43.25-.56.43l-1.64-.29.41-4.61h5.34v1.51h-3.82l-.22 2.19h.05q.225-.33.69-.54c.31-.14.66-.21 1.04-.21.53 0 1 .12 1.41.37s.73.58.97 1.02c.24.43.36.92.36 1.48 0 .59-.14 1.11-.41 1.57-.28.45-.66.81-1.15 1.07s-1.06.39-1.7.39" class="path path" data-id="65" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1369.5 1221.5-35-21.5v5.5l4.5 8 10 8 15 7.5z" class="path land path" data-id="64" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1334.5 1200 24.5-36.5 38 22-27.5 36z" class="path building path" data-id="64" style="color:#7ab2d3;"></path><path d="M1361.06 1199.12c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m4.45-.2v-1.46l3.64-5.74h1.25v2.01h-.74l-2.29 3.64v.07h5.17v1.48zm4.19 1.53v-1.98l.03-.64v-6.11h1.73v8.73z" class="path path" data-id="64" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1359 1163.5 8.5-27.5 41.5 21-11.5 28.5z" class="path building path" data-id="63" style="color:#7ab2d3;"></path><path d="M1379.06 1164.12c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m7.81 1.45q-.96 0-1.71-.33c-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.22.08.46.13.73.13q.42 0 .75-.15c.21-.1.38-.24.5-.41.12-.18.19-.38.19-.61 0-.24-.07-.44-.2-.62s-.31-.33-.55-.43-.53-.15-.86-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14.22-.1.38-.23.5-.4.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.18-.1-.4-.14-.65-.14s-.48.04-.68.13c-.21.09-.38.22-.5.38-.13.17-.19.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.975.12 1.47.66c.34.37.51.82.5 1.36.01.5-.14.94-.43 1.33-.28.38-.68.69-1.19.91-.5.22-1.08.33-1.73.33" class="path path" data-id="63" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1343 1074.5-38-59.5 40.5-14.5 19.5 40.5 11 19 2.5 22.5v20l24.5-2.5v16.5l6 23 8 13.5 5.5 16.5 1.5 13-1.5 13-10.5-5.5-15-5 12-28-41.5-20.5-5-3-4.5-21z" class="path land path" data-id="62" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1392 1128.5-18.5-10-7.5 16.5 19.5 10z" class="path building path" data-id="62" style="color:#7ab2d3;"></path><path d="M1376.06 1136.12c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m4.58 1.33v-1.33l3.11-2.88q.39-.375.66-.69c.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.05-.48-.17-.66-.12-.19-.28-.33-.48-.43s-.43-.15-.68-.15c-.27 0-.5.05-.7.16-.2.1-.35.26-.46.46s-.16.44-.16.72h-1.76c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91s.39.83.39 1.34c0 .33-.07.65-.2.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.27 1.25v.06h3.66v1.51z" class="path path" data-id="62" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="M1365.5 1041.5 1345 999l25-11 28.5 38z" class="path land path" data-id="61" style="color:#7ab2d3;"></path><path d="M1368.06 1018.12c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m8.38-7.4v8.73h-1.85v-6.98h-.05l-2 1.26v-1.64l2.16-1.37z" class="path path" data-id="61" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1404.5 1035-34.5-46.5 79.5-28.5 2.5 67z" class="path land path" data-id="60" style="color:#7ab2d3;"></path><path d="M1414.06 1007.12c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96q.255-.87.72-1.477c.31-.403.68-.71 1.12-.92.43-.213.92-.32 1.46-.32.58 0 1.1.114 1.54.341q.675.337 1.08.917c.27.386.43.819.49 1.299h-1.82q-.105-.451-.45-.716-.33-.26-.84-.26-.855 0-1.29.746-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21m8 1.52q-1.095 0-1.89-.54c-.53-.36-.93-.88-1.22-1.55-.28-.68-.42-1.5-.41-2.46q0-1.425.42-2.43c.28-.669.69-1.179 1.21-1.528q.795-.529 1.89-.529c.73 0 1.36.177 1.88.529.53.352.94.863 1.22 1.538.29.66.43 1.47.43 2.42 0 .96-.15 1.78-.43 2.46s-.69 1.2-1.21 1.55q-.795.54-1.89.54m0-1.53q.75 0 1.2-.75c.3-.51.44-1.26.44-2.27 0-.66-.07-1.21-.2-1.65q-.21-.66-.57-.991a1.27 1.27 0 0 0-.87-.333c-.5 0-.89.249-1.19.744-.3.5-.45 1.24-.45 2.23 0 .68.06 1.24.2 1.68.13.45.32.79.57 1.01q.375.33.87.33" class="path path" data-id="60" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1417.5 1137.5-9-36.5 39-7 10.5 37zM1427 1097l-8-41 28-5 8 41.5z" class="path building path" data-id="59" style="color:#7ab2d3;"></path><path d="M1428.89 1121.12c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m7.71-8.97c.45 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.3 2c0 .74-.09 1.4-.26 1.99-.16.58-.4 1.07-.71 1.48-.31.4-.68.71-1.12.92s-.92.32-1.46.32c-.59 0-1.1-.11-1.55-.34-.44-.22-.8-.53-1.08-.92-.27-.39-.43-.83-.49-1.32h1.82c.08.32.22.56.45.74.23.17.51.26.85.26.56 0 1-.25 1.29-.74q.45-.75.45-2.04h-.06c-.13.25-.31.47-.53.66-.22.18-.48.32-.76.42-.29.1-.59.15-.91.15-.51 0-.97-.12-1.38-.37-.4-.24-.72-.57-.95-.99-.23-.43-.35-.91-.35-1.45 0-.59.13-1.11.4-1.56.28-.46.66-.82 1.15-1.08q.735-.39 1.71-.39m.01 1.45c-.28 0-.54.07-.76.21-.23.13-.4.32-.53.55s-.19.48-.19.77c0 .28.06.54.19.77.12.23.3.41.52.55.22.13.47.2.76.2a1.45 1.45 0 0 0 1.06-.45c.14-.14.24-.3.32-.49.08-.18.12-.38.12-.59-.01-.27-.07-.52-.2-.75-.13-.24-.3-.42-.53-.56a1.4 1.4 0 0 0-.76-.21" class="path path" data-id="59" style="color:#000;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1418 1138.5-8 2m0 0-6.5-22V1099l-25.5 3.5 2-22-5-19.5-10.5-20.5 33.5-15 5.5 9.5 47.5-9.5 15.5 93 3.5 10 3 15 8 12.5-11 3-11.5-28.5z" class="path land path" data-id="59" style="color:#7ab2d3;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1412.5 1140.5 5-1.5 17 53 40.5-11.5-7-21.5 11.5-2.5 12.5 28-12.5 4 2 10.5-24.5-9-18 4v7.5l-16-9.5 2-9v-12z" class="path land path" data-id="58" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1435.5 1191.5-18-52.5 41-7.5 16 50z" class="path building path" data-id="58" style="color:#7ab2d3;"></path><path d="M1441.89 1166.12c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m7.81 0c-.66 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.44-.8-.44-1.27c0-.36.09-.7.25-1 .17-.31.4-.56.68-.76.29-.21.61-.34.97-.39v-.06c-.47-.1-.85-.32-1.14-.68s-.43-.78-.43-1.26q0-.675.39-1.2c.27-.36.63-.64 1.09-.84s.99-.31 1.58-.31 1.11.11 1.57.31.83.48 1.09.84c.27.35.4.75.4 1.2a1.95 1.95 0 0 1-1.57 1.94v.06c.35.05.67.18.95.39.29.2.52.45.69.76.17.3.25.64.26 1-.01.47-.15.9-.44 1.27s-.69.66-1.21.88c-.5.21-1.09.32-1.74.32m0-1.36c.29 0 .55-.05.76-.15.22-.11.39-.26.52-.45.12-.19.18-.41.18-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.75-.17s-.54.05-.76.17c-.22.11-.39.26-.52.46-.13.19-.19.41-.19.67 0 .24.06.46.18.65.13.19.3.34.52.45.22.1.48.15.77.15m0-3.89c.24 0 .46-.05.65-.15q.285-.15.45-.42a1.2 1.2 0 0 0 0-1.2c-.11-.18-.26-.31-.45-.41-.18-.1-.4-.15-.65-.15q-.375 0-.66.15c-.19.1-.34.23-.45.41-.1.17-.15.37-.15.59 0 .23.05.44.16.61q.165.27.45.42c.19.1.4.15.65.15" class="path path" data-id="58" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1426 1254-7-4.5-25.5 28.5-28-31-2 2.5 30 38z" class="path land path" data-id="56" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="M1394.5 1278.5 1365 1248l24.5-26.5 29 28.5z" class="path building path" data-id="56" style="color:#7ab2d3;"></path><path d="M1388.89 1254.12c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m7.9 0c-.45 0-.88-.08-1.3-.23-.41-.14-.79-.38-1.11-.72-.33-.33-.6-.77-.79-1.32s-.28-1.22-.28-2.02c0-.73.08-1.39.25-1.96.16-.58.4-1.07.71-1.48.32-.4.69-.71 1.12-.92.44-.21.93-.32 1.47-.32.58 0 1.09.12 1.54.34.44.23.8.53 1.07.92s.44.82.5 1.3h-1.82q-.105-.45-.45-.72c-.23-.17-.51-.26-.84-.26-.57 0-1 .25-1.3.75q-.435.735-.45 2.01h.06c.13-.26.31-.48.53-.66s.48-.32.76-.42c.29-.1.59-.15.91-.15.52 0 .98.12 1.38.37q.6.36.96.99c.23.43.35.91.35 1.46 0 .59-.14 1.11-.42 1.57-.27.46-.65.82-1.14 1.09-.49.25-1.06.38-1.71.38m-.01-1.45c.29 0 .54-.07.77-.2.22-.14.4-.33.52-.56.13-.23.2-.49.2-.78s-.07-.55-.2-.78c-.12-.23-.29-.42-.52-.55q-.33-.21-.75-.21-.33 0-.6.12c-.18.08-.33.19-.47.34-.13.14-.24.3-.32.49-.07.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.31.42.53.56s.48.21.76.21" class="path path" data-id="56" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1389.5 1221 23-31 26 12-19.5 48z" class="path building path" data-id="57" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1436 1229 2.5-26.5-19 46.5 6.5 4.5z" class="path land path" data-id="57" style="color:#7ab2d3;"></path><path d="M1411.89 1224.12c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m4.9-.12 3.61-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2z" class="path path" data-id="57" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1336 1271.5 8.5-6.5 9 11 18-16 21.5 27-30.5 22z" class="path land path" data-id="55" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1353.5 1275.5-11-13.5 19-15 9.5 15z" class="path building path" data-id="55" style="color:#7ab2d3;"></path><path d="M1360.39 1287.62c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m7.74 0c-.6 0-1.14-.11-1.61-.33s-.84-.53-1.12-.92c-.27-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.43.83.26.21.58.31.94.31.29 0 .54-.06.77-.19.22-.13.4-.31.52-.54.13-.24.19-.5.19-.8 0-.31-.06-.58-.19-.81-.13-.24-.31-.42-.54-.55-.22-.13-.48-.2-.78-.2-.25 0-.5.05-.74.16-.24.1-.43.25-.56.43l-1.64-.29.41-4.61h5.34v1.51h-3.82l-.22 2.19h.05q.225-.33.69-.54c.31-.14.66-.21 1.04-.21.53 0 1 .12 1.41.37s.74.58.98 1.02c.23.43.35.92.35 1.48 0 .59-.13 1.11-.41 1.57-.27.45-.65.81-1.15 1.07-.48.26-1.05.39-1.7.39" class="path path" data-id="55" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1289 1295.83-12 18.5-4-8.83-33 19-3-4-4.5 4 35 54 37.5-23.5 5 4.5 7.5-4.5 17-11.5V1333l-4.5-8.5 15.5-11-25-28.5 6.5-10-3-3z" class="path land path" data-id="54" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1272.5 1374-25-37 31.5-21 25.5 39.5z" class="path building path" data-id="54" style="color:#7ab2d3;"></path><path d="M1304.39 1315.62c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m4.42-1.65v-1.46l3.64-5.74h1.26v2.01h-.75l-2.29 3.64v.07h5.18v1.48zm4.19 1.53v-1.98l.03-.64v-6.11h1.73v8.73z" class="path path" data-id="54" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1205.5 1353-3.5-5.5 30.5-21.5 35.5 54-7.5 7-34.5-53.5z" class="path land path" data-id="53" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1233 1407.5-33.5-48 26.5-26 35 53.5z" class="path building path" data-id="53" style="color:#7ab2d3;"></path><path d="M1224.39 1374.62c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m7.78 0c-.64 0-1.21-.11-1.7-.33-.5-.22-.89-.52-1.17-.91-.29-.39-.43-.84-.44-1.35h1.85c.02.22.09.4.21.57.13.15.31.28.52.37.22.08.46.13.73.13q.42 0 .75-.15c.21-.1.38-.24.5-.41.13-.18.19-.38.19-.61 0-.24-.07-.44-.2-.62s-.31-.33-.55-.43-.52-.15-.85-.15h-.82v-1.36h.82c.27 0 .52-.04.73-.14.22-.1.39-.23.51-.4.12-.18.17-.38.17-.61q0-.33-.15-.57c-.11-.17-.25-.3-.44-.39-.18-.1-.4-.14-.65-.14s-.47.04-.68.13-.38.22-.5.38c-.12.17-.19.36-.2.58h-1.77c.01-.5.15-.95.43-1.33a2.9 2.9 0 0 1 1.13-.9c.47-.22 1.01-.33 1.6-.33.61 0 1.13.11 1.58.33.46.22.81.52 1.06.89s.37.78.37 1.24q0 .735-.45 1.23c-.31.32-.7.53-1.19.62v.07c.64.08 1.13.3 1.46.66.34.37.51.82.51 1.36 0 .5-.15.94-.43 1.33-.29.38-.69.69-1.19.91q-.765.33-1.74.33" class="path path" data-id="53" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1199.5 1347.5 5 7-5 5.5 3 4 1.5 4.5-32 23-15-14-13.5 10.5-8.5-9.5 26-21.5 6 5.5 3.5-2.5 1.5 2.5zm0 0L1181 1315l2-1 21.5 30z" class="path land path" data-id="52" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1160.5 1356.5 6 6 4-2.5 2 2.5 27-15-18-32-6-6-27.5 21.5m12.5 25.5 3.5-3-16-22.5m12.5 25.5L1135 1377l-15-17 28-29m24.5 60.5 31.5-23 27.5 40-30.5 21.5z" class="path building path" data-id="52" style="color:#7ab2d3;"></path><path d="M1171.39 1342.62c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m4.55-.12v-1.33l3.11-2.88q.39-.375.66-.69.27-.3.42-.6c.09-.2.14-.41.14-.64q0-.39-.18-.66c-.11-.19-.27-.33-.47-.43q-.315-.15-.69-.15c-.27 0-.5.05-.7.16-.2.1-.35.26-.46.46s-.16.44-.16.72h-1.75c0-.57.13-1.07.38-1.49.26-.42.63-.74 1.09-.97.47-.23 1-.35 1.61-.35.63 0 1.17.11 1.63.34.47.21.83.52 1.09.91s.39.83.39 1.34c0 .33-.07.65-.2.97s-.35.68-.68 1.07-.8.86-1.4 1.4l-1.27 1.25v.06h3.66v1.51z" class="path path" data-id="52" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1079.5 1453.5 8 12.5 34.5 56 30.5-27 41-49-37-47.5-8.5 10.5-14-17-25 28.5-6-4-6.5 6.5 5 5-14 11.5 4 6.5z" class="path land path" data-id="51" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1116 1444.5-28.5 21 28.5 38.5 28.5-20.5z" class="path building path" data-id="51" style="color:#7ab2d3;"></path><path d="M1112.39 1479.62c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m8.35-8.85v8.73h-1.85v-6.98h-.05l-2 1.26v-1.64l2.16-1.37z" class="path path" data-id="51" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1062 1494-10.5-15.5 32-19 7.5 16 31 46-15 13-13 6-32-45.5" class="path land path" data-id="50" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="M1090.5 1475.5 1062 1494l27 39.5 30-16z" class="path building path" data-id="50" style="color:#7ab2d3;"></path><path d="M1086.39 1510.62c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39m7.97.07q-1.095 0-1.89-.54c-.52-.36-.93-.88-1.21-1.55q-.42-1.02-.42-2.46 0-1.425.42-2.43c.29-.67.69-1.18 1.22-1.53.52-.35 1.15-.53 1.88-.53s1.36.18 1.89.53.93.87 1.22 1.54c.28.66.42 1.47.42 2.42 0 .96-.14 1.78-.43 2.46-.28.68-.68 1.2-1.21 1.55q-.78.54-1.89.54m0-1.53q.75 0 1.2-.75c.3-.51.45-1.26.44-2.27 0-.66-.06-1.21-.2-1.65q-.195-.66-.57-.99a1.26 1.26 0 0 0-.87-.33c-.49 0-.89.24-1.19.74s-.45 1.24-.45 2.23c0 .68.07 1.24.2 1.68.14.45.33.79.57 1.01q.375.33.87.33" class="path path" data-id="50" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1022 1500 29-20.5 41.5 63.5-33.5 17z" class="path building path" data-id="49" style="color:#7ab2d3;"></path><path d="M1048.08 1521.97v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.18 1.53v-1.98l.04-.64v-6.11h1.73v8.73zm7.24-8.85c.45 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.16.58-.4 1.07-.71 1.48-.31.4-.68.71-1.12.92s-.93.32-1.47.32c-.58 0-1.09-.11-1.54-.34-.44-.22-.8-.53-1.08-.92-.27-.39-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.23.17.51.26.84.26.57 0 1-.25 1.3-.74q.435-.75.45-2.04h-.06c-.13.25-.31.47-.53.66-.22.18-.48.32-.76.42-.29.1-.59.15-.91.15-.52 0-.97-.12-1.38-.37-.4-.24-.72-.57-.95-.99-.24-.43-.35-.91-.35-1.45 0-.59.13-1.11.4-1.56q.42-.69 1.14-1.08c.5-.26 1.07-.39 1.72-.39m.01 1.45a1.44 1.44 0 0 0-1.29.76c-.13.23-.2.48-.19.77 0 .28.06.54.19.77.12.23.3.41.52.55.22.13.47.2.75.2a1.427 1.427 0 0 0 1.07-.45c.14-.14.24-.3.32-.49.08-.18.11-.38.11-.59 0-.27-.06-.52-.19-.75-.13-.24-.31-.42-.53-.56-.23-.14-.48-.21-.76-.21" class="path path" data-id="49" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1039 1550.5-23.5-32.5-9.5 7.5-4-4.5-7 6.5 4 4.5-11 9.5 25 38.5 32.5-14.5z" class="path land path" data-id="48" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1039 1550.5-23.5-32.5-26 21.5 22.5 32z" class="path building path" data-id="48" style="color:#7ab2d3;"></path><path d="M1007.08 1549.97v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.18 1.53v-1.98l.04-.64v-6.11h1.73v8.73zm7.34.12c-.66 0-1.24-.11-1.76-.32-.5-.22-.9-.51-1.19-.88s-.44-.8-.44-1.27c0-.36.08-.7.25-1 .17-.31.39-.56.68-.76q.435-.315.96-.39v-.06c-.46-.1-.84-.32-1.13-.68s-.43-.78-.43-1.26q0-.675.39-1.2c.27-.36.63-.64 1.09-.84s.99-.31 1.58-.31c.58 0 1.11.11 1.57.31s.83.48 1.09.84c.26.35.4.75.4 1.2a1.95 1.95 0 0 1-1.57 1.94v.06c.35.05.67.18.95.39.29.2.52.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.74.32m0-1.36c.29 0 .54-.05.76-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.75-.17-.29 0-.54.05-.76.17-.22.11-.39.26-.52.46-.13.19-.19.41-.19.67 0 .24.06.46.18.65.13.19.3.34.52.45.22.1.48.15.77.15m0-3.89c.24 0 .46-.05.65-.15q.285-.15.45-.42a1.2 1.2 0 0 0 0-1.2c-.11-.18-.26-.31-.45-.41s-.4-.15-.65-.15q-.375 0-.66.15c-.19.1-.34.23-.45.41-.1.17-.16.37-.16.59 0 .23.06.44.17.61.1.18.25.32.44.42q.285.15.66.15" class="path path" data-id="48" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1002 1610-4.5-5 29.5-18.5 27 42.5-15.5 10.5 6.5 15.5 9 11.5 18.5-9-9.5-14 29-17 3.25 7.5 3.75 8.5-17.5 10.5 16 2v8l-21.5 3.5-20 7-2-4h-9l-8-10-11-18.5 12.5-7-21-33.5z" class="path land path" data-id="44" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m974 1626 45-25.5 18.5 34L993 1659l-13.5-21-13 7-3-4z" class="path building path" data-id="44" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1053.5 1628.5-26-41.5 31.5-17.5 29.5 47.5 3 8-29.5 18.5 10 14-18.5 9-8.5-11.5-7-16z" class="path building path" data-id="44" style="color:#7ab2d3;"></path><path d="M999.575 1630.47v-1.46l3.645-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.185 1.53v-1.98l.04-.64v-6.11h1.73v8.73zm3.95-1.53v-1.46l3.64-5.74h1.25v2.01h-.74l-2.29 3.64v.07h5.17v1.48zm4.19 1.53v-1.98l.03-.64v-6.11h1.73v8.73z" class="path path" data-id="44" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1142.5 1652 8.5-2.5 2.5 10-8 1.5zM1089 1617.5l3.5-3.5 2 9.5 15.5 26-5.5 3.5 3.5 5.5v13.5l-17.5 3 9 37.5-9 3-12.5-40.5-2-8 21.5-3.5v-7.5l-15-3 17-10.5z" class="path land path" data-id="43" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="M1137.5 1610.5 1124 1594l-31.5 20 2.5 10 14.5 26-5 1.5 2 4.5 1.5 10 33.5-14.5-4-8.5 13.5-5.5z" class="path building path" data-id="43" style="color:#7ab2d3;"></path><path d="M1112.58 1631.47v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.18 1.53v-1.98l.04-.64v-6.11h1.73v8.73zm7.31.12c-.64 0-1.21-.11-1.7-.33-.5-.22-.89-.52-1.18-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.31.28.52.37.22.08.46.13.73.13q.42 0 .75-.15c.21-.1.38-.24.5-.41.13-.18.19-.38.19-.61 0-.24-.07-.44-.2-.62s-.31-.33-.55-.43-.53-.15-.86-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14.22-.1.38-.23.5-.4.12-.18.18-.38.18-.61q0-.33-.15-.57c-.11-.17-.25-.3-.44-.39-.18-.1-.4-.14-.65-.14s-.48.04-.68.13c-.21.09-.38.22-.5.38-.13.17-.19.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.13-.9c.47-.22 1.01-.33 1.6-.33.6 0 1.13.11 1.58.33s.81.52 1.06.89.37.78.37 1.24c0 .49-.15.9-.46 1.23-.3.32-.7.53-1.18.62v.07c.64.08 1.13.3 1.46.66.34.37.51.82.5 1.36.01.5-.14.94-.43 1.33-.28.38-.68.69-1.19.91-.5.22-1.08.33-1.73.33" class="path path" data-id="43" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1100 1550-5.5 4 12.5 19 5-4z" class="path land path" data-id="42" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1088.5 1618-26.5-42.5 33-21.5 27 42-30 19z" class="path building path" data-id="42" style="color:#7ab2d3;"></path><path d="M1084.58 1586.47v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.18 1.53v-1.98l.04-.64v-6.11h1.73v8.73zm4.08 0v-1.33l3.11-2.88q.39-.375.66-.69c.18-.2.32-.4.41-.6.1-.2.15-.41.15-.64q0-.39-.18-.66c-.12-.19-.27-.33-.48-.43-.2-.1-.43-.15-.68-.15-.27 0-.5.05-.7.16-.2.1-.35.26-.46.46s-.16.44-.16.72h-1.76c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97 1-.35 1.61-.35c.63 0 1.17.11 1.63.34.47.21.83.52 1.09.91s.39.83.39 1.34c0 .33-.07.65-.2.97s-.36.68-.69 1.07c-.32.39-.79.86-1.39 1.4l-1.27 1.25v.06h3.66v1.51z" class="path path" data-id="42" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1116 1550.5 36-25.5 37 56-37 23.5z" class="path building path" data-id="41" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1119.5 1540.5 14-11.5 4 6-14.5 10.5z" class="path land path" data-id="41" style="color:#7ab2d3;"></path><path d="M1145.08 1565.97v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.18 1.53v-1.98l.04-.64v-6.11h1.73v8.73zm7.76-8.73v8.73h-1.85v-6.98h-.05l-2 1.26v-1.64l2.17-1.37z" class="path path" data-id="41" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1239.5 1594.5-32 15-23 17 9 14.5 4.5-3.5 4 13 56.5-13z" class="path land path" data-id="40" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1167.5 1637-15.5-32.5 37.5-22.5 16 27z" class="path building path" data-id="40" style="color:#7ab2d3;"></path><path d="M1174.08 1608.97v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.18 1.53v-1.98l.04-.64v-6.11h1.73v8.73zm7.5.19q-1.095 0-1.89-.54c-.53-.36-.93-.88-1.21-1.55-.29-.68-.42-1.5-.42-2.46q0-1.425.42-2.43c.28-.67.69-1.18 1.21-1.53.53-.35 1.16-.53 1.89-.53s1.36.18 1.89.53c.52.35.93.87 1.21 1.54.29.66.43 1.47.43 2.42 0 .96-.15 1.78-.43 2.46s-.68 1.2-1.21 1.55c-.53.36-1.15.54-1.89.54m0-1.53q.75 0 1.2-.75c.3-.51.45-1.26.44-2.27 0-.66-.07-1.21-.2-1.65q-.21-.66-.57-.99-.375-.33-.87-.33c-.5 0-.89.24-1.19.74s-.45 1.24-.45 2.23c0 .68.06 1.24.2 1.68.13.45.33.79.57 1.01q.375.33.87.33" class="path path" data-id="40" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1260 1642-19.5-48.5 32-13 20 50.5z" class="path building path" data-id="39" style="color:#7ab2d3;"></path><path d="M1263.93 1618.12c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m7.85-8.97c.44 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.51.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.52.66-.23.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37q-.6-.36-.96-.99c-.23-.43-.34-.91-.34-1.45-.01-.59.13-1.11.4-1.56q.405-.69 1.14-1.08c.49-.26 1.06-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.13.23-.19.48-.18.77 0 .28.06.54.18.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12.19-.08.34-.19.48-.33.13-.14.24-.3.32-.49.07-.18.11-.38.11-.59 0-.27-.07-.52-.2-.75a1.425 1.425 0 0 0-1.28-.77" class="path path" data-id="39" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1296 1633.5-3-3.5 24.5-8.5 4 6.5zM1277 1588l-4.5-9 21-10.5 6 12.5z" class="path land path" data-id="38" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1293.5 1629.5-17-40 23-8.5 17 40z" class="path building path" data-id="38" style="color:#7ab2d3;"></path><path d="M1293.93 1612.12c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m7.94 0c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15" class="path path" data-id="38" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1205.5 1515.5 18.5 20.5 34 49-17 8-32 13 35.5-25-29.5-37-35 18.5-14-18.5z" class="path land path" data-id="37" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1181.5 1563.5 34.5-20 27.5 37.5-35 23z" class="path building path" data-id="37" style="color:#7ab2d3;"></path><path d="M1208.43 1577.62c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m5.03-.12 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2z" class="path path" data-id="37" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1165.5 1543-18-30 33.5-21 18.5 28z" class="path building path" data-id="35" style="color:#7ab2d3;"></path><path d="M1171.43 1521.62c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m7.88 0c-.61 0-1.14-.11-1.62-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.95.31.28 0 .54-.06.76-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.23.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07s-1.06.39-1.7.39" class="path path" data-id="35" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1217 1516.5-31.5-34 12.5-10.5 43 56.5-7.5 6-14.5-19.5z" class="path land path" data-id="34" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1241.5 1529-48-63 37-31.5 46.5 67.5z" class="path building path" data-id="34" style="color:#7ab2d3;"></path><path d="M1231.43 1486.62c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m4.56-1.65v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.18 1.53v-1.98l.04-.64v-6.11h1.73v8.73z" class="path path" data-id="34" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1270.5 1396-13 11 36.5 54.5 11-12z" class="path land path" data-id="33" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1257.5 1406-28.5 20.5 52.5 79.5 27.5-22z" class="path building path" data-id="33" style="color:#7ab2d3;"></path><path d="M1264.43 1459.62c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m7.91 0c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.23-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33" class="path path" data-id="33" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1272 1507-30 22 26.5 32.5 28-21z" class="path building path" data-id="32" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1279 1502-7 5 25 33 3.5-10 9-45.5-27 22.5z" class="path land path" data-id="32" style="color:#7ab2d3;"></path><path d="M1267.43 1538.62c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m4.69-.12v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51z" class="path path" data-id="32" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1326 1528-10-10-11.19 30m0 0-1.31 3.5 39 77.5 6-3-24.5-46 2-2.5z" class="path land path" data-id="31" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1306 1549 19.5-17 26 29 23-16 31 57-31 17-25.5 7-23.5-45 2.5-3z" class="path building path" data-id="31" style="color:#7ab2d3;"></path><path d="M1358.93 1587.12c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m8.48-8.85v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37z" class="path path" data-id="31" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1387 1569 10.5-10.5 15.5 13 15.5 13.5-23 17z" class="path land path" data-id="30" style="color:#7ab2d3;"></path><path d="M1405.93 1590.12c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33m8.11.07q-1.095 0-1.89-.54c-.53-.36-.93-.88-1.22-1.55-.28-.68-.42-1.5-.41-2.46q0-1.425.42-2.43c.28-.67.69-1.18 1.21-1.53.53-.35 1.16-.53 1.89-.53s1.36.18 1.88.53c.53.35.94.87 1.22 1.54.29.66.43 1.47.42 2.42q0 1.44-.42 2.46c-.28.68-.69 1.2-1.21 1.55q-.795.54-1.89.54m0-1.53q.75 0 1.2-.75c.3-.51.44-1.26.44-2.27 0-.66-.07-1.21-.2-1.65-.14-.44-.33-.77-.58-.99-.24-.22-.53-.33-.86-.33-.5 0-.9.24-1.19.74-.3.5-.45 1.24-.46 2.23 0 .68.07 1.24.2 1.68.14.45.33.79.58 1.01q.375.33.87.33" class="path path" data-id="30" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1470 1539-29.5-25.5-43 44.5 31 27z" class="path building path" data-id="29" style="color:#7ab2d3;"></path><path d="M1426.71 1554v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51zm10.71-8.85c.45 0 .88.08 1.3.23s.79.39 1.12.72.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.5.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.53.66-.22.18-.47.32-.76.42-.28.1-.58.15-.91.15-.51 0-.97-.12-1.37-.37a2.6 2.6 0 0 1-.96-.99c-.23-.43-.35-.91-.35-1.45 0-.59.14-1.11.41-1.56q.405-.69 1.14-1.08t1.71-.39m.02 1.45c-.29 0-.55.07-.77.21-.22.13-.4.32-.53.55s-.19.48-.19.77c0 .28.07.54.19.77.13.23.3.41.52.55.22.13.48.2.76.2a1.45 1.45 0 0 0 1.06-.45c.14-.14.25-.3.32-.49a1.503 1.503 0 0 0-.08-1.34c-.12-.24-.3-.42-.53-.56q-.33-.21-.75-.21" class="path path" data-id="29" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1437.5 1499 30.5-27 32.5 33.5-26 28z" class="path building path" data-id="27" style="color:#7ab2d3;"></path><path d="M1464.21 1506.5v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51zm7.9 0 3.62-7.16v-.06h-4.22v-1.51h6.13v1.53l-3.62 7.2z" class="path path" data-id="27" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1403 1468 31.5-30 33.5 34-30.5 26.5z" class="path building path" data-id="26" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1444.5 1437-3-5-7.5 6.5 5 3z" class="path land path" data-id="26" style="color:#7ab2d3;"></path><path d="M1429.21 1472.5v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51zm10.91.12c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.2-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.51-.26-.84-.26-.57 0-1 .25-1.3.75-.29.49-.44 1.16-.44 2.01h.06c.13-.26.3-.48.52-.66a2.698 2.698 0 0 1 1.67-.57 2.6 2.6 0 0 1 2.34 1.36c.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.22-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55a1.4 1.4 0 0 0-.76-.21 1.45 1.45 0 0 0-1.07.46c-.13.14-.23.3-.31.49a1.55 1.55 0 0 0 .08 1.36c.13.24.3.42.52.56.23.14.48.21.77.21" class="path path" data-id="26" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1401.5 1435.5 31.5-24 8 20-38.5 35.5 3.5 4-3.5 3.5-6.5-7.5-2.5 2-9.5-9 22-18.5z" class="path land path" data-id="25" style="color:#7ab2d3;"></path><path d="M1413.21 1440.5v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51zm10.74.12c-.6 0-1.14-.11-1.61-.33s-.84-.53-1.11-.92c-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19s.4-.31.52-.54c.13-.24.2-.5.2-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.51.05-.75.16-.24.1-.42.25-.56.43l-1.64-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.65-.21 1.04-.21c.52 0 .99.12 1.4.37.42.25.74.58.98 1.02.24.43.36.92.35 1.48a2.872 2.872 0 0 1-1.55 2.64q-.735.39-1.71.39" class="path path" data-id="25" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1394 1467-46.5 44.5 26.5 33.5 13.5 24 10.5-11-11.5-10.5 16.5-17.5 4 2.5 4.5-3.5 7 6 26.5-28.5-38-34.5-5 5z" class="path land path" data-id="24" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1387.5 1547.5 10.5 10 19.5-21.5-6-5-4.5 2.5-3.5-2.5zM1360.5 1510l-2-3.5 37.5-36.5 27.5 30-21.5 21-8 9-7.5-6.5-16.5 12-14.5-22zM1348 1512l-21.5 16.5 25.5 29.5 20.5-14z" class="path building path" data-id="24" style="color:#7ab2d3;"></path><path d="M1385.21 1506.5v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51zm7.24-1.53v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.19 1.53v-1.98l.03-.64v-6.11h1.73v8.73z" class="path path" data-id="24" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1314.5 1448.5 5.5 5.5 35-27.5-7.5-7.5z" class="path land path" data-id="23" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1354 1426.5-43.5 35 38 50.5 42.5-43z" class="path building path" data-id="23" style="color:#7ab2d3;"></path><path d="M1343.21 1471.5v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51zm10.78.12c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62s-.32-.33-.56-.43-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .52-.04.74-.14.21-.1.38-.23.5-.4.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57-.1-.17-.25-.3-.43-.39-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.5.38-.12.17-.19.36-.2.58h-1.76c0-.5.15-.95.43-1.33.27-.38.65-.68 1.12-.9.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89.38.78.38 1.24c0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91s-1.08.33-1.74.33" class="path path" data-id="23" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="M1379.5 1451.5 1351 1416l28.5-22.5 28 37z" class="path building path" data-id="22" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1362.5 1397 4.5 5 13.5-9-4-6.5z" class="path land path" data-id="22" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1405 1441.5-4.5-5.5-22.5 16 6 7.5z" class="path land path" data-id="22" style="color:#7ab2d3;"></path><path d="M1372.21 1427.5v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51zm7.56 0v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6s.14-.41.14-.64c0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.7.16-.19.1-.35.26-.46.46-.1.2-.16.44-.16.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.46.21.83.52 1.08.91.26.39.39.83.39 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51z" class="path path" data-id="22" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1379 1388.5 24-18.5 30 41-24.5 19z" class="path building path" data-id="21" style="color:#7ab2d3;"></path><path d="M1400.21 1405.5v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51zm11.35-8.73v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37z" class="path path" data-id="21" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1279.5 1394.5 6.5-4 28.5 37-6 6.5z" class="path land path" data-id="19" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1314 1428-28-37.5 33.5-25 29.5 37.5z" class="path building path" data-id="19" style="color:#7ab2d3;"></path><path d="M1315 1394.77v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm5.24-.12c.45 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.16.58-.4 1.07-.71 1.48-.31.4-.68.71-1.12.92s-.93.32-1.47.32c-.58 0-1.09-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.23.17.51.26.84.26.57 0 1-.25 1.3-.74q.435-.75.45-2.04h-.06c-.14.25-.31.47-.53.66-.22.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37-.4-.24-.72-.57-.95-.99-.24-.43-.35-.91-.35-1.45-.01-.59.13-1.11.4-1.56q.405-.69 1.14-1.08c.49-.26 1.07-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.12.23-.19.48-.18.77 0 .28.06.54.18.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12.19-.08.34-.19.48-.33.13-.14.24-.3.32-.49a1.605 1.605 0 0 0-.08-1.34c-.13-.24-.31-.42-.53-.56-.23-.14-.48-.21-.76-.21" class="path path" data-id="19" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1345.5 1346.5 4 4 27.5-32-11-6-13.5 16 6.5 6.5z" class="path land path" data-id="18" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1376.5 1375.5-27.5-25 27.5-32 7.5-8 15.5-16 28.5 29-22 21z" class="path building path" data-id="18" style="color:#7ab2d3;"></path><path d="M1386 1328.77v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm5.33 8.85c-.65 0-1.24-.11-1.75-.32-.51-.22-.9-.51-1.19-.88s-.44-.8-.44-1.27c0-.36.08-.7.25-1 .17-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.27-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.4.75.4 1.2q0 .72-.45 1.26c-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.52.46-.13.19-.19.41-.19.67 0 .24.06.46.18.65s.3.34.52.45c.22.1.47.15.76.15m0-3.89q.375 0 .66-.15c.19-.1.34-.24.44-.42.11-.17.17-.38.17-.61 0-.22-.06-.42-.17-.59-.1-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41a1.203 1.203 0 0 0 0 1.2q.165.27.45.42c.19.1.41.15.65.15" class="path path" data-id="18" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1418 1313 6-6 11.5 6-7 10.5z" class="path land path" data-id="17" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1410.5 1298 20-31 35 19.5-20 33.5z" class="path building path" data-id="17" style="color:#7ab2d3;"></path><path d="M1434.5 1289.27v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm2.42 8.73 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2z" class="path path" data-id="17" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1492 1260.5-11-6-11 24 7 4.5z" class="path land path" data-id="16" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1445.5 1234-15 32 35.5 21 14.5-32.5-34-19.5" class="path building path" data-id="16" style="color:#7ab2d3;"></path><path d="M1452.5 1257.27v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm5.43 8.85c-.45 0-.88-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.69-.71 1.12-.92s.92-.32 1.46-.32c.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.44.82.49 1.3h-1.82c-.07-.3-.22-.54-.44-.72-.23-.17-.51-.26-.85-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.31-.48.53-.66s.48-.32.76-.42c.29-.1.59-.15.91-.15.51 0 .97.12 1.38.37.4.24.72.57.95.99.24.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57s-.66.82-1.15 1.09c-.49.25-1.05.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78c-.12-.23-.3-.42-.52-.55-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.31.42.53.56s.48.21.76.21" class="path path" data-id="16" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="M1486 1203v8l8 5-13 38.5 10.5 5.5 13.5-39-9-5 1.5-10z" class="path land path" data-id="15" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1445.5 1233.5 16.5-34 32.5 17-13.5 37z" class="path building path" data-id="15" style="color:#7ab2d3;"></path><path d="M1469.5 1222.27v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm5.27 8.85c-.61 0-1.14-.11-1.61-.33s-.85-.53-1.12-.92c-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.95.31.29 0 .54-.06.76-.19.23-.13.4-.31.53-.54.13-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.12-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.23.1-.42.25-.55.43l-1.64-.29.41-4.61h5.33v1.51h-3.81l-.23 2.19h.06q.225-.33.69-.54c.31-.14.66-.21 1.04-.21.53 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.36 1.48 0 .59-.14 1.11-.41 1.57-.28.45-.66.81-1.15 1.07s-1.06.39-1.7.39" class="path path" data-id="15" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1476 1304.5 4.5 4 18.5-27 18 9.5 8.5-13-24-15-11.5 17z" class="path land path" data-id="14" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1517 1291 8.5-13.5 36 22-26 44-55-35 18.5-27.5z" class="path building path" data-id="14" style="color:#7ab2d3;"></path><path d="M1522.5 1305.27v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm1.95 7.2v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.19 1.53v-1.98l.03-.64v-6.11h1.73v8.73z" class="path path" data-id="14" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1531 1356-50.5-46.5 54 34z" class="path land path" data-id="13" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1479 1367.5-30.5-33 27.5-29.5 33 31.5z" class="path building path" data-id="13" style="color:#7ab2d3;"></path><path d="M1477.5 1331.27v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm5.3 8.85c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.22.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.23-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14.22-.1.38-.23.5-.4.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.68.13c-.21.09-.38.22-.5.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07c.65.08 1.13.3 1.47.66.34.37.51.82.5 1.36.01.5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33" class="path path" data-id="13" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1438.5 1345 10-10.5 30.5 33-13 8z" class="path land path" data-id="12" style="color:#7ab2d3;"></path><path d="M1456.5 1352.27v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm2.08 8.73v-1.33l3.11-2.88q.39-.375.66-.69c.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.05-.48-.17-.66-.12-.19-.28-.33-.48-.43s-.43-.15-.68-.15c-.27 0-.5.05-.7.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91s.39.83.39 1.34c0 .33-.07.65-.2.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.27 1.25v.06h3.66v1.51z" class="path path" data-id="12" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1415 1364.5 23.5-19 22 24-23 27.5z" class="path building path" data-id="11" style="color:#7ab2d3;"></path><path d="M1438 1366.77v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm5.88 0v8.73h-1.85v-6.98h-.05l-2 1.26v-1.64l2.16-1.37z" class="path path" data-id="11" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1469 1441-8.5-14 27-22.5 9 12.5z" class="path land path" data-id="10" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1459.5 1426.5-22-30 23-26.5 25.5 34.5z" class="path building path" data-id="10" style="color:#7ab2d3;"></path><path d="M1457 1392.77v8.73h-1.84v-6.98h-.05l-2 1.26v-1.64l2.16-1.37zm5.5 8.92q-1.095 0-1.89-.54c-.53-.36-.93-.88-1.22-1.55-.28-.68-.42-1.5-.41-2.46q0-1.425.42-2.43c.28-.67.69-1.18 1.21-1.53.53-.35 1.16-.53 1.89-.53s1.36.18 1.88.53c.53.35.94.87 1.22 1.54.29.66.43 1.47.42 2.42q0 1.44-.42 2.46c-.28.68-.69 1.2-1.21 1.55q-.795.54-1.89.54m0-1.53q.75 0 1.2-.75c.3-.51.44-1.26.44-2.27 0-.66-.07-1.21-.2-1.65q-.21-.66-.57-.99-.375-.33-.87-.33c-.5 0-.89.24-1.19.74s-.45 1.24-.45 2.23c0 .68.06 1.24.2 1.68.13.45.32.79.57 1.01q.375.33.87.33" class="path path" data-id="10" style="color:#000;"></path></g><g fill="transparent" class="group"><g class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1531 1356-9.5 13.5-9.5-7.5-18.5 19-2-1.5-13.5 13.5-13-16.5 14-9 30-31z" class="path land path" data-id="9" style="color:#7ab2d3;"></path></g><path d="M1499.87 1357.15c.44 0 .88.08 1.29.23.42.15.79.39 1.12.72s.59.77.78 1.31.29 1.21.29 2c0 .74-.08 1.4-.25 1.99-.17.58-.4 1.07-.71 1.48-.31.4-.69.71-1.12.92-.44.21-.93.32-1.47.32-.58 0-1.1-.11-1.54-.34-.45-.22-.81-.53-1.08-.92s-.43-.83-.49-1.32h1.82c.07.32.22.56.45.74.22.17.51.26.84.26.57 0 1-.25 1.3-.74.29-.5.44-1.18.44-2.04h-.06c-.13.25-.3.47-.52.66-.23.18-.48.32-.77.42q-.42.15-.9.15c-.52 0-.98-.12-1.38-.37q-.6-.36-.96-.99c-.23-.43-.34-.91-.34-1.45-.01-.59.13-1.11.4-1.56q.405-.69 1.14-1.08c.49-.26 1.06-.39 1.72-.39m.01 1.45a1.474 1.474 0 0 0-1.3.76c-.13.23-.19.48-.19.77 0 .28.07.54.19.77.13.23.3.41.52.55.22.13.48.2.76.2.21 0 .41-.04.59-.12q.27-.12.48-.33c.13-.14.24-.3.32-.49.07-.18.11-.38.11-.59 0-.27-.07-.52-.2-.75a1.425 1.425 0 0 0-1.28-.77" class="path path" data-id="9" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1478.5 1392.5 13-13 24.5 23.5-19 14z" class="path land path" data-id="8" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" d="m1535.5 1381-23.5-19-18.5 19 22.5 22z" class="path building path" data-id="8" style="color:#7ab2d3;"></path><path d="M1513.96 1387.12c-.65 0-1.24-.11-1.75-.32-.51-.22-.91-.51-1.2-.88s-.43-.8-.43-1.27c0-.36.08-.7.25-1 .16-.31.39-.56.68-.76q.435-.315.96-.39v-.06a1.953 1.953 0 0 1-1.57-1.94c0-.45.14-.85.4-1.2.26-.36.63-.64 1.09-.84s.99-.31 1.57-.31c.59 0 1.12.11 1.58.31s.82.48 1.09.84c.26.35.39.75.4 1.2-.01.48-.15.9-.45 1.26-.29.36-.66.58-1.12.68v.06c.35.05.67.18.95.39.29.2.51.45.68.76.17.3.26.64.26 1 0 .47-.15.9-.44 1.27s-.69.66-1.2.88c-.51.21-1.09.32-1.75.32m0-1.36c.3 0 .55-.05.77-.15q.33-.165.51-.45c.13-.19.19-.41.19-.65 0-.26-.06-.48-.19-.67-.13-.2-.3-.35-.52-.46-.22-.12-.47-.17-.76-.17-.28 0-.53.05-.75.17-.22.11-.4.26-.53.46-.12.19-.18.41-.18.67 0 .24.06.46.18.65s.29.34.52.45c.22.1.47.15.76.15m0-3.89c.25 0 .46-.05.66-.15.19-.1.33-.24.44-.42.11-.17.16-.38.16-.61 0-.22-.05-.42-.16-.59-.11-.18-.25-.31-.44-.41q-.285-.15-.66-.15c-.24 0-.46.05-.65.15s-.34.23-.45.41c-.11.17-.16.37-.16.59 0 .23.06.44.16.61q.165.27.45.42c.19.1.41.15.65.15" class="path path" data-id="8" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" d="m1571 1200-6.5-23.5 18.5 5.5 23 123 3 9 15 10 19.5 20.5-13-3.5h-15l-42-28 4.5-15 2-15 7.5 1-4.5-19.5-5-9.5-2-6.5z" class="path land path" data-id="7" style="color:#7ab2d3;"></path><path d="m1584.05 1252 3.62-7.16v-.06h-4.21v-1.51h6.12v1.53l-3.62 7.2z" class="path path" data-id="7" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" d="m1538 1340 21-35 54.5 35 2.5 3.5-11 7-14.5 23z" class="path building path" data-id="6" style="color:#7ab2d3;"></path><path d="M1573.06 1343.12c-.45 0-.89-.08-1.3-.23-.42-.14-.79-.38-1.12-.72q-.495-.495-.78-1.32c-.19-.55-.29-1.22-.29-2.02 0-.73.09-1.39.25-1.96.17-.58.41-1.07.72-1.48.31-.4.68-.71 1.12-.92.43-.21.92-.32 1.46-.32.58 0 1.1.12 1.54.34.45.23.81.53 1.08.92s.43.82.49 1.3h-1.82q-.105-.45-.45-.72c-.22-.17-.5-.26-.84-.26q-.855 0-1.29.75-.45.735-.45 2.01h.06c.13-.26.3-.48.53-.66.22-.18.47-.32.76-.42s.59-.15.91-.15c.51 0 .97.12 1.38.37.4.24.72.57.95.99.23.43.35.91.35 1.46 0 .59-.14 1.11-.41 1.57-.28.46-.66.82-1.15 1.09-.49.25-1.06.38-1.7.38m-.01-1.45c.28 0 .54-.07.76-.2.23-.14.4-.33.53-.56s.19-.49.19-.78-.06-.55-.19-.78-.3-.42-.52-.55c-.22-.14-.47-.21-.76-.21-.21 0-.41.04-.59.12s-.34.19-.47.34c-.14.14-.24.3-.32.49-.08.18-.11.38-.11.59 0 .28.06.54.19.77.13.24.3.42.53.56.22.14.47.21.76.21" class="path path" data-id="6" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1516.5 1414 35.5-39.5 4.5 10 3 6-1 9.5-21 33.5z" class="path building path" data-id="5" style="color:#7ab2d3;"></path><path d="M1539.39 1411.62c-.6 0-1.13-.11-1.61-.33-.46-.22-.84-.53-1.11-.92-.28-.39-.42-.83-.43-1.34h1.79c.02.34.16.61.42.83.27.21.58.31.94.31.29 0 .55-.06.77-.19.23-.13.4-.31.53-.54.12-.24.19-.5.19-.8 0-.31-.07-.58-.2-.81-.13-.24-.3-.42-.53-.55s-.49-.2-.78-.2c-.26 0-.5.05-.75.16-.24.1-.42.25-.55.43l-1.65-.29.42-4.61h5.33v1.51h-3.81l-.23 2.19h.05c.16-.22.39-.4.7-.54s.66-.21 1.04-.21c.52 0 .99.12 1.41.37.41.25.73.58.97 1.02.24.43.36.92.35 1.48.01.59-.13 1.11-.4 1.57-.28.45-.66.81-1.15 1.07q-.735.39-1.71.39" class="path path" data-id="5" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-width="2" d="m1474 1461.5 20-21.5 20.5 21 5-5 10 10.5-25.5 25z" class="path building path" data-id="4" style="color:#7ab2d3;"></path><path d="M1496.08 1470.97v-1.46l3.64-5.74h1.25v2.01h-.74l-2.3 3.64v.07h5.18v1.48zm4.18 1.53v-1.98l.04-.64v-6.11h1.73v8.73z" class="path path" data-id="4" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1641.5 1423.5-10-7.5 22.5-37z" class="path land path" data-id="3" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-width="2" d="m1540 1453.5 51-80 13.5-23 12-7.5 13.5-2.5 14 5.5 9 11.5 3.5 16-25 42.5 12.5 10.5-21 35-16.5-12-24.5 36z" class="path building path" data-id="3" style="color:#7ab2d3;"></path><path stroke="#7AB2D3" stroke-dasharray="2 2" stroke-width="2" d="m1582.5 1485.5 24.5-36 10 9-27.5 21.5-3.5 5.5z" class="path land path" data-id="2" style="color:#7ab2d3;"></path><path d="M1599.43 1418.62c-.63 0-1.2-.11-1.7-.33-.49-.22-.88-.52-1.17-.91-.28-.39-.43-.84-.44-1.35h1.86c.01.22.08.4.21.57.13.15.3.28.52.37.21.08.46.13.73.13.28 0 .53-.05.74-.15.22-.1.39-.24.51-.41.12-.18.18-.38.18-.61 0-.24-.06-.44-.19-.62a1.24 1.24 0 0 0-.56-.43c-.24-.1-.52-.15-.85-.15h-.81v-1.36h.81c.28 0 .53-.04.74-.14s.38-.23.5-.4c.12-.18.18-.38.18-.61 0-.22-.05-.41-.16-.57a.96.96 0 0 0-.43-.39c-.19-.1-.4-.14-.65-.14s-.48.04-.69.13c-.2.09-.37.22-.49.38-.13.17-.2.36-.2.58h-1.77c.01-.5.15-.95.43-1.33s.65-.68 1.12-.9c.48-.22 1.01-.33 1.61-.33s1.13.11 1.58.33.8.52 1.05.89c.26.37.38.78.38 1.24 0 .49-.15.9-.46 1.23-.3.32-.7.53-1.19.62v.07q.96.12 1.47.66c.34.37.5.82.5 1.36 0 .5-.14.94-.43 1.33-.29.38-.68.69-1.19.91q-.75.33-1.74.33" class="path path" data-id="3" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#CFCFCF" stroke-dasharray="2 2" d="m1560 1558.5-5.5-16-49-50-4.5 14-31.5 32-42.5 48-23 14.5-30 17.5-24.5 8-8.5 2-21.5-2-23.5 7.5-4-3.5-32.5 12-2-5-55 13.5-5-13.5-4.5 5-9.5-16-16 11-16-33-36-54-15.5-1 12 18.5-6.5 3 15 24 3.5-2 7.5 8 5.5 9 13 26-13 6.5 6 8.5 7-3.5 3 12 21.5-4.5v2.5l7.5-2.5 1.5 9.5 40-3.5h11.5l2.5 3.5 17-3.5 5-1.5v-4.5l45.5-9.5 18-3h30.5l13-2 24.5-13.5 21.5-16.5 6.5-6.5 42.5-30.5 10 8.5 28.5 29.5 11.5-11 14.5-13.5 8.5-6 11 13 9-17.5 10.5-4 3.5-5.5 23-7.5 20 9.5 16 19 16.5 12.5 19.5 21 4-27.5-26-12-30-23.5-24-19z" class="path street path" data-id="2" style="color:#cfcfcf;"></path><path stroke="#CFCFCF" stroke-dasharray="2 2" d="m1299.5 1580.5 20.5 46 21.5 1.5-9.5-20-27.5-55 11-35 4-13 10-14-20.5-30-4.5-10.5-10.5 10.5 16.5 22-9 44v9l-5 5-28.5 21.5-27.5-33-6.5 4.5-15-18-2.5 2-31.5-35.5-4.5 9 19.5 26.5 5.5-3.5 18.5 21.5 34 48 13.5-5 22.5-11zM1364 697.5l-13-17.5-18.5 7.5L1353 730l29 34 23 30v16.5l15-4 10 45.5-8 9.5 2.5 34 7.5 24 9 27.5 8 12.5 3 37.5v29l13.5 91.5 3 11 6 18 5.5 8.5 12 30.5-12.5 4.5 2.5 7 4.5 6.5 10 1.5v12l9.5 4.5-14 38.5-15.5 23.5-8-5-3 7.5-21 35-10-6.5-5.5 6.5v3.5l-27 26.5 12.5 13 23-20 9.5-10 27.5-29 3.5-8.5 14-21 8.5-13.5 16 11 1.5-23v-13l-6.5-36-8-30-11.5-33-14-38.5 8-4-6-9-4-14h4l-4-20.5-10-47-2-15.5-3.5-25.5-4-20-10-32.5-7-4-4-16L1483 875l1.5-.5-9-26.5-12-26.5-9-18.5-12.5-16.5-18-20.5-19.5-18-23.5-27.5z" class="path street path" data-id="2" style="color:#cfcfcf;"></path><path stroke="#CFCFCF" stroke-dasharray="2 2" d="m1469.5 1472 31.5 33 4-11.5-32.5-31 78-86.5v-27l-13-9-6.5 14.5-8.5 14.5 13.5 12-20 23-47.5 37-32-43.5-22.5-32.5-13-14-24.5 26-31-29.5-26 16 14.5 17 16.5 20.5v2l-42.5 32.5-30.5-41.5-7 1.5 18.5 27 17.5 26-1.5 2 4.5 9.5 8-5.5-4.5-6 9-8.5 27-24 16.5-13-4-5.5 15-12.5 1.5 3 25.5-19 31 43 12 25.5-6 4.5z" class="path street path" data-id="2" style="color:#cfcfcf;"></path><path stroke="#CFCFCF" stroke-dasharray="2 2" d="m1288.5 1379.26-2.5 1.74 2.5 5-10.5 6.5-5.5 4.5-3-2-43.5 31 3.5 7-37.5 32 4 8-11.5 9.5-5.5 9-33.5 22 5.5 10-13.5 9.5-4.5-5.5-14 13.5 4.5 4.5-7.5 3.5h-15.5l-39.5 25-2.5-5.5-32 17.5-12.5 7-17 11 4 5-27.5 16-8 14.5v15.5l-56-4.5h-27l-20 9.5-6 8h-40l20.5-8 19-11.5 10.5-1.5 16-7.5 44.5-2 4 2 20.5-10.5 34.5-22.5-4.5-5.5 30-20.5 34-15.5 13-4 35-18 12.5-7.5 17.5-14 29.5-27.5 41-49.5 7-14.5 32-23 28.5-19 6-8.74 5-5.26 30-17 8 2.5 21-17 4-9-4-8.5 14-12.5 16-3 30.5-23 33-33 11-24.5 3-25v-10.5l17.5-3 24 8.5 6 5-2 7-24.5-12-16 34.5-15.5 33-19.5 30 13 8.5-4.5 7.5-19-18.5-22 23-11-4.5-15 15.5 7.5 8-12.5 11-26.5 16.5m-30.5 15.76 14-9.76 3 4.5z" class="path street path" data-id="2" style="color:#cfcfcf;"></path><path d="M1502.21 1557.5v-1.33l3.1-2.88c.27-.25.49-.48.67-.69.18-.2.32-.4.41-.6.1-.2.14-.41.14-.64 0-.26-.06-.48-.17-.66-.12-.19-.28-.33-.48-.43q-.3-.15-.69-.15c-.26 0-.5.05-.69.16-.2.1-.36.26-.46.46-.11.2-.17.44-.17.72h-1.75c0-.57.13-1.07.39-1.49s.62-.74 1.09-.97c.46-.23 1-.35 1.61-.35.62 0 1.17.11 1.63.34.47.21.83.52 1.09.91.25.39.38.83.38 1.34 0 .33-.06.65-.19.97s-.36.68-.69 1.07-.79.86-1.39 1.4l-1.28 1.25v.06h3.67v1.51z" class="path path" data-id="2" style="color:#000;"></path></g><g fill="transparent" class="group"><path stroke="#CFCFCF" stroke-dasharray="2 2" stroke-width="2" d="m1115 1374.5-1-22-12.5-11.5-5.5 5.5-34-32.5 29-37-31.5 16-14.5 10 23 36-6.5 3.5 2.5 3 7 5.5 8.5 11 15-11z" class="path street path" data-id="1" style="color:#cfcfcf;"></path><path stroke="#CFCFCF" stroke-dasharray="2 2" stroke-width="2" d="m1073.5 1450.5-10 7.5-56.5 39 2 6.5-20 13 5 7-26 18 8.5 8.5 21.5-17.5-4-4.5 8-8.5 5 4 9-7 24 33.5 5 15.5 12.5-5.5-36-59.5 29.5-22.5 32.5-17.5-4.5-6.5 12-8.5-5-6 15-11.5-5.5-3.5 7-9 7 4.5 24-27.5 14.5 15.5 8.5-10.5 38 48 7.5-14.5-29.5-38.5-16-14.5-13 12-17.5-21.5-6.5-9 27.5-28.5 29-23.5-5.5-8.5-24.5 17.5-29-38.5 19-14.5-4-9.5 41.5-49 13.5-21.5 9-22.5-3-113-7-35 2-16-6-1.5 4-33.5v-6l15.5 6 47.5 31.5 9.5 3.5 41 41 28 43 23.5 59.5-17 40-11.5 29.5 15 20 10.5 11.5-27 22 4.5 9 2.5 3.5-5.5 4-1.5 4.5 25 29.5 7-2.5 10.5-1.5-28-37.5 9-7-2.5-3.5 21.5-15 26-26 22-31-14-5-14 19.5-18.5 26-19-11-8.5-8-3.5-11.5 25-36 7-27.5-4.5-3.5-5-23.5-13.5-35-39-60-32-29-26.5-13-38-35-18-10.5-96-18.5-29.5-20-32-6-24 13 60.5 31.5 21.5 5.5v5l83.5 18.5-5 29.5 7 67.5 5 51.5 5.5 10v39.5l-15.5 33-21.5 21.5 5 4.5-20.5 24-4.5-4-26.5 37.5-3-4-44 22.5 4 4 31.5-16.5 24.5 22.5 23.5 26-25 27.5 1.5 22-16.5 13 5 5-28 20-4-6.5-21 16-3.5-4-26-28 49.5-39-7-5.5-53 27.5-15.5-4-13-10.5-6.5 3.5 47 58 8.5-5 8.5 12h33.5zm0 0-9 10" class="path street path" data-id="1" style="color:#cfcfcf;"></path><path stroke="#CFCFCF" stroke-dasharray="2 2" d="m1299.5 70 15-53 46-16-25 69-6 14-18.5 42-20.5 41.5-57 95.5-60 97.5v7l2.5 2v12l10 29.5 12 21 50 56 38 31 30.5 30.5 27 37.5 7.5 20 12 31 18 29 17 23 22.5 29 40 45.5 20.5 24 18 26 23 40.5 31.5 82.5L1564 968l40 124.5 27 100.5 13.5 61.5 49.5 77 13 25.5-3.5 25.5-9.5 17.5-29.5 60.5-20 13-10.5 11-30 24-48.5 34.5-49.5-51 23.5-25.5-10-10.5 15.5-17 24-39v-9.5l-3.5-8-3-8v-25l37.5 25-50.5 81 42.5 34 36-29 5 3.5 24-37.5-2.5-5 13-47.5-2.5-13-4.5-9.5-8.5-8.5-19-19.5-14-9-5-10V1290l-13.5-70-8.5-37-37-134-21-66-39-107.5-11.5-33.5-13-27.5-7-13-11.5-15-19.5-22-18-16.5-21-24-32.5-44-13.5-30.5-17-44.5-18-27-11-17-70.5-56.5-57.5-37-14.5-4.5-13-24.5-5-57 53.5-90 49-77L1271 141z" class="path street path" data-id="1" style="color:#cfcfcf;"></path><path d="M1320 56.773V65.5h-1.84v-6.976h-.05l-2 1.253v-1.636l2.16-1.368z" class="path path" data-id="1" style="color:#000;"></path></g>',107)]))}const Up={render:Lp};function Ip(i={}){const{bounds:t={minX:-1e3,maxX:1e3,minY:-1e3,maxY:1e3},dragThreshold:e=5}=i,n=be(!1),s=be(0);let a=0,r=0,o=0,l=0,c=null;const h=m=>{n.value=!0,s.value=0;const f=qn.getProperty(c,"x")||0,A=qn.getProperty(c,"y")||0;o=f,l=A,a=m.clientX-o,r=m.clientY-l,c.style.cursor="grabbing"},d=m=>{if(!n.value)return;const f=m.clientX-a-o,A=m.clientY-r-l;s.value+=Math.sqrt(f*f+A*A),o=m.clientX-a,l=m.clientY-r,o=Math.min(Math.max(o,t.minX),t.maxX),l=Math.min(Math.max(l,t.minY),t.maxY),qn.set(c,{x:o,y:l})},u=()=>{n.value=!1,c.style.cursor="grab"};return{initDraggable:m=>{c=m,c.addEventListener("mousedown",h),document.addEventListener("mousemove",d),document.addEventListener("mouseup",u)},cleanupDraggable:()=>{c&&(c.removeEventListener("mousedown",h),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",u),c=null)},isDragged:()=>s.value>e,isDragging:n}}const Np=Vs({__name:"MapSvg",emits:["hover:path","click:path"],setup(i,{emit:t}){const e=t,n=be(null),{initDraggable:s,cleanupDraggable:a,isDragged:r}=Ip();Er(()=>{var h;const c=(h=n.value)==null?void 0:h.$el;c&&s(c)}),br(()=>{a()});function o(c){if(r())return;const h=c.target;h.dataset.id&&e("click:path",h.dataset.id)}function l(c){const h=c.target;h.dataset.id&&e("hover:path",h.dataset.id)}return(c,h)=>(fn(),xi("div",{class:fe(c.$style.mapContainer)},[Ca(Xe(Up),{class:fe(c.$style.map),onClick:o,onMouseover:l,ref_key:"mapRef",ref:n},null,8,["class"])],2))}}),Fp="_mapContainer_r7mo8_1",Op={mapContainer:Fp},zp={$style:Op},Bp=Gs(Np,[["__cssModules",zp]]);/*!
 * ScrollToPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ye,tl,gn,Je,wn,el,vi,Ps,nl=function(){return typeof window<"u"},il=function(){return ye||nl()&&(ye=window.gsap)&&ye.registerPlugin&&ye},sl=function(t){return typeof t=="string"},u1=function(t){return typeof t=="function"},Ki=function(t,e){var n=e==="x"?"Width":"Height",s="scroll"+n,a="client"+n;return t===gn||t===Je||t===wn?Math.max(Je[s],wn[s])-(gn["inner"+n]||Je[a]||wn[a]):t[s]-t["offset"+n]},$i=function(t,e){var n="scroll"+(e==="x"?"Left":"Top");return t===gn&&(t.pageXOffset!=null?n="page"+e.toUpperCase()+"Offset":t=Je[n]!=null?Je:wn),function(){return t[n]}},kp=function(t,e,n,s){if(u1(t)&&(t=t(e,n,s)),typeof t!="object")return sl(t)&&t!=="max"&&t.charAt(1)!=="="?{x:t,y:t}:{y:t};if(t.nodeType)return{y:t,x:t};var a={},r;for(r in t)a[r]=r!=="onAutoKill"&&u1(t[r])?t[r](e,n,s):t[r];return a},al=function(t,e){if(t=el(t)[0],!t||!t.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=t.getBoundingClientRect(),s=!e||e===gn||e===wn,a=s?{top:Je.clientTop-(gn.pageYOffset||Je.scrollTop||wn.scrollTop||0),left:Je.clientLeft-(gn.pageXOffset||Je.scrollLeft||wn.scrollLeft||0)}:e.getBoundingClientRect(),r={x:n.left-a.left,y:n.top-a.top};return!s&&e&&(r.x+=$i(e,"x")(),r.y+=$i(e,"y")()),r},f1=function(t,e,n,s,a){return!isNaN(t)&&typeof t!="object"?parseFloat(t)-a:sl(t)&&t.charAt(1)==="="?parseFloat(t.substr(2))*(t.charAt(0)==="-"?-1:1)+s-a:t==="max"?Ki(e,n)-a:Math.min(Ki(e,n),al(t,e)[n]-a)},Sr=function(){ye=il(),nl()&&ye&&typeof document<"u"&&document.body&&(gn=window,wn=document.body,Je=document.documentElement,el=ye.utils.toArray,ye.config({autoKillThreshold:7}),vi=ye.config(),tl=1)},Ci={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(t){ye=t,Sr()},init:function(t,e,n,s,a){tl||Sr();var r=this,o=ye.getProperty(t,"scrollSnapType");r.isWin=t===gn,r.target=t,r.tween=n,e=kp(e,s,t,a),r.vars=e,r.autoKill=!!("autoKill"in e?e:vi).autoKill,r.getX=$i(t,"x"),r.getY=$i(t,"y"),r.x=r.xPrev=r.getX(),r.y=r.yPrev=r.getY(),Ps||(Ps=ye.core.globals().ScrollTrigger),ye.getProperty(t,"scrollBehavior")==="smooth"&&ye.set(t,{scrollBehavior:"auto"}),o&&o!=="none"&&(r.snap=1,r.snapInline=t.style.scrollSnapType,t.style.scrollSnapType="none"),e.x!=null?(r.add(r,"x",r.x,f1(e.x,t,"x",r.x,e.offsetX||0),s,a),r._props.push("scrollTo_x")):r.skipX=1,e.y!=null?(r.add(r,"y",r.y,f1(e.y,t,"y",r.y,e.offsetY||0),s,a),r._props.push("scrollTo_y")):r.skipY=1},render:function(t,e){for(var n=e._pt,s=e.target,a=e.tween,r=e.autoKill,o=e.xPrev,l=e.yPrev,c=e.isWin,h=e.snap,d=e.snapInline,u,p,g,M,m;n;)n.r(t,n.d),n=n._next;u=c||!e.skipX?e.getX():o,p=c||!e.skipY?e.getY():l,g=p-l,M=u-o,m=vi.autoKillThreshold,e.x<0&&(e.x=0),e.y<0&&(e.y=0),r&&(!e.skipX&&(M>m||M<-m)&&u<Ki(s,"x")&&(e.skipX=1),!e.skipY&&(g>m||g<-m)&&p<Ki(s,"y")&&(e.skipY=1),e.skipX&&e.skipY&&(a.kill(),e.vars.onAutoKill&&e.vars.onAutoKill.apply(a,e.vars.onAutoKillParams||[]))),c?gn.scrollTo(e.skipX?u:e.x,e.skipY?p:e.y):(e.skipY||(s.scrollTop=e.y),e.skipX||(s.scrollLeft=e.x)),h&&(t===1||t===0)&&(p=s.scrollTop,u=s.scrollLeft,d?s.style.scrollSnapType=d:s.style.removeProperty("scroll-snap-type"),s.scrollTop=p+1,s.scrollLeft=u+1,s.scrollTop=p,s.scrollLeft=u),e.xPrev=e.x,e.yPrev=e.y,Ps&&Ps.update()},kill:function(t){var e=t==="scrollTo",n=this._props.indexOf(t);return(e||t==="scrollTo_x")&&(this.skipX=1),(e||t==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Ci.max=Ki;Ci.getOffset=al;Ci.buildGetter=$i;Ci.config=function(i){vi||Sr()||(vi=ye.config());for(var t in i)vi[t]=i[t]};il()&&ye.registerPlugin(Ci);qn.registerPlugin(Ci);function Hp(i){return new Promise(t=>{if(i.scrollTop===0){t();return}qn.to(i,{scrollTo:{y:0},duration:.5,ease:"on1",onComplete:t})})}qn.registerPlugin(ji);ji.create("on1","0.83, 0.00, 0.17, 1.00");ji.create("on2","0.18, 0.83, 0.36, 1.00");ji.create("on3","0.23, 1.00, 0.32, 1.00");ji.create("on4","0.19, 1.00, 0.22, 1.00");const Fi={on1:"on1"},Oi=.8,Vp=Vs({__name:"Modal",props:{rustico:{}},emits:["close:modal","close:overlay"],setup(i,{emit:t}){qn.registerPlugin(Ve);const e=be(!1),n=be(!1),s=be(null),a=be(null),r=be(null),o=be(null),{isOverlayOpen:l,closeOverlay:c}=p1(),h=()=>{e.value=!e.value};return fl(()=>l.value,async d=>{if(d){s.value&&(s.value.style.zIndex="0");const u=Ve.getState(a.value),p=Ve.getState(s.value);e.value=!0,n.value=!0,Jr(()=>{Ve.from(u,{duration:Oi,ease:Fi.on1}),Ve.from(p,{duration:Oi,ease:Fi.on1,onComplete:()=>{}})})}else{r.value&&await Hp(r.value);const u=Ve.getState(a.value),p=Ve.getState(s.value),g=Ve.getState(o.value);e.value=!1,Jr(()=>{Ve.from(u,{duration:Oi,ease:Fi.on1}),Ve.from(g,{duration:Oi,ease:Fi.on1}),Ve.from(p,{duration:Oi,ease:Fi.on1,onComplete:()=>{s.value&&(s.value.style.zIndex="-1"),n.value=!1}})})}}),(d,u)=>{const p=_l;return fn(),xi("section",{class:fe([d.$style.modal,{[d.$style.isOverlayOpen]:Xe(e)}]),onClick:u[2]||(u[2]=(...g)=>Xe(c)&&Xe(c)(...g))},[xe("div",{ref_key:"overlay",ref:s,class:fe(d.$style.overlay),onClick:u[0]||(u[0]=(...g)=>Xe(c)&&Xe(c)(...g))},null,2),xe("div",{ref_key:"box",ref:a,class:fe([d.$style.box,{[d.$style.isExpanded]:Xe(e)}]),onClick:h},[xe("div",{ref_key:"content",ref:r,class:fe(d.$style.content)},[xe("button",{class:fe(d.$style.closeButton),onClick:u[1]||(u[1]=(...g)=>Xe(c)&&Xe(c)(...g)),"aria-label":"Close modal"},u[3]||(u[3]=[xe("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[xe("path",{d:"M18 6L6 18M6 6l12 12",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2),xe("div",{class:fe(d.$style.imageContainer)},[xe("div",{class:fe([d.$style.downArrow,{[d.$style.isHidden]:!d.rustico.description}])},u[4]||(u[4]=[xe("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[xe("path",{d:"M12 5v14m0 0l-7-7m7 7l7-7",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2),d.rustico.assets&&d.rustico.assets.length>0?(fn(),Pa(vl,{key:0,class:fe(d.$style.image),minSize:"large",src:d.rustico.assets[0],alt:`First image of Rustico ${d.rustico.id}`,lazy:!1},null,8,["class","src","alt"])):jr("",!0),xe("div",{ref_key:"title",ref:o,class:fe(d.$style.title)},[xe("h2",{class:fe(d.$style.name)},Ds(d.rustico.title)+" ("+Ds(d.rustico.id)+")",3),xe("p",{class:fe(d.$style.owner)},Ds(d.rustico.owner),3)],2)],2),d.rustico.description?(fn(),Pa(p,{key:0,content:d.rustico.description},null,8,["content"])):jr("",!0)],2)],2)],2)}}}),Gp="_modal_14eja_1",qp="_overlay_14eja_6",Wp="_isOverlayOpen_14eja_16",Xp="_box_14eja_20",Yp="_content_14eja_54",Zp="_closeButton_14eja_61",Kp="_imageContainer_14eja_93",$p="_image_14eja_93",jp="_owner_14eja_120",Jp="_name_14eja_121",Qp="_title_14eja_156",t3="_downArrow_14eja_180",e3="_isHidden_14eja_196",n3={modal:Gp,overlay:qp,isOverlayOpen:Wp,box:Xp,content:Yp,closeButton:Zp,imageContainer:Kp,image:$p,owner:jp,name:Jp,title:Qp,downArrow:t3,"arrow-bounce":"_arrow-bounce_14eja_1",isHidden:e3},i3={$style:n3},s3=Gs(Vp,[["__cssModules",i3]]),a3=`query Rusticos {
  rusticos(pagination: { limit: -1 }) {
    number
    name
    isActive
    owner
    description
    assets {
      caption
      alternativeText
      url
    }
  }
} `;function r3(){const{query:i}=xl(),t=async()=>{const s=await i(a3);return((s==null?void 0:s.rusticos)||[]).sort((a,r)=>parseInt(a.number)-parseInt(r.number))},{data:e,refresh:n}=yl("rusticos",t);return{rusticos:e,refresh:n}}const o3=["title"],l3=Vs({__name:"index",setup(i){const t=be(null),e=be(!1),n=()=>{e.value=!e.value},{isOverlayOpen:s,openOverlay:a,closeOverlay:r}=p1(),{rusticos:o}=r3(),l=()=>{var V;if(!((V=t.value)!=null&&V.$el))return;const E=t.value.$el.querySelector('[data-id="69"]');if(!E)return;const y=t.value.$el.querySelector("svg");if(!y)return;const L=E.getBoundingClientRect(),C=y.getBoundingClientRect(),w=C.width/2,F=C.height/2,b=L.left-C.left+L.width/2,x=L.top-C.top+L.height/2,R=w-b,Y=F-x;gl(async()=>{const{gsap:X}=await import("./BTVdkL6L.js").then($=>$.Z);return{gsap:X}},__vite__mapDeps([0,1]),import.meta.url).then(({gsap:X})=>{X.to(y,{x:R,y:Y,duration:1,ease:"power2.out"})})},c=E=>{E.key==="Escape"&&(r(),M())},h=E=>{s.value&&(E.key==="ArrowRight"?f(1):E.key==="ArrowLeft"&&f(-1))},d=be(!1),u=be("0"),p=Qr(()=>o.value?o.value.reduce((E,y)=>(E[y.number]=y,E),{}):{}),g=E=>{u.value=String(E),d.value=!0};function M(){d.value=!1}function m(E){var y;(y=p.value[u.value])!=null&&y.isActive&&(g(E),a())}function f(E){const y=parseInt(u.value),L=Object.keys(p.value).map(Number).sort((F,b)=>F-b),C=L.indexOf(y);if(C===-1)return;let w=C+E;w<0?w=L.length-1:w>=L.length&&(w=0),u.value=String(L[w])}const A=Qr(()=>{const E=p.value[u.value];return E?{id:E.number,title:E.name,owner:E.owner,assets:E.assets.map(y=>y.url),description:E.description}:{id:"0",title:"",owner:"",description:""}});return Er(()=>{window.addEventListener("keydown",c),window.addEventListener("keydown",h),e.value||setTimeout(()=>{l()},1e3)}),br(()=>{window.removeEventListener("keydown",c),window.removeEventListener("keydown",h)}),(E,y)=>{var L;return fn(),xi("section",{class:fe(E.$style.overflowContainer)},[xe("div",{class:fe([E.$style.map,E.$style.container])},[xe("button",{class:fe(E.$style.toggleButton),onClick:n,title:e.value?"Switch to 2D":"Switch to 3D"},Ds(e.value?"2D":"3D"),11,o3),e.value?(fn(),Pa(Pp,{key:"3d-map",ref_key:"mapRef",ref:t,"onHover:path":g,"onClick:path":m},null,512)):(fn(),xi("div",{class:fe(E.$style.map2DContainer),key:"2d-map"},[Ca(Bp,{ref_key:"mapRef",ref:t,"onHover:path":g,"onClick:path":m},null,512)],2)),pl(Ca(s3,{isModalOpen:d.value,isOverlayOpen:Xe(s),rustico:A.value,"onClose:modal":M,"onClose:overlay":Xe(r),"onNavigate:rustico":f},null,8,["isModalOpen","isOverlayOpen","rustico","onClose:overlay"]),[[ml,(L=p.value[u.value])==null?void 0:L.isActive]])],2)],2)}}}),c3="_overflowContainer_1il6l_1",h3="_container_1il6l_7",d3="_title_1il6l_16",u3="_flag_1il6l_25",f3="_close_1il6l_34",p3="_toggleButton_1il6l_43",m3={overflowContainer:c3,container:h3,title:d3,flag:u3,close:f3,toggleButton:p3},g3={$style:m3},M3=Gs(l3,[["__cssModules",g3]]);export{M3 as default};
