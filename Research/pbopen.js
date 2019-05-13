javascript: u = location.href
s = document.getSelection()
t = document.title
mypb_ = `http://localhost:3000`
void open(
  `${mypb}/new?u=${u}&d=${d}&t=${t}`,
  "MyPins",
  `toolbar=no,width=800,height=900`
)
