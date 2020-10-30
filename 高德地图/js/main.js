window.onload=function(){
  var map=new Amap.Map("container",{
    zoom: 100,
    center:[116.44927,39.9584],
    resizeEnable: true
  })
  var marker=new AMap.Marker({
    position:new AMap.LngLat(116.44927,39.9584),
    title:"位置标题"
  })
  map.add(marker);
}
