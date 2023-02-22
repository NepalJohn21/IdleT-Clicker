const d = new Date();
d.setTime(d.getTime() + (30*24*60*60*1000));
document.cookie = "username=nepaljohn; expires=" + d + "; path=/;";
document.cookie = "visits=202; expires=" + d + "; path=/"
