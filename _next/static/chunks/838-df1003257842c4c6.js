"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{3566:function(e,t,r){r.d(t,{Q:function(){return m}});var i=r(2988),a=r(2265),o=r(7776),n=r(8118);let l=parseInt(o.REVISION.replace(/\D+/g,""));class s extends o.ShaderMaterial{constructor(e=new o.Vector2){super({uniforms:{inputBuffer:new o.Uniform(null),depthBuffer:new o.Uniform(null),resolution:new o.Uniform(new o.Vector2),texelSize:new o.Uniform(new o.Vector2),halfTexelSize:new o.Uniform(new o.Vector2),kernel:new o.Uniform(0),scale:new o.Uniform(1),cameraNear:new o.Uniform(0),cameraFar:new o.Uniform(1),minDepthThreshold:new o.Uniform(0),maxDepthThreshold:new o.Uniform(1),depthScale:new o.Uniform(0),depthToBlurRatioBias:new o.Uniform(.25)},fragmentShader:`#include <common>
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
        }`,blending:o.NoBlending,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class u{constructor({gl:e,resolution:t,width:r=500,height:i=500,minDepthThreshold:a=0,maxDepthThreshold:n=1,depthScale:l=0,depthToBlurRatioBias:u=.25}){this.renderToScreen=!1,this.renderTargetA=new o.WebGLRenderTarget(t,t,{minFilter:o.LinearFilter,magFilter:o.LinearFilter,stencilBuffer:!1,depthBuffer:!1,type:o.HalfFloatType}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new s,this.convolutionMaterial.setTexelSize(1/r,1/i),this.convolutionMaterial.setResolution(new o.Vector2(r,i)),this.scene=new o.Scene,this.camera=new o.Camera,this.convolutionMaterial.uniforms.minDepthThreshold.value=a,this.convolutionMaterial.uniforms.maxDepthThreshold.value=n,this.convolutionMaterial.uniforms.depthScale.value=l,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=u,this.convolutionMaterial.defines.USE_DEPTH=l>0;let h=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),m=new Float32Array([0,0,2,0,0,2]),f=new o.BufferGeometry;f.setAttribute("position",new o.BufferAttribute(h,3)),f.setAttribute("uv",new o.BufferAttribute(m,2)),this.screen=new o.Mesh(f,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){let i,a,o;let n=this.scene,l=this.camera,s=this.renderTargetA,u=this.renderTargetB,h=this.convolutionMaterial,m=h.uniforms;m.depthBuffer.value=t.depthTexture;let f=h.kernel,v=t;for(a=0,o=f.length-1;a<o;++a)i=(1&a)==0?s:u,m.kernel.value=f[a],m.inputBuffer.value=v.texture,e.setRenderTarget(i),e.render(n,l),v=i;m.kernel.value=f[a],m.inputBuffer.value=v.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(n,l)}}class h extends o.MeshStandardMaterial{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
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
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}let m=a.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:r=256,blur:l=[0,0],minDepthThreshold:s=.9,maxDepthThreshold:m=1,depthScale:f=0,depthToBlurRatioBias:v=.25,mirror:d=0,distortion:c=1,mixContrast:p=1,distortionMap:x,reflectorOffset:_=0,...g},D)=>{(0,n.e)({MeshReflectorMaterialImpl:h});let U=(0,n.A)(({gl:e})=>e),S=(0,n.A)(({camera:e})=>e),T=(0,n.A)(({scene:e})=>e),B=(l=Array.isArray(l)?l:[l,l])[0]+l[1]>0,w=a.useRef(null);a.useImperativeHandle(D,()=>w.current,[]);let[M]=a.useState(()=>new o.Plane),[y]=a.useState(()=>new o.Vector3),[F]=a.useState(()=>new o.Vector3),[b]=a.useState(()=>new o.Vector3),[R]=a.useState(()=>new o.Matrix4),[C]=a.useState(()=>new o.Vector3(0,0,-1)),[E]=a.useState(()=>new o.Vector4),[V]=a.useState(()=>new o.Vector3),[A]=a.useState(()=>new o.Vector3),[z]=a.useState(()=>new o.Vector4),[P]=a.useState(()=>new o.Matrix4),[k]=a.useState(()=>new o.PerspectiveCamera),I=a.useCallback(()=>{var e;let t=w.current.parent||(null==(e=w.current)?void 0:e.__r3f.parent);if(!t||(F.setFromMatrixPosition(t.matrixWorld),b.setFromMatrixPosition(S.matrixWorld),R.extractRotation(t.matrixWorld),y.set(0,0,1),y.applyMatrix4(R),F.addScaledVector(y,_),V.subVectors(F,b),V.dot(y)>0))return;V.reflect(y).negate(),V.add(F),R.extractRotation(S.matrixWorld),C.set(0,0,-1),C.applyMatrix4(R),C.add(b),A.subVectors(F,C),A.reflect(y).negate(),A.add(F),k.position.copy(V),k.up.set(0,1,0),k.up.applyMatrix4(R),k.up.reflect(y),k.lookAt(A),k.far=S.far,k.updateMatrixWorld(),k.projectionMatrix.copy(S.projectionMatrix),P.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),P.multiply(k.projectionMatrix),P.multiply(k.matrixWorldInverse),P.multiply(t.matrixWorld),M.setFromNormalAndCoplanarPoint(y,F),M.applyMatrix4(k.matrixWorldInverse),E.set(M.normal.x,M.normal.y,M.normal.z,M.constant);let r=k.projectionMatrix;z.x=(Math.sign(E.x)+r.elements[8])/r.elements[0],z.y=(Math.sign(E.y)+r.elements[9])/r.elements[5],z.z=-1,z.w=(1+r.elements[10])/r.elements[14],E.multiplyScalar(2/E.dot(z)),r.elements[2]=E.x,r.elements[6]=E.y,r.elements[10]=E.z+1,r.elements[14]=E.w},[S,_]),[N,L,W,j]=a.useMemo(()=>{let i={minFilter:o.LinearFilter,magFilter:o.LinearFilter,type:o.HalfFloatType},a=new o.WebGLRenderTarget(r,r,i);a.depthBuffer=!0,a.depthTexture=new o.DepthTexture(r,r),a.depthTexture.format=o.DepthFormat,a.depthTexture.type=o.UnsignedShortType;let n=new o.WebGLRenderTarget(r,r,i),h=new u({gl:U,resolution:r,width:l[0],height:l[1],minDepthThreshold:s,maxDepthThreshold:m,depthScale:f,depthToBlurRatioBias:v}),_={mirror:d,textureMatrix:P,mixBlur:e,tDiffuse:a.texture,tDepth:a.depthTexture,tDiffuseBlur:n.texture,hasBlur:B,mixStrength:t,minDepthThreshold:s,maxDepthThreshold:m,depthScale:f,depthToBlurRatioBias:v,distortion:c,distortionMap:x,mixContrast:p,"defines-USE_BLUR":B?"":void 0,"defines-USE_DEPTH":f>0?"":void 0,"defines-USE_DISTORTION":x?"":void 0};return[a,n,h,_]},[U,l,P,r,d,B,e,t,s,m,f,v,c,x,p]);return(0,n.C)(()=>{var e;let t=w.current.parent||(null==(e=w.current)?void 0:e.__r3f.parent);if(!t)return;t.visible=!1;let r=U.xr.enabled,i=U.shadowMap.autoUpdate;I(),U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(N),U.state.buffers.depth.setMask(!0),U.autoClear||U.clear(),U.render(T,k),B&&W.render(U,N,L),U.xr.enabled=r,U.shadowMap.autoUpdate=i,t.visible=!0,U.setRenderTarget(null)}),a.createElement("meshReflectorMaterialImpl",(0,i.Z)({attach:"material",key:"key"+j["defines-USE_BLUR"]+j["defines-USE_DEPTH"]+j["defines-USE_DISTORTION"],ref:w},j,g))})},9174:function(e,t,r){r.d(t,{j:function(){return a}});var i=r(2265);function a(e,t="pointer",r="auto",a=document.body){i.useEffect(()=>{if(e)return a.style.cursor=t,()=>void(a.style.cursor=r)},[e])}}}]);