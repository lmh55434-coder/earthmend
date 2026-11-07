from PIL import Image, ImageDraw, ImageFilter
import numpy as np, sys
src=Image.open('src.png').convert('RGB'); A=np.asarray(src).astype(float); H,W=A.shape[:2]
art=Image.open(sys.argv[1] if len(sys.argv)>1 else 'xmas-card.png').convert('RGB')
# ---- 1. clean the digitally added text/leaf off the barrel, using clean barrel rows
xl=lambda y: 645-0.0116*(y-680); xr=lambda y: 727-0.0107*(y-680)
P=A.copy()
def refill(y0,y1,s0,s1):
    n=s1-s0
    for i,y in enumerate(range(y0,y1)):
        ys=s0+(i%n); dx=-0.0116*(ys-y)
        for x in range(int(xl(y))+1,int(xr(y))):
            P[y,x]=A[ys,int(round(x+dx))]
refill(746,846,688,746)     # leaf
refill(1112,1398,1400,1700) # red "Verdant Finance"
# ---- 2. masks (4x supersampled)
S=4
def mask(polys,rects=()):
    m=Image.new('L',(W*S,H*S),0); d=ImageDraw.Draw(m)
    for p in polys: d.polygon([(x*S,y*S) for x,y in p],fill=255)
    for r in rects: d.rectangle([v*S for v in r],fill=0)
    return np.asarray(m.resize((W,H),Image.LANCZOS)).astype(float)/255
quad=[(405,160),(975,168),(950,1878),(388,1866)]
pen_poly=[(617,186),(753,186),(753,305),(749,325),(742,345),(738,365),(737,420),(737,678),(727,680),
          (715,1795),(713,1808),(706,1830),(692,1848),(673,1855),(655,1849),(641,1832),(635,1810),(632,1798),
          (645,680),(637,678),(636,420),(633,365),(626,340),(620,320),(617,305)]
tab=(585,848,795,1112)
card=mask([quad])
pen=mask([pen_poly],[tab])
# ---- 3. warp the artwork into the card quad (perspective)
def coeffs(dst,srcpts):
    M=[];B=[]
    for (x,y),(u,v) in zip(dst,srcpts):
        M.append([x,y,1,0,0,0,-u*x,-u*y]); B.append(u)
        M.append([0,0,0,x,y,1,-v*x,-v*y]); B.append(v)
    return np.linalg.solve(np.array(M,float),np.array(B,float))
aw,ah=art.size
c=coeffs(quad,[(0,0),(aw,0),(aw,ah),(0,ah)])
warped=np.asarray(art.transform((W,H),Image.PERSPECTIVE,tuple(c),Image.BICUBIC)).astype(float)
# match the photo: gentle light falloff, slight softness and grain
yy,xx=np.mgrid[0:H,0:W]
light=1.04-0.10*(yy-160)/1700+0.03*(xx-400)/570
warped=warped*light[...,None]*np.array([1.0,0.985,0.96])
warped=np.asarray(Image.fromarray(warped.clip(0,255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7))).astype(float)
warped+=np.random.default_rng(3).normal(0,3.2,warped.shape)
out=A*(1-card[...,None])+warped*card[...,None]
# ---- 4. pen shadow on the card, then the pen itself
penfull=mask([pen_poly])
sh=np.roll(np.roll(penfull,12,axis=1),8,axis=0)
sh=np.asarray(Image.fromarray((sh*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(11))).astype(float)/255
tabm=mask([[(tab[0],tab[1]),(tab[2],tab[1]),(tab[2],tab[3]),(tab[0],tab[3])]])
shadow=sh*card*(1-penfull)*0.5*(1-tabm)
# the tab is a raised paper flap: a touch lighter, with a soft shadow just below it on the card
tabsh=np.zeros((H,W)); tabsh[tab[3]:tab[3]+10,tab[0]+4:tab[2]+6]=np.linspace(0.30,0,10)[:,None]
shadow=np.maximum(shadow,tabsh*card*(1-penfull))
out=out*(1-shadow[...,None])
out=out*(1-pen[...,None])+P*pen[...,None]
out=out*(1+0.05*tabm[...,None])
# tab: soft shadow it casts onto the pen just below it, and its paper edges
below=np.zeros((H,W)); below[tab[3]:tab[3]+16,tab[0]:tab[2]]=np.linspace(0.45,0,16)[:,None]
below=below*penfull
out=out*(1-below[...,None])
for y,col,alpha in [(tab[1],0,0.35),(tab[3],0,0.45),(tab[1]+1,255,0.12)]:
    out[y,tab[0]:tab[2]]=out[y,tab[0]:tab[2]]*(1-alpha)+col*alpha
Image.fromarray(out.clip(0,255).astype(np.uint8)).save('xmas-mockup.png')
print('ok')
