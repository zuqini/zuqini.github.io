(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{5657:function(e,t,r){"use strict";r.d(t,{gp:function(){return M}});var n=r(3428),i=r(6376),a=r(2265),o=r(2955),s=r(9954),l=r(4275),u=r.n(l);function c(e){return function e(t,r,n){if(n=n||[],!r[0])return t(n);function i(i){return e(t,r.slice(1),n.concat([i]))}return"function"==typeof r[0]?r[0]({results:n,render:i}):(0,a.cloneElement)(r[0],{children:i})}(e.children,e.components)}c.propTypes={children:u().func.isRequired,components:u().arrayOf(u().oneOfType([u().element,u().func])).isRequired};let f=(e,t)=>{"updateRanges"in e?e.updateRanges[0]=t:e.updateRange=t},h=new i.Matrix4,m=new i.Matrix4,d=[],v=new i.Mesh;class p extends i.Group{constructor(){super(),this.color=new i.Color("white"),this.instance={current:void 0},this.instanceKey={current:void 0}}get geometry(){var e;return null==(e=this.instance.current)?void 0:e.geometry}raycast(e,t){let r=this.instance.current;if(!r||!r.geometry||!r.material)return;v.geometry=r.geometry;let n=r.matrixWorld,a=r.userData.instances.indexOf(this.instanceKey);if(-1!==a&&!(a>r.count)){r.getMatrixAt(a,h),m.multiplyMatrices(n,h),v.matrixWorld=m,r.material instanceof i.Material?v.material.side=r.material.side:v.material.side=r.material[0].side,v.raycast(e,d);for(let e=0,r=d.length;e<r;e++){let r=d[e];r.instanceId=a,r.object=this,t.push(r)}d.length=0}}}let x=a.createContext(null),_=new i.Matrix4,g=new i.Matrix4,y=new i.Matrix4,S=new i.Vector3,D=new i.Quaternion,U=new i.Vector3,T=a.forwardRef(({context:e,children:t,...r},i)=>{a.useMemo(()=>(0,o.e)({PositionMesh:p}),[]);let l=a.useRef(),{subscribe:u,getParent:c}=a.useContext(e||x);return a.useLayoutEffect(()=>u(l),[]),a.createElement("positionMesh",(0,n.Z)({instance:c(),instanceKey:l,ref:(0,s.Z)([i,l])},r),t)}),w=a.forwardRef(({children:e,range:t,limit:r=1e3,frames:l=1/0,...u},c)=>{let[{context:h,instance:m}]=a.useState(()=>{let e=a.createContext(null);return{context:e,instance:a.forwardRef((t,r)=>a.createElement(T,(0,n.Z)({context:e},t,{ref:r})))}}),d=a.useRef(null),[v,p]=a.useState([]),[[w,M]]=a.useState(()=>{let e=new Float32Array(16*r);for(let t=0;t<r;t++)y.identity().toArray(e,16*t);return[e,new Float32Array([...Array(3*r)].map(()=>1))]});a.useEffect(()=>{d.current.instanceMatrix.needsUpdate=!0});let B=0,b=0;(0,o.C)(()=>{if(l===1/0||B<l){d.current.updateMatrix(),d.current.updateMatrixWorld(),_.copy(d.current.matrixWorld).invert(),b=Math.min(r,void 0!==t?t:r,v.length),d.current.count=b,f(d.current.instanceMatrix,{offset:0,count:16*b}),f(d.current.instanceColor,{offset:0,count:3*b});for(let e=0;e<v.length;e++){let t=v[e].current;t.matrixWorld.decompose(S,D,U),g.compose(S,D,U).premultiply(_),g.toArray(w,16*e),d.current.instanceMatrix.needsUpdate=!0,t.color.toArray(M,3*e),d.current.instanceColor.needsUpdate=!0}B++}});let R=a.useMemo(()=>({getParent:()=>d,subscribe:e=>(p(t=>[...t,e]),()=>p(t=>t.filter(t=>t.current!==e.current)))}),[]);return a.createElement("instancedMesh",(0,n.Z)({userData:{instances:v},matrixAutoUpdate:!1,ref:(0,s.Z)([c,d]),args:[null,null,0],raycast:()=>null},u),a.createElement("instancedBufferAttribute",{attach:"instanceMatrix",count:w.length/16,array:w,itemSize:16,usage:i.DynamicDrawUsage}),a.createElement("instancedBufferAttribute",{attach:"instanceColor",count:M.length/3,array:M,itemSize:3,usage:i.DynamicDrawUsage}),"function"==typeof e?a.createElement(h.Provider,{value:R},e(m)):a.createElement(x.Provider,{value:R},e))}),M=a.forwardRef(function({meshes:e,children:t,...r},i){let o=Array.isArray(e);if(!o)for(let t of Object.keys(e))e[t].isMesh||delete e[t];return a.createElement("group",{ref:i},a.createElement(c,{components:(o?e:Object.values(e)).map(({geometry:e,material:t})=>a.createElement(w,(0,n.Z)({key:e.uuid,geometry:e,material:t},r)))},r=>o?t(...r):t(Object.keys(e).filter(t=>e[t].isMesh).reduce((e,t,n)=>({...e,[t]:r[n]}),{}))))})},7133:function(e,t,r){"use strict";r.d(t,{Q:function(){return h}});var n=r(3428),i=r(2265),a=r(6376),o=r(2955),s=r(9954);let l=parseInt(a.REVISION.replace(/\D+/g,""));class u extends a.ShaderMaterial{constructor(e=new a.Vector2){super({uniforms:{inputBuffer:new a.Uniform(null),depthBuffer:new a.Uniform(null),resolution:new a.Uniform(new a.Vector2),texelSize:new a.Uniform(new a.Vector2),halfTexelSize:new a.Uniform(new a.Vector2),kernel:new a.Uniform(0),scale:new a.Uniform(1),cameraNear:new a.Uniform(0),cameraFar:new a.Uniform(1),minDepthThreshold:new a.Uniform(0),maxDepthThreshold:new a.Uniform(1),depthScale:new a.Uniform(0),depthToBlurRatioBias:new a.Uniform(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${l>=154?"colorspace_fragment":"encodings_fragment"}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:a.NoBlending,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class c{constructor({gl:e,resolution:t,width:r=500,height:n=500,minDepthThreshold:i=0,maxDepthThreshold:o=1,depthScale:s=0,depthToBlurRatioBias:l=.25}){this.renderToScreen=!1,this.renderTargetA=new a.WebGLRenderTarget(t,t,{minFilter:a.LinearFilter,magFilter:a.LinearFilter,stencilBuffer:!1,depthBuffer:!1,type:a.HalfFloatType}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new u,this.convolutionMaterial.setTexelSize(1/r,1/n),this.convolutionMaterial.setResolution(new a.Vector2(r,n)),this.scene=new a.Scene,this.camera=new a.Camera,this.convolutionMaterial.uniforms.minDepthThreshold.value=i,this.convolutionMaterial.uniforms.maxDepthThreshold.value=o,this.convolutionMaterial.uniforms.depthScale.value=s,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=l,this.convolutionMaterial.defines.USE_DEPTH=s>0;let c=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),f=new Float32Array([0,0,2,0,0,2]),h=new a.BufferGeometry;h.setAttribute("position",new a.BufferAttribute(c,3)),h.setAttribute("uv",new a.BufferAttribute(f,2)),this.screen=new a.Mesh(h,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){let n,i,a;let o=this.scene,s=this.camera,l=this.renderTargetA,u=this.renderTargetB,c=this.convolutionMaterial,f=c.uniforms;f.depthBuffer.value=t.depthTexture;let h=c.kernel,m=t;for(i=0,a=h.length-1;i<a;++i)n=(1&i)==0?l:u,f.kernel.value=h[i],f.inputBuffer.value=m.texture,e.setRenderTarget(n),e.render(o,s),m=n;f.kernel.value=h[i],f.inputBuffer.value=m.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(o,s)}}class f extends a.MeshStandardMaterial{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}let h=i.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:r=256,blur:l=[0,0],minDepthThreshold:u=.9,maxDepthThreshold:h=1,depthScale:m=0,depthToBlurRatioBias:d=.25,mirror:v=0,distortion:p=1,mixContrast:x=1,distortionMap:_,reflectorOffset:g=0,...y},S)=>{(0,o.e)({MeshReflectorMaterialImpl:f});let D=(0,o.A)(({gl:e})=>e),U=(0,o.A)(({camera:e})=>e),T=(0,o.A)(({scene:e})=>e),w=(l=Array.isArray(l)?l:[l,l])[0]+l[1]>0,M=i.useRef(null),[B]=i.useState(()=>new a.Plane),[b]=i.useState(()=>new a.Vector3),[R]=i.useState(()=>new a.Vector3),[F]=i.useState(()=>new a.Vector3),[E]=i.useState(()=>new a.Matrix4),[C]=i.useState(()=>new a.Vector3(0,0,-1)),[A]=i.useState(()=>new a.Vector4),[O]=i.useState(()=>new a.Vector3),[P]=i.useState(()=>new a.Vector3),[k]=i.useState(()=>new a.Vector4),[V]=i.useState(()=>new a.Matrix4),[I]=i.useState(()=>new a.PerspectiveCamera),W=i.useCallback(()=>{var e;let t=M.current.parent||(null==(e=M.current)?void 0:e.__r3f.parent);if(!t||(R.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(U.matrixWorld),E.extractRotation(t.matrixWorld),b.set(0,0,1),b.applyMatrix4(E),R.addScaledVector(b,g),O.subVectors(R,F),O.dot(b)>0))return;O.reflect(b).negate(),O.add(R),E.extractRotation(U.matrixWorld),C.set(0,0,-1),C.applyMatrix4(E),C.add(F),P.subVectors(R,C),P.reflect(b).negate(),P.add(R),I.position.copy(O),I.up.set(0,1,0),I.up.applyMatrix4(E),I.up.reflect(b),I.lookAt(P),I.far=U.far,I.updateMatrixWorld(),I.projectionMatrix.copy(U.projectionMatrix),V.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),V.multiply(I.projectionMatrix),V.multiply(I.matrixWorldInverse),V.multiply(t.matrixWorld),B.setFromNormalAndCoplanarPoint(b,R),B.applyMatrix4(I.matrixWorldInverse),A.set(B.normal.x,B.normal.y,B.normal.z,B.constant);let r=I.projectionMatrix;k.x=(Math.sign(A.x)+r.elements[8])/r.elements[0],k.y=(Math.sign(A.y)+r.elements[9])/r.elements[5],k.z=-1,k.w=(1+r.elements[10])/r.elements[14],A.multiplyScalar(2/A.dot(k)),r.elements[2]=A.x,r.elements[6]=A.y,r.elements[10]=A.z+1,r.elements[14]=A.w},[U,g]),[j,z,L,N]=i.useMemo(()=>{let n={minFilter:a.LinearFilter,magFilter:a.LinearFilter,type:a.HalfFloatType},i=new a.WebGLRenderTarget(r,r,n);i.depthBuffer=!0,i.depthTexture=new a.DepthTexture(r,r),i.depthTexture.format=a.DepthFormat,i.depthTexture.type=a.UnsignedShortType;let o=new a.WebGLRenderTarget(r,r,n),s=new c({gl:D,resolution:r,width:l[0],height:l[1],minDepthThreshold:u,maxDepthThreshold:h,depthScale:m,depthToBlurRatioBias:d}),f={mirror:v,textureMatrix:V,mixBlur:e,tDiffuse:i.texture,tDepth:i.depthTexture,tDiffuseBlur:o.texture,hasBlur:w,mixStrength:t,minDepthThreshold:u,maxDepthThreshold:h,depthScale:m,depthToBlurRatioBias:d,distortion:p,distortionMap:_,mixContrast:x,"defines-USE_BLUR":w?"":void 0,"defines-USE_DEPTH":m>0?"":void 0,"defines-USE_DISTORTION":_?"":void 0};return[i,o,s,f]},[D,l,V,r,v,w,e,t,u,h,m,d,p,_,x]);return(0,o.C)(()=>{var e;let t=M.current.parent||(null==(e=M.current)?void 0:e.__r3f.parent);if(!t)return;t.visible=!1;let r=D.xr.enabled,n=D.shadowMap.autoUpdate;W(),D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(j),D.state.buffers.depth.setMask(!0),D.autoClear||D.clear(),D.render(T,I),w&&L.render(D,j,z),D.xr.enabled=r,D.shadowMap.autoUpdate=n,t.visible=!0,D.setRenderTarget(null)}),i.createElement("meshReflectorMaterialImpl",(0,n.Z)({attach:"material",key:"key"+N["defines-USE_BLUR"]+N["defines-USE_DEPTH"]+N["defines-USE_DISTORTION"],ref:(0,s.Z)([M,S])},N,y))})},5867:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var n=r(2265);function i(e,t="pointer",r="auto",i=document.body){n.useEffect(()=>{if(e)return i.style.cursor=t,()=>void(i.style.cursor=r)},[e])}},622:function(e,t,r){"use strict";var n=r(2265),i=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,l={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:i,type:e,key:u,ref:c,props:l,_owner:o.current}}t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)},3018:function(e,t,r){"use strict";var n=r(1289);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}},4275:function(e,t,r){e.exports=r(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);