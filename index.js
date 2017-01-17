const add=(a,b)=>{if(b===void 0){return c=>add(a,c);}return a+b;},adjust=(d,e,f)=>{if(e===void 0){return(g,h)=>adjust(d,g,h);}else if(f===void 0){return j=>adjust(d,e,j);}return f.map((k,l)=>{if(l===e){return d(f[e]);}return k;});},any=(m,n)=>{if(n===void 0){return o=>any(m,o);}let p=0;while(p<n.length){if(m(n[p])){return!0;}p++;}return!1;},append=(q,r)=>{if(r===void 0){return s=>append(q,s);}const t=r;t.unshift(q);return t;},isFunction=u=>typeof u==="function";function compose(){const v=arguments;let w=v.length;while(w--){if(!isFunction(v[w])){throw new TypeError();}}return function(){let x=arguments;const y=v.length;while(w--){x=[v[y].apply(this,x)];}return x[0];};}const contains=(z,A)=>{if(A===void 0){return B=>contains(z,B);}return any(C=>z===C,A);},filter=(D,E)=>{if(E===void 0){return F=>filter(D,F);}let G=-1,H=0;const I=E===null?0:E.length,J=[];while(++G<I){const K=E[G];if(D(K)){J[H++]=K;}}return J;},find=(L,M)=>{if(M===void 0){return N=>find(L,N);}return M.find(L);},findIndex=(O,P)=>{if(P===void 0){return Q=>findIndex(O,Q);}return P.findIndex(O);},flatten=(R,S)=>{S=S===void 0?[]:S;for(let i=0;i<R.length;i++){if(Array.isArray(R[i])){flatten(R[i],S);}else{S.push(R[i]);}}return S;},drop=(T,U)=>{if(U===void 0){return V=>drop(T,V);}const W=U;return W.slice(T);},dropLast=(X,Y)=>{if(Y===void 0){return Z=>dropLast(X,Z);}const a1=Y;return a1.slice(0,-X);},equals=(a,b)=>{if(b===void 0){return b1=>equals(a,b1);}else if(a===b){return a!==0||1/a===1/b;}const c1=type(a);if(c1!==type(b)){return!1;}if(c1==="Array"){const d1=a,e1=b;return d1.sort().toString()===e1.sort().toString();}if(c1==="Object"){const f1=Object.keys(a);if(f1.length===Object.keys(b).length){if(f1.length===0){return!0;}let g1=!0;f1.map(h1=>{if(g1){const i1=type(a[h1]),j1=type(b[h1]);if(i1===j1){if(i1==="Object"){if(Object.keys(a[h1]).length===Object.keys(b[h1]).length){if(Object.keys(a[h1]).length!==0){if(!equals(a[h1],b[h1])){g1=!1;}}}else{g1=!1;}}else if(!equals(a[h1],b[h1])){g1=!1;}}else{g1=!1;}}});return g1;}}return!1;},head=k1=>dropLast(k1.length-1,k1),indexOf=(l1,m1)=>{if(m1===void 0){return n1=>indexOf(l1,n1);}return m1.indexOf(l1);},init=o1=>dropLast(1,o1),join=(p1,q1)=>{if(q1===void 0){return r1=>join(p1,r1);}return q1.join(p1);},map=(fn,t1)=>{if(t1===void 0){return u1=>map(fn,u1);}return t1.map(fn);},last=v1=>v1[v1.length-1],length=w1=>w1.length,match=(x1,y1)=>{if(y1===void 0){return z1=>match(x1,z1);}const A1=y1.match(x1);return A1===null?[]:A1;},merge=(B1,C1)=>{if(C1===void 0){return D1=>merge(B1,D1);}return Object.assign({},B1,C1);},omit=(E1,F1)=>{if(F1===void 0){return G1=>omit(E1,G1);}const H1={};for(key in F1){if(!E1.includes(key)){H1[key]=F1[key];}}return H1;},path=(I1,J1)=>{if(J1===void 0){return K1=>path(I1,K1);}let L1=J1,M1=0;while(M1<I1.length){if(L1===null){return void 0;}L1=L1[I1[M1]];M1++;}return L1;},prepend=(N1,O1)=>{if(O1===void 0){return P1=>prepend(N1,P1);}const Q1=O1;Q1.push(N1);return Q1;},pick=(R1,S1)=>{if(S1===void 0){return T1=>pick(R1,T1);}const U1={};for(key in S1){if(R1.includes(key)){U1[key]=S1[key];}}return U1;},prop=(V1,W1)=>{if(W1===void 0){return X1=>prop(V1,X1);}return W1[V1];},propEq=(Y1,Z1,a2)=>{if(Z1===void 0){return(b2,c2)=>propEq(Y1,b2,c2);}else if(a2===void 0){return d2=>propEq(Y1,Z1,d2);}return a2[Y1]===Z1;},range=(e2,f2)=>{const g2=[];for(let i=e2;i<f2;i++){g2.push(i);}return g2;},repeat=(a,h2)=>{if(h2===void 0){return i2=>repeat(a,i2);}const j2=range(0,h2);return j2.fill(a);},replace=(k2,l2,m2)=>{if(l2===void 0){return(n2,o2)=>replace(k2,n2,o2);}else if(m2===void 0){return p2=>replace(k2,l2,p2);}return m2.replace(k2,l2);},subtract=(a,b)=>{if(b===void 0){return c=>subtract(a,c);}return a-b;},sort=(fn,r2)=>{if(r2===void 0){return s2=>sort(fn,s2);}const t2=r2;return t2.sort(fn);},sortBy=(fn,v2)=>{if(v2===void 0){return w2=>sortBy(fn,w2);}const x2=v2;return x2.sort((a,b)=>{const y2=fn(a),z2=fn(b);return y2<z2?-1:y2>z2?1:0;});},split=(A2,B2)=>{if(B2===void 0){return C2=>split(A2,C2);}return B2.split(A2);},splitEvery=(D2,a)=>{if(a===void 0){return E2=>splitEvery(D2,E2);}D2=D2>1?D2:1;const F2=[];let G2=0;while(G2<a.length){F2.push(a.slice(G2,G2+=D2));}return F2;},tail=H2=>drop(1,H2),take=(I2,J2)=>{if(J2===void 0){return K2=>take(I2,K2);}const L2=J2;return L2.slice(0,I2);},takeLast=(M2,N2)=>{if(N2===void 0){return O2=>dropLast(M2,O2);}const P2=N2;M2=M2>P2.length?P2.length:M2;return P2.slice(P2.length-M2);},toLower=a=>a.toLowerCase(),toUpper=a=>a.toUpperCase(),test=(Q2,R2)=>{if(R2===void 0){return S2=>test(Q2,S2);}return R2.search(Q2)===-1?!1:!0;},trim=T2=>T2.trim(),type=a=>{if(a===null){return"Null";}else if(Array.isArray(a)){return"Array";}else if(typeof a==="boolean"){return"Boolean";}else if(typeof a==="number"){return"Number";}else if(typeof a==="string"){return"String";}else if(a===void 0){return"Undefined";}else if(a instanceof RegExp){return"RegExp";}return"Object";},values=U2=>{const V2=[];for(key in U2){V2.push(U2[key]);}return V2;},uniq=W2=>{const X2=[];return W2.filter(Y2=>{if(X2.includes(Y2)){return!1;}X2.push(Y2);return!0;});},update=(Z2,a3,b3)=>{if(a3===void 0){return(c3,d3)=>update(Z2,c3,d3);}else if(b3===void 0){return e3=>update(Z2,a3,e3);}return b3.fill(Z2,a3,a3+1);};module.exports.add=add;module.exports.adjust=adjust;module.exports.any=any;module.exports.append=append;module.exports.compose=compose;module.exports.contains=contains;module.exports.drop=drop;module.exports.dropLast=dropLast;module.exports.equals=equals;module.exports.filter=filter;module.exports.find=find;module.exports.findIndex=findIndex;module.exports.flatten=flatten;module.exports.head=head;module.exports.indexOf=indexOf;module.exports.init=init;module.exports.join=join;module.exports.last=last;module.exports.length=length;module.exports.map=map;module.exports.match=match;module.exports.merge=merge;module.exports.omit=omit;module.exports.path=path;module.exports.pick=pick;module.exports.prepend=prepend;module.exports.prop=prop;module.exports.propEq=propEq;module.exports.range=range;module.exports.repeat=repeat;module.exports.replace=replace;module.exports.sort=sort;module.exports.sortBy=sortBy;module.exports.split=split;module.exports.splitEvery=splitEvery;module.exports.subtract=subtract;module.exports.tail=tail;module.exports.take=take;module.exports.takeLast=takeLast;module.exports.test=test;module.exports.toLower=toLower;module.exports.toUpper=toUpper;module.exports.trim=trim;module.exports.type=type;module.exports.uniq=uniq;module.exports.update=update;module.exports.values=values;