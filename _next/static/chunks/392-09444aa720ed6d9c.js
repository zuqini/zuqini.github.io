(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[392],{2585:function(e,t,r){"use strict";r.d(t,{gp:function(){return M}});var n=r(2988),i=r(7776),a=r(2265),o=r(8118),s=r(1448),l=r.n(s);function u(e){return function e(t,r,n){if(n=n||[],!r[0])return t(n);function i(i){return e(t,r.slice(1),n.concat([i]))}return"function"==typeof r[0]?r[0]({results:n,render:i}):(0,a.cloneElement)(r[0],{children:i})}(e.children,e.components)}u.propTypes={children:l().func.isRequired,components:l().arrayOf(l().oneOfType([l().element,l().func])).isRequired};let h=(e,t)=>{"updateRanges"in e?e.updateRanges[0]=t:e.updateRange=t},c=new i.Matrix4,f=new i.Matrix4,m=[],d=new i.Mesh;class v extends i.Group{constructor(){super(),this.color=new i.Color("white"),this.instance={current:void 0},this.instanceKey={current:void 0}}get geometry(){var e;return null==(e=this.instance.current)?void 0:e.geometry}raycast(e,t){let r=this.instance.current;if(!r||!r.geometry||!r.material)return;d.geometry=r.geometry;let n=r.matrixWorld,a=r.userData.instances.indexOf(this.instanceKey);if(-1!==a&&!(a>r.count)){r.getMatrixAt(a,c),f.multiplyMatrices(n,c),d.matrixWorld=f,r.material instanceof i.Material?d.material.side=r.material.side:d.material.side=r.material[0].side,d.raycast(e,m);for(let e=0,r=m.length;e<r;e++){let r=m[e];r.instanceId=a,r.object=this,t.push(r)}m.length=0}}}let p=a.createContext(null),x=new i.Matrix4,g=new i.Matrix4,_=new i.Matrix4,y=new i.Vector3,D=new i.Quaternion,S=new i.Vector3,U=a.forwardRef(({context:e,children:t,...r},i)=>{a.useMemo(()=>(0,o.e)({PositionMesh:v}),[]);let s=a.useRef();a.useImperativeHandle(i,()=>s.current,[]);let{subscribe:l,getParent:u}=a.useContext(e||p);return a.useLayoutEffect(()=>l(s),[]),a.createElement("positionMesh",(0,n.Z)({instance:u(),instanceKey:s,ref:s},r),t)}),T=a.forwardRef(({children:e,range:t,limit:r=1e3,frames:s=1/0,...l},u)=>{let[{context:c,instance:f}]=a.useState(()=>{let e=a.createContext(null);return{context:e,instance:a.forwardRef((t,r)=>a.createElement(U,(0,n.Z)({context:e},t,{ref:r})))}}),m=a.useRef(null);a.useImperativeHandle(u,()=>m.current,[]);let[d,v]=a.useState([]),[[T,M]]=a.useState(()=>{let e=new Float32Array(16*r);for(let t=0;t<r;t++)_.identity().toArray(e,16*t);return[e,new Float32Array([...Array(3*r)].map(()=>1))]});a.useEffect(()=>{m.current.instanceMatrix.needsUpdate=!0});let w=0,B=0;(0,o.C)(()=>{if(s===1/0||w<s){m.current.updateMatrix(),m.current.updateMatrixWorld(),x.copy(m.current.matrixWorld).invert(),B=Math.min(r,void 0!==t?t:r,d.length),m.current.count=B,h(m.current.instanceMatrix,{offset:0,count:16*B}),h(m.current.instanceColor,{offset:0,count:3*B});for(let e=0;e<d.length;e++){let t=d[e].current;t.matrixWorld.decompose(y,D,S),g.compose(y,D,S).premultiply(x),g.toArray(T,16*e),m.current.instanceMatrix.needsUpdate=!0,t.color.toArray(M,3*e),m.current.instanceColor.needsUpdate=!0}w++}});let b=a.useMemo(()=>({getParent:()=>m,subscribe:e=>(v(t=>[...t,e]),()=>v(t=>t.filter(t=>t.current!==e.current)))}),[]);return a.createElement("instancedMesh",(0,n.Z)({userData:{instances:d},matrixAutoUpdate:!1,ref:m,args:[null,null,0],raycast:()=>null},l),a.createElement("instancedBufferAttribute",{attach:"instanceMatrix",count:T.length/16,array:T,itemSize:16,usage:i.DynamicDrawUsage}),a.createElement("instancedBufferAttribute",{attach:"instanceColor",count:M.length/3,array:M,itemSize:3,usage:i.DynamicDrawUsage}),"function"==typeof e?a.createElement(c.Provider,{value:b},e(f)):a.createElement(p.Provider,{value:b},e))}),M=a.forwardRef(function({meshes:e,children:t,...r},i){let o=Array.isArray(e);if(!o)for(let t of Object.keys(e))e[t].isMesh||delete e[t];return a.createElement("group",{ref:i},a.createElement(u,{components:(o?e:Object.values(e)).map(({geometry:e,material:t})=>a.createElement(T,(0,n.Z)({key:e.uuid,geometry:e,material:t},r)))},r=>o?t(...r):t(Object.keys(e).filter(t=>e[t].isMesh).reduce((e,t,n)=>({...e,[t]:r[n]}),{}))))})},3566:function(e,t,r){"use strict";r.d(t,{Q:function(){return c}});var n=r(2988),i=r(2265),a=r(7776),o=r(8118);let s=parseInt(a.REVISION.replace(/\D+/g,""));class l extends a.ShaderMaterial{constructor(e=new a.Vector2){super({uniforms:{inputBuffer:new a.Uniform(null),depthBuffer:new a.Uniform(null),resolution:new a.Uniform(new a.Vector2),texelSize:new a.Uniform(new a.Vector2),halfTexelSize:new a.Uniform(new a.Vector2),kernel:new a.Uniform(0),scale:new a.Uniform(1),cameraNear:new a.Uniform(0),cameraFar:new a.Uniform(1),minDepthThreshold:new a.Uniform(0),maxDepthThreshold:new a.Uniform(1),depthScale:new a.Uniform(0),depthToBlurRatioBias:new a.Uniform(.25)},fragmentShader:`#include <common>
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
          #include <${s>=154?"colorspace_fragment":"encodings_fragment"}>
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
        }`,blending:a.NoBlending,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class u{constructor({gl:e,resolution:t,width:r=500,height:n=500,minDepthThreshold:i=0,maxDepthThreshold:o=1,depthScale:s=0,depthToBlurRatioBias:u=.25}){this.renderToScreen=!1,this.renderTargetA=new a.WebGLRenderTarget(t,t,{minFilter:a.LinearFilter,magFilter:a.LinearFilter,stencilBuffer:!1,depthBuffer:!1,type:a.HalfFloatType}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new l,this.convolutionMaterial.setTexelSize(1/r,1/n),this.convolutionMaterial.setResolution(new a.Vector2(r,n)),this.scene=new a.Scene,this.camera=new a.Camera,this.convolutionMaterial.uniforms.minDepthThreshold.value=i,this.convolutionMaterial.uniforms.maxDepthThreshold.value=o,this.convolutionMaterial.uniforms.depthScale.value=s,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=u,this.convolutionMaterial.defines.USE_DEPTH=s>0;let h=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),c=new Float32Array([0,0,2,0,0,2]),f=new a.BufferGeometry;f.setAttribute("position",new a.BufferAttribute(h,3)),f.setAttribute("uv",new a.BufferAttribute(c,2)),this.screen=new a.Mesh(f,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){let n,i,a;let o=this.scene,s=this.camera,l=this.renderTargetA,u=this.renderTargetB,h=this.convolutionMaterial,c=h.uniforms;c.depthBuffer.value=t.depthTexture;let f=h.kernel,m=t;for(i=0,a=f.length-1;i<a;++i)n=(1&i)==0?l:u,c.kernel.value=f[i],c.inputBuffer.value=m.texture,e.setRenderTarget(n),e.render(o,s),m=n;c.kernel.value=f[i],c.inputBuffer.value=m.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(o,s)}}class h extends a.MeshStandardMaterial{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
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
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}let c=i.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:r=256,blur:s=[0,0],minDepthThreshold:l=.9,maxDepthThreshold:c=1,depthScale:f=0,depthToBlurRatioBias:m=.25,mirror:d=0,distortion:v=1,mixContrast:p=1,distortionMap:x,reflectorOffset:g=0,..._},y)=>{(0,o.e)({MeshReflectorMaterialImpl:h});let D=(0,o.A)(({gl:e})=>e),S=(0,o.A)(({camera:e})=>e),U=(0,o.A)(({scene:e})=>e),T=(s=Array.isArray(s)?s:[s,s])[0]+s[1]>0,M=i.useRef(null);i.useImperativeHandle(y,()=>M.current,[]);let[w]=i.useState(()=>new a.Plane),[B]=i.useState(()=>new a.Vector3),[b]=i.useState(()=>new a.Vector3),[R]=i.useState(()=>new a.Vector3),[F]=i.useState(()=>new a.Matrix4),[E]=i.useState(()=>new a.Vector3(0,0,-1)),[C]=i.useState(()=>new a.Vector4),[A]=i.useState(()=>new a.Vector3),[P]=i.useState(()=>new a.Vector3),[O]=i.useState(()=>new a.Vector4),[V]=i.useState(()=>new a.Matrix4),[k]=i.useState(()=>new a.PerspectiveCamera),I=i.useCallback(()=>{var e;let t=M.current.parent||(null==(e=M.current)?void 0:e.__r3f.parent);if(!t||(b.setFromMatrixPosition(t.matrixWorld),R.setFromMatrixPosition(S.matrixWorld),F.extractRotation(t.matrixWorld),B.set(0,0,1),B.applyMatrix4(F),b.addScaledVector(B,g),A.subVectors(b,R),A.dot(B)>0))return;A.reflect(B).negate(),A.add(b),F.extractRotation(S.matrixWorld),E.set(0,0,-1),E.applyMatrix4(F),E.add(R),P.subVectors(b,E),P.reflect(B).negate(),P.add(b),k.position.copy(A),k.up.set(0,1,0),k.up.applyMatrix4(F),k.up.reflect(B),k.lookAt(P),k.far=S.far,k.updateMatrixWorld(),k.projectionMatrix.copy(S.projectionMatrix),V.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),V.multiply(k.projectionMatrix),V.multiply(k.matrixWorldInverse),V.multiply(t.matrixWorld),w.setFromNormalAndCoplanarPoint(B,b),w.applyMatrix4(k.matrixWorldInverse),C.set(w.normal.x,w.normal.y,w.normal.z,w.constant);let r=k.projectionMatrix;O.x=(Math.sign(C.x)+r.elements[8])/r.elements[0],O.y=(Math.sign(C.y)+r.elements[9])/r.elements[5],O.z=-1,O.w=(1+r.elements[10])/r.elements[14],C.multiplyScalar(2/C.dot(O)),r.elements[2]=C.x,r.elements[6]=C.y,r.elements[10]=C.z+1,r.elements[14]=C.w},[S,g]),[z,W,j,L]=i.useMemo(()=>{let n={minFilter:a.LinearFilter,magFilter:a.LinearFilter,type:a.HalfFloatType},i=new a.WebGLRenderTarget(r,r,n);i.depthBuffer=!0,i.depthTexture=new a.DepthTexture(r,r),i.depthTexture.format=a.DepthFormat,i.depthTexture.type=a.UnsignedShortType;let o=new a.WebGLRenderTarget(r,r,n),h=new u({gl:D,resolution:r,width:s[0],height:s[1],minDepthThreshold:l,maxDepthThreshold:c,depthScale:f,depthToBlurRatioBias:m}),g={mirror:d,textureMatrix:V,mixBlur:e,tDiffuse:i.texture,tDepth:i.depthTexture,tDiffuseBlur:o.texture,hasBlur:T,mixStrength:t,minDepthThreshold:l,maxDepthThreshold:c,depthScale:f,depthToBlurRatioBias:m,distortion:v,distortionMap:x,mixContrast:p,"defines-USE_BLUR":T?"":void 0,"defines-USE_DEPTH":f>0?"":void 0,"defines-USE_DISTORTION":x?"":void 0};return[i,o,h,g]},[D,s,V,r,d,T,e,t,l,c,f,m,v,x,p]);return(0,o.C)(()=>{var e;let t=M.current.parent||(null==(e=M.current)?void 0:e.__r3f.parent);if(!t)return;t.visible=!1;let r=D.xr.enabled,n=D.shadowMap.autoUpdate;I(),D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(z),D.state.buffers.depth.setMask(!0),D.autoClear||D.clear(),D.render(U,k),T&&j.render(D,z,W),D.xr.enabled=r,D.shadowMap.autoUpdate=n,t.visible=!0,D.setRenderTarget(null)}),i.createElement("meshReflectorMaterialImpl",(0,n.Z)({attach:"material",key:"key"+L["defines-USE_BLUR"]+L["defines-USE_DEPTH"]+L["defines-USE_DISTORTION"],ref:M},L,_))})},9174:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var n=r(2265);function i(e,t="pointer",r="auto",i=document.body){n.useEffect(()=>{if(e)return i.style.cursor=t,()=>void(i.style.cursor=r)},[e])}},9949:function(e,t,r){"use strict";var n=r(8877);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}},1448:function(e,t,r){e.exports=r(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);